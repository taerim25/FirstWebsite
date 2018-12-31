alert("Welcome!");
var trig = document.getElementById("Home");
var reload = function () {
    location.reload();
};
trig.addEventListener("click", reload );
var sub = document.getElementById("submit");
sub.addEventListener("click",reload);
