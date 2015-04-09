// JavaScript Document

//SMOOTH-SCROLL
	$(function() {
	  $('a[href*=#]:not([href=#myCarousel])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

//HOVER DROP DOWN
    $(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
            });
    });
    

//sticke
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

//login

function logn(){
	document.getElementById("bLogin").className += "hidden";
	aor();
	document.getElementById("aOr").className += "hidden";
	document.getElementById("sgnUp").className += "hidden";
	document.getElementById("aLogin").className =
   	document.getElementById("aLogin").className.replace
      ( /(?:^|\s)hidden(?!\S)/g , '' );
};

function aor(){
	document.getElementById("aOr").className =
   	document.getElementById("aOr").className.replace
      ( /(?:^|\s)hidden-sm(?!\S)/g , '' );
	  document.getElementById("aOr").className =
   	document.getElementById("aOr").className.replace
      ( /(?:^|\s)hidden-xs(?!\S)/g , '' );

};