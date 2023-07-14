const wheel = document.querySelector('.wheel');
const prompts = [
    ["What is your favorite animal?", "What is your dream vacation destination?", "Who is your favorite fictional character?", "What is your favorite type of food?", "What is your favorite color?", "What is your favorite hobby or pastime?", "What is your all-time favorite movie?", "What is your favorite season of the year?"],
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


            document.querySelector('.popup').innerHTML = "<span class='popuptext'></span>"
            document.querySelector('.popuptext').innerText = question;
            document.querySelector('.popup').style.display = 'flex';
            document.querySelector('.popuptext').style.transform = 'scale(2,2)';
            document.querySelector('.spinBtn').style.display = 'none';

            setTimeout(() => {
                document.querySelector('.spinBtn').style.display = 'none';
                document.querySelector('.popup').style.display = 'none';
            }, 2000);
        }
    }, 3000);
    
}
