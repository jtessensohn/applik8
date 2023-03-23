require("dotenv").config()
const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./models');
const logger = require('morgan');
const es6Renderer = require('express-es6-template-engine');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const applicationRouter = require('./routes/application-panel')
const chartPathRouter = require('./routes/chartpath');


const app = express();

app.engine('html', es6Renderer)
app.set('views', 'templates')
app.set('view engine', 'html')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const store = new SequelizeStore({ db: db.sequelize })
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 2592000,
    },
    store: store,
  })
)
store.sync();
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/application', applicationRouter)
app.use('/chartpath', chartPathRouter);


app.get('/', (req, res) => {
  res.render('home');
})

app.get('/register', (req, res) => {
  res.render('register');
})
// app.get('/chartpath', (req, res) => {
//   res.render('chartpath')
// })

app.use('../public/images/', express.static('../public/images'));

module.exports = app;
