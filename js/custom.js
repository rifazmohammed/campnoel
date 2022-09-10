"use strict";
// $(window).load(function() {
//     // Animate loader off screen
//     $(".se-pre-con").fadeOut("slow");;
// });
$('ul.slimmenu').slimmenu({
    resizeWidth: '992',
    collapserTitle: 'Menu',
    animSpeed: 250,
    indentChildren: true,
    childrenIndenter: ''
});

if (screen.width >= 992) {
    $("#sticky-alt").sticky({topSpacing:0, wrapperClassName:'sticky-style'});
}
//Setup the plugin, see readme for more examples
var weather = $("#current-weather").flatWeatherPlugin({
location: "Munnar, Kerala", //city and region *required
country: "INDIA",         //country *required 
//optional:
api: "yahoo", //default: openweathermap (openweathermap or yahoo)
//apikey: "a138f015a5cf3d44b77236c31c96dd6c",   //optional api key for openweather
view : "today", //default: full (partial, full, simple, today or forecast)
displayCityNameOnly : true, //default: false (true/false) if you want to display only city name
//forecast: 4, //default: 5 (0 -5) how many days you want forecast
//render: true, //default: true (true/false) if you want plugin to generate markup
loadingAnimation: true, //default: true (true/false) if you want plugin to show loading animation
units : "metric" //or "imperial" default: "auto"
});

// Yahoo Weather API:           https://developer.yahoo.com/weather/
// Open Weather MAP API:        http://openweathermap.org/


$(function(){
    $("#book-now-widget").css("display","block");
    $("#book-now-widget").hide().fadeIn(1500);
    //$("img.lazy").lazyload();
    $("#map-footer").gmap3({
        map:{
            options:{
                center:[10.1742553,77.2366816],
                zoom: 12,
                draggable: true,
                scrollwheel: false,
                disableDoubleClickZoom: true
            }
        },
        marker:{
            values:[
                {latLng: [10.1742553,77.2366816], data:"Camp Noel Hotels & Resorts, Munnar"}
            ],
            events:{
                mouseover: function(marker, event, context){
                    var map = $(this).gmap3("get"),
                    infowindow = $(this).gmap3({get:{name:"infowindow"}});
                    if (infowindow){
                        infowindow.open(map, marker);
                        infowindow.setContent(context.data);
                    } else {
                        $(this).gmap3({
                            infowindow:{
                                anchor:marker, 
                                options:{content: context.data}
                            }
                        });
                    }
                },
                mouseout: function(){
                    var infowindow = $(this).gmap3({get:{name:"infowindow"}});
                    if (infowindow){
                        infowindow.close();
                    }
                }
            }
        }
    });
});

// Countdown
$('.countdown').each(function() {
    var count = $(this);
    $(this).countdown({
        zeroCallback: function(options) {
            var newDate = new Date(),
                newDate = newDate.setHours(newDate.getHours() + 130);
            $(count).attr("data-countdown", newDate);
            $(count).countdown({
                unixFormat: true
            });
        }
    });
});


$('.btn').button();

$("[rel='tooltip']").tooltip();

$('.form-group').each(function() {
    var self = $(this),
        input = self.find('input');

    input.focus(function() {
        self.addClass('form-group-focus');
    })

    input.blur(function() {
        if (input.val()) {
            self.addClass('form-group-filled');
        } else {
            self.removeClass('form-group-filled');
        }
        self.removeClass('form-group-focus');
    });
});

$('.typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 3,
    limit: 8
}, {
    source: function(q, cb) {
        return $.ajax({
            dataType: 'json',
            type: 'get',
            url: 'http://gd.geobytes.com/AutoCompleteCity?callback=?&q=' + q,
            chache: false,
            success: function(data) {
                var result = [];
                $.each(data, function(index, val) {
                    result.push({
                        value: val
                    });
                });
                cb(result);
            }
        });
    }
});


$('input.date-pick, .input-daterange, .date-pick-inline').datepicker({
    todayHighlight: true
});


$('input.date-pick, .input-daterange input[name="start"]').datepicker('setDate', 'today');
$('.input-daterange input[name="end"]').datepicker('setDate', '+7d');

$('input.time-pick').timepicker({
    minuteStep: 15,
    showInpunts: false
})

$('input.date-pick-years').datepicker({
    startView: 2
});

$('.booking-item-price-calc .checkbox label').click(function() {
    var checkbox = $(this).find('input'),
        // checked = $(checkboxDiv).hasClass('checked'),
        checked = $(checkbox).prop('checked'),
        price = parseInt($(this).find('span.pull-right').html().replace('$', '')),
        eqPrice = $('#car-equipment-total'),
        tPrice = $('#car-total'),
        eqPriceInt = parseInt(eqPrice.attr('data-value')),
        tPriceInt = parseInt(tPrice.attr('data-value')),
        value,
        animateInt = function(val, el, plus) {
            value = function() {
                if (plus) {
                    return el.attr('data-value', val + price);
                } else {
                    return el.attr('data-value', val - price);
                }
            };
            return $({
                val: val
            }).animate({
                val: parseInt(value().attr('data-value'))
            }, {
                duration: 500,
                easing: 'swing',
                step: function() {
                    if (plus) {
                        el.text(Math.ceil(this.val));
                    } else {
                        el.text(Math.floor(this.val));
                    }
                }
            });
        };
    if (!checked) {
        animateInt(eqPriceInt, eqPrice, true);
        animateInt(tPriceInt, tPrice, true);
    } else {
        animateInt(eqPriceInt, eqPrice, false);
        animateInt(tPriceInt, tPrice, false);
    }
});


