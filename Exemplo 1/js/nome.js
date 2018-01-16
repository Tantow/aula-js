var botao = document.getElementsByTagName('button')[0];
var foto = document.getElementsByTagName('img')[0];

botao.onclick = function() {
    if (foto.style.display == 'none'){
        foto.style.display = 'block';
    }else{
        foto.style.display = 'none';
    }
}