import React from 'react';
import { storiesOf } from '@storybook/react';
import SchemaForm from '@basalt/bedrock-schema-form';
import styled from 'styled-components';

const dummyData = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Schema Form Example: Generic',
  description: 'Sample Schema for demo of React Json Schema Form Styling.',
  properties: {
    title: {
      title: 'String',
      type: 'string',
      description: 'Description of a string.',
    },
    boolean: {
      title: 'Boolean',
      type: 'boolean',
      description: 'Description of a boolean.',
    },
    string_enum: {
      title: 'String w/ Enum',
      type: 'string',
      description: 'Enum and EnumNames defines the allowed string values',
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
    radio: {
      title: 'String Enum as Radio',
      type: 'string',
      enum: ['left', 'right', 'top', 'bottom'],
      enumNames: ['Left', 'Right', 'Top', 'Bottom'],
      'ui:widget': 'radio',
    },
    tags: {
      title: 'Tags',
      description: 'This is an array of strings',
      type: 'array',
      items: {
        title: 'Tag',
        description: 'A single tag',
        type: 'string',
      },
    },
    names: {
      title: 'Names',
      description: 'This is an array of objects',
      type: 'array',
      items: {
        title: 'Name',
        description: 'An object with first and last strings',
        type: 'object',
        properties: {
          first: {
            title: 'First Name',
            type: 'string',
            description: 'Name, the first.',
          },
          last: {
            title: 'Last Name',
            type: 'string',
            description: 'Name, the last.',
          },
        },
      },
    },
  },
};

const buttonData = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Schema Form Example: Button',
  description: "Buttons are for clickin' and tappin'!",
  properties: {
    text: {
      title: 'Text',
      type: 'string',
      description: 'Button Text',
    },
    url: {
      title: 'Url',
      type: 'string',
      default: '#',
      description: 'Url or Href for button.',
    },
    size: {
      title: 'Size',
      type: 'string',
      description: 'Button Size',
      default: 'small',
      enum: ['small', 'medium', 'large', 'jumbo'],
      enumNames: ['Small', 'Medium', 'Large', 'Jumbo'],
    },
    color: {
      title: 'Background Color',
      description: 'Background color of button.',
      type: 'string',
      default: 'green',
      enum: [
        'blue',
        'blue--light',
        'green',
        'iron',
        'yellow',
        'white',
        'black',
      ],
      enumNames: [
        'Blue',
        'Light Blue',
        'Green',
        'Iron',
        'Yellow',
        'White',
        'Black',
      ],
    },
  },
};

const mediaBlockData = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Example Schema Form: Media Block',
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
    buttons: {
      title: 'Buttons',
      type: 'array',
      description: 'List of objects passed to @components/_button.twig',
      items: buttonData,
    },
  },
};

