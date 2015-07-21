var map = L.map ('map').setView([40.698824, -73.989312], 12);

L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
	maxZoom: 17,
	minZoom: 12
}).addTo(map);

var circleIcon = L.icon({
    iconUrl:      'images/circleIcon.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
})

var ZOOM0004 = L.marker ([437.766813, -122.41692], {icon: circleIcon}) .addTo(map);
ZOOM0004.bindPopup("In the left most window, there is a set of very positive messages suitable for a variety of special life occasions").openPopup();

var ZOOM0004 = L.marker ([37.77141, -122.445513], {icon: circleIcon}) .addTo(map);
ZOOM0004.bindPopup("We're between Page and Oak and there's a pile of bricks and there's a sign that says FREE BRICK, nor plural, singular, so I think you're only allowed one.").openPopup();

var ZOOM0080 = L.marker ([37.807088, -122.431662], {icon: circleIcon}) .addTo(map);
fZOOM0080.bindPopup("I'm standing outside the Long Now foundation at Fort Mason Center and uh, I have strong memories of my first trip to San Francisco where I came to Fort mason every day over the course of a four day weekend ot compete in the Magic the Gathering World Championships. I'm standing next to the restaurant Greens, where I had a number of munch meals over the course of the Tournament, and on the final night ate dinner on the bill of one of my friends who had made the money and ended up in 4th place wining himself twenty thousand dollars, um. This was the first place I spent much time here, I commuted from Berkeley everyday, uh, through the BART to Civic Center then stopping at either Blue Bottle or Ritual in that smaller area around there before taking the bus up to Fort Mason daily, and it was sort of a magical little first experience of San Francisco, both seeing the outskirts in Berkeley, the downtown and Civic Center and then the coastal region out by Fort Mason, and uh I finally returned to stay here permanently and go on weird weekend adventures like art walks. ").openPopup();