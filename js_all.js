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
// loop through each .box element
$(document).ready(function(){
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
    
});
