(function(t){function e(e){for(var n,i,s=e[0],l=e[1],u=e[2],d=0,p=[];d<s.length;d++)i=s[d],a[i]&&p.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/sardwords/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"11d3":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("bb71");r("da64");n["a"].use(a["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:t.isDark}},[r("v-toolbar",{attrs:{app:""}},[r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("router-link",{attrs:{to:"/"}},[r("span",[t._v("Sardwords")]),r("span",{staticClass:"font-weight-light"},[t._v("0.0.1")])])],1),r("v-spacer"),r("v-btn",{attrs:{to:"/"}},[t._v("Settings")]),r("v-btn",{attrs:{to:"type"}},[t._v("Type")]),r("v-btn",{attrs:{to:"type-audio"}},[t._v("Type Audio")]),r("v-btn",{attrs:{icon:"",fab:""},on:{click:function(e){t.isDark=!t.isDark}}},[r("v-icon",[t._v("highlight")])],1)],1),r("v-content",[r("router-view")],1)],1)},i=[],s={name:"App",data:function(){return{isDark:!1}}},l=s,u=r("2877"),c=r("6544"),d=r.n(c),p=r("7496"),h=r("8336"),f=r("549c"),v=r("132d"),w=r("9910"),b=r("71d9"),m=r("2a7f"),g=Object(u["a"])(l,o,i,!1,null,null,null),y=g.exports;d()(g,{VApp:p["a"],VBtn:h["a"],VContent:f["a"],VIcon:v["a"],VSpacer:w["a"],VToolbar:b["a"],VToolbarTitle:m["a"]});var _=r("8c4f"),x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{column:"",wrap:""}},[r("v-textarea",{attrs:{name:"input-7-1",label:"Inputs",hint:t.unpersistedWords.split(this.spliter).filter(function(t){return!!t}).length+" words"},on:{change:function(e){return t.persist(e,t.spliter)}},model:{value:t.unpersistedWords,callback:function(e){t.unpersistedWords=e},expression:"unpersistedWords"}}),r("v-text-field",{attrs:{label:"Google API Key",value:t.gapikey},on:{change:function(e){return t.$store.commit("SET_API_KEY",e)}}})],1)],1)},k=[],V=r("cebc"),O=r("2f62"),C={data:function(){return{unpersistedWords:"",spliter:"\n"}},mounted:function(){this.unpersistedWords=this.$store.state.words.join(this.spliter)},computed:Object(V["a"])({},Object(O["d"])(["words","excludes","gapikey"]),Object(O["c"])(["wordsCount"])),watch:{},methods:{persist:function(t,e){this.$store.commit("PERSIST_WORDS",{words:t,spliter:e})}}},S=C,j=r("a523"),T=r("a722"),W=r("2677"),E=r("a844"),A=Object(u["a"])(S,x,k,!1,null,null,null),R=A.exports;d()(A,{VContainer:j["a"],VLayout:T["a"],VTextField:W["a"],VTextarea:E["a"]});var I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-toolbar",{attrs:{absolute:""}},[r("span",[t._v("\n        "+t._s(t.wordsCount)+" words\n      ")]),r("v-spacer"),r("v-slider",{attrs:{max:"2000"},on:{change:t.start},model:{value:t.interval,callback:function(e){t.interval=e},expression:"interval"}}),r("v-btn",{attrs:{color:"success"},on:{click:t.start}},[t._v("Start")])],1),r("v-layout",{staticClass:"start-zone",attrs:{"justify-center":"","align-center":"","fill-height":""}},[r("div",{staticClass:"display-6 word-zone"},[t._v(t._s(t.wordSpread))])])],1)},M=[],P={data:function(){return{interval:50,wordSpread:"",intervalRef:null}},computed:Object(V["a"])({},Object(O["d"])(["words"]),Object(O["c"])(["wordsCount"])),methods:{start:function(){var t=this;this.intervalRef=setInterval(function(){var e=Math.floor(Math.random()*t.wordsCount);t.wordSpread=t.words[e],console.log("word:",t.wordSpread,e)},100*this.interval)}}},D=P,L=(r("f320"),r("ba0d")),$=Object(u["a"])(D,I,M,!1,null,"16ce0408",null),z=$.exports;d()($,{VBtn:h["a"],VContainer:j["a"],VLayout:T["a"],VSlider:L["a"],VSpacer:w["a"],VToolbar:b["a"]});var F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-toolbar",{attrs:{absolute:""}},[r("span",[t._v("\n        "+t._s(t.idx)+" / "+t._s(t.wordsCount)+" words\n      ")]),r("v-spacer")],1),r("v-layout",{staticClass:"start-zone",attrs:{column:"","fill-height":""}},[r("v-layout",{attrs:{row:"","align-center":"","justify-center":""}},t._l(3,function(e){return r("div",{key:e,staticClass:"words display-2",class:{"active-word":1===e}},[t._v("\n          "+t._s(t.words[t.idx+e-1])+"\n        ")])}),0),r("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":""}},[r("v-text-field",{staticStyle:{"max-width":"400px"},attrs:{disabled:!t.words[t.idx],error:t.hasError,box:"",placeholder:"Type"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?null:t.validate(e)}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1)],1),r("v-card",{staticClass:"wpm-score mx-auto",attrs:{color:"grey lighten-4","max-width":"600"}},[r("v-card-title",[r("v-layout",{attrs:{column:"","align-start":""}},[r("div",{staticClass:"caption grey--text text-uppercase"},[t._v("\n            WPM\n          ")]),r("div",[r("span",{staticClass:"display-2 font-weight-black",domProps:{textContent:t._s(t.avg||"—")}}),t.avg?r("strong",[t._v("words per minute")]):t._e()])]),r("v-spacer"),r("v-btn",{staticClass:"align-self-start",attrs:{icon:"",size:"28"}},[r("v-icon",[t._v("mdi-arrow-right-thick")])],1)],1),r("v-sheet",{attrs:{color:"transparent"}},[r("v-sparkline",{key:String(t.avg),attrs:{smooth:5,gradient:["green","red"],"line-width":4,value:t.wpm,"stroke-linecap":"round"}})],1)],1)],1)},B=[],K=(r("5118"),{data:function(){return{idx:0,input:"",hasError:!1,avg:null,timerRef:null,start:null,end:null,wpm:[]}},computed:Object(V["a"])({},Object(O["d"])(["words"]),Object(O["c"])(["wordsCount"])),methods:{validate:function(t){if(t&&t.preventDefault(),this.words[this.idx].toLowerCase()===this.input.toLowerCase().trim()){this.idx++,this.input="";var e=new Date;this.wpm.push(e-this.start),this.avg=Math.round(this.wpm.reduce(function(t,e){return t+e},0)/this.wpm.length/60),this.start=null}else this.hasError=!0}},watch:{input:function(t){this.start||(this.start=new Date),this.hasError=!1}}}),U=K,q=(r("fc25"),r("b0af")),G=r("12b2"),H=r("8dd9"),J=r("7f2e"),Y=Object(u["a"])(U,F,B,!1,null,"fadc8750",null),N=Y.exports;d()(Y,{VBtn:h["a"],VCard:q["a"],VCardTitle:G["a"],VContainer:j["a"],VIcon:v["a"],VLayout:T["a"],VSheet:H["a"],VSpacer:w["a"],VSparkline:J["a"],VTextField:W["a"],VToolbar:b["a"]});var Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-toolbar",{attrs:{absolute:""}},[t.audio?r("v-btn",{attrs:{small:"",icon:""},on:{click:function(e){return t.audio.play()}}},[r("v-icon",[t._v("play_arrow")])],1):t._e(),r("v-spacer"),t.helper?r("div",{staticStyle:{"letter-spacing":"4px"}},t._l(t.helper,function(e,n){return r("span",{key:"help-"+n},[t._v("\n          "+t._s(e.shown?e.letter:"_")+"\n        ")])}),0):t._e(),r("v-btn",{attrs:{small:"",icon:""},on:{click:function(e){return t.giveHelp()}}},[r("v-icon",[t._v("help_outline")])],1)],1),r("v-layout",{staticClass:"start-zone",attrs:{row:"","fill-height":""}},[r("v-list",{attrs:{subheader:""}},[r("v-subheader",[t._v("Recent chat")]),t._l(t.doneWords,function(e,n){return r("v-list-tile",{key:"itm-"+n},[r("v-list-tile-content",[r("v-list-tile-title",[t._v(t._s(e.word))])],1),r("v-list-tile-action",[r("v-icon",{on:{click:function(t){return e.audio.play()}}},[t._v("play_arrow")])],1)],1)})],2),r("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":""}},[r("v-text-field",{staticStyle:{"max-width":"400px"},attrs:{error:t.hasError,box:"",placeholder:"Type"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?null:t.validate(e)}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1)],1)],1)},X=[],Z=r("75fc"),tt=(r("28a5"),r("96cf"),r("3b8d")),et=r("bc3a"),rt=r.n(et),nt={data:function(){return{input:"",todoWord:null,audio:null,hasError:!1,doneWords:[],helper:null}},computed:Object(V["a"])({},Object(O["d"])(["words","audios"]),Object(O["c"])(["wordsCount"])),mounted:function(){this.next()},methods:Object(V["a"])({},Object(O["b"])(["genAudio"]),{next:function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.todoWord=this.getRandomWord(),t.next=3,this.genAudio(this.todoWord);case 3:this.audio=t.sent,this.audio.play();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getRandomWord:function(){var t=Math.floor(Math.random()*this.wordsCount);return this.words[t]},validate:function(t){t&&t.preventDefault(),this.input.toLowerCase().trim()===this.todoWord?(this.input="",this.doneWords.unshift({word:this.todoWord,audio:this.audio}),this.doneWords.length>5&&this.doneWords.splice(-1,1),this.helper=null,this.next()):this.hasError=!0},giveHelp:function(){if(this.todoWord)if(this.helper){var t=this.helper.filter(function(t){return!t.shown});if(t.length>0){var e=Math.floor(Math.random()*t.length),r=Object(Z["a"])(this.helper);console.log(r,this.helper,e,t),r[t[e].index].shown=!0,this.helper=Object(Z["a"])(r)}}else this.helper=this.todoWord.split("").map(function(t,e){return{letter:t,index:e,shown:!1}})}}),watch:{input:function(t){this.hasError=!1}}},at=nt,ot=(r("ad35"),r("8860")),it=r("ba95"),st=r("40fe"),lt=r("5d23"),ut=r("e0c7"),ct=Object(u["a"])(at,Q,X,!1,null,"5c81dd80",null),dt=ct.exports;d()(ct,{VBtn:h["a"],VContainer:j["a"],VIcon:v["a"],VLayout:T["a"],VList:ot["a"],VListTile:it["a"],VListTileAction:st["a"],VListTileContent:lt["a"],VListTileTitle:lt["b"],VSpacer:w["a"],VSubheader:ut["a"],VTextField:W["a"],VToolbar:b["a"]}),n["a"].use(_["a"]);var pt=new _["a"]({routes:[{path:"/",name:"home",component:R},{path:"/train",name:"train",component:z},{path:"/type",name:"type",component:N},{path:"/type-audio",name:"type-audio",component:dt}]});n["a"].use(O["a"]);var ht=new O["a"].Store({state:{words:["rentre","tes","mots","ici","stp"],audios:{},exludes:[],dark:!1,gapikey:"AIzaSyAQFu0yqiley3UcggrtjXK9gIEhNiBpIIw"},mutations:{PERSIST_WORDS:function(t,e){var r=e.words,n=e.spliter,a=r.split(n).map(function(t){return t.toLowerCase().trim()}).filter(function(t){return!!t});t.words=a},SET_WORD_AUDIO:function(t,e){var r=e.word,n=e.audio;t.audios[r]=n},SET_API_KEY:function(t,e){t.gapikey=e}},getters:{wordsCount:function(t){return t.words.length}},actions:{getRandomWord:function(t){var e=t.state,r=Math.floor(Math.random()*this.wordsCount);return e.words[r]},genAudio:function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(e,r){var n,a,o,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,a=e.state,!a.audios[r]){t.next=3;break}return t.abrupt("return",a.audios[r]);case 3:return a.gapikey||alert("API Key required"),t.prev=4,t.next=7,rt.a.post("https://texttospeech.googleapis.com/v1/text:synthesize?key="+a.gapikey,{input:{text:r},voice:{languageCode:"fr-fr",name:"fr-FR-Standard-A",ssmlGender:"FEMALE"},audioConfig:{audioEncoding:"MP3"}});case 7:return o=t.sent,i=new Audio("data:audio/mp3;base64,"+o.data.audioContent),n("SET_WORD_AUDIO",{word:r,audio:i}),t.abrupt("return",i);case 13:t.prev=13,t.t0=t["catch"](4),alert("Failed to call api "+t.t0.message);case 16:case"end":return t.stop()}},t,null,[[4,13]])}));function e(e,r){return t.apply(this,arguments)}return e}()}});n["a"].config.productionTip=!1,new n["a"]({router:pt,store:ht,render:function(t){return t(y)}}).$mount("#app")},8623:function(t,e,r){},ad35:function(t,e,r){"use strict";var n=r("8623"),a=r.n(n);a.a},cbc4:function(t,e,r){},f320:function(t,e,r){"use strict";var n=r("cbc4"),a=r.n(n);a.a},fc25:function(t,e,r){"use strict";var n=r("11d3"),a=r.n(n);a.a}});
//# sourceMappingURL=app.650fc518.js.map