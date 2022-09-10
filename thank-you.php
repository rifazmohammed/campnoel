<?php require_once 'vars.php'; ?>
<!DOCTYPE HTML>
<html class="full">
<head>
	<title><?php echo $hotel_name; ?> | Thank You</title>
	<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
	<meta name="keywords" content="" />
	<meta name="description" content="">
	<meta name="robots" content="index, follow">
	<link rel="alternate" href="<?php echo $hotel_domain;?>" hreflang="en-in" />
	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
	<meta name="viewport" id="myViewport" content="width=device-width, initial-scale=1.0">
	<script type="text/javascript">
			if (screen.width <= 800) {
				var mvp = document.getElementById("myViewport");
				mvp.setAttribute("content","width=1202");
			}
		</script>
	<link rel="stylesheet" media="all" href="css/404.css">
	<link rel="stylesheet" media="all" href="css/bootstrap.css">
	<link rel="stylesheet" media="all" href="css/font-awesome.css">
	<link rel="stylesheet" media="all" href="css/animate.min.css">
	<link rel="stylesheet" media="all" href="css/icomoon.css">
	<!-- GOOGLE FONTS -->
	<link href='http://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600' rel='stylesheet' type='text/css'>
	<!-- /GOOGLE FONTS -->
</head>
<?php echo $tag_manager_code; ?>
<body class="full">
	<div class="global-wrap">
		<div class="full-page">
			<div class="bg-holder full">
				<div class="bg-mask"></div>
				<div class="bg-blur" style="background-image:url(img/backgrounds/keyboard.jpg);"></div>
				<div class="bg-holder-content full text-white">
					<a class="logo-holder" href="index.php">
						<img src="img/logo-camp-noel.png" alt="Camp Noel - Logo" title="Camp Noel - Logo" />
					</a>
					<div class="full-center text-center">
						<div class="container">
							<div class="row">
								<div class="col-md-8 col-md-offset-2">
									<p class="text-hero animated pulse"><i class="fa fa-check"></i></p>
									<h1>Thank You</h1>
									<p>Thank you for writing to us, we have received you query and get back to you as soon as possible.<br>To avoid missing out, please give us a call so that we may assist you sooner.</p>
									<a class="btn btn-white btn-ghost btn-lg mt5" href="index.php"><i class="fa fa-long-arrow-left"></i> To Homepage</a>
									<a class="btn btn-white btn-ghost btn-lg mt5" href="<?php echo $link_be; ?>" target="_blank">Book Now <i class="fa fa-long-arrow-right"></i></a>
								</div>
							</div>
						</div>
					</div>
					<ul class="footer-links">
						<li><a href="index.php">Home</a>
						</li>
						<li><a href="gallery.php">Gallery</a>
						</li>
						<li><a href="<?php echo $link_qp; ?>">Quick Pay</a>
						</li>
						<li><a href="<?php echo $link_be; ?>">Book Now</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<script src="js/modernizr.js"></script>
	<script src="js/jquery.js"></script>
</body>
</html>