$('div.bg-parallax').each(function() {
    var $obj = $(this);
    if($(window).width() > 992 ){
        $(window).scroll(function() {
            var animSpeed;
            if ($obj.hasClass('bg-blur')) {
                animSpeed = 10;
            } else {
                animSpeed = 15;
            }
            var yPos = -($(window).scrollTop() / animSpeed);
            var bgpos = '50% ' + yPos + 'px';
            $obj.css('background-position', bgpos);

        });
    }
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 250) {
        $('.float-button').removeClass('display-none').addClass('display-block');
        $('.float-button').show().fadeIn(500);
        // $('.float-button').hide().fadeIn(1500);
        //$('.float-button').fadeIn();
    } else {
        $('.float-button').removeClass('display-block').addClass('display-none');
        $('.float-button').hide().fadeIn(500);
        //$('.float-button').fadeOut();
    }

});


$(document).ready(
    function() {
        $('#youtube-video').mediaelementplayer({
                    videoWidth: '100%',
                    videoHeight: '33%',
                    enableAutosize: true
                }
            );
        $('html').niceScroll({
            cursorcolor: "#000",
            cursorborder: "1px solid #fff",
            railpadding: {
                top: 0,
                right: 0,
                left: 0,
                bottom: 0
            },
            cursorwidth: "9px",
            cursorborderradius: "0px",
            cursoropacitymin: 0.2,
            preservenativescrolling: true,
            bouncescroll: true,
            cursoropacitymax: 0.8,
            boxzoom: true,
            zindex: 2147483645
        });

            // Owl Carousel
            var owlCarousel = $('#owl-carousel'),
                owlItems = owlCarousel.attr('data-items'),
                owlCarouselSlider = $('#owl-carousel-slider'),
                owlNav = owlCarouselSlider.attr('data-nav');
            // owlSliderPagination = owlCarouselSlider.attr('data-pagination');

            owlCarousel.owlCarousel({
                items: owlItems,
                dots:false,
                navigation: true,
                autoHeight : true,
                navigationText: ['', '']
            });

            owlCarouselSlider.owlCarousel({
                slideSpeed: 300,
                paginationSpeed: 400,
                // pagination: owlSliderPagination,
                singleItem: true,
                navigation: true,
                autoHeight : true,
                lazyLoad : true,
                navigationText: ['', ''],
                transitionStyle: 'fade',
                autoPlay: 7000
            });

        // footer always on bottom
        var docHeight = $(window).height();
        var footerHeight = $('#main-footer').height();
        var footerTop = $('#main-footer').position().top + footerHeight;
        if (footerTop < docHeight) {
            $('#main-footer').css('margin-top', (docHeight - footerTop) + 'px');
        }
    }
);


$('.nav-drop').dropit();


$("#price-slider").ionRangeSlider({
    min: 130,
    max: 575,
    type: 'double',
    prefix: "$",
    // maxPostfix: "+",
    prettify: false,
    hasGrid: true
});

$('.i-check, .i-radio').iCheck({
    checkboxClass: 'i-check',
    radioClass: 'i-radio'
});



$('.booking-item-review-expand').click(function(event) {
    console.log('baz');
    var parent = $(this).parent('.booking-item-review-content');
    if (parent.hasClass('expanded')) {
        parent.removeClass('expanded');
    } else {
        parent.addClass('expanded');
    }
});


$('.stats-list-select > li > .booking-item-rating-stars > li').each(function() {
    var list = $(this).parent(),
        listItems = list.children(),
        itemIndex = $(this).index();

    $(this).hover(function() {
        for (var i = 0; i < listItems.length; i++) {
            if (i <= itemIndex) {
                $(listItems[i]).addClass('hovered');
            } else {
                break;
            }
        };
        $(this).click(function() {
            for (var i = 0; i < listItems.length; i++) {
                if (i <= itemIndex) {
                    $(listItems[i]).addClass('selected');
                } else {
                    $(listItems[i]).removeClass('selected');
                }
            };
        });
    }, function() {
        listItems.removeClass('hovered');
    });
});



$('.booking-item-container').children('.booking-item').click(function(event) {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).parent().removeClass('active');
    } else {
        $(this).addClass('active');
        $(this).parent().addClass('active');
        $(this).delay(1500).queue(function() {
            $(this).addClass('viewed')
        });
    }
});


$('.form-group-cc-number input').payment('formatCardNumber');
$('.form-group-cc-date input').payment('formatCardExpiry');
$('.form-group-cc-cvc input').payment('formatCardCVC');


