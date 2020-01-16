

var questions = [
    {
        title: "What is the HTML tag under which one can write the JavaScript code?",
        choices: ["<javascript>", "<scripted>", "<script>", "<js>"],
        answer: "<script>"
    },
    {
        title: "Which of the following is the correct syntax to display “I love JS” in an alert box using JavaScript?",
        choices: ["alertbox('I love JS');", "msg('I love JS');", "<msgbox('I love JS');", "alert('I love JS');"],
        answer: "alert('I love JS');"
    },
    {
        title: "What is the correct syntax for referring to an external script called “script.js”?",
        choices: ['<script src=”script.js”>', '<script href=”script.js”>', '<script ref=”script.js”>', '<script name=”script.js”>'],
        answer: "<script src=”script.js”>"
    },
    {
        title: "The external JavaScript file must contain <script> tag. True or False?",
        choices: ["True", "False", "Nothing", "Oops"],
        answer: "False"
    },
    {
        title: "What is the syntax for creating a function in JavaScript named as myFunc?",
        choices: ["function = myFunc()", "function myFunc()", "function := myFunc()", "function : myFunc()"],
        answer: "function myFunc()"
    }
];





//var startButton = document.createElement('div');
//startButton.id = 'start-btn';



//start button
document.getElementById("start-btn").addEventListener("click", startQuiz);




function startQuiz() {
    console.log("Quiz started")
    function MyTimer(callback, val) {
        val = val || 75;
        var timer = setInterval(function () {
            callback(val);
            if (val-- <= 0) {
                clearInterval(timer);
            }
        }, 1000);
    }
    new MyTimer(function (val) {
        var timerMsg = "00:" + (val >= 10 ? val : "0" + val);
        document.querySelector(".time-remaining").textContent = "Time remaining: " + timerMsg;
    });

    
};

