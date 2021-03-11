var express = require('express');
const db = require('../models');
var router = express.Router();




router.get('/', function(req, res, next) { // /:id
    res.render("chartpath")
});



router.get("/title", async (req, res) => {
  const data = await db.SalaryRate.findAll()
  res.json(data)

})




module.exports = router;
