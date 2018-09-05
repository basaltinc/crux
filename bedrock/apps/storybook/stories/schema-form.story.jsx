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

const avatarData = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Schema Form Example: Avatar',
  description: "Show a person's profile picture.",
  properties: {
    size: {
      title: 'Size',
      type: 'string',
      enum: ['s', 'm', 'l', 'xl'],
      enumNames: ['Small', 'Medium', 'Large', 'Extra Large'],
    },
    img: {
      title: 'Image',
      type: 'string',
      description: 'Path to image.',
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

const basicBlockData = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Schema Form Example: Basic Block',
  description: 'A block with a title, text, and CTA.',
  properties: {
    title: {
      title: 'Title',
      type: 'string',
      description: 'Block title.',
    },
    content: {
      title: 'Content',
      type: 'string',
      description: 'Can use HTML.',
    },
    buttons: {
      type: 'array',
      title: 'Buttons',
      description: 'List of objects passed to @components/_button.twig',
      items: buttonData,
    },
  },
};

const blogTeaserData = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Schema Form Example: Blog Teaser',
  type: 'object',
  description: 'A block with a title, text, and CTA.',
  properties: {
    title: {
      type: 'string',
      title: 'Blog Post Title',
    },
    author: {
      title: 'Blog Author',
      type: 'string',
      description: 'Author of the blog post',
    },
    teaser_avatar: {
      title: 'Teaser Avatar',
      type: 'string',
      description: 'Image source for an avatar',
    },
    date: {
      title: 'Date',
      type: 'string',
      description: 'Date of publication to be displayed',
    },
    summary: {
      title: 'Summary',
      type: 'string',
      description: 'Teaser text summary of blog post',
    },
    image: {
      type: 'string',
      title: 'Image',
      description: 'An image to go with the blog post teaser',
    },
    is_even: {
      type: 'boolean',
      title: 'Is Even',
      description:
        'For alternating collections of blog teasers, allows even and odd blog teaser be styled separately',
    },
  },
};

const ctaData = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Schema Form Example: Call To Action',
  type: 'object',
  description:
    "This 'Call To Action' is designed to specifically encourage the user to contact Basalt.",
  properties: {
    text: {
      title: 'Call to Action Text',
      type: 'string',
      description:
        'This is the text that appears above the button in the call to action slab.',
    },
    buttons: {
      title: 'Buttons',
      type: 'array',
      description: 'List of objects passed to @components/_button.twig',
      items: buttonData,
    },
    full_width: {
      title: 'Full Width',
      type: 'boolean',
      description:
        'Gives element the class `u-full-width` so it will span the entire screen.',
    },
  },
};

const execBioData = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Schema Form Example: Executive Bio',
  type: 'object',
  description:
    'The Executive Bio a UI component designed to profile members of the executive team.',
  properties: {
    is_even: {
      title: 'Is Even',
      type: 'boolean',
      description:
        'Used to define if its an even or odd member of a list of executive bios.',
    },
    avatar: {
      title: 'Avatar Image',
      type: 'string',
      description:
        'Url string for an image asset. An avatar image of the person being profiled.',
    },
    name: {
      title: 'Name',
      type: 'string',
      description: 'Name of the executive',
    },
    twitter: {
      title: 'Twitter Handle',
      type: 'string',
      description: 'Twitter handle. If provided, generates a link to twitter.',
    },
    bio: {
      title: 'Biography',
      type: 'string',
      description: 'A brief biography of the individual being profiled',
    },
  },
};

