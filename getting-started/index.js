gsap.set('#rocket', {
    xPercent: -50, 
    yPercent: -50, 
    left: "50%", 
    top: "50%",
    position: "absolute",
});

gsap.to('#rocket', {
   duration: 2,
   rotation: 180 
});