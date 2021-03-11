const db = require('./models');
db.SalaryRate.findByPk(1)
.then(rate => {
    console.log(rate.title)
    console.log(rate.median)
    console.log(rate.years)
} )
