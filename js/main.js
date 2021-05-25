$(function () {

	$("a.btn").click(function() {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination}, 800);
		return false;
	});
	  
	$('.btn-routes').click(function (e) {
	  	e.preventDefault();
	$('.destinations-more').toggleClass('destinations-visible');
	  });
	  
	

	$('a.call-btn').click( function(event){
	    event.preventDefault();
	$('#myOverlay').fadeIn(297, function(){
	$('#myModal').css('display', 'block').animate({opacity: 1}, 198);
	    });
	  	});

	$('#myModal__close, #myOverlay').click( function(){
	$('#myModal').animate({opacity: 0}, 198, function(){
	        $(this).css('display', 'none');
	        $('#myOverlay').fadeOut(297);
    });
  });

	$(document).ready(function(){
	animBg();
	});
	function animBg() {
	$('.world img').animate({
	   'width': '200%',
	  'left': '-50%',
	  'top': '-50%'
	  }, 3000)
   	.animate({
            'width': '100%',
            'left': '0',
            'top': '0'
        }, 3000, animBg);
}



});    






  


