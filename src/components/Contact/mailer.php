<?php

  // trim() function strips any white space from beginning and end of the string
  $email = filter_var(trim($_POST["form_email"]), FILTER_SANITIZE_EMAIL);
  //  strip_tags() function strips all HTML and PHP tags from a variable.
  $message = strip_tags($_POST["form_msg"]);

  // Check that data was sent to the mailer.
  if ( empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Set a 400 (bad request) response code and exit.
    http_response_code(400);
    echo "Oops! There was a problem with your submission. Please complete the form and try again.";
    exit;
  }

  // Set the recipient email address.
  $recipient = "jamkelley22@gmail.com";
  // Set the email subject.
  $subject = "Message to magdalundberg.se from: $email";

  // Build the email content.
  $body .= "Email: $email\n\n";
  $body .= "Message: \n$message\n";

  // success
  $success = mail($recipient, $subject, $body, "From:" . $email);

  // Send the email.
  if ($success) {
    // Set a 200 (okay) response code.
    http_response_code(200);
    echo "Thank You! Your message has been sent.";
  } else {
    // Set a 500 (internal server error) response code.
    http_response_code(500);
    echo "Oops! Something went wrong and we couldn’t send your message.";
  }

?>
