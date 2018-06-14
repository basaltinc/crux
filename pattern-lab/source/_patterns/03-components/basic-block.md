All about the Basic Block.

### Variables:

#### Elements

- `title` (string) - Title description
- `content` (string) - Content description
- `buttons`
- `form` (boolean)

#### Modifiers

- `size` (string, on of: 'large', 'xlarge') - Font size of Content

#### How to use:

```twig
{% include '@components/_basic-block.twig' with {
  title: 'Title',
  content: 'Content',
  buttons: 'Buttons',
  form: 'Form',
} only %}
```
