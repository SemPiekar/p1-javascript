var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
let age = document.getElementById("age");
function verification() {
  if (age > 18) {
    window.location.href = "/opdracht_9.1/toYoung.html";
  } else {
    window.location.href = "/opdracht_9.1/webpage.html";
  }
}
