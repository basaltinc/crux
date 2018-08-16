import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextInput, TextAreaInput, Select } from '@basalt/bedrock-atoms';
import { action } from '@storybook/addon-actions';

const dummyData = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Media Block',
  description: 'Image, Title, Body, and Buttons make this really flexible.',
  properties: {
    title: {
      title: 'Title',
      type: 'string',
      description: 'Main heading of media block.',
    },
    inset_title: {
      title: 'Inset Title',
      type: 'boolean',
      description: 'Insets the title.',
    },
    title_bg_color: {
      title: 'Title Background Color',
      type: 'string',
      description: 'Any utility color class.',
    },
    title_text_color: {
      title: 'Title Text Color',
      description: 'Any utility color class.',
      type: 'string',
    },
    body: {
      title: 'Body Content',
      type: 'string',
      description: 'Body text of the media block.',
    },
    media: {
      title: 'Media',
      type: 'string',
      description: 'Path to image.',
    },
    show_full_media: {
      title: 'Show Full Media',
      type: 'boolean',
      description:
        "Show full image. Default is to 'cover' the whole side the media item is on: this allows matching the height of the text but does not show full media item.",
    },
    media_position: {
      title: 'Media Position',
      type: 'string',
      description:
        'When Show Full Media is on, this positions the background image',
      enum: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      enumNames: [
        'Top Left',
        'Top Center',
        'Top Right',
        'Bottom Left',
        'Bottom Center',
        'Bottom Right',
      ],
    },
    media_alignment: {
      title: 'Media Alignment',
      type: 'string',
      enum: ['left', 'right', 'top', 'bottom'],
      enumNames: ['Left', 'Right', 'Top', 'Bottom'],
    },
    media_padding: {
      title: 'Media Padding',
      type: 'string',
      description: 'Space around the media',
      enum: ['0', 's', 'm', 'l', 'xl', 'xxl'],
      enumNames: [
        'None',
        'Small',
        'Medium',
        'Large',
        'Extra Large',
        'XX Large',
      ],
    },
    media_size: {
      title: 'Media Size',
      type: 'string',
      description: 'Size of media compared to content',
      enum: ['s', 'm', 'l', 'xl'],
      enumNames: ['Small', 'Medium', 'Large', 'Extra large'],
    },
  },
};

storiesOf('Form Elements', module)
  .add('Select', () => (
    <Select
      handleChange={action('option changed')}
      items={[
        {
          title: 'Option 1',
          value: 'option1',
        },
        {
          title: 'Option 2',
          value: 'option2',
        },
        {
          title: 'Option 3',
          value: 'option3',
        },
      ]}
    />
  ))
  .add('Text Input', () => <TextInput placeholder="Type here..." />)
  .add('Text Area Input', () => <TextAreaInput placeholder="Type here..." />);
  // .add('Text Area Input', () => <TextAreaInput placeholder="Type here..." />);
