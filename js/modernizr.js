/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-appearance-audio-backgroundcliptext-borderimage-boxshadow-canvas-cssanimations-csscalc-cssmask-csspointerevents-csspositionsticky-csstransitions-flash-flexbox-inlinesvg-multiplebgs-objectfit-pointerevents-rgba-shapes-smil-srcset-svg-svgclippaths-target-textshadow-touchevents-video-videoautoplay-videoloop-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-testallprops-testprop-teststyles !*/
!function(A,e,t){function n(A){var e=R.className,t=Modernizr._config.classPrefix||"";if(x&&(e=e.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");e=e.replace(n,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(e+=" "+t+A.join(" "+t),x?R.className.baseVal=e:R.className=e)}function o(A,e){return typeof A===e}function a(){var A,e,t,n,a,r,i;for(var s in T)if(T.hasOwnProperty(s)){if(A=[],e=T[s],e.name&&(A.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(t=0;t<e.options.aliases.length;t++)A.push(e.options.aliases[t].toLowerCase());for(n=o(e.fn,"function")?e.fn():e.fn,a=0;a<A.length;a++)r=A[a],i=r.split("."),1===i.length?Modernizr[i[0]]=n:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=n),w.push((n?"":"no-")+i.join("-"))}}function r(A,e){if("object"==typeof A)for(var t in A)B(A,t)&&r(t,A[t]);else{A=A.toLowerCase();var o=A.split("."),a=Modernizr[o[0]];if(2==o.length&&(a=a[o[1]]),"undefined"!=typeof a)return Modernizr;e="function"==typeof e?e():e,1==o.length?Modernizr[o[0]]=e:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=e),n([(e&&0!=e?"":"no-")+o.join("-")]),Modernizr._trigger(A,e)}return Modernizr}function i(){return"function"!=typeof e.createElement?e.createElement(arguments[0]):x?e.createElementNS.call(e,"http://www.w3.org/2000/svg",arguments[0]):e.createElement.apply(e,arguments)}function s(A){return A.replace(/([a-z])-([a-z])/g,function(A,e,t){return e+t.toUpperCase()}).replace(/^-/,"")}function c(A){return A.replace(/([A-Z])/g,function(A,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-")}function l(){var A=e.body;return A||(A=i(x?"svg":"body"),A.fake=!0),A}function d(A,t,n,o){var a,r,s,c,d="modernizr",u=i("div"),p=l();if(parseInt(n,10))for(;n--;)s=i("div"),s.id=o?o[n]:d+(n+1),u.appendChild(s);return a=i("style"),a.type="text/css",a.id="s"+d,(p.fake?p:u).appendChild(a),p.appendChild(u),a.styleSheet?a.styleSheet.cssText=A:a.appendChild(e.createTextNode(A)),u.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",c=R.style.overflow,R.style.overflow="hidden",R.appendChild(p)),r=t(u,A),p.fake?(p.parentNode.removeChild(p),R.style.overflow=c,R.offsetHeight):u.parentNode.removeChild(u),!!r}function u(A,e){return!!~(""+A).indexOf(e)}function p(e,n){var o=e.length;if("CSS"in A&&"supports"in A.CSS){for(;o--;)if(A.CSS.supports(c(e[o]),n))return!0;return!1}if("CSSSupportsRule"in A){for(var a=[];o--;)a.push("("+c(e[o])+":"+n+")");return a=a.join(" or "),d("@supports ("+a+") { #modernizr { position: absolute; } }",function(A){return"absolute"==getComputedStyle(A,null).position})}return t}function f(A,e){return function(){return A.apply(e,arguments)}}function h(A,e,t){var n;for(var a in A)if(A[a]in e)return t===!1?A[a]:(n=e[A[a]],o(n,"function")?f(n,t||e):n);return!1}function v(A,e,n,a){function r(){l&&(delete Y.style,delete Y.modElem)}if(a=o(a,"undefined")?!1:a,!o(n,"undefined")){var c=p(A,n);if(!o(c,"undefined"))return c}for(var l,d,f,h,v,g=["modernizr","tspan"];!Y.style;)l=!0,Y.modElem=i(g.shift()),Y.style=Y.modElem.style;for(f=A.length,d=0;f>d;d++)if(h=A[d],v=Y.style[h],u(h,"-")&&(h=s(h)),Y.style[h]!==t){if(a||o(n,"undefined"))return r(),"pfx"==e?h:!0;try{Y.style[h]=n}catch(m){}if(Y.style[h]!=v)return r(),"pfx"==e?h:!0}return r(),!1}function g(A,e,t,n,a){var r=A.charAt(0).toUpperCase()+A.slice(1),i=(A+" "+F.join(r+" ")+r).split(" ");return o(e,"string")||o(e,"undefined")?v(i,e,n,a):(i=(A+" "+b.join(r+" ")+r).split(" "),h(i,e,t))}function m(A,e,n){return g(A,t,t,e,n)}var w=[],T=[],E={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,e){var t=this;setTimeout(function(){e(t[A])},0)},addTest:function(A,e,t){T.push({name:A,fn:e,options:t})},addAsyncTest:function(A){T.push({name:null,fn:A})}},Modernizr=function(){};Modernizr.prototype=E,Modernizr=new Modernizr,Modernizr.addTest("svg",!!e.createElementNS&&!!e.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("target",function(){var e=A.document;if(!("querySelectorAll"in e))return!1;try{return e.querySelectorAll(":target"),!0}catch(t){return!1}});var y=E._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];E._prefixes=y;var R=e.documentElement,x="svg"===R.nodeName.toLowerCase(),C="Moz O ms Webkit",b=E._config.usePrefixes?C.toLowerCase().split(" "):[];E._domPrefixes=b;var B;!function(){var A={}.hasOwnProperty;B=o(A,"undefined")||o(A.call,"undefined")?function(A,e){return e in A&&o(A.constructor.prototype[e],"undefined")}:function(e,t){return A.call(e,t)}}(),E._l={},E.on=function(A,e){this._l[A]||(this._l[A]=[]),this._l[A].push(e),Modernizr.hasOwnProperty(A)&&setTimeout(function(){Modernizr._trigger(A,Modernizr[A])},0)},E._trigger=function(A,e){if(this._l[A]){var t=this._l[A];setTimeout(function(){var A,n;for(A=0;A<t.length;A++)(n=t[A])(e)},0),delete this._l[A]}},Modernizr._q.push(function(){E.addTest=r});var F=E._config.usePrefixes?C.split(" "):[];E._cssomPrefixes=F;var G=function(e){var n,o=y.length,a=A.CSSRule;if("undefined"==typeof a)return t;if(!e)return!1;if(e=e.replace(/^@/,""),n=e.replace(/-/g,"_").toUpperCase()+"_RULE",n in a)return"@"+e;for(var r=0;o>r;r++){var i=y[r],s=i.toUpperCase()+"_"+n;if(s in a)return"@-"+i.toLowerCase()+"-"+e}return!1};E.atRule=G;var U=function(A){function t(e,t){var o;return e?(t&&"string"!=typeof t||(t=i(t||"div")),e="on"+e,o=e in t,!o&&n&&(t.setAttribute||(t=i("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==A&&(t[e]=A),t.removeAttribute(e)),o):!1}var n=!("onblur"in e.documentElement);return t}();E.hasEvent=U,Modernizr.addTest("pointerevents",function(){var A=!1,e=b.length;for(A=Modernizr.hasEvent("pointerdown");e--&&!A;)U(b[e]+"pointerdown")&&(A=!0);return A});var Q=function(A,e){var t=!1,n=i("div"),o=n.style;if(A in o){var a=b.length;for(o[A]=e,t=o[A];a--&&!t;)o[A]="-"+b[a]+"-"+e,t=o[A]}return""===t&&(t=!1),t};E.prefixedCSSValue=Q,Modernizr.addTest("audio",function(){var A=i("audio"),e=!1;try{(e=!!A.canPlayType)&&(e=new Boolean(e),e.ogg=A.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),e.mp3=A.canPlayType("audio/mpeg;").replace(/^no$/,""),e.opus=A.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),e.wav=A.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),e.m4a=(A.canPlayType("audio/x-m4a;")||A.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(t){}return e}),Modernizr.addTest("canvas",function(){var A=i("canvas");return!(!A.getContext||!A.getContext("2d"))}),Modernizr.addTest("video",function(){var A=i("video"),e=!1;try{(e=!!A.canPlayType)&&(e=new Boolean(e),e.ogg=A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),e.h264=A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),e.webm=A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),e.vp9=A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),e.hls=A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return e}),Modernizr.addTest("csscalc",function(){var A="width:",e="calc(10px);",t=i("a");return t.style.cssText=A+y.join(e+A),!!t.style.length}),Modernizr.addTest("multiplebgs",function(){var A=i("a").style;return A.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(A.background)}),Modernizr.addTest("csspointerevents",function(){var A=i("a").style;return A.cssText="pointer-events:auto","auto"===A.pointerEvents}),Modernizr.addTest("csspositionsticky",function(){var A="position:",e="sticky",t=i("a"),n=t.style;return n.cssText=A+y.join(e+";"+A).slice(0,-A.length),-1!==n.position.indexOf(e)}),Modernizr.addTest("rgba",function(){var A=i("a").style;return A.cssText="background-color:rgba(150,255,150,.5)",(""+A.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("srcset","srcset"in i("img")),Modernizr.addTest("inlinesvg",function(){var A=i("div");return A.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&A.firstChild&&A.firstChild.namespaceURI)}),Modernizr.addAsyncTest(function(){function A(t){clearTimeout(e),n.removeEventListener("playing",A,!1),r("videoautoplay",t&&"playing"===t.type||0!==n.currentTime),n.parentNode.removeChild(n)}var e,t=300,n=i("video"),o=n.style;if(!(Modernizr.video&&"autoplay"in n))return void r("videoautoplay",!1);o.position="absolute",o.height=0,o.width=0;try{if(Modernizr.video.ogg)n.src="data:video/ogg;base64,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";else{if(!Modernizr.video.h264)return void r("videoautoplay",!1);n.src="data:video/mp4;base64,AAAAHGZ0eXBtcDQyAAAAAG1wNDJpc29tYXZjMQAAAz5tb292AAAAbG12aGQAAAAAzaNacc2jWnEAAV+QAAFfkAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAGGlvZHMAAAAAEICAgAcAT////3//AAACQ3RyYWsAAABcdGtoZAAAAAHNo1pxzaNacQAAAAEAAAAAAAFfkAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAEAAAABAAAAAAAd9tZGlhAAAAIG1kaGQAAAAAzaNacc2jWnEAAV+QAAFfkFXEAAAAAAAhaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAAAAAAGWbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAABVnN0YmwAAACpc3RzZAAAAAAAAAABAAAAmWF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAEAAQAEgAAABIAAAAAAAAAAEOSlZUL0FWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwH0AAr/4QAZZ/QACq609NQYBBkAAAMAAQAAAwAKjxImoAEABWjOAa8gAAAAEmNvbHJuY2xjAAYAAQAGAAAAGHN0dHMAAAAAAAAAAQAAAAUAAEZQAAAAKHN0c3oAAAAAAAAAAAAAAAUAAAIqAAAACAAAAAgAAAAIAAAACAAAAChzdHNjAAAAAAAAAAIAAAABAAAABAAAAAEAAAACAAAAAQAAAAEAAAAYc3RjbwAAAAAAAAACAAADYgAABaQAAAAUc3RzcwAAAAAAAAABAAAAAQAAABFzZHRwAAAAAAREREREAAAAb3VkdGEAAABnbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcgAAAAAAAAAAAAAAAAAAAAA6aWxzdAAAADKpdG9vAAAAKmRhdGEAAAABAAAAAEhhbmRCcmFrZSAwLjkuOCAyMDEyMDcxODAwAAACUm1kYXQAAAHkBgX/4NxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxMjAgLSBILjI2NC9NUEVHLTQgQVZDIGNvZGVjIC0gQ29weWxlZnQgMjAwMy0yMDExIC0gaHR0cDovL3d3dy52aWRlb2xhbi5vcmcveDI2NC5odG1sIC0gb3B0aW9uczogY2FiYWM9MCByZWY9MSBkZWJsb2NrPTE6MDowIGFuYWx5c2U9MHgxOjAgbWU9ZXNhIHN1Ym1lPTkgcHN5PTAgbWl4ZWRfcmVmPTAgbWVfcmFuZ2U9NCBjaHJvbWFfbWU9MSB0cmVsbGlzPTAgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0wIGNocm9tYV9xcF9vZmZzZXQ9MCB0aHJlYWRzPTYgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTUwIGtleWludF9taW49NSBzY2VuZWN1dD00MCBpbnRyYV9yZWZyZXNoPTAgcmM9Y3FwIG1idHJlZT0wIHFwPTAAgAAAAD5liISscR8A+E4ACAACFoAAITAAAgsAAPgYCoKgoC+L4vi+KAvi+L4YfAEAACMzgABF9AAEUGUgABDJiXnf4AAAAARBmiKUAAAABEGaQpQAAAAEQZpilAAAAARBmoKU"}}catch(a){return void r("videoautoplay",!1)}n.setAttribute("autoplay",""),n.style.cssText="display:none",R.appendChild(n),setTimeout(function(){n.addEventListener("playing",A,!1),e=setTimeout(A,t)},0)}),Modernizr.addTest("videoloop","loop"in i("video")),Modernizr.addAsyncTest(function(){var t,n,o=function(A){A.fake&&A.parentNode&&A.parentNode.removeChild(A)},a=function(A,e){var t=!!A;if(t&&(t=new Boolean(t),t.blocked="blocked"===A),r("flash",function(){return t}),e&&p.contains(e)){for(;e.parentNode!==p;)e=e.parentNode;p.removeChild(e)}};try{n="ActiveXObject"in A&&"Pan"in new A.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(s){}if(t=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||n),t||x)a(!1);else{var c,d,u=i("embed"),p=l();if(u.type="application/x-shockwave-flash",p.appendChild(u),R.appendChild(p),!("Pan"in u||n))return a("blocked",u),void o(p);c=function(){return R.contains(p)?(R.contains(u)?(d=u.style.cssText,""!==d?a("blocked",u):a(!0,u)):a("blocked"),void o(p)):(p=e.body||p,u=i("embed"),u.type="application/x-shockwave-flash",p.appendChild(u),setTimeout(c,1e3))},setTimeout(c,10)}});var V=function(){var e=A.matchMedia||A.msMatchMedia;return e?function(A){var t=e(A);return t&&t.matches||!1}:function(e){var t=!1;return d("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"==(A.getComputedStyle?A.getComputedStyle(e,null):e.currentStyle).position}),t}}();E.mq=V;var k=E.testStyles=d;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in A||A.DocumentTouch&&e instanceof DocumentTouch)t=!0;else{var n=["@media (",y.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");k(n,function(A){t=9===A.offsetTop})}return t});var P={}.toString;Modernizr.addTest("svgclippaths",function(){return!!e.createElementNS&&/SVGClipPath/.test(P.call(e.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("smil",function(){return!!e.createElementNS&&/SVGAnimate/.test(P.call(e.createElementNS("http://www.w3.org/2000/svg","animate")))});var S={elem:i("modernizr")};Modernizr._q.push(function(){delete S.elem});var Y={style:S.elem.style};Modernizr._q.unshift(function(){delete Y.style});var N=E.testProp=function(A,e,n){return v([A],t,e,n)};Modernizr.addTest("textshadow",N("textShadow","1px 1px")),E.testAllProps=g;var Z=E.prefixed=function(A,e,t){return 0===A.indexOf("@")?G(A):(-1!=A.indexOf("-")&&(A=s(A)),e?g(A,e,t):g(A,"pfx"))};E.prefixedCSS=function(A){var e=Z(A);return e&&c(e)};Modernizr.addTest("objectfit",!!Z("objectFit"),{aliases:["object-fit"]}),E.testAllProps=m,Modernizr.addTest("cssanimations",m("animationName","a",!0)),Modernizr.addTest("appearance",m("appearance")),Modernizr.addTest("backgroundcliptext",function(){return m("backgroundClip","text")}),Modernizr.addTest("borderimage",m("borderImage","url() 1",!0)),Modernizr.addTest("boxshadow",m("boxShadow","1px 1px",!0)),Modernizr.addTest("flexbox",m("flexBasis","1px",!0)),Modernizr.addTest("cssmask",m("maskRepeat","repeat-x",!0)),Modernizr.addTest("shapes",m("shapeOutside","content-box",!0)),Modernizr.addTest("csstransitions",m("transition","all",!0)),a(),n(w),delete E.addTest,delete E.addAsyncTest;for(var I=0;I<Modernizr._q.length;I++)Modernizr._q[I]();A.Modernizr=Modernizr}(window,document);