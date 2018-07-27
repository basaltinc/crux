import React, { Component } from 'react';
import { image, paragraph, title } from '@basalt/demo-data';
import PatternPage from '../../../templates/pattern-page';
import Overview from '../../../components/overview';
import Spinner from '../../../components/spinner';
import { apiUrlBase } from '../../../../config';

class MediaTilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      ready: false,
    };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/pattern-info/components/media-tile`)
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
        <Overview
          template={template}
          schema={schema}
          demoSizes={['400px']}
          data={{
            title: title(),
            body: paragraph(),
            desc: title(),
            background_image: image(),
            title_text_color: 'white',
            body_text_color: 'white',
            content_padding: 'l',
            text_align: 'center',
            title_size: '2',
          }}
        />
      );
    }
    return <PatternPage>{content}</PatternPage>;
  }
}

export default MediaTilePage;
