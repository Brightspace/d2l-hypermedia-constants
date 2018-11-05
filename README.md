# d2l-hypermedia-constants

Library of constants useful when using hypermedia.

## Installation

`d2l-hypermedia-constants` can be installed from NPM:
```shell
npm install --save d2l-hypermedia-constants
```

## Usage

### Node.js

```js
const hypermediaConstants = require('d2l-hypermedia-constants');
console.log(hypermediaConstants.Actions);
console.log(hypermediaConstants.Classes);
console.log(hypermediaConstants.Rels);
```

### ES6 Module Import

```js
import {Actions, Classes, Rels} from 'd2l-hypermedia-constants';
console.log(Actions);
console.log(Classes);
console.log(Rels);
```

### ES6 Module Global

```html
<script type="module" src="../d2l-hypermedia-constants/d2l-hypermedia-constants.js"></script>
<script>
console.log(D2L.Hypermedia.Actions);
console.log(D2L.Hypermedia.Classes);
console.log(D2L.Hypermedia.Rels);
</script>
```

## Releases

To generate a new release:
```shell
npm version [major|minor|patch] -m "New version: %s"
git push origin master --tags
```

This will update the version in the package.json file, commit that, and generate a new tag.

When Travis CI runs on the tagged release, it will be deployed to NPM.

## Coding styles

See the [Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.
