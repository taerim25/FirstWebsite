alert("Welcome!");
var trig = document.getElementById("Home");
var reload = function () {
    location.reload();
};
trig.addEventListener("click", reload );
var sub = document.getElementsById("inputs");
sub = document.getElementsById("submit");
sub.addEventListener("click",reload);
