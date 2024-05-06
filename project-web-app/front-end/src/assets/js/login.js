//Login->Register and Register->Login

//Show/Hide password
document.addEventListener("DOMContentLoaded", function () {
  let eyeicon = document.getElementById("eyeicon");
  let password = document.getElementById("password");

  eyeicon.onclick = function () {
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let eyeicons = document.getElementById("eyeicons");
  let passwords = document.getElementById("passwords");

  eyeicons.onclick = function () {
    if (passwords.type === "password") {
      passwords.type = "text";
    } else {
      passwords.type = "password";
    }
  };
});
