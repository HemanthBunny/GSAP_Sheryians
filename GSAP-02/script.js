var tl = gsap.timeline()

tl.from("#nav img,#nav h3,#nav button,#nav h4",{
    y: -100,
    opacity:0,
    duration : 0.6,
    delay : 0.5,
    stagger : 0.2
})

tl.from("#main h1",{
    x : -300,
    opacity : 0,
    stagger : 0.4,
    duration : 0.6
})

tl.from("#main span",{
    x : 300,
    opacity : 0,
    stagger : 0.4,
    duration : 0.6
})

tl.from("#main #img1",{
    x : 200,
    opacity : 0,
    duration : 0.4,
    rotate : 50,
    stagger :0.3
})

tl.from("#main #img2",{
    x : -200,
    opacity : 0,
    duration : 0.4,
    rotate : 50,
    stagger : 0.3
})

tl.from("#main h4",{
    scale : 0,
    opacity : 0
})

tl.to("#main h4",{
    y : 30,
    duration : 0.7,
    yoyo : true,
    repeat : -1
})