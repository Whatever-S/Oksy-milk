$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        speed:1000,
        easing:'ease',
        slidesToShow:1,
        waitForANimate:true,
        centerMode:true,
        variableWidth:true,
        responsive:[{
            breakpoint:768,
            settings:{

            }
        }]
    });
});