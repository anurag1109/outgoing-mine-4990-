document.querySelector("form").addEventListener("submit", signinDetails);
userArray = JSON.parse(localStorage.getItem("newUser")) || [];
function signinDetails(event) {
  event.preventDefault();
  var firstName = document.querySelector(".first_name").value;
  var lastName = document.querySelector(".last_name").value;
  var email = document.querySelector(".email").value;
  var pass = document.querySelector(".pass").value;
  var dob = document.querySelector(".DOB").value;
  var userObj = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    pass: pass,
    dob: dob,
  };
  userArray.push(userObj);
  localStorage.setItem("newUser", JSON.stringify(userArray));
  alert("User Sign Up Successful");
  window.location.href = "myaccount.html";
}

document.querySelector(".login_form").addEventListener("submit", login);
registeredUsers = JSON.parse(localStorage.getItem("newUser"));
function login(event) {
  event.preventDefault();
  var login_email = document.querySelector(".loginEmail").value;
  var login_pass = document.querySelector(".loginPass").value;
  for (var i = 0; i < registeredUsers.length; i++) {
    if (
      registeredUsers[i].email === login_email &&
      registeredUsers[i].pass === login_pass
    ) {
      alert("Login Succesful");
      window.location.href = "../index.html";
    }
  }
}
