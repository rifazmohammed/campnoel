<?php require_once 'vars.php'; ?>
<?php
$alert = null;
if(isset($_POST['send'])=="sendform"){
	
// Validation Check

$continue = true;
$validation = "";

if(empty($_POST['name'])){
	$continue = false;
	$validation = "First Name, ";
}
if(empty($_POST['email'])){
	$continue = false;
	$validation .= "Email Address, ";
}
if(empty($_POST['phone'])){
	$continue = false;
	$validation .= "Phone Number";
}

// Validation OK, send email

if($continue===true){
		
	require 'email-utils/phpmailer/PHPMailerAutoload.php';
		
	// Send Email to Guest

	$hotel_addr = $client_address_line_1.', '.$client_address_line_2.' - '.$client_address_pin;
	
	$message = file_get_contents('email-utils/template-guest.php');
	$message = str_replace('[name]', $_POST['name'], $message);
	$message = str_replace('[email]', $_POST['email'], $message);
	$message = str_replace('[phone]', $_POST['phone'], $message);
	$message = str_replace('[subject]', $_POST['subject'], $message);
	$message = str_replace('[comments]', $_POST['comments'], $message);
	$message = str_replace('[hotelname]', $hotel_name, $message);
	$message = str_replace('[hoteladdr]', $hotel_addr, $message);
	$message = str_replace('[hotelphone]', $hotel_phone, $message);
	
	$mail = new PHPMailer;
	$mail->setFrom($client_contact_email_recipient, $hotel_name);
	$mail->addAddress($_POST['email'], $_POST['name']);
	$mail->Subject = 'Thank You for Contacting '.$hotel_name;
	$mail->MsgHTML($message);
	$mail->IsHTML(true);
	$mail->send();
	
	// Send Email to Hotel
	
	$message = file_get_contents('email-utils/template-hotel.php');
	$message = str_replace('[name]', $_POST['name'], $message);
	$message = str_replace('[email]', $_POST['email'], $message);
	$message = str_replace('[phone]', $_POST['phone'], $message);
	$message = str_replace('[subject]', $_POST['subject'], $message);
	$message = str_replace('[comments]', $_POST['comments'], $message);
	
	$mail = new PHPMailer;
	$mail->setFrom($_POST['email'], $_POST['name']);
	$mail->addAddress($client_contact_email_recipient, $hotel_name);
	$mail->Subject = $_POST['name'].' Contacted You From Website';
	$mail->MsgHTML($message);
	if (!$mail->send()) {
		$alert = "<div><i class='fa fa-exclamation-circle'></i> <strong style='color:#ed8323';>There was an error, please call us to make a booking.</strong></div>";
	}
	else {
		header('Location: thank-you.php');
		//$alert = "<div style='color:#ed8323';><i class='fa fa-check-circle'></i> <strong >Thank you for contacting us, we will get back to you as soon as possible.</strong> To avoid missing out, please give us a call so that we may assist you sooner.</div>";
	}
}
else {
	$alert = "<div style='color:#ed8323';><i class='fa fa-exclamation-circle'></i> Please fill out the following fields: <strong>".$validation."</strong></div>";
}
}
?>
<!DOCTYPE HTML>
<html>
<head>
	<title>Contact Us – Welcome to Camp Noel, Munnar Hotels & Resorts </title>
<meta name="Description" content="We are the best budget hotel in Munnar, luxury resorts for any query & required information please contact @ +91-8590507050."/>
<meta name="Keywords" content="budget resorts in Munnar , best budget hotel in Munnar, luxury resorts in Munnar, Camp Noel Munnar contact, Camp Noel Munnar contact details, Camp Noel Munnar  address, Camp Noel Munnar phone number, Camp Noel Munnar tariff"/>
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
	<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
	<meta id="myViewport" name="viewport" content="width=device-width, initial-scale=1.0">
	<script type="text/javascript">
			if (screen.width <= 800) {
				var mvp = document.getElementById("myViewport");
				mvp.setAttribute("content","width=1202");
			}
		</script>
	<!-- GOOGLE FONTS -->
	<link href='http://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600' rel='stylesheet' type='text/css'>
	<!-- /GOOGLE FONTS -->
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/font-awesome.css">
	<link rel="stylesheet" href="css/icomoon.css">
	<link rel="stylesheet" href="css/styles.css">
	<link rel="stylesheet" href="css/mystyles.css">
	<link rel="stylesheet" href="css/flatWeatherPlugin.css">
</head>

<body>
<?php echo $tag_manager_code; ?>
<?php echo $floating_buttons; ?>

