# d2l-hm-constants-behavior

A [Polymer](https://www.polymer-project.org/1.0/)-based list of constants useful when using hypermedia.

For further information on this and other D2L UI components, see the docs at [ui.developers.brightspace.com](http://ui.developers.brightspace.com/).

## Installation

`d2l-hm-constants-behavior` can be installed from Bower:
```shell
bower install git://github.com/Brightspace/d2l-hm-constants-behavior.git#^1.0.0
```

## Usage
```js
behaviors: [
	window.D2L.Hypermedia.HMConstantsBehavior
],
```

## `npm` Module

The constants are also available as an `npm` module for use with Node.js.

```sh
npm install --save Brightspace/d2l-hm-constants-behavior
```

```js
const HypermediaConstants = require('d2l-hypermedia-constants');
console.log(HypermediaConstants.Rels.Organization); // https://api.brightspace.com/rels/organziation
```

## Releases

To generate a new release of both the Polymer behaviour and the `npm` module,

```sh
npm version [major|minor|patch] -m "New version: %s"
git push origin master --tags
```

This will update the version in the package.json file, commit that, and generate the new tag that will be used by Bower to install the Polymer behaviour.

## Coding styles

See the [Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.
