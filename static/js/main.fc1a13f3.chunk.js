(this["webpackJsonpturtledot-x"]=this["webpackJsonpturtledot-x"]||[]).push([[0],{15:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),s=n(23),o=n.n(s),r=n(12),l=n(3),d=n.p+"static/media/turtledot.9f70b9aa.svg";n(31);function j(){return Object(c.jsx)("header",{children:Object(c.jsx)("img",{src:d,className:"logo",alt:"logo"})})}n(32);var u=n(47),b=n(48);function m(){return Object(c.jsxs)("nav",{children:[Object(c.jsxs)(r.b,{to:"/Items",className:"menu-item",activeClassName:"here",children:[Object(c.jsx)("div",{className:"menu-icon",children:Object(c.jsx)(u.a,{size:16})}),Object(c.jsx)("div",{className:"menu-text",children:"Items"})]}),Object(c.jsxs)(r.b,{to:"/Arrange",className:"menu-item",activeClassName:"here",children:[Object(c.jsx)("div",{className:"menu-icon",children:Object(c.jsx)("span",{className:"menu-icon-doit"})}),Object(c.jsx)("div",{className:"menu-text",children:"Arrange"})]}),Object(c.jsxs)(r.b,{to:"/Archive",className:"menu-item",activeClassName:"here",children:[Object(c.jsx)("div",{className:"menu-icon",children:Object(c.jsx)(b.a,{size:16})}),Object(c.jsx)("div",{className:"menu-text",children:"Archive"})]})]})}var h=n(10),O=n(4),x=n(5);function g(e){return e.text.length>0&&e.text.length<12&&e.number>0&&(!!(e.type&&e.number<8)||(!e.type&&e.number<100001||void 0))}var f=n(21),v=n.n(f),p=n(25);function k(e){return e>99999?"100k":e>9999?e.toString().slice(0,2)+"k":e>999?e%1e3===0?e.toString().slice(0,1)+"k":e.toString().slice(0,1)+"."+e.toString().slice(1,2)+"k":e%1!==0?Math.ceil(e):e}n(39);function y(e){var t=Object(i.useState)(!1),n=Object(O.a)(t,2),a=n[0],s=n[1],o=Object(i.useState)(e.day),r=Object(O.a)(o,2),l=r[0],d=r[1];function j(){l>-2&&l<100001&&(e.onSaveTodo(e.id,e.index,l),s(!1))}return Object(c.jsxs)("td",{"data-id":e.id,"data-item":e.rowIndex,"data-day":e.index,onClick:e.type?e.onChangeDay:e.isThisWeek?function(e){(e.target.classList.contains("main-cell")||e.target.classList.contains("type-cell"))&&s(!0)}:e.onChangeDay,className:"main-cell week-spots"+(e.isThisWeek&&e.today===e.index?e.color:""),children:[Object(c.jsx)("div",{className:e.type?"spot"+(1===e.day?" closed":0===e.day?" open":""):"type-cell"+(0===e.day?" grey":""),children:!e.type&&e.day>0?e.day:!e.type&&e.day>-1?k(e.avgTodo):""}),a&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{onClick:j,className:"number-modal-bg"}),Object(c.jsxs)("div",{className:"number-modal",children:[Object(c.jsx)("h3",{children:e.text}),Object(c.jsx)("h2",{children:e.dayOfWeek}),Object(c.jsxs)("fieldset",{children:[Object(c.jsx)("div",{children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"radio",name:"numberValues",checked:-1===+l,onChange:function(){return d(-1)}}),"not today"]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"radio",name:"numberValues",checked:0===+l,onChange:function(){return d(0)}}),"schedule for today"]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"radio",name:"numberValues",value:l,checked:+l>0,onChange:function(){return d(l>0?null:1)}}),"number done today:"]})})]}),Object(c.jsx)("input",{type:"number",min:"-1",max:"100000",value:l,onChange:function(e){return d(+e.target.value)}}),Object(c.jsx)("button",{onClick:j,className:"save-todo",children:"save"})]})]})]})}n(40);function w(e){var t=Object(i.useState)(Object(h.a)(e.todo)),n=Object(O.a)(t,2),a=n[0],s=n[1],o=Object(i.useState)({currentTotal:0,avgTodo:0,tooHigh:!1,tooLow:!1,allDone:!1,cutNum:0,goalNum:0,originalDay:0,today:0}),r=Object(O.a)(o,2),l=r[0],d=r[1];return Object(i.useEffect)((function(){return s(Object(h.a)(e.todo))}),[e]),Object(i.useEffect)((function(){return function(){var t=[];e.todo.forEach((function(e){return e>-1?t.push(+e):null}));var n=t.reduce((function(e,t){return e+t}),0),c=n>=+e.number,i=(+e.number-n)/t.length,a=t.length>+e.number,s=t.length<+e.number,o=k(+e.number),r=k(+e.number-n),l=(new Date).getDay();d({currentTotal:n,avgTodo:i,tooHigh:a,tooLow:s,allDone:c,cutNum:o,goalNum:r,originalDay:l,today:0===l?6:l-1})}()}),[e]),Object(c.jsxs)("tr",{draggable:!e.archive,id:e.id+e.weekBeginning,"data-index":e.index,"data-dragid":e.id,"data-dragweek":e.weekBeginning,className:l.allDone?"allDone":e.color,children:[Object(c.jsxs)("td",{id:e.id,className:"week-item left-column",children:[!e.archive&&Object(c.jsx)("button",{value:e.id,onClick:e.onRemoveItem,className:"week-item-delete",children:"\u2014"}),e.text]}),Object(c.jsx)("td",{className:"main-cell week-item-number"+(e.type&&(l.tooHigh?" week-number-arrow-down":l.tooLow?" week-number-arrow-up":"")),children:k(l.allDone?l.currentTotal:l.goalNum>-1?l.goalNum:e.number)}),a.map((function(t,n){return Object(c.jsx)(y,{id:e.id,day:t,index:n,rowIndex:e.index,today:l.today,avgTodo:l.avgTodo>0?l.avgTodo:null,type:e.type,color:e.color,isThisWeek:e.isThisWeek,weekBeginning:e.weekBeginning,dayOfWeek:!e.archive&&e.days[n],text:e.text,onSaveTodo:e.onSaveTodo,onChangeDay:e.onChangeDay},e.number+e.id+n)}))]})}n(15);var N=["color0","color1","color2","color3","color4","color5","color6","color7","color8","color9"],S=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];function I(e){var t=Object(i.useState)(JSON.parse(localStorage.getItem(e.weekBeginning))),n=Object(O.a)(t,2),a=n[0],s=n[1],o=Object(i.useState)(JSON.parse(localStorage.getItem("items"))),r=Object(O.a)(o,2),l=r[0],d=r[1],j=Object(i.useState)([]),u=Object(O.a)(j,2),b=u[0],m=u[1];function g(){return(g=Object(p.a)(v.a.mark((function t(){var n,c,i;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],c=JSON.parse(localStorage.getItem("items")),t.next=4,JSON.parse(localStorage.getItem(e.weekBeginning));case 4:(i=t.sent)&&i.items.forEach((function(e){var t=c.findIndex((function(t){return t.id===e[0]}));if(t>-1){var i=c.splice(t,1);i[0].todo=e[1],n.push(i[0])}})),d(Object(h.a)(c)),m([].concat(n));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){var n=Object(x.a)({},a);console.log(n),void 0===n.items&&(n={date:e.weekBeginning,items:[]}),console.log(n),n.items.push([t.target.value,[-1,-1,-1,-1,-1,-1,-1]]),localStorage.setItem(e.weekBeginning,JSON.stringify(n)),s(Object(x.a)({},n))}function k(t){if(window.confirm("Really remove this item from schedule?")){var n=Object(x.a)({},a);n.items=n.items.filter((function(e){return e[0]!==t.target.value})),localStorage.setItem(e.weekBeginning,JSON.stringify(n)),s(Object(x.a)({},n))}}function y(t){var n=Object(x.a)({},a),c=n.items.find((function(e){return e[0]===t.currentTarget.dataset.id})),i=t.currentTarget.dataset.day;e.isThisWeek?c[1][i]=-1===c[1][i]?0:0===c[1][i]?1:-1:c[1][i]=c[1][i]>-1?-1:0,localStorage.setItem(e.weekBeginning,JSON.stringify(n)),s(Object(x.a)({},n)),e.isThisWeek&&I()}function N(t,n,c){var i=Object(x.a)({},a);i.items.find((function(e){return e[0]===t}))[1][n]=c,localStorage.setItem(e.weekBeginning,JSON.stringify(i)),s(Object(x.a)({},i)),e.isThisWeek&&I()}function I(){var t=JSON.parse(localStorage.getItem("archive")),n={date:e.weekBeginning,items:Object(h.a)(b)};if(t){var c=t.findIndex((function(e){return e.date===n.date}));-1!==c?t[c]=n:t.unshift(n)}else(t=[]).unshift(n);localStorage.setItem("archive",JSON.stringify(t))}return Object(i.useEffect)((function(){return function(){return g.apply(this,arguments)}()}),[a]),Object(c.jsxs)("div",{className:"week",children:[Object(c.jsx)("section",{children:Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"week-date left-column",children:e.weekBeginning}),Object(c.jsx)("td",{className:"week-date"}),e.days.map((function(t,n){return Object(c.jsx)("td",{className:"day",children:t.substring(0,1)},t+n+e.weekBeginning)}))]})}),Object(c.jsx)("tbody",{"data-dragweek":e.weekBeginning,children:b.map((function(t,n){return Object(c.jsx)(w,{id:t.id,index:n,text:t.text,type:t.type,number:t.number,color:t.color,todo:t.todo,isThisWeek:e.isThisWeek,weekBeginning:e.weekBeginning,days:S,onRemoveItem:k,onChangeDay:y,onSaveTodo:N},t.id+e.weekBeginning)}))})]})}),l.length>0&&Object(c.jsxs)("div",{className:"edit-box",children:[Object(c.jsx)("button",{className:"addAllItems",onClick:function(){var t=[],n=Object(x.a)({},a);l.forEach((function(e){return t.push(e.id)})),void 0===n.items&&(n={date:e.weekBeginning,items:[]}),t.forEach((function(e){return n.items.push([e,[-1,-1,-1,-1,-1,-1,-1]])})),localStorage.setItem(e.weekBeginning,JSON.stringify(n)),s(Object(x.a)({},n))},children:"add all items"}),Object(c.jsx)("div",{className:"items-list",children:l.map((function(t){return Object(c.jsx)("button",{value:t.id,"data-week":e.weekBeginning,className:"items-list-item "+t.color,onClick:f,children:t.text},t.id+e.weekBeginning+"u")}))})]})]})}function C(){var e=n(),t=n(7);function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=new Date,n=t.getDay();function c(e){return e<10?"0"+e:e}return n>1?t.setDate(t.getDate()-n+1+e):0===n?t.setDate(t.getDate()-6+e):t.setDate(t.getDate()+e),t.getFullYear()+"/"+c(t.getMonth()+1)+"/"+c(t.getDate())}return Object(c.jsxs)("main",{id:"arrange",children:[Object(c.jsx)("h1",{children:"This Week"}),Object(c.jsx)(I,{weekName:"This Week",days:S,weekBeginning:e,isThisWeek:!0},"thisWeek"),Object(c.jsx)("h2",{children:"Next Week"}),Object(c.jsx)(I,{weekName:"Next Week",days:S,weekBeginning:t,thisWeekBeginning:e},"nextWeek")]})}var T=n(49),W=n(50);function B(e){var t=e.item?Object(x.a)({},e.item):{id:"",text:"",type:!0,number:1,color:"color0"},n=Object(i.useState)(t),a=Object(O.a)(n,2),s=a[0],o=a[1];function r(e){var t=Object(x.a)({},s);t[e.target.name]=e.target.value,o(Object(x.a)({},t))}return Object(c.jsxs)("section",{children:[Object(c.jsxs)("div",{className:"item",children:[Object(c.jsx)("input",{type:"text",name:"text",value:s.text,onChange:r,className:"text"}),Object(c.jsx)("button",{name:"type",value:s.type,onClick:function(){var e=Object(x.a)({},s);e.type=!e.type,o(Object(x.a)({},e))},className:"type",children:s.type?Object(c.jsx)("div",{className:"day spot open"}):"#"}),Object(c.jsx)("input",{type:"number",name:"number",min:"1",max:"99999",value:s.number,onChange:r,className:"number"}),Object(c.jsx)("button",{className:"color "+s.color}),Object(c.jsx)("button",{onClick:e.onCancelUpdate,className:"plus-sign",children:Object(c.jsx)(T.a,{size:16})})]}),Object(c.jsxs)("div",{className:"edit-box",children:[Object(c.jsx)("div",{className:"palette",children:e.colors.map((function(e){return Object(c.jsx)("button",{name:"color",value:e,onClick:r,className:"palette-square "+e},e)}))}),Object(c.jsx)("div",{className:"edit-box-buttons",children:Object(c.jsx)("button",{onClick:function(){g(s)&&(e.onUpdateItem(Object(x.a)({},s)),o({id:"",text:"",type:!0,number:1,color:"color0"}))},className:"edit-complete",children:Object(c.jsx)(W.a,{size:16})})})]})]})}var D=n(51);function J(e){var t=Object(i.useState)(e.item),n=Object(O.a)(t,2),a=n[0],s=n[1],o=Object(i.useState)(!1),r=Object(O.a)(o,2),l=r[0],d=r[1],j=Object(i.useState)(!1),u=Object(O.a)(j,2),b=u[0],m=u[1];function h(){d(!0),e.onCancelNewItem()}return Object(i.useEffect)((function(){!function(){if(localStorage.getItem("weeks")){JSON.parse(localStorage.getItem("weeks")).forEach((function(t){t.items.find((function(t){return t[0]===e.item.id}))&&m(!0)}))}}()})),Object(c.jsx)("div",{children:l&&!e.currentlyAdding?Object(c.jsx)(B,{item:a,colors:e.colors,onUpdateItem:function(e){if(g(e)){var t=JSON.parse(localStorage.getItem("items")),n=t.findIndex((function(t){return t.id===e.id}));t[n]=e,localStorage.setItem("items",JSON.stringify(t)),s(Object(x.a)({},e)),d(!1)}},onCancelUpdate:function(){return d(!1)}}):Object(c.jsxs)("div",{className:"item",children:[Object(c.jsx)("div",{onClick:h,className:"text",children:a.text}),Object(c.jsx)("button",{onClick:h,className:"type",children:a.type?Object(c.jsx)("div",{className:"day spot open"}):Object(c.jsx)(D.a,{size:14})}),Object(c.jsx)("button",{onClick:h,className:"number",children:k(a.number)}),Object(c.jsx)("button",{onClick:h,className:"color "+a.color}),Object(c.jsx)("button",{value:a.id,disabled:b,onClick:e.onDeleteItem,className:"plus-sign",children:Object(c.jsx)(T.a,{size:16})})]})})}n(41);var A=n(53);function E(){var e=Object(i.useState)(localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")).sort((function(e,t){return e.color>t.color?1:-1})):[]),t=Object(O.a)(e,2),n=t[0],a=t[1],s=Object(i.useState)(!1),o=Object(O.a)(s,2),r=o[0],l=o[1];function d(e){if(window.confirm("Really delete?")){var t=Object(h.a)(n).filter((function(t){return t.id!==e.target.value}));localStorage.setItem("items",JSON.stringify(t)),a(Object(h.a)(t))}}return Object(c.jsxs)("main",{id:"items",children:[Object(c.jsx)("h1",{children:"Items"}),n.map((function(e){return Object(c.jsx)(J,{item:e,colors:N,currentlyAdding:r,onDeleteItem:d,onCancelNewItem:function(){return l(!1)}},e.id)})),r?Object(c.jsx)(B,{colors:N,onUpdateItem:function(e){var t={id:Object(A.a)(),text:e.text,type:e.type,number:e.number,color:e.color},c=Object(h.a)(n);c.push(t),localStorage.setItem("items",JSON.stringify(c)),a(Object(h.a)(c))},onCancelUpdate:function(){return l(!1)}}):Object(c.jsx)("button",{onClick:function(){return l(!0)},className:"plus-sign add",children:Object(c.jsx)(u.a,{size:18})})]})}function z(e){return Object(c.jsx)("div",{className:"week",children:Object(c.jsx)("section",{children:Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"week-date left-column",children:e.week.date}),Object(c.jsx)("td",{className:"week-date"}),e.days.map((function(t,n){return Object(c.jsx)("td",{className:"day",children:t.substring(0,1)},t+n+e.week.date)}))]})}),Object(c.jsx)("tbody",{children:e.week.items.map((function(t,n){return Object(c.jsx)(w,{id:t.id,index:n,text:t.text,type:t.type,number:t.number,color:t.color,todo:t.todo,weekBeginning:e.week.date,archive:!0,onChangeDay:null,onRemoveItem:null},t.id+e.week.date)}))})]})})})}function R(e){var t=localStorage.getItem("archive")?JSON.parse(localStorage.getItem("archive")):[];return Object(c.jsxs)("main",{id:"arrange",children:[Object(c.jsx)("h1",{children:"Archive"}),t.map((function(e,t){return Object(c.jsx)(z,{week:e,days:S},"archiveWeek"+t)}))]})}n(42);var U=n(52);function L(){var e=Object(i.useState)(!1),t=Object(O.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(U.a,{size:16,className:"info",onClick:function(){return a(!n)}}),n&&Object(c.jsxs)("div",{className:"info-box",children:[Object(c.jsx)("h2",{children:"ITEMS"}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["touch the ",Object(c.jsx)(u.a,{size:16})," to add an item"]}),Object(c.jsx)("li",{children:"enter the item's name"}),Object(c.jsx)("li",{children:"choose between dot (one per day) or number (up to 100,000 per week)"}),Object(c.jsx)("li",{children:"enter a weekly goal number for the item (max. 7 for dots; max. 100,000 for numbers)"}),Object(c.jsx)("li",{children:"choose a colour for the item (similar items can be visually grouped)"}),Object(c.jsxs)("li",{children:["touch ",Object(c.jsx)(W.a,{size:16})," to save, or ",Object(c.jsx)(T.a,{size:16})," to cancel"]}),Object(c.jsx)("li",{children:"touch an item to edit it"})]}),Object(c.jsx)("h2",{children:"ARRANGE"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"items are listed for this week & next week"}),Object(c.jsx)("li",{children:"touch an item to add it to the week"}),Object(c.jsx)("li",{children:"for dot items"}),Object(c.jsxs)("li",{className:"indent",children:["touch once on a given day to set it as ",Object(c.jsx)("i",{children:"todo"})," for that day"]}),Object(c.jsxs)("li",{className:"indent",children:["touch again to set it as ",Object(c.jsx)("i",{children:"done"})," for that day"]}),Object(c.jsx)("li",{children:"for number items"}),Object(c.jsx)("li",{className:"indent",children:"when you've completed a number (e.g. 5,000 steps), touch the relevant square twice to enter it"}),Object(c.jsx)("li",{className:"indent",children:"the number to the left of Monday tells you how many left to do that week"}),Object(c.jsx)("li",{children:"when you've hit the weekly target for an item, the row will turn black"})]}),Object(c.jsx)("h2",{children:"ARCHIVE"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"lists previous weeks"}),Object(c.jsx)("li",{children:"not editable"})]})]})]})}n(43);function M(){return Object(c.jsxs)(r.a,{basename:"/turtledot-x",children:[Object(c.jsx)(j,{}),Object(c.jsx)(L,{}),Object(c.jsx)("div",{className:"bgPanel"}),Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{path:"/Items",children:Object(c.jsx)(E,{})}),Object(c.jsx)(l.b,{path:"/Arrange",children:Object(c.jsx)(C,{})}),Object(c.jsx)(l.b,{path:"/Archive",children:Object(c.jsx)(R,{})}),Object(c.jsx)(l.b,{path:"/",children:Object(c.jsx)(l.a,{to:"/Arrange"})})]}),Object(c.jsx)(m,{})]})}n(44);var F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/turtledot-x",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/turtledot-x","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):H(t,e)}))}}()}},[[45,1,2]]]);
//# sourceMappingURL=main.fc1a13f3.chunk.js.map