const mediaTileData = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Example Schema Form: Media Tile',
  description: 'Full Image overlayed with optional Title, Body, and Buttons.',
  properties: {
    title: {
      title: 'Title',
      type: 'string',
      description: 'Main heading of the media tile.',
    },
    url: {
      title: 'Url',
      type: 'string',
      description:
        'Url or href. If added, a click or press of the media tile will forward to the given url or href.',
    },
    text_align: {
      title: 'Text Align - Horizontal',
      type: 'string',
      description: 'Adjust horizontal alignment of text.',
      enum: ['left', 'center', 'right'],
      enumNames: ['Left', 'Center', 'RightRightRightRightRightRight'],
    },
    text_align_vert: {
      title: 'Text Align - Vertical',
      type: 'string',
      description: 'Adjust vertical alignment of text.',
      enum: ['top', 'center', 'bottom'],
      enumNames: ['Top', 'Center', 'Bottom'],
    },
    title_bg_color: {
      title: 'Title Background Color',
      type: 'string',
      description: 'Any utility color class.',
    },
    title_size: {
      title: 'Title Size',
      type: 'string',
      description:
        'Title size corresponds to site-wide heading sizes. 1 = h1, 2 = h2, etc.',
      enum: ['1', '2', '3', '4', '5', '6'],
    },
    title_text_color: {
      title: 'Title Text Color',
      type: 'string',
      description: 'Color of the main heading. Any utility color class.',
      enum: ['white', 'blue', 'green', 'yellow', 'black'],
      enumNames: ['White', 'Blue', 'Green', 'Yellow', 'Black'],
    },
    body: {
      title: 'Body Text',
      type: 'string',
      description: 'Text content of the main body of the media tile.',
    },
    body_text_color: {
      type: 'string',
      title: 'Body Text Color',
      description:
        'Color of the text of the main body. Any utility color class.',
      enum: ['white', 'blue', 'green', 'yellow', 'black'],
      enumNames: ['White', 'Blue', 'Green', 'Yellow', 'Black'],
    },
    body_text_size: {
      title: 'Body Text Size',
      type: 'string',
      description: 'Font size of the main body text.',
      enum: ['s', 'm', 'l', 'xl', 'xxl'],
      enumNames: ['Small', 'Medium', 'Large', 'Extra Large', 'XX Large'],
    },
    content_padding: {
      title: 'Content Padding',
      type: 'string',
      description: 'Space around the content in relation to the media',
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
    media: {
      type: 'string',
      title: 'Background Image',
      description: 'Path to image.',
    },
    image_overlay: {
      title: 'Image Overlay',
      type: 'string',
      enum: ['blue', 'green', 'yellow', 'black', 'none'],
      enumNames: ['Blue', 'Green', 'Yellow', 'Black', 'None'],
    },
    min_height: {
      title: 'Minimum Element Height',
      type: 'string',
      description: 'Minimum height of the entire media tile.',
      enum: ['0', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
      enumNames: [
        'None',
        'XX Small',
        'Extra Small',
        'Small',
        'Medium',
        'Large',
        'Extra large',
        'XX Large',
      ],
    },
    bg_color: {
      type: 'string',
      title: 'Background Color',
      description:
        'Background color of media tile. Note: only visible if no image is provided.',
      enum: ['blue', 'green', 'yellow', 'iron', 'black', 'none'],
      enumNames: ['Blue', 'Green', 'Yellow', 'Iron', 'Black', 'None'],
    },
    buttons: {
      title: 'Buttons',
      type: 'array',
      description: 'List of objects passed to @components/_button.twig',
      items: buttonData,
    },
  },
};

const footerData = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Example Schema Form: Site Footer',
  description: 'A global site footer',
  properties: {
    menu_items: {
      title: 'Menu Items',
      type: 'array',
      description: 'Items to include in the footer nav menu',
      items: {
        type: 'object',
        title: 'Menu Item',
        description: 'Menu Item data',
        properties: {
          url: {
            title: 'Url',
            type: 'string',
            description: 'Url or href for the menu item',
          },
          active: {
            title: 'Active',
            type: 'boolean',
            description: 'Whether the current link is active',
          },
          text: {
            title: 'Text',
            type: 'string',
            description: 'Text of the menu item',
          },
        },
      },
    },
  },
};

const headerData = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Site Header',
  description: 'A global site header',
  properties: {
    menu_items: {
      title: 'Menu Items',
      type: 'array',
      description: 'Items to include in the footer nav menu',
      items: {
        type: 'object',
        title: 'Menu Item',
        description: 'Menu Item data',
        properties: {
          url: {
            title: 'Url',
            type: 'string',
            description: 'Url or href for the menu item',
          },
          active: {
            title: 'Active',
            type: 'boolean',
            description: 'Whether the current link is active',
          },
          text: {
            title: 'Text',
            type: 'string',
            description: 'Text of the menu item',
          },
        },
      },
    },
  },
};

const LargeWrapper = styled.div`
  width: 800px;
`;

const MediumWrapper = styled.div`
  width: 560px;
`;

const SmallWrapper = styled.div`
  width: 209px;
`;

storiesOf('Schema Form', module)
  .add('Overview', () => (
    <SchemaForm
      schema={dummyData}
      uiSchema={{ radio: { 'ui:widget': 'radio' } }}
    />
  ))
  .add('Media Block', () => <SchemaForm schema={mediaBlockData} />)
  .add('Media Tile', () => <SchemaForm schema={mediaTileData} />)
  .add('Media Tile Large Constrains', () => (
    <LargeWrapper>
      <SchemaForm schema={mediaTileData} />
    </LargeWrapper>
  ))
  .add('Media Tile Medium Constrains', () => (
    <MediumWrapper>
      <SchemaForm schema={mediaTileData} />
    </MediumWrapper>
  ))
  .add('Media Tile Small Constrains', () => (
    <SmallWrapper>
      <SchemaForm schema={mediaTileData} />
    </SmallWrapper>
  ))
  .add('Footer', () => <SchemaForm schema={footerData} />)
  .add('Header', () => <SchemaForm schema={headerData} />);
