$(document).ready(function() {
	slideshow(4000);
});

/**
 * Slideshow function, call this one then website is ready
 * @param <Integer> mseconds miliseconds for the timer
 */
function slideshow(mseconds) {
        init();
        var timer = setInterval('alternate()',mseconds);
}

function init() {
    //Set all <li> to full transparent state
    $('#slideshow li').css({opacity: 0.0});

    //Show first <li>
    $('#slideshow li:first').css({opacity: 1.0});

    //Set the opacity of text container to 60%
    $('.slideshow-container').css({opacity: 0.6, bottom:0});

    $('.slideshow-caption h3').html($('.slideshow-current img').attr('title'));
    $('.slideshow-caption p').html($('.slideshow-current img').attr('alt'));
}

/**
 * Alternate images with the next and current variable
 */
function alternate() {
        
        var current;
        var next;

        //Get with the jQuery selector the current <li>
        if ($('.slideshow-current')) {
            current = $('.slideshow-current');
        } else {
            current = $('#slideshow li:first');
        }

        //Get the next <li> element
        if ((current.next().length) && (current.next().attr('class') != 'slideshow-container')) {
            next = current.next();
        } else {
            next = $('#slideshow li:first');
        }

        //Hide the current element and show the next
        next.css({opacity: 0.0}).addClass('slideshow-current').animate({opacity: 1.0}, 1000);
        current.animate({opacity: 0.0}, 1000).removeClass('slideshow-current');

        //Change the caption text;
        toggleText();
}

/**
 * Change the text in the caption.
 */
function toggleText() {
    $('.slideshow-container').slideToggle(100, function() {
        $('.slideshow-caption h3').html($('.slideshow-current img').attr('title'));
        $('.slideshow-caption p').html($('.slideshow-current img').attr('alt'));
    });
}