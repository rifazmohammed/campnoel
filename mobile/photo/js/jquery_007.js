var limitCount=300;(function(a){a.fn.wordLimit=function(c,b){if(limitCount--<=0){return}this.each(function(){if(!c){var d=a(this.cloneNode(true)).hide().css({position:"absolute",width:"auto",overflow:"visible","max-width":"10000px"});a(this).after(d);if(d.width()>a(this).width()){if(a(this).attr("title")==""||a(this).attr("title")==undefined){a(this).attr("title",a.trim(a(this).text()))}a(this).text(a(this).text().substring(0,a(this).text().length-4));a(this).html(a(this).html()+"...");d.remove();a(this).wordLimit()}else{d.remove();return}}else{if(c==1){var d=a(this.cloneNode(true)).hide().css({position:"absolute",height:"auto",overflow:"visible"});a(this).after(d);if(d.height()>a(this).height()){if(a(this).attr("title")==""||a(this).attr("title")==undefined){a(this).attr("title",a.trim(a(this).text()));var e=a.trim(a(this).text());var h=e.length*a(this).height()/d.height();d.text(e.substring(0,h));for(var f=0;f<50;f++){if(d.height()<=a(this).height()){d.text(e.substring(0,h+50*f))}else{break}}a(this).text(d.text())}a(this).text(a(this).text().substring(0,a(this).text().length-4));a(this).html(a(this).html()+"...");d.remove();a(this).wordLimit(1)}else{d.remove();return}}else{var g=c;var d=a(this.cloneNode(true)).hide().css({position:"absolute",width:"auto","max-width":"10000px",overflow:"visible"});d.show();b.append(d);if(d.width()>g){if(a(this).attr("title")==""||a(this).attr("title")==undefined){a(this).attr("title",a.trim(a(this).text()))}a(this).text(a(this).text().substring(0,a(this).text().length-4));a(this).html(a(this).text()+"...");d.remove();a(this).wordLimit(g,b)}else{d.remove();return}}}})}})(jQuery);