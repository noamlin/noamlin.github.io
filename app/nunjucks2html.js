"use strict";

const path = require('path');
const baseDir = path.resolve(__dirname, '../');
const fs = require('fs');
const nunjucksEnv = require('./nunjucks-env.js');
const njks = ['index.njk', 'projects.njk', 'contact.njk',
	'oh/index.njk', 'oh/api.njk', 'oh/demos.njk',
	'proxserve/index.njk', 'proxserve/api.njk', 'proxserve/demos.njk'
];

for(let njkPath of njks) {
	let dest = njkPath.slice(0, njkPath.lastIndexOf('.')) + '.html';

	fs.writeFile(`${baseDir}/${dest}`, nunjucksEnv.render(njkPath), (err) => {
		if(err) console.error(err);
		else console.log(`file ${dest} created`);
	});
}