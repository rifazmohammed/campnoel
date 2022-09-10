<?php require_once 'vars-mobile.php'; ?>
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
		
	require 'email/phpmailer/PHPMailerAutoload.php';
	
	// Hotel Details
	
	$hotel_name = "Camp Noel Hotels & Resorts";
	$hotel_email = "manager@campnoel.com";
	
	// Send Email to Guest
	
	$message = file_get_contents('email/template-guest.php');
	$message = str_replace('[name]', $_POST['name'], $message);
	$message = str_replace('[email]', $_POST['email'], $message);
	$message = str_replace('[phone]', $_POST['phone'], $message);
	$message = str_replace('[contact-arrival]', $_POST['contact-arrival'], $message);
	$message = str_replace('[contact-departure]', $_POST['contact-departure'], $message);
	$message = str_replace('[no-night]', $_POST['no-night'], $message);
	$message = str_replace('[contact-rooms]', $_POST['contact-rooms'], $message);
	$message = str_replace('[contact-adults]', $_POST['contact-adults'], $message);
	$message = str_replace('[contact-children]', $_POST['contact-children'], $message);
	$message = str_replace('[contact-message]', $_POST['contact-message'], $message);
	
	$mail = new PHPMailer;
	$mail->setFrom($hotel_email, $hotel_name);
	$mail->addAddress($_POST['email'], $_POST['name']);
	$mail->Subject = $hotel_name.' Booking Request';
	$mail->MsgHTML($message);
	$mail->IsHTML(true);
	$mail->send();
	
	// Send Email to Hotel
	
	$message = file_get_contents('email/template-hotel.php');
	$message = str_replace('[name]', $_POST['name'], $message);
	$message = str_replace('[email]', $_POST['email'], $message);
	$message = str_replace('[phone]', $_POST['phone'], $message);
	$message = str_replace('[contact-arrival]', $_POST['contact-arrival'], $message);
	$message = str_replace('[contact-departure]', $_POST['contact-departure'], $message);
	$message = str_replace('[no-night]', $_POST['no-night'], $message);
	$message = str_replace('[contact-rooms]', $_POST['contact-rooms'], $message);
	$message = str_replace('[contact-adults]', $_POST['contact-adults'], $message);
	$message = str_replace('[contact-children]', $_POST['contact-children'], $message);
	$message = str_replace('[contact-message]', $_POST['contact-message'], $message);
	
	$mail = new PHPMailer;
	$mail->setFrom($_POST['email'], $_POST['name']);
	$mail->addAddress($hotel_email, $hotel_name);
	$mail->Subject = 'Booking Request from '.$_POST['name'];
	$mail->MsgHTML($message);
	if (!$mail->send()) {
		$alert = "<div class='alert error'><i class='fa fa-exclamation-circle'></i> <h2><strong>There was an error, please call us to make a booking.</strong></h2></div>";
	}
	else {
		$alert = "<div class='alert success'><i class='fa fa-check-circle'></i> <h2><strong>Thank you for your booking request, we will get back to you as soon as possible.</strong> To avoid missing out, please give us a call so that we may assist you sooner.</h2></div>";
	}
}
else {
	$alert = "<div class='alert validate'><i class='fa fa-exclamation-circle'></i> <h2>Please fill out the following fields:</h2> <strong>".$validation."</strong></div>";
}
}
?>
<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN"
"http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"  class="no-js" lang="en-us">
<head>
    <title>Contact Us – Welcome to Camp Noel, Munnar Hotels & Resorts </title>
<meta name="Description" content="We are the best budget hotel in Munnar, luxury resorts for any query & required information please contact @ +91-8590507050."/>
<meta name="Keywords" content="budget resorts in Munnar , best budget hotel in Munnar, luxury resorts in Munnar, Camp Noel Munnar contact, Camp Noel Munnar contact details, Camp Noel Munnar  address, Camp Noel Munnar phone number, Camp Noel Munnar tariff"/>
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
<link rel="canonical" href="http://www.campnoel.com/contact-us.php"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/reset.css" type="text/css" media="all" />
    <link rel="stylesheet" href="css/jquery.mobile-pre1.2.0.min.css?ver=1.9.50729.345" type="text/css" media="all" />
    <link rel="stylesheet" href="css/global.css" type="text/css" media="all" />
    <link rel="stylesheet" href="css/foundation.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="css/mobilesite.css" type="text/css" media="all" />
    <link rel="stylesheet" href="css/colorbox.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="css/ArticleDetail.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="css/Homepage.css" type="text/css" media="screen" />  
    <link rel="stylesheet" href="css/branding.css" type="text/css" media="screen" />
	<link href="css/simp.min.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="js/jquery-1.7.1.min.js" ></script>
	<script type="text/javascript" src="js/global.js" ></script>
	<script type="text/javascript" src="js/jquery.mobile-1.1.1.min.js" ></script>
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

