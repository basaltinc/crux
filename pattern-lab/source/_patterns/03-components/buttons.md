All about the Button.

### Variables:

#### Elements

- `url` (string)
- `text` (string)

#### Modifiers

- `size` (string, one of: 'small', 'large')
- `yellow` (boolean, default: false) - Make it Yellow

#### How to use:

```twig
{% include '@components/_button.twig' with {
  url: '#',
  text: 'Text',
} only %}
```
