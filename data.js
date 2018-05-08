var mymap = L.map('mapid').setView([43.296482, 5.36978],9);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 22,
    id: 'mapbox.outdoors',
    accessToken: 'pk.eyJ1IjoibHMtNzc3IiwiYSI6ImNqY3VrMW8xNDA0dWIycXV3dzJlcWE5MWEifQ.wFdjhLdKFQihXKa_Sl2jeg'
}).addTo(mymap);

// a simple marker in the map 
var marker0 = L.marker([43.5, 5.1]).addTo(mymap);
// put a  popup in da marker
marker0.bindPopup("exemple");

/*
var wifiIcon = L.icon({
    iconUrl: 'wifi.svg',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
custom icon parameters only
*/



d3.csv("wifi.csv", function (data) {
    console.log(data);
    place(data);
});


function place(data) {
    var i = 0;
    while (i < data.length) {
        
        //get wanted infos and storin 'em
        var info = "<strong>" + data[i].nom + "</strong>" + "<br>" + data[i].adresse + "<br>" + data[i].arrond + "<br>" + "En service: " + data[i].service;

        //place the marker 
        var marker = L.marker([data[i].lat, data[i].long]).addTo(mymap);  //here default icon,   for a custom one write:var marker = L.marker([data[i].lat, data[i].long], {icon: wifiIcon}).addTo(mymap);

        //marker.valueOf()._icon.style.backgroundColor = 'red';
        //put the infos in the popup
        marker.bindPopup(info);

        i++;
    }
}
