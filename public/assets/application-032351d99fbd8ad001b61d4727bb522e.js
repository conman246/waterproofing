/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.3.min.map
*/

(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.7.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with], button[data-disable-with], textarea[data-disable-with]',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // making sure that all forms have actual up-to-date token(cached forms contain old one)
    refreshCSRFTokens: function(){
      var csrfToken = $('meta[name=csrf-token]').attr('content');
      var csrfParam = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrfParam + '"]').val(csrfToken);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element.attr('href');
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, elCrossDomain, crossDomain, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        elCrossDomain = element.data('cross-domain');
        crossDomain = elCrossDomain === undefined ? null : elCrossDomain;
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            return rails.fire(element, 'ajax:beforeSend', [xhr, settings]);
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: crossDomain
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        var jqxhr = rails.ajax(options);
        element.trigger('ajax:send', jqxhr);
        return jqxhr;
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = $('meta[name=csrf-token]').attr('content'),
        csrfParam = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      form.find(rails.disableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        element.data('ujs:enable-with', element[method]());
        element[method](element.data('disable-with'));
        element.prop('disabled', true);
      });
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      form.find(rails.enableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
        element.prop('disabled', false);
      });
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        // If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey
        if (!valueToCheck === !nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      element.data('ujs:enable-with', element.html()); // store enabled state
      element.html(element.data('disable-with')); // set to disabled state
      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }

  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (link.data('remote') !== undefined) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.error( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (link.data('method')) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);
      if (!rails.allowAction(button)) return rails.stopEverything(e);

      rails.handleRemote(button);
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = form.data('remote') !== undefined,
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector),
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (blankRequiredInputs && form.attr("novalidate") == undefined && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
        return rails.stopEverything(e);
      }

      if (remote) {
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:beforeSend.rails', function(event) {
      if (this == event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this == event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
(function() {
  var CSRFToken, allowLinkExtensions, anchoredLink, browserCompatibleDocumentParser, browserIsntBuggy, browserSupportsCustomEvents, browserSupportsPushState, browserSupportsTurbolinks, bypassOnLoadPopstate, cacheCurrentPage, cacheSize, changePage, constrainPageCacheTo, createDocument, crossOriginLink, currentState, enableTransitionCache, executeScriptTags, extractLink, extractTitleAndBody, fetch, fetchHistory, fetchReplacement, handleClick, historyStateIsDefined, htmlExtensions, ignoreClick, initializeTurbolinks, installClickHandlerLast, installDocumentReadyPageEventTriggers, installHistoryChangeHandler, installJqueryAjaxSuccessPageUpdateTrigger, loadedAssets, noTurbolink, nonHtmlLink, nonStandardClick, pageCache, pageChangePrevented, pagesCached, popCookie, processResponse, recallScrollPosition, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentState, rememberCurrentUrl, rememberReferer, removeHash, removeHashForIE10compatiblity, removeNoscriptTags, requestMethodIsSafe, resetScrollPosition, targetLink, transitionCacheEnabled, transitionCacheFor, triggerEvent, visit, xhr, _ref,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = [].slice;

  pageCache = {};

  cacheSize = 10;

  transitionCacheEnabled = false;

  currentState = null;

  loadedAssets = null;

  htmlExtensions = ['html'];

  referer = null;

  createDocument = null;

  xhr = null;

  fetch = function(url) {
    var cachedPage;
    rememberReferer();
    cacheCurrentPage();
    reflectNewUrl(url);
    if (transitionCacheEnabled && (cachedPage = transitionCacheFor(url))) {
      fetchHistory(cachedPage);
      return fetchReplacement(url);
    } else {
      return fetchReplacement(url, resetScrollPosition);
    }
  };

  transitionCacheFor = function(url) {
    var cachedPage;
    cachedPage = pageCache[url];
    if (cachedPage && !cachedPage.transitionCacheDisabled) {
      return cachedPage;
    }
  };

  enableTransitionCache = function(enable) {
    if (enable == null) {
      enable = true;
    }
    return transitionCacheEnabled = enable;
  };

  fetchReplacement = function(url, onLoadFunction) {
    if (onLoadFunction == null) {
      onLoadFunction = (function(_this) {
        return function() {};
      })(this);
    }
    triggerEvent('page:fetch', {
      url: url
    });
    if (xhr != null) {
      xhr.abort();
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', removeHashForIE10compatiblity(url), true);
    xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml, application/xml');
    xhr.setRequestHeader('X-XHR-Referer', referer);
    xhr.onload = function() {
      var doc;
      triggerEvent('page:receive');
      if (doc = processResponse()) {
        changePage.apply(null, extractTitleAndBody(doc));
        reflectRedirectedUrl();
        onLoadFunction();
        return triggerEvent('page:load');
      } else {
        return document.location.href = url;
      }
    };
    xhr.onloadend = function() {
      return xhr = null;
    };
    xhr.onerror = function() {
      return document.location.href = url;
    };
    return xhr.send();
  };

  fetchHistory = function(cachedPage) {
    if (xhr != null) {
      xhr.abort();
    }
    changePage(cachedPage.title, cachedPage.body);
    recallScrollPosition(cachedPage);
    return triggerEvent('page:restore');
  };

  cacheCurrentPage = function() {
    pageCache[currentState.url] = {
      url: document.location.href,
      body: document.body,
      title: document.title,
      positionY: window.pageYOffset,
      positionX: window.pageXOffset,
      cachedAt: new Date().getTime(),
      transitionCacheDisabled: document.querySelector('[data-no-transition-cache]') != null
    };
    return constrainPageCacheTo(cacheSize);
  };

  pagesCached = function(size) {
    if (size == null) {
      size = cacheSize;
    }
    if (/^[\d]+$/.test(size)) {
      return cacheSize = parseInt(size);
    }
  };

  constrainPageCacheTo = function(limit) {
    var cacheTimesRecentFirst, key, pageCacheKeys, _i, _len, _results;
    pageCacheKeys = Object.keys(pageCache);
    cacheTimesRecentFirst = pageCacheKeys.map(function(url) {
      return pageCache[url].cachedAt;
    }).sort(function(a, b) {
      return b - a;
    });
    _results = [];
    for (_i = 0, _len = pageCacheKeys.length; _i < _len; _i++) {
      key = pageCacheKeys[_i];
      if (!(pageCache[key].cachedAt <= cacheTimesRecentFirst[limit])) {
        continue;
      }
      triggerEvent('page:expire', pageCache[key]);
      _results.push(delete pageCache[key]);
    }
    return _results;
  };

  changePage = function(title, body, csrfToken, runScripts) {
    document.title = title;
    document.documentElement.replaceChild(body, document.body);
    if (csrfToken != null) {
      CSRFToken.update(csrfToken);
    }
    if (runScripts) {
      executeScriptTags();
    }
    currentState = window.history.state;
    triggerEvent('page:change');
    return triggerEvent('page:update');
  };

  executeScriptTags = function() {
    var attr, copy, nextSibling, parentNode, script, scripts, _i, _j, _len, _len1, _ref, _ref1;
    scripts = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])'));
    for (_i = 0, _len = scripts.length; _i < _len; _i++) {
      script = scripts[_i];
      if (!((_ref = script.type) === '' || _ref === 'text/javascript')) {
        continue;
      }
      copy = document.createElement('script');
      _ref1 = script.attributes;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        attr = _ref1[_j];
        copy.setAttribute(attr.name, attr.value);
      }
      copy.appendChild(document.createTextNode(script.innerHTML));
      parentNode = script.parentNode, nextSibling = script.nextSibling;
      parentNode.removeChild(script);
      parentNode.insertBefore(copy, nextSibling);
    }
  };

  removeNoscriptTags = function(node) {
    node.innerHTML = node.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/ig, '');
    return node;
  };

  reflectNewUrl = function(url) {
    if (url !== referer) {
      return window.history.pushState({
        turbolinks: true,
        url: url
      }, '', url);
    }
  };

  reflectRedirectedUrl = function() {
    var location, preservedHash;
    if (location = xhr.getResponseHeader('X-XHR-Redirected-To')) {
      preservedHash = removeHash(location) === location ? document.location.hash : '';
      return window.history.replaceState(currentState, '', location + preservedHash);
    }
  };

  rememberReferer = function() {
    return referer = document.location.href;
  };

  rememberCurrentUrl = function() {
    return window.history.replaceState({
      turbolinks: true,
      url: document.location.href
    }, '', document.location.href);
  };

  rememberCurrentState = function() {
    return currentState = window.history.state;
  };

  recallScrollPosition = function(page) {
    return window.scrollTo(page.positionX, page.positionY);
  };

  resetScrollPosition = function() {
    if (document.location.hash) {
      return document.location.href = document.location.href;
    } else {
      return window.scrollTo(0, 0);
    }
  };

  removeHashForIE10compatiblity = function(url) {
    return removeHash(url);
  };

  removeHash = function(url) {
    var link;
    link = url;
    if (url.href == null) {
      link = document.createElement('A');
      link.href = url;
    }
    return link.href.replace(link.hash, '');
  };

  popCookie = function(name) {
    var value, _ref;
    value = ((_ref = document.cookie.match(new RegExp(name + "=(\\w+)"))) != null ? _ref[1].toUpperCase() : void 0) || '';
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/';
    return value;
  };

  triggerEvent = function(name, data) {
    var event;
    event = document.createEvent('Events');
    if (data) {
      event.data = data;
    }
    event.initEvent(name, true, true);
    return document.dispatchEvent(event);
  };

  pageChangePrevented = function() {
    return !triggerEvent('page:before-change');
  };

  processResponse = function() {
    var assetsChanged, clientOrServerError, doc, extractTrackAssets, intersection, validContent;
    clientOrServerError = function() {
      var _ref;
      return (400 <= (_ref = xhr.status) && _ref < 600);
    };
    validContent = function() {
      return xhr.getResponseHeader('Content-Type').match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
    };
    extractTrackAssets = function(doc) {
      var node, _i, _len, _ref, _results;
      _ref = doc.head.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        if ((typeof node.getAttribute === "function" ? node.getAttribute('data-turbolinks-track') : void 0) != null) {
          _results.push(node.getAttribute('src') || node.getAttribute('href'));
        }
      }
      return _results;
    };
    assetsChanged = function(doc) {
      var fetchedAssets;
      loadedAssets || (loadedAssets = extractTrackAssets(document));
      fetchedAssets = extractTrackAssets(doc);
      return fetchedAssets.length !== loadedAssets.length || intersection(fetchedAssets, loadedAssets).length !== loadedAssets.length;
    };
    intersection = function(a, b) {
      var value, _i, _len, _ref, _results;
      if (a.length > b.length) {
        _ref = [b, a], a = _ref[0], b = _ref[1];
      }
      _results = [];
      for (_i = 0, _len = a.length; _i < _len; _i++) {
        value = a[_i];
        if (__indexOf.call(b, value) >= 0) {
          _results.push(value);
        }
      }
      return _results;
    };
    if (!clientOrServerError() && validContent()) {
      doc = createDocument(xhr.responseText);
      if (doc && !assetsChanged(doc)) {
        return doc;
      }
    }
  };

  extractTitleAndBody = function(doc) {
    var title;
    title = doc.querySelector('title');
    return [title != null ? title.textContent : void 0, removeNoscriptTags(doc.body), CSRFToken.get(doc).token, 'runScripts'];
  };

  CSRFToken = {
    get: function(doc) {
      var tag;
      if (doc == null) {
        doc = document;
      }
      return {
        node: tag = doc.querySelector('meta[name="csrf-token"]'),
        token: tag != null ? typeof tag.getAttribute === "function" ? tag.getAttribute('content') : void 0 : void 0
      };
    },
    update: function(latest) {
      var current;
      current = this.get();
      if ((current.token != null) && (latest != null) && current.token !== latest) {
        return current.node.setAttribute('content', latest);
      }
    }
  };

  browserCompatibleDocumentParser = function() {
    var createDocumentUsingDOM, createDocumentUsingParser, createDocumentUsingWrite, e, testDoc, _ref;
    createDocumentUsingParser = function(html) {
      return (new DOMParser).parseFromString(html, 'text/html');
    };
    createDocumentUsingDOM = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.documentElement.innerHTML = html;
      return doc;
    };
    createDocumentUsingWrite = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.open('replace');
      doc.write(html);
      doc.close();
      return doc;
    };
    try {
      if (window.DOMParser) {
        testDoc = createDocumentUsingParser('<html><body><p>test');
        return createDocumentUsingParser;
      }
    } catch (_error) {
      e = _error;
      testDoc = createDocumentUsingDOM('<html><body><p>test');
      return createDocumentUsingDOM;
    } finally {
      if ((testDoc != null ? (_ref = testDoc.body) != null ? _ref.childNodes.length : void 0 : void 0) !== 1) {
        return createDocumentUsingWrite;
      }
    }
  };

  installClickHandlerLast = function(event) {
    if (!event.defaultPrevented) {
      document.removeEventListener('click', handleClick, false);
      return document.addEventListener('click', handleClick, false);
    }
  };

  handleClick = function(event) {
    var link;
    if (!event.defaultPrevented) {
      link = extractLink(event);
      if (link.nodeName === 'A' && !ignoreClick(event, link)) {
        if (!pageChangePrevented()) {
          visit(link.href);
        }
        return event.preventDefault();
      }
    }
  };

  extractLink = function(event) {
    var link;
    link = event.target;
    while (!(!link.parentNode || link.nodeName === 'A')) {
      link = link.parentNode;
    }
    return link;
  };

  crossOriginLink = function(link) {
    return location.protocol !== link.protocol || location.host !== link.host;
  };

  anchoredLink = function(link) {
    return ((link.hash && removeHash(link)) === removeHash(location)) || (link.href === location.href + '#');
  };

  nonHtmlLink = function(link) {
    var url;
    url = removeHash(link);
    return url.match(/\.[a-z]+(\?.*)?$/g) && !url.match(new RegExp("\\.(?:" + (htmlExtensions.join('|')) + ")?(\\?.*)?$", 'g'));
  };

  noTurbolink = function(link) {
    var ignore;
    while (!(ignore || link === document)) {
      ignore = link.getAttribute('data-no-turbolink') != null;
      link = link.parentNode;
    }
    return ignore;
  };

  targetLink = function(link) {
    return link.target.length !== 0;
  };

  nonStandardClick = function(event) {
    return event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
  };

  ignoreClick = function(event, link) {
    return crossOriginLink(link) || anchoredLink(link) || nonHtmlLink(link) || noTurbolink(link) || targetLink(link) || nonStandardClick(event);
  };

  allowLinkExtensions = function() {
    var extension, extensions, _i, _len;
    extensions = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    for (_i = 0, _len = extensions.length; _i < _len; _i++) {
      extension = extensions[_i];
      htmlExtensions.push(extension);
    }
    return htmlExtensions;
  };

  bypassOnLoadPopstate = function(fn) {
    return setTimeout(fn, 500);
  };

  installDocumentReadyPageEventTriggers = function() {
    return document.addEventListener('DOMContentLoaded', (function() {
      triggerEvent('page:change');
      return triggerEvent('page:update');
    }), true);
  };

  installJqueryAjaxSuccessPageUpdateTrigger = function() {
    if (typeof jQuery !== 'undefined') {
      return jQuery(document).on('ajaxSuccess', function(event, xhr, settings) {
        if (!jQuery.trim(xhr.responseText)) {
          return;
        }
        return triggerEvent('page:update');
      });
    }
  };

  installHistoryChangeHandler = function(event) {
    var cachedPage, _ref;
    if ((_ref = event.state) != null ? _ref.turbolinks : void 0) {
      if (cachedPage = pageCache[event.state.url]) {
        cacheCurrentPage();
        return fetchHistory(cachedPage);
      } else {
        return visit(event.target.location.href);
      }
    }
  };

  initializeTurbolinks = function() {
    rememberCurrentUrl();
    rememberCurrentState();
    createDocument = browserCompatibleDocumentParser();
    document.addEventListener('click', installClickHandlerLast, true);
    return bypassOnLoadPopstate(function() {
      return window.addEventListener('popstate', installHistoryChangeHandler, false);
    });
  };

  historyStateIsDefined = window.history.state !== void 0 || navigator.userAgent.match(/Firefox\/2[6|7]/);

  browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && historyStateIsDefined;

  browserIsntBuggy = !navigator.userAgent.match(/CriOS\//);

  requestMethodIsSafe = (_ref = popCookie('request_method')) === 'GET' || _ref === '';

  browserSupportsTurbolinks = browserSupportsPushState && browserIsntBuggy && requestMethodIsSafe;

  browserSupportsCustomEvents = document.addEventListener && document.createEvent;

  if (browserSupportsCustomEvents) {
    installDocumentReadyPageEventTriggers();
    installJqueryAjaxSuccessPageUpdateTrigger();
  }

  if (browserSupportsTurbolinks) {
    visit = fetch;
    initializeTurbolinks();
  } else {
    visit = function(url) {
      return document.location.href = url;
    };
  }

  this.Turbolinks = {
    visit: visit,
    pagesCached: pagesCached,
    enableTransitionCache: enableTransitionCache,
    allowLinkExtensions: allowLinkExtensions,
    supported: browserSupportsTurbolinks
  };

}).call(this);
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */


if (typeof jQuery === 'undefined') { throw new Error('Bootstrap\'s JavaScript requires jQuery') }

/* ========================================================================
 * Bootstrap: transition.js v3.1.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd',
      'MozTransition'    : 'transitionend',
      'OTransition'      : 'oTransitionEnd otransitionend',
      'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.1.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.1.1
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.1.1
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    if ($next.hasClass('active')) return this.sliding = false

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })
    this.$element.trigger(e)
    if (e.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid.bs.carousel', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid.bs.carousel') }, 0)
        })
        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid.bs.carousel')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.1.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') option = !option
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.1.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role=menu]' + desc + ', [role=listbox]' + desc)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).focus()
  }

  function clearMenus(e) {
    $(backdrop).remove()
    $(toggle).each(function () {
      var $parent = getParent($(this))
      var relatedTarget = { relatedTarget: this }
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu], [role=listbox]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal', '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.1.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return
      var that = this;

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.hoverState = null

      var complete = function() {
        that.$element.trigger('shown.bs.' + that.type)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one($.support.transition.end, complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth,
      height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.1.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.1.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.1.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.1.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$window.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (this.affixed == 'top') position.top += scrollTop

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))

    if (affix == 'bottom') {
      this.$element.offset({ top: scrollHeight - offsetBottom - this.$element.height() })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(jQuery);
/*
 HTML5 Shiv v3.7.0 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/

(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);
if(g)return a.createDocumentFragment();for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);
/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.html
 * http://www.gnu.org/licenses/gpl.html
 */

jQuery.cookie = function (key, value, options) {

    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        value = String(value);

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function(d){function e(a){var b=a||window.event,c=[].slice.call(arguments,1),f=0,e=0,g=0,a=d.event.fix(b);a.type="mousewheel";b.wheelDelta&&(f=b.wheelDelta/120);b.detail&&(f=-b.detail/3);g=f;b.axis!==void 0&&b.axis===b.HORIZONTAL_AXIS&&(g=0,e=-1*f);b.wheelDeltaY!==void 0&&(g=b.wheelDeltaY/120);b.wheelDeltaX!==void 0&&(e=-1*b.wheelDeltaX/120);c.unshift(a,f,e,g);return(d.event.dispatch||d.event.handle).apply(this,c)}var c=["DOMMouseScroll","mousewheel"];if(d.event.fixHooks)for(var h=c.length;h;)d.event.fixHooks[c[--h]]=
d.event.mouseHooks;d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],e,false);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],e,false);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
/* jquery-nod - v1.0.1 - 2013-04-13 
 * https://github.com/casperin/nod 
 * Gorm Casper: Licensed MIT
 */

(function(t){var e,s=function(t,e){return function(){return t.apply(e,arguments)}};e=function(){function t(t,e){this.metric=e,this.run=s(this.run,this),this.getVal=this.makeGetVal(t)}return t.prototype.run=function(){return this.verify(this.metric,this.getVal())},t.prototype.makeGetVal=function(t){var e,s;return s=t.attr("type"),"checkbox"===s?function(){return t.is(":checked")}:"radio"===s?(e=t.attr("name"),function(){return jQuery("[name="+e+"]").filter(":checked").val()}):function(){return jQuery.trim(t.val())}},t.prototype.verify=function(t,e){var s,r,i,n;if(t&&t.constructor&&t.call&&t.apply)return t(e);if(t instanceof RegExp)return t.test(e);if(n=jQuery.map(t.split(":"),jQuery.trim),i=n[0],s=n[1],r=n[2],"same-as"===i&&1!==jQuery(s).length)throw Error("same-as selector must target one and only one element");if(!e&&"presence"!==i)return!0;switch(i){case"presence":return!!e;case"exact":return e===s;case"not":return e!==s;case"same-as":return e===jQuery(s).val();case"min-num":return+e>=+s;case"max-num":return+s>=+e;case"between-num":return+e>=+s&&+r>=+e;case"min-length":return e.length>=+s;case"max-length":return+s>=e.length;case"exact-length":return e.length===+s;case"between":return e.length>=+s&&+r>=e.length;case"integer":return/^\s*\d+\s*$/.test(e);case"float":return/^[-+]?[0-9]+(\.[0-9]+)?$/.test(e);case"email":return this.email(e);default:throw Error("I don't know "+i+", sorry.")}},t.prototype.email=function(t){var e;return e=/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/,e.test(t)},t}();var r,s=function(t,e){return function(){return t.apply(e,arguments)}};r=function(){function t(t,r,n,o){this.get=r,this.change_status=s(this.change_status,this),this.runCheck=s(this.runCheck,this),this.delayedCheck=s(this.delayedCheck,this),this.events=s(this.events,this),this.$el=jQuery(t),this.delayId="",this.status=!0,this.checker=new e(this.$el,n),this.msg=new i(this.$el,this.get,o),this.events()}return t.prototype.events=function(){return"radio"===this.$el.attr("type")?jQuery("[name="+this.$el.attr("name")+"]").on("change",this.runCheck):(this.$el.on("change",this.runCheck),this.$el.on("blur",this.runCheck),this.get.delay?this.$el.on("keyup",this.delayedCheck):void 0)},t.prototype.delayedCheck=function(){return clearTimeout(this.delayId),this.delayId=setTimeout(this.runCheck,this.get.delay)},t.prototype.runCheck=function(){return jQuery.when(this.checker.run()).then(this.change_status)},t.prototype.change_status=function(t){var e;return e=!!t,this.status!==e?(this.status=e,this.msg.toggle(this.status),jQuery(this).trigger("nod_toggle")):void 0},t}();var i,s=function(t,e){return function(){return t.apply(e,arguments)}};i=function(){function t(t,e,r){this.$el=t,this.get=e,this.createShowMsg=s(this.createShowMsg,this),this.toggle=s(this.toggle,this),this.createMsg=s(this.createMsg,this),this.$msg=this.createMsg(r),this.showMsg=this.createShowMsg()}return t.prototype.createMsg=function(t){return jQuery("<span/>",{html:t,"class":this.get.helpSpanDisplay+" "+this.get.errorClass})},t.prototype.toggle=function(t){return t?this.$msg.remove():(this.showMsg(),this.broadcastError?this.broadcast():void 0)},t.prototype.createShowMsg=function(){var t,e;return e=this.$el.attr("type"),"checkbox"===e||"radio"===e?function(){return this.$el.parent().append(this.$msg)}:(t=this.findPos(this.$el),function(){return t.after(this.$msg)})},t.prototype.findPos=function(t){return this.elHasClass("parent",t)?this.findPos(t.parent()):this.elHasClass("next",t)?this.findPos(t.next()):t},t.prototype.elHasClass=function(t,e){var s,r,i,n;for(n=this.get.errorPosClasses,r=0,i=n.length;i>r;r++)if(s=n[r],e[t](s).length)return!0;return!1},t.prototype.broadcast=function(){return jQuery(window).trigger("nod_error_fired",{el:this.$el,msg:this.$msg.html()})},t}();var n,s=function(t,e){return function(){return t.apply(e,arguments)}};n=function(){function t(t,e,r){this.form=t,this.formIsErrorFree=s(this.formIsErrorFree,this),this.toggleSubmitBtnText=s(this.toggleSubmitBtnText,this),this.toggleSubmitBtn=s(this.toggleSubmitBtn,this),this.toggleGroupClass=s(this.toggleGroupClass,this),this.toggle_status=s(this.toggle_status,this),this.massCheck=s(this.massCheck,this),this.listenForEnter=s(this.listenForEnter,this),this.events=s(this.events,this),this.createListeners=s(this.createListeners,this),e&&(this.get=jQuery.extend({delay:700,disableSubmitBtn:!0,helpSpanDisplay:"help-inline",groupClass:"error",submitBtnSelector:"[type=submit]",metricsSplitter:":",errorPosClasses:[".help-inline",".add-on","button",".input-append"],broadcastError:!1,errorClass:"nod_msg",groupSelector:".control-group"},r),this.listeners=this.createListeners(e),this.submit=this.form.find(this.get.submitBtnSelector),this.checkIfElementsExist(this.form,this.submit,this.get.disableSubmitBtn),this.events())}return t.prototype.createListeners=function(t){var e,s,i,n,o,h,u,a,l,c,g;for(i=[],u=0,l=t.length;l>u;u++)for(s=t[u],3!==s.length&&this["throw"]("field",s),h=s[0],n=s[1],o=s[2],g=this.form.find(h),a=0,c=g.length;c>a;a++)e=g[a],i.push(new r(e,this.get,n,o));return i},t.prototype.events=function(){var t,e,s,r;for(r=this.listeners,e=0,s=r.length;s>e;e++)t=r[e],jQuery(t).on("nod_toggle",this.toggle_status);return this.submit.length?this.submit.on("click",this.massCheck):this.form.on("keyup",this.listenForEnter)},t.prototype.listenForEnter=function(t){return 13===t.keyCode?this.massCheck():void 0},t.prototype.massCheck=function(t){var e,s,r,i,n,o=this;for(null!=t&&t.preventDefault(),e=[],n=this.listeners,r=0,i=n.length;i>r;r++)s=n[r],e.push(s.runCheck());return this.toggleSubmitBtnText(),jQuery.when.apply(window,e).then(function(){return o.formIsErrorFree()?o.form.submit():void 0}).then(this.toggleSubmitBtnText)},t.prototype.toggle_status=function(t){return this.toggleGroupClass(t.target.$el.parents(this.get.groupSelector)),this.get.disableSubmitBtn?this.toggleSubmitBtn():void 0},t.prototype.toggleGroupClass=function(t){return t.find("."+this.get.errorClass).length?t.addClass(this.get.groupClass):t.removeClass(this.get.groupClass)},t.prototype.toggleSubmitBtn=function(){return this.formIsErrorFree()?this.submit.removeClass("disabled").removeAttr("disabled"):this.submit.addClass("disabled").attr("disabled","disabled")},t.prototype.toggleSubmitBtnText=function(){var t;return t=this.submit.attr("data-loading-text"),t?(this.submit.attr("data-loading-text",this.submit.html()),this.submit.html(t)):void 0},t.prototype.formIsErrorFree=function(){return!jQuery(this.listeners).filter(function(){return!this.status}).length},t.prototype.checkIfElementsExist=function(t,e,s){return t.selector&&t.length||this["throw"]("form",t),!e.length&&s?this["throw"]("submit",e):void 0},t.prototype["throw"]=function(t,e){var s;switch(t){case"form":s="Couldn't find form: ";break;case"submit":s="Couldn't find submit button: ";break;case"field":s="Metrics for each field must have three parts: "}throw Error(s+e)},t}(),t.fn.nod=function(t,e){return new n(this,t,e),this}})(jQuery);
$(document).ready(function() {
	// Active Theme: Select the theme you want to activate on the entire website
	$("body").addClass("wp-theme-3");
	
	//Carousels
	$('.carousel').carousel({
		interval: 5000,
		pause	: 'hover'
	});
	// Sortable list
	$('#ulSorList').mixitup();
	// Fancybox
	$(".theater").fancybox();
	// Fancybox	
	$(".ext-source").fancybox({
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: '50%',
		'height'			: '60%',
		'scrolling'   		: 'no'
	});
	
	// Masonry
	var container = document.querySelector('#masonryWr');
	var msnry = new Masonry( container, {
	  itemSelector: '.item'
	});
	// Scroll to top
	$().UItoTop({ easingType: 'easeOutQuart' });
	// Inview animations
	$.fn.waypoint.defaults = {
		context: window,
		continuous: true,
		enabled: true,
		horizontal: false,
		offset: 300,
		triggerOnce: false
	}
	$('.animate-in-view, .chart').waypoint(function(direction) {
		var barColor;
		// Easy Pie Chart
		$(".chart").easyPieChart({
			size:150,
			easing: 'easeOutBounce',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			},
			barColor:'#FFF',
			delay: 3000,
			trackColor:'rgba(255,255,255,0.2)',
			scaleColor:false,
			lineWidth:16,
			lineCap:'butt'
		});
	});
	$("#btnSignIn").click(function(){
		$("#dropdownForm").hide();
		$("#dropdownProfile").fadeIn(300);	
		return false;
	});
	// Search function
	$("#cmdAsideMenu, #btnHideAsideMenu, .navbar-toggle-aside-menu").click(function(){
		if($("#asideMenu").is(":visible")){
			$("#asideMenu").hide();
			$("body").removeClass("aside-menu-in");
		}
		else{
			$("body").addClass("aside-menu-in");
			$("#asideMenu").show();
		}
		return false;	
	});
	// Theme Switcher for Preview
	var scheme = $.cookie('scheme');
	if (scheme == 'wp-theme-1') {
		$("body").removeClass();
		$("body").addClass("wp-theme-1");
	}
	else if (scheme == 'wp-theme-2') {
		$("body").removeClass();
		$("body").addClass("wp-theme-2");
	}
	else if (scheme == 'wp-theme-3') {
		$("body").removeClass();
		$("body").addClass("wp-theme-3");
	}
	else if (scheme == 'wp-theme-4') {
		$("body").removeClass();
		$("body").addClass("wp-theme-4");
	}
	else if (scheme == 'wp-theme-5') {
		$("body").removeClass();
		$("body").addClass("wp-theme-5");
	}
	else if (scheme == 'wp-theme-6') {
		$("body").removeClass();
		$("body").addClass("wp-theme-6");
	}
	
	var layout = $.cookie('layout');
	if (layout == 'boxed') {
		$(".wrapper").addClass("boxed");
	}
	else{
		$(".wrapper").removeClass("boxed");	
	}
	
	var topHeader = $.cookie('top-header');
	if (topHeader == 'hide') {
		$(".top-header").addClass("hide");
	}
	else{
		$(".top-header").removeClass("hide");
	}
	
	var layout = $.cookie('layout');
	if (layout == 'boxed') {
		$(".wrapper").addClass("boxed");
	}
	else{
		$(".wrapper").removeClass("boxed");	
	}
	
	var background = $.cookie('background');
	if (background == 'body-bg-1') {
		$("body").addClass("body-bg-1");
	}
	else if (background == 'body-bg-2') {
		$("body").addClass("body-bg-2");
	}
	else if (background == 'body-bg-3') {
		$("body").addClass("body-bg-3");
	}
	else if (background == 'body-bg-4') {
		$("body").addClass("body-bg-4");
	}
	else if (background == 'body-bg-5') {
		$("body").addClass("body-bg-5");
	}
	else if (background == 'body-bg-6') {
		$("body").addClass("body-bg-6");
	}
	
	var date = new Date();
	date.setTime(date.getTime() + (5 * 60 * 1000));
	
	$("#cmdRed").click(function(){
		$("body").removeClass(scheme);
		$("body").addClass("wp-theme-1");
		checkAsideMenuVisibility();
		$.cookie('scheme', 'wp-theme-1', { expires:date});
		scheme = "wp-theme-1";
		return false;
	});
	$("#cmdViolet").click(function(){
		$("body").removeClass(scheme);
		$("body").addClass("wp-theme-2");
		checkAsideMenuVisibility();
		$.cookie('scheme', 'wp-theme-2', { expires:date});
		scheme = "wp-theme-2";
		return false;
	});
	$("#cmdBlue").click(function(){
		$("body").removeClass(scheme);
		$("body").addClass("wp-theme-3");
		checkAsideMenuVisibility();
		$.cookie('scheme', 'wp-theme-3', { expires:date});
		scheme = "wp-theme-3";
		return false;
	});
	$("#cmdGreen").click(function(){
		$("body").removeClass(scheme);
		$("body").addClass("wp-theme-4");
		checkAsideMenuVisibility();
		$.cookie('scheme', 'wp-theme-4', { expires:date});
		scheme = "wp-theme-4";
		return false;
	});
	$("#cmdYellow").click(function(){
		$("body").removeClass(scheme);
		$("body").addClass("wp-theme-5");
		checkAsideMenuVisibility();
		$.cookie('scheme', 'wp-theme-5', { expires:date});
		scheme = "wp-theme-5";
		return false;
	});
	$("#cmdOrange").click(function(){
		$("body").removeClass(scheme);
		$("body").addClass("wp-theme-6");
		checkAsideMenuVisibility();
		$.cookie('scheme', 'wp-theme-6', { expires:date});
		scheme = "wp-theme-6";
		return false;
	});
	
	function checkAsideMenuVisibility(){
		if($("#asideMenu").is(":visible")){
			$("#asideMenu").show();
			$("body").addClass("aside-menu-in");
		}
	}
	
	// Layout
	$("#cmbLayout").change(function(){
		if($("#cmbLayout").val() == 2){
			$(".wrapper").addClass("boxed");	
			$.cookie('layout', 'boxed', { expires:date});
		}
		else{
			$(".wrapper").removeClass("boxed");
			$.cookie('layout', 'fluid', { expires:date});
		}
	});
	
	// Top header
	$("#cmbTopHeader").change(function(){
		if($("#cmbTopHeader").val() == 2){
			$(".top-header").addClass("hide");
			$.cookie('top-header', 'hide', { expires:date});	
		}
		else{
			$(".top-header").removeClass("hide");
			$.cookie('top-header', 'show', { expires:date});	
		}
	});
	
	// Pattern/background
	$("#cmbBackground").change(function(){
		if($("#cmbBackground").val() == 1){
			$("body").removeClass(background);
			$("body").addClass("body-bg-1");
			$.cookie('background', 'body-bg-1', { expires:date});
			background = "body-bg-1";	
		}
		else if($("#cmbBackground").val() == 2){
			$("body").removeClass(background);
			$("body").addClass("body-bg-2");
			$.cookie('background', 'body-bg-2', { expires:date});	
			background = "body-bg-2";	
		}
		else if($("#cmbBackground").val() == 3){
			$("body").removeClass(background);
			$("body").addClass("body-bg-3");
			$.cookie('background', 'body-bg-3', { expires:date});	
			background = "body-bg-3";	
		}
		else if($("#cmbBackground").val() == 4){
			$("body").removeClass(background);
			$("body").addClass("body-bg-4");
			$.cookie('background', 'body-bg-4', { expires:date});	
			background = "body-bg-4";	
		}
		else if($("#cmbBackground").val() == 5){
			$("body").removeClass(background);
			$("body").addClass("body-bg-5");
			$.cookie('background', 'body-bg-5', { expires:date});	
			background = "body-bg-5";	
		}
		else if($("#cmbBackground").val() == 6){
			$("body").removeClass(background);
			$("body").addClass("body-bg-6");
			$.cookie('background', 'body-bg-6', { expires:date});	
			background = "body-bg-6";	
		}
	});
});
/*!
 * LESS - Leaner CSS v1.6.0
 * http://lesscss.org
 *
 * Copyright (c) 2009-2014, Alexis Sellier <self@cloudhead.net>
 * Licensed under the Apache v2 License.
 *
 */

 /** * @license Apache v2
 */


!function(a,b){function c(b){return a.less[b.split("/")[1]]}function d(a,b){"development"==v.env&&"undefined"!=typeof console&&v.logLevel>=b&&console.log("less: "+a)}function e(a){return a.replace(/^[a-z-]+:\/+?[^\/]+/,"").replace(/^\//,"").replace(/\.[a-zA-Z]+$/,"").replace(/[^\.\w-]+/g,"-").replace(/\./g,":")}function f(a,c){var e="{line} {content}",f=a.filename||c,g=[],h=(a.type||"Syntax")+"Error: "+(a.message||"There is an error in your .less file")+" in "+f+" ",i=function(a,c,d){a.extract[c]!==b&&g.push(e.replace(/\{line\}/,(parseInt(a.line,10)||0)+(c-1)).replace(/\{class\}/,d).replace(/\{content\}/,a.extract[c]))};a.extract?(i(a,0,""),i(a,1,"line"),i(a,2,""),h+="on line "+a.line+", column "+(a.column+1)+":\n"+g.join("\n")):a.stack&&(h+=a.stack),d(h,y.errors)}function g(a,b,c){var f=b.href||"",g="less:"+(b.title||e(f)),h=document.getElementById(g),i=!1,j=document.createElement("style");if(j.setAttribute("type","text/css"),b.media&&j.setAttribute("media",b.media),j.id=g,j.styleSheet)try{j.styleSheet.cssText=a}catch(k){throw new Error("Couldn't reassign styleSheet.cssText.")}else j.appendChild(document.createTextNode(a)),i=null!==h&&h.childNodes.length>0&&j.childNodes.length>0&&h.firstChild.nodeValue===j.firstChild.nodeValue;var l=document.getElementsByTagName("head")[0];if(null===h||i===!1){var m=b&&b.nextSibling||null;m?m.parentNode.insertBefore(j,m):l.appendChild(j)}if(h&&i===!1&&h.parentNode.removeChild(h),c&&C){d("saving "+f+" to cache.",y.info);try{C.setItem(f,a),C.setItem(f+":timestamp",c)}catch(k){d("failed to save",y.errors)}}}function h(a,c){var d,f,h="less-error-message:"+e(c||""),i='<li><label>{line}</label><pre class="{class}">{content}</pre></li>',j=document.createElement("div"),k=[],l=a.filename||c,m=l.match(/([^\/]+(\?.*)?)$/)[1];j.id=h,j.className="less-error-message",f="<h3>"+(a.type||"Syntax")+"Error: "+(a.message||"There is an error in your .less file")+'</h3><p>in <a href="'+l+'">'+m+"</a> ";var n=function(a,c,d){a.extract[c]!==b&&k.push(i.replace(/\{line\}/,(parseInt(a.line,10)||0)+(c-1)).replace(/\{class\}/,d).replace(/\{content\}/,a.extract[c]))};a.extract?(n(a,0,""),n(a,1,"line"),n(a,2,""),f+="on line "+a.line+", column "+(a.column+1)+":</p><ul>"+k.join("")+"</ul>"):a.stack&&(f+="<br/>"+a.stack.split("\n").slice(1).join("<br/>")),j.innerHTML=f,g([".less-error-message ul, .less-error-message li {","list-style-type: none;","margin-right: 15px;","padding: 4px 0;","margin: 0;","}",".less-error-message label {","font-size: 12px;","margin-right: 15px;","padding: 4px 0;","color: #cc7777;","}",".less-error-message pre {","color: #dd6666;","padding: 4px 0;","margin: 0;","display: inline-block;","}",".less-error-message pre.line {","color: #ff0000;","}",".less-error-message h3 {","font-size: 20px;","font-weight: bold;","padding: 15px 0 5px 0;","margin: 0;","}",".less-error-message a {","color: #10a","}",".less-error-message .error {","color: red;","font-weight: bold;","padding-bottom: 2px;","border-bottom: 1px dashed red;","}"].join("\n"),{title:"error-message"}),j.style.cssText=["font-family: Arial, sans-serif","border: 1px solid #e00","background-color: #eee","border-radius: 5px","-webkit-border-radius: 5px","-moz-border-radius: 5px","color: #e00","padding: 15px","margin-bottom: 15px"].join(";"),"development"==v.env&&(d=setInterval(function(){document.body&&(document.getElementById(h)?document.body.replaceChild(j,document.getElementById(h)):document.body.insertBefore(j,document.body.firstChild),clearInterval(d))},10))}function i(a,b){v.errorReporting&&"html"!==v.errorReporting?"console"===v.errorReporting?f(a,b):"function"==typeof v.errorReporting&&v.errorReporting("add",a,b):h(a,b)}function j(a){var b=document.getElementById("less-error-message:"+e(a));b&&b.parentNode.removeChild(b)}function k(){}function l(a){v.errorReporting&&"html"!==v.errorReporting?"console"===v.errorReporting?k(a):"function"==typeof v.errorReporting&&v.errorReporting("remove",a):j(a)}function m(a){for(var b,c=document.getElementsByTagName("style"),d=0;d<c.length;d++)if(b=c[d],b.type.match(B)){var e=new v.tree.parseEnv(v),f=b.innerHTML||"";e.filename=document.location.href.replace(/#.*$/,""),(a||v.globalVars)&&(e.useFileCache=!0);var g=function(a){return function(b,c){if(b)return i(b,"inline");var d=c.toCSS(v);a.type="text/css",a.styleSheet?a.styleSheet.cssText=d:a.innerHTML=d}}(b);new v.Parser(e).parse(f,g,{globalVars:v.globalVars,modifyVars:a})}}function n(a,b){var c,d,e=/^((?:[a-z-]+:)?\/+?(?:[^\/\?#]*\/)|([\/\\]))?((?:[^\/\\\?#]*[\/\\])*)([^\/\\\?#]*)([#\?].*)?$/i,f=a.match(e),g={},h=[];if(!f)throw new Error("Could not parse sheet href - '"+a+"'");if(!f[1]||f[2]){if(d=b.match(e),!d)throw new Error("Could not parse page url - '"+b+"'");f[1]=f[1]||d[1]||"",f[2]||(f[3]=d[3]+f[3])}if(f[3]){for(h=f[3].replace(/\\/g,"/").split("/"),c=0;c<h.length;c++)"."===h[c]&&(h.splice(c,1),c-=1);for(c=0;c<h.length;c++)".."===h[c]&&c>0&&(h.splice(c-1,2),c-=2)}return g.hostPart=f[1],g.directories=h,g.path=f[1]+h.join("/"),g.fileUrl=g.path+(f[4]||""),g.url=g.fileUrl+(f[5]||""),g}function o(a,b){var c,d,e,f,g=n(a),h=n(b),i="";if(g.hostPart!==h.hostPart)return"";for(d=Math.max(h.directories.length,g.directories.length),c=0;d>c&&h.directories[c]===g.directories[c];c++);for(f=h.directories.slice(c),e=g.directories.slice(c),c=0;c<f.length-1;c++)i+="../";for(c=0;c<e.length-1;c++)i+=e[c]+"/";return i}function p(){if(a.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("MSXML2.XMLHTTP.3.0")}catch(b){return d("browser doesn't support AJAX.",y.errors),null}}function q(a,b,c,e){function f(b,c,d){b.status>=200&&b.status<300?c(b.responseText,b.getResponseHeader("Last-Modified")):"function"==typeof d&&d(b.status,a)}var g=p(),h=x?v.fileAsync:v.async;"function"==typeof g.overrideMimeType&&g.overrideMimeType("text/css"),d("XHR: Getting '"+a+"'",y.info),g.open("GET",a,h),g.setRequestHeader("Accept",b||"text/x-less, text/css; q=0.9, */*; q=0.5"),g.send(null),x&&!v.fileAsync?0===g.status||g.status>=200&&g.status<300?c(g.responseText):e(g.status,a):h?g.onreadystatechange=function(){4==g.readyState&&f(g,c,e)}:f(g,c,e)}function r(b,c,d,e){c&&c.currentDirectory&&!/^([a-z-]+:)?\//.test(b)&&(b=c.currentDirectory+b);var f=n(b,a.location.href),g=f.url,h={currentDirectory:f.path,filename:g};if(c?(h.entryPath=c.entryPath,h.rootpath=c.rootpath,h.rootFilename=c.rootFilename,h.relativeUrls=c.relativeUrls):(h.entryPath=f.path,h.rootpath=v.rootpath||f.path,h.rootFilename=g,h.relativeUrls=e.relativeUrls),h.relativeUrls&&(h.rootpath=e.rootpath?n(e.rootpath+o(f.path,h.entryPath)).path:f.path),e.useFileCache&&D[g])try{var i=D[g];d(null,i,g,h,{lastModified:new Date})}catch(j){d(j,null,g)}else q(g,e.mime,function(a,b){D[g]=a;try{d(null,a,g,h,{lastModified:b})}catch(c){d(c,null,g)}},function(a,b){d({type:"File",message:"'"+b+"' wasn't found ("+a+")"},null,g)})}function s(a,b,c,d,e){var f=new v.tree.parseEnv(v);f.mime=a.type,(e||v.globalVars)&&(f.useFileCache=!0),r(a.href,null,function(h,i,j,k,m){if(m){m.remaining=d;var n=C&&C.getItem(j),o=C&&C.getItem(j+":timestamp");if(!c&&o&&m.lastModified&&new Date(m.lastModified).valueOf()===new Date(o).valueOf())return g(n,a),m.local=!0,b(null,null,i,a,m,j),void 0}l(j),i?(f.currentFileInfo=k,new v.Parser(f).parse(i,function(c,d){if(c)return b(c,null,null,a);try{b(c,d,i,a,m,j)}catch(c){b(c,null,null,a)}},{modifyVars:e,globalVars:v.globalVars})):b(h,null,null,a,m,j)},f,e)}function t(a,b,c){for(var d=0;d<v.sheets.length;d++)s(v.sheets[d],a,b,v.sheets.length-(d+1),c)}function u(){"development"===v.env?(v.optimization=0,v.watchTimer=setInterval(function(){v.watchMode&&t(function(a,b,c,d,e){a?i(a,d.href):b&&g(b.toCSS(v),d,e.lastModified)})},v.poll)):v.optimization=3}("undefined"==typeof a.less||"undefined"!=typeof a.less.nodeType)&&(a.less={}),v=a.less,w=a.less.tree={},v.mode="browser";var v,w;v===b&&(v=exports,w=c("./tree"),v.mode="node"),v.Parser=function(a){function d(){z=D,A=E=x}function e(){D=z,E=x=A}function f(){x>E&&(D=D.slice(x-E),E=x)}function g(a,b){var c=a.charCodeAt(0|b);return 32>=c&&(32===c||10===c||9===c)}function h(a){var b,c,d=typeof a;return"string"===d?u.charAt(x)!==a?null:(k(1),a):(f(),(b=a.exec(D))?(c=b[0].length,k(c),"string"==typeof b?b:1===b.length?b[0]:b):null)}function i(a){x>E&&(D=D.slice(x-E),E=x);var b=a.exec(D);return b?(k(b[0].length),"string"==typeof b?b:1===b.length?b[0]:b):null}function j(a){return u.charAt(x)!==a?null:(k(1),a)}function k(a){for(var b,c=x,d=y,e=x-E,f=x+D.length-e,g=x+=a,h=u;f>x&&(b=h.charCodeAt(x),!(b>32))&&(32===b||10===b||9===b||13===b);x++);return D=D.slice(a+x-g+e),E=x,!D.length&&y<C.length-1&&(D=C[++y]),c!==x||d!==y}function l(a,b){var c="function"==typeof a?a.call(G):h(a);return c?c:(n(b||("string"==typeof a?"expected '"+a+"' got '"+u.charAt(x)+"'":"unexpected token")),void 0)}function m(a,b){return u.charAt(x)===a?(k(1),a):(n(b||"expected '"+a+"' got '"+u.charAt(x)+"'"),void 0)}function n(a,b){var c=new Error(a);throw c.index=x,c.type=b||"Syntax",c}function o(a){return"string"==typeof a?u.charAt(x)===a:a.test(D)}function p(a){return u.charAt(x)===a}function q(a,b){return a.filename&&b.currentFileInfo.filename&&a.filename!==b.currentFileInfo.filename?F.imports.contents[a.filename]:u}function r(a,b){for(var c=a+1,d=null,e=-1;--c>=0&&"\n"!==b.charAt(c);)e++;return"number"==typeof a&&(d=(b.slice(0,a).match(/\n/g)||"").length),{line:d,column:e}}function s(a,b,d){var e=d.currentFileInfo.filename;return"browser"!==v.mode&&"rhino"!==v.mode&&(e=c("path").resolve(e)),{lineNumber:r(a,b).line+1,fileName:e}}function t(a,b){var c=q(a,b),d=r(a.index,c),e=d.line,f=d.column,g=a.call&&r(a.call,c).line,h=c.split("\n");this.type=a.type||"Syntax",this.message=a.message,this.filename=a.filename||b.currentFileInfo.filename,this.index=a.index,this.line="number"==typeof e?e+1:null,this.callLine=g+1,this.callExtract=h[g],this.stack=a.stack,this.column=f,this.extract=[h[e-1],h[e],h[e+1]]}var u,x,y,z,A,B,C,D,E,F,G,H=a&&a.filename;a instanceof w.parseEnv||(a=new w.parseEnv(a));var I=this.imports={paths:a.paths||[],queue:[],files:a.files,contents:a.contents,contentsIgnoredChars:a.contentsIgnoredChars,mime:a.mime,error:null,push:function(b,c,d,e){var f=this;this.queue.push(b);var g=function(a,c,d){f.queue.splice(f.queue.indexOf(b),1);var g=d in f.files||d===H;f.files[d]=c,a&&!f.error&&(f.error=a),e(a,c,g,d)};v.Parser.importer?v.Parser.importer(b,c,g,a):v.Parser.fileLoader(b,c,function(b,e,f,h){if(b)return g(b),void 0;var i=new w.parseEnv(a);i.currentFileInfo=h,i.processImports=!1,i.contents[f]=e,(c.reference||d.reference)&&(h.reference=!0),d.inline?g(null,e,f):new v.Parser(i).parse(e,function(a,b){g(a,b,f)})},a)}},J=i;return t.prototype=new Error,t.prototype.constructor=t,this.env=a=a||{},this.optimization="optimization"in this.env?this.env.optimization:1,F={imports:I,parse:function(d,e,f){var g,h,i,j,k,l=null,m="";if(x=y=E=B=0,j=f&&f.globalVars?v.Parser.serializeVars(f.globalVars)+"\n":"",k=f&&f.modifyVars?"\n"+v.Parser.serializeVars(f.modifyVars):"",(j||f&&f.banner)&&(m=(f&&f.banner?f.banner:"")+j,F.imports.contentsIgnoredChars[a.currentFileInfo.filename]=m.length),d=d.replace(/\r\n/g,"\n"),u=d=m+d.replace(/^\uFEFF/,"")+k,F.imports.contents[a.currentFileInfo.filename]=d,C=function(b){function c(b,c){l=new t({index:c||i,type:"Parse",message:b,filename:a.currentFileInfo.filename},a)}function d(a){var c=i-s;512>c&&!a||!c||(r.push(b.slice(s,i+1)),s=i+1)}var e,f,g,h,i,j,k,m,n,o=b.length,p=0,q=0,r=[],s=0;for(i=0;o>i;i++)if(k=b.charCodeAt(i),!(k>=97&&122>=k||34>k))switch(k){case 40:q++;continue;case 41:q--;continue;case 59:q||d();continue;case 123:p++,e=i;continue;case 125:p--,f=i,p||d();continue;case 92:if(o-1>i){i++;continue}return c("unescaped `\\`");case 34:case 39:case 96:for(n=0,j=i,i+=1;o>i;i++)if(m=b.charCodeAt(i),!(m>96)){if(m==k){n=1;break}if(92==m){if(i==o-1)return c("unescaped `\\`");i++}}if(n)continue;return c("unmatched `"+String.fromCharCode(k)+"`",j);case 47:if(q||i==o-1)continue;if(m=b.charCodeAt(i+1),47==m)for(i+=2;o>i&&(m=b.charCodeAt(i),!(13>=m)||10!=m&&13!=m);i++);else if(42==m){for(g=j=i,i+=2;o-1>i&&(m=b.charCodeAt(i),125==m&&(h=i),42!=m||47!=b.charCodeAt(i+1));i++);if(i==o-1)return c("missing closing `*/`",j)}continue;case 42:if(o-1>i&&47==b.charCodeAt(i+1))return c("unmatched `/*`");continue}return 0!==p?p>0?g>e&&h>g?c("missing closing `}` or `*/`",e):c("missing closing `}`",e):c("missing opening `{`",f):0!==q?c(q>0?"missing closing `)`":"missing opening `(`"):(d(!0),r)}(d),l)return e(new t(l,a));D=C[0];try{g=new w.Ruleset(null,this.parsers.primary()),g.root=!0,g.firstRoot=!0}catch(n){return e(new t(n,a))}if(g.toCSS=function(d){return function(e,f){e=e||{};var g,h,i=new w.evalEnv(e);"object"!=typeof f||Array.isArray(f)||(f=Object.keys(f).map(function(a){var b=f[a];return b instanceof w.Value||(b instanceof w.Expression||(b=new w.Expression([b])),b=new w.Value([b])),new w.Rule("@"+a,b,!1,null,0)}),i.frames=[new w.Ruleset(null,f)]);try{var j,k=[],l=[new w.joinSelectorVisitor,new w.processExtendsVisitor,new w.toCSSVisitor({compress:Boolean(e.compress)})],m=this;if(e.plugins)for(j=0;j<e.plugins.length;j++)e.plugins[j].isPreEvalVisitor?k.push(e.plugins[j]):e.plugins[j].isPreVisitor?l.splice(0,0,e.plugins[j]):l.push(e.plugins[j]);for(j=0;j<k.length;j++)k[j].run(m);for(g=d.call(m,i),j=0;j<l.length;j++)l[j].run(g);e.sourceMap&&(g=new w.sourceMapOutput({contentsIgnoredCharsMap:F.imports.contentsIgnoredChars,writeSourceMap:e.writeSourceMap,rootNode:g,contentsMap:F.imports.contents,sourceMapFilename:e.sourceMapFilename,sourceMapURL:e.sourceMapURL,outputFilename:e.sourceMapOutputFilename,sourceMapBasepath:e.sourceMapBasepath,sourceMapRootpath:e.sourceMapRootpath,outputSourceFiles:e.outputSourceFiles,sourceMapGenerator:e.sourceMapGenerator})),h=g.toCSS({compress:Boolean(e.compress),dumpLineNumbers:a.dumpLineNumbers,strictUnits:Boolean(e.strictUnits)})}catch(n){throw new t(n,a)}if(e.cleancss&&"node"===v.mode){var o=c("clean-css"),p=e.cleancssOptions||{};return p.keepSpecialComments===b&&(p.keepSpecialComments="*"),p.processImport=!1,p.noRebase=!0,p.noAdvanced===b&&(p.noAdvanced=!0),new o(p).minify(h)}return e.compress?h.replace(/(^(\s)+)|((\s)+$)/g,""):h}}(g.eval),x<u.length-1){x=B;var o=r(x,u);i=u.split("\n"),h=o.line+1,l={type:"Parse",message:"Unrecognised input",index:x,filename:a.currentFileInfo.filename,line:h,column:o.column,extract:[i[h-2],i[h-1],i[h]]}}var p=function(b){return b=l||b||F.imports.error,b?(b instanceof t||(b=new t(b,a)),e(b)):e(null,g)};return a.processImports===!1?p():(new w.importVisitor(this.imports,p).run(g),void 0)},parsers:G={primary:function(){for(var a,b=this.mixin,c=J,d=[];;)if(a=this.extendRule()||b.definition()||this.rule()||this.ruleset()||b.call()||this.comment()||this.directive())d.push(a);else if(!c(/^[\s\n]+/)&&!c(/^;+/))break;return d},comment:function(){var b;if("/"===u.charAt(x))return"/"===u.charAt(x+1)?new w.Comment(i(/^\/\/.*/),!0,x,a.currentFileInfo):(b=i(/^\/\*(?:[^*]|\*+[^\/*])*\*+\/\n?/),b?new w.Comment(b,!1,x,a.currentFileInfo):void 0)},comments:function(){for(var a,b=[];;){if(a=this.comment(),!a)break;b.push(a)}return b},entities:{quoted:function(){var b,c,d=x,e=x;return"~"===u.charAt(d)&&(d++,c=!0),'"'===u.charAt(d)||"'"===u.charAt(d)?(c&&j("~"),b=i(/^"((?:[^"\\\r\n]|\\.)*)"|'((?:[^'\\\r\n]|\\.)*)'/),b?new w.Quoted(b[0],b[1]||b[2],c,e,a.currentFileInfo):void 0):void 0},keyword:function(){var a;if(a=i(/^[_A-Za-z-][_A-Za-z0-9-]*/)){var b=w.Color.fromKeyword(a);return b?b:new w.Keyword(a)}},call:function(){var b,c,d,e,f=x;if(b=/^([\w-]+|%|progid:[\w\.]+)\(/.exec(D)){if(b=b[1],c=b.toLowerCase(),"url"===c)return null;if(x+=b.length,"alpha"===c&&(e=G.alpha(),"undefined"!=typeof e))return e;if(j("("),d=this.arguments(),j(")"))return b?new w.Call(b,d,f,a.currentFileInfo):void 0}},arguments:function(){for(var a,b=[];;){if(a=this.assignment()||G.expression(),!a)break;if(b.push(a),!j(","))break}return b},literal:function(){return this.dimension()||this.color()||this.quoted()||this.unicodeDescriptor()},assignment:function(){var a,b;return a=i(/^\w+(?=\s?=)/i),a&&j("=")?(b=G.entity(),b?new w.Assignment(a,b):void 0):void 0},url:function(){var b;if("u"===u.charAt(x)&&i(/^url\(/))return b=this.quoted()||this.variable()||i(/^(?:(?:\\[\(\)'"])|[^\(\)'"])+/)||"",m(")"),new w.URL(null!=b.value||b instanceof w.Variable?b:new w.Anonymous(b),a.currentFileInfo)},variable:function(){var b,c=x;return"@"===u.charAt(x)&&(b=i(/^@@?[\w-]+/))?new w.Variable(b,c,a.currentFileInfo):void 0},variableCurly:function(){var b,c=x;return"@"===u.charAt(x)&&(b=i(/^@\{([\w-]+)\}/))?new w.Variable("@"+b[1],c,a.currentFileInfo):void 0},color:function(){var a;return"#"===u.charAt(x)&&(a=i(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/))?new w.Color(a[1]):void 0},dimension:function(){var a,b=u.charCodeAt(x);if(!(b>57||43>b||47===b||44==b))return a=i(/^([+-]?\d*\.?\d+)(%|[a-z]+)?/),a?new w.Dimension(a[1],a[2]):void 0},unicodeDescriptor:function(){var a;return a=i(/^U\+[0-9a-fA-F?]+(\-[0-9a-fA-F?]+)?/),a?new w.UnicodeDescriptor(a[0]):void 0},javascript:function(){var c,d,e=x;return"~"===u.charAt(e)&&(e++,d=!0),"`"===u.charAt(e)?(a.javascriptEnabled===b||a.javascriptEnabled||n("You are using JavaScript, which has been disabled."),d&&j("~"),c=i(/^`([^`]*)`/),c?new w.JavaScript(c[1],x,d):void 0):void 0}},variable:function(){var a;return"@"===u.charAt(x)&&(a=i(/^(@[\w-]+)\s*:/))?a[1]:void 0},extend:function(a){var b,c,d,e,f,g=x;if(a?i(/^&:extend\(/):i(/^:extend\(/)){do{for(d=null,b=null;!(d=i(/^(all)(?=\s*(\)|,))/))&&(c=this.element());)b?b.push(c):b=[c];d=d&&d[1],f=new w.Extend(new w.Selector(b),d,g),e?e.push(f):e=[f]}while(j(","));return l(/^\)/),a&&l(/^;/),e}},extendRule:function(){return this.extend(!0)},mixin:{call:function(){var b,c,f,g,h,k=u.charAt(x),l=!1,n=x;if("."===k||"#"===k){for(d();;){if(f=i(/^[#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/),!f)break;c=new w.Element(g,f,x,a.currentFileInfo),b?b.push(c):b=[c],g=j(">")}return j("(")&&(h=this.args(!0).args,m(")")),G.important()&&(l=!0),b&&(j(";")||p("}"))?new w.mixin.Call(b,h,n,a.currentFileInfo,l):(e(),void 0)}},args:function(a){for(var b,c,d,e,f,g,h=F.parsers,k=h.entities,m={args:null,variadic:!1},o=[],p=[],q=[];;){if(a)g=h.expression();else{if(h.comments(),"."===u.charAt(x)&&i(/^\.{3}/)){m.variadic=!0,j(";")&&!b&&(b=!0),(b?p:q).push({variadic:!0});break}g=k.variable()||k.literal()||k.keyword()}if(!g)break;e=null,g.throwAwayComments&&g.throwAwayComments(),f=g;var r=null;if(a?1==g.value.length&&(r=g.value[0]):r=g,r&&r instanceof w.Variable)if(j(":"))o.length>0&&(b&&n("Cannot mix ; and , as delimiter types"),c=!0),f=l(h.expression),e=d=r.name;else{if(!a&&i(/^\.{3}/)){m.variadic=!0,j(";")&&!b&&(b=!0),(b?p:q).push({name:g.name,variadic:!0});break}a||(d=e=r.name,f=null)}f&&o.push(f),q.push({name:e,value:f}),j(",")||(j(";")||b)&&(c&&n("Cannot mix ; and , as delimiter types"),b=!0,o.length>1&&(f=new w.Value(o)),p.push({name:d,value:f}),d=null,o=[],c=!1)}return m.args=b?p:q,m},definition:function(){var a,b,c,f,g=[],h=!1;if(!("."!==u.charAt(x)&&"#"!==u.charAt(x)||o(/^[^{]*\}/))&&(d(),b=i(/^([#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+)\s*\(/))){a=b[1];var k=this.args(!1);if(g=k.args,h=k.variadic,j(")")||(B=x,e()),G.comments(),i(/^when/)&&(f=l(G.conditions,"expected condition")),c=G.block())return new w.mixin.Definition(a,g,c,f,h);e()}}},entity:function(){var a=this.entities;return a.literal()||a.variable()||a.url()||a.call()||a.keyword()||a.javascript()||this.comment()},end:function(){return j(";")||p("}")},alpha:function(){var a;if(i(/^\(opacity=/i))return a=i(/^\d+/)||this.entities.variable(),a?(m(")"),new w.Alpha(a)):void 0},element:function(){var b,c,d;return c=this.combinator(),b=i(/^(?:\d+\.\d+|\d+)%/)||i(/^(?:[.#]?|:*)(?:[\w-]|[^\x00-\x9f]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/)||j("*")||j("&")||this.attribute()||i(/^\([^()@]+\)/)||i(/^[\.#](?=@)/)||this.entities.variableCurly(),b||j("(")&&(d=this.selector())&&j(")")&&(b=new w.Paren(d)),b?new w.Element(c,b,x,a.currentFileInfo):void 0},combinator:function(){var a=u.charAt(x);if(">"===a||"+"===a||"~"===a||"|"===a){for(x++;g(u,x);)x++;return new w.Combinator(a)}return g(u,x-1)?new w.Combinator(" "):new w.Combinator(null)},lessSelector:function(){return this.selector(!0)},selector:function(b){for(var c,d,e,f,g,h,i,j=J;(b&&(g=this.extend())||b&&(h=j(/^when/))||(f=this.element()))&&(h?i=l(this.conditions,"expected condition"):i?n("CSS guard can only be used at the end of selector"):g?d?d.push(g):d=[g]:(d&&n("Extend can only be used at the end of selector"),e=u.charAt(x),c?c.push(f):c=[f],f=null),"{"!==e&&"}"!==e&&";"!==e&&","!==e&&")"!==e););return c?new w.Selector(c,d,i,x,a.currentFileInfo):(d&&n("Extend must be used to extend a selector, it cannot be used on its own"),void 0)},attribute:function(){if(j("[")){var a,b,c,d=this.entities;return(a=d.variableCurly())||(a=l(/^(?:[_A-Za-z0-9-\*]*\|)?(?:[_A-Za-z0-9-]|\\.)+/)),c=i(/^[|~*$^]?=/),c&&(b=d.quoted()||i(/^[0-9]+%/)||i(/^[\w-]+/)||d.variableCurly()),m("]"),new w.Attribute(a,c,b)}},block:function(){var a;return j("{")&&(a=this.primary())&&j("}")?a:void 0},ruleset:function(){var b,c,f,g;for(d(),a.dumpLineNumbers&&(g=s(x,u,a));;){if(c=this.lessSelector(),!c)break;if(b?b.push(c):b=[c],this.comments(),!j(","))break;c.condition&&n("Guards are only currently allowed on a single selector."),this.comments()}if(b&&(f=this.block())){var h=new w.Ruleset(b,f,a.strictImports);return a.dumpLineNumbers&&(h.debugInfo=g),h}B=x,e()},rule:function(b){var c,f,g,h=u.charAt(x),i=!1;if(d(),"."!==h&&"#"!==h&&"&"!==h&&(c=this.variable()||this.ruleProperty())){if(f=!b&&(a.compress||c.charAt&&"@"===c.charAt(0))?this.value()||this.anonymousValue():this.anonymousValue()||this.value(),g=this.important(),i=c.pop&&"+"===c.pop(),f&&this.end())return new w.Rule(c,f,g,i,A,a.currentFileInfo);if(B=x,e(),f&&!b)return this.rule(!0)}},anonymousValue:function(){var a;return a=/^([^@+\/'"*`(;{}-]*);/.exec(D),a?(x+=a[0].length-1,new w.Anonymous(a[1])):void 0},"import":function(){var b,c,f=x;d();var g=i(/^@import?\s+/),h=(g?this.importOptions():null)||{};return g&&(b=this.entities.quoted()||this.entities.url())&&(c=this.mediaFeatures(),j(";"))?(c=c&&new w.Value(c),new w.Import(b,c,h,f,a.currentFileInfo)):(e(),void 0)},importOptions:function(){var a,b,c,d={};if(!j("("))return null;do if(a=this.importOption()){switch(b=a,c=!0,b){case"css":b="less",c=!1;break;case"once":b="multiple",c=!1}if(d[b]=c,!j(","))break}while(a);return m(")"),d},importOption:function(){var a=i(/^(less|css|multiple|once|inline|reference)/);return a?a[1]:void 0},mediaFeature:function(){var b,c,d=this.entities,e=[];do if(b=d.keyword()||d.variable())e.push(b);else if(j("(")){if(c=this.property(),b=this.value(),!j(")"))return null;if(c&&b)e.push(new w.Paren(new w.Rule(c,b,null,null,x,a.currentFileInfo,!0)));else{if(!b)return null;e.push(new w.Paren(b))}}while(b);return e.length>0?new w.Expression(e):void 0},mediaFeatures:function(){var a,b=this.entities,c=[];do if(a=this.mediaFeature()){if(c.push(a),!j(","))break}else if(a=b.variable(),a&&(c.push(a),!j(",")))break;while(a);return c.length>0?c:null},media:function(){var b,c,d,e;return a.dumpLineNumbers&&(e=s(x,u,a)),i(/^@media/)&&(b=this.mediaFeatures(),c=this.block())?(d=new w.Media(c,b,x,a.currentFileInfo),a.dumpLineNumbers&&(d.debugInfo=e),d):void 0},directive:function(){var b,c,f,g,h,k,l,m;if("@"===u.charAt(x)){if(c=this["import"]()||this.media())return c;if(d(),b=i(/^@[a-z-]+/)){switch(g=b,"-"==b.charAt(1)&&b.indexOf("-",2)>0&&(g="@"+b.slice(b.indexOf("-",2)+1)),g){case"@font-face":h=!0;break;case"@viewport":case"@top-left":case"@top-left-corner":case"@top-center":case"@top-right":case"@top-right-corner":case"@bottom-left":case"@bottom-left-corner":case"@bottom-center":case"@bottom-right":case"@bottom-right-corner":case"@left-top":case"@left-middle":case"@left-bottom":case"@right-top":case"@right-middle":case"@right-bottom":h=!0;break;case"@host":case"@page":case"@document":case"@supports":case"@keyframes":h=!0,k=!0;break;case"@namespace":l=!0}if(k&&(m=(i(/^[^{]+/)||"").trim(),m&&(b+=" "+m)),h){if(f=this.block())return new w.Directive(b,f,x,a.currentFileInfo)}else if(c=l?this.expression():this.entity(),c&&j(";")){var n=new w.Directive(b,c,x,a.currentFileInfo);return a.dumpLineNumbers&&(n.debugInfo=s(x,u,a)),n}e()}}},value:function(){var a,b=[];do if(a=this.expression(),a&&(b.push(a),!j(",")))break;while(a);return b.length>0?new w.Value(b):void 0},important:function(){return"!"===u.charAt(x)?i(/^! *important/):void 0},sub:function(){var a,b;return j("(")&&(a=this.addition())?(b=new w.Expression([a]),m(")"),b.parens=!0,b):void 0},multiplication:function(){var a,b,c,d,e;if(a=this.operand()){for(e=g(u,x-1);;){if(o(/^\/[*\/]/))break;if(c=j("/")||j("*"),!c)break;if(b=this.operand(),!b)break;a.parensInOp=!0,b.parensInOp=!0,d=new w.Operation(c,[d||a,b],e),e=g(u,x-1)}return d||a}},addition:function(){var a,b,c,d,e;if(a=this.multiplication()){for(e=g(u,x-1);;){if(c=i(/^[-+]\s+/)||!e&&(j("+")||j("-")),!c)break;if(b=this.multiplication(),!b)break;a.parensInOp=!0,b.parensInOp=!0,d=new w.Operation(c,[d||a,b],e),e=g(u,x-1)}return d||a}},conditions:function(){var a,b,c,d=x;if(a=this.condition()){for(;;){if(!o(/^,\s*(not\s*)?\(/)||!j(","))break;if(b=this.condition(),!b)break;c=new w.Condition("or",c||a,b,d)}return c||a}},condition:function(){var a,b,c,d,e=this.entities,f=x,g=!1;return i(/^not/)&&(g=!0),m("("),a=this.addition()||e.keyword()||e.quoted(),a?(d=i(/^(?:>=|<=|=<|[<=>])/),d?(b=this.addition()||e.keyword()||e.quoted(),b?c=new w.Condition(d,a,b,f,g):n("expected expression")):c=new w.Condition("=",a,new w.Keyword("true"),f,g),m(")"),i(/^and/)?new w.Condition("and",c,this.condition()):c):void 0},operand:function(){var a,b=this.entities,c=u.charAt(x+1);"-"!==u.charAt(x)||"@"!==c&&"("!==c||(a=j("-"));var d=this.sub()||b.dimension()||b.color()||b.variable()||b.call();return a&&(d.parensInOp=!0,d=new w.Negative(d)),d},expression:function(){var a,b,c=[];do a=this.addition()||this.entity(),a&&(c.push(a),o(/^\/[\/*]/)||(b=j("/"),b&&c.push(new w.Anonymous(b))));while(a);return c.length>0?new w.Expression(c):void 0},property:function(){var a=i(/^(\*?-?[_a-zA-Z0-9-]+)\s*:/);return a?a[1]:void 0},ruleProperty:function(){function b(a){var b=a.exec(c);return b?(e.push(x+f),f+=b[0].length,c=c.slice(b[1].length),d.push(b[1])):void 0}var c=D,d=[],e=[],f=0;for(b(/^(\*?)/);b(/^((?:[\w-]+)|(?:@\{[\w-]+\}))/););if(d.length>1&&b(/^\s*(\+?)\s*:/)){k(f);for(var g in d)"@"===d[g].charAt(0)&&(d[g]=new w.Variable("@"+d[g].slice(2,-1),e[g],a.currentFileInfo));return d}}}}},v.Parser.serializeVars=function(a){var b="";for(var c in a)if(Object.hasOwnProperty.call(a,c)){var d=a[c];b+=("@"===c[0]?"":"@")+c+": "+d+(";"===(""+d).slice(-1)?"":";")}return b},function(d){function e(a,b,c){if(!(c instanceof d.Dimension))throw{type:"Argument",message:"argument must be a number"};return null==b?b=c.unit:c=c.unify(),new d.Dimension(a(parseFloat(c.value)),b)}function f(a,b,c){var e,f,g,h,i=b.alpha,j=c.alpha,k=[];g=j+i*(1-j);for(var l=0;3>l;l++)e=b.rgb[l]/255,f=c.rgb[l]/255,h=a(e,f),g&&(h=(j*f+i*(e-j*(e+f-h)))/g),k[l]=255*h;return new d.Color(k,g)}function g(){var a,b=d.functions;for(a in l)b[a]=e.bind(null,Math[a],l[a]);for(a in m)b[a]=f.bind(null,m[a]);a=d.defaultFunc,b.default=a.eval.bind(a)}function h(a){return d.functions.hsla(a.h,a.s,a.l,a.a)}function i(a,b){return a instanceof d.Dimension&&a.unit.is("%")?parseFloat(a.value*b/100):j(a)}function j(a){if(a instanceof d.Dimension)return parseFloat(a.unit.is("%")?a.value/100:a.value);if("number"==typeof a)return a;throw{error:"RuntimeError",message:"color functions take numbers as parameters"}}function k(a){return Math.min(1,Math.max(0,a))}d.functions={rgb:function(a,b,c){return this.rgba(a,b,c,1)},rgba:function(a,b,c,e){var f=[a,b,c].map(function(a){return i(a,255)});return e=j(e),new d.Color(f,e)},hsl:function(a,b,c){return this.hsla(a,b,c,1)},hsla:function(a,b,c,d){function e(a){return a=0>a?a+1:a>1?a-1:a,1>6*a?g+(f-g)*a*6:1>2*a?f:2>3*a?g+(f-g)*(2/3-a)*6:g}a=j(a)%360/360,b=k(j(b)),c=k(j(c)),d=k(j(d));var f=.5>=c?c*(b+1):c+b-c*b,g=2*c-f;return this.rgba(255*e(a+1/3),255*e(a),255*e(a-1/3),d)},hsv:function(a,b,c){return this.hsva(a,b,c,1)},hsva:function(a,b,c,d){a=j(a)%360/360*360,b=j(b),c=j(c),d=j(d);var e,f;e=Math.floor(a/60%6),f=a/60-e;var g=[c,c*(1-b),c*(1-f*b),c*(1-(1-f)*b)],h=[[0,3,1],[2,0,1],[1,0,3],[1,2,0],[3,1,0],[0,1,2]];return this.rgba(255*g[h[e][0]],255*g[h[e][1]],255*g[h[e][2]],d)},hue:function(a){return new d.Dimension(Math.round(a.toHSL().h))},saturation:function(a){return new d.Dimension(Math.round(100*a.toHSL().s),"%")},lightness:function(a){return new d.Dimension(Math.round(100*a.toHSL().l),"%")},hsvhue:function(a){return new d.Dimension(Math.round(a.toHSV().h))},hsvsaturation:function(a){return new d.Dimension(Math.round(100*a.toHSV().s),"%")},hsvvalue:function(a){return new d.Dimension(Math.round(100*a.toHSV().v),"%")},red:function(a){return new d.Dimension(a.rgb[0])},green:function(a){return new d.Dimension(a.rgb[1])},blue:function(a){return new d.Dimension(a.rgb[2])},alpha:function(a){return new d.Dimension(a.toHSL().a)},luma:function(a){return new d.Dimension(Math.round(a.luma()*a.alpha*100),"%")},saturate:function(a,b){if(!a.rgb)return null;var c=a.toHSL();return c.s+=b.value/100,c.s=k(c.s),h(c)},desaturate:function(a,b){var c=a.toHSL();return c.s-=b.value/100,c.s=k(c.s),h(c)},lighten:function(a,b){var c=a.toHSL();return c.l+=b.value/100,c.l=k(c.l),h(c)},darken:function(a,b){var c=a.toHSL();return c.l-=b.value/100,c.l=k(c.l),h(c)},fadein:function(a,b){var c=a.toHSL();return c.a+=b.value/100,c.a=k(c.a),h(c)},fadeout:function(a,b){var c=a.toHSL();return c.a-=b.value/100,c.a=k(c.a),h(c)},fade:function(a,b){var c=a.toHSL();return c.a=b.value/100,c.a=k(c.a),h(c)},spin:function(a,b){var c=a.toHSL(),d=(c.h+b.value)%360;return c.h=0>d?360+d:d,h(c)},mix:function(a,b,c){c||(c=new d.Dimension(50));var e=c.value/100,f=2*e-1,g=a.toHSL().a-b.toHSL().a,h=((f*g==-1?f:(f+g)/(1+f*g))+1)/2,i=1-h,j=[a.rgb[0]*h+b.rgb[0]*i,a.rgb[1]*h+b.rgb[1]*i,a.rgb[2]*h+b.rgb[2]*i],k=a.alpha*e+b.alpha*(1-e);return new d.Color(j,k)},greyscale:function(a){return this.desaturate(a,new d.Dimension(100))},contrast:function(a,b,c,d){if(!a.rgb)return null;if("undefined"==typeof c&&(c=this.rgba(255,255,255,1)),"undefined"==typeof b&&(b=this.rgba(0,0,0,1)),b.luma()>c.luma()){var e=c;c=b,b=e}return d="undefined"==typeof d?.43:j(d),a.luma()<d?c:b},e:function(a){return new d.Anonymous(a instanceof d.JavaScript?a.evaluated:a)},escape:function(a){return new d.Anonymous(encodeURI(a.value).replace(/=/g,"%3D").replace(/:/g,"%3A").replace(/#/g,"%23").replace(/;/g,"%3B").replace(/\(/g,"%28").replace(/\)/g,"%29"))},"%":function(a){for(var b=Array.prototype.slice.call(arguments,1),c=a.value,e=0;e<b.length;e++)c=c.replace(/%[sda]/i,function(a){var c=a.match(/s/i)?b[e].value:b[e].toCSS();return a.match(/[A-Z]$/)?encodeURIComponent(c):c});return c=c.replace(/%%/g,"%"),new d.Quoted('"'+c+'"',c)},unit:function(a,b){if(!(a instanceof d.Dimension))throw{type:"Argument",message:"the first argument to unit must be a number"+(a instanceof d.Operation?". Have you forgotten parenthesis?":"")};return new d.Dimension(a.value,b?b.toCSS():"")},convert:function(a,b){return a.convertTo(b.value)},round:function(a,b){var c="undefined"==typeof b?0:b.value;return e(function(a){return a.toFixed(c)},null,a)},pi:function(){return new d.Dimension(Math.PI)},mod:function(a,b){return new d.Dimension(a.value%b.value,a.unit)},pow:function(a,b){if("number"==typeof a&&"number"==typeof b)a=new d.Dimension(a),b=new d.Dimension(b);else if(!(a instanceof d.Dimension&&b instanceof d.Dimension))throw{type:"Argument",message:"arguments must be numbers"};return new d.Dimension(Math.pow(a.value,b.value),a.unit)},_minmax:function(a,c){switch(c=Array.prototype.slice.call(c),c.length){case 0:throw{type:"Argument",message:"one or more arguments required"};case 1:return c[0]}var e,f,g,h,i,j,k=[],l={};for(e=0;e<c.length;e++)g=c[e],g instanceof d.Dimension?(h=g.unify(),j=h.unit.toString(),f=l[j],f!==b?(i=k[f].unify(),(a&&h.value<i.value||!a&&h.value>i.value)&&(k[f]=g)):(l[j]=k.length,k.push(g))):k.push(g);
return 1==k.length?k[0]:(c=k.map(function(a){return a.toCSS(this.env)}).join(this.env.compress?",":", "),new d.Anonymous((a?"min":"max")+"("+c+")"))},min:function(){return this._minmax(!0,arguments)},max:function(){return this._minmax(!1,arguments)},argb:function(a){return new d.Anonymous(a.toARGB())},percentage:function(a){return new d.Dimension(100*a.value,"%")},color:function(a){if(a instanceof d.Quoted){var b,c=a.value;if(b=d.Color.fromKeyword(c))return b;if(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/.test(c))return new d.Color(c.slice(1));throw{type:"Argument",message:"argument must be a color keyword or 3/6 digit hex e.g. #FFF"}}throw{type:"Argument",message:"argument must be a string"}},iscolor:function(a){return this._isa(a,d.Color)},isnumber:function(a){return this._isa(a,d.Dimension)},isstring:function(a){return this._isa(a,d.Quoted)},iskeyword:function(a){return this._isa(a,d.Keyword)},isurl:function(a){return this._isa(a,d.URL)},ispixel:function(a){return this.isunit(a,"px")},ispercentage:function(a){return this.isunit(a,"%")},isem:function(a){return this.isunit(a,"em")},isunit:function(a,b){return a instanceof d.Dimension&&a.unit.is(b.value||b)?d.True:d.False},_isa:function(a,b){return a instanceof b?d.True:d.False},tint:function(a,b){return this.mix(this.rgb(255,255,255),a,b)},shade:function(a,b){return this.mix(this.rgb(0,0,0),a,b)},extract:function(a,b){return b=b.value-1,Array.isArray(a.value)?a.value[b]:Array(a)[b]},length:function(a){var b=Array.isArray(a.value)?a.value.length:1;return new d.Dimension(b)},"data-uri":function(b,e){if("undefined"!=typeof a)return new d.URL(e||b,this.currentFileInfo).eval(this.env);var f=b.value,g=e&&e.value,h=c("fs"),i=c("path"),j=!1;if(arguments.length<2&&(g=f),this.env.isPathRelative(g)&&(g=this.currentFileInfo.relativeUrls?i.join(this.currentFileInfo.currentDirectory,g):i.join(this.currentFileInfo.entryPath,g)),arguments.length<2){var k;try{k=c("mime")}catch(l){k=d._mime}f=k.lookup(g);var m=k.charsets.lookup(f);j=["US-ASCII","UTF-8"].indexOf(m)<0,j&&(f+=";base64")}else j=/;base64$/.test(f);var n=h.readFileSync(g),o=32,p=parseInt(n.length/1024,10);if(p>=o&&this.env.ieCompat!==!1)return this.env.silent||console.warn("Skipped data-uri embedding of %s because its size (%dKB) exceeds IE8-safe %dKB!",g,p,o),new d.URL(e||b,this.currentFileInfo).eval(this.env);n=j?n.toString("base64"):encodeURIComponent(n);var q="'data:"+f+","+n+"'";return new d.URL(new d.Anonymous(q))},"svg-gradient":function(a){function c(){throw{type:"Argument",message:"svg-gradient expects direction, start_color [start_position], [color position,]..., end_color [end_position]"}}arguments.length<3&&c();var e,f,g,h,i,j,k,l=Array.prototype.slice.call(arguments,1),m="linear",n='x="0" y="0" width="1" height="1"',o=!0,p={compress:!1},q=a.toCSS(p);switch(q){case"to bottom":e='x1="0%" y1="0%" x2="0%" y2="100%"';break;case"to right":e='x1="0%" y1="0%" x2="100%" y2="0%"';break;case"to bottom right":e='x1="0%" y1="0%" x2="100%" y2="100%"';break;case"to top right":e='x1="0%" y1="100%" x2="100%" y2="0%"';break;case"ellipse":case"ellipse at center":m="radial",e='cx="50%" cy="50%" r="75%"',n='x="-50" y="-50" width="101" height="101"';break;default:throw{type:"Argument",message:"svg-gradient direction must be 'to bottom', 'to right', 'to bottom right', 'to top right' or 'ellipse at center'"}}for(f='<?xml version="1.0" ?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none"><'+m+'Gradient id="gradient" gradientUnits="userSpaceOnUse" '+e+">",g=0;g<l.length;g+=1)l[g].value?(h=l[g].value[0],i=l[g].value[1]):(h=l[g],i=b),h instanceof d.Color&&((0===g||g+1===l.length)&&i===b||i instanceof d.Dimension)||c(),j=i?i.toCSS(p):0===g?"0%":"100%",k=h.alpha,f+='<stop offset="'+j+'" stop-color="'+h.toRGB()+'"'+(1>k?' stop-opacity="'+k+'"':"")+"/>";if(f+="</"+m+"Gradient><rect "+n+' fill="url(#gradient)" /></svg>',o)try{f=new Buffer(f).toString("base64")}catch(r){o=!1}return f="'data:image/svg+xml"+(o?";base64":"")+","+f+"'",new d.URL(new d.Anonymous(f))}},d._mime={_types:{".htm":"text/html",".html":"text/html",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".png":"image/png"},lookup:function(a){var e=c("path").extname(a),f=d._mime._types[e];if(f===b)throw new Error('Optional dependency "mime" is required for '+e);return f},charsets:{lookup:function(a){return a&&/^text\//.test(a)?"UTF-8":""}}};var l={ceil:null,floor:null,sqrt:null,abs:null,tan:"",sin:"",cos:"",atan:"rad",asin:"rad",acos:"rad"},m={multiply:function(a,b){return a*b},screen:function(a,b){return a+b-a*b},overlay:function(a,b){return a*=2,1>=a?m.multiply(a,b):m.screen(a-1,b)},softlight:function(a,b){var c=1,d=a;return b>.5&&(d=1,c=a>.25?Math.sqrt(a):((16*a-12)*a+4)*a),a-(1-2*b)*d*(c-a)},hardlight:function(a,b){return m.overlay(b,a)},difference:function(a,b){return Math.abs(a-b)},exclusion:function(a,b){return a+b-2*a*b},average:function(a,b){return(a+b)/2},negation:function(a,b){return 1-Math.abs(a+b-1)}};d.defaultFunc={eval:function(){var a=this.value_,b=this.error_;if(b)throw b;return null!=a?a?d.True:d.False:void 0},value:function(a){this.value_=a},error:function(a){this.error_=a},reset:function(){this.value_=this.error_=null}},g(),d.functionCall=function(a,b){this.env=a,this.currentFileInfo=b},d.functionCall.prototype=d.functions}(c("./tree")),function(a){a.colors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}}(c("./tree")),function(a){a.debugInfo=function(b,c,d){var e="";if(b.dumpLineNumbers&&!b.compress)switch(b.dumpLineNumbers){case"comments":e=a.debugInfo.asComment(c);break;case"mediaquery":e=a.debugInfo.asMediaQuery(c);break;case"all":e=a.debugInfo.asComment(c)+(d||"")+a.debugInfo.asMediaQuery(c)}return e},a.debugInfo.asComment=function(a){return"/* line "+a.debugInfo.lineNumber+", "+a.debugInfo.fileName+" */\n"},a.debugInfo.asMediaQuery=function(a){return"@media -sass-debug-info{filename{font-family:"+("file://"+a.debugInfo.fileName).replace(/([.:/\\])/g,function(a){return"\\"==a&&(a="/"),"\\"+a})+"}line{font-family:\\00003"+a.debugInfo.lineNumber+"}}\n"},a.find=function(a,b){for(var c,d=0;d<a.length;d++)if(c=b.call(a,a[d]))return c;return null},a.jsify=function(a){return Array.isArray(a.value)&&a.value.length>1?"["+a.value.map(function(a){return a.toCSS(!1)}).join(", ")+"]":a.toCSS(!1)},a.toCSS=function(a){var b=[];return this.genCSS(a,{add:function(a){b.push(a)},isEmpty:function(){return 0===b.length}}),b.join("")},a.outputRuleset=function(a,b,c){var d,e=c.length;if(a.tabLevel=(0|a.tabLevel)+1,a.compress){for(b.add("{"),d=0;e>d;d++)c[d].genCSS(a,b);return b.add("}"),a.tabLevel--,void 0}var f="\n"+Array(a.tabLevel).join("  "),g=f+"  ";if(e){for(b.add(" {"+g),c[0].genCSS(a,b),d=1;e>d;d++)b.add(g),c[d].genCSS(a,b);b.add(f+"}")}else b.add(" {"+f+"}");a.tabLevel--}}(c("./tree")),function(a){a.Alpha=function(a){this.value=a},a.Alpha.prototype={type:"Alpha",accept:function(a){this.value=a.visit(this.value)},eval:function(b){return this.value.eval?new a.Alpha(this.value.eval(b)):this},genCSS:function(a,b){b.add("alpha(opacity="),this.value.genCSS?this.value.genCSS(a,b):b.add(this.value),b.add(")")},toCSS:a.toCSS}}(c("../tree")),function(a){a.Anonymous=function(a,b,c,d){this.value=a.value||a,this.index=b,this.mapLines=d,this.currentFileInfo=c},a.Anonymous.prototype={type:"Anonymous",eval:function(){return new a.Anonymous(this.value,this.index,this.currentFileInfo,this.mapLines)},compare:function(a){if(!a.toCSS)return-1;var b=this.toCSS(),c=a.toCSS();return b===c?0:c>b?-1:1},genCSS:function(a,b){b.add(this.value,this.currentFileInfo,this.index,this.mapLines)},toCSS:a.toCSS}}(c("../tree")),function(a){a.Assignment=function(a,b){this.key=a,this.value=b},a.Assignment.prototype={type:"Assignment",accept:function(a){this.value=a.visit(this.value)},eval:function(b){return this.value.eval?new a.Assignment(this.key,this.value.eval(b)):this},genCSS:function(a,b){b.add(this.key+"="),this.value.genCSS?this.value.genCSS(a,b):b.add(this.value)},toCSS:a.toCSS}}(c("../tree")),function(a){a.Call=function(a,b,c,d){this.name=a,this.args=b,this.index=c,this.currentFileInfo=d},a.Call.prototype={type:"Call",accept:function(a){this.args&&(this.args=a.visitArray(this.args))},eval:function(b){var c,d,e=this.args.map(function(a){return a.eval(b)}),f=this.name.toLowerCase();if(f in a.functions)try{if(d=new a.functionCall(b,this.currentFileInfo),c=d[f].apply(d,e),null!=c)return c}catch(g){throw{type:g.type||"Runtime",message:"error evaluating function `"+this.name+"`"+(g.message?": "+g.message:""),index:this.index,filename:this.currentFileInfo.filename}}return new a.Call(this.name,e,this.index,this.currentFileInfo)},genCSS:function(a,b){b.add(this.name+"(",this.currentFileInfo,this.index);for(var c=0;c<this.args.length;c++)this.args[c].genCSS(a,b),c+1<this.args.length&&b.add(", ");b.add(")")},toCSS:a.toCSS}}(c("../tree")),function(a){function b(a){return"#"+a.map(function(a){return a=c(Math.round(a),255),(16>a?"0":"")+a.toString(16)}).join("")}function c(a,b){return Math.min(Math.max(a,0),b)}a.Color=function(a,b){this.rgb=Array.isArray(a)?a:6==a.length?a.match(/.{2}/g).map(function(a){return parseInt(a,16)}):a.split("").map(function(a){return parseInt(a+a,16)}),this.alpha="number"==typeof b?b:1};var d="transparent";a.Color.prototype={type:"Color",eval:function(){return this},luma:function(){return.2126*this.rgb[0]/255+.7152*this.rgb[1]/255+.0722*this.rgb[2]/255},genCSS:function(a,b){b.add(this.toCSS(a))},toCSS:function(a,b){var e=a&&a.compress&&!b;if(this.alpha<1)return 0===this.alpha&&this.isTransparentKeyword?d:"rgba("+this.rgb.map(function(a){return c(Math.round(a),255)}).concat(c(this.alpha,1)).join(","+(e?"":" "))+")";var f=this.toRGB();if(e){var g=f.split("");g[1]===g[2]&&g[3]===g[4]&&g[5]===g[6]&&(f="#"+g[1]+g[3]+g[5])}return f},operate:function(b,c,d){for(var e=[],f=this.alpha*(1-d.alpha)+d.alpha,g=0;3>g;g++)e[g]=a.operate(b,c,this.rgb[g],d.rgb[g]);return new a.Color(e,f)},toRGB:function(){return b(this.rgb)},toHSL:function(){var a,b,c=this.rgb[0]/255,d=this.rgb[1]/255,e=this.rgb[2]/255,f=this.alpha,g=Math.max(c,d,e),h=Math.min(c,d,e),i=(g+h)/2,j=g-h;if(g===h)a=b=0;else{switch(b=i>.5?j/(2-g-h):j/(g+h),g){case c:a=(d-e)/j+(e>d?6:0);break;case d:a=(e-c)/j+2;break;case e:a=(c-d)/j+4}a/=6}return{h:360*a,s:b,l:i,a:f}},toHSV:function(){var a,b,c=this.rgb[0]/255,d=this.rgb[1]/255,e=this.rgb[2]/255,f=this.alpha,g=Math.max(c,d,e),h=Math.min(c,d,e),i=g,j=g-h;if(b=0===g?0:j/g,g===h)a=0;else{switch(g){case c:a=(d-e)/j+(e>d?6:0);break;case d:a=(e-c)/j+2;break;case e:a=(c-d)/j+4}a/=6}return{h:360*a,s:b,v:i,a:f}},toARGB:function(){return b([255*this.alpha].concat(this.rgb))},compare:function(a){return a.rgb?a.rgb[0]===this.rgb[0]&&a.rgb[1]===this.rgb[1]&&a.rgb[2]===this.rgb[2]&&a.alpha===this.alpha?0:-1:-1}},a.Color.fromKeyword=function(b){if(a.colors.hasOwnProperty(b))return new a.Color(a.colors[b].slice(1));if(b===d){var c=new a.Color([0,0,0],0);return c.isTransparentKeyword=!0,c}}}(c("../tree")),function(a){a.Comment=function(a,b,c,d){this.value=a,this.silent=!!b,this.currentFileInfo=d},a.Comment.prototype={type:"Comment",genCSS:function(b,c){this.debugInfo&&c.add(a.debugInfo(b,this),this.currentFileInfo,this.index),c.add(this.value.trim())},toCSS:a.toCSS,isSilent:function(a){var b=this.currentFileInfo&&this.currentFileInfo.reference&&!this.isReferenced,c=a.compress&&!this.value.match(/^\/\*!/);return this.silent||b||c},eval:function(){return this},markReferenced:function(){this.isReferenced=!0}}}(c("../tree")),function(a){a.Condition=function(a,b,c,d,e){this.op=a.trim(),this.lvalue=b,this.rvalue=c,this.index=d,this.negate=e},a.Condition.prototype={type:"Condition",accept:function(a){this.lvalue=a.visit(this.lvalue),this.rvalue=a.visit(this.rvalue)},eval:function(a){var b,c=this.lvalue.eval(a),d=this.rvalue.eval(a),e=this.index;return b=function(a){switch(a){case"and":return c&&d;case"or":return c||d;default:if(c.compare)b=c.compare(d);else{if(!d.compare)throw{type:"Type",message:"Unable to perform comparison",index:e};b=d.compare(c)}switch(b){case-1:return"<"===a||"=<"===a||"<="===a;case 0:return"="===a||">="===a||"=<"===a||"<="===a;case 1:return">"===a||">="===a}}}(this.op),this.negate?!b:b}}}(c("../tree")),function(a){a.Dimension=function(c,d){this.value=parseFloat(c),this.unit=d&&d instanceof a.Unit?d:new a.Unit(d?[d]:b)},a.Dimension.prototype={type:"Dimension",accept:function(a){this.unit=a.visit(this.unit)},eval:function(){return this},toColor:function(){return new a.Color([this.value,this.value,this.value])},genCSS:function(a,b){if(a&&a.strictUnits&&!this.unit.isSingular())throw new Error("Multiple units in dimension. Correct the units or use the unit function. Bad unit: "+this.unit.toString());var c=this.value,d=String(c);if(0!==c&&1e-6>c&&c>-1e-6&&(d=c.toFixed(20).replace(/0+$/,"")),a&&a.compress){if(0===c&&this.unit.isLength())return b.add(d),void 0;c>0&&1>c&&(d=d.substr(1))}b.add(d),this.unit.genCSS(a,b)},toCSS:a.toCSS,operate:function(b,c,d){var e=a.operate(b,c,this.value,d.value),f=this.unit.clone();if("+"===c||"-"===c)if(0===f.numerator.length&&0===f.denominator.length)f.numerator=d.unit.numerator.slice(0),f.denominator=d.unit.denominator.slice(0);else if(0===d.unit.numerator.length&&0===f.denominator.length);else{if(d=d.convertTo(this.unit.usedUnits()),b.strictUnits&&d.unit.toString()!==f.toString())throw new Error("Incompatible units. Change the units or use the unit function. Bad units: '"+f.toString()+"' and '"+d.unit.toString()+"'.");e=a.operate(b,c,this.value,d.value)}else"*"===c?(f.numerator=f.numerator.concat(d.unit.numerator).sort(),f.denominator=f.denominator.concat(d.unit.denominator).sort(),f.cancel()):"/"===c&&(f.numerator=f.numerator.concat(d.unit.denominator).sort(),f.denominator=f.denominator.concat(d.unit.numerator).sort(),f.cancel());return new a.Dimension(e,f)},compare:function(b){if(b instanceof a.Dimension){var c=this.unify(),d=b.unify(),e=c.value,f=d.value;return f>e?-1:e>f?1:d.unit.isEmpty()||0===c.unit.compare(d.unit)?0:-1}return-1},unify:function(){return this.convertTo({length:"m",duration:"s",angle:"rad"})},convertTo:function(b){var c,d,e,f,g,h=this.value,i=this.unit.clone(),j={};if("string"==typeof b){for(c in a.UnitConversions)a.UnitConversions[c].hasOwnProperty(b)&&(j={},j[c]=b);b=j}g=function(a,b){return e.hasOwnProperty(a)?(b?h/=e[a]/e[f]:h*=e[a]/e[f],f):a};for(d in b)b.hasOwnProperty(d)&&(f=b[d],e=a.UnitConversions[d],i.map(g));return i.cancel(),new a.Dimension(h,i)}},a.UnitConversions={length:{m:1,cm:.01,mm:.001,"in":.0254,pt:.0254/72,pc:.0254/72*12},duration:{s:1,ms:.001},angle:{rad:1/(2*Math.PI),deg:1/360,grad:.0025,turn:1}},a.Unit=function(a,b,c){this.numerator=a?a.slice(0).sort():[],this.denominator=b?b.slice(0).sort():[],this.backupUnit=c},a.Unit.prototype={type:"Unit",clone:function(){return new a.Unit(this.numerator.slice(0),this.denominator.slice(0),this.backupUnit)},genCSS:function(a,b){this.numerator.length>=1?b.add(this.numerator[0]):this.denominator.length>=1?b.add(this.denominator[0]):a&&a.strictUnits||!this.backupUnit||b.add(this.backupUnit)},toCSS:a.toCSS,toString:function(){var a,b=this.numerator.join("*");for(a=0;a<this.denominator.length;a++)b+="/"+this.denominator[a];return b},compare:function(a){return this.is(a.toString())?0:-1},is:function(a){return this.toString()===a},isLength:function(){return Boolean(this.toCSS().match(/px|em|%|in|cm|mm|pc|pt|ex/))},isEmpty:function(){return 0===this.numerator.length&&0===this.denominator.length},isSingular:function(){return this.numerator.length<=1&&0===this.denominator.length},map:function(a){var b;for(b=0;b<this.numerator.length;b++)this.numerator[b]=a(this.numerator[b],!1);for(b=0;b<this.denominator.length;b++)this.denominator[b]=a(this.denominator[b],!0)},usedUnits:function(){var b,c,d={};c=function(a){return b.hasOwnProperty(a)&&!d[e]&&(d[e]=a),a};for(var e in a.UnitConversions)a.UnitConversions.hasOwnProperty(e)&&(b=a.UnitConversions[e],this.map(c));return d},cancel:function(){var a,b,c,d={};for(b=0;b<this.numerator.length;b++)a=this.numerator[b],c||(c=a),d[a]=(d[a]||0)+1;for(b=0;b<this.denominator.length;b++)a=this.denominator[b],c||(c=a),d[a]=(d[a]||0)-1;this.numerator=[],this.denominator=[];for(a in d)if(d.hasOwnProperty(a)){var e=d[a];if(e>0)for(b=0;e>b;b++)this.numerator.push(a);else if(0>e)for(b=0;-e>b;b++)this.denominator.push(a)}0===this.numerator.length&&0===this.denominator.length&&c&&(this.backupUnit=c),this.numerator.sort(),this.denominator.sort()}}}(c("../tree")),function(a){a.Directive=function(b,c,d,e){this.name=b,Array.isArray(c)?(this.rules=[new a.Ruleset(null,c)],this.rules[0].allowImports=!0):this.value=c,this.currentFileInfo=e},a.Directive.prototype={type:"Directive",accept:function(a){this.rules&&(this.rules=a.visitArray(this.rules)),this.value&&(this.value=a.visit(this.value))},genCSS:function(b,c){c.add(this.name,this.currentFileInfo,this.index),this.rules?a.outputRuleset(b,c,this.rules):(c.add(" "),this.value.genCSS(b,c),c.add(";"))},toCSS:a.toCSS,eval:function(b){var c=this;return this.rules&&(b.frames.unshift(this),c=new a.Directive(this.name,null,this.index,this.currentFileInfo),c.rules=[this.rules[0].eval(b)],c.rules[0].root=!0,b.frames.shift()),c},variable:function(b){return a.Ruleset.prototype.variable.call(this.rules[0],b)},find:function(){return a.Ruleset.prototype.find.apply(this.rules[0],arguments)},rulesets:function(){return a.Ruleset.prototype.rulesets.apply(this.rules[0])},markReferenced:function(){var a,b;if(this.isReferenced=!0,this.rules)for(b=this.rules[0].rules,a=0;a<b.length;a++)b[a].markReferenced&&b[a].markReferenced()}}}(c("../tree")),function(a){a.Element=function(b,c,d,e){this.combinator=b instanceof a.Combinator?b:new a.Combinator(b),this.value="string"==typeof c?c.trim():c?c:"",this.index=d,this.currentFileInfo=e},a.Element.prototype={type:"Element",accept:function(a){var b=this.value;this.combinator=a.visit(this.combinator),"object"==typeof b&&(this.value=a.visit(b))},eval:function(b){return new a.Element(this.combinator,this.value.eval?this.value.eval(b):this.value,this.index,this.currentFileInfo)},genCSS:function(a,b){b.add(this.toCSS(a),this.currentFileInfo,this.index)},toCSS:function(a){var b=this.value.toCSS?this.value.toCSS(a):this.value;return""===b&&"&"===this.combinator.value.charAt(0)?"":this.combinator.toCSS(a||{})+b}},a.Attribute=function(a,b,c){this.key=a,this.op=b,this.value=c},a.Attribute.prototype={type:"Attribute",eval:function(b){return new a.Attribute(this.key.eval?this.key.eval(b):this.key,this.op,this.value&&this.value.eval?this.value.eval(b):this.value)},genCSS:function(a,b){b.add(this.toCSS(a))},toCSS:function(a){var b=this.key.toCSS?this.key.toCSS(a):this.key;return this.op&&(b+=this.op,b+=this.value.toCSS?this.value.toCSS(a):this.value),"["+b+"]"}},a.Combinator=function(a){this.value=" "===a?" ":a?a.trim():""},a.Combinator.prototype={type:"Combinator",_outputMap:{"":""," ":" ",":":" :","+":" + ","~":" ~ ",">":" > ","|":"|"},_outputMapCompressed:{"":""," ":" ",":":" :","+":"+","~":"~",">":">","|":"|"},genCSS:function(a,b){b.add((a.compress?this._outputMapCompressed:this._outputMap)[this.value])},toCSS:a.toCSS}}(c("../tree")),function(a){a.Expression=function(a){this.value=a},a.Expression.prototype={type:"Expression",accept:function(a){this.value&&(this.value=a.visitArray(this.value))},eval:function(b){var c,d=this.parens&&!this.parensInOp,e=!1;return d&&b.inParenthesis(),this.value.length>1?c=new a.Expression(this.value.map(function(a){return a.eval(b)})):1===this.value.length?(this.value[0].parens&&!this.value[0].parensInOp&&(e=!0),c=this.value[0].eval(b)):c=this,d&&b.outOfParenthesis(),this.parens&&this.parensInOp&&!b.isMathOn()&&!e&&(c=new a.Paren(c)),c},genCSS:function(a,b){for(var c=0;c<this.value.length;c++)this.value[c].genCSS(a,b),c+1<this.value.length&&b.add(" ")},toCSS:a.toCSS,throwAwayComments:function(){this.value=this.value.filter(function(b){return!(b instanceof a.Comment)})}}}(c("../tree")),function(a){a.Extend=function(b,c,d){switch(this.selector=b,this.option=c,this.index=d,this.object_id=a.Extend.next_id++,this.parent_ids=[this.object_id],c){case"all":this.allowBefore=!0,this.allowAfter=!0;break;default:this.allowBefore=!1,this.allowAfter=!1}},a.Extend.next_id=0,a.Extend.prototype={type:"Extend",accept:function(a){this.selector=a.visit(this.selector)},eval:function(b){return new a.Extend(this.selector.eval(b),this.option,this.index)},clone:function(){return new a.Extend(this.selector,this.option,this.index)},findSelfSelectors:function(a){var b,c,d=[];for(b=0;b<a.length;b++)c=a[b].elements,b>0&&c.length&&""===c[0].combinator.value&&(c[0].combinator.value=" "),d=d.concat(a[b].elements);this.selfSelectors=[{elements:d}]}}}(c("../tree")),function(a){a.Import=function(a,c,d,e,f){if(this.options=d,this.index=e,this.path=a,this.features=c,this.currentFileInfo=f,this.options.less!==b||this.options.inline)this.css=!this.options.less||this.options.inline;else{var g=this.getPath();g&&/css([\?;].*)?$/.test(g)&&(this.css=!0)}},a.Import.prototype={type:"Import",accept:function(a){this.features&&(this.features=a.visit(this.features)),this.path=a.visit(this.path),!this.options.inline&&this.root&&(this.root=a.visit(this.root))},genCSS:function(a,b){this.css&&(b.add("@import ",this.currentFileInfo,this.index),this.path.genCSS(a,b),this.features&&(b.add(" "),this.features.genCSS(a,b)),b.add(";"))},toCSS:a.toCSS,getPath:function(){if(this.path instanceof a.Quoted){var c=this.path.value;return this.css!==b||/(\.[a-z]*$)|([\?;].*)$/.test(c)?c:c+".less"}return this.path instanceof a.URL?this.path.value.value:null},evalForImport:function(b){return new a.Import(this.path.eval(b),this.features,this.options,this.index,this.currentFileInfo)},evalPath:function(b){var c=this.path.eval(b),d=this.currentFileInfo&&this.currentFileInfo.rootpath;if(!(c instanceof a.URL)){if(d){var e=c.value;e&&b.isPathRelative(e)&&(c.value=d+e)}c.value=b.normalizePath(c.value)}return c},eval:function(b){var c,d=this.features&&this.features.eval(b);if(this.skip)return[];if(this.options.inline){var e=new a.Anonymous(this.root,0,{filename:this.importedFilename},!0);return this.features?new a.Media([e],this.features.value):[e]}if(this.css){var f=new a.Import(this.evalPath(b),d,this.options,this.index);if(!f.css&&this.error)throw this.error;return f}return c=new a.Ruleset(null,this.root.rules.slice(0)),c.evalImports(b),this.features?new a.Media(c.rules,this.features.value):c.rules}}}(c("../tree")),function(a){a.JavaScript=function(a,b,c){this.escaped=c,this.expression=a,this.index=b},a.JavaScript.prototype={type:"JavaScript",eval:function(b){var c,d=this,e={},f=this.expression.replace(/@\{([\w-]+)\}/g,function(c,e){return a.jsify(new a.Variable("@"+e,d.index).eval(b))});try{f=new Function("return ("+f+")")}catch(g){throw{message:"JavaScript evaluation error: "+g.message+" from `"+f+"`",index:this.index}}for(var h in b.frames[0].variables())e[h.slice(1)]={value:b.frames[0].variables()[h].value,toJS:function(){return this.value.eval(b).toCSS()}};try{c=f.call(e)}catch(g){throw{message:"JavaScript evaluation error: '"+g.name+": "+g.message+"'",index:this.index}}return"number"==typeof c?new a.Dimension(c):"string"==typeof c?new a.Quoted('"'+c+'"',c,this.escaped,this.index):Array.isArray(c)?new a.Anonymous(c.join(", ")):new a.Anonymous(c)}}}(c("../tree")),function(a){a.Keyword=function(a){this.value=a},a.Keyword.prototype={type:"Keyword",eval:function(){return this},genCSS:function(a,b){b.add(this.value)},toCSS:a.toCSS,compare:function(b){return b instanceof a.Keyword?b.value===this.value?0:1:-1}},a.True=new a.Keyword("true"),a.False=new a.Keyword("false")}(c("../tree")),function(a){a.Media=function(b,c,d,e){this.index=d,this.currentFileInfo=e;var f=this.emptySelectors();this.features=new a.Value(c),this.rules=[new a.Ruleset(f,b)],this.rules[0].allowImports=!0},a.Media.prototype={type:"Media",accept:function(a){this.features&&(this.features=a.visit(this.features)),this.rules&&(this.rules=a.visitArray(this.rules))},genCSS:function(b,c){c.add("@media ",this.currentFileInfo,this.index),this.features.genCSS(b,c),a.outputRuleset(b,c,this.rules)},toCSS:a.toCSS,eval:function(b){b.mediaBlocks||(b.mediaBlocks=[],b.mediaPath=[]);var c=new a.Media(null,[],this.index,this.currentFileInfo);this.debugInfo&&(this.rules[0].debugInfo=this.debugInfo,c.debugInfo=this.debugInfo);var d=!1;b.strictMath||(d=!0,b.strictMath=!0);try{c.features=this.features.eval(b)}finally{d&&(b.strictMath=!1)}return b.mediaPath.push(c),b.mediaBlocks.push(c),b.frames.unshift(this.rules[0]),c.rules=[this.rules[0].eval(b)],b.frames.shift(),b.mediaPath.pop(),0===b.mediaPath.length?c.evalTop(b):c.evalNested(b)},variable:function(b){return a.Ruleset.prototype.variable.call(this.rules[0],b)},find:function(){return a.Ruleset.prototype.find.apply(this.rules[0],arguments)},rulesets:function(){return a.Ruleset.prototype.rulesets.apply(this.rules[0])},emptySelectors:function(){var b=new a.Element("","&",this.index,this.currentFileInfo);return[new a.Selector([b],null,null,this.index,this.currentFileInfo)]},markReferenced:function(){var a,b=this.rules[0].rules;for(this.isReferenced=!0,a=0;a<b.length;a++)b[a].markReferenced&&b[a].markReferenced()},evalTop:function(b){var c=this;if(b.mediaBlocks.length>1){var d=this.emptySelectors();c=new a.Ruleset(d,b.mediaBlocks),c.multiMedia=!0}return delete b.mediaBlocks,delete b.mediaPath,c},evalNested:function(b){var c,d,e=b.mediaPath.concat([this]);for(c=0;c<e.length;c++)d=e[c].features instanceof a.Value?e[c].features.value:e[c].features,e[c]=Array.isArray(d)?d:[d];return this.features=new a.Value(this.permute(e).map(function(b){for(b=b.map(function(b){return b.toCSS?b:new a.Anonymous(b)}),c=b.length-1;c>0;c--)b.splice(c,0,new a.Anonymous("and"));return new a.Expression(b)})),new a.Ruleset([],[])},permute:function(a){if(0===a.length)return[];if(1===a.length)return a[0];for(var b=[],c=this.permute(a.slice(1)),d=0;d<c.length;d++)for(var e=0;e<a[0].length;e++)b.push([a[0][e]].concat(c[d]));return b},bubbleSelectors:function(b){this.rules=[new a.Ruleset(b.slice(0),[this.rules[0]])]}}}(c("../tree")),function(a){a.mixin={},a.mixin.Call=function(b,c,d,e,f){this.selector=new a.Selector(b),this.arguments=c&&c.length?c:null,this.index=d,this.currentFileInfo=e,this.important=f},a.mixin.Call.prototype={type:"MixinCall",accept:function(a){this.selector&&(this.selector=a.visit(this.selector)),this.arguments&&(this.arguments=a.visitArray(this.arguments))},eval:function(b){var c,d,e,f,g,h,i,j,k,l,m=[],n=!1,o=[],p=[],q=a.defaultFunc,r=!1;for(e=this.arguments&&this.arguments.map(function(a){return{name:a.name,value:a.value.eval(b)}}),f=0;f<b.frames.length;f++)if((c=b.frames[f].find(this.selector)).length>0){for(j=!0,g=0;g<c.length;g++){for(d=c[g],i=!1,h=0;h<b.frames.length;h++)if(!(d instanceof a.mixin.Definition)&&d===(b.frames[h].originalRuleset||b.frames[h])){i=!0;break}if(!i&&d.matchArgs(e,b)){if(l={mixin:d},d.matchCondition){for(h=0;2>h;h++)q.value(h),p[h]=d.matchCondition(e,b);if(p[0]||p[1]){if(p[0]!=p[1]){if(r)throw{type:"Runtime",message:"Ambiguous use of `default()` found when matching for `"+this.format(e)+"`",index:this.index,filename:this.currentFileInfo.filename};r=!0,l.matchIfDefault=!0,l.matchIfDefaultValue=p[1]}o.push(l)}}else o.push(l);n=!0}}q.reset();for(g in o)if(l=o[g],!l.matchIfDefault||l.matchIfDefaultValue==(1==o.length))try{d=l.mixin,d instanceof a.mixin.Definition||(d=new a.mixin.Definition("",[],d.rules,null,!1),d.originalRuleset=c[g].originalRuleset||c[g]),Array.prototype.push.apply(m,d.eval(b,e,this.important).rules)}catch(s){throw{message:s.message,index:this.index,filename:this.currentFileInfo.filename,stack:s.stack}}if(n){if(!this.currentFileInfo||!this.currentFileInfo.reference)for(f=0;f<m.length;f++)k=m[f],k.markReferenced&&k.markReferenced();return m}}throw j?{type:"Runtime",message:"No matching definition was found for `"+this.format(e)+"`",index:this.index,filename:this.currentFileInfo.filename}:{type:"Name",message:this.selector.toCSS().trim()+" is undefined",index:this.index,filename:this.currentFileInfo.filename}},format:function(a){return this.selector.toCSS().trim()+"("+(a?a.map(function(a){var b="";return a.name&&(b+=a.name+":"),b+=a.value.toCSS?a.value.toCSS():"???"}).join(", "):"")+")"}},a.mixin.Definition=function(b,c,d,e,f){this.name=b,this.selectors=[new a.Selector([new a.Element(null,b,this.index,this.currentFileInfo)])],this.params=c,this.condition=e,this.variadic=f,this.arity=c.length,this.rules=d,this._lookups={},this.required=c.reduce(function(a,b){return!b.name||b.name&&!b.value?a+1:a},0),this.parent=a.Ruleset.prototype,this.frames=[]},a.mixin.Definition.prototype={type:"MixinDefinition",accept:function(a){this.params&&this.params.length&&(this.params=a.visitArray(this.params)),this.rules=a.visitArray(this.rules),this.condition&&(this.condition=a.visit(this.condition))},variable:function(a){return this.parent.variable.call(this,a)},variables:function(){return this.parent.variables.call(this)},find:function(){return this.parent.find.apply(this,arguments)},rulesets:function(){return this.parent.rulesets.apply(this)
},evalParams:function(b,c,d,e){var f,g,h,i,j,k,l,m,n=new a.Ruleset(null,null),o=this.params.slice(0);if(c=new a.evalEnv(c,[n].concat(c.frames)),d)for(d=d.slice(0),h=0;h<d.length;h++)if(g=d[h],k=g&&g.name){for(l=!1,i=0;i<o.length;i++)if(!e[i]&&k===o[i].name){e[i]=g.value.eval(b),n.prependRule(new a.Rule(k,g.value.eval(b))),l=!0;break}if(l){d.splice(h,1),h--;continue}throw{type:"Runtime",message:"Named argument for "+this.name+" "+d[h].name+" not found"}}for(m=0,h=0;h<o.length;h++)if(!e[h]){if(g=d&&d[m],k=o[h].name)if(o[h].variadic&&d){for(f=[],i=m;i<d.length;i++)f.push(d[i].value.eval(b));n.prependRule(new a.Rule(k,new a.Expression(f).eval(b)))}else{if(j=g&&g.value)j=j.eval(b);else{if(!o[h].value)throw{type:"Runtime",message:"wrong number of arguments for "+this.name+" ("+d.length+" for "+this.arity+")"};j=o[h].value.eval(c),n.resetCache()}n.prependRule(new a.Rule(k,j)),e[h]=j}if(o[h].variadic&&d)for(i=m;i<d.length;i++)e[i]=d[i].value.eval(b);m++}return n},eval:function(b,c,d){var e,f,g=[],h=this.frames.concat(b.frames),i=this.evalParams(b,new a.evalEnv(b,h),c,g);return i.prependRule(new a.Rule("@arguments",new a.Expression(g).eval(b))),e=this.rules.slice(0),f=new a.Ruleset(null,e),f.originalRuleset=this,f=f.eval(new a.evalEnv(b,[this,i].concat(h))),d&&(f=this.parent.makeImportant.apply(f)),f},matchCondition:function(b,c){return this.condition&&!this.condition.eval(new a.evalEnv(c,[this.evalParams(c,new a.evalEnv(c,this.frames.concat(c.frames)),b,[])].concat(this.frames).concat(c.frames)))?!1:!0},matchArgs:function(a,b){var c,d=a&&a.length||0;if(this.variadic){if(d<this.required-1)return!1}else{if(d<this.required)return!1;if(d>this.params.length)return!1}c=Math.min(d,this.arity);for(var e=0;c>e;e++)if(!this.params[e].name&&!this.params[e].variadic&&a[e].value.eval(b).toCSS()!=this.params[e].value.eval(b).toCSS())return!1;return!0}}}(c("../tree")),function(a){a.Negative=function(a){this.value=a},a.Negative.prototype={type:"Negative",accept:function(a){this.value=a.visit(this.value)},genCSS:function(a,b){b.add("-"),this.value.genCSS(a,b)},toCSS:a.toCSS,eval:function(b){return b.isMathOn()?new a.Operation("*",[new a.Dimension(-1),this.value]).eval(b):new a.Negative(this.value.eval(b))}}}(c("../tree")),function(a){a.Operation=function(a,b,c){this.op=a.trim(),this.operands=b,this.isSpaced=c},a.Operation.prototype={type:"Operation",accept:function(a){this.operands=a.visit(this.operands)},eval:function(b){var c=this.operands[0].eval(b),d=this.operands[1].eval(b);if(b.isMathOn()){if(c instanceof a.Dimension&&d instanceof a.Color&&(c=c.toColor()),d instanceof a.Dimension&&c instanceof a.Color&&(d=d.toColor()),!c.operate)throw{type:"Operation",message:"Operation on an invalid type"};return c.operate(b,this.op,d)}return new a.Operation(this.op,[c,d],this.isSpaced)},genCSS:function(a,b){this.operands[0].genCSS(a,b),this.isSpaced&&b.add(" "),b.add(this.op),this.isSpaced&&b.add(" "),this.operands[1].genCSS(a,b)},toCSS:a.toCSS},a.operate=function(a,b,c,d){switch(b){case"+":return c+d;case"-":return c-d;case"*":return c*d;case"/":return c/d}}}(c("../tree")),function(a){a.Paren=function(a){this.value=a},a.Paren.prototype={type:"Paren",accept:function(a){this.value=a.visit(this.value)},genCSS:function(a,b){b.add("("),this.value.genCSS(a,b),b.add(")")},toCSS:a.toCSS,eval:function(b){return new a.Paren(this.value.eval(b))}}}(c("../tree")),function(a){a.Quoted=function(a,b,c,d,e){this.escaped=c,this.value=b||"",this.quote=a.charAt(0),this.index=d,this.currentFileInfo=e},a.Quoted.prototype={type:"Quoted",genCSS:function(a,b){this.escaped||b.add(this.quote,this.currentFileInfo,this.index),b.add(this.value),this.escaped||b.add(this.quote)},toCSS:a.toCSS,eval:function(b){var c=this,d=this.value.replace(/`([^`]+)`/g,function(d,e){return new a.JavaScript(e,c.index,!0).eval(b).value}).replace(/@\{([\w-]+)\}/g,function(d,e){var f=new a.Variable("@"+e,c.index,c.currentFileInfo).eval(b,!0);return f instanceof a.Quoted?f.value:f.toCSS()});return new a.Quoted(this.quote+d+this.quote,d,this.escaped,this.index,this.currentFileInfo)},compare:function(a){if(!a.toCSS)return-1;var b=this.toCSS(),c=a.toCSS();return b===c?0:c>b?-1:1}}}(c("../tree")),function(a){a.Rule=function(b,c,d,e,f,g,h){this.name=b,this.value=c instanceof a.Value?c:new a.Value([c]),this.important=d?" "+d.trim():"",this.merge=e,this.index=f,this.currentFileInfo=g,this.inline=h||!1,this.variable=b.charAt&&"@"===b.charAt(0)},a.Rule.prototype={type:"Rule",accept:function(a){this.value=a.visit(this.value)},genCSS:function(a,b){b.add(this.name+(a.compress?":":": "),this.currentFileInfo,this.index);try{this.value.genCSS(a,b)}catch(c){throw c.index=this.index,c.filename=this.currentFileInfo.filename,c}b.add(this.important+(this.inline||a.lastRule&&a.compress?"":";"),this.currentFileInfo,this.index)},toCSS:a.toCSS,eval:function(c){var d=!1,e=this.name.map?this.name.map(function(a){return a.eval?a.eval(c).value:a}).join(""):this.name;"font"!==e||c.strictMath||(d=!0,c.strictMath=!0);try{return new a.Rule(e,this.value.eval(c),this.important,this.merge,this.index,this.currentFileInfo,this.inline)}catch(f){throw f.index===b&&(f.index=this.index),f}finally{d&&(c.strictMath=!1)}},makeImportant:function(){return new a.Rule(this.name,this.value,"!important",this.merge,this.index,this.currentFileInfo,this.inline)}}}(c("../tree")),function(a){a.Ruleset=function(a,b,c){this.selectors=a,this.rules=b,this._lookups={},this.strictImports=c},a.Ruleset.prototype={type:"Ruleset",accept:function(a){this.paths?a.visitArray(this.paths,!0):this.selectors&&(this.selectors=a.visitArray(this.selectors)),this.rules&&this.rules.length&&(this.rules=a.visitArray(this.rules))},eval:function(b){var c,d,e,f=this.selectors,g=a.defaultFunc;if(f&&(d=f.length)){for(c=[],g.error({type:"Syntax",message:"it is currently only allowed in parametric mixin guards,"}),e=0;d>e;e++)c.push(f[e].eval(b));g.reset()}var h,i=this.rules?this.rules.slice(0):null,j=new a.Ruleset(c,i,this.strictImports);j.originalRuleset=this,j.root=this.root,j.firstRoot=this.firstRoot,j.allowImports=this.allowImports,this.debugInfo&&(j.debugInfo=this.debugInfo);var k=b.frames;k.unshift(j);var l=b.selectors;l||(b.selectors=l=[]),l.unshift(this.selectors),(j.root||j.allowImports||!j.strictImports)&&j.evalImports(b);var m=j.rules,n=m?m.length:0;for(e=0;n>e;e++)m[e]instanceof a.mixin.Definition&&(m[e].frames=k.slice(0));var o=b.mediaBlocks&&b.mediaBlocks.length||0;for(e=0;n>e;e++)m[e]instanceof a.mixin.Call&&(i=m[e].eval(b).filter(function(b){return b instanceof a.Rule&&b.variable?!j.variable(b.name):!0}),m.splice.apply(m,[e,1].concat(i)),n+=i.length-1,e+=i.length-1,j.resetCache());for(e=0;n>e;e++)h=m[e],h instanceof a.mixin.Definition||(m[e]=h.eval?h.eval(b):h);if(k.shift(),l.shift(),b.mediaBlocks)for(e=o;e<b.mediaBlocks.length;e++)b.mediaBlocks[e].bubbleSelectors(c);return j},evalImports:function(b){var c,d,e=this.rules;if(e)for(c=0;c<e.length;c++)e[c]instanceof a.Import&&(d=e[c].eval(b),d&&d.length?(e.splice.apply(e,[c,1].concat(d)),c+=d.length-1):e.splice(c,1,d),this.resetCache())},makeImportant:function(){return new a.Ruleset(this.selectors,this.rules.map(function(a){return a.makeImportant?a.makeImportant():a}),this.strictImports)},matchArgs:function(a){return!a||0===a.length},matchCondition:function(b,c){var d=this.selectors[this.selectors.length-1];return d.condition&&!d.condition.eval(new a.evalEnv(c,c.frames))?!1:!0},resetCache:function(){this._rulesets=null,this._variables=null,this._lookups={}},variables:function(){return this._variables||(this._variables=this.rules?this.rules.reduce(function(b,c){return c instanceof a.Rule&&c.variable===!0&&(b[c.name]=c),b},{}):{}),this._variables},variable:function(a){return this.variables()[a]},rulesets:function(){if(!this.rules)return null;var b,c,d=a.Ruleset,e=a.mixin.Definition,f=[],g=this.rules,h=g.length;for(b=0;h>b;b++)c=g[b],(c instanceof d||c instanceof e)&&f.push(c);return f},prependRule:function(a){var b=this.rules;b?b.unshift(a):this.rules=[a]},find:function(b,c){c=c||this;var d,e=[],f=b.toCSS();return f in this._lookups?this._lookups[f]:(this.rulesets().forEach(function(f){if(f!==c)for(var g=0;g<f.selectors.length;g++)if(d=b.match(f.selectors[g])){b.elements.length>d?Array.prototype.push.apply(e,f.find(new a.Selector(b.elements.slice(d)),c)):e.push(f);break}}),this._lookups[f]=e,e)},genCSS:function(b,c){var d,e,f,g,h,i,j=[],k=[];b.tabLevel=b.tabLevel||0,this.root||b.tabLevel++;var l,m=b.compress?"":Array(b.tabLevel+1).join("  "),n=b.compress?"":Array(b.tabLevel).join("  ");for(d=0;d<this.rules.length;d++)h=this.rules[d],h.rules||h instanceof a.Media||h instanceof a.Directive||this.root&&h instanceof a.Comment?k.push(h):j.push(h);if(!this.root){g=a.debugInfo(b,this,n),g&&(c.add(g),c.add(n));var o,p=this.paths,q=p.length;for(l=b.compress?",":",\n"+n,d=0;q>d;d++)if(i=p[d],o=i.length)for(d>0&&c.add(l),b.firstSelector=!0,i[0].genCSS(b,c),b.firstSelector=!1,e=1;o>e;e++)i[e].genCSS(b,c);c.add((b.compress?"{":" {\n")+m)}for(d=0;d<j.length;d++)h=j[d],d+1!==j.length||this.root&&0!==k.length&&!this.firstRoot||(b.lastRule=!0),h.genCSS?h.genCSS(b,c):h.value&&c.add(h.value.toString()),b.lastRule?b.lastRule=!1:c.add(b.compress?"":"\n"+m);if(this.root||(c.add(b.compress?"}":"\n"+n+"}"),b.tabLevel--),l=(b.compress?"":"\n")+(this.root?m:n),f=k.length)for(j.length&&l&&c.add(l),k[0].genCSS(b,c),d=1;f>d;d++)l&&c.add(l),k[d].genCSS(b,c);c.isEmpty()||b.compress||!this.firstRoot||c.add("\n")},toCSS:a.toCSS,markReferenced:function(){for(var a=0;a<this.selectors.length;a++)this.selectors[a].markReferenced()},joinSelectors:function(a,b,c){for(var d=0;d<c.length;d++)this.joinSelector(a,b,c[d])},joinSelector:function(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;for(e=0;e<d.elements.length;e++)j=d.elements[e],"&"===j.value&&(h=!0);if(h){for(r=[],i=[[]],e=0;e<d.elements.length;e++)if(j=d.elements[e],"&"!==j.value)r.push(j);else{for(s=[],r.length>0&&this.mergeElementsOnToSelectors(r,i),f=0;f<i.length;f++)if(k=i[f],0===c.length)k.length>0&&(k[0].elements=k[0].elements.slice(0),k[0].elements.push(new a.Element(j.combinator,"",0,j.index,j.currentFileInfo))),s.push(k);else for(g=0;g<c.length;g++)l=c[g],m=[],n=[],p=!0,k.length>0?(m=k.slice(0),q=m.pop(),o=d.createDerived(q.elements.slice(0)),p=!1):o=d.createDerived([]),l.length>1&&(n=n.concat(l.slice(1))),l.length>0&&(p=!1,o.elements.push(new a.Element(j.combinator,l[0].elements[0].value,j.index,j.currentFileInfo)),o.elements=o.elements.concat(l[0].elements.slice(1))),p||m.push(o),m=m.concat(n),s.push(m);i=s,r=[]}for(r.length>0&&this.mergeElementsOnToSelectors(r,i),e=0;e<i.length;e++)i[e].length>0&&b.push(i[e])}else if(c.length>0)for(e=0;e<c.length;e++)b.push(c[e].concat(d));else b.push([d])},mergeElementsOnToSelectors:function(b,c){var d,e;if(0===c.length)return c.push([new a.Selector(b)]),void 0;for(d=0;d<c.length;d++)e=c[d],e.length>0?e[e.length-1]=e[e.length-1].createDerived(e[e.length-1].elements.concat(b)):e.push(new a.Selector(b))}}}(c("../tree")),function(a){a.Selector=function(a,b,c,d,e,f){this.elements=a,this.extendList=b,this.condition=c,this.currentFileInfo=e||{},this.isReferenced=f,c||(this.evaldCondition=!0)},a.Selector.prototype={type:"Selector",accept:function(a){this.elements&&(this.elements=a.visitArray(this.elements)),this.extendList&&(this.extendList=a.visitArray(this.extendList)),this.condition&&(this.condition=a.visit(this.condition))},createDerived:function(b,c,d){d=null!=d?d:this.evaldCondition;var e=new a.Selector(b,c||this.extendList,this.condition,this.index,this.currentFileInfo,this.isReferenced);return e.evaldCondition=d,e},match:function(a){var b,c,d,e=this.elements,f=e.length;if(b=a.elements.map(function(a){return a.combinator.value+(a.value.value||a.value)}).join("").match(/[,&#\.\w-]([\w-]|(\\.))*/g),!b)return 0;if("&"===b[0]&&b.shift(),c=b.length,0===c||c>f)return 0;for(d=0;c>d;d++)if(e[d].value!==b[d])return 0;return c},eval:function(a){var b=this.condition&&this.condition.eval(a),c=this.elements,d=this.extendList;return c=c&&c.map(function(b){return b.eval(a)}),d=d&&d.map(function(b){return b.eval(a)}),this.createDerived(c,d,b)},genCSS:function(a,b){var c,d;if(a&&a.firstSelector||""!==this.elements[0].combinator.value||b.add(" ",this.currentFileInfo,this.index),!this._css)for(c=0;c<this.elements.length;c++)d=this.elements[c],d.genCSS(a,b)},toCSS:a.toCSS,markReferenced:function(){this.isReferenced=!0},getIsReferenced:function(){return!this.currentFileInfo.reference||this.isReferenced},getIsOutput:function(){return this.evaldCondition}}}(c("../tree")),function(a){a.UnicodeDescriptor=function(a){this.value=a},a.UnicodeDescriptor.prototype={type:"UnicodeDescriptor",genCSS:function(a,b){b.add(this.value)},toCSS:a.toCSS,eval:function(){return this}}}(c("../tree")),function(a){a.URL=function(a,b,c){this.value=a,this.currentFileInfo=b,this.isEvald=c},a.URL.prototype={type:"Url",accept:function(a){this.value=a.visit(this.value)},genCSS:function(a,b){b.add("url("),this.value.genCSS(a,b),b.add(")")},toCSS:a.toCSS,eval:function(b){var c,d=this.value.eval(b);return this.isEvald||(c=this.currentFileInfo&&this.currentFileInfo.rootpath,c&&"string"==typeof d.value&&b.isPathRelative(d.value)&&(d.quote||(c=c.replace(/[\(\)'"\s]/g,function(a){return"\\"+a})),d.value=c+d.value),d.value=b.normalizePath(d.value)),new a.URL(d,this.currentFileInfo,!0)}}}(c("../tree")),function(a){a.Value=function(a){this.value=a},a.Value.prototype={type:"Value",accept:function(a){this.value&&(this.value=a.visitArray(this.value))},eval:function(b){return 1===this.value.length?this.value[0].eval(b):new a.Value(this.value.map(function(a){return a.eval(b)}))},genCSS:function(a,b){var c;for(c=0;c<this.value.length;c++)this.value[c].genCSS(a,b),c+1<this.value.length&&b.add(a&&a.compress?",":", ")},toCSS:a.toCSS}}(c("../tree")),function(a){a.Variable=function(a,b,c){this.name=a,this.index=b,this.currentFileInfo=c||{}},a.Variable.prototype={type:"Variable",eval:function(b){var c,d=this.name;if(0===d.indexOf("@@")&&(d="@"+new a.Variable(d.slice(1)).eval(b).value),this.evaluating)throw{type:"Name",message:"Recursive variable definition for "+d,filename:this.currentFileInfo.file,index:this.index};if(this.evaluating=!0,c=a.find(b.frames,function(a){var c=a.variable(d);return c?c.value.eval(b):void 0}))return this.evaluating=!1,c;throw{type:"Name",message:"variable "+d+" is undefined",filename:this.currentFileInfo.filename,index:this.index}}}}(c("../tree")),function(a){var b=["paths","optimization","files","contents","contentsIgnoredChars","relativeUrls","rootpath","strictImports","insecure","dumpLineNumbers","compress","processImports","syncImport","javascriptEnabled","mime","useFileCache","currentFileInfo"];a.parseEnv=function(a){if(d(a,this,b),this.contents||(this.contents={}),this.contentsIgnoredChars||(this.contentsIgnoredChars={}),this.files||(this.files={}),!this.currentFileInfo){var c=a&&a.filename||"input",e=c.replace(/[^\/\\]*$/,"");a&&(a.filename=null),this.currentFileInfo={filename:c,relativeUrls:this.relativeUrls,rootpath:a&&a.rootpath||"",currentDirectory:e,entryPath:e,rootFilename:c}}};var c=["silent","verbose","compress","yuicompress","ieCompat","strictMath","strictUnits","cleancss","sourceMap","importMultiple"];a.evalEnv=function(a,b){d(a,this,c),this.frames=b||[]},a.evalEnv.prototype.inParenthesis=function(){this.parensStack||(this.parensStack=[]),this.parensStack.push(!0)},a.evalEnv.prototype.outOfParenthesis=function(){this.parensStack.pop()},a.evalEnv.prototype.isMathOn=function(){return this.strictMath?this.parensStack&&this.parensStack.length:!0},a.evalEnv.prototype.isPathRelative=function(a){return!/^(?:[a-z-]+:|\/)/.test(a)},a.evalEnv.prototype.normalizePath=function(a){var b,c=a.split("/").reverse();for(a=[];0!==c.length;)switch(b=c.pop()){case".":break;case"..":0===a.length||".."===a[a.length-1]?a.push(b):a.pop();break;default:a.push(b)}return a.join("/")};var d=function(a,b,c){if(a)for(var d=0;d<c.length;d++)a.hasOwnProperty(c[d])&&(b[c[d]]=a[c[d]])}}(c("./tree")),function(a){function b(a){return a}function c(a,b){var d,e;for(d in a)switch(e=a[d],typeof e){case"function":e.prototype&&e.prototype.type&&(e.prototype.typeIndex=b++);break;case"object":b=c(e,b)}return b}var d={visitDeeper:!0},e=!1;a.visitor=function(b){this._implementation=b,this._visitFnCache=[],e||(c(a,1),e=!0)},a.visitor.prototype={visit:function(a){if(!a)return a;var c=a.typeIndex;if(!c)return a;var e,f=this._visitFnCache,g=this._implementation,h=c<<1,i=1|h,j=f[h],k=f[i],l=d;if(l.visitDeeper=!0,j||(e="visit"+a.type,j=g[e]||b,k=g[e+"Out"]||b,f[h]=j,f[i]=k),j!==b){var m=j.call(g,a,l);g.isReplacing&&(a=m)}return l.visitDeeper&&a&&a.accept&&a.accept(this),k!=b&&k.call(g,a),a},visitArray:function(a,b){if(!a)return a;var c,d=a.length;if(b||!this._implementation.isReplacing){for(c=0;d>c;c++)this.visit(a[c]);return a}var e=[];for(c=0;d>c;c++){var f=this.visit(a[c]);f.splice?f.length&&this.flatten(f,e):e.push(f)}return e},flatten:function(a,b){b||(b=[]);var c,d,e,f,g,h;for(d=0,c=a.length;c>d;d++)if(e=a[d],e.splice)for(g=0,f=e.length;f>g;g++)h=e[g],h.splice?h.length&&this.flatten(h,b):b.push(h);else b.push(e);return b}}}(c("./tree")),function(a){a.importVisitor=function(b,c,d){this._visitor=new a.visitor(this),this._importer=b,this._finish=c,this.env=d||new a.evalEnv,this.importCount=0},a.importVisitor.prototype={isReplacing:!0,run:function(a){var b;try{this._visitor.visit(a)}catch(c){b=c}this.isFinished=!0,0===this.importCount&&this._finish(b)},visitImport:function(b,c){var d,e=this,f=b.options.inline;if(!b.css||f){try{d=b.evalForImport(this.env)}catch(g){g.filename||(g.index=b.index,g.filename=b.currentFileInfo.filename),b.css=!0,b.error=g}if(d&&(!d.css||f)){b=d,this.importCount++;var h=new a.evalEnv(this.env,this.env.frames.slice(0));b.options.multiple&&(h.importMultiple=!0),this._importer.push(b.getPath(),b.currentFileInfo,b.options,function(c,d,g,i){c&&!c.filename&&(c.index=b.index,c.filename=b.currentFileInfo.filename),g&&!h.importMultiple&&(b.skip=g);var j=function(a){e.importCount--,0===e.importCount&&e.isFinished&&e._finish(a)};return!d||(b.root=d,b.importedFilename=i,f||b.skip)?(j(),void 0):(new a.importVisitor(e._importer,j,h).run(d),void 0)})}}return c.visitDeeper=!1,b},visitRule:function(a,b){return b.visitDeeper=!1,a},visitDirective:function(a){return this.env.frames.unshift(a),a},visitDirectiveOut:function(){this.env.frames.shift()},visitMixinDefinition:function(a){return this.env.frames.unshift(a),a},visitMixinDefinitionOut:function(){this.env.frames.shift()},visitRuleset:function(a){return this.env.frames.unshift(a),a},visitRulesetOut:function(){this.env.frames.shift()},visitMedia:function(a){return this.env.frames.unshift(a.ruleset),a},visitMediaOut:function(){this.env.frames.shift()}}}(c("./tree")),function(a){a.joinSelectorVisitor=function(){this.contexts=[[]],this._visitor=new a.visitor(this)},a.joinSelectorVisitor.prototype={run:function(a){return this._visitor.visit(a)},visitRule:function(a,b){b.visitDeeper=!1},visitMixinDefinition:function(a,b){b.visitDeeper=!1},visitRuleset:function(a){var b,c=this.contexts[this.contexts.length-1],d=[];this.contexts.push(d),a.root||(b=a.selectors,b&&(b=b.filter(function(a){return a.getIsOutput()}),a.selectors=b.length?b:b=null,b&&a.joinSelectors(d,c,b)),b||(a.rules=null),a.paths=d)},visitRulesetOut:function(){this.contexts.length=this.contexts.length-1},visitMedia:function(a){var b=this.contexts[this.contexts.length-1];a.rules[0].root=0===b.length||b[0].multiMedia}}}(c("./tree")),function(a){a.toCSSVisitor=function(b){this._visitor=new a.visitor(this),this._env=b},a.toCSSVisitor.prototype={isReplacing:!0,run:function(a){return this._visitor.visit(a)},visitRule:function(a){return a.variable?[]:a},visitMixinDefinition:function(){return[]},visitExtend:function(){return[]},visitComment:function(a){return a.isSilent(this._env)?[]:a},visitMedia:function(a,b){return a.accept(this._visitor),b.visitDeeper=!1,a.rules.length?a:[]},visitDirective:function(b){if(b.currentFileInfo.reference&&!b.isReferenced)return[];if("@charset"===b.name){if(this.charset){if(b.debugInfo){var c=new a.Comment("/* "+b.toCSS(this._env).replace(/\n/g,"")+" */\n");return c.debugInfo=b.debugInfo,this._visitor.visit(c)}return[]}this.charset=!0}return b},checkPropertiesInRoot:function(b){for(var c,d=0;d<b.length;d++)if(c=b[d],c instanceof a.Rule&&!c.variable)throw{message:"properties must be inside selector blocks, they cannot be in the root.",index:c.index,filename:c.currentFileInfo?c.currentFileInfo.filename:null}},visitRuleset:function(b,c){var d,e=[];if(b.firstRoot&&this.checkPropertiesInRoot(b.rules),b.root)b.accept(this._visitor),c.visitDeeper=!1,(b.firstRoot||b.rules&&b.rules.length>0)&&e.splice(0,0,b);else{b.paths&&(b.paths=b.paths.filter(function(b){var c;for(" "===b[0].elements[0].combinator.value&&(b[0].elements[0].combinator=new a.Combinator("")),c=0;c<b.length;c++)if(b[c].getIsReferenced()&&b[c].getIsOutput())return!0;return!1}));for(var f=b.rules,g=f?f.length:0,h=0;g>h;)d=f[h],d&&d.rules?(e.push(this._visitor.visit(d)),f.splice(h,1),g--):h++;g>0?b.accept(this._visitor):b.rules=null,c.visitDeeper=!1,f=b.rules,f&&(this._mergeRules(f),f=b.rules),f&&(this._removeDuplicateRules(f),f=b.rules),f&&f.length>0&&b.paths.length>0&&e.splice(0,0,b)}return 1===e.length?e[0]:e},_removeDuplicateRules:function(b){if(b){var c,d,e,f={};for(e=b.length-1;e>=0;e--)if(d=b[e],d instanceof a.Rule)if(f[d.name]){c=f[d.name],c instanceof a.Rule&&(c=f[d.name]=[f[d.name].toCSS(this._env)]);var g=d.toCSS(this._env);-1!==c.indexOf(g)?b.splice(e,1):c.push(g)}else f[d.name]=d}},_mergeRules:function(b){if(b){for(var c,d,e,f={},g=0;g<b.length;g++)d=b[g],d instanceof a.Rule&&d.merge&&(e=[d.name,d.important?"!":""].join(","),f[e]?b.splice(g--,1):f[e]=[],f[e].push(d));Object.keys(f).map(function(b){c=f[b],c.length>1&&(d=c[0],d.value=new a.Value(c.map(function(a){return a.value})))})}}}}(c("./tree")),function(a){a.extendFinderVisitor=function(){this._visitor=new a.visitor(this),this.contexts=[],this.allExtendsStack=[[]]},a.extendFinderVisitor.prototype={run:function(a){return a=this._visitor.visit(a),a.allExtends=this.allExtendsStack[0],a},visitRule:function(a,b){b.visitDeeper=!1},visitMixinDefinition:function(a,b){b.visitDeeper=!1},visitRuleset:function(b){if(!b.root){var c,d,e,f,g=[],h=b.rules,i=h?h.length:0;for(c=0;i>c;c++)b.rules[c]instanceof a.Extend&&(g.push(h[c]),b.extendOnEveryPath=!0);var j=b.paths;for(c=0;c<j.length;c++){var k=j[c],l=k[k.length-1],m=l.extendList;for(f=m?m.slice(0).concat(g):g,f&&(f=f.map(function(a){return a.clone()})),d=0;d<f.length;d++)this.foundExtends=!0,e=f[d],e.findSelfSelectors(k),e.ruleset=b,0===d&&(e.firstExtendOnThisSelectorPath=!0),this.allExtendsStack[this.allExtendsStack.length-1].push(e)}this.contexts.push(b.selectors)}},visitRulesetOut:function(a){a.root||(this.contexts.length=this.contexts.length-1)},visitMedia:function(a){a.allExtends=[],this.allExtendsStack.push(a.allExtends)},visitMediaOut:function(){this.allExtendsStack.length=this.allExtendsStack.length-1},visitDirective:function(a){a.allExtends=[],this.allExtendsStack.push(a.allExtends)},visitDirectiveOut:function(){this.allExtendsStack.length=this.allExtendsStack.length-1}},a.processExtendsVisitor=function(){this._visitor=new a.visitor(this)},a.processExtendsVisitor.prototype={run:function(b){var c=new a.extendFinderVisitor;return c.run(b),c.foundExtends?(b.allExtends=b.allExtends.concat(this.doExtendChaining(b.allExtends,b.allExtends)),this.allExtendsStack=[b.allExtends],this._visitor.visit(b)):b},doExtendChaining:function(b,c,d){var e,f,g,h,i,j,k,l,m=[],n=this;for(d=d||0,e=0;e<b.length;e++)for(f=0;f<c.length;f++)j=b[e],k=c[f],j.parent_ids.indexOf(k.object_id)>=0||(i=[k.selfSelectors[0]],g=n.findMatch(j,i),g.length&&j.selfSelectors.forEach(function(b){h=n.extendSelector(g,i,b),l=new a.Extend(k.selector,k.option,0),l.selfSelectors=h,h[h.length-1].extendList=[l],m.push(l),l.ruleset=k.ruleset,l.parent_ids=l.parent_ids.concat(k.parent_ids,j.parent_ids),k.firstExtendOnThisSelectorPath&&(l.firstExtendOnThisSelectorPath=!0,k.ruleset.paths.push(h))}));if(m.length){if(this.extendChainCount++,d>100){var o="{unable to calculate}",p="{unable to calculate}";try{o=m[0].selfSelectors[0].toCSS(),p=m[0].selector.toCSS()}catch(q){}throw{message:"extend circular reference detected. One of the circular extends is currently:"+o+":extend("+p+")"}}return m.concat(n.doExtendChaining(m,c,d+1))}return m},visitRule:function(a,b){b.visitDeeper=!1},visitMixinDefinition:function(a,b){b.visitDeeper=!1},visitSelector:function(a,b){b.visitDeeper=!1},visitRuleset:function(a){if(!a.root){var b,c,d,e,f=this.allExtendsStack[this.allExtendsStack.length-1],g=[],h=this;for(d=0;d<f.length;d++)for(c=0;c<a.paths.length;c++)if(e=a.paths[c],!a.extendOnEveryPath){var i=e[e.length-1].extendList;i&&i.length||(b=this.findMatch(f[d],e),b.length&&f[d].selfSelectors.forEach(function(a){g.push(h.extendSelector(b,e,a))}))}a.paths=a.paths.concat(g)}},findMatch:function(a,b){var c,d,e,f,g,h,i,j=this,k=a.selector.elements,l=[],m=[];for(c=0;c<b.length;c++)for(d=b[c],e=0;e<d.elements.length;e++)for(f=d.elements[e],(a.allowBefore||0===c&&0===e)&&l.push({pathIndex:c,index:e,matched:0,initialCombinator:f.combinator}),h=0;h<l.length;h++)i=l[h],g=f.combinator.value,""===g&&0===e&&(g=" "),!j.isElementValuesEqual(k[i.matched].value,f.value)||i.matched>0&&k[i.matched].combinator.value!==g?i=null:i.matched++,i&&(i.finished=i.matched===k.length,i.finished&&!a.allowAfter&&(e+1<d.elements.length||c+1<b.length)&&(i=null)),i?i.finished&&(i.length=k.length,i.endPathIndex=c,i.endPathElementIndex=e+1,l.length=0,m.push(i)):(l.splice(h,1),h--);return m},isElementValuesEqual:function(b,c){if("string"==typeof b||"string"==typeof c)return b===c;if(b instanceof a.Attribute)return b.op!==c.op||b.key!==c.key?!1:b.value&&c.value?(b=b.value.value||b.value,c=c.value.value||c.value,b===c):b.value||c.value?!1:!0;if(b=b.value,c=c.value,b instanceof a.Selector){if(!(c instanceof a.Selector)||b.elements.length!==c.elements.length)return!1;for(var d=0;d<b.elements.length;d++){if(b.elements[d].combinator.value!==c.elements[d].combinator.value&&(0!==d||(b.elements[d].combinator.value||" ")!==(c.elements[d].combinator.value||" ")))return!1;if(!this.isElementValuesEqual(b.elements[d].value,c.elements[d].value))return!1}return!0}return!1},extendSelector:function(b,c,d){var e,f,g,h,i,j=0,k=0,l=[];for(e=0;e<b.length;e++)h=b[e],f=c[h.pathIndex],g=new a.Element(h.initialCombinator,d.elements[0].value,d.elements[0].index,d.elements[0].currentFileInfo),h.pathIndex>j&&k>0&&(l[l.length-1].elements=l[l.length-1].elements.concat(c[j].elements.slice(k)),k=0,j++),i=f.elements.slice(k,h.index).concat([g]).concat(d.elements.slice(1)),j===h.pathIndex&&e>0?l[l.length-1].elements=l[l.length-1].elements.concat(i):(l=l.concat(c.slice(j,h.pathIndex)),l.push(new a.Selector(i))),j=h.endPathIndex,k=h.endPathElementIndex,k>=c[j].elements.length&&(k=0,j++);return j<c.length&&k>0&&(l[l.length-1].elements=l[l.length-1].elements.concat(c[j].elements.slice(k)),j++),l=l.concat(c.slice(j,c.length))},visitRulesetOut:function(){},visitMedia:function(a){var b=a.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length-1]);b=b.concat(this.doExtendChaining(b,a.allExtends)),this.allExtendsStack.push(b)},visitMediaOut:function(){this.allExtendsStack.length=this.allExtendsStack.length-1},visitDirective:function(a){var b=a.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length-1]);b=b.concat(this.doExtendChaining(b,a.allExtends)),this.allExtendsStack.push(b)},visitDirectiveOut:function(){this.allExtendsStack.length=this.allExtendsStack.length-1}}}(c("./tree")),function(a){a.sourceMapOutput=function(a){this._css=[],this._rootNode=a.rootNode,this._writeSourceMap=a.writeSourceMap,this._contentsMap=a.contentsMap,this._contentsIgnoredCharsMap=a.contentsIgnoredCharsMap,this._sourceMapFilename=a.sourceMapFilename,this._outputFilename=a.outputFilename,this._sourceMapURL=a.sourceMapURL,a.sourceMapBasepath&&(this._sourceMapBasepath=a.sourceMapBasepath.replace(/\\/g,"/")),this._sourceMapRootpath=a.sourceMapRootpath,this._outputSourceFiles=a.outputSourceFiles,this._sourceMapGeneratorConstructor=a.sourceMapGenerator||c("source-map").SourceMapGenerator,this._sourceMapRootpath&&"/"!==this._sourceMapRootpath.charAt(this._sourceMapRootpath.length-1)&&(this._sourceMapRootpath+="/"),this._lineNumber=0,this._column=0},a.sourceMapOutput.prototype.normalizeFilename=function(a){return a=a.replace(/\\/g,"/"),this._sourceMapBasepath&&0===a.indexOf(this._sourceMapBasepath)&&(a=a.substring(this._sourceMapBasepath.length),("\\"===a.charAt(0)||"/"===a.charAt(0))&&(a=a.substring(1))),(this._sourceMapRootpath||"")+a},a.sourceMapOutput.prototype.add=function(a,b,c,d){if(a){var e,f,g,h,i;if(b){var j=this._contentsMap[b.filename];this._contentsIgnoredCharsMap[b.filename]&&(c-=this._contentsIgnoredCharsMap[b.filename],0>c&&(c=0),j=j.slice(this._contentsIgnoredCharsMap[b.filename])),j=j.substring(0,c),f=j.split("\n"),h=f[f.length-1]}if(e=a.split("\n"),g=e[e.length-1],b)if(d)for(i=0;i<e.length;i++)this._sourceMapGenerator.addMapping({generated:{line:this._lineNumber+i+1,column:0===i?this._column:0},original:{line:f.length+i,column:0===i?h.length:0},source:this.normalizeFilename(b.filename)});else this._sourceMapGenerator.addMapping({generated:{line:this._lineNumber+1,column:this._column},original:{line:f.length,column:h.length},source:this.normalizeFilename(b.filename)});1===e.length?this._column+=g.length:(this._lineNumber+=e.length-1,this._column=g.length),this._css.push(a)}},a.sourceMapOutput.prototype.isEmpty=function(){return 0===this._css.length},a.sourceMapOutput.prototype.toCSS=function(a){if(this._sourceMapGenerator=new this._sourceMapGeneratorConstructor({file:this._outputFilename,sourceRoot:null}),this._outputSourceFiles)for(var b in this._contentsMap){var c=this._contentsMap[b];this._contentsIgnoredCharsMap[b]&&(c=c.slice(this._contentsIgnoredCharsMap[b])),this._sourceMapGenerator.setSourceContent(this.normalizeFilename(b),c)}if(this._rootNode.genCSS(a,this),this._css.length>0){var d,e=JSON.stringify(this._sourceMapGenerator.toJSON());this._sourceMapURL?d=this._sourceMapURL:this._sourceMapFilename&&(d=this.normalizeFilename(this._sourceMapFilename)),this._writeSourceMap?this._writeSourceMap(e):d="data:application/json,"+encodeURIComponent(e),d&&this._css.push("/*# sourceMappingURL="+d+" */")}return this._css.join("")}}(c("./tree"));var x=/^(file|chrome(-extension)?|resource|qrc|app):/.test(location.protocol);v.env=v.env||("127.0.0.1"==location.hostname||"0.0.0.0"==location.hostname||"localhost"==location.hostname||location.port&&location.port.length>0||x?"development":"production");var y={info:2,errors:1,none:0};if(v.logLevel="undefined"!=typeof v.logLevel?v.logLevel:y.info,v.async=v.async||!1,v.fileAsync=v.fileAsync||!1,v.poll=v.poll||(x?1e3:1500),v.functions)for(var z in v.functions)v.tree.functions[z]=v.functions[z];var A=/!dumpLineNumbers:(comments|mediaquery|all)/.exec(location.hash);A&&(v.dumpLineNumbers=A[1]);var B=/^text\/(x-)?less$/,C=null,D={};if(v.watch=function(){return v.watchMode||(v.env="development",u()),this.watchMode=!0,!0},v.unwatch=function(){return clearInterval(v.watchTimer),this.watchMode=!1,!1},/!watch/.test(location.hash)&&v.watch(),"development"!=v.env)try{C="undefined"==typeof a.localStorage?null:a.localStorage}catch(E){}var F=document.getElementsByTagName("link");v.sheets=[];for(var G=0;G<F.length;G++)("stylesheet/less"===F[G].rel||F[G].rel.match(/stylesheet/)&&F[G].type.match(B))&&v.sheets.push(F[G]);v.modifyVars=function(a){v.refresh(!1,a)},v.refresh=function(a,b){var c,e;c=e=new Date,t(function(a,b,f,h,j){return a?i(a,h.href):(j.local?d("loading "+h.href+" from cache.",y.info):(d("parsed "+h.href+" successfully.",y.info),g(b.toCSS(v),h,j.lastModified)),d("css for "+h.href+" generated in "+(new Date-e)+"ms",y.info),0===j.remaining&&d("css generated in "+(new Date-c)+"ms",y.info),e=new Date,void 0)},a,b),m(b)},v.refreshStyles=m,v.Parser.fileLoader=r,v.refresh("development"===v.env),"function"==typeof define&&define.amd&&define(function(){return v
})}(window);
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-cssanimations-csstransitions-shiv-cssclasses-testprop-testallprops-domprefixes-load
 */

;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.cssanimations=function(){return D("animationName")},p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return x(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */

window.matchMedia=window.matchMedia||function(a){"use strict";var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(document);

/*! Respond.js v1.3.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(a){"use strict";function x(){u(!0)}var b={};if(a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var b=m.shift();v(b.href,function(c){p(c,b.href,b.media),h[b.href]=!0,a.setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(b){var h="clientWidth",k=d[h],m="CSS1Compat"===c.compatMode&&k||c.body[h]||k,n={},o=l[l.length-1],p=(new Date).getTime();if(b&&q&&i>p-q)return a.clearTimeout(r),r=a.setTimeout(u,i),void 0;q=p;for(var v in e)if(e.hasOwnProperty(v)){var w=e[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?t||s():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?t||s():1)),w.hasquery&&(z&&A||!(z||m>=x)||!(A||y>=m))||(n[w.media]||(n[w.media]=[]),n[w.media].push(f[w.rules]))}for(var C in g)g.hasOwnProperty(C)&&g[C]&&g[C].parentNode===j&&j.removeChild(g[C]);for(var D in n)if(n.hasOwnProperty(D)){var E=c.createElement("style"),F=n[D].join("\n");E.type="text/css",E.media=D,j.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(c.createTextNode(F)),g.push(E)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}})(this);
/*
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 *
 * @version 1.09i
 */

var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/



(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = [].slice;

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define('waypoints', ['jquery'], function($) {
        return factory($, root);
      });
    } else {
      return factory(root.jQuery, root);
    }
  })(this, function($, window) {
    var $w, Context, Waypoint, allWaypoints, contextCounter, contextKey, contexts, isTouch, jQMethods, methods, resizeEvent, scrollEvent, waypointCounter, waypointKey, wp, wps;

    $w = $(window);
    isTouch = __indexOf.call(window, 'ontouchstart') >= 0;
    allWaypoints = {
      horizontal: {},
      vertical: {}
    };
    contextCounter = 1;
    contexts = {};
    contextKey = 'waypoints-context-id';
    resizeEvent = 'resize.waypoints';
    scrollEvent = 'scroll.waypoints';
    waypointCounter = 1;
    waypointKey = 'waypoints-waypoint-ids';
    wp = 'waypoint';
    wps = 'waypoints';
    Context = (function() {
      function Context($element) {
        var _this = this;

        this.$element = $element;
        this.element = $element[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = 'context' + contextCounter++;
        this.oldScroll = {
          x: $element.scrollLeft(),
          y: $element.scrollTop()
        };
        this.waypoints = {
          horizontal: {},
          vertical: {}
        };
        $element.data(contextKey, this.id);
        contexts[this.id] = this;
        $element.bind(scrollEvent, function() {
          var scrollHandler;

          if (!(_this.didScroll || isTouch)) {
            _this.didScroll = true;
            scrollHandler = function() {
              _this.doScroll();
              return _this.didScroll = false;
            };
            return window.setTimeout(scrollHandler, $[wps].settings.scrollThrottle);
          }
        });
        $element.bind(resizeEvent, function() {
          var resizeHandler;

          if (!_this.didResize) {
            _this.didResize = true;
            resizeHandler = function() {
              $[wps]('refresh');
              return _this.didResize = false;
            };
            return window.setTimeout(resizeHandler, $[wps].settings.resizeThrottle);
          }
        });
      }

      Context.prototype.doScroll = function() {
        var axes,
          _this = this;

        axes = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left'
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up'
          }
        };
        if (isTouch && (!axes.vertical.oldScroll || !axes.vertical.newScroll)) {
          $[wps]('refresh');
        }
        $.each(axes, function(aKey, axis) {
          var direction, isForward, triggered;

          triggered = [];
          isForward = axis.newScroll > axis.oldScroll;
          direction = isForward ? axis.forward : axis.backward;
          $.each(_this.waypoints[aKey], function(wKey, waypoint) {
            var _ref, _ref1;

            if ((axis.oldScroll < (_ref = waypoint.offset) && _ref <= axis.newScroll)) {
              return triggered.push(waypoint);
            } else if ((axis.newScroll < (_ref1 = waypoint.offset) && _ref1 <= axis.oldScroll)) {
              return triggered.push(waypoint);
            }
          });
          triggered.sort(function(a, b) {
            return a.offset - b.offset;
          });
          if (!isForward) {
            triggered.reverse();
          }
          return $.each(triggered, function(i, waypoint) {
            if (waypoint.options.continuous || i === triggered.length - 1) {
              return waypoint.trigger([direction]);
            }
          });
        });
        return this.oldScroll = {
          x: axes.horizontal.newScroll,
          y: axes.vertical.newScroll
        };
      };

      Context.prototype.refresh = function() {
        var axes, cOffset, isWin,
          _this = this;

        isWin = $.isWindow(this.element);
        cOffset = this.$element.offset();
        this.doScroll();
        axes = {
          horizontal: {
            contextOffset: isWin ? 0 : cOffset.left,
            contextScroll: isWin ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left',
            offsetProp: 'left'
          },
          vertical: {
            contextOffset: isWin ? 0 : cOffset.top,
            contextScroll: isWin ? 0 : this.oldScroll.y,
            contextDimension: isWin ? $[wps]('viewportHeight') : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up',
            offsetProp: 'top'
          }
        };
        return $.each(axes, function(aKey, axis) {
          return $.each(_this.waypoints[aKey], function(i, waypoint) {
            var adjustment, elementOffset, oldOffset, _ref, _ref1;

            adjustment = waypoint.options.offset;
            oldOffset = waypoint.offset;
            elementOffset = $.isWindow(waypoint.element) ? 0 : waypoint.$element.offset()[axis.offsetProp];
            if ($.isFunction(adjustment)) {
              adjustment = adjustment.apply(waypoint.element);
            } else if (typeof adjustment === 'string') {
              adjustment = parseFloat(adjustment);
              if (waypoint.options.offset.indexOf('%') > -1) {
                adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
              }
            }
            waypoint.offset = elementOffset - axis.contextOffset + axis.contextScroll - adjustment;
            if ((waypoint.options.onlyOnScroll && (oldOffset != null)) || !waypoint.enabled) {
              return;
            }
            if (oldOffset !== null && (oldOffset < (_ref = axis.oldScroll) && _ref <= waypoint.offset)) {
              return waypoint.trigger([axis.backward]);
            } else if (oldOffset !== null && (oldOffset > (_ref1 = axis.oldScroll) && _ref1 >= waypoint.offset)) {
              return waypoint.trigger([axis.forward]);
            } else if (oldOffset === null && axis.oldScroll >= waypoint.offset) {
              return waypoint.trigger([axis.forward]);
            }
          });
        });
      };

      Context.prototype.checkEmpty = function() {
        if ($.isEmptyObject(this.waypoints.horizontal) && $.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([resizeEvent, scrollEvent].join(' '));
          return delete contexts[this.id];
        }
      };

      return Context;

    })();
    Waypoint = (function() {
      function Waypoint($element, context, options) {
        var idList, _ref;

        options = $.extend({}, $.fn[wp].defaults, options);
        if (options.offset === 'bottom-in-view') {
          options.offset = function() {
            var contextHeight;

            contextHeight = $[wps]('viewportHeight');
            if (!$.isWindow(context.element)) {
              contextHeight = context.$element.height();
            }
            return contextHeight - $(this).outerHeight();
          };
        }
        this.$element = $element;
        this.element = $element[0];
        this.axis = options.horizontal ? 'horizontal' : 'vertical';
        this.callback = options.handler;
        this.context = context;
        this.enabled = options.enabled;
        this.id = 'waypoints' + waypointCounter++;
        this.offset = null;
        this.options = options;
        context.waypoints[this.axis][this.id] = this;
        allWaypoints[this.axis][this.id] = this;
        idList = (_ref = $element.data(waypointKey)) != null ? _ref : [];
        idList.push(this.id);
        $element.data(waypointKey, idList);
      }

      Waypoint.prototype.trigger = function(args) {
        if (!this.enabled) {
          return;
        }
        if (this.callback != null) {
          this.callback.apply(this.element, args);
        }
        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };

      Waypoint.prototype.disable = function() {
        return this.enabled = false;
      };

      Waypoint.prototype.enable = function() {
        this.context.refresh();
        return this.enabled = true;
      };

      Waypoint.prototype.destroy = function() {
        delete allWaypoints[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };

      Waypoint.getWaypointsByElement = function(element) {
        var all, ids;

        ids = $(element).data(waypointKey);
        if (!ids) {
          return [];
        }
        all = $.extend({}, allWaypoints.horizontal, allWaypoints.vertical);
        return $.map(ids, function(id) {
          return all[id];
        });
      };

      return Waypoint;

    })();
    methods = {
      init: function(f, options) {
        var _ref;

        if (options == null) {
          options = {};
        }
        if ((_ref = options.handler) == null) {
          options.handler = f;
        }
        this.each(function() {
          var $this, context, contextElement, _ref1;

          $this = $(this);
          contextElement = (_ref1 = options.context) != null ? _ref1 : $.fn[wp].defaults.context;
          if (!$.isWindow(contextElement)) {
            contextElement = $this.closest(contextElement);
          }
          contextElement = $(contextElement);
          context = contexts[contextElement.data(contextKey)];
          if (!context) {
            context = new Context(contextElement);
          }
          return new Waypoint($this, context, options);
        });
        $[wps]('refresh');
        return this;
      },
      disable: function() {
        return methods._invoke(this, 'disable');
      },
      enable: function() {
        return methods._invoke(this, 'enable');
      },
      destroy: function() {
        return methods._invoke(this, 'destroy');
      },
      prev: function(axis, selector) {
        return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
          if (index > 0) {
            return stack.push(waypoints[index - 1]);
          }
        });
      },
      next: function(axis, selector) {
        return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
          if (index < waypoints.length - 1) {
            return stack.push(waypoints[index + 1]);
          }
        });
      },
      _traverse: function(axis, selector, push) {
        var stack, waypoints;

        if (axis == null) {
          axis = 'vertical';
        }
        if (selector == null) {
          selector = window;
        }
        waypoints = jQMethods.aggregate(selector);
        stack = [];
        this.each(function() {
          var index;

          index = $.inArray(this, waypoints[axis]);
          return push(stack, index, waypoints[axis]);
        });
        return this.pushStack(stack);
      },
      _invoke: function($elements, method) {
        $elements.each(function() {
          var waypoints;

          waypoints = Waypoint.getWaypointsByElement(this);
          return $.each(waypoints, function(i, waypoint) {
            waypoint[method]();
            return true;
          });
        });
        return this;
      }
    };
    $.fn[wp] = function() {
      var args, method;

      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (methods[method]) {
        return methods[method].apply(this, args);
      } else if ($.isFunction(method)) {
        return methods.init.apply(this, arguments);
      } else if ($.isPlainObject(method)) {
        return methods.init.apply(this, [null, method]);
      } else if (!method) {
        return $.error("jQuery Waypoints needs a callback function or handler option.");
      } else {
        return $.error("The " + method + " method does not exist in jQuery Waypoints.");
      }
    };
    $.fn[wp].defaults = {
      context: window,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };
    jQMethods = {
      refresh: function() {
        return $.each(contexts, function(i, context) {
          return context.refresh();
        });
      },
      viewportHeight: function() {
        var _ref;

        return (_ref = window.innerHeight) != null ? _ref : $w.height();
      },
      aggregate: function(contextSelector) {
        var collection, waypoints, _ref;

        collection = allWaypoints;
        if (contextSelector) {
          collection = (_ref = contexts[$(contextSelector).data(contextKey)]) != null ? _ref.waypoints : void 0;
        }
        if (!collection) {
          return [];
        }
        waypoints = {
          horizontal: [],
          vertical: []
        };
        $.each(waypoints, function(axis, arr) {
          $.each(collection[axis], function(key, waypoint) {
            return arr.push(waypoint);
          });
          arr.sort(function(a, b) {
            return a.offset - b.offset;
          });
          waypoints[axis] = $.map(arr, function(waypoint) {
            return waypoint.element;
          });
          return waypoints[axis] = $.unique(waypoints[axis]);
        });
        return waypoints;
      },
      above: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
          return waypoint.offset <= context.oldScroll.y;
        });
      },
      below: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
          return waypoint.offset > context.oldScroll.y;
        });
      },
      left: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
          return waypoint.offset <= context.oldScroll.x;
        });
      },
      right: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
          return waypoint.offset > context.oldScroll.x;
        });
      },
      enable: function() {
        return jQMethods._invoke('enable');
      },
      disable: function() {
        return jQMethods._invoke('disable');
      },
      destroy: function() {
        return jQMethods._invoke('destroy');
      },
      extendFn: function(methodName, f) {
        return methods[methodName] = f;
      },
      _invoke: function(method) {
        var waypoints;

        waypoints = $.extend({}, allWaypoints.vertical, allWaypoints.horizontal);
        return $.each(waypoints, function(key, waypoint) {
          waypoint[method]();
          return true;
        });
      },
      _filter: function(selector, axis, test) {
        var context, waypoints;

        context = contexts[$(selector).data(contextKey)];
        if (!context) {
          return [];
        }
        waypoints = [];
        $.each(context.waypoints[axis], function(i, waypoint) {
          if (test(context, waypoint)) {
            return waypoints.push(waypoint);
          }
        });
        waypoints.sort(function(a, b) {
          return a.offset - b.offset;
        });
        return $.map(waypoints, function(waypoint) {
          return waypoint.element;
        });
      }
    };
    $[wps] = function() {
      var args, method;

      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (jQMethods[method]) {
        return jQMethods[method].apply(null, args);
      } else {
        return jQMethods.aggregate.call(null, method);
      }
    };
    $[wps].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    };
    return $w.load(function() {
      return $[wps]('refresh');
    });
  });

}).call(this);
/*!
 * Masonry PACKAGED v3.1.2
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

/**
 * Bridget makes jQuery widgets
 * v1.0.0
 */


( function( window ) {

'use strict';

// -------------------------- utils -------------------------- //

var slice = Array.prototype.slice;

function noop() {}

// -------------------------- definition -------------------------- //

function defineBridget( $ ) {

// bail if no jQuery
if ( !$ ) {
  return;
}

// -------------------------- addOptionMethod -------------------------- //

/**
 * adds option method -> $().plugin('option', {...})
 * @param {Function} PluginClass - constructor class
 */
function addOptionMethod( PluginClass ) {
  // don't overwrite original option method
  if ( PluginClass.prototype.option ) {
    return;
  }

  // option setter
  PluginClass.prototype.option = function( opts ) {
    // bail out if not an object
    if ( !$.isPlainObject( opts ) ){
      return;
    }
    this.options = $.extend( true, this.options, opts );
  };
}


// -------------------------- plugin bridge -------------------------- //

// helper function for logging errors
// $.error breaks jQuery chaining
var logError = typeof console === 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

/**
 * jQuery plugin bridge, access methods like $elem.plugin('method')
 * @param {String} namespace - plugin name
 * @param {Function} PluginClass - constructor class
 */
function bridge( namespace, PluginClass ) {
  // add to jQuery fn namespace
  $.fn[ namespace ] = function( options ) {
    if ( typeof options === 'string' ) {
      // call plugin method when first argument is a string
      // get arguments for method
      var args = slice.call( arguments, 1 );

      for ( var i=0, len = this.length; i < len; i++ ) {
        var elem = this[i];
        var instance = $.data( elem, namespace );
        if ( !instance ) {
          logError( "cannot call methods on " + namespace + " prior to initialization; " +
            "attempted to call '" + options + "'" );
          continue;
        }
        if ( !$.isFunction( instance[options] ) || options.charAt(0) === '_' ) {
          logError( "no such method '" + options + "' for " + namespace + " instance" );
          continue;
        }

        // trigger method with arguments
        var returnValue = instance[ options ].apply( instance, args );

        // break look and return first value if provided
        if ( returnValue !== undefined ) {
          return returnValue;
        }
      }
      // return this if no return value
      return this;
    } else {
      return this.each( function() {
        var instance = $.data( this, namespace );
        if ( instance ) {
          // apply options & init
          instance.option( options );
          instance._init();
        } else {
          // initialize new instance
          instance = new PluginClass( this, options );
          $.data( this, namespace, instance );
        }
      });
    }
  };

}

// -------------------------- bridget -------------------------- //

/**
 * converts a Prototypical class into a proper jQuery plugin
 *   the class must have a ._init method
 * @param {String} namespace - plugin name, used in $().pluginName
 * @param {Function} PluginClass - constructor class
 */
$.bridget = function( namespace, PluginClass ) {
  addOptionMethod( PluginClass );
  bridge( namespace, PluginClass );
};

}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( [ 'jquery' ], defineBridget );
} else {
  // get jquery from browser global
  defineBridget( window.jQuery );
}

})( window );


/*!
 * eventie v1.0.3
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false */

( function( window ) {



var docElem = document.documentElement;

var bind = function() {};

if ( docElem.addEventListener ) {
  bind = function( obj, type, fn ) {
    obj.addEventListener( type, fn, false );
  };
} else if ( docElem.attachEvent ) {
  bind = function( obj, type, fn ) {
    obj[ type + fn ] = fn.handleEvent ?
      function() {
        var event = window.event;
        // add event.target
        event.target = event.target || event.srcElement;
        fn.handleEvent.call( fn, event );
      } :
      function() {
        var event = window.event;
        // add event.target
        event.target = event.target || event.srcElement;
        fn.call( obj, event );
      };
    obj.attachEvent( "on" + type, obj[ type + fn ] );
  };
}

var unbind = function() {};

if ( docElem.removeEventListener ) {
  unbind = function( obj, type, fn ) {
    obj.removeEventListener( type, fn, false );
  };
} else if ( docElem.detachEvent ) {
  unbind = function( obj, type, fn ) {
    obj.detachEvent( "on" + type, obj[ type + fn ] );
    try {
      delete obj[ type + fn ];
    } catch ( err ) {
      // can't delete window object properties
      obj[ type + fn ] = undefined;
    }
  };
}

var eventie = {
  bind: bind,
  unbind: unbind
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'eventie/eventie',eventie );
} else {
  // browser global
  window.eventie = eventie;
}

})( this );

/*!
 * docReady
 * Cross browser DOMContentLoaded event emitter
 */

/*jshint browser: true, strict: true, undef: true, unused: true*/
/*global define: false */

( function( window ) {



var document = window.document;
// collection of functions to be triggered on ready
var queue = [];

function docReady( fn ) {
  // throw out non-functions
  if ( typeof fn !== 'function' ) {
    return;
  }

  if ( docReady.isReady ) {
    // ready now, hit it
    fn();
  } else {
    // queue function when ready
    queue.push( fn );
  }
}

docReady.isReady = false;

// triggered on various doc ready events
function init( event ) {
  // bail if IE8 document is not ready just yet
  var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
  if ( docReady.isReady || isIE8NotReady ) {
    return;
  }
  docReady.isReady = true;

  // process queue
  for ( var i=0, len = queue.length; i < len; i++ ) {
    var fn = queue[i];
    fn();
  }
}

function defineDocReady( eventie ) {
  eventie.bind( document, 'DOMContentLoaded', init );
  eventie.bind( document, 'readystatechange', init );
  eventie.bind( window, 'load', init );

  return docReady;
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  // if RequireJS, then doc is already ready
  docReady.isReady = typeof requirejs === 'function';
  define( 'doc-ready/doc-ready',[ 'eventie/eventie' ], defineDocReady );
} else {
  // browser global
  window.docReady = defineDocReady( window.eventie );
}

})( this );

/*!
 * EventEmitter v4.2.6 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

(function () {
	

	/**
	 * Class for managing events.
	 * Can be extended to provide event functionality in other classes.
	 *
	 * @class EventEmitter Manages event registering and emitting.
	 */
	function EventEmitter() {}

	// Shortcuts to improve speed and size
	var proto = EventEmitter.prototype;
	var exports = this;
	var originalGlobalValue = exports.EventEmitter;

	/**
	 * Finds the index of the listener for the event in it's storage array.
	 *
	 * @param {Function[]} listeners Array of listeners to search through.
	 * @param {Function} listener Method to look for.
	 * @return {Number} Index of the specified listener, -1 if not found
	 * @api private
	 */
	function indexOfListener(listeners, listener) {
		var i = listeners.length;
		while (i--) {
			if (listeners[i].listener === listener) {
				return i;
			}
		}

		return -1;
	}

	/**
	 * Alias a method while keeping the context correct, to allow for overwriting of target method.
	 *
	 * @param {String} name The name of the target method.
	 * @return {Function} The aliased method
	 * @api private
	 */
	function alias(name) {
		return function aliasClosure() {
			return this[name].apply(this, arguments);
		};
	}

	/**
	 * Returns the listener array for the specified event.
	 * Will initialise the event object and listener arrays if required.
	 * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	 * Each property in the object response is an array of listener functions.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Function[]|Object} All listener functions for the event.
	 */
	proto.getListeners = function getListeners(evt) {
		var events = this._getEvents();
		var response;
		var key;

		// Return a concatenated array of all matching events if
		// the selector is a regular expression.
		if (typeof evt === 'object') {
			response = {};
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					response[key] = events[key];
				}
			}
		}
		else {
			response = events[evt] || (events[evt] = []);
		}

		return response;
	};

	/**
	 * Takes a list of listener objects and flattens it into a list of listener functions.
	 *
	 * @param {Object[]} listeners Raw listener objects.
	 * @return {Function[]} Just the listener functions.
	 */
	proto.flattenListeners = function flattenListeners(listeners) {
		var flatListeners = [];
		var i;

		for (i = 0; i < listeners.length; i += 1) {
			flatListeners.push(listeners[i].listener);
		}

		return flatListeners;
	};

	/**
	 * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Object} All listener functions for an event in an object.
	 */
	proto.getListenersAsObject = function getListenersAsObject(evt) {
		var listeners = this.getListeners(evt);
		var response;

		if (listeners instanceof Array) {
			response = {};
			response[evt] = listeners;
		}

		return response || listeners;
	};

	/**
	 * Adds a listener function to the specified event.
	 * The listener will not be added if it is a duplicate.
	 * If the listener returns true then it will be removed after it is called.
	 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListener = function addListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var listenerIsWrapped = typeof listener === 'object';
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
				listeners[key].push(listenerIsWrapped ? listener : {
					listener: listener,
					once: false
				});
			}
		}

		return this;
	};

	/**
	 * Alias of addListener
	 */
	proto.on = alias('addListener');

	/**
	 * Semi-alias of addListener. It will add a listener that will be
	 * automatically removed after it's first execution.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addOnceListener = function addOnceListener(evt, listener) {
		return this.addListener(evt, {
			listener: listener,
			once: true
		});
	};

	/**
	 * Alias of addOnceListener.
	 */
	proto.once = alias('addOnceListener');

	/**
	 * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	 * You need to tell it what event names should be matched by a regex.
	 *
	 * @param {String} evt Name of the event to create.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvent = function defineEvent(evt) {
		this.getListeners(evt);
		return this;
	};

	/**
	 * Uses defineEvent to define multiple events.
	 *
	 * @param {String[]} evts An array of event names to define.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvents = function defineEvents(evts) {
		for (var i = 0; i < evts.length; i += 1) {
			this.defineEvent(evts[i]);
		}
		return this;
	};

	/**
	 * Removes a listener function from the specified event.
	 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to remove the listener from.
	 * @param {Function} listener Method to remove from the event.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListener = function removeListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var index;
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				index = indexOfListener(listeners[key], listener);

				if (index !== -1) {
					listeners[key].splice(index, 1);
				}
			}
		}

		return this;
	};

	/**
	 * Alias of removeListener
	 */
	proto.off = alias('removeListener');

	/**
	 * Adds listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	 * You can also pass it a regular expression to add the array of listeners to all events that match it.
	 * Yeah, this function does quite a bit. That's probably a bad thing.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListeners = function addListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(false, evt, listeners);
	};

	/**
	 * Removes listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be removed.
	 * You can also pass it a regular expression to remove the listeners from all events that match it.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListeners = function removeListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(true, evt, listeners);
	};

	/**
	 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	 * The first argument will determine if the listeners are removed (true) or added (false).
	 * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be added/removed.
	 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	 *
	 * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
		var i;
		var value;
		var single = remove ? this.removeListener : this.addListener;
		var multiple = remove ? this.removeListeners : this.addListeners;

		// If evt is an object then pass each of it's properties to this method
		if (typeof evt === 'object' && !(evt instanceof RegExp)) {
			for (i in evt) {
				if (evt.hasOwnProperty(i) && (value = evt[i])) {
					// Pass the single listener straight through to the singular method
					if (typeof value === 'function') {
						single.call(this, i, value);
					}
					else {
						// Otherwise pass back to the multiple function
						multiple.call(this, i, value);
					}
				}
			}
		}
		else {
			// So evt must be a string
			// And listeners must be an array of listeners
			// Loop over it and pass each one to the multiple method
			i = listeners.length;
			while (i--) {
				single.call(this, evt, listeners[i]);
			}
		}

		return this;
	};

	/**
	 * Removes all listeners from a specified event.
	 * If you do not specify an event then all listeners will be removed.
	 * That means every event will be emptied.
	 * You can also pass a regex to remove all events that match it.
	 *
	 * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeEvent = function removeEvent(evt) {
		var type = typeof evt;
		var events = this._getEvents();
		var key;

		// Remove different things depending on the state of evt
		if (type === 'string') {
			// Remove all listeners for the specified event
			delete events[evt];
		}
		else if (type === 'object') {
			// Remove all events matching the regex.
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					delete events[key];
				}
			}
		}
		else {
			// Remove all listeners in all events
			delete this._events;
		}

		return this;
	};

	/**
	 * Alias of removeEvent.
	 *
	 * Added to mirror the node API.
	 */
	proto.removeAllListeners = alias('removeEvent');

	/**
	 * Emits an event of your choice.
	 * When emitted, every listener attached to that event will be executed.
	 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	 * So they will not arrive within the array on the other side, they will be separate.
	 * You can also pass a regular expression to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {Array} [args] Optional array of arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emitEvent = function emitEvent(evt, args) {
		var listeners = this.getListenersAsObject(evt);
		var listener;
		var i;
		var key;
		var response;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				i = listeners[key].length;

				while (i--) {
					// If the listener returns true then it shall be removed from the event
					// The function is executed either with a basic call or an apply if there is an args array
					listener = listeners[key][i];

					if (listener.once === true) {
						this.removeListener(evt, listener.listener);
					}

					response = listener.listener.apply(this, args || []);

					if (response === this._getOnceReturnValue()) {
						this.removeListener(evt, listener.listener);
					}
				}
			}
		}

		return this;
	};

	/**
	 * Alias of emitEvent
	 */
	proto.trigger = alias('emitEvent');

	/**
	 * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {...*} Optional additional arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emit = function emit(evt) {
		var args = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(evt, args);
	};

	/**
	 * Sets the current value to check against when executing listeners. If a
	 * listeners return value matches the one set here then it will be removed
	 * after execution. This value defaults to true.
	 *
	 * @param {*} value The new value to check for when executing listeners.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.setOnceReturnValue = function setOnceReturnValue(value) {
		this._onceReturnValue = value;
		return this;
	};

	/**
	 * Fetches the current value to check against when executing listeners. If
	 * the listeners return value matches this one then it should be removed
	 * automatically. It will return true by default.
	 *
	 * @return {*|Boolean} The current value to check for or the default, true.
	 * @api private
	 */
	proto._getOnceReturnValue = function _getOnceReturnValue() {
		if (this.hasOwnProperty('_onceReturnValue')) {
			return this._onceReturnValue;
		}
		else {
			return true;
		}
	};

	/**
	 * Fetches the events object and creates one if required.
	 *
	 * @return {Object} The events storage object.
	 * @api private
	 */
	proto._getEvents = function _getEvents() {
		return this._events || (this._events = {});
	};

	/**
	 * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	 *
	 * @return {Function} Non conflicting EventEmitter class.
	 */
	EventEmitter.noConflict = function noConflict() {
		exports.EventEmitter = originalGlobalValue;
		return EventEmitter;
	};

	// Expose the class either via AMD, CommonJS or the global object
	if (typeof define === 'function' && define.amd) {
		define('eventEmitter/EventEmitter',[],function () {
			return EventEmitter;
		});
	}
	else if (typeof module === 'object' && module.exports){
		module.exports = EventEmitter;
	}
	else {
		this.EventEmitter = EventEmitter;
	}
}.call(this));

/*!
 * getStyleProperty v1.0.3
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false, exports: false, module: false */

( function( window ) {



var prefixes = 'Webkit Moz ms Ms O'.split(' ');
var docElemStyle = document.documentElement.style;

function getStyleProperty( propName ) {
  if ( !propName ) {
    return;
  }

  // test standard property first
  if ( typeof docElemStyle[ propName ] === 'string' ) {
    return propName;
  }

  // capitalize
  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

  // test vendor specific properties
  var prefixed;
  for ( var i=0, len = prefixes.length; i < len; i++ ) {
    prefixed = prefixes[i] + propName;
    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
      return prefixed;
    }
  }
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'get-style-property/get-style-property',[],function() {
    return getStyleProperty;
  });
} else if ( typeof exports === 'object' ) {
  // CommonJS for Component
  module.exports = getStyleProperty;
} else {
  // browser global
  window.getStyleProperty = getStyleProperty;
}

})( window );

/**
 * getSize v1.1.6
 * measure size of elements
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, exports: false, require: false, module: false */

( function( window, undefined ) {



// -------------------------- helpers -------------------------- //

var defView = document.defaultView;
var isComputedStyle = defView && defView.getComputedStyle;

var getStyle = isComputedStyle ?
  function( elem ) {
    return defView.getComputedStyle( elem, null );
  } :
  function( elem ) {
    return elem.currentStyle;
  };

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') === -1 && !isNaN( num );
  return isValid && num;
}

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0, len = measurements.length; i < len; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}



function defineGetSize( getStyleProperty ) {

// -------------------------- box sizing -------------------------- //

var boxSizingProp = getStyleProperty('boxSizing');
var isBoxSizeOuter;

/**
 * WebKit measures the outer-width on style.width on border-box elems
 * IE & Firefox measures the inner-width
 */
( function() {
  if ( !boxSizingProp ) {
    return;
  }

  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style[ boxSizingProp ] = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );

  isBoxSizeOuter = getStyleSize( style.width ) === 200;
  body.removeChild( div );
})();


// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  // use querySeletor if elem is string
  if ( typeof elem === 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem !== 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display === 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = !!( boxSizingProp &&
    style[ boxSizingProp ] && style[ boxSizingProp ] === 'border-box' );

  // get all measurements
  for ( var i=0, len = measurements.length; i < len; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    value = mungeNonPixel( elem, value );
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

// IE8 returns percent values, not pixels
// taken from jQuery's curCSS
function mungeNonPixel( elem, value ) {
  // IE8 and has percent value
  if ( isComputedStyle || value.indexOf('%') === -1 ) {
    return value;
  }
  var style = elem.style;
  // Remember the original values
  var left = style.left;
  var rs = elem.runtimeStyle;
  var rsLeft = rs && rs.left;

  // Put in the new values to get a computed value out
  if ( rsLeft ) {
    rs.left = elem.currentStyle.left;
  }
  style.left = value;
  value = style.pixelLeft;

  // Revert the changed values
  style.left = left;
  if ( rsLeft ) {
    rs.left = rsLeft;
  }

  return value;
}

return getSize;

}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD for RequireJS
  define( 'get-size/get-size',[ 'get-style-property/get-style-property' ], defineGetSize );
} else if ( typeof exports === 'object' ) {
  // CommonJS for Component
  module.exports = defineGetSize( require('get-style-property') );
} else {
  // browser global
  window.getSize = defineGetSize( window.getStyleProperty );
}

})( window );

/**
 * matchesSelector helper v1.0.1
 *
 * @name matchesSelector
 *   @param {Element} elem
 *   @param {String} selector
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false */

( function( global, ElemProto ) {

  

  var matchesMethod = ( function() {
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0, len = prefixes.length; i < len; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  // ----- match ----- //

  function match( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  }

  // ----- appendToFragment ----- //

  function checkParent( elem ) {
    // not needed if already has parent
    if ( elem.parentNode ) {
      return;
    }
    var fragment = document.createDocumentFragment();
    fragment.appendChild( elem );
  }

  // ----- query ----- //

  // fall back to using QSA
  // thx @jonathantneal https://gist.github.com/3062955
  function query( elem, selector ) {
    // append to fragment if no parent
    checkParent( elem );

    // match elem with all selected elems of parent
    var elems = elem.parentNode.querySelectorAll( selector );
    for ( var i=0, len = elems.length; i < len; i++ ) {
      // return true if match
      if ( elems[i] === elem ) {
        return true;
      }
    }
    // otherwise return false
    return false;
  }

  // ----- matchChild ----- //

  function matchChild( elem, selector ) {
    checkParent( elem );
    return match( elem, selector );
  }

  // ----- matchesSelector ----- //

  var matchesSelector;

  if ( matchesMethod ) {
    // IE9 supports matchesSelector, but doesn't work on orphaned elems
    // check for that
    var div = document.createElement('div');
    var supportsOrphans = match( div, 'div' );
    matchesSelector = supportsOrphans ? match : matchChild;
  } else {
    matchesSelector = query;
  }

  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( 'matches-selector/matches-selector',[],function() {
      return matchesSelector;
    });
  } else {
    // browser global
    window.matchesSelector = matchesSelector;
  }

})( this, Element.prototype );

/**
 * Outlayer Item
**/

( function( window ) {



// ----- get style ----- //

var defView = document.defaultView;

var getStyle = defView && defView.getComputedStyle ?
  function( elem ) {
    return defView.getComputedStyle( elem, null );
  } :
  function( elem ) {
    return elem.currentStyle;
  };


// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
function toDash( str ) {
  return str.replace( /([A-Z])/g, function( $1 ){
    return '-' + $1.toLowerCase();
  });
}

// -------------------------- Outlayer definition -------------------------- //

function outlayerItemDefinition( EventEmitter, getSize, getStyleProperty ) {

// -------------------------- CSS3 support -------------------------- //

var transitionProperty = getStyleProperty('transition');
var transformProperty = getStyleProperty('transform');
var supportsCSS3 = transitionProperty && transformProperty;
var is3d = !!getStyleProperty('perspective');

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'otransitionend',
  transition: 'transitionend'
}[ transitionProperty ];

// properties that could have vendor prefix
var prefixableProperties = [
  'transform',
  'transition',
  'transitionDuration',
  'transitionProperty'
];

// cache all vendor properties
var vendorProperties = ( function() {
  var cache = {};
  for ( var i=0, len = prefixableProperties.length; i < len; i++ ) {
    var prop = prefixableProperties[i];
    var supportedProp = getStyleProperty( prop );
    if ( supportedProp && supportedProp !== prop ) {
      cache[ prop ] = supportedProp;
    }
  }
  return cache;
})();

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EventEmitter
extend( Item.prototype, EventEmitter.prototype );

Item.prototype._create = function() {
  // transition objects
  this._transition = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
Item.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

Item.prototype.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
Item.prototype.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
Item.prototype.getPosition = function() {
  var style = getStyle( this.element );
  var layoutOptions = this.layout.options;
  var isOriginLeft = layoutOptions.isOriginLeft;
  var isOriginTop = layoutOptions.isOriginTop;
  var x = parseInt( style[ isOriginLeft ? 'left' : 'right' ], 10 );
  var y = parseInt( style[ isOriginTop ? 'top' : 'bottom' ], 10 );

  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  var layoutSize = this.layout.size;
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
Item.prototype.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var layoutOptions = this.layout.options;
  var style = {};

  if ( layoutOptions.isOriginLeft ) {
    style.left = ( this.position.x + layoutSize.paddingLeft ) + 'px';
    // reset other property
    style.right = '';
  } else {
    style.right = ( this.position.x + layoutSize.paddingRight ) + 'px';
    style.left = '';
  }

  if ( layoutOptions.isOriginTop ) {
    style.top = ( this.position.y + layoutSize.paddingTop ) + 'px';
    style.bottom = '';
  } else {
    style.bottom = ( this.position.y + layoutSize.paddingBottom ) + 'px';
    style.top = '';
  }

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};


// transform translate function
var translate = is3d ?
  function( x, y ) {
    return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
  } :
  function( x, y ) {
    return 'translate(' + x + 'px, ' + y + 'px)';
  };


Item.prototype._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var compareX = parseInt( x, 10 );
  var compareY = parseInt( y, 10 );
  var didNotMove = compareX === this.position.x && compareY === this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  // flip cooridinates if origin on right or bottom
  var layoutOptions = this.layout.options;
  transX = layoutOptions.isOriginLeft ? transX : -transX;
  transY = layoutOptions.isOriginTop ? transY : -transY;
  transitionStyle.transform = translate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

// non transition + transform support
Item.prototype.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

// use transition and transforms if supported
Item.prototype.moveTo = supportsCSS3 ?
  Item.prototype._transitionTo : Item.prototype.goTo;

Item.prototype.setPosition = function( x, y ) {
  this.position.x = parseInt( x, 10 );
  this.position.y = parseInt( y, 10 );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
Item.prototype._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
Item.prototype._transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transition;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

var itemTransitionProperties = transformProperty && ( toDash( transformProperty ) +
  ',opacity' );

Item.prototype.enableTransition = function(/* style */) {
  // only enable if not already transitioning
  // bug in IE10 were re-setting transition style will prevent
  // transitionend event from triggering
  if ( this.isTransitioning ) {
    return;
  }

  // make transition: foo, bar, baz from style object
  // TODO uncomment this bit when IE10 bug is resolved
  // var transitionValue = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   transitionValue.push( toDash( prop ) );
  // }
  // enable transition styles
  // HACK always enable transform,opacity for IE10
  this.css({
    transitionProperty: itemTransitionProperties,
    transitionDuration: this.layout.options.transitionDuration
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

Item.prototype.transition = Item.prototype[ transitionProperty ? '_transition' : '_nonTransition' ];

// ----- events ----- //

Item.prototype.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

Item.prototype.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform',
  '-moz-transform': 'transform',
  '-o-transform': 'transform'
};

Item.prototype.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transition;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

Item.prototype.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
Item.prototype._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: ''
};

Item.prototype.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- show/hide/remove ----- //

// remove element from DOM
Item.prototype.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  this.emitEvent( 'remove', [ this ] );
};

Item.prototype.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  var _this = this;
  this.on( 'transitionEnd', function() {
    _this.removeElem();
    return true; // bind once
  });
  this.hide();
};

Item.prototype.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;
  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true
  });
};

Item.prototype.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;
  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: {
      opacity: function() {
        // check if still hidden
        // during transition, item may have been un-hidden
        if ( this.isHidden ) {
          this.css({ display: 'none' });
        }
      }
    }
  });
};

Item.prototype.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}

// -------------------------- transport -------------------------- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'outlayer/item',[
      'eventEmitter/EventEmitter',
      'get-size/get-size',
      'get-style-property/get-style-property'
    ],
    outlayerItemDefinition );
} else {
  // browser global
  window.Outlayer = {};
  window.Outlayer.Item = outlayerItemDefinition(
    window.EventEmitter,
    window.getSize,
    window.getStyleProperty
  );
}

})( window );

/*!
 * Outlayer v1.1.9
 * the brains and guts of a layout library
 */

( function( window ) {



// ----- vars ----- //

var document = window.document;
var console = window.console;
var jQuery = window.jQuery;

var noop = function() {};

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}


var objToString = Object.prototype.toString;
function isArray( obj ) {
  return objToString.call( obj ) === '[object Array]';
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( obj && typeof obj.length === 'number' ) {
    // convert nodeList to array
    for ( var i=0, len = obj.length; i < len; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

// http://stackoverflow.com/a/384380/182183
var isElement = ( typeof HTMLElement === 'object' ) ?
  function isElementDOM2( obj ) {
    return obj instanceof HTMLElement;
  } :
  function isElementQuirky( obj ) {
    return obj && typeof obj === 'object' &&
      obj.nodeType === 1 && typeof obj.nodeName === 'string';
  };

// index of helper cause IE8
var indexOf = Array.prototype.indexOf ? function( ary, obj ) {
    return ary.indexOf( obj );
  } : function( ary, obj ) {
    for ( var i=0, len = ary.length; i < len; i++ ) {
      if ( ary[i] === obj ) {
        return i;
      }
    }
    return -1;
  };

function removeFrom( obj, ary ) {
  var index = indexOf( ary, obj );
  if ( index !== -1 ) {
    ary.splice( index, 1 );
  }
}

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
function toDashed( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
}


function outlayerDefinition( eventie, docReady, EventEmitter, getSize, matchesSelector, Item ) {

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  // use element as selector string
  if ( typeof element === 'string' ) {
    element = document.querySelector( element );
  }

  // bail out if not proper element
  if ( !element || !isElement( element ) ) {
    if ( console ) {
      console.error( 'Bad ' + this.settings.namespace + ' element: ' + element );
    }
    return;
  }

  this.element = element;

  // options
  this.options = extend( {}, this.options );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  if ( this.options.isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.prototype.settings = {
  namespace: 'outlayer',
  item: Item
};

// default options
Outlayer.prototype.options = {
  containerStyle: {
    position: 'relative'
  },
  isInitLayout: true,
  isOriginLeft: true,
  isOriginTop: true,
  isResizeBound: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

// inherit EventEmitter
extend( Outlayer.prototype, EventEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
Outlayer.prototype.option = function( opts ) {
  extend( this.options, opts );
};

Outlayer.prototype._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  extend( this.element.style, this.options.containerStyle );

  // bind resize method
  if ( this.options.isResizeBound ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
Outlayer.prototype.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
Outlayer.prototype._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.settings.item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0, len = itemElems.length; i < len; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
Outlayer.prototype._filterFindItemElements = function( elems ) {
  // make array of elems
  elems = makeArray( elems );
  var itemSelector = this.options.itemSelector;
  var itemElems = [];

  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    // check that elem is an actual element
    if ( !isElement( elem ) ) {
      continue;
    }
    // filter & find items if we have an item selector
    if ( itemSelector ) {
      // filter siblings
      if ( matchesSelector( elem, itemSelector ) ) {
        itemElems.push( elem );
      }
      // find children
      var childElems = elem.querySelectorAll( itemSelector );
      // concat childElems to filterFound array
      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
        itemElems.push( childElems[j] );
      }
    } else {
      itemElems.push( elem );
    }
  }

  return itemElems;
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
Outlayer.prototype.getItemElements = function() {
  var elems = [];
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    elems.push( this.items[i].element );
  }
  return elems;
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
Outlayer.prototype.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var isInstant = this.options.isLayoutInstant !== undefined ?
    this.options.isLayoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
Outlayer.prototype._init = Outlayer.prototype.layout;

/**
 * logic before any new layout
 */
Outlayer.prototype._resetLayout = function() {
  this.getSize();
};


Outlayer.prototype.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
Outlayer.prototype._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    if ( typeof option === 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( isElement( option ) ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
Outlayer.prototype.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
Outlayer.prototype._getItemsForLayout = function( items ) {
  var layoutItems = [];
  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    if ( !item.isIgnored ) {
      layoutItems.push( item );
    }
  }
  return layoutItems;
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
Outlayer.prototype._layoutItems = function( items, isInstant ) {
  if ( !items || !items.length ) {
    // no items, emit event with empty array
    this.emitEvent( 'layoutComplete', [ this, items ] );
    return;
  }

  // emit layoutComplete when done
  this._itemsOn( items, 'layout', function onItemsLayout() {
    this.emitEvent( 'layoutComplete', [ this, items ] );
  });

  var queue = [];

  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant;
    queue.push( position );
  }

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
Outlayer.prototype._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
Outlayer.prototype._processLayoutQueue = function( queue ) {
  for ( var i=0, len = queue.length; i < len; i++ ) {
    var obj = queue[i];
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant );
  }
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
Outlayer.prototype._positionItem = function( item, x, y, isInstant ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
Outlayer.prototype._postLayout = function() {
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
Outlayer.prototype._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
Outlayer.prototype._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * trigger a callback for a collection of items events
 * @param {Array} items - Outlayer.Items
 * @param {String} eventName
 * @param {Function} callback
 */
Outlayer.prototype._itemsOn = function( items, eventName, callback ) {
  var doneCount = 0;
  var count = items.length;
  // event callback
  var _this = this;
  function tick() {
    doneCount++;
    if ( doneCount === count ) {
      callback.call( _this );
    }
    return true; // bind once
  }
  // bind callback
  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    item.on( eventName, tick );
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
Outlayer.prototype.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
Outlayer.prototype.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
Outlayer.prototype.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    this.ignore( elem );
  }
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
Outlayer.prototype.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    // filter out removed stamp elements
    removeFrom( elem, this.stamps );
    this.unignore( elem );
  }

};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
Outlayer.prototype._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems === 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = makeArray( elems );
  return elems;
};

Outlayer.prototype._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  for ( var i=0, len = this.stamps.length; i < len; i++ ) {
    var stamp = this.stamps[i];
    this._manageStamp( stamp );
  }
};

// update boundingLeft / Top
Outlayer.prototype._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
Outlayer.prototype._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
Outlayer.prototype._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
Outlayer.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

/**
 * Bind layout to window resizing
 */
Outlayer.prototype.bindResize = function() {
  // bind just one listener
  if ( this.isResizeBound ) {
    return;
  }
  eventie.bind( window, 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
Outlayer.prototype.unbindResize = function() {
  eventie.unbind( window, 'resize', this );
  this.isResizeBound = false;
};

// original debounce by John Hann
// http://unscriptable.com/index.html/2009/03/20/debouncing-javascript-methods/

// this fires every resize
Outlayer.prototype.onresize = function() {
  if ( this.resizeTimeout ) {
    clearTimeout( this.resizeTimeout );
  }

  var _this = this;
  function delayed() {
    _this.resize();
    delete _this.resizeTimeout;
  }

  this.resizeTimeout = setTimeout( delayed, 100 );
};

// debounced, layout on resize
Outlayer.prototype.resize = function() {
  // don't trigger if size did not change
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  if ( hasSizes && size.innerWidth === this.size.innerWidth ) {
    return;
  }

  this.layout();
};


// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
Outlayer.prototype.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
Outlayer.prototype.reveal = function( items ) {
  if ( !items || !items.length ) {
    return;
  }
  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    item.reveal();
  }
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
Outlayer.prototype.hide = function( items ) {
  if ( !items || !items.length ) {
    return;
  }
  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    item.hide();
  }
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
Outlayer.prototype.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    var item = this.items[i];
    if ( item.element === elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
Outlayer.prototype.getItems = function( elems ) {
  if ( !elems || !elems.length ) {
    return;
  }
  var items = [];
  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.remove = function( elems ) {
  elems = makeArray( elems );

  var removeItems = this.getItems( elems );
  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  this._itemsOn( removeItems, 'remove', function() {
    this.emitEvent( 'removeComplete', [ this, removeItems ] );
  });

  for ( var i=0, len = removeItems.length; i < len; i++ ) {
    var item = removeItems[i];
    item.remove();
    // remove item from collection
    removeFrom( item, this.items );
  }
};

// ----- destroy ----- //

// remove and disable Outlayer instance
Outlayer.prototype.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    var item = this.items[i];
    item.destroy();
  }

  this.unbindResize();

  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.settings.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};

// --------------------------  -------------------------- //

// copy an object on the Outlayer prototype
// used in options and settings
function copyOutlayerProto( obj, property ) {
  obj.prototype[ property ] = extend( {}, Outlayer.prototype[ property ] );
}

// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  function Layout() {
    Outlayer.apply( this, arguments );
  }

  extend( Layout.prototype, Outlayer.prototype );

  copyOutlayerProto( Layout, 'options' );
  copyOutlayerProto( Layout, 'settings' );

  extend( Layout.prototype.options, options );

  Layout.prototype.settings.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = function LayoutItem() {
    Item.apply( this, arguments );
  };

  Layout.Item.prototype = new Item();

  Layout.prototype.settings.item = Layout.Item;

  // -------------------------- declarative -------------------------- //

  /**
   * allow user to initialize Outlayer via .js-namespace class
   * options are parsed from data-namespace-option attribute
   */
  docReady( function() {
    var dashedNamespace = toDashed( namespace );
    var elems = document.querySelectorAll( '.js-' + dashedNamespace );
    var dataAttr = 'data-' + dashedNamespace + '-options';

    for ( var i=0, len = elems.length; i < len; i++ ) {
      var elem = elems[i];
      var attr = elem.getAttribute( dataAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' +
            elem.nodeName.toLowerCase() + ( elem.id ? '#' + elem.id : '' ) + ': ' +
            error );
        }
        continue;
      }
      // initialize
      var instance = new Layout( elem, options );
      // make available via $().data('layoutname')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    }
  });

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}

// -------------------------- transport -------------------------- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'outlayer/outlayer',[
      'eventie/eventie',
      'doc-ready/doc-ready',
      'eventEmitter/EventEmitter',
      'get-size/get-size',
      'matches-selector/matches-selector',
      './item'
    ],
    outlayerDefinition );
} else {
  // browser global
  window.Outlayer = outlayerDefinition(
    window.eventie,
    window.docReady,
    window.EventEmitter,
    window.getSize,
    window.matchesSelector,
    window.Outlayer.Item
  );
}

})( window );

/*!
 * Masonry v3.1.2
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window ) {



// -------------------------- helpers -------------------------- //

var indexOf = Array.prototype.indexOf ?
  function( items, value ) {
    return items.indexOf( value );
  } :
  function ( items, value ) {
    for ( var i=0, len = items.length; i < len; i++ ) {
      var item = items[i];
      if ( item === value ) {
        return i;
      }
    }
    return -1;
  };

// -------------------------- masonryDefinition -------------------------- //

// used for AMD definition and requires
function masonryDefinition( Outlayer, getSize ) {
  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');

  Masonry.prototype._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    var i = this.cols;
    this.colYs = [];
    while (i--) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
  };

  Masonry.prototype.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    this.columnWidth += this.gutter;

    this.cols = Math.floor( ( this.containerWidth + this.gutter ) / this.columnWidth );
    this.cols = Math.max( this.cols, 1 );
  };

  Masonry.prototype.getContainerWidth = function() {
    // container is parent if fit width
    var container = this.options.isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  Masonry.prototype._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var colSpan = Math.ceil( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );

    var colGroup = this._getColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );
    var shortColIndex = indexOf( colGroup, minimumY );

    // position the brick
    var position = {
      x: this.columnWidth * shortColIndex,
      y: minimumY
    };

    // apply setHeight to necessary columns
    var setHeight = minimumY + item.size.outerHeight;
    var setSpan = this.cols + 1 - colGroup.length;
    for ( var i = 0; i < setSpan; i++ ) {
      this.colYs[ shortColIndex + i ] = setHeight;
    }

    return position;
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  Masonry.prototype._getColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      // make an array of colY values for that one group
      var groupColYs = this.colYs.slice( i, i + colSpan );
      // and get the max value of the array
      colGroup[i] = Math.max.apply( Math, groupColYs );
    }
    return colGroup;
  };

  Masonry.prototype._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var firstX = this.options.isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp
    var stampMaxY = ( this.options.isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  Masonry.prototype._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this.options.isFitWidth ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  Masonry.prototype._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  // debounced, layout on resize
  // HEADS UP this overwrites Outlayer.resize
  // Any changes in Outlayer.resize need to be manually added here
  Masonry.prototype.resize = function() {
    // don't trigger if size did not change
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    if ( previousWidth === this.containerWidth ) {
      return;
    }

    this.layout();
  };

  return Masonry;
}

// -------------------------- transport -------------------------- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'masonry/masonry',[
      'outlayer/outlayer',
      'get-size/get-size'
    ],
    masonryDefinition );
} else {
  // browser global
  window.Masonry = masonryDefinition(
    window.Outlayer,
    window.getSize
  );
}

})( window );
/*
* MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
* Version: 1.5.4
* License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
* http://creativecommons.org/licenses/by-nd/3.0/
* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka, Barrel LLC, All Rights Reserved
* 
* http://mixitup.io
*/


(function($){
	
	// DECLARE METHODS
 
	var methods = {

		// "INIT" METHOD
	
	    init: function(settings){

			return this.each(function(){
				
				// BUILD CONFIG OBJECT

				var config = {
					
					// PUBLIC PROPERTIES
					
					targetSelector : '.mix',
					filterSelector : '.filter',
					sortSelector : '.sort',
					buttonEvent: 'click',
					effects : ['fade', 'scale'],
					listEffects : null,
					easing : 'smooth',
					layoutMode: 'grid',
					targetDisplayGrid : 'inline-block',
					targetDisplayList: 'block',
					listClass : '',
					gridClass : '',
					transitionSpeed : 600,
					showOnLoad : 'all',
					sortOnLoad : false,
					multiFilter : false,
					filterLogic : 'or',
					resizeContainer : true,
					minHeight : 0,
					failClass : 'fail',
					perspectiveDistance : '3000',
					perspectiveOrigin : '50% 50%',
					animateGridList : true,
					onMixLoad: null,
					onMixStart : null,
					onMixEnd : null,

					// MISC

					container : null,
					origOrder : [],
					startOrder : [],
					newOrder : [],
					origSort: [],
					checkSort: [],
					filter : '',
					mixing : false,
					origDisplay : '',
					origLayout: '',
					origHeight : 0, 
					newHeight : 0,
					isTouch : false,
					resetDelay : 0,
					failsafe : null,

					// CSS
					
					prefix : '',
					easingFallback : 'ease-in-out',
					transition : {}, 
					perspective : {}, 
					clean : {},
					fade : '1',
					scale : '',
					rotateX : '',
					rotateY : '',
					rotateZ : '',
					blur : '',
					grayscale : ''
				};
				
				if(settings){
					$.extend(config, settings);
				};

				// ADD CONFIG OBJECT TO CONTAINER OBJECT PER INSTANTIATION
				
				this.config = config;
				
				// DETECT TOUCH
				
				$.support.touch = 'ontouchend' in document;

				if ($.support.touch) {
					config.isTouch = true;
					config.resetDelay = 350;
				};
				
				// LOCALIZE CONTAINER
	
				config.container = $(this);
				var $cont = config.container;
				
				// GET VENDOR PREFIX
				
				config.prefix = prefix($cont[0]);
				config.prefix = config.prefix ? '-'+config.prefix.toLowerCase()+'-' : '';
				
				// CACHE 'DEFAULT' SORTING ORDER
			
				$cont.find(config.targetSelector).each(function(){
					config.origOrder.push($(this));
				});
				
				// PERFORM SORT ON LOAD 
				
				if(config.sortOnLoad){
					var sortby, order;
					if($.isArray(config.sortOnLoad)){
						sortby = config.sortOnLoad[0], order = config.sortOnLoad[1];
						$(config.sortSelector+'[data-sort='+config.sortOnLoad[0]+'][data-order='+config.sortOnLoad[1]+']').addClass('active');
					} else {
						$(config.sortSelector+'[data-sort='+config.sortOnLoad+']').addClass('active');
						sortby = config.sortOnLoad, config.sortOnLoad = 'desc';
					};
					sort(sortby, order, $cont, config);
				};
				
				// BUILD TRANSITION AND PERSPECTIVE OBJECTS
				
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					config.transition[a+'transition'] = 'all '+config.transitionSpeed+'ms ease-in-out';
					config.perspective[a+'perspective'] = config.perspectiveDistance+'px';
					config.perspective[a+'perspective-origin'] = config.perspectiveOrigin;
				};
				
				// BUILD TRANSITION CLEANER
				
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					config.clean[a+'transition'] = 'none';
				};
	
				// CHOOSE GRID OR LIST
	
				if(config.layoutMode == 'list'){
					$cont.addClass(config.listClass);
					config.origDisplay = config.targetDisplayList;
				} else {
					$cont.addClass(config.gridClass);
					config.origDisplay = config.targetDisplayGrid;
				};
				config.origLayout = config.layoutMode;
				
				// PARSE 'SHOWONLOAD'
				
				var showOnLoadArray = config.showOnLoad.split(' ');
				
				// GIVE ACTIVE FILTER ACTIVE CLASS
				
				$.each(showOnLoadArray, function(){
					$(config.filterSelector+'[data-filter="'+this+'"]').addClass('active');
				});
				
				// RENAME "ALL" CATEGORY TO "MIX_ALL"
	
				$cont.find(config.targetSelector).addClass('mix_all');
				if(showOnLoadArray[0]  == 'all'){
					showOnLoadArray[0] = 'mix_all',
					config.showOnLoad = 'mix_all';
				};
				
				// FADE IN 'SHOWONLOAD'
				
				var $showOnLoad = $();
				$.each(showOnLoadArray, function(){
					$showOnLoad = $showOnLoad.add($('.'+this))
				});
				
				$showOnLoad.each(function(){
					var $t = $(this);
					if(config.layoutMode == 'list'){
						$t.css('display',config.targetDisplayList);
					} else {
						$t.css('display',config.targetDisplayGrid);
					};
					$t.css(config.transition);
				});
				
				// WRAP FADE-IN TO PREVENT RACE CONDITION
				
				var delay = setTimeout(function(){
					
					config.mixing = true;
					
					$showOnLoad.css('opacity','1');
					
					// CLEAN UP
					
					var reset = setTimeout(function(){
						if(config.layoutMode == 'list'){
							$showOnLoad.removeStyle(config.prefix+'transition, transition').css({
								display: config.targetDisplayList,
								opacity: 1
							});
						} else {
							$showOnLoad.removeStyle(config.prefix+'transition, transition').css({
								display: config.targetDisplayGrid,
								opacity: 1
							});
						};
						
						// FIRE "ONMIXLOAD" CALLBACK
						
						config.mixing = false;

						if(typeof config.onMixLoad == 'function') {
							var output = config.onMixLoad.call(this, config);

							// UPDATE CONFIG IF DATA RETURNED

							config = output ? output : config;
						};
						
					},config.transitionSpeed);
				},10);
				
				// PRESET ACTIVE FILTER
				
				config.filter = config.showOnLoad;
			
				// BIND SORT CLICK HANDLERS
			
				$(config.sortSelector).bind(config.buttonEvent,function(){
					
					if(!config.mixing){
						
						// PARSE SORT ARGUMENTS FROM BUTTON CLASSES
						
						var $t = $(this),
						sortby = $t.attr('data-sort'),
						order = $t.attr('data-order');
						
						if(!$t.hasClass('active')){
							$(config.sortSelector).removeClass('active');
							$t.addClass('active');
						} else {
							if(sortby != 'random')return false;
						};
						
						$cont.find(config.targetSelector).each(function(){
							config.startOrder.push($(this));
						});
				
						goMix(config.filter,sortby,order,$cont, config);
				
					};
				
				});

				// BIND FILTER CLICK HANDLERS

				$(config.filterSelector).bind(config.buttonEvent,function(){
				
					if(!config.mixing){
						
						var $t = $(this);
						
						// PARSE FILTER ARGUMENTS FROM BUTTON CLASSES
		
						if(config.multiFilter == false){
							
							// SINGLE ACTIVE BUTTON
							
							$(config.filterSelector).removeClass('active');
							$t.addClass('active');
						
							config.filter = $t.attr('data-filter');
						
							$(config.filterSelector+'[data-filter="'+config.filter+'"]').addClass('active');

						} else {
						
							// MULTIPLE ACTIVE BUTTONS
							
							var thisFilter = $t.attr('data-filter'); 
						
							if($t.hasClass('active')){
								$t.removeClass('active');
								
								// REMOVE FILTER FROM SPACE-SEPERATED STRING
								
								var re = new RegExp('(\\s|^)'+thisFilter);
								config.filter = config.filter.replace(re,'');
							} else {
								
								// ADD FILTER TO SPACE-SEPERATED STRING
								
								$t.addClass('active');
								config.filter = config.filter+' '+thisFilter;
								
							};
						};
						
						// GO MIX
						
						goMix(config.filter, null, null, $cont, config);

					};
				
				});
					
			});
		},
	
		// "TOGRID" METHOD
	
		toGrid: function(){
			return this.each(function(){
				var config = this.config;
				if(config.layoutMode != 'grid'){
					config.layoutMode = 'grid';
					goMix(config.filter, null, null, $(this), config);
				};
			});
		},
	
		// "TOLIST" METHOD
	
		toList: function(){
			return this.each(function(){
				var config = this.config;
				if(config.layoutMode != 'list'){
					config.layoutMode = 'list';
					goMix(config.filter, null, null, $(this), config);
				};
			});
		},
	
		// "FILTER" METHOD
	
		filter: function(arg){
			return this.each(function(){
				var config = this.config;
				if(!config.mixing){	
					$(config.filterSelector).removeClass('active');
					$(config.filterSelector+'[data-filter="'+arg+'"]').addClass('active');
					goMix(arg, null, null, $(this), config);
				};
			});	
		},
	
		// "SORT" METHOD
	
		sort: function(args){
			return this.each(function(){
				var config = this.config,
					$t = $(this);
				if(!config.mixing){
					$(config.sortSelector).removeClass('active');
					if($.isArray(args)){
						var sortby = args[0], order = args[1];
						$(config.sortSelector+'[data-sort="'+args[0]+'"][data-order="'+args[1]+'"]').addClass('active');
					} else {
						$(config.sortSelector+'[data-sort="'+args+'"]').addClass('active');
						var sortby = args, order = 'desc';
					};
					$t.find(config.targetSelector).each(function(){
						config.startOrder.push($(this));
					});
					
					goMix(config.filter,sortby,order, $t, config);
				
				};
			});
		},
		
		// "MULTIMIX" METHOD
		
		multimix: function(args){
			return this.each(function(){
				var config = this.config,
					$t = $(this);
					multiOut = {
						filter: config.filter,
						sort: null,
						order: 'desc',
						layoutMode: config.layoutMode
					};
				$.extend(multiOut, args);
				if(!config.mixing){
					$(config.filterSelector).add(config.sortSelector).removeClass('active');
					$(config.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass('active');
					if(typeof multiOut.sort !== 'undefined'){
						$(config.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass('active');
						$t.find(config.targetSelector).each(function(){
							config.startOrder.push($(this));
						});
					};
					config.layoutMode = multiOut.layoutMode;
					goMix(multiOut.filter,multiOut.sort,multiOut.order, $t, config);
				};
			});
		},
		
		// "REMIX" METHOD

		remix: function(arg){
			return this.each(function(){
				var config = this.config,
					$t = $(this);	
				config.origOrder = [];
				$t.find(config.targetSelector).each(function(){
					var $th = $(this);
					$th.addClass('mix_all'); 
				    config.origOrder.push($th);
				});
				if(!config.mixing && typeof arg !== 'undefined'){
					$(config.filterSelector).removeClass('active');
					$(config.filterSelector+'[data-filter="'+arg+'"]').addClass('active');
					goMix(arg, null, null, $t, config);
				};
			});
		}
	};
	
	// DECLARE PLUGIN

	$.fn.mixitup = function(method, arg){
		if (methods[method]) {
			return methods[method].apply( this, Array.prototype.slice.call(arguments,1));
		} else if (typeof method === 'object' || ! method){
			return methods.init.apply( this, arguments );
		};
	};
	
	/* ==== THE MAGIC ==== */
	
	function goMix(filter, sortby, order, $cont, config){
		
		// WE ARE NOW MIXING

		clearInterval(config.failsafe);
		config.mixing = true;	
		
		// APPLY ARGS TO CONFIG
		
		config.filter = filter;
		
		// FIRE "ONMIXSTART" CALLBACK
		
		if(typeof config.onMixStart == 'function') {
			var output = config.onMixStart.call(this, config);
			
			// UPDATE CONFIG IF DATA RETURNED
			
			config = output ? output : config;
		};
		
		// SHORT LOCAL VARS
		
		var speed = config.transitionSpeed;
		
		// REBUILD TRANSITION AND PERSPECTIVE OBJECTS
		
		for(var i = 0; i<2; i++){
			var a = i==0 ? a = config.prefix : '';
			config.transition[a+'transition'] = 'all '+speed+'ms linear';
			config.transition[a+'transform'] = a+'translate3d(0,0,0)';
			config.perspective[a+'perspective'] = config.perspectiveDistance+'px';
			config.perspective[a+'perspective-origin'] = config.perspectiveOrigin;
		};
		
		// CACHE TARGET ELEMENTS FOR QUICK ACCESS
		
		var mixSelector = config.targetSelector,
		$targets = $cont.find(mixSelector);
		
		// ADD DATA OBJECT TO EACH TARGET
		
		$targets.each(function(){
			this.data = {};
		});
		
		// RE-DEFINE CONTAINER INCASE NOT IMMEDIATE PARENT OF TARGET ELEMENTS 
		
		var $par = $targets.parent();
	
		// ADD PERSPECTIVE TO CONTAINER 
		
		$par.css(config.perspective);
		
		// SETUP EASING

		config.easingFallback = 'ease-in-out';
		if(config.easing == 'smooth')config.easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
		if(config.easing == 'snap')config.easing = 'cubic-bezier(0.77, 0, 0.175, 1)';
		if(config.easing == 'windback'){
			config.easing = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
			config.easingFallback = 'cubic-bezier(0.175, 0.885, 0.320, 1)'; // Fall-back for old webkit, with no values > 1 or < 1
		};
		if(config.easing == 'windup'){
			config.easing = 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
			config.easingFallback = 'cubic-bezier(0.6, 0.28, 0.735, 0.045)';
		};
		
		// USE LIST SPECIFIC EFFECTS IF DECLARED
		
		var effectsOut = config.layoutMode == 'list' && config.listEffects != null ? config.listEffects : config.effects;
	
		// BUILD EFFECTS STRINGS & SKIP IF IE8
	
		if (Array.prototype.indexOf){
			config.fade = effectsOut.indexOf('fade') > -1 ? '0' : '';
			config.scale = effectsOut.indexOf('scale') > -1 ? 'scale(.01)' : '';
			config.rotateZ = effectsOut.indexOf('rotateZ') > -1 ? 'rotate(180deg)' : '';
			config.rotateY = effectsOut.indexOf('rotateY') > -1 ? 'rotateY(90deg)' : '';
			config.rotateX = effectsOut.indexOf('rotateX') > -1 ? 'rotateX(90deg)' : '';
			config.blur = effectsOut.indexOf('blur') > -1 ? 'blur(8px)' : '';
			config.grayscale = effectsOut.indexOf('grayscale') > -1 ? 'grayscale(100%)' : '';
		};
		
		// DECLARE NEW JQUERY OBJECTS FOR GROUPING
		
		var $show = $(), 
		$hide = $(),
		filterArray = [],
		multiDimensional = false;
		
		// BUILD FILTER ARRAY(S)
		
		if(typeof filter === 'string'){
			
			// SINGLE DIMENSIONAL FILTERING
			
			filterArray = buildFilterArray(filter);
			
		} else {
			
			// MULTI DIMENSIONAL FILTERING
			
			multiDimensional = true;
			
			$.each(filter,function(i){
				filterArray[i] = buildFilterArray(this);
			});
		};

		// "OR" LOGIC (DEFAULT)
		
		if(config.filterLogic == 'or'){
			
			if(filterArray[0] == '') filterArray.shift(); // IF FIRST ITEM IN ARRAY IS AN EMPTY SPACE, DELETE
			
			// IF NO ELEMENTS ARE DESIRED THEN HIDE ALL VISIBLE ELEMENTS
		
			if(filterArray.length < 1){
				
				$hide = $hide.add($cont.find(mixSelector+':visible'));
				
			} else {

			// ELSE CHECK EACH TARGET ELEMENT FOR ANY FILTER CATEGORY:
			
				$targets.each(function(){
					var $t = $(this);
					if(!multiDimensional){
						// IF HAS ANY FILTER, ADD TO "SHOW" OBJECT
						if($t.is('.'+filterArray.join(', .'))){
							$show = $show.add($t);
						// ELSE IF HAS NO FILTERS, ADD TO "HIDE" OBJECT
						} else {
							$hide = $hide.add($t);
						};
					} else {
						
						var pass = 0;
						// FOR EACH DIMENSION
						
						$.each(filterArray,function(i){
							if(this.length){
								if($t.is('.'+this.join(', .'))){
									pass++
								};
							} else if(pass > 0){
								pass++;
							};
						});
						// IF PASSES ALL DIMENSIONS, SHOW
						if(pass == filterArray.length){
							$show = $show.add($t);
						// ELSE HIDE
						} else {
							$hide = $hide.add($t);
						};
					};
				});
			
			};
	
		} else {
			
		// "AND" LOGIC
			
			// ADD "MIX_SHOW" CLASS TO ELEMENTS THAT HAVE ALL FILTERS
			
			$show = $show.add($par.find(mixSelector+'.'+filterArray.join('.')));
			
			// ADD "MIX_HIDE" CLASS TO EVERYTHING ELSE
			
			$hide = $hide.add($par.find(mixSelector+':not(.'+filterArray.join('.')+'):visible'));
		};
		
		// GET TOTAL NUMBER OF ELEMENTS TO SHOW
		
		var total = $show.length;
		
		// DECLARE NEW JQUERY OBJECTS

		var $tohide = $(),
		$toshow = $(),
		$pre = $();
		
		// FOR ELEMENTS TO BE HIDDEN, IF NOT ALREADY HIDDEN THEN ADD TO OBJECTS "TOHIDE" AND "PRE" 
		// TO INDICATE PRE-EXISTING ELEMENTS TO BE HIDDEN
		
		$hide.each(function(){
			var $t = $(this);
			if($t.css('display') != 'none'){
				$tohide = $tohide.add($t);
				$pre = $pre.add($t);
			};
		});
		
		// IF ALL ELEMENTS ARE ALREADY SHOWN AND THERE IS NOTHING TO HIDE, AND NOT PERFORMING A LAYOUT CHANGE OR SORT:
		
		if($show.filter(':visible').length == total && !$tohide.length && !sortby){
			
			if(config.origLayout == config.layoutMode){
				
				// THEN CLEAN UP AND GO HOME

				resetFilter();
				return false;
			} else {
				
				// IF ONLY ONE ITEM AND CHANGING FORM GRID TO LIST, MOST LIKELY POSITION WILL NOT CHANGE SO WE'RE DONE
			
				if($show.length == 1){ 
					
					if(config.layoutMode == 'list'){ 
						$cont.addClass(config.listClass);
						$cont.removeClass(config.gridClass);
						$pre.css('display',config.targetDisplayList);
					} else {
						$cont.addClass(config.gridClass);
						$cont.removeClass(config.listClass);
						$pre.css('display',config.targetDisplayGrid);
					};
					
					// THEN CLEAN UP AND GO HOME

					resetFilter();
					return false;
				}
			};
		};
		
		// GET CONTAINER'S STARTING HEIGHT

		config.origHeight = $par.height();
		
		// IF THERE IS SOMETHING TO BE SHOWN:

		if($show.length){
			
			// REMOVE "FAIL CLASS" FROM CONTAINER IF EXISTS
			
			$cont.removeClass(config.failClass);
			
			
			// FOR ELEMENTS TO BE SHOWN, IF NOT ALREADY SHOWN THEN ADD TO OBJECTS "TOSHOW" ELSE ADD CLASS "MIX_PRE"
			// TO INDICATE PRE-EXISTING ELEMENT

			$show.each(function(){ 
				var $t = $(this);
				if($t.css('display') == 'none'){
					$toshow = $toshow.add($t)
				} else {
					$pre = $pre.add($t);
				};
			});
	
			// IF NON-ANIMATED LAYOUT MODE TRANSITION:
		
			if((config.origLayout != config.layoutMode) && config.animateGridList == false){ 
			
				// ADD NEW DISPLAY TYPES, CLEAN UP AND GO HOME
				
				if(config.layoutMode == 'list'){ 
					$cont.addClass(config.listClass);
					$cont.removeClass(config.gridClass);
					$pre.css('display',config.targetDisplayList);
				} else {
					$cont.addClass(config.gridClass);
					$cont.removeClass(config.listClass);
					$pre.css('display',config.targetDisplayGrid);
				};
				
				resetFilter();
				return false;
			};
			
			// IF IE, FUCK OFF, AND THEN CLEAN UP AND GO HOME
		
			if(!window.atob){
				resetFilter();
				return false;
			};
			
			// OVERRIDE ANY EXISTING TRANSITION TIMING FOR CALCULATIONS
			
			$targets.css(config.clean);
			
			// FOR EACH PRE-EXISTING ELEMENT, ADD STARTING POSITION TO 'ORIGPOS' ARRAY
			
			$pre.each(function(){
				this.data.origPos = $(this).offset();
			});
	
			// TEMPORARILY SHOW ALL ELEMENTS TO SHOW (THAT ARE NOT ALREADY SHOWN), WITHOUT HIDING ELEMENTS TO HIDE
			// AND ADD/REMOVE GRID AND LIST CLASSES FROM CONTAINER
	
			if(config.layoutMode == 'list'){
				$cont.addClass(config.listClass);
				$cont.removeClass(config.gridClass);
				$toshow.css('display',config.targetDisplayList);
			} else {
				$cont.addClass(config.gridClass);
				$cont.removeClass(config.listClass);
				$toshow.css('display',config.targetDisplayGrid);
			};
			
			// FOR EACH ELEMENT NOW SHOWN, ADD ITS INTERMEDIATE POSITION TO 'SHOWINTERPOS' ARRAY
	
			$toshow.each(function(){
				this.data.showInterPos = $(this).offset();
			});
			
			// FOR EACH ELEMENT TO BE HIDDEN, BUT NOT YET HIDDEN, AND NOW MOVED DUE TO SHOWN ELEMENTS,
			// ADD ITS INTERMEDIATE POSITION TO 'HIDEINTERPOS' ARRAY

			$tohide.each(function(){
				this.data.hideInterPos = $(this).offset();
			});
			
			// FOR EACH PRE-EXISTING ELEMENT, NOW MOVED DUE TO SHOWN ELEMENTS, ADD ITS POSITION TO 'PREINTERPOS' ARRAY
	
			$pre.each(function(){
				this.data.preInterPos = $(this).offset();
			});
			
			// SET DISPLAY PROPERTY OF PRE-EXISTING ELEMENTS INCASE WE ARE CHANGING LAYOUT MODE
	
			if(config.layoutMode == 'list'){
				$pre.css('display',config.targetDisplayList);
			} else {
				$pre.css('display',config.targetDisplayGrid);
			};
			
			// IF A SORT ARGUMENT HAS BEEN SENT, RUN SORT FUNCTION SO OBJECTS WILL MOVE TO THEIR FINAL ORDER
			
			if(sortby){
				sort(sortby, order, $cont, config);	
			};
			
			// IF VISIBLE SORT ORDER IS THE SAME (WHICH WOULD NOT TRIGGER A TRANSITION EVENT)
		
			if(sortby && compareArr(config.origSort, config.checkSort)){
				
				// THEN CLEAN UP AND GO HOME
				resetFilter();
				return false;
			};
			
			// TEMPORARILY HIDE ALL SHOWN ELEMENTS TO HIDE

			$tohide.hide();
			
			// FOR EACH ELEMENT TO SHOW, AND NOW MOVED DUE TO HIDDEN ELEMENTS BEING REMOVED, 
			// ADD ITS POSITION TO 'FINALPOS' ARRAY
			
			$toshow.each(function(i){
				this.data.finalPos = $(this).offset();
			});
			
			// FOR EACH PRE-EXISTING ELEMENT NOW MOVED DUE TO HIDDEN ELEMENTS BEING REMOVED,
			// ADD ITS POSITION TO 'FINALPREPOS' ARRAY
	
			$pre.each(function(){
				this.data.finalPrePos = $(this).offset();
			});
			
			// SINCE WE ARE IN OUT FINAL STATE, GET NEW HEIGHT OF CONTAINER
	
			config.newHeight = $par.height();
			
			// IF A SORT ARGUMENT AS BEEN SENT, RUN SORT FUNCTION 'RESET' TO MOVE ELEMENTS BACK TO THEIR STARTING ORDER
			
			if(sortby){
				sort('reset', null, $cont, config);
			};
			
			// RE-HIDE ALL ELEMENTS TEMPORARILY SHOWN
			
			$toshow.hide();
			
			// SET DISPLAY PROPERTY OF PRE-EXISTING ELEMENTS BACK TO THEIR 
			// ORIGINAL PROPERTY, INCASE WE ARE CHANGING LAYOUT MODE
			
			$pre.css('display',config.origDisplay);
			
			// ADD/REMOVE GRID AND LIST CLASSES FROM CONTAINER
	
			if(config.origDisplay == 'block'){
				$cont.addClass(config.listClass);
				$toshow.css('display', config.targetDisplayList);
			} else {
				$cont.removeClass(config.listClass);
				$toshow.css('display', config.targetDisplayGrid);
			};
			
			// IF WE ARE ANIMATING CONTAINER, RESET IT TO ITS STARTING HEIGHT
		
			if(config.resizeContainer)$par.css('height', config.origHeight+'px');
	
			// ADD TRANSFORMS TO ALL ELEMENTS TO SHOW
			
			var toShowCSS = {};
			
			for(var i = 0; i<2; i++){
				var a = i==0 ? a = config.prefix : '';
				toShowCSS[a+'transform'] = config.scale+' '+config.rotateX+' '+config.rotateY+' '+config.rotateZ;
				toShowCSS[a+'filter'] = config.blur+' '+config.grayscale;
			};
			
			$toshow.css(toShowCSS);
	
			// FOR EACH PRE-EXISTING ELEMENT, SUBTRACT ITS INTERMEDIATE POSITION FROM ITS ORIGINAL POSITION 
			// TO GET ITS STARTING OFFSET
	
			$pre.each(function(){
				var data = this.data,
				$t = $(this);
				
				if ($t.hasClass('mix_tohide')){
					data.preTX = data.origPos.left - data.hideInterPos.left;
					data.preTY = data.origPos.top - data.hideInterPos.top;
				} else {
					data.preTX = data.origPos.left - data.preInterPos.left;
					data.preTY = data.origPos.top - data.preInterPos.top;
				};
				var preCSS = {};
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					preCSS[a+'transform'] = 'translate('+data.preTX+'px,'+data.preTY+'px)';
				};
				
				$t.css(preCSS);	
			});
			
			// ADD/REMOVE GRID AND LIST CLASSES FROM CONTAINER
	
			if(config.layoutMode == 'list'){
				$cont.addClass(config.listClass);
				$cont.removeClass(config.gridClass);
			} else {
				$cont.addClass(config.gridClass);
				$cont.removeClass(config.listClass);
			};
			
			// WRAP ANIMATION FUNCTIONS IN 10ms TIMEOUT TO PREVENT RACE CONDITION
			
			var delay = setTimeout(function(){
		
				// APPLY TRANSITION TIMING TO CONTAINER, AND BEGIN ANIMATION TO NEW HEIGHT
				
				if(config.resizeContainer){
					var containerCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						containerCSS[a+'transition'] = 'all '+speed+'ms ease-in-out';
						containerCSS['height'] = config.newHeight+'px';
					};
					$par.css(containerCSS);
				};
	
				// BEGIN FADING IN/OUT OF ALL ELEMENTS TO SHOW/HIDE
				$tohide.css('opacity',config.fade);
				$toshow.css('opacity',1);
	
				// FOR EACH ELEMENT BEING SHOWN, CALCULATE ITS TRAJECTORY BY SUBTRACTING
				// ITS INTERMEDIATE POSITION FROM ITS FINAL POSITION.
				// ALSO ADD SPEED AND EASING
				
				$toshow.each(function(){
					var data = this.data;
					data.tX = data.finalPos.left - data.showInterPos.left;
					data.tY = data.finalPos.top - data.showInterPos.top;
					
					var toShowCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						toShowCSS[a+'transition-property'] = a+'transform, '+a+'filter, opacity';
						toShowCSS[a+'transition-timing-function'] = config.easing+', linear, linear';
						toShowCSS[a+'transition-duration'] = speed+'ms';
						toShowCSS[a+'transition-delay'] = '0';
						toShowCSS[a+'transform'] = 'translate('+data.tX+'px,'+data.tY+'px)';
						toShowCSS[a+'filter'] = 'none';
					};
					
					$(this).css('-webkit-transition', 'all '+speed+'ms '+config.easingFallback).css(toShowCSS);
				});
				
				// FOR EACH PRE-EXISTING ELEMENT, IF IT HAS A FINAL POSITION, CALCULATE 
				// ITS TRAJETORY BY SUBTRACTING ITS INTERMEDIATE POSITION FROM ITS FINAL POSITION.
				// ALSO ADD SPEED AND EASING
				
				$pre.each(function(){
					var data = this.data
					data.tX = data.finalPrePos.left != 0 ? data.finalPrePos.left - data.preInterPos.left : 0;
					data.tY = data.finalPrePos.left != 0 ? data.finalPrePos.top - data.preInterPos.top : 0;
					
					var preCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						preCSS[a+'transition'] = 'all '+speed+'ms '+config.easing;
						preCSS[a+'transform'] = 'translate('+data.tX+'px,'+data.tY+'px)';
					};
					
					$(this).css('-webkit-transition', 'all '+speed+'ms '+config.easingFallback).css(preCSS);
				});
		
				// BEGIN TRANSFORMS ON ALL ELEMENTS TO BE HIDDEN
				
				var toHideCSS = {};
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					toHideCSS[a+'transition'] = 'all '+speed+'ms '+config.easing+', '+a+'filter '+speed+'ms linear, opacity '+speed+'ms linear';
					toHideCSS[a+'transform'] = config.scale+' '+config.rotateX+' '+config.rotateY+' '+config.rotateZ;
					toHideCSS[a+'filter'] = config.blur+' '+config.grayscale;
					toHideCSS['opacity'] = config.fade;
				};
				
				$tohide.css(toHideCSS);
				
				// ALL ANIMATIONS HAVE NOW BEEN STARTED, NOW LISTEN FOR TRANSITION END:
				
				$par.bind('webkitTransitionEnd transitionend otransitionend oTransitionEnd',function(e){
					
					if (e.originalEvent.propertyName.indexOf('transform') > -1 || e.originalEvent.propertyName.indexOf('opacity') > -1){
						
						if(mixSelector.indexOf('.') > -1){
						
						// IF MIXSELECTOR IS A CLASS NAME
						
							if($(e.target).hasClass(mixSelector.replace('.',''))){
								resetFilter();
							};
						
						} else {
							
						// IF MIXSELECTOR IS A TAG
						
							if($(e.target).is(mixSelector)){
								resetFilter();
							};
							
						};
						
					};
				});	
	
			},10);
			
			// LAST RESORT EMERGENCY FAILSAFE
			
			config.failsafe = setTimeout(function(){
				if(config.mixing){
					resetFilter();
				};
			}, speed + 400);
	
		} else {
			
		// ELSE IF NOTHING TO SHOW, AND EVERYTHING TO BE HIDDEN
		
			// IF WE ARE RESIZING CONTAINER, SET ITS STARTING HEIGHT
	
			if(config.resizeContainer)$par.css('height', config.origHeight+'px');
			
			// IF IE, FUCK OFF, AND THEN GO HOME
			
			if(!window.atob){
				resetFilter();
				return false;
			};
			
			// GROUP ALL ELEMENTS TO HIDE INTO JQUERY OBJECT
			
			$tohide = $hide;
			
			// WRAP ANIMATION FUNCTIONS IN A 10ms DELAY TO PREVENT RACE CONDITION
	
			var delay = setTimeout(function(){
				
				// APPLY PERSPECTIVE TO CONTAINER
	
				$par.css(config.perspective);
				
				// APPLY TRANSITION TIMING TO CONTAINER, AND BEGIN ANIMATION TO NEW HEIGHT
		
				if(config.resizeContainer){
					var containerCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						containerCSS[a+'transition'] = 'height '+speed+'ms ease-in-out';
						containerCSS['height'] = config.minHeight+'px';
					};
					$par.css(containerCSS);
				};
	
				// APPLY TRANSITION TIMING TO ALL TARGET ELEMENTS
				
				$targets.css(config.transition);
				
				// GET TOTAL NUMBER OF ELEMENTS TO HIDE
	
				var totalHide = $hide.length;
				
				// IF SOMETHING TO HIDE:
	
				if(totalHide){
					
					// BEGIN TRANSFORMS ON ALL ELEMENTS TO BE HIDDEN

					var toHideCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						toHideCSS[a+'transform'] = config.scale+' '+config.rotateX+' '+config.rotateY+' '+config.rotateZ;
						toHideCSS[a+'filter'] = config.blur+' '+config.grayscale;
						toHideCSS['opacity'] = config.fade;
					};

					$tohide.css(toHideCSS);
					
					// ALL ANIMATIONS HAVE NOW BEEN STARTED, NOW LISTEN FOR TRANSITION END:

					$par.bind('webkitTransitionEnd transitionend otransitionend oTransitionEnd',function(e){
						if (e.originalEvent.propertyName.indexOf('transform') > -1 || e.originalEvent.propertyName.indexOf('opacity') > -1){
							$cont.addClass(config.failClass);
							resetFilter();
						};
					});
		
				} else {
					
				// ELSE, WE'RE DONE MIXING
				 	
					config.mixing = false;
				};
	
			}, 10);
		}; 
		
		// CLEAN UP AND RESET FUNCTION

		function resetFilter(){
			
			// UNBIND TRANSITION END EVENTS FROM CONTAINER
			
			$par.unbind('webkitTransitionEnd transitionend otransitionend oTransitionEnd');
			
			// IF A SORT ARGUMENT HAS BEEN SENT, SORT ELEMENTS TO THEIR FINAL ORDER
			
			if(sortby){
				sort(sortby, order, $cont, config);
			};
			
			// EMPTY SORTING ARRAYS
		
			config.startOrder = [], config.newOrder = [], config.origSort = [], config.checkSort = [];
		
			// REMOVE INLINE STYLES FROM ALL TARGET ELEMENTS AND SLAM THE BRAKES ON
			
			$targets.removeStyle(
				config.prefix+'filter, filter, '+config.prefix+'transform, transform, opacity, display'
			).css(config.clean).removeAttr('data-checksum');
			
			// BECAUSE IE SUCKS
			
			if(!window.atob){
				$targets.css({
					display: 'none',
					opacity: '0'
				});
			};
			
			// REMOVE HEIGHT FROM CONTAINER ONLY IF RESIZING
			
			var remH = config.resizeContainer ? 'height' : '';
			
			// REMOVE INLINE STYLES FROM CONTAINER
		
			$par.removeStyle(
				config.prefix+'transition, transition, '+config.prefix+'perspective, perspective, '+config.prefix+'perspective-origin, perspective-origin, '+remH
			);
			
			// ADD FINAL DISPLAY PROPERTIES AND OPACITY TO ALL SHOWN ELEMENTS
			// CACHE CURRENT LAYOUT MODE & SORT FOR NEXT MIX
			
			if(config.layoutMode == 'list'){
				$show.css({display:config.targetDisplayList, opacity:'1'});
				config.origDisplay = config.targetDisplayList;
			} else {
				$show.css({display:config.targetDisplayGrid, opacity:'1'});
				config.origDisplay = config.targetDisplayGrid;
			};
			config.origLayout = config.layoutMode;
				
			var wait = setTimeout(function(){
				
				// LET GO OF THE BRAKES
				
				$targets.removeStyle(config.prefix+'transition, transition');
			
				// WE'RE DONE MIXING
			
				config.mixing = false;
			
				// FIRE "ONMIXEND" CALLBACK
			
				if(typeof config.onMixEnd == 'function') {
					var output = config.onMixEnd.call(this, config);
				
					// UPDATE CONFIG IF DATA RETURNED
				
					config = output ? output : config;
				};
			});
		};
	};
	
	// SORT FUNCTION
	
	function sort(sortby, order, $cont, config){

		// COMPARE BY ATTRIBUTE

		function compare(a,b) {
			var sortAttrA = isNaN(a.attr(sortby) * 1) ? a.attr(sortby).toLowerCase() : a.attr(sortby) * 1,
				sortAttrB = isNaN(b.attr(sortby) * 1) ? b.attr(sortby).toLowerCase() : b.attr(sortby) * 1;
		  	if (sortAttrA < sortAttrB)
		    	return -1;
		  	if (sortAttrA > sortAttrB)
		    	return 1;
		  	return 0;
		};
		
		// REBUILD DOM

		function rebuild(element){
			if(order == 'asc'){
				$sortWrapper.prepend(element).prepend(' ');
			} else {
				$sortWrapper.append(element).append(' ');
			};
		};
		
		// RANDOMIZE ARRAY

		function arrayShuffle(oldArray){
			var newArray = oldArray.slice();
		 	var len = newArray.length;
			var i = len;
			while (i--){
			 	var p = parseInt(Math.random()*len);
				var t = newArray[i];
		  		newArray[i] = newArray[p];
			  	newArray[p] = t;
		 	};
			return newArray; 
		};
		
		// SORT
		
		$cont.find(config.targetSelector).wrapAll('<div class="mix_sorter"/>');
		
		var $sortWrapper = $cont.find('.mix_sorter');
		
		if(!config.origSort.length){
			$sortWrapper.find(config.targetSelector+':visible').each(function(){
				$(this).wrap('<s/>');
				config.origSort.push($(this).parent().html().replace(/\s+/g, ''));
				$(this).unwrap();
			});
		};
		
		
		
		$sortWrapper.empty();
		
		if(sortby == 'reset'){
			$.each(config.startOrder,function(){
				$sortWrapper.append(this).append(' ');
			});
		} else if(sortby == 'default'){
			$.each(config.origOrder,function(){
				rebuild(this);
			});
		} else if(sortby == 'random'){
			if(!config.newOrder.length){
				config.newOrder = arrayShuffle(config.startOrder);
			};
			$.each(config.newOrder,function(){
				$sortWrapper.append(this).append(' ');
			});	
		} else if(sortby == 'custom'){
			$.each(order, function(){
				rebuild(this);
			});
		} else { 
			// SORT BY ATTRIBUTE
			
			if(typeof config.origOrder[0].attr(sortby) === 'undefined'){
				console.log('No such attribute found. Terminating');
				return false;
			};
			
			if(!config.newOrder.length){
				$.each(config.origOrder,function(){
					config.newOrder.push($(this));
				});
				config.newOrder.sort(compare);
			};
			$.each(config.newOrder,function(){
				rebuild(this);
			});
			
		};
		config.checkSort = [];
		$sortWrapper.find(config.targetSelector+':visible').each(function(i){
			var $t = $(this);
			if(i == 0){
				
				// PREVENT COMPARE RETURNING FALSE POSITIVES ON ELEMENTS WITH NO CLASS/ATTRIBUTES
				
				$t.attr('data-checksum','1');
			};
			$t.wrap('<s/>');
			config.checkSort.push($t.parent().html().replace(/\s+/g, ''));
			$t.unwrap();
		});
		
		$cont.find(config.targetSelector).unwrap();
	};
	
	// FIND VENDOR PREFIX

	function prefix(el) {
	    var prefixes = ["Webkit", "Moz", "O", "ms"];
	    for (var i = 0; i < prefixes.length; i++){
	        if (prefixes[i] + "Transition" in el.style){
	            return prefixes[i];
	        };
	    };
	    return "transition" in el.style ? "" : false;
	};
	
	// REMOVE SPECIFIC STYLES
	
	$.fn.removeStyle = function(style){
		return this.each(function(){
			var obj = $(this);
			style = style.replace(/\s+/g, '');
			var styles = style.split(',');
			$.each(styles,function(){
				
				var search = new RegExp(this.toString() + '[^;]+;?', 'g');
				obj.attr('style', function(i, style){
					if(style) return style.replace(search, '');
			    });
			});
		});
    };

	// COMPARE ARRAYS 
	
	function compareArr(a,b){
	    if (a.length != b.length) return false;
	    for (var i = 0; i < b.length; i++){
	        if (a[i].compare) { 
	            if (!a[i].compare(b[i])) return false;
	        };
	        if (a[i] !== b[i]) return false;
	    };
	    return true;
	};
	
	// BUILD FILTER ARRAY(S)
	
	function buildFilterArray(str){
		// CLEAN FILTER STRING
		str = str.replace(/\s{2,}/g, ' ');
		// FOR EACH PEROID SEPERATED CLASS NAME, ADD STRING TO FILTER ARRAY
		var arr = str.split(' ');
		// IF ALL, REPLACE WITH MIX_ALL
		$.each(arr,function(i){
			if(this == 'all')arr[i] = 'mix_all';
		});
		if(arr[0] == "")arr.shift(); 
		return arr;
	};

	
})(jQuery);
/*
 HTML5 Shiv v3.7.0 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/

(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);
if(g)return a.createDocumentFragment();for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);
/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.html
 * http://www.gnu.org/licenses/gpl.html
 */

jQuery.cookie = function (key, value, options) {

    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        value = String(value);

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.3.min.map
*/

(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
function imgLoaded(img){	
	$(img).parent().addClass('loaded');
};

// ON DOCUMENT READY:

$(function(){
	
	// INSTANTIATE MIXITUP
	
	$('#Parks').mixitup({
		layoutMode: 'list', // Start in list mode (display: block) by default
		listClass: 'list', // Container class for when in list mode
		gridClass: 'grid', // Container class for when in grid mode
		effects: ['fade','blur'], // List of effects 
		listEffects: ['fade','rotateX'] // List of effects ONLY for list mode
	});
	
	// HANDLE LAYOUT CHANGES
	
	// Bind layout buttons to toList and toGrid methods:
	
	$('#ToList').on('click',function(){
		$('.button').removeClass('active');
		$(this).addClass('active');
		$('#Parks').mixitup('toList');
	});

	$('#ToGrid').on('click',function(){
		$('.button').removeClass('active');
		$(this).addClass('active');
		$('#Parks').mixitup('toGrid');
	});
	
	// HANDLE MULTI-DIMENSIONAL CHECKBOX FILTERING
	
	/* 	
	*	The desired behaviour of multi-dimensional filtering can differ greatly 
	*	from project to project. MixItUp's built in filter button handlers are best
	*	suited to simple filter operations, so we will need to build our own handlers
	*	for this demo to achieve the precise behaviour we need.
	*/
	
	var $filters = $('#Filters').find('li'),
		dimensions = {
			region: 'all', // Create string for first dimension
			recreation: 'all' // Create string for second dimension
		};
		
	// Bind checkbox click handlers:
	
	$filters.on('click',function(){
		var $t = $(this),
			dimension = $t.attr('data-dimension'),
			filter = $t.attr('data-filter'),
			filterString = dimensions[dimension];
			
		if(filter == 'all'){
			// If "all"
			if(!$t.hasClass('active')){
				// if unchecked, check "all" and uncheck all other active filters
				$t.addClass('active').siblings().removeClass('active');
				// Replace entire string with "all"
				filterString = 'all';	
			} else {
				// Uncheck
				$t.removeClass('active');
				// Emtpy string
				filterString = '';
			}
		} else {
			// Else, uncheck "all"
			$t.siblings('[data-filter="all"]').removeClass('active');
			// Remove "all" from string
			filterString = filterString.replace('all','');
			if(!$t.hasClass('active')){
				// Check checkbox
				$t.addClass('active');
				// Append filter to string
				filterString = filterString == '' ? filter : filterString+' '+filter;
			} else {
				// Uncheck
				$t.removeClass('active');
				// Remove filter and preceeding space from string with RegEx
				var re = new RegExp('(\\s|^)'+filter);
				filterString = filterString.replace(re,'');
			};
		};
		
		// Set demension with filterString
		dimensions[dimension] = filterString;
		
		// We now have two strings containing the filter arguments for each dimension:	
		console.info('dimension 1: '+dimensions.region);
		console.info('dimension 2: '+dimensions.recreation);
		
		/*
		*	We then send these strings to MixItUp using the filter method. We can send as
		*	many dimensions to MixitUp as we need using an array as the second argument
		*	of the "filter" method. Each dimension must be a space seperated string.
		*
		*	In this case, MixItUp will show elements using OR logic within each dimension and
		*	AND logic between dimensions. At least one dimension must pass for the element to show.
		*/
		
		$('#Parks').mixitup('filter',[dimensions.region, dimensions.recreation])			
	});

});
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function(d){function e(a){var b=a||window.event,c=[].slice.call(arguments,1),f=0,e=0,g=0,a=d.event.fix(b);a.type="mousewheel";b.wheelDelta&&(f=b.wheelDelta/120);b.detail&&(f=-b.detail/3);g=f;b.axis!==void 0&&b.axis===b.HORIZONTAL_AXIS&&(g=0,e=-1*f);b.wheelDeltaY!==void 0&&(g=b.wheelDeltaY/120);b.wheelDeltaX!==void 0&&(e=-1*b.wheelDeltaX/120);c.unshift(a,f,e,g);return(d.event.dispatch||d.event.handle).apply(this,c)}var c=["DOMMouseScroll","mousewheel"];if(d.event.fixHooks)for(var h=c.length;h;)d.event.fixHooks[c[--h]]=
d.event.mouseHooks;d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],e,false);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],e,false);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
/* jquery-nod - v1.0.1 - 2013-04-13 
 * https://github.com/casperin/nod 
 * Gorm Casper: Licensed MIT
 */

(function(t){var e,s=function(t,e){return function(){return t.apply(e,arguments)}};e=function(){function t(t,e){this.metric=e,this.run=s(this.run,this),this.getVal=this.makeGetVal(t)}return t.prototype.run=function(){return this.verify(this.metric,this.getVal())},t.prototype.makeGetVal=function(t){var e,s;return s=t.attr("type"),"checkbox"===s?function(){return t.is(":checked")}:"radio"===s?(e=t.attr("name"),function(){return jQuery("[name="+e+"]").filter(":checked").val()}):function(){return jQuery.trim(t.val())}},t.prototype.verify=function(t,e){var s,r,i,n;if(t&&t.constructor&&t.call&&t.apply)return t(e);if(t instanceof RegExp)return t.test(e);if(n=jQuery.map(t.split(":"),jQuery.trim),i=n[0],s=n[1],r=n[2],"same-as"===i&&1!==jQuery(s).length)throw Error("same-as selector must target one and only one element");if(!e&&"presence"!==i)return!0;switch(i){case"presence":return!!e;case"exact":return e===s;case"not":return e!==s;case"same-as":return e===jQuery(s).val();case"min-num":return+e>=+s;case"max-num":return+s>=+e;case"between-num":return+e>=+s&&+r>=+e;case"min-length":return e.length>=+s;case"max-length":return+s>=e.length;case"exact-length":return e.length===+s;case"between":return e.length>=+s&&+r>=e.length;case"integer":return/^\s*\d+\s*$/.test(e);case"float":return/^[-+]?[0-9]+(\.[0-9]+)?$/.test(e);case"email":return this.email(e);default:throw Error("I don't know "+i+", sorry.")}},t.prototype.email=function(t){var e;return e=/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/,e.test(t)},t}();var r,s=function(t,e){return function(){return t.apply(e,arguments)}};r=function(){function t(t,r,n,o){this.get=r,this.change_status=s(this.change_status,this),this.runCheck=s(this.runCheck,this),this.delayedCheck=s(this.delayedCheck,this),this.events=s(this.events,this),this.$el=jQuery(t),this.delayId="",this.status=!0,this.checker=new e(this.$el,n),this.msg=new i(this.$el,this.get,o),this.events()}return t.prototype.events=function(){return"radio"===this.$el.attr("type")?jQuery("[name="+this.$el.attr("name")+"]").on("change",this.runCheck):(this.$el.on("change",this.runCheck),this.$el.on("blur",this.runCheck),this.get.delay?this.$el.on("keyup",this.delayedCheck):void 0)},t.prototype.delayedCheck=function(){return clearTimeout(this.delayId),this.delayId=setTimeout(this.runCheck,this.get.delay)},t.prototype.runCheck=function(){return jQuery.when(this.checker.run()).then(this.change_status)},t.prototype.change_status=function(t){var e;return e=!!t,this.status!==e?(this.status=e,this.msg.toggle(this.status),jQuery(this).trigger("nod_toggle")):void 0},t}();var i,s=function(t,e){return function(){return t.apply(e,arguments)}};i=function(){function t(t,e,r){this.$el=t,this.get=e,this.createShowMsg=s(this.createShowMsg,this),this.toggle=s(this.toggle,this),this.createMsg=s(this.createMsg,this),this.$msg=this.createMsg(r),this.showMsg=this.createShowMsg()}return t.prototype.createMsg=function(t){return jQuery("<span/>",{html:t,"class":this.get.helpSpanDisplay+" "+this.get.errorClass})},t.prototype.toggle=function(t){return t?this.$msg.remove():(this.showMsg(),this.broadcastError?this.broadcast():void 0)},t.prototype.createShowMsg=function(){var t,e;return e=this.$el.attr("type"),"checkbox"===e||"radio"===e?function(){return this.$el.parent().append(this.$msg)}:(t=this.findPos(this.$el),function(){return t.after(this.$msg)})},t.prototype.findPos=function(t){return this.elHasClass("parent",t)?this.findPos(t.parent()):this.elHasClass("next",t)?this.findPos(t.next()):t},t.prototype.elHasClass=function(t,e){var s,r,i,n;for(n=this.get.errorPosClasses,r=0,i=n.length;i>r;r++)if(s=n[r],e[t](s).length)return!0;return!1},t.prototype.broadcast=function(){return jQuery(window).trigger("nod_error_fired",{el:this.$el,msg:this.$msg.html()})},t}();var n,s=function(t,e){return function(){return t.apply(e,arguments)}};n=function(){function t(t,e,r){this.form=t,this.formIsErrorFree=s(this.formIsErrorFree,this),this.toggleSubmitBtnText=s(this.toggleSubmitBtnText,this),this.toggleSubmitBtn=s(this.toggleSubmitBtn,this),this.toggleGroupClass=s(this.toggleGroupClass,this),this.toggle_status=s(this.toggle_status,this),this.massCheck=s(this.massCheck,this),this.listenForEnter=s(this.listenForEnter,this),this.events=s(this.events,this),this.createListeners=s(this.createListeners,this),e&&(this.get=jQuery.extend({delay:700,disableSubmitBtn:!0,helpSpanDisplay:"help-inline",groupClass:"error",submitBtnSelector:"[type=submit]",metricsSplitter:":",errorPosClasses:[".help-inline",".add-on","button",".input-append"],broadcastError:!1,errorClass:"nod_msg",groupSelector:".control-group"},r),this.listeners=this.createListeners(e),this.submit=this.form.find(this.get.submitBtnSelector),this.checkIfElementsExist(this.form,this.submit,this.get.disableSubmitBtn),this.events())}return t.prototype.createListeners=function(t){var e,s,i,n,o,h,u,a,l,c,g;for(i=[],u=0,l=t.length;l>u;u++)for(s=t[u],3!==s.length&&this["throw"]("field",s),h=s[0],n=s[1],o=s[2],g=this.form.find(h),a=0,c=g.length;c>a;a++)e=g[a],i.push(new r(e,this.get,n,o));return i},t.prototype.events=function(){var t,e,s,r;for(r=this.listeners,e=0,s=r.length;s>e;e++)t=r[e],jQuery(t).on("nod_toggle",this.toggle_status);return this.submit.length?this.submit.on("click",this.massCheck):this.form.on("keyup",this.listenForEnter)},t.prototype.listenForEnter=function(t){return 13===t.keyCode?this.massCheck():void 0},t.prototype.massCheck=function(t){var e,s,r,i,n,o=this;for(null!=t&&t.preventDefault(),e=[],n=this.listeners,r=0,i=n.length;i>r;r++)s=n[r],e.push(s.runCheck());return this.toggleSubmitBtnText(),jQuery.when.apply(window,e).then(function(){return o.formIsErrorFree()?o.form.submit():void 0}).then(this.toggleSubmitBtnText)},t.prototype.toggle_status=function(t){return this.toggleGroupClass(t.target.$el.parents(this.get.groupSelector)),this.get.disableSubmitBtn?this.toggleSubmitBtn():void 0},t.prototype.toggleGroupClass=function(t){return t.find("."+this.get.errorClass).length?t.addClass(this.get.groupClass):t.removeClass(this.get.groupClass)},t.prototype.toggleSubmitBtn=function(){return this.formIsErrorFree()?this.submit.removeClass("disabled").removeAttr("disabled"):this.submit.addClass("disabled").attr("disabled","disabled")},t.prototype.toggleSubmitBtnText=function(){var t;return t=this.submit.attr("data-loading-text"),t?(this.submit.attr("data-loading-text",this.submit.html()),this.submit.html(t)):void 0},t.prototype.formIsErrorFree=function(){return!jQuery(this.listeners).filter(function(){return!this.status}).length},t.prototype.checkIfElementsExist=function(t,e,s){return t.selector&&t.length||this["throw"]("form",t),!e.length&&s?this["throw"]("submit",e):void 0},t.prototype["throw"]=function(t,e){var s;switch(t){case"form":s="Couldn't find form: ";break;case"submit":s="Couldn't find submit button: ";break;case"field":s="Metrics for each field must have three parts: "}throw Error(s+e)},t}(),t.fn.nod=function(t,e){return new n(this,t,e),this}})(jQuery);
$(document).ready(function() {
	// Active Theme: Select the theme you want to activate on the entire website
	$("body").addClass("wp-theme-3");
	
	//Carousels
	$('.carousel').carousel({
		interval: 5000,
		pause	: 'hover'
	});
	// Sortable list
	$('#ulSorList').mixitup();
	// Fancybox
	$(".theater").fancybox();
	// Fancybox	
	$(".ext-source").fancybox({
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: '50%',
		'height'			: '60%',
		'scrolling'   		: 'no'
	});
	
	// Masonry
	var container = document.querySelector('#masonryWr');
	var msnry = new Masonry( container, {
	  itemSelector: '.item'
	});
	// Scroll to top
	$().UItoTop({ easingType: 'easeOutQuart' });
	// Inview animations
	$.fn.waypoint.defaults = {
		context: window,
		continuous: true,
		enabled: true,
		horizontal: false,
		offset: 300,
		triggerOnce: false
	}
	$('.animate-in-view, .chart').waypoint(function(direction) {
		var barColor;
		// Easy Pie Chart
		$(".chart").easyPieChart({
			size:150,
			easing: 'easeOutBounce',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			},
			barColor:'#FFF',
			delay: 3000,
			trackColor:'rgba(255,255,255,0.2)',
			scaleColor:false,
			lineWidth:16,
			lineCap:'butt'
		});
	});
	$("#btnSignIn").click(function(){
		$("#dropdownForm").hide();
		$("#dropdownProfile").fadeIn(300);	
		return false;
	});
	// Search function
	$("#cmdAsideMenu, #btnHideAsideMenu, .navbar-toggle-aside-menu").click(function(){
		if($("#asideMenu").is(":visible")){
			$("#asideMenu").hide();
			$("body").removeClass("aside-menu-in");
		}
		else{
			$("body").addClass("aside-menu-in");
			$("#asideMenu").show();
		}
		return false;	
	});
	// Theme Switcher for Preview
	var scheme = $.cookie('scheme');
	if (scheme == 'wp-theme-1') {
		$("body").removeClass();
		$("body").addClass("wp-theme-1");
	}
	else if (scheme == 'wp-theme-2') {
		$("body").removeClass();
		$("body").addClass("wp-theme-2");
	}
	else if (scheme == 'wp-theme-3') {
		$("body").removeClass();
		$("body").addClass("wp-theme-3");
	}
	else if (scheme == 'wp-theme-4') {
		$("body").removeClass();
		$("body").addClass("wp-theme-4");
	}
	else if (scheme == 'wp-theme-5') {
		$("body").removeClass();
		$("body").addClass("wp-theme-5");
	}
	else if (scheme == 'wp-theme-6') {
		$("body").removeClass();
		$("body").addClass("wp-theme-6");
	}
	
	var layout = $.cookie('layout');
	if (layout == 'boxed') {
		$(".wrapper").addClass("boxed");
	}
	else{
		$(".wrapper").removeClass("boxed");	
	}
	
	var topHeader = $.cookie('top-header');
	if (topHeader == 'hide') {
		$(".top-header").addClass("hide");
	}
	else{
		$(".top-header").removeClass("hide");
	}
	
	var layout = $.cookie('layout');
	if (layout == 'boxed') {
		$(".wrapper").addClass("boxed");
	}
	else{
		$(".wrapper").removeClass("boxed");	
	}
	
	var background = $.cookie('background');
	if (background == 'body-bg-1') {
		$("body").addClass("body-bg-1");
	}
	else if (background == 'body-bg-2') {
		$("body").addClass("body-bg-2");
	}
	else if (background == 'body-bg-3') {
		$("body").addClass("body-bg-3");
	}
	else if (background == 'body-bg-4') {
		$("body").addClass("body-bg-4");
	}
	else if (background == 'body-bg-5') {
		$("body").addClass("body-bg-5");
	}
	else if (background == 'body-bg-6') {
		$("body").addClass("body-bg-6");
	}
	
	var date = new Date();
	date.setTime(date.getTime() + (5 * 60 * 1000));
	
	$("#cmdRed").click(function(){
		$("body").removeClass(scheme);
		$("body").addClass("wp-theme-1");
		checkAsideMenuVisibility();
		$.cookie('scheme', 'wp-theme-1', { expires:date});
		scheme = "wp-theme-1";
		return false;
	});
	$("#cmdViolet").click(function(){
		$("body").removeClass(scheme);
		$("body").addClass("wp-theme-2");
		checkAsideMenuVisibility();
		$.cookie('scheme', 'wp-theme-2', { expires:date});
		scheme = "wp-theme-2";
		return false;
	});
	$("#cmdBlue").click(function(){
		$("body").removeClass(scheme);
		$("body").addClass("wp-theme-3");
		checkAsideMenuVisibility();
		$.cookie('scheme', 'wp-theme-3', { expires:date});
		scheme = "wp-theme-3";
		return false;
	});
	$("#cmdGreen").click(function(){
		$("body").removeClass(scheme);
		$("body").addClass("wp-theme-4");
		checkAsideMenuVisibility();
		$.cookie('scheme', 'wp-theme-4', { expires:date});
		scheme = "wp-theme-4";
		return false;
	});
	$("#cmdYellow").click(function(){
		$("body").removeClass(scheme);
		$("body").addClass("wp-theme-5");
		checkAsideMenuVisibility();
		$.cookie('scheme', 'wp-theme-5', { expires:date});
		scheme = "wp-theme-5";
		return false;
	});
	$("#cmdOrange").click(function(){
		$("body").removeClass(scheme);
		$("body").addClass("wp-theme-6");
		checkAsideMenuVisibility();
		$.cookie('scheme', 'wp-theme-6', { expires:date});
		scheme = "wp-theme-6";
		return false;
	});
	
	function checkAsideMenuVisibility(){
		if($("#asideMenu").is(":visible")){
			$("#asideMenu").show();
			$("body").addClass("aside-menu-in");
		}
	}
	
	// Layout
	$("#cmbLayout").change(function(){
		if($("#cmbLayout").val() == 2){
			$(".wrapper").addClass("boxed");	
			$.cookie('layout', 'boxed', { expires:date});
		}
		else{
			$(".wrapper").removeClass("boxed");
			$.cookie('layout', 'fluid', { expires:date});
		}
	});
	
	// Top header
	$("#cmbTopHeader").change(function(){
		if($("#cmbTopHeader").val() == 2){
			$(".top-header").addClass("hide");
			$.cookie('top-header', 'hide', { expires:date});	
		}
		else{
			$(".top-header").removeClass("hide");
			$.cookie('top-header', 'show', { expires:date});	
		}
	});
	
	// Pattern/background
	$("#cmbBackground").change(function(){
		if($("#cmbBackground").val() == 1){
			$("body").removeClass(background);
			$("body").addClass("body-bg-1");
			$.cookie('background', 'body-bg-1', { expires:date});
			background = "body-bg-1";	
		}
		else if($("#cmbBackground").val() == 2){
			$("body").removeClass(background);
			$("body").addClass("body-bg-2");
			$.cookie('background', 'body-bg-2', { expires:date});	
			background = "body-bg-2";	
		}
		else if($("#cmbBackground").val() == 3){
			$("body").removeClass(background);
			$("body").addClass("body-bg-3");
			$.cookie('background', 'body-bg-3', { expires:date});	
			background = "body-bg-3";	
		}
		else if($("#cmbBackground").val() == 4){
			$("body").removeClass(background);
			$("body").addClass("body-bg-4");
			$.cookie('background', 'body-bg-4', { expires:date});	
			background = "body-bg-4";	
		}
		else if($("#cmbBackground").val() == 5){
			$("body").removeClass(background);
			$("body").addClass("body-bg-5");
			$.cookie('background', 'body-bg-5', { expires:date});	
			background = "body-bg-5";	
		}
		else if($("#cmbBackground").val() == 6){
			$("body").removeClass(background);
			$("body").addClass("body-bg-6");
			$.cookie('background', 'body-bg-6', { expires:date});	
			background = "body-bg-6";	
		}
	});
});
/*! 
 * LESS - Leaner CSS v1.6.0 
 * http://lesscss.org 
 * 
 * Copyright (c) 2009-2014, Alexis Sellier <self@cloudhead.net> 
 * Licensed under the Apache v2 License. 
 * 
 */ 

 /** * @license Apache v2
 */
 

!function(a,b){function c(b){return a.less[b.split("/")[1]]}function d(a,b){"development"==v.env&&"undefined"!=typeof console&&v.logLevel>=b&&console.log("less: "+a)}function e(a){return a.replace(/^[a-z-]+:\/+?[^\/]+/,"").replace(/^\//,"").replace(/\.[a-zA-Z]+$/,"").replace(/[^\.\w-]+/g,"-").replace(/\./g,":")}function f(a,c){var e="{line} {content}",f=a.filename||c,g=[],h=(a.type||"Syntax")+"Error: "+(a.message||"There is an error in your .less file")+" in "+f+" ",i=function(a,c,d){a.extract[c]!==b&&g.push(e.replace(/\{line\}/,(parseInt(a.line,10)||0)+(c-1)).replace(/\{class\}/,d).replace(/\{content\}/,a.extract[c]))};a.extract?(i(a,0,""),i(a,1,"line"),i(a,2,""),h+="on line "+a.line+", column "+(a.column+1)+":\n"+g.join("\n")):a.stack&&(h+=a.stack),d(h,y.errors)}function g(a,b,c){var f=b.href||"",g="less:"+(b.title||e(f)),h=document.getElementById(g),i=!1,j=document.createElement("style");if(j.setAttribute("type","text/css"),b.media&&j.setAttribute("media",b.media),j.id=g,j.styleSheet)try{j.styleSheet.cssText=a}catch(k){throw new Error("Couldn't reassign styleSheet.cssText.")}else j.appendChild(document.createTextNode(a)),i=null!==h&&h.childNodes.length>0&&j.childNodes.length>0&&h.firstChild.nodeValue===j.firstChild.nodeValue;var l=document.getElementsByTagName("head")[0];if(null===h||i===!1){var m=b&&b.nextSibling||null;m?m.parentNode.insertBefore(j,m):l.appendChild(j)}if(h&&i===!1&&h.parentNode.removeChild(h),c&&C){d("saving "+f+" to cache.",y.info);try{C.setItem(f,a),C.setItem(f+":timestamp",c)}catch(k){d("failed to save",y.errors)}}}function h(a,c){var d,f,h="less-error-message:"+e(c||""),i='<li><label>{line}</label><pre class="{class}">{content}</pre></li>',j=document.createElement("div"),k=[],l=a.filename||c,m=l.match(/([^\/]+(\?.*)?)$/)[1];j.id=h,j.className="less-error-message",f="<h3>"+(a.type||"Syntax")+"Error: "+(a.message||"There is an error in your .less file")+'</h3><p>in <a href="'+l+'">'+m+"</a> ";var n=function(a,c,d){a.extract[c]!==b&&k.push(i.replace(/\{line\}/,(parseInt(a.line,10)||0)+(c-1)).replace(/\{class\}/,d).replace(/\{content\}/,a.extract[c]))};a.extract?(n(a,0,""),n(a,1,"line"),n(a,2,""),f+="on line "+a.line+", column "+(a.column+1)+":</p><ul>"+k.join("")+"</ul>"):a.stack&&(f+="<br/>"+a.stack.split("\n").slice(1).join("<br/>")),j.innerHTML=f,g([".less-error-message ul, .less-error-message li {","list-style-type: none;","margin-right: 15px;","padding: 4px 0;","margin: 0;","}",".less-error-message label {","font-size: 12px;","margin-right: 15px;","padding: 4px 0;","color: #cc7777;","}",".less-error-message pre {","color: #dd6666;","padding: 4px 0;","margin: 0;","display: inline-block;","}",".less-error-message pre.line {","color: #ff0000;","}",".less-error-message h3 {","font-size: 20px;","font-weight: bold;","padding: 15px 0 5px 0;","margin: 0;","}",".less-error-message a {","color: #10a","}",".less-error-message .error {","color: red;","font-weight: bold;","padding-bottom: 2px;","border-bottom: 1px dashed red;","}"].join("\n"),{title:"error-message"}),j.style.cssText=["font-family: Arial, sans-serif","border: 1px solid #e00","background-color: #eee","border-radius: 5px","-webkit-border-radius: 5px","-moz-border-radius: 5px","color: #e00","padding: 15px","margin-bottom: 15px"].join(";"),"development"==v.env&&(d=setInterval(function(){document.body&&(document.getElementById(h)?document.body.replaceChild(j,document.getElementById(h)):document.body.insertBefore(j,document.body.firstChild),clearInterval(d))},10))}function i(a,b){v.errorReporting&&"html"!==v.errorReporting?"console"===v.errorReporting?f(a,b):"function"==typeof v.errorReporting&&v.errorReporting("add",a,b):h(a,b)}function j(a){var b=document.getElementById("less-error-message:"+e(a));b&&b.parentNode.removeChild(b)}function k(){}function l(a){v.errorReporting&&"html"!==v.errorReporting?"console"===v.errorReporting?k(a):"function"==typeof v.errorReporting&&v.errorReporting("remove",a):j(a)}function m(a){for(var b,c=document.getElementsByTagName("style"),d=0;d<c.length;d++)if(b=c[d],b.type.match(B)){var e=new v.tree.parseEnv(v),f=b.innerHTML||"";e.filename=document.location.href.replace(/#.*$/,""),(a||v.globalVars)&&(e.useFileCache=!0);var g=function(a){return function(b,c){if(b)return i(b,"inline");var d=c.toCSS(v);a.type="text/css",a.styleSheet?a.styleSheet.cssText=d:a.innerHTML=d}}(b);new v.Parser(e).parse(f,g,{globalVars:v.globalVars,modifyVars:a})}}function n(a,b){var c,d,e=/^((?:[a-z-]+:)?\/+?(?:[^\/\?#]*\/)|([\/\\]))?((?:[^\/\\\?#]*[\/\\])*)([^\/\\\?#]*)([#\?].*)?$/i,f=a.match(e),g={},h=[];if(!f)throw new Error("Could not parse sheet href - '"+a+"'");if(!f[1]||f[2]){if(d=b.match(e),!d)throw new Error("Could not parse page url - '"+b+"'");f[1]=f[1]||d[1]||"",f[2]||(f[3]=d[3]+f[3])}if(f[3]){for(h=f[3].replace(/\\/g,"/").split("/"),c=0;c<h.length;c++)"."===h[c]&&(h.splice(c,1),c-=1);for(c=0;c<h.length;c++)".."===h[c]&&c>0&&(h.splice(c-1,2),c-=2)}return g.hostPart=f[1],g.directories=h,g.path=f[1]+h.join("/"),g.fileUrl=g.path+(f[4]||""),g.url=g.fileUrl+(f[5]||""),g}function o(a,b){var c,d,e,f,g=n(a),h=n(b),i="";if(g.hostPart!==h.hostPart)return"";for(d=Math.max(h.directories.length,g.directories.length),c=0;d>c&&h.directories[c]===g.directories[c];c++);for(f=h.directories.slice(c),e=g.directories.slice(c),c=0;c<f.length-1;c++)i+="../";for(c=0;c<e.length-1;c++)i+=e[c]+"/";return i}function p(){if(a.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("MSXML2.XMLHTTP.3.0")}catch(b){return d("browser doesn't support AJAX.",y.errors),null}}function q(a,b,c,e){function f(b,c,d){b.status>=200&&b.status<300?c(b.responseText,b.getResponseHeader("Last-Modified")):"function"==typeof d&&d(b.status,a)}var g=p(),h=x?v.fileAsync:v.async;"function"==typeof g.overrideMimeType&&g.overrideMimeType("text/css"),d("XHR: Getting '"+a+"'",y.info),g.open("GET",a,h),g.setRequestHeader("Accept",b||"text/x-less, text/css; q=0.9, */*; q=0.5"),g.send(null),x&&!v.fileAsync?0===g.status||g.status>=200&&g.status<300?c(g.responseText):e(g.status,a):h?g.onreadystatechange=function(){4==g.readyState&&f(g,c,e)}:f(g,c,e)}function r(b,c,d,e){c&&c.currentDirectory&&!/^([a-z-]+:)?\//.test(b)&&(b=c.currentDirectory+b);var f=n(b,a.location.href),g=f.url,h={currentDirectory:f.path,filename:g};if(c?(h.entryPath=c.entryPath,h.rootpath=c.rootpath,h.rootFilename=c.rootFilename,h.relativeUrls=c.relativeUrls):(h.entryPath=f.path,h.rootpath=v.rootpath||f.path,h.rootFilename=g,h.relativeUrls=e.relativeUrls),h.relativeUrls&&(h.rootpath=e.rootpath?n(e.rootpath+o(f.path,h.entryPath)).path:f.path),e.useFileCache&&D[g])try{var i=D[g];d(null,i,g,h,{lastModified:new Date})}catch(j){d(j,null,g)}else q(g,e.mime,function(a,b){D[g]=a;try{d(null,a,g,h,{lastModified:b})}catch(c){d(c,null,g)}},function(a,b){d({type:"File",message:"'"+b+"' wasn't found ("+a+")"},null,g)})}function s(a,b,c,d,e){var f=new v.tree.parseEnv(v);f.mime=a.type,(e||v.globalVars)&&(f.useFileCache=!0),r(a.href,null,function(h,i,j,k,m){if(m){m.remaining=d;var n=C&&C.getItem(j),o=C&&C.getItem(j+":timestamp");if(!c&&o&&m.lastModified&&new Date(m.lastModified).valueOf()===new Date(o).valueOf())return g(n,a),m.local=!0,b(null,null,i,a,m,j),void 0}l(j),i?(f.currentFileInfo=k,new v.Parser(f).parse(i,function(c,d){if(c)return b(c,null,null,a);try{b(c,d,i,a,m,j)}catch(c){b(c,null,null,a)}},{modifyVars:e,globalVars:v.globalVars})):b(h,null,null,a,m,j)},f,e)}function t(a,b,c){for(var d=0;d<v.sheets.length;d++)s(v.sheets[d],a,b,v.sheets.length-(d+1),c)}function u(){"development"===v.env?(v.optimization=0,v.watchTimer=setInterval(function(){v.watchMode&&t(function(a,b,c,d,e){a?i(a,d.href):b&&g(b.toCSS(v),d,e.lastModified)})},v.poll)):v.optimization=3}("undefined"==typeof a.less||"undefined"!=typeof a.less.nodeType)&&(a.less={}),v=a.less,w=a.less.tree={},v.mode="browser";var v,w;v===b&&(v=exports,w=c("./tree"),v.mode="node"),v.Parser=function(a){function d(){z=D,A=E=x}function e(){D=z,E=x=A}function f(){x>E&&(D=D.slice(x-E),E=x)}function g(a,b){var c=a.charCodeAt(0|b);return 32>=c&&(32===c||10===c||9===c)}function h(a){var b,c,d=typeof a;return"string"===d?u.charAt(x)!==a?null:(k(1),a):(f(),(b=a.exec(D))?(c=b[0].length,k(c),"string"==typeof b?b:1===b.length?b[0]:b):null)}function i(a){x>E&&(D=D.slice(x-E),E=x);var b=a.exec(D);return b?(k(b[0].length),"string"==typeof b?b:1===b.length?b[0]:b):null}function j(a){return u.charAt(x)!==a?null:(k(1),a)}function k(a){for(var b,c=x,d=y,e=x-E,f=x+D.length-e,g=x+=a,h=u;f>x&&(b=h.charCodeAt(x),!(b>32))&&(32===b||10===b||9===b||13===b);x++);return D=D.slice(a+x-g+e),E=x,!D.length&&y<C.length-1&&(D=C[++y]),c!==x||d!==y}function l(a,b){var c="function"==typeof a?a.call(G):h(a);return c?c:(n(b||("string"==typeof a?"expected '"+a+"' got '"+u.charAt(x)+"'":"unexpected token")),void 0)}function m(a,b){return u.charAt(x)===a?(k(1),a):(n(b||"expected '"+a+"' got '"+u.charAt(x)+"'"),void 0)}function n(a,b){var c=new Error(a);throw c.index=x,c.type=b||"Syntax",c}function o(a){return"string"==typeof a?u.charAt(x)===a:a.test(D)}function p(a){return u.charAt(x)===a}function q(a,b){return a.filename&&b.currentFileInfo.filename&&a.filename!==b.currentFileInfo.filename?F.imports.contents[a.filename]:u}function r(a,b){for(var c=a+1,d=null,e=-1;--c>=0&&"\n"!==b.charAt(c);)e++;return"number"==typeof a&&(d=(b.slice(0,a).match(/\n/g)||"").length),{line:d,column:e}}function s(a,b,d){var e=d.currentFileInfo.filename;return"browser"!==v.mode&&"rhino"!==v.mode&&(e=c("path").resolve(e)),{lineNumber:r(a,b).line+1,fileName:e}}function t(a,b){var c=q(a,b),d=r(a.index,c),e=d.line,f=d.column,g=a.call&&r(a.call,c).line,h=c.split("\n");this.type=a.type||"Syntax",this.message=a.message,this.filename=a.filename||b.currentFileInfo.filename,this.index=a.index,this.line="number"==typeof e?e+1:null,this.callLine=g+1,this.callExtract=h[g],this.stack=a.stack,this.column=f,this.extract=[h[e-1],h[e],h[e+1]]}var u,x,y,z,A,B,C,D,E,F,G,H=a&&a.filename;a instanceof w.parseEnv||(a=new w.parseEnv(a));var I=this.imports={paths:a.paths||[],queue:[],files:a.files,contents:a.contents,contentsIgnoredChars:a.contentsIgnoredChars,mime:a.mime,error:null,push:function(b,c,d,e){var f=this;this.queue.push(b);var g=function(a,c,d){f.queue.splice(f.queue.indexOf(b),1);var g=d in f.files||d===H;f.files[d]=c,a&&!f.error&&(f.error=a),e(a,c,g,d)};v.Parser.importer?v.Parser.importer(b,c,g,a):v.Parser.fileLoader(b,c,function(b,e,f,h){if(b)return g(b),void 0;var i=new w.parseEnv(a);i.currentFileInfo=h,i.processImports=!1,i.contents[f]=e,(c.reference||d.reference)&&(h.reference=!0),d.inline?g(null,e,f):new v.Parser(i).parse(e,function(a,b){g(a,b,f)})},a)}},J=i;return t.prototype=new Error,t.prototype.constructor=t,this.env=a=a||{},this.optimization="optimization"in this.env?this.env.optimization:1,F={imports:I,parse:function(d,e,f){var g,h,i,j,k,l=null,m="";if(x=y=E=B=0,j=f&&f.globalVars?v.Parser.serializeVars(f.globalVars)+"\n":"",k=f&&f.modifyVars?"\n"+v.Parser.serializeVars(f.modifyVars):"",(j||f&&f.banner)&&(m=(f&&f.banner?f.banner:"")+j,F.imports.contentsIgnoredChars[a.currentFileInfo.filename]=m.length),d=d.replace(/\r\n/g,"\n"),u=d=m+d.replace(/^\uFEFF/,"")+k,F.imports.contents[a.currentFileInfo.filename]=d,C=function(b){function c(b,c){l=new t({index:c||i,type:"Parse",message:b,filename:a.currentFileInfo.filename},a)}function d(a){var c=i-s;512>c&&!a||!c||(r.push(b.slice(s,i+1)),s=i+1)}var e,f,g,h,i,j,k,m,n,o=b.length,p=0,q=0,r=[],s=0;for(i=0;o>i;i++)if(k=b.charCodeAt(i),!(k>=97&&122>=k||34>k))switch(k){case 40:q++;continue;case 41:q--;continue;case 59:q||d();continue;case 123:p++,e=i;continue;case 125:p--,f=i,p||d();continue;case 92:if(o-1>i){i++;continue}return c("unescaped `\\`");case 34:case 39:case 96:for(n=0,j=i,i+=1;o>i;i++)if(m=b.charCodeAt(i),!(m>96)){if(m==k){n=1;break}if(92==m){if(i==o-1)return c("unescaped `\\`");i++}}if(n)continue;return c("unmatched `"+String.fromCharCode(k)+"`",j);case 47:if(q||i==o-1)continue;if(m=b.charCodeAt(i+1),47==m)for(i+=2;o>i&&(m=b.charCodeAt(i),!(13>=m)||10!=m&&13!=m);i++);else if(42==m){for(g=j=i,i+=2;o-1>i&&(m=b.charCodeAt(i),125==m&&(h=i),42!=m||47!=b.charCodeAt(i+1));i++);if(i==o-1)return c("missing closing `*/`",j)}continue;case 42:if(o-1>i&&47==b.charCodeAt(i+1))return c("unmatched `/*`");continue}return 0!==p?p>0?g>e&&h>g?c("missing closing `}` or `*/`",e):c("missing closing `}`",e):c("missing opening `{`",f):0!==q?c(q>0?"missing closing `)`":"missing opening `(`"):(d(!0),r)}(d),l)return e(new t(l,a));D=C[0];try{g=new w.Ruleset(null,this.parsers.primary()),g.root=!0,g.firstRoot=!0}catch(n){return e(new t(n,a))}if(g.toCSS=function(d){return function(e,f){e=e||{};var g,h,i=new w.evalEnv(e);"object"!=typeof f||Array.isArray(f)||(f=Object.keys(f).map(function(a){var b=f[a];return b instanceof w.Value||(b instanceof w.Expression||(b=new w.Expression([b])),b=new w.Value([b])),new w.Rule("@"+a,b,!1,null,0)}),i.frames=[new w.Ruleset(null,f)]);try{var j,k=[],l=[new w.joinSelectorVisitor,new w.processExtendsVisitor,new w.toCSSVisitor({compress:Boolean(e.compress)})],m=this;if(e.plugins)for(j=0;j<e.plugins.length;j++)e.plugins[j].isPreEvalVisitor?k.push(e.plugins[j]):e.plugins[j].isPreVisitor?l.splice(0,0,e.plugins[j]):l.push(e.plugins[j]);for(j=0;j<k.length;j++)k[j].run(m);for(g=d.call(m,i),j=0;j<l.length;j++)l[j].run(g);e.sourceMap&&(g=new w.sourceMapOutput({contentsIgnoredCharsMap:F.imports.contentsIgnoredChars,writeSourceMap:e.writeSourceMap,rootNode:g,contentsMap:F.imports.contents,sourceMapFilename:e.sourceMapFilename,sourceMapURL:e.sourceMapURL,outputFilename:e.sourceMapOutputFilename,sourceMapBasepath:e.sourceMapBasepath,sourceMapRootpath:e.sourceMapRootpath,outputSourceFiles:e.outputSourceFiles,sourceMapGenerator:e.sourceMapGenerator})),h=g.toCSS({compress:Boolean(e.compress),dumpLineNumbers:a.dumpLineNumbers,strictUnits:Boolean(e.strictUnits)})}catch(n){throw new t(n,a)}if(e.cleancss&&"node"===v.mode){var o=c("clean-css"),p=e.cleancssOptions||{};return p.keepSpecialComments===b&&(p.keepSpecialComments="*"),p.processImport=!1,p.noRebase=!0,p.noAdvanced===b&&(p.noAdvanced=!0),new o(p).minify(h)}return e.compress?h.replace(/(^(\s)+)|((\s)+$)/g,""):h}}(g.eval),x<u.length-1){x=B;var o=r(x,u);i=u.split("\n"),h=o.line+1,l={type:"Parse",message:"Unrecognised input",index:x,filename:a.currentFileInfo.filename,line:h,column:o.column,extract:[i[h-2],i[h-1],i[h]]}}var p=function(b){return b=l||b||F.imports.error,b?(b instanceof t||(b=new t(b,a)),e(b)):e(null,g)};return a.processImports===!1?p():(new w.importVisitor(this.imports,p).run(g),void 0)},parsers:G={primary:function(){for(var a,b=this.mixin,c=J,d=[];;)if(a=this.extendRule()||b.definition()||this.rule()||this.ruleset()||b.call()||this.comment()||this.directive())d.push(a);else if(!c(/^[\s\n]+/)&&!c(/^;+/))break;return d},comment:function(){var b;if("/"===u.charAt(x))return"/"===u.charAt(x+1)?new w.Comment(i(/^\/\/.*/),!0,x,a.currentFileInfo):(b=i(/^\/\*(?:[^*]|\*+[^\/*])*\*+\/\n?/),b?new w.Comment(b,!1,x,a.currentFileInfo):void 0)},comments:function(){for(var a,b=[];;){if(a=this.comment(),!a)break;b.push(a)}return b},entities:{quoted:function(){var b,c,d=x,e=x;return"~"===u.charAt(d)&&(d++,c=!0),'"'===u.charAt(d)||"'"===u.charAt(d)?(c&&j("~"),b=i(/^"((?:[^"\\\r\n]|\\.)*)"|'((?:[^'\\\r\n]|\\.)*)'/),b?new w.Quoted(b[0],b[1]||b[2],c,e,a.currentFileInfo):void 0):void 0},keyword:function(){var a;if(a=i(/^[_A-Za-z-][_A-Za-z0-9-]*/)){var b=w.Color.fromKeyword(a);return b?b:new w.Keyword(a)}},call:function(){var b,c,d,e,f=x;if(b=/^([\w-]+|%|progid:[\w\.]+)\(/.exec(D)){if(b=b[1],c=b.toLowerCase(),"url"===c)return null;if(x+=b.length,"alpha"===c&&(e=G.alpha(),"undefined"!=typeof e))return e;if(j("("),d=this.arguments(),j(")"))return b?new w.Call(b,d,f,a.currentFileInfo):void 0}},arguments:function(){for(var a,b=[];;){if(a=this.assignment()||G.expression(),!a)break;if(b.push(a),!j(","))break}return b},literal:function(){return this.dimension()||this.color()||this.quoted()||this.unicodeDescriptor()},assignment:function(){var a,b;return a=i(/^\w+(?=\s?=)/i),a&&j("=")?(b=G.entity(),b?new w.Assignment(a,b):void 0):void 0},url:function(){var b;if("u"===u.charAt(x)&&i(/^url\(/))return b=this.quoted()||this.variable()||i(/^(?:(?:\\[\(\)'"])|[^\(\)'"])+/)||"",m(")"),new w.URL(null!=b.value||b instanceof w.Variable?b:new w.Anonymous(b),a.currentFileInfo)},variable:function(){var b,c=x;return"@"===u.charAt(x)&&(b=i(/^@@?[\w-]+/))?new w.Variable(b,c,a.currentFileInfo):void 0},variableCurly:function(){var b,c=x;return"@"===u.charAt(x)&&(b=i(/^@\{([\w-]+)\}/))?new w.Variable("@"+b[1],c,a.currentFileInfo):void 0},color:function(){var a;return"#"===u.charAt(x)&&(a=i(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/))?new w.Color(a[1]):void 0},dimension:function(){var a,b=u.charCodeAt(x);if(!(b>57||43>b||47===b||44==b))return a=i(/^([+-]?\d*\.?\d+)(%|[a-z]+)?/),a?new w.Dimension(a[1],a[2]):void 0},unicodeDescriptor:function(){var a;return a=i(/^U\+[0-9a-fA-F?]+(\-[0-9a-fA-F?]+)?/),a?new w.UnicodeDescriptor(a[0]):void 0},javascript:function(){var c,d,e=x;return"~"===u.charAt(e)&&(e++,d=!0),"`"===u.charAt(e)?(a.javascriptEnabled===b||a.javascriptEnabled||n("You are using JavaScript, which has been disabled."),d&&j("~"),c=i(/^`([^`]*)`/),c?new w.JavaScript(c[1],x,d):void 0):void 0}},variable:function(){var a;return"@"===u.charAt(x)&&(a=i(/^(@[\w-]+)\s*:/))?a[1]:void 0},extend:function(a){var b,c,d,e,f,g=x;if(a?i(/^&:extend\(/):i(/^:extend\(/)){do{for(d=null,b=null;!(d=i(/^(all)(?=\s*(\)|,))/))&&(c=this.element());)b?b.push(c):b=[c];d=d&&d[1],f=new w.Extend(new w.Selector(b),d,g),e?e.push(f):e=[f]}while(j(","));return l(/^\)/),a&&l(/^;/),e}},extendRule:function(){return this.extend(!0)},mixin:{call:function(){var b,c,f,g,h,k=u.charAt(x),l=!1,n=x;if("."===k||"#"===k){for(d();;){if(f=i(/^[#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/),!f)break;c=new w.Element(g,f,x,a.currentFileInfo),b?b.push(c):b=[c],g=j(">")}return j("(")&&(h=this.args(!0).args,m(")")),G.important()&&(l=!0),b&&(j(";")||p("}"))?new w.mixin.Call(b,h,n,a.currentFileInfo,l):(e(),void 0)}},args:function(a){for(var b,c,d,e,f,g,h=F.parsers,k=h.entities,m={args:null,variadic:!1},o=[],p=[],q=[];;){if(a)g=h.expression();else{if(h.comments(),"."===u.charAt(x)&&i(/^\.{3}/)){m.variadic=!0,j(";")&&!b&&(b=!0),(b?p:q).push({variadic:!0});break}g=k.variable()||k.literal()||k.keyword()}if(!g)break;e=null,g.throwAwayComments&&g.throwAwayComments(),f=g;var r=null;if(a?1==g.value.length&&(r=g.value[0]):r=g,r&&r instanceof w.Variable)if(j(":"))o.length>0&&(b&&n("Cannot mix ; and , as delimiter types"),c=!0),f=l(h.expression),e=d=r.name;else{if(!a&&i(/^\.{3}/)){m.variadic=!0,j(";")&&!b&&(b=!0),(b?p:q).push({name:g.name,variadic:!0});break}a||(d=e=r.name,f=null)}f&&o.push(f),q.push({name:e,value:f}),j(",")||(j(";")||b)&&(c&&n("Cannot mix ; and , as delimiter types"),b=!0,o.length>1&&(f=new w.Value(o)),p.push({name:d,value:f}),d=null,o=[],c=!1)}return m.args=b?p:q,m},definition:function(){var a,b,c,f,g=[],h=!1;if(!("."!==u.charAt(x)&&"#"!==u.charAt(x)||o(/^[^{]*\}/))&&(d(),b=i(/^([#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+)\s*\(/))){a=b[1];var k=this.args(!1);if(g=k.args,h=k.variadic,j(")")||(B=x,e()),G.comments(),i(/^when/)&&(f=l(G.conditions,"expected condition")),c=G.block())return new w.mixin.Definition(a,g,c,f,h);e()}}},entity:function(){var a=this.entities;return a.literal()||a.variable()||a.url()||a.call()||a.keyword()||a.javascript()||this.comment()},end:function(){return j(";")||p("}")},alpha:function(){var a;if(i(/^\(opacity=/i))return a=i(/^\d+/)||this.entities.variable(),a?(m(")"),new w.Alpha(a)):void 0},element:function(){var b,c,d;return c=this.combinator(),b=i(/^(?:\d+\.\d+|\d+)%/)||i(/^(?:[.#]?|:*)(?:[\w-]|[^\x00-\x9f]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/)||j("*")||j("&")||this.attribute()||i(/^\([^()@]+\)/)||i(/^[\.#](?=@)/)||this.entities.variableCurly(),b||j("(")&&(d=this.selector())&&j(")")&&(b=new w.Paren(d)),b?new w.Element(c,b,x,a.currentFileInfo):void 0},combinator:function(){var a=u.charAt(x);if(">"===a||"+"===a||"~"===a||"|"===a){for(x++;g(u,x);)x++;return new w.Combinator(a)}return g(u,x-1)?new w.Combinator(" "):new w.Combinator(null)},lessSelector:function(){return this.selector(!0)},selector:function(b){for(var c,d,e,f,g,h,i,j=J;(b&&(g=this.extend())||b&&(h=j(/^when/))||(f=this.element()))&&(h?i=l(this.conditions,"expected condition"):i?n("CSS guard can only be used at the end of selector"):g?d?d.push(g):d=[g]:(d&&n("Extend can only be used at the end of selector"),e=u.charAt(x),c?c.push(f):c=[f],f=null),"{"!==e&&"}"!==e&&";"!==e&&","!==e&&")"!==e););return c?new w.Selector(c,d,i,x,a.currentFileInfo):(d&&n("Extend must be used to extend a selector, it cannot be used on its own"),void 0)},attribute:function(){if(j("[")){var a,b,c,d=this.entities;return(a=d.variableCurly())||(a=l(/^(?:[_A-Za-z0-9-\*]*\|)?(?:[_A-Za-z0-9-]|\\.)+/)),c=i(/^[|~*$^]?=/),c&&(b=d.quoted()||i(/^[0-9]+%/)||i(/^[\w-]+/)||d.variableCurly()),m("]"),new w.Attribute(a,c,b)}},block:function(){var a;return j("{")&&(a=this.primary())&&j("}")?a:void 0},ruleset:function(){var b,c,f,g;for(d(),a.dumpLineNumbers&&(g=s(x,u,a));;){if(c=this.lessSelector(),!c)break;if(b?b.push(c):b=[c],this.comments(),!j(","))break;c.condition&&n("Guards are only currently allowed on a single selector."),this.comments()}if(b&&(f=this.block())){var h=new w.Ruleset(b,f,a.strictImports);return a.dumpLineNumbers&&(h.debugInfo=g),h}B=x,e()},rule:function(b){var c,f,g,h=u.charAt(x),i=!1;if(d(),"."!==h&&"#"!==h&&"&"!==h&&(c=this.variable()||this.ruleProperty())){if(f=!b&&(a.compress||c.charAt&&"@"===c.charAt(0))?this.value()||this.anonymousValue():this.anonymousValue()||this.value(),g=this.important(),i=c.pop&&"+"===c.pop(),f&&this.end())return new w.Rule(c,f,g,i,A,a.currentFileInfo);if(B=x,e(),f&&!b)return this.rule(!0)}},anonymousValue:function(){var a;return a=/^([^@+\/'"*`(;{}-]*);/.exec(D),a?(x+=a[0].length-1,new w.Anonymous(a[1])):void 0},"import":function(){var b,c,f=x;d();var g=i(/^@import?\s+/),h=(g?this.importOptions():null)||{};return g&&(b=this.entities.quoted()||this.entities.url())&&(c=this.mediaFeatures(),j(";"))?(c=c&&new w.Value(c),new w.Import(b,c,h,f,a.currentFileInfo)):(e(),void 0)},importOptions:function(){var a,b,c,d={};if(!j("("))return null;do if(a=this.importOption()){switch(b=a,c=!0,b){case"css":b="less",c=!1;break;case"once":b="multiple",c=!1}if(d[b]=c,!j(","))break}while(a);return m(")"),d},importOption:function(){var a=i(/^(less|css|multiple|once|inline|reference)/);return a?a[1]:void 0},mediaFeature:function(){var b,c,d=this.entities,e=[];do if(b=d.keyword()||d.variable())e.push(b);else if(j("(")){if(c=this.property(),b=this.value(),!j(")"))return null;if(c&&b)e.push(new w.Paren(new w.Rule(c,b,null,null,x,a.currentFileInfo,!0)));else{if(!b)return null;e.push(new w.Paren(b))}}while(b);return e.length>0?new w.Expression(e):void 0},mediaFeatures:function(){var a,b=this.entities,c=[];do if(a=this.mediaFeature()){if(c.push(a),!j(","))break}else if(a=b.variable(),a&&(c.push(a),!j(",")))break;while(a);return c.length>0?c:null},media:function(){var b,c,d,e;return a.dumpLineNumbers&&(e=s(x,u,a)),i(/^@media/)&&(b=this.mediaFeatures(),c=this.block())?(d=new w.Media(c,b,x,a.currentFileInfo),a.dumpLineNumbers&&(d.debugInfo=e),d):void 0},directive:function(){var b,c,f,g,h,k,l,m;if("@"===u.charAt(x)){if(c=this["import"]()||this.media())return c;if(d(),b=i(/^@[a-z-]+/)){switch(g=b,"-"==b.charAt(1)&&b.indexOf("-",2)>0&&(g="@"+b.slice(b.indexOf("-",2)+1)),g){case"@font-face":h=!0;break;case"@viewport":case"@top-left":case"@top-left-corner":case"@top-center":case"@top-right":case"@top-right-corner":case"@bottom-left":case"@bottom-left-corner":case"@bottom-center":case"@bottom-right":case"@bottom-right-corner":case"@left-top":case"@left-middle":case"@left-bottom":case"@right-top":case"@right-middle":case"@right-bottom":h=!0;break;case"@host":case"@page":case"@document":case"@supports":case"@keyframes":h=!0,k=!0;break;case"@namespace":l=!0}if(k&&(m=(i(/^[^{]+/)||"").trim(),m&&(b+=" "+m)),h){if(f=this.block())return new w.Directive(b,f,x,a.currentFileInfo)}else if(c=l?this.expression():this.entity(),c&&j(";")){var n=new w.Directive(b,c,x,a.currentFileInfo);return a.dumpLineNumbers&&(n.debugInfo=s(x,u,a)),n}e()}}},value:function(){var a,b=[];do if(a=this.expression(),a&&(b.push(a),!j(",")))break;while(a);return b.length>0?new w.Value(b):void 0},important:function(){return"!"===u.charAt(x)?i(/^! *important/):void 0},sub:function(){var a,b;return j("(")&&(a=this.addition())?(b=new w.Expression([a]),m(")"),b.parens=!0,b):void 0},multiplication:function(){var a,b,c,d,e;if(a=this.operand()){for(e=g(u,x-1);;){if(o(/^\/[*\/]/))break;if(c=j("/")||j("*"),!c)break;if(b=this.operand(),!b)break;a.parensInOp=!0,b.parensInOp=!0,d=new w.Operation(c,[d||a,b],e),e=g(u,x-1)}return d||a}},addition:function(){var a,b,c,d,e;if(a=this.multiplication()){for(e=g(u,x-1);;){if(c=i(/^[-+]\s+/)||!e&&(j("+")||j("-")),!c)break;if(b=this.multiplication(),!b)break;a.parensInOp=!0,b.parensInOp=!0,d=new w.Operation(c,[d||a,b],e),e=g(u,x-1)}return d||a}},conditions:function(){var a,b,c,d=x;if(a=this.condition()){for(;;){if(!o(/^,\s*(not\s*)?\(/)||!j(","))break;if(b=this.condition(),!b)break;c=new w.Condition("or",c||a,b,d)}return c||a}},condition:function(){var a,b,c,d,e=this.entities,f=x,g=!1;return i(/^not/)&&(g=!0),m("("),a=this.addition()||e.keyword()||e.quoted(),a?(d=i(/^(?:>=|<=|=<|[<=>])/),d?(b=this.addition()||e.keyword()||e.quoted(),b?c=new w.Condition(d,a,b,f,g):n("expected expression")):c=new w.Condition("=",a,new w.Keyword("true"),f,g),m(")"),i(/^and/)?new w.Condition("and",c,this.condition()):c):void 0},operand:function(){var a,b=this.entities,c=u.charAt(x+1);"-"!==u.charAt(x)||"@"!==c&&"("!==c||(a=j("-"));var d=this.sub()||b.dimension()||b.color()||b.variable()||b.call();return a&&(d.parensInOp=!0,d=new w.Negative(d)),d},expression:function(){var a,b,c=[];do a=this.addition()||this.entity(),a&&(c.push(a),o(/^\/[\/*]/)||(b=j("/"),b&&c.push(new w.Anonymous(b))));while(a);return c.length>0?new w.Expression(c):void 0},property:function(){var a=i(/^(\*?-?[_a-zA-Z0-9-]+)\s*:/);return a?a[1]:void 0},ruleProperty:function(){function b(a){var b=a.exec(c);return b?(e.push(x+f),f+=b[0].length,c=c.slice(b[1].length),d.push(b[1])):void 0}var c=D,d=[],e=[],f=0;for(b(/^(\*?)/);b(/^((?:[\w-]+)|(?:@\{[\w-]+\}))/););if(d.length>1&&b(/^\s*(\+?)\s*:/)){k(f);for(var g in d)"@"===d[g].charAt(0)&&(d[g]=new w.Variable("@"+d[g].slice(2,-1),e[g],a.currentFileInfo));return d}}}}},v.Parser.serializeVars=function(a){var b="";for(var c in a)if(Object.hasOwnProperty.call(a,c)){var d=a[c];b+=("@"===c[0]?"":"@")+c+": "+d+(";"===(""+d).slice(-1)?"":";")}return b},function(d){function e(a,b,c){if(!(c instanceof d.Dimension))throw{type:"Argument",message:"argument must be a number"};return null==b?b=c.unit:c=c.unify(),new d.Dimension(a(parseFloat(c.value)),b)}function f(a,b,c){var e,f,g,h,i=b.alpha,j=c.alpha,k=[];g=j+i*(1-j);for(var l=0;3>l;l++)e=b.rgb[l]/255,f=c.rgb[l]/255,h=a(e,f),g&&(h=(j*f+i*(e-j*(e+f-h)))/g),k[l]=255*h;return new d.Color(k,g)}function g(){var a,b=d.functions;for(a in l)b[a]=e.bind(null,Math[a],l[a]);for(a in m)b[a]=f.bind(null,m[a]);a=d.defaultFunc,b.default=a.eval.bind(a)}function h(a){return d.functions.hsla(a.h,a.s,a.l,a.a)}function i(a,b){return a instanceof d.Dimension&&a.unit.is("%")?parseFloat(a.value*b/100):j(a)}function j(a){if(a instanceof d.Dimension)return parseFloat(a.unit.is("%")?a.value/100:a.value);if("number"==typeof a)return a;throw{error:"RuntimeError",message:"color functions take numbers as parameters"}}function k(a){return Math.min(1,Math.max(0,a))}d.functions={rgb:function(a,b,c){return this.rgba(a,b,c,1)},rgba:function(a,b,c,e){var f=[a,b,c].map(function(a){return i(a,255)});return e=j(e),new d.Color(f,e)},hsl:function(a,b,c){return this.hsla(a,b,c,1)},hsla:function(a,b,c,d){function e(a){return a=0>a?a+1:a>1?a-1:a,1>6*a?g+(f-g)*a*6:1>2*a?f:2>3*a?g+(f-g)*(2/3-a)*6:g}a=j(a)%360/360,b=k(j(b)),c=k(j(c)),d=k(j(d));var f=.5>=c?c*(b+1):c+b-c*b,g=2*c-f;return this.rgba(255*e(a+1/3),255*e(a),255*e(a-1/3),d)},hsv:function(a,b,c){return this.hsva(a,b,c,1)},hsva:function(a,b,c,d){a=j(a)%360/360*360,b=j(b),c=j(c),d=j(d);var e,f;e=Math.floor(a/60%6),f=a/60-e;var g=[c,c*(1-b),c*(1-f*b),c*(1-(1-f)*b)],h=[[0,3,1],[2,0,1],[1,0,3],[1,2,0],[3,1,0],[0,1,2]];return this.rgba(255*g[h[e][0]],255*g[h[e][1]],255*g[h[e][2]],d)},hue:function(a){return new d.Dimension(Math.round(a.toHSL().h))},saturation:function(a){return new d.Dimension(Math.round(100*a.toHSL().s),"%")},lightness:function(a){return new d.Dimension(Math.round(100*a.toHSL().l),"%")},hsvhue:function(a){return new d.Dimension(Math.round(a.toHSV().h))},hsvsaturation:function(a){return new d.Dimension(Math.round(100*a.toHSV().s),"%")},hsvvalue:function(a){return new d.Dimension(Math.round(100*a.toHSV().v),"%")},red:function(a){return new d.Dimension(a.rgb[0])},green:function(a){return new d.Dimension(a.rgb[1])},blue:function(a){return new d.Dimension(a.rgb[2])},alpha:function(a){return new d.Dimension(a.toHSL().a)},luma:function(a){return new d.Dimension(Math.round(a.luma()*a.alpha*100),"%")},saturate:function(a,b){if(!a.rgb)return null;var c=a.toHSL();return c.s+=b.value/100,c.s=k(c.s),h(c)},desaturate:function(a,b){var c=a.toHSL();return c.s-=b.value/100,c.s=k(c.s),h(c)},lighten:function(a,b){var c=a.toHSL();return c.l+=b.value/100,c.l=k(c.l),h(c)},darken:function(a,b){var c=a.toHSL();return c.l-=b.value/100,c.l=k(c.l),h(c)},fadein:function(a,b){var c=a.toHSL();return c.a+=b.value/100,c.a=k(c.a),h(c)},fadeout:function(a,b){var c=a.toHSL();return c.a-=b.value/100,c.a=k(c.a),h(c)},fade:function(a,b){var c=a.toHSL();return c.a=b.value/100,c.a=k(c.a),h(c)},spin:function(a,b){var c=a.toHSL(),d=(c.h+b.value)%360;return c.h=0>d?360+d:d,h(c)},mix:function(a,b,c){c||(c=new d.Dimension(50));var e=c.value/100,f=2*e-1,g=a.toHSL().a-b.toHSL().a,h=((f*g==-1?f:(f+g)/(1+f*g))+1)/2,i=1-h,j=[a.rgb[0]*h+b.rgb[0]*i,a.rgb[1]*h+b.rgb[1]*i,a.rgb[2]*h+b.rgb[2]*i],k=a.alpha*e+b.alpha*(1-e);return new d.Color(j,k)},greyscale:function(a){return this.desaturate(a,new d.Dimension(100))},contrast:function(a,b,c,d){if(!a.rgb)return null;if("undefined"==typeof c&&(c=this.rgba(255,255,255,1)),"undefined"==typeof b&&(b=this.rgba(0,0,0,1)),b.luma()>c.luma()){var e=c;c=b,b=e}return d="undefined"==typeof d?.43:j(d),a.luma()<d?c:b},e:function(a){return new d.Anonymous(a instanceof d.JavaScript?a.evaluated:a)},escape:function(a){return new d.Anonymous(encodeURI(a.value).replace(/=/g,"%3D").replace(/:/g,"%3A").replace(/#/g,"%23").replace(/;/g,"%3B").replace(/\(/g,"%28").replace(/\)/g,"%29"))},"%":function(a){for(var b=Array.prototype.slice.call(arguments,1),c=a.value,e=0;e<b.length;e++)c=c.replace(/%[sda]/i,function(a){var c=a.match(/s/i)?b[e].value:b[e].toCSS();return a.match(/[A-Z]$/)?encodeURIComponent(c):c});return c=c.replace(/%%/g,"%"),new d.Quoted('"'+c+'"',c)},unit:function(a,b){if(!(a instanceof d.Dimension))throw{type:"Argument",message:"the first argument to unit must be a number"+(a instanceof d.Operation?". Have you forgotten parenthesis?":"")};return new d.Dimension(a.value,b?b.toCSS():"")},convert:function(a,b){return a.convertTo(b.value)},round:function(a,b){var c="undefined"==typeof b?0:b.value;return e(function(a){return a.toFixed(c)},null,a)},pi:function(){return new d.Dimension(Math.PI)},mod:function(a,b){return new d.Dimension(a.value%b.value,a.unit)},pow:function(a,b){if("number"==typeof a&&"number"==typeof b)a=new d.Dimension(a),b=new d.Dimension(b);else if(!(a instanceof d.Dimension&&b instanceof d.Dimension))throw{type:"Argument",message:"arguments must be numbers"};return new d.Dimension(Math.pow(a.value,b.value),a.unit)},_minmax:function(a,c){switch(c=Array.prototype.slice.call(c),c.length){case 0:throw{type:"Argument",message:"one or more arguments required"};case 1:return c[0]}var e,f,g,h,i,j,k=[],l={};for(e=0;e<c.length;e++)g=c[e],g instanceof d.Dimension?(h=g.unify(),j=h.unit.toString(),f=l[j],f!==b?(i=k[f].unify(),(a&&h.value<i.value||!a&&h.value>i.value)&&(k[f]=g)):(l[j]=k.length,k.push(g))):k.push(g);
return 1==k.length?k[0]:(c=k.map(function(a){return a.toCSS(this.env)}).join(this.env.compress?",":", "),new d.Anonymous((a?"min":"max")+"("+c+")"))},min:function(){return this._minmax(!0,arguments)},max:function(){return this._minmax(!1,arguments)},argb:function(a){return new d.Anonymous(a.toARGB())},percentage:function(a){return new d.Dimension(100*a.value,"%")},color:function(a){if(a instanceof d.Quoted){var b,c=a.value;if(b=d.Color.fromKeyword(c))return b;if(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/.test(c))return new d.Color(c.slice(1));throw{type:"Argument",message:"argument must be a color keyword or 3/6 digit hex e.g. #FFF"}}throw{type:"Argument",message:"argument must be a string"}},iscolor:function(a){return this._isa(a,d.Color)},isnumber:function(a){return this._isa(a,d.Dimension)},isstring:function(a){return this._isa(a,d.Quoted)},iskeyword:function(a){return this._isa(a,d.Keyword)},isurl:function(a){return this._isa(a,d.URL)},ispixel:function(a){return this.isunit(a,"px")},ispercentage:function(a){return this.isunit(a,"%")},isem:function(a){return this.isunit(a,"em")},isunit:function(a,b){return a instanceof d.Dimension&&a.unit.is(b.value||b)?d.True:d.False},_isa:function(a,b){return a instanceof b?d.True:d.False},tint:function(a,b){return this.mix(this.rgb(255,255,255),a,b)},shade:function(a,b){return this.mix(this.rgb(0,0,0),a,b)},extract:function(a,b){return b=b.value-1,Array.isArray(a.value)?a.value[b]:Array(a)[b]},length:function(a){var b=Array.isArray(a.value)?a.value.length:1;return new d.Dimension(b)},"data-uri":function(b,e){if("undefined"!=typeof a)return new d.URL(e||b,this.currentFileInfo).eval(this.env);var f=b.value,g=e&&e.value,h=c("fs"),i=c("path"),j=!1;if(arguments.length<2&&(g=f),this.env.isPathRelative(g)&&(g=this.currentFileInfo.relativeUrls?i.join(this.currentFileInfo.currentDirectory,g):i.join(this.currentFileInfo.entryPath,g)),arguments.length<2){var k;try{k=c("mime")}catch(l){k=d._mime}f=k.lookup(g);var m=k.charsets.lookup(f);j=["US-ASCII","UTF-8"].indexOf(m)<0,j&&(f+=";base64")}else j=/;base64$/.test(f);var n=h.readFileSync(g),o=32,p=parseInt(n.length/1024,10);if(p>=o&&this.env.ieCompat!==!1)return this.env.silent||console.warn("Skipped data-uri embedding of %s because its size (%dKB) exceeds IE8-safe %dKB!",g,p,o),new d.URL(e||b,this.currentFileInfo).eval(this.env);n=j?n.toString("base64"):encodeURIComponent(n);var q="'data:"+f+","+n+"'";return new d.URL(new d.Anonymous(q))},"svg-gradient":function(a){function c(){throw{type:"Argument",message:"svg-gradient expects direction, start_color [start_position], [color position,]..., end_color [end_position]"}}arguments.length<3&&c();var e,f,g,h,i,j,k,l=Array.prototype.slice.call(arguments,1),m="linear",n='x="0" y="0" width="1" height="1"',o=!0,p={compress:!1},q=a.toCSS(p);switch(q){case"to bottom":e='x1="0%" y1="0%" x2="0%" y2="100%"';break;case"to right":e='x1="0%" y1="0%" x2="100%" y2="0%"';break;case"to bottom right":e='x1="0%" y1="0%" x2="100%" y2="100%"';break;case"to top right":e='x1="0%" y1="100%" x2="100%" y2="0%"';break;case"ellipse":case"ellipse at center":m="radial",e='cx="50%" cy="50%" r="75%"',n='x="-50" y="-50" width="101" height="101"';break;default:throw{type:"Argument",message:"svg-gradient direction must be 'to bottom', 'to right', 'to bottom right', 'to top right' or 'ellipse at center'"}}for(f='<?xml version="1.0" ?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none"><'+m+'Gradient id="gradient" gradientUnits="userSpaceOnUse" '+e+">",g=0;g<l.length;g+=1)l[g].value?(h=l[g].value[0],i=l[g].value[1]):(h=l[g],i=b),h instanceof d.Color&&((0===g||g+1===l.length)&&i===b||i instanceof d.Dimension)||c(),j=i?i.toCSS(p):0===g?"0%":"100%",k=h.alpha,f+='<stop offset="'+j+'" stop-color="'+h.toRGB()+'"'+(1>k?' stop-opacity="'+k+'"':"")+"/>";if(f+="</"+m+"Gradient><rect "+n+' fill="url(#gradient)" /></svg>',o)try{f=new Buffer(f).toString("base64")}catch(r){o=!1}return f="'data:image/svg+xml"+(o?";base64":"")+","+f+"'",new d.URL(new d.Anonymous(f))}},d._mime={_types:{".htm":"text/html",".html":"text/html",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".png":"image/png"},lookup:function(a){var e=c("path").extname(a),f=d._mime._types[e];if(f===b)throw new Error('Optional dependency "mime" is required for '+e);return f},charsets:{lookup:function(a){return a&&/^text\//.test(a)?"UTF-8":""}}};var l={ceil:null,floor:null,sqrt:null,abs:null,tan:"",sin:"",cos:"",atan:"rad",asin:"rad",acos:"rad"},m={multiply:function(a,b){return a*b},screen:function(a,b){return a+b-a*b},overlay:function(a,b){return a*=2,1>=a?m.multiply(a,b):m.screen(a-1,b)},softlight:function(a,b){var c=1,d=a;return b>.5&&(d=1,c=a>.25?Math.sqrt(a):((16*a-12)*a+4)*a),a-(1-2*b)*d*(c-a)},hardlight:function(a,b){return m.overlay(b,a)},difference:function(a,b){return Math.abs(a-b)},exclusion:function(a,b){return a+b-2*a*b},average:function(a,b){return(a+b)/2},negation:function(a,b){return 1-Math.abs(a+b-1)}};d.defaultFunc={eval:function(){var a=this.value_,b=this.error_;if(b)throw b;return null!=a?a?d.True:d.False:void 0},value:function(a){this.value_=a},error:function(a){this.error_=a},reset:function(){this.value_=this.error_=null}},g(),d.functionCall=function(a,b){this.env=a,this.currentFileInfo=b},d.functionCall.prototype=d.functions}(c("./tree")),function(a){a.colors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}}(c("./tree")),function(a){a.debugInfo=function(b,c,d){var e="";if(b.dumpLineNumbers&&!b.compress)switch(b.dumpLineNumbers){case"comments":e=a.debugInfo.asComment(c);break;case"mediaquery":e=a.debugInfo.asMediaQuery(c);break;case"all":e=a.debugInfo.asComment(c)+(d||"")+a.debugInfo.asMediaQuery(c)}return e},a.debugInfo.asComment=function(a){return"/* line "+a.debugInfo.lineNumber+", "+a.debugInfo.fileName+" */\n"},a.debugInfo.asMediaQuery=function(a){return"@media -sass-debug-info{filename{font-family:"+("file://"+a.debugInfo.fileName).replace(/([.:/\\])/g,function(a){return"\\"==a&&(a="/"),"\\"+a})+"}line{font-family:\\00003"+a.debugInfo.lineNumber+"}}\n"},a.find=function(a,b){for(var c,d=0;d<a.length;d++)if(c=b.call(a,a[d]))return c;return null},a.jsify=function(a){return Array.isArray(a.value)&&a.value.length>1?"["+a.value.map(function(a){return a.toCSS(!1)}).join(", ")+"]":a.toCSS(!1)},a.toCSS=function(a){var b=[];return this.genCSS(a,{add:function(a){b.push(a)},isEmpty:function(){return 0===b.length}}),b.join("")},a.outputRuleset=function(a,b,c){var d,e=c.length;if(a.tabLevel=(0|a.tabLevel)+1,a.compress){for(b.add("{"),d=0;e>d;d++)c[d].genCSS(a,b);return b.add("}"),a.tabLevel--,void 0}var f="\n"+Array(a.tabLevel).join("  "),g=f+"  ";if(e){for(b.add(" {"+g),c[0].genCSS(a,b),d=1;e>d;d++)b.add(g),c[d].genCSS(a,b);b.add(f+"}")}else b.add(" {"+f+"}");a.tabLevel--}}(c("./tree")),function(a){a.Alpha=function(a){this.value=a},a.Alpha.prototype={type:"Alpha",accept:function(a){this.value=a.visit(this.value)},eval:function(b){return this.value.eval?new a.Alpha(this.value.eval(b)):this},genCSS:function(a,b){b.add("alpha(opacity="),this.value.genCSS?this.value.genCSS(a,b):b.add(this.value),b.add(")")},toCSS:a.toCSS}}(c("../tree")),function(a){a.Anonymous=function(a,b,c,d){this.value=a.value||a,this.index=b,this.mapLines=d,this.currentFileInfo=c},a.Anonymous.prototype={type:"Anonymous",eval:function(){return new a.Anonymous(this.value,this.index,this.currentFileInfo,this.mapLines)},compare:function(a){if(!a.toCSS)return-1;var b=this.toCSS(),c=a.toCSS();return b===c?0:c>b?-1:1},genCSS:function(a,b){b.add(this.value,this.currentFileInfo,this.index,this.mapLines)},toCSS:a.toCSS}}(c("../tree")),function(a){a.Assignment=function(a,b){this.key=a,this.value=b},a.Assignment.prototype={type:"Assignment",accept:function(a){this.value=a.visit(this.value)},eval:function(b){return this.value.eval?new a.Assignment(this.key,this.value.eval(b)):this},genCSS:function(a,b){b.add(this.key+"="),this.value.genCSS?this.value.genCSS(a,b):b.add(this.value)},toCSS:a.toCSS}}(c("../tree")),function(a){a.Call=function(a,b,c,d){this.name=a,this.args=b,this.index=c,this.currentFileInfo=d},a.Call.prototype={type:"Call",accept:function(a){this.args&&(this.args=a.visitArray(this.args))},eval:function(b){var c,d,e=this.args.map(function(a){return a.eval(b)}),f=this.name.toLowerCase();if(f in a.functions)try{if(d=new a.functionCall(b,this.currentFileInfo),c=d[f].apply(d,e),null!=c)return c}catch(g){throw{type:g.type||"Runtime",message:"error evaluating function `"+this.name+"`"+(g.message?": "+g.message:""),index:this.index,filename:this.currentFileInfo.filename}}return new a.Call(this.name,e,this.index,this.currentFileInfo)},genCSS:function(a,b){b.add(this.name+"(",this.currentFileInfo,this.index);for(var c=0;c<this.args.length;c++)this.args[c].genCSS(a,b),c+1<this.args.length&&b.add(", ");b.add(")")},toCSS:a.toCSS}}(c("../tree")),function(a){function b(a){return"#"+a.map(function(a){return a=c(Math.round(a),255),(16>a?"0":"")+a.toString(16)}).join("")}function c(a,b){return Math.min(Math.max(a,0),b)}a.Color=function(a,b){this.rgb=Array.isArray(a)?a:6==a.length?a.match(/.{2}/g).map(function(a){return parseInt(a,16)}):a.split("").map(function(a){return parseInt(a+a,16)}),this.alpha="number"==typeof b?b:1};var d="transparent";a.Color.prototype={type:"Color",eval:function(){return this},luma:function(){return.2126*this.rgb[0]/255+.7152*this.rgb[1]/255+.0722*this.rgb[2]/255},genCSS:function(a,b){b.add(this.toCSS(a))},toCSS:function(a,b){var e=a&&a.compress&&!b;if(this.alpha<1)return 0===this.alpha&&this.isTransparentKeyword?d:"rgba("+this.rgb.map(function(a){return c(Math.round(a),255)}).concat(c(this.alpha,1)).join(","+(e?"":" "))+")";var f=this.toRGB();if(e){var g=f.split("");g[1]===g[2]&&g[3]===g[4]&&g[5]===g[6]&&(f="#"+g[1]+g[3]+g[5])}return f},operate:function(b,c,d){for(var e=[],f=this.alpha*(1-d.alpha)+d.alpha,g=0;3>g;g++)e[g]=a.operate(b,c,this.rgb[g],d.rgb[g]);return new a.Color(e,f)},toRGB:function(){return b(this.rgb)},toHSL:function(){var a,b,c=this.rgb[0]/255,d=this.rgb[1]/255,e=this.rgb[2]/255,f=this.alpha,g=Math.max(c,d,e),h=Math.min(c,d,e),i=(g+h)/2,j=g-h;if(g===h)a=b=0;else{switch(b=i>.5?j/(2-g-h):j/(g+h),g){case c:a=(d-e)/j+(e>d?6:0);break;case d:a=(e-c)/j+2;break;case e:a=(c-d)/j+4}a/=6}return{h:360*a,s:b,l:i,a:f}},toHSV:function(){var a,b,c=this.rgb[0]/255,d=this.rgb[1]/255,e=this.rgb[2]/255,f=this.alpha,g=Math.max(c,d,e),h=Math.min(c,d,e),i=g,j=g-h;if(b=0===g?0:j/g,g===h)a=0;else{switch(g){case c:a=(d-e)/j+(e>d?6:0);break;case d:a=(e-c)/j+2;break;case e:a=(c-d)/j+4}a/=6}return{h:360*a,s:b,v:i,a:f}},toARGB:function(){return b([255*this.alpha].concat(this.rgb))},compare:function(a){return a.rgb?a.rgb[0]===this.rgb[0]&&a.rgb[1]===this.rgb[1]&&a.rgb[2]===this.rgb[2]&&a.alpha===this.alpha?0:-1:-1}},a.Color.fromKeyword=function(b){if(a.colors.hasOwnProperty(b))return new a.Color(a.colors[b].slice(1));if(b===d){var c=new a.Color([0,0,0],0);return c.isTransparentKeyword=!0,c}}}(c("../tree")),function(a){a.Comment=function(a,b,c,d){this.value=a,this.silent=!!b,this.currentFileInfo=d},a.Comment.prototype={type:"Comment",genCSS:function(b,c){this.debugInfo&&c.add(a.debugInfo(b,this),this.currentFileInfo,this.index),c.add(this.value.trim())},toCSS:a.toCSS,isSilent:function(a){var b=this.currentFileInfo&&this.currentFileInfo.reference&&!this.isReferenced,c=a.compress&&!this.value.match(/^\/\*!/);return this.silent||b||c},eval:function(){return this},markReferenced:function(){this.isReferenced=!0}}}(c("../tree")),function(a){a.Condition=function(a,b,c,d,e){this.op=a.trim(),this.lvalue=b,this.rvalue=c,this.index=d,this.negate=e},a.Condition.prototype={type:"Condition",accept:function(a){this.lvalue=a.visit(this.lvalue),this.rvalue=a.visit(this.rvalue)},eval:function(a){var b,c=this.lvalue.eval(a),d=this.rvalue.eval(a),e=this.index;return b=function(a){switch(a){case"and":return c&&d;case"or":return c||d;default:if(c.compare)b=c.compare(d);else{if(!d.compare)throw{type:"Type",message:"Unable to perform comparison",index:e};b=d.compare(c)}switch(b){case-1:return"<"===a||"=<"===a||"<="===a;case 0:return"="===a||">="===a||"=<"===a||"<="===a;case 1:return">"===a||">="===a}}}(this.op),this.negate?!b:b}}}(c("../tree")),function(a){a.Dimension=function(c,d){this.value=parseFloat(c),this.unit=d&&d instanceof a.Unit?d:new a.Unit(d?[d]:b)},a.Dimension.prototype={type:"Dimension",accept:function(a){this.unit=a.visit(this.unit)},eval:function(){return this},toColor:function(){return new a.Color([this.value,this.value,this.value])},genCSS:function(a,b){if(a&&a.strictUnits&&!this.unit.isSingular())throw new Error("Multiple units in dimension. Correct the units or use the unit function. Bad unit: "+this.unit.toString());var c=this.value,d=String(c);if(0!==c&&1e-6>c&&c>-1e-6&&(d=c.toFixed(20).replace(/0+$/,"")),a&&a.compress){if(0===c&&this.unit.isLength())return b.add(d),void 0;c>0&&1>c&&(d=d.substr(1))}b.add(d),this.unit.genCSS(a,b)},toCSS:a.toCSS,operate:function(b,c,d){var e=a.operate(b,c,this.value,d.value),f=this.unit.clone();if("+"===c||"-"===c)if(0===f.numerator.length&&0===f.denominator.length)f.numerator=d.unit.numerator.slice(0),f.denominator=d.unit.denominator.slice(0);else if(0===d.unit.numerator.length&&0===f.denominator.length);else{if(d=d.convertTo(this.unit.usedUnits()),b.strictUnits&&d.unit.toString()!==f.toString())throw new Error("Incompatible units. Change the units or use the unit function. Bad units: '"+f.toString()+"' and '"+d.unit.toString()+"'.");e=a.operate(b,c,this.value,d.value)}else"*"===c?(f.numerator=f.numerator.concat(d.unit.numerator).sort(),f.denominator=f.denominator.concat(d.unit.denominator).sort(),f.cancel()):"/"===c&&(f.numerator=f.numerator.concat(d.unit.denominator).sort(),f.denominator=f.denominator.concat(d.unit.numerator).sort(),f.cancel());return new a.Dimension(e,f)},compare:function(b){if(b instanceof a.Dimension){var c=this.unify(),d=b.unify(),e=c.value,f=d.value;return f>e?-1:e>f?1:d.unit.isEmpty()||0===c.unit.compare(d.unit)?0:-1}return-1},unify:function(){return this.convertTo({length:"m",duration:"s",angle:"rad"})},convertTo:function(b){var c,d,e,f,g,h=this.value,i=this.unit.clone(),j={};if("string"==typeof b){for(c in a.UnitConversions)a.UnitConversions[c].hasOwnProperty(b)&&(j={},j[c]=b);b=j}g=function(a,b){return e.hasOwnProperty(a)?(b?h/=e[a]/e[f]:h*=e[a]/e[f],f):a};for(d in b)b.hasOwnProperty(d)&&(f=b[d],e=a.UnitConversions[d],i.map(g));return i.cancel(),new a.Dimension(h,i)}},a.UnitConversions={length:{m:1,cm:.01,mm:.001,"in":.0254,pt:.0254/72,pc:.0254/72*12},duration:{s:1,ms:.001},angle:{rad:1/(2*Math.PI),deg:1/360,grad:.0025,turn:1}},a.Unit=function(a,b,c){this.numerator=a?a.slice(0).sort():[],this.denominator=b?b.slice(0).sort():[],this.backupUnit=c},a.Unit.prototype={type:"Unit",clone:function(){return new a.Unit(this.numerator.slice(0),this.denominator.slice(0),this.backupUnit)},genCSS:function(a,b){this.numerator.length>=1?b.add(this.numerator[0]):this.denominator.length>=1?b.add(this.denominator[0]):a&&a.strictUnits||!this.backupUnit||b.add(this.backupUnit)},toCSS:a.toCSS,toString:function(){var a,b=this.numerator.join("*");for(a=0;a<this.denominator.length;a++)b+="/"+this.denominator[a];return b},compare:function(a){return this.is(a.toString())?0:-1},is:function(a){return this.toString()===a},isLength:function(){return Boolean(this.toCSS().match(/px|em|%|in|cm|mm|pc|pt|ex/))},isEmpty:function(){return 0===this.numerator.length&&0===this.denominator.length},isSingular:function(){return this.numerator.length<=1&&0===this.denominator.length},map:function(a){var b;for(b=0;b<this.numerator.length;b++)this.numerator[b]=a(this.numerator[b],!1);for(b=0;b<this.denominator.length;b++)this.denominator[b]=a(this.denominator[b],!0)},usedUnits:function(){var b,c,d={};c=function(a){return b.hasOwnProperty(a)&&!d[e]&&(d[e]=a),a};for(var e in a.UnitConversions)a.UnitConversions.hasOwnProperty(e)&&(b=a.UnitConversions[e],this.map(c));return d},cancel:function(){var a,b,c,d={};for(b=0;b<this.numerator.length;b++)a=this.numerator[b],c||(c=a),d[a]=(d[a]||0)+1;for(b=0;b<this.denominator.length;b++)a=this.denominator[b],c||(c=a),d[a]=(d[a]||0)-1;this.numerator=[],this.denominator=[];for(a in d)if(d.hasOwnProperty(a)){var e=d[a];if(e>0)for(b=0;e>b;b++)this.numerator.push(a);else if(0>e)for(b=0;-e>b;b++)this.denominator.push(a)}0===this.numerator.length&&0===this.denominator.length&&c&&(this.backupUnit=c),this.numerator.sort(),this.denominator.sort()}}}(c("../tree")),function(a){a.Directive=function(b,c,d,e){this.name=b,Array.isArray(c)?(this.rules=[new a.Ruleset(null,c)],this.rules[0].allowImports=!0):this.value=c,this.currentFileInfo=e},a.Directive.prototype={type:"Directive",accept:function(a){this.rules&&(this.rules=a.visitArray(this.rules)),this.value&&(this.value=a.visit(this.value))},genCSS:function(b,c){c.add(this.name,this.currentFileInfo,this.index),this.rules?a.outputRuleset(b,c,this.rules):(c.add(" "),this.value.genCSS(b,c),c.add(";"))},toCSS:a.toCSS,eval:function(b){var c=this;return this.rules&&(b.frames.unshift(this),c=new a.Directive(this.name,null,this.index,this.currentFileInfo),c.rules=[this.rules[0].eval(b)],c.rules[0].root=!0,b.frames.shift()),c},variable:function(b){return a.Ruleset.prototype.variable.call(this.rules[0],b)},find:function(){return a.Ruleset.prototype.find.apply(this.rules[0],arguments)},rulesets:function(){return a.Ruleset.prototype.rulesets.apply(this.rules[0])},markReferenced:function(){var a,b;if(this.isReferenced=!0,this.rules)for(b=this.rules[0].rules,a=0;a<b.length;a++)b[a].markReferenced&&b[a].markReferenced()}}}(c("../tree")),function(a){a.Element=function(b,c,d,e){this.combinator=b instanceof a.Combinator?b:new a.Combinator(b),this.value="string"==typeof c?c.trim():c?c:"",this.index=d,this.currentFileInfo=e},a.Element.prototype={type:"Element",accept:function(a){var b=this.value;this.combinator=a.visit(this.combinator),"object"==typeof b&&(this.value=a.visit(b))},eval:function(b){return new a.Element(this.combinator,this.value.eval?this.value.eval(b):this.value,this.index,this.currentFileInfo)},genCSS:function(a,b){b.add(this.toCSS(a),this.currentFileInfo,this.index)},toCSS:function(a){var b=this.value.toCSS?this.value.toCSS(a):this.value;return""===b&&"&"===this.combinator.value.charAt(0)?"":this.combinator.toCSS(a||{})+b}},a.Attribute=function(a,b,c){this.key=a,this.op=b,this.value=c},a.Attribute.prototype={type:"Attribute",eval:function(b){return new a.Attribute(this.key.eval?this.key.eval(b):this.key,this.op,this.value&&this.value.eval?this.value.eval(b):this.value)},genCSS:function(a,b){b.add(this.toCSS(a))},toCSS:function(a){var b=this.key.toCSS?this.key.toCSS(a):this.key;return this.op&&(b+=this.op,b+=this.value.toCSS?this.value.toCSS(a):this.value),"["+b+"]"}},a.Combinator=function(a){this.value=" "===a?" ":a?a.trim():""},a.Combinator.prototype={type:"Combinator",_outputMap:{"":""," ":" ",":":" :","+":" + ","~":" ~ ",">":" > ","|":"|"},_outputMapCompressed:{"":""," ":" ",":":" :","+":"+","~":"~",">":">","|":"|"},genCSS:function(a,b){b.add((a.compress?this._outputMapCompressed:this._outputMap)[this.value])},toCSS:a.toCSS}}(c("../tree")),function(a){a.Expression=function(a){this.value=a},a.Expression.prototype={type:"Expression",accept:function(a){this.value&&(this.value=a.visitArray(this.value))},eval:function(b){var c,d=this.parens&&!this.parensInOp,e=!1;return d&&b.inParenthesis(),this.value.length>1?c=new a.Expression(this.value.map(function(a){return a.eval(b)})):1===this.value.length?(this.value[0].parens&&!this.value[0].parensInOp&&(e=!0),c=this.value[0].eval(b)):c=this,d&&b.outOfParenthesis(),this.parens&&this.parensInOp&&!b.isMathOn()&&!e&&(c=new a.Paren(c)),c},genCSS:function(a,b){for(var c=0;c<this.value.length;c++)this.value[c].genCSS(a,b),c+1<this.value.length&&b.add(" ")},toCSS:a.toCSS,throwAwayComments:function(){this.value=this.value.filter(function(b){return!(b instanceof a.Comment)})}}}(c("../tree")),function(a){a.Extend=function(b,c,d){switch(this.selector=b,this.option=c,this.index=d,this.object_id=a.Extend.next_id++,this.parent_ids=[this.object_id],c){case"all":this.allowBefore=!0,this.allowAfter=!0;break;default:this.allowBefore=!1,this.allowAfter=!1}},a.Extend.next_id=0,a.Extend.prototype={type:"Extend",accept:function(a){this.selector=a.visit(this.selector)},eval:function(b){return new a.Extend(this.selector.eval(b),this.option,this.index)},clone:function(){return new a.Extend(this.selector,this.option,this.index)},findSelfSelectors:function(a){var b,c,d=[];for(b=0;b<a.length;b++)c=a[b].elements,b>0&&c.length&&""===c[0].combinator.value&&(c[0].combinator.value=" "),d=d.concat(a[b].elements);this.selfSelectors=[{elements:d}]}}}(c("../tree")),function(a){a.Import=function(a,c,d,e,f){if(this.options=d,this.index=e,this.path=a,this.features=c,this.currentFileInfo=f,this.options.less!==b||this.options.inline)this.css=!this.options.less||this.options.inline;else{var g=this.getPath();g&&/css([\?;].*)?$/.test(g)&&(this.css=!0)}},a.Import.prototype={type:"Import",accept:function(a){this.features&&(this.features=a.visit(this.features)),this.path=a.visit(this.path),!this.options.inline&&this.root&&(this.root=a.visit(this.root))},genCSS:function(a,b){this.css&&(b.add("@import ",this.currentFileInfo,this.index),this.path.genCSS(a,b),this.features&&(b.add(" "),this.features.genCSS(a,b)),b.add(";"))},toCSS:a.toCSS,getPath:function(){if(this.path instanceof a.Quoted){var c=this.path.value;return this.css!==b||/(\.[a-z]*$)|([\?;].*)$/.test(c)?c:c+".less"}return this.path instanceof a.URL?this.path.value.value:null},evalForImport:function(b){return new a.Import(this.path.eval(b),this.features,this.options,this.index,this.currentFileInfo)},evalPath:function(b){var c=this.path.eval(b),d=this.currentFileInfo&&this.currentFileInfo.rootpath;if(!(c instanceof a.URL)){if(d){var e=c.value;e&&b.isPathRelative(e)&&(c.value=d+e)}c.value=b.normalizePath(c.value)}return c},eval:function(b){var c,d=this.features&&this.features.eval(b);if(this.skip)return[];if(this.options.inline){var e=new a.Anonymous(this.root,0,{filename:this.importedFilename},!0);return this.features?new a.Media([e],this.features.value):[e]}if(this.css){var f=new a.Import(this.evalPath(b),d,this.options,this.index);if(!f.css&&this.error)throw this.error;return f}return c=new a.Ruleset(null,this.root.rules.slice(0)),c.evalImports(b),this.features?new a.Media(c.rules,this.features.value):c.rules}}}(c("../tree")),function(a){a.JavaScript=function(a,b,c){this.escaped=c,this.expression=a,this.index=b},a.JavaScript.prototype={type:"JavaScript",eval:function(b){var c,d=this,e={},f=this.expression.replace(/@\{([\w-]+)\}/g,function(c,e){return a.jsify(new a.Variable("@"+e,d.index).eval(b))});try{f=new Function("return ("+f+")")}catch(g){throw{message:"JavaScript evaluation error: "+g.message+" from `"+f+"`",index:this.index}}for(var h in b.frames[0].variables())e[h.slice(1)]={value:b.frames[0].variables()[h].value,toJS:function(){return this.value.eval(b).toCSS()}};try{c=f.call(e)}catch(g){throw{message:"JavaScript evaluation error: '"+g.name+": "+g.message+"'",index:this.index}}return"number"==typeof c?new a.Dimension(c):"string"==typeof c?new a.Quoted('"'+c+'"',c,this.escaped,this.index):Array.isArray(c)?new a.Anonymous(c.join(", ")):new a.Anonymous(c)}}}(c("../tree")),function(a){a.Keyword=function(a){this.value=a},a.Keyword.prototype={type:"Keyword",eval:function(){return this},genCSS:function(a,b){b.add(this.value)},toCSS:a.toCSS,compare:function(b){return b instanceof a.Keyword?b.value===this.value?0:1:-1}},a.True=new a.Keyword("true"),a.False=new a.Keyword("false")}(c("../tree")),function(a){a.Media=function(b,c,d,e){this.index=d,this.currentFileInfo=e;var f=this.emptySelectors();this.features=new a.Value(c),this.rules=[new a.Ruleset(f,b)],this.rules[0].allowImports=!0},a.Media.prototype={type:"Media",accept:function(a){this.features&&(this.features=a.visit(this.features)),this.rules&&(this.rules=a.visitArray(this.rules))},genCSS:function(b,c){c.add("@media ",this.currentFileInfo,this.index),this.features.genCSS(b,c),a.outputRuleset(b,c,this.rules)},toCSS:a.toCSS,eval:function(b){b.mediaBlocks||(b.mediaBlocks=[],b.mediaPath=[]);var c=new a.Media(null,[],this.index,this.currentFileInfo);this.debugInfo&&(this.rules[0].debugInfo=this.debugInfo,c.debugInfo=this.debugInfo);var d=!1;b.strictMath||(d=!0,b.strictMath=!0);try{c.features=this.features.eval(b)}finally{d&&(b.strictMath=!1)}return b.mediaPath.push(c),b.mediaBlocks.push(c),b.frames.unshift(this.rules[0]),c.rules=[this.rules[0].eval(b)],b.frames.shift(),b.mediaPath.pop(),0===b.mediaPath.length?c.evalTop(b):c.evalNested(b)},variable:function(b){return a.Ruleset.prototype.variable.call(this.rules[0],b)},find:function(){return a.Ruleset.prototype.find.apply(this.rules[0],arguments)},rulesets:function(){return a.Ruleset.prototype.rulesets.apply(this.rules[0])},emptySelectors:function(){var b=new a.Element("","&",this.index,this.currentFileInfo);return[new a.Selector([b],null,null,this.index,this.currentFileInfo)]},markReferenced:function(){var a,b=this.rules[0].rules;for(this.isReferenced=!0,a=0;a<b.length;a++)b[a].markReferenced&&b[a].markReferenced()},evalTop:function(b){var c=this;if(b.mediaBlocks.length>1){var d=this.emptySelectors();c=new a.Ruleset(d,b.mediaBlocks),c.multiMedia=!0}return delete b.mediaBlocks,delete b.mediaPath,c},evalNested:function(b){var c,d,e=b.mediaPath.concat([this]);for(c=0;c<e.length;c++)d=e[c].features instanceof a.Value?e[c].features.value:e[c].features,e[c]=Array.isArray(d)?d:[d];return this.features=new a.Value(this.permute(e).map(function(b){for(b=b.map(function(b){return b.toCSS?b:new a.Anonymous(b)}),c=b.length-1;c>0;c--)b.splice(c,0,new a.Anonymous("and"));return new a.Expression(b)})),new a.Ruleset([],[])},permute:function(a){if(0===a.length)return[];if(1===a.length)return a[0];for(var b=[],c=this.permute(a.slice(1)),d=0;d<c.length;d++)for(var e=0;e<a[0].length;e++)b.push([a[0][e]].concat(c[d]));return b},bubbleSelectors:function(b){this.rules=[new a.Ruleset(b.slice(0),[this.rules[0]])]}}}(c("../tree")),function(a){a.mixin={},a.mixin.Call=function(b,c,d,e,f){this.selector=new a.Selector(b),this.arguments=c&&c.length?c:null,this.index=d,this.currentFileInfo=e,this.important=f},a.mixin.Call.prototype={type:"MixinCall",accept:function(a){this.selector&&(this.selector=a.visit(this.selector)),this.arguments&&(this.arguments=a.visitArray(this.arguments))},eval:function(b){var c,d,e,f,g,h,i,j,k,l,m=[],n=!1,o=[],p=[],q=a.defaultFunc,r=!1;for(e=this.arguments&&this.arguments.map(function(a){return{name:a.name,value:a.value.eval(b)}}),f=0;f<b.frames.length;f++)if((c=b.frames[f].find(this.selector)).length>0){for(j=!0,g=0;g<c.length;g++){for(d=c[g],i=!1,h=0;h<b.frames.length;h++)if(!(d instanceof a.mixin.Definition)&&d===(b.frames[h].originalRuleset||b.frames[h])){i=!0;break}if(!i&&d.matchArgs(e,b)){if(l={mixin:d},d.matchCondition){for(h=0;2>h;h++)q.value(h),p[h]=d.matchCondition(e,b);if(p[0]||p[1]){if(p[0]!=p[1]){if(r)throw{type:"Runtime",message:"Ambiguous use of `default()` found when matching for `"+this.format(e)+"`",index:this.index,filename:this.currentFileInfo.filename};r=!0,l.matchIfDefault=!0,l.matchIfDefaultValue=p[1]}o.push(l)}}else o.push(l);n=!0}}q.reset();for(g in o)if(l=o[g],!l.matchIfDefault||l.matchIfDefaultValue==(1==o.length))try{d=l.mixin,d instanceof a.mixin.Definition||(d=new a.mixin.Definition("",[],d.rules,null,!1),d.originalRuleset=c[g].originalRuleset||c[g]),Array.prototype.push.apply(m,d.eval(b,e,this.important).rules)}catch(s){throw{message:s.message,index:this.index,filename:this.currentFileInfo.filename,stack:s.stack}}if(n){if(!this.currentFileInfo||!this.currentFileInfo.reference)for(f=0;f<m.length;f++)k=m[f],k.markReferenced&&k.markReferenced();return m}}throw j?{type:"Runtime",message:"No matching definition was found for `"+this.format(e)+"`",index:this.index,filename:this.currentFileInfo.filename}:{type:"Name",message:this.selector.toCSS().trim()+" is undefined",index:this.index,filename:this.currentFileInfo.filename}},format:function(a){return this.selector.toCSS().trim()+"("+(a?a.map(function(a){var b="";return a.name&&(b+=a.name+":"),b+=a.value.toCSS?a.value.toCSS():"???"}).join(", "):"")+")"}},a.mixin.Definition=function(b,c,d,e,f){this.name=b,this.selectors=[new a.Selector([new a.Element(null,b,this.index,this.currentFileInfo)])],this.params=c,this.condition=e,this.variadic=f,this.arity=c.length,this.rules=d,this._lookups={},this.required=c.reduce(function(a,b){return!b.name||b.name&&!b.value?a+1:a},0),this.parent=a.Ruleset.prototype,this.frames=[]},a.mixin.Definition.prototype={type:"MixinDefinition",accept:function(a){this.params&&this.params.length&&(this.params=a.visitArray(this.params)),this.rules=a.visitArray(this.rules),this.condition&&(this.condition=a.visit(this.condition))},variable:function(a){return this.parent.variable.call(this,a)},variables:function(){return this.parent.variables.call(this)},find:function(){return this.parent.find.apply(this,arguments)},rulesets:function(){return this.parent.rulesets.apply(this)
},evalParams:function(b,c,d,e){var f,g,h,i,j,k,l,m,n=new a.Ruleset(null,null),o=this.params.slice(0);if(c=new a.evalEnv(c,[n].concat(c.frames)),d)for(d=d.slice(0),h=0;h<d.length;h++)if(g=d[h],k=g&&g.name){for(l=!1,i=0;i<o.length;i++)if(!e[i]&&k===o[i].name){e[i]=g.value.eval(b),n.prependRule(new a.Rule(k,g.value.eval(b))),l=!0;break}if(l){d.splice(h,1),h--;continue}throw{type:"Runtime",message:"Named argument for "+this.name+" "+d[h].name+" not found"}}for(m=0,h=0;h<o.length;h++)if(!e[h]){if(g=d&&d[m],k=o[h].name)if(o[h].variadic&&d){for(f=[],i=m;i<d.length;i++)f.push(d[i].value.eval(b));n.prependRule(new a.Rule(k,new a.Expression(f).eval(b)))}else{if(j=g&&g.value)j=j.eval(b);else{if(!o[h].value)throw{type:"Runtime",message:"wrong number of arguments for "+this.name+" ("+d.length+" for "+this.arity+")"};j=o[h].value.eval(c),n.resetCache()}n.prependRule(new a.Rule(k,j)),e[h]=j}if(o[h].variadic&&d)for(i=m;i<d.length;i++)e[i]=d[i].value.eval(b);m++}return n},eval:function(b,c,d){var e,f,g=[],h=this.frames.concat(b.frames),i=this.evalParams(b,new a.evalEnv(b,h),c,g);return i.prependRule(new a.Rule("@arguments",new a.Expression(g).eval(b))),e=this.rules.slice(0),f=new a.Ruleset(null,e),f.originalRuleset=this,f=f.eval(new a.evalEnv(b,[this,i].concat(h))),d&&(f=this.parent.makeImportant.apply(f)),f},matchCondition:function(b,c){return this.condition&&!this.condition.eval(new a.evalEnv(c,[this.evalParams(c,new a.evalEnv(c,this.frames.concat(c.frames)),b,[])].concat(this.frames).concat(c.frames)))?!1:!0},matchArgs:function(a,b){var c,d=a&&a.length||0;if(this.variadic){if(d<this.required-1)return!1}else{if(d<this.required)return!1;if(d>this.params.length)return!1}c=Math.min(d,this.arity);for(var e=0;c>e;e++)if(!this.params[e].name&&!this.params[e].variadic&&a[e].value.eval(b).toCSS()!=this.params[e].value.eval(b).toCSS())return!1;return!0}}}(c("../tree")),function(a){a.Negative=function(a){this.value=a},a.Negative.prototype={type:"Negative",accept:function(a){this.value=a.visit(this.value)},genCSS:function(a,b){b.add("-"),this.value.genCSS(a,b)},toCSS:a.toCSS,eval:function(b){return b.isMathOn()?new a.Operation("*",[new a.Dimension(-1),this.value]).eval(b):new a.Negative(this.value.eval(b))}}}(c("../tree")),function(a){a.Operation=function(a,b,c){this.op=a.trim(),this.operands=b,this.isSpaced=c},a.Operation.prototype={type:"Operation",accept:function(a){this.operands=a.visit(this.operands)},eval:function(b){var c=this.operands[0].eval(b),d=this.operands[1].eval(b);if(b.isMathOn()){if(c instanceof a.Dimension&&d instanceof a.Color&&(c=c.toColor()),d instanceof a.Dimension&&c instanceof a.Color&&(d=d.toColor()),!c.operate)throw{type:"Operation",message:"Operation on an invalid type"};return c.operate(b,this.op,d)}return new a.Operation(this.op,[c,d],this.isSpaced)},genCSS:function(a,b){this.operands[0].genCSS(a,b),this.isSpaced&&b.add(" "),b.add(this.op),this.isSpaced&&b.add(" "),this.operands[1].genCSS(a,b)},toCSS:a.toCSS},a.operate=function(a,b,c,d){switch(b){case"+":return c+d;case"-":return c-d;case"*":return c*d;case"/":return c/d}}}(c("../tree")),function(a){a.Paren=function(a){this.value=a},a.Paren.prototype={type:"Paren",accept:function(a){this.value=a.visit(this.value)},genCSS:function(a,b){b.add("("),this.value.genCSS(a,b),b.add(")")},toCSS:a.toCSS,eval:function(b){return new a.Paren(this.value.eval(b))}}}(c("../tree")),function(a){a.Quoted=function(a,b,c,d,e){this.escaped=c,this.value=b||"",this.quote=a.charAt(0),this.index=d,this.currentFileInfo=e},a.Quoted.prototype={type:"Quoted",genCSS:function(a,b){this.escaped||b.add(this.quote,this.currentFileInfo,this.index),b.add(this.value),this.escaped||b.add(this.quote)},toCSS:a.toCSS,eval:function(b){var c=this,d=this.value.replace(/`([^`]+)`/g,function(d,e){return new a.JavaScript(e,c.index,!0).eval(b).value}).replace(/@\{([\w-]+)\}/g,function(d,e){var f=new a.Variable("@"+e,c.index,c.currentFileInfo).eval(b,!0);return f instanceof a.Quoted?f.value:f.toCSS()});return new a.Quoted(this.quote+d+this.quote,d,this.escaped,this.index,this.currentFileInfo)},compare:function(a){if(!a.toCSS)return-1;var b=this.toCSS(),c=a.toCSS();return b===c?0:c>b?-1:1}}}(c("../tree")),function(a){a.Rule=function(b,c,d,e,f,g,h){this.name=b,this.value=c instanceof a.Value?c:new a.Value([c]),this.important=d?" "+d.trim():"",this.merge=e,this.index=f,this.currentFileInfo=g,this.inline=h||!1,this.variable=b.charAt&&"@"===b.charAt(0)},a.Rule.prototype={type:"Rule",accept:function(a){this.value=a.visit(this.value)},genCSS:function(a,b){b.add(this.name+(a.compress?":":": "),this.currentFileInfo,this.index);try{this.value.genCSS(a,b)}catch(c){throw c.index=this.index,c.filename=this.currentFileInfo.filename,c}b.add(this.important+(this.inline||a.lastRule&&a.compress?"":";"),this.currentFileInfo,this.index)},toCSS:a.toCSS,eval:function(c){var d=!1,e=this.name.map?this.name.map(function(a){return a.eval?a.eval(c).value:a}).join(""):this.name;"font"!==e||c.strictMath||(d=!0,c.strictMath=!0);try{return new a.Rule(e,this.value.eval(c),this.important,this.merge,this.index,this.currentFileInfo,this.inline)}catch(f){throw f.index===b&&(f.index=this.index),f}finally{d&&(c.strictMath=!1)}},makeImportant:function(){return new a.Rule(this.name,this.value,"!important",this.merge,this.index,this.currentFileInfo,this.inline)}}}(c("../tree")),function(a){a.Ruleset=function(a,b,c){this.selectors=a,this.rules=b,this._lookups={},this.strictImports=c},a.Ruleset.prototype={type:"Ruleset",accept:function(a){this.paths?a.visitArray(this.paths,!0):this.selectors&&(this.selectors=a.visitArray(this.selectors)),this.rules&&this.rules.length&&(this.rules=a.visitArray(this.rules))},eval:function(b){var c,d,e,f=this.selectors,g=a.defaultFunc;if(f&&(d=f.length)){for(c=[],g.error({type:"Syntax",message:"it is currently only allowed in parametric mixin guards,"}),e=0;d>e;e++)c.push(f[e].eval(b));g.reset()}var h,i=this.rules?this.rules.slice(0):null,j=new a.Ruleset(c,i,this.strictImports);j.originalRuleset=this,j.root=this.root,j.firstRoot=this.firstRoot,j.allowImports=this.allowImports,this.debugInfo&&(j.debugInfo=this.debugInfo);var k=b.frames;k.unshift(j);var l=b.selectors;l||(b.selectors=l=[]),l.unshift(this.selectors),(j.root||j.allowImports||!j.strictImports)&&j.evalImports(b);var m=j.rules,n=m?m.length:0;for(e=0;n>e;e++)m[e]instanceof a.mixin.Definition&&(m[e].frames=k.slice(0));var o=b.mediaBlocks&&b.mediaBlocks.length||0;for(e=0;n>e;e++)m[e]instanceof a.mixin.Call&&(i=m[e].eval(b).filter(function(b){return b instanceof a.Rule&&b.variable?!j.variable(b.name):!0}),m.splice.apply(m,[e,1].concat(i)),n+=i.length-1,e+=i.length-1,j.resetCache());for(e=0;n>e;e++)h=m[e],h instanceof a.mixin.Definition||(m[e]=h.eval?h.eval(b):h);if(k.shift(),l.shift(),b.mediaBlocks)for(e=o;e<b.mediaBlocks.length;e++)b.mediaBlocks[e].bubbleSelectors(c);return j},evalImports:function(b){var c,d,e=this.rules;if(e)for(c=0;c<e.length;c++)e[c]instanceof a.Import&&(d=e[c].eval(b),d&&d.length?(e.splice.apply(e,[c,1].concat(d)),c+=d.length-1):e.splice(c,1,d),this.resetCache())},makeImportant:function(){return new a.Ruleset(this.selectors,this.rules.map(function(a){return a.makeImportant?a.makeImportant():a}),this.strictImports)},matchArgs:function(a){return!a||0===a.length},matchCondition:function(b,c){var d=this.selectors[this.selectors.length-1];return d.condition&&!d.condition.eval(new a.evalEnv(c,c.frames))?!1:!0},resetCache:function(){this._rulesets=null,this._variables=null,this._lookups={}},variables:function(){return this._variables||(this._variables=this.rules?this.rules.reduce(function(b,c){return c instanceof a.Rule&&c.variable===!0&&(b[c.name]=c),b},{}):{}),this._variables},variable:function(a){return this.variables()[a]},rulesets:function(){if(!this.rules)return null;var b,c,d=a.Ruleset,e=a.mixin.Definition,f=[],g=this.rules,h=g.length;for(b=0;h>b;b++)c=g[b],(c instanceof d||c instanceof e)&&f.push(c);return f},prependRule:function(a){var b=this.rules;b?b.unshift(a):this.rules=[a]},find:function(b,c){c=c||this;var d,e=[],f=b.toCSS();return f in this._lookups?this._lookups[f]:(this.rulesets().forEach(function(f){if(f!==c)for(var g=0;g<f.selectors.length;g++)if(d=b.match(f.selectors[g])){b.elements.length>d?Array.prototype.push.apply(e,f.find(new a.Selector(b.elements.slice(d)),c)):e.push(f);break}}),this._lookups[f]=e,e)},genCSS:function(b,c){var d,e,f,g,h,i,j=[],k=[];b.tabLevel=b.tabLevel||0,this.root||b.tabLevel++;var l,m=b.compress?"":Array(b.tabLevel+1).join("  "),n=b.compress?"":Array(b.tabLevel).join("  ");for(d=0;d<this.rules.length;d++)h=this.rules[d],h.rules||h instanceof a.Media||h instanceof a.Directive||this.root&&h instanceof a.Comment?k.push(h):j.push(h);if(!this.root){g=a.debugInfo(b,this,n),g&&(c.add(g),c.add(n));var o,p=this.paths,q=p.length;for(l=b.compress?",":",\n"+n,d=0;q>d;d++)if(i=p[d],o=i.length)for(d>0&&c.add(l),b.firstSelector=!0,i[0].genCSS(b,c),b.firstSelector=!1,e=1;o>e;e++)i[e].genCSS(b,c);c.add((b.compress?"{":" {\n")+m)}for(d=0;d<j.length;d++)h=j[d],d+1!==j.length||this.root&&0!==k.length&&!this.firstRoot||(b.lastRule=!0),h.genCSS?h.genCSS(b,c):h.value&&c.add(h.value.toString()),b.lastRule?b.lastRule=!1:c.add(b.compress?"":"\n"+m);if(this.root||(c.add(b.compress?"}":"\n"+n+"}"),b.tabLevel--),l=(b.compress?"":"\n")+(this.root?m:n),f=k.length)for(j.length&&l&&c.add(l),k[0].genCSS(b,c),d=1;f>d;d++)l&&c.add(l),k[d].genCSS(b,c);c.isEmpty()||b.compress||!this.firstRoot||c.add("\n")},toCSS:a.toCSS,markReferenced:function(){for(var a=0;a<this.selectors.length;a++)this.selectors[a].markReferenced()},joinSelectors:function(a,b,c){for(var d=0;d<c.length;d++)this.joinSelector(a,b,c[d])},joinSelector:function(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;for(e=0;e<d.elements.length;e++)j=d.elements[e],"&"===j.value&&(h=!0);if(h){for(r=[],i=[[]],e=0;e<d.elements.length;e++)if(j=d.elements[e],"&"!==j.value)r.push(j);else{for(s=[],r.length>0&&this.mergeElementsOnToSelectors(r,i),f=0;f<i.length;f++)if(k=i[f],0===c.length)k.length>0&&(k[0].elements=k[0].elements.slice(0),k[0].elements.push(new a.Element(j.combinator,"",0,j.index,j.currentFileInfo))),s.push(k);else for(g=0;g<c.length;g++)l=c[g],m=[],n=[],p=!0,k.length>0?(m=k.slice(0),q=m.pop(),o=d.createDerived(q.elements.slice(0)),p=!1):o=d.createDerived([]),l.length>1&&(n=n.concat(l.slice(1))),l.length>0&&(p=!1,o.elements.push(new a.Element(j.combinator,l[0].elements[0].value,j.index,j.currentFileInfo)),o.elements=o.elements.concat(l[0].elements.slice(1))),p||m.push(o),m=m.concat(n),s.push(m);i=s,r=[]}for(r.length>0&&this.mergeElementsOnToSelectors(r,i),e=0;e<i.length;e++)i[e].length>0&&b.push(i[e])}else if(c.length>0)for(e=0;e<c.length;e++)b.push(c[e].concat(d));else b.push([d])},mergeElementsOnToSelectors:function(b,c){var d,e;if(0===c.length)return c.push([new a.Selector(b)]),void 0;for(d=0;d<c.length;d++)e=c[d],e.length>0?e[e.length-1]=e[e.length-1].createDerived(e[e.length-1].elements.concat(b)):e.push(new a.Selector(b))}}}(c("../tree")),function(a){a.Selector=function(a,b,c,d,e,f){this.elements=a,this.extendList=b,this.condition=c,this.currentFileInfo=e||{},this.isReferenced=f,c||(this.evaldCondition=!0)},a.Selector.prototype={type:"Selector",accept:function(a){this.elements&&(this.elements=a.visitArray(this.elements)),this.extendList&&(this.extendList=a.visitArray(this.extendList)),this.condition&&(this.condition=a.visit(this.condition))},createDerived:function(b,c,d){d=null!=d?d:this.evaldCondition;var e=new a.Selector(b,c||this.extendList,this.condition,this.index,this.currentFileInfo,this.isReferenced);return e.evaldCondition=d,e},match:function(a){var b,c,d,e=this.elements,f=e.length;if(b=a.elements.map(function(a){return a.combinator.value+(a.value.value||a.value)}).join("").match(/[,&#\.\w-]([\w-]|(\\.))*/g),!b)return 0;if("&"===b[0]&&b.shift(),c=b.length,0===c||c>f)return 0;for(d=0;c>d;d++)if(e[d].value!==b[d])return 0;return c},eval:function(a){var b=this.condition&&this.condition.eval(a),c=this.elements,d=this.extendList;return c=c&&c.map(function(b){return b.eval(a)}),d=d&&d.map(function(b){return b.eval(a)}),this.createDerived(c,d,b)},genCSS:function(a,b){var c,d;if(a&&a.firstSelector||""!==this.elements[0].combinator.value||b.add(" ",this.currentFileInfo,this.index),!this._css)for(c=0;c<this.elements.length;c++)d=this.elements[c],d.genCSS(a,b)},toCSS:a.toCSS,markReferenced:function(){this.isReferenced=!0},getIsReferenced:function(){return!this.currentFileInfo.reference||this.isReferenced},getIsOutput:function(){return this.evaldCondition}}}(c("../tree")),function(a){a.UnicodeDescriptor=function(a){this.value=a},a.UnicodeDescriptor.prototype={type:"UnicodeDescriptor",genCSS:function(a,b){b.add(this.value)},toCSS:a.toCSS,eval:function(){return this}}}(c("../tree")),function(a){a.URL=function(a,b,c){this.value=a,this.currentFileInfo=b,this.isEvald=c},a.URL.prototype={type:"Url",accept:function(a){this.value=a.visit(this.value)},genCSS:function(a,b){b.add("url("),this.value.genCSS(a,b),b.add(")")},toCSS:a.toCSS,eval:function(b){var c,d=this.value.eval(b);return this.isEvald||(c=this.currentFileInfo&&this.currentFileInfo.rootpath,c&&"string"==typeof d.value&&b.isPathRelative(d.value)&&(d.quote||(c=c.replace(/[\(\)'"\s]/g,function(a){return"\\"+a})),d.value=c+d.value),d.value=b.normalizePath(d.value)),new a.URL(d,this.currentFileInfo,!0)}}}(c("../tree")),function(a){a.Value=function(a){this.value=a},a.Value.prototype={type:"Value",accept:function(a){this.value&&(this.value=a.visitArray(this.value))},eval:function(b){return 1===this.value.length?this.value[0].eval(b):new a.Value(this.value.map(function(a){return a.eval(b)}))},genCSS:function(a,b){var c;for(c=0;c<this.value.length;c++)this.value[c].genCSS(a,b),c+1<this.value.length&&b.add(a&&a.compress?",":", ")},toCSS:a.toCSS}}(c("../tree")),function(a){a.Variable=function(a,b,c){this.name=a,this.index=b,this.currentFileInfo=c||{}},a.Variable.prototype={type:"Variable",eval:function(b){var c,d=this.name;if(0===d.indexOf("@@")&&(d="@"+new a.Variable(d.slice(1)).eval(b).value),this.evaluating)throw{type:"Name",message:"Recursive variable definition for "+d,filename:this.currentFileInfo.file,index:this.index};if(this.evaluating=!0,c=a.find(b.frames,function(a){var c=a.variable(d);return c?c.value.eval(b):void 0}))return this.evaluating=!1,c;throw{type:"Name",message:"variable "+d+" is undefined",filename:this.currentFileInfo.filename,index:this.index}}}}(c("../tree")),function(a){var b=["paths","optimization","files","contents","contentsIgnoredChars","relativeUrls","rootpath","strictImports","insecure","dumpLineNumbers","compress","processImports","syncImport","javascriptEnabled","mime","useFileCache","currentFileInfo"];a.parseEnv=function(a){if(d(a,this,b),this.contents||(this.contents={}),this.contentsIgnoredChars||(this.contentsIgnoredChars={}),this.files||(this.files={}),!this.currentFileInfo){var c=a&&a.filename||"input",e=c.replace(/[^\/\\]*$/,"");a&&(a.filename=null),this.currentFileInfo={filename:c,relativeUrls:this.relativeUrls,rootpath:a&&a.rootpath||"",currentDirectory:e,entryPath:e,rootFilename:c}}};var c=["silent","verbose","compress","yuicompress","ieCompat","strictMath","strictUnits","cleancss","sourceMap","importMultiple"];a.evalEnv=function(a,b){d(a,this,c),this.frames=b||[]},a.evalEnv.prototype.inParenthesis=function(){this.parensStack||(this.parensStack=[]),this.parensStack.push(!0)},a.evalEnv.prototype.outOfParenthesis=function(){this.parensStack.pop()},a.evalEnv.prototype.isMathOn=function(){return this.strictMath?this.parensStack&&this.parensStack.length:!0},a.evalEnv.prototype.isPathRelative=function(a){return!/^(?:[a-z-]+:|\/)/.test(a)},a.evalEnv.prototype.normalizePath=function(a){var b,c=a.split("/").reverse();for(a=[];0!==c.length;)switch(b=c.pop()){case".":break;case"..":0===a.length||".."===a[a.length-1]?a.push(b):a.pop();break;default:a.push(b)}return a.join("/")};var d=function(a,b,c){if(a)for(var d=0;d<c.length;d++)a.hasOwnProperty(c[d])&&(b[c[d]]=a[c[d]])}}(c("./tree")),function(a){function b(a){return a}function c(a,b){var d,e;for(d in a)switch(e=a[d],typeof e){case"function":e.prototype&&e.prototype.type&&(e.prototype.typeIndex=b++);break;case"object":b=c(e,b)}return b}var d={visitDeeper:!0},e=!1;a.visitor=function(b){this._implementation=b,this._visitFnCache=[],e||(c(a,1),e=!0)},a.visitor.prototype={visit:function(a){if(!a)return a;var c=a.typeIndex;if(!c)return a;var e,f=this._visitFnCache,g=this._implementation,h=c<<1,i=1|h,j=f[h],k=f[i],l=d;if(l.visitDeeper=!0,j||(e="visit"+a.type,j=g[e]||b,k=g[e+"Out"]||b,f[h]=j,f[i]=k),j!==b){var m=j.call(g,a,l);g.isReplacing&&(a=m)}return l.visitDeeper&&a&&a.accept&&a.accept(this),k!=b&&k.call(g,a),a},visitArray:function(a,b){if(!a)return a;var c,d=a.length;if(b||!this._implementation.isReplacing){for(c=0;d>c;c++)this.visit(a[c]);return a}var e=[];for(c=0;d>c;c++){var f=this.visit(a[c]);f.splice?f.length&&this.flatten(f,e):e.push(f)}return e},flatten:function(a,b){b||(b=[]);var c,d,e,f,g,h;for(d=0,c=a.length;c>d;d++)if(e=a[d],e.splice)for(g=0,f=e.length;f>g;g++)h=e[g],h.splice?h.length&&this.flatten(h,b):b.push(h);else b.push(e);return b}}}(c("./tree")),function(a){a.importVisitor=function(b,c,d){this._visitor=new a.visitor(this),this._importer=b,this._finish=c,this.env=d||new a.evalEnv,this.importCount=0},a.importVisitor.prototype={isReplacing:!0,run:function(a){var b;try{this._visitor.visit(a)}catch(c){b=c}this.isFinished=!0,0===this.importCount&&this._finish(b)},visitImport:function(b,c){var d,e=this,f=b.options.inline;if(!b.css||f){try{d=b.evalForImport(this.env)}catch(g){g.filename||(g.index=b.index,g.filename=b.currentFileInfo.filename),b.css=!0,b.error=g}if(d&&(!d.css||f)){b=d,this.importCount++;var h=new a.evalEnv(this.env,this.env.frames.slice(0));b.options.multiple&&(h.importMultiple=!0),this._importer.push(b.getPath(),b.currentFileInfo,b.options,function(c,d,g,i){c&&!c.filename&&(c.index=b.index,c.filename=b.currentFileInfo.filename),g&&!h.importMultiple&&(b.skip=g);var j=function(a){e.importCount--,0===e.importCount&&e.isFinished&&e._finish(a)};return!d||(b.root=d,b.importedFilename=i,f||b.skip)?(j(),void 0):(new a.importVisitor(e._importer,j,h).run(d),void 0)})}}return c.visitDeeper=!1,b},visitRule:function(a,b){return b.visitDeeper=!1,a},visitDirective:function(a){return this.env.frames.unshift(a),a},visitDirectiveOut:function(){this.env.frames.shift()},visitMixinDefinition:function(a){return this.env.frames.unshift(a),a},visitMixinDefinitionOut:function(){this.env.frames.shift()},visitRuleset:function(a){return this.env.frames.unshift(a),a},visitRulesetOut:function(){this.env.frames.shift()},visitMedia:function(a){return this.env.frames.unshift(a.ruleset),a},visitMediaOut:function(){this.env.frames.shift()}}}(c("./tree")),function(a){a.joinSelectorVisitor=function(){this.contexts=[[]],this._visitor=new a.visitor(this)},a.joinSelectorVisitor.prototype={run:function(a){return this._visitor.visit(a)},visitRule:function(a,b){b.visitDeeper=!1},visitMixinDefinition:function(a,b){b.visitDeeper=!1},visitRuleset:function(a){var b,c=this.contexts[this.contexts.length-1],d=[];this.contexts.push(d),a.root||(b=a.selectors,b&&(b=b.filter(function(a){return a.getIsOutput()}),a.selectors=b.length?b:b=null,b&&a.joinSelectors(d,c,b)),b||(a.rules=null),a.paths=d)},visitRulesetOut:function(){this.contexts.length=this.contexts.length-1},visitMedia:function(a){var b=this.contexts[this.contexts.length-1];a.rules[0].root=0===b.length||b[0].multiMedia}}}(c("./tree")),function(a){a.toCSSVisitor=function(b){this._visitor=new a.visitor(this),this._env=b},a.toCSSVisitor.prototype={isReplacing:!0,run:function(a){return this._visitor.visit(a)},visitRule:function(a){return a.variable?[]:a},visitMixinDefinition:function(){return[]},visitExtend:function(){return[]},visitComment:function(a){return a.isSilent(this._env)?[]:a},visitMedia:function(a,b){return a.accept(this._visitor),b.visitDeeper=!1,a.rules.length?a:[]},visitDirective:function(b){if(b.currentFileInfo.reference&&!b.isReferenced)return[];if("@charset"===b.name){if(this.charset){if(b.debugInfo){var c=new a.Comment("/* "+b.toCSS(this._env).replace(/\n/g,"")+" */\n");return c.debugInfo=b.debugInfo,this._visitor.visit(c)}return[]}this.charset=!0}return b},checkPropertiesInRoot:function(b){for(var c,d=0;d<b.length;d++)if(c=b[d],c instanceof a.Rule&&!c.variable)throw{message:"properties must be inside selector blocks, they cannot be in the root.",index:c.index,filename:c.currentFileInfo?c.currentFileInfo.filename:null}},visitRuleset:function(b,c){var d,e=[];if(b.firstRoot&&this.checkPropertiesInRoot(b.rules),b.root)b.accept(this._visitor),c.visitDeeper=!1,(b.firstRoot||b.rules&&b.rules.length>0)&&e.splice(0,0,b);else{b.paths&&(b.paths=b.paths.filter(function(b){var c;for(" "===b[0].elements[0].combinator.value&&(b[0].elements[0].combinator=new a.Combinator("")),c=0;c<b.length;c++)if(b[c].getIsReferenced()&&b[c].getIsOutput())return!0;return!1}));for(var f=b.rules,g=f?f.length:0,h=0;g>h;)d=f[h],d&&d.rules?(e.push(this._visitor.visit(d)),f.splice(h,1),g--):h++;g>0?b.accept(this._visitor):b.rules=null,c.visitDeeper=!1,f=b.rules,f&&(this._mergeRules(f),f=b.rules),f&&(this._removeDuplicateRules(f),f=b.rules),f&&f.length>0&&b.paths.length>0&&e.splice(0,0,b)}return 1===e.length?e[0]:e},_removeDuplicateRules:function(b){if(b){var c,d,e,f={};for(e=b.length-1;e>=0;e--)if(d=b[e],d instanceof a.Rule)if(f[d.name]){c=f[d.name],c instanceof a.Rule&&(c=f[d.name]=[f[d.name].toCSS(this._env)]);var g=d.toCSS(this._env);-1!==c.indexOf(g)?b.splice(e,1):c.push(g)}else f[d.name]=d}},_mergeRules:function(b){if(b){for(var c,d,e,f={},g=0;g<b.length;g++)d=b[g],d instanceof a.Rule&&d.merge&&(e=[d.name,d.important?"!":""].join(","),f[e]?b.splice(g--,1):f[e]=[],f[e].push(d));Object.keys(f).map(function(b){c=f[b],c.length>1&&(d=c[0],d.value=new a.Value(c.map(function(a){return a.value})))})}}}}(c("./tree")),function(a){a.extendFinderVisitor=function(){this._visitor=new a.visitor(this),this.contexts=[],this.allExtendsStack=[[]]},a.extendFinderVisitor.prototype={run:function(a){return a=this._visitor.visit(a),a.allExtends=this.allExtendsStack[0],a},visitRule:function(a,b){b.visitDeeper=!1},visitMixinDefinition:function(a,b){b.visitDeeper=!1},visitRuleset:function(b){if(!b.root){var c,d,e,f,g=[],h=b.rules,i=h?h.length:0;for(c=0;i>c;c++)b.rules[c]instanceof a.Extend&&(g.push(h[c]),b.extendOnEveryPath=!0);var j=b.paths;for(c=0;c<j.length;c++){var k=j[c],l=k[k.length-1],m=l.extendList;for(f=m?m.slice(0).concat(g):g,f&&(f=f.map(function(a){return a.clone()})),d=0;d<f.length;d++)this.foundExtends=!0,e=f[d],e.findSelfSelectors(k),e.ruleset=b,0===d&&(e.firstExtendOnThisSelectorPath=!0),this.allExtendsStack[this.allExtendsStack.length-1].push(e)}this.contexts.push(b.selectors)}},visitRulesetOut:function(a){a.root||(this.contexts.length=this.contexts.length-1)},visitMedia:function(a){a.allExtends=[],this.allExtendsStack.push(a.allExtends)},visitMediaOut:function(){this.allExtendsStack.length=this.allExtendsStack.length-1},visitDirective:function(a){a.allExtends=[],this.allExtendsStack.push(a.allExtends)},visitDirectiveOut:function(){this.allExtendsStack.length=this.allExtendsStack.length-1}},a.processExtendsVisitor=function(){this._visitor=new a.visitor(this)},a.processExtendsVisitor.prototype={run:function(b){var c=new a.extendFinderVisitor;return c.run(b),c.foundExtends?(b.allExtends=b.allExtends.concat(this.doExtendChaining(b.allExtends,b.allExtends)),this.allExtendsStack=[b.allExtends],this._visitor.visit(b)):b},doExtendChaining:function(b,c,d){var e,f,g,h,i,j,k,l,m=[],n=this;for(d=d||0,e=0;e<b.length;e++)for(f=0;f<c.length;f++)j=b[e],k=c[f],j.parent_ids.indexOf(k.object_id)>=0||(i=[k.selfSelectors[0]],g=n.findMatch(j,i),g.length&&j.selfSelectors.forEach(function(b){h=n.extendSelector(g,i,b),l=new a.Extend(k.selector,k.option,0),l.selfSelectors=h,h[h.length-1].extendList=[l],m.push(l),l.ruleset=k.ruleset,l.parent_ids=l.parent_ids.concat(k.parent_ids,j.parent_ids),k.firstExtendOnThisSelectorPath&&(l.firstExtendOnThisSelectorPath=!0,k.ruleset.paths.push(h))}));if(m.length){if(this.extendChainCount++,d>100){var o="{unable to calculate}",p="{unable to calculate}";try{o=m[0].selfSelectors[0].toCSS(),p=m[0].selector.toCSS()}catch(q){}throw{message:"extend circular reference detected. One of the circular extends is currently:"+o+":extend("+p+")"}}return m.concat(n.doExtendChaining(m,c,d+1))}return m},visitRule:function(a,b){b.visitDeeper=!1},visitMixinDefinition:function(a,b){b.visitDeeper=!1},visitSelector:function(a,b){b.visitDeeper=!1},visitRuleset:function(a){if(!a.root){var b,c,d,e,f=this.allExtendsStack[this.allExtendsStack.length-1],g=[],h=this;for(d=0;d<f.length;d++)for(c=0;c<a.paths.length;c++)if(e=a.paths[c],!a.extendOnEveryPath){var i=e[e.length-1].extendList;i&&i.length||(b=this.findMatch(f[d],e),b.length&&f[d].selfSelectors.forEach(function(a){g.push(h.extendSelector(b,e,a))}))}a.paths=a.paths.concat(g)}},findMatch:function(a,b){var c,d,e,f,g,h,i,j=this,k=a.selector.elements,l=[],m=[];for(c=0;c<b.length;c++)for(d=b[c],e=0;e<d.elements.length;e++)for(f=d.elements[e],(a.allowBefore||0===c&&0===e)&&l.push({pathIndex:c,index:e,matched:0,initialCombinator:f.combinator}),h=0;h<l.length;h++)i=l[h],g=f.combinator.value,""===g&&0===e&&(g=" "),!j.isElementValuesEqual(k[i.matched].value,f.value)||i.matched>0&&k[i.matched].combinator.value!==g?i=null:i.matched++,i&&(i.finished=i.matched===k.length,i.finished&&!a.allowAfter&&(e+1<d.elements.length||c+1<b.length)&&(i=null)),i?i.finished&&(i.length=k.length,i.endPathIndex=c,i.endPathElementIndex=e+1,l.length=0,m.push(i)):(l.splice(h,1),h--);return m},isElementValuesEqual:function(b,c){if("string"==typeof b||"string"==typeof c)return b===c;if(b instanceof a.Attribute)return b.op!==c.op||b.key!==c.key?!1:b.value&&c.value?(b=b.value.value||b.value,c=c.value.value||c.value,b===c):b.value||c.value?!1:!0;if(b=b.value,c=c.value,b instanceof a.Selector){if(!(c instanceof a.Selector)||b.elements.length!==c.elements.length)return!1;for(var d=0;d<b.elements.length;d++){if(b.elements[d].combinator.value!==c.elements[d].combinator.value&&(0!==d||(b.elements[d].combinator.value||" ")!==(c.elements[d].combinator.value||" ")))return!1;if(!this.isElementValuesEqual(b.elements[d].value,c.elements[d].value))return!1}return!0}return!1},extendSelector:function(b,c,d){var e,f,g,h,i,j=0,k=0,l=[];for(e=0;e<b.length;e++)h=b[e],f=c[h.pathIndex],g=new a.Element(h.initialCombinator,d.elements[0].value,d.elements[0].index,d.elements[0].currentFileInfo),h.pathIndex>j&&k>0&&(l[l.length-1].elements=l[l.length-1].elements.concat(c[j].elements.slice(k)),k=0,j++),i=f.elements.slice(k,h.index).concat([g]).concat(d.elements.slice(1)),j===h.pathIndex&&e>0?l[l.length-1].elements=l[l.length-1].elements.concat(i):(l=l.concat(c.slice(j,h.pathIndex)),l.push(new a.Selector(i))),j=h.endPathIndex,k=h.endPathElementIndex,k>=c[j].elements.length&&(k=0,j++);return j<c.length&&k>0&&(l[l.length-1].elements=l[l.length-1].elements.concat(c[j].elements.slice(k)),j++),l=l.concat(c.slice(j,c.length))},visitRulesetOut:function(){},visitMedia:function(a){var b=a.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length-1]);b=b.concat(this.doExtendChaining(b,a.allExtends)),this.allExtendsStack.push(b)},visitMediaOut:function(){this.allExtendsStack.length=this.allExtendsStack.length-1},visitDirective:function(a){var b=a.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length-1]);b=b.concat(this.doExtendChaining(b,a.allExtends)),this.allExtendsStack.push(b)},visitDirectiveOut:function(){this.allExtendsStack.length=this.allExtendsStack.length-1}}}(c("./tree")),function(a){a.sourceMapOutput=function(a){this._css=[],this._rootNode=a.rootNode,this._writeSourceMap=a.writeSourceMap,this._contentsMap=a.contentsMap,this._contentsIgnoredCharsMap=a.contentsIgnoredCharsMap,this._sourceMapFilename=a.sourceMapFilename,this._outputFilename=a.outputFilename,this._sourceMapURL=a.sourceMapURL,a.sourceMapBasepath&&(this._sourceMapBasepath=a.sourceMapBasepath.replace(/\\/g,"/")),this._sourceMapRootpath=a.sourceMapRootpath,this._outputSourceFiles=a.outputSourceFiles,this._sourceMapGeneratorConstructor=a.sourceMapGenerator||c("source-map").SourceMapGenerator,this._sourceMapRootpath&&"/"!==this._sourceMapRootpath.charAt(this._sourceMapRootpath.length-1)&&(this._sourceMapRootpath+="/"),this._lineNumber=0,this._column=0},a.sourceMapOutput.prototype.normalizeFilename=function(a){return a=a.replace(/\\/g,"/"),this._sourceMapBasepath&&0===a.indexOf(this._sourceMapBasepath)&&(a=a.substring(this._sourceMapBasepath.length),("\\"===a.charAt(0)||"/"===a.charAt(0))&&(a=a.substring(1))),(this._sourceMapRootpath||"")+a},a.sourceMapOutput.prototype.add=function(a,b,c,d){if(a){var e,f,g,h,i;if(b){var j=this._contentsMap[b.filename];this._contentsIgnoredCharsMap[b.filename]&&(c-=this._contentsIgnoredCharsMap[b.filename],0>c&&(c=0),j=j.slice(this._contentsIgnoredCharsMap[b.filename])),j=j.substring(0,c),f=j.split("\n"),h=f[f.length-1]}if(e=a.split("\n"),g=e[e.length-1],b)if(d)for(i=0;i<e.length;i++)this._sourceMapGenerator.addMapping({generated:{line:this._lineNumber+i+1,column:0===i?this._column:0},original:{line:f.length+i,column:0===i?h.length:0},source:this.normalizeFilename(b.filename)});else this._sourceMapGenerator.addMapping({generated:{line:this._lineNumber+1,column:this._column},original:{line:f.length,column:h.length},source:this.normalizeFilename(b.filename)});1===e.length?this._column+=g.length:(this._lineNumber+=e.length-1,this._column=g.length),this._css.push(a)}},a.sourceMapOutput.prototype.isEmpty=function(){return 0===this._css.length},a.sourceMapOutput.prototype.toCSS=function(a){if(this._sourceMapGenerator=new this._sourceMapGeneratorConstructor({file:this._outputFilename,sourceRoot:null}),this._outputSourceFiles)for(var b in this._contentsMap){var c=this._contentsMap[b];this._contentsIgnoredCharsMap[b]&&(c=c.slice(this._contentsIgnoredCharsMap[b])),this._sourceMapGenerator.setSourceContent(this.normalizeFilename(b),c)}if(this._rootNode.genCSS(a,this),this._css.length>0){var d,e=JSON.stringify(this._sourceMapGenerator.toJSON());this._sourceMapURL?d=this._sourceMapURL:this._sourceMapFilename&&(d=this.normalizeFilename(this._sourceMapFilename)),this._writeSourceMap?this._writeSourceMap(e):d="data:application/json,"+encodeURIComponent(e),d&&this._css.push("/*# sourceMappingURL="+d+" */")}return this._css.join("")}}(c("./tree"));var x=/^(file|chrome(-extension)?|resource|qrc|app):/.test(location.protocol);v.env=v.env||("127.0.0.1"==location.hostname||"0.0.0.0"==location.hostname||"localhost"==location.hostname||location.port&&location.port.length>0||x?"development":"production");var y={info:2,errors:1,none:0};if(v.logLevel="undefined"!=typeof v.logLevel?v.logLevel:y.info,v.async=v.async||!1,v.fileAsync=v.fileAsync||!1,v.poll=v.poll||(x?1e3:1500),v.functions)for(var z in v.functions)v.tree.functions[z]=v.functions[z];var A=/!dumpLineNumbers:(comments|mediaquery|all)/.exec(location.hash);A&&(v.dumpLineNumbers=A[1]);var B=/^text\/(x-)?less$/,C=null,D={};if(v.watch=function(){return v.watchMode||(v.env="development",u()),this.watchMode=!0,!0},v.unwatch=function(){return clearInterval(v.watchTimer),this.watchMode=!1,!1},/!watch/.test(location.hash)&&v.watch(),"development"!=v.env)try{C="undefined"==typeof a.localStorage?null:a.localStorage}catch(E){}var F=document.getElementsByTagName("link");v.sheets=[];for(var G=0;G<F.length;G++)("stylesheet/less"===F[G].rel||F[G].rel.match(/stylesheet/)&&F[G].type.match(B))&&v.sheets.push(F[G]);v.modifyVars=function(a){v.refresh(!1,a)},v.refresh=function(a,b){var c,e;c=e=new Date,t(function(a,b,f,h,j){return a?i(a,h.href):(j.local?d("loading "+h.href+" from cache.",y.info):(d("parsed "+h.href+" successfully.",y.info),g(b.toCSS(v),h,j.lastModified)),d("css for "+h.href+" generated in "+(new Date-e)+"ms",y.info),0===j.remaining&&d("css generated in "+(new Date-c)+"ms",y.info),e=new Date,void 0)},a,b),m(b)},v.refreshStyles=m,v.Parser.fileLoader=r,v.refresh("development"===v.env),"function"==typeof define&&define.amd&&define(function(){return v
})}(window);
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-cssanimations-csstransitions-shiv-cssclasses-testprop-testallprops-domprefixes-load
 */

;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.cssanimations=function(){return D("animationName")},p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return x(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */

window.matchMedia=window.matchMedia||function(a){"use strict";var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(document);

/*! Respond.js v1.3.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(a){"use strict";function x(){u(!0)}var b={};if(a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var b=m.shift();v(b.href,function(c){p(c,b.href,b.media),h[b.href]=!0,a.setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(b){var h="clientWidth",k=d[h],m="CSS1Compat"===c.compatMode&&k||c.body[h]||k,n={},o=l[l.length-1],p=(new Date).getTime();if(b&&q&&i>p-q)return a.clearTimeout(r),r=a.setTimeout(u,i),void 0;q=p;for(var v in e)if(e.hasOwnProperty(v)){var w=e[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?t||s():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?t||s():1)),w.hasquery&&(z&&A||!(z||m>=x)||!(A||y>=m))||(n[w.media]||(n[w.media]=[]),n[w.media].push(f[w.rules]))}for(var C in g)g.hasOwnProperty(C)&&g[C]&&g[C].parentNode===j&&j.removeChild(g[C]);for(var D in n)if(n.hasOwnProperty(D)){var E=c.createElement("style"),F=n[D].join("\n");E.type="text/css",E.media=D,j.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(c.createTextNode(F)),g.push(E)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}})(this);
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/

(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/



(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = [].slice;

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define('waypoints', ['jquery'], function($) {
        return factory($, root);
      });
    } else {
      return factory(root.jQuery, root);
    }
  })(this, function($, window) {
    var $w, Context, Waypoint, allWaypoints, contextCounter, contextKey, contexts, isTouch, jQMethods, methods, resizeEvent, scrollEvent, waypointCounter, waypointKey, wp, wps;

    $w = $(window);
    isTouch = __indexOf.call(window, 'ontouchstart') >= 0;
    allWaypoints = {
      horizontal: {},
      vertical: {}
    };
    contextCounter = 1;
    contexts = {};
    contextKey = 'waypoints-context-id';
    resizeEvent = 'resize.waypoints';
    scrollEvent = 'scroll.waypoints';
    waypointCounter = 1;
    waypointKey = 'waypoints-waypoint-ids';
    wp = 'waypoint';
    wps = 'waypoints';
    Context = (function() {
      function Context($element) {
        var _this = this;

        this.$element = $element;
        this.element = $element[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = 'context' + contextCounter++;
        this.oldScroll = {
          x: $element.scrollLeft(),
          y: $element.scrollTop()
        };
        this.waypoints = {
          horizontal: {},
          vertical: {}
        };
        $element.data(contextKey, this.id);
        contexts[this.id] = this;
        $element.bind(scrollEvent, function() {
          var scrollHandler;

          if (!(_this.didScroll || isTouch)) {
            _this.didScroll = true;
            scrollHandler = function() {
              _this.doScroll();
              return _this.didScroll = false;
            };
            return window.setTimeout(scrollHandler, $[wps].settings.scrollThrottle);
          }
        });
        $element.bind(resizeEvent, function() {
          var resizeHandler;

          if (!_this.didResize) {
            _this.didResize = true;
            resizeHandler = function() {
              $[wps]('refresh');
              return _this.didResize = false;
            };
            return window.setTimeout(resizeHandler, $[wps].settings.resizeThrottle);
          }
        });
      }

      Context.prototype.doScroll = function() {
        var axes,
          _this = this;

        axes = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left'
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up'
          }
        };
        if (isTouch && (!axes.vertical.oldScroll || !axes.vertical.newScroll)) {
          $[wps]('refresh');
        }
        $.each(axes, function(aKey, axis) {
          var direction, isForward, triggered;

          triggered = [];
          isForward = axis.newScroll > axis.oldScroll;
          direction = isForward ? axis.forward : axis.backward;
          $.each(_this.waypoints[aKey], function(wKey, waypoint) {
            var _ref, _ref1;

            if ((axis.oldScroll < (_ref = waypoint.offset) && _ref <= axis.newScroll)) {
              return triggered.push(waypoint);
            } else if ((axis.newScroll < (_ref1 = waypoint.offset) && _ref1 <= axis.oldScroll)) {
              return triggered.push(waypoint);
            }
          });
          triggered.sort(function(a, b) {
            return a.offset - b.offset;
          });
          if (!isForward) {
            triggered.reverse();
          }
          return $.each(triggered, function(i, waypoint) {
            if (waypoint.options.continuous || i === triggered.length - 1) {
              return waypoint.trigger([direction]);
            }
          });
        });
        return this.oldScroll = {
          x: axes.horizontal.newScroll,
          y: axes.vertical.newScroll
        };
      };

      Context.prototype.refresh = function() {
        var axes, cOffset, isWin,
          _this = this;

        isWin = $.isWindow(this.element);
        cOffset = this.$element.offset();
        this.doScroll();
        axes = {
          horizontal: {
            contextOffset: isWin ? 0 : cOffset.left,
            contextScroll: isWin ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left',
            offsetProp: 'left'
          },
          vertical: {
            contextOffset: isWin ? 0 : cOffset.top,
            contextScroll: isWin ? 0 : this.oldScroll.y,
            contextDimension: isWin ? $[wps]('viewportHeight') : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up',
            offsetProp: 'top'
          }
        };
        return $.each(axes, function(aKey, axis) {
          return $.each(_this.waypoints[aKey], function(i, waypoint) {
            var adjustment, elementOffset, oldOffset, _ref, _ref1;

            adjustment = waypoint.options.offset;
            oldOffset = waypoint.offset;
            elementOffset = $.isWindow(waypoint.element) ? 0 : waypoint.$element.offset()[axis.offsetProp];
            if ($.isFunction(adjustment)) {
              adjustment = adjustment.apply(waypoint.element);
            } else if (typeof adjustment === 'string') {
              adjustment = parseFloat(adjustment);
              if (waypoint.options.offset.indexOf('%') > -1) {
                adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
              }
            }
            waypoint.offset = elementOffset - axis.contextOffset + axis.contextScroll - adjustment;
            if ((waypoint.options.onlyOnScroll && (oldOffset != null)) || !waypoint.enabled) {
              return;
            }
            if (oldOffset !== null && (oldOffset < (_ref = axis.oldScroll) && _ref <= waypoint.offset)) {
              return waypoint.trigger([axis.backward]);
            } else if (oldOffset !== null && (oldOffset > (_ref1 = axis.oldScroll) && _ref1 >= waypoint.offset)) {
              return waypoint.trigger([axis.forward]);
            } else if (oldOffset === null && axis.oldScroll >= waypoint.offset) {
              return waypoint.trigger([axis.forward]);
            }
          });
        });
      };

      Context.prototype.checkEmpty = function() {
        if ($.isEmptyObject(this.waypoints.horizontal) && $.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([resizeEvent, scrollEvent].join(' '));
          return delete contexts[this.id];
        }
      };

      return Context;

    })();
    Waypoint = (function() {
      function Waypoint($element, context, options) {
        var idList, _ref;

        options = $.extend({}, $.fn[wp].defaults, options);
        if (options.offset === 'bottom-in-view') {
          options.offset = function() {
            var contextHeight;

            contextHeight = $[wps]('viewportHeight');
            if (!$.isWindow(context.element)) {
              contextHeight = context.$element.height();
            }
            return contextHeight - $(this).outerHeight();
          };
        }
        this.$element = $element;
        this.element = $element[0];
        this.axis = options.horizontal ? 'horizontal' : 'vertical';
        this.callback = options.handler;
        this.context = context;
        this.enabled = options.enabled;
        this.id = 'waypoints' + waypointCounter++;
        this.offset = null;
        this.options = options;
        context.waypoints[this.axis][this.id] = this;
        allWaypoints[this.axis][this.id] = this;
        idList = (_ref = $element.data(waypointKey)) != null ? _ref : [];
        idList.push(this.id);
        $element.data(waypointKey, idList);
      }

      Waypoint.prototype.trigger = function(args) {
        if (!this.enabled) {
          return;
        }
        if (this.callback != null) {
          this.callback.apply(this.element, args);
        }
        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };

      Waypoint.prototype.disable = function() {
        return this.enabled = false;
      };

      Waypoint.prototype.enable = function() {
        this.context.refresh();
        return this.enabled = true;
      };

      Waypoint.prototype.destroy = function() {
        delete allWaypoints[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };

      Waypoint.getWaypointsByElement = function(element) {
        var all, ids;

        ids = $(element).data(waypointKey);
        if (!ids) {
          return [];
        }
        all = $.extend({}, allWaypoints.horizontal, allWaypoints.vertical);
        return $.map(ids, function(id) {
          return all[id];
        });
      };

      return Waypoint;

    })();
    methods = {
      init: function(f, options) {
        var _ref;

        if (options == null) {
          options = {};
        }
        if ((_ref = options.handler) == null) {
          options.handler = f;
        }
        this.each(function() {
          var $this, context, contextElement, _ref1;

          $this = $(this);
          contextElement = (_ref1 = options.context) != null ? _ref1 : $.fn[wp].defaults.context;
          if (!$.isWindow(contextElement)) {
            contextElement = $this.closest(contextElement);
          }
          contextElement = $(contextElement);
          context = contexts[contextElement.data(contextKey)];
          if (!context) {
            context = new Context(contextElement);
          }
          return new Waypoint($this, context, options);
        });
        $[wps]('refresh');
        return this;
      },
      disable: function() {
        return methods._invoke(this, 'disable');
      },
      enable: function() {
        return methods._invoke(this, 'enable');
      },
      destroy: function() {
        return methods._invoke(this, 'destroy');
      },
      prev: function(axis, selector) {
        return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
          if (index > 0) {
            return stack.push(waypoints[index - 1]);
          }
        });
      },
      next: function(axis, selector) {
        return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
          if (index < waypoints.length - 1) {
            return stack.push(waypoints[index + 1]);
          }
        });
      },
      _traverse: function(axis, selector, push) {
        var stack, waypoints;

        if (axis == null) {
          axis = 'vertical';
        }
        if (selector == null) {
          selector = window;
        }
        waypoints = jQMethods.aggregate(selector);
        stack = [];
        this.each(function() {
          var index;

          index = $.inArray(this, waypoints[axis]);
          return push(stack, index, waypoints[axis]);
        });
        return this.pushStack(stack);
      },
      _invoke: function($elements, method) {
        $elements.each(function() {
          var waypoints;

          waypoints = Waypoint.getWaypointsByElement(this);
          return $.each(waypoints, function(i, waypoint) {
            waypoint[method]();
            return true;
          });
        });
        return this;
      }
    };
    $.fn[wp] = function() {
      var args, method;

      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (methods[method]) {
        return methods[method].apply(this, args);
      } else if ($.isFunction(method)) {
        return methods.init.apply(this, arguments);
      } else if ($.isPlainObject(method)) {
        return methods.init.apply(this, [null, method]);
      } else if (!method) {
        return $.error("jQuery Waypoints needs a callback function or handler option.");
      } else {
        return $.error("The " + method + " method does not exist in jQuery Waypoints.");
      }
    };
    $.fn[wp].defaults = {
      context: window,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };
    jQMethods = {
      refresh: function() {
        return $.each(contexts, function(i, context) {
          return context.refresh();
        });
      },
      viewportHeight: function() {
        var _ref;

        return (_ref = window.innerHeight) != null ? _ref : $w.height();
      },
      aggregate: function(contextSelector) {
        var collection, waypoints, _ref;

        collection = allWaypoints;
        if (contextSelector) {
          collection = (_ref = contexts[$(contextSelector).data(contextKey)]) != null ? _ref.waypoints : void 0;
        }
        if (!collection) {
          return [];
        }
        waypoints = {
          horizontal: [],
          vertical: []
        };
        $.each(waypoints, function(axis, arr) {
          $.each(collection[axis], function(key, waypoint) {
            return arr.push(waypoint);
          });
          arr.sort(function(a, b) {
            return a.offset - b.offset;
          });
          waypoints[axis] = $.map(arr, function(waypoint) {
            return waypoint.element;
          });
          return waypoints[axis] = $.unique(waypoints[axis]);
        });
        return waypoints;
      },
      above: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
          return waypoint.offset <= context.oldScroll.y;
        });
      },
      below: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
          return waypoint.offset > context.oldScroll.y;
        });
      },
      left: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
          return waypoint.offset <= context.oldScroll.x;
        });
      },
      right: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
          return waypoint.offset > context.oldScroll.x;
        });
      },
      enable: function() {
        return jQMethods._invoke('enable');
      },
      disable: function() {
        return jQMethods._invoke('disable');
      },
      destroy: function() {
        return jQMethods._invoke('destroy');
      },
      extendFn: function(methodName, f) {
        return methods[methodName] = f;
      },
      _invoke: function(method) {
        var waypoints;

        waypoints = $.extend({}, allWaypoints.vertical, allWaypoints.horizontal);
        return $.each(waypoints, function(key, waypoint) {
          waypoint[method]();
          return true;
        });
      },
      _filter: function(selector, axis, test) {
        var context, waypoints;

        context = contexts[$(selector).data(contextKey)];
        if (!context) {
          return [];
        }
        waypoints = [];
        $.each(context.waypoints[axis], function(i, waypoint) {
          if (test(context, waypoint)) {
            return waypoints.push(waypoint);
          }
        });
        waypoints.sort(function(a, b) {
          return a.offset - b.offset;
        });
        return $.map(waypoints, function(waypoint) {
          return waypoint.element;
        });
      }
    };
    $[wps] = function() {
      var args, method;

      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (jQMethods[method]) {
        return jQMethods[method].apply(null, args);
      } else {
        return jQMethods.aggregate.call(null, method);
      }
    };
    $[wps].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    };
    return $w.load(function() {
      return $[wps]('refresh');
    });
  });

}).call(this);
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/

(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//















;
