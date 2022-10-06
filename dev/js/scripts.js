import { gsap } from "gsap";

gsap.from("#h1",{duration:1,y:-200, alpha:0});
gsap.from("#h2",{duration:1,y:-100, alpha:0, delay: 1});
gsap.from("#button",{duration:1,y:200, alpha:0, delay: 1});


let reservation_button = document.querySelector("#button");
reservation_button.addEventListener("mouseover", function(){
    gsap.from("#button",{duration:1,scaleX:1})
    gsap.from("i",{duration:1,rotate:360})
})