// declare variables
let zoomLevel = 3;
const mapCenter = [28.3044,-169.4531];

// use the variables
const map = L.map('map').setView(mapCenter, zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2>`)
    createButtons(lat,lng,title); // new line!!!
    return message
}

var myIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Item_Glaze_Lily.png',
    iconSize: [38, 38],
    iconAnchor: [22, 94],
    popupAnchor: [-4, -70],
});

// create a function to add markers
function glazelilyMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng],{icon: myIcon}).addTo(map).bindPopup(`<h2>${message}</h2>`).openPopup();
    createButtons(lat,lng,title); // new line!!!
    return message
}

// create a function to add buttons with a fly to command
function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 

    // attach an event listner to the button with Leaflet's map.flyTo
     newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); 
    })
    document.body.appendChild(newButton); //this adds the button to our page.
    document.body.style.backgroundImage = "url('https://cutewallpaper.org/21/aesthetic-backgrounds-anime/Aesthetic-Anime-Laptop-Wallpapers-Top-Free-Aesthetic-Anime-.jpg')";
    document.getElementById("myH1").style.color = "#ffffff";
    document.getElementById("myP").style.color = "#ffffff";

}
// use our marker functions
glazelilyMarker(33.6163, -117.8754, 'Newport Beach, CA, USA','Newport Beach, CA: The first scenery that I drew! A great beach indeed <3')
glazelilyMarker(37.3320, -121.8575, 'Cupertino Main Street, CA, USA','Cupertino Main Street, CA: I may have my thoughts on the gentrification of the area, but the buildings are too pretty not to capture')
glazelilyMarker(35.0300, -224.5605, 'Osaka, Japan','Osaka, Japan: The color scheme when it is night time here beats everything else!!')
glazelilyMarker(20.9576, -252.9272,'Ha Long Bay, Vietnam','Ha Long Bay, Vietnam: I can never do justice with these mountainous islands </3 but the touch of home is still in the piece I made!')
glazelilyMarker(19.6503, -155.9784, 'Kailua-Kona, Hawaii, USA', 'Kailua-Kona, Hawaii, USA: A classic lovely beach with a lovely color scheme!')