(this["webpackJsonpgpe-helper"]=this["webpackJsonpgpe-helper"]||[]).push([[0],{166:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var c,a,i=n(0),r=n.n(i),s=n(62),l=n.n(s),o=(n(166),n(18)),j=n(34),d=n(13),b=n(132),h=n(19),u=n(58),x=n(144),m=n(129),O=n.n(m),p=n(20),g=n(204),f=n(200),v=n(40),C=n(203),y=n(2);var A,k=Object(p.b)(c||(c=Object(h.a)(["\n  0% {\n    opacity:0;\n    transform:  translate(0px,10px);\n  }\n  100% {\n    opacity:1;\n    transform:  translate(0px,0px);\n  }\n"]))),E=Object(p.a)((function(e){var t=e.className,n=Object(i.useState)({stargazers_count:0,forks_count:0}),c=Object(o.a)(n,2),a=c[0],r=c[1],s=function(){var e=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.github.com/users/setsal/repos?per_page=100&sort=updated&page=0").then((function(e){return e.json()})).then((function(e){if(!(e instanceof Array))return[];var t=e.find((function(e){return"GPE-Helper"===e.name}));if(t){if("number"!==typeof t.stargazers_count||"number"!==typeof t.forks_count)return[];r(Object(u.a)(Object(u.a)({},a),{},{stargazers_count:t.stargazers_count,forks_count:t.forks_count}))}return[]}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){s()}),[]),Object(y.jsx)("div",{className:t,children:Object(y.jsx)(g.a,{fixed:"top",inverted:!0,size:"large",children:Object(y.jsxs)(f.a,{children:[Object(y.jsxs)(g.a.Item,{as:j.b,header:!0,to:"/",children:[Object(y.jsx)(v.a,{name:"ambulance",style:{marginRight:"1.5em"}}),"GPE Helper"]}),Object(y.jsx)(g.a.Menu,{position:"right",children:Object(y.jsx)(C.a,{item:!0,simple:!0,text:"\u529f\u80fd\u9078\u55ae",children:Object(y.jsxs)(C.a.Menu,{children:[Object(y.jsx)(C.a.Item,{as:j.b,to:"/problems",children:"\u984c\u76ee\u4e00\u89bd"}),Object(y.jsx)(C.a.Item,{as:j.b,to:"/exams",children:"\u8003\u8a66\u4e00\u89bd"}),Object(y.jsx)(C.a.Divider,{}),Object(y.jsx)(C.a.Header,{children:"\u95dc\u65bc\u5c08\u6848 & \u7aa9"}),Object(y.jsx)(C.a.Item,{as:"a",href:"https://github.com/setsal/GPE-Helper",target:"_blank",children:"Github Repo"}),Object(y.jsx)(C.a.Item,{as:"a",href:"https://blog.setsal.dev/gpe-helper/",target:"_blank",children:"\u958b\u767c\u6b77\u7a0b"}),Object(y.jsxs)(C.a.Item,{children:[Object(y.jsx)(v.a,{name:"dropdown"}),Object(y.jsx)("span",{className:"text",children:"Also Try"}),Object(y.jsx)(C.a.Menu,{children:Object(y.jsx)(C.a.Item,{as:"a",href:"https://fake-phone-screen.netlify.app/",target:"_blank",children:"fake-phone-screen"})})]})]})})}),Object(y.jsxs)(g.a.Item,{as:"a",href:"https://github.com/setsal/GPE-Helper",className:"navbar-item github-source",style:{lineHeight:"1.5"},target:"_blank",children:[Object(y.jsx)("div",{className:"github-source-icon",children:Object(y.jsx)(v.a,{name:"github alternate"})}),Object(y.jsxs)("div",{className:"github-source-repository",children:["setsal/GPE-Helper",Object(y.jsxs)("ul",{className:"github-facts",children:[Object(y.jsxs)("li",{className:"github-stars",children:[a.stargazers_count," ","Stars"]}),Object(y.jsxs)("li",{className:"github-forks",style:{marginLeft:"3px"},children:["\u2022"," ",a.forks_count," ","Forks"]})]})]})]})]})})})}))(a||(a=Object(h.a)(["\n.github-source {\n  .github-source-icon {\n        padding: 5px;\n  }\n  .github-source-repository {\n      padding-left: 5px;\n      font-size: 10px;\n      font-weight: 1000;\n      ul {\n        list-style: none;\n        animation: "," linear .3s;\n        animation-iteration-count: 1;\n        margin: 0;\n        padding: 0;\n        li {\n          float: left;\n          font-weight: 200;\n        }\n      }\n  } \n}\n"])),k),w=n(211),S=n(201),N=n(151),H=n(205);var R,_=Object(p.a)((function(e){var t=e.className,n=e.onClick;return Object(y.jsx)("div",{role:"button",onClick:n,onKeyDown:n,className:t,tabIndex:0,children:"Top"})}))(A||(A=Object(h.a)(["\n  background-color: rgba(0, 0, 0, 0.2);\n  width: 50px;\n  height: 50px;\n  position: fixed;\n  right: 15px;\n  bottom: 15px;\n  border-radius: 50%;\n  color: white;\n  line-height: 47px;\n  text-align: center;\n  transition: opacity 0.5s;\n  opacity: ",";\n  cursor: ",";\n"])),(function(e){return e.show?1:0}),(function(e){return e.show?"pointer":"default"}));var I,z=Object(p.a)((function(e){var t=e.className,n=Object(i.useState)(!0),c=Object(o.a)(n,2),a=c[0],r=c[1];Object(i.useEffect)((function(){var e=function(){r(window.pageYOffset<150)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]);var s=Object(i.useCallback)((function(){window.scroll({top:0,behavior:"smooth"})}));return Object(y.jsxs)("div",{className:t,children:[Object(y.jsx)(w.a,{inverted:!0,vertical:!0,style:{margin:"5em 0em 0em",padding:"5em 0em"},children:Object(y.jsxs)(f.a,{textAlign:"center",children:[Object(y.jsx)(S.a,{inverted:!0,section:!0}),Object(y.jsx)(N.a,{centered:!0,size:"mini",src:"/logo192.png"}),Object(y.jsxs)(H.a,{horizontal:!0,inverted:!0,divided:!0,link:!0,size:"small",children:[Object(y.jsx)(H.a.Item,{as:"a",href:"https://github.com/setsal/GPE-Helper",target:"_blank",children:"Github Repo"}),Object(y.jsx)(H.a.Item,{as:"a",href:"https://github.com/setsal/GPE-Helper/blob/master/LICENSE",target:"_blank",children:"LICENSE"})]})]})}),Object(y.jsx)(_,{onClick:s,show:!a})]})}))(R||(R=Object(h.a)(["\n"]))),G=n(212),T=n(192),P=n(213);var D,L=Object(p.a)((function(e){var t=e.className,n=Object(i.useCallback)((function(){window.scroll({top:600,behavior:"smooth"})}));return Object(y.jsxs)("div",{className:t,children:[Object(y.jsx)(w.a,{inverted:!0,textAlign:"center",className:"home-background",vertical:!0,children:Object(y.jsxs)(f.a,{text:!0,children:[Object(y.jsxs)(G.a,{as:"h1",inverted:!0,icon:!0,className:"h1-content",textAlign:"center",children:[Object(y.jsx)(v.a,{name:"ambulance"}),Object(y.jsx)(G.a.Content,{children:"GPE Helper"}),Object(y.jsx)(G.a.Subheader,{children:"\u62ef\u6551\u4f60\u6211\u7684\u7a0b\u5f0f\u6aa2\u5b9a\u8003\u8a66"})]}),Object(y.jsxs)(T.a,{primary:!0,size:"huge",onClick:n,style:{marginTop:"20px",marginBottom:"15px"},children:["Get Started",Object(y.jsx)(v.a,{name:"right arrow"})]})]})}),Object(y.jsx)(w.a,{style:{padding:"5em 0em"},vertical:!0,children:Object(y.jsx)(P.a,{container:!0,stackable:!0,verticalAlign:"middle",children:Object(y.jsx)(P.a.Row,{children:Object(y.jsxs)(P.a.Column,{width:16,children:[Object(y.jsxs)(G.a,{as:"h3",style:{fontSize:"2em"},children:[Object(y.jsx)(N.a,{src:"/afraid.gif",style:{width:"100px"}}),"\u4f5c\u8005\u7684\u5ee2\u8a71"]}),Object(y.jsxs)("div",{style:{fontSize:"1.33em"},children:[Object(y.jsx)("p",{children:"\u4e0d\u597d\u597d\u5beb\u6263\u548c\u7df4 GPE \u5728\u9019\u908a\u5beb\u5947\u602a\u7684\u6771\u897f\u554a= ="}),Object(y.jsx)("p",{children:"\u7e3d\u4e4b\u662f\u500b\u5c0f\u5c08\u6848\uff0c\u7d71\u8a08\u4e00\u4e0b\u8fd1\u4f86\u5b78\u6821\u8209\u8fa6\u7684\u7a0b\u5f0f\u6aa2\u5b9a\u8003\u984c\u578b\u548c\u76f8\u95dc\u51fa\u984c\u983b\u7387"}),Object(y.jsx)("p",{children:"\u8cc7\u6599\u4f86\u6e90\u7686\u4f86\u81ea\u65bc\u5b78\u6821\u7684 gpe3.acm-icpc.tw\uff0c\u984c\u76ee\u5206\u985e\u4f86\u81ea\u65bc zero judge\uff0c\u7136\u5f8c\u4fdd\u4f51\u6211 GPE \u80fd\u904e.. (\u8036 \u904e\u60f9\ud83e\udd73)"}),Object(y.jsx)("p",{children:"\u5982\u679c\u89ba\u5f97\u9019\u5c08\u6848\u5f88\u6709\u8da3\u6216\u6709\u5c0f\u5c0f\u5e6b\u52a9\u5230\u4f60\uff0c\u6b61\u8fce\u7d66\u6211\u500b\u2b50\u652f\u6301"})]})]})})})}),Object(y.jsx)(f.a,{text:!0,style:{marginTop:"5em"},children:Object(y.jsx)(w.a,{style:{padding:"3em 0em"},vertical:!0,children:Object(y.jsxs)(f.a,{text:!0,children:[Object(y.jsxs)(G.a,{as:"h3",style:{fontSize:"2em"},children:[Object(y.jsx)(v.a,{name:"rocket"}),"\u984c\u76ee\u4e00\u89bd"]}),Object(y.jsxs)("p",{style:{fontSize:"1.33em"},children:["\u6574\u7406 2019 \u5e74\uff5e\u4eca\u4e4b\u6b77\u53f2\u984c\u76ee\uff0c\u65b9\u4fbf\u7df4\u7fd2\u91cd\u9ede\u984c\u76ee",Object(y.jsx)("br",{}),"\u9664\u4e86\u5404\u7a2e\u6392\u5e8f\u529f\u80fd\uff0c\u4e5f\u6709\u6211\u7684\u6700\u611b\u529f\u80fd\u65b9\u4fbf\u4f60\u7df4\u7fd2\ud83d\ude09",Object(y.jsx)("br",{}),"\u8003\u53e4\u984c\u7df4\u8d77\u4f86\uff5e"]}),Object(y.jsx)(T.a,{as:j.b,size:"large",to:"/problems",children:"Read More"}),Object(y.jsx)(S.a,{as:"h4",className:"header",style:{margin:"3em 0em",textTransform:"uppercase"}}),Object(y.jsxs)(G.a,{as:"h3",style:{fontSize:"2em"},children:[Object(y.jsx)(v.a,{name:"flag checkered"}),"\u8003\u8a66\u4e00\u89bd"]}),Object(y.jsxs)("p",{style:{fontSize:"1.33em"},children:["\u5217\u51fa 2017 ~ \u4eca\u6bcf\u6b21\u5b78\u6821\u8209\u8fa6 GPE \u6aa2\u5b9a\u8003\u8a66\u4e4b\u984c\u76ee",Object(y.jsx)("br",{}),"\u63d0\u4f9b\u76f8\u95dc onsite \u6b21\u6578\uff0cAC \u7387\u6392\u5e8f\u7b49\u529f\u80fd"]}),Object(y.jsx)(T.a,{as:j.b,size:"large",to:"/exams",children:"Read More"})]})})})]})}))(I||(I=Object(h.a)(["\n  @media only screen and (min-width: 0px) {\n    .home-background {\n      min-height: 350px;\n      padding: 1em 0em;\n      font-weight: 'normal';\n    }\n\n    .ui.header.h1-content {\n      font-size: 2em;\n      margin-top: 3em;\n      margin-bottom: 0;    \n    }  \n  }\n\n  @media only screen and (min-width: 1024px) {\n    .home-background {\n      min-height: 600px;\n      padding: 1em 0em;\n    }\n    .ui.header.h1-content {\n      font-size: 4em;\n      margin-top: 2em;    \n    }   \n  }\n"])));var F=p.a.div(D||(D=Object(h.a)(["\n  margin-top: 200px;\n  height: 100%;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  .text {\n    font-weight: 700;\n    font-size: 80px;\n  }\n  .back {\n    line-height: 50px;\n    color: black;\n  }\n"]))),B=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(F,{children:Object(y.jsxs)(f.a,{style:{marginTop:"6em"},textAlign:"center",children:[Object(y.jsx)(G.a,{as:"h2",className:"text",style:{fontSize:"80px"},children:"404 Not Found"}),Object(y.jsx)(j.b,{to:{pathname:"/"},children:Object(y.jsx)("div",{className:"back",children:"\ud83c\udfc3 Home Page"})})]})})})},M=n(209),J=n(208),V=n(207),q=n(91),K=n(116),U=n.n(K),Y=n(206),Q=n(149);n(188);var W,X,Z=function(e){var t=e.modalData,n=e.handleStatusCallback,c=Object(i.useState)({content:""}),a=Object(o.a)(c,2),r=a[0],s=a[1];return Object(i.useEffect)((function(){fetch("/question_snapshots/contents/".concat(t.id,".json")).then((function(e){e.json().then((function(e){s({content:e.content})}))}))}),[]),Object(y.jsx)(Y.a,{closeIcon:!0,onClose:function(){return n(!1)},onOpen:function(){return n(!0)},open:t.visible,trigger:Object(y.jsx)(T.a,{children:"Show Modal"}),children:Object(y.jsx)(Y.a.Content,{children:Object(y.jsx)(f.a,{textAlign:"left",children:Object(Q.a)(r.content)})})})},$=function(e,t){if("CHANGE_SORT"===t.type)return e.column===t.column?{column:t.column,data:e.data.slice().reverse(),direction:"ascending"===e.direction?"descending":"ascending"}:{column:t.column,data:U.a.sortBy(e.data,[t.column]).reverse(),direction:"descending"};throw new Error},ee=Object(p.a)((function(e){var t=e.className,n=e.problems,c=Object(i.useState)({visible:!1,id:null}),a=Object(o.a)(c,2),r=a[0],s=a[1],l=Object(i.useReducer)($,{column:null,data:n,direction:null}),j=Object(o.a)(l,2),d=j[0],b=j[1];return Object(y.jsxs)("div",{className:t,children:[Object(y.jsxs)(V.a,{sortable:!0,celled:!0,padded:!0,children:[Object(y.jsx)(V.a.Header,{children:Object(y.jsxs)(V.a.Row,{children:[Object(y.jsx)(V.a.HeaderCell,{singleLine:!0,children:"Problem"}),Object(y.jsx)(V.a.HeaderCell,{sorted:"AcceptRate"===d.column?d.direction:null,onClick:function(){return b({type:"CHANGE_SORT",column:"AcceptRate"})},textAlign:"right",children:Object(y.jsxs)(G.a,{as:"h5",children:["AcceptRate",Object(y.jsx)(G.a.Subheader,{children:"ACs/Subs"})]})}),Object(y.jsx)(V.a.HeaderCell,{sorted:"onsite"===d.column?d.direction:null,onClick:function(){return b({type:"CHANGE_SORT",column:"onsite"})},textAlign:"right",children:"OnSite"}),Object(y.jsx)(V.a.HeaderCell,{sorted:"access"===d.column?d.direction:null,onClick:function(){return b({type:"CHANGE_SORT",column:"access"})},textAlign:"right",children:"Access"})]})}),Object(y.jsx)(V.a.Body,{children:d.data.map((function(e){return Object(y.jsxs)(V.a.Row,{children:[Object(y.jsxs)(V.a.Cell,{singleLine:!0,children:[Object(y.jsxs)("i",{"aria-hidden":!0,className:"problem-name",style:{display:"inline",color:"#0000EE"},onClick:function(){s({visible:!0,id:e.pid})},children:[e.name,"\xa0\xa0"]}),Object(y.jsx)("div",{className:"category",children:e.category.map((function(e){return Object(y.jsxs)(q.a,{circular:!0,size:"small",children:[e," "]},e)}))})]}),Object(y.jsx)(V.a.Cell,{textAlign:"right",children:Object(y.jsxs)(G.a,{as:"h5",children:[e.AcceptRate,"%",Object(y.jsxs)(G.a.Subheader,{children:[e.ACs,"/",e.subs]})]})}),Object(y.jsx)(V.a.Cell,{textAlign:"right",children:e.onsite}),Object(y.jsx)(V.a.Cell,{textAlign:"right",children:e.access})]},e.pid)}))})]}),r.visible?Object(y.jsx)(Z,{modalData:r,handleStatusCallback:function(e){s({visible:e,id:null})}}):null]})}))(W||(W=Object(h.a)(["\n.problem-name {\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.category {\n  display: inline;\n}\n"])));var te,ne=Object(p.a)((function(e){var t=e.className,n=e.ExamData,c=Object(i.useState)(0),a=Object(o.a)(c,2),r=a[0],s=a[1];function l(e,t){var n=t.index;s(r===n?-1:n)}return Object(y.jsx)("div",{className:t,children:Object(y.jsxs)(f.a,{style:{marginTop:"7em"},children:[Object(y.jsxs)(M.a,{children:[Object(y.jsx)(M.a.Header,{children:"\u60f3\u8981\u6392\u5e8f\uff1f"}),Object(y.jsxs)(M.a.List,{children:[Object(y.jsx)(M.a.Item,{children:"\u9ede\u64ca\u6b04\u4f4d\u540d\u7a31\u5c31\u53ef\u4ee5\u4e86\uff5e"}),Object(y.jsx)(M.a.Item,{children:"\u76ee\u524d\u63d0\u4f9b AC \u7387\u3001OnSite \u6b21\u6578\u3001\u984c\u76ee Access \u6b21\u6578\u6392\u5e8f"})]})]}),Object(y.jsxs)(G.a,{as:"h1",children:[Object(y.jsx)(v.a,{name:"flag checkered"}),"\u8003\u8a66\u4e00\u89bd"]}),Object(y.jsx)(S.a,{}),Object(y.jsx)(J.a,{children:n&&Object.keys(n).sort((function(e,t){return t-e})).map((function(e,t){return Object(y.jsxs)("div",{children:[Object(y.jsxs)(J.a.Title,{active:r===t,index:t,onClick:l,children:[Object(y.jsx)(v.a,{name:"dropdown"}),n[e].examTime,":",n[e].examName]}),Object(y.jsx)(J.a.Content,{active:r===t,style:{padding:"1rem 2rem"},children:Object(y.jsx)(ee,{problems:n[e].problems})})]},e)}))})]})})}))(X||(X=Object(h.a)(["\n"]))),ce=n(202),ae=n(214),ie=function(e,t){switch(t.type){case"CHANGE_SORT":return e.column===t.column?{column:t.column,data:e.data.slice().reverse(),direction:"ascending"===e.direction?"descending":"ascending"}:{column:t.column,data:U.a.sortBy(e.data,[t.column]).reverse(),direction:"descending"};case"CHANGE_FILTER":return{data:t.data};case"ADD_FAVORITE":return Object(u.a)(Object(u.a)({},e),{},{data:e.data.map((function(e,n){return n===t.index?Object(u.a)(Object(u.a)({},e),{},{favorite:e.favorite?0:1}):e}))});default:throw new Error}};var re=Object(p.a)((function(e){var t=e.className,n=e.ProblemData,c=Object(i.useReducer)(ie,{column:null,data:n,direction:null,filter:void 0}),a=Object(o.a)(c,2),r=a[0],s=a[1],l=Object(i.useCallback)((function(e){r.filter=e.target.value,s({type:"CHANGE_FILTER",data:n.filter((function(e){return e.name.includes(r.filter)}))})})),j=Object(i.useState)({visible:!1,id:null}),d=Object(o.a)(j,2),b=d[0],h=d[1];return Object(y.jsxs)("div",{className:t,children:[Object(y.jsxs)(f.a,{style:{marginTop:"6em"},children:[Object(y.jsxs)(M.a,{children:[Object(y.jsx)(M.a.Header,{children:"\u60f3\u8981\u6392\u5e8f?"}),Object(y.jsxs)(M.a.List,{children:[Object(y.jsx)(M.a.Item,{children:"\u9ede\u64ca\u6b04\u4f4d\u540d\u7a31\u5c31\u53ef\u4ee5\u4e86\uff5e"}),Object(y.jsx)(M.a.Item,{children:"\u76ee\u524d\u63d0\u4f9b ProblemID\u3001AC \u7387\u3001OnSite \u6b21\u6578\u3001\u984c\u76ee Access \u6b21\u6578\u30012019~\u73fe\u5728\u6b63\u5f0f\u8003\u8a66\u51fa\u73fe\u6b21\u6578\u3001\u6700\u5f8c\u51fa\u73fe\u6642\u9593\u6392\u5e8f"}),Object(y.jsx)(M.a.Item,{children:"\u53e6\u5916\u63d0\u4f9b\u4e82\u7d71\u8a08\u7684\u4e0d\u8ca0\u8cac\u4efb\u984c\u76ee\u7df4\u7fd2\u63a8\u85a6\u5ea60 - 0"}),Object(y.jsx)(M.a.Item,{children:"P.S. \u7d14\u524d\u7aef\u7db2\u7ad9\uff0c\u6211\u7684\u6700\u611b\u529f\u80fd\u900f\u904e\u700f\u89bd\u5668\u5132\u5b58\u5be6\u73fe\uff0c\u5982\u679c\u4f60\u6e05\u6389\u8cc7\u6599\u6216\u63db\u53f0\u96fb\u8166\uff0c\u6211\u7684\u6700\u611b\u5c31\u6703\u6d88\u5931\u56c9\ud83d\ude0c"})]})]}),Object(y.jsxs)("div",{style:{padding:"10px 0 35px 0"},children:[Object(y.jsxs)(G.a,{as:"h1",style:{float:"left"},children:[Object(y.jsx)(v.a,{name:"rocket"}),"\u984c\u76ee\u4e00\u89bd"]}),Object(y.jsx)(ce.a,{placeholder:"Enter Problem Name",name:"filter",onChange:l,icon:"search",style:{float:"right"}})]}),Object(y.jsx)(S.a,{}),Object(y.jsxs)(V.a,{sortable:!0,celled:!0,padded:!0,children:[Object(y.jsx)(V.a.Header,{children:Object(y.jsxs)(V.a.Row,{children:[Object(y.jsx)(V.a.HeaderCell,{sorted:"pid"===r.column?r.direction:null,onClick:function(){return s({type:"CHANGE_SORT",column:"pid"})},singleLine:!0,children:"Problem"}),Object(y.jsx)(V.a.HeaderCell,{sorted:"rating"===r.column?r.direction:null,onClick:function(){return s({type:"CHANGE_SORT",column:"rating"})},textAlign:"center",children:"\u63a8\u85a6\u5ea6"}),Object(y.jsx)(V.a.HeaderCell,{sorted:"AcceptRate"===r.column?r.direction:null,onClick:function(){return s({type:"CHANGE_SORT",column:"AcceptRate"})},textAlign:"right",children:Object(y.jsxs)(G.a,{as:"h5",children:["AcceptRate",Object(y.jsx)(G.a.Subheader,{children:"ACs/Subs"})]})}),Object(y.jsx)(V.a.HeaderCell,{sorted:"onsite"===r.column?r.direction:null,onClick:function(){return s({type:"CHANGE_SORT",column:"onsite"})},textAlign:"right",children:"OnSite"}),Object(y.jsx)(V.a.HeaderCell,{sorted:"access"===r.column?r.direction:null,onClick:function(){return s({type:"CHANGE_SORT",column:"access"})},textAlign:"right",children:"Access"}),Object(y.jsx)(V.a.HeaderCell,{width:1,sorted:"Appearance"===r.column?r.direction:null,onClick:function(){return s({type:"CHANGE_SORT",column:"Appearance"})},textAlign:"right",children:"Appearance"}),Object(y.jsx)(V.a.HeaderCell,{width:2,sorted:"LastAppearance"===r.column?r.direction:null,onClick:function(){return s({type:"CHANGE_SORT",column:"LastAppearance"})},textAlign:"right",children:"LastAppearance"}),Object(y.jsx)(V.a.HeaderCell,{width:1,sorted:"favorite"===r.column?r.direction:null,onClick:function(){return s({type:"CHANGE_SORT",column:"favorite"})},children:"Favorite"})]})}),Object(y.jsx)(V.a.Body,{children:r.data&&r.data.map((function(e,t){return Object(y.jsxs)(V.a.Row,{children:[Object(y.jsxs)(V.a.Cell,{singleLine:!0,children:[Object(y.jsxs)("i",{"aria-hidden":!0,className:"problem-name",style:{display:"inline",color:"#0000EE"},onClick:function(){h({visible:!0,id:e.pid})},children:[e.name,"\xa0\xa0"]}),Object(y.jsx)("div",{className:"category",children:e.category.map((function(e){return Object(y.jsxs)(q.a,{circular:!0,size:"small",children:[e," "]},e)}))})]}),Object(y.jsx)(V.a.Cell,{textAlign:"center",children:Object(y.jsx)(ae.a,{rating:e.rating,maxRating:3})}),Object(y.jsx)(V.a.Cell,{textAlign:"right",children:Object(y.jsxs)(G.a,{as:"h5",children:[e.AcceptRate,"%",Object(y.jsxs)(G.a.Subheader,{children:[e.ACs,"/",e.subs]})]})}),Object(y.jsx)(V.a.Cell,{textAlign:"right",children:e.onsite}),Object(y.jsx)(V.a.Cell,{textAlign:"right",children:e.access}),Object(y.jsx)(V.a.Cell,{textAlign:"right",children:e.Appearance}),Object(y.jsx)(V.a.Cell,{textAlign:"right",children:e.LastAppearance}),Object(y.jsx)(V.a.Cell,{textAlign:"center",children:Object(y.jsx)(T.a,{onClick:function(){!function(e){var t,n=JSON.parse(localStorage.getItem("gpe-favorite"));(t=n||[]).includes(e)?t=t.filter((function(t){return t!==e})):t.push(e),localStorage.setItem("gpe-favorite",JSON.stringify(t))}(e.pid),s({type:"ADD_FAVORITE",index:t})},color:e.favorite?"google plus":"twitter",icon:e.favorite?"heart":"heart outline"})})]},e.pid)}))})]})]}),b.visible?Object(y.jsx)(Z,{modalData:b,handleStatusCallback:function(e){h({visible:e,id:null})}}):null]})}))(te||(te=Object(h.a)(["\n.problem-name {\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.category {\n  display: inline;\n}\n"])));n(189),n(190);var se=function(){var e=Object(i.useState)({ExamData:null,ProblemData:null}),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){Promise.all([fetch("/exams.json"),fetch("/problems.json")]).then((function(e){var t=Object(o.a)(e,2),n=t[0],c=t[1];return Promise.all([n.json(),c.json()])})).then((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1],i=JSON.parse(localStorage.getItem("gpe-favorite"));i&&i.forEach((function(e){var t=a.find((function(t){return t.pid===e}));t&&(t.favorite=1)})),c({ExamData:n,ProblemData:a})})).catch((function(e){console.log(e),console.log("Fetch Data Error!")}))}),[]),Object(i.useEffect)((function(){b.a.initialize("UA-143810313-2"),b.a.pageview(window.location.pathname+window.location.search)})),Object(y.jsx)(j.a,{children:Object(y.jsxs)("div",{id:"myContainer",children:[Object(y.jsx)(E,{}),Object(y.jsx)("div",{id:"main-content",children:Object(y.jsxs)(d.c,{children:[Object(y.jsx)(d.a,{exact:!0,path:"/",component:L}),Object(y.jsx)(d.a,{path:"/exams",component:function(){return Object(y.jsx)(ne,{ExamData:n.ExamData})}}),Object(y.jsx)(d.a,{exact:!0,path:"/problems",component:function(){return Object(y.jsx)(re,{ProblemData:n.ProblemData})}}),Object(y.jsx)(d.a,{path:"/problems/:id",component:function(){return Object(y.jsx)(Z,{})}}),Object(y.jsx)(d.a,{path:"*",component:B})]})}),Object(y.jsx)(z,{})]})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,216)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};l.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(se,{})}),document.getElementById("root")),le()}},[[191,1,2]]]);
//# sourceMappingURL=main.abc46209.chunk.js.map