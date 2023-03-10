$(function() {

	if ( $('.owl-2').length > 0 ) {
        $('.owl-2').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 20,
            smartSpeed: 1000,
  
            nav: true,
            dots: true,
            pauseOnHover: false,
            responsive:{
              400:{
                margin: 20,
                nav: true,
              items: 1
            },
                600:{
                    margin: 20,
                    nav: true,
                  items: 3
                },
                1000:{
                    margin: 20,
                    stagePadding: 0,
                    nav: true,
                  items: 4
                },
                2000:{
                  margin: 20,
                  stagePadding: 0,
                  nav: true,
                items: 6
              }
            }
        });            
    }

})