jQuery(function($) {

    
    $('.navbar-toggle').click(function(){
        $(this).toggleClass('open');
    });


	//nice back to top button!
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(500);
        } else {
            $('.go-top').fadeOut(300);
        }
    });

    // Animate scroll to top :D
	$('.go-top').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 300);
	});

    var scrollTop;

    //Nice scrollings, yay!

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });


    //Ajax contact
    var form = $('.contact-form');
    form.submit(function() {
        $this = $(this);
        $.post($(this).attr('action'), function(data) {
            $this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
        }, 'json');
        return false;
    });

    //scrollspy
    $('[data-spy="scroll"]').each(function() {
	    var $spy = $(this).scrollspy('refresh');
    })

    //PrettyPhoto
    $("a.preview").prettyPhoto({
        social_tools: false
    });

    //Isotope
    $(window).load(function() {
        $portfolio = $('.portfolio-items');
        $portfolio.isotope({
            itemSelector: 'li',
            layoutMode: 'fitRows'
        });
        $portfolio_selectors = $('.portfolio-filter >li>a');
        $portfolio_selectors.on('click', function() {
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector
            });
            return false;
        });
    });
});