<?php require_once 'vars-mobile.php'; ?>
<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN"
"http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"  class="no-js" lang="en-us">
<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>Luxury Resorts in Munnar | Munnar Accommodation | Budget Hotels in Kerala </title>
<meta name="Description" content="Camp Noel Hotel & Resorts offers impeccable accommodation and unique hospitality services. Revel in the beauty and splendour of Munnar, Kerala."/>
<meta name="Keywords" content="luxury resorts in Munnar, Munnar accommodation, budget hotels in Kerala, Camp Noel resorts, Camp Noel resort Munnar, luxury resorts in Munnar, best resorts in Munnar"/>
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
<link rel="canonical" href="http://www.campnoel.com/"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="css/reset.css" type="text/css" media="all" />
		<link rel="stylesheet" href="css/jquery.mobile-pre1.2.0.min.css?ver=1.9.50729.345" type="text/css" media="all" />
		<link rel="stylesheet" href="css/global.css" type="text/css" media="all" />
		<link rel="stylesheet" href="css/foundation.css" type="text/css" media="screen" />
		<link rel="stylesheet" href="css/mobilesite.css" type="text/css" media="all" />
		<link rel="stylesheet" href="css/colorbox.css" type="text/css" media="screen" />
		<link rel="stylesheet" href="css/Homepage.css" type="text/css" media="screen" />   
		<link rel="stylesheet" href="css/branding.css" type="text/css" media="screen" />
		<link href="css/simp.min.css" rel="stylesheet" type="text/css" />
        <link href="http://vjs.zencdn.net/5.0.0/video-js.css" rel="stylesheet">
        <script src="http://vjs.zencdn.net/ie8/1.1.0/videojs-ie8.min.js"></script>
        <script src="http://vjs.zencdn.net/5.0.0/video.js"></script>
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
        <script type="text/javascript" src="js/jquery-1.7.1.min.js" ></script>
        <script type="text/javascript" src="js/global.js" ></script>
        <script type="text/javascript" src="js/jquery.mobile-1.1.1.min.js" ></script>
</head>
    
<body id="shortcode_hd01v" data-ng-app="angularDemoApp" class="mbtheme_dark personality_modern shape_arc corner_soft style_solid   pg-homepage subnav-enabled bg-photo   ">
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
      <div data-role="header" data-id="homepage" data-theme="c" class="four-panel-menu">
          <?php include('logo.php')?>
                  <div id="featuredImage">
                    <img src='../home/img/gallery/camp-view1.jpg' alt="Camp Noel Hotels and Resorts" onerror="imageError(this)" style="width:100%"/>
                  </div>
                <nav>
                    <ul class="quick-action-nav ui-grid-d">
                        <?php echo $book_now; ?>
                        <?php echo $call_now; ?>
                        <?php echo $map; ?>
                        <?php echo $quick_pay; ?>
                    </ul>
                </nav>
      </div>
      <div data-role="content" class="outer-container" style="position: relative">

        <div class="bg-fader"></div>
      </div>
      <div data-role="content" class="outer-container" style="position: relative">
        <div class="opacity-overlay container">
            <div class="inner-content">
               <div data-role="collapsible-set" style="margin-top:5px;">
                        <?php include('nav-bar.php')?>
                    </div>
                </div>
            </div>
            <div class="bg-fader"></div>
        </div>
        <div data-role="content" class="outer-container" style="position: relative">
        <div class="bg-fader"></div>
        </div>
    <?php include('footer.php')?>
        <script type="text/javascript" src="js/foundation.js.min.js" ></script>
        <script type="text/javascript" src="js/jquery.ellipsis.js.min.js" ></script>
        <script type="text/javascript">
            $(document).ready(function () {
                $("#roomsList>dd,#roomsList>dt").eq(0).addClass("first");
                var lastdt = $("#roomsList>dt").last();
                if ($("a", lastdt.next()).length == 0) lastdt.addClass("nochild");
                if ($('#imgSiteMap').attr('src') == '')
                    $('#imgSiteMap').hide();
                else
                    $('#imgSiteMap').show();
                $(".sitemap .fl3-1 dd a,.sitemap .fl3-1 dt a,.sitemap .s-rooms dd a,.sitemap .s-rooms dt").wordLimit();
            });
        </script>
        <script type="text/javascript" src="js/jquery.colorbox.js.min.js" ></script>
        <script type="text/javascript" src="js/jquery.ellipsis.2.js.min.js" ></script>
        <script type="text/javascript" src="js/mobile.js.min.js" ></script>
        <script type="text/javascript">
            $(document).bind('pageshow', function () {
                $("#orbitDemo").orbit({ 'bullets': true, 'directionalNav': true });
                $('#orbitDemo .orbit-slide').live('swipeleft', function (evt) {
                    $(".slider-nav .right").trigger('click');
                }).live('swiperight', function (evt) {
                    $(".slider-nav .left").trigger('click');
                });
                $(document).unbind('pageshow');

                $(".inner-content h3").ellipsis(2);
            });
        </script>
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
