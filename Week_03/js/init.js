// declare variables
let zoomLevel = 3;
const mapCenter = [42.7140,-172.2656];

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
glazelilyMarker(32.7365, -117.1472, 'San Diego, CA, USA','<h2>San Diego, CA:</h2> <p>The first scenery that I drew! A great beach indeed <3 </p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/San_Diego_Sunset.jpg/1600px-San_Diego_Sunset.jpg" width = 300px height = 100 />')
glazelilyMarker(35.0300, -224.5605, 'Osaka, Japan','<h2>Osaka, Japan:</h2> <p>The color scheme in the city here beats everything else!!</p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/2017osaka.jpg/1200px-2017osaka.jpg" width = 300px height = 100% />')
glazelilyMarker(10.7901, -253.3008, 'Ho Chi Minh City, Vietnam','<h2>Ho Chi Minh City:</h2> <p>The first time I found a hotel place pretty LOL but I have a touch of home here and I liked the color palette I had in mind when I saw these thingies in the hotel.</p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Summer_ho_chi_minh_city.jpg/900px-Summer_ho_chi_minh_city.jpg" width = 300px height = 100% />')
glazelilyMarker(34.4703, -119.7070, 'Santa Barbara, CA, USA', '<h2>Santa Barbara, CA, USA</h2> <p>A classic lovely beach with a lovely color scheme!</p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Sbpic.jpg/1129px-Sbpic.jpg" width = 300px height = 100% />')
glazelilyMarker(43.7076, -79.4531, 'Toronto, Canada', '<h2>Toronto, Canada:</h2> <p> Cue back to 2016 me who wanted to live in the city vibes here HAHA but honestly I really want to paint this image</p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/2019rainytoronto.jpg/900px-2019rainytoronto.jpg" width = 300px height = 100% />')