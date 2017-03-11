/* About Me JS */

$(function() {
	
	// Load about me content
	var aboutMeRequest = new XMLHttpRequest();
	
	aboutMeRequest.onreadystatechange = function() {
		
		if (this.readyState == 4 && this.status == 200) {
			
			var aboutMeObj = JSON.parse(this.responseText);
			var sections = aboutMeObj.sections;
			
			for (var i = 0; i < sections.length; i++) {
				var title = "<h3>" + sections[i].title + "</h3>";
				$("#about-me").append(title);
				
				var paragraphs = sections[i].paragraphs;
				
				for (var j = 0; j < paragraphs.length; j++) {
					$("#about-me").append("<p>" + paragraphs[j] + "</p>");
				}
			}
		}
	};
	
	aboutMeRequest.open("GET", "/json/about-me.json", true);
	aboutMeRequest.send();
	
});