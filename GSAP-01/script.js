// gsap.to(".box",{
//     x:900,
//     y:300,
//     duration : 2,
//     delay : 1,
//     rotate: 54,
//     backgroundColor : "yellow"    
// })   1b

// gsap.to(".box",{
//     x:300,
//     y:200,
//     duration : 1,
//     delay : 2,
//     rotate: 76,
//     backgroundColor : "blue"    
// })  1b

// gsap.from(".box",{
//     x:300,
//     y:200,
//     duration : 1,
//     delay : 2,
//     rotate: 76,
//     backgroundColor : "blue"    
// })    1a

// gsap.from(".box",{
//     x:900,
//     y:300,
//     duration : 2,
//     delay : 1,
//     rotate: 54,
//     backgroundColor : "yellow"    
// })    1a

// gsap.to("h1",{
//     color:"light-blue",
//     x:900,
//     duration:1,
//     delay:1
// })   2a

// gsap.to("h2",{
//     color:"green",
//     x:900,
//     duration:1,
//     delay:3
// })  2a

// gsap.to("h3",{
//     color:"darkorange",
//     x:900,
//     duration:1,
//     delay:5
// })  2a

// gsap.to("h1",{
//     color:"red",
//     x:900,
//     duration:0.5,
//     delay:0.5,
//     stagger:0.5,
//     repeat : 0, //1 for repeating it once again , -1 for repeating it infinite tyms
//     yoyo : true  //when true repeat value gets overridden for some reason
// })   3a

let tl = gsap.timeline()

tl.to("h1",{
    x:900,
    color:"khaki",
    duration:1,
    delay:1
})

tl.to("h2",{
    x : 900,
    color:"green",
    duration:1
})

tl.to("h3",{
    x:900,
    color:"red",
    duration:1
})