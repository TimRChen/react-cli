A simple CLI for scaffolding React.js projects base on Ink.js.

<!-- [![Build Status](https://travis-ci.org/TimRChen/react-cli.svg?branch=master)](https://travis-ci.org/TimRChen/react-cli) -->


### Installation

```js
$ npm install -g reactjs-generator-cli
```
### Usage

```js
$ react-init --help

  Usage
    react-init <project-name>

```
### Create a react-webpack item
```js
$ react-init <project-name>

$ cd <project-name>

$ npm install

$ npm run dev
```
#### Example
```js
$ react-init my-react-item
```
This will generate the project at `./my-react-item/`

### Extra

* `webpack`:  webpack-dev-server + react-hot-loader

For more informations, please view [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/)

### License

MIT © [TimRChen](https://github.com/TimRChen)