import React, { Component } from 'react';
import Spinner from '@basalt/bedrock-spinner';
import SchemaForm from '@basalt/bedrock-schema-form';
import PatternGrid from '@basalt/bedrock-pattern-grid';
import { apiUrlBase } from '../../../config';

const statusesSchema = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Status',
  type: 'object',
  // description:
  // 'Denotes whether the component is published (ready) or a draft.',
  properties: {
    ready: {
      title: 'Ready',
      type: 'boolean',
      description: 'Denotes that the component is ready and published',
    },
    draft: {
      title: 'Draft',
      type: 'boolean',
      description: 'Denotes that the component is a draft, and not published',
    },
  },
};

const usesSchema = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Uses',
  type: 'object',
  // description: 'Denotes possible uses for each component.',
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
};

class PatternsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      patterns: [],
      visiblePatterns: [],
      statuses: {
        ready: true,
        draft: true,
      },
      uses: {
        inComponent: true,
        inGrid: true,
        inSlice: true,
      },
    };
    this.handleChangeStatuses = this.handleChangeStatuses.bind(this);
    this.handleChangeUses = this.handleChangeUses.bind(this);
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
      });
  }

  updateVisiblePatterns() {
    const { patterns } = this.state;

    const visibleItems = patterns
      .filter(item => item.id !== 'site-footer')
      .filter(item => item.id !== 'site-header')
      .filter(item => {
        const visibleStatuses = Object.keys(this.state.statuses).filter(
          key => this.state.statuses[key],
        );
        return visibleStatuses.some(status => item.status === status);
      })
      .filter(item => {
        const visibleUses = Object.keys(this.state.uses).filter(
          key => this.state.uses[key],
        );
        return item.uses.some(use => visibleUses.includes(use));
      });

    this.setState({
      visiblePatterns: visibleItems,
    });
  }

  handleChangeStatuses({ formData }) {
    this.setState({
      statuses: formData,
    });
    this.updateVisiblePatterns();
  }

  handleChangeUses({ formData }) {
    this.setState({
      uses: formData,
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
          schema={statusesSchema}
          formData={this.state.statuses}
          onChange={this.handleChangeStatuses}
          isInline
        />
        <SchemaForm
          schema={usesSchema}
          formData={this.state.uses}
          onChange={this.handleChangeUses}
          isInline
        />
        <PatternGrid patterns={this.state.visiblePatterns} />
      </div>
    );
  }
}

export default PatternsPage;
