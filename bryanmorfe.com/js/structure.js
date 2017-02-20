$(function() {
	
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
	
	/* Load information from json files. */
	
	var blogObj;
	
	var xmlHTTPRequest = new XMLHttpRequest();
	alert("Executed.");
	xmlHTTPRequest.onreadystatechange(function() {
		
		if (this.readyState == 4 && this.status == 200) {
			var blogArray = JSON.parse(this.responseText);
			blogObj = blogArray[0];
			$("#blog-title").text(blogObj["post-title"]);
			$("#blog-content").text(blogObj["post-date"]);
			alert("Got in.");
		}
	});
	xmlHTTPRequest.open("GET", "../json/blog.json");
	xmlHTTPRequest.send();
});
