(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[13],{513:function(t,n,e){"use strict";e.r(n);var c={};e.r(c),e.d(c,"common",(function(){return I.a})),e.d(c,"red",(function(){return C.a})),e.d(c,"pink",(function(){return N.a})),e.d(c,"purple",(function(){return T})),e.d(c,"deepPurple",(function(){return S})),e.d(c,"indigo",(function(){return R.a})),e.d(c,"blue",(function(){return E.a})),e.d(c,"lightBlue",(function(){return D})),e.d(c,"cyan",(function(){return z})),e.d(c,"teal",(function(){return M})),e.d(c,"green",(function(){return P.a})),e.d(c,"lightGreen",(function(){return $})),e.d(c,"lime",(function(){return W})),e.d(c,"yellow",(function(){return B})),e.d(c,"amber",(function(){return K})),e.d(c,"orange",(function(){return U.a})),e.d(c,"deepOrange",(function(){return V})),e.d(c,"brown",(function(){return G})),e.d(c,"grey",(function(){return Q.a})),e.d(c,"blueGrey",(function(){return H}));var a,r=e(8),i=e(38),o=e(98),f=e(40),u=e(584),s=e(283),d=e(33),l=e(64),b=e(567),j=e(12),p=e(5),O=function(t){var n=t.to,e=t.children,c=Object(l.a)(t,["to","children"]),a=Object(j.g)().push;return Object(p.jsx)(b.a,Object(r.a)(Object(r.a)({type:"button",variant:"info",onClick:function(t){t.preventDefault(),a(n)}},c),{},{children:e}))},v=e(2),h=e(536),g=e(542),m=e(559),A=e(553),x=e(538),y=function(t){return JSON.parse(window.localStorage.getItem(t)||"")},k=function(t,n,e){try{var c=n instanceof Function?n(e):n;return window.localStorage.setItem(t,JSON.stringify(c)),n}catch(a){return console.warn('Error setting the local storage value for key "'.concat(t,'".'),n,a),n}},w=function(t,n){var e=Object(v.useState)((function(){return function(t,n){try{var e=y(t);return Object(x.a)(e)?k(t,n):e}catch(c){return console.warn('Error getting the local storage value for key "'.concat(t,'". Will try re-setting it.'),c),k(t,n)}}(t,n)})),c=Object(o.a)(e,2),a=c[0],r=c[1];return[a,function(n){try{r(k(t,n,a))}catch(e){console.error('Error setting the state for local storage value for key "'.concat(t,'"'),e)}}]},I=e(93),C=e(133),N=e(132),T={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},S={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea"},R=e(131),E=e(135),D={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},z={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"},M={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5"},P=e(136),$={50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17"},W={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00"},B={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600"},K={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00"},U=e(134),V={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00"},G={50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037"},Q=e(130),H={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64"},L=Object(d.d)(u.a)(a||(a=Object(f.a)(["\n\tflex-direction: column;\n\t& button {\n\t\twidth: 200px;\n\t}\n"]))),q=function(t,n){return{style:{backgroundColor:t[n%4]}}},F=Array.from({length:9},(function(t,n){return"".concat(100*(n+1))})),Y=function(t){var n=w("RAINBOW_COLORS",Object.values(c).map((function(t){return F.map((function(n){return t[n]}))})).flat()),e=Object(o.a)(n,2),a=e[0],r=e[1];return Object(m.a)((function(){r((function(t){return[].concat(Object(i.a)(t.slice(1)),[t[0]])}))}),100,t),a};n.default=function(){var t=w("STOP_COLOR_ROTATION",!1),n=Object(o.a)(t,2),e=n[0],c=n[1],a=w("DONT_SHOW_AGAIN",!1),i=Object(o.a)(a,2),f=i[0],d=i[1],l=Y(f||e);return Object(p.jsxs)(u.a,{children:[Object(p.jsx)(h.a,{spacing:"5"}),Object(p.jsx)(g.a,{size:100,isWalking:!0}),Object(p.jsx)(h.a,{spacing:"5"}),Object(p.jsx)(L,{children:s.a.filter((function(t){return"Home"!==t.label})).map((function(t,n){var e=t.to,c=t.text;return Object(p.jsxs)(v.Fragment,{children:[Object(p.jsx)(O,Object(r.a)(Object(r.a)({to:e},q(l,n)),{},{children:c})),Object(p.jsx)(h.a,{})]},e)}))}),!f&&Object(p.jsx)(A.a,{text:e?"Nvm, let the colors shine!":"Please stop!",variant:"outlined",onClick:function(){c((function(t){return!t}))}}),e&&!f&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h.a,{}),Object(p.jsx)(A.a,{text:"No, just get rid of this",variant:"outlined",onClick:function(){d(!0)}})]})]})}},536:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var c,a=e(40),r=e(33),i=e(51),o=e(5),f=r.d.span(c||(c=Object(a.a)(["\n\tdisplay: block;\n\twidth: 100%;\n\t","\n"])),(function(t){var n=t.$direction,e=t.$spacing;return"\n\t\tmargin-".concat(n,": ").concat(i.b.spacing(e),"px;\n\t")})),u=function(t){var n=t.direction,e=void 0===n?"bottom":n,c=t.spacing,a=void 0===c?1:c;return Object(o.jsx)(f,{$direction:e,$spacing:"string"===typeof a&&parseInt(a,10)||a})}},537:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return f}));var c,a,r=e(40),i=e(33),o=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(i.e)(c||(c=Object(r.a)(["\n\t0% { transform: scale(0, 0); }\n\t25% { transform: scale(0.9, 1.1); }\n\t50% { transform: scale(1.1, 0.9); }\n\t75% { transform: scale(0.95, 1.05); }\n\t100% { transform: scale(1, 1); "," }\n"])),t?"opacity: 1;":"")},f=function(t,n){return Object(i.e)(a||(a=Object(r.a)(["\n\t0%, 100% { \n\t\ttransform: translateY(0px); \n\t\tbox-shadow: 0 10px 10px #000000;\n\t}\n\t50% {\n\t\ttransform: translateY(-10px);\n\t\tbox-shadow: 0 20px ","px ",";\n\t}\n"])),Math.ceil(t/6)+10,n)}},538:function(t,n,e){"use strict";e.d(n,"c",(function(){return c})),e.d(n,"d",(function(){return a})),e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i}));var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(n){setTimeout(n,t)}))},a=function(t){return function(n){n.currentTarget.blur(),t(n)}},r=function(t){return null===t||void 0===t},i=function(t,n){return Object.keys(t)[Object.values(t).indexOf(n)]}},541:function(t,n,e){"use strict";var c,a,r=e(40),i=e(537),o=e(33),f=o.d.div(c||(c=Object(r.a)(["\n\tposition: absolute;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\topacity: 0;\n\tsvg {\n\t\theight: 100% !important;\n\t\twidth: 100% !important;\n\t\tmax-width: 70%;\n\t\tmax-height: 80%;\n\t}\n\t","\n"])),(function(t){var n=t.$size,e=t.$animationDelay,c=t.$top,f=t.$left;return Object(o.c)(a||(a=Object(r.a)(["\n\t\ttop: ","px;\n\t\tleft: ","px;\n\t\twidth: ","px;\n\t\theight: ","px;\n\t\tanimation: "," var(--block-animation-duration)\n\t\t\t"," ease-out forwards;\n\t"])),c,f,n,n,Object(i.a)(!0),e||"")}));n.a=f},542:function(t,n,e){"use strict";e.d(n,"g",(function(){return b})),e.d(n,"b",(function(){return j})),e.d(n,"f",(function(){return p})),e.d(n,"c",(function(){return O})),e.d(n,"i",(function(){return v})),e.d(n,"j",(function(){return h})),e.d(n,"h",(function(){return g})),e.d(n,"d",(function(){return m})),e.d(n,"a",(function(){return x})),e.d(n,"k",(function(){return k})),e.d(n,"e",(function(){return y}));var c,a=e(64),r=e(40),i=e(8),o=e(535),f=e(534),u=(e(545),e(548)),s=e(33),d=e(554),l=e(5),b=function(t){return Object(l.jsx)(f.a,Object(i.a)({icon:o.e},t))},j=function(t){return Object(l.jsx)(f.a,Object(i.a)({icon:o.c},t))},p=function(t){return Object(l.jsx)(f.a,Object(i.a)({icon:o.m},t))},O=function(t){return Object(l.jsx)(f.a,Object(i.a)({icon:o.d},t))},v=function(t){return Object(l.jsx)(f.a,Object(i.a)({icon:o.l},t))},h=function(t){return Object(l.jsx)(f.a,Object(i.a)({icon:o.n},t))},g=function(t){return Object(l.jsx)(f.a,Object(i.a)({icon:o.j},t))},m=function(t){return Object(l.jsx)(f.a,Object(i.a)({icon:o.f},t))},A=s.d.div(c||(c=Object(r.a)(["\n\tposition: relative;\n\tpointer-events: none;\n\tmin-width: 50px;\n\n\t","\n\n\t","\n"])),(function(t){return t.$showId?"":"\n\t\t\t.name {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t"}),(function(t){var n=t.$size;return"\n\t\t\twidth: ".concat(n,"px;\n\t\t\theight: ").concat(n,"px;\n\n\t\t\t> div {\n\t\t\t\t/* Gotta override as char is taking coordinates by default */\n\t\t\t\ttop: ").concat(n/2,"px !important;\n\t\t\t\tleft: calc(50% - ").concat(n,"px / 2) !important;\n\t\t\t}\n\t\t")})),x=function(t){var n=t.size,e=t.showId,c=void 0!==e&&e,r=Object(a.a)(t,["size","showId"]);return Object(l.jsx)(A,{$size:n,$showId:c,children:Object(l.jsx)(u.a,Object(i.a)({coordinates:{top:0,left:0},id:"P1",name:"Bomba-man",size:n},r))})},y={fontSize:40,width:50},k=Object(d.a)(y)},545:function(t,n,e){"use strict";var c=e(8),a=e(534),r=e(535),i=e(51),o=e(2),f=e(541),u=e(5),s=function(t){return Object(u.jsx)(a.a,Object(c.a)({icon:r.b},t))};n.a=function(t){var n=t.id,e=t.size,c=t.explodingDuration,a=t.coordinates,r=a.top,d=a.left,l=t.onDeathAnimationComplete;return Object(o.useEffect)((function(){setTimeout((function(){null===l||void 0===l||l(n)}),1e3*c+1e3)}),[]),Object(u.jsx)(f.a,{$top:r,$left:d,$size:e,$animationDelay:"".concat(c,"s"),children:Object(u.jsx)(s,{color:i.b.palette.color.default})})}},546:function(t,n,e){},547:function(t,n,e){"use strict";var c,a=e(9),r=e(8),i=e(534),o=e(535),f=e(4),u=e(51),s=e(5),d=(c={},Object(a.a)(c,f.j.Life,{color:u.b.palette.color.success,icon:function(t){return Object(s.jsx)(i.a,Object(r.a)({icon:o.g},t))}}),Object(a.a)(c,f.j.BombCount,{color:u.b.palette.color.error,icon:function(t){return Object(s.jsx)(i.a,Object(r.a)({icon:o.a},t))}}),Object(a.a)(c,f.j.BombSize,{color:u.b.palette.color.warning,icon:function(t){return Object(s.jsx)(i.a,Object(r.a)({icon:o.i},t))}}),Object(a.a)(c,f.j.MovementSpeed,{color:u.b.palette.color.info,icon:function(t){return Object(s.jsx)(i.a,Object(r.a)({icon:o.k},t))}}),c);n.a=d},548:function(t,n,e){"use strict";var c,a,r=e(8),i=e(98),o=e(64),f=e(40),u=e(4),s=e(2),d=e(11),l=e(33),b=e(51),j=(e(546),e(5)),p=l.d.div(c||(c=Object(f.a)(["\n\t","\n"])),(function(t){var n=t.$size,e=n/32,c=32*e,r=4*c,i=-1*e*32,o=n/4*-1,u=Math.min(-15,2.5*o),s=Math.ceil(c/6),d=Math.ceil(.8*c),j="\n\t\t\twidth: ".concat(c,"px;\n\t\t\theight: ").concat(c,"px;\n\t\t"),p="\n\t\t\twidth: ".concat(r,"px;\n\t\t\theight: ").concat(r,"px;\n\t\t");return Object(l.c)(a||(a=Object(f.a)(["\n\t\t\tposition: absolute;\n\t\t\tz-index: 9999;\n\t\t\t",";\n\t\t\ttransition-duration: 450ms;\n\n\t\t\t&#P1 .name {\n\t\t\t\tbackground-color: ",";\n\t\t\t}\n\t\t\t&#P2 .name {\n\t\t\t\tbackground-color: ",";\n\t\t\t}\n\t\t\t&#P3 .name {\n\t\t\t\tbackground-color: ",";\n\t\t\t}\n\t\t\t&#P4 .name {\n\t\t\t\tbackground-color: ",";\n\t\t\t}\n\n\t\t\t.character {\n\t\t\t\ttop: ","px;\n\t\t\t\ttransform: translate(","px);\n\n\t\t\t\t",";\n\t\t\t\toverflow: hidden;\n\t\t\t\tposition: relative;\n\t\t\t\t/* MOVEMENT TRANSITION */\n\t\t\t\ttransition-duration: 400ms;\n\n\t\t\t\t& .name {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft: 15px;\n\t\t\t\t\tright: 15px;\n\t\t\t\t\tfont-size: ","px;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tborder: 1px dashed white;\n\t\t\t\t\tborder-radius: 9999px;\n\t\t\t\t\topacity: 1;\n\t\t\t\t\tmax-width: ","px;\n\t\t\t\t\tmargin: auto;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\n\t\t\t\t& .shadow {\n\t\t\t\t\t",";\n\t\t\t\t\topacity: 0.75;\n\t\t\t\t}\n\n\t\t\t\t& .spritesheet {\n\t\t\t\t\t",";\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t}\n\n\t\t\t\t/* DIRECTION */\n\t\t\t\t&[data-facing='Right'] .spritesheet {\n\t\t\t\t\ttop: ","px;\n\t\t\t\t}\n\t\t\t\t&[data-facing='Up'] .spritesheet {\n\t\t\t\t\ttop: ","px;\n\t\t\t\t}\n\t\t\t\t&[data-facing='Left'] .spritesheet {\n\t\t\t\t\ttop: ","px;\n\t\t\t\t}\n\n\t\t\t\t&[data-walking='true'] {\n\t\t\t\t\t/* MOVEMENT ANIMATION */\n\t\t\t\t\t.spritesheet {\n\t\t\t\t\t\tanimation: walkAnimation 0.6s steps(4) infinite;\n\t\t\t\t\t}\n\n\t\t\t\t\t/* SHADOW ANIMATION */\n\t\t\t\t\t.shadow {\n\t\t\t\t\t\tanimation: shadowAnimation 0.3s infinite;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t/* HIGHLIGHT/DAMAGE ANIMATION */\n\t\t\t\t&[data-highlight='true'] .spritesheet {\n\t\t\t\t\tanimation: opacityAnimation 0.6s steps(4) infinite;\n\t\t\t\t}\n\t\t\t}\n\t\t"])),j,b.b.palette.color.warning,b.b.palette.color.info,b.b.palette.color.success,b.b.palette.color.error,u,o,j,s,d,j,p,1*i,2*i,3*i)})),O=function(t){var n=t.id,e=t.shouldBindEvent,c=t.keyboardConfig,a=t.onPlayerIsWalking,r=t.setDirection,i=t.setIsWalking,o=Object(s.useRef)((new Date).getTime());Object(s.useEffect)((function(){var t=function(t){if(e){var f=function(t){return c?Object(d.j)(t.code,c):null}(t);if(!f)return null===a||void 0===a||a(!1,n),void i(!1);o.current=(new Date).getTime(),i(!0),function(t){r(t)}(f)}},f=function(){e&&setTimeout((function(){var t=(new Date).getTime()-200;o.current>=t||(i(!1),null===a||void 0===a||a(!1,n))}),200)};return e&&(document.addEventListener("keydown",t),document.addEventListener("keyup",f)),function(){document.removeEventListener("keydown",t),document.removeEventListener("keyup",f)}}),[n,c,a,r,i,e])};n.a=function(t){var n=t.id,e=t.currentOnlinePlayerId,c=t.name,a=t.coordinates,f=a.top,d=a.left,l=t.style,b=t.keyboardConfig,v=t.highlight,h=t.size,g=t.onPlayerIsWalking,m=t.isWalking,A=void 0!==m&&m,x=t.direction,y=void 0===x?u.b.DOWN:x,k=t.isNPC,w=void 0!==k&&k,I=Object(o.a)(t,["id","currentOnlinePlayerId","name","coordinates","style","keyboardConfig","highlight","size","onPlayerIsWalking","isWalking","direction","isNPC"]),C=Object(s.useState)(y),N=Object(i.a)(C,2),T=N[0],S=N[1],R=Object(s.useState)(A),E=Object(i.a)(R,2),D=E[0],z=E[1],M=!w&&(!e||n===e);O({id:n,currentOnlinePlayerId:e,keyboardConfig:b,shouldBindEvent:M,onPlayerIsWalking:g,setDirection:S,setIsWalking:z});var P=A,$=y;return M&&(P=D,$=T),Object(j.jsx)(p,Object(r.a)(Object(r.a)({id:n,style:Object(r.a)(Object(r.a)({},l),{},{top:f,left:d}),className:"character-wrapper"},I),{},{$size:2*h,children:Object(j.jsxs)("div",{className:"character","data-facing":$,"data-walking":P.toString(),"data-highlight":v,children:[Object(j.jsx)("div",{className:"name",children:c}),Object(j.jsx)("img",{className:"shadow pixel-art",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAWUlEQVRYR+3XsQkAIAxEUe2cRXADx3cDwVksJYX970T41sE7Xqrk9Pjlx/nJAgoooIACCiiggAIKKKDAXwKt9k0uqblGIXMxgwVo+A2mJSyABYKWroHyx58Hv0cUIWfm8TkAAAAASUVORK5CYII=",alt:"sprite skin"}),Object(j.jsx)("img",{className:"spritesheet pixel-art",src:"data:image/png;base64,UklGRuYBAABXRUJQVlA4TNkBAAAvf8AfEDegkI0kaB1Wc63vv4M4DQUByDA6SKk4ex2mqG0bqCCKrfwp7N5em/8A4P9XnTtjLpKQBLi1tbdt/gbqnTCAN/D5RCygH6yhQ4C1GfefQQG/fjA4FhH9Z9i2bZjkAbZdhsAn0N9Qh3Rps6Tr7enSZ9lZ1PV+6bPsLO4q4Fj1ORugiqJzAdemHQCwqMszM8vOoq4wzXNrso4rVOW6YeXnwAFDfg66i/MBl3QOm5+DDrAmX0BjNK5QAfYsOYVzJHCjcr1VjGTyTmZhrj2PUeUKvuZIeWc7iQ6TdK4URIcJSXIQyS75V0Q70f+F9g48tFcs4Nq6A4Vd69w7RGdRF4UBhmRnWZd1wlhZB3tQuabj0JFQXb4+n2pMKlfoeHgRzhW9cK7ZcyKVa2Kehcn3SWRURueqkpdcSWIEE0jv+ne4d0DeKxZw7a5jV/aO4IDByDlGSZe/VvYc1dUpu+RzNrlqa+ZxyrtOPESNyzs+5s9FtbRGUT2mUeUKdapHZe4wkzZ3oH+muYNvAMjO8q5tO7CMS7MHeJRxrSt3gHsgVzBlXYOUG3QYOtK4yLpTq8oVqMX4dFDlEh+OrVHlConjTLpcgrklARpJcDYpKl0xNco1wgRTwLUPTQA=",alt:"sprite skin"})]})}))}},549:function(t,n,e){"use strict";var c,a;e.d(n,"a",(function(){return c})),function(t){t.Text="Text",t.Password="Password",t.Checkbox="Checkbox",t.ColorPicker="ColorPicker",t.Slider="Slider",t.Rating="Rating"}(c||(c={})),a||(a={})},553:function(t,n,e){"use strict";e.d(n,"a",(function(){return w}));var c,a,r=e(8),i=e(7),o=e.n(i),f=e(16),u=e(98),s=e(64),d=e(2),l=e(657),b=e(658),j=e(670),p=e(203),O=e(199),v=e(40),h=e(656),g=e(33),m=Object(g.d)(h.a)(c||(c=Object(v.a)(["\n\t","\n"])),(function(t){var n=t.theme,e=t.$bg;if(!e)return"";var c=n.palette[e];return"\n\t\t\t&.MuiIconButton-root {\n\t\t\t\t\tbackground-color: ".concat(c.main,";\n\t\t\t\t\tcolor: ").concat(n.palette.getContrastText(c.main),";\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tbackground-color: ").concat(c.dark,";\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t")})),A={default:24,small:20,large:35},x={default:2,small:2.1,large:1.7},y=Object(g.d)(O.default)(a||(a=Object(v.a)(["\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\t","\n"])),(function(t){var n=t.theme,e=t.$iconSize;if(!e||"inherit"===e)return"";var c=n.typography.pxToRem((A[e]||A.default)*(x[e]||x.default));return"\n\t\t\twidth: ".concat(c," !important;\n\t\t\theight: ").concat(c," !important;\n\t\t")})),k=e(5),w=function(t){var n=t.tooltip,e=t.interactive,c=void 0!==e&&e,a=t.onClick,i=t.bg,v=t.icon,h=t.disabled,g=void 0!==h&&h,A=t.type,x=void 0===A?"button":A,w=t.preventDefaultEvent,I=void 0!==w&&w,C=t.displayTooltipOnClickForMobile,N=void 0===C||C,T=t.loading,S=void 0!==T&&T,R=t.text,E=t.variant,D=void 0===E?"contained":E,z=t.iconSize,M=void 0===z?"default":z,P=Object(s.a)(t,["tooltip","interactive","onClick","bg","icon","disabled","type","preventDefaultEvent","displayTooltipOnClickForMobile","loading","text","variant","iconSize"]);if("submit"!==x&&!a)throw new Error('Either provide an onClick handler or set the type="submit"');if(!R&&!n)throw new Error("Icon buttons require a tooltip text!");var $=Object(d.useState)(!1),W=Object(u.a)($,2),B=W[0],K=W[1],U=Object(l.a)((function(t){return t.breakpoints.down("sm")})),V=function(){var t=Object(f.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:I&&(n.preventDefault(),n.stopPropagation()),N&&U&&(K(!0),setTimeout((function(){K(!1)}),1e3)),null===a||void 0===a||a(n);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),G=R?Object(k.jsx)(b.a,Object(r.a)(Object(r.a)(Object(r.a)({variant:D,color:i},v&&{startIcon:Object(p.a)(v)}),{},{onClick:V,disabled:g||S,endIcon:S&&Object(k.jsx)(O.default,{})||null,type:x},P),{},{children:R})):Object(k.jsxs)(m,Object(r.a)(Object(r.a)({onClick:V,disabled:g||S,type:x,$bg:i},P),{},{children:[S&&Object(k.jsx)(y,{$iconSize:M}),v&&Object(d.cloneElement)(Object(p.a)(v),{fontSize:M})]})),Q=n||R||"";return g&&(G=Object(k.jsx)("span",{className:"tooltip-wrapper",children:G}),Q+=" (DISABLED)"),Object(k.jsx)(j.a,{title:Q,interactive:c,enterTouchDelay:0,disableFocusListener:!0,open:B,onOpen:function(){return K(!0)},onClose:function(){return K(!1)},children:G})}},554:function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return b}));var c=e(38),a=e(8),r=e(4),i=e(547),o=e(538),f=e(549),u=e(555),s=e(542),d=e(5),l=function(t){return Object.values(r.j).reduce((function(n,e){var c=i.a[e],a=c.icon,r=c.color;return n[e]={icon:Object(d.jsx)(a,{style:t}),color:r},n}),{})},b=function(t,n,e){return Object.values(r.j).map((function(i){var d="".concat(Object(o.b)(r.j,i));return Object(a.a)(Object(a.a)({type:f.a.Rating,label:"".concat(d," (number)"),name:"".concat(t,".").concat(i),max:n},s.k[i]),e&&i===r.j.MovementSpeed&&{label:"".concat(d," (action interval, milliseconds)"),type:f.a.Slider,step:null,min:Math.min.apply(Math,Object(c.a)(e)),max:Math.max.apply(Math,Object(c.a)(e)),marks:Object(u.a)(e)})}))}},555:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var c=e(8);function a(t,n){if(Array.isArray(t))return t.map((function(t){return{value:t,label:t}}));var e=n-t;return Array(e+1).fill(0).map((function(n,a){var r=t+a;return Object(c.a)({value:r},(0===a||a===e)&&{label:r})}))}},559:function(t,n,e){"use strict";var c=e(2);n.a=function(t,n,e){var a=Object(c.useRef)(),r=Object(c.useRef)();Object(c.useEffect)((function(){a.current=t}),[t]);var i=Object(c.useCallback)((function(){r.current&&clearInterval(r.current)}),[]),o=Object(c.useCallback)((function(){var t;null===(t=a.current)||void 0===t||t.call(a)}),[]);return Object(c.useEffect)((function(){return e||(r.current=setInterval(o,n)),function(){return i()}}),[n,e,i,o]),Object(c.useEffect)((function(){e&&i()}),[e,i]),i}},567:function(t,n,e){"use strict";e.d(n,"a",(function(){return b}));var c,a=e(8),r=e(64),i=e(40),o=e(2),f=e(33),u=e(51),s=e(5),d=f.d.button(c||(c=Object(i.a)(["\n\tbackground-color: ",";\n\t/* IGNORE SIZE FOR NOW */\n\tborder-radius: ",";\n\tpadding: ",";\n\tcursor: pointer;\n\ttransition: background-color ",";\n\n\t&:hover {\n\t\tbackground-color: ",";\n\t}\n"])),(function(t){var n=t.$variant;return u.b.palette.color[n]}),u.b.shape.borderRadius,u.b.shape.padding,u.b.transition.hover,(function(t){var n=t.$variant;return u.b.palette.color["".concat(n,"-lighter")]})),l=Object(o.forwardRef)((function(t,n){var e=t.variant,c=void 0===e?"default":e,i=t.size,o=void 0===i?"medium":i,f=t.children,u=Object(r.a)(t,["variant","size","children"]);return Object(s.jsx)(d,Object(a.a)(Object(a.a)({$variant:c,$size:o,ref:n},u),{},{children:f}))})),b=Object(o.memo)(l)},584:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var c,a=e(40),r=e(33).d.div(c||(c=Object(a.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-wrap: wrap;\n"])))}}]);
//# sourceMappingURL=13.a44435b1.chunk.js.map