import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';
import urlJoin from 'url-join';
import {
  Button,
  ClearFilterButton,
  TypeToFilter,
  TypeToFilterInputWrapper,
} from '@basalt/bedrock-atoms';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import PlaygroundEditForm from './playground-edit-form';
import {
  PatternListWrapper,
  PatternListItemWrapper,
  PatternListItemThumb,
  PatternListItemDescription,
  PlaygroundStyledSchemaForm,
} from './playground.styles';

// Export of allowed sidebarContent states
export const SIDEBAR_DEFAULT = 'default';
export const SIDEBAR_FORM = 'form';
export const SIDEBAR_PATTERNS = 'patterns';

class PlaygroundSidebarPatternListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: urlJoin(
        props.context.settings.patternIconBasePath,
        `${props.pattern.id}.svg`,
      ),
    };
    this.handleMissingImg = this.handleMissingImg.bind(this);
    this.defaultImgPath = urlJoin(
      this.props.context.settings.patternIconBasePath,
      'default.svg',
    );
  }

  handleMissingImg() {
    console.info(
      `Could not find image for ${this.props.pattern.id} at "${
        this.state.imgSrc
      }", using default image instead.`,
    );
    this.setState({
      imgSrc: this.defaultImgPath,
    });
  }

  render() {
    const { enablePatternIcons } = this.props.context.settings;
    return (
      <PatternListItemWrapper
        key={this.props.pattern.id}
        thumb={enablePatternIcons}
        type="button"
      >
        <div
          role="button"
          tabIndex="0"
          onKeyPress={() => this.props.handleAddSlice(this.props.pattern.id)}
          onClick={() => this.props.handleAddSlice(this.props.pattern.id)}
        >
          <h5>{this.props.pattern.meta.title}</h5>
          {enablePatternIcons ? (
            <PatternListItemThumb
              src={
                this.props.pattern.meta.hasIcon
                  ? this.state.imgSrc
                  : this.defaultImgPath
              }
              onError={this.handleMissingImg}
              alt={this.props.pattern.meta.title}
            />
          ) : (
            <PatternListItemDescription>
              {this.props.pattern.meta.description}
            </PatternListItemDescription>
          )}
        </div>
        <Link
          target="_blank"
          to={`/patterns/${this.props.pattern.id}`}
          title="Open component details in new window"
        >
          Details <FaExternalLinkAlt size={8} />
        </Link>
      </PatternListItemWrapper>
    );
  }
}

function PlaygroundSidebar(props) {
  if (props.sidebarContent === SIDEBAR_FORM) {
    const { slices, editFormSliceId, editFormSchema, editFormUiSchema } = props;
    return (
      <PlaygroundEditForm
        schema={editFormSchema}
        uiSchema={editFormUiSchema}
        data={slices.find(s => s.id === editFormSliceId).data}
        handleChange={data => props.handleEditFormChange(data)}
        handleError={console.error}
        handleHideEditForm={props.handleHideEditForm}
        handleClearData={data => props.handleClearData(data)}
      />
    );
  }
  if (props.sidebarContent === SIDEBAR_PATTERNS) {
    const patterns = props.patterns
      .filter(pattern => pattern.meta.uses.includes('inSlice'))
      .filter(pattern => pattern.id !== 'site-footer')
      .filter(pattern => pattern.id !== 'site-header');
    const items =
      props.filterTerm === ''
        ? patterns
        : patterns.filter(
            item =>
              item.meta.title
                .toLowerCase()
                .search(props.filterTerm.toLowerCase()) !== -1,
          );

    return (
      <div>
        <h4>Patterns</h4>
        <TypeToFilter>
          <h6 className="eyebrow">Filter List</h6>
          <TypeToFilterInputWrapper>
            <input
              type="text"
              className="type-to-filter"
              placeholder="Type to filter..."
              value={props.filterTerm}
              onChange={event => props.handleFilterChange(event)}
            />
            <ClearFilterButton
              role="button"
              onClick={props.handleFilterReset}
              onKeyPress={props.handleFilterReset}
              isVisible={!!props.filterTerm}
            >
              <FaTimes />
            </ClearFilterButton>
          </TypeToFilterInputWrapper>
        </TypeToFilter>
        <PatternListWrapper>
          {items.map(pattern => (
            <PlaygroundSidebarPatternListItem
              key={pattern.id}
              pattern={pattern}
              context={props.context}
              handleAddSlice={props.handleAddSlice}
            />
          ))}
        </PatternListWrapper>
        <Button
          onClick={props.handleCancelAddSlice}
          onKeyPress={props.handleCancelAddSlice}
          type="button"
          className="button button--color-white button--size-small"
        >
          Cancel
        </Button>
      </div>
    );
  }
  // if (props.sidebarContent === SIDEBAR_DEFAULT or anything else)
  return (
    <div>
      <h4>Playground</h4>
      <PlaygroundStyledSchemaForm
        onChange={({ formData }) => props.handleMetaFormChange(formData)}
        formData={props.metaFormData}
        schema={{
          title: 'Metadata',
          type: 'object',
          properties: {
            title: {
              title: 'Example Title',
              type: 'string',
            },
            description: {
              title: 'Description',
              type: 'string',
            },
            hasVisibleControls: {
              title: 'Show Edit Controls',
              type: 'boolean',
              default: true,
            },
          },
        }}
        uiSchema={{
          description: {
            'ui:widget': 'textarea',
            'ui:options': {
              rows: 10,
            },
          },
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          type="submit"
          onKeyPress={props.handleSave}
          onClick={props.handleSave}
          primary
        >
          Save*
        </Button>
        <Link to="/examples">Back</Link>
      </div>
      <p>
        <br />
        <small>* Warning: server unresponsive for ~3s upon save</small>
      </p>
      {/* @todo Fix unresponsive server triggered by save. Since this writes to the JSON files in `server/data/examples/*.json` and the `watch:server` task watches that directory for changes, it cause server to restart. It can't be fixed by just moving the files: cause then those files are cached. */}
    </div>
  );
}

PlaygroundSidebar.propTypes = {
  editFormSchema: PropTypes.object.isRequired,
  editFormUiSchema: PropTypes.object.isRequired,
  editFormSliceId: PropTypes.string.isRequired,
  filterTerm: PropTypes.string.isRequired,
  handleAddSlice: PropTypes.func.isRequired,
  handleEditFormChange: PropTypes.func.isRequired,
  handleClearData: PropTypes.func.isRequired,
  handleCancelAddSlice: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  handleFilterReset: PropTypes.func.isRequired,
  handleHideEditForm: PropTypes.func.isRequired,
  handleMetaFormChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  metaFormData: PropTypes.object.isRequired,
  patterns: PropTypes.arrayOf(PropTypes.object).isRequired,
  sidebarContent: PropTypes.string.isRequired,
  slices: PropTypes.arrayOf(PropTypes.object).isRequired,
  context: contextPropTypes.isRequired,
};

PlaygroundSidebarPatternListItem.propTypes = {
  pattern: PropTypes.object.isRequired,
  handleAddSlice: PropTypes.func.isRequired,
  context: contextPropTypes.isRequired,
};

export default connectToContext(PlaygroundSidebar);
