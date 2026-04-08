 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

    let textOnCircleTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".text-on-circle-container",
        start: "top+=500px top",
        end: "bottom bottom",
        scrub: true,
    }
    });

    textOnCircleTl.to("#text-1", {
        attr: {
            startOffset: -3,
        }
    })
    .addLabel("start")
    .to("#text-2", {
        attr: {
            startOffset: -3,
        }
    }, "start-=0.2")
    .addLabel("mid")    
    .to("#text-3", {
        attr: {
            startOffset: 3,
        }
    }, "mid-=0.2")
    .addLabel("end")
 });