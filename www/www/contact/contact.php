<?php

include("../../php_inc/functions.php");
include("../../php_inc/contact.php");

// Check Request Method and Retrieve Variables

if ($_SERVER['REQUEST_METHOD'] == "POST") {
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$purpose = $_POST['purpose'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	
	$subject = format_subject($subject, $purpose);
	$message = format_message($message, $name, $email);
	
	$mail = send_mail($subject, $message, $name, $email);
	$url = "index.php?success=" . $mail;
	echo $url;
	redirect_to($url);

}
