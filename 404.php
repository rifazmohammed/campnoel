<?php require_once 'vars.php'; ?>
<!DOCTYPE HTML>
<html class="full">
<head>
	<title><?php echo $hotel_name; ?> | Page Not found</title>
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
	<link rel="stylesheet" media="all" href="<?php echo $client_domain; ?>css/bootstrap.css">
	<link rel="stylesheet" media="all" href="<?php echo $client_domain; ?>css/animate.min.css">
	<link rel="stylesheet" media="all" href="<?php echo $client_domain; ?>css/font-awesome.css">
	<link rel="stylesheet" media="all" href="<?php echo $client_domain; ?>css/icomoon.css">
	<link rel="stylesheet" media="all" href="<?php echo $client_domain; ?>css/404.css">
	<!-- GOOGLE FONTS -->
	<link href='http://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600' rel='stylesheet' type='text/css'>
	<!-- /GOOGLE FONTS -->
	<style type="text/css">
		@media (min-width: 750px){
			.full-center{
				top: 34% !important;
			}
		}
		@media (max-width: 767px){
			.text-hero{
				font-size: 130px;
			}
			.full-center{
				top: 40% !important;
			}
		}
	</style>
</head>
</html>

<?php echo $tag_manager_code; ?>

<!-- End Google Tag Manager -->
<body class="full">
	<div class="global-wrap">
		<div class="full-page">
			<div class="bg-holder full">
				<div class="bg-mask"></div>
				<div class="bg-blur" style="background-image:url(<?php echo $client_domain; ?>img/backgrounds/404.jpg);"></div>
				<div class="bg-holder-content full text-white one-point-one">
					<a class="logo-holder" href="index.php">
						<img src="<?php echo $client_domain; ?>img/logo-camp-noel.png" alt="<?php echo $hotel_name; ?>" title="<?php echo $hotel_name; ?>" />
					</a>
					<div class="full-center text-center">
						<div class="container">
							<div class="row">
								<div class="col-md-6 col-md-offset-3">
									<p class="text-hero animated wobble">4<i class="fa fa-ban"></i>4</p>
									<h1>Page Not Found</h1>
									<p>Looks like you mistyped the URL or the page you are looking for is moved.<br>If you feel so, visit the below links.</p>
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
	<script src="<?php echo $client_domain; ?>/js/modernizr.js"></script>
	<script src="<?php echo $client_domain; ?>/js/jquery.js"></script>
</body>
</html>