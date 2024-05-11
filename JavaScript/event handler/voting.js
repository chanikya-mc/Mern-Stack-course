let vijaybtn=document.querySelector("#vbtn");
let ajithbtn=document.querySelector("#abtn")
let show_vijay_votings=document.querySelector("#vijayvotes")
let show_ajith_votings=document.querySelector("#ajithvotes")
let resultsbtn=document.querySelector("#results")
let show_results=document.querySelector(".results")
let clear_btn=document.querySelector("#clear");



let vijay_votes_count=localStorage.getItem("vijay_votes") ? localStorage.getItem("vijay_votes"):0;
let ajith_votes_count=localStorage.getItem("ajith_votes")? localStorage.getItem("ajith_votes"):0;
let election_result=localStorage.getItem("election_results") ? localStorage.getItem("election_result"):"?";
// let clear_result=localStorage.getItem()

show_vijay_votings.textContent=vijay_votes_count;
show_ajith_votings.textContent=ajith_votes_count;
show_results.textContent=election_result;


vijaybtn.addEventListener("click",vvote);
ajithbtn.addEventListener("click",avote);
resultsbtn.addEventListener("click",results);
clear_btn.addEventListener("click",clearresult);

function vvote()
{
    vijay_votes_count++;
    show_vijay_votings.textContent=vijay_votes_count
    localStorage.setItem("vijay_votes",vijay_votes_count);
}
function avote()
{
    ajith_votes_count++;
    localStorage.setItem("ajith_votes",ajith_votes_count);
    show_ajith_votings.textContent=ajith_votes_count;
}
function results()
{
    if (ajith_votes_count>vijay_votes_count)
    {
        show_results.textContent =" Ajith won the election"
        localStorage.setItem("election_results","ajith won")

    }
    else if(ajith_votes_count===vijay_votes_count)
    {
        show_results.textContent=" Draw"
        localStorage.setItem("election_results","it's draw")
    }
    else
    {
        show_results.textContent="Vijay won the election"
        localStorage.setItem("election_results","vijay won")
    }
}
function clearresult(){
    vijay_votes_count=0;
    ajith_votes_count=0;
    localStorage.setItem("vijay_votes",vijay_votes_count);
    localStorage.setItem("ajith_votes",ajith_votes_count);
    localStorage.setItem("election_result","")
    
    show_vijay_votings.textContent=localStorage.getItem("vijay_votes") ? localStorage.getItem("vijay_votes"):0;
    show_ajith_votings.textContent=localStorage.getItem("ajith_votes")? localStorage.getItem("ajith_votes"):0;
    show_results.textContent=localStorage.getItem("election_result") ? localStorage.getItem("election_result"):"";


}


