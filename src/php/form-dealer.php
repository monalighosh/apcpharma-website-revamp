<?php
  if(isset($_POST["name"]) && isset($_POST["phone"]) && isset($_POST["email"])) {
    $name = $_POST["name"];
    $tel = $_POST["phone"];
    $email = $_POST["email"];
    $company = $_POST["company"];
    $interests = $_POST["interests"];
    $capacity = $_POST["capacity"];
    $message = $_POST["message"];

    $to = "contact@apcpharma.com";
    $from = $email;
    $subject = "Dealer enquiry from website";
    $txt = "<b>Name:</b> ".$name."<br/><b>Phone:</b> ".$tel."<br/><b>Email:</b> ".$email."<br/><b>Company Name:</b> ".$company."<br/><b>Areas of interest:</b> ".$interests."<br/><b>Investing Capacity:</b> ".$capacity."<br/><b>Message:</b> ".$message;
    $headers = "From: $from\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";

    if(mail($to, $subject, $txt, $headers)) {
      echo "success";
    } else {
      echo "Failed! Try again!";
    }
  } 
?>