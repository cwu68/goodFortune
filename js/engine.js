let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');

let rand = Math.ceil(Math.random() * 8);
let val = rand * 45 + 3600;
let current = 0;

spinBtn.onclick = function () {
    
    wheel.style.transform = "rotate(" + -val + "deg)";

    current = (current + rand) % 8;
    console.log(current)
    rand = Math.ceil(Math.random() * 8);
    val += rand * 45 + 3600;
}