/* Current Page Scripting */

$(function() {
	
	/* Load information from json files. */
	
	// Blog info
	var blogRequest = new XMLHttpRequest();
	blogRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var blogArray = JSON.parse(this.responseText);
			var blogObj = blogArray[0];
			$("#blog .card-header-title").text(blogObj["post-title"]);
			$("#blog .card-header").css({"background": "url(" + blogObj["featured-img"] + ") no-repeat", "background-size": "cover", "background-position": "50% 50%"});
			var postInfoHTML = "<p>Post by <b>" + blogObj["post-author"] + "</b> on " + blogObj["post-date"] + "</p>";
			$("#blog .post-info").html(postInfoHTML);
			var sectionObj = blogObj.sections[0];
			var firstSectionTitle = sectionObj["section-title"];
			
			$("#blog .card-title").text(firstSectionTitle);
			var firstSectionParagraphs = sectionObj["section-paragraphs"];
			for (var i = 0; i < firstSectionParagraphs.length; i++) {
				$("#blog .card-content").append("<p>" + firstSectionParagraphs[i] + "</p>");
			}
		}
	};
	
	blogRequest.open("GET", "/json/blog.json", true);
	blogRequest.send();
	
	// Auto bio info	
	var aboutMeRequest = new XMLHttpRequest();
	aboutMeRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			var aboutMeObj = JSON.parse(this.responseText);
			$("#about-me-name").text(aboutMeObj.firstName + aboutMeObj.lastName);
			$("#about-me-content").append("<p>" + aboutMeObj.shortDesc + "</p>");
		}	
	};
	
	aboutMeRequest.open("GET", "/json/about-me.json", true);
	aboutMeRequest.send();
	
	// Portfolio	
	var portfolioRequest = new XMLHttpRequest();
	portfolioRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			var portfolioObj = JSON.parse(this.responseText);
			var portfolioArray = portfolioObj.portfolio;
			
			var currentPortfolio = $("#portfolio").children().not("h2");
			
			for (var i = 0; i < portfolioArray.length; i++) {
				currentPortfolio.children(".card-title").text(portfolioArray[i].title);
				currentPortfolio.children(".card-content").text(portfolioArray[i].description);
				currentPortfolio = currentPortfolio.next();
			}
		}	
	};
	
	portfolioRequest.open("GET", "/json/portfolio.json", true);
	portfolioRequest.send();
	
	// Projects	
	var projectsRequest = new XMLHttpRequest();
	projectsRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			var projectsObj = JSON.parse(this.responseText);
			var projectsArray = projectsObj.projects;
			
			var currentProject = $("#projects").children().not("h2");
			
			for (var i = 0; i < projectsArray.length; i++) {
				currentProject.children(".card-title").text(projectsArray[i].title);
				currentProject.children(".card-content").text(projectsArray[i].description);
				currentProject = currentProject.next();
			}
		}	
	};
	
	projectsRequest.open("GET", "/json/projects.json", true);
	projectsRequest.send();
	
});