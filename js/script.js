let userName = "";
let playerPoints = 0;
let computerPoints = 0;
const choiceArr = ["rock", "paper", "scissor"];
const imgSrcArr = ["./img/rock_39413.png", "./img/paper_38485.png", "./img/scissors_39412.png"];

document.querySelector('button').addEventListener("click", event => {
    event.preventDefault();
    userName = document.querySelector('input').value;
    document.querySelector('form').remove();
    startGame();
})

function startGame(){
    document.getElementById("subHeader").innerText = "First to three";
    document.getElementById("names").innerText = `${userName} vs Computer`;
    document.getElementById("points").innerText = `${playerPoints} - ${computerPoints}`;
    for (const choice of choiceArr) {
        let btn = document.createElement("button");
        btn.setAttribute("id", choice)
        btn.innerText = choice.toUpperCase();
        document.getElementById("buttonContainer").appendChild(btn);
    }
    document.getElementById("buttonContainer").addEventListener("click", evalChoice)
}

function evalChoice(event){
    let computerChoice = Math.floor(Math.random() * 3);
    document.getElementById("computerImg").setAttribute("src", imgSrcArr[computerChoice]);
    if(event.target.id === choiceArr[computerChoice]){
        document.getElementById("playerImg").setAttribute("src", imgSrcArr[computerChoice]);
        tiedGame();
    }else if(event.target.id === "rock"){
        document.getElementById("playerImg").setAttribute("src", imgSrcArr[0]);
        if(computerChoice === 2) wonGame();
        if(computerChoice === 1) lostGame();
    }else if(event.target.id === "paper"){
        document.getElementById("playerImg").setAttribute("src", imgSrcArr[1]);
        if(computerChoice === 0) wonGame();
        if(computerChoice === 2) lostGame();
    }else if(event.target.id === "scissor"){
        document.getElementById("playerImg").setAttribute("src", imgSrcArr[2]);
        if(computerChoice === 1) wonGame();
        if(computerChoice === 0) lostGame();
    }
}

function tiedGame(){
    document.getElementById("playerImg").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("computerImg").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("points").innerText = `${playerPoints} - ${computerPoints}`;
}

function wonGame(){
    playerPoints++;
    document.getElementById("points").innerText = `${playerPoints} - ${computerPoints}`;
    document.getElementById("playerImg").style.backgroundColor = "#5cff95";
    document.getElementById("computerImg").style.backgroundColor = "#ff5c5c";
    gameDoneCheck();
}

function lostGame(){
    computerPoints++;
    document.getElementById("points").innerText = `${playerPoints} - ${computerPoints}`;
    document.getElementById("computerImg").style.backgroundColor = "#5cff95";
    document.getElementById("playerImg").style.backgroundColor = "#ff5c5c";
    gameDoneCheck();
}

function gameDoneCheck(){
    if(playerPoints === 3){
        document.getElementById("gameDone").innerText = "You won!!!"
        playerPoints = 0;
        computerPoints = 0;
    }
    if(computerPoints === 3){
        document.getElementById("gameDone").innerText = "You lost..."
        playerPoints = 0;
        computerPoints = 0;
    }
}