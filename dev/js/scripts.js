import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);


 
function textaway(){
    var tl = gsap.timeline()
    tl.to(".t",{alpha:0, stagger:-.1})
    return tl;  
}

function moveshapes(){
    var tl = gsap.timeline()
    tl.to("#DBlueD",{duration:1, x:155, rotate:180, transformOrigin:'center',ease:"back.out(2)"},"same")
    tl.to("#GreenD",{duration:1, morphSVG:"#Rectangle1",ease:"back.out(2)"},"same")
    tl.from("#Ellipse1",{scale:0, transformOrigin:'center',ease:"back.out(2)"},"text")
    tl.to("#LBlueD",{duration:1, morphSVG:"#Rectangle2",ease:"back.out(2)"},"same")
    tl.from("#C", {alpha:0},"text")
    tl.from("#Freelancer", {alpha:0},"text")
    tl.from("#Employer", {alpha:0},"text")
    tl.from("#Vector4", {duration:3, y:-300},"text")
    tl.from("#Vector5", {duration:3, y:300},"text") 
    return tl;  
} 
function moveshapesagain(){
    var tl = gsap.timeline() 
    tl.to("#DBlueD",{duration:.5, x:-1},"1")
    tl.to("#GreenD",{duration:.5, morphSVG:"#GreenD2"},"1")
    tl.to("#Ellipse1",{scale:0, transformOrigin:'center'},"1")
    tl.to("#LBlueD",{duration:.5, morphSVG:"#LBlueD2"},"1")
    tl.to("#C", {duration:.25, alpha:0},"1")
    tl.to("#Freelancer", {duration:.25, alpha:0},"1")
    tl.to("#Employer", {duration:.25,alpha:0},"1")
    tl.to("#Vector4", {duration:.25,alpha:0},"1")
    tl.to("#Vector5", {duration:.25,alpha:0},"1 ")
    return tl;  
}

function textin(){
    var tl = gsap.timeline()
    tl.from(".t2",{y:20, alpha:0, stagger:-.1,ease:"back.out(5)"})
    return tl;  
}


var mainTL = gsap.timeline();
mainTL.add(textaway())
mainTL.add(moveshapes())
mainTL.add(moveshapesagain())
mainTL.add(textin());


