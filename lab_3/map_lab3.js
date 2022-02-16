var mymap = L.map("map").setView([46.192439130271, 7.379637757984297], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var myIcon1 = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon2 = L.icon({
    iconUrl: 'images/icon_2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon3 = L.icon({
    iconUrl: 'images/icon_3.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon4 = L.icon({
    iconUrl: 'images/icon_4.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon5 = L.icon({
    iconUrl: 'images/icon_5.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon6 = L.icon({
    iconUrl: 'images/icon_6.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon7 = L.icon({
    iconUrl: 'images/icon_7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon8 = L.icon({
    iconUrl: 'images/icon_8.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon9 = L.icon({
    iconUrl: 'images/icon_9.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon10 = L.icon({
    iconUrl: 'images/icon_10.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon11 = L.icon({
    iconUrl: 'images/icon_11.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon12 = L.icon({
    iconUrl: 'images/icon_12.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});


var paris = L.marker([48.860866396049495, 2.3037745823261684], {icon: myIcon1}).bindPopup("<b>Paris").addTo(mymap);
var london = L.marker([51.50437958641079, -0.11261074885908891], {icon: myIcon2}).bindPopup("<b>London").addTo(mymap);
var rome = L.marker([41.8790803205225, 12.501055565253896], {icon: myIcon3}).bindPopup("<b>Rome").addTo(mymap);
var barcelona = L.marker([41.39953430207621, 2.175374638318848], {icon: myIcon4}).bindPopup("<b>Barcelona").addTo(mymap);
var florence = L.marker([43.78018464745258, 11.251952345291908], {icon: myIcon5}).bindPopup("<b>Florence").addTo(mymap);
var amsterdam = L.marker([52.36422763548388, 4.887474457818007], {icon: myIcon6}).bindPopup("<b>Amsterdam").addTo(mymap);
var santorini = L.marker([36.39248743678322, 25.460797543534845], {icon: myIcon7}).bindPopup("<b>Santorini").addTo(mymap);
var prauge = L.marker([50.08313099610499, 14.427145181475948], {icon: myIcon8}).bindPopup("<b>Prauge").addTo(mymap);
var venice = L.marker([45.436337898467016, 12.33823807253571], {icon: myIcon9}).bindPopup("<b>Venice").addTo(mymap);
var athens = L.marker([37.99029085564209, 23.73353232333832], {icon: myIcon10}).bindPopup("<b>Athens").addTo(mymap);
var stockholm = L.marker([59.32951249890903, 18.06844408742185], {icon: myIcon11}).bindPopup("<b>Stockholm").addTo(mymap);
var berlin = L.marker([52.527405412221626, 13.387627662616929], {icon: myIcon12}).bindPopup("<b>Berlin").addTo(mymap);