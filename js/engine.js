let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');

let val = 0;
let current = 0;

spinBtn.onclick = function () {
    
    let rand = Math.ceil(Math.random() * 8);
    val += rand * 45 + 3600;
    wheel.style.transform = "rotate(" + -val + "deg)";

    current = (current + rand) % 8;
    console.log(current);
    rand = Math.ceil(Math.random() * 8);

    setTimeout(() => {
        promptQ(current);
        
    }, 5000);

}

function promptQ(index) {
    console.log("bozo");
}