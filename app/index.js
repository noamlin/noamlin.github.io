"use strict";

const path = require('path');
const baseDir = path.resolve(__dirname, '../');
const express = require('express');
const app = express();
const port = 1337;
const { Liquid } = require('liquidjs');
const liquidEngine = new Liquid({ cache: false });

let thisYear = (new Date()).getFullYear();

app.engine('liquid', liquidEngine.express());
app.set('views', `${baseDir}/views`);
app.set('view engine', 'liquid');

app.use('/public', express.static(`${baseDir}/public/`));

let mainMenu = [{name: 'Projects', href: '/projects'}, {name: 'Contact', href: '/contact'}];
app.get('/', (req, res) => {
	res.render('index.liquid', { menu: mainMenu });
});
app.get('/projects', (req, res) => {
	res.render('projects.liquid', { menu: mainMenu });
});
app.get('/contact', (req, res) => {
	res.render('contact.liquid', { menu: mainMenu });
});

let ohMenu = [{name: 'Getting Started', href: '/oh'}, {name: 'API', href: '/oh/api'}, {name: 'Demos', href: '/oh/demos'}];
app.get('/oh', (req, res) => {
	res.render('oh/index.liquid', { menu: ohMenu });
});
app.get('/oh/api', (req, res) => {
	res.render('oh/api.liquid', { menu: ohMenu });
});
app.get('/oh/demos', (req, res) => {
	res.render('oh/demos.liquid', { menu: ohMenu });
});

let proxserveMenu = [{name: 'Getting Started', href: '/proxserve'}, {name: 'API', href: '/proxserve/api'}, {name: 'Demos', href: '/proxserve/demos'}];
app.get('/proxserve', (req, res) => {
	res.render('proxserve/index.liquid', { menu: proxserveMenu });
});
app.get('/proxserve/api', (req, res) => {
	res.render('proxserve/api.liquid', { menu: proxserveMenu });
});
app.get('/proxserve/demos', (req, res) => {
	res.render('proxserve/demos.liquid', { menu: proxserveMenu });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});