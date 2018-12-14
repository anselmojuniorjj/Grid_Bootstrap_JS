/*
var myButton = document.getElementById("button-Comprar");
myButton.addEventListener("click", function () {
    alert("teste");
});
---------------------------------------------------------------
var $ = document.querySelector.bind(document);
var myButton = $("#button-Comprar");
myButton.addEventListener("click", function () {
    alert("teste");
});
*/

$(document).ready(function () {
    var $myButton = $("#button-Comprar");
    $myButton.on("click", function () {
        alert("teste com jQuery");
    });

    var $precos = $(".produto li");
    $precos.on("click", function () {
        alert($(this).text());
    });

    var $login = $("#login");
    var $popupForm = $("#popup-form");

    $login.on("click", function () {
        $popupForm.toggle(1000);
    });
});