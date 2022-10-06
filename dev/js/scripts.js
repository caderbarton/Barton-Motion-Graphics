import { gsap } from "gsap";
gsap.set("#trails-btn i",{transformOrigin:"center bottom"});

function heroAnimation(){
    var tl = gsap.timeline();

tl.from("#first-line",{duration: 1, alpha:0, y:-100})
.from("#second-line",{duration: 1, alpha:0, y:-70})
.from("#trails-btn",{duration: 1, alpha:0, y:50})
.from("#trails-btn i",{duration: 1, alpha:0, rotation:180});


    return tl;
}

var mainTl=gsap.timeline();
mainTl.add(heroAnimation());

// gsap.from("#first-line",{duration: 1, alpha:0, y:-100});
// gsap.from("#second-line",{duration: 1, alpha:0, y:-70, delay:0.5});
// gsap.from("#trails-btn",{duration: 1, alpha:0, y:50, delay:0.75});
// gsap.from("#trails-btn i",{duration: 1, alpha:0, rotation:180, delay:0.75});
var heroSizeNumber=1;

let mm = gsap.matchMedia();

mm.add("(min-width:768px)",() => {
heroSizeNumber=2;
});
mm.add("(max-width:767px)",() => {
    heroSizeNumber=1.25;
});


let trailBtn = document.querySelector("#trails-btn");

var buttonAnimation=gsap.timeline({paused:true});
    buttonAnimation.to("#trails-btn",{duration:1, scale:heroSizeNumber},"goAway")
    .to("#trails-btn i",{duration: 1, rotateY:180})
    .to("#first-line",{duration: 1, alpha:0, y:50},"goAway")
    .to("#second-line",{duration: 1, alpha:0, y:20},"goAway");



trailBtn.addEventListener("mouseover",function(){
    buttonAnimation.play();
})

trailBtn.addEventListener("mouseout",function(){
    buttonAnimation.reverse();
    // gsap.to("#trails-btn",{duration:1, scale:1});

    // gsap.to("#trails-btn i",{duration: 1, rotateY:0});

    // gsap.to("#first-line",{duration: 1, alpha:1, y:0});
    // gsap.to("#second-line",{duration: 1, alpha:1, y:0});
})