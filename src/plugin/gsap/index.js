import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin); 

export const ProvideGsap = (app) => {
  app.provide("$gsap", gsap);
};
