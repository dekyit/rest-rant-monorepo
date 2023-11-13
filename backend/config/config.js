require('dotenv').config()

module.exports = {
  "development": {
    "username": "postgres",
    "password": "THEOmonkey123",
    "database": "rest_rant_auth",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "postgres",
    "password": "THEOmonkey123",
    "database": "rest_tant_auth",
    "host": "127.0.0.1",
    "dialect": "postgres"
},

}
