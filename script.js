var newQDiv;
var button0;
var button1;
var button2;
var button3;
var correctIncorrectDiv = document.getElementById("correctIncorrect");
var timerMsg;
var timer;

var questionsIndex = 0;

var questions = [
    {
        title: "What is the HTML tag under which one can write the JavaScript code?",
        choices: ["&lt;javascript&gt;", "&lt;scripted&gt;", "&lt;script&gt;", "&lt;js&gt;"],
        answer: "&lt;script&gt;"
    },
    {
        title: "Which of the following is the correct syntax to display “I love JS” in an alert box using JavaScript?",
        choices: ["alertbox('I love JS');", "msg('I love JS');", "&lt;msgbox('I love JS');", "alert('I love JS');"],
        answer: "alert('I love JS');"
    },
    {
        title: "What is the correct syntax for referring to an external script called “script.js”?",
        choices: ['&lt;script src=”script.js”&gt;', '&lt;script href=”script.js”&gt;', '&lt;script ref=”script.js”&gt;', '&lt;script name=”script.js”&gt;'],
        answer: "&lt;script src=”script.js”&gt;"
    },
    {
        title: "The external JavaScript file must contain &lt;script&gt; tag. True or False?",
        choices: ["True", "False", "Nothing", "Oops"],
        answer: "False"
    },
    {
        title: "What is the syntax for creating a function in JavaScript named as myFunc?",
        choices: ["function = myFunc()", "function myFunc()", "function := myFunc()", "function : myFunc()"],
        answer: "function myFunc()"
    }
];


//start button
document.getElementById("start-btn").addEventListener("click", startQuiz);


var val = 75;
var endVal = 0;

function startQuiz() {
    console.log("Quiz started")
    var myCallback = function (val) {
        timerMsg = "00:" + (val >= 10 ? val : "0" + val);
        document.querySelector(".time-remaining").textContent = "Time remaining: " + timerMsg;
    }
    
    timer = setInterval(function () {
        myCallback(val);
        if (val-- <= 0) {
            clearInterval(timer);
        }
    }, 1000);


    newQDiv = document.createElement("DIV");
    newQDiv.setAttribute("id", "questionTitle");
    
    document.getElementById("container").appendChild(newQDiv);
    // button0
    button0 = document.createElement("BUTTON");
    button0.setAttribute("id", "button0");
    
    document.getElementById("container").appendChild(button0);
    //button1
    button1 = document.createElement("BUTTON");
    button1.setAttribute("id", "button1");
    
    document.getElementById("container").appendChild(button1);
    //button2
    button2 = document.createElement("BUTTON");
    button2.setAttribute("id", "button2");
   
    document.getElementById("container").appendChild(button2);
    //button3
    button3 = document.createElement("BUTTON");
    button3.setAttribute("id", "button3");
    
    document.getElementById("container").appendChild(button3);

//button 0 click event
    $("#button0").click(function (event) {
        var chosenAnswer = questions[questionsIndex].choices[0];
        var actualAnswer = questions[questionsIndex].answer;
        if (chosenAnswer === actualAnswer ) {
          //Correct
          //set element text to "Correct" or something
          correctIncorrectDiv.innerHTML = "Correct";
        } else {
          //Not Correct
        //set element text to "Not Correct" or something
        correctIncorrectDiv.innerHTML = "Incorrect";
        val -= 15;
        }

        questionsIndex++;

        setQuestionandAnswerText();
        //Move on to next question
        });
    //button 1 click event
    $("#button1").click(function (event) {
        var chosenAnswer = questions[questionsIndex].choices[1];
        var actualAnswer = questions[questionsIndex].answer;
        if (chosenAnswer == actualAnswer ) {
          //Correct
          //set element text to "Correct" or something
          correctIncorrectDiv.innerHTML = "Correct";
        } else {
          //Not Correct
        //set element text to "Not Correct" or something
        correctIncorrectDiv.innerHTML = "Incorrect";
        val -= 15;
        }

        questionsIndex++;

        setQuestionandAnswerText();
        //Move on to next question
        });

        // button 2
        $("#button2").click(function (event) {
            var chosenAnswer = questions[questionsIndex].choices[2];
            var actualAnswer = questions[questionsIndex].answer;
            if (chosenAnswer == actualAnswer ) {
              //Correct
              //set element text to "Correct" or something
              correctIncorrectDiv.innerHTML = "Correct";
            } else {
              //Not Correct
            //set element text to "Not Correct" or something
            correctIncorrectDiv.innerHTML = "Incorrect";
            val -= 15;
            }
    
            questionsIndex++;
    
            setQuestionandAnswerText();
            //Move on to next question
            });

            //button 3
            $("#button3").click(function (event) {
                var chosenAnswer = questions[questionsIndex].choices[3];
                var actualAnswer = questions[questionsIndex].answer;
                if (chosenAnswer == actualAnswer ) {
                  //Correct
                  //set element text to "Correct" or something
                  correctIncorrectDiv.innerHTML = "Correct";
                } else {
                  //Not Correct
                //set element text to "Not Correct" or something
                correctIncorrectDiv.innerHTML = "Incorrect";
                val -= 15;
                }
        
                questionsIndex++;
        
                setQuestionandAnswerText();
                //Move on to next question
                });

    //Next i need to create make content visible in html or completely create new html elements
    setQuestionandAnswerText();

};

function setQuestionandAnswerText() {
    
    newQDiv.innerHTML = questions[questionsIndex].title;
    
    // button0
    
    button0.innerHTML = questions[questionsIndex].choices[0];
    
    //button1
   
    button1.innerHTML = questions[questionsIndex].choices[1];
    
    //button2
    
    button2.innerHTML = questions[questionsIndex].choices[2];
    
    //button3
    
    button3.innerHTML = questions[questionsIndex].choices[3];
    
};

if (questionsIndex > 3){
    stop(timerMsg);
}

