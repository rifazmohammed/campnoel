<?php require_once 'vars-mobile.php'; ?>
<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" class="no-js ui-mobile" lang="en-us">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Photo Gallery | Camp Noel Resorts Munnar</title>
<meta name="Description" content="View the photo gallery of Camp Noel Resorts Munnar, Kerala India."/>
<meta name="Keywords" content="Camp Noel Photo Gallery, photos, Photo Gallery"/>
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
<link rel="canonical" href="http://www.campnoel.com/gallery.php"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/reset.css" type="text/css" media="all">
    <link rel="stylesheet" href="photo/css/jquery.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/global.css" type="text/css" media="all">
    <link rel="stylesheet" href="photo/css/jquery_002.css" type="text/css" media="screen">
    <link rel="stylesheet" href="photo/css/jquery_003.css" type="text/css" media="screen">
    <link rel="stylesheet" href="css/mobilesite.css" type="text/css" media="all">
    <link rel="stylesheet" href="photo/css/jquery.gallery1.css" type="text/css" media="screen">
    <link rel="stylesheet" href="photo/css/jquery.fancybox-1.2.6.css" type="text/css" media="all">
    <link rel="stylesheet" href="photo/css/colorbox.css" type="text/css" media="screen">
    <link rel="stylesheet" href="photo/css/Photos1.css" type="text/css" media="screen">
    <link rel="stylesheet" href="photo/css/photoswipe.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/Homepage.css" type="text/css" media="screen" />
    <link href="css/simp.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="css/branding.css" type="text/css" media="screen">
    <script src="photo/js/piwik.js" async="" defer="defer" type="text/javascript"></script>
    <script type="text/javascript" src="photo/js/jquery-1.js"></script>
    <script type="text/javascript" src="photo/js/global.js"></script>
    <script type="text/javascript" src="photo/js/jquery_004.js"></script>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
