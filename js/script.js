var map = L.map ('map').setView([40.698824, -73.989312], 12);

L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
	maxZoom: 17,
	minZoom: 12
}).addTo(map);

var houseIcon = L.icon({
    iconUrl:      '../images/HomeIcon.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
})

var myHouse = L.marker ([40.712934, -73.989794], {icon: houseIcon}) .addTo(map);
myHouse.bindPopup("My Chinese Shoebox").openPopup();

var lizzieHouse = L.marker ([40.674899,-73.963617], {icon: houseIcon}) .addTo(map);
lizzieHouse.bindPopup("Whoopi's House").openPopup();

var firstHouse = L.marker ([40.681939, -73.979651], {icon: houseIcon}) .addTo(map);
firstHouse.bindPopup("A Park Slope Closet").openPopup();