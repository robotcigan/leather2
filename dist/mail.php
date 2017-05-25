<?
    /* получатели */

$to = "martin_47@mail.ru";

/* тема/subject */
$subject = "Заявка с сайта автокожа";
if(!empty($_POST['phone'])){
    $phone = "Перезвоните мне пожалуйста по номеру: ".$_POST['phone']; 
}
if(!empty($_POST['name'])){
    $name = "Здравствуйте, меня зовут: ".$_POST['name']; 
}
if(!empty($_POST['email'])){
    $email = "Мой email: ".$_POST['email']; 
}
if(!empty($_POST['email'])){
    $mess = "Сообщение: ".$_POST['mess']; 
}
/* сообщение */
$message = '
<html>
<head>
 <title>Заявка с сайта автокожа</title>
</head>
<body>
<p>Заявка с сайта автокожа</p>
<table>
 <tr>
<td>'.$name.'</td>
 </tr>
 <tr>
<td>'.$phone.'</td>
 </tr>
 <tr>
<td>'.$email.'</td>
 </tr>
 <tr>
<td>'.$mess.'</td>
 </tr>

</table>
</body>
</html>
';

/* Для отправки HTML-почты вы можете установить шапку Content-type. */
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

/* дополнительные шапки */
$headers .= "MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: avtokozha.ru <avtokozha.ru>\r\n";


/* и теперь отправим из */
mail($to, $subject, $message, $headers);
?>