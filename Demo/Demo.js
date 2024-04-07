$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('Open');
        $(this).children('i').toggleClass('bi-eye-slash-fill bi-eye-fill');
        if($(this).hasClass('Open')){
            $(this).prev().attr('type', 'text');
        } else{
            $($(this).prev()).attr('type','password');
        }
    });
});