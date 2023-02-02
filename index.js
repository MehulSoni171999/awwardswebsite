gsap.registerPlugin(ScrollTrigger);

tl= gsap.timeline()
gsap.to("#nav-second .ftext h1 span ",{
   scrollTrigger:{
      trigger:"#nav-second",
      start:"top 10%",
    
      scrub:1,
   },
  y:-800,
  
},"s")
 
gsap.to("#nav-second .fone  ",{
   scrollTrigger:{
      trigger:"#nav-second",
      start:"top 10%",
    
      scrub:1,
   },
  y:-800,
//   x:-200,
  opacity:1.5,
},"s")

gsap.to("#astro-slide .astroimg",{
   scrollTrigger:{
      trigger:".astroimg",
      start:"top 25%",
    
      scrub:2,
   },
  y:350,
  x:50,
   scale:0.5,
},"p")
 



gsap.to("#astro-slide .astrotext",{
   scrollTrigger:{
      trigger:".astrotext",
      start:"top 0%",
    delay:4,
    duration:5,
      scrub:3,
      stagger:4,
   },
opacity:1.5,
   scale:0.5,
   rotate:"200deg",
   y:200,
   x:20,
},)
 

gsap.to("#elegant .elegmain  ",{
   scrollTrigger:{
      trigger:"#elegant",
      start:"top 60%",
    
      scrub:1,
   },
  y:-250,
//   x:-200,
  opacity:1.5,
},"q")

gsap.to("#elegant .elegupper  ",{
   scrollTrigger:{
      trigger:"#elegant",
      start:"top 60%",
    delay:4,
      scrub:1,
   },
  y:-550,
//   x:-200,
  opacity:1.5,
},"q")

gsap.to("#elegant .elegtext ",{
   scrollTrigger:{
      trigger:"#elegant",
      start:"top 50%",
    duration:10,
      scrub:1,
   },
  x:-500,
  y:-300,
//   x:-200,
},"q")

var h1=document.querySelectorAll(".undertry");
var h2=document.querySelectorAll(".texttry h2");


h1.forEach(function(e){
      e.addEventListener("mouseenter",function(dets){
gsap.to(".texttry h1",{
   ease:Expo.power4,
   duration:3,
   top:"-100%",
   scrub:1,
  })
  
console.log(dets.target)
})
})
h1.forEach(function(e){
   e.addEventListener("mouseleave",function(dets){
      gsap.to(".texttry h1",{
         ease:Expo.power4,
         duration:1,
         top:"8%",
         scrub:1,
        })
      console.log(dets)
   })
})

