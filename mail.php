<?php

    $to = "exstroi@gmail.com";
    $name = clear_data($_POST["name"]);
    $phone = clear_data($_POST["phone"]);
    $adress = clear_data($_POST["adress"]);
    $subject = "Заявка з сайту";


    $headers .= "Надіслати відповідь: $email.\n";

    $massage = "Ім'я користувача: $name.\n".
                "Номер телефону: $phone.\n".
                "Адреса / регіон: $adress.\n";


    function clear_data($value){
      $value = trim($value);
      $value = stripslashes($value);
      $value = htmlspecialchars($value);
      return $value;
    }

    mail($to, $subject, $massage, $headers);

    header('location: thanks.html');
?>
