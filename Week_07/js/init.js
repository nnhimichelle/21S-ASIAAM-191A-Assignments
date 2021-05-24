const map = L.map('map').setView([34.0709, -118.444], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let visiting = L.featureGroup();
let living = L.featureGroup();

let layers = {
    "Visiting Places": visiting,
    "Home Areas": living
}

L.control.layers(null,layers).addTo(map)

function addMarker(data){
    let circleOptions = {
        radius: 4,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    }
    if(data.placecondition == "I just visit this place sometimes"){
        circleOptions.fillColor = "green"
        visiting.addLayer(L.circleMarker([data.lat,data.lng], circleOptions).
        bindPopup(`<h2>${data.location}</h2>${"What makes this place special: " + data.placespecial} <p>${"Worthy Visits!"}</p>`))
        createButtons(data.lat,data.lng,data.location)
    }
    else{
        circleOptions.fillColor = "red"
        living.addLayer(L.circleMarker([data.lat,data.lng], circleOptions).
        bindPopup(`<h2>${data.location}</h2>${"What makes this place special: " + data.placespecial} <p>${"Currently Living Here"}</p>`))
        createButtons(data.lat,data.lng,data.location)   
    }
    return data.timestamp
}

function createButtons(lat,lng,title){
        const newButton = document.createElement("button"); // adds a new button
        newButton.id = "button"+title; // gives the button a unique id
        newButton.innerHTML = title; // gives the button a title
        newButton.setAttribute("lat",lat); // sets the latitude 
        newButton.setAttribute("lng",lng); // sets the longitude 
        newButton.addEventListener('click', function(){
            map.flyTo([lat,lng], 10); //this is the flyTo from Leaflet
        })
        const spaceForButtons = document.getElementById("contents")
        spaceForButtons.appendChild(newButton);//this adds the button to our page.
    }

let url = "https://spreadsheets.google.com/feeds/list/10XZjPuf6CkcUqJkHaPik-V5PBqpSb2W85QGKM6tCrks/oxj50rz/public/values?alt=json"

fetch(url)
	.then(response => {
		return response.json();
		})
    .then(data =>{
                // console.log(data)
                formatData(data)
        }
)

function formatData(theData){
        const formattedData = [] /* this array will eventually be populated with the contents of the spreadsheet's rows */
        const rows = theData.feed.entry
        for(const row of rows) {
          const formattedRow = {}
          for(const key in row) {
            if(key.startsWith("gsx$")) {
                  formattedRow[key.replace("gsx$", "")] = row[key].$t
            }
          }
          formattedData.push(formattedRow)
        }
        console.log(formattedData)
        formattedData.forEach(addMarker)
        living.addTo(map)
        visiting.addTo(map)  
        let allLayers = L.featureGroup([visiting, living]);
        map.fitBounds(allLayers.getBounds())      
}