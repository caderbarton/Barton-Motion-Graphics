import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


 
function simpleMotion(){
    var tl = gsap.timeline()
    tl.from("#ball3",{scale:.25, transformOrigin:"center"})
    tl.from("#Vector2",{drawSVG:0, duration: .25})
    tl.from("#ball1",{scale:.25, transformOrigin:"center"})
    tl.from("#Vector3",{drawSVG:0, duration: .25})
    tl.from("#ball2",{scale:.25, transformOrigin:"center"})
    tl.from("#Vector1",{drawSVG:0, duration: .25})
    tl.to(".circle",{scale:.25, transformOrigin:"center"})
    tl.to(".line",{drawSVG:0, duration: .25})


    return tl;  
}

function patternMotion(){
    var tl = gsap.timeline()
    .from(".oddbottom",{drawSVG:0, duration:2},{duration:2},"same2")
    .from(".evenbottom",{drawSVG:0,duration:2},{duration:2},"same2")
    .fromTo(".oddtop",{drawSVG:"50% 50%"},{duration:1, drawSVG: "0% 100%", stagger:.25},"same")
    .fromTo(".eventop",{drawSVG:"50% 50%"},{duration:1, drawSVG: "0% 100%", stagger:.25},"same")
  
    return tl;
}   

function UIMotion(){  

    var tl = gsap.timeline()
    tl.from(".disk",{alpha:0,stagger:.15})
    tl.to("#black",{drawSVG:0 , duration: 1,  stagger:.25, ease: "bounce.out"})
    tl.to("#red",{drawSVG: 20, duration: 1, stagger:.25, ease: "bounce.out"})
    tl.to("#orange",{drawSVG:60, duration: 1,  stagger:.25, ease: "bounce.out"})
    tl.to("#yellow",{drawSVG:120, duration: 1,  stagger:.25, ease: "bounce.out"})
    tl.to("#green",{drawSVG:200, duration: 1,  stagger:.25, ease: "bounce.out"})
    tl.to(".disk",{alpha:0,stagger:.05})

} 
 

var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
    .add(patternMotion())
    .add(UIMotion()); 



GSDevTools.create();