"use strict";

const path = require('path');
const baseDir = path.resolve(__dirname, '../');
const nunjucks = require('nunjucks');

const nunjucksEnv = nunjucks.configure(`${baseDir}/views`, {
	autoescape: true,
	noCache: true/*(default: false) never use a cache and recompile templates each time (server-side)*/
});
nunjucksEnv.addFilter('date', function(method) {
	let newDate = new Date();
	if(newDate[method]) return newDate[method]();
	else {
		console.error(new Error(`method "${method}" doesn't exist in date object`));
		return '';
	}
});

module.exports = nunjucksEnv;