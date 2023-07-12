let wheel = document.querySelector('.wheel');

let val = 0;
let current = 0;

document.querySelector('.spinBtn').onclick = function () {
    
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

let wheel1 = new Array("What is your favorite animal?", "What is your favorite color?", "What is your favorite sport?", "What kind of music do you like to listen to?", "What is your favorite food?", "Who is your least favorite Panda Programmer teacher (pick Ms. Gloria for demonstration purposes)?", "What is your favorite travel location?", "What is your favorite hobby?"); 

function promptQ(index) {
    console.log("bozo");
    let choice = document.querySelector(); 
    let x = choice.substring(9); 
    choice.innerText = wheel1[int(x)];
    
}
 
