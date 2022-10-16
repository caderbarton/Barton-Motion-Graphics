import { gsap } from "gsap";

function heroAnimation(){
    var tl =gsap.timeline();
    tl.from("history",{duration:1, x:"-=300%"});
    
    
    
    return tl;
}

var mainTimeline = gsap.Timeline();
mainTimeline.add(heroAnimation);

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