const heroData = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Schema Form Example: Hero',
  description:
    'The Hero component is a full width slab intended to draw the attention of the user.',
  properties: {
    title: {
      title: 'Title',
      description: 'The main heading of the Hero.',
      type: 'string',
    },
    body: {
      title: 'Body Content',
      description: 'The main text or html of the hero component',
      type: 'string',
    },
    alignment_all: {
      title: 'Content Alignment',
      type: 'string',
      description: 'Alignment relationship between content and title.',
      enum: ['left', 'center', 'right'],
      enumNames: [
        'Left Title, Right Content',
        'Center Everything',
        'Right Title, Left Content',
      ],
    },
    image: {
      title: 'Background Image',
      type: 'string',
      description: 'Path to image.',
    },
    image_overlay: {
      title: 'Image Overlay',
      type: 'string',
      description: 'Color of the image overlay.',
      enum: ['blue', 'green', 'black', 'yellow', 'darker', 'none'],
      enumNames: ['Blue', 'Green', 'Black', 'Yellow', 'Darker', 'None'],
    },
    content_classes: {
      type: 'array',
      title: 'Content Classes',
      description: 'Used for setting BG and text color.',
      items: {
        title: 'Class Name',
        type: 'string',
      },
    },
    buttons: {
      title: 'Buttons',
      type: 'array',
      description: 'Array of button data.',
      items: {
        type: 'object',
        title: 'Button',
        description: "Buttons are for clickin' and tappin'!",
        properties: {
          text: {
            title: 'Text',
            type: 'string',
          },
          url: {
            title: 'Url',
            type: 'string',
            default: '#',
          },
          size: {
            title: 'Size',
            type: 'string',
            default: 'small',
            enum: ['small', 'medium', 'large', 'jumbo'],
            enumNames: ['Small', 'Medium', 'Large', 'Jumbo'],
          },
          color: {
            title: 'Background Color',
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
      },
    },
  },
};

const listData = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Schema Form Example: List',
  description: 'List',
  properties: {
    items: {
      title: 'List Items',
      type: 'array',
      description: 'Items in the list',
      items: {
        type: 'object',
        title: 'List item',
        properties: {
          text: {
            title: 'Item Text',
            type: 'string',
            description: 'Item text',
          },
          url: {
            title: 'Url',
            type: 'string',
            description: 'Url of item link',
          },
        },
      },
    },
    text_size: {
      title: 'Text Size',
      type: 'string',
      enum: ['xs', 's', 'm', 'l', 'xl'],
      enumNames: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
    },
    display: {
      title: 'List Style',
      description: 'Display list as bulleted, ordered, or plain.',
      type: 'string',
      enum: ['bullets', 'ordered', 'plain'],
      enumNames: ['Bullets', 'Ordered List', 'None'],
    },
    text_color: {
      title: 'Text Color',
      type: 'string',
      description: 'Any utility color class',
      enum: [
        'white',
        'blue--light',
        'blue',
        'green',
        'yellow',
        'iron',
        'black',
        'gray--dark',
      ],
      enumNames: [
        'White',
        'Light Blue',
        'Blue',
        'Green',
        'Yellow',
        'Gray',
        'Black',
        'Dark Gray',
      ],
    },
    columns: {
      title: 'Columns',
      type: 'string',
      enum: ['1', '2', '3', '4'],
      enumNames: ['1', '2', '3', '4'],
    },
  },
};

const logoData = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  description: 'Schema Form Example: Logo',
  title: 'Logo',
  properties: {
    imgSrc: {
      type: 'string',
      title: 'Image Source',
      description: 'Path to image.',
    },
    url: {
      title: 'Url',
      type: 'string',
    },
    size: {
      title: 'Size',
      type: 'string',
      enum: ['auto', 'small', 'medium', 'large', 'jumbo'],
      enumNames: ['Auto', 'Small', 'Medium', 'Large', 'Jumbo'],
    },
    greyscale: {
      title: 'Greyscale',
      type: 'boolean',
      description: 'Display the logo in greyscale?',
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
      enumNames: ['Left', 'Center', 'Right'],
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
  .add('Avatar', () => <SchemaForm schema={avatarData} />)
  .add('Basic Block', () => <SchemaForm schema={basicBlockData} />)
  .add('Button', () => <SchemaForm schema={buttonData} />)
  .add('Blog Teaser', () => <SchemaForm schema={blogTeaserData} />)
  .add('CTA', () => <SchemaForm schema={ctaData} />)
  .add('Exec Bio', () => <SchemaForm schema={execBioData} />)
  .add('Hero', () => <SchemaForm schema={heroData} />)
  .add('List', () => <SchemaForm schema={listData} />)
  .add('Logo', () => <SchemaForm schema={logoData} />)
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
