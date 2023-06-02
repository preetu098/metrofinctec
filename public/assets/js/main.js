/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});
/*!
  * Bootstrap v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,h){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},e=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.forEach(function(t){var e,n,i;e=r,i=o[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return r}e=e&&e.hasOwnProperty("default")?e.default:e,h=h&&h.hasOwnProperty("default")?h.default:h;var r,n,o,a,c,u,f,d,g,_,m,p,v,y,E,C,T,b,S,I,A,D,w,N,O,k,P,j,H,L,R,x,W,U,q,F,K,M,Q,B,V,Y,z,J,Z,G,$,X,tt,et,nt,it,rt,ot,st,at,lt,ct,ht,ut,ft,dt,gt,_t,mt,pt,vt,yt,Et,Ct,Tt,bt,St,It,At,Dt,wt,Nt,Ot,kt,Pt,jt,Ht,Lt,Rt,xt,Wt,Ut,qt,Ft,Kt,Mt,Qt,Bt,Vt,Yt,zt,Jt,Zt,Gt,$t,Xt,te,ee,ne,ie,re,oe,se,ae,le,ce,he,ue,fe,de,ge,_e,me,pe,ve,ye,Ee,Ce,Te,be,Se,Ie,Ae,De,we,Ne,Oe,ke,Pe,je,He,Le,Re,xe,We,Ue,qe,Fe,Ke,Me,Qe,Be,Ve,Ye,ze,Je,Ze,Ge,$e,Xe,tn,en,nn,rn,on,sn,an,ln,cn,hn,un,fn,dn,gn,_n,mn,pn,vn,yn,En,Cn,Tn,bn,Sn,In,An,Dn,wn,Nn,On,kn,Pn,jn,Hn,Ln,Rn,xn,Wn,Un,qn,Fn=function(i){var e="transitionend";function t(t){var e=this,n=!1;return i(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(e)},t),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],o=e[i],s=o&&l.isElement(o)?"element":(a=o,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+r+'".')}var a}};return i.fn.emulateTransitionEnd=t,i.event.special[l.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},l}(e),Kn=(n="alert",a="."+(o="bs.alert"),c=(r=e).fn[n],u={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",g="show",_=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){r.removeData(this._element,o),this._element=null},t._getRootElement=function(t){var e=Fn.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=r(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=r.Event(u.CLOSE);return r(t).trigger(e),e},t._removeElement=function(e){var n=this;if(r(e).removeClass(g),r(e).hasClass(d)){var t=Fn.getTransitionDurationFromElement(e);r(e).one(Fn.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){r(t).detach().trigger(u.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=r(this),e=t.data(o);e||(e=new i(this),t.data(o,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),i}(),r(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',_._handleDismiss(new _)),r.fn[n]=_._jQueryInterface,r.fn[n].Constructor=_,r.fn[n].noConflict=function(){return r.fn[n]=c,_._jQueryInterface},_),Mn=(p="button",y="."+(v="bs.button"),E=".data-api",C=(m=e).fn[p],T="active",b="btn",I='[data-toggle^="button"]',A='[data-toggle="buttons"]',D="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+y+E,FOCUS_BLUR_DATA_API:(S="focus")+y+E+" blur"+y+E},k=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=m(this._element).closest(A)[0];if(n){var i=this._element.querySelector(D);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(T))t=!1;else{var r=n.querySelector(w);r&&m(r).removeClass(T)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(T),m(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(T)),t&&m(this._element).toggleClass(T)},t.dispose=function(){m.removeData(this._element,v),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=m(this).data(v);t||(t=new n(this),m(this).data(v,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),n}(),m(document).on(O.CLICK_DATA_API,I,function(t){t.preventDefault();var e=t.target;m(e).hasClass(b)||(e=m(e).closest(N)),k._jQueryInterface.call(m(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,I,function(t){var e=m(t.target).closest(N)[0];m(e).toggleClass(S,/^focus(in)?$/.test(t.type))}),m.fn[p]=k._jQueryInterface,m.fn[p].Constructor=k,m.fn[p].noConflict=function(){return m.fn[p]=C,k._jQueryInterface},k),Qn=(j="carousel",L="."+(H="bs.carousel"),R=".data-api",x=(P=e).fn[j],W={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},q="next",F="prev",K="left",M="right",Q={SLIDE:"slide"+L,SLID:"slid"+L,KEYDOWN:"keydown"+L,MOUSEENTER:"mouseenter"+L,MOUSELEAVE:"mouseleave"+L,TOUCHEND:"touchend"+L,LOAD_DATA_API:"load"+L+R,CLICK_DATA_API:"click"+L+R},B="carousel",V="active",Y="slide",z="carousel-item-right",J="carousel-item-left",Z="carousel-item-next",G="carousel-item-prev",$=".active",X=".active.carousel-item",tt=".carousel-item",et=".carousel-item-next, .carousel-item-prev",nt=".carousel-indicators",it="[data-slide], [data-slide-to]",rt='[data-ride="carousel"]',ot=function(){function o(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=P(t)[0],this._indicatorsElement=this._element.querySelector(nt),this._addEventListeners()}var t=o.prototype;return t.next=function(){this._isSliding||this._slide(q)},t.nextWhenVisible=function(){!document.hidden&&P(this._element).is(":visible")&&"hidden"!==P(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(F)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(et)&&(Fn.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(X);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)P(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?q:F;this._slide(i,this._items[t])}},t.dispose=function(){P(this._element).off(L),P.removeData(this._element,H),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},W,t),Fn.typeCheckConfig(j,t,U),t},t._addEventListeners=function(){var e=this;this._config.keyboard&&P(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(P(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&P(this._element).on(Q.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(tt)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===q,i=t===F,r=this._getItemIndex(e),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return e;var s=(r+(t===F?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(X)),r=P.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return P(this._element).trigger(r),r},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll($));P(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&P(n).addClass(V)}},t._slide=function(t,e){var n,i,r,o=this,s=this._element.querySelector(X),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(t===q?(n=J,i=Z,r=K):(n=z,i=G,r=M),l&&P(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=P.Event(Q.SLID,{relatedTarget:l,direction:r,from:a,to:c});if(P(this._element).hasClass(Y)){P(l).addClass(i),Fn.reflow(l),P(s).addClass(n),P(l).addClass(n);var f=Fn.getTransitionDurationFromElement(s);P(s).one(Fn.TRANSITION_END,function(){P(l).removeClass(n+" "+i).addClass(V),P(s).removeClass(V+" "+i+" "+n),o._isSliding=!1,setTimeout(function(){return P(o._element).trigger(u)},0)}).emulateTransitionEnd(f)}else P(s).removeClass(V),P(l).addClass(V),this._isSliding=!1,P(this._element).trigger(u);h&&this.cycle()}},o._jQueryInterface=function(i){return this.each(function(){var t=P(this).data(H),e=l({},W,P(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new o(this,e),P(this).data(H,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},o._dataApiClickHandler=function(t){var e=Fn.getSelectorFromElement(this);if(e){var n=P(e)[0];if(n&&P(n).hasClass(B)){var i=l({},P(n).data(),P(this).data()),r=this.getAttribute("data-slide-to");r&&(i.interval=!1),o._jQueryInterface.call(P(n),i),r&&P(n).data(H).to(r),t.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return W}}]),o}(),P(document).on(Q.CLICK_DATA_API,it,ot._dataApiClickHandler),P(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(rt)),e=0,n=t.length;e<n;e++){var i=P(t[e]);ot._jQueryInterface.call(i,i.data())}}),P.fn[j]=ot._jQueryInterface,P.fn[j].Constructor=ot,P.fn[j].noConflict=function(){return P.fn[j]=x,ot._jQueryInterface},ot),Bn=(at="collapse",ct="."+(lt="bs.collapse"),ht=(st=e).fn[at],ut={toggle:!0,parent:""},ft={toggle:"boolean",parent:"(string|element)"},dt={SHOW:"show"+ct,SHOWN:"shown"+ct,HIDE:"hide"+ct,HIDDEN:"hidden"+ct,CLICK_DATA_API:"click"+ct+".data-api"},gt="show",_t="collapse",mt="collapsing",pt="collapsed",vt="width",yt="height",Et=".show, .collapsing",Ct='[data-toggle="collapse"]',Tt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=st.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(Ct)),i=0,r=n.length;i<r;i++){var o=n[i],s=Fn.getSelectorFromElement(o),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){st(this._element).hasClass(gt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!st(this._element).hasClass(gt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Et)).filter(function(t){return t.getAttribute("data-parent")===n._config.parent})).length&&(t=null),!(t&&(e=st(t).not(this._selector).data(lt))&&e._isTransitioning))){var i=st.Event(dt.SHOW);if(st(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(st(t).not(this._selector),"hide"),e||st(t).data(lt,null));var r=this._getDimension();st(this._element).removeClass(_t).addClass(mt),this._element.style[r]=0,this._triggerArray.length&&st(this._triggerArray).removeClass(pt).attr("aria-expanded",!0),this.setTransitioning(!0);var o="scroll"+(r[0].toUpperCase()+r.slice(1)),s=Fn.getTransitionDurationFromElement(this._element);st(this._element).one(Fn.TRANSITION_END,function(){st(n._element).removeClass(mt).addClass(_t).addClass(gt),n._element.style[r]="",n.setTransitioning(!1),st(n._element).trigger(dt.SHOWN)}).emulateTransitionEnd(s),this._element.style[r]=this._element[o]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&st(this._element).hasClass(gt)){var e=st.Event(dt.HIDE);if(st(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",Fn.reflow(this._element),st(this._element).addClass(mt).removeClass(_t).removeClass(gt);var i=this._triggerArray.length;if(0<i)for(var r=0;r<i;r++){var o=this._triggerArray[r],s=Fn.getSelectorFromElement(o);if(null!==s)st([].slice.call(document.querySelectorAll(s))).hasClass(gt)||st(o).addClass(pt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=Fn.getTransitionDurationFromElement(this._element);st(this._element).one(Fn.TRANSITION_END,function(){t.setTransitioning(!1),st(t._element).removeClass(mt).addClass(_t).trigger(dt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){st.removeData(this._element,lt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},ut,t)).toggle=Boolean(t.toggle),Fn.typeCheckConfig(at,t,ft),t},t._getDimension=function(){return st(this._element).hasClass(vt)?vt:yt},t._getParent=function(){var n=this,t=null;Fn.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return st(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){if(t){var n=st(t).hasClass(gt);e.length&&st(e).toggleClass(pt,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var e=Fn.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=st(this),e=t.data(lt),n=l({},ut,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(lt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return ut}}]),a}(),st(document).on(dt.CLICK_DATA_API,Ct,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=st(this),e=Fn.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));st(i).each(function(){var t=st(this),e=t.data(lt)?"toggle":n.data();Tt._jQueryInterface.call(t,e)})}),st.fn[at]=Tt._jQueryInterface,st.fn[at].Constructor=Tt,st.fn[at].noConflict=function(){return st.fn[at]=ht,Tt._jQueryInterface},Tt),Vn=(St="dropdown",At="."+(It="bs.dropdown"),Dt=".data-api",wt=(bt=e).fn[St],Nt=new RegExp("38|40|27"),Ot={HIDE:"hide"+At,HIDDEN:"hidden"+At,SHOW:"show"+At,SHOWN:"shown"+At,CLICK:"click"+At,CLICK_DATA_API:"click"+At+Dt,KEYDOWN_DATA_API:"keydown"+At+Dt,KEYUP_DATA_API:"keyup"+At+Dt},kt="disabled",Pt="show",jt="dropup",Ht="dropright",Lt="dropleft",Rt="dropdown-menu-right",xt="position-static",Wt='[data-toggle="dropdown"]',Ut=".dropdown form",qt=".dropdown-menu",Ft=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Mt="top-start",Qt="top-end",Bt="bottom-start",Vt="bottom-end",Yt="right-start",zt="left-start",Jt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Zt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Gt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!bt(this._element).hasClass(kt)){var t=c._getParentFromElement(this._element),e=bt(this._menu).hasClass(Pt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=bt.Event(Ot.SHOW,n);if(bt(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof h)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=t:Fn.isElement(this._config.reference)&&(r=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&bt(t).addClass(xt),this._popper=new h(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===bt(t).closest(Ft).length&&bt(document.body).children().on("mouseover",null,bt.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),bt(this._menu).toggleClass(Pt),bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN,n))}}}},t.dispose=function(){bt.removeData(this._element,It),bt(this._element).off(At),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;bt(this._element).on(Ot.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,bt(this._element).data(),t),Fn.typeCheckConfig(St,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=bt(this._element.parentNode),e=Bt;return t.hasClass(jt)?(e=Mt,bt(this._menu).hasClass(Rt)&&(e=Qt)):t.hasClass(Ht)?e=Yt:t.hasClass(Lt)?e=zt:bt(this._menu).hasClass(Rt)&&(e=Vt),e},t._detectNavbar=function(){return 0<bt(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},c._jQueryInterface=function(e){return this.each(function(){var t=bt(this).data(It);if(t||(t=new c(this,"object"==typeof e?e:null),bt(this).data(It,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Wt)),n=0,i=e.length;n<i;n++){var r=c._getParentFromElement(e[n]),o=bt(e[n]).data(It),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),o){var a=o._menu;if(bt(r).hasClass(Pt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&bt.contains(r,t.target))){var l=bt.Event(Ot.HIDE,s);bt(r).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&bt(document.body).children().off("mouseover",null,bt.noop),e[n].setAttribute("aria-expanded","false"),bt(a).removeClass(Pt),bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=Fn.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||bt(t.target).closest(qt).length)):Nt.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!bt(this).hasClass(kt))){var e=c._getParentFromElement(this),n=bt(e).hasClass(Pt);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var r=i.indexOf(t.target);38===t.which&&0<r&&r--,40===t.which&&r<i.length-1&&r++,r<0&&(r=0),i[r].focus()}}else{if(27===t.which){var o=e.querySelector(Wt);bt(o).trigger("focus")}bt(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Jt}},{key:"DefaultType",get:function(){return Zt}}]),c}(),bt(document).on(Ot.KEYDOWN_DATA_API,Wt,Gt._dataApiKeydownHandler).on(Ot.KEYDOWN_DATA_API,qt,Gt._dataApiKeydownHandler).on(Ot.CLICK_DATA_API+" "+Ot.KEYUP_DATA_API,Gt._clearMenus).on(Ot.CLICK_DATA_API,Wt,function(t){t.preventDefault(),t.stopPropagation(),Gt._jQueryInterface.call(bt(this),"toggle")}).on(Ot.CLICK_DATA_API,Ut,function(t){t.stopPropagation()}),bt.fn[St]=Gt._jQueryInterface,bt.fn[St].Constructor=Gt,bt.fn[St].noConflict=function(){return bt.fn[St]=wt,Gt._jQueryInterface},Gt),Yn=(Xt="modal",ee="."+(te="bs.modal"),ne=($t=e).fn[Xt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},re={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},oe={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-scrollbar-measure",ae="modal-backdrop",le="modal-open",ce="fade",he="show",ue=".modal-dialog",fe='[data-toggle="modal"]',de='[data-dismiss="modal"]',ge=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_e=".sticky-top",me=function(){function r(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(ue),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var t=r.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){$t(this._element).hasClass(ce)&&(this._isTransitioning=!0);var n=$t.Event(oe.SHOW,{relatedTarget:t});$t(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),$t(document.body).addClass(le),this._setEscapeEvent(),this._setResizeEvent(),$t(this._element).on(oe.CLICK_DISMISS,de,function(t){return e.hide(t)}),$t(this._dialog).on(oe.MOUSEDOWN_DISMISS,function(){$t(e._element).one(oe.MOUSEUP_DISMISS,function(t){$t(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=$t.Event(oe.HIDE);if($t(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=$t(this._element).hasClass(ce);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),$t(document).off(oe.FOCUSIN),$t(this._element).removeClass(he),$t(this._element).off(oe.CLICK_DISMISS),$t(this._dialog).off(oe.MOUSEDOWN_DISMISS),i){var r=Fn.getTransitionDurationFromElement(this._element);$t(this._element).one(Fn.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},t.dispose=function(){$t.removeData(this._element,te),$t(window,document,this._element,this._backdrop).off(ee),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),Fn.typeCheckConfig(Xt,t,re),t},t._showElement=function(t){var e=this,n=$t(this._element).hasClass(ce);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&Fn.reflow(this._element),$t(this._element).addClass(he),this._config.focus&&this._enforceFocus();var i=$t.Event(oe.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,$t(e._element).trigger(i)};if(n){var o=Fn.getTransitionDurationFromElement(this._element);$t(this._dialog).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r()},t._enforceFocus=function(){var e=this;$t(document).off(oe.FOCUSIN).on(oe.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===$t(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?$t(this._element).on(oe.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||$t(this._element).off(oe.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?$t(window).on(oe.RESIZE,function(t){return e.handleUpdate(t)}):$t(window).off(oe.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){$t(document.body).removeClass(le),t._resetAdjustments(),t._resetScrollbar(),$t(t._element).trigger(oe.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&($t(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=$t(this._element).hasClass(ce)?ce:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=ae,n&&this._backdrop.classList.add(n),$t(this._backdrop).appendTo(document.body),$t(this._element).on(oe.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&Fn.reflow(this._backdrop),$t(this._backdrop).addClass(he),!t)return;if(!n)return void t();var i=Fn.getTransitionDurationFromElement(this._backdrop);$t(this._backdrop).one(Fn.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){$t(this._backdrop).removeClass(he);var r=function(){e._removeBackdrop(),t&&t()};if($t(this._element).hasClass(ce)){var o=Fn.getTransitionDurationFromElement(this._backdrop);$t(this._backdrop).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(ge)),e=[].slice.call(document.querySelectorAll(_e));$t(t).each(function(t,e){var n=e.style.paddingRight,i=$t(e).css("padding-right");$t(e).data("padding-right",n).css("padding-right",parseFloat(i)+r._scrollbarWidth+"px")}),$t(e).each(function(t,e){var n=e.style.marginRight,i=$t(e).css("margin-right");$t(e).data("margin-right",n).css("margin-right",parseFloat(i)-r._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=$t(document.body).css("padding-right");$t(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(ge));$t(t).each(function(t,e){var n=$t(e).data("padding-right");$t(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+_e));$t(e).each(function(t,e){var n=$t(e).data("margin-right");"undefined"!=typeof n&&$t(e).css("margin-right",n).removeData("margin-right")});var n=$t(document.body).data("padding-right");$t(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=se,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},r._jQueryInterface=function(n,i){return this.each(function(){var t=$t(this).data(te),e=l({},ie,$t(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new r(this,e),$t(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(r,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return ie}}]),r}(),$t(document).on(oe.CLICK_DATA_API,fe,function(t){var e,n=this,i=Fn.getSelectorFromElement(this);i&&(e=document.querySelector(i));var r=$t(e).data(te)?"toggle":l({},$t(e).data(),$t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var o=$t(e).one(oe.SHOW,function(t){t.isDefaultPrevented()||o.one(oe.HIDDEN,function(){$t(n).is(":visible")&&n.focus()})});me._jQueryInterface.call($t(e),r,this)}),$t.fn[Xt]=me._jQueryInterface,$t.fn[Xt].Constructor=me,$t.fn[Xt].noConflict=function(){return $t.fn[Xt]=ne,me._jQueryInterface},me),zn=(ve="tooltip",Ee="."+(ye="bs.tooltip"),Ce=(pe=e).fn[ve],Te="bs-tooltip",be=new RegExp("(^|\\s)"+Te+"\\S+","g"),Ae={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(Ie={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(Se={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},we="out",Ne={HIDE:"hide"+Ee,HIDDEN:"hidden"+Ee,SHOW:(De="show")+Ee,SHOWN:"shown"+Ee,INSERTED:"inserted"+Ee,CLICK:"click"+Ee,FOCUSIN:"focusin"+Ee,FOCUSOUT:"focusout"+Ee,MOUSEENTER:"mouseenter"+Ee,MOUSELEAVE:"mouseleave"+Ee},Oe="fade",ke="show",Pe=".tooltip-inner",je=".arrow",He="hover",Le="focus",Re="click",xe="manual",We=function(){function i(t,e){if("undefined"==typeof h)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=pe(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(pe(this.getTipElement()).hasClass(ke))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),pe.removeData(this.element,this.constructor.DATA_KEY),pe(this.element).off(this.constructor.EVENT_KEY),pe(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&pe(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===pe(this.element).css("display"))throw new Error("Please use show on visible elements");var t=pe.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){pe(this.element).trigger(t);var n=pe.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),r=Fn.getUID(this.constructor.NAME);i.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&pe(i).addClass(Oe);var o="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,s=this._getAttachment(o);this.addAttachmentClass(s);var a=!1===this.config.container?document.body:pe(document).find(this.config.container);pe(i).data(this.constructor.DATA_KEY,this),pe.contains(this.element.ownerDocument.documentElement,this.tip)||pe(i).appendTo(a),pe(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new h(this.element,i,{placement:s,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:je},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),pe(i).addClass(ke),"ontouchstart"in document.documentElement&&pe(document.body).children().on("mouseover",null,pe.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,pe(e.element).trigger(e.constructor.Event.SHOWN),t===we&&e._leave(null,e)};if(pe(this.tip).hasClass(Oe)){var c=Fn.getTransitionDurationFromElement(this.tip);pe(this.tip).one(Fn.TRANSITION_END,l).emulateTransitionEnd(c)}else l()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=pe.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==De&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),pe(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(pe(this.element).trigger(i),!i.isDefaultPrevented()){if(pe(n).removeClass(ke),"ontouchstart"in document.documentElement&&pe(document.body).children().off("mouseover",null,pe.noop),this._activeTrigger[Re]=!1,this._activeTrigger[Le]=!1,this._activeTrigger[He]=!1,pe(this.tip).hasClass(Oe)){var o=Fn.getTransitionDurationFromElement(n);pe(n).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){pe(this.getTipElement()).addClass(Te+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||pe(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(pe(t.querySelectorAll(Pe)),this.getTitle()),pe(t).removeClass(Oe+" "+ke)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?pe(e).parent().is(t)||t.empty().append(e):t.text(pe(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getAttachment=function(t){return Ie[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)pe(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==xe){var e=t===He?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===He?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;pe(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}pe(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||pe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Le:He]=!0),pe(e.getTipElement()).hasClass(ke)||e._hoverState===De?e._hoverState=De:(clearTimeout(e._timeout),e._hoverState=De,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===De&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||pe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Le:He]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=we,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===we&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=l({},this.constructor.Default,pe(this.element).data(),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),Fn.typeCheckConfig(ve,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=pe(this.getTipElement()),e=t.attr("class").match(be);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(pe(t).removeClass(Oe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=pe(this).data(ye),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),pe(this).data(ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Ae}},{key:"NAME",get:function(){return ve}},{key:"DATA_KEY",get:function(){return ye}},{key:"Event",get:function(){return Ne}},{key:"EVENT_KEY",get:function(){return Ee}},{key:"DefaultType",get:function(){return Se}}]),i}(),pe.fn[ve]=We._jQueryInterface,pe.fn[ve].Constructor=We,pe.fn[ve].noConflict=function(){return pe.fn[ve]=Ce,We._jQueryInterface},We),Jn=(qe="popover",Ke="."+(Fe="bs.popover"),Me=(Ue=e).fn[qe],Qe="bs-popover",Be=new RegExp("(^|\\s)"+Qe+"\\S+","g"),Ve=l({},zn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ye=l({},zn.DefaultType,{content:"(string|element|function)"}),ze="fade",Ze=".popover-header",Ge=".popover-body",$e={HIDE:"hide"+Ke,HIDDEN:"hidden"+Ke,SHOW:(Je="show")+Ke,SHOWN:"shown"+Ke,INSERTED:"inserted"+Ke,CLICK:"click"+Ke,FOCUSIN:"focusin"+Ke,FOCUSOUT:"focusout"+Ke,MOUSEENTER:"mouseenter"+Ke,MOUSELEAVE:"mouseleave"+Ke},Xe=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){Ue(this.getTipElement()).addClass(Qe+"-"+t)},r.getTipElement=function(){return this.tip=this.tip||Ue(this.config.template)[0],this.tip},r.setContent=function(){var t=Ue(this.getTipElement());this.setElementContent(t.find(Ze),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(Ge),e),t.removeClass(ze+" "+Je)},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=Ue(this.getTipElement()),e=t.attr("class").match(Be);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=Ue(this).data(Fe),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),Ue(this).data(Fe,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Ve}},{key:"NAME",get:function(){return qe}},{key:"DATA_KEY",get:function(){return Fe}},{key:"Event",get:function(){return $e}},{key:"EVENT_KEY",get:function(){return Ke}},{key:"DefaultType",get:function(){return Ye}}]),i}(zn),Ue.fn[qe]=Xe._jQueryInterface,Ue.fn[qe].Constructor=Xe,Ue.fn[qe].noConflict=function(){return Ue.fn[qe]=Me,Xe._jQueryInterface},Xe),Zn=(en="scrollspy",rn="."+(nn="bs.scrollspy"),on=(tn=e).fn[en],sn={offset:10,method:"auto",target:""},an={offset:"number",method:"string",target:"(string|element)"},ln={ACTIVATE:"activate"+rn,SCROLL:"scroll"+rn,LOAD_DATA_API:"load"+rn+".data-api"},cn="dropdown-item",hn="active",un='[data-spy="scroll"]',fn=".active",dn=".nav, .list-group",gn=".nav-link",_n=".nav-item",mn=".list-group-item",pn=".dropdown",vn=".dropdown-item",yn=".dropdown-toggle",En="offset",Cn="position",Tn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+gn+","+this._config.target+" "+mn+","+this._config.target+" "+vn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,tn(this._scrollElement).on(ln.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?En:Cn,r="auto"===this._config.method?t:this._config.method,o=r===Cn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=Fn.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[tn(e)[r]().top+o,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){tn.removeData(this._element,nn),tn(this._scrollElement).off(rn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},sn,"object"==typeof t&&t?t:{})).target){var e=tn(t.target).attr("id");e||(e=Fn.getUID(en),tn(t.target).attr("id",e)),t.target="#"+e}return Fn.typeCheckConfig(en,t,an),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=tn([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(cn)?(n.closest(pn).find(yn).addClass(hn),n.addClass(hn)):(n.addClass(hn),n.parents(dn).prev(gn+", "+mn).addClass(hn),n.parents(dn).prev(_n).children(gn).addClass(hn)),tn(this._scrollElement).trigger(ln.ACTIVATE,{relatedTarget:e})},t._clear=function(){var t=[].slice.call(document.querySelectorAll(this._selector));tn(t).filter(fn).removeClass(hn)},n._jQueryInterface=function(e){return this.each(function(){var t=tn(this).data(nn);if(t||(t=new n(this,"object"==typeof e&&e),tn(this).data(nn,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return sn}}]),n}(),tn(window).on(ln.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(un)),e=t.length;e--;){var n=tn(t[e]);Tn._jQueryInterface.call(n,n.data())}}),tn.fn[en]=Tn._jQueryInterface,tn.fn[en].Constructor=Tn,tn.fn[en].noConflict=function(){return tn.fn[en]=on,Tn._jQueryInterface},Tn),Gn=(In="."+(Sn="bs.tab"),An=(bn=e).fn.tab,Dn={HIDE:"hide"+In,HIDDEN:"hidden"+In,SHOW:"show"+In,SHOWN:"shown"+In,CLICK_DATA_API:"click"+In+".data-api"},wn="dropdown-menu",Nn="active",On="disabled",kn="fade",Pn="show",jn=".dropdown",Hn=".nav, .list-group",Ln=".active",Rn="> li > .active",xn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Wn=".dropdown-toggle",Un="> .dropdown-menu .active",qn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&bn(this._element).hasClass(Nn)||bn(this._element).hasClass(On))){var t,i,e=bn(this._element).closest(Hn)[0],r=Fn.getSelectorFromElement(this._element);if(e){var o="UL"===e.nodeName?Rn:Ln;i=(i=bn.makeArray(bn(e).find(o)))[i.length-1]}var s=bn.Event(Dn.HIDE,{relatedTarget:this._element}),a=bn.Event(Dn.SHOW,{relatedTarget:i});if(i&&bn(i).trigger(s),bn(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(t=document.querySelector(r)),this._activate(this._element,e);var l=function(){var t=bn.Event(Dn.HIDDEN,{relatedTarget:n._element}),e=bn.Event(Dn.SHOWN,{relatedTarget:i});bn(i).trigger(t),bn(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){bn.removeData(this._element,Sn),this._element=null},t._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?bn(e).find(Rn):bn(e).children(Ln))[0],o=n&&r&&bn(r).hasClass(kn),s=function(){return i._transitionComplete(t,r,n)};if(r&&o){var a=Fn.getTransitionDurationFromElement(r);bn(r).one(Fn.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){bn(e).removeClass(Pn+" "+Nn);var i=bn(e.parentNode).find(Un)[0];i&&bn(i).removeClass(Nn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(bn(t).addClass(Nn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),Fn.reflow(t),bn(t).addClass(Pn),t.parentNode&&bn(t.parentNode).hasClass(wn)){var r=bn(t).closest(jn)[0];if(r){var o=[].slice.call(r.querySelectorAll(Wn));bn(o).addClass(Nn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=bn(this),e=t.data(Sn);if(e||(e=new i(this),t.data(Sn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),i}(),bn(document).on(Dn.CLICK_DATA_API,xn,function(t){t.preventDefault(),qn._jQueryInterface.call(bn(this),"show")}),bn.fn.tab=qn._jQueryInterface,bn.fn.tab.Constructor=qn,bn.fn.tab.noConflict=function(){return bn.fn.tab=An,qn._jQueryInterface},qn);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=Fn,t.Alert=Kn,t.Button=Mn,t.Carousel=Qn,t.Collapse=Bn,t.Dropdown=Vn,t.Modal=Yn,t.Popover=Jn,t.Scrollspy=Zn,t.Tab=Gn,t.Tooltip=zn,Object.defineProperty(t,"__esModule",{value:!0})});
/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=w.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),o.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var c=s[a];delete s[a],u[a]=!0,n.apply(b,c)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,c,d,f){var h,k,m,n,o,t,v,w=[],x=typeof d;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=d?d.apply(r[a],w):void 0,a&&(h&&h.exports!==b&&h.exports!==r[a]?r[a]=h.exports:m===b&&v||(r[a]=m))}else a&&(r[a]=d)},a=c=o=function(a,c,d,e,f){if("string"==typeof a)return q[a]?q[a](c):j(p(a,l(c)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?n(b,a,c,d):setTimeout(function(){n(b,a,c,d)},4),o},o.config=function(a){return o(a)},a._defined=r,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){"function"==typeof b[d]&&("constructor"!==d&&c.push(d))}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){return Array.prototype.unshift.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;c<d;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;c<a;c++){b+=Math.floor(36*Math.random()).toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return(e!==f||"hidden"!==f&&"visible"!==f)&&("scroll"===e||"scroll"===f||(d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth))},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c.__cache={};var e=0;return c.GetUniqueElementId=function(a){var b=a.getAttribute("data-select2-id");return null==b&&(a.id?(b=a.id,a.setAttribute("data-select2-id",b)):(a.setAttribute("data-select2-id",++e),b=e.toString())),b},c.StoreData=function(a,b,d){var e=c.GetUniqueElementId(a);c.__cache[e]||(c.__cache[e]={}),c.__cache[e][b]=d},c.GetData=function(b,d){var e=c.GetUniqueElementId(b);return d?c.__cache[e]&&null!=c.__cache[e][d]?c.__cache[e][d]:a(b).data(d):c.__cache[e]},c.RemoveData=function(a){var b=c.GetUniqueElementId(a);null!=c.__cache[b]&&delete c.__cache[b]},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){b.find(".select2-results").append(a)},c.prototype.sort=function(a){return this.options.get("sorter")(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var c=this;this.data.current(function(d){var e=a.map(d,function(a){return a.id.toString()});c.$results.find(".select2-results__option[aria-selected]").each(function(){var c=a(this),d=b.GetData(this,"data"),f=""+d.id;null!=d.element&&d.element.selected||null==d.element&&a.inArray(f,e)>-1?c.attr("aria-selected","true"):c.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(c){var d=document.createElement("li");d.className="select2-results__option";var e={role:"treeitem","aria-selected":"false"};c.disabled&&(delete e["aria-selected"],e["aria-disabled"]="true"),null==c.id&&delete e["aria-selected"],null!=c._resultId&&(d.id=c._resultId),c.title&&(d.title=c.title),c.children&&(e.role="group",e["aria-label"]=c.text,delete e["aria-selected"]);for(var f in e){var g=e[f];d.setAttribute(f,g)}if(c.children){var h=a(d),i=document.createElement("strong");i.className="select2-results__group";a(i);this.template(c,i);for(var j=[],k=0;k<c.children.length;k++){var l=c.children[k],m=this.option(l);j.push(m)}var n=a("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});n.append(j),h.append(i),h.append(n)}else this.template(c,d);return b.StoreData(d,"data",c),d},c.prototype.bind=function(c,d){var e=this,f=c.id+"-results";this.$results.attr("id",f),c.on("results:all",function(a){e.clear(),e.append(a.data),c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("results:append",function(a){e.append(a.data),c.isOpen()&&e.setClasses()}),c.on("query",function(a){e.hideMessages(),e.showLoading(a)}),c.on("select",function(){c.isOpen()&&(e.setClasses(),e.options.get("scrollAfterSelect")&&e.highlightFirstItem())}),c.on("unselect",function(){c.isOpen()&&(e.setClasses(),e.options.get("scrollAfterSelect")&&e.highlightFirstItem())}),c.on("open",function(){e.$results.attr("aria-expanded","true"),e.$results.attr("aria-hidden","false"),e.setClasses(),e.ensureHighlightVisible()}),c.on("close",function(){e.$results.attr("aria-expanded","false"),e.$results.attr("aria-hidden","true"),e.$results.removeAttr("aria-activedescendant")}),c.on("results:toggle",function(){var a=e.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),c.on("results:select",function(){var a=e.getHighlightedResults();if(0!==a.length){var c=b.GetData(a[0],"data");"true"==a.attr("aria-selected")?e.trigger("close",{}):e.trigger("select",{data:c})}}),c.on("results:previous",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a);if(!(c<=0)){var d=c-1;0===a.length&&(d=0);var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top,h=f.offset().top,i=e.$results.scrollTop()+(h-g);0===d?e.$results.scrollTop(0):h-g<0&&e.$results.scrollTop(i)}}),c.on("results:next",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a),d=c+1;if(!(d>=b.length)){var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top+e.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=e.$results.scrollTop()+h-g;0===d?e.$results.scrollTop(0):h>g&&e.$results.scrollTop(i)}}),c.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),c.on("results:message",function(a){e.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=e.$results.scrollTop(),c=e.$results.get(0).scrollHeight-b+a.deltaY,d=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=e.$results.height();d?(e.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(e.$results.scrollTop(e.$results.get(0).scrollHeight-e.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(c){var d=a(this),f=b.GetData(this,"data");if("true"===d.attr("aria-selected"))return void(e.options.get("multiple")?e.trigger("unselect",{originalEvent:c,data:f}):e.trigger("close",{}));e.trigger("select",{originalEvent:c,data:f})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(c){var d=b.GetData(this,"data");e.getHighlightedResults().removeClass("select2-results__option--highlighted"),e.trigger("results:focus",{data:d,element:a(this)})})},c.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var c=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=b.GetData(this.$element[0],"old-tabindex")?this._tabindex=b.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),c.attr("title",this.$element.attr("title")),c.attr("tabindex",this._tabindex),this.$selection=c,c},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),window.setTimeout(function(){d.$selection.focus()},0),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(c){a(document.body).on("mousedown.select2."+c.id,function(c){var d=a(c.target),e=d.closest(".select2");a(".select2.select2-container--open").each(function(){a(this),this!=e[0]&&b.GetData(this,"element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()})},e.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.attr("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,e){var f=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){f.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!f.options.get("disabled")){var d=a(this),e=d.parent(),g=c.GetData(e[0],"data");f.trigger("unselect",{originalEvent:b,data:g})}})},d.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.attr("title",e.title||e.text),c.StoreData(f[0],"data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(a,b,c){function d(){}return d.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},d.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var d=this.$selection.find(".select2-selection__clear");if(0!==d.length){b.stopPropagation();var e=c.GetData(d[0],"data"),f=this.$element.val();this.$element.val(this.placeholder.id);var g={data:e};if(this.trigger("clear",g),g.prevented)return void this.$element.val(f);for(var h=0;h<e.length;h++)if(g={data:e[h]},this.trigger("unselect",g),g.prevented)return void this.$element.val(f);this.$element.trigger("change"),this.trigger("toggle",{})}}},d.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},d.prototype.update=function(b,d){if(b.call(this,d),!(this.$selection.find(".select2-selection__placeholder").length>0||0===d.length)){var e=this.options.get("translations").get("removeAllItems"),f=a('<span class="select2-selection__clear" title="'+e()+'">&times;</span>');c.StoreData(f[0],"data",d),this.$selection.find(".select2-selection__rendered").prepend(f)}},d}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,d,e){var f=this;a.call(this,d,e),d.on("open",function(){f.$search.trigger("focus")}),d.on("close",function(){f.$search.val(""),f.$search.removeAttr("aria-activedescendant"),f.$search.trigger("focus")}),d.on("enable",function(){f.$search.prop("disabled",!1),f._transferTabIndex()}),d.on("disable",function(){f.$search.prop("disabled",!0)}),d.on("focus",function(a){f.$search.trigger("focus")}),d.on("results:focus",function(a){f.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){f.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){f._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),f.trigger("keypress",a),f._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===f.$search.val()){var d=f.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var e=b.GetData(d[0],"data");f.searchRemoveChoice(e),a.preventDefault()}}});var g=document.documentMode,h=g&&g<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(h)return void f.$selection.off("input.search input.searchcheck");f.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(h&&"input"===a.type)return void f.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&f.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;if(this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c){this.$element.find("[data-select2-tag]").length?this.$element.focus():this.$search.focus()}},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],g=["opening","closing","selecting","unselecting","clearing"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"â’¶":"A","ï¼¡":"A","Ã€":"A","Ã":"A","Ã‚":"A","áº¦":"A","áº¤":"A","áºª":"A","áº¨":"A","Ãƒ":"A","Ä€":"A","Ä‚":"A","áº°":"A","áº®":"A","áº´":"A","áº²":"A","È¦":"A","Ç ":"A","Ã„":"A","Çž":"A","áº¢":"A","Ã…":"A","Çº":"A","Ç":"A","È€":"A","È‚":"A","áº ":"A","áº¬":"A","áº¶":"A","á¸€":"A","Ä„":"A","Èº":"A","â±¯":"A","êœ²":"AA","Ã†":"AE","Ç¼":"AE","Ç¢":"AE","êœ´":"AO","êœ¶":"AU","êœ¸":"AV","êœº":"AV","êœ¼":"AY","â’·":"B","ï¼¢":"B","á¸‚":"B","á¸„":"B","á¸†":"B","Éƒ":"B","Æ‚":"B","Æ":"B","â’¸":"C","ï¼£":"C","Ä†":"C","Äˆ":"C","ÄŠ":"C","ÄŒ":"C","Ã‡":"C","á¸ˆ":"C","Æ‡":"C","È»":"C","êœ¾":"C","â’¹":"D","ï¼¤":"D","á¸Š":"D","ÄŽ":"D","á¸Œ":"D","á¸":"D","á¸’":"D","á¸Ž":"D","Ä":"D","Æ‹":"D","ÆŠ":"D","Æ‰":"D","ê¹":"D","Ç±":"DZ","Ç„":"DZ","Ç²":"Dz","Ç…":"Dz","â’º":"E","ï¼¥":"E","Ãˆ":"E","Ã‰":"E","ÃŠ":"E","á»€":"E","áº¾":"E","á»„":"E","á»‚":"E","áº¼":"E","Ä’":"E","á¸”":"E","á¸–":"E","Ä”":"E","Ä–":"E","Ã‹":"E","áºº":"E","Äš":"E","È„":"E","È†":"E","áº¸":"E","á»†":"E","È¨":"E","á¸œ":"E","Ä˜":"E","á¸˜":"E","á¸š":"E","Æ":"E","ÆŽ":"E","â’»":"F","ï¼¦":"F","á¸ž":"F","Æ‘":"F","ê»":"F","â’¼":"G","ï¼§":"G","Ç´":"G","Äœ":"G","á¸ ":"G","Äž":"G","Ä ":"G","Ç¦":"G","Ä¢":"G","Ç¤":"G","Æ“":"G","êž ":"G","ê½":"G","ê¾":"G","â’½":"H","ï¼¨":"H","Ä¤":"H","á¸¢":"H","á¸¦":"H","Èž":"H","á¸¤":"H","á¸¨":"H","á¸ª":"H","Ä¦":"H","â±§":"H","â±µ":"H","êž":"H","â’¾":"I","ï¼©":"I","ÃŒ":"I","Ã":"I","ÃŽ":"I","Ä¨":"I","Äª":"I","Ä¬":"I","Ä°":"I","Ã":"I","á¸®":"I","á»ˆ":"I","Ç":"I","Èˆ":"I","ÈŠ":"I","á»Š":"I","Ä®":"I","á¸¬":"I","Æ—":"I","â’¿":"J","ï¼ª":"J","Ä´":"J","Éˆ":"J","â“€":"K","ï¼«":"K","á¸°":"K","Ç¨":"K","á¸²":"K","Ä¶":"K","á¸´":"K","Æ˜":"K","â±©":"K","ê€":"K","ê‚":"K","ê„":"K","êž¢":"K","â“":"L","ï¼¬":"L","Ä¿":"L","Ä¹":"L","Ä½":"L","á¸¶":"L","á¸¸":"L","Ä»":"L","á¸¼":"L","á¸º":"L","Å":"L","È½":"L","â±¢":"L","â± ":"L","êˆ":"L","ê†":"L","êž€":"L","Ç‡":"LJ","Çˆ":"Lj","â“‚":"M","ï¼­":"M","á¸¾":"M","á¹€":"M","á¹‚":"M","â±®":"M","Æœ":"M","â“ƒ":"N","ï¼®":"N","Ç¸":"N","Åƒ":"N","Ã‘":"N","á¹„":"N","Å‡":"N","á¹†":"N","Å…":"N","á¹Š":"N","á¹ˆ":"N","È ":"N","Æ":"N","êž":"N","êž¤":"N","ÇŠ":"NJ","Ç‹":"Nj","â“„":"O","ï¼¯":"O","Ã’":"O","Ã“":"O","Ã”":"O","á»’":"O","á»":"O","á»–":"O","á»”":"O","Ã•":"O","á¹Œ":"O","È¬":"O","á¹Ž":"O","ÅŒ":"O","á¹":"O","á¹’":"O","ÅŽ":"O","È®":"O","È°":"O","Ã–":"O","Èª":"O","á»Ž":"O","Å":"O","Ç‘":"O","ÈŒ":"O","ÈŽ":"O","Æ ":"O","á»œ":"O","á»š":"O","á» ":"O","á»ž":"O","á»¢":"O","á»Œ":"O","á»˜":"O","Çª":"O","Ç¬":"O","Ã˜":"O","Ç¾":"O","Æ†":"O","ÆŸ":"O","êŠ":"O","êŒ":"O","Å’":"OE","Æ¢":"OI","êŽ":"OO","È¢":"OU","â“…":"P","ï¼°":"P","á¹”":"P","á¹–":"P","Æ¤":"P","â±£":"P","ê":"P","ê’":"P","ê”":"P","â“†":"Q","ï¼±":"Q","ê–":"Q","ê˜":"Q","ÉŠ":"Q","â“‡":"R","ï¼²":"R","Å”":"R","á¹˜":"R","Å˜":"R","È":"R","È’":"R","á¹š":"R","á¹œ":"R","Å–":"R","á¹ž":"R","ÉŒ":"R","â±¤":"R","êš":"R","êž¦":"R","êž‚":"R","â“ˆ":"S","ï¼³":"S","áºž":"S","Åš":"S","á¹¤":"S","Åœ":"S","á¹ ":"S","Å ":"S","á¹¦":"S","á¹¢":"S","á¹¨":"S","È˜":"S","Åž":"S","â±¾":"S","êž¨":"S","êž„":"S","â“‰":"T","ï¼´":"T","á¹ª":"T","Å¤":"T","á¹¬":"T","Èš":"T","Å¢":"T","á¹°":"T","á¹®":"T","Å¦":"T","Æ¬":"T","Æ®":"T","È¾":"T","êž†":"T","êœ¨":"TZ","â“Š":"U","ï¼µ":"U","Ã™":"U","Ãš":"U","Ã›":"U","Å¨":"U","á¹¸":"U","Åª":"U","á¹º":"U","Å¬":"U","Ãœ":"U","Ç›":"U","Ç—":"U","Ç•":"U","Ç™":"U","á»¦":"U","Å®":"U","Å°":"U","Ç“":"U","È”":"U","È–":"U","Æ¯":"U","á»ª":"U","á»¨":"U","á»®":"U","á»¬":"U","á»°":"U","á»¤":"U","á¹²":"U","Å²":"U","á¹¶":"U","á¹´":"U","É„":"U","â“‹":"V","ï¼¶":"V","á¹¼":"V","á¹¾":"V","Æ²":"V","êž":"V","É…":"V","ê ":"VY","â“Œ":"W","ï¼·":"W","áº€":"W","áº‚":"W","Å´":"W","áº†":"W","áº„":"W","áºˆ":"W","â±²":"W","â“":"X","ï¼¸":"X","áºŠ":"X","áºŒ":"X","â“Ž":"Y","ï¼¹":"Y","á»²":"Y","Ã":"Y","Å¶":"Y","á»¸":"Y","È²":"Y","áºŽ":"Y","Å¸":"Y","á»¶":"Y","á»´":"Y","Æ³":"Y","ÉŽ":"Y","á»¾":"Y","â“":"Z","ï¼º":"Z","Å¹":"Z","áº":"Z","Å»":"Z","Å½":"Z","áº’":"Z","áº”":"Z","Æµ":"Z","È¤":"Z","â±¿":"Z","â±«":"Z","ê¢":"Z","â“":"a","ï½":"a","áºš":"a","Ã ":"a","Ã¡":"a","Ã¢":"a","áº§":"a","áº¥":"a","áº«":"a","áº©":"a","Ã£":"a","Ä":"a","Äƒ":"a","áº±":"a","áº¯":"a","áºµ":"a","áº³":"a","È§":"a","Ç¡":"a","Ã¤":"a","ÇŸ":"a","áº£":"a","Ã¥":"a","Ç»":"a","ÇŽ":"a","È":"a","Èƒ":"a","áº¡":"a","áº­":"a","áº·":"a","á¸":"a","Ä…":"a","â±¥":"a","É":"a","êœ³":"aa","Ã¦":"ae","Ç½":"ae","Ç£":"ae","êœµ":"ao","êœ·":"au","êœ¹":"av","êœ»":"av","êœ½":"ay","â“‘":"b","ï½‚":"b","á¸ƒ":"b","á¸…":"b","á¸‡":"b","Æ€":"b","Æƒ":"b","É“":"b","â“’":"c","ï½ƒ":"c","Ä‡":"c","Ä‰":"c","Ä‹":"c","Ä":"c","Ã§":"c","á¸‰":"c","Æˆ":"c","È¼":"c","êœ¿":"c","â†„":"c","â““":"d","ï½„":"d","á¸‹":"d","Ä":"d","á¸":"d","á¸‘":"d","á¸“":"d","á¸":"d","Ä‘":"d","ÆŒ":"d","É–":"d","É—":"d","êº":"d","Ç³":"dz","Ç†":"dz","â“”":"e","ï½…":"e","Ã¨":"e","Ã©":"e","Ãª":"e","á»":"e","áº¿":"e","á»…":"e","á»ƒ":"e","áº½":"e","Ä“":"e","á¸•":"e","á¸—":"e","Ä•":"e","Ä—":"e","Ã«":"e","áº»":"e","Ä›":"e","È…":"e","È‡":"e","áº¹":"e","á»‡":"e","È©":"e","á¸":"e","Ä™":"e","á¸™":"e","á¸›":"e","É‡":"e","É›":"e","Ç":"e","â“•":"f","ï½†":"f","á¸Ÿ":"f","Æ’":"f","ê¼":"f","â“–":"g","ï½‡":"g","Çµ":"g","Ä":"g","á¸¡":"g","ÄŸ":"g","Ä¡":"g","Ç§":"g","Ä£":"g","Ç¥":"g","É ":"g","êž¡":"g","áµ¹":"g","ê¿":"g","â“—":"h","ï½ˆ":"h","Ä¥":"h","á¸£":"h","á¸§":"h","ÈŸ":"h","á¸¥":"h","á¸©":"h","á¸«":"h","áº–":"h","Ä§":"h","â±¨":"h","â±¶":"h","É¥":"h","Æ•":"hv","â“˜":"i","ï½‰":"i","Ã¬":"i","Ã­":"i","Ã®":"i","Ä©":"i","Ä«":"i","Ä­":"i","Ã¯":"i","á¸¯":"i","á»‰":"i","Ç":"i","È‰":"i","È‹":"i","á»‹":"i","Ä¯":"i","á¸­":"i","É¨":"i","Ä±":"i","â“™":"j","ï½Š":"j","Äµ":"j","Ç°":"j","É‰":"j","â“š":"k","ï½‹":"k","á¸±":"k","Ç©":"k","á¸³":"k","Ä·":"k","á¸µ":"k","Æ™":"k","â±ª":"k","ê":"k","êƒ":"k","ê…":"k","êž£":"k","â“›":"l","ï½Œ":"l","Å€":"l","Äº":"l","Ä¾":"l","á¸·":"l","á¸¹":"l","Ä¼":"l","á¸½":"l","á¸»":"l","Å¿":"l","Å‚":"l","Æš":"l","É«":"l","â±¡":"l","ê‰":"l","êž":"l","ê‡":"l","Ç‰":"lj","â“œ":"m","ï½":"m","á¸¿":"m","á¹":"m","á¹ƒ":"m","É±":"m","É¯":"m","â“":"n","ï½Ž":"n","Ç¹":"n","Å„":"n","Ã±":"n","á¹…":"n","Åˆ":"n","á¹‡":"n","Å†":"n","á¹‹":"n","á¹‰":"n","Æž":"n","É²":"n","Å‰":"n","êž‘":"n","êž¥":"n","ÇŒ":"nj","â“ž":"o","ï½":"o","Ã²":"o","Ã³":"o","Ã´":"o","á»“":"o","á»‘":"o","á»—":"o","á»•":"o","Ãµ":"o","á¹":"o","È­":"o","á¹":"o","Å":"o","á¹‘":"o","á¹“":"o","Å":"o","È¯":"o","È±":"o","Ã¶":"o","È«":"o","á»":"o","Å‘":"o","Ç’":"o","È":"o","È":"o","Æ¡":"o","á»":"o","á»›":"o","á»¡":"o","á»Ÿ":"o","á»£":"o","á»":"o","á»™":"o","Ç«":"o","Ç­":"o","Ã¸":"o","Ç¿":"o","É”":"o","ê‹":"o","ê":"o","Éµ":"o","Å“":"oe","Æ£":"oi","È£":"ou","ê":"oo","â“Ÿ":"p","ï½":"p","á¹•":"p","á¹—":"p","Æ¥":"p","áµ½":"p","ê‘":"p","ê“":"p","ê•":"p","â“ ":"q","ï½‘":"q","É‹":"q","ê—":"q","ê™":"q","â“¡":"r","ï½’":"r","Å•":"r","á¹™":"r","Å™":"r","È‘":"r","È“":"r","á¹›":"r","á¹":"r","Å—":"r","á¹Ÿ":"r","É":"r","É½":"r","ê›":"r","êž§":"r","êžƒ":"r","â“¢":"s","ï½“":"s","ÃŸ":"s","Å›":"s","á¹¥":"s","Å":"s","á¹¡":"s","Å¡":"s","á¹§":"s","á¹£":"s","á¹©":"s","È™":"s","ÅŸ":"s","È¿":"s","êž©":"s","êž…":"s","áº›":"s","â“£":"t","ï½”":"t","á¹«":"t","áº—":"t","Å¥":"t","á¹­":"t","È›":"t","Å£":"t","á¹±":"t","á¹¯":"t","Å§":"t","Æ­":"t","Êˆ":"t","â±¦":"t","êž‡":"t","êœ©":"tz","â“¤":"u","ï½•":"u","Ã¹":"u","Ãº":"u","Ã»":"u","Å©":"u","á¹¹":"u","Å«":"u","á¹»":"u","Å­":"u","Ã¼":"u","Çœ":"u","Ç˜":"u","Ç–":"u","Çš":"u","á»§":"u","Å¯":"u","Å±":"u","Ç”":"u","È•":"u","È—":"u","Æ°":"u","á»«":"u","á»©":"u","á»¯":"u","á»­":"u","á»±":"u","á»¥":"u","á¹³":"u","Å³":"u","á¹·":"u","á¹µ":"u","Ê‰":"u","â“¥":"v","ï½–":"v","á¹½":"v","á¹¿":"v","Ê‹":"v","êŸ":"v","ÊŒ":"v","ê¡":"vy","â“¦":"w","ï½—":"w","áº":"w","áºƒ":"w","Åµ":"w","áº‡":"w","áº…":"w","áº˜":"w","áº‰":"w","â±³":"w","â“§":"x","ï½˜":"x","áº‹":"x","áº":"x","â“¨":"y","ï½™":"y","á»³":"y","Ã½":"y","Å·":"y","á»¹":"y","È³":"y","áº":"y","Ã¿":"y","á»·":"y","áº™":"y","á»µ":"y","Æ´":"y","É":"y","á»¿":"y","â“©":"z","ï½š":"z","Åº":"z","áº‘":"z","Å¼":"z","Å¾":"z","áº“":"z","áº•":"z","Æ¶":"z","È¥":"z","É€":"z","â±¬":"z","ê£":"z","Î†":"Î‘","Îˆ":"Î•","Î‰":"Î—","ÎŠ":"Î™","Îª":"Î™","ÎŒ":"ÎŸ","ÎŽ":"Î¥","Î«":"Î¥","Î":"Î©","Î¬":"Î±","Î­":"Îµ","Î®":"Î·","Î¯":"Î¹","ÏŠ":"Î¹","Î":"Î¹","ÏŒ":"Î¿","Ï":"Ï…","Ï‹":"Ï…","Î°":"Ï…","ÏŽ":"Ï‰","Ï‚":"Ïƒ","â€™":"'"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){b.RemoveData(this)})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var d;a.children?(d=document.createElement("optgroup"),d.label=a.text):(d=document.createElement("option"),void 0!==d.textContent?d.textContent=a.text:d.innerText=a.text),void 0!==a.id&&(d.value=a.id),a.disabled&&(d.disabled=!0),a.selected&&(d.selected=!0),a.title&&(d.title=a.title);var e=c(d),f=this._normalizeItem(a);return f.element=d,b.StoreData(d,"data",f),e},d.prototype.item=function(a){var d={};if(null!=(d=b.GetData(a[0],"data")))return d;if(a.is("option"))d={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){d={text:a.prop("label"),children:[],title:a.prop("title")};for(var e=a.children("option"),f=[],g=0;g<e.length;g++){var h=c(e[g]),i=this.item(h);f.push(i)}d.children=f}return d=this._normalizeItem(d),d.element=a[0],b.StoreData(a[0],"data",d),d},d.prototype._normalizeItem=function(a){a!==Object(a)&&(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){"status"in d&&(0===d.status||"0"===d.status)||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val(""),e.$search.blur()}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){b.StoreData(this,"select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(c){var d=b.GetData(this,"select2-scroll-position");a(this).scrollTop(d.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",["../utils"],function(a){function b(){}return b.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},b.prototype._handleSelectOnClose=function(b,c){if(c&&null!=c.originalSelect2Event){var d=c.originalSelect2Event;if("select"===d._type||"unselect"===d._type)return}var e=this.getHighlightedResults();if(!(e.length<1)){var f=a.GetData(e[0],"data");null!=f.element&&f.element.selected||null==f.element&&f.selected||this.trigger("select",{data:f})}},b}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&(c.ctrlKey||c.metaKey)||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more resultsâ€¦"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searchingâ€¦"},removeAllItems:function(){return"Remove all items"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(!0,this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){function c(a,b){return b.toUpperCase()}var e=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),d.GetData(a[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),d.StoreData(a[0],"data",d.GetData(a[0],"select2Tags")),d.StoreData(a[0],"tags",!0)),d.GetData(a[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",d.GetData(a[0],"ajaxUrl")),d.StoreData(a[0],"ajax-Url",d.GetData(a[0],"ajaxUrl")));for(var f={},g=0;g<a[0].attributes.length;g++){var h=a[0].attributes[g].name,i="data-";if(h.substr(0,i.length)==i){var j=h.substring(i.length),k=d.GetData(a[0],j);f[j.replace(/-([a-z])/g,c)]=k}}b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset&&(f=b.extend(!0,{},a[0].dataset,f));var l=b.extend(!0,{},d.GetData(a[0]),f);l=d._convertData(l);for(var m in l)b.inArray(m,e)>-1||(b.isPlainObject(this.options[m])?b.extend(this.options[m],l[m]):this.options[m]=l[m]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,d){null!=c.GetData(a[0],"select2")&&c.GetData(a[0],"select2").destroy(),this.$element=a,this.id=this._generateId(a),d=d||{},this.options=new b(d,a),e.__super__.constructor.call(this);var f=a.attr("tabindex")||0;c.StoreData(a[0],"old-tabindex",f),a.attr("tabindex","-1");var g=this.options.get("dataAdapter");this.dataAdapter=new g(a,this.options);var h=this.render();this._placeContainer(h);var i=this.options.get("selectionAdapter");this.selection=new i(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,h);var j=this.options.get("dropdownAdapter");this.dropdown=new j(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,h);var k=this.options.get("resultsAdapter");this.results=new k(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){l.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),c.StoreData(a[0],"select2",this),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",c.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),c.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),c.StoreData(b[0],"element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(a,b,c,d,e){if(null==a.fn.select2){var f=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,g=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=e.GetData(this,"select2");null==a&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=a[b].apply(a,g)}),a.inArray(b,f)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
/**
 * IE Handling Script Implementation
 * **/
(function (_global) {
    if(_global){
        /**Script to Handle "name" property of all the Function objects - Start**/
        var setName = function setName(fn) {
            if(fn===Function){
                Object.defineProperty(Function.prototype, 'name', {
                    get: function() {
                        var name = "";
                        if((this.hasOwnProperty!== undefined) && (typeof(this.hasOwnProperty)==="function") && this.hasOwnProperty('name')){
                            name = (this.toString().match(/^function\s*([^\s(]+)/) || [])[1];
                            try{Object.defineProperty(this, 'name', { value: name });}
                            catch(e){console.info(this," already name defined");}
                        }
                        return name;
                    }
                });
            }
            if ((typeof(fn)==="function")) {
                var fnExpr = fn.toString().split("function ");
                var name = (fnExpr && fnExpr.length>1) ?  (fnExpr[1].split("()")[0]) : "";
                try{Object.defineProperty(fn, 'name', {get: function() {return name;}});}
                catch(e){console.info(this," already name defined");}
            }
        };
        Object.getOwnPropertyNames(_global)
            .filter(function(eachObj){return (typeof(_global[eachObj])==="function") && (_global[eachObj].name===undefined);})
            .forEach(function (fnName) { setName(_global[fnName]);});
        /**Script to Handle "name" property of all the Function objects - End**/
    }
})(window);

(function () {

	  if ( typeof window.CustomEvent === "function" ) return false;

	  function CustomEvent ( event, params ) {
	    params = params || { bubbles: false, cancelable: false, detail: undefined };
	    var evt = document.createEvent( 'CustomEvent' );
	    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
	    return evt;
	   }

	  CustomEvent.prototype = window.Event.prototype;

	  window.CustomEvent = CustomEvent;
})();


/*******************************************JS Helper - Start******************************************************/

/**
 * This module consist all the required helper function .
 * This module is to enhance its implementation. Keep adding commonly used functions in this module and use this module as dependency.
 */
(function (_global) {

    var _jsHelper = (function () {

        var jsHelperObj = {};

        var noopFunc = function(){};
        
        var isIE = function isIE(testEdge){
            if(isDefined(navigator) && isDefined(navigator.userAgent)){
                var ieRegex = /(Trident\/)/;
                var edgeRegex = /(Edge\/)/;
                return ieRegex.test(navigator.userAgent) && (testEdge===true ? edgeRegex.test(navigator.userAgent) : true);
            }
            return false;
        }
        jsHelperObj.isIE = jsHelperObj.isIE = isIE;

        var not = function notOperator(boolVal) {
            return isBool(boolVal) ? !boolVal : boolVal;
        }
        jsHelperObj.notOperator = jsHelperObj.not = not;

        var and = function andOperator(condition1, condition2) {
            if (not((isBool(condition1) && isBool(condition2)))) {
                return false;
            }
            return (condition1 && condition2);
        }
        jsHelperObj.andOperator = jsHelperObj.and = and;

        var andMany = function andOperatorMany() {
            var result = true;
            for (var i in arguments) {
                result = and(result, arguments[i]);
            }
            return result;
        }
        jsHelperObj.andOperatorMany = jsHelperObj.andMany = andMany;

        var or = function orOperator(condition1, condition2) {
            if (not((isBool(condition1) && isBool(condition2)))) {
                return false;
            }
            return (condition1 || condition2);
        }
        jsHelperObj.orOperator = jsHelperObj.or = or;

        var orMany = function orOperatorMany() {
            var result = false;
            for (var i in arguments) {
                result = or(result, arguments[i]);
            }
            return result;
        }
        jsHelperObj.orOperatorMany = jsHelperObj.orMany = orMany;

        var _opOneWithMany = function _operatorOneWithMany(fnOp,args){
            if(andMany(isFunc(fnOp),isDefined(args),_isLenPropDef(args))){
                var status = isEqRef(fnOp,and);
                if(isGt(args.length,2)){
                    var value = args[0];
                    var fnBool = isEqRef(fnOp,and) ? isFalse : isTrue;
                    for(var i=1; isLt(i,args.length); i++){
                        status = fnOp(status,isEqVal(value,args[i]));
                        if(fnBool(status)){
                            break;
                        }
                    }
                }
                return status;
            }
            return false;
        };

        var orOneWithMany = function orOneWithMany(){
            return _opOneWithMany(or,arguments);
        };
        jsHelperObj.orOneWithMany = jsHelperObj.orOneWithMany = orOneWithMany;

        var andOneWithMany = function andOneWithMany(){
            return _opOneWithMany(and,arguments);
        };
        jsHelperObj.andOneWithMany = jsHelperObj.andOneWithMany = andOneWithMany;

        var ternaryFunc = function ternaryOperatorFunction(condition, conditionTrueValue, conditionFalseValue) {
            if(orMany(isUndefined(condition), isUndefined(conditionTrueValue), isUndefined(conditionFalseValue))){
                return false;
            }
            return condition ? conditionTrueValue : conditionFalseValue;
        };
        jsHelperObj.ternaryOperatorFunction = jsHelperObj.ternaryFunc = ternaryFunc;

        var isEqRef = function isEqualByReference() {
            var mingArg = 2;
            if (isLt(arguments.length, mingArg)) {
                exceptionUtility.throwErr("Minumum " + mingArg + " arguments required!")
            }
            for (var i = 0; i < arguments.length - 1; i++) {
                if (arguments[i] !== arguments[i + 1]) {
                    return false;
                }
            }
            return true;
        }
        jsHelperObj.isEqualByReference = jsHelperObj.isEqRef = isEqRef;

        var isEqVal = function isEqualByValue(val1, val2, caseInsensitive) {
            var val1Str = String(val1);
            var val2Str = String(val2);
            if (isTrue(caseInsensitive)) {
                val1Str = val1Str.toLowerCase();
                val2Str = val2Str.toLowerCase();
            }
            return isEqRef(val1Str, val2Str);
        }
        jsHelperObj.isEqualByValue = jsHelperObj.isEqVal = isEqVal;

        var isEqValMany = function isEqualByValueMany() {
            for (var i = 0; i < arguments.length - 1; i++) {
                if (!isEqVal(arguments[i], arguments[i + 1])) {
                    return false;
                }
            }
            return true;
        }
        jsHelperObj.isEqualByValueMany = jsHelperObj.isEqValMany = isEqValMany;

        var isEqValManyCI = function isEqualByValueManyCI() {
            for (var i = 0; i < arguments.length - 1; i++) {
                if (!isEqVal(arguments[i], arguments[i + 1], true)) {
                    return false;
                }
            }
            return true;
        }
        jsHelperObj.isEqualByValueManyCI = jsHelperObj.isEqValManyCI = isEqValManyCI;

        var isGt = function isGreaterThan(val1, val2) {
            return (isNum(val1) && isNum(val2)) ? (val1 > val2) : false;
        }
        jsHelperObj.isGreaterThan = jsHelperObj.isGt = isGt;

        var isLt = function isLessThan(val1, val2) {
            return (isNum(val1) && isNum(val2)) ? (val1 < val2) : false;
        }
        jsHelperObj.isLessThan = jsHelperObj.isLt = isLt;

        var isDefined = function isDefined(val,strict) {
            return not(isUndefined(val,isTrue(strict)));
        };
        jsHelperObj.isDefined = jsHelperObj.isDef = isDefined;

        var isUndefined = function isUndefined(val,strict) {
            return isTrue(strict) ? (val===undefined) : (val ? false : true);
        };
        jsHelperObj.isUndefined = jsHelperObj.isUndef = isUndefined;

        var isNull = function isNullStrict(val) {
            return isEqVal(val, null);
        };
        jsHelperObj.isNull = jsHelperObj.isNull = isNull;

        var isNonNull = function isNonNullStrict(val) {
            return !isNull(val);
        };
        jsHelperObj.isNonNull = jsHelperObj.isNonNull = isNonNull;

        var isTrue = function isBooleanTrue(val) {
            return val === true;
        };
        jsHelperObj.isTrue = isTrue;

        var isFalse = function isBooleanFalse(val) {
            return val === false;
        };
        jsHelperObj.isFalse = isFalse;

        var isFunc = function isFunction(fn) {
            return isDefined(fn) && (fn instanceof Function);
        };
        jsHelperObj.isFunction = jsHelperObj.isFunc = isFunc;

        var isObj = function isObject(obj) {
            return isDefined(obj) && (obj instanceof Object);
        };
        jsHelperObj.isObject = jsHelperObj.isObj = isObj;

        var isStr = function isString(str) {
            return isDefined(str,true) && ((str instanceof String) || (typeof (str) === String.name.toLowerCase()));
        };
        jsHelperObj.isString = jsHelperObj.isStr = isStr;

        var isNum = function isNumber(num,allowBool) {
            num = and(isTrue(allowBool),isTrue(num)) ? 1 : and(isTrue(allowBool),isFalse(num)) ? 0 : num;
            return isDefined(num,true) && ((num instanceof Number) || (typeof (num) === Number.name.toLowerCase()));
        };
        jsHelperObj.isNumber = jsHelperObj.isNum = isNum;

        var isInt = function isInteger(num) {
            return isNum(num) && Number.isSafeInteger(num);
        };
        jsHelperObj.isInteger = jsHelperObj.isInt = isInt;

        var isBool = function isBoolean(bool) {
            return ((bool instanceof Boolean) || (typeof (bool) === Boolean.name.toLowerCase()));
        };
        jsHelperObj.isBoolean = jsHelperObj.isBool = isBool;

        var isArr = function isArray(arr) {
            return Array.isArray(arr);
        };
        jsHelperObj.isArray = jsHelperObj.isArr = isArr;

        var _isLenPropDef = function isLengthPropertyDefined(val) {
            return isDefined(val,true) && isDefined(val.length,true);
        };

        var isEmpArr = function isEmptyArray(arr) {
            return _isLenPropDef(arr) && isEqVal(arr.length, 0);
        };
        jsHelperObj.isEmpArr = jsHelperObj.isEmptyArray = isEmpArr;

        var isEmpObj = function isEmptyObject(obj) {
            return isDefined(obj) && isObj(obj) && isEmpArr(Object.keys(obj));
        };
        jsHelperObj.isEmpObj = jsHelperObj.isEmptyObject = isEmpObj;

        var isFormData = function (formData) {
            return isFunc(FormData) ? (formData instanceof FormData) : false;
        };
        jsHelperObj.isFormData = jsHelperObj.isFormData = isFormData;

        var arrIncludes = function arrayIncludes(arr, val) {
            return isArr(arr) && !arr.every(function(eachVal, index, arr) {return eachVal !== val;});
        };
        jsHelperObj.arrayIncludes = jsHelperObj.arrIncludes = arrIncludes;

        var arrFill = function arrayFill(fillValue, arrOrCount) {
            return Array.apply(null, isArr(arrOrCount) ? arrOrCount : (Array(arrOrCount))).map(function () { return isObj(fillValue) ? jsHelper.cloneObj(fillValue, true) : fillValue });
        };
        jsHelperObj.arrFill = jsHelperObj.arrayFill = arrFill;

        var arrOfArrConcat = function arrayOfArrayConcat(arrOfArr) {
            return toArr(arrOfArr).reduce(function (p, n) {
                return p.concat(n)
            });
        };
        jsHelperObj.arrOfArrConcat = jsHelperObj.arrayOfArrayConcat = arrOfArrConcat;

        var isDate = function isDate(date) {
            return (date instanceof Date);
        };
        jsHelperObj.isDate = jsHelperObj.isDate = isDate;

        var isValidDate = function isValidDate(date) {
            /*if (isDate(date)) {
                return true;
            }
            var parsedDate = new Date(Date.parse(date));
            var parsedDateStr = parsedDate.toDateString();
            if (parsedDateStr === "Invalid Date") {
                return false;
            }
            return true;*/
            return isDate(date) ? true : not(((new Date(Date.parse(date))).toDateString()==="Invalid Date"));
        };
        jsHelperObj.isValidDate = jsHelperObj.isValidDate = isValidDate;

        var toDateByTimeZoneOffset = function toDateByTimeZoneOffset(utcDate,timezoneOffset){
            if(isTrue(isIE())){
                utcDate = utcDate.replace(/-/g,"/");
            }
            if(isValidDate(utcDate) && isNum(timezoneOffset)){
                utcDate = isStr(utcDate) ? new Date(Date.parse(utcDate)) : utcDate;
                return new Date(Date.UTC(utcDate.getFullYear(),utcDate.getMonth(),utcDate.getDate(),utcDate.getHours(),utcDate.getMinutes(),utcDate.getSeconds(),utcDate.getMilliseconds()) + ((timezoneOffset + utcDate.getTimezoneOffset())*60000));
            }
            return utcDate;
        } 

        var toISTDate = function toISTDate(date){
            return toDateByTimeZoneOffset(date,330);
        }
        jsHelperObj.toISTDate = jsHelperObj.toISTDate = toISTDate;

        var toObj = function toObject(obj, defaultObj) {
            return isObj(obj) ? obj : (isObj(defaultObj) ? defaultObj : Object.create({}));
        };
        jsHelperObj.toObject = jsHelperObj.toObj = toObj;

        var toArr = function toArray(arr, defaultArr) {
            return isArr(arr) ? arr : (isArr(defaultArr) ? defaultArr : Object.create([]));
        };
        jsHelperObj.toArray = jsHelperObj.toArr = toArr;

        var toStr = function toString(val, defaultVal) {
            return isDefined(val) ? String(val) : (isDefined(defaultVal) ? String(defaultVal) : String());
        };
        jsHelperObj.toString = jsHelperObj.toStr = toStr;

        var toNum = function toNumber(val, defaultVal) {
            return (and(isDefined(val,true),not(isEqVal(Number(val),Number.NaN))))
                ? Number(val) : (isNum(defaultVal,true) ? toNumber(defaultVal,Number.NaN) : Number.NaN);
        };
        jsHelperObj.toNumber = jsHelperObj.toNum = toNum;

        var objKeys = function objectKeys(obj) {
            return ternaryFunc(isObj(obj), Object.keys(obj), []);
        };
        jsHelperObj.objectKeys = jsHelperObj.objKeys = objKeys;

        var objVals = function objectValues(obj) {
            return objKeys(obj).map(function (key) {
                return obj[key];
            });
        };
        jsHelperObj.objectValues = jsHelperObj.objVals = objVals;

        var freezeObj = function freezeObject(obj) {
            return Object.freeze(obj);
        };
        jsHelperObj.freezeObject = jsHelperObj.freezeObj = freezeObj;

        var deepFreezeObj = function deepFreezeObject(obj) {
            for (var key in obj) {
                var val = obj[key];
                if (isObj(val)) {
                    deepFreezeObject(val);
                }
            }
            return freezeObj(obj);
        };
        jsHelperObj.deepFreezeObject = jsHelperObj.deepFreezeObj = deepFreezeObj;

        var toCamelCase = function StringToCamelCase(str) {
            return str.split(/[_-]|\s+/).map(function (word, index) {/*
                // If it is the first word make sure to lowercase all the chars.
                if (isEqVal(index,0)) {
                    return word.toLowerCase();
                }
                // If it is not the first word only upper case the first char and lowercase the rest.
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                */
                return isEqVal(index,0) ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }).join('');
        };
        jsHelperObj.toCamelCase = jsHelperObj.toCC = toCamelCase;

        var toSentence = function StringToSentence(str) {
            return str.split(/[_-]|\s+/).map(function (word, index) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }).join(' ');
        };
        jsHelperObj.toSentence = jsHelperObj.toSentc = toSentence;

        var _shallowCopyObj = function shallowCopyObject(obj) {
            var clone = Object.create({});
            Object.keys(toObj(obj)).forEach(function (key) {
                clone[key] = obj[key];
            });
            return clone;
        };

        var _deepCopyObj = function deepCopyObject(obj) {
            var clone = {};
            for (var i in obj) {
                clone[i] = isFunc(obj[i]) ? obj[i] : (isObj(obj[i]) ? deepCopyObject(obj[i]) : obj[i]);
            }
            return clone;
        };

        var cloneObj = function cloneObjectShallowAndDeep(obj, isDeep) {
            return isTrue(isDeep) ? _deepCopyObj(obj) : _shallowCopyObj(obj);
        };
        jsHelperObj.cloneObject = jsHelperObj.cloneObj = cloneObj;

        var defineReadOnlyObjectProperty = function defineReadOnlyObjectProperty(propContext, propName, getVal) {
            Object.defineProperty(propContext, propName, {
                get: function () {
                    return getVal;
                }
            });
            return true;
        };
        jsHelperObj.defineReadOnlyObjectProperty = jsHelperObj.defineReadOnlyObjProp = defineReadOnlyObjectProperty;

        var defineObjectProperty = function defineObjectProperty(propContext, propName,fnSetNotifier) {
            if(!isFunc(fnSetNotifier)){
                fnSetNotifier = noopFunc
            }

            Object.defineProperty(propContext, propName, {
                get: isFunc(propsObj[key]) ? propsObj[key] : noopFunc,
                set: function(value){
                    fnSetNotifier(key,value);
                }
            });
            return true;
        };
        jsHelperObj.defineObjectProperty = jsHelperObj.defineObjProp = defineObjectProperty;

        var defineReadOnlyObjectProperties = function defineReadOnlyObjectProperties(propContext, propsObj) {
            var propertiesObj = {};
            objKeys(propsObj).forEach(function (key) {
                propertiesObj[key] = {
                    get: function () {
                        return propsObj[key];
                    }
                }
            });
            return Object.defineProperties(propContext, propertiesObj);
        };
        jsHelperObj.defineReadOnlyObjectProperties = jsHelperObj.defineReadOnlyObjProps = defineReadOnlyObjectProperties;

        var defineObjectProperties = function defineObjectProperties(propContext, propsObj,fnGetNotifier,fnSetNotifier) {
            if(!isFunc(fnSetNotifier)){
                fnSetNotifier = noopFunc;
            }

            var propertiesObj = {};
            objKeys(propsObj).forEach(function (key) {
                propertiesObj[key] = {
                    get: isFunc(propsObj[key]) ? propsObj[key] : noopFunc,
                    set: function(value){
                        fnSetNotifier(key,value);
                    }
                }
            });
            return Object.defineProperties(propContext, propertiesObj);
        }
        jsHelperObj.defineObjectProperties = jsHelperObj.defineObjProps = defineObjectProperties;

        var flattenObject = function flattenObject(obj) {
            /*var toReturn = {};
            for (var i in obj) {
                if (!obj.hasOwnProperty(i)) continue;
                if ((typeof obj[i]) == 'object') {
                    var flatObject = flattenObject(obj[i]);
                    for (var x in flatObject) {
                        if (!flatObject.hasOwnProperty(x)) continue;
                        toReturn[i + '.' + x] = flatObject[x];                    }
                } else {
                    toReturn[i] = obj[i];
                }
            }
            return toReturn;*/
            var toReturn = {};
            for (var i in obj) {
                if (!obj.hasOwnProperty(i)) continue;
                if (isObj(obj[i])) {
                    var flatObject = flattenObject(obj[i]);
                    for (var x in flatObject) {
                        if (!flatObject.hasOwnProperty(x)) continue;
                        toReturn[i + '.' + x] = flatObject[x];                    }
                } else {
                    toReturn[i] = obj[i];
                }
            }
            return toReturn;
        };
        jsHelperObj.flattenObject = jsHelperObj.flattenObj = flattenObject;

        var unflattenObject = function unflattenObject(obj) {
            var result = {}
            for (var i in obj) {
                var keys = i.split('.')
                keys.reduce(function (r, e, j) {
                    return r[e] || (r[e] = isNaN(Number(keys[j + 1])) ? (keys.length - 1 == j ? obj[i] : {}) : [])
                }, result)
            }
            return result
        };
        jsHelperObj.unflattenObject = jsHelperObj.unflattenObj = unflattenObject;

        var mapFlatObj = function updateFlatObjByKeyMap(keyMappingObj, fromObj, toObj) {
            if (andMany(isDefined(keyMappingObj),isDefined(fromObj),isDefined(toObj))) {
                Object.keys(keyMappingObj).forEach(function (key) {
                    var fromObjKey = key;
                    var toObjKey = keyMappingObj[key];
                    toObj[toObjKey] = fromObj[fromObjKey];
                });
                return toObj;
            }
        };
        jsHelperObj.mapFlatObject = jsHelperObj.mapFlatObj = mapFlatObj;

        var parseJson = function parseJson(jsonStr) {
            return JSON.parse(jsonStr);
        };
        jsHelperObj.parseJson = parseJson;

        var stringifyJson = function stringifyJson(json) {
            return JSON.stringify(json);
        };
        jsHelperObj.stringifyJson = stringifyJson;

        var cloneJson = function (obj) {
            return parseJson(stringifyJson(obj));
        };
        jsHelperObj.cloneJson = cloneJson;

        var extendFunc = function extendFunction(ParentFunc,ChildFunc){
            if(and(isFunc(ParentFunc),isFunc(ChildFunc))){
                ChildFunc.prototype = Object.create(ParentFunc.prototype);
                ChildFunc.prototype.constructor = ChildFunc;
                return true;
            }
            return false;
        };
        jsHelperObj.extendFunction = jsHelperObj.extendFunc = extendFunc;
        
        var getPageNameForGTM = function getPageNameForGTMFunction() {
			return toSentence(pageName.split("/")[1]);
		}
		jsHelperObj.getPageNameForGTM = getPageNameForGTM;

        return freezeObj(jsHelperObj);
    })();

    _jsHelper.defineReadOnlyObjProp(_global, 'jsHelper', _jsHelper);
    // _jsHelper.defineReadOnlyObjProp(_global.jsHelper,'describe',"Description");


})(window || this || {});

/*******************************************JS Helper - End******************************************************/
/*******************************************Exception Handling Utility Module - Start******************************************************/

(function(_global){
    var _exceptionUtility = (function (jsHelper) {
        var exceptionUtility = {};
        
        var throwErr = function throwError(errorMsg){
            throw new Error(jsHelper.toStr(errorMsg));
        }        
        exceptionUtility.throwErr = exceptionUtility.throwError = throwErr;

        var dependencyCheck = function moduleDependencyExceptionCheck(moduleArr, moduleName) {
            if (Array.isArray(moduleArr)) {
                var filteredArr = moduleArr.filter(function (eachDependency) { return jsHelper.isDefined(eachDependency) });
                if (filteredArr.length == moduleArr.length) {
                    return;
                }
            }
            throwErr(jsHelper.toStr(moduleName) + " Module dependency missing!");
        }
        exceptionUtility.dependencyCheck = dependencyCheck;

        return jsHelper.freezeObj(exceptionUtility);
    })(_global.jsHelper);

    _global.jsHelper.defineReadOnlyObjProp(_global,'exceptionUtility',_exceptionUtility);
})(this);

/*******************************************Exception Handling Utility Module - End******************************************************/
/*******************************************App Config - Start******************************************************/

(function(_global){
    var _appConfig = (function (jsHelper) {
        if (exceptionUtility) {
            exceptionUtility.dependencyCheck([jsHelper], "App Config");
        }

        var appName = "tata-capital";
        var contentRoot = "/content/" + appName;
        var apiRoot = contentRoot + "/api";
        var retailApiRoot = contentRoot + "/retailapi";
        var masterApiRoot = contentRoot + "/masters";
        var corporateApiRoot = contentRoot + "/corporate";
        var apiExtension = ".json";
        return jsHelper.freezeObj({
            appName: appName,
            contentRoot: contentRoot,
            apiRoot: apiRoot,
            masterApiRoot : masterApiRoot,
            retailapiRoot: retailApiRoot,
            corporateApiRoot : corporateApiRoot,
            apiExtension: apiExtension
        });
    })(_global.jsHelper);

    _global.jsHelper.defineReadOnlyObjProp(_global,'appConfig',_appConfig);
})(this);

/*******************************************App Config - Start******************************************************/
/*******************************************API Config Module - Start******************************************************/
(function(_global){
    var _apiConfig = (function (jsHelper) {

        if (exceptionUtility) {
            exceptionUtility.dependencyCheck([jsHelper], "API Config");
        }


        /**
         * API Constant Values
         */
        
        //eg. var SAMPLE_TEXT = "SAMPLE_TEXT";
        var GENERATE_OTP = "GENERATE_OTP";
        var VERIFY_OTP = "VERIFY_OTP";
        var SALES_AUTH = "SALES_AUTH";
        var CITY_PRODUCT = "CITY_PRODUCT";
        /**
        * API Constants 
        */
       var apiConstants = {};
       
       //eg. apiConstants[SAMPLE_TEXT] = SAMPLE_TEXT;
       
       apiConstants[GENERATE_OTP] = GENERATE_OTP;
       apiConstants[VERIFY_OTP] = VERIFY_OTP;
       apiConstants[SALES_AUTH] = SALES_AUTH;
       apiConstants[CITY_PRODUCT] = CITY_PRODUCT;
       /**
         * API Selectors
         */
        var apiSelectors = {};
        
        apiSelectors[GENERATE_OTP] = "generateOTP";
        apiSelectors[VERIFY_OTP] = "verifyOTP";
        apiSelectors[SALES_AUTH] = "salesForceAuth";
        apiSelectors[CITY_PRODUCT] = "cityProductMaster";
        //eg. apiSelectors[SAMPLE_Text] = "SAMPLE_Text";
        
        /**
         * API Empty Request Obj
         * **/
        var apiEmptyRequestObjs = {};
        
        apiEmptyRequestObjs[GENERATE_OTP] = {};
        apiEmptyRequestObjs[VERIFY_OTP] = {};
        apiEmptyRequestObjs[CITY_PRODUCT] = {};
        //eg. apiEmptyRequestObjs[SAMPLE_TEXT] = jsHelper.freezeObj(SAMPLE_EMPTY_REQUEST_OBJECT);
        
        var getEmptyRequestObj = function (apiConstant) {
            return jsHelper.freezeObj(jsHelper.cloneObj(apiEmptyRequestObjs[apiConstant]));
        }

        /**
        * API Config Object to expose
        */
        var apiConfig = {};
        Object.keys(apiConstants).forEach(function (eachApiConstant) {
            apiConfig[eachApiConstant] = jsHelper.freezeObj({
                "name": apiConstants[eachApiConstant],
                "selector": apiSelectors[eachApiConstant],
                "getEmptyRequestObj": function () {
                    return getEmptyRequestObj(this.name);
                }
            });
        });

        return jsHelper.freezeObj(apiConfig);
    })(_global.jsHelper);

    _global.jsHelper.defineReadOnlyObjProp(_global,'apiConfig',_apiConfig);
})(this);
/*******************************************API Config Module - End******************************************************/
/*******************************************Product Config Module - Start******************************************************/

(function(_global){
	var _productConfig = (function (jsHelper) {
        if (exceptionUtility) {
            exceptionUtility.dependencyCheck([jsHelper], "App Config");
        }
        
        /**
         * Product Contant Values
         */
        //eg. var SAMPLE_TEXT = "SAMPLE_TEXT";

        /**
         * Product Category Constant Values
        */
        //eg. var SAMPLE_TEXT = "SAMPLE_TEXT";
        /**
         * Product Constants
        */
        var productConstants={};
        //eg. productConstants[SAMPLE_TEXT] = SAMPLE_TEXT;
        
        /**
         * Product Category Constants
        */
        var productCategoryConstants = {};
        //eg. productCategoryConstants[SAMPLE_TEXT] = SAMPLE_TEXT;

        var productCategoryMap = {};
        //eg. productCategoryMap[SAMPLE_TEXT] = [SAMPLE_TEXT];
        

        /**
         * Product IDs
        */
       var productIds = {};
        //eg.  productIds[SAMPLE_TEXT] = "12345";
       
       /**
        * Product Config Object to expose
        */
        var productConfigObj = {};
        Object.keys(productConstants).forEach(function(eachProductConstant){
            var category = getCategoryByProduct(eachProductConstant);
            productConfigObj[eachProductConstant] = jsHelper.freezeObj({
                "name" : productConstants[eachProductConstant],
                "productId" : productIds[eachProductConstant],
                "category" : category,
                "categoryFullName" : jsHelper.toSentence(category)                
            });
        })

        return jsHelper.freezeObj(productConfigObj);
    })(jsHelper);
        
    _global.jsHelper.defineReadOnlyObjProp(_global,'productConfig',_productConfig);
})(this);

/*******************************************Product Config Module - Start******************************************************/
/*******************************************AJAX Utility Module - Start******************************************************/

(function(_global){
    var _ajaxUtility = (function (jsHelper) {
        var ajaxUtilityObj = {};
        if (exceptionUtility) {
            exceptionUtility.dependencyCheck([jsHelper], "AJAX Utility");
        }

        function postAjax(success, failure, url, data, headers) {

            var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
            xmlhttp.open("POST", url);

            if(headers && jsHelper.isObject(headers)){
                Object.keys(headers).forEach(function(key){
                    xmlhttp.setRequestHeader(key,headers[key]);
                });
            }

            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.info("this.responseText: ", this.responseText);
                    if (jsHelper.isFunc(success)) {
                        success(this.responseText);
                    }
                } else if (this.readyState == 4 && this.status != 200) {
                    if (jsHelper.isFunc(failure)) {
                        failure(this.responseText);
                    }
                }
            };
            xmlhttp.onerror = function () {
                if (jsHelper.isFunc(failure)) {
                    failure(this.responseText);
                }
            }

            xmlhttp.send(data);
            return xmlhttp;
        }

        var postJson = function postAjaxJson(url, data) {
            if (!jsHelper.isObj(data)) {
                throw new Error("Request Data not defined!");
            }
            if (!jsHelper.isObj(data.headerJson)) {
                data.headerJson = {};
            }
            data.headerJson["Content-Type"] = "application/json";

            var formData = new FormData();
            formData.append("data", jsHelper.stringifyJson(data));

            var headers = {

            };

            return new Promise(function (resolve, reject) {
                var success = function (response) {
                    resolve(response);
                }
                var failure = function (error) {
                    reject(error);
                }
                postAjax(success, failure, url, formData,headers);
            });
        }
        ajaxUtilityObj.postJson = postJson;

        return jsHelper.freezeObj(ajaxUtilityObj);
    })(_global.jsHelper);

    _global.jsHelper.defineReadOnlyObjProp(_global,'ajaxUtility',_ajaxUtility);
})(this);

/*******************************************AJAX Utility Module - End******************************************************/
/*******************************************API Utility Module - Start******************************************************/

(function (_global) {
    var _apiUtility = (function fnApiUtility(jsHelper, appConfig, apiConfig, ajaxUtility) {
        if (exceptionUtility) {
            exceptionUtility.dependencyCheck([jsHelper, appConfig, apiConfig, ajaxUtility], "API Utility");
        }

        var apiUtilityObj = {};
        var apiExecutionStatus = {};
        var errorObj = {
            "responseJson": {},
            "errorJson": {
                "message": "API Execution going on.",
                "code": "1"
            }
        };
        var defaultCallbackErr = {
            "errorMessage": "CallBack Error"
        }

        var validateStatus = function (response) {
            if (jsHelper.isStr(response)) {
                response = jsHelper.parseJson(response);
            }
            return response["P_ERROR_MESSAGE"] === "SUCCESS";
        }

        var getResponseJson = function (response) {
            return response["responseJson"];
        }

        var call = function callApi(eachApiConfig, data) {
            var apiUrl = appConfig.apiRoot + "." + eachApiConfig.selector + appConfig.apiExtension;
            return new Promise(function (resolve, reject) {
                ajaxUtility
                    .postJson(apiUrl, data)
                    .then(function (responseText) {
                        resolve(responseText);
                    }).catch(function (error) {
                        reject(error);
                    });
            });
        }


    /*    var SAMPLE_TEXT = function SAMPLE_TEXTCall(data) {

            return jsHelper.isFalse(apiExecutionStatus.SAMPLE_TEXT) ?
                new Promise(function (resolve, reject) {
                    apiExecutionStatus.SAMPLE_TEXT = true;
                    call(apiConfig.LOAD_AREAS, data)
                        .then(function (response) {
                            if (jsHelper.isStr(response)) {
                                response = jsHelper.parseJson(response);
                            }
                            var responseJson = getResponseJson(response);

                            if (jsHelper.isNull(responseJson["P_MSG"])) {
                                resolve(response);
                            } else {
                                reject(response);
                            }
                            apiExecutionStatus.SAMPLE_TEXT = false;
                        }).catch(function (err) {
                            reject(jsHelper.isObj(err) ? defaultCallbackErr.errorMessage : err);
                            apiExecutionStatus.SAMPLE_TEXT = false;
                        });
                }) : new Promise(function (resolve, reject) {
                    reject(errorObj)
                });
        }
        apiUtilityObj.SAMPLE_TEXT = SAMPLE_TEXT;
        apiExecutionStatus.SAMPLE_TEXT = false;*/

        var generateOTP = function generateOTPCall(data) {
			
            return jsHelper.isFalse(apiExecutionStatus.generateOTP) ?
                new Promise(function (resolve, reject) {
                    apiExecutionStatus.generateOTP = true;
                    call(apiConfig.GENERATE_OTP, data)
                        .then(function (response) {
                            if (jsHelper.isStr(response)) {
                                response = jsHelper.parseJson(response);
                            }
                            var responseJson = getResponseJson(response);

                            if (jsHelper.isNull(responseJson["P_MSG"])) {
                                resolve(response);
                            } else {
                                reject(response);
                            }
                            apiExecutionStatus.generateOTP = false;
                        }).catch(function (err) {
                            reject(jsHelper.isObj(err) ? defaultCallbackErr.errorMessage : err);
                            apiExecutionStatus.generateOTP = false;
                        });
                }) : new Promise(function (resolve, reject) {
                    reject(errorObj)
                });
        }
        apiUtilityObj.generateOTP = generateOTP;
        apiExecutionStatus.generateOTP = false
        
        
        return jsHelper.freezeObj(apiUtilityObj);

    })(_global.jsHelper, _global.appConfig, _global.apiConfig, _global.ajaxUtility);

    _global.jsHelper.defineReadOnlyObjProp(_global, 'apiUtility', _apiUtility);
})(this);

/*******************************************API Utility Module - End******************************************************/
/*******************************************Base64 Module - Start******************************************************/
(function (_global) {
    var _base64 = (function (jsHelper) {
        if (exceptionUtility) {
            exceptionUtility.dependencyCheck([jsHelper], "Base64");
        }
        var base64Obj = {};
        // Create Base64 Object
        var Base64 = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function (e) {
                var t = "";
                var n, r, i, s, o, u, a;
                var f = 0;
                e = Base64._utf8_encode(e);
                while (f < e.length) {
                    n = e.charCodeAt(f++);
                    r = e.charCodeAt(f++);
                    i = e.charCodeAt(f++);
                    s = n >> 2;
                    o = (n & 3) << 4 | r >> 4;
                    u = (r & 15) << 2 | i >> 6;
                    a = i & 63;
                    if (isNaN(r)) {
                        u = a = 64
                    } else if (isNaN(i)) {
                        a = 64
                    }
                    t = t + Base64._keyStr.charAt(s) + Base64._keyStr.charAt(o) + Base64._keyStr.charAt(u) + Base64._keyStr.charAt(a)
                }
                return t
            },
            decode: function (e) {
                var t = "";
                var n, r, i;
                var s, o, u, a;
                var f = 0;
                e = e.replace(/[^A-Za-z0-9+/=]/g, "");
                while (f < e.length) {
                    s = Base64._keyStr.indexOf(e.charAt(f++));
                    o = Base64._keyStr.indexOf(e.charAt(f++));
                    u = Base64._keyStr.indexOf(e.charAt(f++));
                    a = Base64._keyStr.indexOf(e.charAt(f++));
                    n = s << 2 | o >> 4;
                    r = (o & 15) << 4 | u >> 2;
                    i = (u & 3) << 6 | a;
                    t = t + String.fromCharCode(n);
                    if (u != 64) {
                        t = t + String.fromCharCode(r)
                    }
                    if (a != 64) {
                        t = t + String.fromCharCode(i)
                    }
                }
                t = Base64._utf8_decode(t);
                return t
            },
            _utf8_encode: function (e) {
                e = e.replace(/rn/g, "n");
                var t = "";
                for (var n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r)
                    } else if (r > 127 && r < 2048) {
                        t += String.fromCharCode(r >> 6 | 192);
                        t += String.fromCharCode(r & 63 | 128)
                    } else {
                        t += String.fromCharCode(r >> 12 | 224);
                        t += String.fromCharCode(r >> 6 & 63 | 128);
                        t += String.fromCharCode(r & 63 | 128)
                    }
                }
                return t
            },
            _utf8_decode: function (e) {
                var t = "";
                var n = 0;
                var r = c1 = c2 = 0;
                while (n < e.length) {
                    r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r);
                        n++
                    } else if (r > 191 && r < 224) {
                        c2 = e.charCodeAt(n + 1);
                        t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                        n += 2
                    } else {
                        c2 = e.charCodeAt(n + 1);
                        c3 = e.charCodeAt(n + 2);
                        t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                        n += 3
                    }
                }
                return t
            }
        };

        base64Obj.encode = Base64.encode;
        base64Obj.decode = Base64.decode;

        return _global.jsHelper.freezeObj(base64Obj);
    })(_global.jsHelper);
    _global.jsHelper.defineReadOnlyObjProp(_global, 'base64', _base64);
})(this);
/*******************************************Base64 Module - End******************************************************/

/*******************************************API Conversion Utility Module - Start******************************************************/

(function (_global) {
    var _apiConversionUtility = (function (jsHelper, apiConfig) {

        if (exceptionUtility) {
            exceptionUtility.dependencyCheck([jsHelper, apiConfig],
                "API Conversion Utility");
        }

        
		/**
		 * ***************************SAMPLE_TEXT - START***********************************
		 */
		var apiConversionUtilityObj = {};
        var SAMPLE_TEXT = {};

        var parseSAMPLE_TEXTUiObjToReqObj = function parseUiObjToReqObjForSAMPLE_TEXT(uiObj, reqObj) {

            //TO DO Conversion code goes here

            return reqObj;
        }

        SAMPLE_TEXT.parseSAMPLE_TEXTUiObjToReqObj = parseSAMPLE_TEXTUiObjToReqObj;

        var parseSAMPLE_TEXTResObjToUiObj = function parseResObjToUiObjForSAMPLE_TEXT(reqObj, uiObj) {

            //TO DO Conversion code goes here 

            return uiObj;
        }

        SAMPLE_TEXT.parseSAMPLE_TEXTResObjToUiObj = parseSAMPLE_TEXTResObjToUiObj;
        jsHelper.defineReadOnlyObjProp(apiConversionUtilityObj, 'SAMPLE_TEXT', SAMPLE_TEXT);
		/**
		 * ***************************SAMPLE_TEXT - END***********************************
		 */

        return jsHelper.freezeObj(apiConversionUtilityObj);

    })(_global.jsHelper, _global.apiConfig);

    _global.jsHelper.defineReadOnlyObjProp(_global, 'apiConversionUtility', _apiConversionUtility);
})(this);

/**
 * *****************************************API Conversion Utility Module - END*****************************************************
 */
/*******************************************_UI Object Utility Module - Start******************************************************/

(function(_global){
	var _UIObjectUtility = (function (jsHelper) {
        var UIObjectUtilityObj = {};

        //TO DO code for UI related code.

		return jsHelper.freezeObj(UIObjectUtilityObj); 
	})(_global.jsHelper);

	_global.jsHelper.defineReadOnlyObjProp(_global,'UIObjectUtility',_UIObjectUtility);
})(this);

/*******************************************UI Object Utility Module - Start******************************************************/

    /*******************************************Data Store Utlity - Start******************************************************/
    
    /**
     * 
    */
   (function (_global) {
    
    /**
     * Data Store Name - This value to be use as attribute or key to represent Data Store indentity.
     */
    var DATA_STORE_NAME = '__dataStore__';
    var COMMON_DATA_STORE_NAME = '__common__';

    /**
     * Data Store Type Constants - Different types of Data Stores available in 
    */
    var LOCAL_STORAGE_DATA_STORE = "LOCAL_STORAGE_DATA_STORE"; 
    var SESSION_STORAGE_DATA_STORE = "SESSION_STORAGE_DATA_STORE"; 
    var IN_MEMORY_DATA_STORE = "IN_MEMORY_DATA_STORE";
    var INDEX_DB_DATA_STORE = "INDEX_DB_DATA_STORE";

    /**
     * Data Store Type Object Map
    */
    var _dataStoreObjMap = new Map();
    _dataStoreObjMap.set(LOCAL_STORAGE_DATA_STORE, new Map());
    _dataStoreObjMap.set(SESSION_STORAGE_DATA_STORE, new Map());
    _dataStoreObjMap.set(IN_MEMORY_DATA_STORE, new Map());
    _dataStoreObjMap.set(INDEX_DB_DATA_STORE, new Map());

    /**
     * Data Store Base Implementation Class Function
    */     
    function BaseDataStore(name,dataStoreType){
        var _this = this;
        if (exceptionUtility) {
            exceptionUtility.dependencyCheck([_global.jsHelper], _this.constructor.name);
        }
        var jsHelper = _global.jsHelper;
        

        // if(jsHelper.isEqRef(this.constructor,arguments.callee)){
        if(!(_this instanceof _this.constructor) && !(_this instanceof arguments.callee)){
            exceptionUtility.throwErr("Constructor "+_this.constructor.name+" requires 'new'");
        }
        if(jsHelper.isUndefined(name)){
            exceptionUtility.throwErr("'name' is mandatory!");
        }
        if(jsHelper.isUndefined(dataStoreType)){
            exceptionUtility.throwErr("'dataStoreType' is mandatory!");
        }

        jsHelper.defineReadOnlyObjProps(_this,{
            'name' : name,
            'dataStoreType' : dataStoreType,
            'dataStoreMap' : _dataStoreObjMap.get(dataStoreType)
        });

        if(jsHelper.isUndefined(_this.dataStoreMap.get(name))){
            _this.dataStoreMap.set(name,{});
        }

    };
    BaseDataStore.prototype.set = function(key,value){
        this.dataStoreMap.get(this.name)[key] = value;
        return this;
    };
    BaseDataStore.prototype.unset = function(key,setNull){
        this.dataStoreMap.get(this.name)[key] = jsHelper.isTrue(setNull) ? null : undefined;
        return this;
    };
    BaseDataStore.prototype.get = function(key){
        return this.dataStoreMap.get(this.name)[key];
    };
    BaseDataStore.prototype.delete = function(key){
        return delete(this.dataStoreMap.get(this.name)[key]);
    };

    /**
     * Data Store In Memmory Implementation Function
     */
    function InMemoryDataStore(name){
        var _this = this;
        BaseDataStore.call(_this,name,IN_MEMORY_DATA_STORE);

        jsHelper.freezeObj(_this);
    }
    jsHelper.extendFunc(BaseDataStore,InMemoryDataStore);

    /**
     * Data Store Local Storage Implementation Function
     */
    function LocalStorageDataStore(name){
        var _this = this;

        BaseDataStore.call(_this,name,LOCAL_STORAGE_DATA_STORE);

        jsHelper.freezeObj(_this);
    }
    jsHelper.extendFunc(BaseDataStore,LocalStorageDataStore);

    /**
     * Data Store Local Storage Implementation Function
     */
    function SessionStorageDataStore(name){
        var _this = this;

        BaseDataStore.call(_this,name,SESSION_STORAGE_DATA_STORE);

        jsHelper.freezeObj(_this);
    }
    jsHelper.extendFunc(BaseDataStore,SessionStorageDataStore);

    (function(){
        function populateStorageData(dataStoreObjString,dataStoreType){
            if(jsHelper.isDefined(dataStoreObjString)){
                var dataStoreObj = jsHelper.parseJson(dataStoreObjString);
                if(jsHelper.not(jsHelper.isEmpObj(dataStoreObj))) {
                    var dataStoreMap = _dataStoreObjMap.get(dataStoreType);
                    Object.keys(dataStoreObj).forEach(function (key) {
                        dataStoreMap.set(key, dataStoreObj[key]);
                    });
                }
            }
        }
        /**Load Data From Local Storage - Start**/
        var localDataStoreObjString = localStorage.getItem(DATA_STORE_NAME);
        if(jsHelper.isDefined(localDataStoreObjString,true)){
            populateStorageData(localDataStoreObjString,LOCAL_STORAGE_DATA_STORE);
            localStorage.removeItem(DATA_STORE_NAME);
        }
        /**Load Data From Local Storage - End**/
    
        /**Load Data From Session Storage - Start**/
        var sessionDataStoreObjString = sessionStorage.getItem(DATA_STORE_NAME);
        if(jsHelper.isDefined(localDataStoreObjString,true)){
            populateStorageData(sessionDataStoreObjString,SESSION_STORAGE_DATA_STORE);
            sessionStorage.removeItem(DATA_STORE_NAME);
        }        
        /**Load Data From Session Storage - End**/
    
        var writeData = function writeData(e){
            function _writeData(dataStoreMap){
                if(jsHelper.and(jsHelper.isDefined(dataStoreMap),jsHelper.not(jsHelper.isEqVal(dataStoreMap.size,0)))){
                    var dataStoreObj = {};
                    dataStoreMap.forEach(function(value,key){
                        dataStoreObj[key] = value;
                    });
                    return jsHelper.toObj(dataStoreObj);
                }
            }

            var localStorageDataStoreMap = _dataStoreObjMap.get(LOCAL_STORAGE_DATA_STORE);
            var lsDataStoreObj = _writeData(localStorageDataStoreMap);
            if(jsHelper.isDefined(lsDataStoreObj)){
                localStorage.setItem(DATA_STORE_NAME,jsHelper.stringifyJson(lsDataStoreObj));
            }

            var sessionStorageDataStoreMap = _dataStoreObjMap.get(SESSION_STORAGE_DATA_STORE);
            var ssDataStoreObj = _writeData(sessionStorageDataStoreMap);
            if(jsHelper.isDefined(ssDataStoreObj)){
                sessionStorage.setItem(DATA_STORE_NAME,jsHelper.stringifyJson(ssDataStoreObj));
            }
        };
        window.addEventListener('beforeunload',function(e){
            writeData(e);
        });
        window.addEventListener('unload',function(e){
            writeData(e);
        });
        window.addEventListener('pagehide',function(e){
            writeData(e);
        });
    })();
    


    /**
     * DataStore Factory
    */
    function DataStore(name,dataStoreType){
        if(jsHelper.isEqVal(dataStoreType,IN_MEMORY_DATA_STORE)){
            return new InMemoryDataStore(name);
        }else if(jsHelper.isEqVal(dataStoreType,LOCAL_STORAGE_DATA_STORE)){
            return new LocalStorageDataStore(name);
        }else if(jsHelper.isEqVal(dataStoreType,SESSION_STORAGE_DATA_STORE)){
            return new SessionStorageDataStore(name);
        }
    }

    /**
     * Data Store Utility
     */
    var _dataStoreUtility = (function (jsHelper) {
        if (exceptionUtility) {
            exceptionUtility.dependencyCheck([jsHelper], "Data Store Utility");
        }

        var _dataStoreUtilityObj =  {};

        /***Helper Methods - Start**/
        var _createDataStore = function (name,dataStoreType) {
            return DataStore(name,dataStoreType)
        };
        var _getDataStore = function (name,dataStoreType) {
           return jsHelper.isDefined(_dataStoreObjMap.get(dataStoreType).get(name),true) ? _createDataStore(name,dataStoreType) : null;
        };
        var _clearDataStore = function (name,dataStoreType) {
            _dataStoreObjMap.get(dataStoreType).set(name,Object.create({}));
            return this;
        };
        var _deleteDataStore = function (name,dataStoreType) {
            _dataStoreObjMap.get(dataStoreType).delete(name);
            return this;
        };
        /***Helper Methods - End**/

        var createDataStore = function createDataStore(name){
            return _createDataStore(name,IN_MEMORY_DATA_STORE);
        };
        _dataStoreUtilityObj.createDataStore = _dataStoreUtilityObj.createDS = createDataStore; 

        var createPersistentDataStore = function createPersistentDataStore(name){
            return _createDataStore(name,LOCAL_STORAGE_DATA_STORE);
        };
        _dataStoreUtilityObj.createPersistentDataStore = _dataStoreUtilityObj.createPDS = createPersistentDataStore;

        /** TODO: createSessionDataStore implementation*/
        var createSessionDataStore = function createSessionDataStore(name){
            return _createDataStore(name,SESSION_STORAGE_DATA_STORE);
        };
        _dataStoreUtilityObj.createSessionDataStore = _dataStoreUtilityObj.createSDS = createSessionDataStore;
        
        var getDataStore = function getDataStore(name){
            return _getDataStore(name,IN_MEMORY_DATA_STORE);
        };
        _dataStoreUtilityObj.getDataStore = _dataStoreUtilityObj.getDS = getDataStore;

        var getPersistentDataStore = function getPersistentDataStore(name){
            return _getDataStore(name,LOCAL_STORAGE_DATA_STORE);
        };
        _dataStoreUtilityObj.getPersistentDataStore = _dataStoreUtilityObj.getPDS = getPersistentDataStore;

        /** TODO: getSessionDataStore implementation*/
        var getSessionDataStore = function getSessionDataStore(name){
            return _getDataStore(name,SESSION_STORAGE_DATA_STORE);
        };
        _dataStoreUtilityObj.getSessionDataStore = _dataStoreUtilityObj.getSDS = getSessionDataStore;

        var deleteDataStore = function deletePersistentDataStore(name){
            return _deleteDataStore(name,IN_MEMORY_DATA_STORE);
        };
        _dataStoreUtilityObj.deleteDataStore = _dataStoreUtilityObj.deleteDS = deleteDataStore;

        var deletePersistentDataStore = function deletePersistentDataStore(name){
            return _deleteDataStore(name,LOCAL_STORAGE_DATA_STORE);
        };
        _dataStoreUtilityObj.deletePersistentDataStore = _dataStoreUtilityObj.deletePDS = deletePersistentDataStore;

        /** TODO: deleteSessionDataStore implementation*/
        var deletePersistentDataStore = function deletePersistentDataStore(name){
            return _deleteDataStore(name,SESSION_STORAGE_DATA_STORE);
        };
        _dataStoreUtilityObj.deletePersistentDataStore = _dataStoreUtilityObj.deleteSDS = deletePersistentDataStore;

        var clearDataStore = function clearPersistentDataStore(name){
            return _clearDataStore(name,IN_MEMORY_DATA_STORE);
        };
        _dataStoreUtilityObj.clearDataStore = _dataStoreUtilityObj.clearDS = clearDataStore;

        var clearPersistentDataStore = function clearPersistentDataStore(name){
            return _clearDataStore(name,LOCAL_STORAGE_DATA_STORE);
        };
        _dataStoreUtilityObj.clearPersistentDataStore = _dataStoreUtilityObj.clearPDS = clearPersistentDataStore;

        /** TODO: clearSessionDataStore implementation*/
        var clearSessionDataStore = function clearSessionDataStore(name){
            return _clearDataStore(name,SESSION_STORAGE_DATA_STORE);
        };
        _dataStoreUtilityObj.clearSessionDataStore = _dataStoreUtilityObj.clearSDS = clearSessionDataStore;

        return jsHelper.freezeObj(_dataStoreUtilityObj);
    })(_global.jsHelper);

    _global.jsHelper.defineReadOnlyObjProp(_global, 'dataStoreUtility', _dataStoreUtility);

})(window || this || {});

/*******************************************Data Store Utlity - End******************************************************/
$(function () {

    /***********************ON GENERATE OTP -[START]************************/
    
    $(document).on("SC:generateOTP", function (event, data) {
//		window.toggleLoader(true, "#quickLoader");
        $('.page-loader').removeClass('hidden');

    	var uiObj = data.uiObj;
        var callback = data.cb;
        var reqObj = uiObj;
        var url = appConfig.retailapiRoot + "." + apiConfig.GENERATE_OTP.selector + appConfig.apiExtension;
        $.ajax({
            type: "POST",
            url: url,
            data: reqObj,
            async: true
        }).done(function (response) {
//			window.toggleLoader(false, "#quickLoader");
            $('.page-loader').addClass('hidden');

        	if (jsHelper.isEqVal(response.retStatus.toLowerCase(), "success")) {
                callback(true, response);
            } else {
                callback(false, response);
            }
            
        });
        
        
    });

    /***********************ON GENERATE OTP -[END]************************/


    /***********************ON VERIFY OTP -[START]************************/

    $(document).on("SC:verifyOTP", function (event, data) {
        var uiObj = data.uiObj;
        var callback = data.cb;
        
        var url = appConfig.retailapiRoot + "." + apiConfig.VERIFY_OTP.selector + appConfig.apiExtension;
        
        var reqObj = uiObj;
        $.ajax({
            type: "POST",
            url: url,
            data: reqObj
        }).done(function (response) {
 //         window.toggleLoader(false, "#quickLoader");
            $('.page-loader').addClass('hidden');

        	var response = (typeof response === "object") ? (response) : JSON.parse(response);
            responseStatus = response.retStatus;
            if (jsHelper.isEqVal(responseStatus.toLowerCase(), "success")) {
                callback(true, response);
                
            } else {
                callback(false, response);
            }
            
        });
    });

/***********************ON VERIFY OTP -[END]************************/

/***********************ON SALES AUTH -[START]************************/
    
    $(document).on("SC:salesAuth", function (event, data) {

        var reqdata = data.uiObj;
        if(reqdata.productCode == 'HE'){
            reqdata.productCode = 'LAP';
        }
        if(reqdata.productCode == "UCL"){
            if(reqdata.manufactureryear <= 2012){
                reqdata.leadStatus = "Disqualified";
            }else{
                reqdata.leadStatus = "New";
            }
         }else if((reqdata.productCode == "LAP") && (reqdata.reasonForLap == 'Home Loan Balance Transfer and Top Up'|| reqdata.reasonForLap == 'Balance Transfer of an existing Home Loan')){
               reqdata.productCode = 'HL';
               if((reqdata.loanAmount >= 100000 && reqdata.loanAmount < 500000) || (reqdata.loanAmount > 50000000 && reqdata.loanAmount <= 500000000)){
               reqdata.leadStatus = "Disqualified";
               }else{
               reqdata.leadStatus = "New";
               }
         }else if(reqdata.productCode == "LAP"){
               if((reqdata.loanAmount >= 100000 && reqdata.loanAmount < 500000) || (reqdata.loanAmount > 50000000 && reqdata.loanAmount <= 500000000)){
               reqdata.leadStatus = "Disqualified";
               }else{
               reqdata.leadStatus = "New";
               }
         }
        var url = appConfig.retailapiRoot + "." + apiConfig.SALES_AUTH.selector + appConfig.apiExtension;
        var callback = data.cb;
        // if ($(window).width() > 767) {
        // } else if ($(window).width() < 767) {
        // reqdata = formdata("#applyloan");
        // }
  //      window.toggleLoader(true, "#quickLoader");
          $('.page-loader').removeClass('hidden');

        $.ajax({
            type: "POST",
            url: url,
            data: reqdata,
            async: true
        }).done(function (response) {
//          window.toggleLoader(false, "#quickLoader");
            $('.page-loader').addClass('hidden');

        	var response = (typeof response === "object") ? (response) : JSON.parse(response);
            if (jsHelper.isEqVal(response.Status.toLowerCase(), "success")) {
                callback(true, response);
            } 
            else {
                callback(false, response);
            }
            
        });
    });


/***********************ON SALES AUTH -[END]************************/

     $(document).on("CSV:cityProduct", function(event,data){
        var uiObj = data.uiObj;
        var callback = data.cb;

        var url = appConfig.masterApiRoot+"." + apiConfig.CITY_PRODUCT.selector + appConfig.apiExtension;
        
        var reqObj = uiObj;
        $.ajax({
            type: "GET",
            url: url,
            data: reqObj
          }).done(function(response) {
  //        window.toggleLoader(false, "#quickLoader");
            $('.page-loader').addClass('hidden');
 
        	  var response = (typeof response === "object") ? (response) : JSON.parse(response);

            if(jsHelper.not(jsHelper.isEmpObj(response))){
                 callback(true, response);
            }else{
				callback(false, response);
			}

          });
    });

    $(document).on("CSV:companyName", function(event,data){
        var uiObj = data.uiObj;
        var callback = data.cb;

        var url = "/bin/countryMasterList";

        var reqObj = uiObj.txtParamcFilter;
        $.ajax({
            url: url,
            type: "POST",
            data: {
                "term": reqObj
            }
          }).done(function(response) {
//          window.toggleLoader(false, "#quickLoader");
            $('.page-loader').addClass('hidden');

        	  var response = (typeof response === "object") ? (response) : JSON.parse(response);

            if(jsHelper.not(jsHelper.isEmpObj(response))){
                 callback(true, response);
            }else{
				callback(false, response);
			}

          });
    });

});










(function (_global) {

    var _domUtils = (function (jsHelper) {

        var domUtilsObj = {};

        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
        domUtilsObj.getCookie = getCookie;

        var setCookie = function setCookie(cname, cvalue, expiry) {
            var expires = jsHelper.isNum(expiry) ?  "expires="+ (new Date(Date.now()+expiry)).toUTCString() : "";
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            console.log("Cookie : ",document.cookie);
        }
        domUtilsObj.setCookie = setCookie;

        var isCookie = function isCookie(cname) {
            return jsHelper.isDef(getCookie(cname));
        }
        domUtilsObj.isCookie = isCookie;

        var getCookieExpiryInDays = function getCookieExpiryInDays(exdays) {
            return jsHelper.isNum(exdays) ? (exdays*24*60*60*1000) : 0;
        }
        domUtilsObj.getCookieExpiryInDays = domUtilsObj.getCookieExpInDays = getCookieExpiryInDays;
        
        var deleteCookie = function deleteCookie(name) {
            document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
        }
        domUtilsObj.deleteCookie = domUtilsObj.deleteCookie = deleteCookie;

        var deleteAllCookies = function deleteAllCookies() {
            var res = document.cookie;
            var multiple = res.split(";");
            for(var i = 0; i < multiple.length; i++) {
                var key = multiple[i].split("=");
                document.cookie = key[0]+" =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
            }
        }
        domUtilsObj.deleteAllCookies = domUtilsObj.deleteAllCookies = deleteAllCookies;

        var redirect = function redirect(locationUrl){
            if(locationUrl && window && window.location && window.location.href){
                window.location.href = locationUrl;
            }
            return locationUrl;
        }
        domUtilsObj.redirect = domUtilsObj.redirect = redirect;

        var clearAllStorage = function clearAllStorage(){
            if(localStorage instanceof Storage){
                localStorage.clear();
            }
            if(sessionStorage instanceof Storage){
                sessionStorage.clear();
            }
            if(document && (typeof(deleteAllCookies)==="function")){
                deleteAllCookies();
            }
            return true;
        }
        domUtilsObj.clearAllStorage = domUtilsObj.clearAllStorage = clearAllStorage;

        return jsHelper.freezeObj(domUtilsObj);
    })(_global.jsHelper);

    _global.jsHelper.defineReadOnlyObjProp(_global, 'domUtils', _domUtils);
})(window || this || {});

(function(window){
    var xmlRequest = {};
    if (window.XMLHttpRequest) {
    function customXMLHttpRequest(eachApiConfig, data) {
        var url = getAPIUrl(eachApiConfig);
        var methodType = eachApiConfig.method;
        return new Promise(function (resolve, reject) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    if(typeof(this.responseText) === "string" && this.responseText !== undefined){
                        var responseJson = JSON.parse(this.responseText);
                        if(typeof(responseJson) === "object"){
                            resolve(responseJson);
                        }
                    }
                } else if(this.status == 500) { 
                    reject("Server respond with 500 error"); 
//                    this.onabort = reject("API call is aborted");
//                    this.ontimeout = reject("Request Timeout Error");
                }
            };
            data = (data!==null) ? "?data="+data : "";
            xhttp.open(methodType, url + data, true);
            xhttp.send();
        });
    }
    xmlRequest.customXMLHttpRequest = customXMLHttpRequest;
    window.xmlRequest = xmlRequest;
}

})(window);

function getAPIUrl(eachApiConfig){
    return eachApiConfig.contextPath + "."+ eachApiConfig.selector + ".json";
}

/*function generateOTP(mobileNumber) {
  window.toggleLoader(true, "#quickLoader");
  var data = {};
  data.source = "";
  data.password = "";
  data.otpMobile = mobileNumber;
  data.iPAdresss = "";
  data.imeiNo = "";
  data.creLoginId = "";
  data.dsaid = "";

  xmlRequest.customXMLHttpRequest(globalConfig.apiCallRetailConfig.generateOTPCall, JSON.stringify(data))
  .then(function (responseText) {
	  window.toggleLoader(false, "#quickLoader");
	  otpRefNum = responseText.RefId;
	  
	  return true;
  })
  .catch(function (error) {
  	errorHandlingAnalytics("api", error.responseText)
    return false;
  });
}*/





(function (window) {
    if (window) {
        var _globalConfig = {};
        var globalContextPath = {
        		csvUploadContext : "/content/tata-capital/masters",
        		apiCallContext : "/content/tata-capital/corpapi",
        		apiCallRetailContext : "/content/tata-capital/retailapi"
        };

        var method = {
            GET: "GET",
            POST: "POST",
        }

        var _config = {};
        
        var addContextPathToAll = function addContextPath(configModel,contextPath){
            Object.keys(configModel).forEach(function(eachConfigName){
                var eachConfigModel = configModel[eachConfigName]
                if(eachConfigModel!==undefined){
                    eachConfigModel["contextPath"] = contextPath;
                }
            });
            return configModel;
        }

        /*******************************CSV Configuration START****************************************/
        
        
        var _csvUploadsConfig = {};

        
        var corporateCityMasterCall = {
                "method": method.GET,
                "selector": "corporateCitymaster"
            }
            _csvUploadsConfig.corporateCityMasterCall = corporateCityMasterCall;

        
        var branchLocatorCall = {
            "method": method.GET,
            "selector": "corpbranchlocater"
        }
        _csvUploadsConfig.branchLocatorCall = branchLocatorCall;

        var tcfslbranchLocatorCall = {
                "method": method.GET,
                "selector": "tcfslbranchlocator"
            }
        _csvUploadsConfig.tcfslbranchLocatorCall = tcfslbranchLocatorCall;
        
        var openBranchMasterCall = {
            "method": method.GET,
            "selector": "openBranchMaster"
            }
        _csvUploadsConfig.openBranchMasterCall = openBranchMasterCall;

        var countryMasterListCall = {
            "method": method.POST,
            "selector": "countryMasterList"
        }
        _csvUploadsConfig.countryMasterListCall = countryMasterListCall;

        
        var approvedDataCall = {
            "method": method.GET,
            "selector": "approvedProjects"
        }

        _csvUploadsConfig.approvedDataCall = approvedDataCall;

      
        var newsmoreDataCall = {
        		"method": method.GET,
        		"selector": "newsmore"
        }
        
        _csvUploadsConfig.newsmoreDataCall = newsmoreDataCall;
      
        var minMaxData = {
        		"method": method.GET,
        		"selector": "minmaxcsvupload"
        }
        _csvUploadsConfig.minMaxData = minMaxData;
        
        var cityMasterData = {
        		"method": method.GET,
        		"selector": "cityProductMaster"
        }
        _csvUploadsConfig.cityMasterData = cityMasterData;
       
        var getProductMasterData = {
        		"method": method.GET,
        		"selector": "getmaster"
        }
        _csvUploadsConfig.getProductMasterData = getProductMasterData;
        
        var getApprovedData = {
        		"method": method.GET,
        		"selector": "approvedProjects"
        }
        _csvUploadsConfig.getApprovedData = getApprovedData;
        
        var getcsvuploadData = {
        		"method": method.GET,
        		"selector": "csvupload"
        }
        _csvUploadsConfig.getcsvuploadData = getcsvuploadData;
        
        var getlookingForData = {
        		"method": method.GET,
        		"selector": "lookingfor"
        }
        _csvUploadsConfig.getlookingForData = getlookingForData;
        
        var getcompanyNameCampaignData = {
        		"method": method.GET,
        		"selector": "companyNameCampaign"
        }
        _csvUploadsConfig.getcompanyNameCampaignData = getcompanyNameCampaignData;
        
        
        var countryMasterListData = {
        		"method": method.GET,
        		"selector": "countryMasterList"
        }
        _csvUploadsConfig.countryMasterListData = countryMasterListData;
        
        var mLookingForResultData = {
        		"method": method.POST,
        		"selector": "mLookingForResult"
        }
        _csvUploadsConfig.mLookingForResultData = mLookingForResultData;
        
        
        var mLookingForSearchData = {
        		"method": method.POST,
//        		"method": method.GET,
        		"selector": "mLookingForCSVUpload"
        }
        _csvUploadsConfig.mLookingForSearchData = mLookingForSearchData;
        
        
        var mLookingForCSVUploadData = {
        		"method": method.POST,
//        		"method": method.GET,
        		"selector": "mLookingForCSVUpload"
        }
        _csvUploadsConfig.mLookingForCSVUploadData = mLookingForCSVUploadData;
        

        var offersMasterData = {
        		"method": method.GET,
        		"selector": "offerMaster"
        }
        _csvUploadsConfig.offersMasterData = offersMasterData;
        
        
        _globalConfig.csvUploadsConfig = addContextPathToAll(_csvUploadsConfig , globalContextPath.csvUploadContext);
        
        /*******************************CSV Configuration END****************************************/
        
        /*******************************API Configuration START****************************************/
        var _apiCallConfig = {};
        
        var approvedProjectsCall = {
            "method": method.POST,
            "selector": ""
        }
        _apiCallConfig.approvedProjectsCall = approvedProjectsCall;
        
        var convertOfferCall = {
                "method": method.POST,
                "selector": "convertOffer"
            }
        _apiCallConfig.convertOfferCall = convertOfferCall;
        
        /*SFDC Service Call for Corporate*/        
        var createleadCall = {
                "method": method.POST,
                "selector": "createlead"
            }
        _apiCallConfig.createleadCall = createleadCall;
        
        var custGrevianceCall = {
                "method": method.POST,
                "selector": "custgrievance"
            }
        _apiCallConfig.custGrevianceCall = custGrevianceCall;
      
      	var trackapplication = {
                "method": method.POST,
                "selector": "applicationtrack"
            }
        _apiCallConfig.trackapplication = trackapplication;
        
        _globalConfig.apiCallConfig = addContextPathToAll(_apiCallConfig, globalContextPath.apiCallContext);
        /*******************************API Configuration END****************************************/

        /*******************************API Retail Configuration START****************************************/
        var _apiCallRetailConfig = {};
        
        var salesforceApplCreatorCall = {
            "method": method.POST,
            "selector": "applyNowApplicationCreator"
        }
        _apiCallRetailConfig.salesforceApplCreatorCall = salesforceApplCreatorCall;
        
        var aggregatorLeadCreationCall = {
                "method": method.POST,
                "selector": "aggregatorLeadCreation"
            }
            _apiCallRetailConfig.aggregatorLeadCreationCall = aggregatorLeadCreationCall;

         var constructionFinance = {
                "method": method.POST,
                "selector": "constructionFinance"
            }
            _apiCallRetailConfig.constructionFinance = constructionFinance;
            
        
        var generateOTPCall = {
            "method": method.POST,
            "selector": "generateOTP"
        }
        _apiCallRetailConfig.generateOTPCall = generateOTPCall;
        
        var verifyOTPCall = {
            "method": method.POST,
            "selector": "verifyOTP"
        }
        _apiCallRetailConfig.verifyOTPCall = verifyOTPCall;
        
        var sendSmsCall = {
            "method": method.POST,
            "selector": "sendSms"
        }
        _apiCallRetailConfig.sendSmsCall = sendSmsCall;

         var whatsappCall = {
            "method": method.POST,
            "selector": "whatsappSMS"
        }
        _apiCallRetailConfig.whatsappCall = whatsappCall;

         var whatsappLeadCall = {
            "method": method.POST,
            "selector": "whatsappLead"
        }
        _apiCallRetailConfig.whatsappLeadCall = whatsappLeadCall;

        var whatsappMaster = {
            "method": method.POST,
            "selector": "whatsappMaster"
        }
        _apiCallRetailConfig.whatsappMaster = whatsappMaster;

        var wealthWhatsAppMessageApi = {
            "method": method.POST,
            "selector": "WealthWhatsAppMessageApiServlet"
        }
        _apiCallRetailConfig.wealthWhatsAppMessageApi = wealthWhatsAppMessageApi;

        var whatsappService = {
                    "method": method.POST,
                    "selector": "whatsappService"
                }
        _apiCallRetailConfig.whatsappService = whatsappService;

        var yellowmessengerwhatsappService = {
            "method": method.POST,
            "selector": "yellowmessengerwhatsappService"
        }
        _apiCallRetailConfig.yellowmessengerwhatsappService = yellowmessengerwhatsappService;

        var salesForceAuthCall = {
                "method": method.POST,
                "selector": "salesForceAuth"
        }
        _apiCallRetailConfig.salesForceAuthCall = salesForceAuthCall;
        
        var salesForceAuthEmailCampaignCall = {
                "method": method.POST,
                "selector": "salesForceAuthEmailCampaign"
        }
        _apiCallRetailConfig.salesForceAuthEmailCampaignCall = salesForceAuthEmailCampaignCall;
 
        
        var preApprovedOffersCall = {
                "method": method.POST,
                "selector": "preApprovedOffers"
        }
        _apiCallRetailConfig.preApprovedOffersCall= preApprovedOffersCall;
         
        var convertOfferCall = {
                "method": method.POST,
                "selector": "convertOffer"
            }
        _apiCallRetailConfig.convertOfferCall = convertOfferCall;
        
        var campaignApplyNow = {
                "method": method.POST,
                "selector": "campaignApply"
            }
            _apiCallRetailConfig.campaignApplyNow = campaignApplyNow;

         var insuranceLoanCampaign = {
                         "method": method.POST,
                         "selector": "insuranceLoan"
                     }
                     _apiCallRetailConfig.insuranceLoanCampaign = insuranceLoanCampaign;


        var foreclosureCampaign = {
                                 "method": method.POST,
                                 "selector": "foreclosureCampaign"
                             }
        _apiCallRetailConfig.foreclosureCampaign = foreclosureCampaign;

        var surveyFeedbackFetchOffer = {
                "method": method.POST,
                "selector": "surveyFeedbackFetchOffer"
            }
       _apiCallRetailConfig.surveyFeedbackFetchOffer = surveyFeedbackFetchOffer;

        var surveyFeedbackForm = {
                "method": method.POST,
                "selector": "surveyFeedbackForm"
            }
       _apiCallRetailConfig.surveyFeedbackForm = surveyFeedbackForm;
        
        var loanUtsavForm = {
                "method": method.POST,
                "selector": "loanUtsavForm"
            }
       _apiCallRetailConfig.loanUtsavForm = loanUtsavForm;
        
        _globalConfig.apiCallRetailConfig = addContextPathToAll(_apiCallRetailConfig, globalContextPath.apiCallRetailContext);
        /*******************************API Retail Configuration END****************************************/

        Object.freeze(_globalConfig);
        window["globalConfig"] = _globalConfig;
    }
})(window);
/*! lozad.js - v1.7.0 - 2018-11-08
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2018 Apoorv Saxena; Licensed MIT */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.lozad=e()}(this,function(){"use strict";var g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},r="undefined"!=typeof document&&document.documentMode,l={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=document.createElement("img");r&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),t.appendChild(e)}t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset")),t.getAttribute("data-background-image")&&(t.style.backgroundImage="url('"+t.getAttribute("data-background-image")+"')"),t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};
/**
   * Detect IE browser
   * @const {boolean}
   * @private
   */function f(t){t.setAttribute("data-loaded",!0)}var b=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var r,o,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=g({},l,t),n=e.root,i=e.rootMargin,d=e.threshold,u=e.load,c=e.loaded,s=void 0;return window.IntersectionObserver&&(s=new IntersectionObserver((r=u,o=c,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),b(t.target)||(r(t.target),f(t.target),o(t.target)))})}),{root:n,rootMargin:i,threshold:d})),{observe:function(){for(var t=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)}(a,n),e=0;e<t.length;e++)b(t[e])||(s?s.observe(t[e]):(u(t[e]),f(t[e]),c(t[e])))},triggerLoad:function(t){b(t)||(u(t),f(t),c(t))},observer:s}}});
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

Array.prototype.sortByKey = function (key, order) {
    return (order) ? this.sort(function (a, b) { return b[key] - a[key] }) : this.sort(function (a, b) { return a[key] - b[key] })
}

if (!Node.prototype.append) {
    Node.prototype.append = Node.prototype.appendChild;
}
window.toggleLoader = function toggleLoader(state, selector) {
    var selectorElement = (selector) ? selector : '.loader';
    //console.log("Selector",selectorElement,state);
    if (state) {
        $(selectorElement).addClass("is-active")
    }
    else {
        $(selectorElement).removeClass("is-active")
    }
}

function socialShare() {
    var twitterShare = document.querySelector('[data-js="twitter-share"]');

    twitterShare.onclick = function (e) {
        e.preventDefault();
        var twitterWindow = window.open('https://twitter.com/share?url=' + e.target.getAttribute("data-url"), 'twitter-popup', 'height=350,width=600');
        if (twitterWindow.focus) { twitterWindow.focus(); }
        return false;
    }

    var facebookShare = document.querySelector('[data-js="facebook-share"]');

    facebookShare.onclick = function (e) {
        e.preventDefault();
        var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + e.target.getAttribute("data-url"), 'facebook-popup', 'height=350,width=600');
        if (facebookWindow.focus) { facebookWindow.focus(); }
        return false;
    }
}
function hideBodyScroll() {
    $("body").addClass("scroll-hide");
}

function showBodyScroll() {
    $("body").removeClass("scroll-hide");
}

function navOverlaySearchShow() {
    $('.nav-overlay-search').addClass('is-open');
    if ($(".tabs-section").length > 0) {
        $(".tabs-section").css("z-index", "17");
    }
}

function navOverlaySearchHide() {
    $('.nav-overlay-search').removeClass('is-open');
    if ($(".tabs-section").length > 0) {
        $(".tabs-section").css("z-index", "18");
    }
}

function navOverlayShow() {
    $(".nav-overlay").addClass("opened");
    if ($(".tabs-section").length > 0) {
        $(".tabs-section").css("z-index", "17");
    }
}

function navOverlayHide() {
    $(".nav-overlay").removeClass("opened");
    if ($(".tabs-section").length > 0) {
        $(".tabs-section").css("z-index", "18");
    }
}

function tabOffset() {
    if ($(".tabs-section").length !== 0) {
        tabOffsetTop = $(".tabs-section").offset().top - 55;
        return tabOffsetTop;
    }
    return 0;
}

function popup() {
    $("[data-target-popup]").on("click", function () {
        $($(this).attr("data-target-popup")).modal('show');

    })
}
$(document).ready(function () {
    var observer = lozad("img,iframe,.lozad");
    observer.observe();

    popup();
})


function getPageName(){
  var pageIndex = pageName.split("/").length - 1;
  return pageName.split("/")[pageIndex];
}

function formdata(d) {
    d = $($(d)[0]).serialize().split("\x26");
    console.log(d);
    for (var b = {}, a = 0; a < d.length; a++) {
        var c = d[a].split("\x3d")
          , e = c[0];
        c = decodeURIComponent(c[1]);
        c = c.replace(/\,/g, "");
        c = c.replace("\u20b9", "");
        b[e] = c;
        "productCode" == e && "LAP" == b[e] && (b[e] = "HE")
    }
    console.log(b);
    return b
}
// Generated by CoffeeScript 1.9.2

$('[data-dropdown="dropdown"]').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        var ele = $(this).parent('.dropdown');
        if (!ele.hasClass('show')) {
            $(".dropdown").removeClass('show');
        }
        ele.toggleClass('show');
         if ($('.menu-right .floating-widget [type="checkbox"]').prop("checked") == true) {
               $('.menu-right .floating-widget [type="checkbox"]').prop("checked", false);

         }
    });

    $('.dropdownmenu a').click(function (ele) {
        var getvalue = $(this).text();
        $(ele.target).parents('.dropdown').find('li').removeClass('active');
        $(this).parents('li').addClass('active');
        $(this).parents('.dropdown').find('[data-dropdown]').text(getvalue);
        $(this).parents('.dropdown').removeClass('show');

        var ele_target = $(this).data('value');
        $(this).parents('.dropdown').next('.report-content').find('.text-content-box').addClass('hidden');
        $('.dropdown-content').find('.faq-list').addClass('hidden').removeClass('active');
        $('body').find('#' + ele_target).removeClass('hidden').addClass('active');
    });

$(document).ready(function () {
    var $head = 280;

    $('.js-scroll-form').click(function () {
        if (navigator.userAgent.match(/(iPod | iPhone | iPad )/))
            window.scrollTo(0, $head);
        else
            $("html").animate({ scrollTop: $head }, "slow");
    })

    // $('.js-example-basic-single').select2({
    //     placeholder: "select",
    // });

    setTimeout(function () {
        $('.js-example-basic-single').removeAttr('tabindex');
    }, 1000);

    $(".js-form-applyloan .select2-selection__rendered").click(function (e) {
        e.preventDefault();
    })

    /* input field label animation  */
    $('.textbox-box .input-textbox').change(function () {
        if ($(this).val().length != 0) {
            $(this).parents('.textbox-box').addClass("active-textbox");
        } else if ($(this).val().length == 0) {
            $(this).parents('.textbox-box').removeClass("active-textbox");
        }
    }).focus(function () {
        $(this).parents('.textbox-box').addClass("active-textbox");
    }).blur(function () {
        if ($(this).val().length != 0) {
            $(this).parents('.textbox-box').addClass("active-textbox");
        } else if ($(this).val().length == 0) {
            $(this).parents('.textbox-box').removeClass("active-textbox");
        }
    });

    /* Show form in desktop*/
    if ($(window).width() > 767) {
        var padding = 109;
        var formheight = $('.js-form-applyloan').innerHeight() + padding;
        $('.js-quick-apply-form .js-form-applyloan .input-textbox').click(function () {
            $('.banner-quick-apply').css('height', formheight);
            $('.quick-apply-top-icons .iconsminus').removeClass('hidden')
        });

        $('.quick-apply-top-icons .iconsminus').click(function () {
            $('.banner-quick-apply').css('height', '200px');
            $('.quick-apply-top-icons .iconsminus').addClass('hidden')
        })

        $('.quick-apply-top-icons .iconsclose').addClass('hidden');

        // closed form
        $('.quick-apply-top-icons .iconsclose').click(function () {
            $(this).addClass('hidden');
            $('.quick-apply-top-icons .iconsclear').removeClass('hidden');
            $('.quick-apply-top-icons .iconsminus').removeClass('hidden');
            $('#applyloan').removeClass('hidden');
            $('#generateOTP').addClass('hidden');
            $('#enterOTP').addClass('hidden');
            $('#incorrectOTP').addClass('hidden');
            $('#thankyou').addClass('hidden');
            $('#already-registered').addClass('hidden');
            $('.js-form-sendotp .input-textbox').parents('.textbox-box').addClass('active-textbox');
            $('.js-submit-otp').addClass('disabled');
            //reset input field on Close
            $('.js-quick-apply-form').find('input').val('').parents('.textbox-box').removeClass('active-textbox');

            $('.js-quick-apply-form .input-date').val('').parents('.textbox-box').removeClass('date-active');

            // Select 2 reset//
            $(".js-form-applyloan .select2-selection__rendered").attr('title', '').text('').html('<span class="select2-selection__placeholder">Select a state</span>');
            $('.js-example-basic-single').val(null).trigger('change');
            $('.banner-quick-apply').css('height', '200px');
        })
    } else {
        $('.quick-apply-top-icons .iconsclose').removeClass('hidden');
        $('.js-quick-apply-form .js-form-applyloan .input-textbox').click(function () {
            var height = 100;
            $('.banner-quick-apply').css('height', height + '%');
        });

        $('.js-apply-btn').click(function () {
            $('.quickapplyBox').addClass('mob-open-quick-apply');
            $('body').addClass('scroll-hide');
        });
        $('#applyloan .quick-apply-top-icons.desktop-none .iconsclose').click(function () {
            $('.quickapplyBox').removeClass('mob-open-quick-apply');
            $('body').removeClass('scroll-hide');
        });

        $('.js-mob-inner .quick-apply-top-icons.desktop-none .iconsclose').click(function () {
            $('.js-mob-inner').addClass('hidden');
            $('#applyloan').removeClass('hidden');
            $('.quickapplyBox').removeClass('mob-open-quick-apply');
            $('body').removeClass('scroll-hide');
            $('.quick-apply-top-icons').find('.iconsclear').removeClass('hidden');

            // Select 2 reset//
            $(".js-form-applyloan .select2-selection__rendered").attr('title', '').text('').html('<span class="select2-selection__placeholder">Select a state</span>');
            $('.js-example-basic-single').val(null).trigger('change');

            //reset input field on Close
            $('.js-quick-apply-form .input-textbox').val('').parents('.textbox-box').removeClass('active-textbox');

            $('.js-quick-apply-form .input-date').val('').parents('.textbox-box').removeClass('date-active');
        });

        $('.header').addClass('fixed-header');
        var scroll = $(window).scrollTop();
        if (scroll >= 22) {
            $('.header').addClass('fixed-header');
            $('.quickapplyBox').addClass('withoutheader');
        } else {
            $('.header').removeClass('fixed-header');
            $('.quickapplyBox').removeClass('withoutheader');
        }
    }
    var dateReg = /(((0[1-9]|[12][0-9]|3[01])([-./])(0[13578]|10|12)([-./])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-./])(0[469]|11)([-./])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-./])(02)([-./])(\d{4}))|((29)(\.|-|\/)(02)([-./])([02468][048]00))|((29)([-./])(02)([-./])([13579][26]00))|((29)([-./])(02)([-./])([0-9][0-9][0][48]))|((29)([-./])(02)([-./])([0-9][0-9][2468][048]))|((29)([-./])(02)([-./])([0-9][0-9][13579][26])))/;

    var manufacturerValue;

    function validateMobile(mobileField) {
        var re = /^[4-9][0-9]{9}$/;
        var check = re.test($(mobileField).val());
        if ($(mobileField).val().length != 10 || !check) {
            return false;
        } else {
            return true;
        }
    }

    
});



$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 22) {
        $('body').find('.floating-form').addClass('withoutheader');
    } else {
        $('body').find('.floating-form').removeClass('withoutheader');
        $('.floating-form').css('top', '22');
    }
});

$(document).ready(function () {


    $('.js-FloatingBtn').click(function () {
        $(this).parents().removeClass('show');
        var ele_target = $(this).data('content');
        $('body').find('#' + ele_target).addClass('show');
    });
    $('.js-FloatingClose').click(function () {
        var ele_targetClose = $(this).data('close')
        var ele_targetShow = $(this).data('show');
        $('body').find('#' + ele_targetClose).removeClass('show');
        $('body').find('.' + ele_targetShow).addClass('show');
        var ele_target = $('.form-wizard').find('.formSteps');
        ele_target.addClass('hidden');
        $(ele_target).first().removeClass('hidden');
    });

    $('.floating-widget input[type="checkbox"]').click(function () {
        $('.nav-overlay-search').removeClass('is-open').removeAttr('style');
        $('.nav-overlay').removeClass('opened');
        $('.login_dropdown').removeClass('show');
        $(".dropdown.google-dropdown").removeClass('show');
        if ($(window).width() < 768) {
            $('.mob-header').removeClass('active');
            $('.hamburger-menu').removeClass('animate-hamburger');
            $('body').removeClass('scroll-hide');
        }
    });

    $("#proceedToOTP").click(function (e) {
        $("#proceedLoader").removeClass('hidden');

        var ele_input = $('.approved-Details-Form .input-textbox');
        var errors = [];
        var ele_required = "Field is required";
        $(ele_input).each(function () {
            var element = $(this);
            var ele_value = element.val();
            var ele_name = "Please enter full name";
            var ele_phoneNumber = "Please enter valid number";

            //var ele_getValue = $(this).next('.error-msgs').text();
            $(element).next().remove();
            if (element.is(":visible")) {
                if (element.val() != '') {

                    $(element).after('<span class="error-msgs"></span>');
                    if ($(element).data('type') === 'name') {
                        var regName = /[A-Za-z]+[ ][A-Za-z]+$/;

                        if (ele_value != '' && !regName.test(ele_value)) {
                            $(element).parents('.textbox-box').addClass('textboxerror');
                            $(element).next('.error-msgs').text(ele_name);
                            errors.push(ele_name);
                        }
                        else {
                            $(element).parents('.textbox-box').removeClass('textboxerror');
                            $(element).next().text('');
                        }
                    } else if ($(element).data('type') === 'mobile') {

                        if (!validateMobile(element)) {
                            $(element).parents('.textbox-box').addClass('textboxerror');
                            $(element).next('.error-msgs').text(ele_phoneNumber);
                            errors.push(ele_name);
                        } else {
                            $(element).parents('.textbox-box').removeClass('textboxerror');
                            $(element).next().text('');
                        }
                    }
                }
                else {
                    $(element).parents('.textbox-box').addClass('textboxerror');
                    $(element).after('<span class="error-msgs">' + ele_required + '</span>');
                    errors.push(ele_required);
                    gtmErrorFieldOfferForm(this);

                }
            }

        });
        if (errors.length == 0) {
            e.preventDefault();
            var current_fs = $(this).data('current');
            var prev_fs = $(this).data('prev');
            var next_fs = $(this).data('next');
            $(this).parents('.form-wizard').find('#' + current_fs).addClass('hidden');
            // $(location).attr('href', 'www.google.com');
            $(this).parents('.form-wizard').find('#' + prev_fs).removeClass('hidden');
            $(this).parents('.form-wizard').find('#' + next_fs).removeClass('hidden');

            var getmobilenumber = $('.get-number').val();
            $('.approved-Form .show-mobile-number').val(getmobilenumber);
            $('.approved-Form .input-textbox').parents('.textbox-box').addClass('active-textbox');

        }
        else {
            $('#proceedLoader').addClass('hidden');
            $($('.textboxerror .input-textbox')[0]).focus();
        }
        $("#proceedLoader").addClass('hidden');
    });


    $('.btn-resendotp').click(function () {
        $('.otp-col input').val('');
        $('.btn-apply.btn-primary.js-proceed-with-otp').addClass('disabled');
    });


    $('.send-otp-form .input-textbox').focus(function () {
        var ele_getValue = $(this).next('.error-msgs').text();
        $(this).next().remove();
        $(this).after('<span class="error-msgs"></span>');
        var ele_required = "Field is required";
        if ($(this).val().length === 0) {
            $(this).next('.error-msgs').text(ele_required);
        } else {
            $(this).next('.error-msgs').text(ele_getValue);
        }
    });

    $('.send-otp-form .input-textbox').keyup(function () {
        var element = $(this);
        var ele_value = element.val();
        var ele_required = "Field is required";
        var ele_phoneNumber = "Please enter valid number";
        //var ele_loanAmount = "Please enter an amount";

        if ($(element).val() != '') {

            if ($(element).data('type') === 'mobile') {

                if (ele_value != '' && element.val().length != element.attr('maxlength')) {
                    $(element).parents('.textbox-box').addClass('textboxerror');
                    $(element).next('.error-msgs').text(ele_phoneNumber);
                } else {
                    $(element).parents('.textbox-box').removeClass('textboxerror');
                    $(element).next().text('');
                }
            }

        } else {
            $(element).next('.error-msgs').text(ele_required);
        }

    });


    $('.send-otp-form .js-send-otp').click(function (e) {
        $('#sendOTPLoader').removeClass('hidden');
        var ele_input = $('.send-otp-form .input-textbox');
        var errors = []
        $(ele_input).each(function () {
            var element = $(this);
            var ele_value = element.val();
            var ele_required = "Field is required";
            var ele_phoneNumber = "Please enter valid number";

            $(element).next().remove();

            if (element.val() != '') {
                $(element).after('<span class="error-msgs"></span>');

                if ($(element).data('type') === 'mobile') {

                    if (ele_value != '' && element.val().length != element.attr('maxlength')) {
                        $(element).parents('.textbox-box').addClass('textboxerror');
                        $(element).next('.error-msgs').text(ele_phoneNumber);
                        errors.push(ele_phoneNumber);
                    } else {
                        $(element).parents('.textbox-box').removeClass('textboxerror');
                        $(element).next().text('');
                    }
                }
            }
            else {
                $(element).parents('.textbox-box').addClass('textboxerror');
                $(element).after('<span class="error-msgs">' + ele_required + '</span>');
                errors.push(ele_required);
            }
        });
        if (errors.length == 0) {
            e.preventDefault();
            var ele_target = $('.send-otp-form .js-send-otp');
            var current_fs = ele_target.data('current');
            var prev_fs = ele_target.data('prev');
            var next_fs = ele_target.data('next');
            $('.form-wizard').find('#' + current_fs).addClass('hidden');
            $('.form-wizard').find('#' + prev_fs).removeClass('hidden');
            $('.form-wizard').find('#' + next_fs).removeClass('hidden');

            var getmobilenumber = $('.show-mobile-for-otp').val();
            $('.submit-otp-form .show-mobile-number').val(getmobilenumber);
            $('.approved-otpForm').find('.otp-col input').val('');
            $('.submit-otp-form .input-textbox').parents('.textbox-box').addClass('active-textbox');
        }
        $('#sendOTPLoader').addClass('hidden');
        return false;
    });

    //incorrect otp
    // $('#incorrect-send-otp').click(function () {
    //     var ele_target = $('.approved-incorrectOtp #incorrect-send-otp');
    //     var current_fs = ele_target.data('current');
    //     var prev_fs = ele_target.data('prev');
    //     var next_fs = ele_target.data('next');
    //     $('.form-wizard').find('#' + current_fs).addClass('hidden');
    //     $('.form-wizard').find('#' + prev_fs).removeClass('hidden');
    //     $('.form-wizard').find('#' + next_fs).removeClass('hidden');
    //     $('.approved-otpForm').find('.otp-col input').val('');
    //     $('.btn-apply.btn-primary.js-proceed-with-otp').addClass('disabled');
    //     if ($(e.target).parents(".black-quick-apply-banner").length > 0) {
    //         generateOTPTrigger();
    //     } else if ($(e.target).parents(".apply-now-form").length > 0) {
    //         applynowformgenerateOTP();
    //     }
    // });

    $('.approved-Details-Form .input-textbox').focus(function () {
        var ele_getValue = $(this).next('.error-msgs').text();
        $(this).next().remove();
        $(this).after('<span class="error-msgs"></span>');
        var ele_required = "Field is required";
        if ($(this).val().length === 0) {
            $(this).next('.error-msgs').text(ele_required);
        } else {
            $(this).next('.error-msgs').text(ele_getValue);
        }
    });



    $('.approved-Details-Form .input-textbox').keyup(function () {
        var element = $(this);
        var ele_value = element.val();
        var ele_required = "Field is required";
        var ele_name = "Please enter full name";
        var ele_phoneNumber = "Please enter valid number";

        if (element.is(":visible")) {
            if ($(element).val() != '') {
                if ($(element).data('type') === 'name') {
                    var regName = /[A-Za-z]+[ ][A-Za-z]+$/;

                    if (ele_value != '' && !regName.test(ele_value)) {
                        $(element).parents('.textbox-box').addClass('textboxerror');
                        $(element).next('.error-msgs').text(ele_name);
                    }
                    else {
                        $(element).parents('.textbox-box').removeClass('textboxerror');
                        $(element).next().text('');
                    }
                }
                else if ($(element).data('type') === 'mobile') {

                    if (!validateMobile(element)) {
                        $(element).parents('.textbox-box').addClass('textboxerror');
                        $(element).next('.error-msgs').text(ele_phoneNumber);
                    } else {
                        $(element).parents('.textbox-box').removeClass('textboxerror');
                        $(element).next().text('');
                    }
                }
                else {
                    $(element).parents('.textbox-box').addClass('textboxerror');
                    $(element).next('.error-msgs').text(ele_required);
                }
            }
            else {
                $(element).parents('.textbox-box').addClass('textboxerror');
                $(element).next('.error-msgs').text(ele_required);
            }
        }
    });


    function validateMobile(mobileField) {
        var re = /^[4-9][0-9]{9}$/;
        var check = re.test($(mobileField).val());
        if ($(mobileField).val().length != 10 || !check) {
            return false;
        } else {
            return true;
        }
    }


    // OTP autmatic Tab change
    $("#enterOtpBox .input-textbox").keyup(function () {
        if (this.value.length == this.maxLength) {
            $(this).next('.input-textbox').focus();
        } else {
            $(this).prev('.input-textbox').focus();
        }
        $(this).parents('.textbox-box').addClass('active-textbox');
        var ele_input = $('#enterOtpBox .input-textbox');

        $(ele_input).each(function () {
            if ($(this).val().length != 0) {
                $(this).parents('.submit-otp-form').find('.btn-apply').removeClass('disabled');
                $(this).parents('.textbox-box').addClass('active-textbox');
                // $('.mobile-check-otp').removeClass('mob-show');
            }
            else {
                $(this).parents('.submit-otp-form').find('.btn-apply').addClass('disabled');
                // $('.mobile-check-otp').addClass('mob-show');
            }
        });
    }).blur(function () {
        $(this).parents('.textbox-box').addClass('active-textbox');
    });

    $('.js-FloatingClose').click(function (e) {
        $('.preapproved-Form input').val('');
        $('.preapproved-Form .textbox-box').removeClass('textboxerror active-textbox');
        $('.preapproved-Form .textbox-box').next.text('');
    });


    if ($(window).width() < 767) {
        $('.js-FloatingBtn').click(function () {
            $('body').addClass('mob-hide-scroll');
        })
        $('.js-FloatingClose').click(function () {
            $('body').removeClass('mob-hide-scroll');
        })
        var scroll = $(window).scrollTop();
        if (scroll >= 22) {
            $('.header').addClass('fixed-header');
            $('.floating-form').addClass('withoutheader');
        } else {
            $('.header').removeClass('fixed-header');
            $('.floating-form').removeClass('withoutheader');
        }
    } else {
        $('body').removeClass('mob-hide-scroll');
    }
});
$( document ).ready( function() {
	// numeric input validation
	 $( '.only-numeric-input' ).on("keypress paste", function( e ) {
        var regex = new RegExp( /[^0-9\b]/g );
	    if ( regex.test( String.fromCharCode( e.which ) ) ) {
	        return false;
	    }
	
	} );

    // aplhabet input validation for corporate branch locater
	$( '.branch-locator-block-form .input-text' ).on("keypress paste", function( e ) {
        var regex = new RegExp( /[^a-zA-Z\b ]/g );
	    if ( regex.test( String.fromCharCode( e.which ) ) ) {
	        return false;
	    }
	
	} );
    // decimal input validation
    $( '.only-decimal-input' ).on( 'input paste' ,function( e ) {
        this.value = this.value
            .replace(/[^\d.]/g, '')             
            .replace(/(^[\d]{+})[\d]/g, '$1')   
            .replace(/(\..*)\./g, '$1')         
            .replace(/(\.[\d]{4})./g, '$1');
    } );

	// aplhabet input validation
	$( '.only-alpha-input' ).on("keypress paste", function( e ) {
        var regex = new RegExp( /[^a-zA-Z\b ]/g );
	    if ( regex.test( String.fromCharCode( e.which ) ) ) {
	        return false;
	    }
	
	} );

    // email validation
    function isEmail( email ) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test( email );
    }

    $( '.email-input' ).on("blur keypress paste", function() {
        var email = $( this ).val();
        if ( !isEmail( email ) ) {
            $( this ).addClass( 'invalid-input' );
        } else {
            $( this ).removeClass( 'invalid-input' );
        }
    } );

    // Condition to toggle invalid-input based on value

    $( '.sub-form-mandatory' ).not( '.email-input' ).on("blur keypress paste", function() {
        if ( $( this ).val() != "" ) {
            $( this ).removeClass( 'invalid-input' );
        } else {
            $( this )
                .addClass( 'invalid-input' );
        }
    } );

} );
if (localStorage.getItem("faCount") == null) {
    localStorage.setItem("faCount", 1);
}

function onload_openmodal() {
    if (jsHelper.isDef(window.Notification)) {
        if (Notification.permission !== "granted" && Notification.permission !== "denied") {
            if (parseInt(localStorage.getItem("faCount")) < 3) {
                var url = window.location.href;
                if ($('#push-notification').length > 0) {
                    $('body').append('<div class="notification-backdrop"></div>');
                    $('body').addClass('modal-open');
                    $('#push-notification').addClass('show');
                }

                $('.js-notificationclose').click(function(event) {
                    if (localStorage.getItem("faCount") !== null) {
                        var faCountIndex = parseInt(localStorage.getItem("faCount"));
                        faCountIndex++;
                        localStorage.setItem("faCount", faCountIndex);
                    }
                    $('body').removeClass('modal-open');
                    $('body').find('#push-notification').removeClass('show');
                    $('.notification-backdrop').remove();
                });

                $('[data-allow]').click(function() {
                      FollowAnalytics.registerForPushNotifications();

                    Notification.requestPermission().then(function() {
                        $('body').removeClass('modal-open');
                        $('body').find('#push-notification').removeClass('show');
                        $('.notification-backdrop').remove();
                    });

                    var ele_target = $(this).data('allow');
                    if ($(window).width() > 768) {
                        $(ele_target).find('.push-msg').removeClass('hidden');
                        $(this).addClass('disabled');
                    } else {
                        $('body').removeClass('modal-open');
                        $('body').find(ele_target).removeClass('show');
                        $('.notification-backdrop').remove();
                    }
                })
            }
        }
    }
}

//$(function() {
//    setTimeout(function() {
//        var gSkiped = localStorage.getItem('g_Skipped')
//        if (gSkiped == 'true') {
//            if (typeof(onload_openmodal) === "function") {
//                onload_openmodal();
//            }
//        }
//
//    }, 2000);
//});
/**
 * SimpleBar.js - v5.1.0
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).SimpleBar=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r,n,i,o="object",s=function(t){return t&&t.Math==Math&&t},a=s(typeof globalThis==o&&globalThis)||s(typeof window==o&&window)||s(typeof self==o&&self)||s(typeof t==o&&t)||Function("return this")(),c=function(t){try{return!!t()}catch(t){return!0}},l=!c((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),u={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,h={f:f&&!u.call({1:2},1)?function(t){var e=f(this,t);return!!e&&e.enumerable}:u},d=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},p={}.toString,v=function(t){return p.call(t).slice(8,-1)},g="".split,y=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==v(t)?g.call(t,""):Object(t)}:Object,b=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},m=function(t){return y(b(t))},x=function(t){return"object"==typeof t?null!==t:"function"==typeof t},E=function(t,e){if(!x(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!x(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!x(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!x(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},w={}.hasOwnProperty,O=function(t,e){return w.call(t,e)},_=a.document,S=x(_)&&x(_.createElement),A=function(t){return S?_.createElement(t):{}},k=!l&&!c((function(){return 7!=Object.defineProperty(A("div"),"a",{get:function(){return 7}}).a})),L=Object.getOwnPropertyDescriptor,M={f:l?L:function(t,e){if(t=m(t),e=E(e,!0),k)try{return L(t,e)}catch(t){}if(O(t,e))return d(!h.f.call(t,e),t[e])}},T=function(t){if(!x(t))throw TypeError(String(t)+" is not an object");return t},j=Object.defineProperty,R={f:l?j:function(t,e,r){if(T(t),e=E(e,!0),T(r),k)try{return j(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},W=l?function(t,e,r){return R.f(t,e,d(1,r))}:function(t,e,r){return t[e]=r,t},z=function(t,e){try{W(a,t,e)}catch(r){a[t]=e}return e},C=e((function(t){var e=a["__core-js_shared__"]||z("__core-js_shared__",{});(t.exports=function(t,r){return e[t]||(e[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.2.1",mode:"global",copyright:"Â© 2019 Denis Pushkarev (zloirock.ru)"})})),N=C("native-function-to-string",Function.toString),I=a.WeakMap,D="function"==typeof I&&/native code/.test(N.call(I)),P=0,V=Math.random(),F=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++P+V).toString(36)},B=C("keys"),H=function(t){return B[t]||(B[t]=F(t))},q={},$=a.WeakMap;if(D){var X=new $,Y=X.get,G=X.has,U=X.set;r=function(t,e){return U.call(X,t,e),e},n=function(t){return Y.call(X,t)||{}},i=function(t){return G.call(X,t)}}else{var Q=H("state");q[Q]=!0,r=function(t,e){return W(t,Q,e),e},n=function(t){return O(t,Q)?t[Q]:{}},i=function(t){return O(t,Q)}}var K={set:r,get:n,has:i,enforce:function(t){return i(t)?n(t):r(t,{})},getterFor:function(t){return function(e){var r;if(!x(e)||(r=n(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},J=e((function(t){var e=K.get,r=K.enforce,n=String(N).split("toString");C("inspectSource",(function(t){return N.call(t)})),(t.exports=function(t,e,i,o){var s=!!o&&!!o.unsafe,c=!!o&&!!o.enumerable,l=!!o&&!!o.noTargetGet;"function"==typeof i&&("string"!=typeof e||O(i,"name")||W(i,"name",e),r(i).source=n.join("string"==typeof e?e:"")),t!==a?(s?!l&&t[e]&&(c=!0):delete t[e],c?t[e]=i:W(t,e,i)):c?t[e]=i:z(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||N.call(this)}))})),Z=a,tt=function(t){return"function"==typeof t?t:void 0},et=function(t,e){return arguments.length<2?tt(Z[t])||tt(a[t]):Z[t]&&Z[t][e]||a[t]&&a[t][e]},rt=Math.ceil,nt=Math.floor,it=function(t){return isNaN(t=+t)?0:(t>0?nt:rt)(t)},ot=Math.min,st=function(t){return t>0?ot(it(t),9007199254740991):0},at=Math.max,ct=Math.min,lt=function(t){return function(e,r,n){var i,o=m(e),s=st(o.length),a=function(t,e){var r=it(t);return r<0?at(r+e,0):ct(r,e)}(n,s);if(t&&r!=r){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((t||a in o)&&o[a]===r)return t||a||0;return!t&&-1}},ut={includes:lt(!0),indexOf:lt(!1)}.indexOf,ft=function(t,e){var r,n=m(t),i=0,o=[];for(r in n)!O(q,r)&&O(n,r)&&o.push(r);for(;e.length>i;)O(n,r=e[i++])&&(~ut(o,r)||o.push(r));return o},ht=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],dt=ht.concat("length","prototype"),pt={f:Object.getOwnPropertyNames||function(t){return ft(t,dt)}},vt={f:Object.getOwnPropertySymbols},gt=et("Reflect","ownKeys")||function(t){var e=pt.f(T(t)),r=vt.f;return r?e.concat(r(t)):e},yt=function(t,e){for(var r=gt(e),n=R.f,i=M.f,o=0;o<r.length;o++){var s=r[o];O(t,s)||n(t,s,i(e,s))}},bt=/#|\.prototype\./,mt=function(t,e){var r=Et[xt(t)];return r==Ot||r!=wt&&("function"==typeof e?c(e):!!e)},xt=mt.normalize=function(t){return String(t).replace(bt,".").toLowerCase()},Et=mt.data={},wt=mt.NATIVE="N",Ot=mt.POLYFILL="P",_t=mt,St=M.f,At=function(t,e){var r,n,i,o,s,c=t.target,l=t.global,u=t.stat;if(r=l?a:u?a[c]||z(c,{}):(a[c]||{}).prototype)for(n in e){if(o=e[n],i=t.noTargetGet?(s=St(r,n))&&s.value:r[n],!_t(l?n:c+(u?".":"#")+n,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;yt(o,i)}(t.sham||i&&i.sham)&&W(o,"sham",!0),J(r,n,o,t)}},kt=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Lt=function(t,e,r){if(kt(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}},Mt=function(t){return Object(b(t))},Tt=Array.isArray||function(t){return"Array"==v(t)},jt=!!Object.getOwnPropertySymbols&&!c((function(){return!String(Symbol())})),Rt=a.Symbol,Wt=C("wks"),zt=function(t){return Wt[t]||(Wt[t]=jt&&Rt[t]||(jt?Rt:F)("Symbol."+t))},Ct=zt("species"),Nt=function(t,e){var r;return Tt(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!Tt(r.prototype)?x(r)&&null===(r=r[Ct])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)},It=[].push,Dt=function(t){var e=1==t,r=2==t,n=3==t,i=4==t,o=6==t,s=5==t||o;return function(a,c,l,u){for(var f,h,d=Mt(a),p=y(d),v=Lt(c,l,3),g=st(p.length),b=0,m=u||Nt,x=e?m(a,g):r?m(a,0):void 0;g>b;b++)if((s||b in p)&&(h=v(f=p[b],b,d),t))if(e)x[b]=h;else if(h)switch(t){case 3:return!0;case 5:return f;case 6:return b;case 2:It.call(x,f)}else if(i)return!1;return o?-1:n||i?i:x}},Pt={forEach:Dt(0),map:Dt(1),filter:Dt(2),some:Dt(3),every:Dt(4),find:Dt(5),findIndex:Dt(6)},Vt=function(t,e){var r=[][t];return!r||!c((function(){r.call(null,e||function(){throw 1},1)}))},Ft=Pt.forEach,Bt=Vt("forEach")?function(t){return Ft(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach;At({target:"Array",proto:!0,forced:[].forEach!=Bt},{forEach:Bt});var Ht={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};for(var qt in Ht){var $t=a[qt],Xt=$t&&$t.prototype;if(Xt&&Xt.forEach!==Bt)try{W(Xt,"forEach",Bt)}catch(t){Xt.forEach=Bt}}var Yt=!("undefined"==typeof window||!window.document||!window.document.createElement),Gt=zt("species"),Ut=Pt.filter;At({target:"Array",proto:!0,forced:!function(t){return!c((function(){var e=[];return(e.constructor={})[Gt]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}("filter")},{filter:function(t){return Ut(this,t,arguments.length>1?arguments[1]:void 0)}});var Qt=Object.keys||function(t){return ft(t,ht)},Kt=l?Object.defineProperties:function(t,e){T(t);for(var r,n=Qt(e),i=n.length,o=0;i>o;)R.f(t,r=n[o++],e[r]);return t},Jt=et("document","documentElement"),Zt=H("IE_PROTO"),te=function(){},ee=function(){var t,e=A("iframe"),r=ht.length;for(e.style.display="none",Jt.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),ee=t.F;r--;)delete ee.prototype[ht[r]];return ee()},re=Object.create||function(t,e){var r;return null!==t?(te.prototype=T(t),r=new te,te.prototype=null,r[Zt]=t):r=ee(),void 0===e?r:Kt(r,e)};q[Zt]=!0;var ne=zt("unscopables"),ie=Array.prototype;null==ie[ne]&&W(ie,ne,re(null));var oe,se,ae,ce=function(t){ie[ne][t]=!0},le={},ue=!c((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),fe=H("IE_PROTO"),he=Object.prototype,de=ue?Object.getPrototypeOf:function(t){return t=Mt(t),O(t,fe)?t[fe]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?he:null},pe=zt("iterator"),ve=!1;[].keys&&("next"in(ae=[].keys())?(se=de(de(ae)))!==Object.prototype&&(oe=se):ve=!0),null==oe&&(oe={}),O(oe,pe)||W(oe,pe,(function(){return this}));var ge={IteratorPrototype:oe,BUGGY_SAFARI_ITERATORS:ve},ye=R.f,be=zt("toStringTag"),me=function(t,e,r){t&&!O(t=r?t:t.prototype,be)&&ye(t,be,{configurable:!0,value:e})},xe=ge.IteratorPrototype,Ee=function(){return this},we=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return T(r),function(t){if(!x(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(n),e?t.call(r,n):r.__proto__=n,r}}():void 0),Oe=ge.IteratorPrototype,_e=ge.BUGGY_SAFARI_ITERATORS,Se=zt("iterator"),Ae=function(){return this},ke=function(t,e,r,n,i,o,s){!function(t,e,r){var n=e+" Iterator";t.prototype=re(xe,{next:d(1,r)}),me(t,n,!1),le[n]=Ee}(r,e,n);var a,c,l,u=function(t){if(t===i&&g)return g;if(!_e&&t in p)return p[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},f=e+" Iterator",h=!1,p=t.prototype,v=p[Se]||p["@@iterator"]||i&&p[i],g=!_e&&v||u(i),y="Array"==e&&p.entries||v;if(y&&(a=de(y.call(new t)),Oe!==Object.prototype&&a.next&&(de(a)!==Oe&&(we?we(a,Oe):"function"!=typeof a[Se]&&W(a,Se,Ae)),me(a,f,!0))),"values"==i&&v&&"values"!==v.name&&(h=!0,g=function(){return v.call(this)}),p[Se]!==g&&W(p,Se,g),le[e]=g,i)if(c={values:u("values"),keys:o?g:u("keys"),entries:u("entries")},s)for(l in c)!_e&&!h&&l in p||J(p,l,c[l]);else At({target:e,proto:!0,forced:_e||h},c);return c},Le=K.set,Me=K.getterFor("Array Iterator"),Te=ke(Array,"Array",(function(t,e){Le(this,{type:"Array Iterator",target:m(t),index:0,kind:e})}),(function(){var t=Me(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values");le.Arguments=le.Array,ce("keys"),ce("values"),ce("entries");var je=Object.assign,Re=!je||c((function(){var t={},e={},r=Symbol();return t[r]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=je({},t)[r]||"abcdefghijklmnopqrst"!=Qt(je({},e)).join("")}))?function(t,e){for(var r=Mt(t),n=arguments.length,i=1,o=vt.f,s=h.f;n>i;)for(var a,c=y(arguments[i++]),u=o?Qt(c).concat(o(c)):Qt(c),f=u.length,d=0;f>d;)a=u[d++],l&&!s.call(c,a)||(r[a]=c[a]);return r}:je;At({target:"Object",stat:!0,forced:Object.assign!==Re},{assign:Re});var We=zt("toStringTag"),ze="Arguments"==v(function(){return arguments}()),Ce=function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),We))?r:ze?v(e):"Object"==(n=v(e))&&"function"==typeof e.callee?"Arguments":n},Ne={};Ne[zt("toStringTag")]="z";var Ie="[object z]"!==String(Ne)?function(){return"[object "+Ce(this)+"]"}:Ne.toString,De=Object.prototype;Ie!==De.toString&&J(De,"toString",Ie,{unsafe:!0});var Pe="\t\n\v\f\r Â áš€â€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff",Ve="["+Pe+"]",Fe=RegExp("^"+Ve+Ve+"*"),Be=RegExp(Ve+Ve+"*$"),He=function(t){return function(e){var r=String(b(e));return 1&t&&(r=r.replace(Fe,"")),2&t&&(r=r.replace(Be,"")),r}},qe={start:He(1),end:He(2),trim:He(3)}.trim,$e=a.parseInt,Xe=/^[+-]?0[Xx]/,Ye=8!==$e(Pe+"08")||22!==$e(Pe+"0x16")?function(t,e){var r=qe(String(t));return $e(r,e>>>0||(Xe.test(r)?16:10))}:$e;At({global:!0,forced:parseInt!=Ye},{parseInt:Ye});var Ge=function(t){return function(e,r){var n,i,o=String(b(e)),s=it(r),a=o.length;return s<0||s>=a?t?"":void 0:(n=o.charCodeAt(s))<55296||n>56319||s+1===a||(i=o.charCodeAt(s+1))<56320||i>57343?t?o.charAt(s):n:t?o.slice(s,s+2):i-56320+(n-55296<<10)+65536}},Ue={codeAt:Ge(!1),charAt:Ge(!0)},Qe=Ue.charAt,Ke=K.set,Je=K.getterFor("String Iterator");ke(String,"String",(function(t){Ke(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=Je(this),r=e.string,n=e.index;return n>=r.length?{value:void 0,done:!0}:(t=Qe(r,n),e.index+=t.length,{value:t,done:!1})}));var Ze=function(t,e,r){for(var n in e)J(t,n,e[n],r);return t},tr=!c((function(){return Object.isExtensible(Object.preventExtensions({}))})),er=e((function(t){var e=R.f,r=F("meta"),n=0,i=Object.isExtensible||function(){return!0},o=function(t){e(t,r,{value:{objectID:"O"+ ++n,weakData:{}}})},s=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!x(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!O(t,r)){if(!i(t))return"F";if(!e)return"E";o(t)}return t[r].objectID},getWeakData:function(t,e){if(!O(t,r)){if(!i(t))return!0;if(!e)return!1;o(t)}return t[r].weakData},onFreeze:function(t){return tr&&s.REQUIRED&&i(t)&&!O(t,r)&&o(t),t}};q[r]=!0})),rr=(er.REQUIRED,er.fastKey,er.getWeakData,er.onFreeze,zt("iterator")),nr=Array.prototype,ir=zt("iterator"),or=function(t,e,r,n){try{return n?e(T(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&T(i.call(t)),e}},sr=e((function(t){var e=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,r,n,i,o){var s,a,c,l,u,f,h,d=Lt(r,n,i?2:1);if(o)s=t;else{if("function"!=typeof(a=function(t){if(null!=t)return t[ir]||t["@@iterator"]||le[Ce(t)]}(t)))throw TypeError("Target is not iterable");if(void 0!==(h=a)&&(le.Array===h||nr[rr]===h)){for(c=0,l=st(t.length);l>c;c++)if((u=i?d(T(f=t[c])[0],f[1]):d(t[c]))&&u instanceof e)return u;return new e(!1)}s=a.call(t)}for(;!(f=s.next()).done;)if((u=or(s,d,f.value,i))&&u instanceof e)return u;return new e(!1)}).stop=function(t){return new e(!0,t)}})),ar=function(t,e,r){if(!(t instanceof e))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t},cr=zt("iterator"),lr=!1;try{var ur=0,fr={next:function(){return{done:!!ur++}},return:function(){lr=!0}};fr[cr]=function(){return this},Array.from(fr,(function(){throw 2}))}catch(t){}var hr=function(t,e,r,n,i){var o=a[t],s=o&&o.prototype,l=o,u=n?"set":"add",f={},h=function(t){var e=s[t];J(s,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(i&&!x(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return i&&!x(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(i&&!x(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(_t(t,"function"!=typeof o||!(i||s.forEach&&!c((function(){(new o).entries().next()})))))l=r.getConstructor(e,t,n,u),er.REQUIRED=!0;else if(_t(t,!0)){var d=new l,p=d[u](i?{}:-0,1)!=d,v=c((function(){d.has(1)})),g=function(t,e){if(!e&&!lr)return!1;var r=!1;try{var n={};n[cr]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(t){}return r}((function(t){new o(t)})),y=!i&&c((function(){for(var t=new o,e=5;e--;)t[u](e,e);return!t.has(-0)}));g||((l=e((function(e,r){ar(e,l,t);var i=function(t,e,r){var n,i;return we&&"function"==typeof(n=e.constructor)&&n!==r&&x(i=n.prototype)&&i!==r.prototype&&we(t,i),t}(new o,e,l);return null!=r&&sr(r,i[u],i,n),i}))).prototype=s,s.constructor=l),(v||y)&&(h("delete"),h("has"),n&&h("get")),(y||p)&&h(u),i&&s.clear&&delete s.clear}return f[t]=l,At({global:!0,forced:l!=o},f),me(l,t),i||r.setStrong(l,t,n),l},dr=er.getWeakData,pr=K.set,vr=K.getterFor,gr=Pt.find,yr=Pt.findIndex,br=0,mr=function(t){return t.frozen||(t.frozen=new xr)},xr=function(){this.entries=[]},Er=function(t,e){return gr(t.entries,(function(t){return t[0]===e}))};xr.prototype={get:function(t){var e=Er(this,t);if(e)return e[1]},has:function(t){return!!Er(this,t)},set:function(t,e){var r=Er(this,t);r?r[1]=e:this.entries.push([t,e])},delete:function(t){var e=yr(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}};var wr={getConstructor:function(t,e,r,n){var i=t((function(t,o){ar(t,i,e),pr(t,{type:e,id:br++,frozen:void 0}),null!=o&&sr(o,t[n],t,r)})),o=vr(e),s=function(t,e,r){var n=o(t),i=dr(T(e),!0);return!0===i?mr(n).set(e,r):i[n.id]=r,t};return Ze(i.prototype,{delete:function(t){var e=o(this);if(!x(t))return!1;var r=dr(t);return!0===r?mr(e).delete(t):r&&O(r,e.id)&&delete r[e.id]},has:function(t){var e=o(this);if(!x(t))return!1;var r=dr(t);return!0===r?mr(e).has(t):r&&O(r,e.id)}}),Ze(i.prototype,r?{get:function(t){var e=o(this);if(x(t)){var r=dr(t);return!0===r?mr(e).get(t):r?r[e.id]:void 0}},set:function(t,e){return s(this,t,e)}}:{add:function(t){return s(this,t,!0)}}),i}},Or=(e((function(t){var e,r=K.enforce,n=!a.ActiveXObject&&"ActiveXObject"in a,i=Object.isExtensible,o=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},s=t.exports=hr("WeakMap",o,wr,!0,!0);if(D&&n){e=wr.getConstructor(o,"WeakMap",!0),er.REQUIRED=!0;var c=s.prototype,l=c.delete,u=c.has,f=c.get,h=c.set;Ze(c,{delete:function(t){if(x(t)&&!i(t)){var n=r(this);return n.frozen||(n.frozen=new e),l.call(this,t)||n.frozen.delete(t)}return l.call(this,t)},has:function(t){if(x(t)&&!i(t)){var n=r(this);return n.frozen||(n.frozen=new e),u.call(this,t)||n.frozen.has(t)}return u.call(this,t)},get:function(t){if(x(t)&&!i(t)){var n=r(this);return n.frozen||(n.frozen=new e),u.call(this,t)?f.call(this,t):n.frozen.get(t)}return f.call(this,t)},set:function(t,n){if(x(t)&&!i(t)){var o=r(this);o.frozen||(o.frozen=new e),u.call(this,t)?h.call(this,t,n):o.frozen.set(t,n)}else h.call(this,t,n);return this}})}})),zt("iterator")),_r=zt("toStringTag"),Sr=Te.values;for(var Ar in Ht){var kr=a[Ar],Lr=kr&&kr.prototype;if(Lr){if(Lr[Or]!==Sr)try{W(Lr,Or,Sr)}catch(t){Lr[Or]=Sr}if(Lr[_r]||W(Lr,_r,Ar),Ht[Ar])for(var Mr in Te)if(Lr[Mr]!==Te[Mr])try{W(Lr,Mr,Te[Mr])}catch(t){Lr[Mr]=Te[Mr]}}}var Tr="Expected a function",jr=NaN,Rr="[object Symbol]",Wr=/^\s+|\s+$/g,zr=/^[-+]0x[0-9a-f]+$/i,Cr=/^0b[01]+$/i,Nr=/^0o[0-7]+$/i,Ir=parseInt,Dr="object"==typeof t&&t&&t.Object===Object&&t,Pr="object"==typeof self&&self&&self.Object===Object&&self,Vr=Dr||Pr||Function("return this")(),Fr=Object.prototype.toString,Br=Math.max,Hr=Math.min,qr=function(){return Vr.Date.now()};function $r(t,e,r){var n,i,o,s,a,c,l=0,u=!1,f=!1,h=!0;if("function"!=typeof t)throw new TypeError(Tr);function d(e){var r=n,o=i;return n=i=void 0,l=e,s=t.apply(o,r)}function p(t){var r=t-c;return void 0===c||r>=e||r<0||f&&t-l>=o}function v(){var t=qr();if(p(t))return g(t);a=setTimeout(v,function(t){var r=e-(t-c);return f?Hr(r,o-(t-l)):r}(t))}function g(t){return a=void 0,h&&n?d(t):(n=i=void 0,s)}function y(){var t=qr(),r=p(t);if(n=arguments,i=this,c=t,r){if(void 0===a)return function(t){return l=t,a=setTimeout(v,e),u?d(t):s}(c);if(f)return a=setTimeout(v,e),d(c)}return void 0===a&&(a=setTimeout(v,e)),s}return e=Yr(e)||0,Xr(r)&&(u=!!r.leading,o=(f="maxWait"in r)?Br(Yr(r.maxWait)||0,e):o,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=c=i=a=void 0},y.flush=function(){return void 0===a?s:g(qr())},y}function Xr(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Yr(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&Fr.call(t)==Rr}(t))return jr;if(Xr(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Xr(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Wr,"");var r=Cr.test(t);return r||Nr.test(t)?Ir(t.slice(2),r?2:8):zr.test(t)?jr:+t}var Gr=function(t,e,r){var n=!0,i=!0;if("function"!=typeof t)throw new TypeError(Tr);return Xr(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),$r(t,e,{leading:n,maxWait:e,trailing:i})},Ur="Expected a function",Qr=NaN,Kr="[object Symbol]",Jr=/^\s+|\s+$/g,Zr=/^[-+]0x[0-9a-f]+$/i,tn=/^0b[01]+$/i,en=/^0o[0-7]+$/i,rn=parseInt,nn="object"==typeof t&&t&&t.Object===Object&&t,on="object"==typeof self&&self&&self.Object===Object&&self,sn=nn||on||Function("return this")(),an=Object.prototype.toString,cn=Math.max,ln=Math.min,un=function(){return sn.Date.now()};function fn(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function hn(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&an.call(t)==Kr}(t))return Qr;if(fn(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=fn(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Jr,"");var r=tn.test(t);return r||en.test(t)?rn(t.slice(2),r?2:8):Zr.test(t)?Qr:+t}var dn=function(t,e,r){var n,i,o,s,a,c,l=0,u=!1,f=!1,h=!0;if("function"!=typeof t)throw new TypeError(Ur);function d(e){var r=n,o=i;return n=i=void 0,l=e,s=t.apply(o,r)}function p(t){var r=t-c;return void 0===c||r>=e||r<0||f&&t-l>=o}function v(){var t=un();if(p(t))return g(t);a=setTimeout(v,function(t){var r=e-(t-c);return f?ln(r,o-(t-l)):r}(t))}function g(t){return a=void 0,h&&n?d(t):(n=i=void 0,s)}function y(){var t=un(),r=p(t);if(n=arguments,i=this,c=t,r){if(void 0===a)return function(t){return l=t,a=setTimeout(v,e),u?d(t):s}(c);if(f)return a=setTimeout(v,e),d(c)}return void 0===a&&(a=setTimeout(v,e)),s}return e=hn(e)||0,fn(r)&&(u=!!r.leading,o=(f="maxWait"in r)?cn(hn(r.maxWait)||0,e):o,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=c=i=a=void 0},y.flush=function(){return void 0===a?s:g(un())},y},pn="Expected a function",vn="__lodash_hash_undefined__",gn="[object Function]",yn="[object GeneratorFunction]",bn=/^\[object .+?Constructor\]$/,mn="object"==typeof t&&t&&t.Object===Object&&t,xn="object"==typeof self&&self&&self.Object===Object&&self,En=mn||xn||Function("return this")();var wn=Array.prototype,On=Function.prototype,_n=Object.prototype,Sn=En["__core-js_shared__"],An=function(){var t=/[^.]+$/.exec(Sn&&Sn.keys&&Sn.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),kn=On.toString,Ln=_n.hasOwnProperty,Mn=_n.toString,Tn=RegExp("^"+kn.call(Ln).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),jn=wn.splice,Rn=Vn(En,"Map"),Wn=Vn(Object,"create");function zn(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Cn(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Nn(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function In(t,e){for(var r,n,i=t.length;i--;)if((r=t[i][0])===(n=e)||r!=r&&n!=n)return i;return-1}function Dn(t){return!(!Bn(t)||(e=t,An&&An in e))&&(function(t){var e=Bn(t)?Mn.call(t):"";return e==gn||e==yn}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?Tn:bn).test(function(t){if(null!=t){try{return kn.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function Pn(t,e){var r,n,i=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof e?"string":"hash"]:i.map}function Vn(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Dn(r)?r:void 0}function Fn(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(pn);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=t.apply(this,n);return r.cache=o.set(i,s),s};return r.cache=new(Fn.Cache||Nn),r}function Bn(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}zn.prototype.clear=function(){this.__data__=Wn?Wn(null):{}},zn.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},zn.prototype.get=function(t){var e=this.__data__;if(Wn){var r=e[t];return r===vn?void 0:r}return Ln.call(e,t)?e[t]:void 0},zn.prototype.has=function(t){var e=this.__data__;return Wn?void 0!==e[t]:Ln.call(e,t)},zn.prototype.set=function(t,e){return this.__data__[t]=Wn&&void 0===e?vn:e,this},Cn.prototype.clear=function(){this.__data__=[]},Cn.prototype.delete=function(t){var e=this.__data__,r=In(e,t);return!(r<0)&&(r==e.length-1?e.pop():jn.call(e,r,1),!0)},Cn.prototype.get=function(t){var e=this.__data__,r=In(e,t);return r<0?void 0:e[r][1]},Cn.prototype.has=function(t){return In(this.__data__,t)>-1},Cn.prototype.set=function(t,e){var r=this.__data__,n=In(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Nn.prototype.clear=function(){this.__data__={hash:new zn,map:new(Rn||Cn),string:new zn}},Nn.prototype.delete=function(t){return Pn(this,t).delete(t)},Nn.prototype.get=function(t){return Pn(this,t).get(t)},Nn.prototype.has=function(t){return Pn(this,t).has(t)},Nn.prototype.set=function(t,e){return Pn(this,t).set(t,e),this},Fn.Cache=Nn;var Hn=Fn,qn=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var r=-1;return t.some((function(t,n){return t[0]===e&&(r=n,!0)})),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var r=t(this.__entries__,e),n=this.__entries__[r];return n&&n[1]},e.prototype.set=function(e,r){var n=t(this.__entries__,e);~n?this.__entries__[n][1]=r:this.__entries__.push([e,r])},e.prototype.delete=function(e){var r=this.__entries__,n=t(r,e);~n&&r.splice(n,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var r=0,n=this.__entries__;r<n.length;r++){var i=n[r];t.call(e,i[1],i[0])}},e}()}(),$n="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,Xn="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),Yn="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(Xn):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},Gn=2;var Un=20,Qn=["top","right","bottom","left","width","height","size","weight"],Kn="undefined"!=typeof MutationObserver,Jn=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var r=!1,n=!1,i=0;function o(){r&&(r=!1,t()),n&&a()}function s(){Yn(o)}function a(){var t=Date.now();if(r){if(t-i<Gn)return;n=!0}else r=!0,n=!1,setTimeout(s,e);i=t}return a}(this.refresh.bind(this),Un)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,r=e.indexOf(t);~r&&e.splice(r,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){$n&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Kn?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){$n&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,r=void 0===e?"":e;Qn.some((function(t){return!!~r.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),Zn=function(t,e){for(var r=0,n=Object.keys(e);r<n.length;r++){var i=n[r];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},ti=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||Xn},ei=ai(0,0,0,0);function ri(t){return parseFloat(t)||0}function ni(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e.reduce((function(e,r){return e+ri(t["border-"+r+"-width"])}),0)}function ii(t){var e=t.clientWidth,r=t.clientHeight;if(!e&&!r)return ei;var n=ti(t).getComputedStyle(t),i=function(t){for(var e={},r=0,n=["top","right","bottom","left"];r<n.length;r++){var i=n[r],o=t["padding-"+i];e[i]=ri(o)}return e}(n),o=i.left+i.right,s=i.top+i.bottom,a=ri(n.width),c=ri(n.height);if("border-box"===n.boxSizing&&(Math.round(a+o)!==e&&(a-=ni(n,"left","right")+o),Math.round(c+s)!==r&&(c-=ni(n,"top","bottom")+s)),!function(t){return t===ti(t).document.documentElement}(t)){var l=Math.round(a+o)-e,u=Math.round(c+s)-r;1!==Math.abs(l)&&(a-=l),1!==Math.abs(u)&&(c-=u)}return ai(i.left,i.top,a,c)}var oi="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof ti(t).SVGGraphicsElement}:function(t){return t instanceof ti(t).SVGElement&&"function"==typeof t.getBBox};function si(t){return $n?oi(t)?function(t){var e=t.getBBox();return ai(0,0,e.width,e.height)}(t):ii(t):ei}function ai(t,e,r,n){return{x:t,y:e,width:r,height:n}}var ci=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ai(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=si(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),li=function(t,e){var r,n,i,o,s,a,c,l=(n=(r=e).x,i=r.y,o=r.width,s=r.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),Zn(c,{x:n,y:i,width:o,height:s,top:i,right:n+o,bottom:s+i,left:n}),c);Zn(this,{target:t,contentRect:l})},ui=function(){function t(t,e,r){if(this.activeObservations_=[],this.observations_=new qn,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=r}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof ti(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new ci(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof ti(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new li(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),fi="undefined"!=typeof WeakMap?new WeakMap:new qn,hi=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=Jn.getInstance(),n=new ui(e,r,this);fi.set(this,n)};["observe","unobserve","disconnect"].forEach((function(t){hi.prototype[t]=function(){var e;return(e=fi.get(this))[t].apply(e,arguments)}}));var di=void 0!==Xn.ResizeObserver?Xn.ResizeObserver:hi,pi=null,vi=null;function gi(){if(null===pi){if("undefined"==typeof document)return pi=0;var t=document.body,e=document.createElement("div");e.classList.add("simplebar-hide-scrollbar"),t.appendChild(e);var r=e.getBoundingClientRect().right;t.removeChild(e),pi=r}return pi}Yt&&window.addEventListener("resize",(function(){vi!==window.devicePixelRatio&&(vi=window.devicePixelRatio,pi=null)}));var yi=function(t){return function(e,r,n,i){kt(r);var o=Mt(e),s=y(o),a=st(o.length),c=t?a-1:0,l=t?-1:1;if(n<2)for(;;){if(c in s){i=s[c],c+=l;break}if(c+=l,t?c<0:a<=c)throw TypeError("Reduce of empty array with no initial value")}for(;t?c>=0:a>c;c+=l)c in s&&(i=r(i,s[c],c,o));return i}},bi={left:yi(!1),right:yi(!0)}.left;At({target:"Array",proto:!0,forced:Vt("reduce")},{reduce:function(t){return bi(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}});var mi=R.f,xi=Function.prototype,Ei=xi.toString,wi=/^\s*function ([^ (]*)/;!l||"name"in xi||mi(xi,"name",{configurable:!0,get:function(){try{return Ei.call(this).match(wi)[1]}catch(t){return""}}});var Oi,_i,Si=function(){var t=T(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},Ai=RegExp.prototype.exec,ki=String.prototype.replace,Li=Ai,Mi=(Oi=/a/,_i=/b*/g,Ai.call(Oi,"a"),Ai.call(_i,"a"),0!==Oi.lastIndex||0!==_i.lastIndex),Ti=void 0!==/()??/.exec("")[1];(Mi||Ti)&&(Li=function(t){var e,r,n,i,o=this;return Ti&&(r=new RegExp("^"+o.source+"$(?!\\s)",Si.call(o))),Mi&&(e=o.lastIndex),n=Ai.call(o,t),Mi&&n&&(o.lastIndex=o.global?n.index+n[0].length:e),Ti&&n&&n.length>1&&ki.call(n[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(n[i]=void 0)})),n});var ji=Li;At({target:"RegExp",proto:!0,forced:/./.exec!==ji},{exec:ji});var Ri=zt("species"),Wi=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),zi=!c((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]})),Ci=function(t,e,r,n){var i=zt(t),o=!c((function(){var e={};return e[i]=function(){return 7},7!=""[t](e)})),s=o&&!c((function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[Ri]=function(){return r}),r[i](""),!e}));if(!o||!s||"replace"===t&&!Wi||"split"===t&&!zi){var a=/./[i],l=r(i,""[t],(function(t,e,r,n,i){return e.exec===ji?o&&!i?{done:!0,value:a.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}})),u=l[0],f=l[1];J(String.prototype,t,u),J(RegExp.prototype,i,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}),n&&W(RegExp.prototype[i],"sham",!0)}},Ni=Ue.charAt,Ii=function(t,e,r){return e+(r?Ni(t,e).length:1)},Di=function(t,e){var r=t.exec;if("function"==typeof r){var n=r.call(t,e);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==v(t))throw TypeError("RegExp#exec called on incompatible receiver");return ji.call(t,e)};Ci("match",1,(function(t,e,r){return[function(e){var r=b(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var i=T(t),o=String(this);if(!i.global)return Di(i,o);var s=i.unicode;i.lastIndex=0;for(var a,c=[],l=0;null!==(a=Di(i,o));){var u=String(a[0]);c[l]=u,""===u&&(i.lastIndex=Ii(o,st(i.lastIndex),s)),l++}return 0===l?null:c}]}));var Pi=Math.max,Vi=Math.min,Fi=Math.floor,Bi=/\$([$&'`]|\d\d?|<[^>]*>)/g,Hi=/\$([$&'`]|\d\d?)/g;Ci("replace",2,(function(t,e,r){return[function(r,n){var i=b(this),o=null==r?void 0:r[t];return void 0!==o?o.call(r,i,n):e.call(String(i),r,n)},function(t,i){var o=r(e,t,this,i);if(o.done)return o.value;var s=T(t),a=String(this),c="function"==typeof i;c||(i=String(i));var l=s.global;if(l){var u=s.unicode;s.lastIndex=0}for(var f=[];;){var h=Di(s,a);if(null===h)break;if(f.push(h),!l)break;""===String(h[0])&&(s.lastIndex=Ii(a,st(s.lastIndex),u))}for(var d,p="",v=0,g=0;g<f.length;g++){h=f[g];for(var y=String(h[0]),b=Pi(Vi(it(h.index),a.length),0),m=[],x=1;x<h.length;x++)m.push(void 0===(d=h[x])?d:String(d));var E=h.groups;if(c){var w=[y].concat(m,b,a);void 0!==E&&w.push(E);var O=String(i.apply(void 0,w))}else O=n(y,a,b,m,E,i);b>=v&&(p+=a.slice(v,b)+O,v=b+y.length)}return p+a.slice(v)}];function n(t,r,n,i,o,s){var a=n+t.length,c=i.length,l=Hi;return void 0!==o&&(o=Mt(o),l=Bi),e.call(s,l,(function(e,s){var l;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(a);case"<":l=o[s.slice(1,-1)];break;default:var u=+s;if(0===u)return e;if(u>c){var f=Fi(u/10);return 0===f?e:f<=c?void 0===i[f-1]?s.charAt(1):i[f-1]+s.charAt(1):e}l=i[u-1]}return void 0===l?"":l}))}}));var qi=function(t){return Array.prototype.reduce.call(t,(function(t,e){var r=e.name.match(/data-simplebar-(.+)/);if(r){var n=r[1].replace(/\W+(.)/g,(function(t,e){return e.toUpperCase()}));switch(e.value){case"true":t[n]=!0;break;case"false":t[n]=!1;break;case void 0:t[n]=!0;break;default:t[n]=e.value}}return t}),{})};function $i(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView?t.ownerDocument.defaultView:window}function Xi(t){return t&&t.ownerDocument?t.ownerDocument:document}var Yi=function(){function t(e,r){var n=this;this.onScroll=function(){var t=$i(n.el);n.scrollXTicking||(t.requestAnimationFrame(n.scrollX),n.scrollXTicking=!0),n.scrollYTicking||(t.requestAnimationFrame(n.scrollY),n.scrollYTicking=!0)},this.scrollX=function(){n.axis.x.isOverflowing&&(n.showScrollbar("x"),n.positionScrollbar("x")),n.scrollXTicking=!1},this.scrollY=function(){n.axis.y.isOverflowing&&(n.showScrollbar("y"),n.positionScrollbar("y")),n.scrollYTicking=!1},this.onMouseEnter=function(){n.showScrollbar("x"),n.showScrollbar("y")},this.onMouseMove=function(t){n.mouseX=t.clientX,n.mouseY=t.clientY,(n.axis.x.isOverflowing||n.axis.x.forceVisible)&&n.onMouseMoveForAxis("x"),(n.axis.y.isOverflowing||n.axis.y.forceVisible)&&n.onMouseMoveForAxis("y")},this.onMouseLeave=function(){n.onMouseMove.cancel(),(n.axis.x.isOverflowing||n.axis.x.forceVisible)&&n.onMouseLeaveForAxis("x"),(n.axis.y.isOverflowing||n.axis.y.forceVisible)&&n.onMouseLeaveForAxis("y"),n.mouseX=-1,n.mouseY=-1},this.onWindowResize=function(){n.scrollbarWidth=n.getScrollbarWidth(),n.hideNativeScrollbar()},this.hideScrollbars=function(){n.axis.x.track.rect=n.axis.x.track.el.getBoundingClientRect(),n.axis.y.track.rect=n.axis.y.track.el.getBoundingClientRect(),n.isWithinBounds(n.axis.y.track.rect)||(n.axis.y.scrollbar.el.classList.remove(n.classNames.visible),n.axis.y.isVisible=!1),n.isWithinBounds(n.axis.x.track.rect)||(n.axis.x.scrollbar.el.classList.remove(n.classNames.visible),n.axis.x.isVisible=!1)},this.onPointerEvent=function(t){var e,r;n.axis.x.track.rect=n.axis.x.track.el.getBoundingClientRect(),n.axis.y.track.rect=n.axis.y.track.el.getBoundingClientRect(),(n.axis.x.isOverflowing||n.axis.x.forceVisible)&&(e=n.isWithinBounds(n.axis.x.track.rect)),(n.axis.y.isOverflowing||n.axis.y.forceVisible)&&(r=n.isWithinBounds(n.axis.y.track.rect)),(e||r)&&(t.preventDefault(),t.stopPropagation(),"mousedown"===t.type&&(e&&(n.axis.x.scrollbar.rect=n.axis.x.scrollbar.el.getBoundingClientRect(),n.isWithinBounds(n.axis.x.scrollbar.rect)?n.onDragStart(t,"x"):n.onTrackClick(t,"x")),r&&(n.axis.y.scrollbar.rect=n.axis.y.scrollbar.el.getBoundingClientRect(),n.isWithinBounds(n.axis.y.scrollbar.rect)?n.onDragStart(t,"y"):n.onTrackClick(t,"y"))))},this.drag=function(e){var r=n.axis[n.draggedAxis].track,i=r.rect[n.axis[n.draggedAxis].sizeAttr],o=n.axis[n.draggedAxis].scrollbar,s=n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr],a=parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr],10);e.preventDefault(),e.stopPropagation();var c=(("y"===n.draggedAxis?e.pageY:e.pageX)-r.rect[n.axis[n.draggedAxis].offsetAttr]-n.axis[n.draggedAxis].dragOffset)/(i-o.size)*(s-a);"x"===n.draggedAxis&&(c=n.isRtl&&t.getRtlHelpers().isRtlScrollbarInverted?c-(i+o.size):c,c=n.isRtl&&t.getRtlHelpers().isRtlScrollingInverted?-c:c),n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr]=c},this.onEndDrag=function(t){var e=Xi(n.el),r=$i(n.el);t.preventDefault(),t.stopPropagation(),n.el.classList.remove(n.classNames.dragging),e.removeEventListener("mousemove",n.drag,!0),e.removeEventListener("mouseup",n.onEndDrag,!0),n.removePreventClickId=r.setTimeout((function(){e.removeEventListener("click",n.preventClick,!0),e.removeEventListener("dblclick",n.preventClick,!0),n.removePreventClickId=null}))},this.preventClick=function(t){t.preventDefault(),t.stopPropagation()},this.el=e,this.minScrollbarWidth=20,this.options=Object.assign({},t.defaultOptions,{},r),this.classNames=Object.assign({},t.defaultOptions.classNames,{},this.options.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}}},this.removePreventClickId=null,t.instances.has(this.el)||(this.recalculate=Gr(this.recalculate.bind(this),64),this.onMouseMove=Gr(this.onMouseMove.bind(this),64),this.hideScrollbars=dn(this.hideScrollbars.bind(this),this.options.timeout),this.onWindowResize=dn(this.onWindowResize.bind(this),64,{leading:!0}),t.getRtlHelpers=Hn(t.getRtlHelpers),this.init())}t.getRtlHelpers=function(){var e=document.createElement("div");e.innerHTML='<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';var r=e.firstElementChild;document.body.appendChild(r);var n=r.firstElementChild;r.scrollLeft=0;var i=t.getOffset(r),o=t.getOffset(n);r.scrollLeft=999;var s=t.getOffset(n);return{isRtlScrollingInverted:i.left!==o.left&&o.left-s.left!=0,isRtlScrollbarInverted:i.left!==o.left}},t.getOffset=function(t){var e=t.getBoundingClientRect(),r=Xi(t),n=$i(t);return{top:e.top+(n.pageYOffset||r.documentElement.scrollTop),left:e.left+(n.pageXOffset||r.documentElement.scrollLeft)}};var e=t.prototype;return e.init=function(){t.instances.set(this.el,this),Yt&&(this.initDOM(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},e.initDOM=function(){var t=this;Xi(this.el);if(Array.prototype.filter.call(this.el.children,(function(e){return e.classList.contains(t.classNames.wrapper)})).length)this.wrapperEl=this.el.querySelector("."+this.classNames.wrapper),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector("."+this.classNames.contentWrapper),this.contentEl=this.options.contentNode||this.el.querySelector("."+this.classNames.contentEl),this.offsetEl=this.el.querySelector("."+this.classNames.offset),this.maskEl=this.el.querySelector("."+this.classNames.mask),this.placeholderEl=this.findChild(this.wrapperEl,"."+this.classNames.placeholder),this.heightAutoObserverWrapperEl=this.el.querySelector("."+this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl=this.el.querySelector("."+this.classNames.heightAutoObserverEl),this.axis.x.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.horizontal),this.axis.y.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.vertical);else{for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),this.wrapperEl.classList.add(this.classNames.wrapper),this.contentWrapperEl.classList.add(this.classNames.contentWrapper),this.offsetEl.classList.add(this.classNames.offset),this.maskEl.classList.add(this.classNames.mask),this.contentEl.classList.add(this.classNames.contentEl),this.placeholderEl.classList.add(this.classNames.placeholder),this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl)}if(!this.axis.x.track.el||!this.axis.y.track.el){var e=document.createElement("div"),r=document.createElement("div");e.classList.add(this.classNames.track),r.classList.add(this.classNames.scrollbar),e.appendChild(r),this.axis.x.track.el=e.cloneNode(!0),this.axis.x.track.el.classList.add(this.classNames.horizontal),this.axis.y.track.el=e.cloneNode(!0),this.axis.y.track.el.classList.add(this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}this.axis.x.scrollbar.el=this.axis.x.track.el.querySelector("."+this.classNames.scrollbar),this.axis.y.scrollbar.el=this.axis.y.track.el.querySelector("."+this.classNames.scrollbar),this.options.autoHide||(this.axis.x.scrollbar.el.classList.add(this.classNames.visible),this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),this.el.setAttribute("data-simplebar","init")},e.initListeners=function(){var t=this,e=$i(this.el);this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach((function(e){t.el.addEventListener(e,t.onPointerEvent,!0)})),["touchstart","touchend","touchmove"].forEach((function(e){t.el.addEventListener(e,t.onPointerEvent,{capture:!0,passive:!0})})),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl.addEventListener("scroll",this.onScroll),e.addEventListener("resize",this.onWindowResize);var r=!1,n=e.ResizeObserver||di;this.resizeObserver=new n((function(){r&&t.recalculate()})),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),e.requestAnimationFrame((function(){r=!0})),this.mutationObserver=new e.MutationObserver(this.recalculate),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})},e.recalculate=function(){var t=$i(this.el);this.elStyles=t.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;var e=this.heightAutoObserverEl.offsetHeight<=1,r=this.heightAutoObserverEl.offsetWidth<=1,n=this.contentEl.offsetWidth,i=this.contentWrapperEl.offsetWidth,o=this.elStyles.overflowX,s=this.elStyles.overflowY;this.contentEl.style.padding=this.elStyles.paddingTop+" "+this.elStyles.paddingRight+" "+this.elStyles.paddingBottom+" "+this.elStyles.paddingLeft,this.wrapperEl.style.margin="-"+this.elStyles.paddingTop+" -"+this.elStyles.paddingRight+" -"+this.elStyles.paddingBottom+" -"+this.elStyles.paddingLeft;var a=this.contentEl.scrollHeight,c=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=e?"auto":"100%",this.placeholderEl.style.width=r?n+"px":"auto",this.placeholderEl.style.height=a+"px";var l=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=c>n,this.axis.y.isOverflowing=a>l,this.axis.x.isOverflowing="hidden"!==o&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==s&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();var u=this.axis.x.isOverflowing?this.scrollbarWidth:0,f=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&c>i-f,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&a>l-u,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el.style.width=this.axis.x.scrollbar.size+"px",this.axis.y.scrollbar.el.style.height=this.axis.y.scrollbar.size+"px",this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")},e.getScrollbarSize=function(t){if(void 0===t&&(t="y"),!this.axis[t].isOverflowing)return 0;var e,r=this.contentEl[this.axis[t].scrollSizeAttr],n=this.axis[t].track.el[this.axis[t].offsetSizeAttr],i=n/r;return e=Math.max(~~(i*n),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(e=Math.min(e,this.options.scrollbarMaxSize)),e},e.positionScrollbar=function(e){if(void 0===e&&(e="y"),this.axis[e].isOverflowing){var r=this.contentWrapperEl[this.axis[e].scrollSizeAttr],n=this.axis[e].track.el[this.axis[e].offsetSizeAttr],i=parseInt(this.elStyles[this.axis[e].sizeAttr],10),o=this.axis[e].scrollbar,s=this.contentWrapperEl[this.axis[e].scrollOffsetAttr],a=(s="x"===e&&this.isRtl&&t.getRtlHelpers().isRtlScrollingInverted?-s:s)/(r-i),c=~~((n-o.size)*a);c="x"===e&&this.isRtl&&t.getRtlHelpers().isRtlScrollbarInverted?c+(n-o.size):c,o.el.style.transform="x"===e?"translate3d("+c+"px, 0, 0)":"translate3d(0, "+c+"px, 0)"}},e.toggleTrackVisibility=function(t){void 0===t&&(t="y");var e=this.axis[t].track.el,r=this.axis[t].scrollbar.el;this.axis[t].isOverflowing||this.axis[t].forceVisible?(e.style.visibility="visible",this.contentWrapperEl.style[this.axis[t].overflowAttr]="scroll"):(e.style.visibility="hidden",this.contentWrapperEl.style[this.axis[t].overflowAttr]="hidden"),this.axis[t].isOverflowing?r.style.display="block":r.style.display="none"},e.hideNativeScrollbar=function(){this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-"+this.scrollbarWidth+"px":0,this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-"+this.scrollbarWidth+"px":0},e.onMouseMoveForAxis=function(t){void 0===t&&(t="y"),this.axis[t].track.rect=this.axis[t].track.el.getBoundingClientRect(),this.axis[t].scrollbar.rect=this.axis[t].scrollbar.el.getBoundingClientRect(),this.isWithinBounds(this.axis[t].scrollbar.rect)?this.axis[t].scrollbar.el.classList.add(this.classNames.hover):this.axis[t].scrollbar.el.classList.remove(this.classNames.hover),this.isWithinBounds(this.axis[t].track.rect)?(this.showScrollbar(t),this.axis[t].track.el.classList.add(this.classNames.hover)):this.axis[t].track.el.classList.remove(this.classNames.hover)},e.onMouseLeaveForAxis=function(t){void 0===t&&(t="y"),this.axis[t].track.el.classList.remove(this.classNames.hover),this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)},e.showScrollbar=function(t){void 0===t&&(t="y");var e=this.axis[t].scrollbar.el;this.axis[t].isVisible||(e.classList.add(this.classNames.visible),this.axis[t].isVisible=!0),this.options.autoHide&&this.hideScrollbars()},e.onDragStart=function(t,e){void 0===e&&(e="y");var r=Xi(this.el),n=$i(this.el),i=this.axis[e].scrollbar,o="y"===e?t.pageY:t.pageX;this.axis[e].dragOffset=o-i.rect[this.axis[e].offsetAttr],this.draggedAxis=e,this.el.classList.add(this.classNames.dragging),r.addEventListener("mousemove",this.drag,!0),r.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(r.addEventListener("click",this.preventClick,!0),r.addEventListener("dblclick",this.preventClick,!0)):(n.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},e.onTrackClick=function(t,e){var r=this;if(void 0===e&&(e="y"),this.options.clickOnTrack){var n=$i(this.el);this.axis[e].scrollbar.rect=this.axis[e].scrollbar.el.getBoundingClientRect();var i=this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],o=parseInt(this.elStyles[this.axis[e].sizeAttr],10),s=this.contentWrapperEl[this.axis[e].scrollOffsetAttr],a=("y"===e?this.mouseY-i:this.mouseX-i)<0?-1:1,c=-1===a?s-o:s+o;!function t(){var i,o;-1===a?s>c&&(s-=40,r.contentWrapperEl.scrollTo(((i={})[r.axis[e].offsetAttr]=s,i)),n.requestAnimationFrame(t)):s<c&&(s+=40,r.contentWrapperEl.scrollTo(((o={})[r.axis[e].offsetAttr]=s,o)),n.requestAnimationFrame(t))}()}},e.getContentElement=function(){return this.contentEl},e.getScrollElement=function(){return this.contentWrapperEl},e.getScrollbarWidth=function(){try{return"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:gi()}catch(t){return gi()}},e.removeListeners=function(){var t=this,e=$i(this.el);this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach((function(e){t.el.removeEventListener(e,t.onPointerEvent,!0)})),["touchstart","touchend","touchmove"].forEach((function(e){t.el.removeEventListener(e,t.onPointerEvent,{capture:!0,passive:!0})})),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onWindowResize),this.mutationObserver.disconnect(),this.resizeObserver.disconnect(),this.recalculate.cancel(),this.onMouseMove.cancel(),this.hideScrollbars.cancel(),this.onWindowResize.cancel()},e.unMount=function(){this.removeListeners(),t.instances.delete(this.el)},e.isWithinBounds=function(t){return this.mouseX>=t.left&&this.mouseX<=t.left+t.width&&this.mouseY>=t.top&&this.mouseY<=t.top+t.height},e.findChild=function(t,e){var r=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;return Array.prototype.filter.call(t.children,(function(t){return r.call(t,e)}))[0]},t}();return Yi.defaultOptions={autoHide:!0,forceVisible:!1,clickOnTrack:!0,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging"},scrollbarMinSize:25,scrollbarMaxSize:0,timeout:1e3},Yi.instances=new WeakMap,Yi.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]:not([data-simplebar="init"])'),(function(t){Yi.instances.has(t)||new Yi(t,qi(t.attributes))}))},Yi.removeObserver=function(){this.globalObserver.disconnect()},Yi.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(Yi.handleMutations),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))},Yi.handleMutations=function(t){t.forEach((function(t){Array.prototype.forEach.call(t.addedNodes,(function(t){1===t.nodeType&&(t.hasAttribute("data-simplebar")?!Yi.instances.has(t)&&new Yi(t,qi(t.attributes)):Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar]:not([data-simplebar="init"])'),(function(t){!Yi.instances.has(t)&&new Yi(t,qi(t.attributes))})))})),Array.prototype.forEach.call(t.removedNodes,(function(t){1===t.nodeType&&(t.hasAttribute('[data-simplebar="init"]')?Yi.instances.has(t)&&Yi.instances.get(t).unMount():Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'),(function(t){Yi.instances.has(t)&&Yi.instances.get(t).unMount()})))}))}))},Yi.getOptions=qi,Yt&&Yi.initHtmlApi(),Yi}));

/*************JUBI GTM [START]*****************/
$(document).ready(function() {
    /**this is production**/
    $('#jubi-chat-loader-app').on('click', function(e) {
        if ($(event.target).parent().hasClass("jubi-secHideChat")) {
            jubiChatGTM("closed")
        } else if (($('#jubi-chat-loader-app').find("#jubi-aside_fullopenview").css('display') == 'block')) {
            jubiChatGTM("open")
        }
    });

    function jubiChatGTM(event) {

        var navHeader = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
        var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
        dataLayer.push({
            'event': 'event allpages',
            'category': 'floater',
            'action': 'chatbot | tata capital assistant',
            'label': event,
            'site section': navHeader + ' | ' + pageName,
        });
    }


});
/*************JUBI GTM [END]*****************/
/********************************New Header GTM ******************************/
//Apply Now Event
$(".gtmAply").click(function(event) {

    var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var siteName = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    var prodname = $(event.target).parents(".wedding-loan-menu").find('h3').text().toLowerCase().trim();
    var mainProdId = $(event.target).parents(".wedding-loan-menu").parents('.thirdmenu.js-thirdmenu'); //.siblings('.nav-items.primary-nav-items');
    var idP = mainProdId.attr('id');
    var mainProduct = $("[data-value=" + idP + "]").text().toLowerCase().trim();
    var subproduct = $(event.target).parents(".wedding-loan-menu").find('.wedding-tab-links.wedding-links-active').children('.text13').text().toLowerCase().trim();
    var label = $(event.target).text().toLowerCase().trim();
    if (subproduct == "two wheeler loan" || subproduct == "used car loan") {
        dataLayer.push({
            'category': 'top navigation',
            'action': prodname + ' - ' + subproduct,
            'label': label,
            'event': 'event allpages',
            'site section': siteName + ' | ' + pageName,

        });
    } else {
        dataLayer.push({
            'category': 'top navigation',
            'action': prodname,
            'label': label,
            'event': 'event allpages',
            'site section': siteName + ' | ' + pageName,

        });
    }
});
//Sub Nav   
$(".retailList").click(function(event) {

    var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var siteName = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    var prodname = $(event.target).parents('.loan-inner-content.clearfix').find('.heading18').text().toLowerCase().trim();
    var prodnameInsur = $(event.target).parents('.general-col').find('.heading18').text().toLowerCase().trim();
    var mainProdId = $(event.target).parents('.thirdmenu.js-thirdmenu'); //.siblings('.nav-items.primary-nav-items');
    var idP = mainProdId.attr('id');
    var mainProduct = $("[data-value=" + idP + "]").text().toLowerCase().trim();
    var subproduct = $(event.target).parents('.loan-inner-content.clearfix').find('.wedding-loan-menu').find('.wedding-tab-links.wedding-links-active').children('.text13').text().toLowerCase().trim();
    var title = $(event.target).text().toLowerCase().trim();


    if (mainProduct == "more+") {
        if (prodnameInsur == "general insurance" || prodnameInsur == "life insurance") {
            dataLayer.push({
                'event': 'event allpages',
                'category': 'top navigation',
                'action': mainProduct + ' | ' + prodnameInsur,
                'label': title,
                'site section': siteName + ' | ' + pageName,
            });
        } else if (prodname == "vehicle loan") {
            dataLayer.push({
                'event': 'event allpages',
                'category': 'topnavigation',
                'action': mainProduct + ' | ' + prodname,
                'label': subproduct + ' | ' + title,
                'site section': siteName + ' | ' + pageName,
            });
        } else if (mainProduct == "more+") {
            dataLayer.push({
                'event': 'event allpages',
                'category': 'topnavigation',
                'action': mainProduct + ' | ' + prodname,
                'label': title,
                'site section': siteName + ' | ' + pageName,
            });
        } else {
            dataLayer.push({
                'event': 'event allpages',
                'category': 'top navigation',
                'action': prodname,
                'label': title,
                'site section': siteName + ' | ' + pageName,

            });
        }
    } else {
        dataLayer.push({
            'event': 'event allpages',
            'category': 'top navigation',
            'action': prodname,
            'label': title,
            'site section': siteName + ' | ' + pageName,

        });

    }
});

function searchOpen() {
    var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var navHeader = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();

    dataLayer.push({
        'category': 'top navigation',
        'action': 'search',
        'label': 'open',
        'event': 'event allpages',
        'site section': navHeader + ' | ' + pageName,

    });
    searchOpen = function() {};
}

function searchClosed() {
    var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var siteName = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    dataLayer.push({
        'category': 'top navigation',
        'action': 'search',
        'label': 'close',
        'event': 'event allpages',
        'site section': siteName + ' | ' + pageName,

    });
    searchClosed = function() {};
}

function searchenter() {
    //function fetchvalue(
    var srch = $('#mySearch').val();
    console.log(srch);
    var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var siteName = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    dataLayer.push({
        'event': 'event allpages',
        'category': 'top navigation',
        'action': 'search',
        'label': 'query | ' + srch,
        'site section': siteName + ' | ' + pageName,

    });
    if (typeof url === "string") {
        location.href = url;
    }
}
//    $('#mySearch').keypress(function(e){

//      if (e.which == 13) {
//       debugger
//       var enterData = $(e.target).val();
//       var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
//       var siteName = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
//       dataLayer.push({
//         'category': 'search bar | top navigation',
//         'action': 'search',
//         'label': enterData,
//         'event': 'event allpages',
//         'site section': siteName + ' | ' + pageName,
//       })
//     }


//    })

function searchHeader(data) {
    var searchData = data.toLowerCase().trim();
    var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var siteName = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    dataLayer.push({
        'category': 'search bar | top navigation',
        'action': 'search',
        'label': searchData,
        'event': 'event allpages',
        'site section': siteName + ' | ' + pageName,

    });
}



$(".loginDrop").click(function(ele) {
    var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var siteName = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    var loggtm = $(this).text().toLowerCase().trim();
    dataLayer.push({
        'category': 'top navigation',
        'action': 'login',
        'label': loggtm,
        'event': 'event allpages',
        'site section': siteName + ' | ' + pageName,

    });

});


$('.call-desktop').on("click", function(lee) {
    var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var siteName = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    // var label = $(lee.target).text().trim();
    dataLayer.push({
        'category': 'top navigation',
        'action': 'cta',
        'label': 'phone number',
        'event': 'event allpages',
        'site section': siteName + ' | ' + pageName,

    });
})

$(".quick-pay").on("click", function(le) {

    var title = $(le.target).text().toLowerCase().trim();
    var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var siteName = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    dataLayer.push({
        'category': 'top navigation',
        'action': 'cta',
        'label': title,
        'event': 'event allpages',
        'site section': siteName + ' | ' + pageName,

    });

});

$('.logo-desktop').on("click", function() {
    var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var siteName = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    dataLayer.push({
        'category': 'top navigation',
        'action': 'cta',
        'label': 'logo',
        'event': 'event allpages',
        'site section': siteName + ' | ' + pageName,

    });
})
$(".search-func-close").on("click", function() {
    searchClosed();
});

$('.second-bar .second-inner .icon-search').on('click', function(e) {
    if ($('.nav-overlay-search:visible').length) {
        searchClosed();
    }
    if ($(e.target).hasClass('icon-search')) {
        searchOpen();
    }

})


/**************************************************New Header Gtm End************************************************************************/


/******************************************Commerical New Header Gtm Trigger *******************************/
/*1.button Trigger*/
$(".gtmApply").on("click", function(e) {
    var navHeader = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    var pname = $(e.target).parents('.structureLineSubmenu').siblings('a').text().toLowerCase().trim();
    var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var btnTitle = $(e.target).text().toLowerCase();
    dataLayer.push({
        'event': 'event allpages',
        'category': 'topnavigation',
        'action': pname,
        'label': btnTitle,
        'site section': navHeader + ' | ' + pageName,
    });
});

/*sub links trigger */
$(".CorporateList").on("click", function(e) {
    //e.preventDefault();

    var navHeader = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    var pname = $(e.target).parents('.structureLineSubmenu').siblings('a').text().toLowerCase().trim();
    var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var btnTitle = $(e.target).text().toLowerCase();
    dataLayer.push({
        'event': 'event allpages',
        'category': 'topnavigation',
        'action': pname,
        'label': btnTitle,
        'site section': navHeader + ' | ' + pageName,
    });
});

/*login trigger */
$(".corplogingtm").click(function(event) {
    var navHeader = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var loggtm = $(event.target).text().toLowerCase();;
    console.log(loggtm)
    dataLayer.push({
        'event': 'event allpages',
        'category': ' top navigation | ' + navHeader,
        'action': 'cta',
        'label': 'Login | ' + loggtm,
        'site section': navHeader + ' | ' + pageName,
    });

});


/******************************************Commerical New Header Gtm Trigger End *******************************/
/**
 * HEADER COMPONENT
 */

$(document).ready(function() {

    var initialScrollPos = 0;
    var scrollDiff, isScrolling;
    if (initialScrollPos == 0) {
        $(".header-indicator").show();
    }
    $(window).scroll(function() {
        //To close login drop down on scroll
        //$('.header-component .login-dropdown').css('display', 'none');

        var currentScrollPos = $(this).scrollTop();
        if ($(".top-bar").height() == 0) {
            $(".header-indicator").hide();
        }
        if (currentScrollPos < 36) {
            $(".top-bar").css({
                height: '36px',
            });
            if ($(window).width() > 991) {

                $(".header-indicator").hide();
                window.addEventListener('scroll', function(event) {

                    // Clear our timeout throughout the scroll
                    window.clearTimeout(isScrolling);

                    // Set a timeout to run after scrolling ends
                    isScrolling = setTimeout(function() {

                        // Run the callback
                        $(".header-indicator").show();

                    }, 66);

                }, false);
            }

            if (currentScrollPos == 0) {
                $(".header").removeClass("fixed-header");
                $(".header-indicator").show();
            }

        } else {
            if (currentScrollPos > initialScrollPos) {

                $(".top-bar").hide();
                $(".header-indicator").hide();

                window.addEventListener('scroll', function(event) {

                    // Clear our timeout throughout the scroll
                    window.clearTimeout(isScrolling);

                    // Set a timeout to run after scrolling ends
                    isScrolling = setTimeout(function() {

                        // Run the callback
                        $(".header-indicator").hide();

                    }, 66);

                }, false);
                $(".top-bar").css({
                    height: 0,
                });

                $(".header").addClass("fixed-header");

                $(".loan-content-mobile").css({
                    top: '50px'
                });
                $(".loan-content-details").css({
                    top: '50px'
                });
                $(".tabs-section").css({
                    top: '50px'
                });

                $(".faq-side-bar").css({
                    top: '120px'
                });

                $(".nav-side-bar").css({
                    top: '120px'
                });

                $(".know-more-side-bar").css({
                    top: '120px'
                });

                $(".about-overview-side-bar").css({
                    top: '120px'
                });

                $(".leadership-team-side-bar").css({
                    top: '120px'
                });


                $(".loan-content-mobile").css({
                    height: 'calc(100vh - 50px)'
                });
                $(".loan-content-details").css({
                    height: 'calc(100vh - 50px)'
                });
                $(".nav-overlay-search").css({
                    height: 'calc(100vh - 50px)'
                });
                setTimeout(function() {
                    $(".top-bar").show();
                }, 200);
            } else {
                $(".top-bar").css({
                    height: '36px'
                });
                $(".loan-content-mobile").css({
                    top: '86px'
                });
                $(".loan-content-details").css({
                    top: '86px'
                });
                $(".tabs-section").css({
                    top: '50px'
                });

                $(".faq-side-bar").css({
                    top: '160px'
                });


                $(".know-more-side-bar").css({
                    top: '160px'
                });

                $(".about-overview-side-bar").css({
                    top: '160px'
                });


                $(".leadership-team-side-bar").css({
                    top: '160px'
                });

                $(".nav-side-bar").css({
                    top: '160px'
                });


                $(".loan-content-mobile").css({
                    height: 'calc(100vh - 86px)'
                });
                $(".loan-content-details").css({
                    height: 'calc(100vh - 86px)'
                });
                $(".nav-overlay-search").css({
                    height: 'calc(100vh - 86px)'
                });
            }
            if (currentScrollPos == 36) {
                // Listen for scroll events
                window.addEventListener('scroll', function(event) {

                    // Clear our timeout throughout the scroll
                    window.clearTimeout(isScrolling);

                    // Set a timeout to run after scrolling ends
                    isScrolling = setTimeout(function() {

                        // Run the callback
                        $(".header-indicator").hide();

                    }, 66);
                }, false);
            }
        }


        scrollDiff = currentScrollPos - initialScrollPos;

        initialScrollPos = currentScrollPos;
    });

    //Login dropdown
    $('.header-component .login-btn').on('click', function() {
        $('.thirdmenu').removeClass('active');
        $('.nav-overlay').removeClass('opened');
        $('.mob-header').removeClass('active');
        $('body').removeClass('scroll-hide');
        $('.bannerBox .banner-caption').removeClass('pd-l30')
        $('.hamburger-menu').removeClass('animate-hamburger')
        $(".structureLineSubmenu").removeClass('active');
        $('.menu-right .floating-widget').find('input[type="checkbox"]').prop("checked", false);
        if ($('.header-component .login-dropdown').css('display') == 'none') {
            // $('.header-component .login-dropdown').css('display', 'block');
            //To close search drop down and navigation bar drop down
            if ($('.nav-overlay-search, .nav-container, .nav-overlay').css('display') == 'block') {
                $('.nav-overlay-search').slideUp();
                $('.nav-container').removeClass('opened');
                $('.nav-overlay').removeClass('opened');
                $(".main-tabs").removeClass("active");
                $('.main-tabs-active').addClass("active");
                showBodyScroll();
            }
        } else {
            // $('.header-component .login-dropdown').css('display', 'none');
        }
    });

    //Mobile view logon drop down
    $('.header-component .user-icon').on('click', function() {
        if ($('.header-component .login-dropdown').css('display') == 'none') {
            if ($(".loan-content-mobile").hasClass('loan-content-transform')) {
                $(".loan-content-mobile").removeClass('loan-content-transform');
                $(".hamburger-menu").removeClass("animate-hamburger");
            }
            // $('.header-component .login-dropdown').css('display', 'block');
        } else {
            // $('.header-component .login-dropdown').css('display', 'none');
        }
    });

    $('.primary-nav li').click(function() {
        $('.sub-headers').removeClass('sub-headers active-state');
        $(this).addClass('sub-headers active-state');
        $(".header-indicator").toggleClass("sub-commercial");
        $('.main-tabs').css("min-width", "auto");
        setTimeout(function() {
            menuWidth();
        }, 0)
    });


    $('.nav-search, .search-icon').click(function(e) {
            searchOpen();
            e.stopPropagation();
            $('.bannerBox .banner-caption').removeClass('pd-l30')
            $('.thirdmenu').removeClass('active');
            $(".structureLineSubmenu").removeClass('active');
            $('.mob-header').removeClass('active');
            $('.hamburger-menu').removeClass('animate-hamburger');
            $('.profile-dropdown').css('display', 'none');
            $('.menu-right .floating-widget').find('input[type="checkbox"]').prop("checked", false);
            $('.nav-bar li.nav-item input[name="nav-radio"]').prop("checked", false);
            if ($('.nav-overlay-search').hasClass("is-open")) {

                $('.nav-overlay-search').slideUp();
                searchClosed();
                $('body').find('#mySearch').focus();
                navOverlaySearchHide();

                navOverlayHide();
                $("#mySearch").val('');
                $(".recent-search").css('display', 'block');
                $(".recent-search h1").html('RECENT SEARCHES');
                $(".recent-search h1").css('display', 'flex');
                $(".recent-search-content").css('display', 'flex');
                $(".trending-search").css('display', 'block');
                $(".search-function-results").css('display', 'none');
                $(".search-function-page").css('display', 'none');
                $(".hamburger-menu").removeClass("animate-hamburger");
                showBodyScroll();
                var formReset = document.getElementById('searchinput')
                formReset.value = ' ';
            } else {
                hideBodyScroll();
                if ($('.header-component .login-dropdown').css('display') == 'block') {
                    // $('.header-component .login-dropdown').css('display', 'none');
                }

                $(".nav-container").removeClass("opened");
                $(".main-tabs").removeClass("active");
                $('.main-tabs-active').addClass("active");

                navOverlaySearchShow();
                $('.nav-overlay-search').slideDown();
                $('body').find('#mySearch').focus();
                $(".nav-overlay").addClass("opened").height(($(document).height()) - ($('.header').height()));

            }
            $(".loan-content-mobile").removeClass('loan-content-transform');
            $(".loan-content-details").removeClass('loan-content-transform');

            $('.nav-overlay-search').height(($('.nav-overlay-search').height()) - ($('.header').height()));
        }

    );

    $(".close-block").on("click", function () {
        $("#mySearch").val('');
        $(".recent-search").css('display', 'block');
        $(".recent-search h1").html('RECENT SEARCHES');
        $(".recent-search h1").css('display', 'flex');
        $(".recent-search-content").css('display', 'flex');
        $(".trending-search").css('display', 'block');
        $(".search-function-results").css('display', 'none');
        $(".search-function-page").css('display', 'none');
        // $( '.nav-overlay-search' ).removeClass( 'is-open' );
        navOverlaySearchHide();
        $('.nav-overlay-search').slideUp();
        // $( ".nav-overlay" ).removeClass( "opened" );
        navOverlayHide();
        $(".loan-content-mobile").removeClass('loan-content-transform');
        $(".loan-content-details").removeClass('loan-content-transform');
        $(".hamburger-menu").removeClass("animate-hamburger");
        // $( "body" ).removeClass( "scroll-hide" );
        showBodyScroll();
        var formReset  = document.getElementById('searchinput')
        formReset.value = ' ';
    });


    $('.menu-applybtn .btn-apply').click(function() {
        $('.nav-overlay').removeClass('opened');
        if ($('.nav-overlay-search').hasClass("is-open")) {
            $('.nav-overlay-search').slideUp();
            $('.nav-overlay-search').removeClass('is-open');
            $('body').removeClass('scroll-hide');
        }
    })

    $('.vertical-menu .sub-items').click(function() {
        $(this).addClass('sub-items-active').siblings().removeClass('sub-items-active');
    });


    var navContainer = $(".nav-container");
    var navOverlay = $(".nav-overlay");

    $(".main-tabs").on("click", function() {

        var _this = $(this);
        if (navContainer.hasClass("opened")) {

            hideBodyScroll();
            $(".nav-inner-content").removeClass("active");


            if (_this.hasClass("active")) {
                //close navContainer
                navContainer.removeClass("opened")
                navOverlay.removeClass("opened");
                if ($(".tabs-section").length > 0) {
                    $(".tabs-section").css("z-index", "18");
                }
                //remove active state
                _this.removeClass("active");
                $('.main-tabs-active').addClass("active");
                // $( "body" ).removeClass( "scroll-hide" );
                showBodyScroll();
            } else {
                $(".main-tabs").removeClass("active");
                //add active state
                _this.addClass("active");
                //do the nav-item display function
                displayNavItem(_this.attr("data-value"));
            }
        } else {

            $('.main-tabs-active').removeClass("active");

            if ($('.nav-overlay-search').hasClass("is-open")) {
                $('.main-tabs-active').addClass("active");
                $('.nav-overlay-search').slideUp();
                navOverlaySearchHide();
                navOverlayHide();
                $("#mySearch").val('');
                $(".recent-search").css('display', 'block');
                $(".recent-search h1").html('RECENT SEARCHES');
                $(".recent-search h1").css('display', 'flex');
                $(".recent-search-content").css('display', 'flex');
                $(".trending-search").css('display', 'block');
                $(".search-function-results").css('display', 'none');
                $(".search-function-page").css('display', 'none');
            }
            if ($('.header-component .login-dropdown').css('display') == 'block') {
                // $('.header-component .login-dropdown').css('display', 'none');
            }
            navContainer.addClass("opened");
            navOverlay.addClass("opened");
            if ($(".tabs-section").length > 0) {
                $(".tabs-section").css("z-index", "17");
            }
            hideBodyScroll();
            navOverlay.height(($(document).height()) - ($('.header').height()));
            _this.addClass("active");
            displayNavItem(_this.attr("data-value"));
        }
    });

    var displayNavItem = function(dataVal) {
        $(".nav-inner-content").each(function() {
            if ($(this).attr("data-value") == dataVal) {
                $(this).addClass("active");
            }
        });
    };

    navOverlay.on('click', function() {
        $(".main-tabs").removeClass("active");
        navContainer.removeClass("opened");
        $('.main-tabs-active').addClass("active");
        navOverlay.removeClass("opened");
        if ($(".tabs-section").length > 0) {
            $(".tabs-section").css("z-index", "18");
        }
        showBodyScroll();

        //TODO: Close search
        navOverlaySearchHide();
        $('.nav-overlay-search').slideUp();
        $("#mySearch").val('');
        $(".recent-search").css('display', 'block');
        $(".recent-search h1").html('RECENT SEARCHES');
        $(".recent-search h1").css('display', 'flex');
        $(".recent-search-content").css('display', 'flex');
        $(".trending-search").css('display', 'block');
        $(".search-function-results").css('display', 'none');
        $(".search-function-page").css('display', 'none');
        navOverlaySearchHide();
        $('.nav-overlay-search').slideUp();
        navOverlayHide();

    });


    $('.primary-tab-mobile li').click(function() {
        $(this).addClass('active-state-mobile').siblings().removeClass('active-state-mobile');
    });


    $(".hamburger-menu").click(function() {
        this.classList.toggle("animate-hamburger");
        $('.mob-header').toggleClass('active');
        $('.nav-overlay').toggleClass('opened');
        $(".tabs-section").css("z-index", "17");
        $(".loan-content-mobile").toggleClass('loan-content-transform');
        $('.profile-dropdown').css('display', 'none');
        $('.floating-widget').find('input[type="checkbox"]').prop("checked", false);
        $('.nav-overlay-search').css('display', 'none').removeClass('is-open');

        if ($('.header-component .login-dropdown').css('display') == 'block') {
            // $('.header-component .login-dropdown').css('display', 'none');
        }
        $("body").toggleClass("scroll-hide");
        if ($('.nav-overlay-search').hasClass('is-open')) {
            $("body").addClass("scroll-hide");
        }
        $(".loan-content-details").removeClass('loan-content-transform');
        $('.mob-mainheader').find('.js-newanimation').removeClass('animation');
        setTimeout(function() {
            $('.mob-mainheader').find('.js-newanimation').addClass('animation');
        }, 400);

    });

    $(".sub-navigation-mobile").click(function() {
        //
        $(".loan-content-details").addClass('loan-content-transform');
    });



    $(".back-navigation").click(function() {
        $(".tabs-section").css("z-index", "17");
        $(".loan-content-details").removeClass('loan-content-transform');
        $('.contact-loan .contact-details').each(function() {
            $('.contact-loan .contact-details').hide();

        });
        $('.arrow-icon.accordion').each(function() {
            $('.arrow-icon.accordion').css({
                "transform": "rotate(0deg) translateY(-23px)"
            });
        });
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            navContainer.removeClass("opened")
            navOverlay.removeClass("opened");
            if ($(".tabs-section").length > 0) {
                $(".tabs-section").css("z-index", "18");
            }
            $(".main-tabs").removeClass("active");
            showBodyScroll();

        }
    });

    $(".primary-nav li[data-value]").click(function(event) {
        event.preventDefault();
        var id = $(this).attr("data-value");
        $(".primary-nav-items").hide();
        $("#" + id).show();
        $('body').removeClass('scroll-hide');
        $(".structureLineSubmenu").removeClass('active');
        $('.thirdmenu').removeClass('active');
        $('.bannerBox .banner-caption').removeClass('pd-l30')
        $('.nav-overlay').removeClass('opened');
        $('.primary-nav-items .main-tabs').removeClass('active');

    });

    var height_bluemenu = $(".thirdmenu .bluemenu").height();
    var height_new_nav = $(".thirdmenu .new-nav-containermenu").height();
    var height_top_bar = $(".header .top-bar").height();
    var height_second_bar = $(".header .second-bar").height();

    var height_total = height_bluemenu + height_new_nav + height_top_bar + height_second_bar;
    $(".js-thirdmenu").css('transform', 'translateY( -' + height_total + 'px )');
    $(".commercialMenu .main-tabs .structureLineSubmenu").css('transform', 'translateY( -' + height_total + 'px )');

    $(".primary-nav-items li[data-value]").click(function(event) {

        event.preventDefault();
        var id = $(this).attr("data-value");

        if ($("#" + id).hasClass('active')) {
            $(".thirdmenu").removeClass('active');
            $('.nav-overlay').removeClass('opened');
        } else {
            $(".thirdmenu").removeClass('active');
            $('.nav-overlay').addClass('opened');
            $("#" + id).addClass('active');
        }

        $('.js-thirdmenu .bluemenu li').removeClass('active');
        $('.js-thirdmenu .bluemenu li:first-child').addClass('active');
        $('.new-nav-containermenu').hide();
        $('.js-first-new-nav').show();

        if ($('body').hasClass('scroll-hide')) {
            $('.bannerBox .banner-caption').addClass('pd-l30')
        } else {
            $('.bannerBox .banner-caption').removeClass('pd-l30')
        }

    });

    $(".nav-overlay").click(function(event) {
        $(".thirdmenu").removeClass('active');
        $(".structureLineSubmenu").removeClass('active');
        $('.bannerBox .banner-caption').removeClass('pd-l30')
    });

    $(".bluemenu li a[data-value]").click(function(event) {
        event.preventDefault();
        var id = $(this).attr("data-value");
        $(".new-nav-containermenu").hide();
        $('.bluemenu li').removeClass("active");
        $(this).parent().addClass("active");
        $("#" + id).show();
    });

    $(".wedding-tab-menu .wedding-tab-links[data-value]").click(function(event) {
        //event.preventDefault();
        var id = $(this).attr("data-value");
        $('.wedding-tab-menu .wedding-tab-links').removeClass("wedding-links-active");
        $(this).addClass("wedding-links-active");
        $(".wedding-tab-content").hide();
        $("#" + id).show();
    });

    $(".js-bluemenu-mob li a[data-value]").click(function(event) {
        event.preventDefault();
        var id = $(this).attr("data-value");
        $(".js-mobsubmenu").removeClass('active');
        $("#" + id).addClass('active');

        if ($(window).width() < 768) {
            $('.mob-fixscroll').find('.js-newanimation').removeClass('animation');
            setTimeout(function() {
                $('.mob-fixscroll').find('.js-newanimation').addClass('animation');
            }, 500);
        }
    });

    $(".commercialMenu .main-tabs").click(function() {
        if ($(this).find('.structureLineSubmenu').hasClass('active')) {
            $(".structureLineSubmenu").removeClass('active');
            $('.nav-overlay').removeClass('opened');
        } else {
            $(".js-thirdmenu").removeClass('active');
            $(".structureLineSubmenu").removeClass('active');
            $('.nav-overlay').addClass('opened');
            $(this).find('.structureLineSubmenu').addClass('active')
        }
        $('body').removeClass('scroll-hide').find('.nav-overlay').removeClass('opened');
    });


    $(".commercialMenu .main-tabs[data-value]").click(function(event) {
        event.preventDefault();
        var id = $(this).attr("data-value");
        $(".js-thirdmenu").removeClass('active');
        $("#" + id).addClass('active')
    });


    $('.menu-carousel').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: false,
                arrows: true,
            }
        }]
    });

    $('.js-accord-col-mob .submenu-head').click(function() {
        $('.js-accord-col-more-mob .js-accord-body').slideUp();
        $('.js-accord-col-more-mob .js-submenu-head').removeClass('opened');

        if ($(this).next('.accord-body').css('display') == 'none') {
            $('.js-accord-col-mob .submenu-head').next('.accord-body').slideUp();
            $(this).next('.accord-body').slideDown();
        } else {
            $('.js-accord-col-mob .submenu-head').next('.accord-body').slideUp();
        }
    })

    $('.js-accord-col-more-mob .js-submenu-head').click(function() {
        $('.js-accord-col-mob .submenu-head').next('.accord-body').slideUp();
        if ($(this).next('.js-accord-body').css('display') == 'none') {
            $(this).addClass('opened');
            $(this).next('.js-accord-body').slideDown();
        } else {
            $(this).removeClass('opened');
            $(this).next('.js-accord-body').slideUp();
        }
    })

    $('.js-accord-col-more-mob .js-submenu-head-inner').click(function() {
        if ($(this).next('.js-accord-body').css('display') == 'none') {
            $(this).addClass('opened');
            $('.js-accord-col-more-mob .js-submenu-head-inner').next('.js-accord-body').slideUp();
            $(this).next('.js-accord-body').slideDown();
        } else {
            $(this).removeClass('opened');
            $(this).next('.js-accord-body').slideUp();
        }
    })


    $(".js-showDetail[data-value]").click(function(event) {
        event.preventDefault();
        var id = $(this).attr("data-value");
        $(".js-close-details").removeClass('active');
        $("#" + id).addClass('active');

        if ($(window).width() < 768) {
            $('.mob-fixscroll').find('.js-newanimation').removeClass('animation');
            setTimeout(function() {
                $('.mob-fixscroll').find('.js-newanimation').addClass('animation');
            }, 500);
        }
    });

    $(".js-back").click(function(event) {
        $(".js-close-details").removeClass('active');

        if ($(window).width() < 768) {
            $('.mob-mainheader').find('.js-newanimation').removeClass('animation');
            setTimeout(function() {
                $('.mob-mainheader').find('.js-newanimation').addClass('animation');
            }, 500);
        }
    });

    menuWidth();

});

function menuWidth() {
    $(".main-tabs, .nav-list").each(function() {
        var eleWidth = $(this).width();
        if (eleWidth > 100) {
            $(this).css("min-width", (eleWidth + 12.4) + "px");
        } else {
            $(this).css("min-width", (eleWidth + 6) + "px");
        }
    });
}
////Header END

/**
 * SEARCH BAR COMPONENT
 */

$(function() {

    if (($(window).width() < 992) && ($(window).width() > 767)) {
        $(".ad-banner-block").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false
        });

    } else if ($(window).width() < 768) {
        $(".ad-banner-block").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false
        });
    }

    $('#myInput').on('input', function() {
        if ($('#myInput').val().length == 0) {
            $(".btn-show-options").attr("disabled", true);
            $(".btn-show-options").css({
                "background-color": "#ccc"
            });
        } else {
            $(".btn-show-options").attr("disabled", false);
            $(".btn-show-options").css({
                "background-color": "#005899"
            });
        }
    });

    $('.btn-show-options').on('click', function() {
        $('.search-results').slideDown("slow");
        setTimeout(function() {
            $('.ad-banner-block').animate({ opacity: 1 });
        }, 300);

        var offset = $(".search-results").offset();
        $("html, body").animate({
            scrollTop: offset.top - 40
        }, "slow");
        $('.calc-emi-show-less').css({
            'display': 'flex'
        });

        setTimeout(function() {
            $(".slick-active").click();
        }, 500);


    });

    $("#myInput").on("change paste keyup", function(e) {
        var key = e.which;
        if ((key == 13) && (!($('#myInput').val() === ''))) {
            $('.search-results').slideDown("slow");
            setTimeout(function() {
                $('.ad-banner-block').animate({ opacity: 1 });
            }, 300);

            var offset = $(".search-results").offset();
            $("html, body").animate({
                scrollTop: offset.top - 40
            }, "slow");
            $('.calc-emi-show-less').css({
                'display': 'flex'
            });

            setTimeout(function() {
                $(".slick-active").click();
            }, 500);
        }
    });

    $('.calc-emi-show-less').on('click', function() {
        $('.search-results').slideUp();
        var offset = $(".search-option").offset();
        $("html, body").animate({
            scrollTop: offset.top - 40 - 20
        }, "slow");
        $('.calc-emi-show-less').css({
            'display': 'none'
        });
        $(".calc-emi-container").removeClass("visible");
    });

    $(".ad-banner-btn-calculate-emi").on('click', function() {
        $('html, body').animate({
            scrollTop: ($('.tools-calc-tab-heading').offset().top) - 40 - 20
        }, "slow");
        if (!($(".calc-emi-container").hasClass("visible"))) {
            $(".calc-emi-container").addClass("visible");
        }
    });

    $('.search-option .slider').on('change touchmove mousemove', function(e) {
        var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

        var sliderDisp = $(this).siblings().find(".tools-result-text").find(".change-value");
        sliderDisp.html($(this).val());

        $(this).css('background-image',
            '-webkit-gradient(linear, left top, right top, ' +
            'color-stop(' + val + ', #0073bb), ' +
            'color-stop(' + val + ', #d3d3d3)' +
            ')'
        );
    });

    $('.search-option .slider').each(function() {
        var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

        $(this).css('background-image',
            '-webkit-gradient(linear, left top, right top, ' +
            'color-stop(' + val + ', #0073bb), ' +
            'color-stop(' + val + ', #d3d3d3)' +
            ')'
        );
    });

    var phoneNumber;
    // Initial state of elements
    $(".search-option .sent-otp").css("display", "none");
    $(".search-option .number-verified").css("display", "none");
    $(".search-option .edit-number-text").css("display", "none");
    $(".search-option .number-verified-icon").css("display", "none");
    $(".search-option .send-otp").css("display", "none");
    $(".search-option .invalid-otp").css("display", "none");
    $("#seachBarThankYou").css('display', 'none');

    $('.search-option .first-qa-btn-light-desktop').on('click', function() {
        if ($(window).width() > 767) {
            // To open quick apply details entering screen
            $('.search-option .tools-calc-quick-apply').slideDown();
            // $('.tools-calc-quick-apply').css( "display", "block" );
            $('.search-option .close-qa-light-desktop').css("display", "block");
        } else {
            $("#searcBarQuickApply").modal('show');
            // $('.tools-calc-quick-apply').css( "display", "block" );
            $('.search-option .close-qa-light-desktop').css("display", "block");
        }
    });

});

$('.js-menu-floatingform').click(function(ele) {
    $(this).parents('.floating-widget').find('input[type="checkbox"]').prop("checked", false);
    $(this).parents('.floating-widget').find('input').val('').parents('.textbox-box').removeClass('active-textbox textboxerror');
    $(this).parents('.floating-widget').find('input').next('.error-msgs').remove();
    gtmFormAbondoned()
    var ele_target = $('.formSteps');
    $(ele.target).parents('.form-wizard').find(ele_target).addClass('hidden');
    $(ele.target).parents('.form-wizard').find(ele_target).first().removeClass('hidden');
});

$(function() {
    $('[data-app]').click(function() {
        var ele_target = $(this).data('app');
        $('body').find('#' + ele_target).toggleClass('active');;
    });
    $('[data-appclose]').click(function() {
        var ele_target = $(this).data('appclose');
        $('body').find('#' + ele_target).removeClass('active');
    });
});

$('.js-newlabelmenu input[type="radio"]').click(function() {
    $('.thirdmenu').find('.js-newanimation').removeClass('animation');
    setTimeout(function() {
        $('.thirdmenu').find('.js-newanimation').addClass('animation');
    }, 600)

});

$(window).on("load", function() {
    $('body').find('.js-newanimation').addClass('animation');
});

window.mobileCheck = function() {
    let check = false;
    (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

$('.header-component .top-inner .right-nav-menu ul li.call-desktop a').click(function() {

    if (window.mobileCheck() == false) {

        $(this).attr("href", location.origin+"/contact-us.html");
    }

});
function autocompleteSearch(inp, arr) {
    if ( inp != null){
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;

    /*execute a function when someone writes in the text field:*/
    inp.addEventListener('keyup', function (e) {
        if (e.keyCode === 13) {
            var url = "/bin/service/search"
            var data = {}
            data.q = $(e.target).val();
            window.toggleLoader(true, "#searchLoader")
            $.ajax({
                type: "POST",
                url: url,
                data: data,
                async: true,
            })
                .done(function (data) {
                    window.toggleLoader(false, "#searchLoader")
                    if (data != null && data.results != undefined) {
                        if (data.results.length != 0) {
                            var result = [];
                            var descs = [];
                            for (var key in data.results) {
                                if (data.results.hasOwnProperty(key)) {
                                    var val = data.results[key];
                                    result.push({ key: val[1], val: val[0] })
                                    descs.push(val[2])
                                }
                            }
                            $(".search-function-search-results").html("")
                            result.forEach(function (obj, index) {

                                $(".search-function-search-results").append('<div class="search-result-block">' +
                                    '<div class="search-result-heading">' +
                                    '<a href="' + obj.val + '?ref=search">' + obj.key + '</a>' +
                                    '</div>' +
                                    '<p class="search-result-body">' + ((descs[index] !== undefined) ? (descs[index]) : "") +
                                    '</p>' +
                                    '</div>')
                            })
                        }
                    }
                })
        }
    })
    function listener(e) {

        window.time = 1000,
        delta = 1000,

       window.tid = setInterval(function() {
           window.time -= delta;
           console.log(window.time);
           if ( time <= 0 ) {
               clearInterval(window.tid);
            populateSuggestions(e);
           }
       }, delta);

   };

     inp.addEventListener("input", function (e) {
   clearInterval(window.tid);
   listener(e);

    });

    function populateSuggestions(e)
    {
        var url = "/bin/service/search"
        var data = {}
        data.q = $(e.target).val();
        window.toggleLoader(true, "#searchLoader")
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            async: true,
        })
            .done(function (data) {
                window.toggleLoader(false, "#searchLoader")

                if (data != null && data.results != undefined) {
                    if (data.results.length != 0) {
                        var result = [];
                        var desc = [];
                        for (var key in data.results) {
                            if (data.results.hasOwnProperty(key)) {
                                var val = data.results[key];
                                result.push({ key: val[1], val: val[0] })
                                desc.push(val[2])
                            }
                        }
                        arr = result
                        var a, b, i, val = e.target.value;
                        /*close any already open lists of autocompleted values*/
                        closeAllLists();
                        if (!val) {
                            return false;
                        }
                        currentFocus = -1;
                        /*create a DIV element that will contain the items (values):*/
                        a = document.createElement("DIV");

                        a.setAttribute("id", e.target.id + "autocomplete-list");
                        if ($('.search-function-results').css('display') == ('block')) {
                            // $( '.autocomplete-items' ).addClass("stick-to-input");
                            a.setAttribute("class", "autocomplete-items stick-to-input");

                        } else {
                            // $( '.autocomplete-items' ).removeClass("stick-to-input");
                            a.setAttribute("class", "autocomplete-items");
                        }
                        /*append the DIV element as a child of the autocomplete container:*/
                        e.target.parentNode.appendChild(a);
                        /*for each item in the array...*/
                        for (i = 0; i < arr.length; i++) {
                            /*check if the item starts with the same letters as the text field value:*/
                            if (arr[i].key.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                                /*create a DIV element for each matching element:*/
                                div = document.createElement('div');

                                b = document.createElement('a');



                                /*make the matching letters bold:*/
                                b.innerHTML = "<strong style=\"background-color:#d7df23\">" + arr[i].key.substr(0, val.length) + "</strong>";
                                b.innerHTML += arr[i].key.substr(val.length);
                                /*insert a input field that will hold the current array item's value:*/
                                b.innerHTML += "<input type='hidden' value='" + arr[i].key + "'>";
                                /*execute a function when someone clicks on the item value (DIV element):*/

                                  b.setAttribute('href',arr[i].val);
                                div.appendChild(b)
                                a.appendChild(div);
                                value = $(e.target).siblings("#mySearchautocomplete-list").find("div").last().find("input").val();
                                searchAnalytics({'searchTearm':value},"global_search")
                                // var url = "/bin/service/search"
                                // var data = {}
                                // data.q = value;
                                // $.ajax({
                                //     type: "POST",
                                //     url: url,
                                //     data: data,
                                //     async: false,
                                // }).done(function (data){



                                // }).catch(function(){
                                //     console.log('AJAX Failed here');
                                // })

                            }
                        }

                    }
                }
            });
    }
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}
}

/*An array containing all the country names in the world:*/
var suggestions = ["Personal Loan for a wedding", "Personal Loan to travel abroad", "Personal Loan for my childâ€™s education"];

/*initiate the autocomplete function on the "mySearch" element, and pass along the suggestions array as possible autocomplete values:*/
$(function(){autocompleteSearch(document.getElementById("mySearch"), suggestions);})

function loadResult() {
    $(".autocomplete-items").css('display', 'none');
    $(".recent-search h1").css('display', 'none');
    $(".recent-search-content").css('display', 'none');
    $(".trending-search").css('display', 'none');
    $(".search-function-results").css('display', 'block');
    $(".search-function-page").css('display', 'flex');
}


$('.approved-Details-Form #proceedToOTP').on('click', function () {
    otpMobile = $(".approved-Details-Form .get-number").val();
    generateOTPHeader(otpMobile);
    floatGtmsendotp(this)
})


function procedFormToOTP(formFields) {

    generateOTPHeader(formFields.mobileNumber);
}

$("#stepsTwo .approved-Form .btn-resendotp").click(function () {

    otpMobile = $("#stepsTwo .approved-Form .show-mobile-number").val();
    generateOTPHeader(otpMobile);
});

$("#stepsTwo .js-proceed-with-otp").click(function (e) {
    e.preventDefault();
    var valueOtp = verifyOTPHeader();
    if (valueOtp) {
        validOffersHeader();
    }
    else {
        $("#stepsTwo").attr("style", "display: none !important");

        $(".approved-incorrectOtp").attr("style", "display: block !important");

    }

})

$("#stepsThree .btn-primary.js-steps").click(function () {
    otpMobile = $("#stepsTwo .approved-Form .show-mobile-number").val();
    generateOTPHeader(otpMobile);
    $(".approved-incorrectOtp").attr("style", "display: none !important");

    $("#stepsTwo").attr("style", "display: block ");
})

$("#packageForm .icon-close").click(function () {

    $(".approved-incorrectOtp").attr("style", "display: none !important");
    $("#stepsTwo").attr("style", "display: none !important");

});

$(".search-func-close-icon-mobile").on('click', function () {
    $("#mySearch").val('');
    $(".recent-search h1").html('RECENT SEARCHES');
    $(".recent-search-content").css('display', 'flex');
    $(".trending-search").css('display', 'block');
    $(".search-func-close-icon-mobile").css('display', 'none');
    $(".hamburger-menu").removeClass("animate-hamburger");
    showBodyScroll();
});

$(".search-func-close").on("click", function() {
    $("#mySearch").val('');
    $(".recent-search").css('display', 'block');
    $(".recent-search h1").html('RECENT SEARCHES');
    $(".recent-search h1").css('display', 'flex');
    $(".recent-search-content").css('display', 'flex');
    $(".trending-search").css('display', 'block');
    $(".search-function-results").css('display', 'none');
    $(".search-function-page").css('display', 'none');
    // $( '.nav-overlay-search' ).removeClass( 'is-open' );
    navOverlaySearchHide();
    $('.nav-overlay-search').slideUp();
    // $( ".nav-overlay" ).removeClass( "opened" );
    navOverlayHide();
    $(".hamburger-menu").removeClass("animate-hamburger");
    showBodyScroll();
});

$(".search-func-close-icon").on('click', function () {
    $("#mySearch").val('');
    $(".recent-search").css('display', 'block');
    $(".recent-search h1").html('RECENT SEARCHES');
    $(".recent-search h1").css('display', 'flex');
    $(".recent-search-content").css('display', 'flex');
    $(".trending-search").css('display', 'block');
    $(".search-function-results").css('display', 'none');
    $(".search-function-page").css('display', 'none');
    // $( '.nav-overlay-search' ).removeClass( 'is-open' );
    navOverlaySearchHide();
    $('.nav-overlay-search').slideUp();
    // $( ".nav-overlay" ).removeClass( "opened" );
    navOverlayHide();
    $(".hamburger-menu").removeClass("animate-hamburger");
    showBodyScroll();
});
/*14-4-2021*/
$(document).ready(function(){
	    if($('.site-bell-dropdown').length > 0) {
        new SimpleBar($('.site-bell-dropdown')[0]);
    }
      $(".slider-menu1").slick({
              autoplay: false,
              slidesToShow: 5,
              slidesToScroll: 1,
              arrows: true,
              dots: false,
              variableWidth: true,
              infinite: false,
              responsive: [
                  {
                      breakpoint: 1280,
                      settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                      }
                    },
                  {
                    breakpoint: 1199,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 1,
                    }
                  },
                  {
                    breakpoint: 991,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1
                    }
                  }
                ]
          })
})
function generateOTPHeader(phoneNumber) {
    var url = globalConfig.apiCallRetailConfig.generateOTPCall.contextPath + "." + globalConfig.apiCallRetailConfig.generateOTPCall.selector + ".json";
    var data = {};
    data.otpMobile = phoneNumber;
    $('.page-loader').removeClass('hidden');
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        async: true,
    })
        .done(function (data) {
            console.log("Success")
            $('.page-loader').addClass('hidden');
            response = JSON.parse(JSON.stringify(data));
            console.log(response)
            response = (typeof (data) !== "object") ? JSON.parse(data) : (data);
            var analyticsData = {};

            analyticsData.fullName = $('.approved-Details-Form [data-type="name"]').val();
            analyticsData.mobileNo = $('.approved-Details-Form [data-type="mobile"]').val();
            analyticsData.ctaButtonSource = analyticsPageName + ":preApprovedOffers"
            preApprovedOffersAnalytics(analyticsData, "pre_approved_offers_start")
            otpRefNum = response.otpRefNo;

        }).fail(function (error) {
            console.log("Failure")
            errorHandlingAnalytics("api", error.responseText)
        });;

}

function verifyOTPHeader() {
    //window.toggleLoader(true, "#quickLoader");
    $('.page-loader').removeClass('hidden');
    var responseStatus;
    var url = globalConfig.apiCallRetailConfig.verifyOTPCall.contextPath + "." + globalConfig.apiCallRetailConfig.verifyOTPCall.selector + ".json";
    var data = {};
    data.otpMobile = $("#stepsTwo .approved-Form .show-mobile-number").val();
    data.otpRefNumber = otpRefNum;
    var otpValue = [];
    $("#stepsTwo #enterOtpBox .input-textbox").each(function (index, num) { otpValue.push($(num).val()) })
    otpValue = otpValue.join("");
    data.otpValue = otpValue;
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        async: false,
    })
        .done(function (data) {
            console.log(data);
            //  window.toggleLoader(false, "#quickLoader");
            $('.page-loader').addClass('hidden');
            var response = (typeof (data) !== "object") ? JSON.parse(data) : (data);
            responseStatus = response.retStatus;
            analyticsData = {};
            if (response.retStatus === "SUCCESS") {
            	
            	 analyticsData.ctaButtonSource = analyticsPageName + ":preApprovedOffers"
                 preApprovedOffersAnalytics(analyticsData, "pre_approved_offers_otp_verified")
                
            }
        })
        .fail(function (error) {
            errorHandlingAnalytics("api", error.responseText)
        });

    if (responseStatus == 'SUCCESS') {

        return true;
    } else {
        return false;
    }
}

// function formdata(id) {

//     var str = $($(id)[0]).serialize();
//     var fieldsArray = str.split("&");
//     console.log(fieldsArray);
//     var formFields = {}; //new FormData();
//     for (var fieldIndex = 0; fieldIndex < fieldsArray.length; fieldIndex++) {
//         var field = fieldsArray[fieldIndex].split("=");
//         var fieldName = field[0];
//         var fieldValue = decodeURIComponent(field[1]);
//         fieldValue = fieldValue.replace(/\,/g, "");
//         fieldValue = fieldValue.replace("â‚¹","");
//         formFields[fieldName] = fieldValue;
//         if (fieldName == "productCode" && formFields[fieldName] == "LAP") {
//             formFields[fieldName] = "HE";
//         }
//     }
//     console.log(formFields);
//     return formFields
// }

// function formdataOffer() {


// //   // var str = $("#offerForm input").serialize();
// // var str = $(".approved-Details-Form input").serialize();
// //     var fieldsArray = str.split("&");
// //     console.log(fieldsArray);
// //     var formFields = {}; //new FormData();
// //     for (var fieldIndex = 0; fieldIndex < fieldsArray.length; fieldIndex++) {
// //         var field = fieldsArray[fieldIndex].split("=");
// //         var fieldName = field[0];
// //         var fieldValue = decodeURIComponent(field[1]);
// //         fieldValue = fieldValue.replace(/\,/g, "")
// //         formFields[fieldName] = fieldValue;
// //         if (fieldName === "firstName") {
// //             sessionStorage.setItem("firstName", formFields[fieldName])
// //         }
// //     }

//     console.log(formFields);
//     return formFields
// }

function validOffersHeader() {
    //window.toggleLoader(true, "#quickLoader");
    $('.page-loader').removeClass('hidden');
    var url = globalConfig.apiCallRetailConfig.preApprovedOffersCall.contextPath + "." + globalConfig.apiCallRetailConfig.preApprovedOffersCall.selector + ".json";
    //var data = $('.approved-Form .show-mobile-number').val();

    var data = {};
    data.mobileNumber = $('.approved-Form .show-mobile-number').val();
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        async: true,
    })
        .done(function (data) {
            $('.page-loader').addClass('hidden');
            var response = (typeof (data) !== "object") ? JSON.parse(data) : (data);
            var mobileNumber = $('.approved-Form .show-mobile-number').val();
            analyticsData = {};
            analyticsData.response = response;
            analyticsData.ctaButtonSource = analyticsPageName + ":preApprovedOffers";
            preApprovedOffersAnalytics(analyticsData, "pre_approved_offers_submit");
            if (response.totalSize != 0) {

                function activeStatusCheckPersonalLoan(plData) {
                    return new Promise(function (resolve, reject) {
                        apiCall('/content/tata-capital/retailapi.PreApprovedOfferPLBLServlet.json', 'POST', plData).then(function (response) {
                            var plData = JSON.parse(response)
                            resolve(plData);
                        }).catch(function (error) {
                            reject(error);
                        })
                    });
                }

                function activeStatusCheckBusinessLoan(blData) {
                    return new Promise(function (resolve, reject) {
                        apiCall('/content/tata-capital/retailapi.PreApprovedOfferPLBLServlet.json', 'POST', blData).then(function (response) {
                            var blData = JSON.parse(response)
                            resolve(blData);
                        }).catch(function (error) {
                            reject(error);
                        })
                    });
                }

                function apiCall(url, method, data) {
                    return new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.onreadystatechange = function () {
                            if (this.readyState == 4) {
                                if (this.status == 200) {
                                    resolve(this.response);
                                } else {
                                    reject(this.response);
                                }
                            }
                        }
                        xhr.open(method, url);
                        xhr.send(data);
                    })
                }
                var activeStatusForPersonalLoan = false;
                var activeStatusForBusinessLoan = false;
                var personalLoanFilter = response.records.filter(function (value) {
                    return value.Product__r.Name.replace(" ", "").toLowerCase() === 'personalloan';
                });

                var businessLoanFilter = response.records.filter(function (value) {
                    return value.Product__r.Name.replace(" ", "").toLowerCase() === 'businessloan';
                });
                if (personalLoanFilter.length > 0) {

                    var formData = new FormData();
                    formData.append('productName', 'personalloan')
                    formData.append('mobileNumber', mobileNumber)
                    activeStatusCheckPersonalLoan(formData).then(function (response) {
                        activeStatusForPersonalLoan = response.plOnlineJourneyExistingStatus;
                        if (businessLoanFilter.length > 0) {
                            var formDataBl = new FormData();
                            formDataBl.append('productName', 'businessloan')
                            formDataBl.append('mobileNumber', mobileNumber)
                            activeStatusCheckBusinessLoan(formDataBl).then(function (response) {
                                activeStatusForBusinessLoan = response.existingCustomer;
                                renderLoanResults(activeStatusForPersonalLoan, activeStatusForBusinessLoan)
                            })
                        } else {
                            renderLoanResults(activeStatusForPersonalLoan, activeStatusForBusinessLoan)
                        }
                    })


                }
                else if (businessLoanFilter.length > 0) {
                    var formDataBl = new FormData();
                    formDataBl.append('productName', 'businessloan')
                    formDataBl.append('mobileNumber', mobileNumber)
                    activeStatusCheckBusinessLoan(formDataBl).then(function (response) {
                        activeStatusForBusinessLoan = response.existingCustomer;
                        renderLoanResults(activeStatusForPersonalLoan, activeStatusForBusinessLoan)
                    })

                } else {
                    renderLoanResults(activeStatusForPersonalLoan, activeStatusForBusinessLoan)
                }

                function renderLoanResults(activeStatusForPersonalLoan, activeStatusForBusinessLoan) {
                var count = 0
                for (var i = 0; i < response.totalSize; i++) {
                    var productName = response.records[i].Product__r.Name;
                     var offerType = response.records[i].OfferType__c;
                    var lowerCaseProductName = productName.replace(" ", "").toLowerCase();

                    if (lowerCaseProductName === "personalloan") {
                        if (activeStatusForPersonalLoan === 'true') {
                         count=count ;
                        }else{
                            if (offerType != 'PreQualified') {
                                count++;
                            }
                        }
                    }

                    if (lowerCaseProductName === "businessloan") {
                        if (activeStatusForBusinessLoan === 'true') {
                            count=count;
                        }else{
                            if (offerType != 'PreQualified') {
                                count++;
                            }
                        }
                    }

                    if ((lowerCaseProductName === 'homeequity') || (lowerCaseProductName === 'consumerdurables') || (lowerCaseProductName === 'autoloan') || (lowerCaseProductName === 'twowheeler')) {
                        if (offerType != 'PreQualified') {
                            count++;
                        }
                    }
                }

                if (count != 0) {
                    $('#offerForm').attr('data-value', 'true');

                    if (personalLoanFilter.length > 0 && activeStatusForPersonalLoan == true) {
                        var indexPersonalLoan = response.records.map(function(value, index){return value.Product__r.Name === "PERSONAL LOAN" ? index : ""}).filter(function(value){return value !== ""})
                        response.records.splice(indexPersonalLoan, indexPersonalLoan.length)
                        for(i=0;i<indexPersonalLoan.length;i++){
                                                        count--;
                                                    }
                    }
                    if (businessLoanFilter.length > 0 && activeStatusForBusinessLoan == true) {
                        var indexBusinessLoan = response.records.map(function(value, index){return value.Product__r.Name === "BUSINESS LOAN" ? index : ""}).filter(function(value){return value !== ""})
                        response.records.splice(indexBusinessLoan, indexBusinessLoan.length)
                        for(i=0;i<indexBusinessLoan.length;i++){
                                                        count--;
                                                     }
                    }
                    if(count!=0)
                    {
                    sessionStorage.setItem("offers", (typeof(data) === "object") ? JSON.stringify(data) : (data));
                    sessionStorage.setItem("customerMobile",mobileNumber);
                    Array.prototype.slice.call(document.querySelectorAll('input[data-is-dirty]')).forEach(function (input) { input.value = null })
                    window.location.href = "/pre-approved-offers.html";
                    }
                    else{
                    window.location.href = "/no-offer.html"
                    }

                } else {
                    $('.approved-Details-Form').attr('data-value', 'true');
                    Array.prototype.slice.call(document.querySelectorAll('input[data-is-dirty]')).forEach(function (input) { input.value = null })
                    window.location.href = "/no-offer.html"
                }
                }
            } else if (response.totalSize == 0) {
                $('.approved-Details-Form').attr('data-value', 'true');
                Array.prototype.slice.call(document.querySelectorAll('input[data-is-dirty]')).forEach(function (input) { input.value = null })
                window.location.href = "/no-offer.html"
            }
        })
        .fail(function (error) {
            errorHandlingAnalytics("api", error.responseText)
        });
}
//--------------submit-otp-button--------------//
function floatGtmsendotp(that) {
    var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var siteName = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    var label = $(that).text().toLowerCase().trim();
    var navHeader = $(".top-bar .sub-headers.active-state").text().toLowerCase();
    dataLayer.push({
        'event': 'event allpages',
        'category': 'pre-approved offers',
        'action': 'form |  We have pre approved offers for you',
        'label': label,
        'site section': siteName + ' | ' + pageName,
    });
}
//--------------send-otp-button-end-------------//

//<------------1.Event start filling form-(Floating Widget)------->
$(document).ready(function () {
    var count = 0;
    var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var siteName = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    $('.approved-Details-Form [data-type="name"]').on("focusout", function () {
        //debugger;
        var navHeader = $(".top-bar .sub-headers.active-state").text().toLowerCase();
        if (count == 0) {
            dataLayer.push({
                'category': 'floater',
                'action': 'form | We have pre approved offers for you',
                'label': 'start',
                'event': 'event allpages',
                'site section': siteName + ' | ' + pageName,

            });
        }
        $(this).off(event);
        count++;
    });
    //<--------------1.END----------------------------->
})
//<------------3.Event start Error Field Pre-approved Offer Form -------->
function gtmErrorFieldOfferForm(that) {
    var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var siteName = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    var scope = $(that).parents(".approved-Details-Form");
    var inpField = [];
    Array.prototype.slice.call($(scope)[0].querySelectorAll(".error-msgs")).forEach(function (el) {
        if ($(el).css("display") === "block" && $(el).parents('.approved-Details-Form').css("display") == 'block') {
            if ($(el).siblings("input").length) {
                inpField.push($(el).parent().siblings().text().toLowerCase().trim());
            }
        }
    });
    if (inpField.length !== 0) {
        dataLayer.push({
            'event': 'event allpages',
            'category': 'floater',
            'action': 'form | We have pre approved offers for you',
            'label': 'form error | ' + inpField.join(" | "),
            'site section': siteName + ' | ' + pageName,

        });
    }

}
//<--------------3.END----------------------------->
/****Form close****/
function gtmFormAbondoned(){
    var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var siteName = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    var navHeader = $(".top-bar .sub-headers.active-state").text().toLowerCase();
    dataLayer.push({
        'event': 'event allpages',
        'category': 'floater',
        'action': 'form | We have pre approved offers for you',
        'label': 'abandonment',
        'site section': siteName + ' | ' + pageName,

    });

}

//<------------4.Event start abandonment Pre-Approved Offer Form-------->

$(document).ready(function () {
   var scope =  $('#proceedToOTP').parents('.approved-Details-Form');
    var pageName = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var siteName = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    Array.prototype.slice.call($(scope)[0].querySelectorAll("[data-is-dirty]")).forEach(function (el) {
        //console.log("registering");
        var type = $(el).attr('data-is-dirty');
        if (type === "input") {
            $(el).on("input", function () {
                console.log("input registered");
                window.onbeforeunload = function () {
                    if($('.approved-Details-Form').is("[data-value]")){

                    }else{
                    console.log("for input : onbeforeunload");
                    dataLayer.push({
                        'category': 'floater',
                        'action': 'form | We have pre approved offers for you',
                        'label': 'abandonment',
                        'event': 'event allpages',
                        'site section': siteName + ' | ' + pageName,

                    });
                }
                }
            });
        }
    });
});

//<------------4.END-------->






$('.google-dropdown [data-dropdown="dropdown"]').click(function() {
    if ($(this).siblings('.custom-dropdown-container').hasClass('hidden')) {
        $(this).siblings('.custom-dropdown-container').removeClass('hidden');
    }
});

$(document).click(function(e) {
    var clicked = $(e.target);
    var opened = $(".dropdown").hasClass("show");
    if (opened === true && !clicked.hasAttr('data-dropdown')) {
        $(".dropdown").removeClass('show');
    }
    if ($(window).width() < 768) {
        $('body').removeClass('modal-open');
    }
});

$('[data-dropdownclose="close"]').click(function() {
    $(this).parents('.dropdown').removeClass('show');
});

var lastScrollTop = 0;
$(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $('[data-dropdownclose="close"]').parents('.dropdown').removeClass('show');
        $('.custom-dropdown-container').parent('.nav-search-login').removeClass('show');
        $('.login_dropdown').removeClass('show');
    } else {
        $('[data-dropdownclose="close"]').parents('.dropdown').removeClass('show');
        $('.custom-dropdown-container').parent('.nav-search-login').removeClass('show');
        $('.login_dropdown').removeClass('show');
    }
    lastScrollTop = st;
});


$(document).ready(function(){
 browserDetector();
    document.getElementById('js-google-signin').addEventListener('click', function() {
      _satellite.track('google-sigin-click')
        gapi.load('auth2', function() {
            let obj = {
                //client_id: '1052994805000-u5vabr2ibtfgu726ova8cjsnb5vgqamu.apps.googleusercontent.com'
                client_id: gcIDUrl
            }
            var auth = gapi.auth2.init(obj);
            auth.signIn().then(function(res){
                console.log(res)
                var queryParams = getQueryParamsFn();
                var reqObj = {
                    "header": {
                        "authToken": ""
                    },
                    "body": {
                        "emailId": res.getBasicProfile().getEmail(),
                        "firstName": res.getBasicProfile().getGivenName(),
                        "lastName": res.getBasicProfile().getFamilyName(),
                        "profilePic": res.getBasicProfile().getImageUrl(),
                        "source": queryParams ? queryParams.source : 'google'
                    }
                }
                storeDataApiCall(reqObj);
            }).catch(function(err){
                console.log(err)
                _satellite.track('google-sigin-failure');
            })
        });
    })
    var customerData = localStorage.getItem('cData') ? JSON.parse(localStorage.getItem('cData')) : '';
    // var g_Skipped = localStorage.getItem('g_Skipped');
    // if (g_Skipped == null || g_Skipped == undefined) {
    //     initGoogle(true);
    // }else{
    //     //onload_openmodal();
    // }
    var user_login = domUtils.getCookie('userLoggedIn');
    if (user_login == "" || user_login == undefined) {

        document.getElementById('js-google-signin').addEventListener('click', function() {
          _satellite.track('google-sigin-click')
            gapi.load('auth2', function() {
                let obj = {
                    //client_id: '1052994805000-u5vabr2ibtfgu726ova8cjsnb5vgqamu.apps.googleusercontent.com'
                    client_id: gcIDUrl
                }
                var auth = gapi.auth2.init(obj);
                auth.signIn().then(function(res) {
                    console.log(res)
                    var queryParams = getQueryParamsFn();
                    var reqObj = {
                        "header": {
                            "authToken": ""
                        },
                        "body": {
                            "emailId": res.getBasicProfile().getEmail(),
                            "firstName": res.getBasicProfile().getGivenName(),
                            "lastName": res.getBasicProfile().getFamilyName(),
                            "profilePic": res.getBasicProfile().getImageUrl(),
                            "source": queryParams ? queryParams.source : 'google'
                        }
                    }
                    storeDataApiCall(reqObj);
                }).catch(function(err) {
                    console.log(err)
                    _satellite.track('google-sigin-failure');
                })
            });
        })

    } else {
        if (typeof(onload_openmodal) === "function") {
            onload_openmodal();
        }
        var customerData = localStorage.getItem('cData') ? JSON.parse(localStorage.getItem('cData')) : '';
        if (customerData != '') {
            $('.header .floating-widget').find('.specialoffer-after-signin').removeClass('hidden');
            $('.header .floating-widget').find('.specialoffer-after-signin .btn-floating').addClass('js-specialbox animation');
            $('.header .floating-widget').find('.specialoffer-before-signin').addClass('hidden');
            $('#google-signout').find('.google-profile p').text(customerData.body.firstName + ' ' + customerData.body.lastName);
            $('#google-signout').find('.google-profile .email').text(customerData.body.emailId);
            // $('.js-login-status').find('img').attr('src', parseObj.picture);
            $('#google-signout #logoName').text(customerData.body.firstName[0]);
            $('.google-dropdown').find('img').attr('src', customerData.body.profilePic);
            $('.google-dropdown').find('img').attr('class', 'imag-border');
            $('.js-signin').parents('.dropdown').find('#google-signin').addClass('hidden');
            $('.js-signin').parents('.dropdown').find('#google-signout').removeClass('hidden');
            //$('.js-signin').parents('.dropdown').find('.js-login-status').addClass('user_login');
            $('body').find('#js-home-checknow').text('View Offers');
            digitalData.page.isGoogleLogin;
            digitalData.page.isGoogleLogin="true";
            _satellite.track('google-sigin-success',{email: customerData.body.emailId});
        }

    }
  if($('#google-signout').find('.google-profile .email').text() === ''){
    digitalData.page.isGoogleLogin;
    digitalData.page.isGoogleLogin="false";
  }

});


function initGoogle(flag) {
    console.log('init google called');
    google.accounts.id.initialize({
        //client_id: '1052994805000-u5vabr2ibtfgu726ova8cjsnb5vgqamu.apps.googleusercontent.com'
        client_id: gcIDUrl,
        callback: handleCredentialResponse
    });

    google.accounts.id.prompt(function(notification) {
        if (notification.isNotDisplayed()) {
                $('body').removeClass('modal-open');
                $('body').find('#google-notification').removeClass('show');
                $('.notification-backdrop').remove();
                    // try next provider if OneTap is not displayed or skipped
            }else{
                onload_googlePopup();
             }

        if (notification.isSkippedMoment()) {
            $('body').removeClass('modal-open');
            $('body').find('#google-notification').removeClass('show');
            $('.notification-backdrop').remove();
            localStorage.setItem('g_Skipped', 'true');
            domUtils.deleteCookie('g_state');
            setTimeout(function() {
                if (typeof(onload_openmodal) === "function") {
                    onload_openmodal();

                }
            }, 10000);


            //initGoogle(true);
        }
    });
}

function handleCredentialResponse(response, data) {
    console.log("Response: ", response, " Data : ", parseJwt(response.credential));
    var parseObj = parseJwt(response.credential);
    var queryParams = getQueryParamsFn();
    var reqObj = {
        "header": {
            "authToken": ""
        },
        "body": {
            "emailId": parseObj.email,
            "firstName": parseObj.given_name,
            "lastName": parseObj.family_name,
            "profilePic": parseObj.picture,
            "source": queryParams ? queryParams.source : 'google'
        }
    }
    storeDataApiCall(reqObj);
}

function storeDataApiCall(reqObj) {
    var apiURL = "/content/tata-capital/retailapi.shaftapi";
    var formData = new FormData();
    var visitorId = _satellite.getVisitorId().getMarketingCloudVisitorID();
    reqObj.body.visitorId = visitorId;
    formData.append('data', JSON.stringify(reqObj));
    var apiCall = apiCallFn(apiURL, formData, 'POST');
    apiCall.then(function(res) {
        var response = JSON.parse(res);
        if (response.header.status == 'SUCCESS') {
            domUtils.setCookie('perpetualId', response.body.perpetualId, 14400000);
            domUtils.setCookie('userLoggedIn', 'true', 14400000);
            localStorage.setItem('cData', JSON.stringify(reqObj));
            $('body').removeClass('modal-open');
            $('body').find('#google-notification').removeClass('show');
            $('.notification-backdrop').remove();
            $('#google-signout').find('.google-profile p').css('display', 'block');
            $('#google-signout').find('.google-profile .email').css('display', 'block');
            $('#google-signout #logoName').css('display', 'flex');

            $('#google-signout').find('.google-profile p').text(reqObj.body.firstName + ' ' + reqObj.body.lastName);
            $('#google-signout').find('.google-profile .email').text(reqObj.body.emailId);
            // $('.js-login-status').find('img').attr('src', parseObj.picture);
            $('#google-signout #logoName').text(reqObj.body.firstName[0]);
            $('.google-dropdown').find('img').attr('src', reqObj.body.profilePic);
            $('.google-dropdown').find('img').attr('class', 'imag-border');

            $('.header .floating-widget').find('.specialoffer-after-signin').removeClass('hidden');
            $('.header .floating-widget').find('.specialoffer-after-signin .btn-floating').addClass('js-specialbox animation');
            $('.header .floating-widget').find('.specialoffer-before-signin').addClass('hidden');
            digitalData.page.isGoogleLogin;
            digitalData.page.isGoogleLogin="true";
            _satellite.track('google-sigin-success',{email: reqObj.body.emailId});
            setTimeout(function() {
                if (typeof(onload_openmodal) === "function") {
                    onload_openmodal();
                }
            }, 10000);
        }
    });
}

function getQueryParamsFn() {
    var currentUrl = location.href;
    var queryStr = currentUrl.split('?');
    var queryStrArr = queryStr[1] ?  queryStr[1].split('&') : "";
    if(queryStrArr){
        var queryParamsObj = {};
        queryStrArr.forEach(function(queryParams) {
            var splitQueryParams = queryParams.split('=');
            queryParamsObj[splitQueryParams[0]] = splitQueryParams[1];
        });
        return queryParamsObj;
    }else{
        return '';
    }
}


function apiCallFn(url, data, method) {
    return new Promise(function(resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(this.responseText);

                    $('.js-signin').parents('.dropdown').find('#google-signin').addClass('hidden');
                    $('.js-signin').parents('.dropdown').find('#google-signout').removeClass('hidden');
                    //$('.js-signin').parents('.dropdown').find('.js-login-status').addClass('user_login');
                    $('body').find('#js-home-checknow').text('View Offers');
                    localStorage.setItem('g_Skipped', 'true');

                } else {
                    reject(this.responseText);
                    _satellite.track('google-sigin-failure');
                }
            }
        };
        xhttp.open(method, url, true);
        xhttp.send(data);
    })
}

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

function onload_googlePopup() {
    var url = window.location.href;
    if ($('#google-notification').length > 0) {

        $('body').append('<div class="notification-backdrop"></div>');
        $('body').addClass('modal-open');
        $('#google-notification').addClass('show');
    }

    $('.js-notificationclose').click(function(event) {

        $('body').removeClass('modal-open');
        $('body').find('#google-notification').removeClass('show');
        $('.notification-backdrop').remove();
    });

}


//delete cookie
document.getElementById('js-google-signout').addEventListener('click', function() {
    var persistanceId = domUtils.getCookie('userLoggedIn');
    var perpetualId = domUtils.getCookie('perpetualId');
    domUtils.deleteCookie(persistanceId);
    domUtils.deleteCookie(perpetualId);
    localStorage.removeItem('cData');
    $('#google-signout').find('.google-profile p').css('display', 'none');
    $('#google-signout').find('.google-profile .email').css('display', 'none');
    $('#google-signout #logoName').css('display', 'none');
    $('.js-signin').parents('.dropdown').find('#google-signin').removeClass('hidden');
    $('.js-signin').parents('.dropdown').find('#google-signout').addClass('hidden');
    $('.js-signin').parents('.dropdown').find('.js-login-status').removeClass('user_login');
    $('body').find('#js-home-checknow').text('View Offers');

    $('.google-heading').addClass('translate-top');
    $('.google-body .img-block').addClass('translate-scale');
    $('.google-body .google-checked').addClass('fade_in');
    $('.google-body .google-offer-loader').addClass('fade_in').removeClass('hidden');
    $('.google-sorry, #google-form, .google-offer-found').addClass('hidden');
    $('.gift-box').css('opacity', '1').removeClass('gift-box');
    $('.img-block').append('<img alt="" src="/content/dam/tata-capital/other-and-home-page-banner/google-offfer-popup/gift-box.png" class="animated-gift-box">');
    setTimeout(function() {
        _satellite.track('google-sigin-out-click');
     }, 500);
    location.reload()
});

function browserDetector() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        //console.lod('Opera');
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        //console.lod('Chrome');
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        //console.lod('Safari');
        $('.google-dropdown').css('display','none')
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        //console.lod('Firefox');
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        //console.lod('IE');
    } else {
        //console.lod('unknown');
    }
}

$('[data-dropdown="dropdown"]').click(function (e) {
    if($(this).parents('.custom-dropdown').hasClass('google-dropdown')){
        _satellite.track('google-icon-click');
    }
});
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

/*
== malihu jquery custom scrollbar plugin == 
Version: 3.1.5 
Plugin URI: http://manos.malihu.gr/jquery-custom-content-scroller 
Author: malihu
Author URI: http://manos.malihu.gr
License: MIT License (MIT)
*/

/*
Copyright Manos Malihutsakis (email: manos@malihu.gr)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
The code below is fairly long, fully commented and should be normally used in development. 
For production, use either the minified jquery.mCustomScrollbar.min.js script or 
the production-ready jquery.mCustomScrollbar.concat.min.js which contains the plugin 
and dependencies (minified). 
*/

(function(factory){
	if(typeof define==="function" && define.amd){
		define(["jquery"],factory);
	}else if(typeof module!=="undefined" && module.exports){
		module.exports=factory;
	}else{
		factory(jQuery,window,document);
	}
}(function($){
(function(init){
	var _rjs=typeof define==="function" && define.amd, /* RequireJS */
		_njs=typeof module !== "undefined" && module.exports, /* NodeJS */
		_dlp=("https:"==document.location.protocol) ? "https:" : "http:", /* location protocol */
		_url="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
	if(!_rjs){
		if(_njs){
			require("jquery-mousewheel")($);
		}else{
			/* load jquery-mousewheel plugin (via CDN) if it's not present or not loaded via RequireJS 
			(works when mCustomScrollbar fn is called on window load) */
			$.event.special.mousewheel || $("head").append(decodeURI("%3Cscript src="+_dlp+"//"+_url+"%3E%3C/script%3E"));
		}
	}
	init();
}(function(){
	
	/* 
	----------------------------------------
	PLUGIN NAMESPACE, PREFIX, DEFAULT SELECTOR(S) 
	----------------------------------------
	*/
	
	var pluginNS="mCustomScrollbar",
		pluginPfx="mCS",
		defaultSelector=".mCustomScrollbar",
	
	
		
	
	
	/* 
	----------------------------------------
	DEFAULT OPTIONS 
	----------------------------------------
	*/
	
		defaults={
			/*
			set element/content width/height programmatically 
			values: boolean, pixels, percentage 
				option						default
				-------------------------------------
				setWidth					false
				setHeight					false
			*/
			/*
			set the initial css top property of content  
			values: string (e.g. "-100px", "10%" etc.)
			*/
			setTop:0,
			/*
			set the initial css left property of content  
			values: string (e.g. "-100px", "10%" etc.)
			*/
			setLeft:0,
			/* 
			scrollbar axis (vertical and/or horizontal scrollbars) 
			values (string): "y", "x", "yx"
			*/
			axis:"y",
			/*
			position of scrollbar relative to content  
			values (string): "inside", "outside" ("outside" requires elements with position:relative)
			*/
			scrollbarPosition:"inside",
			/*
			scrolling inertia
			values: integer (milliseconds)
			*/
			scrollInertia:950,
			/* 
			auto-adjust scrollbar dragger length
			values: boolean
			*/
			autoDraggerLength:true,
			/*
			auto-hide scrollbar when idle 
			values: boolean
				option						default
				-------------------------------------
				autoHideScrollbar			false
			*/
			/*
			auto-expands scrollbar on mouse-over and dragging
			values: boolean
				option						default
				-------------------------------------
				autoExpandScrollbar			false
			*/
			/*
			always show scrollbar, even when there's nothing to scroll 
			values: integer (0=disable, 1=always show dragger rail and buttons, 2=always show dragger rail, dragger and buttons), boolean
			*/
			alwaysShowScrollbar:0,
			/*
			scrolling always snaps to a multiple of this number in pixels
			values: integer, array ([y,x])
				option						default
				-------------------------------------
				snapAmount					null
			*/
			/*
			when snapping, snap with this number in pixels as an offset 
			values: integer
			*/
			snapOffset:0,
			/* 
			mouse-wheel scrolling
			*/
			mouseWheel:{
				/* 
				enable mouse-wheel scrolling
				values: boolean
				*/
				enable:true,
				/* 
				scrolling amount in pixels
				values: "auto", integer 
				*/
				scrollAmount:"auto",
				/* 
				mouse-wheel scrolling axis 
				the default scrolling direction when both vertical and horizontal scrollbars are present 
				values (string): "y", "x" 
				*/
				axis:"y",
				/* 
				prevent the default behaviour which automatically scrolls the parent element(s) when end of scrolling is reached 
				values: boolean
					option						default
					-------------------------------------
					preventDefault				null
				*/
				/*
				the reported mouse-wheel delta value. The number of lines (translated to pixels) one wheel notch scrolls.  
				values: "auto", integer 
				"auto" uses the default OS/browser value 
				*/
				deltaFactor:"auto",
				/*
				normalize mouse-wheel delta to -1 or 1 (disables mouse-wheel acceleration) 
				values: boolean
					option						default
					-------------------------------------
					normalizeDelta				null
				*/
				/*
				invert mouse-wheel scrolling direction 
				values: boolean
					option						default
					-------------------------------------
					invert						null
				*/
				/*
				the tags that disable mouse-wheel when cursor is over them
				*/
				disableOver:["select","option","keygen","datalist","textarea"]
			},
			/* 
			scrollbar buttons
			*/
			scrollButtons:{ 
				/*
				enable scrollbar buttons
				values: boolean
					option						default
					-------------------------------------
					enable						null
				*/
				/*
				scrollbar buttons scrolling type 
				values (string): "stepless", "stepped"
				*/
				scrollType:"stepless",
				/*
				scrolling amount in pixels
				values: "auto", integer 
				*/
				scrollAmount:"auto"
				/*
				tabindex of the scrollbar buttons
				values: false, integer
					option						default
					-------------------------------------
					tabindex					null
				*/
			},
			/* 
			keyboard scrolling
			*/
			keyboard:{ 
				/*
				enable scrolling via keyboard
				values: boolean
				*/
				enable:true,
				/*
				keyboard scrolling type 
				values (string): "stepless", "stepped"
				*/
				scrollType:"stepless",
				/*
				scrolling amount in pixels
				values: "auto", integer 
				*/
				scrollAmount:"auto"
			},
			/*
			enable content touch-swipe scrolling 
			values: boolean, integer, string (number)
			integer values define the axis-specific minimum amount required for scrolling momentum
			*/
			contentTouchScroll:25,
			/*
			enable/disable document (default) touch-swipe scrolling 
			*/
			documentTouchScroll:true,
			/*
			advanced option parameters
			*/
			advanced:{
				/*
				auto-expand content horizontally (for "x" or "yx" axis) 
				values: boolean, integer (the value 2 forces the non scrollHeight/scrollWidth method, the value 3 forces the scrollHeight/scrollWidth method)
					option						default
					-------------------------------------
					autoExpandHorizontalScroll	null
				*/
				/*
				auto-scroll to elements with focus
				*/
				autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
				/*
				auto-update scrollbars on content, element or viewport resize 
				should be true for fluid layouts/elements, adding/removing content dynamically, hiding/showing elements, content with images etc. 
				values: boolean
				*/
				updateOnContentResize:true,
				/*
				auto-update scrollbars each time each image inside the element is fully loaded 
				values: "auto", boolean
				*/
				updateOnImageLoad:"auto",
				/*
				auto-update scrollbars based on the amount and size changes of specific selectors 
				useful when you need to update the scrollbar(s) automatically, each time a type of element is added, removed or changes its size 
				values: boolean, string (e.g. "ul li" will auto-update scrollbars each time list-items inside the element are changed) 
				a value of true (boolean) will auto-update scrollbars each time any element is changed
					option						default
					-------------------------------------
					updateOnSelectorChange		null
				*/
				/*
				extra selectors that'll allow scrollbar dragging upon mousemove/up, pointermove/up, touchend etc. (e.g. "selector-1, selector-2")
					option						default
					-------------------------------------
					extraDraggableSelectors		null
				*/
				/*
				extra selectors that'll release scrollbar dragging upon mouseup, pointerup, touchend etc. (e.g. "selector-1, selector-2")
					option						default
					-------------------------------------
					releaseDraggableSelectors	null
				*/
				/*
				auto-update timeout 
				values: integer (milliseconds)
				*/
				autoUpdateTimeout:60
			},
			/* 
			scrollbar theme 
			values: string (see CSS/plugin URI for a list of ready-to-use themes)
			*/
			theme:"light",
			/*
			user defined callback functions
			*/
			callbacks:{
				/*
				Available callbacks: 
					callback					default
					-------------------------------------
					onCreate					null
					onInit						null
					onScrollStart				null
					onScroll					null
					onTotalScroll				null
					onTotalScrollBack			null
					whileScrolling				null
					onOverflowY					null
					onOverflowX					null
					onOverflowYNone				null
					onOverflowXNone				null
					onImageLoad					null
					onSelectorChange			null
					onBeforeUpdate				null
					onUpdate					null
				*/
				onTotalScrollOffset:0,
				onTotalScrollBackOffset:0,
				alwaysTriggerOffsets:true
			}
			/*
			add scrollbar(s) on all elements matching the current selector, now and in the future 
			values: boolean, string 
			string values: "on" (enable), "once" (disable after first invocation), "off" (disable)
			liveSelector values: string (selector)
				option						default
				-------------------------------------
				live						false
				liveSelector				null
			*/
		},
	
	
	
	
	
	/* 
	----------------------------------------
	VARS, CONSTANTS 
	----------------------------------------
	*/
	
		totalInstances=0, /* plugin instances amount */
		liveTimers={}, /* live option timers */
		oldIE=(window.attachEvent && !window.addEventListener) ? 1 : 0, /* detect IE < 9 */
		touchActive=false,touchable, /* global touch vars (for touch and pointer events) */
		/* general plugin classes */
		classes=[
			"mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar",
			"mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer",
			"mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"
		],
		
	
	
	
	
	/* 
	----------------------------------------
	METHODS 
	----------------------------------------
	*/
	
		methods={
			
			/* 
			plugin initialization method 
			creates the scrollbar(s), plugin data object and options
			----------------------------------------
			*/
			
			init:function(options){
				
				var options=$.extend(true,{},defaults,options),
					selector=_selector.call(this); /* validate selector */
				
				/* 
				if live option is enabled, monitor for elements matching the current selector and 
				apply scrollbar(s) when found (now and in the future) 
				*/
				if(options.live){
					var liveSelector=options.liveSelector || this.selector || defaultSelector, /* live selector(s) */
						$liveSelector=$(liveSelector); /* live selector(s) as jquery object */
					if(options.live==="off"){
						/* 
						disable live if requested 
						usage: $(selector).mCustomScrollbar({live:"off"}); 
						*/
						removeLiveTimers(liveSelector);
						return;
					}
					liveTimers[liveSelector]=setTimeout(function(){
						/* call mCustomScrollbar fn on live selector(s) every half-second */
						$liveSelector.mCustomScrollbar(options);
						if(options.live==="once" && $liveSelector.length){
							/* disable live after first invocation */
							removeLiveTimers(liveSelector);
						}
					},500);
				}else{
					removeLiveTimers(liveSelector);
				}
				
				/* options backward compatibility (for versions < 3.0.0) and normalization */
				options.setWidth=(options.set_width) ? options.set_width : options.setWidth;
				options.setHeight=(options.set_height) ? options.set_height : options.setHeight;
				options.axis=(options.horizontalScroll) ? "x" : _findAxis(options.axis);
				options.scrollInertia=options.scrollInertia>0 && options.scrollInertia<17 ? 17 : options.scrollInertia;
				if(typeof options.mouseWheel!=="object" &&  options.mouseWheel==true){ /* old school mouseWheel option (non-object) */
					options.mouseWheel={enable:true,scrollAmount:"auto",axis:"y",preventDefault:false,deltaFactor:"auto",normalizeDelta:false,invert:false}
				}
				options.mouseWheel.scrollAmount=!options.mouseWheelPixels ? options.mouseWheel.scrollAmount : options.mouseWheelPixels;
				options.mouseWheel.normalizeDelta=!options.advanced.normalizeMouseWheelDelta ? options.mouseWheel.normalizeDelta : options.advanced.normalizeMouseWheelDelta;
				options.scrollButtons.scrollType=_findScrollButtonsType(options.scrollButtons.scrollType); 
				
				_theme(options); /* theme-specific options */
				
				/* plugin constructor */
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if(!$this.data(pluginPfx)){ /* prevent multiple instantiations */
					
						/* store options and create objects in jquery data */
						$this.data(pluginPfx,{
							idx:++totalInstances, /* instance index */
							opt:options, /* options */
							scrollRatio:{y:null,x:null}, /* scrollbar to content ratio */
							overflowed:null, /* overflowed axis */
							contentReset:{y:null,x:null}, /* object to check when content resets */
							bindEvents:false, /* object to check if events are bound */
							tweenRunning:false, /* object to check if tween is running */
							sequential:{}, /* sequential scrolling object */
							langDir:$this.css("direction"), /* detect/store direction (ltr or rtl) */
							cbOffsets:null, /* object to check whether callback offsets always trigger */
							/* 
							object to check how scrolling events where last triggered 
							"internal" (default - triggered by this script), "external" (triggered by other scripts, e.g. via scrollTo method) 
							usage: object.data("mCS").trigger
							*/
							trigger:null,
							/* 
							object to check for changes in elements in order to call the update method automatically 
							*/
							poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}
						});
						
						var d=$this.data(pluginPfx),o=d.opt,
							/* HTML data attributes */
							htmlDataAxis=$this.data("mcs-axis"),htmlDataSbPos=$this.data("mcs-scrollbar-position"),htmlDataTheme=$this.data("mcs-theme");
						 
						if(htmlDataAxis){o.axis=htmlDataAxis;} /* usage example: data-mcs-axis="y" */
						if(htmlDataSbPos){o.scrollbarPosition=htmlDataSbPos;} /* usage example: data-mcs-scrollbar-position="outside" */
						if(htmlDataTheme){ /* usage example: data-mcs-theme="minimal" */
							o.theme=htmlDataTheme;
							_theme(o); /* theme-specific options */
						}
						
						_pluginMarkup.call(this); /* add plugin markup */
						
						if(d && o.callbacks.onCreate && typeof o.callbacks.onCreate==="function"){o.callbacks.onCreate.call(this);} /* callbacks: onCreate */
						
						$("#mCSB_"+d.idx+"_container img:not(."+classes[2]+")").addClass(classes[2]); /* flag loaded images */
						
						methods.update.call(null,$this); /* call the update method */
					
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/* 
			plugin update method 
			updates content and scrollbar(s) values, events and status 
			----------------------------------------
			usage: $(selector).mCustomScrollbar("update");
			*/
			
			update:function(el,cb){
				
				var selector=el || _selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
						
						var d=$this.data(pluginPfx),o=d.opt,
							mCSB_container=$("#mCSB_"+d.idx+"_container"),
							mCustomScrollBox=$("#mCSB_"+d.idx),
							mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
						
						if(!mCSB_container.length){return;}
						
						if(d.tweenRunning){_stop($this);} /* stop any running tweens while updating */
						
						if(cb && d && o.callbacks.onBeforeUpdate && typeof o.callbacks.onBeforeUpdate==="function"){o.callbacks.onBeforeUpdate.call(this);} /* callbacks: onBeforeUpdate */
						
						/* if element was disabled or destroyed, remove class(es) */
						if($this.hasClass(classes[3])){$this.removeClass(classes[3]);}
						if($this.hasClass(classes[4])){$this.removeClass(classes[4]);}
						
						/* css flexbox fix, detect/set max-height */
						mCustomScrollBox.css("max-height","none");
						if(mCustomScrollBox.height()!==$this.height()){mCustomScrollBox.css("max-height",$this.height());}
						
						_expandContentHorizontally.call(this); /* expand content horizontally */
						
						if(o.axis!=="y" && !o.advanced.autoExpandHorizontalScroll){
							mCSB_container.css("width",_contentWidth(mCSB_container));
						}
						
						d.overflowed=_overflowed.call(this); /* determine if scrolling is required */
						
						_scrollbarVisibility.call(this); /* show/hide scrollbar(s) */
						
						/* auto-adjust scrollbar dragger length analogous to content */
						if(o.autoDraggerLength){_setDraggerLength.call(this);}
						
						_scrollRatio.call(this); /* calculate and store scrollbar to content ratio */
						
						_bindEvents.call(this); /* bind scrollbar events */
						
						/* reset scrolling position and/or events */
						var to=[Math.abs(mCSB_container[0].offsetTop),Math.abs(mCSB_container[0].offsetLeft)];
						if(o.axis!=="x"){ /* y/yx axis */
							if(!d.overflowed[0]){ /* y scrolling is not required */
								_resetContentPosition.call(this); /* reset content position */
								if(o.axis==="y"){
									_unbindEvents.call(this);
								}else if(o.axis==="yx" && d.overflowed[1]){
									_scrollTo($this,to[1].toString(),{dir:"x",dur:0,overwrite:"none"});
								}
							}else if(mCSB_dragger[0].height()>mCSB_dragger[0].parent().height()){
								_resetContentPosition.call(this); /* reset content position */
							}else{ /* y scrolling is required */
								_scrollTo($this,to[0].toString(),{dir:"y",dur:0,overwrite:"none"});
								d.contentReset.y=null;
							}
						}
						if(o.axis!=="y"){ /* x/yx axis */
							if(!d.overflowed[1]){ /* x scrolling is not required */
								_resetContentPosition.call(this); /* reset content position */
								if(o.axis==="x"){
									_unbindEvents.call(this);
								}else if(o.axis==="yx" && d.overflowed[0]){
									_scrollTo($this,to[0].toString(),{dir:"y",dur:0,overwrite:"none"});
								}
							}else if(mCSB_dragger[1].width()>mCSB_dragger[1].parent().width()){
								_resetContentPosition.call(this); /* reset content position */
							}else{ /* x scrolling is required */
								_scrollTo($this,to[1].toString(),{dir:"x",dur:0,overwrite:"none"});
								d.contentReset.x=null;
							}
						}
						
						/* callbacks: onImageLoad, onSelectorChange, onUpdate */
						if(cb && d){
							if(cb===2 && o.callbacks.onImageLoad && typeof o.callbacks.onImageLoad==="function"){
								o.callbacks.onImageLoad.call(this);
							}else if(cb===3 && o.callbacks.onSelectorChange && typeof o.callbacks.onSelectorChange==="function"){
								o.callbacks.onSelectorChange.call(this);
							}else if(o.callbacks.onUpdate && typeof o.callbacks.onUpdate==="function"){
								o.callbacks.onUpdate.call(this);
							}
						}
						
						_autoUpdate.call(this); /* initialize automatic updating (for dynamic content, fluid layouts etc.) */
						
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/* 
			plugin scrollTo method 
			triggers a scrolling event to a specific value
			----------------------------------------
			usage: $(selector).mCustomScrollbar("scrollTo",value,options);
			*/
		
			scrollTo:function(val,options){
				
				/* prevent silly things like $(selector).mCustomScrollbar("scrollTo",undefined); */
				if(typeof val=="undefined" || val==null){return;}
				
				var selector=_selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
					
						var d=$this.data(pluginPfx),o=d.opt,
							/* method default options */
							methodDefaults={
								trigger:"external", /* method is by default triggered externally (e.g. from other scripts) */
								scrollInertia:o.scrollInertia, /* scrolling inertia (animation duration) */
								scrollEasing:"mcsEaseInOut", /* animation easing */
								moveDragger:false, /* move dragger instead of content */
								timeout:60, /* scroll-to delay */
								callbacks:true, /* enable/disable callbacks */
								onStart:true,
								onUpdate:true,
								onComplete:true
							},
							methodOptions=$.extend(true,{},methodDefaults,options),
							to=_arr.call(this,val),dur=methodOptions.scrollInertia>0 && methodOptions.scrollInertia<17 ? 17 : methodOptions.scrollInertia;
						
						/* translate yx values to actual scroll-to positions */
						to[0]=_to.call(this,to[0],"y");
						to[1]=_to.call(this,to[1],"x");
						
						/* 
						check if scroll-to value moves the dragger instead of content. 
						Only pixel values apply on dragger (e.g. 100, "100px", "-=100" etc.) 
						*/
						if(methodOptions.moveDragger){
							to[0]*=d.scrollRatio.y;
							to[1]*=d.scrollRatio.x;
						}
						
						methodOptions.dur=_isTabHidden() ? 0 : dur; //skip animations if browser tab is hidden
						
						setTimeout(function(){ 
							/* do the scrolling */
							if(to[0]!==null && typeof to[0]!=="undefined" && o.axis!=="x" && d.overflowed[0]){ /* scroll y */
								methodOptions.dir="y";
								methodOptions.overwrite="all";
								_scrollTo($this,to[0].toString(),methodOptions);
							}
							if(to[1]!==null && typeof to[1]!=="undefined" && o.axis!=="y" && d.overflowed[1]){ /* scroll x */
								methodOptions.dir="x";
								methodOptions.overwrite="none";
								_scrollTo($this,to[1].toString(),methodOptions);
							}
						},methodOptions.timeout);
						
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/*
			plugin stop method 
			stops scrolling animation
			----------------------------------------
			usage: $(selector).mCustomScrollbar("stop");
			*/
			stop:function(){
				
				var selector=_selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
										
						_stop($this);
					
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/*
			plugin disable method 
			temporarily disables the scrollbar(s) 
			----------------------------------------
			usage: $(selector).mCustomScrollbar("disable",reset); 
			reset (boolean): resets content position to 0 
			*/
			disable:function(r){
				
				var selector=_selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
						
						var d=$this.data(pluginPfx);
						
						_autoUpdate.call(this,"remove"); /* remove automatic updating */
						
						_unbindEvents.call(this); /* unbind events */
						
						if(r){_resetContentPosition.call(this);} /* reset content position */
						
						_scrollbarVisibility.call(this,true); /* show/hide scrollbar(s) */
						
						$this.addClass(classes[3]); /* add disable class */
					
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/*
			plugin destroy method 
			completely removes the scrollbar(s) and returns the element to its original state
			----------------------------------------
			usage: $(selector).mCustomScrollbar("destroy"); 
			*/
			destroy:function(){
				
				var selector=_selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
					
						var d=$this.data(pluginPfx),o=d.opt,
							mCustomScrollBox=$("#mCSB_"+d.idx),
							mCSB_container=$("#mCSB_"+d.idx+"_container"),
							scrollbar=$(".mCSB_"+d.idx+"_scrollbar");
					
						if(o.live){removeLiveTimers(o.liveSelector || $(selector).selector);} /* remove live timers */
						
						_autoUpdate.call(this,"remove"); /* remove automatic updating */
						
						_unbindEvents.call(this); /* unbind events */
						
						_resetContentPosition.call(this); /* reset content position */
						
						$this.removeData(pluginPfx); /* remove plugin data object */
						
						_delete(this,"mcs"); /* delete callbacks object */
						
						/* remove plugin markup */
						scrollbar.remove(); /* remove scrollbar(s) first (those can be either inside or outside plugin's inner wrapper) */
						mCSB_container.find("img."+classes[2]).removeClass(classes[2]); /* remove loaded images flag */
						mCustomScrollBox.replaceWith(mCSB_container.contents()); /* replace plugin's inner wrapper with the original content */
						/* remove plugin classes from the element and add destroy class */
						$this.removeClass(pluginNS+" _"+pluginPfx+"_"+d.idx+" "+classes[6]+" "+classes[7]+" "+classes[5]+" "+classes[3]).addClass(classes[4]);
					
					}
					
				});
				
			}
			/* ---------------------------------------- */
			
		},
	
	
	
	
		
	/* 
	----------------------------------------
	FUNCTIONS
	----------------------------------------
	*/
	
		/* validates selector (if selector is invalid or undefined uses the default one) */
		_selector=function(){
			return (typeof $(this)!=="object" || $(this).length<1) ? defaultSelector : this;
		},
		/* -------------------- */
		
		
		/* changes options according to theme */
		_theme=function(obj){
			var fixedSizeScrollbarThemes=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],
				nonExpandedScrollbarThemes=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],
				disabledScrollButtonsThemes=["minimal","minimal-dark"],
				enabledAutoHideScrollbarThemes=["minimal","minimal-dark"],
				scrollbarPositionOutsideThemes=["minimal","minimal-dark"];
			obj.autoDraggerLength=$.inArray(obj.theme,fixedSizeScrollbarThemes) > -1 ? false : obj.autoDraggerLength;
			obj.autoExpandScrollbar=$.inArray(obj.theme,nonExpandedScrollbarThemes) > -1 ? false : obj.autoExpandScrollbar;
			obj.scrollButtons.enable=$.inArray(obj.theme,disabledScrollButtonsThemes) > -1 ? false : obj.scrollButtons.enable;
			obj.autoHideScrollbar=$.inArray(obj.theme,enabledAutoHideScrollbarThemes) > -1 ? true : obj.autoHideScrollbar;
			obj.scrollbarPosition=$.inArray(obj.theme,scrollbarPositionOutsideThemes) > -1 ? "outside" : obj.scrollbarPosition;
		},
		/* -------------------- */
		
		
		/* live option timers removal */
		removeLiveTimers=function(selector){
			if(liveTimers[selector]){
				clearTimeout(liveTimers[selector]);
				_delete(liveTimers,selector);
			}
		},
		/* -------------------- */
		
		
		/* normalizes axis option to valid values: "y", "x", "yx" */
		_findAxis=function(val){
			return (val==="yx" || val==="xy" || val==="auto") ? "yx" : (val==="x" || val==="horizontal") ? "x" : "y";
		},
		/* -------------------- */
		
		
		/* normalizes scrollButtons.scrollType option to valid values: "stepless", "stepped" */
		_findScrollButtonsType=function(val){
			return (val==="stepped" || val==="pixels" || val==="step" || val==="click") ? "stepped" : "stepless";
		},
		/* -------------------- */
		
		
		/* generates plugin markup */
		_pluginMarkup=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				expandClass=o.autoExpandScrollbar ? " "+classes[1]+"_expand" : "",
				scrollbar=["<div id='mCSB_"+d.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+d.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_vertical"+expandClass+"'><div class='"+classes[12]+"'><div id='mCSB_"+d.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+d.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+d.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_horizontal"+expandClass+"'><div class='"+classes[12]+"'><div id='mCSB_"+d.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
				wrapperClass=o.axis==="yx" ? "mCSB_vertical_horizontal" : o.axis==="x" ? "mCSB_horizontal" : "mCSB_vertical",
				scrollbars=o.axis==="yx" ? scrollbar[0]+scrollbar[1] : o.axis==="x" ? scrollbar[1] : scrollbar[0],
				contentWrapper=o.axis==="yx" ? "<div id='mCSB_"+d.idx+"_container_wrapper' class='mCSB_container_wrapper' />" : "",
				autoHideClass=o.autoHideScrollbar ? " "+classes[6] : "",
				scrollbarDirClass=(o.axis!=="x" && d.langDir==="rtl") ? " "+classes[7] : "";
			if(o.setWidth){$this.css("width",o.setWidth);} /* set element width */
			if(o.setHeight){$this.css("height",o.setHeight);} /* set element height */
			o.setLeft=(o.axis!=="y" && d.langDir==="rtl") ? "989999px" : o.setLeft; /* adjust left position for rtl direction */
			$this.addClass(pluginNS+" _"+pluginPfx+"_"+d.idx+autoHideClass+scrollbarDirClass).wrapInner("<div id='mCSB_"+d.idx+"' class='mCustomScrollBox mCS-"+o.theme+" "+wrapperClass+"'><div id='mCSB_"+d.idx+"_container' class='mCSB_container' style='position:relative; top:"+o.setTop+"; left:"+o.setLeft+";' dir='"+d.langDir+"' /></div>");
			var mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(o.axis!=="y" && !o.advanced.autoExpandHorizontalScroll){
				mCSB_container.css("width",_contentWidth(mCSB_container));
			}
			if(o.scrollbarPosition==="outside"){
				if($this.css("position")==="static"){ /* requires elements with non-static position */
					$this.css("position","relative");
				}
				$this.css("overflow","visible");
				mCustomScrollBox.addClass("mCSB_outside").after(scrollbars);
			}else{
				mCustomScrollBox.addClass("mCSB_inside").append(scrollbars);
				mCSB_container.wrap(contentWrapper);
			}
			_scrollButtons.call(this); /* add scrollbar buttons */
			/* minimum dragger length */
			var mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
			mCSB_dragger[0].css("min-height",mCSB_dragger[0].height());
			mCSB_dragger[1].css("min-width",mCSB_dragger[1].width());
		},
		/* -------------------- */
		
		
		/* calculates content width */
		_contentWidth=function(el){
			var val=[el[0].scrollWidth,Math.max.apply(Math,el.children().map(function(){return $(this).outerWidth(true);}).get())],w=el.parent().width();
			return val[0]>w ? val[0] : val[1]>w ? val[1] : "100%";
		},
		/* -------------------- */
		
		
		/* expands content horizontally */
		_expandContentHorizontally=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(o.advanced.autoExpandHorizontalScroll && o.axis!=="y"){
				/* calculate scrollWidth */
				mCSB_container.css({"width":"auto","min-width":0,"overflow-x":"scroll"});
				var w=Math.ceil(mCSB_container[0].scrollWidth);
				if(o.advanced.autoExpandHorizontalScroll===3 || (o.advanced.autoExpandHorizontalScroll!==2 && w>mCSB_container.parent().width())){
					mCSB_container.css({"width":w,"min-width":"100%","overflow-x":"inherit"});
				}else{
					/* 
					wrap content with an infinite width div and set its position to absolute and width to auto. 
					Setting width to auto before calculating the actual width is important! 
					We must let the browser set the width as browser zoom values are impossible to calculate.
					*/
					mCSB_container.css({"overflow-x":"inherit","position":"absolute"})
						.wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />")
						.css({ /* set actual width, original position and un-wrap */
							/* 
							get the exact width (with decimals) and then round-up. 
							Using jquery outerWidth() will round the width value which will mess up with inner elements that have non-integer width
							*/
							"width":(Math.ceil(mCSB_container[0].getBoundingClientRect().right+0.4)-Math.floor(mCSB_container[0].getBoundingClientRect().left)),
							"min-width":"100%",
							"position":"relative"
						}).unwrap();
				}
			}
		},
		/* -------------------- */
		
		
		/* adds scrollbar buttons */
		_scrollButtons=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_scrollTools=$(".mCSB_"+d.idx+"_scrollbar:first"),
				tabindex=!_isNumeric(o.scrollButtons.tabindex) ? "" : "tabindex='"+o.scrollButtons.tabindex+"'",
				btnHTML=[
					"<a href='#' class='"+classes[13]+"' "+tabindex+" />",
					"<a href='#' class='"+classes[14]+"' "+tabindex+" />",
					"<a href='#' class='"+classes[15]+"' "+tabindex+" />",
					"<a href='#' class='"+classes[16]+"' "+tabindex+" />"
				],
				btn=[(o.axis==="x" ? btnHTML[2] : btnHTML[0]),(o.axis==="x" ? btnHTML[3] : btnHTML[1]),btnHTML[2],btnHTML[3]];
			if(o.scrollButtons.enable){
				mCSB_scrollTools.prepend(btn[0]).append(btn[1]).next(".mCSB_scrollTools").prepend(btn[2]).append(btn[3]);
			}
		},
		/* -------------------- */
		
		
		/* auto-adjusts scrollbar dragger length */
		_setDraggerLength=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				ratio=[mCustomScrollBox.height()/mCSB_container.outerHeight(false),mCustomScrollBox.width()/mCSB_container.outerWidth(false)],
				l=[
					parseInt(mCSB_dragger[0].css("min-height")),Math.round(ratio[0]*mCSB_dragger[0].parent().height()),
					parseInt(mCSB_dragger[1].css("min-width")),Math.round(ratio[1]*mCSB_dragger[1].parent().width())
				],
				h=oldIE && (l[1]<l[0]) ? l[0] : l[1],w=oldIE && (l[3]<l[2]) ? l[2] : l[3];
			mCSB_dragger[0].css({
				"height":h,"max-height":(mCSB_dragger[0].parent().height()-10)
			}).find(".mCSB_dragger_bar").css({"line-height":l[0]+"px"});
			mCSB_dragger[1].css({
				"width":w,"max-width":(mCSB_dragger[1].parent().width()-10)
			});
		},
		/* -------------------- */
		
		
		/* calculates scrollbar to content ratio */
		_scrollRatio=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				scrollAmount=[mCSB_container.outerHeight(false)-mCustomScrollBox.height(),mCSB_container.outerWidth(false)-mCustomScrollBox.width()],
				ratio=[
					scrollAmount[0]/(mCSB_dragger[0].parent().height()-mCSB_dragger[0].height()),
					scrollAmount[1]/(mCSB_dragger[1].parent().width()-mCSB_dragger[1].width())
				];
			d.scrollRatio={y:ratio[0],x:ratio[1]};
		},
		/* -------------------- */
		
		
		/* toggles scrolling classes */
		_onDragClasses=function(el,action,xpnd){
			var expandClass=xpnd ? classes[0]+"_expanded" : "",
				scrollbar=el.closest(".mCSB_scrollTools");
			if(action==="active"){
				el.toggleClass(classes[0]+" "+expandClass); scrollbar.toggleClass(classes[1]); 
				el[0]._draggable=el[0]._draggable ? 0 : 1;
			}else{
				if(!el[0]._draggable){
					if(action==="hide"){
						el.removeClass(classes[0]); scrollbar.removeClass(classes[1]);
					}else{
						el.addClass(classes[0]); scrollbar.addClass(classes[1]);
					}
				}
			}
		},
		/* -------------------- */
		
		
		/* checks if content overflows its container to determine if scrolling is required */
		_overflowed=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				contentHeight=d.overflowed==null ? mCSB_container.height() : mCSB_container.outerHeight(false),
				contentWidth=d.overflowed==null ? mCSB_container.width() : mCSB_container.outerWidth(false),
				h=mCSB_container[0].scrollHeight,w=mCSB_container[0].scrollWidth;
			if(h>contentHeight){contentHeight=h;}
			if(w>contentWidth){contentWidth=w;}
			return [contentHeight>mCustomScrollBox.height(),contentWidth>mCustomScrollBox.width()];
		},
		/* -------------------- */
		
		
		/* resets content position to 0 */
		_resetContentPosition=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
			_stop($this); /* stop any current scrolling before resetting */
			if((o.axis!=="x" && !d.overflowed[0]) || (o.axis==="y" && d.overflowed[0])){ /* reset y */
				mCSB_dragger[0].add(mCSB_container).css("top",0);
				_scrollTo($this,"_resetY");
			}
			if((o.axis!=="y" && !d.overflowed[1]) || (o.axis==="x" && d.overflowed[1])){ /* reset x */
				var cx=dx=0;
				if(d.langDir==="rtl"){ /* adjust left position for rtl direction */
					cx=mCustomScrollBox.width()-mCSB_container.outerWidth(false);
					dx=Math.abs(cx/d.scrollRatio.x);
				}
				mCSB_container.css("left",cx);
				mCSB_dragger[1].css("left",dx);
				_scrollTo($this,"_resetX");
			}
		},
		/* -------------------- */
		
		
		/* binds scrollbar events */
		_bindEvents=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt;
			if(!d.bindEvents){ /* check if events are already bound */
				_draggable.call(this);
				if(o.contentTouchScroll){_contentDraggable.call(this);}
				_selectable.call(this);
				if(o.mouseWheel.enable){ /* bind mousewheel fn when plugin is available */
					function _mwt(){
						mousewheelTimeout=setTimeout(function(){
							if(!$.event.special.mousewheel){
								_mwt();
							}else{
								clearTimeout(mousewheelTimeout);
								_mousewheel.call($this[0]);
							}
						},100);
					}
					var mousewheelTimeout;
					_mwt();
				}
				_draggerRail.call(this);
				_wrapperScroll.call(this);
				if(o.advanced.autoScrollOnFocus){_focus.call(this);}
				if(o.scrollButtons.enable){_buttons.call(this);}
				if(o.keyboard.enable){_keyboard.call(this);}
				d.bindEvents=true;
			}
		},
		/* -------------------- */
		
		
		/* unbinds scrollbar events */
		_unbindEvents=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				sb=".mCSB_"+d.idx+"_scrollbar",
				sel=$("#mCSB_"+d.idx+",#mCSB_"+d.idx+"_container,#mCSB_"+d.idx+"_container_wrapper,"+sb+" ."+classes[12]+",#mCSB_"+d.idx+"_dragger_vertical,#mCSB_"+d.idx+"_dragger_horizontal,"+sb+">a"),
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(o.advanced.releaseDraggableSelectors){sel.add($(o.advanced.releaseDraggableSelectors));}
			if(o.advanced.extraDraggableSelectors){sel.add($(o.advanced.extraDraggableSelectors));}
			if(d.bindEvents){ /* check if events are bound */
				/* unbind namespaced events from document/selectors */
				$(document).add($(!_canAccessIFrame() || top.document)).unbind("."+namespace);
				sel.each(function(){
					$(this).unbind("."+namespace);
				});
				/* clear and delete timeouts/objects */
				clearTimeout($this[0]._focusTimeout); _delete($this[0],"_focusTimeout");
				clearTimeout(d.sequential.step); _delete(d.sequential,"step");
				clearTimeout(mCSB_container[0].onCompleteTimeout); _delete(mCSB_container[0],"onCompleteTimeout");
				d.bindEvents=false;
			}
		},
		/* -------------------- */
		
		
		/* toggles scrollbar visibility */
		_scrollbarVisibility=function(disabled){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				contentWrapper=$("#mCSB_"+d.idx+"_container_wrapper"),
				content=contentWrapper.length ? contentWrapper : $("#mCSB_"+d.idx+"_container"),
				scrollbar=[$("#mCSB_"+d.idx+"_scrollbar_vertical"),$("#mCSB_"+d.idx+"_scrollbar_horizontal")],
				mCSB_dragger=[scrollbar[0].find(".mCSB_dragger"),scrollbar[1].find(".mCSB_dragger")];
			if(o.axis!=="x"){
				if(d.overflowed[0] && !disabled){
					scrollbar[0].add(mCSB_dragger[0]).add(scrollbar[0].children("a")).css("display","block");
					content.removeClass(classes[8]+" "+classes[10]);
				}else{
					if(o.alwaysShowScrollbar){
						if(o.alwaysShowScrollbar!==2){mCSB_dragger[0].css("display","none");}
						content.removeClass(classes[10]);
					}else{
						scrollbar[0].css("display","none");
						content.addClass(classes[10]);
					}
					content.addClass(classes[8]);
				}
			}
			if(o.axis!=="y"){
				if(d.overflowed[1] && !disabled){
					scrollbar[1].add(mCSB_dragger[1]).add(scrollbar[1].children("a")).css("display","block");
					content.removeClass(classes[9]+" "+classes[11]);
				}else{
					if(o.alwaysShowScrollbar){
						if(o.alwaysShowScrollbar!==2){mCSB_dragger[1].css("display","none");}
						content.removeClass(classes[11]);
					}else{
						scrollbar[1].css("display","none");
						content.addClass(classes[11]);
					}
					content.addClass(classes[9]);
				}
			}
			if(!d.overflowed[0] && !d.overflowed[1]){
				$this.addClass(classes[5]);
			}else{
				$this.removeClass(classes[5]);
			}
		},
		/* -------------------- */
		
		
		/* returns input coordinates of pointer, touch and mouse events (relative to document) */
		_coordinates=function(e){
			var t=e.type,o=e.target.ownerDocument!==document && frameElement!==null ? [$(frameElement).offset().top,$(frameElement).offset().left] : null,
				io=_canAccessIFrame() && e.target.ownerDocument!==top.document && frameElement!==null ? [$(e.view.frameElement).offset().top,$(e.view.frameElement).offset().left] : [0,0];
			switch(t){
				case "pointerdown": case "MSPointerDown": case "pointermove": case "MSPointerMove": case "pointerup": case "MSPointerUp":
					return o ? [e.originalEvent.pageY-o[0]+io[0],e.originalEvent.pageX-o[1]+io[1],false] : [e.originalEvent.pageY,e.originalEvent.pageX,false];
					break;
				case "touchstart": case "touchmove": case "touchend":
					var touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
						touches=e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
					return e.target.ownerDocument!==document ? [touch.screenY,touch.screenX,touches>1] : [touch.pageY,touch.pageX,touches>1];
					break;
				default:
					return o ? [e.pageY-o[0]+io[0],e.pageX-o[1]+io[1],false] : [e.pageY,e.pageX,false];
			}
		},
		/* -------------------- */
		
		
		/* 
		SCROLLBAR DRAG EVENTS
		scrolls content via scrollbar dragging 
		*/
		_draggable=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				draggerId=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=$("#"+draggerId[0]+",#"+draggerId[1]),
				draggable,dragY,dragX,
				rds=o.advanced.releaseDraggableSelectors ? mCSB_dragger.add($(o.advanced.releaseDraggableSelectors)) : mCSB_dragger,
				eds=o.advanced.extraDraggableSelectors ? $(!_canAccessIFrame() || top.document).add($(o.advanced.extraDraggableSelectors)) : $(!_canAccessIFrame() || top.document);
			mCSB_dragger.bind("contextmenu."+namespace,function(e){
				e.preventDefault(); //prevent right click
			}).bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace,function(e){
				e.stopImmediatePropagation();
				e.preventDefault();
				if(!_mouseBtnLeft(e)){return;} /* left mouse button only */
				touchActive=true;
				if(oldIE){document.onselectstart=function(){return false;}} /* disable text selection for IE < 9 */
				_iframe.call(mCSB_container,false); /* enable scrollbar dragging over iframes by disabling their events */
				_stop($this);
				draggable=$(this);
				var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left,
					h=draggable.height()+offset.top,w=draggable.width()+offset.left;
				if(y<h && y>0 && x<w && x>0){
					dragY=y; 
					dragX=x;
				}
				_onDragClasses(draggable,"active",o.autoExpandScrollbar); 
			}).bind("touchmove."+namespace,function(e){
				e.stopImmediatePropagation();
				e.preventDefault();
				var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
				_drag(dragY,dragX,y,x);
			});
			$(document).add(eds).bind("mousemove."+namespace+" pointermove."+namespace+" MSPointerMove."+namespace,function(e){
				if(draggable){
					var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
					if(dragY===y && dragX===x){return;} /* has it really moved? */
					_drag(dragY,dragX,y,x);
				}
			}).add(rds).bind("mouseup."+namespace+" touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace,function(e){
				if(draggable){
					_onDragClasses(draggable,"active",o.autoExpandScrollbar); 
					draggable=null;
				}
				touchActive=false;
				if(oldIE){document.onselectstart=null;} /* enable text selection for IE < 9 */
				_iframe.call(mCSB_container,true); /* enable iframes events */
			});
			function _drag(dragY,dragX,y,x){
				mCSB_container[0].idleTimer=o.scrollInertia<233 ? 250 : 0;
				if(draggable.attr("id")===draggerId[1]){
					var dir="x",to=((draggable[0].offsetLeft-dragX)+x)*d.scrollRatio.x;
				}else{
					var dir="y",to=((draggable[0].offsetTop-dragY)+y)*d.scrollRatio.y;
				}
				_scrollTo($this,to.toString(),{dir:dir,drag:true});
			}
		},
		/* -------------------- */
		
		
		/* 
		TOUCH SWIPE EVENTS
		scrolls content via touch swipe 
		Emulates the native touch-swipe scrolling with momentum found in iOS, Android and WP devices 
		*/
		_contentDraggable=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				draggable,dragY,dragX,touchStartY,touchStartX,touchMoveY=[],touchMoveX=[],startTime,runningTime,endTime,distance,speed,amount,
				durA=0,durB,overwrite=o.axis==="yx" ? "none" : "all",touchIntent=[],touchDrag,docDrag,
				iframe=mCSB_container.find("iframe"),
				events=[
					"touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace, //start
					"touchmove."+namespace+" pointermove."+namespace+" MSPointerMove."+namespace, //move
					"touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace //end
				],
				touchAction=document.body.style.touchAction!==undefined && document.body.style.touchAction!=="";
			mCSB_container.bind(events[0],function(e){
				_onTouchstart(e);
			}).bind(events[1],function(e){
				_onTouchmove(e);
			});
			mCustomScrollBox.bind(events[0],function(e){
				_onTouchstart2(e);
			}).bind(events[2],function(e){
				_onTouchend(e);
			});
			if(iframe.length){
				iframe.each(function(){
					$(this).bind("load",function(){
						/* bind events on accessible iframes */
						if(_canAccessIFrame(this)){
							$(this.contentDocument || this.contentWindow.document).bind(events[0],function(e){
								_onTouchstart(e);
								_onTouchstart2(e);
							}).bind(events[1],function(e){
								_onTouchmove(e);
							}).bind(events[2],function(e){
								_onTouchend(e);
							});
						}
					});
				});
			}
			function _onTouchstart(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){touchable=0; return;}
				touchable=1; touchDrag=0; docDrag=0; draggable=1;
				$this.removeClass("mCS_touch_action");
				var offset=mCSB_container.offset();
				dragY=_coordinates(e)[0]-offset.top;
				dragX=_coordinates(e)[1]-offset.left;
				touchIntent=[_coordinates(e)[0],_coordinates(e)[1]];
			}
			function _onTouchmove(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){return;}
				if(!o.documentTouchScroll){e.preventDefault();} 
				e.stopImmediatePropagation();
				if(docDrag && !touchDrag){return;}
				if(draggable){
					runningTime=_getTime();
					var offset=mCustomScrollBox.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left,
						easing="mcsLinearOut";
					touchMoveY.push(y);
					touchMoveX.push(x);
					touchIntent[2]=Math.abs(_coordinates(e)[0]-touchIntent[0]); touchIntent[3]=Math.abs(_coordinates(e)[1]-touchIntent[1]);
					if(d.overflowed[0]){
						var limit=mCSB_dragger[0].parent().height()-mCSB_dragger[0].height(),
							prevent=((dragY-y)>0 && (y-dragY)>-(limit*d.scrollRatio.y) && (touchIntent[3]*2<touchIntent[2] || o.axis==="yx"));
					}
					if(d.overflowed[1]){
						var limitX=mCSB_dragger[1].parent().width()-mCSB_dragger[1].width(),
							preventX=((dragX-x)>0 && (x-dragX)>-(limitX*d.scrollRatio.x) && (touchIntent[2]*2<touchIntent[3] || o.axis==="yx"));
					}
					if(prevent || preventX){ /* prevent native document scrolling */
						if(!touchAction){e.preventDefault();} 
						touchDrag=1;
					}else{
						docDrag=1;
						$this.addClass("mCS_touch_action");
					}
					if(touchAction){e.preventDefault();} 
					amount=o.axis==="yx" ? [(dragY-y),(dragX-x)] : o.axis==="x" ? [null,(dragX-x)] : [(dragY-y),null];
					mCSB_container[0].idleTimer=250;
					if(d.overflowed[0]){_drag(amount[0],durA,easing,"y","all",true);}
					if(d.overflowed[1]){_drag(amount[1],durA,easing,"x",overwrite,true);}
				}
			}
			function _onTouchstart2(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){touchable=0; return;}
				touchable=1;
				e.stopImmediatePropagation();
				_stop($this);
				startTime=_getTime();
				var offset=mCustomScrollBox.offset();
				touchStartY=_coordinates(e)[0]-offset.top;
				touchStartX=_coordinates(e)[1]-offset.left;
				touchMoveY=[]; touchMoveX=[];
			}
			function _onTouchend(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){return;}
				draggable=0;
				e.stopImmediatePropagation();
				touchDrag=0; docDrag=0;
				endTime=_getTime();
				var offset=mCustomScrollBox.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
				if((endTime-runningTime)>30){return;}
				speed=1000/(endTime-startTime);
				var easing="mcsEaseOut",slow=speed<2.5,
					diff=slow ? [touchMoveY[touchMoveY.length-2],touchMoveX[touchMoveX.length-2]] : [0,0];
				distance=slow ? [(y-diff[0]),(x-diff[1])] : [y-touchStartY,x-touchStartX];
				var absDistance=[Math.abs(distance[0]),Math.abs(distance[1])];
				speed=slow ? [Math.abs(distance[0]/4),Math.abs(distance[1]/4)] : [speed,speed];
				var a=[
					Math.abs(mCSB_container[0].offsetTop)-(distance[0]*_m((absDistance[0]/speed[0]),speed[0])),
					Math.abs(mCSB_container[0].offsetLeft)-(distance[1]*_m((absDistance[1]/speed[1]),speed[1]))
				];
				amount=o.axis==="yx" ? [a[0],a[1]] : o.axis==="x" ? [null,a[1]] : [a[0],null];
				durB=[(absDistance[0]*4)+o.scrollInertia,(absDistance[1]*4)+o.scrollInertia];
				var md=parseInt(o.contentTouchScroll) || 0; /* absolute minimum distance required */
				amount[0]=absDistance[0]>md ? amount[0] : 0;
				amount[1]=absDistance[1]>md ? amount[1] : 0;
				if(d.overflowed[0]){_drag(amount[0],durB[0],easing,"y",overwrite,false);}
				if(d.overflowed[1]){_drag(amount[1],durB[1],easing,"x",overwrite,false);}
			}
			function _m(ds,s){
				var r=[s*1.5,s*2,s/1.5,s/2];
				if(ds>90){
					return s>4 ? r[0] : r[3];
				}else if(ds>60){
					return s>3 ? r[3] : r[2];
				}else if(ds>30){
					return s>8 ? r[1] : s>6 ? r[0] : s>4 ? s : r[2];
				}else{
					return s>8 ? s : r[3];
				}
			}
			function _drag(amount,dur,easing,dir,overwrite,drag){
				if(!amount){return;}
				_scrollTo($this,amount.toString(),{dur:dur,scrollEasing:easing,dir:dir,overwrite:overwrite,drag:drag});
			}
		},
		/* -------------------- */
		
		
		/* 
		SELECT TEXT EVENTS 
		scrolls content when text is selected 
		*/
		_selectable=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
				namespace=pluginPfx+"_"+d.idx,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				action;
			mCSB_container.bind("mousedown."+namespace,function(e){
				if(touchable){return;}
				if(!action){action=1; touchActive=true;}
			}).add(document).bind("mousemove."+namespace,function(e){
				if(!touchable && action && _sel()){
					var offset=mCSB_container.offset(),
						y=_coordinates(e)[0]-offset.top+mCSB_container[0].offsetTop,x=_coordinates(e)[1]-offset.left+mCSB_container[0].offsetLeft;
					if(y>0 && y<wrapper.height() && x>0 && x<wrapper.width()){
						if(seq.step){_seq("off",null,"stepped");}
					}else{
						if(o.axis!=="x" && d.overflowed[0]){
							if(y<0){
								_seq("on",38);
							}else if(y>wrapper.height()){
								_seq("on",40);
							}
						}
						if(o.axis!=="y" && d.overflowed[1]){
							if(x<0){
								_seq("on",37);
							}else if(x>wrapper.width()){
								_seq("on",39);
							}
						}
					}
				}
			}).bind("mouseup."+namespace+" dragend."+namespace,function(e){
				if(touchable){return;}
				if(action){action=0; _seq("off",null);}
				touchActive=false;
			});
			function _sel(){
				return 	window.getSelection ? window.getSelection().toString() : 
						document.selection && document.selection.type!="Control" ? document.selection.createRange().text : 0;
			}
			function _seq(a,c,s){
				seq.type=s && action ? "stepped" : "stepless";
				seq.scrollAmount=10;
				_sequentialScroll($this,a,c,"mcsLinearOut",s ? 60 : null);
			}
		},
		/* -------------------- */
		
		
		/* 
		MOUSE WHEEL EVENT
		scrolls content via mouse-wheel 
		via mouse-wheel plugin (https://github.com/brandonaaron/jquery-mousewheel)
		*/
		_mousewheel=function(){
			if(!$(this).data(pluginPfx)){return;} /* Check if the scrollbar is ready to use mousewheel events (issue: #185) */
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				iframe=$("#mCSB_"+d.idx+"_container").find("iframe");
			if(iframe.length){
				iframe.each(function(){
					$(this).bind("load",function(){
						/* bind events on accessible iframes */
						if(_canAccessIFrame(this)){
							$(this.contentDocument || this.contentWindow.document).bind("mousewheel."+namespace,function(e,delta){
								_onMousewheel(e,delta);
							});
						}
					});
				});
			}
			mCustomScrollBox.bind("mousewheel."+namespace,function(e,delta){
				_onMousewheel(e,delta);
			});
			function _onMousewheel(e,delta){
				_stop($this);
				if(_disableMousewheel($this,e.target)){return;} /* disables mouse-wheel when hovering specific elements */
				var deltaFactor=o.mouseWheel.deltaFactor!=="auto" ? parseInt(o.mouseWheel.deltaFactor) : (oldIE && e.deltaFactor<100) ? 100 : e.deltaFactor || 100,
					dur=o.scrollInertia;
				if(o.axis==="x" || o.mouseWheel.axis==="x"){
					var dir="x",
						px=[Math.round(deltaFactor*d.scrollRatio.x),parseInt(o.mouseWheel.scrollAmount)],
						amount=o.mouseWheel.scrollAmount!=="auto" ? px[1] : px[0]>=mCustomScrollBox.width() ? mCustomScrollBox.width()*0.9 : px[0],
						contentPos=Math.abs($("#mCSB_"+d.idx+"_container")[0].offsetLeft),
						draggerPos=mCSB_dragger[1][0].offsetLeft,
						limit=mCSB_dragger[1].parent().width()-mCSB_dragger[1].width(),
						dlt=o.mouseWheel.axis==="y" ? (e.deltaY || delta) : e.deltaX;
				}else{
					var dir="y",
						px=[Math.round(deltaFactor*d.scrollRatio.y),parseInt(o.mouseWheel.scrollAmount)],
						amount=o.mouseWheel.scrollAmount!=="auto" ? px[1] : px[0]>=mCustomScrollBox.height() ? mCustomScrollBox.height()*0.9 : px[0],
						contentPos=Math.abs($("#mCSB_"+d.idx+"_container")[0].offsetTop),
						draggerPos=mCSB_dragger[0][0].offsetTop,
						limit=mCSB_dragger[0].parent().height()-mCSB_dragger[0].height(),
						dlt=e.deltaY || delta;
				}
				if((dir==="y" && !d.overflowed[0]) || (dir==="x" && !d.overflowed[1])){return;}
				if(o.mouseWheel.invert || e.webkitDirectionInvertedFromDevice){dlt=-dlt;}
				if(o.mouseWheel.normalizeDelta){dlt=dlt<0 ? -1 : 1;}
				if((dlt>0 && draggerPos!==0) || (dlt<0 && draggerPos!==limit) || o.mouseWheel.preventDefault){
					e.stopImmediatePropagation();
					e.preventDefault();
				}
				if(e.deltaFactor<5 && !o.mouseWheel.normalizeDelta){
					//very low deltaFactor values mean some kind of delta acceleration (e.g. osx trackpad), so adjusting scrolling accordingly
					amount=e.deltaFactor; dur=17;
				}
				_scrollTo($this,(contentPos-(dlt*amount)).toString(),{dir:dir,dur:dur});
			}
		},
		/* -------------------- */
		
		
		/* checks if iframe can be accessed */
		_canAccessIFrameCache=new Object(),
		_canAccessIFrame=function(iframe){
		    var result=false,cacheKey=false,html=null;
		    if(iframe===undefined){
				cacheKey="#empty";
		    }else if($(iframe).attr("id")!==undefined){
				cacheKey=$(iframe).attr("id");
		    }
			if(cacheKey!==false && _canAccessIFrameCache[cacheKey]!==undefined){
				return _canAccessIFrameCache[cacheKey];
			}
			if(!iframe){
				try{
					var doc=top.document;
					html=doc.body.innerHTML;
				}catch(err){/* do nothing */}
				result=(html!==null);
			}else{
				try{
					var doc=iframe.contentDocument || iframe.contentWindow.document;
					html=doc.body.innerHTML;
				}catch(err){/* do nothing */}
				result=(html!==null);
			}
			if(cacheKey!==false){_canAccessIFrameCache[cacheKey]=result;}
			return result;
		},
		/* -------------------- */
		
		
		/* switches iframe's pointer-events property (drag, mousewheel etc. over cross-domain iframes) */
		_iframe=function(evt){
			var el=this.find("iframe");
			if(!el.length){return;} /* check if content contains iframes */
			var val=!evt ? "none" : "auto";
			el.css("pointer-events",val); /* for IE11, iframe's display property should not be "block" */
		},
		/* -------------------- */
		
		
		/* disables mouse-wheel when hovering specific elements like select, datalist etc. */
		_disableMousewheel=function(el,target){
			var tag=target.nodeName.toLowerCase(),
				tags=el.data(pluginPfx).opt.mouseWheel.disableOver,
				/* elements that require focus */
				focusTags=["select","textarea"];
			return $.inArray(tag,tags) > -1 && !($.inArray(tag,focusTags) > -1 && !$(target).is(":focus"));
		},
		/* -------------------- */
		
		
		/* 
		DRAGGER RAIL CLICK EVENT
		scrolls content via dragger rail 
		*/
		_draggerRail=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				namespace=pluginPfx+"_"+d.idx,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				mCSB_draggerContainer=$(".mCSB_"+d.idx+"_scrollbar ."+classes[12]),
				clickable;
			mCSB_draggerContainer.bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace,function(e){
				touchActive=true;
				if(!$(e.target).hasClass("mCSB_dragger")){clickable=1;}
			}).bind("touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace,function(e){
				touchActive=false;
			}).bind("click."+namespace,function(e){
				if(!clickable){return;}
				clickable=0;
				if($(e.target).hasClass(classes[12]) || $(e.target).hasClass("mCSB_draggerRail")){
					_stop($this);
					var el=$(this),mCSB_dragger=el.find(".mCSB_dragger");
					if(el.parent(".mCSB_scrollTools_horizontal").length>0){
						if(!d.overflowed[1]){return;}
						var dir="x",
							clickDir=e.pageX>mCSB_dragger.offset().left ? -1 : 1,
							to=Math.abs(mCSB_container[0].offsetLeft)-(clickDir*(wrapper.width()*0.9));
					}else{
						if(!d.overflowed[0]){return;}
						var dir="y",
							clickDir=e.pageY>mCSB_dragger.offset().top ? -1 : 1,
							to=Math.abs(mCSB_container[0].offsetTop)-(clickDir*(wrapper.height()*0.9));
					}
					_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
				}
			});
		},
		/* -------------------- */
		
		
		/* 
		FOCUS EVENT
		scrolls content via element focus (e.g. clicking an input, pressing TAB key etc.)
		*/
		_focus=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent();
			mCSB_container.bind("focusin."+namespace,function(e){
				var el=$(document.activeElement),
					nested=mCSB_container.find(".mCustomScrollBox").length,
					dur=0;
				if(!el.is(o.advanced.autoScrollOnFocus)){return;}
				_stop($this);
				clearTimeout($this[0]._focusTimeout);
				$this[0]._focusTimer=nested ? (dur+17)*nested : 0;
				$this[0]._focusTimeout=setTimeout(function(){
					var	to=[_childPos(el)[0],_childPos(el)[1]],
						contentPos=[mCSB_container[0].offsetTop,mCSB_container[0].offsetLeft],
						isVisible=[
							(contentPos[0]+to[0]>=0 && contentPos[0]+to[0]<wrapper.height()-el.outerHeight(false)),
							(contentPos[1]+to[1]>=0 && contentPos[0]+to[1]<wrapper.width()-el.outerWidth(false))
						],
						overwrite=(o.axis==="yx" && !isVisible[0] && !isVisible[1]) ? "none" : "all";
					if(o.axis!=="x" && !isVisible[0]){
						_scrollTo($this,to[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:overwrite,dur:dur});
					}
					if(o.axis!=="y" && !isVisible[1]){
						_scrollTo($this,to[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:overwrite,dur:dur});
					}
				},$this[0]._focusTimer);
			});
		},
		/* -------------------- */
		
		
		/* sets content wrapper scrollTop/scrollLeft always to 0 */
		_wrapperScroll=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				namespace=pluginPfx+"_"+d.idx,
				wrapper=$("#mCSB_"+d.idx+"_container").parent();
			wrapper.bind("scroll."+namespace,function(e){
				if(wrapper.scrollTop()!==0 || wrapper.scrollLeft()!==0){
					$(".mCSB_"+d.idx+"_scrollbar").css("visibility","hidden"); /* hide scrollbar(s) */
				}
			});
		},
		/* -------------------- */
		
		
		/* 
		BUTTONS EVENTS
		scrolls content via up, down, left and right buttons 
		*/
		_buttons=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
				namespace=pluginPfx+"_"+d.idx,
				sel=".mCSB_"+d.idx+"_scrollbar",
				btn=$(sel+">a");
			btn.bind("contextmenu."+namespace,function(e){
				e.preventDefault(); //prevent right click
			}).bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace+" mouseup."+namespace+" touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace+" mouseout."+namespace+" pointerout."+namespace+" MSPointerOut."+namespace+" click."+namespace,function(e){
				e.preventDefault();
				if(!_mouseBtnLeft(e)){return;} /* left mouse button only */
				var btnClass=$(this).attr("class");
				seq.type=o.scrollButtons.scrollType;
				switch(e.type){
					case "mousedown": case "touchstart": case "pointerdown": case "MSPointerDown":
						if(seq.type==="stepped"){return;}
						touchActive=true;
						d.tweenRunning=false;
						_seq("on",btnClass);
						break;
					case "mouseup": case "touchend": case "pointerup": case "MSPointerUp":
					case "mouseout": case "pointerout": case "MSPointerOut":
						if(seq.type==="stepped"){return;}
						touchActive=false;
						if(seq.dir){_seq("off",btnClass);}
						break;
					case "click":
						if(seq.type!=="stepped" || d.tweenRunning){return;}
						_seq("on",btnClass);
						break;
				}
				function _seq(a,c){
					seq.scrollAmount=o.scrollButtons.scrollAmount;
					_sequentialScroll($this,a,c);
				}
			});
		},
		/* -------------------- */
		
		
		/* 
		KEYBOARD EVENTS
		scrolls content via keyboard 
		Keys: up arrow, down arrow, left arrow, right arrow, PgUp, PgDn, Home, End
		*/
		_keyboard=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
				namespace=pluginPfx+"_"+d.idx,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				editables="input,textarea,select,datalist,keygen,[contenteditable='true']",
				iframe=mCSB_container.find("iframe"),
				events=["blur."+namespace+" keydown."+namespace+" keyup."+namespace];
			if(iframe.length){
				iframe.each(function(){
					$(this).bind("load",function(){
						/* bind events on accessible iframes */
						if(_canAccessIFrame(this)){
							$(this.contentDocument || this.contentWindow.document).bind(events[0],function(e){
								_onKeyboard(e);
							});
						}
					});
				});
			}
			mCustomScrollBox.attr("tabindex","0").bind(events[0],function(e){
				_onKeyboard(e);
			});
			function _onKeyboard(e){
				switch(e.type){
					case "blur":
						if(d.tweenRunning && seq.dir){_seq("off",null);}
						break;
					case "keydown": case "keyup":
						var code=e.keyCode ? e.keyCode : e.which,action="on";
						if((o.axis!=="x" && (code===38 || code===40)) || (o.axis!=="y" && (code===37 || code===39))){
							/* up (38), down (40), left (37), right (39) arrows */
							if(((code===38 || code===40) && !d.overflowed[0]) || ((code===37 || code===39) && !d.overflowed[1])){return;}
							if(e.type==="keyup"){action="off";}
							if(!$(document.activeElement).is(editables)){
								e.preventDefault();
								e.stopImmediatePropagation();
								_seq(action,code);
							}
						}else if(code===33 || code===34){
							/* PgUp (33), PgDn (34) */
							if(d.overflowed[0] || d.overflowed[1]){
								e.preventDefault();
								e.stopImmediatePropagation();
							}
							if(e.type==="keyup"){
								_stop($this);
								var keyboardDir=code===34 ? -1 : 1;
								if(o.axis==="x" || (o.axis==="yx" && d.overflowed[1] && !d.overflowed[0])){
									var dir="x",to=Math.abs(mCSB_container[0].offsetLeft)-(keyboardDir*(wrapper.width()*0.9));
								}else{
									var dir="y",to=Math.abs(mCSB_container[0].offsetTop)-(keyboardDir*(wrapper.height()*0.9));
								}
								_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
							}
						}else if(code===35 || code===36){
							/* End (35), Home (36) */
							if(!$(document.activeElement).is(editables)){
								if(d.overflowed[0] || d.overflowed[1]){
									e.preventDefault();
									e.stopImmediatePropagation();
								}
								if(e.type==="keyup"){
									if(o.axis==="x" || (o.axis==="yx" && d.overflowed[1] && !d.overflowed[0])){
										var dir="x",to=code===35 ? Math.abs(wrapper.width()-mCSB_container.outerWidth(false)) : 0;
									}else{
										var dir="y",to=code===35 ? Math.abs(wrapper.height()-mCSB_container.outerHeight(false)) : 0;
									}
									_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
								}
							}
						}
						break;
				}
				function _seq(a,c){
					seq.type=o.keyboard.scrollType;
					seq.scrollAmount=o.keyboard.scrollAmount;
					if(seq.type==="stepped" && d.tweenRunning){return;}
					_sequentialScroll($this,a,c);
				}
			}
		},
		/* -------------------- */
		
		
		/* scrolls content sequentially (used when scrolling via buttons, keyboard arrows etc.) */
		_sequentialScroll=function(el,action,trigger,e,s){
			var d=el.data(pluginPfx),o=d.opt,seq=d.sequential,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				once=seq.type==="stepped" ? true : false,
				steplessSpeed=o.scrollInertia < 26 ? 26 : o.scrollInertia, /* 26/1.5=17 */
				steppedSpeed=o.scrollInertia < 1 ? 17 : o.scrollInertia;
			switch(action){
				case "on":
					seq.dir=[
						(trigger===classes[16] || trigger===classes[15] || trigger===39 || trigger===37 ? "x" : "y"),
						(trigger===classes[13] || trigger===classes[15] || trigger===38 || trigger===37 ? -1 : 1)
					];
					_stop(el);
					if(_isNumeric(trigger) && seq.type==="stepped"){return;}
					_on(once);
					break;
				case "off":
					_off();
					if(once || (d.tweenRunning && seq.dir)){
						_on(true);
					}
					break;
			}
			
			/* starts sequence */
			function _on(once){
				if(o.snapAmount){seq.scrollAmount=!(o.snapAmount instanceof Array) ? o.snapAmount : seq.dir[0]==="x" ? o.snapAmount[1] : o.snapAmount[0];} /* scrolling snapping */
				var c=seq.type!=="stepped", /* continuous scrolling */
					t=s ? s : !once ? 1000/60 : c ? steplessSpeed/1.5 : steppedSpeed, /* timer */
					m=!once ? 2.5 : c ? 7.5 : 40, /* multiplier */
					contentPos=[Math.abs(mCSB_container[0].offsetTop),Math.abs(mCSB_container[0].offsetLeft)],
					ratio=[d.scrollRatio.y>10 ? 10 : d.scrollRatio.y,d.scrollRatio.x>10 ? 10 : d.scrollRatio.x],
					amount=seq.dir[0]==="x" ? contentPos[1]+(seq.dir[1]*(ratio[1]*m)) : contentPos[0]+(seq.dir[1]*(ratio[0]*m)),
					px=seq.dir[0]==="x" ? contentPos[1]+(seq.dir[1]*parseInt(seq.scrollAmount)) : contentPos[0]+(seq.dir[1]*parseInt(seq.scrollAmount)),
					to=seq.scrollAmount!=="auto" ? px : amount,
					easing=e ? e : !once ? "mcsLinear" : c ? "mcsLinearOut" : "mcsEaseInOut",
					onComplete=!once ? false : true;
				if(once && t<17){
					to=seq.dir[0]==="x" ? contentPos[1] : contentPos[0];
				}
				_scrollTo(el,to.toString(),{dir:seq.dir[0],scrollEasing:easing,dur:t,onComplete:onComplete});
				if(once){
					seq.dir=false;
					return;
				}
				clearTimeout(seq.step);
				seq.step=setTimeout(function(){
					_on();
				},t);
			}
			/* stops sequence */
			function _off(){
				clearTimeout(seq.step);
				_delete(seq,"step");
				_stop(el);
			}
		},
		/* -------------------- */
		
		
		/* returns a yx array from value */
		_arr=function(val){
			var o=$(this).data(pluginPfx).opt,vals=[];
			if(typeof val==="function"){val=val();} /* check if the value is a single anonymous function */
			/* check if value is object or array, its length and create an array with yx values */
			if(!(val instanceof Array)){ /* object value (e.g. {y:"100",x:"100"}, 100 etc.) */
				vals[0]=val.y ? val.y : val.x || o.axis==="x" ? null : val;
				vals[1]=val.x ? val.x : val.y || o.axis==="y" ? null : val;
			}else{ /* array value (e.g. [100,100]) */
				vals=val.length>1 ? [val[0],val[1]] : o.axis==="x" ? [null,val[0]] : [val[0],null];
			}
			/* check if array values are anonymous functions */
			if(typeof vals[0]==="function"){vals[0]=vals[0]();}
			if(typeof vals[1]==="function"){vals[1]=vals[1]();}
			return vals;
		},
		/* -------------------- */
		
		
		/* translates values (e.g. "top", 100, "100px", "#id") to actual scroll-to positions */
		_to=function(val,dir){
			if(val==null || typeof val=="undefined"){return;}
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				t=typeof val;
			if(!dir){dir=o.axis==="x" ? "x" : "y";}
			var contentLength=dir==="x" ? mCSB_container.outerWidth(false)-wrapper.width() : mCSB_container.outerHeight(false)-wrapper.height(),
				contentPos=dir==="x" ? mCSB_container[0].offsetLeft : mCSB_container[0].offsetTop,
				cssProp=dir==="x" ? "left" : "top";
			switch(t){
				case "function": /* this currently is not used. Consider removing it */
					return val();
					break;
				case "object": /* js/jquery object */
					var obj=val.jquery ? val : $(val);
					if(!obj.length){return;}
					return dir==="x" ? _childPos(obj)[1] : _childPos(obj)[0];
					break;
				case "string": case "number":
					if(_isNumeric(val)){ /* numeric value */
						return Math.abs(val);
					}else if(val.indexOf("%")!==-1){ /* percentage value */
						return Math.abs(contentLength*parseInt(val)/100);
					}else if(val.indexOf("-=")!==-1){ /* decrease value */
						return Math.abs(contentPos-parseInt(val.split("-=")[1]));
					}else if(val.indexOf("+=")!==-1){ /* inrease value */
						var p=(contentPos+parseInt(val.split("+=")[1]));
						return p>=0 ? 0 : Math.abs(p);
					}else if(val.indexOf("px")!==-1 && _isNumeric(val.split("px")[0])){ /* pixels string value (e.g. "100px") */
						return Math.abs(val.split("px")[0]);
					}else{
						if(val==="top" || val==="left"){ /* special strings */
							return 0;
						}else if(val==="bottom"){
							return Math.abs(wrapper.height()-mCSB_container.outerHeight(false));
						}else if(val==="right"){
							return Math.abs(wrapper.width()-mCSB_container.outerWidth(false));
						}else if(val==="first" || val==="last"){
							var obj=mCSB_container.find(":"+val);
							return dir==="x" ? _childPos(obj)[1] : _childPos(obj)[0];
						}else{
							if($(val).length){ /* jquery selector */
								return dir==="x" ? _childPos($(val))[1] : _childPos($(val))[0];
							}else{ /* other values (e.g. "100em") */
								mCSB_container.css(cssProp,val);
								methods.update.call(null,$this[0]);
								return;
							}
						}
					}
					break;
			}
		},
		/* -------------------- */
		
		
		/* calls the update method automatically */
		_autoUpdate=function(rem){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(rem){
				/* 
				removes autoUpdate timer 
				usage: _autoUpdate.call(this,"remove");
				*/
				clearTimeout(mCSB_container[0].autoUpdate);
				_delete(mCSB_container[0],"autoUpdate");
				return;
			}
			upd();
			function upd(){
				clearTimeout(mCSB_container[0].autoUpdate);
				if($this.parents("html").length===0){
					/* check element in dom tree */
					$this=null;
					return;
				}
				mCSB_container[0].autoUpdate=setTimeout(function(){
					/* update on specific selector(s) length and size change */
					if(o.advanced.updateOnSelectorChange){
						d.poll.change.n=sizesSum();
						if(d.poll.change.n!==d.poll.change.o){
							d.poll.change.o=d.poll.change.n;
							doUpd(3);
							return;
						}
					}
					/* update on main element and scrollbar size changes */
					if(o.advanced.updateOnContentResize){
						d.poll.size.n=$this[0].scrollHeight+$this[0].scrollWidth+mCSB_container[0].offsetHeight+$this[0].offsetHeight+$this[0].offsetWidth;
						if(d.poll.size.n!==d.poll.size.o){
							d.poll.size.o=d.poll.size.n;
							doUpd(1);
							return;
						}
					}
					/* update on image load */
					if(o.advanced.updateOnImageLoad){
						if(!(o.advanced.updateOnImageLoad==="auto" && o.axis==="y")){ //by default, it doesn't run on vertical content
							d.poll.img.n=mCSB_container.find("img").length;
							if(d.poll.img.n!==d.poll.img.o){
								d.poll.img.o=d.poll.img.n;
								mCSB_container.find("img").each(function(){
									imgLoader(this);
								});
								return;
							}
						}
					}
					if(o.advanced.updateOnSelectorChange || o.advanced.updateOnContentResize || o.advanced.updateOnImageLoad){upd();}
				},o.advanced.autoUpdateTimeout);
			}
			/* a tiny image loader */
			function imgLoader(el){
				if($(el).hasClass(classes[2])){doUpd(); return;}
				var img=new Image();
				function createDelegate(contextObject,delegateMethod){
					return function(){return delegateMethod.apply(contextObject,arguments);}
				}
				function imgOnLoad(){
					this.onload=null;
					$(el).addClass(classes[2]);
					doUpd(2);
				}
				img.onload=createDelegate(img,imgOnLoad);
				img.src=el.src;
			}
			/* returns the total height and width sum of all elements matching the selector */
			function sizesSum(){
				if(o.advanced.updateOnSelectorChange===true){o.advanced.updateOnSelectorChange="*";}
				var total=0,sel=mCSB_container.find(o.advanced.updateOnSelectorChange);
				if(o.advanced.updateOnSelectorChange && sel.length>0){sel.each(function(){total+=this.offsetHeight+this.offsetWidth;});}
				return total;
			}
			/* calls the update method */
			function doUpd(cb){
				clearTimeout(mCSB_container[0].autoUpdate);
				methods.update.call(null,$this[0],cb);
			}
		},
		/* -------------------- */
		
		
		/* snaps scrolling to a multiple of a pixels number */
		_snapAmount=function(to,amount,offset){
			return (Math.round(to/amount)*amount-offset); 
		},
		/* -------------------- */
		
		
		/* stops content and scrollbar animations */
		_stop=function(el){
			var d=el.data(pluginPfx),
				sel=$("#mCSB_"+d.idx+"_container,#mCSB_"+d.idx+"_container_wrapper,#mCSB_"+d.idx+"_dragger_vertical,#mCSB_"+d.idx+"_dragger_horizontal");
			sel.each(function(){
				_stopTween.call(this);
			});
		},
		/* -------------------- */
		
		
		/* 
		ANIMATES CONTENT 
		This is where the actual scrolling happens
		*/
		_scrollTo=function(el,to,options){
			var d=el.data(pluginPfx),o=d.opt,
				defaults={
					trigger:"internal",
					dir:"y",
					scrollEasing:"mcsEaseOut",
					drag:false,
					dur:o.scrollInertia,
					overwrite:"all",
					callbacks:true,
					onStart:true,
					onUpdate:true,
					onComplete:true
				},
				options=$.extend(defaults,options),
				dur=[options.dur,(options.drag ? 0 : options.dur)],
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				totalScrollOffsets=o.callbacks.onTotalScrollOffset ? _arr.call(el,o.callbacks.onTotalScrollOffset) : [0,0],
				totalScrollBackOffsets=o.callbacks.onTotalScrollBackOffset ? _arr.call(el,o.callbacks.onTotalScrollBackOffset) : [0,0];
			d.trigger=options.trigger;
			if(wrapper.scrollTop()!==0 || wrapper.scrollLeft()!==0){ /* always reset scrollTop/Left */
				$(".mCSB_"+d.idx+"_scrollbar").css("visibility","visible");
				wrapper.scrollTop(0).scrollLeft(0);
			}
			if(to==="_resetY" && !d.contentReset.y){
				/* callbacks: onOverflowYNone */
				if(_cb("onOverflowYNone")){o.callbacks.onOverflowYNone.call(el[0]);}
				d.contentReset.y=1;
			}
			if(to==="_resetX" && !d.contentReset.x){
				/* callbacks: onOverflowXNone */
				if(_cb("onOverflowXNone")){o.callbacks.onOverflowXNone.call(el[0]);}
				d.contentReset.x=1;
			}
			if(to==="_resetY" || to==="_resetX"){return;}
			if((d.contentReset.y || !el[0].mcs) && d.overflowed[0]){
				/* callbacks: onOverflowY */
				if(_cb("onOverflowY")){o.callbacks.onOverflowY.call(el[0]);}
				d.contentReset.x=null;
			}
			if((d.contentReset.x || !el[0].mcs) && d.overflowed[1]){
				/* callbacks: onOverflowX */
				if(_cb("onOverflowX")){o.callbacks.onOverflowX.call(el[0]);}
				d.contentReset.x=null;
			}
			if(o.snapAmount){ /* scrolling snapping */
				var snapAmount=!(o.snapAmount instanceof Array) ? o.snapAmount : options.dir==="x" ? o.snapAmount[1] : o.snapAmount[0];
				to=_snapAmount(to,snapAmount,o.snapOffset);
			}
			switch(options.dir){
				case "x":
					var mCSB_dragger=$("#mCSB_"+d.idx+"_dragger_horizontal"),
						property="left",
						contentPos=mCSB_container[0].offsetLeft,
						limit=[
							mCustomScrollBox.width()-mCSB_container.outerWidth(false),
							mCSB_dragger.parent().width()-mCSB_dragger.width()
						],
						scrollTo=[to,to===0 ? 0 : (to/d.scrollRatio.x)],
						tso=totalScrollOffsets[1],
						tsbo=totalScrollBackOffsets[1],
						totalScrollOffset=tso>0 ? tso/d.scrollRatio.x : 0,
						totalScrollBackOffset=tsbo>0 ? tsbo/d.scrollRatio.x : 0;
					break;
				case "y":
					var mCSB_dragger=$("#mCSB_"+d.idx+"_dragger_vertical"),
						property="top",
						contentPos=mCSB_container[0].offsetTop,
						limit=[
							mCustomScrollBox.height()-mCSB_container.outerHeight(false),
							mCSB_dragger.parent().height()-mCSB_dragger.height()
						],
						scrollTo=[to,to===0 ? 0 : (to/d.scrollRatio.y)],
						tso=totalScrollOffsets[0],
						tsbo=totalScrollBackOffsets[0],
						totalScrollOffset=tso>0 ? tso/d.scrollRatio.y : 0,
						totalScrollBackOffset=tsbo>0 ? tsbo/d.scrollRatio.y : 0;
					break;
			}
			if(scrollTo[1]<0 || (scrollTo[0]===0 && scrollTo[1]===0)){
				scrollTo=[0,0];
			}else if(scrollTo[1]>=limit[1]){
				scrollTo=[limit[0],limit[1]];
			}else{
				scrollTo[0]=-scrollTo[0];
			}
			if(!el[0].mcs){
				_mcs();  /* init mcs object (once) to make it available before callbacks */
				if(_cb("onInit")){o.callbacks.onInit.call(el[0]);} /* callbacks: onInit */
			}
			clearTimeout(mCSB_container[0].onCompleteTimeout);
			_tweenTo(mCSB_dragger[0],property,Math.round(scrollTo[1]),dur[1],options.scrollEasing);
			if(!d.tweenRunning && ((contentPos===0 && scrollTo[0]>=0) || (contentPos===limit[0] && scrollTo[0]<=limit[0]))){return;}
			_tweenTo(mCSB_container[0],property,Math.round(scrollTo[0]),dur[0],options.scrollEasing,options.overwrite,{
				onStart:function(){
					if(options.callbacks && options.onStart && !d.tweenRunning){
						/* callbacks: onScrollStart */
						if(_cb("onScrollStart")){_mcs(); o.callbacks.onScrollStart.call(el[0]);}
						d.tweenRunning=true;
						_onDragClasses(mCSB_dragger);
						d.cbOffsets=_cbOffsets();
					}
				},onUpdate:function(){
					if(options.callbacks && options.onUpdate){
						/* callbacks: whileScrolling */
						if(_cb("whileScrolling")){_mcs(); o.callbacks.whileScrolling.call(el[0]);}
					}
				},onComplete:function(){
					if(options.callbacks && options.onComplete){
						if(o.axis==="yx"){clearTimeout(mCSB_container[0].onCompleteTimeout);}
						var t=mCSB_container[0].idleTimer || 0;
						mCSB_container[0].onCompleteTimeout=setTimeout(function(){
							/* callbacks: onScroll, onTotalScroll, onTotalScrollBack */
							if(_cb("onScroll")){_mcs(); o.callbacks.onScroll.call(el[0]);}
							if(_cb("onTotalScroll") && scrollTo[1]>=limit[1]-totalScrollOffset && d.cbOffsets[0]){_mcs(); o.callbacks.onTotalScroll.call(el[0]);}
							if(_cb("onTotalScrollBack") && scrollTo[1]<=totalScrollBackOffset && d.cbOffsets[1]){_mcs(); o.callbacks.onTotalScrollBack.call(el[0]);}
							d.tweenRunning=false;
							mCSB_container[0].idleTimer=0;
							_onDragClasses(mCSB_dragger,"hide");
						},t);
					}
				}
			});
			/* checks if callback function exists */
			function _cb(cb){
				return d && o.callbacks[cb] && typeof o.callbacks[cb]==="function";
			}
			/* checks whether callback offsets always trigger */
			function _cbOffsets(){
				return [o.callbacks.alwaysTriggerOffsets || contentPos>=limit[0]+tso,o.callbacks.alwaysTriggerOffsets || contentPos<=-tsbo];
			}
			/* 
			populates object with useful values for the user 
			values: 
				content: this.mcs.content
				content top position: this.mcs.top 
				content left position: this.mcs.left 
				dragger top position: this.mcs.draggerTop 
				dragger left position: this.mcs.draggerLeft 
				scrolling y percentage: this.mcs.topPct 
				scrolling x percentage: this.mcs.leftPct 
				scrolling direction: this.mcs.direction
			*/
			function _mcs(){
				var cp=[mCSB_container[0].offsetTop,mCSB_container[0].offsetLeft], /* content position */
					dp=[mCSB_dragger[0].offsetTop,mCSB_dragger[0].offsetLeft], /* dragger position */
					cl=[mCSB_container.outerHeight(false),mCSB_container.outerWidth(false)], /* content length */
					pl=[mCustomScrollBox.height(),mCustomScrollBox.width()]; /* content parent length */
				el[0].mcs={
					content:mCSB_container, /* original content wrapper as jquery object */
					top:cp[0],left:cp[1],draggerTop:dp[0],draggerLeft:dp[1],
					topPct:Math.round((100*Math.abs(cp[0]))/(Math.abs(cl[0])-pl[0])),leftPct:Math.round((100*Math.abs(cp[1]))/(Math.abs(cl[1])-pl[1])),
					direction:options.dir
				};
				/* 
				this refers to the original element containing the scrollbar(s)
				usage: this.mcs.top, this.mcs.leftPct etc. 
				*/
			}
		},
		/* -------------------- */
		
		
		/* 
		CUSTOM JAVASCRIPT ANIMATION TWEEN 
		Lighter and faster than jquery animate() and css transitions 
		Animates top/left properties and includes easings 
		*/
		_tweenTo=function(el,prop,to,duration,easing,overwrite,callbacks){
			if(!el._mTween){el._mTween={top:{},left:{}};}
			var callbacks=callbacks || {},
				onStart=callbacks.onStart || function(){},onUpdate=callbacks.onUpdate || function(){},onComplete=callbacks.onComplete || function(){},
				startTime=_getTime(),_delay,progress=0,from=el.offsetTop,elStyle=el.style,_request,tobj=el._mTween[prop];
			if(prop==="left"){from=el.offsetLeft;}
			var diff=to-from;
			tobj.stop=0;
			if(overwrite!=="none"){_cancelTween();}
			_startTween();
			function _step(){
				if(tobj.stop){return;}
				if(!progress){onStart.call();}
				progress=_getTime()-startTime;
				_tween();
				if(progress>=tobj.time){
					tobj.time=(progress>tobj.time) ? progress+_delay-(progress-tobj.time) : progress+_delay-1;
					if(tobj.time<progress+1){tobj.time=progress+1;}
				}
				if(tobj.time<duration){tobj.id=_request(_step);}else{onComplete.call();}
			}
			function _tween(){
				if(duration>0){
					tobj.currVal=_ease(tobj.time,from,diff,duration,easing);
					elStyle[prop]=Math.round(tobj.currVal)+"px";
				}else{
					elStyle[prop]=to+"px";
				}
				onUpdate.call();
			}
			function _startTween(){
				_delay=1000/60;
				tobj.time=progress+_delay;
				_request=(!window.requestAnimationFrame) ? function(f){_tween(); return setTimeout(f,0.01);} : window.requestAnimationFrame;
				tobj.id=_request(_step);
			}
			function _cancelTween(){
				if(tobj.id==null){return;}
				if(!window.requestAnimationFrame){clearTimeout(tobj.id);
				}else{window.cancelAnimationFrame(tobj.id);}
				tobj.id=null;
			}
			function _ease(t,b,c,d,type){
				switch(type){
					case "linear": case "mcsLinear":
						return c*t/d + b;
						break;
					case "mcsLinearOut":
						t/=d; t--; return c * Math.sqrt(1 - t*t) + b;
						break;
					case "easeInOutSmooth":
						t/=d/2;
						if(t<1) return c/2*t*t + b;
						t--;
						return -c/2 * (t*(t-2) - 1) + b;
						break;
					case "easeInOutStrong":
						t/=d/2;
						if(t<1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
						t--;
						return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
						break;
					case "easeInOut": case "mcsEaseInOut":
						t/=d/2;
						if(t<1) return c/2*t*t*t + b;
						t-=2;
						return c/2*(t*t*t + 2) + b;
						break;
					case "easeOutSmooth":
						t/=d; t--;
						return -c * (t*t*t*t - 1) + b;
						break;
					case "easeOutStrong":
						return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
						break;
					case "easeOut": case "mcsEaseOut": default:
						var ts=(t/=d)*t,tc=ts*t;
						return b+c*(0.499999999999997*tc*ts + -2.5*ts*ts + 5.5*tc + -6.5*ts + 4*t);
				}
			}
		},
		/* -------------------- */
		
		
		/* returns current time */
		_getTime=function(){
			if(window.performance && window.performance.now){
				return window.performance.now();
			}else{
				if(window.performance && window.performance.webkitNow){
					return window.performance.webkitNow();
				}else{
					if(Date.now){return Date.now();}else{return new Date().getTime();}
				}
			}
		},
		/* -------------------- */
		
		
		/* stops a tween */
		_stopTween=function(){
			var el=this;
			if(!el._mTween){el._mTween={top:{},left:{}};}
			var props=["top","left"];
			for(var i=0; i<props.length; i++){
				var prop=props[i];
				if(el._mTween[prop].id){
					if(!window.requestAnimationFrame){clearTimeout(el._mTween[prop].id);
					}else{window.cancelAnimationFrame(el._mTween[prop].id);}
					el._mTween[prop].id=null;
					el._mTween[prop].stop=1;
				}
			}
		},
		/* -------------------- */
		
		
		/* deletes a property (avoiding the exception thrown by IE) */
		_delete=function(c,m){
			try{delete c[m];}catch(e){c[m]=null;}
		},
		/* -------------------- */
		
		
		/* detects left mouse button */
		_mouseBtnLeft=function(e){
			return !(e.which && e.which!==1);
		},
		/* -------------------- */
		
		
		/* detects if pointer type event is touch */
		_pointerTouch=function(e){
			var t=e.originalEvent.pointerType;
			return !(t && t!=="touch" && t!==2);
		},
		/* -------------------- */
		
		
		/* checks if value is numeric */
		_isNumeric=function(val){
			return !isNaN(parseFloat(val)) && isFinite(val);
		},
		/* -------------------- */
		
		
		/* returns element position according to content */
		_childPos=function(el){
			var p=el.parents(".mCSB_container");
			return [el.offset().top-p.offset().top,el.offset().left-p.offset().left];
		},
		/* -------------------- */
		
		
		/* checks if browser tab is hidden/inactive via Page Visibility API */
		_isTabHidden=function(){
			var prop=_getHiddenProp();
			if(!prop) return false;
			return document[prop];
			function _getHiddenProp(){
				var pfx=["webkit","moz","ms","o"];
				if("hidden" in document) return "hidden"; //natively supported
				for(var i=0; i<pfx.length; i++){ //prefixed
				    if((pfx[i]+"Hidden") in document) 
				        return pfx[i]+"Hidden";
				}
				return null; //not supported
			}
		};
		/* -------------------- */
		
	
	
	
	
	/* 
	----------------------------------------
	PLUGIN SETUP 
	----------------------------------------
	*/
	
	/* plugin constructor functions */
	$.fn[pluginNS]=function(method){ /* usage: $(selector).mCustomScrollbar(); */
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};
	$[pluginNS]=function(method){ /* usage: $.mCustomScrollbar(); */
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};
	
	/* 
	allow setting plugin default options. 
	usage: $.mCustomScrollbar.defaults.scrollInertia=500; 
	to apply any changed default options on default selectors (below), use inside document ready fn 
	e.g.: $(document).ready(function(){ $.mCustomScrollbar.defaults.scrollInertia=500; });
	*/
	$[pluginNS].defaults=defaults;
	
	/* 
	add window object (window.mCustomScrollbar) 
	usage: if(window.mCustomScrollbar){console.log("custom scrollbar plugin loaded");}
	*/
	window[pluginNS]=true;
	
	$(window).bind("load",function(){
		
		$(defaultSelector)[pluginNS](); /* add scrollbars automatically on default selector */
		
		/* extend jQuery expressions */
		$.extend($.expr[":"],{
			/* checks if element is within scrollable viewport */
			mcsInView:$.expr[":"].mcsInView || function(el){
				var $el=$(el),content=$el.parents(".mCSB_container"),wrapper,cPos;
				if(!content.length){return;}
				wrapper=content.parent();
				cPos=[content[0].offsetTop,content[0].offsetLeft];
				return 	cPos[0]+_childPos($el)[0]>=0 && cPos[0]+_childPos($el)[0]<wrapper.height()-$el.outerHeight(false) && 
						cPos[1]+_childPos($el)[1]>=0 && cPos[1]+_childPos($el)[1]<wrapper.width()-$el.outerWidth(false);
			},
			/* checks if element or part of element is in view of scrollable viewport */
			mcsInSight:$.expr[":"].mcsInSight || function(el,i,m){
				var $el=$(el),elD,content=$el.parents(".mCSB_container"),wrapperView,pos,wrapperViewPct,
					pctVals=m[3]==="exact" ? [[1,0],[1,0]] : [[0.9,0.1],[0.6,0.4]];
				if(!content.length){return;}
				elD=[$el.outerHeight(false),$el.outerWidth(false)];
				pos=[content[0].offsetTop+_childPos($el)[0],content[0].offsetLeft+_childPos($el)[1]];
				wrapperView=[content.parent()[0].offsetHeight,content.parent()[0].offsetWidth];
				wrapperViewPct=[elD[0]<wrapperView[0] ? pctVals[0] : pctVals[1],elD[1]<wrapperView[1] ? pctVals[0] : pctVals[1]];
				return 	pos[0]-(wrapperView[0]*wrapperViewPct[0][0])<0 && pos[0]+elD[0]-(wrapperView[0]*wrapperViewPct[0][1])>=0 && 
						pos[1]-(wrapperView[1]*wrapperViewPct[1][0])<0 && pos[1]+elD[1]-(wrapperView[1]*wrapperViewPct[1][1])>=0;
			},
			/* checks if element is overflowed having visible scrollbar(s) */
			mcsOverflow:$.expr[":"].mcsOverflow || function(el){
				var d=$(el).data(pluginPfx);
				if(!d){return;}
				return d.overflowed[0] || d.overflowed[1];
			}
		});
	
	});

}))}));
function mdmWebsiteSearch() {
    return new Promise(function (resolve, reject) {
            apiCall(websiteSearchApiUrl, 'GET').then(function (response) {
            var data = JSON.parse(response)
            responseData = data.Master;
            var sortedData = data.Master.sort(function (a, b) {
                return a.priority - b.priority;
            });
            resolve(sortedData);

        }).catch(function (error) {
            reject(error);
        })
    });
}

function aemWebsiteSearch(data) {
    return new Promise(function (resolve, reject) {
        apiCall('/bin/service/search', 'POST', data).then(function (response) {
            var data = JSON.parse(response);
            resolve(data);

        }).catch(function (error) {
            reject(error);
        })
    });
}




function apiCall(url, method, data) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    reject(this.response);
                }
            }
        }
        xhr.open(method, url);
        xhr.send(data);
    })
}

(function () {
    $(document).ready(function () {
        var fullWindowHeight = window.innerHeight;
        var keyboardIsProbablyOpen = false;
        window.addEventListener("resize", function () {
            if (window.innerHeight == fullWindowHeight) {
                $('.mCustomScrollbar').mCustomScrollbar('destroy');
                if (mdmSearchData.length > 2) {
                document.querySelector('.list-item-bars').style.padding = "0px 20px 0px 20px";
                                    $(".list-item-bars ul").mCustomScrollbar({
                                        axis: "x",
                                        scrollButtons: {
                                            enable: true,
                                            scrollSpeed: 50,
                                            scrollAmount: 50,
                                        },
                                        scrollbarPosition: "outside",
                                    });
                                } else {
                                    $(".list-item-bars ul").mCustomScrollbar({
                                        axis: "x",
                                        scrollButtons: {
                                            enable: false,
                                        },
                                        scrollbarPosition: "outside",
                                    });
                                }
            } else if (window.innerHeight < fullWindowHeight * 0.9) {
                keyboardIsProbablyOpen = true;
            }
        });
    })

    var responseData;
    var mdmSearchData;
    var searchIconClick = document.querySelectorAll("[data-id='searchIconClick']");
    searchIconClick.forEach(function (ele) {
        ele.addEventListener('click', function () {
            closeAllLists();
            $('.page-loader').removeClass('hidden');
            mdmWebsiteSearch().then(function (response) {
                $('.page-loader').addClass('hidden');
                mdmSearchData = response;
            }).catch(function (error) {
                console.error("ERROR!!!", error);
            });
            changeEvents();
        });

    })

    function changeEvents() {
        var searchInput = document.getElementById('searchinput');
        searchInput.addEventListener('input', function (event) {
            if (event.currentTarget.value != '') {

                var filterData = [];
                var filterData = mdmSearchData.filter(function (value) {
                    return value.category.toLowerCase().startsWith(event.currentTarget.value.toLowerCase())
                });
                if (filterData.length == 0) {
                    filterData = mdmSearchData.filter(function (value) {
                       return value.title.toLowerCase().search(event.currentTarget.value.toLowerCase()) !== -1
                    });
                }

                var formData = new FormData();
                formData.append('q', event.currentTarget.value);
                var currentElement = event.currentTarget
                aemWebsiteSearch(formData).then(function (response) {
                    closeAllLists();
                    if (searchInput.value !== "") {
                        reanderSearchResults(filterData, response, currentElement);
                    }
                })
            }
            else { closeAllLists(); }
        });
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var mdmSearchClose = document.querySelector("#search-group-list-id");
        if (mdmSearchClose) {
            mdmSearchClose.parentNode.removeChild(mdmSearchClose);
        }

        var aemSearchClose = document.querySelector("#tt-menu-id");
        if (aemSearchClose) {
            aemSearchClose.parentNode.removeChild(aemSearchClose);
        }
    }
})()
function reanderSearchResults(mdmSearchData, data, currentElement) {
    mdmSearch(mdmSearchData, currentElement);
    aemSearch(data, currentElement);
}
function mdmSearch(mdmSearchData, currentElement) {
    if (mdmSearchData.length > 0) {
        var div = document.createElement("DIV")
        div.setAttribute("class", "search-group-list");
        div.setAttribute("id", "search-group-list-id");
        var sliderdiv = document.createElement("DIV");
        var val = currentElement.value;
        sliderdiv.setAttribute("class", "list-item-bars");

        var sliderul = document.createElement("ul");
        sliderul.setAttribute("class", "mCustomScrollbar");

        div.appendChild(sliderdiv);
        sliderdiv.appendChild(sliderul);
        currentElement.parentNode.parentNode.parentNode.appendChild(div);

        for (i = 0; i < mdmSearchData.length; i++) {
            sliderli = document.createElement("li");
            sliderli.innerHTML = `<a href="${mdmSearchData[i].url}" target="_blank" class="list-item">${mdmSearchData[i].title}</a>`;
            sliderul.appendChild(sliderli);
        }

        // 26-05-2021
        $('.mCustomScrollbar').mCustomScrollbar('destroy');
        if (mdmSearchData.length > 2) {
            if ($(window).width() < 768) {
                $(".mCustomScrollbar").mCustomScrollbar({
                    axis: "x",
                    scrollButtons: {
                        enable: true,
                    },
                    scrollbarPosition: "outside",
                });
            } else {
                $(".mCustomScrollbar").mCustomScrollbar({
                    axis: "x",
                    scrollButtons: {
                        enable: true,
                        scrollSpeed: 50,
                        scrollAmount: 50,
                    },
                    scrollbarPosition: "outside",
                });
            }
        } else {
            document.querySelector('.list-item-bars').style.padding = "0px";
            if ($(window).width() < 768) {
                $(".mCustomScrollbar").mCustomScrollbar({
                    axis: "x",
                    scrollButtons: {
                        enable: false
                    },
                    scrollbarPosition: "outside",
                });
            } else {
                $(".mCustomScrollbar").mCustomScrollbar({
                    axis: "x",
                    scrollButtons: {
                        enable: false
                    },
                    scrollbarPosition: "outside",
                });
            }
        }

        // 26-05-2021
    }

}

function aemSearch(data, currentElement) {

    if (data != null && data.results != undefined) {
        if (data.results.length != 0) {
            var result = [];
            var desc = [];
            for (var key in data.results) {
                if (data.results.hasOwnProperty(key)) {
                    var val = data.results[key];
                    result.push({ key: val[1], val: val[0] })
                    desc.push(val[2])
                }
            }
            arr = result
            var searchResultItemParentWrapper, searchResultItem, searchRequestValue = currentElement.value.toLowerCase();

            var aemFilterData = arr.filter(function (valueAem) {
                return valueAem.key.toLowerCase().search(searchRequestValue.toLowerCase()) !== -1
            });

            /*close any already open lists of autocompleted values*/
            if (!searchRequestValue) {
                return false;
            }
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            searchResultItemParentWrapper = document.createElement("DIV");
            var searchResultItemParent = document.createElement("DIV");

            searchResultItemParentWrapper.setAttribute("class", "tt-menu tt-open");
            searchResultItemParentWrapper.setAttribute("id", "tt-menu-id");
            searchResultItemParentWrapper.setAttribute("style", "position: absolute; top: 100.8px; left: 0px; z-index: 100; display: block;")
            searchResultItemParent.setAttribute("class", "tt-dataset tt-dataset-states");

            /*append the DIV element as a child of the autocomplete container:*/
            currentElement.parentNode.appendChild(searchResultItemParentWrapper);
            searchResultItemParentWrapper.appendChild(searchResultItemParent);
            /*for each item in the array...*/
            for (var i = 0; i < aemFilterData.length; i++) {
                /*check if the item starts with the same letters as the text field value:*/

                div = document.createElement('div');
                div.setAttribute("class", "tt-suggestion tt-selectable");

                searchResultItem = document.createElement('a');

                var aemFilterDataKeyLowerCase = aemFilterData[i].key.toLowerCase();
                searchResultItem.innerHTML += `${aemFilterData[i].key.substring(0, aemFilterDataKeyLowerCase.indexOf(searchRequestValue))}<strong class="tt-highlight">${aemFilterData[i].key.substring(aemFilterDataKeyLowerCase.indexOf(searchRequestValue), aemFilterDataKeyLowerCase.indexOf(searchRequestValue) + searchRequestValue.length)}</strong>${aemFilterData[i].key.substring(aemFilterDataKeyLowerCase.indexOf(searchRequestValue) + searchRequestValue.length)}`

                searchResultItem.setAttribute('href', aemFilterData[i].val);
                searchResultItem.setAttribute('target', "_blank");
                searchResultItem.setAttribute('style', "color:#333");
                div.appendChild(searchResultItem)
                searchResultItemParent.appendChild(div);

            }

        }
    }

}
/**
 * BANNER COMPONENT - START
 */

function slickSwipe() {
    var arrow_pos = $('.slick-active .js-mob-arrow-position').outerHeight();
    $('.bannerBox .slick-prev, .bannerBox .slick-next').css('bottom', arrow_pos);
}

$(document).ready(function () {
    var $status = $('.banner-paging-info');
    var $slickElement = $('.banner-carousel');
    if ($(".bannerimage").length == 1) {
        $status.css('display', 'none');
    } 
    else{
        $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text(i + '/' + slick.slideCount);
        });

        $slickElement.on('init', function (event, slick, currentSlide, nextSlide) {
            if (slick.slideCount == '1') {
                $status.css('display', 'none');
            } else {
                $status.css('display', 'flex');
            }
        });
    }

    $slickElement.slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false
            }
        }]
    });

    $slickElement.on('swipe', function (event, slick, direction) {
        slickSwipe()
    });

    $slickElement.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        slickSwipe()
    });

    setTimeout(function(){
        if($('.banner-carousel').hasClass('slick-initialized')){
            $('.slick-slider').removeClass('banner-height');
        }
    }, 2000)

     setTimeout(function(){
        if($('.banner-carousel').hasClass('banner-heightinner')){
            $('.slick-slider').removeClass('banner-heightinner');
        }
    }, 2000);
});

// window resize
$(window).on("resize", function () {
    // resize slick slider on window resize
    if ($('.banner-carousel')[0]) {
        $('.banner-carousel')[0].slick.refresh();
        slickSwipe()
    }
    if ($('.slick-slider')[0]) {
        $('.slick-slider')[0].slick.refresh();
    }

});

$(window).on("load", function () {
    slickSwipe();
});



$(".bannercontent .btn-apply ").on("click",function(event){
  var cat = $(".sub-headers.active-state").text().toLowerCase().trim();  
  var pname = jsHelper.getPageNameForGTM().toLowerCase();
  var action = $(event.target).siblings("h6").text().toLowerCase().trim();
  var label = $(event.target).text().toLowerCase();  
         dataLayer.push({
                'event':'event homepage',
                'category':'carousel',
                'action':action,
                'label': label,
                'site section':cat+' | '+pname,
      });
})
$(".show-more-div").on("click", function(){
  		$(".complete-products").slideDown();
  		$(".show-more").hide();
  		$(".product-hidden").show();
  		$('html, body').animate({
			scrollTop: $("#initial-products-scroll").offset().top
		}, 500);
});

$(".show-less-div").on("click", function(){
	$('html, body').animate({
		scrollTop: $("#initial-products-scroll").offset().top
	}, 500);
 	$(".complete-products").slideUp(function(){
 		$(".product-hidden").hide();
  	    $(".show-more").show();
     	
 	});
  	
});

//-----------Explore-Our-Products-Start--------//
$(".initial-products .product-col .product-tile,.initial-products .show-more-div,.complete-products .product-col .product-tile,.complete-products .show-less-div ").on("click",function(event){
    var label = $(event.target).find(".show-more,.show-less").text().toLowerCase().trim();
    var cat = $(".sub-headers.active-state").text().toLowerCase().trim();
    var pname = jsHelper.getPageNameForGTM().toLowerCase();
    if(label=="")
    {  label=$(event.target).text().toLowerCase().trim();
         if(label=="")
         {
            label = $(event.target).parent(".product-image").siblings(".product-type").text().toLowerCase().trim();

          }
     }
    dataLayer.push({
      'event':'event homepage', 
      'category':'explore our products',
      'action':'cta',
      'label': label,
      'site section':cat+' | '+pname,
    })
   })
//-----------Explore-Our-Products-End--------//
var verifyToken = false;

function formValidateHomePage(ctx) {
  var valid = true;
  $(ctx).parents('.pre-approved-form-group').siblings().find('.in-text').each(function () {
    if(!$(this).hasClass("otp-number")){
      $(this).siblings('.error-msg').hide();
    }
    if ($(this).hasClass('only-alpha-input')) {
      var reg = /^[A-Za-z]+$/;
      if (!reg.test($(this).val())) {
        valid = false;
        $(this).siblings('.error-msg').show();
      }
    }
    if ($(this).hasClass('mobile')) {
      var reg = /^[4-9][0-9]{9}$/;
      if ((!reg.test($(this).val())) && ($(this).val().length != 10)) {
        valid = false;
        $(this).siblings('.error-msg').show();
        $(this).siblings('.otp-mobile-text').hide();
      }
    }
    if ($(this).hasClass('otp-number')) {
      var reg = /^[0-9]{4}$/;
      if (!reg.test($(this).val())) {
        valid = false;
        if ($(this).val() == "") {
          $(this).siblings(' .error-text').show();
        }
        else {
          $(this).siblings('.error-msg').show();
        }
      }
    }
  });
  return valid;
}


$(document).ready(function () {
  $('form#preApprovedOfferForm').get(0).reset();
  $('.pre-approved-submit').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
  if(failres!=1){
    if (formValidateHomePage(this)) {
      preApprovedFormValidOffers();
      gtmPreapprovedFom();
    }else{
        preApprovedError(this)
    }
  } 
  });

  $('.pre-approved-form .pre-approved-otp').on('click', function () {
    var phoneNumber = $(this).parents('.pre-approved-form-group').siblings().find('.mobile').val();
    var reg = /^[4-9][0-9]{9}$/;

    if (phoneNumber.length == 10 && reg.test(phoneNumber)) {
      generateOTP(phoneNumber);
      $(this).parent().hide();
      $(this).parent().siblings('.otp-hide').show();
      $(this).parents('.pre-approved-form-group').siblings().find('.mobile').siblings('.error-msg').hide();
      $(this).parents('.pre-approved-form-group').siblings().find('.mobile').siblings('.otp-mobile-text').show();
    }
    else {
      $(this).parents('.pre-approved-form-group').siblings().find('.mobile').siblings('.error-msg').show();
      $(this).parents('.pre-approved-form-group').siblings().find('.mobile').siblings('.otp-mobile-text').hide();
    }
  });

  $('.pre-approved-form .mobile').on('keyup', function () {
    if ($(this).parents('.pre-approved-form-group').siblings('.otp-hide').css('display') == 'block') {
      $(this).parents('.pre-approved-form-group').siblings('.otp-hide').find('.error-msg').hide();
      $(this).parents('.pre-approved-form-group').siblings('.otp-hide').find('.otp-verified-icon').hide();
      $(this).parents('.pre-approved-form-group').siblings('.otp-hide').find('.otp-num').val('');
      $(this).parents('.pre-approved-form-group').siblings('.otp-hide').hide();
      $(this).parents('.pre-approved-form-group').siblings('.approved-otp').show();
    }
  });

  $('.pre-approved-form .otp-number').on('keyup', function () {
    var verified = false;
    if ($(this).val().length == 4) {
        if(!verifyToken){
            verified = verifyOTP();
            verifyToken = true;
        }
      if (verified) {
        $(this).siblings('.error-msg').html("Verified");
        $(this).siblings('.error-msg').show();
        $(this).siblings('.error-msg').css({ 'color': "green" });
        $(this).siblings('.otp-verified-icon').show();
      }
      else if(!verified){
        $(this).siblings('.error-msg').html("Invalid OTP");
        $(this).siblings('.error-msg').show();
        $(this).siblings('.error-msg').css({ 'color': "red" });
        $(this).siblings('.otp-verified-icon').hide();
      }
    }
    else {
      verifyToken = false;
      $(this).siblings('.error-msg').hide();
      $(this).siblings('.otp-verified-icon').hide();
    }
  });

  $(".pre-approved-form .resend-otp-text").on("click", function () {
    var phoneNumber = $("#mobileNumber").val();
    generateOTP(phoneNumber);

  });
});

function generateOTP(phoneNumber) {
    var url = globalConfig.apiCallRetailConfig.generateOTPCall.contextPath + "." + globalConfig.apiCallRetailConfig.generateOTPCall.selector + ".json";
    var data = {};
    data.otpMobile = phoneNumber;
    gtmsendotp();
    //  window.toggleLoader(true, "#quickLoader");
    $('.page-loader').removeClass('hidden');

    $.ajax({
        type: "POST",
        url: url,
        data: data,
        async: true,
    })
        .done(function (data) {
            //      window.toggleLoader(false, "#quickLoader");
            $('.page-loader').addClass('hidden');

            responseData = (typeof (data) !== "object") ? JSON.parse(data) : (data);
            var analyticsData = {};
            var formData = formdata("form#preApprovedOfferForm");
            analyticsData.mobileNo = formData.mobileNumber;

            analyticsData.ctaButtonSource = analyticsPageName + ":preApprovedOffersform"
            preApprovedOffersAnalytics(analyticsData, "pre_approved_offers_start")
            //console.log(response)
            otpRefNum = responseData.otpRefNo;

        });

}
var failres;
function verifyOTP() {
    //  window.toggleLoader(true, "#quickLoader");
    $('.page-loader').removeClass('hidden');

    var responseStatus;
    var url = globalConfig.apiCallRetailConfig.verifyOTPCall.contextPath + "." + globalConfig.apiCallRetailConfig.verifyOTPCall.selector + ".json";
    var data = {};
    data.otpMobile = $(".pre-approved-form .mobile").val();
    data.otpRefNumber = otpRefNum;
    data.otpValue = $(".pre-approved-form .otp-number").val();
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        async: false,
    })
        .done(function (data) {
            //console.log(data);
            //     window.toggleLoader(false, "#quickLoader");
            $('.page-loader').addClass('hidden');

            var responseData = (typeof (data) !== "object") ? JSON.parse(data) : (data);
            responseStatus = responseData.retStatus;
            if (responseStatus === "SUCCESS") {
                analyticsData = {};
                analyticsData.ctaButtonSource = analyticsPageName + ":preApprovedOffersform"
                preApprovedOffersAnalytics(analyticsData, "pre_approved_offers_otp_verified")
            }
        });

    if (responseStatus == 'SUCCESS') {
        return true;
    } else {
        failres = 1;
        return false;
    }

}
function formdata(id) {

    var str = $($(id)[0]).serialize();
    var fieldsArray = str.split("&");
    //console.log(fieldsArray);
    var formFields = {};//new FormData();
    for (var fieldIndex = 0; fieldIndex < fieldsArray.length; fieldIndex++) {
        var field = fieldsArray[fieldIndex].split("=");
        var fieldName = field[0];
        var fieldValue = decodeURIComponent(field[1]);
        fieldValue = fieldValue.replace(/\,/g, "")
        formFields[fieldName] = fieldValue;
        if (fieldName == "productCode" && formFields[fieldName] == "LAP") {
            formFields[fieldName] = "HE";
        }
    }
    //console.log(formFields);
    return formFields
}

function preApprovedFormformdataOffer() {
    //console.log("formdataOffer called");
    var str = $("#preApprovedOfferForm input").serialize();
    var fieldsArray = str.split("&");
    //console.log(fieldsArray);
    var formFields = {};//new FormData();
    for (var fieldIndex = 0; fieldIndex < fieldsArray.length; fieldIndex++) {
        var field = fieldsArray[fieldIndex].split("=");
        var fieldName = field[0];
        var fieldValue = decodeURIComponent(field[1]);
        fieldValue = fieldValue.replace(/\,/g, "")
        formFields[fieldName] = fieldValue;
        if (fieldName === "firstName") {
            sessionStorage.setItem("firstName", formFields[fieldName])
        }
    }
    //console.log("form data :",formFields);
    return formFields
}

function preApprovedFormValidOffers() {
    //    window.toggleLoader(true, "#quickLoader");
    $('.page-loader').removeClass('hidden');

    var url = globalConfig.apiCallRetailConfig.preApprovedOffersCall.contextPath + "." + globalConfig.apiCallRetailConfig.preApprovedOffersCall.selector + ".json";
    var data = preApprovedFormformdataOffer();

    //  var data = {};
    // data.mobileNumber="9348778898";
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        async: true,
    })
        .done(function (data) {
            //     window.toggleLoader(false, "#quickLoader");
            $('.page-loader').addClass('hidden');
            var mobileNumber = $(".pre-approved-form .mobile").val();

            var responseData = (typeof (data) !== "object") ? JSON.parse(data) : (data);
            analyticsData = {};
            analyticsData.responseData = responseData;
            analyticsData.ctaButtonSource = analyticsPageName + ":preApprovedOffersform";
            preApprovedOffersAnalytics(analyticsData, "pre_approved_offers_submit");
            //console.log("res :",response);
            if (responseData.totalSize != 0) {
                function activeStatusCheckPersonalLoan(plData) {
                    return new Promise(function (resolve, reject) {
                        apiCall('/content/tata-capital/retailapi.PreApprovedOfferPLBLServlet.json', 'POST', plData).then(function (response) {
                            var plData = JSON.parse(response)
                            resolve(plData);
                        }).catch(function (error) {
                            reject(error);
                        })
                    });
                }

                function activeStatusCheckBusinessLoan(blData) {
                    return new Promise(function (resolve, reject) {
                        apiCall('/content/tata-capital/retailapi.PreApprovedOfferPLBLServlet.json', 'POST', blData).then(function (response) {
                            var blData = JSON.parse(response)
                            resolve(blData);
                        }).catch(function (error) {
                            reject(error);
                        })
                    });
                }

                function apiCall(url, method, data) {
                    return new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.onreadystatechange = function () {
                            if (this.readyState == 4) {
                                if (this.status == 200) {
                                    resolve(this.response);
                                } else {
                                    reject(this.response);
                                }
                            }
                        }
                        xhr.open(method, url);
                        xhr.send(data);
                    })
                }
                var activeStatusForPersonalLoan = false;
                var activeStatusForBusinessLoan = false;
                var personalLoanFilter = responseData.records.filter(function (value) {
                    return value.Product__r.Name.replace(" ", "").toLowerCase() === 'personalloan';
                });

                var businessLoanFilter = responseData.records.filter(function (value) {
                    return value.Product__r.Name.replace(" ", "").toLowerCase() === 'businessloan';
                });
                if (personalLoanFilter.length > 0) {

                    var formData = new FormData();
                    formData.append('productName', 'personalloan')
                    formData.append('mobileNumber', mobileNumber)
                    activeStatusCheckPersonalLoan(formData).then(function (response) {
                        activeStatusForPersonalLoan = response.plOnlineJourneyExistingStatus;
                        if (businessLoanFilter.length > 0) {
                            var formDataBl = new FormData();
                            formDataBl.append('productName', 'businessloan')
                            formDataBl.append('mobileNumber', mobileNumber)
                            activeStatusCheckBusinessLoan(formDataBl).then(function (response) {
                                activeStatusForBusinessLoan = response.existingCustomer;
                                renderLoanResults(activeStatusForPersonalLoan, activeStatusForBusinessLoan)
                            })
                        } else {
                            renderLoanResults(activeStatusForPersonalLoan, activeStatusForBusinessLoan)
                        }
                    })


                }
                else if (businessLoanFilter.length > 0) {
                    var formDataBl = new FormData();
                    formDataBl.append('productName', 'businessloan')
                    formDataBl.append('mobileNumber', mobileNumber)
                    activeStatusCheckBusinessLoan(formDataBl).then(function (response) {
                        activeStatusForBusinessLoan = response.existingCustomer;
                        renderLoanResults(activeStatusForPersonalLoan, activeStatusForBusinessLoan)
                    })

                } else {
                    renderLoanResults(activeStatusForPersonalLoan, activeStatusForBusinessLoan)
                }
                function renderLoanResults(activeStatusForPersonalLoan, activeStatusForBusinessLoan) {
                    var count = 0
                    for (var i = 0; i < responseData.totalSize; i++) {
                        var productName = responseData.records[i].Product__r.Name;
                        var offerType = responseData.records[i].OfferType__c;
                        var lowerCaseProductName = productName.replace(" ", "").toLowerCase();
                        if (lowerCaseProductName === "personalloan") {
                            if (activeStatusForPersonalLoan === 'true') {
                             count=count ;
                            }else{
                                if (offerType != 'PreQualified') {
                                    count++;
                                }
                            }
                        }
                        if (lowerCaseProductName === "businessloan") {
                            if (activeStatusForBusinessLoan === 'true') {
                                count=count;
                            }else{
                                if (offerType != 'PreQualified') {
                                    count++;
                                }
                            }
                        }
                        if ((lowerCaseProductName === 'homeequity') || (lowerCaseProductName === 'consumerdurables') || (lowerCaseProductName === 'autoloan') || (lowerCaseProductName === 'twowheeler')) {
                            if (offerType != 'PreQualified') {
                                count++;
                            }
                        }

                    }
                    if (count != 0) {
                        $('#preApprovedOfferForm').attr('data-value', 'true');
                        if (personalLoanFilter.length > 0 && activeStatusForPersonalLoan == true) {
                            var indexPersonalLoan = responseData.records.map(function(value, index) {return value.Product__r.Name === "PERSONAL LOAN" ? index : ""}).filter(function(value){return value !== ""})
                            responseData.records.splice(indexPersonalLoan, indexPersonalLoan.length)
                            for(i=0;i<indexPersonalLoan.length;i++){
                                count--;
                            }
                        }
                        if (businessLoanFilter.length > 0 && activeStatusForBusinessLoan == true) {
                            var indexBusinessLoan = responseData.records.map(function(value, index){return value.Product__r.Name === "BUSINESS LOAN" ? index : ""}).filter(function(value){return value !== ""})
                            responseData.records.splice(indexBusinessLoan, indexBusinessLoan.length)
                             for(i=0;i<indexBusinessLoan.length;i++){
                                count--;
                             }
                        }
                       if(count!=0)
                       {
                        sessionStorage.setItem("offers", (typeof (data) === "object") ? JSON.stringify(data) : (data));
                        sessionStorage.setItem("customerMobile",mobileNumber);
                        window.location.href = "/pre-approved-offers.html";
                        }
                        else{
                        window.location.href = "/no-offer.html"
                        }


                    }
                    else {
                        $('#preApprovedOfferForm').attr('data-value', 'true');
                        window.location.href = "/no-offer.html"
                    }
                }
            }
            else if (responseData.totalSize == 0) {
                $('#preApprovedOfferForm').attr('data-value', 'true');
                window.location.href = "/no-offer.html"
            }

        });

}



function autocompleteFloatingWidget( inp, arr ,cb) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    if(!inp){
    	return;
    }
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener( "input", function( e ) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if ( !val ) {
            return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement( "DIV" );
        a.setAttribute( "id", this.id + "autocomplete-list" );
        a.setAttribute( "class", "autocomplete-items" );
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild( a );
        /*for each item in the array...*/
        for ( i = 0; i <= arr.length-1; i++ ) {
            /*check if the item starts with the same letters as the text field value:*/
            if ( arr[ i ].substr( 0, val.length ).toUpperCase() == val.toUpperCase() ) {
                /*create a DIV element for each matching element:*/
                b = document.createElement( "DIV" );
                /*make the matching letters bold:*/
                b.innerHTML = "<strong style=\"background-color:#d7df23\">" + arr[ i ].substr( 0, val.length ) + "</strong>";
                b.innerHTML += arr[ i ].substr( val.length );
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[ i ] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener( "click", function( e ) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName( "input" )[ 0 ].value;
                    if(cb){
                    	cb(inp.value)
                    }
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/


                    closeAllLists();
                } );
                a.appendChild( b );
            }
        }
    } );
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener( "keydown", function( e ) {
        var x = document.getElementById( this.id + "autocomplete-list" );
        if ( x ) x = x.getElementsByTagName( "div" );
        if ( e.keyCode == 40 ) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive( x );
        } else if ( e.keyCode == 38 ) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive( x );
        } else if ( e.keyCode == 13 ) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if ( currentFocus > -1 ) {
                /*and simulate a click on the "active" item:*/
                if ( x ) x[ currentFocus ].click();
            }
        }
    } );

    function addActive( x ) {
        /*a function to classify an item as "active":*/
        if ( !x ) return false;
        /*start by removing the "active" class on all items:*/
        removeActive( x );
        if ( currentFocus >= x.length ) currentFocus = 0;
        if ( currentFocus < 0 ) currentFocus = ( x.length - 1 );
        /*add class "autocomplete-active":*/
        x[ currentFocus ].classList.add( "autocomplete-active" );
    }

    function removeActive( x ) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for ( var i = 0; i < x.length; i++ ) {
            x[ i ].classList.remove( "autocomplete-active" );
        }
    }

    function closeAllLists( elmnt ) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName( "autocomplete-items" );
        for ( var i = 0; i < x.length; i++ ) {
            if ( elmnt != x[ i ] && elmnt != inp ) {
                x[ i ].parentNode.removeChild( x[ i ] );
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener( "click", function( e ) {
        closeAllLists( e.target );
    } );
}
// form filling start event
var count = 0;
$("#pre-approved-form .in-text").on("focusout", function (el) {
    var navHeader = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    var namePage = jsHelper.getPageNameForGTM().toLowerCase().trim();
    // var scope = $(that).parents(".pre-approved-form.container");
    if (count == 0) {
        dataLayer.push({
            'category': 'pre-approved offers',
            'event': 'event allpages',
            'action': 'form |  know more about your pre-approved offers',
            'label': 'start',
            'site section': navHeader + ' | ' + namePage,
        });
    }
    count++;
    $(this).off(el);

});

// Error field event
function preApprovedError(that) {
    //debugger;
    //console.log(that);
    var navHeader = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    var namePage = jsHelper.getPageNameForGTM().toLowerCase().trim();
    var scope = $(that).parents(".pre-approved-form.container");
    var inpField = [];
    var pgName = (window.pageName).substring(1);
    Array.prototype.slice.call($(scope)[0].querySelectorAll(".error-msg")).forEach(function (ele) {
        if ($(ele).css("display") === "block" && $(ele).parents(".pre-approved-form-group").css("display") === "block") {
            if ($(ele).siblings("input").length) {
                inpField.push($(ele).siblings(".placeholder-text1").text().toLowerCase());
            }
        }
    });
    if (inpField.length !== 0) {
        dataLayer.push({
            'event': 'event allpages',
            'category': 'pre-approved offers',
            'action': 'form |  know more about your pre-approved offers',
            'label': 'form error | ' + inpField.join(" | "),
            'site section': navHeader + ' | ' + namePage,
        });
    }
}

// submit event
function gtmPreapprovedFom() {
    //debugger;
    var navHeader = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    var namePage = jsHelper.getPageNameForGTM().toLowerCase().trim();
    dataLayer.push({
        'event': 'event allpages',
        'category': 'pre-approved offers',
        'action': 'form |  know more about your pre-approved offers',
        'label': 'submit',
        'site section': navHeader + ' | ' + namePage,
    });
}
function gtmsendotp(){
    var label = $(".pre-approved-otp").text().toLowerCase().trim();
    var navHeader = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    var namePage = jsHelper.getPageNameForGTM().toLowerCase().trim();
    dataLayer.push({
        'category': 'pre-approved offers',
        'action': 'form |  know more about your pre-approved offers',
        'label': label,
        'event': 'event allpages',
        'site section': navHeader + ' | ' + namePage,
    });
}


// Form Terminate event
$(document).ready(function () {
    var scope =  $('.pre-approved-submit').parents('.pre-approved-form');
    var navHeader = $(".top-bar .sub-headers.active-state").text().toLowerCase().trim();
    var namePage = jsHelper.getPageNameForGTM().toLowerCase().trim();
    Array.prototype.slice.call($(scope)[0].querySelectorAll(".pre-approved-form [data-is-dirty]")).forEach(function (el) {
        console.log("registerings pre-approved");
        var type = $(el).attr('data-is-dirty');
        if (type === "input") {
            $(el).on("input", function () {
                console.log("input registered pre-approved aboandoment");
                window.onbeforeunload = function () {
                  if($('#preApprovedOfferForm').is("[data-value]")){
                   
                  }else{

                    console.log("for input : onbeforeunload");
                    dataLayer.push({
                        'event': 'event allpages',
                        'category': 'pre-approved offers',
                        'action': 'form | know more about your pre-approved offers',
                        'label': 'abandonment',
                        'site section': navHeader + ' | ' + namePage,
                    });
                  }
                }
            });
        }

    });
});  
/* youtube video lazyload */
  var youtube = document.querySelectorAll( ".youtube");
  var actionButtons = document.querySelectorAll( ".action-buttons");
  
  for (var i = 0; i < youtube.length; i++) {    
    var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";      
    var image = new Image();
      	image.setAttribute("data-src",source);
        image.src = "/apps/tata-capital-website/clientlibs/main/resources/assets/images/lozad-loader.svg";
        image.addEventListener( "load", function() {
          youtube[ i ].appendChild( image );
        }(i));

        youtube[i].addEventListener( "click", function() {
          var iframe = document.createElement( "iframe" );
              iframe.setAttribute( "frameborder", "0" );
              iframe.setAttribute( "allowfullscreen", "allowfullscreen");
              iframe.setAttribute( "mozallowfullscreen", "mozallowfullscreen");
              iframe.setAttribute( "msallowfullscreen", "msallowfullscreen");
              iframe.setAttribute( "oallowfullscreen", "oallowfullscreen");
              iframe.setAttribute( "webkitallowfullscreen", "webkitallowfullscreen");
              iframe.setAttribute( "allow", "autoplay" );
             // iframe.setAttribute( "height", "350px" );
              iframe.setAttribute( "class", "promo-video-link");
              iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

              this.innerHTML = "";
              this.appendChild( iframe );
              actionButtons[0].style.display = "none";
        });  
    };
$(document).ready(function() {

  if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
      'use strict';
  
      if (search instanceof RegExp) {
        throw TypeError('first argument must not be a RegExp');
      } 
      if (start === undefined) { start = 0; }
      return this.indexOf(search, start) !== -1;
    };
  }

    var classList = $(".Count");
    var classelement ;
    for(var element=0 ;element < classList.length ; element++){
        classelement = (classList[element].innerText)?classList[element].innerText:classList[element].textContent;
        if (classelement.includes(".") == -1)
        {
          classList[element].setAttribute("Class","Count-without-deci");
        }
    };
});


$(document).ready(function() {
    function ticker(){
        $('.Count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(now.toFixed(1));
                }
            });
        });
        $('.Count-without-deci').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(now.toFixed(0));
                }
            });
        });
    }


        // ticker();
    var element_position = $('.why-choose');
    var flag = true;
    $(window).on('scroll', function() {
       if(flag && isScrolledIntoView(element_position) ){
        flag=false;
        ticker();
       }
    });




    function isScrolledIntoView(elem) {

        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

   /* $(window).on('resize', function(){
        transformToCarousel();
    }); */


 });


	if ($(window).width() > 752) {
		$('.ticker-container').removeClass("carousel-item");
        $(".item-active-class-choose-us").removeClass("active");
        $('.ticker-division-grid .carousel-indicators').css('display','none');
    }
    else {
        $('.ticker-container').addClass("carousel-item");
        $(".item-active-class-choose-us").addClass("active");
        $('.ticker-division-grid .carousel-indicators').css('display','block');
		// $('#whyChooseUsCarousel').carousel({
		// });
    }

    //  $('#myCarousel').carousel({
    //     interval: 1000
    // });
    /*var transformToCarousel = function() {


        if ($(window).width() > 752) {

            $('.ticker-container').removeClass("carousel-item");
            $(".item-active-class").removeClass("active");
            $('.ticker-division-grid .carousel-indicators').css('display','none');
        }
        else {

            $('.ticker-container').addClass("carousel-item");
            $(".item-active-class").addClass("active");
            $('.ticker-division-grid .carousel-indicators').css('display','block');
            // $('#whyChooseUsCarousel').carousel({
            // });
        }
    } */

$(document).ready(function () {
    var productName = "default";
    switch (currentPageValue) {

        case 0: productName = "All";
            testimonialData.Master = filterCardData("All", testimonialData.Master);
            break;
        case 1: productName = "Personal Loan";
            testimonialData.Master = filterCardData("Personal Loan", testimonialData.Master);
            break;
        case 2: productName = "Home Loan";
            testimonialData.Master = filterCardData("Home Loan", testimonialData.Master);
            break;
        case 3: productName = "Business Loan";
            testimonialData.Master = filterCardData("Business Loan", testimonialData.Master);
            break;
        case 4: productName = "Loan Against Property";
            testimonialData.Master = filterCardData("Loan Against Property", testimonialData.Master);
            break;
        case 5: productName = "Consumer Durable Loan";
            testimonialData.Master = filterCardData("Consumer Durable Loan", testimonialData.Master);
            break;
        case 6: productName = "Used Car Loan";
            testimonialData.Master = filterCardData("Used Car Loan", testimonialData.Master);
            break;
        case 7: productName = "Two Wheeler Loan";
            testimonialData.Master = filterCardData("Two Wheeler Loan", testimonialData.Master);
            break;
        case 8: productName = "Loan Against Securities";
            testimonialData.Master = filterCardData("Loan Against Securities", testimonialData.Master);
            break;
        case 9: productName = "Wealth Management";
            testimonialData.Master = filterCardData("Wealth Management", testimonialData.Master);
            break;
        case 10: productName = "Credit Cards";
            testimonialData.Master = filterCardData("Credit Cards", testimonialData.Master);
            break;
        case 11: productName = "Insurance";
            testimonialData.Master = filterCardData("Insurance", testimonialData.Master);
            break;

    }

    testimonialData.Master.forEach(function (arr, i) {
        var htmlString = popRating(parseInt(arr.ratings));
        if (i < 8) {
            $(".customerSpeak-Slider.bannerdots").append('<div>' +
                '<div class="cardBox">' +
                '<div class="cardInner">' +
                '<i class="icon-quote"></i>' +
                '<p class="three-lines"><span class="ellip">' + arr.testimonialText + '</span></p>' +
                '<ul class="rating">' +
                htmlString +
                '</ul>' +
                '<div class="profile">' +
                '<label id="customerSpeakCustomerName">' + arr.customerName + '</label>' +
                '<span id="customerSpeakProducts">' + arr.products + ' | ' + convertToRequiredDateFormate(arr.testimonialDate) + '  </span>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>')
        }
    })
    function popRating(rating) {
        var ratinghtml = "";
        for (var i = 0; i < rating; i++) {
            ratinghtml += "<li><i class='icon-full-star'></i></li>";
        }
        return ratinghtml;
    }
});

function filterCardData(dropDownKey, CardDetails) {
    //dropDownKey = toCamelCase(dropDownKey);
    switch (dropDownKey) {
        case "All":
            return CardDetails = CardDetails.sort(function (a, b) { return new Date(b.testimonialDate) - new Date(a.testimonialDate) });

        case "Home Loan":
        case "Personal Loan":
        case "Business Loan":
        case "Two Wheeler Loan":
        case "Used Car Loan":
        case "Loan Against Property":
        case "Credit Cards":
        case "Loan Against Securities":
        case "Consumer Durable Loan":
        case "Wealth Management":
        case "Insurance":

            CardDetails = CardDetails.sort(function (a, b) { return new Date(b.testimonialDate) - new Date(a.testimonialDate) });
            return CardDetails.filter(function (card) { if ((card.products) == dropDownKey) { return card } });
        /*
                case "otherLoans":
                    return CardDetails = CardDetails.filter(function (card) { if ((card.products) !== "homeLoan" && toCamelCase(card.products) !== "personalLoan" && toCamelCase(card.products) !== "businessLoan") { return card } });;
        
                case "starRating":
                    return CardDetails = CardDetails.sort(function (a, b) { return parseFloat(b.ratings) - parseFloat(a.ratings) });
        */
        default:
            return CardDetails;
    }
}

function convertToRequiredDateFormate(date) {
    return new Date(date).toLocaleDateString("en-IN", {
        day: 'numeric',
        year: 'numeric',
        month: 'long'
    });
}

$(function () {

    $('#speakSliderTwo').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
    $('#speakSliderThree').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

});

//testimonial js
(function (factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. register as an anonymous module
        define(['jquery'], factory);
    } else {
        // browser globals
        factory(jQuery);
    }
}(function ($) {
    'use strict';

    var namespace = 'ellipsis',
        span = '<span style="white-space: nowrap;">',
        defaults = {
            lines: 'auto',
            ellipClass: 'ellip',
            responsive: false
        };

    /**
     * Ellipsis()
     * --------------------------------------------------------------------------
     * @param {Node} el
     * @param {Object} opts
     */
    function Ellipsis(el, opts) {
        var base = this,
            currLine = 0,
            lines = [],
            setStartEllipAt,
            startEllipAt,
            resizeTimer,
            currOffset,
            lineHeight,
            contHeight,
            words;

        base.$cont = $(el);
        base.opts = $.extend({}, defaults, opts);
        /**
         * create() happens once when
         * instance is created
         */
        function create() {
            base.text = base.$cont.text();
            base.opts.ellipLineClass = base.opts.ellipClass + '-line';

            base.$el = $('<span class="' + base.opts.ellipClass + '" />');
            base.$el.text(base.text);

            base.$cont.empty().append(base.$el);

            init();
        }

        /**
         * init()
         */
        function init() {

            // if they only want one line just add
            // the class and do nothing else
            if (typeof base.opts.lines === 'number' && base.opts.lines < 2) {
                base.$el.addClass(base.opts.ellipLineClass);
                return;
            }

            contHeight = base.$cont.height();

            // if they only want to ellipsis the overflow
            // then do nothing if there is no overflow      
            if (base.opts.lines === 'auto' && base.$el.prop('scrollHeight') <= contHeight) {
                return;
            }

            if (!setStartEllipAt) {
                return;
            }

            // create an array of words from our string
            words = $.trim(base.text).split(/\s+/);

            // wrap each word in a span and temporarily append to the DOM
            base.$el.html(span + words.join('</span> ' + span) + '</span>');

            // loop through words to determine which word the
            // ellipsis container should start from (need to
            // re-query spans from DOM so we can get their offset)
            base.$el.find('span').each(setStartEllipAt);

            // startEllipAt could be 0 so make sure we're
            // checking undefined instead of falsey
            if (startEllipAt != null) {
                updateText(startEllipAt);
            }
        }

        /**
         * updateText() updates the text in the DOM
         * with a span around the line that needs
         * to be truncated
         *
         * @param {Number} i
         */
        function updateText(nth) {
            // add a span that wraps from nth
            // word to the end of the string
            words[nth] = '<span class="' + base.opts.ellipLineClass + '">' + words[nth];
            words.push('</span>');

            // update the DOM with
            // our new string/markup
            base.$el.html(words.join(' '));
        }

        // only define the method if it's required
        if (base.opts.lines === 'auto') {

            /**
             * setStartEllipByHeight() sets the start
             * position to the first word in the last
             * line of the element that doesn't overflow
             *
             * @param {Number} i
             * @param {Node} word
             */
            var setStartEllipByHeight = function (i, word) {
                var $word = $(word),
                    top = $word.position().top;

                lineHeight = lineHeight || $word.height();

                if (top === currOffset) {
                    // if it's top matches currOffset
                    // then it's on the same line
                    // as the previous word
                    lines[currLine].push($word);
                } else {
                    // otherwise we're
                    // on a new line
                    currOffset = top;
                    currLine += 1;
                    lines[currLine] = [$word];
                }

                // if the bottom of the word is outside
                // the element (overflowing) then
                // stop looping and set startEllipAt to
                // the first word in the previous line
                if (top + lineHeight > contHeight) {
                    startEllipAt = i - lines[currLine - 1].length;
                    return false;
                }
            };

            setStartEllipAt = setStartEllipByHeight;
        }

        // only define the method if it's required
        if (typeof base.opts.lines === 'number' && base.opts.lines > 1) {

            /**
             * setStartEllipByLine() sets the start
             * position to the first word in the line
             * that was passed to opts. This forces
             * the ellipsis on a specific line
             * regardless of overflow
             *
             * @param {Number} i
             * @param {Node} word
             */
            var setStartEllipByLine = function (i, word) {
                var $word = $(word),
                    top = $word.position().top;

                // if top isn't currOfset
                // then we're on a new line
                if (top !== currOffset) {
                    currOffset = top;
                    currLine += 1;
                }

                // if the word's currLine is equal
                // to the line limit passed via options
                // then start ellip from this
                // word and stop looping
                if (currLine === base.opts.lines) {
                    startEllipAt = i;
                    return false;
                }
            };

            setStartEllipAt = setStartEllipByLine;
        }

        // only bind to window resize if required
        if (base.opts.responsive) {

            /**
             * resize() resets necessary vars
             * and content and then re-initialises
             * the Ellipsis script
             */
            var resize = function () {
                lines = [];
                currLine = 0;
                currOffset = null;
                startEllipAt = null;
                base.$el.html(base.text);

                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(init, 100);
            }

            $(window).on('resize.' + namespace, resize);
        }

        // start 'er up
        create();
    }

    $.fn[namespace] = function (opts) {
        return this.each(function () {
            try {
                $(this).data(namespace, (new Ellipsis(this, opts)));
            } catch (err) {
                if (window.console) {
                    console.error(namespace + ': ' + err);
                }
            }
        });
    };

}));

$(document).ready(function () {
    $('.three-lines').ellipsis({ lines: 3, responsive: true });
})
$(document).ready(function () {
    $('.footer-main-content .footer-row .footer-col .footer-heading').each(function () {
        $(this).click(function () {
            $(this).toggleClass('active');
            $(this).siblings('.footer-body').slideToggle();
            $(this).parents('.footer-row').siblings('.footer-row').find('.footer-col .footer-heading').removeClass('active').siblings('.footer-body').slideUp();
            $(this).parents('.footer-main-content').siblings('.our-other-websites').find('.website-link-head').removeClass('active').siblings('.our-websites-inner').slideUp();
        })
    })

    $('.our-other-websites .website-link-head').click(function (ele) {
        var ele_id = $(this).parents('.our-other-websites').attr('id');
        $('#' + ele_id).find('.our-websites-inner').slideUp();
        if ($(ele.target).siblings('.our-websites-inner').css('display') == "block") {
            $(ele.target).siblings('.our-websites-inner').slideUp();
        } else {
            $(ele.target).siblings('.our-websites-inner').slideDown();
        }
        // $(this).toggleClass('active');
        // $(this).siblings('.our-websites-inner').slideToggle();
        $(this).parents('.our-other-websites').siblings('.footer-main-content').find('.footer-col .footer-heading').removeClass('active').siblings('.footer-body').slideUp();
    })

    $('.scroll-to-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

    if($(window).width() < 768) {
        $('.policies-codes .accordian-content:first-child').find('.tab-panel').css('display', 'none');
    }

    $('[data-collapse="collapse"]').off('click').on('click', function(ele) {
        var ele_parents = $(ele.currentTarget).parents('.accrodian').attr('id');
        var ele_target = $(this).data('target');

        if ($(this).parent('.nav-tablist').hasClass('active')) {
            $(this).parent('.nav-tablist').removeClass('active');
        } else {
            $(ele.currentTarget).parents('.navTab').find('.nav-tablist').removeClass('active');
            $(this).parent('.nav-tablist').addClass('active');
        }

        if ($(this).parents('#' + ele_parents).find('#' + ele_target).css('display') == 'block') {
            $('#' + ele_parents).find('#' + ele_target).hide();
        } else {
            $('#' + ele_parents).find('.tab-panel').hide();
            $('#' + ele_parents).find('#' + ele_target).show();
        }

});

  $('[data-toggle="collapse"]').off('click').on('click', function(ele) {
        var ele_parents = $(ele.target).parents('.accrodian').attr('id');
        if($('#' + ele_parents).parents(".footer-main-content").length){
            $('#' + ele_parents).find('.collapse').slideUp();
            $('#' + ele_parents).find('[data-toggle="collapse"]').attr('aria-expanded', 'false');
    
            if ($(ele.target).parent().siblings().css('display') == "block") {
                $(ele.target).parent().siblings().slideUp();
                $(ele.target).attr('aria-expanded', 'false');
            } else {
                $(ele.target).parent().siblings().slideDown();
                $(ele.target).attr('aria-expanded', 'true');
            }
        }
    });
});


var action,label,event,cat,pname,social_media = ["facebook","twitter","instagram","youtube"];
$(".footer-top-box .section-wrapper .mg-b0 a").click(function(event){
    action = "link";
    label = $(event.target).text().toLowerCase();
    event = "event allpages";
    cat = $(".sub-headers.active-state").text().toLowerCase().trim();
    pname = jsHelper.getPageNameForGTM().toLowerCase();

    dataLayer.push({
        'event':event ,
        'category':'footer',
        'action': action,
        'label': label,
        'site section':cat+' | '+pname,
        });


})
$(".our-other-websites .section-wrapper  .four-col a").on("click",function(event){
    action = $(event.target).parents('.accordian-panel').find('.website-link-head').text().toLowerCase().trim();
    label = $(event.target).text().toLowerCase();
    cat = $(".sub-headers.active-state").text().toLowerCase().trim();
    pname = jsHelper.getPageNameForGTM().toLowerCase();
     dataLayer.push({
        'event': 'event allpages',
        'category':'footer',
        'action': action,
        'label': label,
        'site section':cat+' | '+pname,
     });


})
$(".copyright-box .socal-lists a").on("click",function(event){
 //action = $(".footer-col h6").text().toLowerCase(); 
 var index = $(event.target).parent("a").index();   
 cat = $(".sub-headers.active-state").text().toLowerCase().trim();
 pname = jsHelper.getPageNameForGTM().toLowerCase();

  dataLayer.push({
        'event': 'event allpages',
        'category':'footer',
        'action': 'social media',
        'label': social_media[index],
        'site section':cat+' | '+pname,
      });
})

$(".footer-main-content .footer-col a").on("click",function(event){
    action = $(event.target).parents(".footer-col").find(".footer-heading").text().toLowerCase();
    label = $(event.target).text().toLowerCase();
    var l = $(".footer-links-list .footer-link");
    //var index = l.index($(event.target).parents("li")[0]);
    cat = $(".sub-headers.active-state").text().toLowerCase().trim();
    pname = jsHelper.getPageNameForGTM().toLowerCase();

    { dataLayer.push({
        'event': 'event allpages',
        'category':'footer',
        'action':action,
        'label':label,
        'site section':cat+' | '+pname,
    })
    } 



})

$(document).ready(function () {

    var languageOption=$('#mitc-language-dropdown option');
$('.tab-panel ul li').click(function(e){
   var footerHead = e.target.text;
   $('#mitc-language-dropdown option').remove();
    $('#mitc-language-dropdown').html("<option value='none' data-parent=' ' data-pdf='' class='optInvisible' selected disabled>Select an Option</option>").trigger("change");
   var filteredOption =languageOption.filter('[data-parent ="'+footerHead+'"]' || '[data-parent =" "]');
   $('#mitc-language-dropdown').append(filteredOption);
 $("#mitc-language-dropdown").select2().val('none').trigger('change.select2');
});


$('#mitc-language-dropdown').on('change',function(e){
    if ($('#mitc-language-download-btn[style*="pointer-events"]')) {
        $('#mitc-language-download-btn').removeAttr("style");
    }    
    var pdf= $('#mitc-language-dropdown option:selected').attr('data-pdf');
    $('#mitc-language-download-btn').attr('href',pdf);
})

       $('[data-popovermodalMITC]').on('click', function(e){
        e.preventDefault();
    var ele_target = $(this).attr('data-popovermodalMITC');
    setTimeout(function(){
        $(ele_target).addClass('popover-show');
    }, 80);
    $(ele_target).css('display', 'block');
    $('body').addClass('popover-modal-open');
    $('body').append('<div class="popover-backdrop"></div>');
});

            if($('#mitc-language-download-btn').attr('href') == ""){
                $('#mitc-language-download-btn').removeAttr('download');
                $('#mitc-language-download-btn').css('pointer-events','none');
            }

            $('[data-type="language"]').select2().on('select2:close', function (e) {
                if($(this).val().length > 0){
                    $('#download').removeClass("disabled");
                }else {
                    $('#download').addClass("disabled");
                }
            });

            $('[data-popovermodalMITC]').click(function(e){
                e.preventDefault();
                var text_ele = $(this).text();
                $('#language-notification').find('p span').text(text_ele);
                $('[data-type="language"]').select2().val('').trigger('change');
                $('#download').addClass("disabled");
            });



    // $('.tab-panel ul li a[data-popovermodals]').click(function (e) {
    //     e.preventDefault();
    //     debugger;
        // var text_ele = $(this).text();
        // $('#'+ele_target).find('p span').text(text_ele);
        // $('[data-type="language"]').select2().val('').trigger('change');
        // $('#download').addClass("disabled");
    // });


})



$(document).ready(function () {
    $('.footer-main-content .footer-row .footer-col .footer-heading').each(function () {
        $(this).click(function () {
            $(this).toggleClass('active');
            $(this).siblings('.footer-body').slideToggle();
            $(this).parents('.footer-row').siblings('.footer-row').find('.footer-col .footer-heading').removeClass('active').siblings('.footer-body').slideUp();
            $(this).parents('.footer-main-content').siblings('.our-other-websites').find('.website-link-head').removeClass('active').siblings('.our-websites-inner').slideUp();
        })
    })

    $('.our-other-websites .website-link-head').click(function (ele) {
        var ele_id = $(this).parents('.our-other-websites').attr('id');
        $('#' + ele_id).find('.our-websites-inner').slideUp();
        if ($(ele.target).siblings('.our-websites-inner').css('display') == "block") {
            $(ele.target).siblings('.our-websites-inner').slideUp();
        } else {
            $(ele.target).siblings('.our-websites-inner').slideDown();
        }
        // $(this).toggleClass('active');
        // $(this).siblings('.our-websites-inner').slideToggle();
        $(this).parents('.our-other-websites').siblings('.footer-main-content').find('.footer-col .footer-heading').removeClass('active').siblings('.footer-body').slideUp();
    })

    $('.scroll-to-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

    if($(window).width() < 768) {
        $('.policies-codes .accordian-content:first-child').find('.tab-panel').css('display', 'none');
    }

    $('[data-collapse="collapse"]').off('click').on('click', function(ele) {
        var ele_parents = $(ele.currentTarget).parents('.accrodian').attr('id');
        var ele_target = $(this).data('target');

        if ($(this).parent('.nav-tablist').hasClass('active')) {
            $(this).parent('.nav-tablist').removeClass('active');
        } else {
            $(ele.currentTarget).parents('.navTab').find('.nav-tablist').removeClass('active');
            $(this).parent('.nav-tablist').addClass('active');
        }

        if ($(this).parents('#' + ele_parents).find('#' + ele_target).css('display') == 'block') {
            $('#' + ele_parents).find('#' + ele_target).hide();
        } else {
            $('#' + ele_parents).find('.tab-panel').hide();
            $('#' + ele_parents).find('#' + ele_target).show();
        }

});

  $('[data-toggle="collapse"]').off('click').on('click', function(ele) {
        var ele_parents = $(ele.target).parents('.accrodian').attr('id');
        if($('#' + ele_parents).parents(".footer-main-content").length){
            $('#' + ele_parents).find('.collapse').slideUp();
            $('#' + ele_parents).find('[data-toggle="collapse"]').attr('aria-expanded', 'false');
    
            if ($(ele.target).parent().siblings().css('display') == "block") {
                $(ele.target).parent().siblings().slideUp();
                $(ele.target).attr('aria-expanded', 'false');
            } else {
                $(ele.target).parent().siblings().slideDown();
                $(ele.target).attr('aria-expanded', 'true');
            }
        }
    });
});


var action,label,event,cat,pname,social_media = ["facebook","twitter","instagram","youtube"];
$(".footer-top-box .section-wrapper .mg-b0 a").click(function(event){
    action = "link";
    label = $(event.target).text().toLowerCase();
    event = "event allpages";
    cat = $(".sub-headers.active-state").text().toLowerCase().trim();
    pname = jsHelper.getPageNameForGTM().toLowerCase();

    dataLayer.push({
        'event':event ,
        'category':'footer',
        'action': action,
        'label': label,
        'site section':cat+' | '+pname,
        });
})
$(".our-other-websites .section-wrapper  .four-col a").on("click",function(event){
    action = $(event.target).parents('.accordian-panel').find('.website-link-head').text().toLowerCase().trim();
    label = $(event.target).text().toLowerCase();
    cat = $(".sub-headers.active-state").text().toLowerCase().trim();
    pname = jsHelper.getPageNameForGTM().toLowerCase();
     dataLayer.push({
        'event': 'event allpages',
        'category':'footer',
        'action': action,
        'label': label,
        'site section':cat+' | '+pname,
     });


})
$(".socal-lists a").on("click",function(event){
 //action = $(".footer-col h6").text().toLowerCase();
 var index = $(event.target).parent("a").index();
 cat = $(".sub-headers.active-state").text().toLowerCase().trim();
 pname = jsHelper.getPageNameForGTM().toLowerCase();

  dataLayer.push({
        'event': 'event allpages',
        'category':'footer',
        'action': 'social media',
        'label': social_media[index],
        'site section':cat+' | '+pname,
      });
})

$(".footer-main-content .footer-col a").on("click",function(event){
    action = $(event.target).parents(".footer-col").find(".footer-heading").text().toLowerCase();
    label = $(event.target).text().toLowerCase();
    var l = $(".footer-links-list .footer-link");
    //var index = l.index($(event.target).parents("li")[0]);
    cat = $(".sub-headers.active-state").text().toLowerCase().trim();
    pname = jsHelper.getPageNameForGTM().toLowerCase();

    { dataLayer.push({
        'event': 'event allpages',
        'category':'footer',
        'action':action,
        'label':label,
        'site section':cat+' | '+pname,
    })
    }
})

$(document).ready(function () {
    $('.d-blocks').css('display','block');
    var languageOption=$('#mitc-language-dropdown option');
    $('.tab-panel ul li').click(function(e){
       var footerHead = e.target.text;
       $('#mitc-language-dropdown option').remove();
        $('#mitc-language-dropdown').html("<option value='none' data-parent=' ' data-pdf='' class='optInvisible' selected disabled>Select an Option</option>").trigger("change");
       var filteredOption =languageOption.filter('[data-parent ="'+footerHead+'"]' || '[data-parent =" "]');
       $('#mitc-language-dropdown').append(filteredOption);
     $("#mitc-language-dropdown").select2().val('none').trigger('change.select2');
    });

   

    $('#mitc-language-dropdown').on('change',function(e){
        if ($('#mitc-language-download-btn[style*="pointer-events"]')) {
            $('#mitc-language-download-btn').removeAttr("style");
        }        
        var pdf= $('#mitc-language-dropdown option:selected').attr('data-pdf');
        $('#mitc-language-download-btn').attr('href',pdf);
    })

        $('[data-popovermodalMITC]').on('click', function(e){
            e.preventDefault();
        var ele_target = $(this).attr('data-popovermodalMITC');
        setTimeout(function(){
            $(ele_target).addClass('popover-show');
        }, 80);
        $(ele_target).css('display', 'block');
        $('body').addClass('popover-modal-open');
        $('body').append('<div class="popover-backdrop"></div>');
    });
    
                if($('#mitc-language-download-btn').attr('href') == ""){
                    $('#mitc-language-download-btn').removeAttr('download');
                $('#mitc-language-download-btn').css('pointer-events','none');
                }
                $('[data-type="language"]').select2().on('select2:close', function (e) {
                    if($(this).val().length > 0){
                        $('#download').removeClass("disabled");
                    }else {
                        $('#download').addClass("disabled");
                    }
                });
    
                $('[data-popovermodalMITC]').click(function(e){
                    e.preventDefault();
                    var text_ele = $(this).text();
                    $('#language-notification').find('p span').text(text_ele);
                    $('[data-type="language"]').select2().val('').trigger('change');
                    $('#download').addClass("disabled");
                });
    
    
    
        // $('.tab-panel ul li a[data-popovermodals]').click(function (e) {
        //     e.preventDefault();
        //     debugger;
            // var text_ele = $(this).text();
            // $('#'+ele_target).find('p span').text(text_ele);
            // $('[data-type="language"]').select2().val('').trigger('change');
            // $('#download').addClass("disabled");
        // });
    
      //for close btn
      $('[data-popoverclose]').on('click', function () {
        $(this).parents('.popover-modal').removeClass('popover-show');
        $(this).parents('.popover-modal').removeAttr('style');
        $('body').removeClass('popover-modal-open');
        $('.popover-backdrop').remove();
    });
    })


    
$( document ).ready( function() {
    //console.log($(window).width());
    transformToCarousel();


    $( ".likes-shares-image-section" ).click( function() {
        $( this ).find( 'img' ).toggle();
    } );


    $( '.blogs-box-components' ).slick( {

        slidesToShow: 3,
        responsive: [ {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            }
            // },
            // {
            //   breakpoint: 600,
            //   settings: {
            //     slidesToShow: 2,
            //     slidesToScroll: 2
            //   }
            // },
            // {
            //   breakpoint: 480,
            //   settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1
            //   }
            // }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    } );

     $('body').on('click',function(e){
        if($(e.target).hasClass("share-it")){
            return;
        }
        
        if($( ".share-it" ).hasClass( 'active' )){
            $( ".share-it" ).removeClass( 'active' );
            $(".share-media-dropdown").hide();
            $(".share-it").attr( 'src', "/apps/tata-capital-website/clientlibs/main/resources/assets/images/share-unfilled.svg" );
        }

    });

    $(".share-it").click(function(){
        $(".share-media-dropdown").hide();
        $(".share-it").attr( 'src', "/apps/tata-capital-website/clientlibs/main/resources/assets/images/share-unfilled.svg" );
        $( this ).hasClass( 'active' ) ? ($(this.nextElementSibling).hide(), $( this ).attr( 'src', "/apps/tata-capital-website/clientlibs/main/resources/assets/images/share-unfilled.svg" )) : ($(this.nextElementSibling).show(),$( this ).attr( 'src', "/apps/tata-capital-website/clientlibs/main/resources/assets/images/share-filled.svg" ));
        $(this).toggleClass("active");
    } );

} );

$( window ).on( 'resize', function() {
    transformToCarousel();
} );
var transformToCarousel = function() {
    if ( $( window ).width() < 992 ) {

        $( '.blogs-box-column' ).addClass( "item" );
        $( ".item-active-class" ).addClass( "active" );
        $( '.blogs-section .carousel-indicators' ).css( 'display', 'block' );
        $( '.view-other-blogs-mobile' ).css( 'display', 'flex' );
        $( '.view-other-blogs-mobile a' ).css( 'display', 'block' );
    } else {
        $( '.blogs-box-column' ).removeClass( "item" );
        $( ".car-add-class" ).removeClass( "active" );
        $( '.blogs-section .carousel-indicators' ).css( 'display', 'none' );
        $( '.view-other-blogs-mobile' ).css( 'display', 'none' );
        $( '.view-other-blogs-mobile a' ).css( 'display', 'none' );
    }
}
/*code for social share start from here*/

var twitterShare = document.querySelectorAll('[data-js="twitter-share"]');
var i;

for(i=0; i<twitterShare.length; i++){
twitterShare[i].onclick = function(e) {
   var social = $(e.target).parents(".likes-shares").siblings(".blogs-column-text").children(".blogs-para").find('a').attr("href");
   var socialtext = $(e.target).parents(".likes-shares").siblings(".blogs-column-text").children(".blogs-para").text();
    e.preventDefault();
  var twitterWindow = window.open('https://twitter.com/share?text='+socialtext+'&'+'url='+social, 'twitter-popup', 'height=350,width=600');
  if(twitterWindow.focus) { twitterWindow.focus(); }
    return false;
  }
}
var facebookShare = document.querySelectorAll('[data-js="facebook-share"]');
for(i=0; i<facebookShare.length; i++){
facebookShare[i].onclick = function(e) {
    var social = $(e.target).parents(".likes-shares").siblings(".blogs-column-text").children(".blogs-para").find('a').attr("href");
    var socialtext = $(e.target).parents(".likes-shares").siblings(".blogs-column-text").children(".blogs-para").text();
  e.preventDefault();
  var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?hashtag='+socialtext+'&'+'u='+social, 'facebook-popup', 'height=350,width=600');
  if(facebookWindow.focus) { facebookWindow.focus(); }
    return false;
  }
}
/*code for social share end from here*/

function tab_function() {
    $('[data-toggle="tab"]').click(function (e) {
        var t = $(e.target).parents(".tabcontent").attr("id"),
            a = $(this).data("target");
        $(e.target).parents(".navTab").find(".nav-tablist").removeClass("active"), $(this).parent(".nav-tablist").addClass("active"), $("#" + t).find(".tab-panel").addClass("hidden"), $("#" + t).find("#" + a).removeClass("hidden")
    })
}
$(function () {
    tab_function()
}),

    $(document).ready(function () {
        $(".three-lines").ellipsis({ lines: 3, responsive: !0 }),
            $(".js-scrollLeft li a").click(function () {
                var e = $(this).parents("li.active");
                $(".js-scrollLeft").animate({ scrollLeft: $(e).position().left - 4 }, 500)
            })
    });

 /* get-app form */


     // custom modal
     $('.jsModalLink').click(function () {
         var ele_target = $(this).data('modaltarget');
         $('body').find(ele_target).css('display', 'block').addClass('show-modal');
         $('body').addClass('modal-open');
         $('body').append('<div class="modal-backdrop"></div>');
     });

     $('[data-dismiss="jsCloseModal"]').click(function () {
         $('.jsOpenModal').css('display', 'none').removeClass('show-modal');
         $('body').removeClass('modal-open');
         $('.modal-backdrop').remove();
     });
     $('.jsOpenModal').on('click', function () {
         $('.jsOpenModal').css('display', 'none').removeClass('show-modal');
         $('.modal-backdrop').remove();
         $('body').removeClass('modal-open');
     })

     $(".modalcontent").click(function (e) {
         e.stopPropagation();
     });
     $('.get-apps-wizard .small-arrow').click(function () {
        if ($(window).width() < 768) {
             $(this).parent('.get-apps-wizard').toggleClass('active');
             $(this).parent('.get-apps-wizard').find('.img-mobile-xs').toggleClass('shake');
         }
     })

     $('.only-numeric-input').keyup(function (e) {
         $(this).val($(this).val().replace(/[^\d.-]/g, ''));
     });

     $('#widgetGetourappsModal .js-moneyfy-form input').keyup(function () {
         var element = $(this);
         var ele_required = "Field is required";
         var ele_phoneNumber = "Please enter a valid mobile number";

         $(element).next('.error-msgs').remove();
         $(element).after('<span class="error-msgs"></span>');

         if (element.is(":visible")) {
             if ($(element).val() != '') {
                 if ($(element).data('type') === 'mobile') {
                     if (!validateAppMobile(element)) {
                         $(element).next('.error-msgs').text(ele_phoneNumber);
                     } else {
                         $(element).next('.error-msgs').remove();
                     }
                 }

             } else {
                 $(element).next('.error-msgs').text(ele_required);
             }
         }
     });

     $('#widgetGetourappsModal .js-moneyfy-form .app-download').click(function (e) {
         var ele_input = $(this).parents('.js-moneyfy-form').find('input');
         var errors = [];
         var ele_required = "Field is required";

         $(ele_input).each(function () {
             var element = $(this);
             var ele_phoneNumber = "Please enter a valid mobile number";

             $(element).next('.error-msgs').remove();
             $(element).after('<span class="error-msgs"></span>');

             if (element.is(":visible")) {
                 if ($(element).val() != '') {
                     if ($(element).data('type') === 'mobile') {
                         if (!validateAppMobile(element)) {
                             $(element).next('.error-msgs').text(ele_phoneNumber);
                             errors.push(ele_phoneNumber);
                         } else {
                             $(element).next('.error-msgs').remove();
                         }
                     }

                 } else {
                     $(element).next('.error-msgs').text(ele_required);
                     errors.push(ele_required);
                 }
             }
         });

         if (errors.length == 0) {
             e.preventDefault();
             var ele_target = $(this);

             var current_fs = ele_target.data('current');
             var next_fs = ele_target.data('next');
             var error_fs = ele_target.data('error');
             var formdata = {};
             formdata.mobile = $('#widgetGetourappsModal .js-moneyfy-form input').val();
             formdata.appType = "Moneyfy";

             $(this).parents('.form-wizard').find('#' + current_fs).addClass('hidden');
             $('#widgetGetourappsModal .js-moneyfy-form').find('.white-dot-loader').removeClass('hidden');

             $.ajax({
                 type: "POST",
                 url: "/content/tata-capital/retailapi.whatsappSMS.json",
                 data: formdata,
                 async: true,
             }).done(function (responseData) {
                 var response = typeof (responseData) === "object" ? responseData : JSON.parse(responseData);
                 if (response.Status.toLowerCase() === "success") {
                     $('#widgetGetourappsModal .js-moneyfy-form.form-wizard .success-mob').html("An SMS has been sent to XXXXXXX" + $('#widgetGetourappsModal .js-moneyfy-form input').val().substring(7));
                     $('.js-moneyfy-form').find('.white-dot-loader').addClass('hidden');
                     $('.js-moneyfy-form.form-wizard').find('#' + next_fs).removeClass('hidden');
                 } else {
                     $('.js-moneyfy-form').find('.white-dot-loader').addClass('hidden');
                     $('.js-moneyfy-form.form-wizard').find('#' + error_fs).removeClass('hidden');
                 }
             })

         }
     });

     $('#widgetGetourappsModal .js-tatacapital-form input').keyup(function () {
         var element = $(this);
         var ele_required = "Field is required";
         var ele_phoneNumber = "Please enter a valid mobile number";

         $(element).next('.error-msgs').remove();
         $(element).after('<span class="error-msgs"></span>');

         if (element.is(":visible")) {
             if ($(element).val() != '') {
                 if ($(element).data('type') === 'mobile') {
                     if (!validateAppMobile(element)) {
                         $(element).next('.error-msgs').text(ele_phoneNumber);
                     } else {
                         $(element).next('.error-msgs').remove();
                     }
                 }

             } else {
                 $(element).next('.error-msgs').text(ele_required);
             }
         }
     });

     $('#widgetGetourappsModal .js-tatacapital-form button').click(function (e) {
         var ele_input = $(this).parents('.js-tatacapital-form').find('input');
         var errors = [];
         var ele_required = "Field is required";

         $(ele_input).each(function () {
             var element = $(this);
             var ele_phoneNumber = "Please enter a valid mobile number";

             $(element).next('.error-msgs').remove();
             $(element).after('<span class="error-msgs"></span>');

             if (element.is(":visible")) {
                 if ($(element).val() != '') {
                     if ($(element).data('type') === 'mobile') {
                         if (!validateAppMobile(element)) {
                             $(element).next('.error-msgs').text(ele_phoneNumber);
                             errors.push(ele_phoneNumber);
                         } else {
                             $(element).next('.error-msgs').remove();
                         }
                     }

                 } else {
                     $(element).next('.error-msgs').text(ele_required);
                     errors.push(ele_required);
                 }
             }
         });

         if (errors.length == 0) {
             e.preventDefault();
             var ele_target = $(this);

             var current_fs = ele_target.data('current');
             var next_fs = ele_target.data('next');
             var error_fs = ele_target.data('error');
             var formdata = {};
             formdata.mobile = $('#widgetGetourappsModal .js-tatacapital-form input').val();
             formdata.appType = "RetailApp";
             $(this).parents('.form-wizard').find('#' + current_fs).addClass('hidden');
             $('.js-tatacapital-form').find('.white-dot-loader').removeClass('hidden');

             $.ajax({
                 type: "POST",
                 url: "/content/tata-capital/retailapi.whatsappSMS.json",
                 data: formdata,
                 async: true,
             }).done(function (responseData) {
                 var response = typeof (responseData) === "object" ? responseData : JSON.parse(responseData);
                 if (response.Status.toLowerCase() === "success") {
                     $('#widgetGetourappsModal .js-tatacapital-form.form-wizard .success-mob').html("An SMS has been sent to XXXXXXX" + $('#widgetGetourappsModal .js-tatacapital-form input').val().substring(7));
                     $('.js-tatacapital-form').find('.white-dot-loader').addClass('hidden');
                     $('.js-tatacapital-form.form-wizard').find('#' + next_fs).removeClass('hidden');
                 } else {
                     $('.js-tatacapital-form').find('.white-dot-loader').addClass('hidden');
                     $('.js-tatacapital-form.form-wizard').find('#' + error_fs).removeClass('hidden');
                 }
             });
         }
     });

     $('[data-dismiss="jsCloseModal"]').click(function () {
         $('.js-moneyfy-form input, .js-tatacapital-form input').val('');
         $('.js-moneyfy-form .error-msgs, .js-tatacapital-form .error-msgs').remove();
         $('.js-moneyfy-form .white-dot-loader, .js-tatacapital-form .white-dot-loader').addClass('hidden');
         $('#app-download2, #tatacapital02-app, #app-download3, #tatacapital03-app').addClass('hidden');
         $('#app-download1, #tatacapital01-app').removeClass('hidden');
     });

     $('.jsOpenModal').click(function () {
         $('.js-moneyfy-form input, .js-tatacapital-form input').val('');
         $('.js-moneyfy-form .error-msgs, .js-tatacapital-form .error-msgs').remove();
         $('.js-moneyfy-form .white-dot-loader, .js-tatacapital-form .white-dot-loader').addClass('hidden');
         $('#app-download2, #tatacapital02-app, #app-download3, #tatacapital03-app').addClass('hidden');
         $('#app-download1, #tatacapital01-app').removeClass('hidden');
     })

 /* Get apps End */

     // tab function
function apptab_function() {
    $('[data-toggle="apptab"]').click(function (ele) {
        var ele_parents = $(ele.target).parents('.tabcontent').attr('id');
        var ele_target = $(this).data('target');

        $(ele.target).parents('.navTab').find('.nav-tablist').removeClass('active');
        $(this).parent('.nav-tablist').addClass('active');

        $(ele.target).parents('#' + ele_parents).find('.tab-panel').addClass('hidden');
        $(ele.target).parents('#' + ele_parents).find('#' + ele_target).removeClass('hidden');
    });
}

apptab_function();

 // validation mobile
 function validateAppMobile(mobileField) {
     var re = /^[4-9][0-9]{9}$/;
     var check = re.test($(mobileField).val());
     if ($(mobileField).val().length != 10 || !check) {
         return false;
     } else {
         return true;
     }
 }
/* get-app form */
$(document).ready(function(){


    // custom modal
    if($('.moneyfy-popup').length>0)
    {
    $('.moneyfy-popup').click(function(e){ 
        $('.tablessGetApps .tabcontent .tab-panel').attr('id',$(e.target).data('selectedapp'));
        var ele_target = $(this).data('modaltarget');
        $('body').find(ele_target).css('display', 'block').addClass('show-modal');
        $('body').addClass('modal-open');
        $('body').append('<div class="modal-backdrop"></div>');
    });   
    }

    $('[data-dismiss="jsCloseModal"]').click(function(){
        $('.jsOpenModal').css('display', 'none').removeClass('show-modal');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
    });
    $('.jsOpenModal').on('click',function(){
        $('.jsOpenModal').css('display', 'none').removeClass('show-modal');            
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');                   
    })

    $(".modalcontent").click(function(e){
        e.stopPropagation();
    });

    if($(window).width() < 768){
        $('.get-apps-wizard .small-arrow').click(function(){
            $(this).parent('.get-apps-wizard').toggleClass('active');
        })
    }

    if($(window).width() < 768){
        $('.get-apps-wizard .small-arrow').click(function(){
            $(this).parent('.get-apps-wizard').toggleClass('active');
            $(this).parent('.get-apps-wizard').find('.img-mobile-xs').toggleClass('shake');
        })
    }

    $('.only-numeric-input').keyup(function (e) {
        $(this).val($(this).val().replace(/[^\d.-]/g, ''));        
    });

    $('#moneyfyGetourappsModal .js-moneyfy-form input').keyup(function () {
        var element = $(this);
        var ele_required = "Field is required";
        var ele_phoneNumber = "Please enter a valid mobile number";

        $(element).next('.error-msgs').remove();
        $(element).after('<span class="error-msgs"></span>');

        if (element.is(":visible")) {
            if ($(element).val() != '') {
                if ($(element).data('type') === 'mobile') {
                    if (!validateAppMobile(element)) {
                        $(element).next('.error-msgs').text(ele_phoneNumber);
                    } else {
                        $(element).next('.error-msgs').remove();
                    }
                }

            } else {
                $(element).next('.error-msgs').text(ele_required);
            }
        }
    });

    $('#moneyfyGetourappsModal .js-moneyfy-form .only-moneyfy-app').click(function(e){
        var ele_input = $(this).parents('.js-moneyfy-form').find('input');
        var errors = [];
        var ele_required = "Field is required";

        $(ele_input).each(function () {
            var element = $(this);
            var ele_phoneNumber = "Please enter a valid mobile number";

            $(element).next('.error-msgs').remove();
            $(element).after('<span class="error-msgs"></span>');

            if (element.is(":visible")) {
                if ($(element).val() != '') {
                    if ($(element).data('type') === 'mobile') {
                        if (!validateAppMobile(element)) {
                            $(element).next('.error-msgs').text(ele_phoneNumber);
                            errors.push(ele_phoneNumber);
                        } else {
                            $(element).next('.error-msgs').remove();
                        }
                    }
                } else {
                    $(element).next('.error-msgs').text(ele_required);
                    errors.push(ele_required);
                }
            }
        });

        if(errors.length == 0) {
            e.preventDefault();
            var ele_target = $(this);

            var current_fs = ele_target.data('current');
            var next_fs = ele_target.data('next');
            var error_fs = ele_target.data('error');
            $(this).parents('.form-wizard').find('#' + current_fs).addClass('hidden');
            $('.js-moneyfy-form').find('.white-dot-loader').removeClass('hidden');
            var tabPanel = ele_target.parents('.tab-panel').attr('id');
            var apptype = tabPanel == "moneyfy" ? "Moneyfy" : "RetailApp";
            var successAppText = tabPanel == "moneyfy" ? "Moneyfy" : "Tata Capital App";
            var formdata = {};
            formdata.mobile = $('#moneyfyGetourappsModal .js-moneyfy-form input').val();
            formdata.appType = apptype;
            $(this).parents('.form-wizard').find('#' + current_fs).addClass('hidden');
            $('.js-moneyfy-form').find('.white-dot-loader').removeClass('hidden');

           $.ajax({
                type: "POST",
                url: "/content/tata-capital/retailapi.whatsappSMS.json",
                data: formdata,
                async: true,
            }).done(function(responseData){
                var response = typeof(responseData) === "object" ? responseData : JSON.parse(responseData);
                if(response.Status.toLowerCase() === "success")
                {
				$('#moneyfyGetourappsModal .js-moneyfy-form.form-wizard .success-mob').html("An SMS has been sent to XXXXXXX"+$('#moneyfyGetourappsModal .js-moneyfy-form input').val().substring(7));
                $('.js-moneyfy-form.form-wizard .success-app-text').html("Click on the link in the message to download "+successAppText);
                $('.js-moneyfy-form').find('.white-dot-loader').addClass('hidden');
                $('.js-moneyfy-form.form-wizard').find('#' + next_fs).removeClass('hidden');
            	}
               else
                {
				$('.js-moneyfy-form').find('.white-dot-loader').addClass('hidden');
                $('.js-moneyfy-form.form-wizard').find('#' + error_fs).removeClass('hidden');
                }
           });
        }
    });


    $('[data-dismiss="jsCloseModal"]').click(function(){
        $('.js-moneyfy-form input, .js-tatacapital-form input').val('');
        $('.js-moneyfy-form .error-msgs, .js-tatacapital-form .error-msgs').remove();
        $('.js-moneyfy-form .white-dot-loader, .js-tatacapital-form .white-dot-loader').addClass('hidden');
        $('#moneyfy-app2, #moneyfy-app3').addClass('hidden');
        $('#moneyfy-app, #tatacapital01').removeClass('hidden');
    });

    $('.jsOpenModal').click(function(){
        $('.js-moneyfy-form input, .js-tatacapital-form input').val('');
        $('.js-moneyfy-form .error-msgs, .js-tatacapital-form .error-msgs').remove();
        $('.js-moneyfy-form .white-dot-loader, .js-tatacapital-form .white-dot-loader').addClass('hidden');
        $('#moneyfy02, #moneyfy-app3').addClass('hidden');
        $('#moneyfy-app, #tatacapital01').removeClass('hidden');
    })
});

/* Get apps End */


// validation mobile
function validateAppMobile(mobileField) {
    var re = /^[4-9][0-9]{9}$/;
    var check = re.test($(mobileField).val());
    if ($(mobileField).val().length != 10 || !check) { 
        return false;
    } else {
        return true;
    }
}
/* get-app form */
$(document).ready(function(){


    // custom modal
    if($('.tata-popup').length>0)
    {
    $('.tata-popup').click(function(e){ 

        var ele_target = $(this).data('modaltarget');
        $('body').find(ele_target).css('display', 'block').addClass('show-modal');
        $('body').addClass('modal-open');
        $('body').append('<div class="modal-backdrop"></div>');
    });   
    }

    $('[data-dismiss="jsCloseModal"]').click(function(){
        $('.jsOpenModal').css('display', 'none').removeClass('show-modal');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
    });
    $('.jsOpenModal').on('click',function(){
        $('.jsOpenModal').css('display', 'none').removeClass('show-modal');            
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');                   
    })

    $(".modalcontent").click(function(e){
        e.stopPropagation();
    });

    if($(window).width() < 768){
        $('.get-apps-wizard .small-arrow').click(function(){
            $(this).parent('.get-apps-wizard').toggleClass('active');
        })
    }

    if($(window).width() < 768){
        $('.get-apps-wizard .small-arrow').click(function(){
            $(this).parent('.get-apps-wizard').toggleClass('active');
            $(this).parent('.get-apps-wizard').find('.img-mobile-xs').toggleClass('shake');
        })
    }

    $('.only-numeric-input').keyup(function (e) {
        $(this).val($(this).val().replace(/[^\d.-]/g, ''));        
    });

    $('#tataGetourappsModal .js-tatacapital-form input').keyup(function () {
        var element = $(this);
        var ele_required = "Field is required";
        var ele_phoneNumber = "Please enter a valid mobile number";

        $(element).next('.error-msgs').remove();
        $(element).after('<span class="error-msgs"></span>');

        if (element.is(":visible")) {
            if ($(element).val() != '') {
                if ($(element).data('type') === 'mobile') {
                    if (!validateAppMobile(element)) {
                        $(element).next('.error-msgs').text(ele_phoneNumber);
                    } else {
                        $(element).next('.error-msgs').remove();
                    }
                }

            } else {
                $(element).next('.error-msgs').text(ele_required);
            }
        }
    });

    $('#tataGetourappsModal .js-tatacapital-form .tata-app').click(function(e){
        var ele_input = $(this).parents('.js-tatacapital-form').find('input');
        var errors = [];
        var ele_required = "Field is required";

        $(ele_input).each(function () {
            var element = $(this);
            var ele_phoneNumber = "Please enter a valid mobile number";

            $(element).next('.error-msgs').remove();
            $(element).after('<span class="error-msgs"></span>');

            if (element.is(":visible")) {
                if ($(element).val() != '') {
                    if ($(element).data('type') === 'mobile') {
                        if (!validateAppMobile(element)) {
                            $(element).next('.error-msgs').text(ele_phoneNumber);
                            errors.push(ele_phoneNumber);
                        } else {
                            $(element).next('.error-msgs').remove();
                        }
                    }
                } else {
                    $(element).next('.error-msgs').text(ele_required);
                    errors.push(ele_required);
                }
            }
        });

        if(errors.length == 0) {
            e.preventDefault();
            var ele_target = $(this);

            var current_fs = ele_target.data('current');
            var next_fs = ele_target.data('next');
            var error_fs = ele_target.data('error');
            $(this).parents('.form-wizard').find('#' + current_fs).addClass('hidden');
            $('.js-tatacapital-form').find('.white-dot-loader').removeClass('hidden');
            var tabPanel = ele_target.parents('.tab-panel').attr('id');
            var apptype = tabPanel == "moneyfy" ? "Moneyfy" : "RetailApp";
            var successAppText = tabPanel == "moneyfy" ? "Moneyfy" : "Tata Capital App";
            var formdata = {};
            formdata.mobile = $('#tataGetourappsModal .js-tatacapital-form input').val();
            formdata.appType = apptype;
            $(this).parents('.form-wizard').find('#' + current_fs).addClass('hidden');
            $('.js-tatacapital-form').find('.white-dot-loader').removeClass('hidden');

           $.ajax({
                type: "POST",
                url: "/content/tata-capital/retailapi.whatsappSMS.json",
                data: formdata,
                async: true,
            }).done(function(responseData){
                var response = typeof(responseData) === "object" ? responseData : JSON.parse(responseData);
                if(response.Status.toLowerCase() === "success")
                {
				$('#tataGetourappsModal .js-tatacapital-form.form-wizard .success-mob').html("An SMS has been sent to XXXXXXX"+$('#tataGetourappsModal .js-tatacapital-form input').val().substring(7));
                $('.js-tatacapital-form.form-wizard .success-app-text').html("Click on the link in the message to download "+successAppText);
                $('.js-tatacapital-form').find('.white-dot-loader').addClass('hidden');
                $('.js-tatacapital-form.form-wizard').find('#' + next_fs).removeClass('hidden');
            	}
               else
                {
				$('.js-tatacapital-form').find('.white-dot-loader').addClass('hidden');
                $('.js-tatacapital-form.form-wizard').find('#' + error_fs).removeClass('hidden');
                }
           });
        }
    });


    $('[data-dismiss="jsCloseModal"]').click(function(){
        $('.js-moneyfy-form input, .js-tatacapital-form input').val('');
        $('.js-moneyfy-form .error-msgs, .js-tatacapital-form .error-msgs').remove();
        $('.js-moneyfy-form .white-dot-loader, .js-tatacapital-form .white-dot-loader').addClass('hidden');
        $('#tatacapital02-popup, #tatacapital03-popup').addClass('hidden');
        $('#moneyfy01, #tatacapital01-popup').removeClass('hidden');
    });

    $('.jsOpenModal').click(function(){
        $('.js-moneyfy-form input, .js-tatacapital-form input').val('');
        $('.js-moneyfy-form .error-msgs, .js-tatacapital-form .error-msgs').remove();
        $('.js-moneyfy-form .white-dot-loader, .js-tatacapital-form .white-dot-loader').addClass('hidden');
        $('#tatacapital02-popup, #tatacapital03-popup').addClass('hidden');
        $('#moneyfy01, #tatacapital01-popup').removeClass('hidden');
    })
});

/* Get apps End */


// validation mobile
function validateAppMobile(mobileField) {
    var re = /^[4-9][0-9]{9}$/;
    var check = re.test($(mobileField).val());
    if ($(mobileField).val().length != 10 || !check) { 
        return false;
    } else {
        return true;
    }
}
 /* get-app form */

     $(document).ready(function(){
     // custom modal

         if($('.both-popup').length>0){
     $('.both-popup').click(function () {
         var ele_target = $(this).data('modaltarget');
         $('body').find(ele_target).css('display', 'block').addClass('show-modal');
         $('body').addClass('modal-open');
         $('body').append('<div class="modal-backdrop"></div>');
     });
         }       

     $('[data-dismiss="jsCloseModal"]').click(function () {
         $('.jsOpenModal').css('display', 'none').removeClass('show-modal');
         $('body').removeClass('modal-open');
         $('.modal-backdrop').remove();
     });
     $('.jsOpenModal').on('click', function () {
         $('.jsOpenModal').css('display', 'none').removeClass('show-modal');
         $('.modal-backdrop').remove();
         $('body').removeClass('modal-open');
     })

     $(".modalcontent").click(function (e) {
         e.stopPropagation();
     });

     if ($(window).width() < 768) {
         $('.get-apps-wizard .small-arrow').click(function () {
             $(this).parent('.get-apps-wizard').toggleClass('active');
         })
     }

     if ($(window).width() < 768) {
         $('.get-apps-wizard .small-arrow').click(function () {
             $(this).parent('.get-apps-wizard').toggleClass('active');
             $(this).parent('.get-apps-wizard').find('.img-mobile-xs').toggleClass('shake');
         })
     }

     $('.only-numeric-input').keyup(function (e) {
         $(this).val($(this).val().replace(/[^\d.-]/g, ''));
     });

     $('#bothGetourappsModal .js-moneyfy-form input').keyup(function () {
         var element = $(this);
         var ele_required = "Field is required";
         var ele_phoneNumber = "Please enter a valid mobile number";

         $(element).next('.error-msgs').remove();
         $(element).after('<span class="error-msgs"></span>');

         if (element.is(":visible")) {
             if ($(element).val() != '') {
                 if ($(element).data('type') === 'mobile') {
                     if (!validateAppMobile(element)) {
                         $(element).next('.error-msgs').text(ele_phoneNumber);
                     } else {
                         $(element).next('.error-msgs').remove();
                     }
                 }

             } else {
                 $(element).next('.error-msgs').text(ele_required);
             }
         }
     });

     $('#bothGetourappsModal .js-moneyfy-form .both-app').click(function (e) {
         var ele_input = $(this).parents('.js-moneyfy-form').find('input');
         var errors = [];
         var ele_required = "Field is required";

         $(ele_input).each(function () {
             var element = $(this);
             var ele_phoneNumber = "Please enter a valid mobile number";

             $(element).next('.error-msgs').remove();
             $(element).after('<span class="error-msgs"></span>');

             if (element.is(":visible")) {
                 if ($(element).val() != '') {
                     if ($(element).data('type') === 'mobile') {
                         if (!validateAppMobile(element)) {
                             $(element).next('.error-msgs').text(ele_phoneNumber);
                             errors.push(ele_phoneNumber);
                         } else {
                             $(element).next('.error-msgs').remove();
                         }
                     }

                 } else {
                     $(element).next('.error-msgs').text(ele_required);
                     errors.push(ele_required);
                 }
             }
         });

         if (errors.length == 0) {
             e.preventDefault();
             var ele_target = $(this);

             var current_fs = ele_target.data('current');
             var next_fs = ele_target.data('next');
             var error_fs = ele_target.data('error');
             var formdata = {};
             formdata.mobile = $('#bothGetourappsModal .js-moneyfy-form input').val();
             formdata.appType = "Moneyfy";

             $(this).parents('.form-wizard').find('#' + current_fs).addClass('hidden');
             $('.js-moneyfy-form').find('.white-dot-loader').removeClass('hidden');

             $.ajax({
                 type: "POST",
                 url: "/content/tata-capital/retailapi.whatsappSMS.json",
                 data: formdata,
                 async: true,
             }).done(function (responseData) {
                 var response = typeof (responseData) === "object" ? responseData : JSON.parse(responseData);
                 if (response.Status.toLowerCase() === "success") {
                     $('#bothGetourappsModal .js-moneyfy-form.form-wizard .success-mob').html("An SMS has been sent to XXXXXXX" + $('#bothGetourappsModal .js-moneyfy-form input').val().substring(7));
                     $('.js-moneyfy-form').find('.white-dot-loader').addClass('hidden');
                     $('.js-moneyfy-form.form-wizard').find('#' + next_fs).removeClass('hidden');
                 } else {
                     $('.js-moneyfy-form').find('.white-dot-loader').addClass('hidden');
                     $('.js-moneyfy-form.form-wizard').find('#' + error_fs).removeClass('hidden');
                 }
             })

         }
     });

     $('#bothGetourappsModal .js-tatacapital-form input').keyup(function () {
         var element = $(this);
         var ele_required = "Field is required";
         var ele_phoneNumber = "Please enter a valid mobile number";

         $(element).next('.error-msgs').remove();
         $(element).after('<span class="error-msgs"></span>');

         if (element.is(":visible")) {
             if ($(element).val() != '') {
                 if ($(element).data('type') === 'mobile') {
                     if (!validateAppMobile(element)) {
                         $(element).next('.error-msgs').text(ele_phoneNumber);
                     } else {
                         $(element).next('.error-msgs').remove();
                     }
                 }

             } else {
                 $(element).next('.error-msgs').text(ele_required);
             }
         }
     });

     $('#bothGetourappsModal .js-tatacapital-form button').click(function (e) {
         var ele_input = $(this).parents('.js-tatacapital-form').find('input');
         var errors = [];
         var ele_required = "Field is required";

         $(ele_input).each(function () {
             var element = $(this);
             var ele_phoneNumber = "Please enter a valid mobile number";

             $(element).next('.error-msgs').remove();
             $(element).after('<span class="error-msgs"></span>');

             if (element.is(":visible")) {
                 if ($(element).val() != '') {
                     if ($(element).data('type') === 'mobile') {
                         if (!validateAppMobile(element)) {
                             $(element).next('.error-msgs').text(ele_phoneNumber);
                             errors.push(ele_phoneNumber);
                         } else {
                             $(element).next('.error-msgs').remove();
                         }
                     }

                 } else {
                     $(element).next('.error-msgs').text(ele_required);
                     errors.push(ele_required);
                 }
             }
         });

         if (errors.length == 0) {
             e.preventDefault();
             var ele_target = $(this);

             var current_fs = ele_target.data('current');
             var next_fs = ele_target.data('next');
             var error_fs = ele_target.data('error');
             var formdata = {};
             formdata.mobile = $('#bothGetourappsModal .js-tatacapital-form input').val();
             formdata.appType = "RetailApp";
             $(this).parents('.form-wizard').find('#' + current_fs).addClass('hidden');
             $('.js-tatacapital-form').find('.white-dot-loader').removeClass('hidden');

             $.ajax({
                 type: "POST",
                 url: "/content/tata-capital/retailapi.whatsappSMS.json",
                 data: formdata,
                 async: true,
             }).done(function (responseData) {
                 var response = typeof (responseData) === "object" ? responseData : JSON.parse(responseData);
                 if (response.Status.toLowerCase() === "success") {
                     $('#bothGetourappsModal .js-tatacapital-form.form-wizard .success-mob').html("An SMS has been sent to XXXXXXX" + $('#bothGetourappsModal .js-tatacapital-form input').val().substring(7));
                     $('.js-tatacapital-form').find('.white-dot-loader').addClass('hidden');
                     $('.js-tatacapital-form.form-wizard').find('#' + next_fs).removeClass('hidden');
                 } else {
                     $('.js-tatacapital-form').find('.white-dot-loader').addClass('hidden');
                     $('.js-tatacapital-form.form-wizard').find('#' + error_fs).removeClass('hidden');
                 }
             });
         }
     });

     $('[data-dismiss="jsCloseModal"]').click(function () {
         $('.js-moneyfy-form input, .js-tatacapital-form input').val('');
         $('.js-moneyfy-form .error-msgs, .js-tatacapital-form .error-msgs').remove();
         $('.js-moneyfy-form .white-dot-loader, .js-tatacapital-form .white-dot-loader').addClass('hidden');
         $('#moneyfy02, #tatacapital02, #moneyfy03, #tatacapital03').addClass('hidden');
         $('#moneyfy01, #tatacapital01').removeClass('hidden');
     });

     $('.jsOpenModal').click(function () {
         $('.js-moneyfy-form input, .js-tatacapital-form input').val('');
         $('.js-moneyfy-form .error-msgs, .js-tatacapital-form .error-msgs').remove();
         $('.js-moneyfy-form .white-dot-loader, .js-tatacapital-form .white-dot-loader').addClass('hidden');
         $('#moneyfy02, #tatacapital02, #moneyfy03, #tatacapital03').addClass('hidden');
         $('#moneyfy01, #tatacapital01').removeClass('hidden');
     })

 /* Get apps End */

     // tab function
function apptab_function() {
    $('[data-toggle="apptab"]').click(function (ele) {
        var ele_parents = $(ele.target).parents('.tabcontent').attr('id');
        var ele_target = $(this).data('target');

        $(ele.target).parents('.navTab').find('.nav-tablist').removeClass('active');
        $(this).parent('.nav-tablist').addClass('active');

        $(ele.target).parents('#' + ele_parents).find('.tab-panel').addClass('hidden');
        $(ele.target).parents('#' + ele_parents).find('#' + ele_target).removeClass('hidden');
    });
}
apptab_function();
});


 // validation mobile
 function validateAppMobile(mobileField) {
     var re = /^[4-9][0-9]{9}$/;
     var check = re.test($(mobileField).val());
     if ($(mobileField).val().length != 10 || !check) {
         return false;
     } else {
         return true;
     }
 }
$(function () {
    $('#google-form .input-textbox').focus(function () {
        var ele_getValue = $(this).next('.error-msgs').text();
        $(this).next().remove();
        $(this).after('<span class="error-msgs"></span>');
        var ele_required = "Field is required";
        if ($(this).val().length === 0) {
            $(this).next('.error-msgs').text(ele_required);
        } else {
            $(this).next('.error-msgs').text(ele_getValue);
        }
    });

    $("input[id='termcondition']").click(function () {
        if ($(this).is(':checked')) {
            $('.check-box').find('.error-msgs').remove();
        }
    });




    $('#google-offer-submit').on('click', function(e){
        var ele_input = $('#google-form .input-textbox');
        var selectElements = $('#google-form .select2-hidden-accessible');
        var errors = [];
        var ele_required = "Field is required";

        // Select 2 validation
        $(selectElements).each(function() {
            var select = $(this);
            if ((select).is(":visible") && (select).val() == '') {
                allFilled = false;
                $(select).parents('.textbox-box').addClass('textboxerror');
                $('.select2-hidden-accessible').next('.error-msgs').remove();
                $(selectElements).after('<span class="error-msgs" style="top:100%">' + ele_required + '</span>');
                errors.push(ele_required);
            }
        });

        $(ele_input).each(function() {
			var element = $(this);
			var ele_value = element.val();
			var ele_name = "Please enter full name";
			var ele_email = "Please enter valid email";
            var ele_phoneNumber = "Please enter valid number";
            var ele_cityname = "Please enter city name";
            var ele_pancard = "Please enter valid PAN number";

            $(element).next('.error-msgs').remove();

			if(element.is(":visible")){
			    if (element.val() != '') {
					$(element).after('<span class="error-msgs"></span>');
					if($(element).data('type') === 'fullName-g') {
						var regName = /[A-Za-z]+[ ][A-Za-z]+$/;

						if(ele_value != '' && !regName.test(ele_value)){
							$(element).parents('.textbox-box').addClass('textboxerror');
							$(element).next('.error-msgs').text(ele_name);
							errors.push(ele_name);
						}
						else {
							$(element).parents('.textbox-box').removeClass('textboxerror');
							$(element).next().text('');
						}
					}

					if($(element).data('type') === 'email-g' ) {
						var regEmail = /^[a-zA-Z0-9_.]+[@][a-zA-Z0-9]+[\.][a-zA-z0-9]{2,4}$/gm;

						if(ele_value != '' && !ele_value.match(regEmail)){
							$(element).parents('.textbox-box').addClass('textboxerror');
							$(element).next('.error-msgs').text(ele_email);
							errors.push(ele_email);
						}
						else {
							$(element).parents('.textbox-box').removeClass('textboxerror');
							$(element).next().text('');
						}
					}

					if($(element).data('type') === 'mobileNo-g') {

                        if(!validateMobileV3(element)){
                            $(element).parents('.textbox-box').addClass('textboxerror');
                            $(element).next('.error-msgs').text(ele_phoneNumber);
                            errors.push(ele_phoneNumber);
                        } else {
                            $(element).parents('.textbox-box').removeClass('textboxerror');
                            $(element).next().text('');
                        }
                    }

                    if($(element).data('type') === 'city' ) {
                        var regCountryName = /[a-zA-Z]{4,}/;

                        if(ele_value != '' && !regCountryName.test(ele_value)){
                            $(element).parents('.textbox-box').addClass('textboxerror');
                            $(element).next('.error-msgs').text(ele_cityname);
                            errors.push(ele_cityname);
                        }
                        else {
                            $(element).parents('.textbox-box').removeClass('textboxerror');
                            $(element).next().text('');
                        }
                    }
                    if($(element).data('type') === 'pancard-g' ) {
                        var regCountryName = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

                        if(ele_value != '' && !regCountryName.test(ele_value)){
                            $(element).parents('.textbox-box').addClass('textboxerror');
                            $(element).next('.error-msgs').text(ele_pancard);
                            errors.push(ele_pancard);
                        }
                        else {
                            $(element).parents('.textbox-box').removeClass('textboxerror');
                            $(element).next().text('');
                        }
                    }
                } else {
                    if ($(element).data('type') === 'pancard-g' ) {
                        $(element).parents('.textbox-box').removeClass('textboxerror');
                        $(element).next().text('');
                    }else{
                        $(element).parents('.textbox-box').addClass('textboxerror');
                        $(element).after('<span class="error-msgs">' + ele_required + '</span>');
                        errors.push(ele_required);
                    }

                }
		    }
        });


        if($("input[id='termcondition']").is(':not(:checked)')) {
            $('.check-box').find('.error-msgs').remove();
            var ele_check_error = "Please agree to the T&C to submit";
            $('.check-box').append('<span class="error-msgs">'+ ele_check_error + '</span>');
            errors.push(ele_check_error);
        }else{
            $('.check-box').find('.error-msgs').remove();
        }

        if(errors.length == 0) {
            requestData();
            $('#google-form').find('.textbox-box').removeClass('textboxerror');
            $('#google-form').find('.input-textbox').val('');
            $('#google-form .input-textbox').parents('.textbox-box').removeClass('active-textbox');
            $("#google-form .js-example-basic-single").val('').trigger('change');
            $('#google-form').find('.error-msgs').remove();
            $('#google-form').find("input[id='termcondition']").prop('checked', false);
            $(this).parents('.popover-modal').removeClass('popover-show');
            $(this).parents('.popover-modal').removeAttr('style');
            $('body').removeClass('popover-modal-open');
            $('.popover-backdrop').remove();

            // thanku popup
            setTimeout(function(){
                $('body').find('#google-successfull').addClass('popover-show')
            }, 80);
            $('body').find('#google-successfull').css('display', 'block');
            $('body').addClass('popover-modal-open');
            $('body').append('<div class="popover-backdrop"></div>');

        }
    });

    $('#google-form .input-textbox').on('keyup', function (e) {

        var element = $(this);
        var ele_value = element.val();
        var ele_required = "Field is required";
        var ele_name = "Please enter full name";
        var ele_email = "Please enter valid email";
        var ele_phoneNumber = "Please enter valid number";
        var ele_product = "Please enter product name";
        var ele_cityname = "Please enter city name";
        var ele_pancard = "Please enter valid PAN number";


        if ($(element).val() != '') {
            if ($(element).data('type') === 'fullName-g') {
                var regName = /[A-Za-z]+[ ][A-Za-z]+$/;

                if (ele_value != '' && !regName.test(ele_value)) {
                    $(element).parents('.textbox-box').addClass('textboxerror');
                    $(element).next('.error-msgs').text(ele_name);
                }
                else {
                    $(element).parents('.textbox-box').removeClass('textboxerror');
                    $(element).next().text('');
                }
            }
            if ($(element).data('type') === 'email-g') {
                var regEmail = /^[a-zA-Z0-9_.]+[@][a-zA-Z0-9]+[\.][a-zA-z0-9]{2,4}$/gm;

                if (ele_value != '' && !regEmail.test(ele_value)) {
                    $(element).parents('.textbox-box').addClass('textboxerror');
                    (element).next('.error-msgs').text(ele_email);
                }
                else {

                   	$(element).parents('.textbox-box').removeClass('textboxerror');
                    $(element).next().text('');
                }
            }
            if ($(element).data('type') === 'mobileNo-g') {
                var mobileNo = /[0-9]{10,}/;
                if (ele_value != '' && !mobileNo.test(ele_value)) {
                    $(element).parents('.textbox-box').addClass('textboxerror');
                    $(element).next('.error-msgs').text(ele_phoneNumber);
                } else {
                    $(element).parents('.textbox-box').removeClass('textboxerror');
                    $(element).next().text('');
                }
            }


            if ($(element).data('type') === 'city') {
                var regCountryName = /[a-zA-Z]{4,}/;

                if (ele_value != '' && !regCountryName.test(ele_value)) {
                    $(element).parents('.textbox-box').addClass('textboxerror');
                    $(element).next('.error-msgs').text(ele_cityname);
                }
                else {
                    $(element).parents('.textbox-box').removeClass('textboxerror');
                    $(element).next().text('');
                }
            }

            if ($(element).data('type') === 'pancard-g') {
                var regCountryName = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

                if (ele_value != '' && !regCountryName.test(ele_value)) {
                    $(element).parents('.textbox-box').addClass('textboxerror');
                    $(element).next('.error-msgs').text(ele_pancard);
                }
                else {
                    $(element).parents('.textbox-box').removeClass('textboxerror');
                    $(element).next().text('');
                }
            }

        } else {
            if ($(element).data('type') === 'pancard-g') {
                $(element).parents('.textbox-box').removeClass('textboxerror');
                $(element).next().text('');
            }
            else {
                $(element).parents('.textbox-box').addClass('textboxerror');
                $(element).next('.error-msgs').text(ele_required);
            }

        }

    });

    $('#google-form .js-example-basic-single').on('change', function () {
        $(this).parents('.textbox-box').removeClass('textboxerror');
    });




    // Modal Js //
    //var customerData = typeof(localStorage.getItem('cData')) === "string" ? JSON.parse(localStorage.getItem('cData')) : localStorage.getItem('cData');
    //var customerData = 'ture'
    var offerCount = 0;
    $('[data-popovermodal]').on('click', function () {
        var customerData = typeof (localStorage.getItem('cData')) === "string" ? JSON.parse(localStorage.getItem('cData')) : localStorage.getItem('cData');
        //fetch offer code start
        var data = {};
        data.email = customerData.body.emailId;
        var url = globalConfig.apiCallRetailConfig.preApprovedOffersCall.contextPath + "." + globalConfig.apiCallRetailConfig.preApprovedOffersCall.selector + ".json";
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            async: true,
        })
            .done(function (data) {
                var response = (typeof (data) !== "object") ? JSON.parse(data) : (data);
                var userEmail = customerData.body.emailId;
                //            var count = 0;
                if (response.totalSize != 0) {
                    for (var i = 0; i < response.totalSize; i++) {
                        var productName = response.records[i].Product__r.Name;
                        var offerType = response.records[i].OfferType__c;
                        var lowerCaseProductName = productName.replace(" ", "").toLowerCase();
                        if ((lowerCaseProductName === 'personalloan') || (lowerCaseProductName === 'consumerdurables')) {
                            if (offerType != 'PreQualified') {
                                offerCount++;
                            }
                        }
                    }
                }
                setTimeout(function () {
                    $('.google-offer-loader').addClass('hidden');
                    if (customerData !== '' && offerCount > 0) {
                        $('.google-offer-box .google-checked p').text(userEmail);
                        $('.google-offer-box .google-offer-found h2').text(offerCount + ' offers found!');
                        $('.google-offer-found').removeClass('hidden');
                        $('.gift-box').css('opacity', '0');
                        $('.animated-gift-box').css('opacity', '1');
                    } else {
                        $('.google-sorry, #google-form').removeClass('hidden')
                    }
                }, 2500);

                setTimeout(function () {
                    $('.gift-box').css('opacity', '1').removeClass('gift-box');
                    $('.animated-gift-box').remove();
                }, 5200);

                setTimeout(function () {
                    $('.google-heading').removeClass('translate-top');
                }, 500);
                setTimeout(function () {
                    $('.google-body .img-block').removeClass('translate-scale');
                }, 600);
                setTimeout(function () {
                    $('.google-body .google-checked').removeClass('fade_in');
                }, 1000);
                setTimeout(function () {
                    $('.google-body .google-offer-loader').removeClass('fade_in');
                }, 1100);

                $('#view-offer').on('click', function () {
                    //console.log("res :",response);
                    // if (response.totalSize != 0) {
                    //     var count = 0
                    //     for (var i = 0; i < response.totalSize; i++) {
                    //         var productName = response.records[i].Product__r.Name;
                    //         var offerType = response.records[i].OfferType__c;
                    //         var lowerCaseProductName = productName.replace(" ", "").toLowerCase();
                    //         if ((lowerCaseProductName === 'personalloan') || (lowerCaseProductName === 'consumerdurables')) {
                    //           if(offerType != 'PreQualified'){
                    //              count++;
                    //          }
                    //       }
                    //     }
                    if (offerCount != 0) {
                        $('#preApprovedOfferForm').attr('data-value', 'true');
                        sessionStorage.setItem("offers", (typeof (data) === "object") ? JSON.stringify(data) : (data));
                        window.location.href = "/pre-approved-offers.html";
                    }
                    else {
                        $('#preApprovedOfferForm').attr('data-value', 'true');
                        window.location.href = "/no-offer.html"
                    }

                    if (response.totalSize == 0) {
                        $('#preApprovedOfferForm').attr('data-value', 'true');
                        window.location.href = "/no-offer.html"
                    }
                });
            });


    });
    $('[data-popoverallclose]').on('click', function () {
        $('#google-form').find('.textbox-box').removeClass('textboxerror');
        $('#google-form').find('.input-textbox').val('');
        $('#google-form .input-textbox').parents('.textbox-box').removeClass('active-textbox');
        $("#google-form .js-example-basic-single").val('').trigger('change');
        $('#google-form').find('.error-msgs').remove();
        $('#google-form').find("input[id='termcondition']").prop('checked', false);
    });




    // Modal JS //

    // Open google Modal
    $('[data-popovermodal]').on('click', function () {
        var ele_target = $(this).attr('data-popovermodal');
        setTimeout(function () {
            $(ele_target).addClass('popover-show');
        }, 80);
        $(ele_target).css('display', 'block');
        $('body').addClass('popover-modal-open');
        $('body').append('<div class="popover-backdrop"></div>');
        var loggedInEmailId = JSON.parse(localStorage.getItem('cData')).body.emailId;
        $('#google-form .userEmail').addClass('active-textbox');
        $('#google-form [data-type="email-g"]').val(loggedInEmailId);
        $('.google-offer-box .google-checked p').text(loggedInEmailId);
    });

    $('[data-popoverclose]').on('click', function () {
        $(this).parents('.popover-modal').removeClass('popover-show');
        $(this).parents('.popover-modal').removeAttr('style');
        $('body').removeClass('popover-modal-open');
        $('.popover-backdrop').remove();
    });

    $('[data-popoverallclose]').on('click', function () {
        $('body').find('.popover-modal').removeClass('popover-show');
        $('body').find('.popover-modal').removeAttr('style');
        $('body').removeClass('popover-modal-open');
        $('.popover-backdrop').remove();
        $('.popover-modal').removeClass('popover-content-overlay');
    });

    $('[data-popoverconfirm]').on('click', function () {
        if (offerCount > 0) {
            $('.google-confirm-text .text13').text('You can come back anytime to view the offers curated just for you.');
        } else {
            $('.google-confirm-text .text13').text('You will not be eligible for exclusive offers from Tata Capital.');
        }
        $('.google-offer-box .google-offer-found h2').text(offerCount + ' offers found!');
        var ele_target = $(this).attr('data-popoverconfirm');
        $(this).parents('.popover-modal').addClass('popover-content-overlay');
        setTimeout(function () {
            $(ele_target).addClass('popover-show');
        }, 80);
        $(ele_target).css('display', 'block');
    });

    $('[data-innerpopoverclose]').on('click', function () {
        $(this).parents('.popover-modal').removeClass('popover-show');
        $(this).parents('.popover-modal').removeAttr('style');
        $('.popover-modal').removeClass('popover-content-overlay');
    });

    // Open google Modal JS //

});

$(document).ready(function () {
    $('.drop-val-select2').select2({
        placeholder: "select"
    });

});

function validateMobileV3(mobileField) {
    var re = /^[4-9][0-9]{9}$/;
    var check = re.test($(mobileField).val());
    if ($(mobileField).val().length != 10 || !check) {
        return false;
    } else {
        return true;
    }
}

function requestData() {
    // console.log("Response: ", response, " Data : ", parseJwt(response.credential));
    // var parseObj = parseJwt(response.credential);
    var termCondition = $('#termcondition').is(':checked');
    var reqObj = {
        "header": {
            "authToken": ""
        },
        "body": {
            "perpetualId": getCookie("perpetualId"),
            "fullName": $('input[data-type="fullName-g"]').val().toUpperCase(),
            "emailId": $('input[data-type="email-g"]').val(),
            "mobileNo": $('input[data-type="mobileNo-g"]').val(),
            "pan": $('input[data-type="pancard-g"]').val().toUpperCase(),
            "product": $('#google-form select[data-type="productValue"] :selected').val(),
            "city": $('#google-form select[data-type="city"] :selected').val(),
            "isTermConditionAgreed": termCondition == true ? 'yes' : 'no'
        }
    }
    $('.page-loader').removeClass('hidden');
    requestDataApiCall(reqObj);
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function requestDataApiCall(reqObj) {
    var apiURL = "/content/tata-capital/retailapi.get-register-offer-details";
    var formData = new FormData();
    formData.append('data', JSON.stringify(reqObj));
    var apiCall = apiCallFunction(apiURL, formData, 'POST');
    apiCall.then(function (res) {
        $('.page-loader').addClass('hidden');
        var response = JSON.parse(res);
        if (response.body.Status == true) {
            showGoogleSuccessPopup(true);
        } else {
            showGoogleSuccessPopup(false);
        }
    });
}

function showGoogleSuccessPopup(status) {
    if (status) {	
        $(".google-thank-you .text-uppercase").html("THANK YOU FOR SHARING YOUR DETAILS");
        $(".google-thank-you .text13").html("Your special offers will be curated soon!");
        $('body').find('#google-successfull').addClass('popover-show');
        $('body').find('#google-successfull').css('display', 'block');
        $('body').addClass('popover-modal-open');
        $('body').append('<div class="popover-backdrop"></div>');
        var mobileNumber = $('input[data-type="mobileNo-g"]').val();
        var productName = $('#google-form select[data-type="productValue"] :selected').val();
        var cityName = $('#google-form select[data-type="city"] :selected').val();
        _satellite.track('exclusive-offer-register-submit',{mobileNo:mobileNumber,product:productName,city:cityName})
        
    } else {
        $(".google-thank-you .text-uppercase").html("Fail");
        $(".google-thank-you .text13").html("something went wrong");
        $('body').find('#google-successfull').addClass('popover-show');
        $('body').find('#google-successfull').css('display', 'block');
        $('body').addClass('popover-modal-open');
        $('body').append('<div class="popover-backdrop"></div>');
    }
}

function apiCallFunction(url, data, method) {
    return new Promise(function (resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(this.responseText);

                } else {
                    reject(this.responseText);

                }
            }
        };
        xhttp.open(method, url, true);
        xhttp.send(data);
    })
}

$(function () {
    var scrollFlag = false;
    if(screen.width <= 786){
        document.addEventListener('touchstart', function() {
            if (scrollFlag == false) {
                scrollFlag = true;
                if ($(".city-name").length) {
                    if(sessionStorage.getItem('cityMasterResponse')){
                        var obj = JSON.parse(sessionStorage.getItem('cityMasterResponse'));
                        var mainObj = {};
                        for (var item in obj.Master) {
                            var subObj = {};
                            if (!mainObj.hasOwnProperty(obj.Master[item].product)) {
                                var arr = [];
                                mainObj[obj.Master[item].product] = subObj;
                                subObj[productName] = obj.Master[item]['product-name'];
                                arr.push(obj.Master[item].city);
                                subObj['cities'] = arr;

                            } else {
                                var subObj = mainObj[obj.Master[item].product];
                                var arr = subObj['cities']
                                arr.push(obj.Master[item].city);
                            }
                        }
                        jsonCityProductMaster = mainObj;
                        jsonCityProductMaster["PL"].cities.forEach(function (element) {
                            $(".city-name").append('<option value=' + element + '>' + element + '</option>');
                        });
                    }else{
                        $.ajax({
                            url: '/content/tata-capital/mdm.cityproductmaster.json',
                            type: "GET",
                            async: true,
                            success: function (data, status, xhr) {
                                var obj = JSON.parse(xhr.responseText);
                                var mainObj = {};
                                sessionStorage.setItem('cityMasterResponse', xhr.responseText);
                                for (var item in obj.Master) {
                                    var subObj = {};
                                    if (!mainObj.hasOwnProperty(obj.Master[item].product)) {
                                        var arr = [];
                                        mainObj[obj.Master[item].product] = subObj;
                                        subObj[productName] = obj.Master[item]['product-name'];
                                        arr.push(obj.Master[item].city);
                                        subObj['cities'] = arr;

                                        for (var item in obj.Master) {
                                            var subObj = {};
                                            if (!mainObj.hasOwnProperty(obj.Master[item].product)) {
                                                var arr = [];
                                                mainObj[obj.Master[item].product] = subObj;
                                                subObj[productName] = obj.Master[item]['product-name'];
                                                arr.push(obj.Master[item].city);
                                                subObj['cities'] = arr;

                                            } else {
                                                var subObj = mainObj[obj.Master[item].product];
                                                var arr = subObj['cities']
                                                arr.push(obj.Master[item].city);
                                            }
                                        }
                                        jsonCityProductMaster = mainObj;
                                        jsonCityProductMaster["PL"].cities.forEach(function (element) {
                                            $(".city-name").append('<option value=' + element + '>' + element + '</option>');
                                        });
                                    }
                                }
                            }
                        });
                    }
                }
            }
        })
    } else{
        document.addEventListener('mousemove', function() {
            if (scrollFlag == false) {
                scrollFlag = true;
                if ($(".city-name").length) {
                    if(sessionStorage.getItem('cityMasterResponse')){
                        var obj = JSON.parse(sessionStorage.getItem('cityMasterResponse'));
                        var mainObj = {};
                        for (var item in obj.Master) {
                            var subObj = {};
                            if (!mainObj.hasOwnProperty(obj.Master[item].product)) {
                                var arr = [];
                                mainObj[obj.Master[item].product] = subObj;
                                subObj[productName] = obj.Master[item]['product-name'];
                                arr.push(obj.Master[item].city);
                                subObj['cities'] = arr;

                            } else {
                                var subObj = mainObj[obj.Master[item].product];
                                var arr = subObj['cities']
                                arr.push(obj.Master[item].city);
                            }
                        }
                        jsonCityProductMaster = mainObj;
                        jsonCityProductMaster["PL"].cities.forEach(function (element) {
                            $(".city-name").append('<option value=' + element + '>' + element + '</option>');
                        });
                    }else{
                        $.ajax({
                            url: '/content/tata-capital/mdm.cityproductmaster.json',
                            type: "GET",
                            async: true,
                            success: function (data, status, xhr) {
                                var obj = JSON.parse(xhr.responseText);
                                var mainObj = {};
                                sessionStorage.setItem('cityMasterResponse', xhr.responseText);
                                for (var item in obj.Master) {
                                    var subObj = {};
                                    if (!mainObj.hasOwnProperty(obj.Master[item].product)) {
                                        var arr = [];
                                        mainObj[obj.Master[item].product] = subObj;
                                        subObj[productName] = obj.Master[item]['product-name'];
                                        arr.push(obj.Master[item].city);
                                        subObj['cities'] = arr;

                                        for (var item in obj.Master) {
                                            var subObj = {};
                                            if (!mainObj.hasOwnProperty(obj.Master[item].product)) {
                                                var arr = [];
                                                mainObj[obj.Master[item].product] = subObj;
                                                subObj[productName] = obj.Master[item]['product-name'];
                                                arr.push(obj.Master[item].city);
                                                subObj['cities'] = arr;

                                            } else {
                                                var subObj = mainObj[obj.Master[item].product];
                                                var arr = subObj['cities']
                                                arr.push(obj.Master[item].city);
                                            }
                                        }
                                        jsonCityProductMaster = mainObj;
                                        jsonCityProductMaster["PL"].cities.forEach(function (element) {
                                            $(".city-name").append('<option value=' + element + '>' + element + '</option>');
                                        });
                                    }
                                }
                            }
                        });
                    }
                }
            }
        })
    }
});

$(document).ready(function () {
    $('#covid-information-carousel-single').slick({
        dots: true,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    })

    $('#covid-single-carousel').on('init reInit', function (event, slick, currentSlide, nextSlide) {
        var count = slick.slideCount;
        if (count === 1) {
            $('.slick-dots').hide();
            $(this).addClass('carousel-single-slide');
        }
    });
    $('#covid-single-carousel').slick({
        dots: true,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('#covid-information-carousel').slick({
        dots: true,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    }).on('afterChange', function (event, slick, currentSlide, nextSlide) {

        if ($('.slick-current').hasClass('blue-theme')) {
            $(this).parents('.covid-information-box').removeClass('lime-theme black-theme white-theme gray-theme').addClass('blue-theme')
        }
        if ($('.slick-current').hasClass('lime-theme')) {
            $(this).parents('.covid-information-box').removeClass('blue-theme black-theme white-theme gray-theme').addClass('lime-theme')
        }
        if ($('.slick-current').hasClass('black-theme')) {
            $(this).parents('.covid-information-box').removeClass('blue-theme lime-theme white-theme gray-theme').addClass('black-theme')
        }
        if ($('.slick-current').hasClass('white-theme')) {
            $(this).parents('.covid-information-box').removeClass('blue-theme black-theme lime-theme gray-theme').addClass('white-theme')
        }
        if ($('.slick-current').hasClass('gray-theme')) {
            $(this).parents('.covid-information-box').removeClass('blue-theme black-theme white-theme lime-theme').addClass('gray-theme')
        }

    }).on('setPosition', function (event, slick) {
        slick.$slides.css('min-height', slick.$slideTrack.height() + 'px');
    });





    $('.js-close-covid-information').click(function () {
        $(this).parents('.covid-information-box').fadeOut();
    })

    // Configure/customize these variables.
    var showChar = 320;  // How many characters are shown by default
    var ellipsestext = "";
    var moretext = "Read More";
    var lesstext = "Read Less";


    $('.notification-contentmore').each(function () {
        var content = $(this).html();

        if (content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext + '...</span><span class="morecontent"><span>' + h + '</span> <div class="readmore-text"><a href="javascript:void(0)" class="morelink">' + moretext + '</a></div>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function () {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();

        $('#covid-information-carousel').slick('refresh').on('setPosition', function (event, slick) {
            slick.$slides.css('min-height', slick.$slideTrack.height() + 'px');
        });

      
        return false;
    });

    $('.notification-action li a[data-popovermodal-scr]').on('click', function (e) {
        var ele_target = $(e.target).attr('data-popovermodal-scr');
        setTimeout(function () {
            $("#"+ele_target).addClass('popover-show');
        }, 80);
        $("#"+ele_target).css('display', 'block');
        $('body').addClass('popover-modal-open');
        $('body').append('<div class="popover-backdrop"></div>');
    });

    $('[data-popoverallclose]').on('click', function(){
        $('body').find('.popover-modal').removeClass('popover-show');
        $('body').find('.popover-modal').removeAttr('style');
        $('body').removeClass('popover-modal-open');
        $('.popover-backdrop').remove();
        $('.popover-modal').removeClass('popover-content-overlay');
    });
})
$(document).ready(function () {
    $('#covid-information-carousel-single').slick({
        dots: true,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    })

    $('#covid-single-carousel').on('init reInit', function (event, slick, currentSlide, nextSlide) {
        var count = slick.slideCount;
        if (count === 1) {
            $('.slick-dots').hide();
            $(this).addClass('carousel-single-slide');
        }
    });
    $('#covid-single-carousel').slick({
        dots: true,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('#covid-information-carousel').slick({
        dots: true,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    }).on('afterChange', function (event, slick, currentSlide, nextSlide) {

        if ($('.slick-current').hasClass('blue-theme')) {
            $(this).parents('.covid-information-box').removeClass('lime-theme black-theme white-theme gray-theme').addClass('blue-theme')
        }
        if ($('.slick-current').hasClass('lime-theme')) {
            $(this).parents('.covid-information-box').removeClass('blue-theme black-theme white-theme gray-theme').addClass('lime-theme')
        }
        if ($('.slick-current').hasClass('black-theme')) {
            $(this).parents('.covid-information-box').removeClass('blue-theme lime-theme white-theme gray-theme').addClass('black-theme')
        }
        if ($('.slick-current').hasClass('white-theme')) {
            $(this).parents('.covid-information-box').removeClass('blue-theme black-theme lime-theme gray-theme').addClass('white-theme')
        }
        if ($('.slick-current').hasClass('gray-theme')) {
            $(this).parents('.covid-information-box').removeClass('blue-theme black-theme white-theme lime-theme').addClass('gray-theme')
        }

    }).on('setPosition', function (event, slick) {
        slick.$slides.css('min-height', slick.$slideTrack.height() + 'px');
    });





    $('.js-close-covid-information').click(function () {
        $(this).parents('.covid-information-box').fadeOut();
    })

    // Configure/customize these variables.
    var showChar = 320;  // How many characters are shown by default
    var ellipsestext = "";
    var moretext = "Read More";
    var lesstext = "Read Less";


    $('.notification-contentmore').each(function () {
        var content = $(this).html();

        if (content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext + '...</span><span class="morecontent"><span>' + h + '</span> <div class="readmore-text"><a href="javascript:void(0)" class="morelink">' + moretext + '</a></div>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function () {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();

        $('#covid-information-carousel').slick('refresh').on('setPosition', function (event, slick) {
            slick.$slides.css('min-height', slick.$slideTrack.height() + 'px');
        });

      
        return false;
    });

    $('.notification-action li a[data-popovermodal-scr]').on('click', function (e) {
        var ele_target = $(e.target).attr('data-popovermodal-scr');
        setTimeout(function () {
            $("#"+ele_target).addClass('popover-show');
        }, 80);
        $("#"+ele_target).css('display', 'block');
        $('body').addClass('popover-modal-open');
        $('body').append('<div class="popover-backdrop"></div>');
    });

    $('[data-popoverallclose]').on('click', function(){
        $('body').find('.popover-modal').removeClass('popover-show');
        $('body').find('.popover-modal').removeAttr('style');
        $('body').removeClass('popover-modal-open');
        $('.popover-backdrop').remove();
        $('.popover-modal').removeClass('popover-content-overlay');
    });
})
$(document).ready(function(){

    $('#banner-carousel').slick({
        dots: true,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('#browse-loan-carousel').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                   // centerMode: true,
                   // centerPadding: '15px',
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });


});
$(document).ready(function(){
	$('.jsCloseStatus').click(function(){
		$(this).parents('.check-application-status').fadeOut('1000');
	})
})

document.addEventListener('DOMContentLoaded', function(){   
    /*29-11-2021*/ 
    $('#blog-sliders').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px'
                }
            }
        ]
    });
    /*29-11-2021*/
    
   var twitterShare = document.querySelectorAll('[data-js="twitter-share-new"]');

    twitterShare.forEach((element, index) => {
        twitterShare[index].onclick = function (e) {
            var social = this.dataset.shareurl;
            var socialtext = this.dataset.sharetext;
            e.preventDefault();
            var twitterWindow = window.open(
                "https://twitter.com/share?text=" + socialtext + "&" + "url=" + social
            );
            if (twitterWindow.focus) {
                twitterWindow.focus();
            }
            return false;
        };
    });

    var facebookShare = document.querySelectorAll('[data-js="facebook-share-new"]');

    facebookShare.forEach((element, index) => {
        facebookShare[index].onclick = function (e) {
            var social = this.dataset.shareurl;
            var socialtext = this.dataset.sharetext;
            e.preventDefault();
            var facebookWindow = window.open(
                "https://www.facebook.com/sharer/sharer.php?hashtag=" +
                socialtext +
                "&" +
                "u=" +
                social,
                "facebook-popup",
                "height=350,width=600"
            );
            if (facebookWindow.focus) {
                facebookWindow.focus();
            }
            return false;
        };
    });

    /*blog share dropdown js 30-11-2021*/ 
    $(document).mouseup(function (e) {
        var container = $('.share-media-wrap');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('active');
        }
    });
    /*blog share dropdown js 30-11-2021*/ 
})
document.addEventListener('DOMContentLoaded', function(){   
    /*29-11-2021*/ 
    $('#blog-sliders').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px'
                }
            }
        ]
    });
    /*29-11-2021*/
    
   var twitterShare = document.querySelectorAll('[data-js="twitter-share-new"]');

    twitterShare.forEach((element, index) => {
        twitterShare[index].onclick = function (e) {
            var social = this.dataset.shareurl;
            var socialtext = this.dataset.sharetext;
            e.preventDefault();
            var twitterWindow = window.open(
                "https://twitter.com/share?text=" + socialtext + "&" + "url=" + social
            );
            if (twitterWindow.focus) {
                twitterWindow.focus();
            }
            return false;
        };
    });

    var facebookShare = document.querySelectorAll('[data-js="facebook-share-new"]');

    facebookShare.forEach((element, index) => {
        facebookShare[index].onclick = function (e) {
            var social = this.dataset.shareurl;
            var socialtext = this.dataset.sharetext;
            e.preventDefault();
            var facebookWindow = window.open(
                "https://www.facebook.com/sharer/sharer.php?hashtag=" +
                socialtext +
                "&" +
                "u=" +
                social,
                "facebook-popup",
                "height=350,width=600"
            );
            if (facebookWindow.focus) {
                facebookWindow.focus();
            }
            return false;
        };
    });

    /*blog share dropdown js 30-11-2021*/ 
    $(document).mouseup(function (e) {
        var container = $('.share-media-wrap');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('active');
        }
    });
    /*blog share dropdown js 30-11-2021*/ 
})