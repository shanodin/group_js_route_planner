var MongoClient = require('mongodb').MongoClient


var QueryHelper = function(collection) {
  this.url = 'mongodb://heroku_w8mx3p4r:r5if80p5l96icpgk2pcgnqtnp4@ds149865.mlab.com:49865/heroku_w8mx3p4r'
  this.collection = collection;
}

QueryHelper.prototype.all = function (onQueryFinished) {
    MongoClient.connect(this.url, function (err, db) {
      var routesCollection = db.collection(this.collection)

      routesCollection.find().toArray(function (err, docs) {
        onQueryFinished(docs)
      })
    }.bind(this))
};


QueryHelper.prototype.save = function (routeToSave, onQueryFinished) {
  MongoClient.connect(this.url, function (err, db) {
    var routesCollection = db.collection(this.collection)

    routesCollection.insert(routeToSave)

    routesCollection.find().toArray(function (err, docs) {
      onQueryFinished(docs)
    })
  }.bind(this))
};

QueryHelper.prototype.find = function (routeName, onQueryFinished) {
  MongoClient.connect(this.url, function (err, db) {
    var routesCollection = db.collection(this.collection)

    routesCollection.find({ name: routeName }).toArray(function (err, docs) {
      onQueryFinished(docs)
    })
  }.bind(this))
},


module.exports = QueryHelper
