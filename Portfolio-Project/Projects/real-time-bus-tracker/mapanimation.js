mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsYWxhenJha2kiLCJhIjoiY2tvaXZuNG0zMHpmejJwbnh2enJrdDV5YyJ9.uyuo9JZoyrQ5Psv5e638-g';
var markers = [];
var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.104081, 42.365554],
      zoom: 14
  });


 async function run(){
    // get bus data    
	const locations = await getBusLocations();
	for (let i = 0;  i < locations.length; i++) {
		markers[i].setLngLat({
			lng: locations[i].attributes.longitude,
			lat: locations[i].attributes.latitude
		})
	}
	console.log(new Date());
	console.log(locations);
	// timer
	setTimeout(run, 7500);
}

async function start(){
	const locations = await getBusLocations();

	locations.forEach(element => {
	markers.push( new mapboxgl.Marker()
    .setLngLat([element.attributes.longitude, element.attributes.latitude])
    .addTo(map));
	
})}
start();

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
};

run();
