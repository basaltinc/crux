import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import CodeBlock from '@basalt/bedrock-code-block';

const twigCodeExample = `{% include '@components/_logo.twig' with {
  "imgSrc": "/assets/images/logos/main.png",
  "url": "http://www.basalt.io",
  "size": "jumbo",
  "greyscale": false
} %}`;

const htmlCodeExample = `<div class="logo logo--jumbo" data-linkto="http://www.basalt.io">
  <img src="/assets/images/logos/main.png" alt="" class="logo_img ">
</div>`;

const dataString = `{
  "imgSrc": "/assets/images/logos/main.png",
  "url": "http://www.basalt.io",
  "size": "jumbo",
  "greyscale": false
}`;

storiesOf('Code Block', module).add(
  'Overview',
  withInfo({
    inline: true,
  })(() => (
    <CodeBlock
      items={[
        {
          name: 'Twig',
          code: twigCodeExample,
          language: 'twig',
          handleTyping: text => {
            this.setState({
              isStringTemplate: true,
              template: text,
              showForm: false,
            });
          },
        },
        {
          name: 'HTML',
          code: htmlCodeExample,
          language: 'html',
        },
        {
          name: 'JSON (Data Only)',
          code: dataString,
          language: 'json',
        },
      ]}
    />
  )),
);
