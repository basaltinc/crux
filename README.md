# [Basalt](http://basalt.io) Design System

Hosted at <http://design.basalt.io> - deployed to every time new changes on `master`

## Requirements

- `yarn` v1+
- `composer` v1+
- node.js 6+, preferably 8+

## Setup

```bash
yarn install
```

### Editor setup

- Ignore indexing of these directories:
    - node_modules
    - build
    - pattern-lab/vendor
- Install Editor Config plugin

## Commands

- `npm start` - Compile, start all watches and local server
- `npm run compile` - Compile with compression turned on
- `npm test` - Run all linting
- `npm run new` - Create a new component, gives a bunch of starting files.

## Orientation

- `pattern-lab/`
    - `source/`
        - `_patterns/` - Contains all top level menu items seen in Pattern Lab
            - `00-styleguide/` - Twig Namespace: `@styleguide`
            - `02-layouts/` - Twig Namespace: `@layouts`
            - `03-components/` - Twig Namespace: `@components`
            - `04-templates/` - Twig Namespace: `@templates`
        
## Integration with CMS

The Basalt [CMS repo](https://bitbucket.org/basaltinc/our-cms) uses this repo by depending on released version.

### Releasing new versions of this

We use Semantic Versioning for our versions: MAJOR.MINOR.PATCH - if you were to release a MINOR update, execute this command:

```bash
npm version minor
```

Afterwards push it up. Be sure to push up the tags as well like so:

```bash
git push
git push --tags
```

It may be more convenient to [set your git to always push tags](https://stackoverflow.com/questions/3745135/push-git-commits-tags-simultaneously) by running:

```bash
git config --global push.followTags true
```

Then, a simple `git push` will do.

### Developing in this repo and CMS together

Assuming the two repos are next to each other like so:

- `basalt-site/` (just a folder)
    - `our-design-system/` (the current repo)
    - `our-cms/` ([this repo](https://bitbucket.org/basaltinc/our-cms))
    
After setting both up, and navigating to the `our-cms` directory, run:

```bash
npm link ../our-design-system
```

Now, there should be a symlink from `our-cms/node_modules/our-design-system` to the actual `our-design-system` repo.

1. Make changes needed in `our-design-system`
1. After they are merged and a release is done, you'll have a new tag (like `v1.2.3`)
1. Update `package.json` in `our-cms` to use the new tag. This change is in the PR that go along with the other changes needed.
