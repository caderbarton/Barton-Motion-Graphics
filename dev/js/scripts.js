import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function crystal(){
    var tl = gsap.timeline()
    tl.from("#Vector1",{duration:.5, alpha:0})
    tl.from("#Vector2",{duration:.5, alpha:0})
    tl.from("#Vector3",{duration:.5, alpha:0})
    tl.from("#Vector4",{duration:.5, alpha:0})
    tl.from("#Vector5",{duration:.5, alpha:0})
    tl.from("#Vector6",{duration:.5, alpha:0})
    tl.from("#Vector7",{duration:.5, alpha:0},"same")
    tl.from("#sun",{duration:2, clipPath: 'inset(0% 100% 0%)', ease: "bounce.out(2)"},"same")
    tl.to("#s",{drawSVG:"100"})
}
 

 



var mainTL=gsap.timeline();
mainTL.add(crystal())

GSDevTools.create();