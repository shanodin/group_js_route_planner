use route_planner;

db.waypoints.drop();

db.waypoints.insert([
  {
    name: "Edinburgh Castle",
    type: "Cultural",
    latLng: {lat: 55.9485977,lng: -3.2021022},
    notes: "Impressive, but costly."
  },
  {
    name: "Royal Scots Greys Monument",
    type: "Cultural",
    latLng: {lat: 55.951377, lng: -3.199189},
    notes: "Good views."
  },
  {
    name: "Mary's Milk Bar",
    type: "Refreshment",
    latLng: {lat: 55.9467765, lng: -3.1976066 },
    notes: "Best icecream in the world!"
  },
  {
    name: "The Bow Bar",
    type: "Refreshment",
    latLng: {lat: 55.9484338, lng: -3.194161 },
    notes: "Named as the best pub in Scotland; impressive selection of whiskys."
  },
  {
    name: "David Hume Statue on Royal Mile",
    type: "Cultural",
    latLng: {lat: 55.9495638, lng: -3.1946293},
    notes: "Great place to meet."
  },
  {
    name: "Calton Hill",
    type: "Views",
    latLng: {lat: 55.955276, lng: -3.182448},
    notes: "Beautiful views of the city."
  },
  {
    name: "National Museum of Scotland",
    type: "Cultural",
    latLng: {lat: 55.9475222, lng:-3.1898245},
    notes: "Incredible cultural resource; great for kids."
  },
  {
    name: "Abbey Sanctuary - Historic Scotland",
    type: "Cultural",
    latLng: { lat: 55.9521635, lng: -3.1751286},
    notes: "Beautiful Abbey at the base of the Royal Mile"
  },
  {
    name: "Usher Hall",
    type: "Cultural",
    latLng: {lat: 55.947161, lng: -3.205015},
    notes: "Feeling like some classical music or a show?"
  },
  {
    name: "Princes Street Gardens",
    type: "Views",
    latLng: {lat: 55.950489, lng: -3.201325},
    notes: "Lovely gardens and views of the castle."
  },
  {
    name: "Grassmarket",
    type: "Refreshment",
    latLng: {lat: 55.947946, lng: -3.196184},
    notes: "Street performers, the oldest pub in Edinburgh, and a great place to get lost."
  },
  {
    name: "Vennel, Edinburgh",
    type: "Views",
    latLng: {lat: 55.946808, lng: -3.197568},
    notes: "Great view of the castle."
  },
  {
    name: "Royal Mile",
    type: "Views",
    latLng: {lat: 55.950345, lng: -3.1884853},
    notes: "Packed with tourists, but still a great place to wander!"
  },
  {
    name: "Advocate's Close",
    type: "Views",
    latLng: {lat: 55.9500756, lng: -3.1935282},
    notes: "Beautiful example of old city architecture."
  },
  {
    name: "National Library Edinburgh",
    type: "Cultural",
    latLng: {lat: 55.948718, lng: -3.1956766},
    notes: "A great resource for silverfish and readers."
  },
  {
    name: "New College, The University of Edinburgh",
    type: "Views",
    latLng: {lat: 55.949477, lng: -3.1973878},
    notes: "The center of higher education in Edinburgh."
  },
  {
    name: "Circus Lane",
    type: "Views",
    latLng: {lat: 55.9584183, lng: -3.2120754},
    notes: "Great place to get lost."
  },
  {
    name: "Dean Village",
    type: "Views",
    latLng: {lat: 55.9525617, lng: -3.2221507 },
    notes: "One of the most Instagrammable places in the city."
  },
  {
    name: "Royal Botanic Garden Edinburgh",
    type: "Views",
    latLng: {lat: 55.9652527, lng: -3.2114196 },
    notes: "Beautiful free gardens; you'll occasionally see Quidditch."
  },
  {
    name: "Arthur's Seat",
    type: "Views",
    latLng: {lat: 55.944897, lng:  -3.161385 },
    notes: "A great hike, and incredible views down on the city."
  },
  {
    name: "Scott Monument",
    type: "Views",
    latLng: {lat: 55.952404, lng: -3.193445 },
    notes: "The largest monument to a writer in the world."
  },
  {
    name: "Artisan Roast Broughton Street",
    type: "Refreshment",
    latLng: {lat: 55.9577767, lng: -3.1908393 },
    notes: "The baristas are a bit stuck up, but that's because they have the best coffee in the city."
  },
  {
    name: "Barony Bar, Edinburgh",
    type: "Refreshment",
    latLng: {lat: 55.9580812, lng: -3.1911813 },
    notes: "Great old pub."
  },
  {
    name: "Guildford Arms",
    type: "Refreshment",
    latLng: {lat: 55.9536723, lng: -3.1926977 },
    notes: "Historic pub in the city centre."
  },
  {
    name: "The Olive Branch Broughton Street",
    type: "Refreshment",
    latLng: {lat: 55.9579823, lng: -3.1896445 },
    notes: "A wonderful restaurant."
  },
  {
    name: "Oink Hog Roast",
    type: "Refreshment",
    latLng: {lat: 55.9530188, lng: -3.1994331 },
    notes: "The best pulled pork you'll ever have."
  },
  {
    name: "Henderson's Vegan Restaurant",
    type: "Refreshment",
    latLng: {lat: 55.954271, lng: -3.2001623 },
    notes: "The center of the vegetarian/vegan community, and healthy eating."
  },
  {
    name: "Scottish National Portrait Gallery",
    type: "Cultural",
    latLng: {lat: 55.955512, lng: -3.193388 },
    notes: "Brilliant, cutting edge photography gallery."
  },
  {
    name: "The Writers' Museum",
    type: "Cultural",
    latLng: {lat: 55.9496415, lng: -3.1982412 },
    notes: "A wonderful place if you like words."
  },
  {
    name: "Surgeons' Hall Museums",
    type: "Cultural",
    latLng: {lat: 55.94667, lng: -3.1869197 },
    notes: "Grisly. Gory. Great."
  },
  {
    name: "Scottish National Gallery, The Mound",
    type: "Cultural",
    latLng: {lat: 55.950902, lng: -3.1978749},
    notes: "Great gallery."
  },
  {
    name: "Johnston Terrace",
    latLng: {lat: 55.948078, lng: -3.202313}
  }
])
