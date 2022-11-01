import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);



function simpleMotion(){
    var tl = gsap.timeline()
    tl.to("#ball",{sclae:.25})
     

    return tl;
}

function patternMotion(){
    var tl = gsap.timeline()

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