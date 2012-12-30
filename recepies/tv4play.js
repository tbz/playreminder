// Använder OpenGraph, precis som svt play

// Men visar inte datumet, så vi behöver räkna.
var daysLeft = parseInt( document.querySelectorAll(".meta-info p")[1].innerText.replace(/^.*: ([0-9]+).*$/, "$1"), 10);
// @TODO: betyder "6 dagar kvar" att man kan se den på sjätte dagen? BORDE göra det...
var d = new Date();
d.setTime( d.getTime() + daysLeft * 1000 * 86400 );
d.setUTCHours(0);
d.setUTCMinutes(0);
d.setUTCSeconds(0);
d.setUTCMicroseconds(0);

