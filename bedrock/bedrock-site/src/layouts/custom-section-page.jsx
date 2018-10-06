import React from 'react';
import PropTypes from 'prop-types';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';
import Spinner from '@basalt/bedrock-spinner';
import urlJoin from 'url-join';

class CustomSectionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: {},
    };
    this.apiEndpoint = `${props.context.settings.urls.apiUrlBase}/section/`;
  }

  componentDidMount() {
    window
      .fetch(urlJoin(this.apiEndpoint, this.props.sectionId, this.props.id))
      .then(res => res.json())
      .then(page => {
        if (!page.ok) {
          // @todo Set error message
          console.error(`uh oh`, page);
        }
        this.setState({
          page: page.data,
          ready: true,
        });
      });
  }

  render() {
    if (!this.state.ready) {
      return <Spinner />;
    }
    const { title, contents } = this.state.page;
    return (
      <div>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: contents }} />
      </div>
    );
  }
}

CustomSectionPage.propTypes = {
  context: contextPropTypes.isRequired,
  sectionId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default connectToContext(CustomSectionPage);
