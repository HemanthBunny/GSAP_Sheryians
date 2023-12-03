var tl = gsap.timeline()

function time(){
    var a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*15)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a + "%"
        }
        else{
            a = 100
            document.querySelector("#loader h1").innerHTML = a + "%"
        }
    },70)
}


tl.to("#loader h1",{
    duration : 0.5,
    delay : 0.95,
    onStart : time()
})

tl.to("#loader",{
    top : "-100vh",
    duration : 1.2
})

tl.to("#page1 h1",{
    transform : "translateX(-100%)",
    fontWeight : 100,
    scrollTrigger:{
        trigger : "#page1",
        scroller : "body",
        start : "top 0",
        end : "top -200%",
        pin : true,
        markers : true,
        scrub : 3
    }
})



