let gameseq=[];
let usereq=[];
let btns=["yellow","purple", "green","red"];

let started=false;
let level=0;
let highscore=0;
let h3=document.querySelector("h3");

let h2=document.querySelector("h2");

function startGame(){
    if(started == false){
        console.log("game started");
        started=true;
        levelup();
    }
};
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash")
    },500);
};
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },205);
};

function levelup(){
    usereq=[];
    level++;
    ;
    h2.innerText=`level ${level}`;
    
    // now choose a ransdom button o flash by computer
    let randidx=Math.floor(Math.random()*3);
    let randcol= btns[randidx];
    let radbtn=document.querySelector(`.${randcol}`);
    gameseq.push(randcol);
    console.log(gameseq);
    gameflash(radbtn);
};
function checkans(idx){
    
    if(usereq[idx]===gameseq[idx]){
        if(usereq.length == gameseq.length){
            highscore++;
            setTimeout(levelup,1000);
        }

    }else{
        h2.innerHTML=`game over ! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.background="red";
        setTimeout(function(){
            document.querySelector("body").style.background="white";
        },250);
        let max=Math.max(level,highscore);
        h3.innerHTML=`highscore <b>${max}</b> `;
        resetgame();
    }
};

function btnpress(){
    console.log(this);
    let usrps=this;
    userflash(usrps);
    let usercolor=usrps.getAttribute("id");
   
    usereq.push(usercolor);

    checkans(usereq.length-1);
};

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
};

function resetgame(){
    started=false;
    gameseq=[];
    usereq=[];
    level=0;
};
