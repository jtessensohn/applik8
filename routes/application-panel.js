const db = require('../models')
const express = require('express');
const { application } = require('express');
const app = require('../app');
const checkAuth = require('../checkAuth');
const user = require('../models/user');
// const { route } = require('.');


const router = express.Router({
    caseSensitive: true
});

// function getUserId() {
//     db.User.findAll()
//     .then((users) => {
//         users.forEach((user) => {
//             if (!req.session.user) {
//                 return null
//             } else if (req.session.user) {
//                 return user.UserId
//             }
//         })
//     })
// }

// let userId = getUserId();
// console.log(userId)


router.post('/', checkAuth, (req, res) => {
    db.Application.create({
        company: req.body.company,
        position: req.body.position,
        salary: req.body.salary,
        appDate: req.body.date,
        followUpDate: req.body.datefollow,
        notes: req.body.notes
        // UserId
    }).then(application => {
        res.redirect('/application');
    }).catch(error => {
        if (error.errors) {
            res.json(error.errors.map(e => e.message))
        } else {
            res.json({error: 'failed to create application'})
        }

        })
    })



router.get('/', checkAuth, function (req, res) {


    db.Application.findAll()
        .then(applications => {
            res.render('application-panel', {
                locals: {
                    applications
                }
            });
        })
})


router.patch('/', checkAuth, function (req, res) {
    db.Application.create({
        company: req.body.company,
        position: req.body.position,
        salary: req.body.salary,
        appDate: req.body.date,
        followUpDate: req.body.datefollow,
        notes: req.body.notes
    })
    .then(application => {
        res.redirect('/application');
    }).catch(error => {
        if (error.errors) {
        res.json(error.errors.map(e => e.message))
        } else {
            res.json({error: 'failed to create application'})
        }

        })
    })



module.exports = router