import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ClearFilterButton,
  TypeToFilter,
  TypeToFilterInputWrapper,
} from '@basalt/bedrock-atoms';
import { Link } from 'react-router-dom';
import PlaygroundEditForm from './playground-edit-form';
import { SIDEBAR_FORM, SIDEBAR_PATTERNS } from './index';
import {
  PatternListItemWrapper,
  PlaygroundStyledSchemaForm,
} from './playground.styles';

class PlaygroundSidebar extends Component {
  constructor(props) {
    super(props);
    this.renderPatternListItem = this.renderPatternListItem.bind(this);
  }

  renderPatternListItem(pattern) {
    return (
      <PatternListItemWrapper key={pattern.id} type="button">
        <Link to={`/patterns/components/${pattern.id}`}>View Details</Link>
        <div
          role="button"
          tabIndex="0"
          onKeyPress={() => this.props.handleAddSlice(pattern.id)}
          onClick={() => this.props.handleAddSlice(pattern.id)}
        >
          <h5 style={{ marginBottom: '0' }}>{pattern.title}</h5>
          <img
            src={`/assets/images/pattern-thumbnails/${pattern.id}.svg`}
            alt={pattern.title}
          />
        </div>
      </PatternListItemWrapper>
    );
  }

  render() {
    if (this.props.sidebarContent === SIDEBAR_FORM) {
      const { slices, editFormSliceId, editFormSchema } = this.props;
      return (
        <PlaygroundEditForm
          schema={editFormSchema}
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
          <ul>{items.map(pattern => this.renderPatternListItem(pattern))}</ul>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={this.props.handleCancelAddSlice}
              onKeyPress={this.props.handleCancelAddSlice}
              type="button"
              className="button button--color-white button--size-small"
            >
              Cancel
            </button>
          </div>
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
          <button
            type="submit"
            onKeyPress={this.props.handleSave}
            onClick={this.props.handleSave}
            className="button button--color-blue button--size-small"
          >
            Save*
          </button>
          <Link
            to="/examples"
            className="button button--color-white button--size-small"
          >
            Back
          </Link>
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
};

export default PlaygroundSidebar;