// if ($('#map-canvas').length) {
//     var map,
//         service;

//     jQuery(function($) {
//         $(document).ready(function() {
//             var latlng = new google.maps.LatLng(27.0641911, 88.4666718);
//             var myOptions = {
//                 zoom: 16,
//                 center: latlng,
//                 mapTypeId: google.maps.MapTypeId.ROADMAP,
//                 scrollwheel: false
//             };

//             map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);


//             var marker = new google.maps.Marker({
//                 position: latlng,
//                 map: map
//             });
//             marker.setMap(map);


//             $('a[href="#google-map-tab"]').on('shown.bs.tab', function(e) {
//                 google.maps.event.trigger(map, 'resize');
//                 map.setCenter(latlng);
//             });
//         });
//     });
// }


$('.card-select > li').click(function() {
    self = this;
    $(self).addClass('card-item-selected');
    $(self).siblings('li').removeClass('card-item-selected');
    $('.form-group-cc-number input').click(function() {
        $(self).removeClass('card-item-selected');
    });
});
// Lighbox gallery
$('#popup-gallery').each(function() {
    $(this).magnificPopup({
        delegate: 'a.popup-gallery-image',
        type: 'image',
        image: {
            markup: '<div class="mfp-figure">'+
            '<div class="mfp-close"></div>'+
            '<div class="mfp-img"></div>'+
            '<div class="mfp-bottom-bar">'+
              '<div class="mfp-title"></div>'+
              '<div class="mfp-counter"></div>'+
            '</div>'+
          '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

  cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.

  //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
  // Or the function that should return the title. For example:
  titleSrc: function(item) {
    return item.el.attr('title');
    //return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
  },

  verticalFit: true, // Fits image in area vertically

  tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        },
        gallery: {
            enabled: true
        }
    });
});


// Lighbox image
$('.popup-image').magnificPopup({
    type: 'image'
});

// Lighbox text
$('.popup-text').magnificPopup({
    removalDelay: 500,
    closeBtnInside: true,
    callbacks: {
        beforeOpen: function() {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true
});

// Lightbox iframe
$('.popup-iframe').magnificPopup({
    dispableOn: 700,
    type: 'iframe',
    removalDelay: 160,
    mainClass: 'mfp-fade',
    preloader: false
});


$('.form-group-select-plus').each(function() {
    var self = $(this),
        btnGroup = self.find('.btn-group').first(),
        select = self.find('select');
    btnGroup.children('label').last().click(function() {
        btnGroup.addClass('hidden');
        select.removeClass('hidden');
    });
});
// Responsive videos
$(document).ready(function() {
    $("body").fitVids();
    $("#hotel-info").css("display","block");
    $("#widget-trip-advisor").load("includes/widget-trip-advisor.html", function() {});
    $("#widget-facebook").load("includes/widget-facebook.html", function() {});
});

$(function($) {
    $("#twitter").tweet({
        username: "remtsoy", //!paste here your twitter username!
        count: 3
    });
});

$(function($) {
    $("#twitter-ticker").tweet({
        username: "remtsoy", //!paste here your twitter username!
        page: 1,
        count: 20
    });
});

$(document).ready(function() {
    var ul = $('#twitter-ticker').find(".tweet-list");
    var ticker = function() {
        setTimeout(function() {
            ul.find('li:first').animate({
                marginTop: '-4.7em'
            }, 850, function() {
                $(this).detach().appendTo(ul).removeAttr('style');
            });
            ticker();
        }, 5000);
    };
    ticker();
});
$(function() {
    $('#ri-grid').gridrotator({
        rows: 4,
        columns: 8,
        animType: 'random',
        animSpeed: 1200,
        interval: 1200,
        step: 'random',
        preventClick: false,
        maxStep: 2,
        w992: {
            rows: 5,
            columns: 4
        },
        w768: {
            rows: 6,
            columns: 3
        },
        w480: {
            rows: 8,
            columns: 3
        },
        w320: {
            rows: 5,
            columns: 4
        },
        w240: {
            rows: 6,
            columns: 4
        }
    });

});


$(function() {
    $('#ri-grid-no-animation').gridrotator({
        rows: 4,
        columns: 8,
        slideshow: false,
        w1024: {
            rows: 4,
            columns: 6
        },
        w768: {
            rows: 3,
            columns: 3
        },
        w480: {
            rows: 4,
            columns: 4
        },
        w320: {
            rows: 5,
            columns: 4
        },
        w240: {
            rows: 6,
            columns: 4
        }
    });

});

var tid = setInterval(tagline_vertical_slide, 2500);

// vertical slide
function tagline_vertical_slide() {
    var curr = $("#tagline ul li.active");
    curr.removeClass("active").addClass("vs-out");
    setTimeout(function() {
        curr.removeClass("vs-out");
    }, 500);

    var nextTag = curr.next('li');
    if (!nextTag.length) {
        nextTag = $("#tagline ul li").first();
    }
    nextTag.addClass("active");
}

function abortTimer() { // to be called when you want to stop the timer
    clearInterval(tid);
}