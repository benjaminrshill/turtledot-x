(this["webpackJsonpturtledot-x"]=this["webpackJsonpturtledot-x"]||[]).push([[0],{15:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),s=n(23),o=n.n(s),r=n(13),l=n(4),d=n.p+"static/media/turtledot.9f70b9aa.svg";n(31);function j(){return Object(c.jsx)("header",{children:Object(c.jsx)("img",{src:d,className:"logo",alt:"logo"})})}var u=n(48),b=n(49);n(32);function m(){return Object(c.jsxs)("nav",{children:[Object(c.jsxs)(r.b,{to:"/Items",className:"menu-item",activeClassName:"here",children:[Object(c.jsx)("div",{className:"menu-icon",children:Object(c.jsx)(u.a,{size:16})}),Object(c.jsx)("div",{className:"menu-text",children:"Items"})]}),Object(c.jsxs)(r.b,{to:"/Arrange",className:"menu-item",activeClassName:"here",children:[Object(c.jsx)("div",{className:"menu-icon",children:Object(c.jsx)("span",{className:"menu-icon-doit"})}),Object(c.jsx)("div",{className:"menu-text",children:"Arrange"})]}),Object(c.jsxs)(r.b,{to:"/Archive",className:"menu-item",activeClassName:"here",children:[Object(c.jsx)("div",{className:"menu-icon",children:Object(c.jsx)(b.a,{size:16})}),Object(c.jsx)("div",{className:"menu-text",children:"Archive"})]})]})}var h=n(10),O=n(3),g=n(5);function x(e){return e.text.length>0&&e.text.length<12&&e.number>0&&(!!(e.type&&e.number<8)||(!e.type&&e.number<100001||void 0))}var f=n(21),v=n.n(f),k=n(25);function p(e){return e>99999?"100k":e>9999?e.toString().slice(0,2)+"k":e>999?e%1e3===0?e.toString().slice(0,1)+"k":e.toString().slice(0,1)+"."+e.toString().slice(1,2)+"k":e%1!==0?Math.ceil(e):e}var y=n(50);n(39);function w(e){var t=Object(i.useState)(e.day),n=Object(O.a)(t,2),a=n[0],s=n[1],o=Object(i.useState)(e.day>0?e.day:p(e.avgTodo)),r=Object(O.a)(o,2),l=r[0],d=r[1];function j(){a>-2&&a<100001&&e.onUpdateTodo(a)}function u(){l>0?s(l):e.avgTodo>0?b(p(e.avgTodo)):b(1)}function b(e){d(e),s(e)}return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{onClick:j,className:"number-modal-bg modal-bg"}),Object(c.jsxs)("div",{className:"number-modal modal",tabIndex:"0",onKeyDown:function(t){("Backspace"===t.key&&"INPUT"!==t.target.nodeName||"Escape"===t.key)&&e.onSwitchEditing(!1)},children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)("h2",{children:[e.dayOfWeek,":"]}),Object(c.jsx)("h3",{children:e.text})]}),Object(c.jsxs)("div",{className:"options",children:[Object(c.jsx)("div",{className:-1===a?"selected":"",onClick:function(){return s(-1)},children:"not today"}),Object(c.jsx)("div",{className:0===a?"selected":"",onClick:function(){return s(0)},children:"schedule for today"}),Object(c.jsxs)("div",{className:a>0?"selected":"",onClick:u,children:["number done today",Object(c.jsx)("input",{id:e.dayOfWeek+e.weekBeginning+e.id+"inputNumber",type:"number",min:"-1",max:"100000",value:l,onFocus:u,onChange:function(e){return b(+e.target.value)},onKeyDown:function(e){return function(e){"Enter"===e.key&&j()}(e)}})]})]}),Object(c.jsxs)("div",{className:"actions-panel",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:j,className:"save-todo",children:Object(c.jsx)(y.a,{size:16})})})]})]})]})}n(40);function N(e){var t=Object(i.useState)(!1),n=Object(O.a)(t,2),a=n[0],s=n[1],o=e.avgTodo>0?p(e.avgTodo):"";return Object(c.jsxs)("td",{"data-id":e.id,"data-item":e.rowIndex,"data-day":e.index,onClick:e.type?e.onChangeDay:e.isThisWeek?function(e){(e.target.classList.contains("main-cell")||e.target.classList.contains("type-cell"))&&s(!0)}:e.onChangeDay,className:"main-cell week-spots"+(e.isThisWeek&&e.today===e.index?e.color:""),children:[Object(c.jsx)("div",{className:e.type?"spot"+(1===e.day?" closed":0===e.day?" open":""):"type-cell"+(0===e.day?" grey":""),children:!e.type&&e.day>0?e.day:!e.type&&e.day>-1?o:""}),a&&Object(c.jsx)(w,{id:e.id,day:e.day,avgTodo:e.avgTodo,text:e.text,dayOfWeek:e.dayOfWeek,weekBeginning:e.weekBeginning,onUpdateTodo:function(t){e.onSaveTodo(e.id,e.index,t),s(!1)},onSwitchEditing:s})]})}var S=n(51),I=n(52);n(41);function C(e){var t=Object(i.useState)(Object(h.a)(e.todo)),n=Object(O.a)(t,2),a=n[0],s=n[1],o=Object(i.useState)({currentTotal:0,avgTodo:0,tooHigh:!1,tooLow:!1,allDone:!1,cutNum:0,goalNum:0,originalDay:0,today:0}),r=Object(O.a)(o,2),l=r[0],d=r[1];return Object(i.useEffect)((function(){return s(Object(h.a)(e.todo))}),[e]),Object(i.useEffect)((function(){return function(){var t=[],n=[];e.todo.forEach((function(e){e>-1&&t.push(+e),0===e&&n.push(+e)}));var c=t.reduce((function(e,t){return e+t}),0),i=c>=+e.number,a=n.length>0?(+e.number-c)/n.length:0,s=t.length>+e.number,o=t.length<+e.number,r=p(+e.number),l=p(+e.number-c),j=(new Date).getDay();d({currentTotal:c,avgTodo:a,tooHigh:s,tooLow:o,allDone:i,cutNum:r,goalNum:l,originalDay:j,today:0===j?6:j-1})}()}),[e]),Object(c.jsxs)("tr",{draggable:!e.archive&&e.shifting,id:e.id+e.weekBeginning,"data-index":e.index,"data-dragid":e.id,"data-dragweek":e.weekBeginning,className:l.allDone?"all-done":e.color,children:[Object(c.jsxs)("td",{id:e.id,className:"week-item left-column"+(e.deleting||e.shifting?" small":""),children:[!e.archive&&e.deleting&&Object(c.jsx)("button",{value:e.id,onClick:e.onRemoveItem,className:"week-item-actions",children:"\u2014"}),!e.archive&&e.shifting&&Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{value:e.index,"data-direction":"up",onClick:e.onMoveItem,className:"week-item-actions",children:Object(c.jsx)(S.a,{size:10})}),Object(c.jsx)("button",{value:e.index,"data-direction":"down",onClick:e.onMoveItem,className:"week-item-actions",children:Object(c.jsx)(I.a,{size:10})})]}),e.text]}),Object(c.jsx)("td",{className:"main-cell week-item-number"+(e.type&&(l.tooHigh?" week-number-arrow-down":l.tooLow?" week-number-arrow-up":"")),children:p(l.allDone?l.currentTotal:l.goalNum>-1?l.goalNum:e.number)}),a.map((function(t,n){return Object(c.jsx)(N,{id:e.id,day:t,index:n,rowIndex:e.index,today:l.today,avgTodo:l.avgTodo,type:e.type,color:e.color,isThisWeek:e.isThisWeek,weekBeginning:e.weekBeginning,dayOfWeek:!e.archive&&e.days[n],text:e.text,onSaveTodo:e.onSaveTodo,onChangeDay:e.onChangeDay},e.number+e.id+n)}))]})}function T(){return localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")).sort((function(e,t){return e.color>t.color?1:-1})):[]}function D(e){return localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):{}}n(15);var B=["color0","color1","color2","color3","color4","color5","color6","color7","color8","color9"],W=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],E=n(53),A=n(54),J=n(55),z=n(56);function U(e){return Object(c.jsxs)("div",{className:"actions-panel",children:[Object(c.jsxs)("span",{children:[Object(c.jsx)("input",{type:"checkbox",id:"delete-items"+e.weekBeginning,onChange:function(){return!e.shifting&&e.onSwitchDeleting(!e.deleting)}}),Object(c.jsx)("label",{htmlFor:"delete-items"+e.weekBeginning,children:e.deleting?Object(c.jsx)(E.a,{size:16}):Object(c.jsx)(A.a,{size:16})})]}),Object(c.jsxs)("span",{children:[Object(c.jsx)("input",{type:"checkbox",id:"shift-items"+e.weekBeginning,onChange:function(){return!e.deleting&&e.onSwitchShifting(!e.shifting)}}),Object(c.jsx)("label",{htmlFor:"shift-items"+e.weekBeginning,children:e.shifting?Object(c.jsx)(J.a,{size:16}):Object(c.jsx)(z.a,{size:14,className:"deg45"})})]})]})}function M(e){var t=Object(i.useState)(D(e.weekBeginning)),n=Object(O.a)(t,2),a=n[0],s=n[1],o=Object(i.useState)(T()),r=Object(O.a)(o,2),l=r[0],d=r[1],j=Object(i.useState)([]),u=Object(O.a)(j,2),b=u[0],m=u[1],x=Object(i.useState)(!1),f=Object(O.a)(x,2),p=f[0],y=f[1],w=Object(i.useState)(!1),N=Object(O.a)(w,2),S=N[0],I=N[1];function B(){return(B=Object(k.a)(v.a.mark((function t(){var n,c,i;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],c=T(),t.next=4,D(e.weekBeginning);case 4:(i=t.sent).items&&i.items.forEach((function(e){var t=c.findIndex((function(t){return t.id===e[0]}));if(t>-1){var i=c.splice(t,1);i[0].todo=e[1],n.push(i[0])}})),d(Object(h.a)(c)),m([].concat(n));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t){localStorage.setItem(e.weekBeginning,JSON.stringify(t))}function A(t){var n=Object(g.a)({},a);void 0===n.items&&(n={date:e.weekBeginning,items:[]}),n.items.push([t.target.value,[-1,-1,-1,-1,-1,-1,-1]]),E(n),s(Object(g.a)({},n))}function J(e){var t=Object(g.a)({},a);t.items=t.items.filter((function(t){return t[0]!==e.target.value})),E(t),s(Object(g.a)({},t))}function z(t){var n,c=JSON.parse(JSON.stringify(a)),i=+t.currentTarget.value;n="up"===t.currentTarget.dataset.direction?i>0?i-1:c.items.length-1:i<c.items.length-1?i+1:0,c.items.splice(n,0,c.items.splice(i,1)[0]),localStorage.setItem(e.weekBeginning,JSON.stringify(c)),s(Object(g.a)({},c))}function M(t){var n=Object(g.a)({},a),c=n.items.findIndex((function(e){return e[0]===t.currentTarget.dataset.id})),i=n.items[c],o=t.currentTarget.dataset.day;e.isThisWeek?i[1][o]=-1===i[1][o]?0:0===i[1][o]?1:-1:i[1][o]=i[1][o]>-1?-1:0,E(n),s(Object(g.a)({},n)),R(n,c)}function F(e,t,n){var c=Object(g.a)({},a),i=c.items.findIndex((function(t){return t[0]===e}));c.items[i][1][t]=n,E(c),s(Object(g.a)({},c)),R(c,i)}function R(t,n){if(e.isThisWeek){var c=JSON.parse(localStorage.getItem("archive")),i={date:e.weekBeginning,items:Object(h.a)(b)};if(i.items[n].todo=t.items[n][1],c){var a=c.findIndex((function(e){return e.date===i.date}));a>-1?c[a]=i:c.unshift(i)}else(c=[]).unshift(i);localStorage.setItem("archive",JSON.stringify(c))}}return Object(i.useEffect)((function(){return function(){return B.apply(this,arguments)}()}),[a]),Object(c.jsxs)("div",{className:"week",children:[Object(c.jsxs)("div",{className:"week-header",children:[Object(c.jsx)(U,{weekBeginning:e.weekBeginning,deleting:p,onSwitchDeleting:y,shifting:S,onSwitchShifting:I}),"This Week"===e.weekName?Object(c.jsx)("h1",{children:e.weekName}):Object(c.jsx)("h2",{children:e.weekName})]}),Object(c.jsx)("section",{children:Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"week-date left-column",children:e.weekBeginning}),Object(c.jsx)("td",{className:"week-date"}),e.days.map((function(t,n){return Object(c.jsx)("td",{className:"day",children:t.substring(0,1)},t+n+e.weekBeginning)}))]})}),Object(c.jsx)("tbody",{"data-dragweek":e.weekBeginning,children:b.map((function(t,n){return Object(c.jsx)(C,{id:t.id,index:n,text:t.text,type:t.type,number:t.number,color:t.color,todo:t.todo,isThisWeek:e.isThisWeek,weekBeginning:e.weekBeginning,days:W,deleting:p,shifting:S,onRemoveItem:J,onMoveItem:z,onChangeDay:M,onSaveTodo:F},t.id+e.weekBeginning)}))})]})}),l.length>0&&Object(c.jsxs)("div",{className:"edit-box",children:[Object(c.jsx)("button",{className:"add-all-items",onClick:function(){var t=[],n=Object(g.a)({},a);l.forEach((function(e){return t.push(e.id)})),void 0===n.items&&(n={date:e.weekBeginning,items:[]}),t.forEach((function(e){return n.items.push([e,[-1,-1,-1,-1,-1,-1,-1]])})),E(n),s(Object(g.a)({},n))},children:"add all items"}),Object(c.jsx)("div",{className:"items-list",children:l.map((function(t){return Object(c.jsx)("button",{value:t.id,"data-week":e.weekBeginning,className:"items-list-item "+t.color,onClick:A,children:t.text},t.id+e.weekBeginning+"u")}))})]})]})}function F(){var e=Object(i.useState)(new Date),t=Object(O.a)(e,2),n=t[0],a=t[1],s=Object(i.useState)(m()),o=Object(O.a)(s,2),r=o[0],l=o[1],d=Object(i.useState)(m(7)),j=Object(O.a)(d,2),u=j[0],b=j[1];function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=new Date,n=t.getDay();function c(e){return e<10?"0"+e:e}return n>1?t.setDate(t.getDate()-n+1+e):0===n?t.setDate(t.getDate()-6+e):t.setDate(t.getDate()+e),t.getFullYear()+"/"+c(t.getMonth()+1)+"/"+c(t.getDate())}return Object(i.useEffect)((function(){return l(m())}),[n]),Object(i.useEffect)((function(){return b(m(7))}),[n]),setInterval((function(){var e=new Date;1===e.getDay()&&0===n.getDay()?window.location.reload():e.getDate()!==n.getDate()&&a(e)}),6e4),Object(c.jsxs)("main",{id:"arrange",children:[Object(c.jsx)(M,{weekName:"This Week",days:W,weekBeginning:r,isThisWeek:!0},"thisWeek"),Object(c.jsx)(M,{weekName:"Next Week",days:W,weekBeginning:u,thisWeekBeginning:r},"nextWeek")]})}function R(e){var t=e.item?Object(g.a)({},e.item):{id:"",text:"",type:!0,number:1,color:"color0"},n=Object(i.useState)(t),a=Object(O.a)(n,2),s=a[0],o=a[1];function r(e){"Enter"===e.key&&d()}function l(e){var t=Object(g.a)({},s);t[e.target.name]=e.target.value,o(Object(g.a)({},t))}function d(){x(s)&&(e.onUpdateItem(Object(g.a)({},s)),o({id:"",text:"",type:!0,number:1,color:"color0"}))}return Object(c.jsxs)("section",{children:[Object(c.jsxs)("div",{className:"item",children:[Object(c.jsx)("input",{type:"text",name:"text",value:s.text,onChange:l,onKeyDown:function(e){return r(e)},className:"text"}),Object(c.jsx)("button",{name:"type",value:s.type,onClick:function(){var e=Object(g.a)({},s);e.type=!e.type,o(Object(g.a)({},e))},className:"type",children:s.type?Object(c.jsx)("div",{className:"day spot open"}):"#"}),Object(c.jsx)("input",{type:"number",name:"number",min:"1",max:"99999",value:s.number,onChange:l,onKeyDown:function(e){return r(e)},className:"number"}),Object(c.jsx)("button",{className:"color "+s.color}),Object(c.jsx)("button",{onClick:e.onCancelUpdate,className:"plus-sign",children:Object(c.jsx)(J.a,{size:16})})]}),Object(c.jsxs)("div",{className:"edit-box",children:[Object(c.jsx)("div",{className:"palette",children:e.colors.map((function(e){return Object(c.jsx)("button",{name:"color",value:e,onClick:l,className:"palette-square "+e},e)}))}),Object(c.jsx)("div",{className:"edit-box-buttons",children:Object(c.jsx)("button",{onClick:d,className:"edit-complete",children:Object(c.jsx)(y.a,{size:16})})})]})]})}var L=n(57);function K(e){var t=Object(i.useState)(e.item),n=Object(O.a)(t,2),a=n[0],s=n[1],o=Object(i.useState)(!1),r=Object(O.a)(o,2),l=r[0],d=r[1],j=Object(i.useState)(!1),u=Object(O.a)(j,2),b=u[0],m=u[1];function h(){d(!0),e.onCancelNewItem()}return Object(i.useEffect)((function(){!function(){if(localStorage.getItem("weeks")){JSON.parse(localStorage.getItem("weeks")).forEach((function(t){t.items.find((function(t){return t[0]===e.item.id}))&&m(!0)}))}}()})),Object(c.jsx)("div",{children:l&&!e.currentlyAdding?Object(c.jsx)(R,{item:a,colors:e.colors,onUpdateItem:function(e){if(x(e)){var t=JSON.parse(localStorage.getItem("items")),n=t.findIndex((function(t){return t.id===e.id}));t[n]=e,localStorage.setItem("items",JSON.stringify(t)),s(Object(g.a)({},e)),d(!1)}},onCancelUpdate:function(){return d(!1)}}):Object(c.jsxs)("div",{className:"item",children:[Object(c.jsx)("div",{onClick:h,className:"text",children:a.text}),Object(c.jsx)("button",{onClick:h,className:"type",children:a.type?Object(c.jsx)("div",{className:"day spot open"}):Object(c.jsx)(L.a,{size:14})}),Object(c.jsx)("button",{onClick:h,className:"number",children:p(a.number)}),Object(c.jsx)("button",{onClick:h,className:"color "+a.color}),Object(c.jsx)("button",{value:a.id,disabled:b,onClick:e.onDeleteItem,className:"plus-sign",children:Object(c.jsx)(J.a,{size:16})})]})})}n(42);var H=n(59);function P(){var e=Object(i.useState)(T()),t=Object(O.a)(e,2),n=t[0],a=t[1],s=Object(i.useState)(!1),o=Object(O.a)(s,2),r=o[0],l=o[1];function d(e){if(window.confirm("Really delete?")){var t=Object(h.a)(n).filter((function(t){return t.id!==e.currentTarget.value}));localStorage.setItem("items",JSON.stringify(t)),a(Object(h.a)(t))}}return Object(c.jsxs)("main",{id:"items",children:[Object(c.jsx)("h1",{children:"Items"}),n.map((function(e){return Object(c.jsx)(K,{item:e,colors:B,currentlyAdding:r,onDeleteItem:d,onCancelNewItem:function(){return l(!1)}},e.id)})),r?Object(c.jsx)(R,{colors:B,onUpdateItem:function(e){var t={id:Object(H.a)(),text:e.text,type:e.type,number:e.number,color:e.color},c=Object(h.a)(n);c.push(t),localStorage.setItem("items",JSON.stringify(c)),a(Object(h.a)(c))},onCancelUpdate:function(){return l(!1)}}):Object(c.jsx)("button",{onClick:function(){return l(!0)},className:"plus-sign add",children:Object(c.jsx)(u.a,{size:18})})]})}function q(e){return Object(c.jsx)("div",{className:"week",children:Object(c.jsx)("section",{children:Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"week-date left-column",children:e.week.date}),Object(c.jsx)("td",{className:"week-date"}),e.days.map((function(t,n){return Object(c.jsx)("td",{className:"day",children:t.substring(0,1)},t+n+e.week.date)}))]})}),Object(c.jsx)("tbody",{children:e.week.items.map((function(t,n){return Object(c.jsx)(C,{id:t.id,index:n,text:t.text,type:t.type,number:t.number,color:t.color,todo:t.todo,weekBeginning:e.week.date,archive:!0,onChangeDay:null,onRemoveItem:null},t.id+e.week.date)}))})]})})})}function G(e){var t=localStorage.getItem("archive")?JSON.parse(localStorage.getItem("archive")):[];return Object(c.jsxs)("main",{id:"arrange",children:[Object(c.jsx)("h1",{children:"Archive"}),t.map((function(e,t){return Object(c.jsx)(q,{week:e,days:W},"archiveWeek"+t)}))]})}n(43);var V=n(58);function Y(){var e=Object(i.useState)(!1),t=Object(O.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(V.a,{size:16,className:"info",onClick:function(){return a(!n)}}),n&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"info-modal-bg modal-bg",onClick:function(){return a(!1)}}),Object(c.jsxs)("div",{className:"info-box modal",tabIndex:"0",onKeyDown:function(e){"Backspace"!==e.key&&"Escape"!==e.key||a(!1)},children:[Object(c.jsx)("h2",{children:"ITEMS"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"add items: name, type, number, colour"}),Object(c.jsx)("li",{children:"type: choose between dot (one per day) or number (up to 100,000 per week)"}),Object(c.jsx)("li",{children:"enter a weekly goal number for the item"}),Object(c.jsx)("li",{children:"choose a colour (so similar items can be visually grouped)"})]}),Object(c.jsx)("h2",{children:"ARRANGE"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"touch an item on the list to add it to the week"}),Object(c.jsx)("li",{children:"for dot items:"}),Object(c.jsxs)("li",{className:"indent",children:["touch a cell to set as ",Object(c.jsx)("i",{children:"todo"})," for that day"]}),Object(c.jsxs)("li",{className:"indent",children:["touch again to set as ",Object(c.jsx)("i",{children:"done"})]}),Object(c.jsx)("li",{children:"for number items:"}),Object(c.jsx)("li",{className:"indent",children:"touch a cell to select from options panel"}),Object(c.jsx)("li",{children:"the number to the left of Monday tells you how many left to do that week"}),Object(c.jsx)("li",{children:"when you've hit the weekly target for an item, the row will turn black"})]}),Object(c.jsx)("h2",{children:"ARCHIVE"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"lists previous weeks"}),Object(c.jsx)("li",{children:"not editable"})]})]})]})]})}n(44);function $(){return Object(c.jsxs)(r.a,{basename:"/turtledot-x",children:[Object(c.jsx)(j,{}),Object(c.jsx)(Y,{}),Object(c.jsx)("div",{className:"bgPanel"}),Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{path:"/Items",children:Object(c.jsx)(P,{})}),Object(c.jsx)(l.b,{path:"/Arrange",children:Object(c.jsx)(F,{})}),Object(c.jsx)(l.b,{path:"/Archive",children:Object(c.jsx)(G,{})}),Object(c.jsx)(l.b,{path:"/",children:Object(c.jsx)(l.a,{to:"/Arrange"})})]}),Object(c.jsx)(m,{})]})}n(45);var Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)($,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/turtledot-x",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/turtledot-x","/service-worker.js");Q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):X(t,e)}))}}()}},[[46,1,2]]]);
//# sourceMappingURL=main.9b0a5f2b.chunk.js.map