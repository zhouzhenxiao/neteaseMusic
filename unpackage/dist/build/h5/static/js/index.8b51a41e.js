(function(n){function e(e){for(var o,r,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],o=!0,r=1;r<t.length;r++){var c=t[r];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),n=s(s.s=t[0]))}return n}var o={},a={index:0},i=[];function r(n){return s.p+"static/js/"+({"pages-detail-detail":"pages-detail-detail","pages-index-index":"pages-index-index","pages-list-list":"pages-list-list","pages-login-forgot-password":"pages-login-forgot-password","pages-login-login":"pages-login-login","pages-login-register":"pages-login-register","pages-search-search":"pages-search-search"}[n]||n)+"."+{"pages-detail-detail":"d29e9d1a","pages-index-index":"fbff598d","pages-list-list":"42d19cf6","pages-login-forgot-password":"8ac9faf0","pages-login-login":"c2942e60","pages-login-register":"d4b8d19b","pages-search-search":"2eb2e762"}[n]+".js"}function s(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(n){var e=[],t=a[n];if(0!==t)if(t)e.push(t[2]);else{var o=new Promise((function(e,o){t=a[n]=[e,o]}));e.push(t[2]=o);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(n);var u=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(l);var t=a[n];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,t[1](u)}a[n]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=n,s.c=o,s.d=function(n,e,t){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},s.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)s.d(t,o,function(e){return n[e]}.bind(null,o));return t},s.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="/",s.oe=function(n){throw console.error(n),n};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;i.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("c5c6")},"07c3":function(n,e,t){"use strict";var o=t("f104"),a=t.n(o);a.a},3916:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var o="http://lijianlin.com.cn:3000";e.baseUrl=o},"3baf":function(n,e,t){"use strict";t.r(e);var o=t("50ed"),a=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=a.a},4260:function(n,e,t){n.exports=t.p+"static/fonts/iconfont.08625ae1.eot"},"446d":function(n,e,t){n.exports=t.p+"static/img/iconfont.d0f11a98.svg"},"50ed":function(n,e,t){"use strict";(function(n){var o=t("4ea4");t("d3b7"),t("3ca3"),t("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(t("5530"));t("732b");var i=t("26cb"),r=t("a49c"),s={data:function(){return{songDetail:{al:{picUrl:""},ar:{name:""}},playicon:"icon-suspend_icon",isplayrotate:!0}},computed:(0,a.default)({},(0,i.mapState)(["songDetail"])),props:["title","singer","src"],onLoad:function(n){uni.showToast({title:"正在加载..."}),this.playPause(n.songId)},methods:{playPause:function(e){var t=this;this.$store.commit("NEXT_ID",e),uni.showToast({title:"正在加载..."}),this.isLoading=!0,Promise.all([(0,r.songDetail)(e),(0,r.songSimi)(e),(0,r.songComment)(e),(0,r.songLyric)(e),(0,r.songUrl)(e)]).then((function(e){"200"==e[0][1].data.code&&(t.songDetail=e[0][1].data.songs[0]),"200"==e[1][1].data.code&&(t.songSimi=e[1][1].data.songs),"200"==e[2][1].data.code&&(t.songComment=e[2][1].data.hotComments),"200"==e[4][1].data.code&&(t.bgAudioMannager||(t.bgAudioMannager=uni.createInnerAudioContext()),t.playicon="icon-bofang",t.isplayrotate=!1,t.bgAudioMannager.src=e[4][1].data.data[0].url,t.bgAudioMannager.onPlay((function(){t.playicon="icon-suspend_icon",t.isplayrotate=!0})),t.bgAudioMannager.onPause((function(){t.playicon="icon-bofang",t.isplayrotate=!1})),t.bgAudioMannager.onEnded((function(){t.playMusic(t.$store.state.nextId),n.log("即将自动播放下一首")}))),t.isLoading=!1,uni.hideLoading()}))},handleToPlay:function(){this.bgAudioMannager.paused?this.bgAudioMannager.play():this.bgAudioMannager.pause()},playNext:function(e){n.log("切换下一首...");var t=this.$store.state.nextId;n.log(t),this.playPause(t)}}};e.default=s}).call(this,t("5a52")["default"])},5775:function(n,e,t){"use strict";t.r(e);var o=t("ba31"),a=t("3baf");for(var i in a)"default"!==i&&function(n){t.d(e,n,(function(){return a[n]}))}(i);t("07c3");var r,s=t("f0c5"),c=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"528d531b",null,!1,o["a"],r);e["default"]=c.exports},"5fd8":function(n,e,t){var o=t("24fb");e=o(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */.container{width:100%;height:calc(100vh - 75px);overflow:hidden}.container uni-scroll-view{height:100%}.fixbg{width:100%;height:100vh;position:fixed;background-size:cover;background-position:center 0;-webkit-filter:blur(10px);filter:blur(10px);-webkit-transform:scale(1.2);transform:scale(1.2)}",""]),n.exports=e},"61e1":function(n,e,t){"use strict";t.r(e);var o=t("6ddd"),a=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=a.a},"6ddd":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.isLogin=function(){try{var n=uni.getStorageSync("suid"),e=uni.getStorageSync("srand")}catch(t){}return""!=n&&""!=e&&[n,e]};var t={onLaunch:function(){},onShow:function(){},onHide:function(){}};e.default=t}).call(this,t("c8ba"))},"732b":function(n,e,t){var o=t("a530");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var a=t("4f06").default;a("1907bb10",o,!0,{sourceMap:!1,shadowMode:!1})},"80ab":function(n,e){n.exports="data:font/woff2;base64,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"},"8d28":function(n,e){n.exports="data:font/woff;base64,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"},a49c:function(n,e,t){"use strict";(function(n){t("99af"),t("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.login=a,e.register=i,e.sendCode=r,e.sendCodeVerify=s,e.topList=c,e.list=u,e.songDetail=l,e.songUrl=d,e.songLyric=f,e.songSimi=g,e.songComment=p,e.searchHot=A,e.searchWord=y,e.searchSuggest=m;var o=t("3916");function a(n){return uni.request({url:"".concat(o.baseUrl,"/login/cellphone"),method:"POST",data:n})}function i(n){return uni.request({url:"".concat(o.baseUrl,"/register/cellphone"),method:"POST",data:n})}function r(n){return uni.request({url:"".concat(o.baseUrl,"/captcha/sent"),method:"POST",data:n})}function s(n){return uni.request({url:"".concat(o.baseUrl,"/captcha/verify"),method:"POST",data:n})}function c(){var e=["19723756","3779629","2884035","3778678"];return new Promise((function(t,a){uni.request({url:"".concat(o.baseUrl,"/toplist/detail"),method:"GET",data:{},success:function(n){var o=n.data.list;o.length=4;for(var a=0;a<o.length;a++)o[a].listId=e[a];t(o)},fail:function(e){n.log(e)},complete:function(){}})}))}function u(n){return uni.request({url:"".concat(o.baseUrl,"/playlist/detail?id=").concat(n),method:"GET"})}function l(n){return uni.request({url:"".concat(o.baseUrl,"/song/detail?ids=").concat(n),method:"GET"})}function d(n){return uni.request({url:"".concat(o.baseUrl,"/song/url?id=").concat(n),method:"GET"})}function f(n){return uni.request({url:"".concat(o.baseUrl,"/lyric?id=").concat(n),method:"GET"})}function g(n){return uni.request({url:"".concat(o.baseUrl,"/simi/song?id=").concat(n),method:"GET"})}function p(n){return uni.request({url:"".concat(o.baseUrl,"/comment/music?id=").concat(n),method:"GET"})}function A(){return uni.request({url:"".concat(o.baseUrl,"/search/hot/detail"),method:"GET"})}function y(n){return uni.request({url:"".concat(o.baseUrl,"/search?keywords=").concat(n),method:"GET"})}function m(n){return uni.request({url:"".concat(o.baseUrl,"/search/suggest?keywords=").concat(n,"&type=mobile"),method:"GET"})}}).call(this,t("5a52")["default"])},a530:function(n,e,t){var o=t("24fb"),a=t("1de5"),i=t("4260"),r=t("80ab"),s=t("8d28"),c=t("ab9c"),u=t("446d");e=o(!1);var l=a(i),d=a(i,{hash:"#iefix"}),f=a(r),g=a(s),p=a(c),A=a(u,{hash:"#iconfont"});e.push([n.i,"@font-face{font-family:iconfont; /* Project id 2620813 */src:url("+l+"); /* IE9 */src:url("+d+') format("embedded-opentype"),url('+f+') format("woff2"),url('+g+') format("woff"),url('+p+') format("truetype"),url('+A+') format("svg")}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-yonghu:before{content:"\\e604"}.icon-subscriber:before{content:"\\ebf7"}.icon-yonghu1:before{content:"\\e700"}.icon-yonghu-copy:before{content:"\\ebf8"}.icon-xiayishou:before{content:"\\e602"}.icon-kuaijin:before{content:"\\e603"}.icon-icon-shouye:before{content:"\\e653"}.icon-Rectangle:before{content:"\\e610"}.icon-list:before{content:"\\e607"}.icon-bofang:before{content:"\\e600"}.icon-lajitong:before{content:"\\e615"}.icon-yousanjiao:before{content:"\\e629"}.icon-suspend_icon:before{content:"\\e668"}.icon-guanbi:before{content:"\\e6cc"}.icon-shouye:before{content:"\\e70e"}.icon-Magnifier:before{content:"\\e62d"}.icon-arrow-:before{content:"\\e628"}.icon-dianzan:before{content:"\\e605"}.icon-fenxiang:before{content:"\\e601"}',""]),n.exports=e},ab9c:function(n,e,t){n.exports=t.p+"static/fonts/iconfont.19ed36fa.ttf"},b8f9:function(n,e,t){"use strict";var o=t("de27"),a=t.n(o);a.a},ba31:function(n,e,t){"use strict";var o;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return o}));var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",{staticClass:"container ios-safe-area"},[t("v-uni-image",{class:{"detail-play-run":n.isplayrotate},attrs:{src:n.src,mode:""}}),t("v-uni-view",{staticClass:"player-info"},[t("v-uni-text",{staticClass:"player-info-title"},[n._v(n._s(n.title))]),t("br"),t("v-uni-text",{staticClass:"player-info-singer"},[n._v(n._s(n.singer))])],1),t("v-uni-view",{staticClass:"player-controls"},[t("v-uni-text",{staticClass:"player-controls-button1 iconfont icon-bofang",class:n.playicon,on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.playPause()}}}),t("v-uni-text",{staticClass:"player-controls-button2 iconfont icon-kuaijin",on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.playNext()}}}),t("v-uni-text",{staticClass:"player-controls-button3 iconfont icon-list"})],1)],1)},i=[]},c5c6:function(n,e,t){"use strict";var o=t("4ea4");t("4de4");var a=o(t("5530"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("d5c4"),t("06b9");var i=o(t("e143")),r=o(t("ff99")),s=o(t("de02")),c=o(t("5775"));i.default.component("Footer",c.default),i.default.prototype.$store=s.default,i.default.filter("formatCount",(function(n){return n>=1e4&&n<1e8?(n/=1e4,n.toFixed(1)+"万"):n>=1e8?(n/=1e8,n.toFixed(1)+"亿"):n})),i.default.filter("formatTime",(function(n){var e=new Date(n);return e.getFullYear()+"年"+(e.getMonth()+1)+"月"+e.getDate()+"日"})),r.default.mpType="app";var u=new i.default((0,a.default)((0,a.default)({},r.default),{},{store:s.default}));u.$mount()},d5c4:function(n,e,t){"use strict";(function(n){var e=t("4ea4");t("13d5"),t("d3b7"),t("ac1f"),t("5319"),t("ddb0");var o=e(t("e143")),a={keys:function(){return[]}};n["____000D0DB____"]=!0,delete n["____000D0DB____"],n.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},condition:{current:0,list:[{name:"index",path:"pages/index/index",query:" "},{name:"list",path:"pages/list/list",query:"id=19723756"},{name:"detail",path:"pages/detail/detail",query:"songId=483937795"},{name:"search",path:"pages/search/search",query:""}]}},n.__uniConfig.compilerVersion="3.3.13",n.__uniConfig.router={mode:"hash",base:"/"},n.__uniConfig.publicPath="/",n.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},n.__uniConfig.debug=!1,n.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},n.__uniConfig.sdkConfigs={},n.__uniConfig.qqMapKey=void 0,n.__uniConfig.googleMapKey=void 0,n.__uniConfig.locale="",n.__uniConfig.fallbackLocale=void 0,n.__uniConfig.locales=a.keys().reduce((function(n,e){var t=e.replace(/\.\/(uni-app.)?(.*).json/,"$2"),o=a(e);return Object.assign(n[t]||(n[t]={}),o.common||o),n}),{}),n.__uniConfig.nvue={"flex-direction":"column"},n.__uniConfig.__webpack_chunk_load__=t.e,o.default.component("pages-index-index",(function(n){var e={component:t.e("pages-index-index").then(function(){return n(t("b150"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-list-list",(function(n){var e={component:t.e("pages-list-list").then(function(){return n(t("cbab"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-detail-detail",(function(n){var e={component:t.e("pages-detail-detail").then(function(){return n(t("ee3e"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-search-search",(function(n){var e={component:t.e("pages-search-search").then(function(){return n(t("d04f"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-login-login",(function(n){var e={component:t.e("pages-login-login").then(function(){return n(t("b947"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-login-register",(function(n){var e={component:t.e("pages-login-register").then(function(){return n(t("d7be"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-login-forgot-password",(function(n){var e={component:t.e("pages-login-forgot-password").then(function(){return n(t("c95e"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),n.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationStyle:"custom"})},[n("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/list/list",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[n("pages-list-list",{slot:"page"})])}},meta:{name:"pages-list-list",isNVue:!1,maxWidth:0,pagePath:"pages/list/list",windowTop:0}},{path:"/pages/detail/detail",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[n("pages-detail-detail",{slot:"page"})])}},meta:{name:"pages-detail-detail",isNVue:!1,maxWidth:0,pagePath:"pages/detail/detail",windowTop:0}},{path:"/pages/search/search",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[n("pages-search-search",{slot:"page"})])}},meta:{name:"pages-search-search",isNVue:!1,maxWidth:0,pagePath:"pages/search/search",windowTop:0}},{path:"/pages/login/login",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[n("pages-login-login",{slot:"page"})])}},meta:{name:"pages-login-login",isNVue:!1,maxWidth:0,pagePath:"pages/login/login",windowTop:0}},{path:"/pages/login/register",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[n("pages-login-register",{slot:"page"})])}},meta:{name:"pages-login-register",isNVue:!1,maxWidth:0,pagePath:"pages/login/register",windowTop:0}},{path:"/pages/login/forgot-password",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[n("pages-login-forgot-password",{slot:"page"})])}},meta:{name:"pages-login-forgot-password",isNVue:!1,maxWidth:0,pagePath:"pages/login/forgot-password",windowTop:0}},{path:"/preview-image",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],n.UniApp&&new n.UniApp}).call(this,t("c8ba"))},de02:function(n,e,t){"use strict";(function(n){var o=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(t("e143")),i=o(t("26cb"));t("a49c");a.default.use(i.default);var r=new i.default.Store({state:{login:!1,token:"",avatarUrl:"",userName:"",topIdList:[],nextId:"",songDetail:{al:{picUrl:""},ar:{name:""}},playicon:"icon-suspend_icon",isplayrotate:!0},mutations:{login:function(e,t){n.log(e),n.log(t),e.login=!0,e.token=t.token,e.nickName=t.profile.nickname,e.avatarUrl=t.profile.avatarUrl},logout:function(n){n.login=!1,n.token="",n.nickName="",n.avatarUrl=""},setPlayList:function(e,t){n.log("获取到播放列表")},INIT_CHANGE:function(n,e){n.topIdList=e},NEXT_ID:function(n,e){for(var t=0;t<n.topIdList.length;t++)n.topIdList[t].id==e&&(n.nextId=n.topIdList[t+1].id)}}});e.default=r}).call(this,t("5a52")["default"])},de27:function(n,e,t){var o=t("5fd8");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var a=t("4f06").default;a("537e1eee",o,!0,{sourceMap:!1,shadowMode:!1})},ed2f:function(n,e,t){"use strict";var o;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return o}));var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("App",{attrs:{keepAliveInclude:n.keepAliveInclude}})},i=[]},eeeb:function(n,e,t){var o=t("24fb");e=o(!1),e.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-528d531b]{position:fixed;bottom:0;left:0;width:100%;height:%?98?%;background:#fff;box-shadow:0 %?2?% %?40?% 0 rgba(0,0,0,.18);display:flex;justify-content:space-around;align-items:center;z-index:9999\n  /*旋转图片*/\n  /*歌曲信息*/\n  /*播放控制*/}.container uni-image[data-v-528d531b]{width:58px;height:58px;left:0;top:0;right:345px;bottom:0;margin:auto;position:fixed;margin-bottom:0;border-radius:50%;-webkit-animation:10s linear infinite move-data-v-528d531b;animation:10s linear infinite move-data-v-528d531b;-webkit-animation-play-state:paused;animation-play-state:paused}.container .detail-play-run[data-v-528d531b]{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes move-data-v-528d531b{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes move-data-v-528d531b{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.container .player-info[data-v-528d531b]{flex:1;font-size:10pt;line-height:%?38?%;margin-left:%?127?%;padding-bottom:%?8?%;\n  /*歌名超出部分隐藏并用省略号显示*/overflow:hidden;text-overflow:ellipsis;white-space:nowrap\n  /*歌手名*/}.container .player-info .player-info-singer[data-v-528d531b]{color:#888}.container .player-controls[data-v-528d531b]{\n  /*播放按钮*/\n  /*下一首*/\n  /*列表播放*/}.container .player-controls .player-controls-button1[data-v-528d531b]{font-size:35px;color:#dd001b}.container .player-controls .player-controls-button2[data-v-528d531b]{font-size:34px;margin-left:15px;color:#dd001b}.container .player-controls .player-controls-button3[data-v-528d531b]{font-size:35px;margin-left:15px;margin-right:10px;color:#dd001b}',""]),n.exports=e},f104:function(n,e,t){var o=t("eeeb");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var a=t("4f06").default;a("38b09263",o,!0,{sourceMap:!1,shadowMode:!1})},ff99:function(n,e,t){"use strict";t.r(e);var o=t("ed2f"),a=t("61e1");for(var i in a)"default"!==i&&function(n){t.d(e,n,(function(){return a[n]}))}(i);t("b8f9");var r,s=t("f0c5"),c=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=c.exports}});