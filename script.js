var chalu = document.querySelector("nav i")
var bondho = document.querySelector("#full i")

var tl = gsap.timeline();

tl.to("#full",{
    right: 0,
    duration: 0.3
})

tl.from("#full a",{
    x: 50,
    stagger: .3,
    opacity: 0,
    duration: .3
})

tl.from("#full i",{
    x: 20,
    opacity: 0,
    duration: .4
})


tl.pause();

chalu.addEventListener("click", function(){
    tl.play();
})
bondho.addEventListener("click", function(){
    tl.reverse();
})