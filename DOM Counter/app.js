let count = 1;

let btn = document.getElementById("pgh");
let btn1 = document.getElementById("pgh1");
console.log(count);
function counter() {
    count +=1
    btn.innerText = count + " times been clicked"
    document.body.style.backgroundColor = "Blue"
}
function counter1() {
    count -= 1;
    btn.innerText = count + " times been clicked"
    document.body.style.backgroundColor = "Red"
}
