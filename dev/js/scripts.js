import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


 
function simpleMotion(){
    var tl = gsap.timeline()
    tl.from("#ball3",{scale:.25, transformOrigin:"center"})
    tl.from("#Vector2",{drawSVG:0, duration: .5})
    tl.from("#ball1",{scale:.25, transformOrigin:"center"})
    tl.from("#Vector3",{drawSVG:0, duration: .5})
    tl.from("#ball2",{scale:.25, transformOrigin:"center"})
    tl.from("#Vector1",{drawSVG:0, duration: .5})
    tl.to(".circle",{scale:.25, transformOrigin:"center"})
    tl.to(".line",{drawSVG:0, duration: .5})


    return tl;  
}

function patternMotion(){
    var tl = gsap.timeline()
    tl.from(".oddtop",{drawSVG:0, duration: .5}) 
    tl.from(".eventop",{drawSVG:0, duration: .5}) 
    tl.from(".oddbottom",{drawSVG:0, duration: .5}) 
    tl.from (".evenbottom",{drawSVG:0, duration: .5}) 

    return tl;
}

function UIMotion(){

    var tl = gsap.timeline()
    
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
    .add(patternMotion())
    .add(UIMotion());



GSDevTools.create();