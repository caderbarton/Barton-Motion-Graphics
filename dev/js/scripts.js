import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function heroAnimation(){
    var tl =gsap.timeline();
    tl.from("#hero",{duration:1, alpha:0 });
    
    
    
    return tl;
}

function skynet(){
    var tl =gsap.timeline({scrollTrigger:{trigger: "#skynet", 
    // markers:true, 
    scrub:true,start: "top 80%", end: "bottom 60%"}});
    tl.from("#gallery-1",{duration:1, alpha:0, x:"-=130%" ,scale:.25},"in");
    tl.from("#gallery-2",{duration:1, alpha:0, x:"+=130%" ,scale:.25},"in");
    tl.from("#gallery-3",{duration:1, alpha:0, y:"+=130%" ,scale:.25},"in");
    tl.from("#gallery-4",{duration:1, alpha:0, x:"+=130%" ,scale:.25},"in");
    tl.from("#gallery-5",{duration:1, alpha:0, y:"-=130%" ,scale:.25},"in");
    tl.from("#gallery-6",{duration:1, alpha:0, x:"-=130%" ,scale:.25},"in");
    tl.from("#gallery-7",{duration:1.5, alpha:0});
    
    
    
    return tl;
}

function history(){
    var tl =gsap.timeline({scrollTrigger:{trigger: "#history", 
    // markers:true, 
    scrub:true,start: "top 60%", end: "bottom 30%"}});
   tl.from("#image",{duration:1, alpha:0, rotateY:360},"same");
   tl.from("#hist",{duration:1, alpha:0, scale:.025, y:"-=100%"},"same");
   tl.from("#prof",{duration:1.5, alpha:0},"same2");
   tl.from("#history-middle",{duration:1.5, alpha:0},"same2");
   tl.from("#history-last",{duration:1.5, alpha:0});
    
    
    return tl;
}

function skills(){
    var tl =gsap.timeline({scrollTrigger:{trigger: "#skills", 
    // markers:true, 
    scrub:true,start: "top 80%", end: "bottom 20%"}});
   tl.from("aside",{duration:1,clipPath: 'inset(0% 0% 100%)'},"a")
   tl.from("#skills-content",{duration:1,clipPath: 'inset(0% 0% 100%)'},"a")
    
    
    return tl;
}

function hero2(){
    var tl =gsap.timeline({scrollTrigger:{trigger: "#hero-2", 
    // markers:true, 
    scrub:true,start: "top 80%", end: "bottom 20%"}});
   tl.from("#hero-2",{delay:1, duration:2, clipPath: 'inset(0% 0% 100%)'})
    
    
    return tl;
}


var maintimeline = gsap.timeline();
maintimeline.add(heroAnimation)
maintimeline.add(history)
maintimeline.add(skills)
maintimeline.add(hero2)
maintimeline.add(skynet);















// let imagecoin = document. querySelector( "#image");

// var spinanimation=gsap.timelline({paused:true});
//     spinanimation.from("#image",{duration:1, rotateY:360});

// imagecoin.addEventListener("mouseover",function(){
//     spinanimation.play();
// })












// import $ from "jquery";

// let $nav = $('nav[data-nav]');
// let isVisible = false;

// $(".nav-btns").on("click", function(){
//     console.log("click");
//     if(isVisible === false){
//         $nav.show();
//         isVisible = true;
//     }
//     else{
//         $nav.hide();
//         isVisible = false;
//     }
// })
