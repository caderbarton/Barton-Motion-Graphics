import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin);

function crystal(){
    var tl = gsap.timeline()
    tl.from("#Vector1",{duration:.5, alpha:0});
    tl.from("#Vector2",{duration:.5, alpha:0});
    tl.from("#Vector3",{duration:.5, alpha:0});
    tl.from("#Vector4",{duration:.5, alpha:0});
    tl.from("#Vector5",{duration:.5, alpha:0});
    tl.from("#Vector6",{duration:.5, alpha:0});
    tl.from("#Vector7",{duration:.5, alpha:0});
    tl.from("#clip",{duration:1, transformOrigin:"center", scale:0},"same")
    tl.fromTo("#stroke",{drawSVG:"75% 75%"},{duration:2, drawSVG:"125% 25%"},"same");
    return tl;
}
 
 
 



var mainTL=gsap.timeline();
mainTL.add(crystal())
