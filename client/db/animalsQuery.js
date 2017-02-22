//builds a query for the database
var MongoClient = require('mongodb').MongoClient;
var AnimalsQuery = function(){
  this.url = 'mongodb://localhost:27017/animals_site';//animals-site is the name of the db
};
AnimalsQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err,db){
      if(db){
        var collection = db.collection('animals');
        collection.find().toArray(function(err,docs) {
          onQueryFinished(docs);//callback - filmrouter.get in films.js, the doc is the database that returns an array 
        });
      }

    });
  }
}


module.exports = AnimalsQuery;