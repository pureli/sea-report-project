//fadein
// $(document).ready(function(){
//     //init ScrollMagic
//     var controller = new ScrollMagic.Controller();

//     //build a scene
//     var ourScene = new ScrollMagic.Scene({
//         triggerElement: '#box-1'
//     })
//     .setClassToggle('#box-1','fade-in')//add class to box-1
//     .addTo(controller);
    
//     //build a scene
//     var ourScene2 = new ScrollMagic.Scene({
//         triggerElement: '#box-2'
//     })
//     .setClassToggle('#box-2','fade-in')//add class to box-1
//     .addTo(controller);

//     //build a scene
//     var ourScene3 = new ScrollMagic.Scene({
//         triggerElement: '#box-3'
//     })
//     .setClassToggle('#box-3','fade-in')//add class to box-1
//     .addTo(controller);
// });





// 另一種寫法 
$(document).ready(function(){
    // loop through each .box element
    //init ScrollMagic
    var controller = new ScrollMagic.Controller();
    
    //build a scene
    $('.box').each(function(){
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0]
        })
        .setClassToggle(this,'fade-in')//add class to box-1
        .addTo(controller);
    }
    );



    
    // section with parallax effect
    var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '.bcg-parallax',
        triggerHook: 1,
        duration: '200%'
    })
    .setTween(TweenMax.from('.bcg', 1, {y:'-50%', ease:Power0.easeNone}))
    .addTo(controller);

    // 呈上，另一種寫法（有問題待研究）
    // var parallaxTl = new TimeLineMax();
    // parallaxTl
    //     .from('.content-wrapper', 1, {autoAlpha: 0, ease:Power0.easeNone})
    //     .from('.bcg', 1, {y: '-50%', ease:Power0.easeNone})
    //     ;
    
    // var slideParallaxScene = new ScrollMagic.Scene({
    //     triggerElement: '.bcg-parallax',
    //     triggerHook: 1,
    //     duration: '100%'
    // })
    // .setTween(parallaxTl)
    // .addTo(controller);
    
});
