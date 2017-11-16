// app.js

// TomTom Map
tomtom.L.map('map', {
    key: '31clhs60n6V7KlAD0Hx41c4qdfgwkEsn'
});
// Alternatively following constructions are available:
// tomtom.key('<your-tomtom-API-key>');
// var map = L.map('map');
// var map = tomtom.map('map');
// var map = new tomtom.Map('map');
// var map = new L.Map('map');


//------------------------------------------------------------

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(updateMyPosition);
}

var myCurrentLocation = null;

function updateMyPosition(position) {
    console.log(position.coords.latitude + ", " + position.coords.longitude);
    myCurrentLocation = position;
}

function gotoMyLocation() {
    
}
