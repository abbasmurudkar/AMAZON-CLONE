(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{44:function(e,n,t){},54:function(e,n,t){"use strict";t.r(n);var i,c=t(0),a=t.n(c),r=t(32),o=t.n(r),s=t(16),d=t(5),l=(t(44),t(11)),h=t(6),p=t(35),j=t.n(p),x=t(36),m=t.n(x),b=t(34),g=t.n(b),u=t(1),_=Object(c.createContext)(),O=function(e){var n=e.reducer,t=e.initialState,i=e.children;return Object(u.jsx)(_.Provider,{value:Object(c.useReducer)(n,t),children:i})},f=function(){return Object(c.useContext)(_)},v=t(12);var k,N=function(){var e=f(),n=Object(h.a)(e,2),t=n[0].cart;return n[1],Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(w,{children:[Object(u.jsx)(s.b,{to:"/",children:Object(u.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"Loading"})}),Object(u.jsx)("div",{children:Object(u.jsx)(g.a,{className:"header__location"})}),Object(u.jsxs)("div",{className:"header__option",children:[Object(u.jsx)("span",{className:"header__optionlineOne",children:"Hello "}),Object(u.jsx)("span",{className:"header__optionlineTwo",children:Object(u.jsx)("strong",{children:"Select your address"})})]}),Object(u.jsxs)("div",{className:"header__search",children:[Object(u.jsx)("input",{type:"text",className:"header__searchInput"}),Object(u.jsx)("button",{className:"header__searchIcon",children:Object(u.jsx)(j.a,{})})]}),Object(u.jsxs)("div",{className:"header__nav",children:[Object(u.jsxs)("div",{className:"header__option",children:[Object(u.jsx)("span",{className:"header__optionlineOne",children:"Hello Guest"}),Object(u.jsx)("span",{className:"header__optionlineTwo",children:"Sign In"})]}),Object(u.jsxs)("div",{className:"header__option",children:[Object(u.jsx)("span",{className:"header__optionlineOne",children:"Returns"}),Object(u.jsx)("span",{className:"header__optionlineTwo",children:"& Orders"})]}),Object(u.jsxs)("div",{className:"header__option",children:[Object(u.jsx)("span",{className:"header__optionlineOne",children:"Your"}),Object(u.jsx)("span",{className:"header__optionlineTwo",children:"Prime"})]})]}),Object(u.jsxs)(s.b,{to:"/checkout",className:"header__cart",children:[Object(u.jsx)(m.a,{}),Object(u.jsx)("span",{className:"header__optionlineTwo header__cartcount",children:t.length})]})]})})},w=v.a.div(i||(i=Object(l.a)(["\n/* NAVBAR */\n    background-color: rgb(15, 17, 17);\n    display: flex;\n    align-items: center;\n    height: 60px;\n    padding: 5px 10px;\n    position: sticky;\n    top: 0;\n    z-index: 100;   \n\n/* LOGO CSS */\n.header__logo{\n    width: 100px;\n   object-fit: contain;  /*this tag is use to have perfect fit of picture so the pixel of picture will remain same and have better quality*/\n   margin: 8px 20px;\n   margin-top: 18px;\n   \n}\n\n/* SEARCH BAR CSS */\n.header__searchInput{\n padding: 10px;\n height: 14px;\n border: none;\n width: 100%;\n\n}\n.header__searchIcon{\n    background-color: #febd69;\n    height: 36px;\n    padding: 4px;\n    cursor: pointer;\n    border: none;\n    outline: none;\n    padding-left: 6px;\n    padding-right: 6px;\n}\n.header__search{\n    display: flex;\n    flex: 1;\n    align-items: center;\n}\n\n\n.header__nav{\n    display: flex;\n    justify-content: space-evenly;\n\n}\n.header__option{\n    display: flex;\n    flex-direction: column;\n    color: white;\n    margin-left: 10px;\n    margin-right:10px;\n}\n\n.header__optionlineOne{\n    font-size: 12px;\n    cursor: pointer;\n}\n.header__optionlineTwo{\n    font-size: 15px;\n    font-weight: 700;\n    cursor: pointer;\n}\n.header__cart{\n    color: white;\n    display: flex;\n    align-items: center;\n}\n\n.header__cartcount{\n    margin-left: 5px;\n    margin-right:5px;\n}\n.header__optionlineOne:hover{\n    text-decoration: underline;\n}\n.header__optionlineTwo:hover{\n    text-decoration: underline;\n}\n.header__location{\n    color: white;\n    margin-right: -10px; \n    height: 22px;\n}\n"])));var y,S=function(e){e.id;var n=e.title,t=e.price,i=e.image;return Object(u.jsxs)(C,{className:"checkoutProduct",children:[Object(u.jsx)("img",{className:"checkoutProductImage",src:i,alt:"Loading"}),Object(u.jsxs)("div",{className:"checkoutProduct--Info",children:[Object(u.jsx)("p",{className:"checkoutProduct--title",children:n}),Object(u.jsxs)("p",{className:"checkoutProduct--price",children:[Object(u.jsx)("bold",{children:"\u20b9"}),Object(u.jsx)("strong",{children:t})]}),Object(u.jsx)("button",{children:"Remove From Cart"})]})]})},C=v.a.div(k||(k=Object(l.a)(["\ndisplay: flex;\npadding: 20px 7px;\nborder-bottom: 2px solid #EAEDED;\n\n.checkoutProduct--Info{\n    padding-left: 20px;\n}\n.checkoutProduct--Info button{\n    background-color: #F7CA00 ;\n    color: black;\n    border: 1px solid;\n    padding: 8px 50px;\n    border-color: white;\n    margin-top: 10px;\n    cursor: pointer;\n    border-radius: 24px;\n}\n.checkoutProductImage{\n    object-fit: contain;\n    width: 180px;\n    height: 180px;\n}\n.checkoutProduct--title{\n    font-size: 20px;\n    font-weight: 700;\n}\n"])));var I,z=function(){var e=f(),n=Object(h.a)(e,2),t=n[0].cart;return n[1],Object(u.jsxs)(A,{children:[Object(u.jsxs)("p",{children:[" Sub Total (",t.length," Item): ",Object(u.jsx)("strong",{children:"0 "})," "]}),Object(u.jsxs)("small",{className:"subtotal__gift",children:[Object(u.jsx)("input",{type:"checkbox"})," This order contains a gift"]}),Object(u.jsx)("button",{children:" Proceed to Buy "})]})},A=v.a.div(y||(y=Object(l.a)(["\n    width: 300px;\n    height: 100px;\n    padding: 20px;\n    background-color:#f3f3f3 ;\n    border: 1px solid #dddddd;\n    border-radius: 3px;\n    margin: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n.subtotal__gift{\n    display: flex;\n    align-items: center;\n}\n.subtotal__gift input{\n    margin-right: 5px;\n}\n button{\n    background-color: #f7CA00;\n    width: 100%;\n    height: 30px;\n    border: 0px solid;\n    border-color: #9b8212;\n    color: black;\n    border-radius: 5px;\n    margin-top: 10px;\n    cursor: pointer;\n    &:hover{\n        background-color: #f1c400;\n    }\n}\n"])));var P,L=function(){var e=f(),n=Object(h.a)(e,2),t=n[0].cart;return n[1],Object(u.jsxs)(T,{children:[Object(u.jsxs)("div",{className:"checkout__left",children:[Object(u.jsx)("img",{className:"checkout__adv",src:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png",alt:"adv"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"checkout__title",children:"Your Shopping Details"}),t.map((function(e){return Object(u.jsx)(S,{image:e.image,id:e.id,price:e.price,title:e.title})}))]})]}),Object(u.jsx)("div",{className:"checkout__right",children:Object(u.jsx)(z,{})})]})},T=v.a.div(I||(I=Object(l.a)(["\n    display: flex;\n    background-color: #EAEDED;\n    height: max-content;\n    padding: 20px;\n\n\n.checkout__left{\n    background-color: white;\n}\n.checkout__title{\n    border-bottom: 1px solid black;\n    padding: 10px;\n}\n.checkout__adv{\n    width: 100% ;\n    margin-bottom: 10px;\n}\n.checkout__right{\n    background-color: #EAEDED;\n}\n"])));var E,D=function(e){var n=e.id,t=e.title,i=e.price,c=e.image,a=f(),r=Object(h.a)(a,2),o=(r[0].cart,r[1]);return Object(u.jsxs)(F,{children:[Object(u.jsxs)("div",{className:"product--info",children:[Object(u.jsx)("p",{children:t}),Object(u.jsxs)("p",{className:"product--price",children:[Object(u.jsx)("bold",{children:"\u20b9"}),Object(u.jsx)("strong",{children:i})]}),Object(u.jsx)("img",{className:"product--image",src:c,alt:""})]}),Object(u.jsx)("button",{className:"product--button",onClick:function(){o({type:"ADD_TO_CART",item:{id:n,title:t,price:i,image:c}})},children:"Add to Cart"})]})},F=v.a.div(P||(P=Object(l.a)(["\n\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    z-index: 1;\n    align-items: center;\n    justify-content: flex-end;\n    margin: 10px;\n    padding: 20px;\n    width: 100%;\n    max-height: 400px;\n    min-width: 100px;\n\n.product--image{\n    max-height: 275px;\n    width: 100%;\n    object-fit: contain;\n    margin-bottom: 15px;\n}\n.product--info{\n    height: 450px;\n    width: 100%;\n    object-fit: contain;\n    margin-bottom: 15px;\n}\n\n.product--price{\n    margin-top: 5px;\n}\n\n.product--button{\n    background-color: #F7CA00 ;\n    color: black;\n    border: 1px solid;\n    border-radius: 24px;\n    padding: 8px 50px;\n    border-color: white;\n    margin-top: 10px;\n    cursor: pointer;\n}\n\n"])));var R=function(){return Object(u.jsx)(B,{children:Object(u.jsxs)("div",{className:"home--container",children:[Object(u.jsx)("img",{className:"home--image",src:"https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg",alt:"loading"}),Object(u.jsxs)("div",{className:"home--row",children:[Object(u.jsx)(D,{id:"01",title:"See U in C",price:4450,image:"https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"}),Object(u.jsx)(D,{id:"02",title:"Realme Watch Classic Band",price:4900,image:"https://images-eu.ssl-images-amazon.com/images/I/41nE84aLWVL._SX300_SY300_QL70_FMwebp_.jpg"}),Object(u.jsx)(D,{id:"03",title:"Apple iPhone 13 Mini (256GB)",price:79900,image:"https://m.media-amazon.com/images/I/61KeIxmldLL._AC_UY218_.jpg"})]}),Object(u.jsxs)("div",{className:"home--row",children:[Object(u.jsx)(D,{id:"04",title:"ASUS ROG Strix G17 (2021) 17.3-inch",price:4e4,image:"https://m.media-amazon.com/images/I/81Vr3jzftaL._AC_UY218_.jpg"}),Object(u.jsx)(D,{id:"05",title:"Victorinox Fieldforce",price:29700,image:"https://m.media-amazon.com/images/I/81LnZ7jN7pL._AC_UL320_.jpg"})]}),Object(u.jsx)("div",{className:"home--row",children:Object(u.jsx)(D,{id:"06",title:"OnePlus 80 cm (32 inch) ",price:79900,image:"https://m.media-amazon.com/images/I/71vZypjNkPS._AC_UY218_.jpg"})})]})})},B=v.a.div(E||(E=Object(l.a)(["\n.home{\n    display: flex;\n    justify-content: center;\n    max-width: 1500px;\n    margin-left: auto;\n    margin-right: auto;\n}\n.home--container{\n    height: 500px;\n    width: 100%;\n}\n\n.home--row{\n    display: flex;\n    z-index: 1;\n    margin-left: 5px;\n    margin-right: 5px;\n}\n.home--image{\n    width: 100%;\n    object-fit: contain;\n    z-index: -1;\n    margin-bottom: -200px;\n    mask-image: linear-gradient(to bottom, rgba(0,0,0,1),rgba(0,0,0,0)); //linear gradient for image from bottom\n}\n"])));var G=function(){return Object(u.jsxs)(d.c,{children:[Object(u.jsxs)(d.a,{path:"/checkout",children:[Object(u.jsx)(N,{}),Object(u.jsx)(L,{})]}),Object(u.jsxs)(d.a,{path:"/",children:[Object(u.jsx)(N,{}),Object(u.jsx)(R,{})]})]})},U=t(13),Y=t(29),M=function(e,n){switch(console.log(n),n.type){case"ADD_TO_CART":return Object(Y.a)(Object(Y.a)({},e),{},{cart:[].concat(Object(U.a)(e.cart),[n.item])});default:return e}},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,61)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),i(e),c(e),a(e),r(e)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{initialState:{cart:[]},reducer:M,children:Object(u.jsx)(s.a,{children:Object(u.jsx)(G,{})})})}),document.getElementById("root")),V()}},[[54,1,2]]]);
//# sourceMappingURL=main.ccd28e55.chunk.js.map