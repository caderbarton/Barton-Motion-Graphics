import{gsap}from"gsap";function heroAnimation(){var i=gsap.timeline();return i.from("gallery-1",{duration:1,x:"-=300%"}),i}var mainTimeline=gsap.Timeline();mainTimeline.add(heroAnimation);