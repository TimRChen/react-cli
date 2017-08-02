#!/usr/bin/env node
'use strict';

process.bin = 'react-init';

const importJsx = require('import-jsx');
const {h, render} = require('ink');
const meow = require('meow');

const Ui = importJsx('../src/ui');

const cli = meow(`
	Usage
	  $ react-init <project-name>

`);

render(h(Ui, cli.flags));
