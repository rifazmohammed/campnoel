var rightContentAPI;var segmentCount;var clonerightContent;$(document).ready(function(){$(".nav li>a[href*='/rooms']").parent().addClass("curr");segmentCount=SegmentCompareInfo.Segments.length;$("#SelectRoomsCount").text(var_Note_forSelectRooms.replace("{0}",segmentCount).replace("{1}",segmentCount));InitOnce();BindAction();setState();$(".photowrapper").css("visibility","visible")});function BindAction(){$(".showterms").parent().click(function(){$(".showterms").click();return false});$(".showterms").click(function(){$(this).toggleClass("hideterms");if($(this).is(".hideterms")){$(".f-selopt").show()}else{$(".f-selopt").hide()}return false});$("#btnReset").click(function(){ShowAll();$("#ConditionOfRooms .clone_checkbox").removeClass("checked")});$("#divShowAll").click(function(){ShowAll();$("#ConditionOfRooms .clone_checkbox").removeClass("checked");$(".showterms").click()});$("#btnOK").click(function(){CheckCondition();$(".showterms").click()});$(".clone_checkbox").click(function(){$(this).toggleClass("checked")});$("#tdPhotoLeft>span>em").click(function(){$(this).toggleClass("show");if($(this).attr("class").indexOf("show")>0){$(this).parent().parent().attr("class","collapsible");$(".photo_right").addClass("folded")}else{$(this).parent().parent().attr("class","photo_left");$(".photo_right").removeClass("folded")}resetHeight();return false});$(".collapsible>span>em").click(function(){$(this).toggleClass("show");$(".trAmenities").toggle();resetHeight();return false});$("#details>span,#tdPhotoLeft>span,.collapsible>span").click(function(){$("em",$(this)).click();return false});$("#details>span>em").click(function(){$(this).toggleClass("show");$(".details").toggle();resetHeight();return false})}function InitOnce(){$(".amenities tr:odd").addClass("oddtr");$(".amenities tr:even").addClass("graytr");InitScrollPanel();$("#rightContent .roomsinfo tr.details>td>span").each(function(){$(this).wordLimit(160,$("#rightContent .roomsinfo tr.details>td:eq(0)"))});$("#trSegmentNames>td>span>a").wordLimit(150,$("#trSegmentNames>td:eq(0)"));$("#ConditionOfRooms .f-unit>div>span").each(function(){$(this).attr("detail",HTMLEncode($(this).html()))});$("#ConditionOfRooms .f-unit>div>span").wordLimit();$(".leftcol .details>td>span").wordLimit();$(".leftcol .trAmenities>td>span").wordLimit();$(".leftcol .f-option .f-unit label").wordLimit();$("#compareList tr td>span").each(function(){$(this).attr("title",$(this).text())})}function InitScrollPanel(){$("#divCondition").show();$("#ConditionOfRooms").jScrollPane({showArrows:true,autoReinitialise:true});$("#ConditionOfRooms").css("width","");$("#ConditionOfRooms>.jspContainer").css("width","");$("#divCondition").hide();rightScrollPanel()}function rightScrollPanel(){if(rightContentAPI){rightContentAPI.destroy()}$("#rightContent .scrollContent").unbind("").bind("jsp-initialised",function(a,b){createBar()}).bind("jsp-scroll-x",function(a,d,b,c){$("#topScrollBar .jspDrag").css("left",$("#bottomScrollBar .jspDrag").css("left"));$("#topScrollBar .jspArrowLeft").attr("class",$("#bottomScrollBar .jspArrowLeft").attr("class"));$("#topScrollBar .jspArrowRight").css("class",$("#bottomScrollBar .jspArrowRight").attr("class"))}).jScrollPane({showArrows:true,autoReinitialise:true,speed:80,horizontalGutter:30});rightContentAPI=$("#rightContent .scrollContent").data("jsp")}function resetHeight(){$("#rightContent .jspContainer").height($("#rightContent .jspPane").height())}function ShowAll(){$("#rightContent table>tbody>tr>td").show();$("#SelectRoomsCount").text(var_Note_forSelectRooms.replace("{0}",segmentCount).replace("{1}",segmentCount));resetState()}function CheckCondition(){var d=segmentCount;var b={BedTypeList:[],Details:[]};$("#BedTypeList .checked").each(function(){b.BedTypeList.push($.trim($(this).attr("cid")))});$("#ConditionOfRooms .customizefields").each(function(){var e=$(this);var f={ID:e.attr("cid"),Values:[]};$(".checked",e).each(function(){f.Values.push($.trim(HTMLDecode($("span",$(this)).attr("detail"))).toLowerCase())});b.Details.push(f)});$("#rightContent table>tbody>tr>td").show();for(var a=0;a<SegmentCompareInfo.Segments.length;a++){var c=SegmentCompareInfo.Segments[a];if(b.BedTypeList.length>0){if(!CheckBedTypeList(SegmentCompareInfo.Segments[a],b.BedTypeList)){d--;hideSegment(SegmentCompareInfo.Segments[a].ID);continue}}if(!CheckDetails(SegmentCompareInfo.Segments[a],b.Details)){d--;hideSegment(SegmentCompareInfo.Segments[a].ID)}}$("#SelectRoomsCount").text(var_Note_forSelectRooms.replace("{0}",d).replace("{1}",segmentCount));resetState()}function CheckDetails(c,a){for(var b=0;b<a.length;b++){if(a[b].Values.length==0){continue}if($.inArray(GetDetailsValue(c,a[b].ID).toLowerCase(),a[b].Values)==-1){return false}}return true}function GetDetailsValue(c,a){for(var b=0;b<c.Details.length;b++){if(c.Details[b].ID==a){return c.Details[b].DetailValue}}return""}function CheckBedTypeList(c,a){for(var b=0;b<a.length;b++){if($.inArray(a[b],c.Beds)>-1){return true}}return false}function hideSegment(a){$("#rightContent table>tbody>tr>td[segmentid='"+a+"']").hide()}var rightContentHorizontalBar="";function resetState(){rightContentAPI.scrollTo(0,0);if($.browser.msie&&$.browser.version=="7.0"){if($("#rightContent .jspHorizontalBar").length>0){}else{}}rightScrollPanel();$("#rightContent table>tbody>tr").each(function(){$("td:visible",$(this)).removeClass("last");$("td:visible",$(this)).last().addClass("last")})}function createBar(){$("#rightContent .jspContainer>.jspHorizontalBar").attr("id","bottomScrollBar");$("#topScrollBar").remove();var a=$("#rightContent .jspContainer");a.append(a.find(">.jspHorizontalBar").clone(true).css("bottom","auto").attr("id","topScrollBar").addClass("topScrollBar"))}function setState(){$("#rightContent table>tbody>tr").each(function(){$("td:visible",$(this)).removeClass("last");$("td:visible",$(this)).last().addClass("last")})};