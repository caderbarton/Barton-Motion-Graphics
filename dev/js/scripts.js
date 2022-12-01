import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function crystal(){
    var tl = gsap.timeline()
    tl.from("#crys",{duration:5, alpha:0, stagger:".25"})
    tl.to("#lines",{drawSVG:"0"})
    tl.from("#sun",{duration:1, clipPath: 'inset(100% 0% 0%)', ease: "back.out(1.7)"})
}
 

 



var mainTL=gsap.timeline();
mainTL.add(crystal())

GSDevTools.create();