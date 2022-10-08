import { gsap } from "gsap";

function heroAnimation(){
    var tl = gsap. timeline() ;

tl.from("#h1",{duration:1,y:-200, alpha:0})
.from("#h2",{duration:1,y:-100, alpha:0 },"2")
.from("#button",{duration:1,y:200, alpha:0},"2");

return tl
}
var mainTl=gsap.timeline();
mainTl.add(heroAnimation());

let resButton = document.querySelector("#button");

var buttonAnimation=gsap.timeline({paused:true});
    buttonAnimation.to("#button", {duration: 1, scale:2})
    .to("#trails-btn i", {duration: 1, rotateY:180})


resButton.addEventListener("mouseover",function(){
    buttonAnimation.play();  
})


resButton.addEventListener("mouseout",function(){
    buttonAnimation.reverse();
})