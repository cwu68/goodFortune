const wheel = document.querySelector('.wheel');
const prompts = [
    ["What is your favorite animal?", "What is your favorite color?", "What is your favorite sport?", "What kind of music do you like to listen to?", "What is your favorite food?", "Who is your least favorite Panda Programmer teacher (pick Ms. Gloria for demonstration purposes)?", "What is your favorite travel location?", "What is your favorite hobby?"],
    ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8"],
    ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8"]
];

let val = 0;
let question = 0;
let current = 0;
let results = [];

document.querySelector('.spinBtn').onclick = function () {
    
    let rand = Math.ceil(Math.random() * 8);
    val += rand * 45 + 3600;
    wheel.style.transform = "rotate(" + -val + "deg)";

    question = (question + rand) % 8;
    rand = Math.ceil(Math.random() * 8);

    setTimeout(() => {
        if (current < 3) {
            let choice = document.querySelector('.popuptext');
            choice.innerText = prompts[current][question];

            let container = document.querySelector('.popup');
            container.style.display = 'flex';

            document.getElementById('field').addEventListener('keypress', function (e) {

                if (e.Handled)
                    return;
                if (e.key === 'Enter') {
                    e.Handled = true;
                    results[current] = document.getElementById('field').value;
                    document.getElementById('field').value = '';
                    container.style.display = 'none';
                    current++;

                    if (current === 3) {
                        for (let i = 1; i < 9; i++) {
                            let temp = document.getElementById("q" + i);
                            temp.innerText = i;
                            temp.style.transform = "rotate(-45deg)";
                        }
                        
                    }
                }
            });
        } else {
            results[current] = question;
            document.querySelector('.spinBtn').style.display = 'none';

        }
    }, 3000);
    
}
