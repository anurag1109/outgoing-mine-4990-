let footer = document.getElementById("footer");
if (footer)
  fetch("../routes/footer.html")
    .then((res) => res.text())
    .then((data) => {
      footer.innerHTML = data;
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");
      eval(doc.querySelector("script").textContent);
    });

let header = document.getElementById("header");

fetch("../routes/header.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML = data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    eval(doc.querySelector("script").textContent);
    let myaccount = document.querySelector(".myaccount");
    var { username } = JSON.parse(localStorage.getItem("set_token")) || [];
    if (username) myaccount.innerHTML = username;
    document.querySelector(".logout").addEventListener("click", () => {
      localStorage.clear();
      alert("User has logged out successfully");
      window.location.href = "../index.html";
    });
    var kidsarr = JSON.parse(localStorage.getItem("cartdetail")) || [];
    let num = document.getElementById("coo");
    num.innerHTML = kidsarr.length;
  });
