<?php


if(strcasecmp('formulario-ajax', $_POST['metodo']) == 0){

	$html = '<strong>Nome: </strong>' .$_POST['nome'];
	$html .= "<br />";
	$html .= '<strong>Telefone: </strong> '.$_POST['telefone'];
	$html .= "<br />";
	$html .= '<strong>Email: </strong> '.$_POST['email'];
	$html .= "<br />";
	$html .= '<strong>Cidade: </strong> '.$_POST['cidade'];
	$html .= "<br />";
	$html .= '<strong>Assunto: </strong> '.$_POST['assunto'];
	$html .= "<br />";
	$html .= '<strong>Mensagem: </strong> '.$_POST['mensagem'];
	$html .= "<br />";

	echo $html;

	$email = $_POST['email'];

	$email_remetente = "atendimento@voogseguros.com.br"; // deve ser uma conta de email do seu dominio
	//====================================================


	require 'PHPMailer/PHPMailerAutoload.php';

	$mail = new PHPMailer();
// Passing `true` enables exceptions
	try {
		//Server settings
		$mail->SMTPDebug = 2;                                 // Enable verbose debug output
		$mail->isSMTP();                                      // Set mailer to use SMTP
		$mail->charSet = "UTF-8";
		$mail->Host = 'smtp.voogseguros.com.br';  // Specify main and backup SMTP servers
		$mail->SMTPAuth = true;                               // Enable SMTP authentication
		$mail->Username = 'site@voogseguros.com.br';
		$mail->Sender = 'site@voogseguros.com.br'; // amazonasparkresidencial@gmail.com
		$mail->Password = 'Web@!2018';                           // SMTP passwordwtek*2018
		$mail->SMTPSecure = false; // Define se é utilizado SSL/TLS - Mantenha o valor "false"
		$mail->SMTPAutoTLS = false;                         // Enable TLS encryption, `ssl` also accepted
		$mail->Port = 587;                                    // TCP port to connect to

		//Recipients - atendimento@voogseguros.com.br
		$mail->setFrom('atendimento@voogseguros.com.br', 'Site Voog');
		$mail->addAddress('atendimento@voogseguros.com.br', 'Site Voog');// Optional name

		//Content
		$mail->isHTML(true);                                  // Set email format to HTML
		$mail->Subject = 'Contato Site Voog';
		$mail->Body    = "$html \n";
		if (isset($_FILES['curriculo']) &&
		    $_FILES['curriculo']['error'] == UPLOAD_ERR_OK) {
			$mail->AddAttachment($_FILES['curriculo']['tmp_name'],
				$_FILES['curriculo']['name']);
		}
		$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

		$mail->send();
		echo 'Message has been sent';
	} catch (Exception $e) {
		echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
	}

}
?>