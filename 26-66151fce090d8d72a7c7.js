(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{jYm2:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return F}));n("6kNP"),n("8npG"),n("sC2a"),n("sPse"),n("klQ5");var o=n("q1tI"),r=(n("pJf4"),n("q8oJ"),n("cFtU"),n("m210"),n("4DPX"),n("E5k/"),n("Ggvi"),n("v9g0"),n("o0o1")),i=n.n(r);n("ls82"),n("rzGZ"),n("Dq+y"),n("YbXK"),n("xJgp"),n("Ll4R");function s(t,e,n,o,r,i,s){try{var a=t[i](s),c=a.value}catch(l){return void n(l)}a.done?e(c):Promise.resolve(c).then(o,r)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){s(i,o,r,a,c,"next",t)}function c(t){s(i,o,r,a,c,"throw",t)}a(void 0)}))}}function c(t){return l.apply(this,arguments)}function l(){return(l=a(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://min-api.cryptocompare.com/"+e);case 3:return n=t.sent,t.abrupt("return",n.json());case 7:throw t.prev=7,t.t0=t.catch(0),new Error("CryptoCompare request error: "+t.t0.status);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function u(t,e,n){var o=e+"/"+n;return{short:o,full:t+":"+o}}function p(t){var e=t.match(/^(\w+):(\w+)\/(\w+)(?:#(\w+))?$/);return e?{exchange:e[1],fromSymbol:e[2],toSymbol:e[3],fragment:e[4]}:null}n("zTTH"),n("HQhv");function d(t){var e=0;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t)))return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var _=new WebSocket("wss://streamer.cryptocompare.com/v2?api_key=8d44a7d54e06e6a250c351f8f4834940109b7566f2ffc7f679c5db185885aace"),f=new Map;_.addEventListener("connect",(function(){console.log("[socket] Connected")})),_.addEventListener("close",(function(t){console.log("[socket] Disconnected:",t)})),_.addEventListener("error",(function(t){console.log("[socket] Error:",t)})),_.addEventListener("message",(function(t){var e=t.data;console.log("[socket] Message:",e);var n=e.split("~"),o=n[0],r=n[1],i=n[2],s=n[3],a=n[6],c=n[8];if(0===parseInt(o)){var l=parseFloat(c),u=parseInt(a),p="0~"+r+"~"+i+"~"+s,d=f.get(p);if(void 0!==d){var h,_,m,y=d.lastDailyBar,v=(h=y.time,(_=new Date(1e3*h)).setDate(_.getDate()+1),_.getTime()/1e3);u>=v?(m={time:v,open:l,high:l,low:l,close:l},console.log("[socket] Generate new bar",m)):(m=Object.assign({},y,{high:Math.max(y.high,l),low:Math.min(y.low,l),close:l}),console.log("[socket] Update the latest bar by price",l)),d.lastDailyBar=m,d.handlers.forEach((function(t){return t.callback(m)}))}}}));var m=n("oY9k"),y=n.n(m);function v(t,e,n,o,r,i,s){try{var a=t[i](s),c=a.value}catch(l){return void n(l)}a.done?e(c):Promise.resolve(c).then(o,r)}function g(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function s(t){v(i,o,r,s,a,"next",t)}function a(t){v(i,o,r,s,a,"throw",t)}s(void 0)}))}}var b=function(t){return{name:"BinanceOI",metainfo:{_metainfoVersion:42,id:"BinanceOI@tv-basicstudies-1",name:"BinanceOI",description:"Binance Open Interest",shortDescription:"BinanceOI",scriptIdPart:"",is_price_study:!1,is_hidden_study:!0,isCustomIndicator:!0,isTVScript:!1,isTVScriptStub:!1,inputs:[],plots:[{id:"plot_0",type:"line"},{id:"plot_hidden",type:"line"}],defaults:{styles:{plot_0:{linestyle:0,visible:!0,linewidth:2,plottype:2,trackPrice:!1,transparency:0,color:"#63c5ff"},plot_hidden:{isHidden:!0,visible:!1,trackPrice:!1}},precision:0,inputs:{}},styles:{plot_0:{title:"Open interest",histogramBase:0}}},constructor:function(){this.init=function(e,n){this._context=e,this._input=n;var o=t.Std.period(this._context),r=e.symbol.ticker,i=(r=r.substring(1,r.length-2))+"#BUYSELL";this._context.new_sym(i,o,o)},this.main=function(e,n){return this._context=e,this._input=n,this._context.select_sym(1),[t.Std.close(this._context)]}}}};function w(t,e,n,o){return I.apply(this,arguments)}function I(){return(I=g(i.a.mark((function t(e,n,o,r){var s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://blep-cors.herokuapp.com","https://fapi.binance.com",t.prev=2,t.next=5,y()("https://blep-cors.herokuapp.com/https://fapi.binance.com"+e+"/?symbol="+o+"&period="+n+"&limit="+r);case 5:if((s=t.sent).ok){t.next=8;break}throw Error(s.statusText);case 8:return t.abrupt("return",s.json());case 11:t.prev=11,t.t0=t.catch(2),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}function S(t){var e=0;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=A(t)))return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}function C(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||A(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){if(t){if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function k(t,e,n,o,r,i,s){try{var a=t[i](s),c=a.value}catch(l){return void n(l)}a.done?e(c):Promise.resolve(c).then(o,r)}function P(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function s(t){k(i,o,r,s,a,"next",t)}function a(t){k(i,o,r,s,a,"throw",t)}s(void 0)}))}}var R=new Map,U={supported_resolutions:["1S","1D","1W","1M"],exchanges:[{value:"Bitfinex",name:"Bitfinex",desc:"Bitfinex"},{value:"Kraken",name:"Kraken",desc:"Kraken bitcoin exchange"}],symbols_types:[{name:"crypto",value:"crypto"}]};function D(){return T.apply(this,arguments)}function T(){return(T=P(i.a.mark((function t(){var e,n,o,r,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("data/v3/all/exchanges");case 2:for(e=t.sent,n=[],o=function(){for(var t=s.value,o=e.Data[t.value].pairs,r=function(){var e=a[i],r=o[e].map((function(n){var o=u(t.value,e,n);return{symbol:o.short,full_name:o.full,description:o.short,exchange:t.value,type:"crypto"}}));n=[].concat(C(n),C(r))},i=0,a=Object.keys(o);i<a.length;i++)r()},r=S(U.exchanges);!(s=r()).done;)o();return t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var L,O,B,E={onReady:function(t){console.log("[onReady]: Method call"),setTimeout((function(){return t(U)}))},searchSymbols:(B=P(i.a.mark((function t(e,n,o,r){var s,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("[searchSymbols]: Method call"),t.next=3,D();case 3:s=t.sent,a=s.filter((function(t){var o=""===n||t.exchange===n,r=-1!==t.full_name.toLowerCase().indexOf(e.toLowerCase());return o&&r})),r(a);case 6:case"end":return t.stop()}}),t)}))),function(t,e,n,o){return B.apply(this,arguments)}),resolveSymbol:(O=P(i.a.mark((function t(e,n,o){var r,s,a,c,l,u,d,h,_,f;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("[resolveSymbol]: Method call",e),r=p(e),s=r.exchange,a=r.fromSymbol,c=r.toSymbol,!(l=r.fragment)){t.next=8;break}return d={name:(u=a+"/"+c)+"#"+l,description:u+"#"+l,type:"crypto",session:"24x7",timezone:"Etc/UTC",exchange:s,minmov:1,pricescale:100,has_intraday:!1,has_no_volume:!0,has_weekly_and_monthly:!1,supported_resolutions:U.supported_resolutions,volume_precision:2,data_status:"streaming"},console.log("[resolveSymbol]: Symbol resolved",e),n(d),t.abrupt("return");case 8:return t.next=10,D();case 10:if(h=t.sent,_=h.find((function(t){return t.full_name===e}))){t.next=16;break}return console.log("[resolveSymbol]: Cannot resolve symbol",e),o("cannot resolve symbol"),t.abrupt("return");case 16:f={name:_.symbol,description:_.description,type:_.type,session:"24x7",timezone:"Etc/UTC",exchange:_.exchange,minmov:1,pricescale:100,has_intraday:!1,has_no_volume:!0,has_weekly_and_monthly:!1,supported_resolutions:U.supported_resolutions,volume_precision:2,data_status:"streaming"},console.log("[resolveSymbol]: Symbol resolved",e),n(f);case 19:case"end":return t.stop()}}),t)}))),function(t,e,n){return O.apply(this,arguments)}),getBars:(L=P(i.a.mark((function t(e,n,o,r,s,a,l){var u,d,h,_,f,m,y;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("[getBars]: Method call",e,n,o,r),!(u=p(e.full_name)).fragment){t.next=11;break}return t.next=5,w("/futures/data/openInterestHist","1d","BTCUSDT",30);case 5:return d=t.sent,h=[],d.forEach((function(t){t.timestamp/1e3>=o&&t.timestamp/1e3<r&&(h=[].concat(C(h),[{time:t.timestamp,close:parseFloat(t.sumOpenInterest)}]))})),console.log(h),s(h,{noData:!1}),t.abrupt("return");case 11:return _={e:u.exchange,fsym:u.fromSymbol,tsym:u.toSymbol,toTs:r,limit:2e3},f=Object.keys(_).map((function(t){return t+"="+encodeURIComponent(_[t])})).join("&"),t.prev=13,t.next=16,c("data/histoday?"+f);case 16:if(!((m=t.sent).Response&&"Error"===m.Response||0===m.Data.length)){t.next=20;break}return s([],{noData:!0}),t.abrupt("return");case 20:y=[],m.Data.forEach((function(t){t.time>=o&&t.time<r&&(y=[].concat(C(y),[{time:1e3*t.time,low:t.low,high:t.high,open:t.open,close:t.close}]))})),l&&R.set(e.full_name,Object.assign({},y[y.length-1])),console.log("[getBars]: returned "+y.length+" bar(s)"),s(y,{noData:!1}),t.next=31;break;case 27:t.prev=27,t.t0=t.catch(13),console.log("[getBars]: Get error",t.t0),a(t.t0);case 31:case"end":return t.stop()}}),t,null,[[13,27]])}))),function(t,e,n,o,r,i,s){return L.apply(this,arguments)}),subscribeBars:function(t,e,n,o,r){console.log("[subscribeBars]: Method call with subscribeUID:",o),p(t.full_name).fragment||function(t,e,n,o,r,i){var s=p(t.full_name),a="0~"+s.exchange+"~"+s.fromSymbol+"~"+s.toSymbol,c={id:o,callback:n},l=f.get(a);l?l.handlers.push(c):(l={subscribeUID:o,resolution:e,lastDailyBar:i,handlers:[c]},f.set(a,l),console.log("[subscribeBars]: Subscribe to streaming. Channel:",a),_.send({action:"SubAdd",subs:[a]}))}(t,e,n,o,0,R.get(t.full_name))},unsubscribeBars:function(t){console.log("[unsubscribeBars]: Method call with subscriberUID:",t),function(t){for(var e,n=d(f.keys());!(e=n()).done;){var o=e.value,r=f.get(o),i=r.handlers.findIndex((function(e){return e.id===t}));if(-1!==i&&(r.handlers.splice(i,1),0===r.handlers.length)){console.log("[unsubscribeBars]: Unsubscribe from streaming. Channel:",o),_.send({action:"SubRemove",subs:[o]}),f.delete(o);break}}}(t)}},W=n("rJ76");var F=function(t){var e,n;function r(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).tvWidget=null,e}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=r.prototype;return i.componentDidMount=function(){var t,e={symbol:this.props.symbol,datafeed:E,interval:this.props.interval,container_id:this.props.containerId,library_path:this.props.libraryPath,locale:(t=new RegExp("[\\?&]lang=([^&#]*)").exec(window.location.search),(null===t?null:decodeURIComponent(t[1].replace(/\+/g," ")))||"en"),disabled_features:["use_localstorage_for_settings"],enabled_features:["study_templates"],charts_storage_url:this.props.chartsStorageUrl,charts_storage_api_version:this.props.chartsStorageApiVersion,client_id:this.props.clientId,user_id:this.props.userId,fullscreen:this.props.fullscreen,autosize:this.props.autosize,studies_overrides:this.props.studiesOverrides,custom_indicators_getter:this.props.customIndicatorsGetter},n=new W.widget(e);this.tvWidget=n,n.onChartReady((function(){n.headerReady().then((function(){var t=n.createButton();t.setAttribute("title","Click to show a notification popup"),t.classList.add("apply-common-tooltip"),t.addEventListener("click",(function(){return n.showNoticeDialog({title:"Notification",body:"TradingView Charting Library API works correctly",callback:function(){console.log("Noticed!")}})})),t.innerHTML="Custom Btn"})),n.chart().createStudy("Binance Open Interest",!1,!0)}))},i.componentWillUnmount=function(){null!==this.tvWidget&&(this.tvWidget.remove(),this.tvWidget=null)},i.render=function(){return o.createElement("div",{id:this.props.containerId,className:"self-stretch w-full TVChartContainer"})},r}(o.PureComponent);F.defaultProps={symbol:"Bitfinex:BTC/USD",interval:"1D",containerId:"tv_chart_container",libraryPath:"/charting_library/",chartsStorageUrl:"https://saveload.tradingview.com",chartsStorageApiVersion:"1.1",clientId:"tradingview.com",userId:"public_user_id",fullscreen:!1,autosize:!0,studiesOverrides:{},customIndicatorsGetter:function(t){return Promise.resolve([b(t)])}}},rJ76:function(t,e,n){n("sC2a"),n("6kNP"),n("q8oJ"),n("8npG"),n("E5k/"),function(t){"use strict";var e=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t};function n(t,o){var r=e({},t);for(var i in o)"object"!=typeof t[i]||null===t[i]||Array.isArray(t[i])?void 0!==o[i]&&(r[i]=o[i]):r[i]=n(t[i],o[i]);return r}var o={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},r={width:800,height:500,interval:"D",timezone:"Etc/UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},trading_customization:{position:{},order:{}},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"W"},{text:"1y",resolution:"W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}};function i(){return"1.15 (internal id 37fbf462 @ 2020-04-24 15:44:13.516973)"}var s=function(){function t(t){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!t.datafeed)throw new Error("Datafeed is not defined");if(this._options=n(r,t),t.preset){var e=o[t.preset];e?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(e.disabled_features):this._options.disabled_features=e.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(e.enabled_features):this._options.enabled_features=e.enabled_features):console.warn("Unknown preset: `"+t.preset+"`")}"Dark"===this._options.theme&&void 0===this._options.loading_screen&&(this._options.loading_screen={backgroundColor:"#131722"}),this._create()}return t.prototype.onChartReady=function(t){this._ready?t.call(this):this._readyHandlers.push(t)},t.prototype.headerReady=function(){var t=this;return this._innerWindowLoaded.then((function(){return t._innerWindow().headerReady()}))},t.prototype.onGrayedObjectClicked=function(t){this._innerAPI().onGrayedObjectClicked(t)},t.prototype.onShortcut=function(t,e){this._innerWindow().createShortcutAction(t,e)},t.prototype.subscribe=function(t,e){this._innerAPI().subscribe(t,e)},t.prototype.unsubscribe=function(t,e){this._innerAPI().unsubscribe(t,e)},t.prototype.chart=function(t){return this._innerAPI().chart(t)},t.prototype.setLanguage=function(t){this.remove(),this._options.locale=t,this._create()},t.prototype.setSymbol=function(t,e,n){this._innerAPI().changeSymbol(t,e+"",n)},t.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id],this._iFrame.parentNode&&this._iFrame.parentNode.removeChild(this._iFrame)},t.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},t.prototype.selectLineTool=function(t){this._innerAPI().selectLineTool(t)},t.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},t.prototype.save=function(t){this._innerAPI().saveChart(t)},t.prototype.load=function(t,e){this._innerAPI().loadChart({json:t,extendedData:e})},t.prototype.getSavedCharts=function(t){this._innerAPI().getSavedCharts(t)},t.prototype.loadChartFromServer=function(t){this._innerAPI().loadChartFromServer(t)},t.prototype.saveChartToServer=function(t,e,n){this._innerAPI().saveChartToServer(t,e,n)},t.prototype.removeChartFromServer=function(t,e){this._innerAPI().removeChartFromServer(t,e)},t.prototype.onContextMenu=function(t){this._innerAPI().onContextMenu(t)},t.prototype.createButton=function(t){return this._innerWindow().createButton(t)},t.prototype.showNoticeDialog=function(t){this._innerAPI().showNoticeDialog(t)},t.prototype.showConfirmDialog=function(t){this._innerAPI().showConfirmDialog(t)},t.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},t.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},t.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},t.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},t.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},t.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},t.prototype.addCustomCSSFile=function(t){this._innerWindow().addCustomCSSFile(t)},t.prototype.applyOverrides=function(t){this._options=n(this._options,{overrides:t}),this._innerWindow().applyOverrides(t)},t.prototype.applyStudiesOverrides=function(t){this._innerWindow().applyStudiesOverrides(t)},t.prototype.watchList=function(){return this._innerAPI().watchlist()},t.prototype.activeChart=function(){return this._innerAPI().activeChart()},t.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},t.prototype.layout=function(){return this._innerAPI().layout()},t.prototype.setLayout=function(t){this._innerAPI().setLayout(t)},t.prototype.layoutName=function(){return this._innerAPI().layoutName()},t.prototype.changeTheme=function(t){this._innerWindow().changeTheme(t)},t.prototype.takeScreenshot=function(){this._innerAPI().takeScreenshot()},t.prototype.lockAllDrawingTools=function(){return this._innerAPI().lockAllDrawingTools()},t.prototype.hideAllDrawingTools=function(){return this._innerAPI().hideAllDrawingTools()},t.prototype.magnetEnabled=function(){return this._innerAPI().magnetEnabled()},t.prototype.magnetMode=function(){return this._innerAPI().magnetMode()},t.prototype.undoRedoState=function(){return this._innerAPI().undoRedoState()},t.prototype._innerAPI=function(){return this._innerWindow().tradingViewApi},t.prototype._innerWindow=function(){return this._iFrame.contentWindow},t.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._iFrame.style.height=window.innerHeight+"px")},t.prototype._create=function(){var t=this,e=this._render(),n=document.getElementById(this._options.container_id);if(null===n)throw new Error("There is no such element - #"+this._options.container_id);n.innerHTML=e,this._iFrame=n.querySelector("#"+this._id);var o=this._iFrame;(this._options.autosize||this._options.fullscreen)&&(o.style.width="100%",this._options.fullscreen||(o.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize(),this._innerWindowLoaded=new Promise((function(t){o.addEventListener("load",(function e(){o.removeEventListener("load",e,!1),t()}),!1)})),this._innerWindowLoaded.then((function(){t._innerWindow().widgetReady((function(){t._ready=!0;for(var e=0,n=t._readyHandlers;e<n.length;e++){var o=n[e];try{o.call(t)}catch(t){console.error(t)}}t._innerWindow().initializationFinished()}))}))},t.prototype._render=function(){var t=window;if(t[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.customFormatters,brokerFactory:this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,tradingCustomization:this._options.trading_customization,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter,getCustomIndicators:this._options.custom_indicators_getter},this._options.saved_data)t[this._id].chartContent={json:this._options.saved_data};else if(!Boolean(this._options.symbol))throw new Error("Symbol is not defined");var e=(this._options.library_path||"")+"static/"+encodeURIComponent(this._options.locale)+"-tv-chart.37fbf462d076e305ceee.html#symbol="+encodeURIComponent(this._options.symbol||"")+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+encodeURIComponent(this._options.toolbar_bg.replace("#","")):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+encodeURIComponent(String(this._options.debug))+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"")+(this._options.theme?"&theme="+encodeURIComponent(String(this._options.theme)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+e+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},t}();window.TradingView=window.TradingView||{},window.TradingView.version=i,t.version=i,t.widget=s,Object.defineProperty(t,"__esModule",{value:!0})}(e)}}]);
//# sourceMappingURL=26-66151fce090d8d72a7c7.js.map