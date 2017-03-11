<?php

function format_message($message, $name, $email) {
	$message = "From: " . $name . "\nEmail: " . $email . "\n\n" . $message;
	return $message;
}

function format_subject($subject, $purpose) {
	$subject = $purpose . ": " . $subject;
	return $subject;
}

function redirect_to($url) {
	ob_start();
	header('Location: ' . $url);
	ob_end_flush();
	exit();
}
