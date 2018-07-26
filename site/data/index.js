import { image, paragraph, text, title } from '@basalt/demo-data';

/* eslint-disable */
export const mediaBlockSchema = {
  "$schema": "http://json-schema.org/schema#",
  "type": "object",
  "title": "Media Block",
  "description": "Image, Title, Body, and Buttons make this really flexible.",
  "properties": {
    "title": {
      "type": "string"
    },
    "inset_title": {
      "type": "boolean",
      "description": "Bring the title slightly over the image?"
    },
    "title_bg_color": {
      "type": "string",
      "title": "Title Background Color",
      "description": "Any utility color class",
      "enum": [
        "blue--light",
        "blue",
        "green",
        "iron",
        "yellow",
        "white",
        "gray--dark",
        "black"
      ]
    },
    "title_text_color": {
      "type": "string",
      "title": "Title Text Color",
      "description": "Any utility color class"
    },
    "body": {
      "type": "string"
    },
    "media": {
      "type": "string",
      "title": "Image",
      "description": "Path to image."
    },
    "show_full_media": {
      "type": "boolean",
      "title": "Show Full Media",
      "description": "Show full image. Default is to 'cover' the whole side the media item is on: this allows matching the height of the text but does not show full media item."
    },
    "media_position": {
      "type": "string",
      "description": "When Show Full Media is on, this positions the background image",
      "enum": ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"]
    },
    "media_alignment": {
      "type": "string",
      "enum": ["left", "right", "top", "bottom"]
    },
    "media_padding": {
      "type": "string",
      "description": "Space around the media",
      "enum": ["0", "s", "m", "l", "xl", "xxl"]
    },
    "media_size": {
      "type": "string",
      "description": "Size of media compared to content",
      "enum": ["s", "m", "l", "xl"]
    },
    "buttons": {
      "type": "array",
      "description": "List of objects passed to @components/_button.twig",
      "items": {
        "$schema": "http://json-schema.org/schema#",
        "type": "object",
        "description": "Buttons are for clickin' and tappin'!",
        "properties": {
          "text": {
            "type": "string",
            "title": "Button Text"
          },
          "url": {
            "type": "string"
          },
          "size": {
            "type": "string",
            "enum": ["small", "medium", "large", "jumbo"]
          },
          "color": {
            "type": "string",
            "default": "green",
            "title": "BG Color",
            "enum": [
              "blue",
              "blue--light",
              "green",
              "iron",
              "yellow",
              "white",
              "black"
            ]
          }
        },
        "required": ["text", "url"]
      }
    }
  },
  "required": ["text", "url"]
};
/* eslint-enable */

export const components = [
  {
    template: '@components/_hero.twig',
    id: 'hero',
    title: 'Hero',
    data: {
      title: title(),
      body: paragraph(),
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
    },
  },
  {
    template: '@components/_media-tile.twig',
    id: 'media-tile',
    title: 'Media Tile',
    demoSizes: ['400px'],
    data: {
      title: title(),
      body: paragraph(),
      background_image: image(),
      title_text_color: 'white',
      body_text_color: 'white',
      content_padding: 'l',
      text_align: 'center',
      title_size: '2',
    },
  },
  {
    template: '@components/_media-block.twig',
    id: 'media-block',
    title: 'Media Block',
    schema: mediaBlockSchema,
    demoSizes: ['500px', '800px'],
    isPropsTableOpen: true,
    data: {
      title: title(),
      body: paragraph(),
      media: image(),
      media_alignment: 'top',
    },
  },
];
