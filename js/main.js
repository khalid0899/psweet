/// client part slider
$('.client_part').slick({     
      slidesToShow: 1,
      slidesToScroll: 1,
      dots:false,
      prevArrow: ".client_prev",
      nextArrow: ".client_next",
});

//work mixitup

var mixer = mixitup('.workCard_part');
//mixitup button active
$('button').on('click', function(event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });

    