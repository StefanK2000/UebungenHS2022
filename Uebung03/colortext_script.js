"use strict"

function darstellen() {
    var p = document.querySelector("#InputText");

    var random = Math.floor(Math.random()*16777215).toString(16);

    var farbe = "#"+random;

    p.innerHTML = document.querySelector("#inp").value;
    p.style["color"] =  farbe;
    p.style["font-size"] = "50px";
}