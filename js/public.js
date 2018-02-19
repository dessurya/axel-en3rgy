// for navbar
    var win = $(window);

    // for dekstop
    if(win.width() > 960){
    var initNavbar = 25;
        win.scroll(function () {
            if (win.scrollTop() >= initNavbar) {
                $( "#navbar" ).addClass( "in-scroll" );
            }
            else if (win.scrollTop() <= initNavbar) {
                $( "#navbar" ).removeClass( "in-scroll" );
            }
        });
    }
    // end for dekstop

    // for mobile
    if(win.width() < 960){
    	$('#navbar #burger-icon').click(function(){
    		$('#navbar').toggleClass("active");;
    	});
    }
    // for mobile
// for navbar

// for click slide to
	var scrolling = 0;
	if(win.width() > 960){
		scrolling = 75;
	}
	else if(win.width() < 960){
		scrolling = 150;
	}

    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - scrolling
                        }, 1500);
                    return false;
                }
            }
        });
    });
// for click slide to