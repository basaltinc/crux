#### Variables:

- `title` (string) - The big title text
- `body` (string) - Can contain HTML
- `media` (string, required) - Path to Image
- `media_on_right` (boolean, default: false) - Place image on right instead of left. 

#### How to use:

```twig
{% include '@components/_media-block.twig' with {
  title: '',
  body: '',
  media_on_right: true,
} %}
```
