(this.webpackJsonpkalculated=this.webpackJsonpkalculated||[]).push([[0],{149:function(e,t,a){e.exports=a(375)},374:function(e,t,a){},375:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),c=a.n(l),o=a(10),i=a(9),s=a(7),u=a(12),m=a(141),d=a.n(m),E=a(97),h=a(36),p=a.n(h);p.a.initializeApp({apiKey:"AIzaSyCU32UjFCylBIswXOL2mSkj01xsr3T5eWE",authDomain:"findmarketplays-f8556.firebaseapp.com",databaseURL:"https://findmarketplays-f8556.firebaseio.com",projectId:"findmarketplays-f8556",storageBucket:"findmarketplays-f8556.appspot.com",messagingSenderId:"230930291400"});var f=p.a,b=a(56),v=a(20),g=a(29),y=Object(b.b)({name:"AUTH",initialState:{currentUser:{},isAuthed:!1},reducers:{clearUser:function(){return{currentUser:{},isAuthed:!1}},receiveUser:function(e,t){var a=t.payload,n=a.uid,r=a.email,l=a.displayName;return Object(g.a)(Object(g.a)({},e),{},{currentUser:{id:n,email:r,displayName:l},isAuthed:!0})}}}),O=y.reducer,j=y.actions,w=j.clearUser,k=j.receiveUser;var C=function(e){return{type:"RECEIVE_NOTE",note:e}},N=function(e){return{type:"RECEIVE_ERROR",errors:e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"RECEIVE_NOTE":return t.note;default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"RECEIVE_ERROR":return t.errors;default:return e}},A=Object(v.c)({auth:O,note:S,errors:T}),U=a(98),F=a(142),D={key:"root",storage:a.n(F).a,whitelist:["auth"]},P=Object(U.a)(D,A),I=Object(b.a)({reducer:P,middleware:Object(b.c)({serializableCheck:!1,immutableCheck:!1})}),M=Object(U.b)(I),B=a(378),L=a(377),R="/login",x=function(){return r.a.createElement(B.a,{bg:"dark",variant:"dark",fixed:"bottom"},r.a.createElement(L.a,null,r.a.createElement(i.c,{className:"nav-link",to:"/market"},"Copyright 2020 | FindMarketPlays LLC")))},W=a(26),_=a(24),G=a(18),X=a(8),H=a(96),J=a.n(H),Q=a(14),K=a(15),z=a(17),V=a(16),Y=function(e){Object(z.a)(a,e);var t=Object(V.a)(a);function a(){return Object(Q.a)(this,a),t.apply(this,arguments)}return Object(K.a)(a,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js",e.async=!0,e.innerHTML=JSON.stringify({symbols:[{proName:"AMEX:SPY",title:"SPY"},{proName:"NASDAQ:NDAQ",title:"NDAQ"},{proName:"NASDAQ:QQQ",title:"QQQ"},{proName:"FX_IDC:EURUSD",title:"EUR/USD"},{proName:"BITSTAMP:BTCUSD",title:"BTC/USD"}],colorTheme:"dark",isTransparent:!1,displayMode:"adaptive",locale:"en"}),document.getElementById("ScrollingWidget").appendChild(e)}},{key:"render",value:function(){return r.a.createElement("div",{id:"ScrollingWidget"})}}]),a}(r.a.Component),q=function(e){Object(z.a)(a,e);var t=Object(V.a)(a);function a(){var e;Object(Q.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).addWidget=function(){var t=document.createElement("script");t.src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js",t.async=!0,t.innerHTML=JSON.stringify({interval:"1m",width:380,isTransparent:!1,height:450,symbol:e.props.value,showIntervalTabs:!0,locale:"en",colorTheme:"dark"}),document.getElementById("TAWidget").innerHTML="",document.getElementById("TAWidget").appendChild(t)},e}return Object(K.a)(a,[{key:"componentDidMount",value:function(){this.addWidget()}},{key:"componentDidUpdate",value:function(e){e.value!==this.props.value&&this.addWidget()}},{key:"render",value:function(){return r.a.createElement("div",{id:"TAWidget",className:"widget__wrapper"})}}]),a}(r.a.Component),Z=function(e){Object(z.a)(a,e);var t=Object(V.a)(a);function a(){var e;Object(Q.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).addWidget=function(){var t=document.createElement("script");t.src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js",t.async=!0,t.innerHTML=JSON.stringify({symbol:e.props.value,width:380,locale:"en",colorTheme:"dark",isTransparent:!1}),document.getElementById("SSIWIdget").innerHTML="",document.getElementById("SSIWIdget").appendChild(t)},e}return Object(K.a)(a,[{key:"componentDidMount",value:function(){this.addWidget()}},{key:"componentDidUpdate",value:function(e){e.value!==this.props.value&&this.addWidget()}},{key:"render",value:function(){return r.a.createElement("div",{id:"SSIWIdget",className:"widget__wrapper"})}}]),a}(r.a.Component),$=function(e){Object(z.a)(a,e);var t=Object(V.a)(a);function a(){var e;Object(Q.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).addWidget=function(){var t=document.createElement("script");t.src="https://s3.tradingview.com/external-embedding/embed-widget-financials.js",t.async=!0,t.innerHTML=JSON.stringify({symbol:e.props.value,colorTheme:"dark",isTransparent:!1,largeChartUrl:"",displayMode:"regular",width:380,height:450,locale:"en"}),document.getElementById("SSFWidget").innerHTML="",document.getElementById("SSFWidget").appendChild(t)},e}return Object(K.a)(a,[{key:"componentDidMount",value:function(){this.addWidget()}},{key:"componentDidUpdate",value:function(e){e.value!==this.props.value&&this.addWidget()}},{key:"render",value:function(){return r.a.createElement("div",{id:"SSFWidget",className:"widget__wrapper"})}}]),a}(r.a.Component),ee=function(e){Object(z.a)(a,e);var t=Object(V.a)(a);function a(){var e;Object(Q.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).addWidget=function(){var t=document.createElement("script");t.src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js",t.async=!0,t.innerHTML=JSON.stringify({symbol:e.props.value,width:380,height:240,colorTheme:"dark",isTransparent:!1,locale:"en"}),document.getElementById("StockProfile").innerHTML="",document.getElementById("StockProfile").appendChild(t)},e}return Object(K.a)(a,[{key:"componentDidMount",value:function(){this.addWidget()}},{key:"componentDidUpdate",value:function(e){e.value!==this.props.value&&this.addWidget()}},{key:"render",value:function(){return r.a.createElement("div",{id:"StockProfile",className:"widget__wrapper"})}}]),a}(r.a.Component),te=function(e,t){var a;return function(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];var c=function(){clearTimeout(a),e.apply(void 0,r)};clearTimeout(a),a=setTimeout(c,t)}},ae=function(){var e=Object(n.useState)("TSLA"),t=Object(s.a)(e,2),a=t[0],l=t[1];return r.a.createElement(n.Fragment,null,r.a.createElement(Y,null),r.a.createElement(W.a,null,r.a.createElement(_.a,{className:"widget__wrapper"},r.a.createElement(G.a,{md:7},r.a.createElement(X.a,null,r.a.createElement("h1",null,"Research A Single Stock"),r.a.createElement("h5",null,"ENTER STOCK TICKER"),r.a.createElement(X.a.Group,null,r.a.createElement(X.a.Control,{type:"text",value:a,onChange:function(e){te(l(e.target.value.toUpperCase()),300)},placeholder:"Enter Stock Ticker"}))))),r.a.createElement(_.a,null,r.a.createElement(G.a,{md:12,lg:6},r.a.createElement(Z,{value:a})),r.a.createElement(G.a,{md:12,lg:6},r.a.createElement(ee,{value:a}))),r.a.createElement(_.a,null,r.a.createElement(G.a,{md:12,lg:6},r.a.createElement(q,{value:a})),r.a.createElement(G.a,{md:12,lg:6},r.a.createElement($,{value:a}))),r.a.createElement(_.a,null,r.a.createElement(G.a,{className:"widget__col"},r.a.createElement(J.a,{symbol:a,theme:H.Themes.DARK,locale:"en",autosize:!0})))))},ne=a(28),re=function(){return r.a.createElement(B.a,{collapseOnSelect:!0,expand:"sm",className:"justify-content-center",bg:"dark",variant:"dark",fixed:"top"},r.a.createElement(B.a.Brand,null,"Platform"),r.a.createElement(B.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(B.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(L.a,null,r.a.createElement(i.c,{className:"nav-link",to:"/market"},"Market Overview"),r.a.createElement(i.c,{className:"nav-link",to:"/stock"},"Stock Lookup"),r.a.createElement(i.c,{className:"nav-link",to:"/DD"},"Research "),r.a.createElement(i.c,{className:"nav-link",to:"/notes"},"Notes "),r.a.createElement(i.c,{className:"nav-link",to:"/optionFeed"},"Options Feed"),r.a.createElement(i.c,{className:"nav-link",to:"/newsFeed"},"News Feed"),r.a.createElement(i.c,{className:"nav-link",to:"/profile"},"Profile"))),r.a.createElement(ne.a,{className:"ml-2",variant:"primary",onClick:function(){f.auth().signOut()}},"Sign Out"))},le=function(){return r.a.createElement(B.a,{collapseOnSelect:!0,expand:"sm",className:"justify-content-center",bg:"dark",variant:"dark",fixed:"top"},r.a.createElement(B.a.Brand,null,"Platform"),r.a.createElement(B.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(B.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(L.a,null,r.a.createElement(i.c,{className:"nav-link",to:"/market"},"Market Overview"),r.a.createElement(i.c,{className:"nav-link",to:"/stock"},"Stock Lookup"),r.a.createElement(i.c,{className:"nav-link",to:"/DD"},"Research "),r.a.createElement(i.c,{className:"nav-link",to:"/notes"},"Notes "),r.a.createElement(i.c,{className:"nav-link",to:"/optionFeed"},"Options Feed"),r.a.createElement(i.c,{className:"nav-link",to:"/newsFeed"},"News Feed"),r.a.createElement(i.c,{to:R},r.a.createElement(ne.a,{className:"ml-2",variant:"primary"},"Log In/Sign Up")))))},ce=Object(o.b)((function(e){return{isAuthed:e.auth.isAuthed}}))((function(e){var t=e.isAuthed;return r.a.createElement("div",null,t?r.a.createElement(re,null):r.a.createElement(le,null))})),oe=(a(191),function(){return r.a.createElement("div",{className:"About"},r.a.createElement(W.a,{fluid:!0},r.a.createElement("h1",null,"About FindMarketPlays.com"),r.a.createElement("p",null,"If you enjoy the platform, enter to win a $25 amazon gift card by completing the 2 minute survey found",r.a.createElement("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSf7hm_zUyg7aq-5RpidY49DHNpefFwk6um3JxDPpbOwLwYSag/viewform?usp=pp_url"}," here. "),"Happy Trading!")))}),ie=function(e){var t=e.file;if(!t.data.preview){var a="https://reddit.com".concat(t.data.permalink);return r.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4"},r.a.createElement("div",{className:" card-link"},r.a.createElement("div",{className:"research-card"},r.a.createElement("div",{className:"card-img-top"},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:"btn btn-secondary btn-sm top-right-float"},"View Post"))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t.data.title)),r.a.createElement("p",{className:"card-text"})))))}if(t.data.preview.enabled){var n="https://reddit.com".concat(t.data.permalink);return r.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4"},r.a.createElement("div",{className:"card-link"},r.a.createElement("div",{className:"research-card"},r.a.createElement("div",{className:"card-img-top"},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:"btn btn-secondary btn-sm top-right-float"},"View Post"))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},r.a.createElement("a",{href:t.data.url,target:"_blank",rel:"noopener noreferrer"},t.data.title)),r.a.createElement("p",{className:"card-text"})))))}return r.a.createElement("div",null)},se=function(e){var t=e.files;return r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement(ie,{key:e.data.id,file:e})})))},ue=function(e){Object(z.a)(a,e);var t=Object(V.a)(a);function a(e){var n;return Object(Q.a)(this,a),(n=t.call(this,e)).state={subreddit:"WallStreetResearch",sort:"new",files:[],after:null,before:null,page:1},n.nextPage=function(){fetch("".concat(n.url+n.state.subreddit,"/").concat(n.state.sort,".json?count=").concat(25*n.state.page,"&after=").concat(n.state.after)).then((function(e){return e.json()})).then((function(e){n.setState((function(){return{files:e.data.children,after:e.data.after,before:e.data.before,page:n.state.page+1}})),window.scrollTo(0,0)})).catch(console.log)},n.prevPage=function(){fetch("".concat(n.url+n.state.currentSubreddit,"/").concat(n.state.sort,".json?count=").concat(25*(n.state.page-1)-1,"&before=").concat(n.state.before)).then((function(e){return e.json()})).then((function(e){window.scrollTo(0,0);var t={files:e.data.children,after:e.data.after,before:e.data.before};n.state.page>1&&(t.page=n.state.page-1),n.setState(t)})).catch(console.log)},n.subreddit="WallStreetResearch",n.url="https://www.reddit.com/r/",n.sorts=["hot","new","top","controversial","rising"],n}return Object(K.a)(a,[{key:"componentDidMount",value:function(){this.setSubreddit(this.state.subreddit)}},{key:"setSubreddit",value:function(e){var t=this;this.setState({files:[],currentSubreddit:e,page:1}),fetch("".concat(this.url+e,"/").concat(this.state.sort,".json")).then((function(e){return e.json()})).then((function(e){t.setState({files:e.data.children,after:e.data.after,before:e.data.before}),window.scrollTo(0,0)})).catch(console.log)}},{key:"changeSort",value:function(e){var t=this;this.setState({files:[],sort:e,page:1}),fetch("".concat(this.url+this.state.subreddit,"/").concat(e,".json")).then((function(e){return e.json()})).then((function(e){t.setState({files:e.data.children,after:e.data.after,before:e.data.before}),window.scrollTo(0,0)})).catch(console.log)}},{key:"render",value:function(){var e;if(this.state.files.length>0){var t,a=r.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:this.nextPage},"Next"),n=r.a.createElement("button",{className:"btn btn-secondary",type:"submit",onClick:this.prevPage},"Previous");t=null===this.state.after&&null!==this.state.before?r.a.createElement("div",null,n):null===this.state.before&&null!==this.state.after?r.a.createElement("div",null,a):null!==this.state.before&&null!==this.state.after?r.a.createElement("div",null,n," ",r.a.createElement("span",{className:"p-3 text-black-50"},"Page",this.state.page)," ",a):r.a.createElement("div",null,"No Posts found."),e=r.a.createElement("div",{className:"m-2"},r.a.createElement(se,{files:this.state.files}),r.a.createElement("br",null),r.a.createElement("div",{className:"center-block m-2"},t))}else e=r.a.createElement("div",{className:"p-2"},r.a.createElement("center",null,"Loading..."));return r.a.createElement("div",{className:"DD"},r.a.createElement(W.a,{fluid:!0},r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement(Y,null))),r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement("h1",null,"Find Trade Opportunities"))),e))}}]),a}(r.a.Component),me=a(73),de=function(e){return r.a.createElement(me.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Sentiment"),r.a.createElement("th",null,"Put/Call"),r.a.createElement("th",null,"Expiration"),r.a.createElement("th",null,"Strike"))),e.value.map((function(e){return r.a.createElement("tbody",{key:e.id},r.a.createElement("tr",null,r.a.createElement("td",null,e.description),r.a.createElement("td",null,e.sentiment),r.a.createElement("td",null,e.put_call),r.a.createElement("td",null,e.date_expiration),r.a.createElement("td",null,e.strike_price)))})))},Ee=Object(o.b)((function(e){return{isAuthed:e.auth.isAuthed}}))((function(e){var t=e.isAuthed,a=Object(n.useState)("TSLA"),l=Object(s.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)([]),m=Object(s.a)(i,2),d=m[0],E=m[1],h=Object(u.f)();Object(n.useEffect)((function(){if(t){te(function(){var e="/optionsAPI/".concat(c);fetch(e,{headers:{Accept:"application/json"}}).then((function(e){return e.json().then((function(e){E(e.message.option_activity||[])}))})).catch((function(e){return console.error(e)}))}())}else h.push("/login")}),[t,h,c]);return r.a.createElement(n.Fragment,null,r.a.createElement(Y,null),r.a.createElement(W.a,null,r.a.createElement(_.a,{className:"widget__wrapper"},r.a.createElement(G.a,{md:7},r.a.createElement(X.a,null,r.a.createElement("h1",null,"Find Unusual Options Trades"),r.a.createElement("h5",null,"ENTER STOCK TICKER"),r.a.createElement(X.a.Group,null,r.a.createElement(X.a.Control,{type:"text",value:c,onChange:function(e){o(e.target.value.toUpperCase())},placeholder:"Enter Stock Ticker"}))))),r.a.createElement(_.a,null,c&&d.length>0&&r.a.createElement(de,{value:d}))))})),he=function(e){return r.a.createElement(me.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"))),e.value.map((function(e){return r.a.createElement("tbody",{key:e.id},r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("a",{href:e.url,target:"popup"},e.title))))})))},pe=Object(o.b)((function(e){return{isAuthed:e.auth.isAuthed}}))((function(e){var t=e.isAuthed,a=Object(n.useState)("TSLA"),l=Object(s.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)([]),m=Object(s.a)(i,2),d=m[0],E=m[1],h=Object(u.f)();Object(n.useEffect)((function(){if(t){te(function(){var e="/newsAPI/".concat(c);fetch(e,{headers:{Accept:"application/json"}}).then((function(e){return e.json().then((function(e){E(e.message||[])}))})).catch((function(e){return console.error(e)}))}())}else h.push(R)}),[t,h,c]);return r.a.createElement(n.Fragment,null,r.a.createElement(Y,null),r.a.createElement(W.a,null,r.a.createElement(_.a,{className:"widget__wrapper"},r.a.createElement(G.a,{md:7},r.a.createElement(X.a,null,r.a.createElement("h1",null,"Find News Articles"),r.a.createElement("h5",null,"ENTER STOCK TICKER"),r.a.createElement(X.a.Group,null,r.a.createElement(X.a.Control,{type:"text",value:c,onChange:function(e){o(e.target.value.toUpperCase())},placeholder:"Enter Stock Ticker"}))))),r.a.createElement(_.a,null,c&&d.length>0&&r.a.createElement(he,{value:d}))))})),fe=a(49),be=a.n(fe),ve={s:"few seconds",ss:"%d seconds",m:"1 minute",mm:"%d minutes",h:"1 hour",hh:"%d hours",d:"1 day",dd:"%d days",M:"1 month",MM:"%d months",y:"1 year",yy:"%d years"},ge=function(){return r.a.createElement("div",{className:"loading-container"},r.a.createElement("div",{className:"loading"},r.a.createElement("div",null),r.a.createElement("div",null)))},ye=Object(o.b)((function(e){var t=e.auth;return{currentUser:t.currentUser,isAuthed:t.isAuthed}}))((function(e){var t=e.currentUser,a=e.isAuthed,l=Object(u.f)(),c=Object(n.useState)(!0),o=Object(s.a)(c,2),m=o[0],d=o[1],E=Object(n.useState)([]),h=Object(s.a)(E,2),p=h[0],b=h[1];Object(n.useEffect)((function(){a?f.database().ref("/user-notes/".concat(t.id)).once("value").then((function(e){b(Object.values(null===e||void 0===e?void 0:e.val())||[]),d(!1)})).catch((function(e){console.log("error fetching notes: ",e),d(!1)})):l.push("/login")}),[a,l,t.id]);return r.a.createElement(n.Fragment,null,r.a.createElement(Y,null),r.a.createElement(W.a,null,r.a.createElement(_.a,{className:"mb-3"},r.a.createElement(G.a,{className:"d-flex justify-content-between"},r.a.createElement("h1",{className:"d-inline-block"},"Notes"),r.a.createElement("div",null,r.a.createElement(ne.a,{variant:"primary",onClick:function(){return l.push("/note/new")}},"Create")))),m?r.a.createElement(ge,null):r.a.createElement(me.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",{style:{width:"25%"}},"Posted")),0===p.length?r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement("p",null,"Nothing here yet..."))):p.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement(i.b,{className:"note-title",to:"/note/".concat(e.id)},e.title)),r.a.createElement("td",{style:{width:"25%"}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:be.a.utc();be.a.updateLocale("en",{relativeTime:ve});var a=be.a.utc(e),n=be.a.utc(t),r=n.from(a,!0);return be.a.updateLocale("en",null),"".concat(r," ago")}(e.createdAt)))}))))))})),Oe=Object(o.b)((function(e){var t=e.auth;return{currentUser:t.currentUser,isAuthed:t.isAuthed}}),(function(e){return{addNote:function(t){return e(C(t))}}}))((function(e){var t=e.currentUser,a=(e.addNote,Object(o.c)()),l=Object(u.f)(),c=Object(n.useState)(!0),i=Object(s.a)(c,2),m=i[0],d=i[1],E=Object(n.useState)([]),h=Object(s.a)(E,2),p=h[0],b=h[1],v=Object(u.g)();Object(n.useEffect)((function(){f.database().ref("/user-notes/".concat(t.id,"/").concat(v.id)).once("value").then((function(e){b(null===e||void 0===e?void 0:e.val()),a(C(null===e||void 0===e?void 0:e.val())),d(!1)})).catch((function(e){console.log("error fetching note: ",e),d(!1)}))}),[v.id]);var g={};return g["/notes/".concat(p.id)]=p,g["/user-notes/".concat(t.id,"/").concat(p.id)]=p,r.a.createElement(n.Fragment,null,r.a.createElement(Y,null),m?r.a.createElement(ge,null):r.a.createElement(W.a,null,r.a.createElement(_.a,{className:"mb-3"},r.a.createElement(G.a,{className:"d-flex justify-content-between"},r.a.createElement("h1",{className:"d-inline-block"},p.title),r.a.createElement("div",null,r.a.createElement(ne.a,{className:"mt-1 ml-3",variant:"primary",onClick:function(){l.push("/note/edit/".concat(v.id))}},"Edit"),r.a.createElement(ne.a,{className:"mt-1 ml-3",variant:"danger",onClick:function(){f.database().ref("/user-notes/".concat(t.id,"/").concat(p.id)).remove().then((function(){return l.push("/notes")})).catch((function(e){return"Cannot delete"}))}},"Delete"),r.a.createElement(ne.a,{className:"mt-1 ml-3",variant:"secondary",onClick:function(){l.push("/notes")}},"Back")))),r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:p.body}})))))})),je=a(74),we=a.n(je),ke=a(75),Ce=a.n(ke),Ne=a(379);var Se=function(e){if(Object.keys(e).length)return r.a.createElement(Ne.a,{variant:"danger"},r.a.createElement("p",null,"Darn it! It looks like you've left your title or body empty."))},Te=Object(o.b)((function(e){var t=e.auth,a=e.note;return{currentUser:t.currentUser,note:a}}))((function(e){var t=e.currentUser,a=e.note,l=Object(o.c)(),c=Object(u.f)(),i=Object(n.useState)(a.body),m=Object(s.a)(i,2),d=m[0],E=m[1],h=Object(n.useState)(a.title),p=Object(s.a)(h,2),b=p[0],v=p[1],g=Object(n.useState)({}),y=Object(s.a)(g,2),O=y[0],j=y[1],w=Object(n.useRef)();Object(n.useEffect)((function(){void 0!==b&&void 0!==d||c.push("/notes")}),[]);var k={title:b,body:d};return r.a.createElement(n.Fragment,null,r.a.createElement(Y,null),r.a.createElement(W.a,null,Se(O),r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement(X.a,null,r.a.createElement(X.a.Group,null,r.a.createElement(X.a.Control,{type:"text",value:b,onChange:function(e){return v(e.target.value)},placeholder:"Title"}))),r.a.createElement(we.a,{theme:"snow",value:d||"",onChange:E,id:"notes-container",placeholder:"Compose a note...",ref:w}),r.a.createElement(ne.a,{variant:"primary",className:"mt-4",onClick:function(){!function(){var e=w.current.getEditor().getText().replace(/\n/gi,""),n=Ce()(b,e),r=n.errors;if(!n.isValid)return j(r),void l(N(r));f.database().ref("/user-notes/".concat(t.id,"/").concat(a.id)).update(k),c.push("/notes")}()}},"Save"),r.a.createElement(ne.a,{className:"ml-2 mt-4",variant:"secondary",onClick:function(){return c.push("/notes")}},"Cancel")))))})),Ae=(a(373),a(374),a(76)),Ue=function(e){Object(z.a)(a,e);var t=Object(V.a)(a);function a(){return Object(Q.a)(this,a),t.apply(this,arguments)}return Object(K.a)(a,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js",e.async=!0,e.innerHTML=JSON.stringify({colorTheme:"dark",dateRange:"1d",exchange:"US",showChart:!0,locale:"en",largeChartUrl:"",isTransparent:!1,width:"310",height:"600",plotLineColorGrowing:"rgba(33, 150, 243, 1)",plotLineColorFalling:"rgba(33, 150, 243, 1)",gridLineColor:"rgba(240, 243, 250, 1)",scaleFontColor:"rgba(120, 123, 134, 1)",belowLineFillColorGrowing:"rgba(33, 150, 243, 0.12)",belowLineFillColorFalling:"rgba(33, 150, 243, 0.12)",symbolActiveColor:"rgba(33, 150, 243, 0.12)"}),document.getElementById("MarketDataWidget").appendChild(e)}},{key:"render",value:function(){return r.a.createElement("div",{id:"MarketDataWidget"})}}]),a}(r.a.Component),Fe=function(e){Object(z.a)(a,e);var t=Object(V.a)(a);function a(){return Object(Q.a)(this,a),t.apply(this,arguments)}return Object(K.a)(a,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://s3.tradingview.com/external-embedding/embed-widget-events.js",e.async=!0,e.innerHTML=JSON.stringify({colorTheme:"dark",isTransparent:!1,width:"310",height:"600",locale:"en",importanceFilter:"0,1",currencyFilter:"CNY,USD,GBP,SAR"}),document.getElementById("EconDataWidget").appendChild(e)}},{key:"render",value:function(){return r.a.createElement("div",{id:"EconDataWidget"})}}]),a}(r.a.Component),De=function(e){Object(z.a)(a,e);var t=Object(V.a)(a);function a(){return Object(Q.a)(this,a),t.apply(this,arguments)}return Object(K.a)(a,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js",e.async=!0,e.innerHTML=JSON.stringify({colorTheme:"dark",dateRange:"12m",showChart:!0,locale:"en",largeChartUrl:"",isTransparent:!1,width:"310",height:"600",plotLineColorGrowing:"rgba(33, 150, 243, 1)",plotLineColorFalling:"rgba(33, 150, 243, 1)",gridLineColor:"rgba(240, 243, 250, 1)",scaleFontColor:"rgba(120, 123, 134, 1)",belowLineFillColorGrowing:"rgba(33, 150, 243, 0.12)",belowLineFillColorFalling:"rgba(33, 150, 243, 0.12)",symbolActiveColor:"rgba(33, 150, 243, 0.12)",tabs:[{title:"Indices",symbols:[{s:"FOREXCOM:SPXUSD",d:"S&P 500"},{s:"FOREXCOM:NSXUSD",d:"Nasdaq 100"},{s:"FOREXCOM:DJI",d:"Dow 30"},{s:"INDEX:NKY",d:"Nikkei 225"},{s:"INDEX:DEU30",d:"DAX Index"},{s:"FOREXCOM:UKXGBP",d:"FTSE 100"}],originalTitle:"Indices"},{title:"Commodities",symbols:[{s:"CME_MINI:ES1!",d:"E-Mini S&P"},{s:"CME:6E1!",d:"Euro"},{s:"COMEX:GC1!",d:"Gold"},{s:"NYMEX:CL1!",d:"Crude Oil"},{s:"NYMEX:NG1!",d:"Natural Gas"},{s:"CBOT:ZC1!",d:"Corn"}],originalTitle:"Commodities"},{title:"Bonds",symbols:[{s:"CME:GE1!",d:"Eurodollar"},{s:"CBOT:ZB1!",d:"T-Bond"},{s:"CBOT:UB1!",d:"Ultra T-Bond"},{s:"EUREX:FGBL1!",d:"Euro Bund"},{s:"EUREX:FBTP1!",d:"Euro BTP"},{s:"EUREX:FGBM1!",d:"Euro BOBL"}],originalTitle:"Bonds"},{title:"Forex",symbols:[{s:"FX:EURUSD"},{s:"FX:GBPUSD"},{s:"FX:USDJPY"},{s:"FX:USDCHF"},{s:"FX:AUDUSD"},{s:"FX:USDCAD"}],originalTitle:"Forex"}]}),document.getElementById("MarketOverviewWidget").appendChild(e)}},{key:"render",value:function(){return r.a.createElement("div",{id:"MarketOverviewWidget"})}}]),a}(r.a.Component),Pe=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(Y,null),r.a.createElement(W.a,null,r.a.createElement("br",null),r.a.createElement(_.a,{className:"mb-3"},r.a.createElement(G.a,{className:"d-flex justify-content-center"},r.a.createElement("h1",null,"Market Overview"))),r.a.createElement(_.a,null,r.a.createElement(G.a,{md:12,lg:4},r.a.createElement("h3",null,r.a.createElement(Ae.a,{variant:"light"},"Biggest Movers Today")),r.a.createElement(Ue,null)),r.a.createElement(G.a,{md:12,lg:4},r.a.createElement("h3",null,r.a.createElement(Ae.a,{variant:"light"},"Market Overview")),r.a.createElement(De,null)),r.a.createElement(G.a,{md:12,lg:4},r.a.createElement("h3",null,r.a.createElement(Ae.a,{variant:"light"},"Upcoming Economic Events")),r.a.createElement(Fe,null)))))},Ie=a(39);var Me=function(e){if(Object.keys(e).length)return r.a.createElement(Ne.a,{variant:"danger"},r.a.createElement("p",null,"Oops, incorrect email or password."))},Be=Object(o.b)((function(e){return{isAuthed:e.auth.isAuthed}}))((function(e){var t=e.isAuthed,a=Object(n.useState)({email:"",password:""}),l=Object(s.a)(a,2),c=l[0],i=l[1],m=Object(n.useState)({}),d=Object(s.a)(m,2),E=d[0],h=d[1],p=Object(o.c)(),b=Object(u.f)();Object(n.useEffect)((function(){t&&b.push("/")}),[t,b]);var v=function(e){i(Object(g.a)(Object(g.a)({},c),{},Object(Ie.a)({},e.target.name,e.target.value)))};return r.a.createElement(n.Fragment,null,r.a.createElement(W.a,null,r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement("h1",null,"Login to access the full platform."))),r.a.createElement(_.a,null,r.a.createElement(G.a,null,Me(E),r.a.createElement(X.a,{onSubmit:function(e){e.preventDefault();var t=c.email,a=c.password;f.auth().signInWithEmailAndPassword(t,a).then((function(e){p(k(e))})).catch((function(e){h(e)}))}},r.a.createElement(X.a.Group,{controlId:"formBasicEmail"},r.a.createElement(X.a.Label,null,"Email address"),r.a.createElement(X.a.Control,{name:"email",type:"email",placeholder:"Enter email",onChange:v,value:c.email}),r.a.createElement(X.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(X.a.Group,{controlId:"formBasicPassword"},r.a.createElement(X.a.Label,null,"Password"),r.a.createElement(X.a.Control,{name:"password",type:"password",placeholder:"Password",onChange:v,value:c.password})),r.a.createElement(ne.a,{variant:"primary",type:"submit"},"Submit")))),r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement(ne.a,{href:"/register",variant:"secondary"},"New User? Register Here"))),r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement(ne.a,{href:"/forgotPassword",variant:"link"},"Forgot Password")))))}));var Le=function(e){if(e.message)return r.a.createElement(Ne.a,{variant:"danger"},r.a.createElement("p",null,e.message))},Re=Object(o.b)((function(e){return{isAuthed:e.auth.isAuthed}}))((function(e){var t=e.isAuthed,a=Object(n.useState)({email:"",password:""}),l=Object(s.a)(a,2),c=l[0],o=l[1],i=Object(u.f)(),m=Object(n.useState)({}),d=Object(s.a)(m,2),E=d[0],h=d[1];Object(n.useEffect)((function(){t&&i.push("/")}),[t,i]);var p=function(e){o(Object(g.a)(Object(g.a)({},c),{},Object(Ie.a)({},e.target.name,e.target.value)))};return r.a.createElement(n.Fragment,null,r.a.createElement(W.a,null,r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement("h1",null,"Register to access the full platform."))),r.a.createElement(_.a,null,r.a.createElement(G.a,null,Le(E),r.a.createElement(X.a,{onSubmit:function(e){e.preventDefault();var t=c.email,a=c.password;f.auth().createUserWithEmailAndPassword(t,a).then((function(e){console.log("Success signing up",e)})).catch((function(e){h(e)}))}},r.a.createElement(X.a.Group,{controlId:"formBasicEmail"},r.a.createElement(X.a.Label,null,"Email address"),r.a.createElement(X.a.Control,{name:"email",type:"email",placeholder:"Enter email",onChange:p,value:c.email}),r.a.createElement(X.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(X.a.Group,{controlId:"formBasicPassword"},r.a.createElement(X.a.Label,null,"Password"),r.a.createElement(X.a.Control,{name:"password",type:"password",placeholder:"Password",onChange:p,value:c.password})),r.a.createElement(ne.a,{variant:"primary",type:"submit"},"Submit")))),r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement(ne.a,{href:R,variant:"secondary"},"Back to Login"))),r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement(ne.a,{href:"/forgotPassword",variant:"link"},"Forgot Password")))))})),xe=Object(o.b)((function(e){return{isAuthed:e.auth.isAuthed}}))((function(e){var t=e.isAuthed,a=Object(n.useState)({email:""}),l=Object(s.a)(a,2),c=l[0],o=l[1],i=Object(u.f)();Object(n.useEffect)((function(){t&&i.push("/")}),[t,i]);return r.a.createElement(n.Fragment,null,r.a.createElement(W.a,null,r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement("h1",null,"Reset Password"))),r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement(X.a,{onSubmit:function(e){e.preventDefault();var t=c.email;f.auth().sendPasswordResetEmail(t).then((function(e){alert("Please check your email...")})).catch((function(e){console.log(e)}))}},r.a.createElement(X.a.Group,{controlId:"formBasicEmail"},r.a.createElement(X.a.Label,null,"Email address"),r.a.createElement(X.a.Control,{name:"email",type:"email",placeholder:"Enter email",onChange:function(e){o(Object(g.a)(Object(g.a)({},c),{},Object(Ie.a)({},e.target.name,e.target.value)))},value:c.email}),r.a.createElement(X.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(ne.a,{variant:"primary",type:"submit"},"Submit")))),r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement(ne.a,{href:R,variant:"secondary"},"Login Page "))),r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement(ne.a,{href:"/register",variant:"secondary"},"Register Page")))))}));var We=function(e){if(e.message)return r.a.createElement(Ne.a,{variant:"danger"},r.a.createElement("p",null,e.message))};var _e=function(e){if(e)return r.a.createElement(Ne.a,{variant:"success"},r.a.createElement("p",null,"Success."))};var Ge=function(e){if(e)return r.a.createElement(Ne.a,{variant:"success"},r.a.createElement("p",null,"Password reset email sent."))},Xe=Object(o.b)((function(e){var t=e.auth;return{currentUser:t.currentUser,isAuthed:t.isAuthed}}))((function(e){var t=e.currentUser,a=e.isAuthed,l=Object(n.useState)(!1),c=Object(s.a)(l,2),o=c[0],i=c[1],m=Object(n.useState)(t.email),d=Object(s.a)(m,2),E=d[0],h=d[1],f=Object(n.useState)(),b=Object(s.a)(f,2),v=b[0],g=b[1],y=Object(n.useState)({}),O=Object(s.a)(y,2),j=O[0],w=O[1],k=Object(n.useState)(!1),C=Object(s.a)(k,2),N=C[0],S=C[1],T=Object(n.useState)(!1),A=Object(s.a)(T,2),U=A[0],F=A[1],D=Object(u.f)();function P(){var e;(e=v,p.a.auth().currentUser.updateEmail(e)).then((function(e){h(v),i(!1),S(!0),w({}),U&&F(!1)})).catch((function(e){w(e)}))}function I(){(function(){var e=p.a.auth(),t=p.a.auth().currentUser.email;return e.sendPasswordResetEmail(t)})().then((function(e){F(!0),w({}),N&&S(!1)})).catch((function(e){w(e)}))}return Object(n.useEffect)((function(){a?(h(p.a.auth().currentUser.email),S(!1),F(!1)):D.push(R)}),[a,D]),r.a.createElement("div",{className:"About"},r.a.createElement(W.a,{fluid:!0},r.a.createElement(_.a,null,r.a.createElement(G.a,{align:"center"},r.a.createElement("h1",null,"My Account Settings"))),o?r.a.createElement(X.a,null,We(j),r.a.createElement(X.a.Group,null,r.a.createElement(X.a.Label,null,r.a.createElement("h2",null,"Email Address")),r.a.createElement(X.a.Control,{placeholder:E,onChange:function(e){return function(e){g(e.currentTarget.value)}(e)}})),r.a.createElement(ne.a,{className:"mt-4",onClick:function(){return P()}},"Save"),r.a.createElement(ne.a,{className:"mt-4 ml-2",variant:"secondary",onClick:function(){return i(!1)}},"Cancel")):r.a.createElement(W.a,null,_e(N),Ge(U),We(j),r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement("h2",{className:"border border-white rounded pl-3 pb-2 pt-2"},"Email"),r.a.createElement("h6",{className:"pl-3"},E),r.a.createElement(ne.a,{className:"ml-3",onClick:function(){return i(!0)}},"Reset Email")),r.a.createElement(G.a,null,r.a.createElement("h2",{className:"border border-white rounded pl-3 pt-2 pb-2"},"Password"),r.a.createElement("h6",{className:"p-2"}),r.a.createElement(ne.a,{className:"ml-3 mt-1",onClick:function(){return I()}},"Reset Password"))))))})),He=Object(o.b)((function(e){var t=e.auth;return{currentUser:t.currentUser,isAuthed:t.isAuthed}}))((function(e){var t=e.isAuthed,a=e.currentUser,l=Object(o.c)(),c=Object(u.f)(),i=Object(n.useState)(""),m=Object(s.a)(i,2),d=m[0],E=m[1],h=Object(n.useState)(""),p=Object(s.a)(h,2),b=p[0],v=p[1],g=Object(n.useState)({}),y=Object(s.a)(g,2),O=y[0],j=y[1],w=Object(n.useRef)();Object(n.useEffect)((function(){t||c.push(R)}),[t,c]);return r.a.createElement(n.Fragment,null,r.a.createElement(Y,null),r.a.createElement(W.a,null,Se(O),r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement(X.a,null,r.a.createElement(X.a.Group,null,r.a.createElement(X.a.Control,{type:"text",value:b,onChange:function(e){return v(e.target.value)},placeholder:"Title (required)"}))),r.a.createElement(we.a,{theme:"snow",value:d,onChange:E,id:"notes-container",placeholder:"Compose a note (required)",ref:w}),r.a.createElement(ne.a,{className:"mr-3 mt-4",variant:"primary",onClick:function(){if(a){var e=f.database().ref("notes").push().key,t={title:b,body:d,createdBy:a.id,createdAt:(new Date).getTime(),id:e},n={};n["/notes/".concat(e)]=t,n["/user-notes/".concat(a.id,"/").concat(e)]=t;var r=w.current.getEditor().getText().replace(/\n/gi,""),o=Ce()(b,r),i=o.errors;if(!o.isValid)return j(i),void l(N(i));f.database().ref().update(n).then((function(){E(""),v(""),c.push("/notes")})).catch((function(e){return console.log("error posting note: ",e)}))}}},"Create"),r.a.createElement(ne.a,{className:"mr-3 mt-4",variant:"secondary",onClick:function(){E(""),v(""),c.push("/notes")}},"Cancel")))))})),Je=a(148),Qe=function(){Object(n.useEffect)((function(){E.a.initialize("UA-176664458-1"),E.a.pageview(window.location.pathname+window.location.search)}));var e=Object(o.c)(),t=Object(n.useState)(!0),a=Object(s.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){f.auth().onAuthStateChanged((function(t){t?(c(!1),e(k(t))):(c(!1),e(w()))}))}),[e]),d()({method:"GET",url:"https://findmarketplays.herokuapp.com/",headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data.message)})),r.a.createElement(o.a,{store:I},r.a.createElement(Je.a,{loading:null,persistor:M},l?r.a.createElement(ge,null):r.a.createElement(i.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(ce,null),r.a.createElement("div",{className:"app__wrapper"},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/market"},r.a.createElement(Pe,null)),r.a.createElement(u.a,{path:R},r.a.createElement(Be,null)),r.a.createElement(u.a,{path:"/logout"},r.a.createElement(Be,null)),r.a.createElement(u.a,{path:"/register"},r.a.createElement(Re,null)),r.a.createElement(u.a,{path:"/forgotPassword"},r.a.createElement(xe,null)),r.a.createElement(u.a,{path:"/stock"},r.a.createElement(ae,null)),r.a.createElement(u.a,{path:"/DD"},r.a.createElement(ue,null)),r.a.createElement(u.a,{path:"/note/new"},r.a.createElement(He,null)),r.a.createElement(u.a,{path:"/note/edit/:id"},r.a.createElement(Te,null)),r.a.createElement(u.a,{path:"/notes"},r.a.createElement(ye,null)),r.a.createElement(u.a,{path:"/note/:id"},r.a.createElement(Oe,null)),r.a.createElement(u.a,{path:"/optionFeed"},r.a.createElement(Ee,null)),r.a.createElement(u.a,{path:"/newsFeed"},r.a.createElement(pe,null)),r.a.createElement(u.a,{path:"/profile"},r.a.createElement(Xe,null)),r.a.createElement(u.a,{path:"/about"},r.a.createElement(oe,null)))),r.a.createElement(x,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,null,r.a.createElement(o.a,{store:I},r.a.createElement(Qe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,t,a){var n=a(297);e.exports=function(e,t){var a={};return n.isEmpty(e)&&(a.title="Title cannot be empty"),n.isEmpty(t)&&(a.body="Body cannot be empty"),{errors:a,isValid:0===Object.keys(a).length}}}},[[149,1,2]]]);
//# sourceMappingURL=main.b459aa2b.chunk.js.map