(this["webpackJsonptax-popap"]=this["webpackJsonptax-popap"]||[]).push([[0],{23:function(t,e,c){},30:function(t,e,c){"use strict";c.r(e);var a=c(0),n=c.n(a),s=c(16),i=c.n(s),l=c(13),o=(c(23),c(7)),r=c(2),d=c(1);function b(){var t,e=Object(r.f)();return Object(d.jsx)("div",{className:"main-modal-popap",children:Object(d.jsx)("span",{className:"tax-button-gradient",children:Object(d.jsx)("button",(t={disabled:!1,onClick:function(t){t.target.disabled=!0}},Object(o.a)(t,"onClick",(function(){e.push("tax-deduction")})),Object(o.a)(t,"className","tax-button"),Object(o.a)(t,"children","\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442"),t))})})}var j=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(e){var c=e.getCLS,a=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;c(t),a(t),n(t),s(t),i(t)}))},x=c(10),u=c.p+"static/media/close-button.5cfd960d.svg";function h(t){var e=t.show,c=t.taxCheckbox,a=t.disabled,n=function(t){switch(t.toString().substring(-1)){case"2":case"6":case"7":case"8":return"\u043e\u0439";case"3":return"\u0438\u0439";default:return"\u044b\u0439"}};return Object(d.jsx)(d.Fragment,{children:e?Object(d.jsxs)("div",{className:"tax-checkbox-list",children:[Object(d.jsxs)("h3",{className:"tax-checkbox-list__title",children:["\u0418\u0442\u043e\u0433\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043d\u0435\u0441\u0442\u0438",Object(d.jsx)("br",{})," \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u044b\u0445:"]}),Object(d.jsx)("ul",{className:"tax-checkbox-list__items",children:c?c.map((function(t,e){return Object(d.jsxs)("li",{className:"tax-checkbox-list__item",children:[Object(d.jsx)("input",{type:"checkbox",disabled:a,className:"tax-checkbox-list__checkbox",id:e,name:e,value:e}),Object(d.jsxs)("label",{htmlFor:e,children:[" ",Object(d.jsxs)("span",{className:"tax-checkbox-list__price",children:[t.replace(/(\d)(?=(\d{3})+(\D|$))/g,"$1 ")," \u0440\u0443\u0431\u043b\u0435\u0439 "]}),Object(d.jsxs)("span",{className:"tax-checkbox-list__prefix",children:[1==e?" \u0432o ":" \u0432 ",e+1,"-",n(e+1)," \u0433\u043e\u0434"]})]})]},e)})):null})]}):null})}function p(){var t,e=n.a.useState(!1),c=Object(x.a)(e,2),a=c[0],s=c[1],i=!1,l=function(t){t.target.disabled=!0},b=Object(r.f)(),j=n.a.useState(!1),p=Object(x.a)(j,2),m=p[0],O=p[1],_=n.a.useState(""),g=Object(x.a)(_,2),N=g[0],v=g[1],f=n.a.useState([]),k=Object(x.a)(f,2),C=k[0],F=k[1],S=function(t){if(t>=1100){var e,c=12*t*.13;c=c.toFixed(0);var a=[];for(e=26e4;e>c;e-=c)a.push(c);e>0&&(e=e.toFixed(0),a.push(e)),F(a)}};return Object(d.jsx)("div",{className:"container-tax",children:Object(d.jsx)("div",{className:"container-tax__padding",children:Object(d.jsx)("div",{className:"tax-modal",children:Object(d.jsxs)("div",{className:"tax-container",children:[Object(d.jsx)("button",{className:"tax-modal__button-close",onClick:function(){b.push("/tax-popap")},children:Object(d.jsx)("img",{className:"tax-modal__img-close",src:u})}),Object(d.jsx)("h2",{className:"tax-container__title",children:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442"}),Object(d.jsx)("p",{className:"tax-container__sub-text",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442 \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0433\u0430\u0441\u0438\u0442\u044c \u0438\u043f\u043e\u0442\u0435\u043a\u0443 \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u043e. \u0420\u0430\u0437\u043c\u0435\u0440 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u0432\u044b\u0447\u0435\u0442\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 13% \u043e\u0442 \u0441\u0432\u043e\u0435\u0433\u043e \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0433\u043e\u0434\u043e\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430."}),Object(d.jsx)("h3",{className:"tax-container__title-quest",children:"\u0412\u0430\u0448\u0430 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u043c\u0435\u0441\u044f\u0446"}),Object(d.jsx)("input",{className:"tax-container__input-answer",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",id:"input-check",required:!0,value:N,onChange:function(t){v(t.target.value.replace(/[^\d]/g,"").replace(/(\d)(?=(\d{3})+(\D|$))/g,"$1 ")+" \u20bd")," \u20bd"==t.target.value||"\u20bd"==t.target.value?(console.log("1"),t.target.value=""):(t.target.focus(),setTimeout((function(){t.target.setSelectionRange(t.target.value.length-2,t.target.value.length-2)}),10))}}),Object(d.jsx)("span",{className:"input-answer__attention",id:"attention-block",children:"\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f \u0441\u0443\u043c\u043c\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u0438\u043d\u0438\u043c\u0443\u043c 1100"}),Object(d.jsx)("button",{className:"tax-container__button-calc",onClick:function(){var t=document.getElementById("input-check"),e=document.getElementById("attention-block"),c=N.replace(/\s/g,"").replace("\u20bd","");""!==c&&c>=1100?(O(!m),S(c),t.classList.remove("input-error"),e.classList.remove("attention-visible")):(t.classList.add("input-error"),e.classList.add("attention-visible"))},children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"}),Object(d.jsx)(h,{show:m,taxCheckbox:C,disabled:a}),Object(d.jsxs)("div",{className:"tax-container-tablet-pc",children:[Object(d.jsx)("h3",{className:"tax-container__quest",children:"\u0427\u0442\u043e \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u043c?"}),Object(d.jsxs)("div",{className:"tax-container__buttons container-buttons",children:[Object(d.jsx)("button",{disabled:i,onClick:l,className:"container-button-pay",children:"\u041f\u043b\u0430\u0442\u0435\u0436"}),Object(d.jsx)("button",{disabled:i,onClick:l,className:"container-button-time",children:"\u0421\u0440\u043e\u043a"})]})]}),Object(d.jsx)("button",(t={disabled:i,onClick:l},Object(o.a)(t,"onClick",(function(){s(!0)})),Object(o.a)(t,"className","tax-container__button-add"),Object(o.a)(t,"children","\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),t))]})})})})}function m(){return Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/tax-popap",exact:!0,component:b}),Object(d.jsx)(r.a,{path:"/tax-deduction/tax-deduction",exact:!0,component:p}),Object(d.jsx)(r.a,{children:Object(d.jsx)("p",{className:"route-error",children:"404: NOT FOUND"})})]})}i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(m,{})})}),document.getElementById("root")),j()}},[[30,1,2]]]);
//# sourceMappingURL=main.ee025e98.chunk.js.map