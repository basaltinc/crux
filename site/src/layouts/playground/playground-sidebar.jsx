import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ClearFilterButton,
  TypeToFilter,
  TypeToFilterInputWrapper,
} from '@basalt/bedrock-atoms';
import SchemaForm from '@basalt/bedrock-schema-form';
import PlaygroundEditForm from '../../components/playground-edit-form';
import { Link } from 'react-router-dom';

class PlaygroundSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  static renderPatternListItem(pattern) {
    return (
      <PatternListItemWrapper key={pattern.id} type="button">
        <Link to={`/patterns/components/${pattern.id}`}>View Details</Link>
        <div
          role="button"
          tabIndex="0"
          onKeyPress={() => this.addSlice(pattern.id)}
          onClick={() => this.addSlice(pattern.id)}
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
    if (this.state.showEditForm) {
      const { slices, editFormSliceId, editFormSchema } = this.state;
      return (
        <PlaygroundEditForm
          schema={editFormSchema}
          data={slices.find(s => s.id === editFormSliceId).data}
          handleChange={data => {
            this.setState(prevState => ({
              slices: prevState.slices.map(slice => {
                if (slice.id === editFormSliceId) {
                  slice.data = data.formData;
                }
                return slice;
              }),
            }));
          }}
          handleError={console.error}
          hideEditForm={this.hideEditForm}
        />
      );
    }
    if (this.state.showPatternForm) {
      const patterns = this.props.patterns
        .filter(pattern => pattern.id !== 'site-footer')
        .filter(pattern => pattern.id !== 'site-header');
      const items =
        this.state.filterTerm === ''
          ? patterns
          : patterns.filter(
          item =>
            item.title
              .toLowerCase()
              .search(this.state.filterTerm.toLowerCase()) !== -1,
          );

      return (
        <div>
          <h4>Patterns</h4>
          <TypeToFilter>
            <h4 className="eyebrow">Filter List</h4>
            <TypeToFilterInputWrapper>
              <input
                type="text"
                className="type-to-filter"
                placeholder="Type to filter..."
                value={this.state.filterTerm}
                onChange={event =>
                  this.setState({ filterTerm: event.target.value })
                }
              />
              <ClearFilterButton
                role="button"
                onClick={this.props.handleFilterReset}
                onKeyPress={this.props.handleFilterReset}
                isVisible={!!this.state.filterTerm}
              >
                <i className="icon--close" />
              </ClearFilterButton>
            </TypeToFilterInputWrapper>
          </TypeToFilter>
          <ul>{items.map(pattern => this.renderPatternListItem(pattern))}</ul>
        </div>
      );
    }
    return (
      <div>
        <h4>Playground</h4>
        <p>Edit, add, re-arrange, and delete slices.</p>
        <p>Wow, this is great copy!</p>
        <SchemaForm
          onChange={({ formData }) => {
            this.setState(prevState => ({
              example: Object.assign({}, prevState.example, formData),
            }));
          }}
          formData={this.state.example}
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
      </div>
    );
  }
}

PlaygroundSidebar.propTypes = {};

export default PlaygroundSidebar;
