let userscore=0;
let compscore= 0;

const choices= document.querySelectorAll(".choice") ;
const msg = document.querySelector("#msg");

const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score");

const gencompchoice= () => {
    const options= ["rock", "paper", "scissors"];
    const ranidx= Math.floor(Math.random()*3);
    return options[ranidx];
};

const drawgame =()=> {
    console.log("Game was draw.");
    msg.innerText="IT'S A DRAW! PLAY AGAIN.";
    msg.style.backgroundColor="yellow";
}

const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin) {
        userscore++;
        userscorepara.innerText= userscore;
        console.log("YOU WIN!");
        msg.innerText=`YOU WIN! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        
    }else {
        compscore++;
        compscorepara.innerText= compscore;
        console.log("YOU LOSE!");
        msg.innerText=`YOU LOSE! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }

}

const playgame= (userchoice) => {
    console.log("User choice=" , userchoice);
    const compchoice= gencompchoice();
    console.log("comp choice=", compchoice);

    if(userchoice===compchoice) {
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock") {
            userwin= compchoice=== "paper"? false:true;
        }else if(userchoice === "paper"){
            userwin= compchoice=== "scissors"? false:true;
        }else{
            userwin= compchoice=== "rock"? false:true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice)=> {
    choice.addEventListener("click", ()=> {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});