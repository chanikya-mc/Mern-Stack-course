let lbtn=document.querySelector("#likes-btn")
let dbtn=document.querySelector("#dislikes-btn")
let dtotal=document.querySelector("#total")
let dlikes=document.querySelector("#likes-count")
let ddislikes=document.querySelector("#dislikes-count")

let like=localStorage.getItem('likes')? localStorage.getItem('likes'):0;
let dislike=localStorage.getItem('dislikes')? localStorage.getItem('dislikes'):0;
let total=localStorage.getItem('total')? localStorage.getItem('total'):0;

dlikes.textContent=like;
ddislikes.textContent=dislike;
dtotal.textContent=total;

function increment(){
    like++
    total++
    dlikes.textContent=like
    localStorage.setItem('likes', like)
    dtotal.textContent=total
    localStorage.setItem("total",total)
}
function incrementdislike(){
    dislike++
    total++
    ddislikes.textContent=dislike;
    localStorage.setItem("dislikes",dislike)
    dtotal.textContent=total;
    localStorage.setItem("total",total)
}
lbtn.addEventListener("click",increment)
dbtn.addEventListener("click",incrementdislike)

