//Creating the map variable
var mymap = L.map("map", {
    center: [6.794952075439587, 20.91148703911037], 
    zoom: 3});

// Set up baselayers
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

//coal
var coalflowexLayer = new L.migrationLayer({
            map: mymap,
            data: coalex,
            pulseRadius:30,
            pulseBorderWidth:3,
            arcWidth:1,
            arcLabel:true,
            arcLabelFont:'10px sans-serif',
            maxWidth:10
            }
        );
    coalflowexLayer.addTo(mymap);



var coalflowimpLayer = new L.migrationLayer({
            map: mymap,
            data: coalimp,
            pulseRadius:30,
            pulseBorderWidth:3,
            arcWidth:1,
            arcLabel:true,
            arcLabelFont:'10px sans-serif',
            maxWidth:10
            }
        );
      coalflowimpLayer.addTo(mymap);



//natural gas
var gasflowexLayer = new L.migrationLayer({
            map: mymap,
            data: naturalex,
            pulseRadius:30,
            pulseBorderWidth:3,
            arcWidth:1,
            arcLabel:true,
            arcLabelFont:'10px sans-serif',
            maxWidth:10
            }
        );
      gasflowexLayer.addTo(mymap);




var gasflowimpLayer = new L.migrationLayer({
            map: mymap,
            data: naturalimp,
            pulseRadius:30,
            pulseBorderWidth:3,
            arcWidth:1,
            arcLabel:true,
            arcLabelFont:'10px sans-serif',
            maxWidth:10
            }
        );
     gasflowimpLayer.addTo(mymap);



//oil
var oilflowexLayer = new L.migrationLayer({
            map: mymap,
            data: oilex,
            pulseRadius:30,
            pulseBorderWidth:3,
            arcWidth:1,
            arcLabel:true,
            arcLabelFont:'10px sans-serif',
            maxWidth:10
            }
        );
      oilflowexLayer.addTo(mymap);




var oilflowimpLayer = new L.migrationLayer({
            map: mymap,
            data: oilimp,
            pulseRadius:30,
            pulseBorderWidth:3,
            arcWidth:1,
            arcLabel:true,
            arcLabelFont:'10px sans-serif',
            maxWidth:10
            }
        );
     oilflowimpLayer.addTo(mymap);

//functions

        function hide(){
            coalflowexLayer.hide();
        }
        function show(){
            coalflowexLayer.show();
        }
        function play(){
            coalflowexLayer.play();
        }
        function pause(){
            coalflowexLayer.pause();
        }


