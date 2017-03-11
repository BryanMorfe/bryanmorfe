function clean(string) {
	
	var newString = string;
	
	/*** First Layer: Clean Up ***/
	
	// Eliminate leading spaces
	while (newString[0] == ' ' || newString[0] == '\t' || newString[0] == '\n') {
		newString = newString.substr(1);
	}
	
	// Eliminate trailing spaces
	while (newString[newString.length - 1] == ' ' || newString[newString.length - 1] == '\t' || newString[newString.length - 1] == '\n') {
		newString = newString.substr(0, newString.length - 1);
	}
	
	// Eliminate consecutive spaces
	for (var i = 1; i < newString.length; ++i) {
		while ((newString[i - 1] == ' ' || newString[i - 1] == '\t' || newString[i - 1] == '\n') && (newString[i] == ' ' || newString[i] == '\t' || newString[i] == '\n')) {
			newString = newString.slice(0, i) + newString.slice(i + 1);
		}
	}
	
	return newString;
}

function isEmpty(string) {
	
	if (string == null) {
		return true;
	}
	
	for (var i = 0; i < string.length; i++) {
		if (string[i] != '' && string[i] != ' ' && string[i] != '\t' && string[i] != '\n') {
			return false;
		}
	}
	
	return true;
}

function isStringValid(string) {
	
	/*** Second Layer: Empty validation ***/
	
	return !isEmpty(string);
	
}

function isNameValid(string) {
	
	/*** Third Layer: Specific Validation ***/
	
	var regEx = /[^a-zA-Z- ]/;
	
	return !regEx.test(string);
}

function isEmailValid(string) {
	
	/*** Third Layer: Specific Validation ***/
	
	var regEx = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/;
	
	return regEx.test(string);
}

function emailResponse(success) {
	
	var successGraphics;
	var heading;
	var content;
	
	if (success) {
		successGraphics = "<svg width=\"200\" height=\"200\">";
		successGraphics += "<circle cx=\"100\" cy=\"100\" r=\"50\" stroke=\"green\" stroke-width=\"10\" fill=\"none\">";
		successGraphics += "</circle>";
		successGraphics += "<polyline points=\"125 80 90 117 77 95\" stroke=\"green\" stroke-width=\"10\" fill=\"none\" stroke-linecap=\"round\"stroke-linejoin=\"miter\"></polyline>";
		successGraphics += "</svg>";
		heading = "<h3>Congratulations!</h3>";
		content = "<p>You have successfully contacted me!</p>";
	} else {
		successGraphics = "<svg width=\"200\" height=\"200\">";
		successGraphics += "<circle cx=\"100\" cy=\"100\" r=\"50\" stroke=\"red\" stroke-width=\"10\" fill=\"none\">";
		successGraphics += "</circle>";
		successGraphics += "<line x1=\"75\" y1=\"75\" x2=\"125\" y2=\"125\" stroke=\"red\" stroke-width=\"8\"></line>";
		successGraphics += "<line x1=\"125\" y1=\"75\" x2=\"75\" y2=\"125\" stroke=\"red\" stroke-width=\"8\"></line>";
		successGraphics += "</svg>";
		heading = "<h3>Oops</h3>";
		content = "<p>There has been a problem contacting me! :(</p>";
	}
	
	$(".blue-tint .main-content").append(successGraphics);
	$(".blue-tint .main-content").append(heading);
	$(".blue-tint .main-content").append(content);
}

$(function() {
		
	/*** Instant Form Validation ***/
	var name = $("#name");
	var email = $("#email");
	var purpose = $("#purpose");
	var subject = $("#subject");
	var message = $("#message");
	
	$("#name").on("focus change", function() {
		
		$(this).val(clean($(this).val()));
		var value = $(this).val();
		if (isStringValid(value) && isNameValid(value)) {
			$(this).css("box-shadow", "0 0 8px green");
			name = null;
		} else {
			$(this).css("box-shadow", "0 0 8px red");
			name = $(this);
		}
		
	});
	
	$("#email").on("focus change", function() {
		
		$(this).val(clean($(this).val()));
		var value = $(this).val();
		if (isStringValid(value) && isEmailValid(value)) {
			$(this).css("box-shadow", "0 0 8px green");
			email = null;
		} else {
			$(this).css("box-shadow", "0 0 8px red");
			email = $(this);
		}
		
	});
	
	$("#purpose").on("change focus", function() {
		
		$(this).val(clean($(this).val()));
		var value = $(this).val();
		if (isStringValid(value)) {
			$(this).css("box-shadow", "0 0 8px green");
			purpose = null;
		} else {
			$(this).css("box-shadow", "0 0 8px red");
			purpose = $(this);
		}
		
	});
	
	$("#subject").on("change focus", function() {
		
		$(this).val(clean($(this).val()));
		var value = $(this).val();
		if (isStringValid(value)) {
			$(this).css("box-shadow", "0 0 8px green");
			subject = null;
		} else {
			$(this).css("box-shadow", "0 0 8px red");
			subject = $(this);
		}
		
	});
	
	$("#message").on("change focus", function() {
		
		$(this).val(clean($(this).val()));
		var value = $(this).val();
		if (isStringValid(value)) {
			$(this).css("box-shadow", "0 0 8px green");
			message = null;
		} else {
			$(this).css("box-shadow", "0 0 8px red");
			message = $(this);
		}
		
	});
	
	$("#send").click(function() {
		
		if (name != null || email != null || purpose != null || subject != null || message != null) {
			if (name != null) { name.css("box-shadow", "0 0 8px red"); }
			if (email != null) { email.css("box-shadow", "0 0 8px red"); }
			if (purpose != null) { purpose.css("box-shadow", "0 0 8px red"); }
			if (subject != null) { subject.css("box-shadow", "0 0 8px red"); }
			if (message != null) { message.css("box-shadow", "0 0 8px red"); }
			alert("Please correct the fields highlighted in red.");
			return false;
		}
		
	});
	
});