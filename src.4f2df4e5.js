parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"hC31":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="838a1c7309b989baab596bfe84b6d2d8",t="https://api.themoviedb.org/3";class a{constructor(){this.query="",this.period="day",this.page=1}async getConfig(){const a=await fetch(`${t}/configuration?api_key=${e}`);return await a.json()}async fetchGenres(){const a=await fetch(`${t}/genre/movie/list?api_key=${e}`);return await a.json()}async fetchTrending(){const a=new URLSearchParams({api_key:e,page:this.page}),n=`${t}/trending/movie/${this.period}?${a}`,i=await fetch(n);return await i.json()}async fetchMovieByQuery(){const a=new URLSearchParams({api_key:e,query:this.query,include_adult:!1,page:this.page}),n=`${t}/search/movie?${a}`,i=await fetch(n);return await i.json()}fetchMovieById(a){return fetch(`${t}/movie/${a}?api_key=${e}`).then(e=>e.json()).then(e=>({...e,genres:this.getGenres(e)}))}getGenres(e){let t=e.genres.map(e=>e.name);return 0===t.length?["Unknown"]:t}incrementPage(){this.page+=1}resetPage(){this.page=1}}exports.default=a;
},{}],"pAws":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof e&&e.amd?e([],r):"object"==typeof exports?exports.Handlebars=r():t.Handlebars=r()}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}return r.m=e,r.c=t,r.p="",r(0)}([function(e,t,r){"use strict";var n=r(1).default,o=r(2).default;t.__esModule=!0;var a=n(r(3)),i=o(r(36)),u=o(r(5)),l=n(r(4)),s=n(r(37)),c=o(r(43));function f(){var e=new a.HandlebarsEnvironment;return l.extend(e,a),e.SafeString=i.default,e.Exception=u.default,e.Utils=l,e.escapeExpression=l.escapeExpression,e.VM=s,e.template=function(t){return s.template(t,e)},e}var p=f();p.create=f,c.default(p),p.default=p,t.default=p,e.exports=t.default},function(e,t){"use strict";t.default=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},t.__esModule=!0},function(e,t){"use strict";t.default=function(e){return e&&e.__esModule?e:{default:e}},t.__esModule=!0},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0,t.HandlebarsEnvironment=c;var o=r(4),a=n(r(5)),i=r(9),u=r(29),l=n(r(31)),s=r(32);t.VERSION="4.7.7";t.COMPILER_REVISION=8;t.LAST_COMPATIBLE_COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function c(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},i.registerDefaultHelpers(this),u.registerDefaultDecorators(this)}c.prototype={constructor:c,logger:l.default,log:l.default.log,registerHelper:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===o.toString.call(e))o.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){s.resetLoggedProperties()}};var f=l.default.log;t.log=f,t.createFrame=o.createFrame,t.logger=l.default},function(e,t){"use strict";t.__esModule=!0,t.extend=i,t.indexOf=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!o.test(e))return e;return e.replace(n,a)},t.isEmpty=function(e){return!e&&0!==e||!(!s(e)||0!==e.length)},t.createFrame=function(e){var t=i({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},n=/[&<>"'`=]/g,o=/[&<>"'`=]/;function a(e){return r[e]}function i(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}var u=Object.prototype.toString;t.toString=u;var l=function(e){return"function"==typeof e};l(/x/)&&(t.isFunction=l=function(e){return"function"==typeof e&&"[object Function]"===u.call(e)}),t.isFunction=l;var s=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===u.call(e)};t.isArray=s},function(e,t,r){"use strict";var n=r(6).default;t.__esModule=!0;var o=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function a(e,t){var r=t&&t.loc,i=void 0,u=void 0,l=void 0,s=void 0;r&&(i=r.start.line,u=r.end.line,l=r.start.column,s=r.end.column,e+=" - "+i+":"+l);for(var c=Error.prototype.constructor.call(this,e),f=0;f<o.length;f++)this[o[f]]=c[o[f]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{r&&(this.lineNumber=i,this.endLineNumber=u,n?(Object.defineProperty(this,"column",{value:l,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=l,this.endColumn=s))}catch(p){}}a.prototype=new Error,t.default=a,e.exports=t.default},function(e,t,r){e.exports={default:r(7),__esModule:!0}},function(e,t,r){var n=r(8);e.exports=function(e,t,r){return n.setDesc(e,t,r)}},function(e,t){var r=Object;e.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),a.default(e),i.default(e),u.default(e),l.default(e),s.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,r){e.helpers[t]&&(e.hooks[t]=e.helpers[t],r||delete e.helpers[t])};var o=n(r(10)),a=n(r(11)),i=n(r(24)),u=n(r(25)),l=n(r(26)),s=n(r(27)),c=n(r(28))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(4);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,r){var o=r.inverse,a=r.fn;if(!0===t)return a(this);if(!1===t||null==t)return o(this);if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):o(this);if(r.data&&r.ids){var i=n.createFrame(r.data);i.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:i}}return a(t,r)})},e.exports=t.default},function(e,t,r){(function(n){"use strict";var o=r(12).default,a=r(2).default;t.__esModule=!0;var i=r(4),u=a(r(5));t.default=function(e){e.registerHelper("each",function(e,t){if(!t)throw new u.default("Must pass iterator to #each");var r,a=t.fn,l=t.inverse,s=0,c="",f=void 0,p=void 0;function d(t,r,n){f&&(f.key=t,f.index=r,f.first=0===r,f.last=!!n,p&&(f.contextPath=p+t)),c+=a(e[t],{data:f,blockParams:i.blockParams([e[t],t],[p+t,null])})}if(t.data&&t.ids&&(p=i.appendContextPath(t.data.contextPath,t.ids[0])+"."),i.isFunction(e)&&(e=e.call(this)),t.data&&(f=i.createFrame(t.data)),e&&"object"==typeof e)if(i.isArray(e))for(var h=e.length;s<h;s++)s in e&&d(s,s,s===e.length-1);else if(n.Symbol&&e[n.Symbol.iterator]){for(var v=[],m=e[n.Symbol.iterator](),g=m.next();!g.done;g=m.next())v.push(g.value);for(h=(e=v).length;s<h;s++)d(s,s,s===e.length-1)}else r=void 0,o(e).forEach(function(e){void 0!==r&&d(r,s-1),r=e,s++}),void 0!==r&&d(r,s-1,!0);return 0===s&&(c=l(this)),c})},e.exports=t.default}).call(t,function(){return this}())},function(e,t,r){e.exports={default:r(13),__esModule:!0}},function(e,t,r){r(14),e.exports=r(20).Object.keys},function(e,t,r){var n=r(15);r(17)("keys",function(e){return function(t){return e(n(t))}})},function(e,t,r){var n=r(16);e.exports=function(e){return Object(n(e))}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,r){var n=r(18),o=r(20),a=r(23);e.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],i={};i[e]=t(r),n(n.S+n.F*a(function(){r(1)}),"Object",i)}},function(e,t,r){var n=r(19),o=r(20),a=r(21),i=function(e,t,r){var u,l,s,c=e&i.F,f=e&i.G,p=e&i.S,d=e&i.P,h=e&i.B,v=e&i.W,m=f?o:o[t]||(o[t]={}),g=f?n:p?n[t]:(n[t]||{}).prototype;for(u in f&&(r=t),r)(l=!c&&g&&u in g)&&u in m||(s=l?g[u]:r[u],m[u]=f&&"function"!=typeof g[u]?r[u]:h&&l?a(s,n):v&&g[u]==s?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t.prototype=e.prototype,t}(s):d&&"function"==typeof s?a(Function.call,s):s,d&&((m.prototype||(m.prototype={}))[u]=s))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,e.exports=i},function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t){var r=e.exports={version:"1.2.6"};"number"==typeof __e&&(__e=r)},function(e,t,r){var n=r(22);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0;var o=n(r(5));t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0;var o=r(4),a=n(r(5));t.default=function(e){e.registerHelper("if",function(e,t){if(2!=arguments.length)throw new a.default("#if requires exactly one argument");return o.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||o.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,r){if(2!=arguments.length)throw new a.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})})},e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n]);var o=1;null!=r.hash.level?o=r.hash.level:r.data&&null!=r.data.level&&(o=r.data.level),t[0]=o,e.log.apply(e,t)})},e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t,r){return e?r.lookupProperty(e,t):e})},e.exports=t.default},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0;var o=r(4),a=n(r(5));t.default=function(e){e.registerHelper("with",function(e,t){if(2!=arguments.length)throw new a.default("#with requires exactly one argument");o.isFunction(e)&&(e=e.call(this));var r=t.fn;if(o.isEmpty(e))return t.inverse(this);var n=t.data;return t.data&&t.ids&&((n=o.createFrame(t.data)).contextPath=o.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:n,blockParams:o.blockParams([e],[n&&n.contextPath])})})},e.exports=t.default},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0,t.registerDefaultDecorators=function(e){o.default(e)};var o=n(r(30))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(4);t.default=function(e){e.registerDecorator("inline",function(e,t,r,o){var a=e;return t.partials||(t.partials={},a=function(o,a){var i=r.partials;r.partials=n.extend({},i,t.partials);var u=e(o,a);return r.partials=i,u}),t.partials[o.args[0]]=o.fn,a})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(4),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];console[t].apply(console,n)}}};t.default=o,e.exports=t.default},function(e,t,r){"use strict";var n=r(33).default,o=r(12).default,a=r(1).default;t.__esModule=!0,t.createProtoAccessControl=function(e){var t=n(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var r=n(null);return r.__proto__=!1,{properties:{whitelist:i.createNewLookupObject(r,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:i.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,r){return s("function"==typeof e?t.methods:t.properties,r)},t.resetLoggedProperties=function(){o(l).forEach(function(e){delete l[e]})};var i=r(35),u=a(r(31)),l=n(null);function s(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==l[e]&&(l[e]=!0,u.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}},function(e,t,r){e.exports={default:r(34),__esModule:!0}},function(e,t,r){var n=r(8);e.exports=function(e,t){return n.create(e,t)}},function(e,t,r){"use strict";var n=r(33).default;t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.extend.apply(void 0,[n(null)].concat(t))};var o=r(4)},function(e,t){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,r){"use strict";var n=r(38).default,o=r(12).default,a=r(1).default,i=r(2).default;t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=s.COMPILER_REVISION;if(t>=s.LAST_COMPATIBLE_COMPILER_REVISION&&t<=s.COMPILER_REVISION)return;if(t<s.LAST_COMPATIBLE_COMPILER_REVISION){var n=s.REVISION_CHANGES[r],o=s.REVISION_CHANGES[t];throw new l.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new l.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},t.template=function(e,t){if(!t)throw new l.default("No environment passed to template");if(!e||!e.main)throw new l.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var r=e.compiler&&7===e.compiler[0];var a={strict:function(e,t,r){if(!(e&&t in e))throw new l.default('"'+t+'" not defined in '+e,{loc:r});return a.lookupProperty(e,t)},lookupProperty:function(e,t){var r=e[t];return null==r?r:Object.prototype.hasOwnProperty.call(e,t)?r:p.resultIsAllowed(r,a.protoAccessControl,t)?r:void 0},lookup:function(e,t){for(var r=e.length,n=0;n<r;n++){var o=e[n]&&a.lookupProperty(e[n],t);if(null!=o)return e[n][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:u.escapeExpression,invokePartial:function(r,n,o){o.hash&&(n=u.extend({},n,o.hash),o.ids&&(o.ids[0]=!0));r=t.VM.resolvePartial.call(this,r,n,o);var a=u.extend({},o,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),i=t.VM.invokePartial.call(this,r,n,a);null==i&&t.compile&&(o.partials[o.name]=t.compile(r,e.compilerOptions,t),i=o.partials[o.name](n,a));if(null!=i){if(o.indent){for(var s=i.split("\n"),c=0,f=s.length;c<f&&(s[c]||c+1!==f);c++)s[c]=o.indent+s[c];i=s.join("\n")}return i}throw new l.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,n,o){var a=this.programs[e],i=this.fn(e);return t||o||n||r?a=d(this,e,i,t,r,n,o):a||(a=this.programs[e]=d(this,e,i)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=u.extend({},t,e)),r},nullContext:n({}),noop:t.VM.noop,compilerInfo:e.compiler};function i(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=r.data;i._setup(r),!r.partial&&e.useData&&(n=function(e,t){t&&"root"in t||((t=t?s.createFrame(t):{}).root=e);return t}(t,n));var o=void 0,u=e.useBlockParams?[]:void 0;function l(t){return""+e.main(a,t,a.helpers,a.partials,n,u,o)}return e.useDepths&&(o=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(l=v(e.main,l,a,r.depths||[],n,u))(t,r)}return i.isTop=!0,i._setup=function(n){if(n.partial)a.protoAccessControl=n.protoAccessControl,a.helpers=n.helpers,a.partials=n.partials,a.decorators=n.decorators,a.hooks=n.hooks;else{var i=u.extend({},t.helpers,n.helpers);!function(e,t){o(e).forEach(function(r){var n=e[r];e[r]=function(e,t){var r=t.lookupProperty;return f.wrapHelper(e,function(e){return u.extend({lookupProperty:r},e)})}(n,t)})}(i,a),a.helpers=i,e.usePartial&&(a.partials=a.mergeIfNeeded(n.partials,t.partials)),(e.usePartial||e.useDecorators)&&(a.decorators=u.extend({},t.decorators,n.decorators)),a.hooks={},a.protoAccessControl=p.createProtoAccessControl(n);var l=n.allowCallsToHelperMissing||r;c.moveHelperToHooks(a,"helperMissing",l),c.moveHelperToHooks(a,"blockHelperMissing",l)}},i._child=function(t,r,n,o){if(e.useBlockParams&&!n)throw new l.default("must pass block params");if(e.useDepths&&!o)throw new l.default("must pass parent depths");return d(a,t,e[t],r,0,n,o)},i},t.wrapProgram=d,t.resolvePartial=function(e,t,r){e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name];return e},t.invokePartial=function(e,t,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var o=void 0;r.fn&&r.fn!==h&&function(){r.data=s.createFrame(r.data);var e=r.fn;o=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=s.createFrame(r.data),r.data["partial-block"]=n,e(t,r)},e.partials&&(r.partials=u.extend({},r.partials,e.partials))}();void 0===e&&o&&(e=o);if(void 0===e)throw new l.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)},t.noop=h;var u=a(r(4)),l=i(r(5)),s=r(3),c=r(9),f=r(42),p=r(32);function d(e,t,r,n,o,a,i){function u(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],u=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(u=[t].concat(i)),r(e,t,e.helpers,e.partials,o.data||n,a&&[o.blockParams].concat(a),u)}return(u=v(r,u,e,i,n,a)).program=t,u.depth=i?i.length:0,u.blockParams=o||0,u}function h(){return""}function v(e,t,r,n,o,a){if(e.decorator){var i={};t=e.decorator(t,i,r,n&&n[0],o,a,n),u.extend(t,i)}return t}},function(e,t,r){e.exports={default:r(39),__esModule:!0}},function(e,t,r){r(40),e.exports=r(20).Object.seal},function(e,t,r){var n=r(41);r(17)("seal",function(e){return function(t){return e&&n(t)?e(t):t}})},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){if("function"!=typeof e)return e;return function(){var r=arguments[arguments.length-1];return arguments[arguments.length-1]=t(r),e.apply(this,arguments)}}},function(e,t){(function(r){"use strict";t.__esModule=!0,t.default=function(e){var t=void 0!==r?r:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}},e.exports=t.default}).call(t,function(){return this}())}])});
},{}],"WSZA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var l=e(require("handlebars/dist/handlebars.runtime"));function e(l){return l&&l.__esModule?l:{default:l}}const n=l.default.template({1:function(l,e,n,a,t){var r,o=null!=e?e:l.nullContext||{},c=l.hooks.helperMissing,i="function",s=l.escapeExpression,u=l.lookupProperty||function(l,e){if(Object.prototype.hasOwnProperty.call(l,e))return l[e]};return"\n  <li class='wow animate__fadeInUp card__item list' id='"+s(typeof(r=null!=(r=u(n,"id")||(null!=e?u(e,"id"):e))?r:c)===i?r.call(o,{name:"id",hash:{},data:t,loc:{start:{line:3,column:56},end:{line:3,column:62}}}):r)+"'>\n    <article class='card'>\n      <a href='' class='card__link link'>\n        <div class='card-img-container'>\n          <img src='"+s(typeof(r=null!=(r=u(n,"posterURL")||(null!=e?u(e,"posterURL"):e))?r:c)===i?r.call(o,{name:"posterURL",hash:{},data:t,loc:{start:{line:7,column:20},end:{line:7,column:33}}}):r)+"' alt='Movie Poster' data-id='"+s(typeof(r=null!=(r=u(n,"id")||(null!=e?u(e,"id"):e))?r:c)===i?r.call(o,{name:"id",hash:{},data:t,loc:{start:{line:7,column:63},end:{line:7,column:69}}}):r)+"' class='card__image' /></div>\n\n        <div class='card__description'>\n          <div class=\"card-name__container\">\n          <h2 class='card__name'>"+s(typeof(r=null!=(r=u(n,"title")||(null!=e?u(e,"title"):e))?r:c)===i?r.call(o,{name:"title",hash:{},data:t,loc:{start:{line:11,column:33},end:{line:11,column:42}}}):r)+"</h2>\n          </div>\n          <p class='card__info'>"+s(typeof(r=null!=(r=u(n,"genres")||(null!=e?u(e,"genres"):e))?r:c)===i?r.call(o,{name:"genres",hash:{},data:t,loc:{start:{line:13,column:32},end:{line:13,column:42}}}):r)+" | "+s(typeof(r=null!=(r=u(n,"release_date")||(null!=e?u(e,"release_date"):e))?r:c)===i?r.call(o,{name:"release_date",hash:{},data:t,loc:{start:{line:13,column:45},end:{line:13,column:61}}}):r)+"</p>\n        </div>\n      </a>\n    </article>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(l,e,n,a,t){var r;return null!=(r=(l.lookupProperty||function(l,e){if(Object.prototype.hasOwnProperty.call(l,e))return l[e]})(n,"each").call(null!=e?e:l.nullContext||{},e,{name:"each",hash:{},fn:l.program(1,t,0),inverse:l.noop,data:t,loc:{start:{line:1,column:0},end:{line:18,column:9}}}))?r:""},useData:!0});var a=n;exports.default=a;
},{"handlebars/dist/handlebars.runtime":"pAws"}],"TOx8":[function(require,module,exports) {

},{}],"HU2o":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.searchMovies=c,exports.processResponse=i,exports.renderMovies=u;var e=r(require("./api-service")),t=r(require("../templates/movie-card.hbs"));function r(e){return e&&e.__esModule?e:{default:e}}require("animate.css");const n=document.querySelector("#search-form"),s=document.querySelector("#gallery");n.addEventListener("submit",o);const a=new e.default;async function o(e){e.preventDefault(),u(i(await c(e.currentTarget.elements.search.value)))}async function c(e,t){if(""!==e){e!==a.query&&a.resetPage(),a.query=e,a.page=t;try{return await a.fetchMovieByQuery(e)}catch(r){console.log(r)}}}function i(e){const t=localStorage.getItem("img_base_url"),r=JSON.parse(localStorage.getItem("genres")).genres;return e.results.map(({id:e,release_date:n,title:s,poster_path:a,genre_ids:o})=>{const c=r.filter(e=>o.includes(e.id)).map(e=>e.name);return{id:e,release_date:n?n.slice(0,4):"Date unknown",title:s,posterURL:a?`${t}w500${a}`:"",genres:c.length>2?c.slice(0,2).concat("Other").join(", "):c.join(", ")}})}function u(e){s.innerHTML=(0,t.default)(e)}
},{"./api-service":"hC31","../templates/movie-card.hbs":"WSZA","animate.css":"TOx8"}],"clu1":[function(require,module,exports) {

},{"./../images/icon-close.svg":[["icon-close.8f72539b.svg","cAq2"],"cAq2"]}],"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e={teamModal:document.querySelector(".team_list"),teamModalBtnOpen:document.querySelector(".team__modal"),teamModalBtnClose:document.querySelector(".teamModalBtnClose"),teamModalBackdrop:document.querySelector(".teamModalBack"),footer:document.querySelector("footer"),footerText:document.querySelector(".footer_container"),footerTextTeam:document.querySelector(".team__modal")};var t=e;exports.default=t;
},{}],"SVxB":[function(require,module,exports) {
"use strict";var e=t(require("./refs"));function t(e){return e&&e.__esModule?e:{default:e}}function n(){o(),window.removeEventListener("keydown",a)}function d(e){e.target===e.currentTarget&&n()}function a(e){"Escape"===e.code&&n()}function o(){e.default.teamModalBackdrop.classList.toggle("teamModalIsHidden")}function i(e){o(),window.addEventListener("keydown",a)}e.default.teamModalBtnOpen.addEventListener("click",i),e.default.teamModalBtnClose.addEventListener("click",n),e.default.teamModalBackdrop.addEventListener("click",d);
},{"./refs":"VyiV"}],"yGjV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=o;var e=t(require("./api-service"));function t(e){return e&&e.__esModule?e:{default:e}}const a=new e.default;async function o(){if(!localStorage.getItem("img_base_url"))try{const t=await a.getConfig();localStorage.setItem("img_base_url",t.images.secure_base_url)}catch(e){console.log(e)}if(!localStorage.getItem("genres"))try{const t=await a.fetchGenres();localStorage.setItem("genres",JSON.stringify(t))}catch(e){console.log(e)}}o();
},{"./api-service":"hC31"}],"vQE2":[function(require,module,exports) {
let e=document.querySelector("#preloader");window.addEventListener("load",()=>{setTimeout(()=>{e.remove()},1500)});
},{}],"o8lo":[function(require,module,exports) {
"use strict";var e=n(require("./api-service"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=t();if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var i=a?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(r,s,i):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}const r=document.querySelector(".main"),a=document.querySelector(".movie-container");let s=1,i=500;const o=(e,t,n)=>{const r=Math.floor(t/2);let a=t;n+r>=e?a=e:n>r&&(a=n+r);let s=a-t;if(n>t-1&&n+r<=e||n-r>2){return Array.from({length:t},(a,i)=>0===i?"...":i===t-1&&e>n+r+1?"...":i+1+s)}return Array.from({length:t},(a,i)=>i===t-1&&e>n+r+1?"...":i+1+s)};function c(e,t=10,n=1){let r=o(e,t,n),a=null;const s=new Map,i=()=>1===r[0],c=()=>1===n,d=()=>r.slice(-1)[0]===e,l=()=>n===e,u=document.createDocumentFragment(),p=document.createElement("div");p.className="pagination-buttons";const g=(e="",t="",r=!1,a)=>{const s=document.createElement("button");return s.textContent=e,s.className=`page-btn ${t}`,s.disabled=r,s.addEventListener("click",e=>{a(e),this.update(),p.value=n,p.dispatchEvent(new Event("change"))}),s},f=e=>{if("..."!==e.currentTarget.textContent)return n=Number(e.currentTarget.textContent)};s.set(g("<","prev-page",c(),()=>n-=1),e=>e.disabled=c()),s.set(g("1","start-page",i(),()=>n=1),e=>e.disabled=i()),r.map((e,t)=>{const i=n===e,o=g(e,i?"active":"",!1,f);i&&(a=o),s.set(o,(e=>t=>{"..."===r[e]&&t.classList.add("dots"),"..."!==r[e]&&(t.classList="page-btn"),t.textContent=r[e],r[e]===n&&(a.classList.remove("active"),t.classList.add("active"),(a=t).focus())})(t))}),s.set(g("500","end-page",d(),()=>n=e),e=>e.disabled=d()),s.set(g(">","next-page",l(),()=>n+=1),e=>e.disabled=l()),s.forEach((e,t)=>u.appendChild(t)),p.appendChild(u),this.render=((e=document.body)=>{e.appendChild(p)}),this.update=((a=n)=>{r=o(e,t,n=a),s.forEach((e,t)=>e(t))}),this.onChange=(e=>{p.addEventListener("change",e)})}const d=t=>{a.innerHTML="",e.fetchTrends(t).then(({total_pages:e,results:t})=>{u(t).then(e=>a.insertAdjacentHTML("beforeend",e)),i=e})},l=new c(i,7);l.render(),l.onChange(e=>{e.target.value!==s&&(s=e.target.value,d(e.target.value))});const u=t=>e.fetchGenresList().then(e=>t.map(t=>{void 0===t.release_date&&(t.release_date=""),t.release_date=t.release_date.slice(0,4);const n=t.genre_ids.map(t=>t=e[t]);return`<li id=${t.id}>\n    <img src=${t.backdrop_path?"https://image.tmdb.org/t/p/w500/"+t.backdrop_path:"https://i.redd.it/ds1luav7dl851.jpg"} alt=${t.original_title}>\n    <div>\n      <h3>${t.original_title}</h3>\n      <p>${[...n]}</p>|<span>${t.release_date}</span>\n    </div>\n</li>`}).join(""));
},{"./api-service":"hC31"}],"Focm":[function(require,module,exports) {
"use strict";require("./js/search"),require("./sass/main.scss"),require("./js/refs"),require("./js/team-modal"),require("./js/local-storage"),require("./js/loader"),require("./js/pagination");
},{"./js/search":"HU2o","./sass/main.scss":"clu1","./js/refs":"VyiV","./js/team-modal":"SVxB","./js/local-storage":"yGjV","./js/loader":"vQE2","./js/pagination":"o8lo"}]},{},["Focm"], null)
//# sourceMappingURL=/js_team_project_group_5/src.4f2df4e5.js.map