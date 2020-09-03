"use strict";

const fs = require('fs');
const nunjucksEnv = require('./nunjucks-env.js');
const njks = [
	{path: 'homepage.njk', dest: 'pages/homepage.njk'},
	{path: 'projects.njk', dest: 'pages/projects.njk'},
	{path: 'contact.njk', dest: 'pages/contact.njk'},

	{path: 'oh/getting-started.njk', dest: 'pages/oh/getting-started.njk'},
	{path: 'oh/api.njk', dest: 'pages/oh/api.njk'},
	{path: 'oh/demos.njk', dest: 'pages/oh/demos.njk'},

	{path: 'proxserve/getting-started.njk', dest: 'pages/proxserve/getting-started.njk'},
	{path: 'proxserve/api.njk', dest: 'pages/proxserve/api.njk'},
	{path: 'proxserve/demos.njk', dest: 'pages/proxserve/demos.njk'}
];

for(let item of njks) {
	fs.writeFile(item.dest, nunjucksEnv.render(item.path), (err) => {
		if(err) console.error(err);
		else console.log(`file ${item.dest} created`);
	});
}