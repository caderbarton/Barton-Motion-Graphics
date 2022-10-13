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
        buttonAnimation.to("#button", {duration: 1, scale:2, x:200},"open")
        .to("i", {duration:1, rotate:360},"open")
        .to("#h1", {duration:1, alpha:0, x:-600}, "open")
        .to ("h2", {duration:1,  alpha:0, x:-600}, "open");
    
    
    resButton.addEventListener("mouseover",function(){
        buttonAnimation.play();
    })
    
    
    resButton.addEventListener("mouseout",function(){
        buttonAnimation.reverse();
    })


    let mm = gsap.matchMedia();

mm.add (" (min-width:768px)", () => {
    let resButton = document.querySelector("#button");
    
    var buttonAnimation=gsap.timeline({paused:true});
        buttonAnimation.to("#button", {duration: 1, scale:2, x:300},"open")
        .to("i", {duration:1, rotate:360},"open")
        .to("#h1", {duration:1, alpha:0, x:-600}, "open")
        .to ("h2", {duration:1,  alpha:0, x:-600}, "open");
    
    
    resButton.addEventListener("mouseover",function(){
        buttonAnimation.play();
    })
    
    
    resButton.addEventListener("mouseout",function(){
        buttonAnimation.reverse();
    })
    });

mm.add (" (max-width:767px)", () => {
let resButton = document.querySelector("#button");

var buttonAnimation=gsap.timeline({paused:true});
    buttonAnimation.to("#button", {duration: 1, scale:1.5, x:0},"open")
    .to("i", {duration:1, rotate:360},"open")
    .to("#h1", {duration:1, alpha:0, x:-600}, "open")
    .to ("h2", {duration:1,  alpha:0, x:-600}, "open");


resButton.addEventListener("mouseover",function(){
    buttonAnimation.play();
})


resButton.addEventListener("mouseout",function(){
    buttonAnimation.reverse();
})
});




// let resButton = document.querySelector("#button");

// var buttonAnimation=gsap.timeline({paused:true});
//     buttonAnimation.to("#button", {duration: 1, scale:2, x:Slide},"open")
//     .to("i", {duration:1, rotate:360},"open")
//     .to("#h1", {duration:1, alpha:0, x:-600}, "open")
//     .to ("h2", {duration:1,  alpha:0, x:-600}, "open");


// resButton.addEventListener("mouseover",function(){
//     buttonAnimation.play();
// })


// resButton.addEventListener("mouseout",function(){
//     buttonAnimation.reverse();
// })