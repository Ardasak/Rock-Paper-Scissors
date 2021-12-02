let userScore=0;
let computerScore=0;
const userScore_element=document.getElementById("user-score");
const computerScore_element=document.getElementById("comp-score");
const scoreBoard_element=document.querySelector(".score-board");
const result_element=document.querySelector(".results p");
const rock_element=document.getElementById("r");
const scissors_element=document.getElementById("s");
const paper_element=document.getElementById("p");
function getComputerChoice(){
    const choices=["r","p","s"];
    const randomNumber=(Math.floor(Math.random()*3));
    return choices[randomNumber];
}
function convertToWord(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    return "Scissors";
}

function win(userChoice,ComputerChoice){
    const smallUserWord ="user".fontsize(3).sub();
    const smallComputerWord ="comp".fontsize(3).sub();
    userScore++;
    userScore_element.innerHTML=userScore;
    computerScore_element.innerHTML=computerScore;
    result_element.innerHTML=`${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(ComputerChoice)} ${smallComputerWord}. You win!`
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove("green-glow");
    },500);
}

function lose(userChoice,ComputerChoice){
    const smallUserWord ="user".fontsize(3).sub();
    const smallComputerWord ="comp".fontsize(3).sub();
    computerScore++;
    userScore_element.innerHTML=userScore;
    computerScore_element.innerHTML=computerScore;
    result_element.innerHTML=`${convertToWord(userChoice)} ${smallUserWord} loses to ${convertToWord(ComputerChoice)} ${smallComputerWord}. You lost!`
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove("red-glow");
    },500);
}
function draw(userChoice,ComputerChoice){
    const smallUserWord ="user".fontsize(3).sup();
    const smallComputerWord ="comp".fontsize(3).sup();   
    result_element.innerHTML=`${convertToWord(userChoice)} ${smallUserWord} equals to ${convertToWord(ComputerChoice)} ${smallComputerWord}. It's a draw!`
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove("gray-glow");
    },500);
}

function game(userChoice){
    const ComputerChoice=getComputerChoice();
    switch(userChoice+ComputerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,ComputerChoice);
            break;
            
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,ComputerChoice);   
            break;  
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,ComputerChoice);
            break;  
        
    }
}
function main(){
rock_element.addEventListener("click", function(){
    game("r");
});

scissors_element.addEventListener("click", function(){
    game("s");
});

paper_element.addEventListener("click", function(){
    game("p");
});
}

main();