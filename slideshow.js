$(document).ready(function() {
	slideshow();	
});

function slideshow() {
	$("ul.slideshow").append('<li id="slideshow-caption" class="caption"><div class="slideshow-caption-container"><h3></h3><p></p></div></li>');
	$("ul.slideshow li").css({opacity: 0.0});
	$("ul.slideshow li:first").css({opacity: 1.0});	
}
