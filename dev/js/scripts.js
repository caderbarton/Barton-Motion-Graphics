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

import { gsap } from "gsap";

function heroAnimation(){
    var tl =gsap.timeline();
    
    
    
    
    return tl;
}

var mainTimeline = gsap.core.Timeline.add();
mainTimeline.add(heroAnimation);