<div class="global-wrap">
	
	<?php include 'includes/header.php'; ?>

	<div class="container">
		<ul class="breadcrumb">
			<li><a href="index.php">Home</a>
			</li>
			<li class="active">Contact Us</li>
		</ul>
		<h1 class="page-title text-center">Contact Us</h1>

		<div class="row">
			<div class="col-md-8">
				<p>Feel free to contact us. Whenever you have any inquiry, just ask us. We are happy to assist you.</p>
				<p>If you are our existing customer, we love to hear your experience with us.</p>
				 <?=$alert;?>
				<form class="mt30" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
					<div class="row">
						<div class="col-md-6">
							<div class="form-group form-group-icon-left">
								<i class="fa fa-user input-icon input-icon-show text-color"></i>
								<label class="text-color">Name</label>
								<input name="name" class="form-control" placeholder="Write Your Full Name" required="required" type="text" value="<?php echo isset($_POST['name'])?$_POST['name']:""; ?>">
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group form-group-icon-left">
								<i class="fa fa-pencil input-icon input-icon-show text-color"></i>
								<label class="text-color">Subject</label>
								<input name="subject"class="form-control" placeholder="Your Contact Purpose" required="required" type="text" value="<?php echo isset($_POST['subject'])?$_POST['subject']:""; ?>" >
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group form-group-icon-left">
								<i class="fa fa-envelope input-icon input-icon-show text-color"></i>
								<label class="text-color">Email</label>
								<input name="email" class="form-control" placeholder="Enter Your Email Address" required="required" type="text" value="<?php echo isset($_POST['email'])?$_POST['email']:""; ?>">
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group form-group-icon-left">
								<i class="fa fa-phone input-icon input-icon-show text-color"></i>
								<label class="text-color">Phone</label>
								<input name="phone" class="form-control" placeholder="Enter Your Mobile Number" required="required" type="text" value="<?php echo isset($_POST['phone'])?$_POST['phone']:""; ?>" >
							</div>
						</div>
					</div>
					<div class="form-group">
						<label class="text-color">Message</label>
						<textarea name="comments" class="form-control" placeholder="Write Your Message"><?php echo isset($_POST['comments'])?$_POST['comments']:""; ?></textarea>
					</div>
					 <button type="submit" name="send" value="sendform" class="btn  btn-lg btn-primary" style="margin-bottom:35px;">Send message</button>
				</form>
			</div>
			<div class="col-md-4">
				<aside class="sidebar-right">
					<ul class="address-list list">
						<li>
							<h5><i class="fa fa-envelope-o"></i> Email</h5>
							    <a href="mailto:reservation@spcampnoel.com">reservation@spcampnoel.com</a><br>
							    <a href="mailto:<?php echo $client_contact_email_recipient;?>"><?php echo $client_contact_email_recipient;?></a><br>
							
						</li>
						<li>
							<h5><i class="fa fa-phone"></i> Phone Number</h5>
							<a href="tel:+917902803333">+91-7902803333</a><br>
							<a href="tel:+917510943333">+91-7510943333</a><br>
							<a href="tel:<?php echo $hotel_phone2;?>"><?php echo $hotel_phone2;?></a>  (Reservation)<br>
						</li>
						<li>
							<h5><i class="fa fa-map-marker"></i> Address</h5>
							<address><?php echo $hotel_name; ?><br />
							<?php echo $client_address_line_1;?>
							<br />
							<?php echo $client_address_line_2." ".$client_address_pin;?>
							<br />
							India
							<br />
							</address>
						</li>
					</ul>
				</aside>
			</div>
		</div>
	</div>
	<div class="gap gap-small"></div>
	<!-- <div id="map-canvas" style="height:400px;"></div>
 -->
	<?php include 'includes/footer.php'; ?>

</div>


<script src="js/jquery.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/slimmenu.js"></script>
<script src="js/bootstrap-datepicker.js"></script>
<script src="js/bootstrap-timepicker.js"></script>
<script src="js/nicescroll.js"></script>
<script src="js/dropit.js"></script>
<script src="js/ionrangeslider.js"></script>
<script src="js/icheck.js"></script>
<script src="js/fotorama.js"></script>
<script src="js/gmap3.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js"></script>
<script src="js/typeahead.js"></script>
<script src="js/card-payment.js"></script>
<script src="js/magnific.js"></script>
<script src="js/owl-carousel.js"></script>
<script src="js/fitvids.js"></script>
<script src="js/tweet.js"></script>
<script src="js/countdown.js"></script>
<script src="js/gridrotator.js"></script>
<script src="js/sticky.js"></script>
<script src="js/flatWeatherPlugin.min.js"></script>
<script src="js/modernizr.js"></script>
<script src="js/mediaelement-and-player.min.js"></script>
<script src="js/custom.js"></script>

</div>
</body>

</html>