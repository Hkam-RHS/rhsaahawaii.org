(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


    $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
    
    $(document).ready(function(){
      $('.parallax').parallax();
    });
    //Img//
      $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

//carousel//
    $(document).ready(function(){
      $('.carousel').carousel();
    });
        
 $('.carousel.carousel-slider').carousel({full_width: true});
autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 3500);
} 

  $(document).ready(function() {
    $('select').material_select();
  });
            