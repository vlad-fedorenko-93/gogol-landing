// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  let mm = gsap.matchMedia();

  mm.add({
    isDesktop: "(min-width: 1024px)",
    isTablet: "(min-width: 768px) and (max-width: 1023px)",
    isMobile: "(max-width: 767px)"
    }, (context) => {
      let { isDesktop, isTablet, isMobile } = context.conditions;

      let tl = gsap.timeline();

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

      if( isDesktop ) {

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
            onComplete: () => {
              split.revert(); // 💥 unsplit after animation
            }
          })
          .fromTo(
            "#hero-image",
            {
              height: "0px",
              width: "0%",
              opacity: 0,
            },
            {
              height: "50vh",
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
              height: "50vh",
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

      }

      if ( isTablet ) {

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
          onComplete: () => {
            split.revert(); // 💥 unsplit after animation
          }
        })
        .fromTo(
          "#hero-image",
          {
            height: "0px",
            width: "0%",
            opacity: 0,
          },
          {
            height: "50%",
            width: "90%",
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
            height: "50%",
            width: "90%",
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

      }

      if ( isMobile ) {

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
          onComplete: () => {
            split.revert(); // 💥 unsplit after animation
          }
        })
        .fromTo(
          "#hero-image",
          {
            height: "0px",
            width: "0%",
            opacity: 0,
          },
          {
            height: "50%",
            width: "90%",
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
            height: "50%",
            width: "90%",
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

      }

      return () => {
        split.revert(); // 💥 required
      };

    })

});
