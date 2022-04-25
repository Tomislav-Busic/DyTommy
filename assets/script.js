$(document).ready(function(){
    $(".sidemenu-toggler").click(function(){
        $(".sidemenu").addClass("active");
    });

    $(".close").click(function(){
        $(".sidemenu").removeClass("active");
    });

    $(".header .sidemenu nav ul li a").click(function(){
        $(".sidemenu").removeClass("active");
    });

    $(window).scroll(function(){
        if(this.scrollY > 10){
            $('.header').addClass("sticky");
        }else{
            $('.header').removeClass("sticky");
        }
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Travel to Croatia", "Team Buildings", "InstaZagreb","Personalized Escape tour","DJing"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    //micanje navbara kad se scrola
    $(window).on('scroll load', function(){
        $(".sidemenu").removeClass("active");

        //prepoznavanje sekcija(scroll spy)

        $('section').each(function(){

            let top = $(window).scrollTop();
            let offset = $(this).offset().top -200;
            let height = $(this).height();
            let id = $(this).attr('id');

            if(top > offset && top < offset + height){
                $('.header .menu a').removeClass('active_a');
                $('.header .sidemenu nav a').removeClass('active_a');
                $('.header').find(`[href="#${id}"]`).addClass('active_a');
            }
        });
    });

});

