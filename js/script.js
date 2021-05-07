$(window).scroll(function(){

  $scrollamount = $(window).scrollTop();

  if($scrollamount > 500){

   $(".menu").addClass("sticky")
  }
  else{
    $(".menu").removeClass("sticky")
  }

 if($scrollamount > 1000){

    $(".btop").fadeIn()

 }else{

  $(".btop").fadeOut()


 }

})




$(".btop").click(function(){

  $("html,body").animate({

    scrollTop: 0
  },10000)

})





// banner slider

$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });








  

  $('.venobox').venobox(); 




  $(".item2").mouseenter(function(){

    $(".img1").fadeOut();
    $(".img2").fadeIn();

  });



  $(".item2").mouseleave(function(){

    $(".img1").fadeIn();
    $(".img2").fadeOut();



  });


  $(".item3").mouseenter(function(){

    $(".img1").fadeOut();
    $(".img3").fadeIn();

  });


  $(".item3").mouseleave(function(){

    $(".img1").fadeIn();
    $(".img3").fadeOut();

  });




  $(".item4").mouseenter(function(){

    $(".img4").fadeIn();
    $(".img1").fadeOut();

  });


  $(".item4").mouseleave(function(){

    $(".img1").fadeIn();
    $(".img4").fadeOut();

  });





  // service slider part

  $('.service-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    vertical: true,
    prevArrow: '<i class="fa fa-angle-up upp" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-down dow" aria-hidden="true"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,

        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });





  
  $('.testi-slider .left').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    prevArrow: '<i class="fa fa-angle-up uu" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-down dd" aria-hidden="true"></i>',
    asNavFor: '.testi-slider .right',
  });




  $('.testi-slider .right').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // vertical: true,
    arrows: false,
    // fade: true,
    asNavFor: '.testi-slider .left',
  });



  // counter js start


  $('.counter').counterUp({
    delay: 10,
    time: 1000
});


// counter js end












  // $('.testi-slider .left').slick({
  //   dots: false,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   vertical: true,
  //   prevArrow: '<i class="fa fa-angle-up uu" aria-hidden="true"></i>',
  //   nextArrow: '<i class="fa fa-angle-down dd" aria-hidden="true"></i>',
    

  // });




 