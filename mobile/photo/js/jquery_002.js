(function(a){a.fn.ellipsis=function(d,b,e,c){return a(this).each(function(){var i=a(this);var u=function(t,z){i.html(z);i.animate({height:t},"normal",null,function(){i.ellipsis(true,true,e,c)})};if(i.css("overflow")=="hidden"){var r=i.html();var h=i.width();var g=i.height();var o;if(e){b=true;o=" <a class='MoreLessTag' href='#' >"+e+"</a>"}else{o=""}o="";var v=a(this.cloneNode(true)).hide().css({position:"absolute",overflow:"visible","max-width":"none","max-height":"none"});if(d){v.css("height","auto").width(h)}else{v.css("width","auto")}i.after(v);var l=v.height();var f=(d)?g:h;var w=(d)?v.height():v.width();var k=false,j=false;if(w>f){var n=0;var m=r.length;while(n<=m){var y=(n+m)/2;var x=r.substr(0,y);v.html(x+"&hellip;"+o);w=(d)?v.height():v.width();if(w>f){if(j){k=true}m=y-1;if(n>m){y=(m+m-2)/2;x=r.substr(0,y);v.html(x+"&hellip;"+o);break}}else{if(w<f){n=y+1}else{if(k&&j&&((m-n)/m<0.2)){break}j=true;n=y+1}}}}i.html(v.html());v.remove();if(e){jQuery(".MoreLessTag",this).click(function(t){t.preventDefault();i.html(r);i.animate({height:l},"normal",null,function(){});jQuery(".MoreLessTag",i).click(function(z){z.preventDefault();u(g,r)})})}else{var s=new RegExp(/<\/?[^>]+>/gi);i.attr("alt",r.replace(s,""));i.attr("title",r.replace(s,""))}if(b==true){var q=i.width();var p=i.height();i.one("resize",function(){if(i.width()!=q||(d&&i.height!=p)){i.html(r);i.ellipsis(d,b,e,c)}})}}})}})(jQuery);