

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    getDirection: true,
    getSpeed: true
  });
  
  // Update ScrollTrigger when Locomotive Scroll updates
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // Tell ScrollTrigger to use these proxy methods for the "#main" element
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // Reloading the scroll position after page load
  window.addEventListener('load', function () {
    locoScroll.update();
    ScrollTrigger.refresh();
  });
  
  // ScrollTrigger animations and other transitions
  gsap.registerPlugin(ScrollTrigger);
  
  // Menu click event
  var menu = document.querySelector("#nav-part2 i");
  var full = document.querySelector("#fscr-nav");
  var flag = 0;
  
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = "0%";
      document.querySelector("#nav h2").style.color = "#222";
      document.querySelector("#nav h3").style.color = "#222";
      document.querySelector("#nav i").style.color = "#222";
      flag = 1;
    } else {
      full.style.top = "-100%";
      document.querySelector("#nav h2").style.color = "#dadada";
      document.querySelector("#nav h3").style.color = "#dadada";
      document.querySelector("#nav i").style.color = "#dadada";
      flag = 0;
    }
  });
  
  // GSAP Animations
  gsap.to("#page5 img", {
    rotate: 360,
    repeat: -1,
    duration: 1,
    ease: "none"
  });
  
  var tl = gsap.timeline();
  
  tl.from("#page1 h1", {
    y: 60,
    duration: 0.6,
    opacity: 0
  })
  .from("#page1 h2", {
    y: 50,
    duration: 0.5,
    opacity: 0,
    delay: "-0.2"
  })
  .from("#page1 h3", {
    y: 50,
    duration: 0.5,
    opacity: 0,
    delay: "-0.2"
  });
  
  gsap.to("#page2 img", {
    scale: 1.2,
    scrollTrigger: {
      trigger: "#page2 img",
      scroller: "#main",
      start: "top 80%",
      end: "top 10%",
      scrub: 3
    }
  });
  
  gsap.to("#page2 h1", {
    rotateX: "0",
    opacity: 1,
    scrollTrigger: {
      trigger: "#h11",
      scroller: "#main",
      scrub: 2,
      start: "top 70%",
      end: "top 50%"
    }
  });
  
  gsap.from("#page3", {
    width: 0,
    duration: 3,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      scrub: 4,
      start: "top 80%",
      end: "top 20%",
      ease: "slow(0.7,0.7,false)"
    }
  });
  
  var slide1h1 = document.querySelectorAll("#page6 .slide-h1 h1");
  slide1h1.forEach(function (elem) {
    gsap.to(elem, {
      transform: "translateX(-100%)",
      duration: 4,
      scrollTrigger: {
        trigger: "#page6",
        scroller: "#main",
        scrub: 5,
        start: "top 80%"
      }
    });
  });
  
  var slide1h2 = document.querySelectorAll("#page6 .slide-h2 h1");
  slide1h2.forEach(function (elem) {
    gsap.to(elem, {
      transform: "translateX(0)",
      duration: 4,
      scrollTrigger: {
        trigger: "#page6",
        scroller: "#main",
        scrub: 5,
        start: "top 80%"
      }
    });
  });
  
  document.querySelector("#page7 #ele1").addEventListener("mousemove", function (dets) {
    document.querySelector("#page7 #ele1 img").style.opacity = 0.3;
    document.querySelector("#page7 #ele1 img").style.left = `${dets.x}px`;
    document.querySelector("#page7 #ele1 img").style.top = `${dets.y - 430}px`;
  });
  document.querySelector("#page7 #ele1").addEventListener("mouseleave", function () {
    document.querySelector("#page7 #ele1 img").style.opacity = 0;
  });
  
  document.querySelector("#page7 #ele2").addEventListener("mousemove", function (dets) {
    document.querySelector("#page7 #ele2 img").style.opacity = 0.3;
    document.querySelector("#page7 #ele2 img").style.left = `${dets.x}px`;
    document.querySelector("#page7 #ele2 img").style.top = `${dets.y - 430}px`;
  });
  document.querySelector("#page7 #ele2").addEventListener("mouseleave", function () {
    document.querySelector("#page7 #ele2 img").style.opacity = 0;
  });
  
  gsap.from("#page4 h1", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "#main",
      scrub: 4,
      start: "top 80%",
      end: "top 20%",
      ease: "power4.out"
    }
  });
  
  // After creating ScrollTriggers, refresh ScrollTrigger and update LocomotiveScroll
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
  