import React, { Component } from 'react';
import Spinner from '@basalt/bedrock-spinner';
import SchemaForm from '@basalt/bedrock-schema-form';
import PatternGrid from '@basalt/bedrock-pattern-grid';
import { apiUrlBase } from '../../../config';

const filterSchema = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Filters',
  type: 'object',
  // description: 'Denotes possible uses for each component.',
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
      .fetch(`${apiUrlBase}/patterns/component`)
      .then(res => res.json())
      .then(patterns => {
        this.setState({
          isReady: true,
          patterns,
          visiblePatterns: patterns,
        });
        this.updateVisiblePatterns();
      });
  }

  updateVisiblePatterns() {
    const { patterns } = this.state;

    const visibleItems = patterns
      .filter(item => item.id !== 'site-footer')
      .filter(item => item.id !== 'site-header')
      .filter(item => {
        const visibleStatuses = Object.keys(
          this.state.formData.statuses,
        ).filter(key => this.state.formData.statuses[key]);
        return visibleStatuses.some(status => item.status === status);
      })
      .filter(item => {
        const visibleUses = Object.keys(this.state.formData.uses).filter(
          key => this.state.formData.uses[key],
        );
        return item.uses.some(use => visibleUses.includes(use));
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
          isInline
        />
        <PatternGrid patterns={this.state.visiblePatterns} />
      </div>
    );
  }
}

export default PatternsPage;
