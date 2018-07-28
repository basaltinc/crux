import React, { Component } from 'react';
import { image, paragraph, text, title } from '@basalt/demo-data';
import PatternPage from '../../../templates/pattern-page';
import Overview from '../../../components/overview';
import Spinner from '../../../components/spinner';
import { apiUrlBase } from '../../../../config';
import { VariationDemoes } from '../../../components/variation-demo';

class HeroPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      ready: false,
    };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/pattern-info/components/hero`)
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
        <div>
          <VariationDemoes
            schema={schema}
            template={template}
            data={{
              title: title(),
              body: paragraph(),
              desc: title(),
              image_overlay: 'black',
              image: image(),
              buttons: [
                {
                  text: text(),
                },
                {
                  text: text(),
                },
              ],
            }}
          />

          <Overview
            template={template}
            schema={schema}
            data={{
              title: title(),
              body: paragraph(),
              desc: title(),
              image_overlay: 'black',
              image: image(),
              buttons: [
                {
                  text: text(),
                },
                {
                  text: text(),
                },
              ],
            }}
          />
        </div>
      );
    }
    return <PatternPage>{content}</PatternPage>;
  }
}

export default HeroPage;