//Set up icon variables
var myIcon1 = L.icon({
    iconUrl: 'images/coal.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon2 = L.icon({
    iconUrl: 'images/gas.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon3 = L.icon({
    iconUrl: 'images/oil.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});


// Create custom popups with images. These are the Exports and imports in order as listed in my notebook.
var IndiaexPopup = "India, 15,356,987 short tons<br/><img src='images/in-flag.png' width='150px'/>";
var ChinaexPopup = "China, 12,805,391 short tons<br/><img src='images/cn-flag.png' width='150px'/>";
var JapanexPopup = "Japan, 7,572,979 short tons<br/><img src='images/jp-flag.png' width='150px'/>";
var NetherlandsexPopup = "Netherlands, 7,141,374 short tons<br/><img src='images/nl-flag.png' width='150px'/>";
var SKexPopup = "South Korea, 6,377,992 short tons<br/><img src='images/kr-flag.png' width='150px'/>";
var BrazilexPopup = "Brazil, 6,200,537 short tons<br/><img src='images/br-flag.png' width='150px'/>";
var CanadaexPopup = "Canada, 4,586,739 short tons<br/><img src='images/ca-flag.png' width='150px'/>";
var UkraineexPopup = "Ukraine, 2,622,355 short tons<br/><img src='images/ua-flag.png' width='150px'/>";
var EgyptexPopup = "Egypt, 2,618,047 short tons<br/><img src='images/eg-flag.png' width='150px'/>";
var MoroccoexPopup = "Morocco, 2,155,314 short tons<br/><img src='images/ma-flag.png' width='150px'/>";

//Coal Imports
var ColombiaimpPopup = "Colombia, 3,366,886 short tons<br/><img src='images/co-flag.png' width='150px'/>";
var CanadaimpPopup = "Canada, 1,035,571 short tons<br/><img src='images/ca-flag.png' width='150px'/>";
var IndonesiaimpPopup = "Indonesia, 494,168 short tons<br/><img src='images/id-flag.png' width='150px'/>";
var RussiaimpPopup = " Russia, 338,550 short tons<br/><img src='images/ru-flag.png' width='150px'/>";
var ChinaimpPopup = "China, 116,743 short tons<br/><img src='images/cn-flag.png' width='150px'/>";
var SAimpPopup = "South Africa, 36,376 short tons<br/><img src='images/za-flag.png' width='150px'/>";
var GermanyimpPopup = "Germany, 1,326 short tons<br/><img src='images/de-flag.png' width='150px'/>";
var MexicoimpPopup = "Mexico, 33 short tons<br/><img src='images/mx-flag.png' width='150px'/>";
var UKimpPopup = "United Kingdom, 27 short tons<br/><img src='images/uk-flag.png' width='150px'/>";
var PeruimpPopup = "Peru, 7 short tons<br/><img src='images/pe-flag.png' width='150px'/>";

//Natural Gas Exports
var MexicogasexPopup = "Mexico, 2,155,205 Million Cubic Feet<br/><img src='images/mx-flag.png' width='150px'/>";
var CanadagasexPopup = "Canada, 937,124 Million Cubic Feet<br/><img src='images/ca-flag.png' width='150px'/>";
var SKgasexPopup = "South Korea, 453,983 Million Cubic Feet<br/><img src='images/kr-flag.png' width='150px'/>";
var ChinagasexPopup = "China, 449,667 Million Cubic Feet<br/><img src='images/cn-flag.png' width='150px'/>";
var JapangasexPopup = "Japan, 354,984 Million Cubic Feet<br/><img src='images/jp-flag.png' width='150px'/>";
var BrazilgasexPopup = "Brazil, 307,714 Million Cubic Feet<br/><img src='images/br-flag.png' width='150px'/>";
var SpaingasexPopup = "Spain, 215,062 Million Cubic Feet<br/><img src='images/es-flag.png' width='150px'/>";
var IndiagasexPopup = "India, 196,218 Million Cubic Feet<br/><img src='images/id-flag.png' width='150px'/>";
var UKgasexPopup = "United Kingdom, 195,046 Million Cubic Feet<br/><img src='images/uk-flag.png' width='150px'/>";
var TurkeygasexPopup = "Turkey, 188,849 Million Cubic Feet<br/><img src='images/tr-flag.png' width='150px'/>";

//Natural Gas Imports
var CanadagasimpPopup = "Canada, 2,784,438 Million Cubic Feet<br/><img src='images/ca-flag.png' width='150px'/>";
var TrinidadgasimpPopup = "Trinidad, 21,423 Million Cubic Feet<br/><img src='images/tt-flag.png' width='150px'/>";
var MexicogasimpPopup = "Mexico, 1,718 Million Cubic Feet<br/><img src='images/mx-flag.png' width='150px'/>";

//Oil Exports
var IndiaoilexPopup = "India, 151,652 Annual Thousand Barrels<br/><img src='images/in-flag.png' width='150px'/>";
var SKoilexPopup = "South Korea, 127,380 Annual Thousand Barrels<br/><img src='images/kr-flag.png' width='150px'/>";
var CanadaoilexPopup = "Canada, 114,411 Annual Thousand Barrels<br/><img src='images/ca-flag.png' width='150px'/>";
var NetherlandsoilexPopup = "Netherlands, 112,107 Annual Thousand Barrels<br/><img src='images/nl-flag.png' width='150px'/>";
var ChinaoilexPopup = "China, 90,672 Annual Thousand Barrels<br/><img src='images/cn-flag.png' width='150px'/>";
var UKoilexPopup = "United Kingdom, 84,501 Annual Thousand Barrels<br/><img src='images/uk-flag.png' width='150px'/>";
var TaiwanoilexPopup = "Taiwan, 55,482 Annual Thousand Barrels<br/><img src='images/tw-flag.png' width='150px'/>";
var SingaporeoilexPopup = "Singapore, 53,121 Annual Thousand Barrels<br/><img src='images/sg-flag.png' width='150px'/>";
var ItalyoilexPopup = "Italy, 41,852 Annual Thousand Barrels<br/><img src='images/it-flag.png' width='150px'/>";
var FranceoilexPopup = "France, 36,565 Annual Thousand Barrels<br/><img src='images/fr-flag.png' width='150px'/>";

//Oil Imports
var CanadaoileimpPopup = "Canada, 1,371,700 Annual Thousand Barrels<br/><img src='images/ca-flag.png' width='150px'/>";
var MexicooileimpPopup = "Mexico, 212,734 Annual Thousand Barrels<br/><img src='images/mx-flag.png' width='150px'/>";
var SaudiArabiaoileimpPopup = "Saudi Arabia, 130,069 Annual Thousand Barrels<br/><img src='images/sa-flag.png' width='150px'/>";
var RussiaoileimpPopup = "Russia, 72,608 Annual Thousand Barrels<br/><img src='images/ru-flag.png' width='150px'/>";
var ColombiaoileimpPopup = "Colombia, 65,581 Annual Thousand Barrels<br/><img src='images/co-flag.png' width='150px'/>";
var IraqoileimpPopup = "Iraq, 55,360 Annual Thousand Barrels<br/><img src='images/iq-flag.png' width='150px'/>";
var EcuadoroileimpPopup = "Ecuador, 54,360 Annual Thousand Barrels<br/><img src='images/ec-flag.png' width='150px'/>";
var NigeriaoileimpPopup = "Nigeria, 39,412 Annual Thousand Barrels<br/><img src='images/ng-flag.png' width='150px'/>";
var BraziloileimpPopup = "Brazil, 37,804 Annual Thousand Barrels<br/><img src='images/br-flag.png' width='150px'/>";
var LibyaoileimpPopup = "Libya, 32,695 Annual Thousand Barrels<br/><img src='images/ly-flag.png' width='150px'/>";


var customOptions ={'maxWidth': '150','className' : 'custom'};

          
// Data points, they are in order from my notebook.
//Coal Exports
coords = [
    [22.8685636651794,79.6296640956958,],
    [36.5708596347194,103.914044816281,],
    [37.529344765394,137.944759649175,],
    [52.249332637085,5.61342136941158,],
    [36.3566217739687,127.806138462912,],
    [-10.7682734218935,-53.0850143484109,],
    [61.4186031869642, -98.2202761470484,],
    [49.0138745474806, 31.3989767834186,],
    [26.5694870152136, 29.7733198116651,],
    [31.8442318914579, -6.28248740099558,],

//Coal Imports    
    [3.90700871125271,-73.0805633135312,],
    [61.4186031869642,-98.2202761470484,],
    [-2.23178700562659, 117.302080712558,],
    [61.9967278302057, 96.6659648340207,],
    [36.5708596347194,103.914044816281,],
    [-29.0001391180361, 25.0937275582224,],
    [51.10992666994, 10.3918721901408,],
    [23.9412953798414, -102.538685837972,],
    [54.1611359896835, -2.89946170647599,],
    [-9.17091113543841,-74.3578125924906,],
    
//Gas Exports
    [23.9412953798414, -102.538685837972,],
    [61.4186031869642,-98.2202761470484,],
    [36.3566217739687,127.806138462912,],
    [36.5708596347194,103.914044816281,],
    [37.529344765394,137.944759649175,],
    [-10.7682734218935,-53.0850143484109,],
    [40.2273668662875,-3.64756131519882,],
    [22.8685636651794,79.6296640956958,],
    [54.1611359896835,-2.89946170647599,],
    [39.0593336727491,35.1679609828073,],
    
//Gas Imports
    [61.4186031869642,-98.2202761470484,],
    [10.4720750972795,-61.2619924534648,],
    [23.9412953798414,-102.538685837972,],
    
//Oil Exports
    [22.8685636651794,79.6296640956958,],
    [36.3566217739687,127.806138462912,],
    [61.4186031869642,-98.2202761470484,],
    [52.249332637085,5.61342136941158,],
    [36.5708596347194,103.914044816281,],
    [54.1611359896835,-2.89946170647599,],
    [23.7547642765858,120.952015696411,],
    [1.3607580289921,103.816574631993,],
    [42.7860353802586,12.0775556695335,],
    [46.5594377607807,2.55273832019157,],
    
//Oil Imports
    [61.4186031869642,-98.2202761470484,],
    [23.9412953798414,-102.538685837972,],
    [24.1225119913007,44.5448443851123,],
    [61.9967278302057,96.6659648340207,],
    [3.90700871125271,-73.0805633135312,],
    [33.0501485583697,43.7659323267354,],
    [-1.42693229086031,-78.775013685205,],
    [9.5916522992295,8.10181821117949,],
    [-10.7682734218935,-53.0850143484109,],
    [27.0440416153877,18.0294015323103,],
    
//Full Screen    
    [6.794952075439587, 20.91148703911037,],

];

// Coal Exports
var coalex = L.layerGroup();
L.marker(coords[0], {icon: myIcon1}).bindPopup(IndiaexPopup, customOptions).addTo(coalex);
L.marker(coords[1], {icon: myIcon1}).bindPopup(ChinaexPopup, customOptions).addTo(coalex);
L.marker(coords[2], {icon: myIcon1}).bindPopup(JapanexPopup, customOptions).addTo(coalex);
L.marker(coords[3], {icon: myIcon1}).bindPopup(NetherlandsexPopup, customOptions).addTo(coalex);
L.marker(coords[4], {icon: myIcon1}).bindPopup(SKexPopup, customOptions).addTo(coalex);
L.marker(coords[5], {icon: myIcon1}).bindPopup(BrazilexPopup, customOptions).addTo(coalex);
L.marker(coords[6], {icon: myIcon1}).bindPopup(CanadaexPopup, customOptions).addTo(coalex);
L.marker(coords[7], {icon: myIcon1}).bindPopup(UkraineexPopup, customOptions).addTo(coalex);
L.marker(coords[8], {icon: myIcon1}).bindPopup(EgyptexPopup, customOptions).addTo(coalex);
L.marker(coords[9], {icon: myIcon1}).bindPopup(MoroccoexPopup, customOptions).addTo(coalex);

coalex.addTo(mymap);

//Coal Imports
var coalimp = L.layerGroup();
L.marker(coords[10], {icon: myIcon1}).bindPopup(ColombiaimpPopup, customOptions).addTo(coalimp);
L.marker(coords[11], {icon: myIcon1}).bindPopup(CanadaimpPopup, customOptions).addTo(coalimp);
L.marker(coords[12], {icon: myIcon1}).bindPopup(IndonesiaimpPopup, customOptions).addTo(coalimp);
L.marker(coords[13], {icon: myIcon1}).bindPopup(RussiaimpPopup, customOptions).addTo(coalimp);
L.marker(coords[14], {icon: myIcon1}).bindPopup(ChinaimpPopup, customOptions).addTo(coalimp);
L.marker(coords[15], {icon: myIcon1}).bindPopup(SAimpPopup, customOptions).addTo(coalimp);
L.marker(coords[16], {icon: myIcon1}).bindPopup(GermanyimpPopup, customOptions).addTo(coalimp);
L.marker(coords[17], {icon: myIcon1}).bindPopup(MexicoimpPopup, customOptions).addTo(coalimp);
L.marker(coords[18], {icon: myIcon1}).bindPopup(UKimpPopup, customOptions).addTo(coalimp);
L.marker(coords[19], {icon: myIcon1}).bindPopup(PeruimpPopup, customOptions).addTo(coalimp);


coalimp.addTo(mymap);

//Gas Exports
var naturalex = L.layerGroup();
L.marker(coords[20], {icon: myIcon2}).bindPopup(MexicogasexPopup, customOptions).addTo(naturalex);
L.marker(coords[21], {icon: myIcon2}).bindPopup(CanadagasexPopup, customOptions).addTo(naturalex);
L.marker(coords[22], {icon: myIcon2}).bindPopup(SKgasexPopup, customOptions).addTo(naturalex);
L.marker(coords[23], {icon: myIcon2}).bindPopup(ChinagasexPopup, customOptions).addTo(naturalex);
L.marker(coords[24], {icon: myIcon2}).bindPopup(JapangasexPopup, customOptions).addTo(naturalex);
L.marker(coords[25], {icon: myIcon2}).bindPopup(BrazilgasexPopup, customOptions).addTo(naturalex);
L.marker(coords[26], {icon: myIcon2}).bindPopup(SpaingasexPopup, customOptions).addTo(naturalex);
L.marker(coords[27], {icon: myIcon2}).bindPopup(IndiagasexPopup, customOptions).addTo(naturalex);
L.marker(coords[28], {icon: myIcon2}).bindPopup(UKgasexPopup, customOptions).addTo(naturalex);
L.marker(coords[29], {icon: myIcon2}).bindPopup(TurkeygasexPopup, customOptions).addTo(naturalex);

naturalex.addTo(mymap);

//Gas Imports
var naturalimp = L.layerGroup();
L.marker(coords[30], {icon: myIcon2}).bindPopup(CanadagasimpPopup, customOptions).addTo(naturalimp);
L.marker(coords[31], {icon: myIcon2}).bindPopup(TrinidadgasimpPopup, customOptions).addTo(naturalimp);
L.marker(coords[32], {icon: myIcon2}).bindPopup(MexicogasimpPopup, customOptions).addTo(naturalimp);

//Oil Exports
var oilex = L.layerGroup();
L.marker(coords[33], {icon: myIcon3}).bindPopup(IndiaoilexPopup, customOptions).addTo(oilex);
L.marker(coords[34], {icon: myIcon3}).bindPopup(SKoilexPopup, customOptions).addTo(oilex);
L.marker(coords[35], {icon: myIcon3}).bindPopup(CanadaoilexPopup, customOptions).addTo(oilex);
L.marker(coords[36], {icon: myIcon3}).bindPopup(NetherlandsoilexPopup, customOptions).addTo(oilex);
L.marker(coords[37], {icon: myIcon3}).bindPopup(ChinaoilexPopup, customOptions).addTo(oilex);
L.marker(coords[38], {icon: myIcon3}).bindPopup(UKoilexPopup, customOptions).addTo(oilex);
L.marker(coords[39], {icon: myIcon3}).bindPopup(TaiwanoilexPopup, customOptions).addTo(oilex);
L.marker(coords[40], {icon: myIcon3}).bindPopup(SingaporeoilexPopup, customOptions).addTo(oilex);
L.marker(coords[41], {icon: myIcon3}).bindPopup(ItalyoilexPopup, customOptions).addTo(oilex);
L.marker(coords[42], {icon: myIcon3}).bindPopup(FranceoilexPopup, customOptions).addTo(oilex);

//Oil Imports
var oilimp = L.layerGroup();
L.marker(coords[43], {icon: myIcon3}).bindPopup(CanadaoileimpPopup, customOptions).addTo(oilimp);
L.marker(coords[44], {icon: myIcon3}).bindPopup(MexicooileimpPopup, customOptions).addTo(oilimp);
L.marker(coords[45], {icon: myIcon3}).bindPopup(SaudiArabiaoileimpPopup, customOptions).addTo(oilimp);
L.marker(coords[46], {icon: myIcon3}).bindPopup(RussiaoileimpPopup, customOptions).addTo(oilimp);
L.marker(coords[47], {icon: myIcon3}).bindPopup(ColombiaoileimpPopup, customOptions).addTo(oilimp);
L.marker(coords[48], {icon: myIcon3}).bindPopup(IraqoileimpPopup, customOptions).addTo(oilimp);
L.marker(coords[49], {icon: myIcon3}).bindPopup(EcuadoroileimpPopup, customOptions).addTo(oilimp);
L.marker(coords[50], {icon: myIcon3}).bindPopup(NigeriaoileimpPopup, customOptions).addTo(oilimp);
L.marker(coords[51], {icon: myIcon3}).bindPopup(BraziloileimpPopup, customOptions).addTo(oilimp);
L.marker(coords[52], {icon: myIcon3}).bindPopup(LibyaoileimpPopup, customOptions).addTo(oilimp);


// Add a scalebar 
L.control.scale({position: 'bottomright', maxWidth: '150', metric: 'True'}).addTo(mymap);


// Create menu items
var baseLayers = {
    'Grayscale': grayscale,
    'Streets': streets,
	};

var overlays = {
    'Coal Exports(Blue)': coalex,
    'Coal Imports(Blue)':coalimp,
    'Gas Exports(Green)':naturalex,
    'Gas Imports(Green)':naturalimp,
    'Oil Exports(Red)':oilex,
    'Oil Imports(Red)':oilimp,
};

//Create the menu window
var layerControl = L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(mymap); //collapsed: true is defaults

//Create locator map
var miniMap = new L.Control.MiniMap(L.tileLayer('https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=tZnptaeI9RvKHsX18rbW'), {
    toggleDisplay: true,
    minimized: true,
    position: 'bottomleft'
}).addTo(mymap);

//Pop-up for showing XY coordinates on map
//// Create an empty popup
var popup = L.popup();
            
//// Function to set popup contents
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(
        "You clicked the map at -<br>" + 
        "<b>long:</b> " + e.latlng.lng + "<br>" + 
        "<b>lat:</b> " + e.latlng.lat
    ).openOn(mymap);}

//// Add event listener for click events to show lat long on the map
mymap.addEventListener("click", onMapClick);

// Add Navigation Buttons
L.easyButton(('<img src="images/globe_icon.png", height=85%>'), function(btn, map){
    map.setView(coords[53], 3);

}).addTo(mymap);