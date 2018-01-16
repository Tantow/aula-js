$(document).ready(function(){
    $('#fox').addClass('ativo');
    $('.animais li a').first().addClass('ativo');
    $('.tab-menu li a').click(function() {
        
        event.preventDefault();
        
        $('.item').removeClass('ativo');
        $('.animais li a').removeClass('ativo');
        $('.florestas li a').removeClass('ativo');
        
        var $idItem = $(this).attr('href');
        $($idItem).addClass('ativo');
        
        $(this).addClass('ativo');
    });
});