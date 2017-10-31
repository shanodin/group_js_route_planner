use route_planner;

db.waypoints.drop();

db.waypoints.insert([
  {
    name: "Edinburgh Castle",
    type: "Cultural",
    latlng: {lat: 55.9485977,lng: -3.2021022},
    notes: "Impressive, but costly."
  },
  {
    name: "The Royal Scots Greys Monument",
    type: "Cultural",
    latLng: {lat: 55.9513882, lng: -3.2015284},
    notes: "Good views."
  },
  {
    name: "Ross Fountain",
    type: "Cultural",
    latLng: {lat: 55.9500784, lng: -3.2052505 },
    notes: "Beautiful, but you may miss it."
  },
  {
    name: "Mary's Milk Bar",
    type: "Refreshment",
    latLng: {lat: 55.9468753, lng: -3.1996168 },
    notes: "They sell out of their delicious ice cream every day; get there early!"
  },
  {
    name: "The Bow Bar",
    type: "Refreshment",
    latLng: {lat: 55.9484368, lng: -3.1963726 },
    notes: "Named as the best pub in Scotland; impressive selection of whiskys."
  },
  {
    name: "David Hume Statue on royal mile",
    type: "Cultural",
    latLng: {lat: 55.9495668, lng: -3.1946293},
    notes: "Great place to meet."
  },
  {
    name: "Calton Hill",
    type: "Views",
    latLng: {lat: 55.9550577, lng: -3.1914957},
    notes: "Beautiful views of the city."
  },

  {
    name: "National Museum of Scotland",
    type: "Cultural",
    latLng: {lat: 55.9471934, lng: -3.1913566},
    notes: "Incredible cultural resource; great for kids."
  },
  {
    name: "Princes Street Gardens",
    type: "Garden",
    latLng: {lat: 55.949558, lng: -3.2008877},
    notes: "Lovely gardens and views of the castle."
  },
  {
    name: "Grassmarket",
    type: "Refreshment",
    latLng: {lat: 55.947306, lng: -3.1985009},
    notes: "Street performers, the oldest pub in Edinburgh, the former gallows, and a great place to get lost."
  },
  {
    name: "Vennel, Edinburgh",
    type: "Views",
    latLng: {lat: 55.9463136, lng: -3.1993011},
    notes: "One of the most Instagrammable places in the city."
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
    notes: "One of the most Instagrammable places in the city."
  },
  {
    name: "National Library Edinburgh",
    type: "Instagrammable",
    latLng: {lat: 55.948718, lng: -3.1956766},
    notes: "One of the most Instagrammable places in the city.  Great food and bars."
  },
  {
    name: "New College, The University of Edinburgh",
    type: "Instagrammable",
    latLng: {lat: 55.94948, lng: -3.1973878},
    notes: "The center of higher education in Edinburgh."
  },
  {
    name: "Circus Lane",
    type: "Instagrammable",
    latLng: {lat: 55.9581228, lng: -3.2071623},
    notes: "One of the most Instagrammable places in the city."
  },
  {
    name: "Dean Village",
    type: "Instagrammable",
    latLng: {lat: 55.9526915, lng: -3.2216696 },
    notes: "One of the most Instagrammable places in the city."
  },
  {
    name: "Belford Mews",
    type: "Instagrammable",
    latLng: {lat: 55.9516549, lng: -3.2219253 },
    notes: "One of the most Instagrammable places in the city."
  },
  {
    name: "Royal Botanic Garden Edinburgh",
    type: "Gardens",
    latLng: {lat: 55.9652527, lng: -3.2114196 },
    notes: "Beautiful free gardens; you'll occasionally see Quidditch."
  },
  {
    name: "Arthur's Seat",
    type: "Views",
    latLng: {lat: 55.9555813, lng: -3.2038221 },
    notes: "A great hike, and incredible views down on the city."
  },
  {
    name: "Scott Monument",
    type: "Monument",
    latLng: {lat: 55.952381, lng: -3.1954628 },
    notes: "The largest monument to a writer in the world."
  },
  {
    name: "Artisan Roast Broughton Street",
    type: "Refreshment",
    latLng: {lat: 55.9582853, lng: -3.1916766 },
    notes: "The baristas are a bit stuck up, but that's because they have the best coffee in the city."
  },
  {
    name: "Barony Bar, Edinburgh",
    type: "Refreshment",
    latLng: {lat: 55.9582853, lng: -3.1916766 },
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
    latLng: {lat: 55.9585444, lng: -3.1919068 },
    notes: "A wonderful restaurant."
  },
  {
    name: "Oink Hog Roast",
    type: "Refreshment",
    latLng: {lat: 55.948607, lng: -3.1964291 },
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
    type: "Museum",
    latLng: {lat: 55.955501, lng: -3.1957337 },
    notes: "Brilliant, cutting edge photography gallery."
  },
  {
    name: "The Writers' Museum",
    type: "Museum",
    latLng: {lat: 55.9496415, lng: -3.1960525 },
    notes: "A wonderful place if you like words."
  },
  {
    name: "National War Museum Edinburgh",
    type: "Museum",
    latLng: {lat: 55.9488879, lng: -3.2039589 },
    notes: "We included it because we needed another museum on the list. Has anyone actually been here?"
  },
  {
    name: "Surgeons' Hall Museums",
    type: "Museum",
    latLng: {lat: 55.94667, lng: -3.1869197 },
    notes: "Grisly.  Gory.  Great."
  },
  {
    name: "Scottish National Gallery, The Mound",
    type: "Museum",
    latLng: {lat: 55.950902, lng: -3.1978749},
    notes: "Great gallery."
  },
])
