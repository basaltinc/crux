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
import { FaExternalLinkAlt } from 'react-icons/fa';
import PlaygroundEditForm from './playground-edit-form';
import {
  PatternListWrapper,
  PatternListItemWrapper,
  PatternListItemThumb,
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
    return (
      <PatternListItemWrapper key={this.props.pattern.id} type="button">
        <div role="button" tabIndex="0">
          <h5>{this.props.pattern.title}</h5>
          <PatternListItemThumb
            src={
              this.props.pattern.hasIcon
                ? this.state.imgSrc
                : this.defaultImgPath
            }
            onError={this.handleMissingImg}
            onKeyPress={() => this.props.handleAddSlice(this.props.pattern.id)}
            onClick={() => this.props.handleAddSlice(this.props.pattern.id)}
            alt={this.props.pattern.title}
          />
        </div>
        <Link
          target="_blank"
          to={`/patterns/components/${this.props.pattern.id}`}
          title="Open component details in new window"
        >
          Details <FaExternalLinkAlt size={8} />
        </Link>
      </PatternListItemWrapper>
    );
  }
}

class PlaygroundSidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.sidebarContent === SIDEBAR_FORM) {
      const {
        slices,
        editFormSliceId,
        editFormSchema,
        editFormUiSchema,
      } = this.props;
      return (
        <PlaygroundEditForm
          schema={editFormSchema}
          uiSchema={editFormUiSchema}
          data={slices.find(s => s.id === editFormSliceId).data}
          handleChange={data => this.props.handleEditFormChange(data)}
          handleError={console.error}
          handleHideEditForm={this.props.handleHideEditForm}
          handleClearData={data => this.props.handleClearData(data)}
        />
      );
    }
    if (this.props.sidebarContent === SIDEBAR_PATTERNS) {
      const patterns = this.props.patterns
        .filter(pattern => pattern.uses.includes('inSlice'))
        .filter(pattern => pattern.id !== 'site-footer')
        .filter(pattern => pattern.id !== 'site-header');
      const items =
        this.props.filterTerm === ''
          ? patterns
          : patterns.filter(
              item =>
                item.title
                  .toLowerCase()
                  .search(this.props.filterTerm.toLowerCase()) !== -1,
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
                value={this.props.filterTerm}
                onChange={event => this.props.handleFilterChange(event)}
              />
              <ClearFilterButton
                role="button"
                onClick={this.props.handleFilterReset}
                onKeyPress={this.props.handleFilterReset}
                isVisible={!!this.props.filterTerm}
              >
                <i className="icon--close" />
              </ClearFilterButton>
            </TypeToFilterInputWrapper>
          </TypeToFilter>
          <PatternListWrapper>
            {items.map(pattern => (
              <PlaygroundSidebarPatternListItem
                key={pattern.id}
                pattern={pattern}
                context={this.props.context}
                handleAddSlice={this.props.handleAddSlice}
              />
            ))}
          </PatternListWrapper>
          <Button
            onClick={this.props.handleCancelAddSlice}
            onKeyPress={this.props.handleCancelAddSlice}
            type="button"
            className="button button--color-white button--size-small"
          >
            Cancel
          </Button>
        </div>
      );
    }
    // if (this.props.sidebarContent === SIDEBAR_DEFAULT or anything else)
    return (
      <div>
        <h4>Playground</h4>
        <PlaygroundStyledSchemaForm
          onChange={({ formData }) => this.props.handleMetaFormChange(formData)}
          formData={this.props.metaFormData}
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
            onKeyPress={this.props.handleSave}
            onClick={this.props.handleSave}
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
