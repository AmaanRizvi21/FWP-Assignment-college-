// boilerplate.js
function loadBoilerplate() {
  fetch("header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    });

  fetch("footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", loadBoilerplate);
