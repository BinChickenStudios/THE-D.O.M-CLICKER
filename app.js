//create a main div (aligns the items to the center of the page)
let main = document.createElement("div");
main.className = "main";
main.style.display = "flex";
main.style.alignItems = "center";
main.style.flexDirection = "column";
main.style.justifyContent = "center";
document.body.appendChild(main);


//the global text (reused)
let title = document.createElement('h1');
title.className = "title";
let tag = document.createElement("h3");
tag.className = "tag";
let button = document.createElement('button');
button.className = "button";

main.appendChild(title);
main.appendChild(button);
main.appendChild(tag);

//the div that contains the gameplay stuff
let start = document.createElement("div");
start.className = "start";

let amount = 0;
let clicks = 10;

main.appendChild(start);

//the toggles (elements to click)
for(let i = 0; i < clicks; i++)
{ 
    let toggle = document.createElement('div');
    toggle.style.height = "100px";
    toggle.style.width = "100px";
    toggle.style.backgroundColor = "rgb(200,75,100";
    toggle.style.display = "none";
    toggle.style.margin = "10px";
    toggle.addEventListener("click", Activate);
    toggle.classList = "toggle";
    start.appendChild(toggle);
}

//an easy way to referece the toggles (the list)
let toggles = document.getElementsByClassName("toggle");

//the function for activating a toggle
function Activate(e)
    {
        e.target.style.display = "none";
        amount++;
        title.innerHTML = "<b>"+amount+"/"+clicks+" CLICKED</b>";
        RandomizeBlocks();
        CheckToWin();
    }


//a function for deactivating a toggle (UNUSED)
function DeActivate(e)
{
    amount--;
    title.innerHTML = "<b>"+amount+"/"+clicks+" CLICKED</b>";
}

//start by restarting the game
Restart();


//the main menu essentially
function Restart()
{
    title.style.textAlign = "center";
    title.innerHTML = "<b>WELCOME TO THE D.O.M CLICKER!</b>";
    title.style.color = "rgb(50,100,125)";
    tag.innerHTML = "<b>Made by Ibrahim Aouli</b>";
    tag.style.color= "rgb(50,100,125)";

    
    button.addEventListener("click", startGame);
    button.style.height = "50px";
    button.style.width = "100px";
    button.style.backgroundColor = "rgb(100,150,200)";
    button.style.color = "rgb(50,100,125)";
    button.style.borderColor = "rgb(235,235,255)";
    button.innerText = "START";
}

//reveals the toggles and disables the button (Gameplay)
function startGame()
{
    amount = 0;
    button.style.display = "none";
    tag.style.display = "none";
    title.innerHTML = "<b>"+amount+"/"+clicks+" CLICKED</b>";
    title.style.color = "rgb(100,25,50)";

    for(let i = 0; i < toggles.length; i++)
    {
    toggles[i].style.display = "inline-block";
    }

    RandomizeBlocks();
    
    console.log("Game Started");
}

//a quick function that is reused in order to randomize the blocks
function RandomizeBlocks()
{
    for(let i = 0; i < toggles.length; i++)
    {
        console.log(toggles[i]);
        let s = (Math.random() * (100 - 25) + 25)+"px";
        let r = (Math.random() * (200 - 150) + 150);
        let g = (Math.random() * (100 - 100) + 100);
        let b = (Math.random() * (150 - 125) + 125);

        toggles[i].style.width = s;
        toggles[i].style.height = s;
        toggles[i].style.margin = (Math.random() * (100 - 25) + 25)+"px "+ (Math.random() * (100 - 25) + 25) +"px";
        toggles[i].style.backgroundColor = "rgb("+r+","+g+","+b+")";
    }
}

//a function which checks if we won
function CheckToWin()
{
    console.log(amount);

    if(amount >= clicks)
    {
        YouWin();
    }
}

//the winning screen basically
function YouWin()
{
    button.style.display = "block";
    tag.style.display = "block";
    tag.style.color = "rgb(50,125,100)";
    button.innerText = "RETRY?";
    button.removeEventListener("click", startGame);
    button.addEventListener("click", Restart);

    button.style.backgroundColor = "rgb(100,200,150)";
    button.style.color = "rgb(50,125,100)";
    button.style.borderColor = "rgb(235,255,235)";

    
    title.style.textAlign = "center";
    title.style.display = "block";
    title.innerText = "YOU WIN";
    title.style.color = "rgb(50,125,100)";

    for(let i = 0; i < toggles.length; i++)
    {
        toggles[i].style.display = "none";
    }

    console.log("YOU WIN");
}