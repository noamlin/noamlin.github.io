"use strict";

const path = require('path');
const baseDir = path.resolve(__dirname, '../');
const express = require('express');
const app = express();
const port = 1337;
const nunjucksEnv = require('./nunjucks-env.js');
nunjucksEnv.express(app);

app.use('/public', express.static(`${baseDir}/public/`));
app.get('/', (req, res) => { res.render('homepage.njk'); });
app.get('/projects', (req, res) => { res.render('projects.njk'); });
app.get('/contact', (req, res) => { res.render('contact.njk'); });

app.get('/oh', (req, res) => { res.render('oh/getting-started.njk'); });
app.get('/oh/api', (req, res) => { res.render('oh/api.njk'); });
app.get('/oh/demos', (req, res) => { res.render('oh/demos.njk'); });

app.get('/proxserve', (req, res) => { res.render('proxserve/getting-started.njk'); });
app.get('/proxserve/api', (req, res) => { res.render('proxserve/api.njk'); });
app.get('/proxserve/demos', (req, res) => { res.render('proxserve/demos.njk'); });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});