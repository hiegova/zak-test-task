(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(20),a(21),a(8)),s=a(9),i=a(14),u=a(10),m=a(13),d=a(2),p=(a(22),a(1)),E={FETCH_CATEGOTIES:"FETCH_CATEGOTIES",FETCH_PRODUCTS:"FETCH_PRODUCTS",SET_CATEGORIES:"SET_CATEGORIES",SET_PRODUCTS:"SET_PRODUCTS",ADD_TO_CART:"ADD_TO_CART",REMOVE_FROM_CART:"REMOVE_FROM_CART",CHANGE_AMOUNT:"CHANGE_AMOUNT",LOADING_PRODUCTS:"LOADING_PRODUCTS",LOADING_CATEGORIES:"LOADING_CATEGORIES",API_START:"API_START",API_END:"API_END",API:"API"},_=function(e){var t=e.url,a=void 0===t?"":t,n=e.onSuccess,r=void 0===n?function(){}:n,c=e.onFailure,o=void 0===c?function(){}:c,l=e.label;return{type:E.API,payload:{url:a,onSuccess:r,onFailure:o,label:void 0===l?"":l}}},f=function(e){return{type:E.SET_CATEGORIES,payload:e}},g=function(e){return{type:E.SET_PRODUCTS,payload:e.results}},T=function(e){return{type:E.REMOVE_FROM_CART,ean:e}},N=function(e,t){return{type:E.CHANGE_AMOUNT,ean:e,cartAmount:t}},A="https://staging-stores-api.zakaz.ua/stores/default/categories/",y=function(e){return"https://staging-stores-api.zakaz.ua/stores/default/categories/".concat(e,"/products/")},v=function(e){return Array.isArray(e)&&e.length},O=function(e){return e.toFixed(2)},h=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onSelect=a.onSelect.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.props.store.dispatch(_({url:A,onSuccess:f,onFailure:function(){return console.log("Error occured loading categories")},label:E.FETCH_CATEGOTIES}))}},{key:"onSelect",value:function(e){var t,a=e.target.parentElement.parentElement,n=e.target.getAttribute("id");!function(e,t){var a=e.getElementsByClassName(t);Array.prototype.forEach.call(a,function(e){return e.classList.remove(t)})}(a,"nav__list-button--active"),e.target.classList.add("nav__list-button--active"),this.props.store.dispatch((t=y(n),_({url:t,onSuccess:g,onFailure:function(){return console.log("Error occured loading products")},label:E.FETCH_PRODUCTS})))}},{key:"render",value:function(){var e=this,t=this.props.store.getState(),a=t.categories.data,n=t.categories.isLoadingData;return r.a.createElement("aside",{className:"sidebar"},r.a.createElement("nav",{className:"nav"},r.a.createElement("h2",{className:"nav__title"},"\u0422\u043e\u0432\u0430\u0440\u0438"),r.a.createElement("ul",{className:"nav__list"},n?r.a.createElement("li",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439..."):v(a)?a.map(function(t,a){return r.a.createElement("li",{className:"nav__list-item",key:a},r.a.createElement("button",{className:"nav__list-button",id:t.id,onClick:e.onSelect},t.title))}):r.a.createElement("li",null,"0 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e"))))}}]),t}(r.a.Component),C=(a(23),a(24),function(e){var t=e.product,a=e.store,n=function(e,t){var a=e.filter(function(e){return t.ean===e.ean});return Array.isArray(a)&&a.length?a[0].cartAmount:0}(a.getState().cart,t);return r.a.createElement("div",{className:"product"},r.a.createElement("img",{className:"product__image",src:t.img.s150x150,alt:t.title}),r.a.createElement("p",{className:"product__price"},O(t.price),r.a.createElement("span",{className:"product__curency"}," \u0433\u0440\u043d")),r.a.createElement("p",{className:"product__title"},t.title),r.a.createElement("p",{className:"product__volume"},t.weight||t.volume," \u0433"),r.a.createElement("div",{className:"add-to-cart"},r.a.createElement("button",{className:"add-to-cart__btn",onClick:function(){a.dispatch(function(e){return Object(p.a)({type:E.ADD_TO_CART},e)}(t))},style:{display:n>0?"none":"block"}},"\u0414\u043e\u0434\u0430\u0442\u0438 ",r.a.createElement("span",{className:"add-to-cart__icon"})),r.a.createElement("div",{className:"quantity-selector",style:{display:n>0?"flex":"none"}},r.a.createElement("button",{className:"quantity-selector__minus",onClick:function(){1!==n?a.dispatch(N(t.ean,n-1)):a.dispatch(T(t.ean))}}),r.a.createElement("div",{className:"quantity-selector__display"},n," \u0448\u0442"),r.a.createElement("button",{className:"quantity-selector__plus",onClick:function(){a.dispatch(N(t.ean,n+1))}}))))}),S=function(e){var t=e.store,a=t.getState(),n=a.products.data,c=a.products.isLoadingData;return r.a.createElement("section",{className:"content"},r.a.createElement("h2",{className:"content__title"},"\u041f\u0435\u043a\u0430\u0440\u043d\u044f"),r.a.createElement("div",{className:"content__products"},c?r.a.createElement("span",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."):v(n)?n.map(function(e){return r.a.createElement(C,{key:e.ean,product:e,store:t})}):r.a.createElement("span",null,"0 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e...")))},b=(a(25),a(26),a(27),function(e){var t=e.product,a=e.store,n=t.img,c=t.title,o=t.price,l=t.weight,s=t.volume,i=t.cartAmount,u=i*o;return r.a.createElement("div",{className:"cart-product"},r.a.createElement("img",{className:"cart-product__image",src:n.s150x150,alt:c}),r.a.createElement("div",{className:"cart-product__details"},r.a.createElement("p",{className:"cart-product__title"},c),r.a.createElement("span",{className:"cart-product__price"},O(o),r.a.createElement("span",{className:"cart-product__curency"}," \u0433\u0440\u043d")),r.a.createElement("span",{className:"cart-product__volume"},l||s," \u0433")),r.a.createElement("div",{className:"quantity-selector quantity-selector--float-cart",style:{display:i>0?"flex":"none"}},r.a.createElement("button",{className:"quantity-selector__minus",onClick:function(){1!==i?a.dispatch(N(t.ean,i-1)):a.dispatch(T(t.ean))}}),r.a.createElement("div",{className:"quantity-selector__display"},i," \u0448\u0442"),r.a.createElement("button",{className:"quantity-selector__plus",onClick:function(){a.dispatch(N(t.ean,i+1))}})),r.a.createElement("p",{className:"cart-product__total-price"},O(u),r.a.createElement("span",{className:"cart-product__total-curency"}," \u0433\u0440\u043d")))}),R=function(e){var t=e.totalPrice,a=e.store,n=a.getState().cart;return r.a.createElement("div",{className:"float-cart"},r.a.createElement("header",{className:"float-cart-header"},r.a.createElement("h2",{className:"float-cart-header__title"},"\u041a\u043e\u0448\u0438\u043a"),r.a.createElement("button",{className:"float-cart-header__close-btn",onClick:function(){document.getElementsByClassName("float-cart")[0].style.display="none"}})),r.a.createElement("div",{className:"float-cart-content"},n.length>0?n.map(function(e){return r.a.createElement(b,{key:e.ean,product:e,store:a})}):""),r.a.createElement("footer",{className:"float-cart-footer"},r.a.createElement("button",{className:"float-cart-footer__order-btn"},"\u0417\u0430\u043c\u043e\u0432\u0438\u0442\u0438"),r.a.createElement("span",{className:"float-cart-footer__total-price"},"\u0412\u0441\u044c\u043e\u0433\u043e: ",O(t))))},D=function(e){var t=e.store,a=t.getState().cart,n=a.map(function(e){return e.cartAmount}).reduce(function(e,t){return e+t},0),c=n*a.map(function(e){return e.price}).reduce(function(e,t){return e+t},0);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"shopping-cart",onClick:function(){document.getElementsByClassName("float-cart")[0].style.display="flex"}},r.a.createElement("div",{className:"shopping-cart__icon"},r.a.createElement("span",{className:"shopping-cart__amount",style:{display:n>0?"block":"none"}},n)),r.a.createElement("p",{className:"shopping-cart__total"},O(c))),r.a.createElement(R,{totalPrice:c,store:t}))},I=function(e){var t=e.store;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page"},r.a.createElement("header",{className:"header"},r.a.createElement("a",{className:"header__logo",href:"/"},"zakaz.ua"),r.a.createElement(D,{store:t})),r.a.createElement("main",{className:"main"},r.a.createElement(h,{store:t}),r.a.createElement(S,{store:t}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(3),k=a(12),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.ADD_TO_CART:return Object(p.a)({},t,{cartAmount:1});case E.CHANGE_AMOUNT:return e.ean!==t.ean?e:Object(p.a)({},e,{cartAmount:t.cartAmount});default:return e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.ADD_TO_CART:return[].concat(Object(k.a)(e),[F({},t)]);case E.REMOVE_FROM_CART:return e.filter(function(e){return e.ean!==t.ean});case E.CHANGE_AMOUNT:return e.map(function(e){return F(e,t)});default:return e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.SET_CATEGORIES:return{data:t.payload};case E.API_START:return t.payload===E.FETCH_CATEGOTIES?Object(p.a)({},e,{isLoadingData:!0}):e;case E.API_END:return t.payload===E.FETCH_CATEGOTIES?Object(p.a)({},e,{isLoadingData:!1}):e;default:return e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.SET_PRODUCTS:return Object(p.a)({},e,{data:t.payload});case E.API_START:return t.payload===E.FETCH_PRODUCTS?Object(p.a)({},e,{isLoadingData:!0}):e;case E.API_END:return t.payload===E.FETCH_PRODUCTS?Object(p.a)({},e,{isLoadingData:!1}):e;default:return e}},M=function(e){return function(t){return function(a){var n=t(a);if(a.type===E.CHANGE_AMOUNT||a.type===E.ADD_TO_CART||a.type===E.REMOVE_FROM_CART)return localStorage.cart=JSON.stringify(e.getState().cart),n}}},U=function(e){return function(t){return function(a){var n;return console.groupCollapsed("dispatching",a.type),console.log("prev state",e.getState()),console.log("action",a),n=t(a),console.log("next state",e.getState()),console.groupEnd(),n}}},H=(a(28),function(e){var t=e.dispatch;return function(e){return function(a){if(e(a),a.type===E.API){var n=a.payload,r=n.url,c=n.onSuccess,o=n.onFailure,l=n.label;l?(t(function(e){return{type:E.API_START,payload:e}}(l)),fetch(r).then(function(e){return e.json()}).then(function(e){return t(c(e))}).then(function(){l&&t(function(e){return{type:E.API_END,payload:e}}(l))}).catch(o)):console.log("payload.label is not set")}}}}),L=function(e){return Object(P.a)(U,M,H)(P.c)(Object(P.b)({cart:G,categories:j,products:w}),e)}({cart:localStorage.cart?JSON.parse(localStorage.cart):[],categories:{isLoadingData:!1},products:{isLoadingData:!1}}),q=function(){return o.a.render(r.a.createElement(I,{store:L}),document.getElementById("root"))};L.subscribe(q),q(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.e0e9d9d5.chunk.js.map