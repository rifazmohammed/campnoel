

<?php
$view_trigger = isset($_GET['enable-desktop-view']);
?>
<?php
if ($view_trigger=='true') {
	echo '<script type="text/javascript">
			if (screen.width <= 800) {
				var mvp = document.getElementById("myViewport");
				mvp.setAttribute("content","width=1202");
			}
		</script>
		';
}
else{
	echo '<script type="text/javascript">
			if (screen.width <= 800)
				window.location = "http://www.campnoel.com/mobile/";
			</script>
			';
}
?>