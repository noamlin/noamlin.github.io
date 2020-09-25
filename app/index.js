"use strict";

const path = require('path');
const baseDir = path.resolve(__dirname, '../');
const express = require('express');
const app = express();
const port = 1337;
const { Liquid } = require('liquidjs');

let menus = {
	noamlin: [
		{name: 'Projects', href: '/projects'},
		{name: 'Contact', href: '/contact'}
	],
	oh: [
		{name: 'About', href: '/oh'},
		{name: 'Getting Started', href: '/oh/getting-started'},
		{name: 'API', href: '/oh/api'},
		{name: 'Demos', href: '/oh/demos'}
	],
	proxserve: [
		{name: 'About', href: '/proxserve'},
		{name: 'Getting Started', href: '/proxserve/getting-started'},
		{name: 'API', href: '/proxserve/api'},
		{name: 'Demos', href: '/proxserve/demos'}
	]
};

const liquidEngine = new Liquid({
	cache: false,
	globals: {
		menus: menus,
		noamlinUrl: `http://localhost:${port}`,
		ohUrl: '/oh',
		proxserveUrl: '/proxserve'
	}
});

app.engine('liquid', liquidEngine.express());
app.set('views', `${baseDir}/views`);
app.set('view engine', 'liquid');

app.use('/public', express.static(`${baseDir}/docs/public/`));

app.get('/', (req, res) => { res.render('index.liquid'); });
app.get('/projects', (req, res) => { res.render('projects.liquid'); });
app.get('/contact', (req, res) => { res.render('contact.liquid'); });
app.get('/esk8', (req, res) => { res.render('esk8.liquid'); });

app.get('/oh', (req, res) => { res.render('oh/index.liquid'); });
app.get('/oh/getting-started', (req, res) => { res.render('oh/getting-started.liquid'); });
app.get('/oh/api', (req, res) => { res.render('oh/api.liquid'); });
app.get('/oh/demos', (req, res) => { res.render('oh/demos.liquid'); });

app.get('/proxserve', (req, res) => { res.render('proxserve/index.liquid'); });
app.get('/proxserve/getting-started', (req, res) => { res.render('proxserve/getting-started.liquid'); });
app.get('/proxserve/api', (req, res) => { res.render('proxserve/api.liquid'); });
app.get('/proxserve/demos', (req, res) => { res.render('proxserve/demos.liquid'); });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});