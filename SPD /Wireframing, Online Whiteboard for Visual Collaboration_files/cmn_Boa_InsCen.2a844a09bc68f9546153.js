(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1257:function(t,e,n){var r=n(1258),o=n(1259),l=n(262),s=n(1260);t.exports=function(t,e,n){return t=l(t),void 0===(e=n?void 0:e)?o(t)?s(t):r(t):t.match(e)||[]}},1258:function(t,e){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(n)||[]}},1259:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},1260:function(t,e){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",o="\\d+",l="[\\u2700-\\u27bf]",s="[a-z\\xdf-\\xf6\\xf8-\\xff]",i="[^\\ud800-\\udfff"+n+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",a="[\\ud800-\\udbff][\\udc00-\\udfff]",u="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+s+"|"+i+")",p="(?:"+u+"|"+i+")",f="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+f+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,a].join("|")+")[\\ufe0e\\ufe0f]?"+f+")*"),h="(?:"+[l,c,a].join("|")+")"+m,g=RegExp([u+"?"+s+"+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?="+[r,u,"$"].join("|")+")",p+"+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?="+[r,u+d,"$"].join("|")+")",u+"?"+d+"+(?:['\u2019](?:d|ll|m|re|s|t|ve))?",u+"+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?","\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)","\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",o,h].join("|"),"g");t.exports=function(t){return t.match(g)||[]}},1264:function(t,e,n){var r=n(1265);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(24)(r,o);r.locals&&(t.exports=r.locals)},1265:function(t,e,n){(t.exports=n(23)(!1)).push([t.i,".video-player .md-content {\n  width: 640px;\n  height: 360px;\n  border-radius: 0;\n}\n@media screen and (min-width: 1000px) {\n  .video-player.video-player--wide .md-content {\n    width: 800px;\n    height: 450px;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .video-player.video-player--wide .md-content {\n    width: 960px;\n    height: 540px;\n  }\n}\n@media screen and (min-width: 1800px) {\n  .video-player.video-player--wide .md-content {\n    width: 1280px;\n    height: 720px;\n  }\n}\n.video-player .video-player__play-btn {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  cursor: pointer;\n}\n.video-player .video-player__close-btn {\n  position: absolute;\n  right: -40px;\n  color: #FFFFFF;\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n}\n.video-player .video-player__close-btn .video-player__close-btn-icon {\n  width: 100%;\n  height: 100%;\n}\n",""])},1266:function(t,e,n){t.exports='<rtb-modal-old class="video-player" ng-class="{\'video-player--wide\': modal.isWide}">\n        <div ng-if="modal.hasCloseBtn" class="video-player__close-btn" hm-tap="modal.onCloseBtnClicked()"><svg  class="video-player__close-btn-icon"   ><use xlink:href="'+n(118)+'"></use></svg></div>\n        <div class="video-player__play-btn" ng-if="modal.playBtn" hm-tap="modal.onPlayBtnClicked()">\n                <img ng-src="{{modal.playBtn}}" >\n        </div>\n        <iframe ng-src="{{modal.videoURL}}" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay"></iframe>\n</rtb-modal-old>'},1337:function(t,e,n){"use strict";(function(t){n.d(e,"b",function(){return r}),n.d(e,"c",function(){return l}),n.d(e,"a",function(){return s});var r=new t.Signal,o=new t.Signal;function l(t){r.dispatch(t)}function s(){o.dispatch()}}).call(this,n(38))},1563:function(t,e,n){"use strict";var r={};n.r(r),n.d(r,"toolsTitle",function(){return s}),n.d(r,"toolsSubTitle",function(){return i}),n.d(r,"generalTitle",function(){return c}),n.d(r,"navigationTitle",function(){return a}),n.d(r,"fontTitle",function(){return u}),n.d(r,"tools",function(){return d}),n.d(r,"general",function(){return p}),n.d(r,"navigation",function(){return f}),n.d(r,"font",function(){return m});var o={};n.r(o),n.d(o,"toolsTitle",function(){return h}),n.d(o,"toolsSubTitle",function(){return g}),n.d(o,"generalTitle",function(){return b}),n.d(o,"navigationTitle",function(){return y}),n.d(o,"fontTitle",function(){return k}),n.d(o,"tools",function(){return x}),n.d(o,"general",function(){return w}),n.d(o,"navigation",function(){return v}),n.d(o,"font",function(){return O});var l=n(21),s="\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b",i="\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0438 <span>1 \u2014 9</span> \u0434\u043b\u044f \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u0438\u043d\u0441\u0442\u0443\u0440\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u0432 \u0442\u0443\u043b\u0431\u0430\u0440\u0435",c="\u041e\u0431\u0449\u0438\u0435",a="\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f",u="\u0422\u0435\u043a\u0441\u0442",d=[{keys:["V"],title:"\u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435",plus:!0},{keys:["T"],title:"\u0442\u0435\u043a\u0441\u0442",plus:!0},{keys:["N"],title:"\u0441\u0442\u0438\u043a\u0435\u0440",plus:!0},{keys:["S"],title:"\u0444\u0438\u0433\u0443\u0440\u044b",plus:!0},{keys:["R"],title:"\u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a",plus:!0},{keys:["O"],title:"\u043e\u0432\u0430\u043b",plus:!0},{keys:["L"],title:"\u043b\u0438\u043d\u0438\u044f \u0441\u0432\u044f\u0437\u0438, \u0441\u0442\u0440\u0435\u043b\u043a\u0430",plus:!0},{keys:["P"],title:"\u0440\u0438\u0441\u043e\u0432\u0430\u043d\u0438\u0435",plus:!0},{keys:["E"],title:"\u043b\u0430\u0441\u0442\u0438\u043a",plus:!0},{keys:["C"],title:"\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",plus:!0},{keys:["%ctrlOrCmd% + Z"],title:"\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",plus:!0},{keys:["%ctrlOrCmd% + shift + Z"],title:"\u0432\u0435\u0440\u043d\u0443\u0442\u044c",plus:!0},{keys:["F"],title:"\u0444\u0440\u0435\u0439\u043c\u044b",plus:!0},{keys:["M"],title:"\u043c\u0438\u043d\u0438-\u043a\u0430\u0440\u0442\u0430",plus:!0}],p=[{keys:["%ctrlOrCmd% + C","%ctrlOrCmd% + V"],title:"\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c / \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c",plus:!0},{keys:["%ctrlOrCmd% + X"],title:"\u0432\u044b\u0440\u0435\u0437\u0430\u0442\u044c",plus:!0},{keys:["%ctrlOrCmd% + D"],title:"\u0434\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c",plus:!0},{keys:["alt + drag"],title:"\u0434\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c",plus:!0},{keys:["shift + drag"],title:"\u043c\u0443\u043b\u044c\u0442\u0438\u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435",plus:!0},{keys:["%ctrlOrCmd% + click"],title:"\u0432\u044b\u0431\u043e\u0440\u043e\u0447\u043d\u043e\u0435 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435",plus:!0},{keys:["%ctrlOrCmd% + A"],title:"\u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0432\u0441\u0451",plus:!0},{keys:["enter"],title:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0435",plus:!0},{keys:["esc"],title:"\u0441\u043d\u044f\u0442\u044c \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435, \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u0440\u0435\u0434\u0430\u043a\u0442.",plus:!0},{keys:["backspace"],title:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c",plus:!0},{keys:["%ctrlOrCmd% + G"],title:"\u0441\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c",plus:!0},{keys:["%ctrlOrCmd% + shift + G"],title:"\u0440\u0430\u0437\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c",plus:!0},{keys:["%ctrlOrCmd% + L"],title:"\u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c / \u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c",plus:!0},{keys:["%pageUp%"],title:"\u043d\u0430 \u043f\u0435\u0440\u0435\u0434\u043d\u0438\u0439 \u043f\u043b\u0430\u043d",plus:!0},{keys:["%pageDown%"],title:"\u043d\u0430 \u0437\u0430\u0434\u043d\u0438\u0439 \u043f\u043b\u0430\u043d",plus:!0}],f=[{keys:["\u2190 \u2192 \u2191 \u2193"],title:"\u0434\u0432\u0438\u0433\u0430\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442 / \u0434\u043e\u0441\u043a\u0443",plus:!0},{keys:["%ctrlOrCmd% +","+"],title:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u044c",plus:!1},{keys:["%ctrlOrCmd% \u2013","\u2013"],title:"\u043e\u0442\u0434\u0430\u043b\u0438\u0442\u044c",plus:!1},{keys:["%ctrlOrCmd% + 0"],title:"\u043c\u0430\u0441\u0448\u0442\u0430\u0431 100%",plus:!0},{keys:["%ctrlOrCmd% + 1"],title:"\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0451",plus:!0},{keys:["%ctrlOrCmd% + 2"],title:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u044c \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435",plus:!0},{keys:["space + drag"],title:"\u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u043e \u0434\u043e\u0441\u043a\u0435",plus:!0},{keys:["G"],title:"\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c / \u0441\u043a\u0440\u044b\u0442\u044c \u0441\u0435\u0442\u043a\u0443",plus:!0},{keys:["%ctrlOrCmd% + F"],title:"\u043f\u043e\u0438\u0441\u043a",plus:!0}],m=[{keys:["%ctrlOrCmd% + B"],title:"\u0436\u0438\u0440\u043d\u044b\u0439",plus:!0},{keys:["%ctrlOrCmd% + I"],title:"\u043a\u0443\u0440\u0441\u0438\u0432",plus:!0},{keys:["%ctrlOrCmd% + U"],title:"\u043f\u043e\u0434\u0447\u0435\u0440\u043a\u043d\u0443\u0442\u044b\u0439",plus:!0}],h="Tools",g="Switch quickly between tools on the customizable toolbar <br/> by clicking on <span>1 \u2014 9</span> numbers",b="General",y="Navigation",k="Text",x=[{keys:["V / H"],title:"select tool / hand",plus:!0},{keys:["T"],title:"text",plus:!0},{keys:["N"],title:"sticky note",plus:!0},{keys:["S"],title:"shapes",plus:!0},{keys:["R"],title:"rectangle",plus:!0},{keys:["O"],title:"oval",plus:!0},{keys:["L"],title:"connection line, arrow",plus:!0},{keys:["P"],title:"pen",plus:!0},{keys:["E"],title:"eraser",plus:!0},{keys:["C"],title:"comment",plus:!0},{keys:["%ctrlOrCmd% + Z"],title:"undo",plus:!0},{keys:["%ctrlOrCmd% + shift + Z"],title:"redo",plus:!0},{keys:["F"],title:"frames",plus:!0},{keys:["M"],title:"minimap",plus:!0}],w=[{keys:["%ctrlOrCmd% + C","%ctrlOrCmd% + V"],title:"copy / paste",plus:!0},{keys:["%ctrlOrCmd% + X"],title:"cut",plus:!0},{keys:["%ctrlOrCmd% + D"],title:"duplicate",plus:!0},{keys:["alt + drag"],title:"duplicate",plus:!0},{keys:["shift + drag"],title:"multi-select",plus:!0},{keys:["%ctrlOrCmd% + click"],title:"select multiple items",plus:!0},{keys:["%ctrlOrCmd% + A"],title:"select all",plus:!0},{keys:["enter"],title:"edit selected item",plus:!0},{keys:["esc"],title:"deselect, quit edit, switch to cursor",plus:!0},{keys:["backspace"],title:"delete",plus:!0},{keys:["%ctrlOrCmd% + G"],title:"group",plus:!0},{keys:["%ctrlOrCmd% + shift + G"],title:"ungroup",plus:!0},{keys:["%ctrlOrCmd% + L"],title:"lock / unlock",plus:!0},{keys:["%pageUp%"],title:"send to front",plus:!0},{keys:["%pageDown%"],title:"send to back",plus:!0}],v=[{keys:["\u2190 \u2192 \u2191 \u2193"],title:"move items / canvas",plus:!0},{keys:["%ctrlOrCmd% +","+"],title:"zoom in",plus:!1},{keys:["%ctrlOrCmd% \u2013","\u2013"],title:"zoom out",plus:!1},{keys:["%ctrlOrCmd% + 0"],title:"zoom to 100%",plus:!0},{keys:["%ctrlOrCmd% + 1"],title:"zoom to fit",plus:!0},{keys:["%ctrlOrCmd% + 2"],title:"zoom to selected item",plus:!0},{keys:["space + drag"],title:"move canvas",plus:!0},{keys:["G"],title:"toggle grid",plus:!0},{keys:["%ctrlOrCmd% + F"],title:"search",plus:!0}],O=[{keys:["%ctrlOrCmd% + B"],title:"bold",plus:!0},{keys:["%ctrlOrCmd% + I"],title:"italic",plus:!0},{keys:["%ctrlOrCmd% + U"],title:"underline",plus:!0}],C=n(57),E=n(48),S=["\u2190","\u2192","\u2191","\u2193"],T=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(l.d)(e,t),e.prototype.init=function(){var t="ru"==rtb.lang?r:o;Array.prototype.concat(t.tools,t.general,t.navigation,t.font).forEach(function(t){t.short=1===t.keys.length,t.colspan=1===t.keys.length?2:1,t.keys.forEach(function(e,n){var r=Object(C.p)(e);t.plus&&(r=r.replace(/\+/g,'<span class="shortcuts-plus">+</span>')),S.forEach(function(t){return r=r.replace(t,'<span class="shortcuts-arrow">'+t+"</span>")}),t.keys[n]=r})}),this.language=t},e}(E.b),F=n(46),j=n(44);e.a=function(){return n(3431),F.a(j.a.SHORTCUTS,T,n(3433))}},1791:function(t,e,n){var r=n(831),o=n(651),l=n(780),s=n(790),i=o(function(t){return l(r(t,1,s,!0))});t.exports=i},1890:function(t,e,n){"use strict";n.d(e,"b",function(){return d}),n.d(e,"a",function(){return p});var r=n(1257),o=n.n(r),l=n(1791),s=n.n(l),i=n(411),c=n.n(i),a=n(86),u=n.n(a);function d(t){return t.reduce(function(t,n){return n.templates.forEach(function(r){var o=t.find(function(t){return t.boardId===r.boardId});o?o.tags=e([o.tags,n.title]):((o=u()(r)).tags=e([n.title,r.title,r.description]),t.push(o))}),t},[]);function e(t){return t.reduce(function(t,e){var n;return n=c()(e)?o()(e).map(function(t){return t.toLowerCase()}):e,s()(t,n)},[])}}function p(t){return t.map(function(t){return Object.assign(t,{isTemplate:!0,dragImage:t.previewSmall?t.previewSmall.image:""})})}},2096:function(t,e,n){!function(){"use strict";var e=t.exports,n=("undefined"!==typeof Element&&Element,function(){for(var t,e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,o=n.length,l={};r<o;r++)if((t=n[r])&&t[1]in document){for(r=0,e=t.length;r<e;r++)l[n[0][r]]=t[r];return l}return!1}()),r={request:function(t){var e=n.requestFullscreen;(t=t||document.documentElement)[e]()},exit:function(){document[n.exitFullscreen]()},toggle:function(t){this.isFullscreen?this.exit():this.request(t)},onchange:function(){},onerror:function(){},raw:n};n?(Object.defineProperties(r,{isFullscreen:{get:function(){return!!document[n.fullscreenElement]}},element:{enumerable:!0,get:function(){return document[n.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return!!document[n.fullscreenEnabled]}}}),document.addEventListener(n.fullscreenchange,function(t){r.onchange.call(r,t)}),document.addEventListener(n.fullscreenerror,function(t){r.onerror.call(r,t)}),e?t.exports=r:window.screenfull=r):e?t.exports=!1:window.screenfull=!1}()},286:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return l});var r=n(42);function o(){return"PickersService"}function l(){return r.a("PickersService")}e.a=l()},3431:function(t,e,n){var r=n(3432);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(24)(r,o);r.locals&&(t.exports=r.locals)},3432:function(t,e,n){(t.exports=n(23)(!1)).push([t.i,".shortcuts-modal .md-content {\n  width: 600px;\n  height: calc(100% - 40px);\n}\n.shortcuts-modal .md-content .shortcuts-scrollable {\n  overflow-y: auto;\n  position: relative;\n  padding-bottom: 40px;\n  box-sizing: border-box;\n  height: calc(100% - 70px);\n  -webkit-overflow-scrolling: touch;\n  scrollbar-color: #827f9b transparent;\n  scrollbar-width: thin;\n}\n.shortcuts-modal .md-content .shortcuts-scrollable::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n.shortcuts-modal .md-content .shortcuts-scrollable::-webkit-scrollbar-thumb {\n  background-color: #827f9b;\n  border: 0 solid transparent;\n  border-radius: 2px;\n}\n.shortcuts-modal .md-content .shortcuts-scrollable::-webkit-scrollbar-track {\n  background-color: initial;\n}\n.shortcuts-modal .md-content .tools-caption {\n  font-size: 20px;\n  font-weight: bold;\n  text-align: left;\n  margin-bottom: 6px;\n  margin-left: 100px;\n  margin-top: 28px;\n}\n.shortcuts-modal .md-content .shortcuts-tools-picture {\n  position: absolute;\n  top: 103px;\n  left: 22px;\n}\n.shortcuts-modal .md-content .shortcuts-key {\n  width: 140px;\n  font-weight: bold;\n}\n.shortcuts-modal .md-content p {\n  margin-left: 100px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.shortcuts-modal .md-content p span {\n  font-weight: bold;\n}\n.shortcuts-modal .md-content table {\n  width: 420px;\n  margin: 28px 0 0 100px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.07);\n}\n.shortcuts-modal .md-content table.shortcuts-tools {\n  margin-top: 15px;\n}\n.shortcuts-modal .md-content table caption {\n  font-size: 20px;\n  font-weight: bold;\n  text-align: left;\n  margin-bottom: 18px;\n}\n.shortcuts-modal .md-content table tr td:first-child {\n  width: 1px;\n  padding-right: 8px;\n  white-space: nowrap;\n}\n.shortcuts-modal .md-content table tr.row--short td:first-child {\n  width: 160px;\n  min-width: 160px;\n  max-width: 160px;\n}\n.shortcuts-modal .md-content table td {\n  width: 280px;\n  padding: 0;\n  height: 40px;\n  text-align: left;\n  vertical-align: middle;\n  box-sizing: border-box;\n  border-top: 1px solid rgba(0, 0, 0, 0.07);\n}\n.shortcuts-modal .md-content table tr:not(.row--short) td:nth-child(2) {\n  width: auto;\n  padding-left: 10px;\n  border-left: 1px solid rgba(0, 0, 0, 0.07);\n}\n.shortcuts-modal .md-content .shortcuts-plus {\n  color: #827f9b;\n  font-weight: normal;\n}\n.shortcuts-modal .md-content .shortcuts-arrow {\n  font-family: 'Lucida Grande', Arial, sans-serif;\n}\n",""])},3433:function(t,e,n){t.exports='<rtb-modal-old class="shortcuts-modal base-headed-modal">\n    <rtb-modal-header text="Shortcuts" on-close="modal.cancel()"></rtb-modal-header>\n\n    <div class="shortcuts-scrollable" no-prevent-default="true">\n        <img class="shortcuts-tools-picture" src="'+n(3434)+'">\n        <div class="tools-caption" ng-bind="modal.language.toolsTitle"></div>\n        <p ng-bind-html="modal.language.toolsSubTitle"></p>\n        <table class="shortcuts-tools">\n            <tr ng-repeat="row in modal.language.tools" ng-class="{\'row--short\': row.short}">\n                <td class="shortcuts-key" ng-repeat="key in row.keys" ng-bind-html="key" ng-attr-colspan="{{row.colspan}}"></td>\n                <td class="shortcuts-title" ng-bind="row.title"></td>\n            </tr>\n        </table>\n\n        <table class="shortcuts-general">\n            <caption ng-bind="modal.language.generalTitle"></caption>\n\n            <tr ng-repeat="row in modal.language.general" ng-class="{\'row--short\': row.short}">\n                <td class="shortcuts-key" ng-repeat="key in row.keys" ng-bind-html="key" ng-attr-colspan="{{row.colspan}}"></td>\n                <td class="shortcuts-title" ng-bind="row.title"></td>\n            </tr>\n        </table>\n\n        <table class="shortcuts-navigation">\n            <caption ng-bind="modal.language.navigationTitle"></caption>\n\n            <tr ng-repeat="row in modal.language.navigation" ng-class="{\'row--short\': row.short}">\n                <td class="shortcuts-key" ng-repeat="key in row.keys" ng-bind-html="key" ng-attr-colspan="{{row.colspan}}"></td>\n                <td class="shortcuts-title" ng-bind="row.title"></td>\n            </tr>\n        </table>\n\n        <table class="shortcuts-font">\n            <caption ng-bind="modal.language.fontTitle"></caption>\n\n            <tr ng-repeat="row in modal.language.font" ng-class="{\'row--short\': row.short}">\n                <td class="shortcuts-key" ng-repeat="key in row.keys" ng-bind-html="key" ng-attr-colspan="{{row.colspan}}"></td>\n                <td class="shortcuts-title" ng-bind="row.title"></td>\n            </tr>\n        </table>\n    </div>\n</rtb-modal-old>'},3434:function(t,e,n){t.exports=n.p+"2881465dcf67be102ce84334a562eed1.svg"},466:function(t,e,n){"use strict";var r=n(46),o=n(44),l=n(21),s=n(48),i=n(126),c=n(45),a=n(416),u=i.b(),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(l.d)(e,t),e.prototype.init=function(){if(this.isWide=!!this.params.wide,this.playBtn=this.params.playBtn,this.tipType=this.params.tipType,this.hasCloseBtn=!!this.params.hasCloseBtn,this.playBtn){var t=this.params.videoURL.includes("?")?"&":"?";this.params.videoURL=""+this.params.videoURL+t+"controls=0"}this.videoURL=u().$sce.trustAsResourceUrl(this.params.videoURL),this.sendStatOnShowIfNeed()},e.prototype.onPlayBtnClicked=function(){this.playBtn=void 0,this.params.videoURL=this.params.videoURL.replace("controls=0","")+"autoplay=1&controls=1",this.videoURL=u().$sce.trustAsResourceUrl(this.params.videoURL),this.sendStatOnClickIfNeed("play")},e.prototype.onCloseBtnClicked=function(){Object(c.a)().currentModal&&Object(c.a)().currentModal.cancel(),this.sendStatOnClickIfNeed("close")},e.prototype.sendStatOnShowIfNeed=function(){this.tipType&&Object(a.b)({tip_type:this.tipType,type_of_trigger:"modal"})},e.prototype.sendStatOnClickIfNeed=function(t){this.tipType&&Object(a.a)({tip_type:this.tipType,type_of_trigger:"modal",button_name_clicked:t})},e}(s.b);e.a=function(t){return n(1264),r.a(o.a.VIDEO_PLAYER,d,n(1266),t)}},742:function(t,e,n){"use strict";var r=n(142),o=n(117),l=n(147),s=n(530),i=n(99),c=function(){function t(){}return Object.defineProperty(t,"online",{get:function(){return Object(i.c)("board.online")},enumerable:!0,configurable:!0}),Object.defineProperty(t,"info",{get:function(){return Object(i.c)("board.info")},enumerable:!0,configurable:!0}),Object.defineProperty(t,"viewMode",{get:function(){return Object(i.c)("board.viewMode")},enumerable:!0,configurable:!0}),Object.defineProperty(t,"frames",{get:function(){return Object(i.c)("board.frames")},enumerable:!0,configurable:!0}),Object.defineProperty(t,"accountId",{get:function(){return this.info&&this.info.account.id},enumerable:!0,configurable:!0}),Object.defineProperty(t,"orgId",{get:function(){var t=this.info;return t&&t.account.organization&&t.account.organization.id},enumerable:!0,configurable:!0}),Object.defineProperty(t,"role",{get:function(){return this.info&&this.info.currentUserPermission.role},enumerable:!0,configurable:!0}),t.isOwner=function(){return this.role===l.a.OWNER},t.hasPermission=function(t){if(r.a[t]!==t)throw new Error("Permission "+t+" does not exist in UserBoardPermission");return!!this.info&&-1!=this.info.currentUserPermission.permissions.indexOf(t)},t.hasFeature=function(t){if(o.a[t]!==t)throw new Error("Feature "+t+" does not exist in AccountFeatures");return!!this.info&&this.info.account.features.includes(t)},t.isLocked=function(){return s.b(this.info)},t.canCreateAndEditWidgets=function(t){var e=t&&void 0!==t.ignoreNetworkStatus?t.ignoreNetworkStatus:void 0;return this.hasPermission(r.a.EDIT_WIDGETS)&&!this.isLocked()&&(e||this.online)},t.canCreateAndEditComments=function(){return this.hasPermission(r.a.WRITE_COMMENT)&&!this.isLocked()&&this.online},t.canChat=function(){return this.canCreateAndEditComments()&&!Object(i.c)("user.guest")},t.canVideoChat=function(){return Boolean(this.info&&this.info.account.role)&&this.online},t.canEditFrames=function(){return this.hasPermission(r.a.SET_PRESENTATION)&&!this.isLocked()&&this.online},t}();e.a=c}}]);
//# sourceMappingURL=cmn~Boa~InsCen.2a844a09bc68f9546153.js.map