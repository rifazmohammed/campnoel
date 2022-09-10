<?php require_once(dirname(__FILE__)."/../vars.php"); ?>
<?php
	$full_name = $_SERVER['PHP_SELF'];
	$name_array = explode('/',$full_name);
	$count = count($name_array);
	$page_name = $name_array[$count-1];
?>
<header id="main-header">
	<div class="container" id="sticky-alt">
		<div class="col-md-2">
			<a href="index.php">
				<img class="logo-alt" src="img/logo-camp-noel.png" alt="Camp Noel Hotels and Resorts">
			</a>
		</div>
		<div class="col-md-10 pull-right">
			<div class="nav">
				<ul class="slimmenu mobile_slimmenu text-right" id="slimmenu">
					<li><a class="<?php echo ($page_name=='index.php')?'active':'';?>" href="index.php">Home</a>
					</li>
					<li><a class="<?php echo ($page_name=='about-us.php')?'active':'';?>" href="about-us.php">About Us</a>
						<!---<ul style="width:180px">
							<li><a class="<?php echo ($page_name=='packages.php')?'active':'';?>" href="packages.php">Packages</a>
							</li>
							<li><a class="<?php echo ($page_name=='attraction.php')?'active':'';?>" href="attraction.php">Attraction Nearby</a>
							</li>
						</ul>--->
					</li>
					<li><a class="<?php echo ($page_name=='rooms.php')?'active':'';?>" href="book-hotel-rooms-munnar.php">Rooms</a>
						<ul style="width:225px">
							<li><a class="<?php echo ($page_name=='deluxe-club-house.php')?'active':'';?>" href="deluxe-club-house-munnar.php">Deluxe Club House</a>
							</li>
							<li><a class="<?php echo ($page_name=='elevated-cottage.php')?'active':'';?>" href="elevated-cottage-and-hunters-cabin-munnar.php">Elevated Cottage</a>
							</li>
							<li><a class="<?php echo ($page_name=='cottage-one-bedroom.php')?'active':'';?>" href="cottage-with-one-bedroom-munnar.php">Cottage With One Bedroom</a>
							</li>
							<li><a class="<?php echo ($page_name=='cottage-two-bedroom.php')?'active':'';?>" href="cottage-with-two-bedroom-munnar.php">Cottage With Two Bedroom</a>
							</li>
						</ul>
					</li>
					<li><a class="<?php echo ($page_name=='guest-book.php')?'active':'';?>" href="guest-book.php">Guest Book</a>
					</li>
					<li><a class="<?php echo ($page_name=='gallery.php')?'active':'';?>" href="gallery.php">Gallery</a>
					</li>
					<li><a class="<?php echo ($page_name=='contact-us.php')?'active':'';?>" href="contact-us.php">Contact Us</a>
					</li>
					<li><a href="<?php echo $link_qp;?>" target="_blank" class="btn btn-primary">Quick Pay</a>
					</li>
					<li>
						<div id="language">
							<div id="google_translate_element"></div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</header>