(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var i=n("q1tI"),o=r(i),a=r(n("Gytx"));function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function T(){l=e(s.map((function(e){return e.props}))),M.canUseDOM?t(l):n&&(l=n(l))}var M=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var u=i.prototype;return u.shouldComponentUpdate=function(e){return!a(e,this.props)},u.componentWillMount=function(){s.push(this),T()},u.componentDidUpdate=function(){T()},u.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),T()},u.render=function(){return o.createElement(r,this.props)},i}(i.Component);return u(M,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),u(M,"canUseDOM",c),M}}},ATp1:function(e,t,n){e.exports=n.p+"static/logo-9b99ab0c0a80665a75cd17689f3c94ca.png"},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var l=o[c];if(!u(l))return!1;var s=e[l],T=t[l];if(!1===(i=n?n.call(r,s,T,l):void 0)||void 0===i&&s!==T)return!1}return!0}},IZCf:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU2LjY5MyA1Ni42OTMiIGhlaWdodD0iNTYuNjkzcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1Ni42OTMgNTYuNjkzIiB3aWR0aD0iNTYuNjkzcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik00MS43NzcsMzAuNTE3Yy0wLjA2Mi02LjIzMiw1LjA4Mi05LjIyMSw1LjMxMi05LjM3MmMtMi44OTEtNC4yMjctNy4zOTUtNC44MDctOC45OTgtNC44NzMgICBjLTMuODMtMC4zODktNy40NzcsMi4yNTYtOS40MiwyLjI1NmMtMS45MzksMC00Ljk0MS0yLjE5OS04LjExNy0yLjE0M2MtNC4xNzgsMC4wNjItOC4wMjksMi40My0xMC4xNzksNi4xNyAgIGMtNC4zMzksNy41MjctMS4xMSwxOC42ODIsMy4xMTgsMjQuNzkxYzIuMDY3LDIuOTg2LDQuNTMyLDYuMzQ2LDcuNzY2LDYuMjIzYzMuMTE3LTAuMTIzLDQuMjkzLTIuMDE2LDguMDYxLTIuMDE2ICAgczQuODI2LDIuMDE2LDguMTIzLDEuOTUzYzMuMzUyLTAuMDYxLDUuNDc3LTMuMDQzLDcuNTI3LTYuMDQxYzIuMzczLTMuNDY5LDMuMzUtNi44MjgsMy40MDgtNi45OTggICBDNDguMzA1LDQwLjQzMyw0MS44NDQsMzcuOTU4LDQxLjc3NywzMC41MTd6Ii8+PHBhdGggZD0iTTM1LjU4MiwxMi4yMjljMS43MTUtMi4wODIsMi44NzctNC45NzUsMi41NjEtNy44NTVjLTIuNDc1LDAuMS01LjQ3MSwxLjY0NS03LjI0OCwzLjcyNSAgIGMtMS41OTIsMS44NDYtMi45ODQsNC43ODUtMi42MTEsNy42MTNDMzEuMDQ1LDE1LjkyNiwzMy44NjEsMTQuMzA3LDM1LjU4MiwxMi4yMjl6Ii8+PC9nPjwvc3ZnPg=="},IoGW:function(e,t,n){e.exports=n.p+"static/flick-it-up-1197c1ab0348bf9684707686bcd8760b.png"},Oyvg:function(e,t,n){var r=n("dyZX"),i=n("Xbzi"),o=n("hswa").f,a=n("kJMx").f,u=n("quPj"),c=n("C/va"),l=r.RegExp,s=l,T=l.prototype,M=/a/g,d=/a/g,E=new l(M)!==M;if(n("nh4g")&&(!E||n("eeVq")((function(){return d[n("K0xU")("match")]=!1,l(M)!=M||l(d)==d||"/a/i"!=l(M,"i")})))){l=function(e,t){var n=this instanceof l,r=u(e),o=void 0===t;return!n&&r&&e.constructor===l&&o?e:i(E?new s(r&&!o?e.source:e,t):s((r=e instanceof l)?e.source:e,r&&o?c.call(e):t),n?this:T,l)};for(var f=function(e){e in l||o(l,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},p=a(s),A=0;p.length>A;)f(p[A++]);T.constructor=l,l.prototype=T,n("KroJ")(r,"RegExp",l)}n("elZq")("RegExp")},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),o=n("TJpk"),a=(n("33OX"),n("+ZDr")),u=n.n(a);n("lw3w"),n("emEt").default.enqueue,i.a.createContext({});var c=n("ATp1"),l=n.n(c),s=function(){return i.a.createElement("div",{style:{background:"#fff",marginBottom:"1.45rem",display:"flex",justifyContent:"center",height:"72px",borderBottom:"0.5px solid #eee"}},i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},i.a.createElement(u.a,{to:"/"},i.a.createElement("img",{src:l.a,alt:"fizzare_logo",style:{height:"36px",paddingTop:"5px"}}))))},T=n("IoGW"),M=n.n(T),d=n("kpt4"),E=n.n(d),f=(n("JgkN"),n("IZCf")),p=n.n(f),A=n("yGLt"),y=n.n(A),L=function(e){var t;return i.a.createElement("div",{style:{position:"relative"}},i.a.createElement("div",{class:"Image",style:{textDecoration:"none",color:"#2b2b2b",display:"flex",flexFlow:"column",width:"fit-content",position:"relative"}},i.a.createElement("div",{class:"Store",style:(t={alignItems:"center",position:"absolute",background:"#fff",width:"125px"},t.background="rgba(0, 0, 0, 0.75)",t.zIndex="1",t.bottom="1.5px",t.borderRadius="10px",t.justifyContent="space-evenly",t)},i.a.createElement("a",{href:e.appstoreLink,target:e.iosComingSoon?"":"_blank",style:{display:"flex",position:"relative"}},i.a.createElement("span",{class:e.iosComingSoon?"ComingSoonTag":"ComingSoonTagDisabled"},"Coming",i.a.createElement("br",null),"Soon"),i.a.createElement("span",{style:{width:"50px",height:"50px",padding:"10px",borderRadius:"50%",background:"#fff",paddingBottom:"12.5px"}},i.a.createElement("img",{alt:"appstore_logo",src:p.a,width:"100%",height:"100%"}))),i.a.createElement("a",{href:e.playstoreLink,target:e.androidComingSoon?"":"_blank",style:{display:"flex",position:"relative"}},i.a.createElement("span",{class:e.androidComingSoon?"ComingSoonTag":"ComingSoonTagDisabled"},"Coming",i.a.createElement("br",null),"Soon"),i.a.createElement("span",{style:{width:"50px",height:"50px",padding:"10px",borderRadius:"50%",background:"#fff",paddingBottom:"12.5px"}},i.a.createElement("img",{alt:"playstore_logo",src:y.a,width:"100%",height:"100%"})))),i.a.createElement("h4",{style:{lineHeight:"1em",paddingBottom:"5px",textAlign:"center"}},e.title),i.a.createElement("img",{src:e.imgSrc,alt:e.imgAlt,style:{width:"125px",position:"relative"}})))},g=function(e){return i.a.createElement("div",{style:{display:"flex",flexFlow:"column",width:"fit-content"}},i.a.createElement("h2",null,e.title),i.a.createElement("div",{style:{position:"relative",width:"100%",height:"5px",display:"flex",justifyContent:"space-between"}},i.a.createElement("span",{style:{width:"calc(100% - 9px)",height:"5px",background:"#2b2b2b",borderRadius:"25px",boxShadow:"#b3b3b3 2px 2px 5px 0.1px"}}),i.a.createElement("span",{style:{width:"6px",height:"5px",background:"#2b2b2b",borderRadius:"2.5px",boxShadow:"#b3b3b3 2px 2px 5px 0.1px"}})))},m=function(){return i.a.createElement("div",null,i.a.createElement(o.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Fizzare"),i.a.createElement("link",{rel:"canonical",href:"https://fizzare.com"})),i.a.createElement(s,null),i.a.createElement("div",{style:{display:"flex",flexFlow:"column",width:"inherit",margin:"0 10%"}},i.a.createElement("div",{style:{display:"flex",flexFlow:"column",width:"100%",alignItems:"center",padding:"20px 0 75px"}},i.a.createElement(g,{title:"About Us"}),i.a.createElement("div",{style:{padding:"15px 0 0",display:"flex",flexFlow:"column",justifyContent:"center"}},i.a.createElement("h1",{style:{fontWeight:"600",lineHeight:"1em",textAlign:"center"}},"We are here to fill your time with enjoyment."),i.a.createElement("p",{style:{textAlign:"center",padding:"10px 0"}},"Fizzare creates fun, addictive, awesome mobile games for android and iOS devices."))),i.a.createElement("div",{style:{display:"flex",flexFlow:"column",width:"100%",alignItems:"center",padding:"20px 0px 75px"}},i.a.createElement(g,{title:"Our Games"}),i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"inherit",margin:"0"}},i.a.createElement("div",{style:{padding:"15px 0 0",display:"flex",justifyContent:"center",width:"100%"}},i.a.createElement(L,{imgAlt:"flick-it-up_logo",imgSrc:M.a,title:"Flick It Up!",iosComingSoon:!0,androidComingSoon:!1,appstoreLink:"/",playstoreLink:"https://play.google.com/store/apps/details?id=com.fizzare.flickitup"})))),i.a.createElement("div",{style:{display:"flex",flexFlow:"column",width:"100%",alignItems:"center",padding:"20px 0 75px"}},i.a.createElement(g,{title:"Information"}),i.a.createElement("div",{style:{padding:"15px 0 0",display:"flex",flexFlow:"column",justifyContent:"center"}},i.a.createElement("h3",{style:{fontWeight:"600",lineHeight:"1em",textAlign:"center"}},"Follow Us"),i.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"7.5px"}},i.a.createElement("a",{href:"http://www.facebook.com/fizzaregames/",target:"_blank",style:{display:"flex"},class:"facebookLink"},i.a.createElement("span",{style:{width:"50px",height:"50px",padding:"12.5px",borderRadius:"50%"}},i.a.createElement("img",{alt:"fb_logo",src:E.a,width:"100%",height:"100%"}))))))))};t.default=function(){return i.a.createElement("div",null,i.a.createElement(m,null))}},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=T(n("q1tI")),a=T(n("17x9")),u=T(n("8+s/")),c=T(n("bmMU")),l=n("v1p5"),s=n("hFT/");function T(e){return e&&e.__esModule?e:{default:e}}function M(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var d,E,f,p=(0,u.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),A=(d=p,f=E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,i=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return r({},i,((t={})[n.type]=[].concat(i[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,i=e.child,o=e.newProps,a=e.newChildProps,u=e.nestedChildren;switch(i.type){case s.TAG_NAMES.TITLE:return r({},o,((t={})[i.type]=u,t.titleAttributes=r({},a),t));case s.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},a)});case s.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},a)})}return r({},o,((n={})[i.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var i;n=r({},n,((i={})[t]=e[t],i))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=M(i,["children"]),u=(0,l.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,o),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=M(e,["children"]),i=r({},n);return t&&(i=this.mapChildrenToProps(t,i)),o.default.createElement(d,i)},i(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(o.default.Component),E.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=d.peek,E.rewind=function(){var e=d.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},f);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var u,c,l,s=r(t),T=r(n);if(s&&T){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(!e(t[u],n[u]))return!1;return!0}if(s!=T)return!1;var M=t instanceof Date,d=n instanceof Date;if(M!=d)return!1;if(M&&d)return t.getTime()==n.getTime();var E=t instanceof RegExp,f=n instanceof RegExp;if(E!=f)return!1;if(E&&f)return t.toString()==n.toString();var p=i(t);if((c=p.length)!==i(n).length)return!1;for(u=c;0!=u--;)if(!o.call(n,p[u]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(u=c;0!=u--;)if(!("_owner"===(l=p[u])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},i=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(i).reduce((function(e,t){return e[i[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},kpt4:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU2LjY5MyA1Ni42OTMiIGhlaWdodD0iNTYuNjkzcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1Ni42OTMgNTYuNjkzIiB3aWR0aD0iNTYuNjkzcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00MC40MywyMS43MzloLTcuNjQ1di01LjAxNGMwLTEuODgzLDEuMjQ4LTIuMzIyLDIuMTI3LTIuMzIyYzAuODc3LDAsNS4zOTUsMCw1LjM5NSwwVjYuMTI1bC03LjQzLTAuMDI5ICBjLTguMjQ4LDAtMTAuMTI1LDYuMTc0LTEwLjEyNSwxMC4xMjV2NS41MThoLTQuNzd2OC41M2g0Ljc3YzAsMTAuOTQ3LDAsMjQuMTM3LDAsMjQuMTM3aDEwLjAzM2MwLDAsMC0xMy4zMiwwLTI0LjEzN2g2Ljc3ICBMNDAuNDMsMjEuNzM5eiIvPjwvc3ZnPg=="},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),i=n.n(r),o=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?i.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n("q1tI")),a=c(n("MgzW")),u=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=p(e,u.TAG_NAMES.TITLE),n=p(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=p(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},M=function(e){return p(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return i({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[u.TAG_NAMES.BASE]})).map((function(e){return e[u.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},f=function(e,t,n){var i={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&m("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],l=c.toLowerCase();-1===t.indexOf(l)||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===u.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return i[n]||(i[n]={}),r[n]||(r[n]={}),!i[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),c=0;c<o.length;c++){var l=o[c],s=(0,a.default)({},i[l],r[l]);i[l]=s}return e}),[]).reverse()},p=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){A(e)}),0)}),y=function(e){return clearTimeout(e)},L="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,m=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,N=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,T=e.styleTags,M=e.title,d=e.titleAttributes;h(u.TAG_NAMES.BODY,r),h(u.TAG_NAMES.HTML,i),j(M,d);var E={baseTag:I(u.TAG_NAMES.BASE,n),linkTags:I(u.TAG_NAMES.LINK,o),metaTags:I(u.TAG_NAMES.META,a),noscriptTags:I(u.TAG_NAMES.NOSCRIPT,c),scriptTags:I(u.TAG_NAMES.SCRIPT,s),styleTags:I(u.TAG_NAMES.STYLE,T)},f={},p={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(f[e]=n),r.length&&(p[e]=E[e].oldTags)})),t&&t(),l(e,f,p)},w=function(e){return Array.isArray(e)?e.join(""):e},j=function(e,t){void 0!==e&&document.title!==e&&(document.title=w(e)),h(u.TAG_NAMES.TITLE,t)},h=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===i.indexOf(l)&&i.push(l);var T=o.indexOf(l);-1!==T&&o.splice(T,1)}for(var M=o.length-1;M>=0;M--)n.removeAttribute(o[M]);i.length===o.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,a.join(","))}},I=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},C=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t}),t)},O=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[u.HELMET_ATTRIBUTE]=!0,i=b(n,r),[o.default.createElement(u.TAG_NAMES.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=C(n),o=w(t);return i?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+i+">"+s(o,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+s(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return b(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),o.default.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){S&&g(S),e.defer?S=L((function(){N(e,(function(){S=null}))})):(N(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,T=e.title,M=void 0===T?"":T,d=e.titleAttributes;return{base:O(u.TAG_NAMES.BASE,t,r),bodyAttributes:O(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:O(u.ATTRIBUTE_NAMES.HTML,i,r),link:O(u.TAG_NAMES.LINK,o,r),meta:O(u.TAG_NAMES.META,a,r),noscript:O(u.TAG_NAMES.NOSCRIPT,c,r),script:O(u.TAG_NAMES.SCRIPT,l,r),style:O(u.TAG_NAMES.STYLE,s,r),title:O(u.TAG_NAMES.TITLE,{title:M,titleAttributes:d},r)}},t.reducePropsToState=function(e){return{baseTag:E([u.TAG_PROPERTIES.HREF],e),bodyAttributes:d(u.ATTRIBUTE_NAMES.BODY,e),defer:p(e,u.HELMET_PROPS.DEFER),encode:p(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(u.ATTRIBUTE_NAMES.HTML,e),linkTags:f(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:f(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:f(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:M(e),scriptTags:f(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:f(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:d(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=L,t.warn=m}).call(this,n("yLpj"))},yGLt:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU2LjY5MyA1Ni42OTMiIGhlaWdodD0iNTYuNjkzcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1Ni42OTMgNTYuNjkzIiB3aWR0aD0iNTYuNjkzcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik0zNS4wMjEsOC41NjhsMC41NDctMC44MTlsMC41MzctMC44MDhsMS4yMDktMS44MTNjMC4xNDgtMC4yMjMsMC4wODgtMC41MjMtMC4xMzMtMC42NzIgICBjLTAuMjI1LTAuMTQ5LTAuNTI1LTAuMDg5LTAuNjc0LDAuMTM1bC0xLjI5NSwxLjk0NGwtMC41NDUsMC44MTdMMzQuMTE0LDguMThjLTEuNzUyLTAuNjc5LTMuNzA1LTEuMDYtNS43NjgtMS4wNiAgIGMtMi4wNjEsMC00LjAxNCwwLjM4MS01Ljc2NiwxLjA2TDIyLjAzLDcuMzUybC0wLjU0NS0wLjgxN0wyMC4xODgsNC41OWMtMC4xNDgtMC4yMjMtMC40NDktMC4yODMtMC42NzMtMC4xMzUgICBjLTAuMjIyLDAuMTQ4LTAuMjgyLDAuNDQ5LTAuMTM0LDAuNjcybDEuMjA4LDEuODEzbDAuNTM5LDAuODA4bDAuNTQ3LDAuODE5Yy00LjExNSwxLjkxNi02Ljg5OCw1LjU0Ni02Ljg5OCw5LjcwMWgyNy4xNDIgICBDNDEuOTE5LDE0LjExNCwzOS4xMzYsMTAuNDg0LDM1LjAyMSw4LjU2OHogTTIyLjUzMiwxNC4zOTFjLTAuODA1LDAtMS40NTUtMC42NTEtMS40NTUtMS40NTRzMC42NS0xLjQ1MywxLjQ1NS0xLjQ1MyAgIGMwLjgwMywwLDEuNDUzLDAuNjUsMS40NTMsMS40NTNTMjMuMzM1LDE0LjM5MSwyMi41MzIsMTQuMzkxeiBNMzQuMTYzLDE0LjM5MWMtMC44MDMsMC0xLjQ1My0wLjY1MS0xLjQ1My0xLjQ1NCAgIHMwLjY1LTEuNDUzLDEuNDUzLTEuNDUzYzAuODA1LDAsMS40NTUsMC42NSwxLjQ1NSwxLjQ1M1MzNC45NjgsMTQuMzkxLDM0LjE2MywxNC4zOTF6Ii8+PHBhdGggZD0iTTE0Ljk4NiwyMC4yMDhoLTAuMjA5djIuNDE4djEuOTczdjE2LjkzNmMwLDEuNjkzLDEuMzc2LDMuMDcsMy4wNjksMy4wN2gyLjIxNmMtMC4wNzQsMC4yNTYtMC4xMTYsMC41MjctMC4xMTYsMC44MDcgICB2MC4xNjJ2MC45Njl2NS4wMWMwLDEuNjA1LDEuMzAzLDIuOTA4LDIuOTA5LDIuOTA4czIuOTA4LTEuMzAzLDIuOTA4LTIuOTA4di01LjAxdi0wLjk2OXYtMC4xNjJjMC0wLjI3OS0wLjA0My0wLjU1MS0wLjExNS0wLjgwNyAgIGg1LjRjLTAuMDc0LDAuMjU2LTAuMTE1LDAuNTI3LTAuMTE1LDAuODA3djAuMTYydjAuOTY5djUuMDFjMCwxLjYwNSwxLjMwMywyLjkwOCwyLjkwOCwyLjkwOHMyLjkwOC0xLjMwMywyLjkwOC0yLjkwOHYtNS4wMSAgIHYtMC45Njl2LTAuMTYyYzAtMC4yNzktMC4wNDEtMC41NTEtMC4xMTUtMC44MDdoMi4yMTVjMS42OTMsMCwzLjA3LTEuMzc3LDMuMDctMy4wN1YyNC41OTl2LTEuOTczdi0yLjQxOEg0MS43MUgxNC45ODZ6Ii8+PHBhdGggZD0iTTkuOTI5LDIwLjIwOGMtMS42MDYsMC0yLjkwOCwxLjMwMS0yLjkwOCwyLjkwOXYxMi40MzljMCwxLjYwNSwxLjMwMiwyLjkwOCwyLjkwOCwyLjkwOGMxLjYwNSwwLDIuOTA4LTEuMzAzLDIuOTA4LTIuOTA4ICAgVjIzLjExNkMxMi44MzcsMjEuNTA5LDExLjUzNSwyMC4yMDgsOS45MjksMjAuMjA4eiIvPjxwYXRoIGQ9Ik00Ni43NjcsMjAuMjA4Yy0xLjYwNywwLTIuOTA4LDEuMzAxLTIuOTA4LDIuOTA5djEyLjQzOWMwLDEuNjA1LDEuMzAxLDIuOTA4LDIuOTA4LDIuOTA4YzEuNjA1LDAsMi45MDYtMS4zMDMsMi45MDYtMi45MDggICBWMjMuMTE2QzQ5LjY3MywyMS41MDksNDguMzcyLDIwLjIwOCw0Ni43NjcsMjAuMjA4eiIvPjwvZz48L3N2Zz4="},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-js-6ed30183c300a3c602a9.js.map