// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  let split = new SplitText("#title", {
    type: "lines",
    mask: "lines",
  });

  gsap.set("#hero-image", {
    height: "0px",
    width: "0%",
    opacity: "100%",
    visibility: "visible",
  });

  let tl = gsap.timeline();

  let scrollAnim = {
    trigger: "#hero",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
  };

  tl.from(split.lines, {
    y: 100,
    stagger: 0.2,
    duration: 2,
    ease: "power2.out",
  }).fromTo(
    "#hero-image",
    {
      height: "0px",
      width: "0%",
      opacity: 0,
    },
    {
      height: "500px",
      width: "40%",
      opacity: 1,
      ease: "power2.out",
      duration: 2,
    },
    "<0.5",
  );

  gsap.fromTo(
    "#title",
    {
      color: "hsl(0,0,0)",
    },
    {
      color: "hsl(0,0,100)",
      ease: "power2.out",
      scrollTrigger: scrollAnim,
    },
  );

  gsap.fromTo(
    "#hero-image",
    {
      height: "500px",
      width: "40vw",
      borderRadius: "32px 32px 0 0",
    },
    {
      height: "100vh",
      width: "100vw",
      borderRadius: "0",
      ease: "power2.out",
      scrollTrigger: scrollAnim,
    },
  );

  gsap.fromTo(
    "#hero-image",
    {
      "--overlay-alpha": 0,
    },
    {
      "--overlay-alpha": 0.8,
      ease: "power2.out",
      scrollTrigger: scrollAnim,
    },
  );

  gsap.to("#title", {
    scrollTrigger: scrollAnim,
    y: 200,
    ease: "ease.inOut",
  });
});
