import React, { Component } from 'react';
import Spinner from '@basalt/bedrock-spinner';
import SchemaForm from '@basalt/bedrock-schema-form';
import PatternGrid from '@basalt/bedrock-pattern-grid';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';

const filterSchema = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Filters',
  type: 'object',
  properties: {
    uses: {
      title: 'Uses',
      type: 'object',
      properties: {
        inComponent: {
          title: 'In Component',
          type: 'boolean',
          description: 'Used in a component',
        },
        inSlice: {
          title: 'In Slice',
          type: 'boolean',
          description: 'Used in slices',
        },
        inGrid: {
          title: 'In Grid',
          type: 'boolean',
          description: 'Used in a grid',
        },
      },
    },
    statuses: {
      title: 'Statuses',
      type: 'object',
      properties: {
        ready: {
          title: 'Ready',
          type: 'boolean',
          description: 'Denotes that the component is ready and published',
        },
        draft: {
          title: 'Draft',
          type: 'boolean',
          description:
            'Denotes that the component is a draft, and not published',
        },
      },
    },
  },
};

class PatternsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      patterns: [],
      visiblePatterns: [],
      formData: {
        statuses: {
          ready: true,
          draft: true,
        },
        uses: {
          inComponent: true,
          inGrid: true,
          inSlice: true,
        },
      },
    };
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.updateVisiblePatterns = this.updateVisiblePatterns.bind(this);
  }

  componentDidMount() {
    window
      .fetch(`${this.props.context.settings.urls.apiUrlBase}/patterns`)
      .then(res => res.json())
      .then(patterns => {
        this.setState({
          isReady: true,
          patterns,
          visiblePatterns: patterns,
        });
      });
  }

  updateVisiblePatterns() {
    const { patterns } = this.state;

    const visibleItems = patterns
      .filter(item => {
        // Filters based on "status" param set within component index.js meta const declaration
        // ** Note: If you want to show in "Draft" filtered view, component meta must include --> status: 'draft'
        // ** otherwise "ready" status will be assumed
        const visibleStatuses = Object.keys(
          this.state.formData.statuses,
        ).filter(key => this.state.formData.statuses[key]);
        return visibleStatuses.some(status => item.meta.status === status);
      })
      .filter(item => {
        // Filters based on "uses" param set within component index.js meta const declaration
        // ** Note: You MUST set at least one value for component to show within the pattern grid
        const visibleUses = Object.keys(this.state.formData.uses).filter(
          key => this.state.formData.uses[key],
        );
        return item.meta.uses.some(use => visibleUses.includes(use));
      });

    this.setState({
      visiblePatterns: visibleItems,
    });
  }

  handleChangeForm({ formData }) {
    this.setState({
      formData,
    });
    this.updateVisiblePatterns();
  }

  render() {
    if (!this.state.isReady) {
      return <Spinner />;
    }

    return (
      <div>
        <h2>Patterns</h2>
        <p>Explore the design patterns that make up the Crux Design System.</p>

        <SchemaForm
          schema={filterSchema}
          formData={this.state.formData}
          onChange={this.handleChangeForm}
          className="patterns-filters"
        />
        <PatternGrid patterns={this.state.visiblePatterns} />
      </div>
    );
  }
}

PatternsPage.propTypes = {
  context: contextPropTypes.isRequired,
};

export default connectToContext(PatternsPage);
