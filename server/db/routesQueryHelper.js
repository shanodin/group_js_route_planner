var MongoClient = require('mongodb').MongoClient

var routesQueryHelper = {
  url: 'mongodb://localhost:27017/route_planner',
  all: function (onQueryFinished) {
    MongoClient.connect(this.url, function (err, db) {
      var routesCollection = db.collection('routes')

      routesCollection.find().toArray(function (err, docs) {
        onQueryFinished(docs)
      })
    })
  },
  find: function (routeName, onQueryFinished) {
    MongoClient.connect(this.url, function (err, db) {
      var routesCollection = db.collection('routes')

      routesCollection.find({ name: routeName }).toArray(function (err, docs) {
        onQueryFinished(docs)
      })
    })
  },
  
  save: function (routeToSave, onQueryFinished) {
    MongoClient.connect(this.url, function (err, db) {
      var routesCollection = db.collection('routes')
      routesCollection.insert(routeToSave)
      routesCollection.find().toArray(function (err, docs) {
        onQueryFinished(docs)
      })
    })
  }
}

module.exports = routesQueryHelper
