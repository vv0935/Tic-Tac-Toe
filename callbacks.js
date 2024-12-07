console.log("Script is loaded");
console.log("hi");
let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset-btn");
let newgm_btn=document.querySelector("#new_gm");
let turnO=true;
const winptn=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let dc=0;
let wow=false;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        dc++;
        console.log(dc);
        console.log("box clicked");
        if(turnO){
        box.innerText="O";
        turnO=false;}
        else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        checkwin();
        if(dc>8 && wow===false){
            draw();
        }
    });
});
let msgb=document.querySelector("#wmsg");
let msgbody=document.querySelector(".msg-container");
const checkwin=()=>{
    for(let pat of winptn){
        let p1=boxes[pat[0]].innerText;
        let p2=boxes[pat[1]].innerText;
        let p3=boxes[pat[2]].innerText;

        if(p1!=="-" && p2!=="-" && p3!=="-"){
            if (p1===p2 && p2===p3){
                console.log("winner", p1);
                winneris(p1);
                boxes.forEach((box)=>(box.disabled=true));
            }
        }
    }
};
const draw=()=>{
    console.log("draw it is")
    msgbody.classList.remove("hide");
    msgb.innerText=`Draw it is!!`;
}
const winneris = (winner)=>{
    msgbody.classList.remove("hide");
    msgb.innerText=`Congratulation winner is ${winner}`;
    wow=true;
};

reset_btn.addEventListener("click", ()=>{
    msgbody.classList.add("hide");
    boxes.forEach((box)=>box.innerHTML="-");
    boxes.forEach((box)=>(box.disabled=false));
    msgb.innerHTML=null;
    wow=false;
    dc=0;
});

newgm_btn.addEventListener("click", ()=>{
    msgbody.classList.add("hide");
    boxes.forEach((box)=>box.innerHTML="-");
    boxes.forEach((box)=>(box.disabled=false));
    msgb.innerHTML=null;
    wow=false;
    dc=0;
})