(self.webpackChunk_rk_rahulkatariya=self.webpackChunk_rk_rahulkatariya||[]).push([[102],{6086:function(t,e,n){"use strict";n.r(e);var r=n(7294),u=n(4160),o=n(1804),a=n.n(o),f=n(6884);e.default=t=>{let{data:{site:{siteMetadata:e},allMarkdownRemark:{totalCount:n,edges:o}},pageContext:c}=t;const i=`${n} post${1===n?"":"s"} tagged with "${c.category}"`;return r.createElement(f.vZ,{title:"Category: "+c.category,header:r.createElement(r.Fragment,null,"Category – ",c.category),subheader:r.createElement(r.Fragment,null,i," (See"," ",r.createElement("a",{href:"#",onClick:()=>(0,u.c4)("/blog/categories")},"All categories"),")"),metadata:e,titleLinkHandler:()=>(0,u.c4)("/")},r.createElement(f.ZJ,{postEdges:o,metadata:e,next:c.nextPage,prev:c.previousPage,articleLinkHandler:t=>(0,u.c4)(t),categoryLinkHandler:t=>(0,u.c4)(`/blog/categories/${a()(t)}`),prevLinkHandler:t=>(0,u.c4)(t),nextLinkHandler:t=>(0,u.c4)(t)}))}},2705:function(t,e,n){var r=n(5639).Symbol;t.exports=r},9932:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,u=Array(r);++n<r;)u[n]=e(t[n],n,t);return u}},2663:function(t){t.exports=function(t,e,n,r){var u=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++u]);++u<o;)n=e(n,t[u],u,t);return n}},9029:function(t){var e=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(e)||[]}},4239:function(t,e,n){var r=n(2705),u=n(9607),o=n(2333),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?u(t):o(t)}},8674:function(t){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},531:function(t,e,n){var r=n(2705),u=n(9932),o=n(1469),a=n(3448),f=r?r.prototype:void 0,c=f?f.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return u(e,t)+"";if(a(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n}},5393:function(t,e,n){var r=n(2663),u=n(3816),o=n(8748),a=RegExp("['’]","g");t.exports=function(t){return function(e){return r(o(u(e).replace(a,"")),t,"")}}},9389:function(t,e,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},1957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},9607:function(t,e,n){var r=n(2705),u=Object.prototype,o=u.hasOwnProperty,a=u.toString,f=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,f),n=t[f];try{t[f]=void 0;var r=!0}catch(c){}var u=a.call(t);return r&&(e?t[f]=n:delete t[f]),u}},3157:function(t){var e=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return e.test(t)}},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5639:function(t,e,n){var r=n(1957),u="object"==typeof self&&self&&self.Object===Object&&self,o=r||u||Function("return this")();t.exports=o},2757:function(t){var e="\\ud800-\\udfff",n="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",u="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+o+"]",f="\\d+",c="["+n+"]",i="["+r+"]",l="[^"+e+o+f+n+r+u+"]",x="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",s="["+u+"]",p="(?:"+i+"|"+l+")",g="(?:"+s+"|"+l+")",v="(?:['’](?:d|ll|m|re|s|t|ve))?",b="(?:['’](?:D|LL|M|RE|S|T|VE))?",y="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",h="[\\ufe0e\\ufe0f]?",A=h+y+("(?:\\u200d(?:"+["[^"+e+"]",x,d].join("|")+")"+h+y+")*"),j="(?:"+[c,x,d].join("|")+")"+A,E=RegExp([s+"?"+i+"+"+v+"(?="+[a,s,"$"].join("|")+")",g+"+"+b+"(?="+[a,s+p,"$"].join("|")+")",s+"?"+p+"+"+v,s+"+"+b,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",f,j].join("|"),"g");t.exports=function(t){return t.match(E)||[]}},3816:function(t,e,n){var r=n(9389),u=n(9833),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=u(t))&&t.replace(o,r).replace(a,"")}},1469:function(t){var e=Array.isArray;t.exports=e},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,e,n){var r=n(4239),u=n(7005);t.exports=function(t){return"symbol"==typeof t||u(t)&&"[object Symbol]"==r(t)}},1804:function(t,e,n){var r=n(5393)((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));t.exports=r},9833:function(t,e,n){var r=n(531);t.exports=function(t){return null==t?"":r(t)}},8748:function(t,e,n){var r=n(9029),u=n(3157),o=n(9833),a=n(2757);t.exports=function(t,e,n){return t=o(t),void 0===(e=n?void 0:e)?u(t)?a(t):r(t):t.match(e)||[]}}}]);
//# sourceMappingURL=component---src-templates-category-js-1c310186f8b30accc005.js.map