var tl = gsap.timeline()
tl.from("#nav h1, #nav #nav1,#nav #nav1 h3, #nav h4" ,{
    duration : 0.5,
    delay : 0.5,
    opacity : 0,
    stagger : 0.2,
    y : -100
} )

tl.from("#content #left-part h1",{
    duration : 0.5,
    opacity : 0,
    stagger : 0.2,
    x : -100
})

tl.from("#content #right-part img",{
    scale : 2,
    opacity : 0,
    duration : 0.5,
    stagger :0.2
})


//note that scrollTrigger can not be based upon the timeline it should be seperate from timeline
//thus gsap.from() here
gsap.from("#page2 .box",{
    scale : 0,
    opacity : 0,
    duration : 0.5,
    stagger : 0.4,
    scrollTrigger: {
        trigger:"#page2 .box",
        scroller:"body",
        start:"top 70%",
        // markers:true
    }
})