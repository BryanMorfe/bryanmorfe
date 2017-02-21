$(function() {
	
	/* Load information from json files. */
	
	// Blog info
	var blogObj;

	var blogRequest = new XMLHttpRequest();
	blogRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			var blogArray = JSON.parse(this.responseText);
			blogObj = blogArray[0];
			$("#blog-title").text(blogObj["post-title"]);
			
			var sectionObj = blogObj.sections[0];
			var firstSectionParagraphs = sectionObj["section-paragraphs"];
			for (var i = 0; i < firstSectionParagraphs.length; i++) {
				$("#blog-content").append("<p>" + firstSectionParagraphs[i] + "</p>");
			}
		}
	};
	blogRequest.open("GET", "json/blog.json", true);
	blogRequest.send();
	
	// Auto bio info
	var aboutMeObj;
	
	var aboutMeRequest = new XMLHttpRequest();
	aboutMeRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			aboutMeObj = JSON.parse(this.responseText);
			$("#about-me-name").text(aboutMeObj.firstName + aboutMeObj.lastName);
			$("#about-me-content").append("<p>" + aboutMeObj.shortDesc + "</p>");
		}	
	};
	
	aboutMeRequest.open("GET", "json/about-me.json", true);
	aboutMeRequest.send();
	
	// Projects
	var projectsObj;
	
	var projectsRequest = new XMLHttpRequest();
	projectsRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			projectsObj = JSON.parse(this.responseText);
			var projectsArray = projectsObj.projects;
			
			var lastProjectObj = projectsArray[0];
			var secondToLastProjectObj = projectsArray[1];
			var thirdToLastProjectObj = projectsArray[2];
			
			$("#last-project-title").text(lastProjectObj.title);
			$("#last-project-content").text(lastProjectObj.description);
			
			$("#second-to-last-project-title").text(secondToLastProjectObj.title);
			$("#second-to-last-project-content").text(secondToLastProjectObj.description);
			
			$("#third-to-last-project-title").text(thirdToLastProjectObj.title);
			$("#third-to-last-project-content").text(thirdToLastProjectObj.description);
		}	
	};
	
	projectsRequest.open("GET", "json/projects.json", true);
	projectsRequest.send();
	
	// Portfolio
	var portfolioObj;
	
	var portfolioRequest = new XMLHttpRequest();
	portfolioRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			portfolioObj = JSON.parse(this.responseText);
			var portfolioArray = portfolioObj.portfolio;
			
			var lastPortfolioObj = portfolioArray[0];
			var secondToLastPortfolioObj = portfolioArray[1];
			var thirdToLastPortfolioObj = portfolioArray[2];
			
			$("#last-portfolio-title").text(lastPortfolioObj.title);
			$("#last-portfolio-content").text(lastPortfolioObj.description);
			
			$("#second-to-last-portfolio-title").text(secondToLastPortfolioObj.title);
			$("#second-to-last-portfolio-content").text(secondToLastPortfolioObj.description);
			
			$("#third-to-last-portfolio-title").text(thirdToLastPortfolioObj.title);
			$("#third-to-last-portfolio-content").text(thirdToLastPortfolioObj.description);
		}	
	};
	
	portfolioRequest.open("GET", "json/portfolio.json", true);
	portfolioRequest.send();
	
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
