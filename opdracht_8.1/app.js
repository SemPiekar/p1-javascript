let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let answer;
let header = document.getElementById("hdr");

function multiply() {
  if (num1.value > 0 || num2.value > 0) {
    header.innerText = "Helaas het getal is te laag!";
  } else {
    answer = +num1.value * +num2.value;
    header.innerText = num1.value + " * " + num2.value + " = " + answer;
  }
}

function divide() {
  if (num1.value > 0 || num2.value > 0) {
    header.innerText = "Helaas het getal is te laag!";
  } else {
    answer = +num1.value / +num2.value;
    header.innerText = num1.value + " / " + num2.value + " = " + answer;
  }
}

function minus() {
  if (num1.value > 0 || num2.value > 0) {
    header.innerText = "Helaas het getal is te laag!";
  } else {
    answer = +num1.value - +num2.value;
    header.innerText = num1.value + " - " + num2.value + " = " + answer;
  }
}

function add() {
  if (num1.value > 0 || num2.value > 0) {
    header.innerText = "Helaas het getal is te laag!";
  } else {
    answer = +num1.value + +num2.value;
    header.innerText = num1.value + " + " + num2.value + " = " + answer;
  }
}
