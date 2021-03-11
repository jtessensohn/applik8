const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const es6Renderer = require('express-es6-template-engine');
const db = require("./models")


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const chartPathRouter = require('./routes/chartpath');

const app = express();

app.engine('html', es6Renderer)
app.set('views', 'templates')
app.set('view engine', 'html')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chartpath', chartPathRouter);

app.get('/', (req, res) => {
  res.render('home');
})

// app.get('/chartpath', (req, res) => {
//   res.render('chartpath')
// })


module.exports = app;
