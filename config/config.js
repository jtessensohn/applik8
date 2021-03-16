require("dotenv").config();
module.exports = {
  "development": {
    "username": "postgres",
    "password": process.env.PASSWORD || null,
    "database": "applik8",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABSE_URL",
    "dialectOptions":{
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}
