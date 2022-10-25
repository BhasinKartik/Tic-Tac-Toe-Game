console.log("Welcome")
let music=new Audio("menuselect4-36147.mp3")
let audioTurn=new Audio("menuselect4-36147.mp3")
let gameOver=new Audio("game-win-sound-effect.mp3")
let turn="X";
let isgameOver=false;
const colorchange=document.getElementsByClassName("bg");
const changeTurn=()=>{
return turn==="X"?"0":"X";
}
const checkWin=()=>{
let btext=document.getElementsByClassName('boxText');
let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
wins.forEach(e =>{
    if((btext[e[0]].innerText===btext[e[1]].innerText)&&(btext[e[1]].innerText===btext[e[2]].innerText)&&(btext[e[0]].innerText!=="")){
        gameOver.play();

        document.querySelector('.info').innerText=btext[e[0]].innerText+" Won";
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="290px";
        colorchange.style.background-colorchange;
        
        isgameOver=true;
        let boxtexts=document.querySelectorAll('.boxText');
        // Array.from(boxtexts).forEach(element=>{
            // document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="230px";
    
            // // element.innerText="";
            // turn="X";
            // isgameOver=false;
            // document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;
        // })
    }
})




}
for(let i=0;i<9;i++){
    let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if(boxtext.innerText=== ''){
boxtext.innerText=turn;
turn=changeTurn();
audioTurn.play();
checkWin();
if(!isgameOver){
    document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;

}


        }
    })
})
}

reset.addEventListener('click',()=>{
    // let boxtexts=document.querySelectorAll('.boxText')
    // Array.from(boxtexts).forEach(element=>{
    //     element.innerText="";
    //     turn="X";
    //     isgameOver=false;
    //     document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;
    //     document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="0px";
EraseF();
    
})
function EraseF(){
    
        let boxtexts=document.querySelectorAll('.boxText')
        Array.from(boxtexts).forEach(element=>{
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="0px";
    
            element.innerText="";
            turn="X";
            isgameOver=false;
            document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;
        })
    }


