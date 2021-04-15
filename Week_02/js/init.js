// JavaScript const variable declaration
const map = L.map('map').setView([36.3151, -170.8594], 1);

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//JavaScript let variable declaration to create a marker
let marker = L.marker([33.6163, -117.8754]).addTo(map)
       .bindPopup('Newport Beach, CA, USA<br> my scene of bliss whenever I choose to ignore reality')
       // .openPopup();
 
fetch("js/map.geojson")
.then(response => {
   return response.json();
   })
.then(data =>{
   // Basic Leaflet method to add GeoJSON data
                   // the leaflet method for adding a geojson
       L.geoJSON(data, {
           style: function (feature) {
               return {color: 'red'};
           }
       }).bindPopup(function (layer) {
           return layer.feature.properties.name;
       }).addTo(map);
       L.marker([33.6163, -117.8754]).addTo(map)
            .bindPopup('<strong>Newport Beach, CA, USA</strong><br> My scene of bliss whenever<br> I choose to ignore reality!')
            .openPopup();
       L.marker([37.3320, -121.8575]).addTo(map)
            .bindPopup('<strong>Cupertino Main Street, CA, USA</strong><br>the place that I draw most and<br> where I find my inspiration!')
            .openPopup();
       L.marker([20.9576, -252.9272]).addTo(map)
            .bindPopup('<strong>Ha Long Bay, Vietnam</strong><br>Last when here four years ago<br>but my mind always come back here<br>whenever I am stressed!')

   });
  
  
   function customMarker (feature, latlng) {
   return L.circleMarker(latlng, { color: feature.properties.color })
   }            