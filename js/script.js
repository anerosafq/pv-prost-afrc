// JavaScript Document
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var initial = random(4500, 5000);
var count = initial;

setInterval(function () {
    var variation = random(-5, 5);

    count += variation;

    if (count < 0) {
        count = 13;
    }
    document.querySelectorAll("#viewers")[0].innerHTML = count;

}, 2500);
document.querySelectorAll("#viewers")[0].innerHTML = initial;


function numeroVagas() {
    document.querySelectorAll(".vagas")[0].style.display = "block";
    var vagas = parseInt(document.querySelectorAll("#qtvagas")[0].innerHTML);
    if (vagas > 14) {
        document.querySelectorAll("#qtvagas")[0].innerHTML = --vagas;
        setTimeout(numeroVagas, 3000);
    }
}
