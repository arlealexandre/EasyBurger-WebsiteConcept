$(document).ready(function(){

    /* GSAP - animation */

    TweenMax.from("#w1", 1, {
        delay: 0.1,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut
    });
    TweenMax.from("#w2", 1.1, {
        delay: 0.1,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut
    });
    TweenMax.from("#w3", 1.2, {
        delay: 0.1,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut
    });
    TweenMax.from("#w4", 1.3, {
        delay: 0.1,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut
    });
    TweenMax.from("#w5", 1.4, {
        delay: 0.1,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut
    });
    TweenMax.from("#w6", 1.5, {
        delay: 0.1,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut
    });
    
    TweenMax.from(".title", 1.6, {
        delay: 0.1,
        opacity: 0,
        x: 20,
        ease: Expo.easeInOut
    });
    
    TweenMax.from(".container-order-btn", 1.8, {
        delay: 0.1,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });

    TweenMax.from(".burger-animation", 2, {
        delay: 0.1,
        opacity: 0,
        y: -50,
        ease: Expo.easeInOut
    });

    /* jQuery - navbar script */
    
    $("#div1").hide();
    $("#div2").hide();
    $("#div3").hide();
    $("#div4").hide();

    $(".burger-animation").show();
    
    $("#our-burger").click(function(){
    
        $("#div1").slideDown();
    
        $("#div2").slideUp();
        $("#div3").slideUp();
        $("#div4").slideUp();
        $(".burger-animation").fadeOut();
    });
    
    $("#about-our-meat").click(function(){
    
        $("#div2").slideDown();
    
        $("#div1").slideUp();
        $("#div3").slideUp();
        $("#div4").slideUp();
        $(".burger-animation").fadeOut();
    
    });
    
    $("#locate").click(function(){
    
        $("#div3").slideDown();
    
        $("#div1").slideUp();
        $("#div2").slideUp();
        $("#div4").slideUp();
        $(".burger-animation").fadeOut();
    
    });
    
    $("#order").click(function(){
    
        $("#div4").slideDown();
    
        $("#div1").slideUp();
        $("#div2").slideUp();
        $("#div3").slideUp();
        $(".burger-animation").fadeOut();
    
    });
    
    $("#close1").click(function(){
        $("#div1").slideUp();
        $(".burger-animation").fadeIn();
    });
    $("#close2").click(function(){
        $("#div2").slideUp();
        $(".burger-animation").fadeIn();
    });
    $("#close3").click(function(){
        $("#div3").slideUp();
        $(".burger-animation").fadeIn();
    });
    $("#close4").click(function(){
        $("#div4").slideUp();
        $(".burger-animation").fadeIn();
    });

});

/* jQuery - total payable function*/

function total_payable() {

    var classic_burger = $("#nb-classic-burger").val();
    var chicken_burger = $("#nb-chicken-burger").val();
    var veggie_burger = $("#nb-veggie-burger").val();
    var fries = $("#nb-fries").val();
    var potatoes = $("#nb-potatoes").val();
    var tea = $("#nb-tea").val();
    var cola = $("#nb-cola").val();
    var beer = $("#nb-beer").val();

    var total = (classic_burger*6) + (chicken_burger*7) + (veggie_burger*7.5) + (fries*2) + (potatoes*3) + (tea*2) + (cola*3) + (beer*4.5);
    $("#total-payable").html(total);
}