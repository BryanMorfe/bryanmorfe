$(function() {
	
	/* Navigation Bar */
	var floatingNavBarHTML = $("header").html();
	$("header").prepend(floatingNavBarHTML);
	$("header").children().first().addClass("navbar-fixed");
	$(".navbar-fixed").hide();
	
	$(window).scroll(function() {
		
		if ($(this).scrollTop() > 280) {
			$(".navbar-fixed").show(300);
		} else {
			$(".navbar-fixed").hide(300);
		}
		
	});
	
	/* Setup cards */
	
    $(".expandable-card .card-info").hide();
    $(".expandable-card").css({ 
        "width": "150px", 
        "height": "150px", 
        "border-radius": "75px",
        "padding": "0",
    });

    $(".expandable-card .profile-img-md").mouseenter(function() {
        $(".expandable-card").animate(
        {
            width: '400px',
            height: '250px',
            borderRadius: '5px',
            padding: '1%',
        }, 
        {
            duration: 300,
            complete: function() {
                $(".expandable-card .card-info").show();
            }
        });
    });

    $(".expandable-card").mouseleave(function() {
        $(".expandable-card").animate(
        {
            width: '150px',
            height: '150px',
            borderRadius: '75px',
            padding: '0',
        },
        {
             duration: 300,
             complete: function() {
                 $(".expandable-card .card-info").hide();
             }
        });
    });
	
});
