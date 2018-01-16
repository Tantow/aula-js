$(document).ready(function () {
    $("input").focusout( function Verifica() {
        var $senha = $('#senha');
        var $verificacao = $('#senhaVer');
        var $valSenha = $senha.val();
        var $valVer = $verificacao.val();
        
        if($valSenha.length < 6 && $valSenha.length > 0 || $valSenha.length > 12) {
           $senha.removeClass("certo");
           $senha.addClass("erro");
        } else if ($valSenha.length > 0){
           $senha.removeClass("erro");
           $senha.addClass("certo");
        }
        if($valVer == $valSenha){
            $verificacao.removeClass("erro");
            $verificacao.addClass("certo");
        } else{
            $verificacao.removeClass("certo");
            $verificacao.addClass("erro");
        }
    });
    
});