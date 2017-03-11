<?php

function send_mail($subject, $message, $name, $email) {
	
	$to = "bryanmorfe@gmail.com";
	
	$header = "From: webmaster@bryanmorfe.com";
	
	// Send to contact
	$mail = mail($to, $subject, $message, $header);
	
	if ($mail) {
		// Send to sender
		$to = $email;
		$sbj = "I have received your message!";
		$msg = "Hi " . $name . ", \n\nThank you for contacting me. I will try to get back to you within 72 hours! If I have not within that time, feel free to contact me again!\n\nSincerely,\nBryan";
		$header = "From: no-reply@bryanmorfe.com<From: no-reply@bryanmorfe.com>";
	
		mail($to, $sbj, $msg, $header);
	}
	
	return $mail;
}
