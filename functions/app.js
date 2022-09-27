let num1;
let num2;
let answer;
let answer2;
let num3;
let num5;
let num6;
let answer3;
let seconds;
let minutes;

const calculate = function(num1, num2) {
    answer = num1 + num2
    console.log(answer);
}
const multiplyByFive = function(num3) { 
    answer2 = num3 * 5
    console.log(answer2);
}

const checkInput = function (num5, num6) {
    if (num5 > num6){
        console.log(num5);
    }
    else {
    console.log(num6);
    }
}

const calculateMinutes = function (seconds) {
    minutes = seconds / 60
    console.log(minutes);
}

calculate(9,20);
calculate(40,234182764123904781203498671243);
multiplyByFive(5)
checkInput(1,2)
calculateMinutes(3600)