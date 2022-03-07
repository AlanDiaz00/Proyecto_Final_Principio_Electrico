<?php
    $myemail = 'alan.diaz18@tectijuana.edu.mx';
    $name = $_POST['nombre'];
    $email = $_POST['email'];
    $message = $_POST['mensaje'];
    
    $to = $myemail;
    $email_subject = "Nuevo Mensaje: $subject";
    $email_body = "Has recibido un nuevo mensaje. \n Nombre: $name \n Correo: $email \n Mensaje: $message";
    $header = "Form: $email";

    mail($to, $email_subject, $email_body, $header);
    echo "El mensaje se ha enviado correctamente";
?>