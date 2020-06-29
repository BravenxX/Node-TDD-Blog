const express = require('express');
const parser = require('body-parser');

const { axios } = require('./services/index');
const { posts } = require('./endpoints');
const { authenticate } = require('./middlewares');

const app = express();

app.use(parser.urlencoded({ extended: false }));

app.use(parser.json());

const postsHandlers = posts({ axios });

app.post('/', authenticate, postsHandlers.post);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Example app listening on port 3000!');
});

module.exports = app;
