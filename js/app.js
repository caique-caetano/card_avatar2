document.addEventListener('DOMContentLoaded', () =>{

    let tl = new TimelineMax();

    tl.fromTo('.container', 0.8 ,
    {width:'100%'}, 
    {width: '0%', delay:5, ease: Expo.easeInOut})
    
    .fromTo('.card', 2 ,
    {y:-500, opacity:0},
    {y:0, duration:5, opacity:1, ease: Expo.easeInOut}, '-=0.5')

})