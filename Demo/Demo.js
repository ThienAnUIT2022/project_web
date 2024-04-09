$(document).ready(function(){
  $.when(
    // Function to toggle password visibility
    $('#eye').click(function(){
        $(this).toggleClass('Open');
        $(this).children('i').toggleClass('bi-eye-slash-fill bi-eye-fill');
        if($(this).hasClass('Open')){
          $('#password').attr('type', 'text');
        } else{
          $($('#password')).attr('type','password');
        }
    }),

    // Function to validate form on submit
    $('#submit-login').click(function(){
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
      });
    })
  );
});