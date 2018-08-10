import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Overview from '../components/overview';
import Spinner from '../bedrock/components/spinner';
import { apiUrlBase } from '../../config';
import { VariationDemos } from '../bedrock/components/variation-demo';
import ErrorCatcher from '../bedrock/components/error-catcher';
import DosAndDonts from '../bedrock/components/dos-and-donts/src/dos-and-donts';

export default class ComponentOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      ready: false,
    };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/pattern-info/components/${this.props.id}`)
      .then(res => res.json())
      .then(info => {
        if (info.ok) {
          this.setState({ info, ready: true });
        } else {
          // @todo Show error
          console.error('Uh oh, error!', info);
        }
      });
  }

  render() {
    let content;
    if (!this.state.ready) {
      content = <Spinner />;
    } else {
      const { template, schema } = this.state.info;
      content = (
        <article>
          <Overview
            template={template}
            schema={schema}
            demoSizes={this.props.demoSizes}
            data={this.props.data}
            size={this.props.size}
          />
          <VariationDemos
            schema={schema}
            template={template}
            data={this.props.data}
          />
          {this.props.dosAndDonts.map(item => (
            // @todo title is not a required prop, so we need to fix this key structure
            <DosAndDonts
              key={item.title}
              title={item.title}
              items={item.items}
            />
          ))}
        </article>
      );
    }
    return (
      <ErrorCatcher>{content}</ErrorCatcher>
    );
  }
}

ComponentOverview.defaultProps = {
  data: {},
  demoSizes: [],
  size: Overview.defaultProps.size,
  dosAndDonts: [],
};

ComponentOverview.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
  demoSizes: PropTypes.arrayOf(PropTypes.string.isRequired),
  size: Overview.propTypes.size,
  dosAndDonts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.array,
    }),
  ),
};
