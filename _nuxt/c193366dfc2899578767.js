(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{184:function(t,e,n){var content=n(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("63dbcacc",content,!0,{sourceMap:!1})},196:function(t,e,n){"use strict";var o=n(184);n.n(o).a},197:function(t,e,n){(e=n(47)(!1)).push([t.i,".container[data-v-3c621dfe]{margin:0 auto;min-height:100vh;align-items:center;text-align:center}.columnContainer[data-v-3c621dfe],.container[data-v-3c621dfe]{display:flex;justify-content:center}.columnContainer[data-v-3c621dfe]{flex-direction:column;text-align:left}.title[data-v-3c621dfe]{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;font-size:50px;color:#35495e;letter-spacing:1px}@media screen and (min-width:769px){.subtitle[data-v-3c621dfe]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}}@media screen and (max-width:768px){.subtitle[data-v-3c621dfe]{font-weight:300;font-size:21px;color:#526488;word-spacing:5px;padding-bottom:15px}}@media screen and (min-width:769px){.answerform[data-v-3c621dfe]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px;outline-width:1px;outline-color:#526488;outline-style:auto}}@media screen and (max-width:768px){.answerform[data-v-3c621dfe]{font-weight:300;font-size:21px;color:#526488;word-spacing:5px;padding-bottom:15px;outline-width:1px;outline-color:#526488;outline-style:auto}}@media screen and (min-width:769px){.myButton[data-v-3c621dfe]{font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px;border-color:green;border-radius:10px;margin:0}}@media screen and (max-width:768px){.myButton[data-v-3c621dfe]{font-size:21px;color:#526488;word-spacing:5px;padding-bottom:15px;border-color:green;border-radius:10px;margin:0}}.links[data-v-3c621dfe]{padding-top:15px}",""]),t.exports=e},206:function(t,e,n){"use strict";n.r(e);var o=n(113),r=[{question:"光の速さｃ(m/s)\bはいくらか？（有効数字2桁)",answer:"3.0*10^8(m/s)"},{question:"ボルツマン定数ｋ(J/K)\bはいくらか？（有効数字2桁)",answer:"1.4*10^-23(m/s)"},{question:"プランク定数h(Js)\bはいくらか？（有効数字2桁)",answer:"6.6*10^-34(Js)"}],c={list:r.slice()},l=Object(o.b)({setup:function(t,e){var n=Object(o.c)(""),l=Object(o.c)(""),d=Object(o.c)(""),f=Object(o.c)(!1),m=Object(o.c)(!0),w=null,x=function t(){if(null==(w=c.list.pop()))return c.list=r.slice(),void t();f.value=!1,d.value="",m.value=!0,n.value=w.question,l.value=w.answer};return x(),{userAnswer:d,question:n,answer:l,answerDisplay:f,answerButtonDisplay:m,nextButtonClicked:function(){x()},answerButtonClicked:function(){f.value=!0,m.value=!1}}}}),d=(n(196),n(17)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"columnContainer"},[n("p",{staticClass:"subtitle"},[t._v(t._s(t.question))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userAnswer,expression:"userAnswer"}],staticClass:"answerform",attrs:{type:"text",placeholder:"回答する"},domProps:{value:t.userAnswer},on:{input:function(e){e.target.composing||(t.userAnswer=e.target.value)}}}),t._v(" "),t.answerButtonDisplay?n("button",{staticClass:"myButton",on:{click:t.answerButtonClicked}},[t._v("\n        答えを見る\n      ")]):t._e(),t._v(" "),t.answerDisplay?n("p",{staticClass:"subtitle"},[t._v("答え "+t._s(t.answer))]):t._e(),t._v(" "),t.answerDisplay?n("button",{staticClass:"myButton",on:{click:t.nextButtonClicked}},[t._v("\n        次の問題\n      ")]):t._e()])])])}),[],!1,null,"3c621dfe",null);e.default=component.exports}}]);