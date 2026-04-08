document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.from(".photo-1", {
        scrollTrigger: {
            trigger: ".instagram-container",
            start: "top center",
            end: "center center",
            scrub: 1,
        },
        y: 100,
        ease: "power2.out",
    })

    gsap.from(".photo-2", {
        scrollTrigger: {
            trigger: ".instagram-container",
            start: "top center",
            end: "center center",
            scrub: 1,
        },
        y: 50,
        ease: "power2.out",
    })

    gsap.from(".photo-3", {
        scrollTrigger: {
            trigger: ".instagram-container",
            start: "top center",
            end: "center center",
            scrub: 1,
        },
        y: 80,
        ease: "power2.out",
    })

    gsap.from(".photo-4", {
        scrollTrigger: {
            trigger: ".instagram-container",
            start: "top center",
            end: "center center",
            scrub: 1,
        },
        y: 120,
        ease: "power2.out",
    })

    gsap.from(".photo-5", {
        scrollTrigger: {
            trigger: ".instagram-container",
            start: "top center",
            end: "center center",
            scrub: 1,
        },
        y: 80,
        ease: "power2.out",
    })

})