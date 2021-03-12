var express = require('express');
const db = require('../models');
var router = express.Router();
const checkAuth = require('../checkAuth')




router.get('/', checkAuth, function(req, res, next) { // /:id
    res.render("chartpath")
});



router.get("/title", checkAuth, async (req, res) => {
  const data = await db.SalaryRate.findAll()
  res.json(data)

})




module.exports = router;
