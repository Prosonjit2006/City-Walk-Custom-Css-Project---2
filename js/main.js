








let toggler=document.querySelector("#navtogglar");
let navlist=document.querySelector(".navlist");

// console.log(togglar, navlist);


toggler.addEventListener("click", listDisplay);

function listDisplay(){
    // alert('clicked')
    navlist.classList.toggle("showlist");
}




// let toggler=document.querySelector("#navtogglar");
// let navlist=document.querySelector(".navlist");

// // console.log(toggler, navlist)

// toggler.addEventListener("click", listDisplay);

// function listDisplay() {
//     //   alert('cicked')
//     navlist.classList.toggle("showlist");
// }