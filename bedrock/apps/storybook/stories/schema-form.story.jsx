import React from 'react';
import { storiesOf } from '@storybook/react';
import SchemaForm from '@basalt/bedrock-schema-form';
import styled from 'styled-components';
import { boolean } from '@storybook/addon-knobs';

// const dummyData = {
//   $schema: 'http://json-schema.org/draft-07/schema',
//   type: 'object',
//   title: 'Schema Form Example: Generic',
//   description: 'Sample Schema for demo of React Json Schema Form Styling.',
//   properties: {
//     title: {
//       title: 'String',
//       type: 'string',
//       description: 'Description of a string.',
//     },
//     boolean: {
//       title: 'Boolean',
//       type: 'boolean',
//       description: 'Description of a boolean.',
//     },
//     string_enum: {
//       title: 'String w/ Enum',
//       type: 'string',
//       description: 'Enum and EnumNames defines the allowed string values',
//       enum: [
//         'top-left',
//         'top-center',
//         'top-right',
//         'bottom-left',
//         'bottom-center',
//         'bottom-right',
//       ],
//       enumNames: [
//         'Top Left',
//         'Top Center',
//         'Top Right',
//         'Bottom Left',
//         'Bottom Center',
//         'Bottom Right',
//       ],
//     },
//     radio: {
//       title: 'String Enum as Radio',
//       type: 'string',
//       enum: ['left', 'right', 'top', 'bottom'],
//       enumNames: ['Left', 'Right', 'Top', 'Bottom'],
//       'ui:widget': 'radio',
//     },
//     tags: {
//       title: 'Tags',
//       description: 'This is an array of strings',
//       type: 'array',
//       items: {
//         title: 'Tag',
//         description: 'A single tag',
//         type: 'string',
//       },
//     },
//     names: {
//       title: 'Names',
//       description: 'This is an array of objects',
//       type: 'array',
//       items: {
//         title: 'Name',
//         description: 'An object with first and last strings',
//         type: 'object',
//         properties: {
//           first: {
//             title: 'First Name',
//             type: 'string',
//             description: 'Name, the first.',
//           },
//           last: {
//             title: 'Last Name',
//             type: 'string',
//             description: 'Name, the last.',
//           },
//         },
//       },
//     },
//   },
// };
//
// const buttonData = {
//   $schema: 'http://json-schema.org/draft-07/schema',
//   type: 'object',
//   title: 'Schema Form Example: Button',
//   description: "Buttons are for clickin' and tappin'!",
//   properties: {
//     text: {
//       title: 'Text',
//       type: 'string',
//       description: 'Button Text',
//     },
//     url: {
//       title: 'Url',
//       type: 'string',
//       default: '#',
//       description: 'Url or Href for button.',
//     },
//     size: {
//       title: 'Size',
//       type: 'string',
//       description: 'Button Size',
//       default: 'small',
//       enum: ['small', 'medium', 'large', 'jumbo'],
//       enumNames: ['Small', 'Medium', 'Large', 'Jumbo'],
//     },
//     color: {
//       title: 'Background Color',
//       description: 'Background color of button.',
//       type: 'string',
//       default: 'green',
//       enum: [
//         'blue',
//         'blue--light',
//         'green',
//         'iron',
//         'yellow',
//         'white',
//         'black',
//       ],
//       enumNames: [
//         'Blue',
//         'Light Blue',
//         'Green',
//         'Iron',
//         'Yellow',
//         'White',
//         'Black',
//       ],
//     },
//   },
// };

// const LargeWrapper = styled.div`
//   width: 800px;
// `;
//
// const MediumWrapper = styled.div`
//   width: 560px;
// `;
//
// const SmallWrapper = styled.div`
//   width: 209px;
// `;

const basicSchema = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Basic Schema ',
  description: "Buttons are for clickin' and tappin'!",
  properties: {
    text: {
      title: 'Text',
      type: 'string',
      description: 'Text',
    },
    textarea: {
      title: 'Text Area',
      type: 'string',
      default: '#',
      description: 'Text Area',
    },
    select: {
      title: 'Select',
      type: 'string',
      description: 'Select',
      default: 'option1',
      enum: ['option1', 'option1', 'superlongoptionnumberthree', 'option4'],
      enumNames: [
        'Option #1',
        'Option #2',
        'Super Super Super Long Option Number Three',
        'Option #4',
      ],
    },
    radio: {
      title: 'Radio',
      type: 'string',
      description: 'Radio',
      enum: ['small', 'medium', 'large', 'jumbo'],
      enumNames: ['Small', 'Medium', 'Large', 'Jumbo'],
    },
    boolean: {
      title: 'Boolean',
      type: 'boolean',
      description: 'Check me!',
    },
  },
};

const basicSchemaUi = {
  textarea: {
    'ui:widget': 'textarea',
    'ui:options': {
      rows: 10,
    },
  },
  radio: {
    'ui:widget': 'radio',
  },
};

storiesOf('Schema Form', module)
  // .add('Overview', () => (
  //   <SchemaForm
  //     schema={dummyData}
  //     uiSchema={{ radio: { 'ui:widget': 'radio' } }}
  //   />
  // ))
  .add('Basic Schema', () => (
    <SchemaForm schema={basicSchema} uiSchema={basicSchemaUi} />
  ));

// storiesOf('Schema Form', module).add('Overview', () => {
//   const isInline = boolean('isInline', false);
//   return (
//     <SchemaForm
//       schema={dummyData}
//       uiSchema={{ radio: { 'ui:widget': 'radio' } }}
//       isInline={isInline}
//     />
//   );
// });
