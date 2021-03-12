var express = require('express');
var router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');
const app = require('../app');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/')
    })

router.post('/register', async (req, res) => {
  const users = await db.User.findAll({
    where: {
      email: req.body.email
    }
  })
  if (users.length) {
    return res.status(422).json({ error: 'email already in use' });
  }


  if (!req.body.email || !req.body.password) {
    return res.status(422).json({ error: 'please include all required fields' });
  }

  const hash = await bcrypt.hash(req.body.password, 10)

  const newUser = await db.User.create({
    email: req.body.email,
    password: hash
  })
  res.redirect('/users')

  res.json(newUser)
})

router.post('/login', async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(422).render('error', {
      locals: { error: 'please include all required fields' }
    })
  }

  const user = await db.User.findOne({
    where: {
      email: req.body.email
    }
  })

  if (!user) {
    return res.status(404).render('error', {
      locals: { error: 'could not find user with that email' }
    })
  }

  req.session.user = user;

  res.redirect('/application')
})

router.get('/logout', (req, res) => {
  req.session.user = null;

  res.redirect('/')
})

module.exports = router;
