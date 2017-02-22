var express = require('express');
//var app = express();
var animalsRouter = express.Router();

var AnimalsQuery = require('../client/db/animalsQuery');
var query = new AnimalsQuery();

animalsRouter.get('/', function(req, res){
  query.all(function(results){
    res.json(results);
  });
});


module.exports = animalsRouter;