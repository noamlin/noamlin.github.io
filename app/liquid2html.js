"use strict";

const path = require('path');
const baseDir = path.resolve(__dirname, '../');
const fs = require('fs');
const { Liquid } = require('liquidjs');

let menus = {
	noamlin: [
		{name: 'Projects', href: '/projects'},
		{name: 'Contact', href: '/contact'}
	],
	oh: [
		{name: 'About', href: '/'},
		{name: 'Getting Started', href: '/getting-started'},
		{name: 'API', href: '/api'},
		{name: 'Demos', href: '/demos'}
	],
	proxserve: [
		{name: 'About', href: '/'},
		{name: 'Getting Started', href: '/getting-started'},
		{name: 'API', href: '/api'},
		{name: 'Demos', href: '/demos'}
	]
};

const liquidEngine = new Liquid({
	root: `${baseDir}/views`,
	globals: {
		menus: menus,
		noamlinUrl: `https://www.noaml.in`,
		ohUrl: 'https://oh.noaml.in',
		proxserveUrl: 'https://proxserve.noaml.in'
	}
});

const pages = ['index.liquid', 'projects.liquid', 'contact.liquid',
	'oh/index.liquid', 'oh/getting-started.liquid', 'oh/api.liquid', 'oh/demos.liquid',
	'proxserve/index.liquid', 'proxserve/getting-started.liquid', 'proxserve/api.liquid', 'proxserve/demos.liquid'
];

for(let page of pages) {
	let dest = 'site-pages/' + page.slice(0, page.lastIndexOf('.')) + '.html';

	liquidEngine.renderFile(page).then((htmlStr) => {
		fs.writeFile(`${baseDir}/${dest}`, htmlStr, (err) => {
			if(err) console.error(err);
			else console.log(`file ${dest} created`);
		});
	}, (reason) => {
		console.error(`failed to render ${dest} because of `, reason)
	});
}