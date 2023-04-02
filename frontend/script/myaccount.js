let x = "https://kind-gray-horse-wear.cyclic.app";
document.querySelector("form").addEventListener("submit", signinDetails);
// userArray = JSON.parse(localStorage.getItem("newUser")) || [];
function signinDetails(e) {
  e.preventDefault();
  var first_name = document.querySelector(".first_name").value;
  var last_name = document.querySelector(".last_name").value;
  var email = document.querySelector(".email").value;
  var password = document.querySelector(".pass").value;
  var gender = document.querySelector(".gender").value;
  var age = document.querySelector(".age").value;
  // var dob = document.querySelector(".DOB").value;
  var data = {
    first_name,
    last_name,
    email,
    password,
    gender,
    age,
  };
  console.log(data);
  fetch(`${x}/users/register`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((data) => {
      alert(data.msg);
      window.location.href = "myaccount.html";
    });
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
      alert("token: " + (user.token ? user.token : ""));
      if (user.token) {
        localStorage.setItem("set_token", JSON.stringify(user));
        window.location.href = "../index.html";
      }
    });
}