</head>
<body id="shortcode_hd01v" data-ng-app="angularDemoApp" class="mbtheme_dark personality_modern shape_arc corner_soft style_solid   pg-articledetail subnav-enabled bg-photo   ">
<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-W4LVJ5"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W4LVJ5');</script>
<!-- End Google Tag Manager -->
<div data-role="page">
  <div data-role="header" data-id="homepage" data-theme="c" class="five-panel-menu">
         <?php include('logo.php')?>
         <div id="featuredImage">
         <img src='../home/img/gallery/baison-hall.jpg' alt="Camp Noel Munnar - Contact Us" onerror="imageError(this)" style="width:100%"/>
         </div>
         <nav>
       <ul class="quick-action-nav ui-grid-d">
           <?php echo $menu_link; ?>
           <?php echo $book_now; ?>
           <?php echo $call_now; ?>
           <?php echo $quick_pay; ?>
       </ul>
   </nav>
     </div>
     <div data-role="content" class="outer-container" style="position: relative">
       <div class="bg-fader"></div>
     </div>

               <div id="slideoutMenu">
                   <div data-role="collapsible-set">
                        <a data-role="button" data-icon="home" href="index.php" id="homeLink">
   						Home
   					</a>
                       <?php include('nav-bar.php')?>
                   </div>
               </div>

    <div data-role="content" class="outer-container" style="position: relative">
        
    <div class="opacity-overlay container">
        <div class="inner-content article-content">
            <div class="artMainCon"><h1 class='section Header'>Send Reservation Inquiries to our Sales Desk</h1>

				<div class='section form v2'>
				 <?=$alert;?>
					 <form name="contact" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
						<?php
							(isset($_POST["no-night"])) ? $rooms = $_POST["no-night"] : $rooms = $_POST["no-night"];
							(isset($_POST["contact-rooms"])) ? $rooms = $_POST["contact-rooms"] : $rooms = $_POST["contact-rooms"];
							(isset($_POST["contact-adults"])) ? $adults = $_POST["contact-adults"] : $adults  = $_POST["contact-adults"];
							(isset($_POST["contact-children"])) ? $children = $_POST["contact-children"] : $children = $_POST["contact-children"];
						?>
						 <div class='sl_save divitem'>
							<p class='slsame'>
							<label class='sl_title' for='name'>*Name</label>
							<input class='sl_inpt' type='text' name='name' id="name" value="<?php echo isset($_POST['name'])?$_POST['name']:""; ?>"></p>
						</div>
						<div class='sl_save divitem'>
							<p class='slsame'>
							<label class='sl_title' for='phone'>*Phone Number</label>
							<input class='sl_inpt' type='text' name='phone' id="phone" value="<?php echo isset($_POST['phone'])?$_POST['phone']:""; ?>"></p>
						</div>
						<div class='sl_save divitem'>
							<p class='slsame'>
							<label class='sl_title' for='email' >*Email Address </label>
							<input class='sl_inpt' type='text' name='email' id="email" value="<?php echo isset($_POST['email'])?$_POST['email']:""; ?>" ></p>
						</div>
						<div class="sl_save divitem">
							<p class="slsame">
							<label class="sl_title" for="date1">Arrival </label>
							<input type="text" class="date-pick" name="contact-arrival" id="contact-arrival" value="<?php if (isset($_POST['arrival']) && !empty($_POST['arrival'])) { echo $_POST['arrival']; } else { echo isset($_POST['contact-arrival'])?$_POST['contact-arrival']:""; } ?>" >
							<span class="iconfont-datepicker" ></span></p>
						</div>

                         <div class="sl_save divitem">
							<p class="slsame">
							<label class="sl_title" for="date2">Departure </label>
							<input type="text" class="date-pick" name="contact-departure" id="contact-departure" value="<?php if (isset($_POST['departure']) && !empty($_POST['departure'])) { echo $_POST['departure']; } else { echo isset($_POST['contact-departure'])?$_POST['contact-departure']:""; } ?>"/>
							<span class="iconfont-datepicker" ></span></p>
						</div>

					<div class="sl_save divitem">
						<p class="slsame"><label class="sl_title" for="mydropdown">No.Of Nights </label>
							<select  name="no-night" id="no-night">
								<option <?php if ($no-night == 1 ) echo 'selected'; ?>value="1">Select</option>
								<option <?php if ($no-night == 1 ) echo 'selected'; ?>value="1">1</option>
								<option <?php if ($no-night == 2 ) echo 'selected'; ?>value="2">2</option>
								<option <?php if ($no-night == 3 ) echo 'selected'; ?>value="3">3</option>
								<option <?php if (no-night == 4 ) echo 'selected'; ?>value="3">4</option>
								<option <?php if ($no-night == 5 ) echo 'selected'; ?>value="3">5</option>
								<option <?php if ($no-night == 6 ) echo 'selected'; ?>value="3">6</option>
								<option <?php if ($no-night == 7 ) echo 'selected'; ?>value="3">7</option>
								<option <?php if ($no-night == 8 ) echo 'selected'; ?>value="3">8</option>
								<option <?php if ($no-night == 9 ) echo 'selected'; ?>value="3">9</option>
								<option <?php if ($no-night == 10 ) echo 'selected'; ?>value="3">10</option>
							</select>
						</p>

						</div>
						<div class="sl_save divitem">
							<p class="slsame"><label class="sl_title" for="mydropdown1">No.Of Persons </label>
								<select name="contact-adults" id="contact-adults">
									<option <?php if ($adults == 1 ) echo 'selected'; ?> value="1" >1 Adult</option>
									<option <?php if ($adults == 2 ) echo 'selected'; ?> value="2">2 Adults</option>
									<option <?php if ($adults == 3 ) echo 'selected'; ?> value="3" >3 Adults</option>
									<option <?php if ($adults == 4 ) echo 'selected'; ?> value="4" >4 Adults</option>
									<option <?php if ($adults == 5 ) echo 'selected'; ?> value="5" >5 Adults</option>
								</select>
							</p>

						</div>

						<div class="sl_save divitem" >
							<p class="slsame"><label class="sl_title" for="mydropdown2">No.Of Children </label>
								<select name="contact-children" id="contact-children">
									<option <?php if ($children == 0 ) echo 'selected'; ?> value="0">0 Children</option>
									<option <?php if ($children == 1 ) echo 'selected'; ?> value="1" >1 Child</option>
									<option <?php if ($children == 2 ) echo 'selected'; ?> value="2" >2 Children</option>
									<option <?php if ($children == 3 ) echo 'selected'; ?> value="3" >3 Children</option>
									<option <?php if ($children == 4 ) echo 'selected'; ?> value="4" >4 Children</option>
								</select>
							</p>

						</div>
						<div class="sl_save divitem">
							<p class="slsame"><label class="sl_title" for="mydropdown3">No.Of Room </label>
								<select  name="contact-rooms" id="contact-rooms">
									<option <?php if ($rooms == 1 ) echo 'selected'; ?>value="1">Select</option>
									<option <?php if ($rooms == 1 ) echo 'selected'; ?>value="1">1</option>
									<option <?php if ($rooms == 2 ) echo 'selected'; ?>value="2">2</option>
									<option <?php if ($rooms == 3 ) echo 'selected'; ?>value="3">3</option>
									<option <?php if ($rooms == 4 ) echo 'selected'; ?>value="3">4</option>
									<option <?php if ($rooms == 5 ) echo 'selected'; ?>value="3">5</option>
									<option <?php if ($rooms == 6 ) echo 'selected'; ?>value="3">6</option>
									<option <?php if ($rooms == 7 ) echo 'selected'; ?>value="3">7</option>
									<option <?php if ($rooms == 8 ) echo 'selected'; ?>value="3">8</option>
									<option <?php if ($rooms == 9 ) echo 'selected'; ?>value="3">9</option>
									<option <?php if ($rooms == 10 ) echo 'selected'; ?>value="3">10</option>
								</select>
							</p>

						</div>
						<div class='ml_save divitem'>
							<p class='slsame'>
							<label class='sl_title' for='query'>*Write Query here</label>
							<textarea name='contact-message' id="contact-message"><?php echo isset($_POST['contact-message'])?$_POST['contact-message']:""; ?></textarea></p>
						</div>
						<div class='forminput'>
							<div class='formlabel sub'>&nbsp;</div>
							<div class='formfield'><input type="submit" name="send" value="sendform"></div>
							
						</div>
					</form>
				</div>
			</div>


        </div>
    </div>

        <div class="bg-fader"></div>
    </div>
		<?php include('footer.php')?>
 <script type="text/javascript" src="js/foundation.js.min.js" ></script>
<script type="text/javascript" src="js/jquery.ellipsis.js.min.js" ></script>
<script type="text/javascript">
    var needFillTip = "Please fill"
    var Reservation_CheckIn = "";
    var Reservation_CheckOut = "";
    var Reservation_RoomNum = "";
    $(function () {
        $('span.assisth3').wordLimit();
    });
</script>

    <script type="text/javascript" src="js/jquery.colorbox.js.min.js" ></script>
    <script type="text/javascript" src="js/jquery.ellipsis.2.js.min.js" ></script>
    <script type="text/javascript" src="js/mobile.js.min.js" ></script>
<script type="text/javascript">
    var needFillTip = "Please fill";
</script>
        <script type="text/javascript">
            $(function() { getLocalTime(); });
        </script>
      <?php include('route.php')?>
    <div class="codeInsertion" style="display:none">
        
    </div>
</body>
</html>

