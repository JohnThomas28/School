  $(document).ready(function() {
      $('ul.nav li.dropdown').hover(function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
      }, function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
      });

      $("#owl-demo").owlCarousel({

          navigation: false, // Show next and prev buttons
          slideSpeed: 300,
          paginationSpeed: 400,
          singleItem: true,
          autoPlay: 3000 //Set AutoPlay to 3 seconds



          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false

      });

      $("#owl-demo1").owlCarousel({
          pagination: false,
          navigation: true,
          navigationText: [
              "<i class=' fa fa-chevron-left fa-2x' style='margin-left:-6px'></i>",
              "<i class=' fa fa-chevron-right fa-2x' style='margin-right:-6px'></i>"
          ],
          slideSpeed: 300,
          paginationSpeed: 400,

          singleItem: false,
          itemsCustom: [
              [0, 1],
              [450, 1],
              [600, 1],
              [700, 1],
              [1000, 2],
              [1200, 2],
              [1400, 2],
              [1600, 2]
          ],
          autoPlay: 3000 //Set AutoPlay to 3 seconds



          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false

      });


      $("#owl-demo2").owlCarousel({
          pagination: false,
          navigation: true, // Show next and prev buttons
          navigationText: [
              "<i class=' fa fa-chevron-left fa-2x' style='margin-left:-6px'></i>",
              "<i class=' fa fa-chevron-right fa-2x' style='margin-right:-6px'></i>"
          ],
          slideSpeed: 300,
          paginationSpeed: 400,

          itemsCustom: [
              [0, 1],
              [450, 1],
              [600, 1],
              [700, 1],
              [1000, 1],
              [1200, 1],
              [1400, 1],
              [1600, 1]
          ],

          autoPlay: 3000 //Set AutoPlay to 3 seconds



          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false

      });

      $("#owl-demo3").owlCarousel({




          pagination: false,
          lazyload: true,
          navigation: true, // Show next and prev buttons
          navigationText: [
              "<i class=' fa fa-chevron-left fa-2x' style='margin-left:-6px'></i>",
              "<i class=' fa fa-chevron-right fa-2x' style='margin-right:-6px'></i>"
          ],
          itemsCustom: [
              [0, 1],
              [450, 1],
              [600, 2],
              [700, 3],
              [1000, 4],
              [1200, 4],
              [1400, 4],
              [1600, 4]
          ],

          autoPlay: 3000 //Set AutoPlay to 3 seconds



          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false

      });

      $("#owl-demo4").owlCarousel({




          pagination: false,
          lazyload: true,
          navigation: false, // Show next and prev buttons



          itemsCustom: [
              [0, 2],
              [450, 2],
              [600, 4],
              [700, 5],
              [1000, 6],
              [1200, 6],
              [1400, 6],
              [1600, 6]
          ],

          autoPlay: 3000 //Set AutoPlay to 3 seconds



          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false

      });


  });

  $(".preloader").fakeLoader({
      // Time in milliseconds for fakeLoader disappear
      timeToHide: 4200,
    

      spinner:"spinner3",
      // Background color. Hex, RGB or RGBA colors
      bgColor: "white"
         
      // Custom loading GIF.

  });


  wow = new WOW({
      boxClass: 'wow', // default
      animateClass: 'animated', // default
      offset: 0, // default
      mobile: true, // default
      live: true // default
  })
  wow.init();


  $(document).ready(function() {
      $('div a').tooltip({
          placement: 'top',
          trigger: 'manual'
      }).tooltip('show');
      $('div a').on('click', function() {
          $(this).tooltip('destroy');
      });
  });


  $(window).load(function() {
      var $container = $('.portfolioContainer');
      $container.isotope({
          filter: '*',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      });

      $('.portfolioFilter a').click(function() {
          $('.portfolioFilter .current').removeClass('current');
          $(this).addClass('current');

          var selector = $(this).attr('data-filter');
          $container.isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false
              }
          });
          return false;
      });
  });

  $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
          $('#scroll-top1:hidden').stop(true, true).fadeIn();
      } else {
          $('#scroll-top1').stop(true, true).fadeOut();
      }
  });
  $('#scroll-top1').click(function() {
      $("html, body").animate({
          scrollTop: 0
      }, 2000);
      return false;
  });
  
  $(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});
 // THEME SETTING
        $('.theme-setting > a.btn-theme-setting').on('click', function(){
            if($('.theme-setting').css('left') < '0'){
                $('.theme-setting').css('left', '0');
            } else {
                $('.theme-setting').css('left', '-220px');
            }
        });

function init_map() {
                                var myOptions = {
                                    zoom: 14,
                                    center: new google.maps.LatLng(13.0368, 80.2676),
                                    mapTypeId: google.maps.MapTypeId.ROADMAP,
									mapTypeControl: false,
									scrollwheel: false,
									draggable: false,
									disableDoubleClickZoom: false
                                };
                                map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
                                marker = new google.maps.Marker({
                                    map: map,
                                    position: new google.maps.LatLng(13.0368, 80.2676)
                                });
                                infowindow = new google.maps.InfoWindow({
                                    content: "<p><b>Acestra Networks</b></p><p> 2/2 Venkatesa Agraharam Street, </p><p>Tamil Nadu, </p><p>Chennai, 600004</p>"
                                });
                                google.maps.event.addListener(marker, "click", function () {
                                    infowindow.open(map, marker);
                                });
                                infowindow.open(map, marker);
                            }
                            google.maps.event.addDomListener(window, 'load', init_map);