!function(t,e,n,o,i){function r(t){var e="bez_"+o.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof o.easing[e]){var n=function(t,e){var n=[null,null],o=[null,null],i=[null,null],r=function(r,a){return i[a]=3*t[a],o[a]=3*(e[a]-t[a])-i[a],n[a]=1-i[a]-o[a],r*(i[a]+r*(o[a]+r*n[a]))},a=function(t){return i[0]+t*(2*o[0]+3*n[0]*t)},s=function(t){for(var e,n=t,o=0;++o<14&&(e=r(n,0)-t,!(Math.abs(e)<.001));)n-=e/a(n);return n};return function(t){return r(s(t),1)}};o.easing[e]=function(e,o,i,r,a){return r*n([t[0],t[1]],[t[2],t[3]])(o/a)+i}}return e}function a(){}function s(t,e,n){return Math.max(isNaN(e)?-1/0:e,Math.min(isNaN(n)?1/0:n,t))}function u(t){return t.match(/ma/)&&t.match(/-?\d+(?!d)/g)[t.match(/3d/)?12:4]}function c(t){return Pe?+u(t.css("transform")):+t.css("left").replace("px","")}function l(t,e){var n={};return Pe?n.transform="translate3d("+(t+(e?.001:0))+"px,0,0)":n.left=t,n}function f(t){return{"transition-duration":t+"ms"}}function d(t,e){return+String(t).replace(e||"px","")||i}function h(t){return/%$/.test(t)&&d(t,"%")}function m(t,e){return h(t)/100*e||d(t)}function p(t){return(!!d(t)||!!d(t,"%"))&&t}function v(t,e,n,o){return(t-(o||0))*(e+(n||0))}function g(t,e,n,o){return-Math.round(t/(e+(n||0))-(o||0))}function w(t){var e=t.data();if(!e.tEnd){var n=t[0],o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};n.addEventListener(o[de.prefixed("transition")],function(t){e.tProp&&t.propertyName.match(e.tProp)&&e.onEndFn()},!1),e.tEnd=!0}}function y(t,e,n,o){var i,r=t.data();r&&(r.onEndFn=function(){i||(i=!0,clearTimeout(r.tT),n())},r.tProp=e,clearTimeout(r.tT),r.tT=setTimeout(function(){r.onEndFn()},1.5*o),w(t))}function x(t,e,n){if(t.length){var o=t.data();Pe?(t.css(f(0)),o.onEndFn=a,clearTimeout(o.tT)):t.stop();var i=b(e,function(){return c(t)});return t.css(l(i,n)),i}}function b(){for(var t,e=0,n=arguments.length;n>e&&(t=e?arguments[e]():arguments[e],"number"!=typeof t);e++);return t}function _(t,e){return Math.round(t+(e-t)/1.5)}function C(){return C.p=C.p||("https:"===n.protocol?"https://":"http://"),C.p}function T(t){var n=e.createElement("a");return n.href=t,n}function k(t,e){if("string"!=typeof t)return t;t=T(t);var n,o;if(t.host.match(/youtube\.com/)&&t.search){if(n=t.search.split("v=")[1]){var i=n.indexOf("&");-1!==i&&(n=n.substring(0,i)),o="youtube"}}else t.host.match(/youtube\.com|youtu\.be/)?(n=t.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),o="youtube"):t.host.match(/vimeo\.com/)&&(o="vimeo",n=t.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return n&&o||!e||(n=t.href,o="custom"),n?{id:n,type:o,s:t.search.replace(/^\?/,"")}:!1}function M(t,e,n){var i,r,a=t.video;return"youtube"===a.type?(r=C()+"img.youtube.com/vi/"+a.id+"/default.jpg",i=r.replace(/\/default.jpg$/,"/hqdefault.jpg"),t.thumbsReady=!0):"vimeo"===a.type?o.ajax({url:C()+"vimeo.com/api/v2/video/"+a.id+".json",dataType:"jsonp",success:function(o){t.thumbsReady=!0,S(e,{img:o[0].thumbnail_large,thumb:o[0].thumbnail_small},t.i,n)}}):t.thumbsReady=!0,{img:i,thumb:r}}function S(t,e,n,i){for(var r=0,a=t.length;a>r;r++){var s=t[r];if(s.i===n&&s.thumbsReady){var u={videoReady:!0};u[Ve]=u[Qe]=u[Xe]=!1,i.splice(r,1,o.extend({},s,u,e));break}}}function F(t){function e(t,e,i){var r=t.children("img").eq(0),a=t.attr("href"),s=t.attr("src"),u=r.attr("src"),c=e.video,l=i?k(a,c===!0):!1;l?a=!1:l=c,n(t,r,o.extend(e,{video:l,img:e.img||a||s||u,thumb:e.thumb||u||s||a}))}function n(t,e,n){var i=n.thumb&&n.img!==n.thumb,r=d(n.width||t.attr("width")),a=d(n.height||t.attr("height"));o.extend(n,{width:r,height:a,thumbratio:H(n.thumbratio||d(n.thumbwidth||e&&e.attr("width")||i||r)/d(n.thumbheight||e&&e.attr("height")||i||a))})}var i=[];return t.children().each(function(){var t=o(this),r=W(o.extend(t.data(),{id:t.attr("id")}));if(t.is("a, img"))e(t,r,!0);else{if(t.is(":empty"))return;n(t,null,o.extend(r,{html:this,_html:t.html()}))}i.push(r)}),i}function E(t){return 0===t.offsetWidth&&0===t.offsetHeight}function P(t){return!o.contains(e.documentElement,t)}function j(t,e,n){t()?e():setTimeout(function(){j(t,e)},n||100)}function N(t){n.replace(n.protocol+"//"+n.host+n.pathname.replace(/^\/?/,"/")+n.search+"#"+t)}function $(t,e,n){var o=t.data(),i=o.measures;if(i&&(!o.l||o.l.W!==i.width||o.l.H!==i.height||o.l.r!==i.ratio||o.l.w!==e.w||o.l.h!==e.h||o.l.m!==n)){var r=i.width,a=i.height,u=e.w/e.h,c=i.ratio>=u,l="scaledown"===n,f="contain"===n,d="cover"===n;c&&(l||f)||!c&&d?(r=s(e.w,0,l?r:1/0),a=r/i.ratio):(c&&d||!c&&(l||f))&&(a=s(e.h,0,l?a:1/0),r=a*i.ratio),t.css({width:Math.ceil(r),height:Math.ceil(a),marginLeft:Math.floor(-r/2),marginTop:Math.floor(-a/2)}),o.l={W:i.width,H:i.height,r:i.ratio,w:e.w,h:e.h,m:n}}return!0}function q(t,e){var n=t[0];n.styleSheet?n.styleSheet.cssText=e:t.html(e)}function L(t,e,n){return e===n?!1:e>=t?"left":t>=n?"right":"left right"}function z(t,e,n,o){if(!n)return!1;if(!isNaN(t))return t-(o?0:1);for(var i,r=0,a=e.length;a>r;r++){var s=e[r];if(s.id===t){i=r;break}}return i}function A(t,e,n){n=n||{},t.each(function(){var t,i=o(this),r=i.data();r.clickOn||(r.clickOn=!0,o.extend(U(i,{onStart:function(e){t=e,(n.onStart||a).call(this,e)},onMove:n.onMove||a,onTouchEnd:n.onTouchEnd||a,onEnd:function(n){n.moved||e.call(this,t)}}),{noMove:!0}))})}function O(t,e){return'<div class="'+t+'">'+(e||"")+"</div>"}function I(t){for(var e=t.length;e;){var n=Math.floor(Math.random()*e--),o=t[e];t[e]=t[n],t[n]=o}return t}function R(t){return"[object Array]"==Object.prototype.toString.call(t)&&o.map(t,function(t){return o.extend({},t)})}function D(t,e){Me.scrollLeft(t).scrollTop(e)}function W(t){if(t){var e={};return o.each(t,function(t,n){e[t.toLowerCase()]=n}),e}}function H(t){if(t){var e=+t;return isNaN(e)?(e=t.split("/"),+e[0]/+e[1]||i):e}}function K(t,e){t.preventDefault(),e&&t.stopPropagation()}function B(t){return t?">":"<"}function V(t,e){var n=t.data(),i=Math.round(e.pos),r=function(){n.sliding=!1,(e.onEnd||a)()};"undefined"!=typeof e.overPos&&e.overPos!==e.pos&&(i=e.overPos,r=function(){V(t,o.extend({},e,{overPos:e.pos,time:Math.max(Ie,e.time/2)}))});var s=o.extend(l(i,e._001),e.width&&{width:e.width});n.sliding=!0,Pe?(t.css(o.extend(f(e.time),s)),e.time>10?y(t,"transform",r,e.time):r()):t.stop().animate(s,e.time,Ue,r)}function X(t,e,n,i,r,s){var u="undefined"!=typeof s;if(u||(r.push(arguments),Array.prototype.push.call(arguments,r.length),!(r.length>1))){t=t||o(t),e=e||o(e);var c=t[0],l=e[0],f="crossfade"===i.method,d=function(){if(!d.done){d.done=!0;var t=(u||r.shift())&&r.shift();t&&X.apply(this,t),(i.onEnd||a)(!!t)}},h=i.time/(s||1);n.removeClass(zt+" "+Lt),t.stop().addClass(zt),e.stop().addClass(Lt),f&&l&&t.fadeTo(0,0),t.fadeTo(f?h:0,1,f&&d),e.fadeTo(h,0,d),c&&f||l||d()}}function Q(t){var e=(t.touches||[])[0]||t;t._x=e.pageX,t._y=e.clientY,t._now=o.now()}function U(n,i){function r(t){return h=o(t.target),b.checked=v=g=y=!1,f||b.flow||t.touches&&t.touches.length>1||t.which>1||_e&&_e.type!==t.type&&Te||(v=i.select&&h.is(i.select,x))?v:(p="touchstart"===t.type,g=h.is("a, a *",x),m=b.control,w=b.noMove||b.noSwipe||m?16:b.snap?0:4,Q(t),d=_e=t,Ce=t.type.replace(/down|start/,"move").replace(/Down/,"Move"),(i.onStart||a).call(x,t,{control:m,$target:h}),f=b.flow=!0,void((!p||b.go)&&K(t)))}function s(t){if(t.touches&&t.touches.length>1||ze&&!t.isPrimary||Ce!==t.type||!f)return f&&u(),void(i.onTouchEnd||a)();Q(t);var e=Math.abs(t._x-d._x),n=Math.abs(t._y-d._y),o=e-n,r=(b.go||b.x||o>=0)&&!b.noSwipe,s=0>o;p&&!b.checked?(f=r)&&K(t):(K(t),(i.onMove||a).call(x,t,{touch:p})),!y&&Math.sqrt(Math.pow(e,2)+Math.pow(n,2))>w&&(y=!0),b.checked=b.checked||r||s}function u(t){(i.onTouchEnd||a)();var e=f;b.control=f=!1,e&&(b.flow=!1),!e||g&&!b.checked||(t&&K(t),Te=!0,clearTimeout(ke),ke=setTimeout(function(){Te=!1},1e3),(i.onEnd||a).call(x,{moved:y,$target:h,control:m,touch:p,startEvent:d,aborted:!t||"MSPointerCancel"===t.type}))}function c(){b.flow||setTimeout(function(){b.flow=!0},10)}function l(){b.flow&&setTimeout(function(){b.flow=!1},Oe)}var f,d,h,m,p,v,g,w,y,x=n[0],b={};return ze?(x[Le]("MSPointerDown",r,!1),e[Le]("MSPointerMove",s,!1),e[Le]("MSPointerCancel",u,!1),e[Le]("MSPointerUp",u,!1)):(x[Le]&&(x[Le]("touchstart",r,!1),x[Le]("touchmove",s,!1),x[Le]("touchend",u,!1),e[Le]("touchstart",c,!1),e[Le]("touchend",l,!1),e[Le]("touchcancel",l,!1),t[Le]("scroll",l,!1)),n.on("mousedown",r),Se.on("mousemove",s).on("mouseup",u)),n.on("click","a",function(t){b.checked&&K(t)}),b}function Y(t,e){function n(n,o){M=!0,c=f=n._x,v=n._now,p=[[v,c]],d=h=E.noMove||o?0:x(t,(e.getPos||a)(),e._001),(e.onStart||a).call(S,n)}function i(t,e){w=E.min,y=E.max,b=E.snap,C=t.altKey,M=k=!1,T=e.control,T||F.sliding||n(t)}function r(o,i){E.noSwipe||(M||n(o),f=o._x,p.push([o._now,f]),h=d-(c-f),m=L(h,w,y),w>=h?h=_(h,w):h>=y&&(h=_(h,y)),E.noMove||(t.css(l(h,e._001)),k||(k=!0,i.touch||ze||t.addClass(Gt)),(e.onMove||a).call(S,o,{pos:h,edge:m})))}function u(i){if(!E.noSwipe||!i.moved){M||n(i.startEvent,!0),i.touch||ze||t.removeClass(Gt),g=o.now();for(var r,u,c,l,m,v,x,_,T,k=g-Oe,F=null,P=Ie,j=e.friction,N=p.length-1;N>=0;N--){if(r=p[N][0],u=Math.abs(r-k),null===F||c>u)F=r,l=p[N][1];else if(F===k||u>c)break;c=u}x=s(h,w,y);var $=l-f,q=$>=0,L=g-F,z=L>Oe,A=!z&&h!==d&&x===h;b&&(x=s(Math[A?q?"floor":"ceil":"round"](h/b)*b,w,y),w=y=x),A&&(b||x===h)&&(T=-($/L),P*=s(Math.abs(T),e.timeLow,e.timeHigh),m=Math.round(h+T*P/j),b||(x=m),(!q&&m>y||q&&w>m)&&(v=q?w:y,_=m-v,b||(x=v),_=s(x+.03*_,v-50,v+50),P=Math.abs((h-_)/(T/j)))),P*=C?10:1,(e.onEnd||a).call(S,o.extend(i,{moved:i.moved||z&&b,pos:h,newPos:x,overPos:_,time:P}))}}var c,f,d,h,m,p,v,g,w,y,b,C,T,k,M,S=t[0],F=t.data(),E={};return E=o.extend(U(e.$wrap,{onStart:i,onMove:r,onTouchEnd:e.onTouchEnd,onEnd:u,select:e.select}),E)}function G(t,e){var n,i,r,s=t[0],u={prevent:{}};return s[Le]&&s[Le](Ae,function(t){var s=t.wheelDeltaY||-1*t.deltaY||0,c=t.wheelDeltaX||-1*t.deltaX||0,l=Math.abs(c)>Math.abs(s),f=B(0>c),d=i===f,h=o.now(),m=Oe>h-r;i=f,r=h,l&&u.ok&&(!u.prevent[f]||n)&&(K(t,!0),n&&d&&m||(e.shift&&(n=!0,clearTimeout(u.t),u.t=setTimeout(function(){n=!1},Re)),(e.onEnd||a)(t,e.shift?f:c)))},!1),u}function J(){o.each(o.Fotorama.instances,function(t,e){e.index=t})}function Z(t){o.Fotorama.instances.push(t),J()}function tt(t){o.Fotorama.instances.splice(t.index,1),J()}var et="fotorama",nt="fullscreen",ot=et+"__wrap",it=ot+"--css2",rt=ot+"--css3",at=ot+"--video",st=ot+"--fade",ut=ot+"--slide",ct=ot+"--no-controls",lt=ot+"--no-shadows",ft=ot+"--pan-y",dt=ot+"--rtl",ht=ot+"--only-active",mt=ot+"--no-captions",pt=ot+"--toggle-arrows",vt=et+"__stage",gt=vt+"__frame",wt=gt+"--video",yt=vt+"__shaft",xt=et+"__grab",bt=et+"__pointer",_t=et+"__arr",Ct=_t+"--disabled",Tt=_t+"--prev",kt=_t+"--next",Mt=et+"__nav",St=Mt+"-wrap",Ft=Mt+"__shaft",Et=Mt+"--dots",Pt=Mt+"--thumbs",jt=Mt+"__frame",Nt=jt+"--dot",$t=jt+"--thumb",qt=et+"__fade",Lt=qt+"-front",zt=qt+"-rear",At=et+"__shadow",Ot=At+"s",It=Ot+"--left",Rt=Ot+"--right",Dt=et+"__active",Wt=et+"__select",Ht=et+"--hidden",Kt=et+"--fullscreen",Bt=et+"__fullscreen-icon",Vt=et+"__error",Xt=et+"__loading",Qt=et+"__loaded",Ut=Qt+"--full",Yt=Qt+"--img",Gt=et+"__grabbing",Jt=et+"__img",Zt=Jt+"--full",te=et+"__dot",ee=et+"__thumb",ne=ee+"-border",oe=et+"__html",ie=et+"__video",re=ie+"-play",ae=ie+"-close",se=et+"__caption",ue=et+"__caption__wrap",ce=et+"__spinner",le=o&&o.fn.jquery.split(".");if(!le||le[0]<1||1==le[0]&&le[1]<8)throw"Fotorama requires jQuery 1.8 or later and will not run without it.";var fe={},de=function(t,e,n){function o(t){g.cssText=t}function i(t,e){return typeof t===e}function r(t,e){return!!~(""+t).indexOf(e)}function a(t,e){for(var o in t){var i=t[o];if(!r(i,"-")&&g[i]!==n)return"pfx"==e?i:!0}return!1}function s(t,e,o){for(var r in t){var a=e[t[r]];if(a!==n)return o===!1?t[r]:i(a,"function")?a.bind(o||e):a}return!1}function u(t,e,n){var o=t.charAt(0).toUpperCase()+t.slice(1),r=(t+" "+x.join(o+" ")+o).split(" ");return i(e,"string")||i(e,"undefined")?a(r,e):(r=(t+" "+b.join(o+" ")+o).split(" "),s(r,e,n))}var c,l,f,d="2.6.2",h={},m=e.documentElement,p="modernizr",v=e.createElement(p),g=v.style,w=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),y="Webkit Moz O ms",x=y.split(" "),b=y.toLowerCase().split(" "),_={},C=[],T=C.slice,k=function(t,n,o,i){var r,a,s,u,c=e.createElement("div"),l=e.body,f=l||e.createElement("body");if(parseInt(o,10))for(;o--;)s=e.createElement("div"),s.id=i?i[o]:p+(o+1),c.appendChild(s);return r=["&#173;",'<style id="s',p,'">',t,"</style>"].join(""),c.id=p,(l?c:f).innerHTML+=r,f.appendChild(c),l||(f.style.background="",f.style.overflow="hidden",u=m.style.overflow,m.style.overflow="hidden",m.appendChild(f)),a=n(c,t),l?c.parentNode.removeChild(c):(f.parentNode.removeChild(f),m.style.overflow=u),!!a},M={}.hasOwnProperty;f=i(M,"undefined")||i(M.call,"undefined")?function(t,e){return e in t&&i(t.constructor.prototype[e],"undefined")}:function(t,e){return M.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=T.call(arguments,1),o=function(){if(this instanceof o){var i=function(){};i.prototype=e.prototype;var r=new i,a=e.apply(r,n.concat(T.call(arguments)));return Object(a)===a?a:r}return e.apply(t,n.concat(T.call(arguments)))};return o}),_.csstransforms3d=function(){var t=!!u("perspective");return t};for(var S in _)f(_,S)&&(l=S.toLowerCase(),h[l]=_[S](),C.push((h[l]?"":"no-")+l));return h.addTest=function(t,e){if("object"==typeof t)for(var o in t)f(t,o)&&h.addTest(o,t[o]);else{if(t=t.toLowerCase(),h[t]!==n)return h;e="function"==typeof e?e():e,"undefined"!=typeof enableClasses&&enableClasses&&(m.className+=" "+(e?"":"no-")+t),h[t]=e}return h},o(""),v=c=null,h._version=d,h._prefixes=w,h._domPrefixes=b,h._cssomPrefixes=x,h.testProp=function(t){return a([t])},h.testAllProps=u,h.testStyles=k,h.prefixed=function(t,e,n){return e?u(t,e,n):u(t,"pfx")},h}(t,e),he={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},me="webkit moz o ms khtml".split(" ");if("undefined"!=typeof e.cancelFullScreen)he.ok=!0;else for(var pe=0,ve=me.length;ve>pe;pe++)if(he.prefix=me[pe],"undefined"!=typeof e[he.prefix+"CancelFullScreen"]){he.ok=!0;break}he.ok&&(he.event=he.prefix+"fullscreenchange",he.is=function(){switch(this.prefix){case"":return e.fullScreen;case"webkit":return e.webkitIsFullScreen;default:return e[this.prefix+"FullScreen"]}},he.request=function(t){return""===this.prefix?t.requestFullScreen():t[this.prefix+"RequestFullScreen"]()},he.cancel=function(){return""===this.prefix?e.cancelFullScreen():e[this.prefix+"CancelFullScreen"]()});var ge,we={lines:12,length:5,width:2,radius:7,corners:1,rotate:15,color:"rgba(128, 128, 128, .75)",hwaccel:!0},ye={top:"auto",left:"auto",className:""};!function(t,e){ge=e()}(this,function(){function t(t,n){var o,i=e.createElement(t||"div");for(o in n)i[o]=n[o];return i}function n(t){for(var e=1,n=arguments.length;n>e;e++)t.appendChild(arguments[e]);return t}function o(t,e,n,o){var i=["opacity",e,~~(100*t),n,o].join("-"),r=.01+n/o*100,a=Math.max(1-(1-t)/e*(100-r),t),s=d.substring(0,d.indexOf("Animation")).toLowerCase(),u=s&&"-"+s+"-"||"";return m[i]||(p.insertRule("@"+u+"keyframes "+i+"{0%{opacity:"+a+"}"+r+"%{opacity:"+t+"}"+(r+.01)+"%{opacity:1}"+(r+e)%100+"%{opacity:"+t+"}100%{opacity:"+a+"}}",p.cssRules.length),m[i]=1),i}function r(t,e){var n,o,r=t.style;for(e=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<h.length;o++)if(n=h[o]+e,r[n]!==i)return n;return r[e]!==i?e:void 0}function a(t,e){for(var n in e)t.style[r(t,n)||n]=e[n];return t}function s(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]===i&&(t[o]=n[o])}return t}function u(t){for(var e={x:t.offsetLeft,y:t.offsetTop};t=t.offsetParent;)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function c(t,e){return"string"==typeof t?t:t[e%t.length]}function l(t){return"undefined"==typeof this?new l(t):void(this.opts=s(t||{},l.defaults,v))}function f(){function e(e,n){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}p.addRule(".spin-vml","behavior:url(#default#VML)"),l.prototype.lines=function(t,o){function i(){return a(e("group",{coordsize:l+" "+l,coordorigin:-u+" "+-u}),{width:l,height:l})}function r(t,r,s){n(d,n(a(i(),{rotation:360/o.lines*t+"deg",left:~~r}),n(a(e("roundrect",{arcsize:o.corners}),{width:u,height:o.width,left:o.radius,top:-o.width>>1,filter:s}),e("fill",{color:c(o.color,t),opacity:o.opacity}),e("stroke",{opacity:0}))))}var s,u=o.length+o.width,l=2*u,f=2*-(o.width+o.length)+"px",d=a(i(),{position:"absolute",top:f,left:f});if(o.shadow)for(s=1;s<=o.lines;s++)r(s,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(s=1;s<=o.lines;s++)r(s);return n(t,d)},l.prototype.opacity=function(t,e,n,o){var i=t.firstChild;o=o.shadow&&o.lines||0,i&&e+o<i.childNodes.length&&(i=i.childNodes[e+o],i=i&&i.firstChild,i=i&&i.firstChild,i&&(i.opacity=n))}}var d,h=["webkit","Moz","ms","O"],m={},p=function(){var o=t("style",{type:"text/css"});return n(e.getElementsByTagName("head")[0],o),o.sheet||o.styleSheet}(),v={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};l.defaults={},s(l.prototype,{spin:function(e){this.stop();var n,o,i=this,r=i.opts,s=i.el=a(t(0,{className:r.className}),{position:r.position,width:0,zIndex:r.zIndex}),c=r.radius+r.length+r.width;if(e&&(e.insertBefore(s,e.firstChild||null),o=u(e),n=u(s),a(s,{left:("auto"==r.left?o.x-n.x+(e.offsetWidth>>1):parseInt(r.left,10)+c)+"px",top:("auto"==r.top?o.y-n.y+(e.offsetHeight>>1):parseInt(r.top,10)+c)+"px"})),s.setAttribute("role","progressbar"),i.lines(s,i.opts),!d){var l,f=0,h=(r.lines-1)*(1-r.direction)/2,m=r.fps,p=m/r.speed,v=(1-r.opacity)/(p*r.trail/100),g=p/r.lines;!function w(){f++;for(var t=0;t<r.lines;t++)l=Math.max(1-(f+(r.lines-t)*g)%p*v,r.opacity),i.opacity(s,t*r.direction+h,l,r);i.timeout=i.el&&setTimeout(w,~~(1e3/m))}()}return i},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=i),this},lines:function(e,i){function r(e,n){return a(t(),{position:"absolute",width:i.length+i.width+"px",height:i.width+"px",background:e,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/i.lines*u+i.rotate)+"deg) translate("+i.radius+"px,0)",borderRadius:(i.corners*i.width>>1)+"px"})}for(var s,u=0,l=(i.lines-1)*(1-i.direction)/2;u<i.lines;u++)s=a(t(),{position:"absolute",top:1+~(i.width/2)+"px",transform:i.hwaccel?"translate3d(0,0,0)":"",opacity:i.opacity,animation:d&&o(i.opacity,i.trail,l+u*i.direction,i.lines)+" "+1/i.speed+"s linear infinite"}),i.shadow&&n(s,a(r("#000","0 0 4px #000"),{top:"2px"})),n(e,n(s,r(c(i.color,u),"0 0 1px rgba(0,0,0,.1)")));return e},opacity:function(t,e,n){e<t.childNodes.length&&(t.childNodes[e].style.opacity=n)}});var g=a(t("group"),{behavior:"url(#default#VML)"});return!r(g,"transform")&&g.adj?f():d=r(g,"animation"),l});var xe,be,_e,Ce,Te,ke,Me=o(t),Se=o(e),Fe="quirks"===n.hash.replace("#",""),Ee=de.csstransforms3d,Pe=Ee&&!Fe,je=Ee||"CSS1Compat"===e.compatMode,Ne=he.ok,$e=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),qe=!Pe||$e,Le="addEventListener",ze=navigator.msPointerEnabled,Ae="onwheel"in e.createElement("div")?"wheel":e.onmousewheel!==i?"mousewheel":"DOMMouseScroll",Oe=250,Ie=300,Re=1400,De=5e3,We=2,He=64,Ke=500,Be=333,Ve="$stageFrame",Xe="$navDotFrame",Qe="$navThumbFrame",Ue=r([.1,0,.25,1]),Ye=99999,Ge={width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,margin:We,glimpse:0,nav:"dots",navposition:"bottom",navwidth:null,thumbwidth:He,thumbheight:He,thumbmargin:We,thumbborderwidth:We,allowfullscreen:!1,fit:"contain",transition:"slide",clicktransition:null,transitionduration:Ie,captions:!0,hash:!1,startindex:0,loop:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,arrows:!0,click:!0,swipe:!0,trackpad:!0,shuffle:!1,direction:"ltr",shadows:!0,spinner:null},Je={left:!0,right:!0,down:!1,up:!1,space:!1,home:!1,end:!1};jQuery.Fotorama=function(t,i){function r(){o.each(vn,function(t,e){if(!e.i){e.i=oo++;var n=k(e.video,!0);if(n){var o={};e.video=n,e.img||e.thumb?e.thumbsReady=!0:o=M(e,vn,Zn),S(vn,{img:o.img,thumb:o.thumb},e.i,Zn)}}})}function a(t){return Wn[t]||Zn.fullScreen}function u(t){var e="keydown."+et,n="keydown."+et+to,o="resize."+et+to;t?(Se.on(n,function(t){var e,n;xn&&27===t.keyCode?(e=!0,an(xn,!0,!0)):(Zn.fullScreen||i.keyboard&&!Zn.index)&&(27===t.keyCode?(e=!0,Zn.cancelFullScreen()):t.shiftKey&&32===t.keyCode&&a("space")||37===t.keyCode&&a("left")||38===t.keyCode&&a("up")?n="<":32===t.keyCode&&a("space")||39===t.keyCode&&a("right")||40===t.keyCode&&a("down")?n=">":36===t.keyCode&&a("home")?n="<<":35===t.keyCode&&a("end")&&(n=">>")),(e||n)&&K(t),n&&Zn.show({index:n,slow:t.altKey,user:!0})}),Zn.index||Se.off(e).on(e,"textarea, input, select",function(t){!be.hasClass(nt)&&t.stopPropagation()}),Me.on(o,Zn.resize)):(Se.off(n),Me.off(o))}function c(e){e!==c.f&&(e?(t.html("").addClass(et+" "+eo).append(so).before(ro).before(ao),Z(Zn)):(so.detach(),ro.detach(),ao.detach(),t.html(io.urtext).removeClass(eo),tt(Zn)),u(e),c.f=e)}function h(){vn=Zn.data=vn||R(i.data)||F(t),gn=Zn.size=vn.length,!pn.ok&&i.shuffle&&I(vn),r(),So=T(So),gn&&c(!0)}function w(){var t=2>gn||xn;Po.noMove=t||Ln,Po.noSwipe=t||!i.swipe,!In&&co.toggleClass(xt,!Po.noMove&&!Po.noSwipe),ze&&so.toggleClass(ft,!Po.noSwipe)}function y(t){t===!0&&(t=""),i.autoplay=Math.max(+t||De,1.5*On)}function _(){function t(t,n){e[t?"add":"remove"].push(n)}Zn.options=i=W(i),Ln="crossfade"===i.transition||"dissolve"===i.transition,En=i.loop&&(gn>2||Ln)&&(!In||"slide"!==In),On=+i.transitionduration||Ie,Dn="rtl"===i.direction,Wn=o.extend({},i.keyboard&&Je,i.keyboard);var e={add:[],remove:[]};gn>1?(Pn=i.nav,Nn="top"===i.navposition,e.remove.push(Wt),mo.toggle(!!i.arrows)):(Pn=!1,mo.hide()),ie(),yn=new ge(o.extend(we,i.spinner,ye,{direction:Dn?-1:1})),Te(),ke(),i.autoplay&&y(i.autoplay),zn=d(i.thumbwidth)||He,An=d(i.thumbheight)||He,jo.ok=$o.ok=i.trackpad&&!qe,w(),Ue(i,[Eo]),jn="thumbs"===Pn,jn?(fe(gn,"navThumb"),wn=yo,Jn=Qe,q(ro,o.Fotorama.jst.style({w:zn,h:An,b:i.thumbborderwidth,m:i.thumbmargin,s:to,q:!je})),vo.addClass(Pt).removeClass(Et)):"dots"===Pn?(fe(gn,"navDot"),wn=wo,Jn=Xe,vo.addClass(Et).removeClass(Pt)):(Pn=!1,vo.removeClass(Pt+" "+Et)),Pn&&(Nn?po.insertBefore(uo):po.insertAfter(uo),ve.nav=!1,ve(wn,go,"nav")),$n=i.allowfullscreen,$n?(bo.appendTo(uo),qn=Ne&&"native"===$n):(bo.detach(),qn=!1),t(Ln,st),t(!Ln,ut),t(!i.captions,mt),t(Dn,dt),t("always"!==i.arrows,pt),Rn=i.shadows&&!qe,t(!Rn,lt),so.addClass(e.add.join(" ")).removeClass(e.remove.join(" ")),Fo=o.extend({},i)}function C(t){return 0>t?(gn+t%gn)%gn:t>=gn?t%gn:t}function T(t){return s(t,0,gn-1)}function E(t){return En?C(t):T(t)}function Q(t){return t>0||En?t-1:!1}function U(t){return gn-1>t||En?t+1:!1}function J(){Po.min=En?-1/0:-v(gn-1,Eo.w,i.margin,Cn),Po.max=En?1/0:-v(0,Eo.w,i.margin,Cn),Po.snap=Eo.w+i.margin}function qt(){No.min=Math.min(0,Eo.nw-go.width()),No.max=0,go.toggleClass(xt,!(No.noMove=No.min===No.max))}function Lt(t,e,n){if("number"==typeof t){t=new Array(t);var i=!0}return o.each(t,function(t,o){if(i&&(o=t),"number"==typeof o){var r=vn[C(o)];if(r){var a="$"+e+"Frame",s=r[a];n.call(this,t,o,r,s,a,s&&s.data())}}})}function zt(t,e,n,o){(!Hn||"*"===Hn&&o===Fn)&&(t=p(i.width)||p(t)||Ke,e=p(i.height)||p(e)||Be,Zn.resize({width:t,ratio:i.ratio||n||t/e},0,o===Fn?!0:"*"))}function At(t,e,n,r,a){Lt(t,e,function(t,s,u,c,l,f){function d(t){var e=C(s);Ge(t,{index:e,src:b,frame:vn[e]})}function h(){w.remove(),o.Fotorama.cache[b]="error",u.html&&"stage"===e||!_||_===b?(!b||u.html||v?"stage"===e&&(c.trigger("f:load").removeClass(Xt+" "+Vt).addClass(Qt),d("load"),zt()):(c.trigger("f:error").removeClass(Xt).addClass(Vt),d("error")),f.state="error",!(gn>1&&vn[s]===u)||u.html||u.deleted||u.video||v||(u.deleted=!0,Zn.splice(s,1))):(u[x]=b=_,At([s],e,n,r,!0))}function m(){o.Fotorama.measures[b]=y.measures=o.Fotorama.measures[b]||{width:g.width,height:g.height,ratio:g.width/g.height},zt(y.measures.width,y.measures.height,y.measures.ratio,s),w.off("load error").addClass(Jt+(v?" "+Zt:"")).prependTo(c),$(w,n||Eo,r||u.fit||i.fit),o.Fotorama.cache[b]=f.state="loaded",setTimeout(function(){c.trigger("f:load").removeClass(Xt+" "+Vt).addClass(Qt+" "+(v?Ut:Yt)),"stage"===e&&d("load")},5)}function p(){var t=10;j(function(){return!Yn||!t--&&!qe},function(){m()})}if(c){var v=Zn.fullScreen&&u.full&&u.full!==u.img&&!f.$full&&"stage"===e;if(!f.$img||a||v){var g=new Image,w=o(g),y=w.data();f[v?"$full":"$img"]=w;var x="stage"===e?v?"full":"img":"thumb",b=u[x],_=v?null:u["stage"===e?"thumb":"img"];if("navThumb"===e&&(c=f.$wrap),!b)return void h();o.Fotorama.cache[b]?!function T(){"error"===o.Fotorama.cache[b]?h():"loaded"===o.Fotorama.cache[b]?setTimeout(p,0):setTimeout(T,100)}():(o.Fotorama.cache[b]="*",w.on("load",p).on("error",h)),f.state="",g.src=b}}})}function Gt(t){Mo.append(yn.spin().el).appendTo(t)}function ie(){Mo.detach(),yn&&yn.stop()}function le(){var t=Zn.activeFrame[Ve];t&&!t.data().state&&(Gt(t),t.on("f:load f:error",function(){t.off("f:load f:error"),ie()}))}function fe(t,e){Lt(t,e,function(t,n,r,a,s,u){a||(a=r[s]=so[s].clone(),u=a.data(),u.data=r,"stage"===e?(r.html&&o('<div class="'+oe+'"></div>').append(r._html?o(r.html).removeAttr("id").html(r._html):r.html).appendTo(a),i.captions&&r.caption&&o(O(se,O(ue,r.caption))).appendTo(a),r.video&&a.addClass(wt).append(Co.clone()),lo=lo.add(a)):"navDot"===e?wo=wo.add(a):"navThumb"===e&&(u.$wrap=a.children(":first"),yo=yo.add(a),r.video&&a.append(Co.clone())))})}function de(t,e,n){return t&&t.length&&$(t,e,n)}function me(t){Lt(t,"stage",function(t,e,n,r,a,s){if(r){Lo[Ve][C(e)]=r.css(o.extend({left:Ln?0:v(e,Eo.w,i.margin,Cn)},Ln&&f(0))),P(r[0])&&(r.appendTo(co),an(n.$video));var u=n.fit||i.fit;de(s.$img,Eo,u),de(s.$full,Eo,u)}})}function pe(t,e){if("thumbs"===Pn&&!isNaN(t)){var n=-t,i=-t+Eo.nw;yo.each(function(){var t=o(this),r=t.data(),a=r.eq,s={h:An},u="cover";s.w=r.w,r.l+r.w<n||r.l>i||de(r.$img,s,u)||e&&At([a],"navThumb",s,u)})}}function ve(t,e,n){if(!ve[n]){var r="nav"===n&&jn,a=0;e.append(t.filter(function(){for(var t,e=o(this),n=e.data(),i=0,r=vn.length;r>i;i++)if(n.data===vn[i]){t=!0,n.eq=i;break}return t||e.remove()&&!1}).sort(function(t,e){return o(t).data().eq-o(e).data().eq}).each(function(){if(r){var t=o(this),e=t.data(),n=Math.round(An*e.data.thumbratio)||zn;e.l=a,e.w=n,t.css({width:n}),a+=n+i.thumbmargin}})),ve[n]=!0}}function _e(t){return t-zo>Eo.w/3}function Ce(t){return!(En||So+t&&So-gn+t||xn)}function Te(){fo.toggleClass(Ct,Ce(0)),ho.toggleClass(Ct,Ce(1))}function ke(){jo.ok&&(jo.prevent={"<":Ce(0),">":Ce(1)})}function Fe(t){var e,n,o=t.data();return jn?(e=o.l,n=o.w):(e=t.position().left,n=t.width()),{c:e+n/2,min:-e+10*i.thumbmargin,max:-e+Eo.w-n-10*i.thumbmargin}}function Ee(t){var e=Zn.activeFrame[Jn].data();V(xo,{time:.9*t,pos:e.l,width:e.w-2*i.thumbborderwidth})}function $e(t){var e=vn[t.guessIndex][Jn];if(e){var n=No.min!==No.max,o=n&&Fe(Zn.activeFrame[Jn]),i=n&&(t.keep&&$e.l?$e.l:s((t.coo||Eo.nw/2)-Fe(e).c,o.min,o.max)),r=n&&s(i,No.min,No.max),a=.9*t.time;V(go,{time:a,pos:r||0,onEnd:function(){pe(r,!0)}}),rn(vo,L(r,No.min,No.max)),$e.l=i}}function Le(){Ae(Jn),qo[Jn].push(Zn.activeFrame[Jn].addClass(Dt))}function Ae(t){for(var e=qo[t];e.length;)e.shift().removeClass(Dt)}function Re(t){var e=Lo[t];o.each(_n,function(t,n){delete e[C(n)]}),o.each(e,function(t,n){delete e[t],n.detach()})}function We(t){Cn=Tn=So;var e=Zn.activeFrame,n=e[Ve];n&&(Ae(Ve),qo[Ve].push(n.addClass(Dt)),t||Zn.show.onEnd(!0),x(co,0,!0),Re(Ve),me(_n),J(),qt())}function Ue(t,e){t&&o.each(e,function(e,n){n&&o.extend(n,{width:t.width||n.width,height:t.height,minwidth:t.minwidth,maxwidth:t.maxwidth,minheight:t.minheight,maxheight:t.maxheight,ratio:H(t.ratio)})})}function Ge(e,n){t.trigger(et+":"+e,[Zn,n])}function Ze(){clearTimeout(tn.t),Yn=1,i.stopautoplayontouch?Zn.stopAutoplay():Xn=!0}function tn(){i.stopautoplayontouch||(en(),nn()),tn.t=setTimeout(function(){Yn=0},Ie+Oe)}function en(){Xn=!(!xn&&!Qn)}function nn(){if(clearTimeout(nn.t),!i.autoplay||Xn)return void(Zn.autoplay&&(Zn.autoplay=!1,Ge("stopautoplay")));Zn.autoplay||(Zn.autoplay=!0,Ge("startautoplay"));var t=So,e=Zn.activeFrame[Ve].data();j(function(){return e.state||t!==So},function(){nn.t=setTimeout(function(){Xn||t!==So||Zn.show(En?B(!Dn):C(So+(Dn?-1:1)))},i.autoplay)})}function on(){Zn.fullScreen&&(Zn.fullScreen=!1,Ne&&he.cancel(no),be.removeClass(nt),xe.removeClass(nt),t.removeClass(Kt).insertAfter(ao),Eo=o.extend({},Un),an(xn,!0,!0),fn("x",!1),Zn.resize(),At(_n,"stage"),D(Bn,Kn),Ge("fullscreenexit"))}function rn(t,e){Rn&&(t.removeClass(It+" "+Rt),e&&!xn&&t.addClass(e.replace(/^|\s/g," "+Ot+"--")))}function an(t,e,n){e&&(so.removeClass(at),xn=!1,w()),t&&t!==xn&&(t.remove(),Ge("unloadvideo")),n&&(en(),nn())}function sn(t){so.toggleClass(ct,t)}function un(t){if(!Po.flow){var e=t?t.pageX:un.x,n=e&&!Ce(_e(e))&&i.click;un.p===n||!Ln&&i.swipe||!uo.toggleClass(bt,n)||(un.p=n,un.x=e)}}function cn(t){clearTimeout(cn.t),i.clicktransition&&i.clicktransition!==i.transition?(In=i.transition,Zn.setOptions({transition:i.clicktransition}),cn.t=setTimeout(function(){Zn.show(t)},10)):Zn.show(t)}function ln(t,e){var n=t.target,r=o(n);r.hasClass(re)?Zn.playVideo():n===_o?Zn[(Zn.fullScreen?"cancel":"request")+"FullScreen"]():xn?n===ko&&an(xn,!0,!0):e?sn():i.click&&cn({index:t.shiftKey||B(_e(t._x)),slow:t.altKey,user:!0})}function fn(t,e){Po[t]=No[t]=e}function dn(t,e){var n=o(this).data().eq;cn({index:n,slow:t.altKey,user:!0,coo:t._x-vo.offset().left,time:e})}function hn(){if(h(),_(),!hn.i){hn.i=!0;var t=i.startindex;(t||i.hash&&n.hash)&&(Fn=z(t||n.hash.replace(/^#/,""),vn,0===Zn.index||t,t)),So=Cn=Tn=kn=Fn=E(Fn)||0}if(gn){if(mn())return;xn&&an(xn,!0),_n=[],Re(Ve),Zn.show({index:So,time:0,reset:hn.ok}),Zn.resize()}else Zn.destroy();hn.ok=!0}function mn(){return!mn.f===Dn?(mn.f=Dn,So=gn-1-So,Zn.reverse(),!0):void 0}function pn(){pn.ok||(pn.ok=!0,Ge("ready"))}xe=xe||o("html"),be=be||o("body");var vn,gn,wn,yn,xn,bn,_n,Cn,Tn,kn,Mn,Sn,Fn,En,Pn,jn,Nn,$n,qn,Ln,zn,An,On,In,Rn,Dn,Wn,Hn,Kn,Bn,Vn,Xn,Qn,Un,Yn,Gn,Jn,Zn=this,to=o.now(),eo=et+to,no=t[0],oo=1,io=t.data(),ro=o("<style></style>"),ao=o(O(Ht)),so=o(O(ot)),uo=o(O(vt)).appendTo(so),co=(uo[0],o(O(yt)).appendTo(uo)),lo=o(),fo=o(O(_t+" "+Tt)),ho=o(O(_t+" "+kt)),mo=fo.add(ho).appendTo(uo),po=o(O(St)),vo=o(O(Mt)).appendTo(po),go=o(O(Ft)).appendTo(vo),wo=o(),yo=o(),xo=(co.data(),go.data(),o(O(ne)).appendTo(go)),bo=o(O(Bt)),_o=bo[0],Co=o(O(re)),To=o(O(ae)).appendTo(uo),ko=To[0],Mo=o(O(ce)),So=!1,Fo={},Eo={},Po={},jo={},No={},$o={},qo={},Lo={},zo=0,Ao=[];so[Ve]=o(O(gt)),so[Qe]=o(O(jt+" "+$t,O(ee))),so[Xe]=o(O(jt+" "+Nt,O(te))),qo[Ve]=[],qo[Qe]=[],qo[Xe]=[],Lo[Ve]={},so.addClass(Pe?rt:it),io.fotorama=this,Zn.startAutoplay=function(t){return Zn.autoplay?this:(Xn=Qn=!1,y(t||i.autoplay),nn(),this)},Zn.stopAutoplay=function(){return Zn.autoplay&&(Xn=Qn=!0,nn()),this},Zn.show=function(t){var e;"object"!=typeof t?(e=t,t={}):e=t.index,e=">"===e?Tn+1:"<"===e?Tn-1:"<<"===e?0:">>"===e?gn-1:e,e=isNaN(e)?z(e,vn,!0):e,e="undefined"==typeof e?So||0:e,Zn.activeIndex=So=E(e),Mn=Q(So),Sn=U(So),_n=[So,Mn,Sn],Tn=En?e:So;var n=Math.abs(kn-Tn),o=b(t.time,function(){return Math.min(On*(1+(n-1)/12),2*On)}),r=t.overPos;t.slow&&(o*=10),Zn.activeFrame=bn=vn[So],an(xn,bn.i!==vn[C(Cn)].i),fe(_n,"stage"),me(qe?[Tn]:[Tn,Q(Tn),U(Tn)]),fn("go",!0),t.reset||Ge("show",{user:t.user,time:o}),Xn=!0;var a=Zn.show.onEnd=function(e){if(!a.ok){if(a.ok=!0,e||We(!0),!t.reset&&(Ge("showend",{user:t.user}),!e&&In&&In!==i.transition))return Zn.setOptions({transition:In}),void(In=!1);le(),At(_n,"stage"),fn("go",!1),ke(),un(),en(),nn()}};if(Ln){var u=bn[Ve],c=So!==kn?vn[kn][Ve]:null;X(u,c,lo,{time:o,method:i.transition,
onEnd:a},Ao)}else V(co,{pos:-v(Tn,Eo.w,i.margin,Cn),overPos:r,time:o,onEnd:a,_001:!0});if(Te(),Pn){Le();var l=T(So+s(Tn-kn,-1,1));$e({time:o,coo:l!==So&&t.coo,guessIndex:"undefined"!=typeof t.coo?l:So,keep:t.reset}),jn&&Ee(o)}return Vn="undefined"!=typeof kn&&kn!==So,kn=So,i.hash&&Vn&&!Zn.eq&&N(bn.id||So+1),this},Zn.requestFullScreen=function(){return $n&&!Zn.fullScreen&&(Kn=Me.scrollTop(),Bn=Me.scrollLeft(),D(0,0),fn("x",!0),Un=o.extend({},Eo),t.addClass(Kt).appendTo(be.addClass(nt)),xe.addClass(nt),an(xn,!0,!0),Zn.fullScreen=!0,qn&&he.request(no),Zn.resize(),At(_n,"stage"),le(),Ge("fullscreenenter")),this},Zn.cancelFullScreen=function(){return qn&&he.is()?he.cancel(e):on(),this},e.addEventListener&&e.addEventListener(he.event,function(){!vn||he.is()||xn||on()},!1),Zn.resize=function(t){if(!vn)return this;Ue(Zn.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:W(t),[Eo,Zn.fullScreen||i]);var e=arguments[1]||0,n=arguments[2],o=Eo.width,r=Eo.height,a=Eo.ratio,u=Me.height()-(Pn?vo.height():0);return p(o)&&(so.addClass(ht).css({width:o,minWidth:Eo.minwidth||0,maxWidth:Eo.maxwidth||Ye}),o=Eo.W=Eo.w=so.width(),Eo.nw=Pn&&m(i.navwidth,o)||o,i.glimpse&&(Eo.w-=Math.round(2*(m(i.glimpse,o)||0))),co.css({width:Eo.w,marginLeft:(Eo.W-Eo.w)/2}),r=m(r,u),r=r||a&&o/a,r&&(o=Math.round(o),r=Eo.h=Math.round(s(r,m(Eo.minheight,u),m(Eo.maxheight,u))),uo.stop().animate({width:o,height:r},e,function(){so.removeClass(ht)}),We(),Pn&&(vo.stop().animate({width:Eo.nw},e),$e({guessIndex:So,time:e,keep:!0}),jn&&ve.nav&&Ee(e)),Hn=n||!0,pn())),zo=uo.offset().left,this},Zn.setOptions=function(t){return o.extend(i,t),hn(),this},Zn.shuffle=function(){return vn&&I(vn)&&hn(),this},Zn.destroy=function(){return Zn.cancelFullScreen(),Zn.stopAutoplay(),vn=Zn.data=null,c(),_n=[],Re(Ve),this},Zn.playVideo=function(){var t=Zn.activeFrame,e=t.video,n=So;return"object"==typeof e&&t.videoReady&&(qn&&Zn.fullScreen&&Zn.cancelFullScreen(),j(function(){return!he.is()||n!==So},function(){n===So&&(t.$video=t.$video||o(o.Fotorama.jst.video(e)),t.$video.appendTo(t[Ve]),so.addClass(at),xn=t.$video,w(),Ge("loadvideo"))})),this},Zn.stopVideo=function(){return an(xn,!0,!0),this},uo.on("mousemove",un),Po=Y(co,{onStart:Ze,onMove:function(t,e){rn(uo,e.edge)},onTouchEnd:tn,onEnd:function(t){rn(uo);var e=(ze&&!Gn||t.touch)&&i.arrows&&"always"!==i.arrows;if(t.moved||e&&t.pos!==t.newPos&&!t.control){var n=g(t.newPos,Eo.w,i.margin,Cn);Zn.show({index:n,time:Ln?On:t.time,overPos:t.overPos,user:!0})}else t.aborted||t.control||ln(t.startEvent,e)},_001:!0,timeLow:1,timeHigh:1,friction:2,select:"."+Wt+", ."+Wt+" *",$wrap:uo}),No=Y(go,{onStart:Ze,onMove:function(t,e){rn(vo,e.edge)},onTouchEnd:tn,onEnd:function(t){function e(){$e.l=t.newPos,en(),nn(),pe(t.newPos,!0)}if(t.moved)t.pos!==t.newPos?(Xn=!0,V(go,{time:t.time,pos:t.newPos,overPos:t.overPos,onEnd:e}),pe(t.newPos),Rn&&rn(vo,L(t.newPos,No.min,No.max))):e();else{var n=t.$target.closest("."+jt,go)[0];n&&dn.call(n,t.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:vo}),jo=G(uo,{shift:!0,onEnd:function(t,e){Ze(),tn(),Zn.show({index:e,slow:t.altKey})}}),$o=G(vo,{onEnd:function(t,e){Ze(),tn();var n=x(go)+.25*e;go.css(l(s(n,No.min,No.max))),Rn&&rn(vo,L(n,No.min,No.max)),$o.prevent={"<":n>=No.max,">":n<=No.min},clearTimeout($o.t),$o.t=setTimeout(function(){pe(n,!0)},Oe),pe(n)}}),so.hover(function(){setTimeout(function(){Yn||(Gn=!0,sn(!Gn))},0)},function(){Gn&&(Gn=!1,sn(!Gn))}),A(mo,function(t){K(t),cn({index:mo.index(this)?">":"<",slow:t.altKey,user:!0})},{onStart:function(){Ze(),Po.control=!0},onTouchEnd:tn}),o.each("load push pop shift unshift reverse sort splice".split(" "),function(t,e){Zn[e]=function(){return vn=vn||[],"load"!==e?Array.prototype[e].apply(vn,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(vn=R(arguments[0])),hn(),Zn}}),hn()},o.fn.fotorama=function(e){return this.each(function(){var n=this,i=o(this),r=i.data(),a=r.fotorama;a?a.setOptions(e):j(function(){return!E(n)},function(){r.urtext=i.html(),new o.Fotorama(i,o.extend({},Ge,t.fotoramaDefaults,e,r))})})},o.Fotorama.instances=[],o.Fotorama.cache={},o.Fotorama.measures={},o=o||{},o.Fotorama=o.Fotorama||{},o.Fotorama.jst=o.Fotorama.jst||{},o.Fotorama.jst.style=function(t){var e,n="";return fe.escape,n+=".fotorama"+(null==(e=t.s)?"":e)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(e=t.m)?"":e)+"px;\nheight:"+(null==(e=t.h)?"":e)+"px}\n.fotorama"+(null==(e=t.s)?"":e)+" .fotorama__thumb-border{\nheight:"+(null==(e=t.h-t.b*(t.q?0:2))?"":e)+"px;\nborder-width:"+(null==(e=t.b)?"":e)+"px;\nmargin-top:"+(null==(e=t.m)?"":e)+"px}"},o.Fotorama.jst.video=function(t){function e(){n+=o.call(arguments,"")}var n="",o=(fe.escape,Array.prototype.join);return n+='<div class="fotorama__video"><iframe src="',e(("youtube"==t.type?"http://youtube.com/embed/"+t.id+"?autoplay=1":"vimeo"==t.type?"http://player.vimeo.com/video/"+t.id+"?autoplay=1&badge=0":t.id)+(t.s&&"custom"!=t.type?"&"+t.s:"")),n+='" frameborder="0" allowfullscreen></iframe></div>'},o(function(){o("."+et+':not([data-auto="false"])').fotorama()})}(window,document,location,"undefined"!=typeof jQuery&&jQuery);