import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import Overview from '../components/overview';
import Spinner from '../bedrock/components/spinner';
import { apiUrlBase } from '../../config';
import { VariationDemos } from '../bedrock/components/variation-demo';
import { Details } from '../bedrock/components/atoms';
import ErrorCatcher from '../bedrock/components/error-catcher';
import Twig from '../components/twig';

const LoadableSchemaTable = Loadable({
  loader: () => import(/* webpackChunkName: 'schema-table' */ '../bedrock/components/schema-table'),
  loading: Spinner,
});

const LoadableDosAndDonts = Loadable({
  loader: () => import(/* webpackChunkName: 'dos-and-donts' */ '../bedrock/components/dos-and-donts/src/dos-and-donts'),
  loading: Spinner,
});

// const LoadableVariationDemos = Loadable({
//   loader: () => import(/* webpackChunkName: 'variation-demo' */ '../bedrock/components/variation-demo'),
//   loading: Spinner,
// });

export default class ComponentOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: {},
      ready: false,
    };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/pattern-meta/${this.props.id}`)
      .then(res => res.json())
      .then(meta => {
        this.setState({
          meta,
          ready: true,
        });
      });
  }

  render() {
    let content;
    if (!this.state.ready) {
      content = <Spinner />;
    } else {
      // Just grabbing first available template for now
      const [ template ] = this.state.meta.templates;
      const { name, schema } = template;
      const [ data, ...examples ] = schema.examples ? schema.examples : [{}];
      content = (
        <article>
          <Overview
            template={name}
            schema={schema}
            demoSizes={this.props.demoSizes}
            data={data}
            size={this.props.size}
          />

          {examples && (
            <Details>
              <summary>Examples</summary>
              {examples.map((example, i) => (
                <Twig template={name} data={example} key={i} />
              ))}
            </Details>
          )}

          <h4>Properties</h4>
          <p>
            The following properties make up the data that defines each instance
            of this component.
          </p>
          <Details open>
            <summary>Props Table</summary>
            <LoadableSchemaTable schema={schema} />
          </Details>

          <VariationDemos
            schema={schema}
            template={name}
            data={data}
          />

          {this.props.dosAndDonts.map(item => (
            // @todo title is not a required prop, so we need to fix this key structure
            <LoadableDosAndDonts
              key={item.title}
              title={item.title}
              items={item.items}
            />
          ))}
        </article>
      );
    }
    return <ErrorCatcher>{content}</ErrorCatcher>;
  }
}

ComponentOverview.defaultProps = {
  demoSizes: [],
  size: Overview.defaultProps.size,
  dosAndDonts: [],
};

ComponentOverview.propTypes = {
  id: PropTypes.string.isRequired,
  demoSizes: PropTypes.arrayOf(PropTypes.string.isRequired),
  size: Overview.propTypes.size,
  dosAndDonts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.array,
    }),
  ),
};
