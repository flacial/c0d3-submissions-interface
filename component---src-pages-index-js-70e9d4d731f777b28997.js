(self.webpackChunkc0d3_submissions_interface=self.webpackChunkc0d3_submissions_interface||[]).push([[678],{523:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!o(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!o(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!o(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},6124:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},2252:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Qe}});var r,i,o,a,c=n(7294),l=n(5697),u=n.n(l),s=n(6124),f=n.n(s),d=n(523),p=n.n(d),h=n(4756),m=n.n(h),g="bodyAttributes",b="htmlAttributes",y="titleAttributes",C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(C).map((function(e){return C[e]})),"charset"),x="cssText",A="href",w="http-equiv",E="innerHTML",T="itemprop",k="name",S="property",L="rel",O="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",M="defer",_="encodeSpecialCharacters",N="onChangeClientState",F="titleTemplate",R=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),B=[C.NOSCRIPT,C.SCRIPT,C.STYLE],q="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=X(e,C.TITLE),n=X(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,j);return t||r||void 0},J=function(e){return X(e,N)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Z({},e,t)}),{})},W=function(e,t){return t.filter((function(e){return void 0!==e[C.BASE]})).map((function(e){return e[C.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],l=c.toLowerCase();-1===t.indexOf(l)||n===L&&"canonical"===e[n].toLowerCase()||l===L&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==E&&c!==x&&c!==T||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][u]&&(i[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],l=m()({},r[c],i[c]);r[c]=l}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;le(C.BODY,r),le(C.HTML,i),ce(f,d);var p={baseTag:ue(C.BASE,n),linkTags:ue(C.LINK,o),metaTags:ue(C.META,a),noscriptTags:ue(C.NOSCRIPT,c),scriptTags:ue(C.SCRIPT,u),styleTags:ue(C.STYLE,s)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),l(e,h,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(C.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(q),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===i.indexOf(l)&&i.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(q):n.getAttribute(q)!==a.join(",")&&n.setAttribute(q,a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(C.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===E)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(q,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case C.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[q]=!0,i=fe(n,r),[c.createElement(C.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=se(n),o=ae(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case b:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[q]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===E||n===x){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),c.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===E||e===x)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(C.BASE,t,r),bodyAttributes:de(g,n,r),htmlAttributes:de(b,i,r),link:de(C.LINK,o,r),meta:de(C.META,a,r),noscript:de(C.NOSCRIPT,c,r),script:de(C.SCRIPT,l,r),style:de(C.STYLE,u,r),title:de(C.TITLE,{title:f,titleAttributes:d},r)}},he=f()((function(e){return{baseTag:W([A,P],e),bodyAttributes:V(g,e),defer:X(e,M),encode:X(e,_),htmlAttributes:V(b,e),linkTags:Q(C.LINK,[L,A],e),metaTags:Q(C.META,[k,v,w,S,T],e),noscriptTags:Q(C.NOSCRIPT,[E],e),onChangeClientState:J(e),scriptTags:Q(C.SCRIPT,[O,E],e),styleTags:Q(C.STYLE,[x],e),title:G(e),titleAttributes:V(y,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),pe)((function(){return null})),me=(i=he,a=o=function(e){function t(){return H(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:t};case C.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return Z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Z({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case C.TITLE:return Z({},i,((t={})[r.type]=a,t.titleAttributes=Z({},o),t));case C.BODY:return Z({},i,{bodyAttributes:Z({},o)});case C.HTML:return Z({},i,{htmlAttributes:Z({},o)})}return Z({},i,((n={})[r.type]=Z({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Z({},t);return Object.keys(e).forEach((function(t){var r;n=Z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(Y(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=Z({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(i,r)},z(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind;var ge=n(9925),be=ge.default.div.withConfig({displayName:"layout__StyledLayout",componentId:"sc-1vizqht-0"})(["width:100%;height:100%;font-family:Rubik;display:flex;justify-content:center;align-items:center;flex-direction:column;padding:20px;"]),ye=function(e){var t=e.children;return c.createElement(c.Fragment,null,c.createElement(me,null,c.createElement("title",null,"C0D3 Submissions - Flacial")),c.createElement(be,null,t))},Ce=ge.default.h1.withConfig({displayName:"Heading",componentId:"sc-1e03a0u-0"})(["background:linear-gradient(135deg,#a9e9ff,#ffffff);text-shadow:",";color:white;-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:48px;font-weight:700;position:",";top:",";@media (max-width:400px){font-size:42px;}@media (max-width:360px){font-size:34px;}"],(function(e){return!0===e.primary?"0px 2px 17px rgba(20,94,120,0.44)":"none"}),(function(e){return e.primary?"initial":"absolute"}),(function(e){return e.primary?"auto":"0"})),ve=ge.default.div.withConfig({displayName:"Heading__HeadingShadowWorkaround",componentId:"sc-1e03a0u-1"})(["position:relative;margin-bottom:30px;"]),xe=function(e){var t=e.children;return c.createElement(ve,null,c.createElement(Ce,{primary:!0},t),c.createElement(Ce,null,t))},Ae=ge.default.div.withConfig({displayName:"Card",componentId:"sc-xxkhi9-0"})(["height:100%;width:100%;max-width:384px;max-height:494px;border-radius:20px;background:#003459;position:relative;z-index:20;@media (max-height:580px){height:413px;}@media (min-height:600px){height:494px;}"]),we=ge.default.div.withConfig({displayName:"CardContainer",componentId:"sc-1byesbd-0"})(["position:relative;box-shadow:0px 0px 20px -2px rgba(15,69,89,0.47);border-radius:18px;@media (max-width:600px){overflow:hidden;}"]),Ee=ge.default.div.withConfig({displayName:"TabButtonsContainer",componentId:"sc-10m1ygz-0"})(["display:flex;"]),Te=function(e){return e?"rgba(0, 103, 179, 0.2)":"rgba(0, 103, 179, 0.1)"},ke=ge.default.div.withConfig({displayName:"Line",componentId:"sc-1toi3px-0"})(["display:",";border:solid "," ",";background-color:",";"],(function(e){return e.vertical?"inline":"block"}),(function(e){var t=e.borderWidth;return t||"1.5px"}),(function(e){var t=e.vertical;return Te(t)}),(function(e){var t=e.vertical;return Te(t)})),Se=n(9974),Le=n.n(Se),Oe=ge.default.div.withConfig({displayName:"Challenge",componentId:"sc-13g521a-0"})(["h3{color:#FFFFFF;font-weight:500;}p{color:#007EA7;font-weight:500;}"]),Pe=ge.default.div.withConfig({displayName:"Challenge__ChallengeNameAndIcon",componentId:"sc-13g521a-1"})(["display:flex;align-items:center;justify-content:space-between;& div{padding:10px;cursor:pointer;}svg{transition:filter 0.3s ease;}& div:hover svg{filter:invert(42%) sepia(93%) saturate(1352%) hue-rotate(138deg);}"]),Ie=function(e){var t=e.content,n=e.tabindex,r=e.currentTab,i=t.map((function(e,n){var r=e.name,i=e.description,o=e.path;return c.createElement(c.Fragment,{key:n},c.createElement(Oe,null,c.createElement(Pe,null,c.createElement("h3",null,r),c.createElement("div",null,c.createElement("a",{rel:"noreferrer",target:"_blank",href:"https://laicalf.freedomains.dev/"+o},c.createElement(Le(),null)))),c.createElement("p",null,i)),n!==t.length-1&&c.createElement(ke,null))}));return r===n?c.createElement(c.Fragment,null,i):null},je=[{name:"IP Geolocation",description:"A site to display and lists all the users locations through Google Maps API",path:"p1"},{name:"Commands",description:"A site where users can send Terminal Commands to the server and receive the output",path:"p2/commands"},{name:"Meme Generator",description:"A site that uses Jimp to create an image made from the text sent by the user",path:"p3"}],Me=[{name:"GraphQL Intro",description:"A gentle introduction to GraphQL with TypeDefs, Resolvers, and Queries",path:"js6/graphql-intro"},{name:"React Stars and Kanban",description:"An introduction to React. Refactor Stars and Kanban challenges to JSXReact.",path:"js6/react-stars-and-kanban"}],_e=ge.default.button.withConfig({displayName:"TabButton__StyledTabButton",componentId:"sc-1yaidrl-0"})(["width:100%;height:100%;padding:14px 0;border-radius:",";background-color:",";border:0;cursor:",";& p{color:hsl(195.7,100%,35.3%);font-size:36px;font-weight:600;}",""],(function(e){return!0===e.left?"20px 0px 0px 0px":!0===e.right&&"0px 20px 0px 0px"}),(function(e){return e.focus?"hsl(204.9, 100%, 17.5%)":"hsl(205.3, 100%, 14.9%)"}),(function(e){return e.focus?"auto":"pointer"}),(function(e){return!e.focus&&"\n  &:hover {\n    background-color: hsl(205.3, 100%, 15.45%);\n\n    & p {\n      color: hsl(195.7, 100%, 37.3%);\n    }\n  }\n "})),Ne=function(e){var t=e.children,n=e.setCurrentTab,r=e.focus,i=e.left,o=e.right,a=e.tabindex,l=e.currentTab;return c.createElement(_e,{right:o,left:i,focus:r,onClick:function(){return function(e){return l!==e&&n(e)}(a)}},c.createElement("p",null,t))},Fe=(0,ge.keyframes)(["from{opacity:0;transform:translateY(20px);}to{opacity:1;}"]),Re=ge.default.div.withConfig({displayName:"TabPanelsContainer",componentId:"sc-h2q3ld-0"})(["display:flex;flex-direction:column;position:relative;padding:10px 45px;row-gap:20px;overflow-y:auto;max-height:82%;height:100%;animation:"," 0.5s ease;&::-webkit-scrollbar{width:0.4rem;}&::-webkit-scrollbar-thumb{width:7.64px;height:97.63px;border-radius:4px;background:#007ea7}"],Fe),Be=function(e){var t=e.defaultTab,n=(0,c.useState)(t||0),r=n[0],i=n[1];return c.createElement(c.Fragment,null,c.createElement(Ee,null,c.createElement(Ne,{tabindex:0,left:!0,focus:0===r,currentTab:r,setCurrentTab:i},"JS5"),c.createElement(ke,{vertical:!0}),c.createElement(Ne,{tabindex:1,right:!0,focus:1===r,currentTab:r,setCurrentTab:i},"JS6")),c.createElement(Re,null,c.createElement(Ie,{currentTab:r,tabindex:0,content:je}),c.createElement(Ie,{currentTab:r,tabindex:1,content:Me})))},qe=n(3036),De=n.n(qe),He=n(7177),ze=n.n(He),Ze=n(3626),Ye=n.n(Ze),Ue=ge.default.button.withConfig({displayName:"AsideToggleButton__StyledToggleAsideButton",componentId:"sc-htrkfe-0"})(["width:29px;height:13px;background-color:hsl(204.8,100%,14.7%);box-shadow:inset 10px 0px 5px -13px;border:0;border-radius:0 4px 4px 0;position:absolute;right:-29px;top:50%;cursor:pointer;transition:background-color 0.3s ease;&:hover{background-color:hsl(204.8,100%,16.7%);}@media (max-width:600px){& svg{filter:invert(1);width:20px;}background-color:hsl(188deg 98% 47%);&:hover{background-color:hsl(188deg 98% 49%);}right:-29px;}"]),Ke=function(e){var t=e.setRight,n=e.children,r=e.right;return c.createElement(Ue,{onClick:function(){return t((function(e){return"0"===e?r:"0"}))}},n)},Ge=ge.default.div.withConfig({displayName:"AsideLink",componentId:"sc-1sfymqt-0"})(["width:36px;height:35.58px;border-radius:6px;background:hsl(195.5,100%,6.1%);display:grid;place-items:center;cursor:pointer;& svg{width:21px;height:auto;}& a{text-decoration:none;}& span{color:#007EA7;font-size:10.5px;font-weight:600;line-height:0;}"]),Je=ge.default.div.withConfig({displayName:"AsideLinks__StyledAsideLinks",componentId:"sc-1vujy9c-0"})(["width:95px;background-color:#002c4b;box-shadow:0px 0px 20px -2px ",";position:absolute;bottom:0;right:0;border-radius:8px;display:flex;align-items:center;justify-content:center;padding-left:23px;padding-block:20px;row-gap:10px;flex-direction:column;transform:",";transition:transform ",";@media (max-width:600px){top:100px;left:-70px;bottom:auto;right:auto;padding-left:0;z-index:30;width:70px;}"],(function(e){return e.isVisible?"rgba(15,69,89,0.47)":"transparent"}),(function(e){var t=e.toRight;return t&&t}),(function(e){return e.isVisible?"ease-out 0.4s":"ease-in 0.2s"})),Ve=function(){var e=(0,c.useState)("0"),t=e[0],n=e[1];return c.createElement(Je,{toRight:"translateX("+t+")",isVisible:"0"!==t},c.createElement(Ge,null,c.createElement("a",{rel:"noreferrer",href:"https://discord.gg/c0d3",target:"_blank"},c.createElement(ze(),null))),c.createElement(Ge,null,c.createElement("a",{rel:"noreferrer",href:"https://www.c0d3.com",target:"_blank"},c.createElement("span",null,"C0D3"))),c.createElement(Ge,null,c.createElement("a",{rel:"noreferrer",href:"https://github.com/flacial/c0d3-submissions-interface",target:"_blank"},c.createElement(Ye(),null))),c.createElement(Ke,{setRight:n,right:"70px"},c.createElement(De(),null)))},We=(0,ge.createGlobalStyle)(["*,*::before,*::after{box-sizing:border-box;}*{margin:0;}html,body{height:100%;background:linear-gradient(44deg,hsl(195.5,100%,44.1%),hsl(188deg 98% 47%));}#gatsby-focus-wrapper,#___gatsby{height:100%;}body{line-height:1.5;-webkit-font-smoothing:antialiased;}img,picture,video,canvas,svg{display:block;max-width:100%;}input,button,textarea,select{font:inherit;}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word;color:green !important;}#root,#__next{isolation:isolate;}"]),Qe=function(){return c.createElement(c.Fragment,null,c.createElement(We,null),c.createElement(ye,null,c.createElement(xe,null,"My Submissions"),c.createElement(we,null,c.createElement(Ae,null,c.createElement(Be,{defaultTab:0})),c.createElement(Ve,null))))}},7177:function(e,t,n){var r=n(7294);function i(e){return r.createElement("svg",e,[r.createElement("g",{clipPath:"url(#clip0)",key:0},r.createElement("path",{d:"M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z",fill:"#007EA7"})),r.createElement("defs",{key:1},r.createElement("clipPath",{id:"clip0"},r.createElement("rect",{width:"71",height:"55",fill:"white"})))])}i.defaultProps={width:"71",height:"55",viewBox:"0 0 71 55",fill:"none"},e.exports=i,i.default=i},9974:function(e,t,n){var r=n(7294);function i(e){return r.createElement("svg",e,[r.createElement("defs",{key:0},[r.createElement("filter",{id:"filter_1",key:0},r.createElement("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"})),r.createElement("path",{d:"M0 0L20 0L20 20L0 20L0 0Z",id:"path_1",key:1}),r.createElement("clipPath",{id:"mask_1",key:2},r.createElement("use",{xlinkHref:"#path_1"}))]),r.createElement("g",{id:"External-Link-icon",filter:"url(#filter_1)",key:1},[r.createElement("path",{d:"M0 0L20 0L20 20L0 20L0 0Z",id:"Background",fill:"none",fillRule:"evenodd",stroke:"none",key:0}),r.createElement("g",{clipPath:"url(#mask_1)",key:1},r.createElement("path",{d:"M16.6504 2.4918C16.6193 2.49278 16.5883 2.4955 16.5576 2.49994L12.5 2.49994C12.1994 2.49569 11.9199 2.65359 11.7684 2.91317C11.6169 3.17275 11.6169 3.4938 11.7684 3.75338C11.9199 4.01296 12.1994 4.17086 12.5 4.16661L14.6549 4.16661L6.91077 11.9107C6.69308 12.1198 6.60538 12.4301 6.68152 12.7222C6.75765 13.0142 6.9857 13.2423 7.27773 13.3184C7.56976 13.3945 7.88014 13.3068 8.08915 13.0891L15.8333 5.34499L15.8333 7.49994C15.829 7.80047 15.9869 8.08001 16.2465 8.23151C16.5061 8.38302 16.8271 8.38302 17.0867 8.23152C17.3463 8.08001 17.5042 7.80047 17.5 7.49994L17.5 3.43907C17.5336 3.19623 17.4585 2.95091 17.2948 2.76841C17.1311 2.5859 16.8954 2.48473 16.6504 2.4918L16.6504 2.4918ZM4.16667 2.49984C3.25578 2.49984 2.5 3.25562 2.5 4.16651L2.5 15.8332C2.5 16.7441 3.25578 17.4998 4.16667 17.4998L15.8333 17.4998C16.7442 17.4998 17.5 16.7441 17.5 15.8332L17.5 10.8332C17.5042 10.5326 17.3464 10.2531 17.0868 10.1016C16.8272 9.9501 16.5061 9.95009 16.2466 10.1016C15.987 10.2531 15.8291 10.5326 15.8333 10.8332L15.8333 15.8332L4.16667 15.8332L4.16667 4.16651L9.16667 4.16651C9.4672 4.17076 9.74673 4.01286 9.89824 3.75328C10.0497 3.4937 10.0497 3.17265 9.89824 2.91307C9.74673 2.65349 9.4672 2.49559 9.16667 2.49984L4.16667 2.49984L4.16667 2.49984Z",id:"Shape",fill:"#FFFFFF",fillRule:"evenodd",stroke:"none"}))])])}i.defaultProps={width:"20px",height:"20px",viewBox:"0 0 20 20",version:"1.1"},e.exports=i,i.default=i},3036:function(e,t,n){var r=n(7294);function i(e){return r.createElement("svg",e,[r.createElement("defs",{key:0},r.createElement("image",{width:"96",height:"96",xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABHNCSVQICAgIfAhkiAAAASRJREFUeJzt2M1NxDAUhdFnKoAOKGFKoAPoBEqiA6ADSqAEOmA6uCwGJBYo85N4JE/OWUZ6nyw5lpxUAQAAAAAAAAAAAAAAAAAAo2lLB5Nsquq+qu6qavPz+KOq3qvqrbX2seZ+V0keM+0ryeNa+10ledmz+L9e1tbvKsnTEYv/9bSWfldJNicsPtkd582l9/e5mhuoqocT564PnB29P2mJDbjrPDt6f9Lsa2iSr9q9DafYttZuLrm/zxInYM4mHjI7en/SEhsw58PkkNnR+5OW2ID3zrOj9/v6ucZtT7jGbZPcXnr/LDL4h1Lv/lkkeT1i8a9r659Fdm/S1HHeZsabM3r/P71+Rz/U/79zn1trn2vuAwAAAAAAAAAAAAAAAAAA4/sGdfgFT5FF6cAAAAAASUVORK5CYII=",id:"img_1"})),r.createElement("use",{xlinkHref:"#img_1",fill:"#FFFFFF",stroke:"none",transform:"scale(0.13541667 0.13541667)",key:1})])}i.defaultProps={width:"13px",height:"13px",viewBox:"0 0 13 13",version:"1.1"},e.exports=i,i.default=i},3626:function(e,t,n){var r=n(7294);function i(e){return r.createElement("svg",e,r.createElement("path",{d:"M10 0C4.47656 0 0 4.47656 0 10C0 15.5234 4.47656 20 10 20C15.5234 20 20 15.5234 20 10C20 4.47656 15.5234 0 10 0L10 0ZM10 2C14.4102 2 18 5.58984 18 10C18 10.4688 17.9531 10.9297 17.875 11.375C17.6289 11.3203 17.2656 11.2539 16.8438 11.25C16.5312 11.2461 16.1406 11.2969 15.8125 11.3438C15.9258 10.9961 16 10.6133 16 10.2188C16 9.25781 15.5312 8.36328 14.7812 7.625C14.9883 6.85547 15.1914 5.53516 14.6562 5C13.0742 5 12.1992 6.12891 12.1562 6.1875C11.668 6.07031 11.1641 6 10.625 6C9.93359 6 9.27344 6.125 8.65625 6.3125L8.84375 6.15625C8.84375 6.15625 7.96484 4.9375 6.34375 4.9375C5.77734 5.50781 6.03516 6.95313 6.25 7.6875C5.48438 8.41797 5 9.28125 5 10.2188C5 10.5469 5.07812 10.8594 5.15625 11.1562C4.87891 11.125 3.87891 11.0312 3.46875 11.0312C3.10547 11.0312 2.54297 11.1172 2.09375 11.2188C2.03125 10.8203 2 10.4141 2 10C2 5.58984 5.58984 2 10 2L10 2ZM3.46875 11.2812C3.86328 11.2812 5.0625 11.5312 5.21875 11.559C5.23828 11.6563 5.25781 11.7465 5.28125 11.8368C4.85156 11.7674 4.01953 11.6632 3.46875 11.7812C3.10156 11.8576 2.63281 12.0938 2.21875 12.2812C2.1875 12.059 2.14844 11.8438 2.125 11.6146C2.5625 11.4479 3.13672 11.2812 3.46875 11.2812L3.46875 11.2812ZM16.8438 11.5004C17.2422 11.5129 17.6055 11.7253 17.8438 11.9002C17.832 12.1125 17.7969 12.2874 17.7812 12.4998C17.5273 12.3124 17.1094 12.0376 16.625 12.0001C16.3906 11.9876 16.0156 12.0251 15.6875 12.1C15.7031 12.0001 15.707 11.9002 15.7188 11.8002C16.0586 11.6503 16.4922 11.4879 16.8438 11.5004L16.8438 11.5004ZM4.09375 11.7814C4.65625 11.7853 5.18359 11.8243 5.40625 11.8439C5.92969 12.8204 6.98828 13.5431 8.625 13.8439C8.22266 14.0665 7.86328 14.379 7.59375 14.7501C7.35938 14.7696 7.11328 14.7814 6.875 14.7814C6.17969 14.7814 5.74609 14.1603 5.375 13.6251C5 13.09 4.53906 13.0314 4.28125 13.0001C4.01953 12.9689 3.92969 13.1173 4.0625 13.2189C4.82422 13.8048 5.09766 14.5001 5.40625 15.1251C5.68359 15.6876 6.26562 16.0001 6.90625 16.0001L7.03125 16.0001C7.01172 16.1095 7 16.2111 7 16.3126L7 17.4064C4.69141 16.4728 2.93359 14.5001 2.28125 12.0626C2.69141 11.9611 3.15234 11.8556 3.5 11.8126C3.66016 11.7931 3.86328 11.7775 4.09375 11.7814L4.09375 11.7814ZM16.625 11.9062C17.0742 11.9179 17.4727 12.0038 17.7188 12.0624C17.168 14.1327 15.8086 15.8554 14 16.9062L14 16.3124C14 15.4609 13.3281 14.3671 12.375 13.8437C13.957 13.5546 14.9883 12.8632 15.5312 11.9374C15.9102 11.9101 16.3555 11.8984 16.625 11.9062L16.625 11.9062ZM10.5 16C10.7734 16 11 16.2266 11 16.5L11 17.9375C10.6719 17.9805 10.3398 18 10 18L10 16.5C10 16.2266 10.2266 16 10.5 16L10.5 16ZM8.5 17C8.77344 17 9 17.2417 9 17.5333L9 18C8.66406 17.9542 8.32422 17.8875 8 17.8L8 17.5333C8 17.2417 8.22656 17 8.5 17L8.5 17ZM12.5 17C12.7422 17 12.9531 17.2344 13 17.5417C12.6758 17.7188 12.3438 17.8802 12 18L12 17.6667C12 17.3021 12.2266 17 12.5 17L12.5 17Z",id:"Shape",fill:"#007EA7",fillRule:"evenodd",stroke:"none"}))}i.defaultProps={width:"20px",height:"20px",viewBox:"0 0 20 20",version:"1.1"},e.exports=i,i.default=i}}]);
//# sourceMappingURL=component---src-pages-index-js-70e9d4d731f777b28997.js.map