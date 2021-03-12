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




// GET /api/todos
router.get("/api/todos", (req, res) => {
  db.query('SELECT * FROM todos todos ORDER BY id')
  .then(results => {
    res.json(results); //send back results from db as JSON response
  })
})



module.exports = router;
