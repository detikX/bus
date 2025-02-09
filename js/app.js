$(document).ready(function () {
    AOS.init();
})


gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panelx");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".containerx",
        pin: true,
        scrub: 1,

        end: () => "+=" + document.querySelector(".containerx").offsetWidth
    }
});