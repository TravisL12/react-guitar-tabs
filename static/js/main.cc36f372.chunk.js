(this["webpackJsonpreact-guitar-tabs"]=this["webpackJsonpreact-guitar-tabs"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),i=(a(10),a(11),a(1)),o=(a(12),a(13),a(4)),s=function(e){return{highE:e&&"-",b:e&&"-",g:e&&"-",d:e&&"-",a:e&&"-",lowE:e&&"-"}},u=function e(){var t=this;Object(o.a)(this,e),this.concatString=function(e){return[t.notes[e],t.pulloffs[e],t.hammerons[e],t.slides[e],t.bends[e]].join("")},this.print=function(){return{highE:t.concatString("highE"),b:t.concatString("b"),g:t.concatString("g"),d:t.concatString("d"),a:t.concatString("a"),lowE:t.concatString("lowE")}},this.notes=s(!0),this.pulloffs=s(),this.hammerons=s(),this.slides=s(),this.bends=s(),this.display=this.print()};function m(e){var t=e.value,a=Object(n.useState)(!1),l=Object(i.a)(a,2),c=l[0],o=l[1],s=Object(n.useState)(t),u=Object(i.a)(s,2),m=u[0],E=u[1];return r.a.createElement("li",{className:"noteInput"},c?r.a.createElement("input",{onChange:function(e){return E(e.target.value)},onBlur:function(){return o(!1)},type:"text",value:"-"===m?"":m,maxLength:"2",autoFocus:!0}):r.a.createElement("span",{onClick:function(){return o(!0)}},m))}function E(e){var t=e.isStaff,a=e.isEnd,l=e.notes,c=Object(n.useState)(l),o=Object(i.a)(c,2),s=o[0];o[1];return r.a.createElement("div",{className:"Chord"},t||a?r.a.createElement("ul",null,r.a.createElement("li",null,t&&"e","|"),r.a.createElement("li",null,t&&"B","|"),r.a.createElement("li",null,t&&"G","|"),r.a.createElement("li",null,t&&"D","|"),r.a.createElement("li",null,t&&"A","|"),r.a.createElement("li",null,t&&"E","|")):r.a.createElement("ul",null,r.a.createElement(m,{value:s.display.highE}),r.a.createElement(m,{value:s.display.b}),r.a.createElement(m,{value:s.display.g}),r.a.createElement(m,{value:s.display.d}),r.a.createElement(m,{value:s.display.a}),r.a.createElement(m,{value:s.display.lowE})))}E.defaultProps={isStaff:!1,isEnd:!1,notes:new u};var h=E,d=80;var f=function(e){var t=e.chordCount,a=Object(n.useState)(t||d),l=Object(i.a)(a,2),c=l[0],o=(l[1],Array.from({length:c},(function(e,t){return r.a.createElement(h,{key:t+1})})));return r.a.createElement("div",{className:"Measure"},r.a.createElement(h,{isStaff:!0}),o,r.a.createElement(h,{isEnd:!0}))};var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"AppContainer"},r.a.createElement("header",null,"Guitar Tabs Yo!"),r.a.createElement("div",{className:"body"},r.a.createElement(f,null),r.a.createElement(f,{chordCount:50}),r.a.createElement(f,{chordCount:25}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.cc36f372.chunk.js.map