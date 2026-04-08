document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, SplitText); 

  let split = SplitText.create(".anim-text", {type: "words"});

  gsap.from(split.words, {
    scrollTrigger: {
        trigger: '.about-section',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
    },
    opacity: 0.1,
    stagger: 0.3,
  })
})