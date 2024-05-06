//Login->Register and Register->Login
const wrapperLogin = document.querySelector('.wrapper-login');
const wrapperRegister = document.querySelector('.wrapper-register');
const loginLink = document.querySelector('.login-links');
const registerLink = document.querySelector('.register-links');

loginLink.addEventListener('click', () => {
    wrapperRegister.classList.add('active');
    wrapperLogin.classList.remove('active');
    wrapperRegister.fadeIn("slow");
});

registerLink.addEventListener('click', () => {
    wrapperLogin.classList.add('active');
    wrapperRegister.classList.remove('active');
    wrapperLogin.fadeIn("slow");
});

//Show/Hide password
let eyeicon = document.getElementById('eyeicon');
let password = document.getElementById('password');

eyeicon.onclick = function() {
    if (password.type == "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}

let eyeicons = document.getElementById('eyeicons');
let passwords = document.getElementById('passwords');


eyeicons.onclick = function() {
    if (passwords.type == "password") {
        passwords.type = "text";
    }
    else {
        passwords.type = "password";
    }
}
