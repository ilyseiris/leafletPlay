var map = L.map ('map').setView([40.698824, -73.989312], 12);

L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
	maxZoom: 18,
	minZoom: 10
}).addTo(map);

var myHouse = L.marker ([40.712934, -73.989794]) .addTo(map);
myHouse.bindPopup("My Chinese Shoebox").openPopup();

var lizzieHouse = L.marker ([40.674899,-73.963617]) .addTo(map);
lizzieHouse.bindPopup("Whoopi's House").openPopup();

var firstHouse = L.marker ([40.681939, -73.979651]) .addTo(map);
firstHouse.bindPopup("A Park Slope Closet").openPopup();