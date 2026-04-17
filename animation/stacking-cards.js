// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 1024px)",
      isTablet: "(min-width: 768px) and (max-width: 1023px)",
      isMobile: "(max-width: 767px)",
    },
    (context) => {
        let { isDesktop, isTablet, isMobile } = context.conditions;

      let stackingCardsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".stacking-cards-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      if (isDesktop) {
        stackingCardsTl
          .to(".wrapper-1", {
            scale: 0.85,
            duration: 1,
          })
          .to(".wrapper-2", {
            y: 10,
            scale: 0.9,
            duration: 2,
          })
          .to(
            ".bakery-photos",
            {
              x: "-110vw",
              duration: 2,
            },
            "-=2.5",
          );

        let fineCupTrigger = {
          trigger: ".stacking-cards-container",
          start: "-10% top",
          end: "10% 30%",
          scrub: 1,
          stagger: 0.5,
        };

        gsap.from(".pot", {
          scrollTrigger: fineCupTrigger,
          x: -200,
          rotation: 0,
        });

        gsap.from(".tool", {
          scrollTrigger: fineCupTrigger,
          x: -200,
          rotation: 0,
        });

        gsap.from(".beans", {
          scrollTrigger: fineCupTrigger,
          x: -300,
        });

        gsap.from(".drip-1", {
          scrollTrigger: fineCupTrigger,
          x: 200,
          rotation: 0,
        });

        gsap.from(".drip-2", {
          scrollTrigger: fineCupTrigger,
          x: 200,
          rotation: 0,
        });

        gsap.from(".fine-cup", {
          scrollTrigger: fineCupTrigger,
          x: 300,
          rotation: 0,
        });
      }

      if (isTablet) {
        stackingCardsTl
          .to(".wrapper-1", {
            scale: 0.85,
            duration: 1,
          })
          .to(".wrapper-2", {
            y: 10,
            scale: 0.9,
            duration: 2,
          })
          .to(
            ".bakery-photos",
            {
              x: "-70%",
              duration: 2,
            },
            "-=2",
          );

        let fineCupTrigger = {
          trigger: ".stacking-cards-container",
          start: "-10% top",
          end: "10% 30%",
          scrub: 1,
          stagger: 0.5,
        };

        gsap.from(".pot", {
          scrollTrigger: fineCupTrigger,
          x: -200,
          rotation: 0,
        });

        gsap.from(".tool", {
          scrollTrigger: fineCupTrigger,
          x: -200,
          rotation: 0,
        });

        gsap.from(".beans", {
          scrollTrigger: fineCupTrigger,
          x: -300,
        });

        gsap.from(".drip-1", {
          scrollTrigger: fineCupTrigger,
          x: 200,
          rotation: 0,
        });

        gsap.from(".drip-2", {
          scrollTrigger: fineCupTrigger,
          x: 200,
          rotation: 0,
        });

        gsap.from(".fine-cup", {
          scrollTrigger: fineCupTrigger,
          x: 300,
          rotation: 0,
        });
      }

      if (isMobile) {
        stackingCardsTl
          .to(".wrapper-1", {
            scale: 0.85,
            duration: 1,
            y: -70,
          })
          .to(".wrapper-2", {
            y: 10,
            scale: 0.97,
            duration: 2,
            y: -30,
          })
          .to(
            ".bakery-photos",
            {
              x: "-60%",
              duration: 2,
            },
            "-=2.5",
          );

        let fineCupTrigger = {
          trigger: ".stacking-cards-container",
          start: "-10% top",
          end: "10% 30%",
          scrub: 1,
          stagger: 0.5,
        };

        gsap.from(".pot", {
          scrollTrigger: fineCupTrigger,
          x: -200,
          rotation: 0,
        });

        gsap.from(".tool", {
          scrollTrigger: fineCupTrigger,
          x: -200,
          rotation: 0,
        });

        gsap.from(".beans", {
          scrollTrigger: fineCupTrigger,
          x: -300,
        });

        gsap.from(".drip-1", {
          scrollTrigger: fineCupTrigger,
          x: 200,
          rotation: 0,
        });

        gsap.from(".drip-2", {
          scrollTrigger: fineCupTrigger,
          x: 200,
          rotation: 0,
        });

        gsap.from(".fine-cup", {
          scrollTrigger: fineCupTrigger,
          x: 300,
          rotation: 0,
        });
      }

    },
  );
});
