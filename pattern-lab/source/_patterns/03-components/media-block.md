---
title: Media Block
---
#### Variables:

- `title` (string) - The big title text
- `body` (string) - Can contain HTML
- `media` (string, required) - Path to Image
- `media_on_right` (boolean, default: false) - Place image on right instead of left. 
- `show_full_media` (boolean, default: false) - Show full image. Default is to "cover" the whole side the media item is on: this allows matching the height of the text but does not show full media item.

#### How to use:

```twig
{% include '@components/_media-block.twig' with {
  title: '',
  body: '',
  media_on_right: true,
  show_full_media: true,
} %}
```
