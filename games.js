/* for splash page to disappear after a few seconds */
const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(() => {
        splash.classList.add("display-none");
    }, 2000);
})


/* The questions for the quiz */
var questionBank= [
    {
        question : 'what is the first step you do when you read a news article?',
        option : ['start panicking','Reflect On Your Reaction','believe the news straight away','start forwarding news link to others to warn them'],
        answer : 'Reflect On Your Reaction'
    },
    {
        question : 'In the second step, what is the first critical thinking skills step?',
        option : ['Think about who created this content?','Look for trustworthy news sources','Think about what else do you know about this topic?','Do some research!'],
        answer : 'Think about who created this content?'
    },
    {
        question : 'what is the third step you do when you read a news article?',
        option : ['Develop their critical thinking skills','Look for trustworthy news sources','Think about what else do you know about this topic?','All of the above'],
        answer : 'Look for trustworthy news sources'
    },
    {
        question : 'In the second step, what is the last critical thinking skills step?',
        option : ['Reflect On Your Reaction','Think about who created this content?','Make sure to further read resources','Do some research!'],
        answer : 'Do some research!'
    },
    {
        question : 'what is the last step you do when you read a news article?',
        option : ['Develop their critical thinking skills','Think about what else do you know about this topic?','Make sure to further read resources','Reflect On Your Reaction'],
        answer : 'Make sure to further read resources'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

/* function to display questions on the quiz */
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

/* this function here is to calculate the scoring system */
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

/* this function here is to display next question */
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

/* click events to next button */
next.addEventListener('click',nextQuestion);

/* this part is for the Back to Quiz button event */
function backToQuiz(){
    location.reload();
}

/* this function is to check Answers */
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();


