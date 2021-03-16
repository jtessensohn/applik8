const db = require('../models')
const express = require('express');



const checkAuth = require('../checkAuth');





const router = express.Router({
    caseSensitive: true
});



router.post('/', checkAuth, (req, res) => {
    db.Application.create({
        company: req.body.company,
        position: req.body.position,
        salary: req.body.salary,
        appDate: req.body.date,
        followUpDate: req.body.datefollow,
        notes: req.body.notes,
        UserId: req.session.user.id
    }).then(application => {
        res.redirect('/application');
    }).catch(error => {
        if (error.errors) {
            res.json(error.errors.map(e => e.message))
        } else {
            res.json({ error: 'failed to create application' })
        }

    })
})




router.get('/', checkAuth, function (req, res) {



    db.Application.findAll({
        where: {
            UserId: req.session.user.id
        }
    })
        .then(applications => {
            res.render('application-panel', {
                locals: {
                    applications
                },
                partials: {
                    head: '/partials/head',
                    navbar: '/partials/navbar'
                }
            });
        })
})


router.patch('/:id', function (req, res) {
    // check if application exsists
    console.log(req.body)
    db.Application.update({
        company: req.body.company || application.company,
        position: req.body.position || application.position,
        salary: req.body.salary || application.salary,
        appDate: req.body.appDate || application.appDate,
        followUpDate: req.body.followUpDate || application.followUpDate,
        notes: req.body.notes || application.notes,
    }, {
        where: {
            id: req.params.id
        }
    })


        .then((application) => {
            console.log(application)
            res.json()

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

            router.delete('/:id', function (req, res) {
                console.log("DELETE application")
                Application.findByIdAndRemove(req.params.id).then((application) => {
                    res.redirect('/');
                }).catch((err) => {
                    console.log(err.message);
                })
            })
        })

    // if doesn't exist, 404
    // on success, update application (database)
    // return success response
    })

    router.delete('/:id', function (req, res) {
        db.Application.destroy({
            where: {
                id: req.params.id
            }
        }).then(deleted => {
            if (deleted === 0) {
                res.json({error: 'Error!!!'})
            }
        })
        res.status(204).json({sucess: 'Success'})
      })
      
module.exports = router
