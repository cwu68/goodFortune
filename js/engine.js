let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let val = Math.ceil(Math.random() * 3600);

spinBtn.onclick = function () {
    wheel.style.transform = "rotate(" + val + "deg)";

    val += Math.ceil(Math.random() * 3600);
}