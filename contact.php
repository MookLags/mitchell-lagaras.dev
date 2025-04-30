<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    echo "Name: $name <br>";
    echo "Email: $email <br>";
    echo "Message: $message <br>";

    $to = "mookielagaras@gmail.com";
    $subject = "New message from contact form";
    $message_body = "Name: $name\nEmail: $email\nMessage: $message";

    $headers = "From: $email";

    if (mail($to, $subject, $message_body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "There was an error sending the message.";
    }
}
?>

