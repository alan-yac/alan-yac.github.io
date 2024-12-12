// GSAP HORIZONTAL SCROLL

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", function () {
  // Horizontal scroll for horizontal-section
  let container = document.querySelector(".horizontal-scroll-img");
  let containerWidth = container.scrollWidth - document.documentElement.clientWidth;

  gsap.to(container, {
    x: () => -containerWidth,
    scrollTrigger: {
      markers: false,
      trigger: ".horizontal-section",
      start: "top top",
      scrub: 3,
      pin: true,
        pinSpacing:true,
      end: () => '+=${container.scrollWidth}',
      invalidateOnRefresh: true,
    },
  });

  // Slide-in animation for scroll-section-2
  gsap.utils.toArray(".full-width").forEach((element, index) => {
    gsap.fromTo(
      element,
      {
        x: index % 2 === 0 ? "-100%" : "100%",
        opacity: 0, 
      },
      {
        x: "0%", 
        opacity: 1, 
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%", 
          end: "center 60%", 
          toggleActions: "play none none reverse",
          markers: false, 
        },
      }
    );
  });
});