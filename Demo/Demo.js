$("#form-login").validate({
    rules:{
        username:{
            minlength: 6,
        },
        password:{
            minlength: 6,
        }
    },
    messages: {
        username:{
            required: "Please enter your Username",
            minlength: jQuery.validator.format("Please, Username at least 6 characters")
        },
        password:{
            required: "Please enter your password",
            minlength: jQuery.validator.format("Please, password at least 6 characters")
        }
    },
    submitHandler: function(form) {
        form.submit();
    }
});

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

