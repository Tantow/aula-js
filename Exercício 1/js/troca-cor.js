$(document).ready(function(){
    $('li').click(function(){
        $('body').css("background-color", $(this).css('background-color'));
    });
    $('#btnTroca').click(function(){
        $('body').css("background-color", $('input').val());
    });
});

/*Exercicio anterior feiro em JS sem JQuery.*/
/*
var btn1 = document.getElementById("botaoRoxo");
var btn2 = document.getElementById("botaoVerde");
var btn3 = document.getElementById("botaoAmarelo");
var btn4 = document.getElementById("botaoBranco");
var btn5 = document.getElementById("botaoRosa");

btn1.onclick = function() {
    document.body.style.backgroundColor = "#8c50c4"
}
btn2.onclick = function() {
    document.body.style.backgroundColor = "#9BDEB6"
}
btn3.onclick = function() {
    document.body.style.backgroundColor = "#f1ff8c"
}
btn4.onclick = function() {
    document.body.style.backgroundColor = "#fff"
}
btn5.onclick = function(){
    document.body.style.backgroundColor = "#fe2e64"
}
*/