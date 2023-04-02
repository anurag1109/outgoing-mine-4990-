document.querySelector("form").addEventListener("submit", signinDetails);
userArray = JSON.parse(localStorage.getItem("newUser")) || [];
function signinDetails(event) {
  event.preventDefault();
  var firstName = document.querySelector(".first_name").value;
  var lastName = document.querySelector(".last_name").value;
  var email = document.querySelector(".email").value;
  var dob = document.querySelector(".DOB").value;
  var userObj = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    dob: dob,
  };
  userArray.push(userObj);
  localStorage.setItem("newUser", JSON.stringify(userArray));
  window.location.href = "myaccount.html";
}
