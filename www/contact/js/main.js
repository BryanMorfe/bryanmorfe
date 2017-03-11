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