</head>
<body id="shortcode_hd01v" data-ng-app="angularDemoApp" class="mbtheme_dark personality_modern shape_arc corner_soft style_solid   pg-photos subnav-enabled bg-photo   ">
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
        <div role="main" data-role="content" class="outer-container ui-content" style="position: relative">
            <div class="container full-width">
                    <div class="photo-menu">
                        <div class="ui-select">
                            <div class="ui-btn ui-btn-up-c ui-shadow ui-btn-corner-all ui-btn-icon-right" data-theme="c" data-iconpos="right" data-icon="arrow-d" data-wrapperels="span" data-iconshadow="true" data-shadow="true" data-corners="true">
                          <!--<select name="photoSelect" id="photoSelect">
                                    <option value="0" albumid="0" parentid="-1" link="photo.html?id=0">
                                        All
                                    </option>
                                <option value="135403" albumid="135403" parentid="0" link="photo.html?id=135403">
                                        Inside Hotel
                                    </option>
                                    <option value="135401" albumid="135401" parentid="0" link="photo.html?id=135401">
                                        Services
                                    </option>


                                    <option value="135398" class="navlast" albumid="135398" parentid="0" link="photo.html?id=135398">
                                       Tour
                                    </option>
                                </select>-->
                            </div>
                        </div>
                    </div>
                  <div class="ps-active" style="position: relative;" id="photoTarget">
            </div>
        </div>
       <div class="bg-fader"></div>
    </div>
        <?php include('footer.php')?>
        <script type="text/javascript">
            var DatePickerMonthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            var DatePickerDayOfWeeksNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
            var imgserver = "//cdn1.buuteeq.com";
            var cdnserver = "//cdn1.buuteeq.com";
            var TimeZoneStr = "Asia/Calcutta";
            var LocalTimeUrl = "//assets.buuteeq.com/util/localtime.js?tz=";
            var BookNowTerm = "Book Now";
            var CurrentPageName = "photos";
        </script>
        <script type="text/javascript" src="photo/js/foundation.js"></script>
        <script type="text/javascript" src="photo/js/jquery_007.js"></script>
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

        <script type="text/javascript" src="js/b.min.js"></script>
        <script type="text/javascript" src="photo/js/jquery_006.js"></script>
        <script type="text/javascript" src="photo/js/jquery_008.js"></script>
        <script type="text/javascript" src="photo/js/jquery.js"></script>
        <script type="text/javascript" src="photo/js/jquery.gallery.js" ></script>
        <script type="text/javascript" src="photo/js/imageslider.js"></script>
    <script type="text/javascript">
        var currentAlbumID = -1;
        var currentSegmentID = -1;
        var galleries;
        var slideShowAnimation = "fade";
        var photoArray = ([{"ID":999608,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135403,"AttachmentID":999608,"Path":"../home/img/gallery/camp-view1.jpg","FileName":"135403","FileExtension":"","FileSize":0,"Name":"<?php echo $hotel_name; ?> - Camp View 1","Width_height":"","SortID":1123292,"Hits":0,"CreatedTime":"\/Date(1378712105553)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},
        {"ID":1123104,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135403,"AttachmentID":1123104,"Path":"../home/img/gallery/camp-view2.jpg","FileName":"135403","FileExtension":"","FileSize":0,"Name":"<?php echo $hotel_name; ?> - Camp View 2","Width_height":"","SortID":1123293,"Hits":0,"CreatedTime":"\/Date(1378712063073)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},
        {"ID":1532663,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135403,"AttachmentID":1532663,"Path":"../home/img/gallery/camp-view3.jpg","FileName":"135403","FileExtension":"","FileSize":0,"Name":"<?php echo $hotel_name; ?> - Camp View 3","Width_height":"","SortID":1123294,"Hits":0,"CreatedTime":"\/Date(1394358695903)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},
        {"ID":999558,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135403,"AttachmentID":999558,"Path":"../home/img/gallery/club-house.jpg","FileName":"135403","FileExtension":"","FileSize":0,"Name":"<?php echo $hotel_name; ?> -  Deluxe Club House View","Width_height":"","SortID":1123295,"Hits":0,"CreatedTime":"\/Date(1377881859803)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},
        {"ID":1532669,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135403,"AttachmentID":1532669,"Path":"../home/img/gallery/deluxe-club-house.jpg","FileName":"135403","FileExtension":"","FileSize":0,"Name":"<?php echo $hotel_name; ?> - Deluxe Club House Room","Width_height":"","SortID":1123296,"Hits":0,"CreatedTime":"\/Date(1394358684033)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},
        {"ID":999479,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135401,"AttachmentID":999479,"Path":"../home/img/gallery/double-bedroom1.jpg","FileName":"135401","FileExtension":"","FileSize":0,"Name":"Cottage with One Bedroom View 1","Width_height":"","SortID":1,"Hits":0,"CreatedTime":"\/Date(1377882007413)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},
        {"ID":999479,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135401,"AttachmentID":999480,"Path":"../home/img/gallery/double-bedroom2.jpg","FileName":"135401","FileExtension":"","FileSize":0,"Name":"Cottage with One Bedroom View 2","Width_height":"","SortID":1,"Hits":0,"CreatedTime":"\/Date(1377882007413)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},
        {"ID":999479,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135401,"AttachmentID":999479,"Path":"../home/img/gallery/double-bedroom3.jpg","FileName":"135401","FileExtension":"","FileSize":0,"Name":"Cottage with Two Bedroom View 1","Width_height":"","SortID":1,"Hits":0,"CreatedTime":"\/Date(1377882007413)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},
        {"ID":999479,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135401,"AttachmentID":999480,"Path":"../home/img/gallery/one-bedroom1.jpg","FileName":"135401","FileExtension":"","FileSize":0,"Name":"Cottage with Two Bedroom View 2","Width_height":"","SortID":1,"Hits":0,"CreatedTime":"\/Date(1377882007413)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},
        {"ID":999479,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135401,"AttachmentID":999480,"Path":"../home/img/gallery/one-bedroom2.jpg","FileName":"135401","FileExtension":"","FileSize":0,"Name":"Cottage with Two Bedroom View 3","Width_height":"","SortID":1,"Hits":0,"CreatedTime":"\/Date(1377882007413)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},
        {"ID":999479,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135401,"AttachmentID":999480,"Path":"../home/img/gallery/one-bedroom3.jpg","FileName":"135401","FileExtension":"","FileSize":0,"Name":"Cottage with Two Bedroom View 4","Width_height":"","SortID":1,"Hits":0,"CreatedTime":"\/Date(1377882007413)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},
        {"ID":999479,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135401,"AttachmentID":999480,"Path":"../home/img/gallery/kitchen.jpg","FileName":"135401","FileExtension":"","FileSize":0,"Name":"Kitchen","Width_height":"","SortID":1,"Hits":0,"CreatedTime":"\/Date(1377882007413)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},
        {"ID":999479,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135401,"AttachmentID":999479,"Path":"../home/img/gallery/restaurant.jpg","FileName":"135401","FileExtension":"","FileSize":0,"Name":"Restaurant","Width_height":"","SortID":1,"Hits":0,"CreatedTime":"\/Date(1377882007413)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},
        {"ID":999479,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135401,"AttachmentID":999480,"Path":"../home/img/gallery/lobby.jpg","FileName":"135401","FileExtension":"","FileSize":0,"Name":"Lobby","Width_height":"","SortID":1,"Hits":0,"CreatedTime":"\/Date(1377882007413)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},
        {"ID":999479,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135401,"AttachmentID":999480,"Path":"../home/img/gallery/baison-hall.jpg","FileName":"135401","FileExtension":"","FileSize":0,"Name":"Baison Hall","Width_height":"","SortID":1,"Hits":0,"CreatedTime":"\/Date(1377882007413)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},

        {"ID":999479,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135401,"AttachmentID":999480,"Path":"../home/img/gallery/camp-fire.jpg","FileName":"135401","FileExtension":"","FileSize":0,"Name":"Camp Fire","Width_height":"","SortID":1,"Hits":0,"CreatedTime":"\/Date(1377882007413)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},
        {"ID":999479,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135401,"AttachmentID":999480,"Path":"../home/img/gallery/elevated-cottage1.jpg","FileName":"135401","FileExtension":"","FileSize":0,"Name":"Elevated Cottage View 1","Width_height":"","SortID":1,"Hits":0,"CreatedTime":"\/Date(1377882007413)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},
        {"ID":999479,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135401,"AttachmentID":999480,"Path":"../home/img/gallery/elevated-cottage2.jpg","FileName":"135401","FileExtension":"","FileSize":0,"Name":"Elevated Cottage View 2","Width_height":"","SortID":1,"Hits":0,"CreatedTime":"\/Date(1377882007413)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},
        {"ID":999479,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135401,"AttachmentID":999480,"Path":"../home/img/gallery/elevated-cottage3.jpg","FileName":"135401","FileExtension":"","FileSize":0,"Name":"Elevated Cottage View 3","Width_height":"","SortID":1,"Hits":0,"CreatedTime":"\/Date(1377882007413)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},
        {"ID":999479,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135401,"AttachmentID":999480,"Path":"../home/img/gallery/elevated-cottage4.jpg","FileName":"135401","FileExtension":"","FileSize":0,"Name":"Elevated Cottage View 4","Width_height":"","SortID":1,"Hits":0,"CreatedTime":"\/Date(1377882007413)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0},

        {"ID":999479,"Type":0,"LanguageID":1,"HotelID":15374,"ParentID":135401,"AttachmentID":999479,"Path":"../home/img/gallery/elevated-cottage5.jpg","FileName":"135401","FileExtension":"","FileSize":0,"Name":"Elevated Cottage View 5","Width_height":"","SortID":1,"Hits":0,"CreatedTime":"\/Date(1377882007413)\/","CreatedUserID":0,"Ip":"","Description":"","Remark":"0","State":0}]);
    </script>
        <script type="text/javascript" src="photo/js/jquery_003.js"></script>
        <script type="text/javascript" src="photo/js/jquery_002.js"></script>
        <script type="text/javascript" src="js/mobile.js.min.js" ></script>
        <script type="text/javascript" src="photo/js/klass.js"></script>
        <script type="text/javascript" src="photo/js/code.js"></script>
        <script type="text/javascript" src="photo/js/photos.js"></script>

        <script type="text/javascript">
            var needFillTip = "Please fill";
        </script>
        <script type="text/javascript">
            $(function() { getLocalTime(); });
        </script>
          <?php include('route.php')?>
        <div class="codeInsertion" style="display:none">
        </div>
<div class="ui-loader ui-corner-all ui-body-a ui-loader-default"><span class="ui-icon ui-icon-loading"></span><h1>loading</h1></div><div class="adddiv"><div id="fancy_overlay"></div><div id="fancy_loading"></div><div id="fancy_outer"><div id="fancy_inner"><div id="fancy_close"></div><div id="fancy_bg"><div class="fancy_bg" id="fancy_bg_n"></div><div class="fancy_bg" id="fancy_bg_ne"></div><div class="fancy_bg" id="fancy_bg_e"></div><div class="fancy_bg" id="fancy_bg_se"></div><div class="fancy_bg" id="fancy_bg_s"></div><div class="fancy_bg" id="fancy_bg_sw"></div><div class="fancy_bg" id="fancy_bg_w"></div><div class="fancy_bg" id="fancy_bg_nw"></div></div><a href="javascript:;" id="fancy_left"><span class="fancy_ico" id="fancy_left_ico"></span></a><a href="javascript:;" id="fancy_right"><span class="fancy_ico" id="fancy_right_ico"></span></a><div id="fancy_content"></div></div></div><div id="fancy_title"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="fancy_title" id="fancy_title_left"></td><td class="fancy_title" id="fancy_title_main"><div></div></td><td class="fancy_title" id="fancy_title_right"></td></tr></tbody></table></div></div><div style="display: none;" id="cboxOverlay"></div><div style="display: none;" class="" id="colorbox"><div id="cboxWrapper"><div><div style="float: left;" id="cboxTopLeft"></div><div style="float: left;" id="cboxTopCenter"></div><div style="float: left;" id="cboxTopRight"></div></div><div style="clear: left;"><div style="float: left;" id="cboxMiddleLeft"></div><div style="float: left;" id="cboxContent"><div style="width: 0px; height: 0px; overflow: hidden; float: left;" id="cboxLoadedContent"></div><div style="float: left;" id="cboxLoadingOverlay"></div><div style="float: left;" id="cboxLoadingGraphic"></div><div style="float: left;" id="cboxTitle"></div><div style="float: left;" id="cboxCurrent"></div><div style="float: left;" id="cboxNext"></div><div style="float: left;" id="cboxPrevious"></div><div style="float: left;" id="cboxSlideshow"></div></div><div style="float: left;" id="cboxMiddleRight"></div></div><div style="clear: left;"><div style="float: left;" id="cboxBottomLeft"></div><div style="float: left;" id="cboxBottomCenter"></div><div style="float: left;" id="cboxBottomRight"></div></div><div style="float: left;" id="cboxClose"></div></div><div style="position: absolute; width: 9999px; visibility: hidden; display: none;"></div></div></body></html>