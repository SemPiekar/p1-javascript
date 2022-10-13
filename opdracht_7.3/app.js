let num = 0;
function clicker() {
  if (num == 10) {
    num = num - 10;
  } else {
    num = num + 1;
  }
  document.getElementById("text").innerText = num;
}
