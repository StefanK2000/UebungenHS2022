"use strict"

function datetime() {
    setInterval(datetime, 500);

    // Zeit und Datum laden
    var d = new Date();
    var ds = d.toDateString();
    var ts = d.toTimeString();

    // Zeit und Datum von HTML laden

    var time = document.querySelector("#time")
    var date = document.querySelector("#date")

    // Aktualisierte Zeit darstellen

    time.innerHTML = ts;
    date.innerHTML = ds;
}