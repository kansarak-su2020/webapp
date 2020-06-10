var express = require('express');
var router = express.Router();
const db = require("../models");

const {
  ensureAuthenticated
} = require('../config/auth');

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
    db.authors.count().then(c => {
      if(c == 0){
          let authorData = [
              {'name':'William Shakespeare', 'createdAt': '2020-01-01 00:00:00', 'updatedAt': '2020-01-01 00:00:00'},
              {'name':'Agatha Christie', 'createdAt': '2020-01-01 00:00:00', 'updatedAt': '2020-01-01 00:00:00'},
              {'name':'Barbara Cartland', 'createdAt': '2020-01-01 00:00:00', 'updatedAt': '2020-01-01 00:00:00'},
              {'name':'Danielle Steel', 'createdAt': '2020-01-01 00:00:00', 'updatedAt': '2020-01-01 00:00:00'},
              {'name':'Stephen King', 'createdAt': '2020-01-01 00:00:00', 'updatedAt': '2020-01-01 00:00:00'},
              {'name':'Leo Tolstoy', 'createdAt': '2020-01-01 00:00:00', 'updatedAt': '2020-01-01 00:00:00'},
              {'name':'Ernest Hemingway', 'createdAt': '2020-01-01 00:00:00', 'updatedAt': '2020-01-01 00:00:00'},
              {'name':'J. K. Rowling', 'createdAt': '2020-01-01 00:00:00', 'updatedAt': '2020-01-01 00:00:00'},
              {'name':'Mark Twain', 'createdAt': '2020-01-01 00:00:00', 'updatedAt': '2020-01-01 00:00:00'},
              {'name':'Charles Dickens', 'createdAt': '2020-01-01 00:00:00', 'updatedAt': '2020-01-01 00:00:00'},
              {'name':'Franz Kafka', 'createdAt': '2020-01-01 00:00:00', 'updatedAt': '2020-01-01 00:00:00'}
          ];
          db.authors.bulkCreate(authorData, { individualHooks: true })
      }
  });
  res.render('index', { title: 'Kinnar' });
});

module.exports = router;
