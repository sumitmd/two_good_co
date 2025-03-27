const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// gsap.to("#nav-part2 .links",{
//   transform: "translateY(-100%)",
//   opacity:0.5,
//   scrollTrigger:{
//     trigger:".page1",
//     // scroller:".main",
//     start:"top 0",
//     end:"top -5%",
//     scrub:true
//   }
// })

function videoconAnimation() {
  let videocon = document.querySelector(".vid-cont");
  let playbtn = document.querySelector("#play");

  videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      opacity: 1,
      scale: 1,
    });
  });

  videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      opacity: 0,
      scale: 0,
    });
  });

  videocon.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 70,
      top: dets.y - 50,
    });
  });
}
videoconAnimation();

function loadingAnimaton() {
  gsap.from(".page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });

  gsap.from(".page1 .vid-cont", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.3,
  });
}
loadingAnimaton();

document.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    left: dets.x,
    top: dets.y,
  });
});

function mouseFollower() {
  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });

    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
}
mouseFollower();
