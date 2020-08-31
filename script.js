$(document).ready(function () {
        // header responsive
      $("#toggle").click(function() {
            $(this).toggleClass('on');
            $("#resize").toggleClass("active");
      });

      $("#resize ul li a").click(function() {
            $(this).toggleClass('on');
            $("#resize").toggleClass("active");
      });

      $(".close-btn").click(function() {
            $(this).toggleClass('on');
            $("#resize").toggleClass("active");
      });

      $(".form-control").hover(function(){
			     $(this).toggleClass("newhover");
		  });
          // Button action
      $(".annbtn").click(function(){
		      $("#thanks").text("Thanks" + " " + $(".name").val()+ " " + "we will contact you on"+ " " + $(".email").val());
          });
          
          //navbar color
      $(window).scroll(function() { 
            if ($(document).scrollTop() > 200) { 
              $(".navbar-fixed-top").css("background-color", "#1c275fc5"); 
            } else {
              $(".navbar-fixed-top").css("background-color", "transparent"); 
            }
      });

         // Scroll Animation
      $(".parallax-animation").css('opacity', 0);

      $(".parallax-animation").waypoint(function(){
          $(".parallax-animation").addClass('animated fadeInUp');
      }, { offset: '50%' });


      $(".scroll-animation").css('opacity', 0);

      $(".scroll-animation").waypoint(function(){
           $(".scroll-animation").addClass('animated fadeIn');
      }, { offset: '50%' });

      $(".about-right").css('opacity', 1);

      $(".about-right").waypoint(function(){
           $(".about-right").addClass('animated flipInX');
      }, { offset: '50%' });

      $(".about-left").css('opacity', 1);

      $(".about-left").waypoint(function(){
           $(".about-left").addClass('animated slideInLeft');
      }, { offset: '50%' });


});
