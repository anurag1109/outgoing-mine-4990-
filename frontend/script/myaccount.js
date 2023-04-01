let x = "http://localhost:4500";
document.querySelector("form").addEventListener("submit", signinDetails);
userArray = JSON.parse(localStorage.getItem("newUser")) || [];
function signinDetails(event) {
  event.preventDefault();
  var first_name = document.querySelector(".first_name").value;
  var last_name = document.querySelector(".last_name").value;
  var email = document.querySelector(".email").value;
  var password = document.querySelector(".pass").value;
  var gender = document.querySelector(".gender").value;
  var age = document.querySelector(".age").value;
  var dob = document.querySelector(".DOB").value;
  var data = {
    first_name,
    last_name,
    email,
    password,
    gender,
    age,
  };

  fetch(`${x}/users/register`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((data) => alert(data.msg));
  userArray.push(data);
  // localStorage.setItem("newUser", JSON.stringify(userArray));
  // alert("User Sign Up Successful");
  window.location.href = "myaccount.html";
}

document.querySelector(".login_form").addEventListener("submit", login);
registeredUsers = JSON.parse(localStorage.getItem("newUser"));
function login(event) {
  event.preventDefault();
  var email = document.querySelector(".loginEmail").value;
  var password = document.querySelector(".loginPass").value;
  let data = { email, password };
  fetch(`${x}/users/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((user) => {
      alert(user.msg);
      localStorage.setItem("set_token", JSON.stringify(user));
    });
  // for (var i = 0; i < registeredUsers.length; i++) {
  //   if (
  //     registeredUsers[i].email === login_email &&
  //     registeredUsers[i].pass === login_pass
  //   ) {
  //     alert("Login Succesful");
  //     window.location.href = "../index.html";
  //   }
  // }
}
