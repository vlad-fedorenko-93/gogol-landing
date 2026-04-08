// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {

    gsap.registerPlugin(ScrollTrigger)

    let stackingCardsTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".stacking-cards-container",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        }
    })

    stackingCardsTl
    .to(".wrapper-1", {
        scale: 0.85,
        duration: 1
    })
    .to(".wrapper-2", {
        y: 10,
        scale: 0.9,
        duration: 2
    })
    .to(".bakery-photos", {
        x: "-110vw",
        duration: 2
    }, '-=2.5')

    let fineCupTrigger = {
        trigger: ".stacking-cards-container",
        start: "-10% top",
        end: "10% 30%",
        scrub: 1,
        stagger: 0.5,
    }

    gsap.from(".pot", {
        scrollTrigger: fineCupTrigger,
        x: -200,
        rotation: 0,
    },)

    gsap.from(".tool", {
        scrollTrigger: fineCupTrigger,
        x: -200,
        rotation: 0,
    })

    gsap.from(".beans", {
        scrollTrigger: fineCupTrigger,
        x: -300,
    })

    gsap.from(".drip-1", {
        scrollTrigger: fineCupTrigger,
        x: 200,
        rotation: 0,
    })

    gsap.from(".drip-2", {
        scrollTrigger: fineCupTrigger,
        x: 200,
        rotation: 0,
    })

    gsap.from(".fine-cup", {
        scrollTrigger: fineCupTrigger,
        x: 300,
        rotation: 0,
    })

});