const db = require('../models')
const express = require('express');



const checkAuth = require('../checkAuth');





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