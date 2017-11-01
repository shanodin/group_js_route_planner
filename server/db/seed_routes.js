use route_planner;
db.dropDatabase();

db.routes.insert([
  {
    name: "Three hour route",
    origin: {lat: 55.9519361, lng: -3.1917565},
    destination: {lat: 55.9519361, lng: -3.1917565},
    waypoints:[{location: "Scott Monument", stopover: true},
    {location: "Royal Scots Greys Monument", stopover: true},
    {location: "Princes Street Gardens", stopover: true},
    {location: "Usher Hall", stopover: true},
    {location: "Mary's Milk Bar", stopover: true},
    {location: "The Bow Bar", stopover: false},
    {location: "David Hume Statue on Royal Mile", stopover: true},
    {location: "Bella Italia Edinburgh Northbridge", stopover: true}]
  },

  {
    name: "Six Hour Route",
    origin: {lat: 55.9519361, lng: -3.1917565},
    destination: {lat: 55.9519361, lng: -3.1917565},
    waypoints:[{location: "Scott Monument", stopover: true},
    {location: "The Royal Scots Greys Monument", stopover: true},
    {location: "Princes Street Gardens", stopover: true},
    {location: "Usher Hall", stopover: true},
    {location: "Mary's Milk Bar", stopover: true},
    {location: "The Bow Bar", stopover: false},
    {location: "David Hume Statue on Royal Mile", stopover: true},
    {location: "Abbey Sanctuary - Historic Scotland", stopover: true},
    {location: "Calton Hill", stopover: true}]
  },

  {
    name: "Eight Hour Route",
    origin: {lat: 55.9519361, lng: -3.1917565},
    destination: {lat: 55.9519361, lng: -3.1917565},
    waypoints:[
      {location: "Scott Monument", stopover: true},
      {location: "The Royal Scots Greys Monument", stopover: true},
      {location: "Princes Street Gardens", stopover: true},
      {location: "Usher Hall", stopover: true},
      {location: "Mary's Milk Bar", stopover: true},
      {location: "The Bow Bar", stopover: false},
      {location: "David Hume Statue on Royal Mile", stopover: true},
      {location: "Abbey Sanctuary - Historic Scotland", stopover: true},
      {location: "Calton Hill", stopover: true},
      {location: "Scottish National Portrait Gallery", stopover: true}
    ]
  },

  {
    name: "Insta Edinburgh",
    origin: {lat: 55.9519361, lng: -3.1917565},
    destination: {lat: 55.9519361, lng: -3.1917565},
    waypoints:[
      {location: "National Museum of Scotland", stopover: true},
      {location: "Princes Street Gardens", stopover: true},
      {location: "Grassmarket", stopover: true},
      {location: "Vennel Edinburgh", stopover: true},
      {location: "Royal Mile", stopover: true},
      {location: "Advocate's Close", stopover: true},
      {location: "National Library Edinburgh", stopover: false},
      {location: "New College University of Edinburgh", stopover: true},
      {location: "Calton Hill", stopover: true},
      {location: "Circus Lane Edinburgh", stopover: true},
      {location: "Dean Village", stopover: true},
      {location: "Royal Botanic Garden Edinburgh", stopover: true},
      {location: "Arthur's Seat", stopover: true}
    ]
  }

])

// db.routes.find()
