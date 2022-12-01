import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function crystal(){
    var tl = gsap.timeline()
    tl.from("#crys",{duration:5, alpha:0, stagger:.5})
    tl.to("#lines",{drawSVG:"0"})
    tl.from("#sun",{clipPath:"0 100 0"})
}
 

 



var mainTL=gsap.timeline();
mainTL.add(crystal())

GSDevTools.create();