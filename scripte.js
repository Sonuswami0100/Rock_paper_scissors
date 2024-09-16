let userScore = 0; // To track the count of user 
let compScore = 0;// To track the count of computer 

const choices = document.querySelectorAll(".choice"); //select The all option's 
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
}

const drawGame = () =>{
    msg.innerText = "Game Was Draw,Play Again";
    msg.style.backgroundColor = "grey";
}

const showWinner = (userwin,userchoice,compchoice) => {
    if (userwin) {
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = `YOU WIN! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compscorepara.innerText = compScore;
        msg.innerText =  `YOU Lose! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}



//genrat to computer choice
const playGame = (userchoice) => {
        console.log("user choice =",userchoice);
        const compchoice = gencompchoice();
        console.log("computer choice =", compchoice);

        if(userchoice === compchoice){
            drawGame();
        }else{
            let userWin = true;
            if(userchoice === "rock"){
                userWin = compchoice === "paper "? false:true;
            }else if(userchoice === "paper"){
                userWin = compchoice === "scissors" ? false:true;
            }
            else{
                userWin = compchoice === "rock" ? false:true;
            }
            showWinner(userWin,userchoice,compchoice);
        }
};



//applay to choice to click

choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userchoice = choice.getAttribute("id");
            playGame(userchoice);
        });
});
