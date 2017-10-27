use  route_planner;

db.routes.drop()

db.routes.insert([
  {
    name: "3 hour route",
    origin: {lat: 55.9445594, lng: -3.1984787},
    destination: {lat:55.9604718, lng: -3.2035689},
    waypoints:[{location: "Edinburgh Castle", stopover: true}, {location: "Waverley Station", stopover: true}, {location: "Scottish National Gallery of Modern Art", stopover: true}, {location: "The Royal Scots Club", stopover: true}]
  }
])
