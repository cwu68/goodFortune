const wheel = document.querySelector('.wheel');
const prompts = [
    ["What is your favorite animal?", "What is your dream vacation destination?", "Who is your favorite fictional character?", "What is your favorite type of food?", "What is your favorite whats your favorite school subject?", "Who's your favorite Panda Programmer teacher?", "What is your all-time favorite movie?", "What is your favorite season of the year?"],
    ["What action do you enjoy doing to stay fit and active?", "If you could travel anywhere in the world, what activity would you love to try?", "What is something you like to do to express your creativity?", "What is a skill you would love to learn or improve upon?", "What activity do you find most relaxing after a long day?", "What is something you would do to make the world a better place?", "What is an adventurous activity you've always wanted to experience?", "If you had an extra hour every day, what activity would you spend it on?"],
    ["How would you describe your ideal vacation spot?", "What adjective best describes your favorite type of music?", "What word would you use to describe your dream home?", "What is your favorite color?", "What adjective captures the feeling of your favorite book or movie?", "If you could have any superpower, what adjective would it be?", "How would you describe your ideal day?", "What adjective best describes your personality?"]
    
];
const labels = ["Nouns", "Verbs", "Adjectives", "Numbers"];

const fortunes = [
    "Ms.Gloria predicts that in your near future, you are going to verb into a adjective noun and get eaten by number piranhas.",
    "Ms.Gloria predicts that in your near future, Ms.Gloria will come to your house and verb you in a pool of number adjective nouns",
    "Ms.Gloria predicts that in your near future, you should prepare for a series of number adjective noun attacks that will verb you, leaving you feeling awful and hideous",
    "Ms.Gloria predicts that in your near future, your dream of noun will be shattered by number adjective tables, who will verb your every attempt to succeed.",
]
const order = ['noun', 'verb', 'adjective', 'number'];


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
                    document.querySelector('.label').innerText = labels[current];
                }
            });
        } else {
            results[current] = question+1;


            document.querySelector('.popup').innerHTML = "<span class='popuptext'></span>"
            document.querySelector('.popuptext').innerText = question+1;
            document.querySelector('.popup').style.display = 'flex';
            document.querySelector('.popuptext').style.transform = 'scale(2,2)';
            document.querySelector('.spinBtn').style.display = 'none';

            setTimeout(() => {
                document.querySelector('.spinBtn').style.display = 'none';
                document.querySelector('.popup').style.display = 'none';

                let temp = fortunes[Math.ceil(Math.random()*(fortunes.length-1))];

                for (let i = 0; i < 4; i++) {
                    temp = temp.replace(order[i], results[i]);
                }
                sessionStorage.setItem('fortune', temp);

                window.location.href = "fortune.html";   
            }, 2000);
        }
        
    }, 3000);
    
}
