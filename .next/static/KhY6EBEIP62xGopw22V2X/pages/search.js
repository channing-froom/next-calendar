(window.webpackJsonp=window.webpackJsonp||[]).push([["54ce"],{"19J2":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){var e=n("eOhz");return{page:e.default||e}}])},eOhz:function(e,t,n){"use strict";n.r(t);var a=n("zrwo"),r=n("ln6h"),i=n.n(r),o=n("O40h"),s=n("0iUn"),c=n("sLSF"),l=n("MI3g"),d=n("a7VT"),u=n("AT/M"),m=n("Tit0"),p=n("vYYK"),f=n("q1tI"),y=n.n(f),b=n("m/Pd"),v=n.n(b),g=n("Ji2X"),h=n("ofer"),E=n("mAVX"),w=n("eD//"),x=n("pVnL"),O=n.n(x),j=n("QILm"),k=n.n(j),C=(n("17x9"),n("iuhU")),T=n("H2TA"),N=n("VD++"),D=n("OMPe"),I=n("MquD"),P=n("i8i4"),S=n.n(P),M=(n("2W6z"),"undefined"==typeof window?y.a.useEffect:y.a.useLayoutEffect),V=y.a.forwardRef(function(e,t){var n=e.alignItems,a=void 0===n?"center":n,r=e.autoFocus,i=void 0!==r&&r,o=e.button,s=void 0!==o&&o,c=e.children,l=e.classes,d=e.className,u=e.component,m=e.ContainerComponent,p=void 0===m?"li":m,f=e.ContainerProps,b=(f=void 0===f?{}:f).className,v=k()(f,["className"]),g=e.dense,h=e.disabled,E=void 0!==h&&h,w=e.disableGutters,x=void 0!==w&&w,j=e.divider,T=void 0!==j&&j,P=e.focusVisibleClassName,V=e.selected,L=void 0!==V&&V,R=k()(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),A=y.a.useContext(I.a),Y={dense:g||A.dense||!1,alignItems:a},X=y.a.useRef(null);M(function(){i&&X.current&&X.current.focus()},[i]);var z=y.a.Children.toArray(c),B=z.length&&Object(D.a)(z[z.length-1],["ListItemSecondaryAction"]),W=y.a.useCallback(function(e){X.current=S.a.findDOMNode(e)},[]),F=Object(D.c)(W,t),_=O()({className:Object(C.a)(l.root,d,Y.dense&&l.dense,!x&&l.gutters,T&&l.divider,E&&l.disabled,s&&l.button,"center"!==a&&l.alignItemsFlexStart,B&&l.secondaryAction,L&&l.selected),disabled:E},R),J=u||"li";return s&&(_.component=u||"div",_.focusVisibleClassName=Object(C.a)(l.focusVisible,P),J=N.a),B?(J=_.component||u?J:"div","li"===p&&("li"===J?J="div":"li"===_.component&&(_.component="div")),y.a.createElement(I.a.Provider,{value:Y},y.a.createElement(p,O()({className:Object(C.a)(l.container,b),ref:F},v),y.a.createElement(J,_,z),z.pop()))):y.a.createElement(I.a.Provider,{value:Y},y.a.createElement(J,O()({ref:F},_),z))}),L=Object(T.a)(function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}},{name:"MuiListItem"})(V),R=y.a.forwardRef(function(e,t){var n=e.children,a=e.classes,r=e.className,i=e.disableTypography,o=void 0!==i&&i,s=e.inset,c=void 0!==s&&s,l=e.primary,d=e.primaryTypographyProps,u=e.secondary,m=e.secondaryTypographyProps,p=k()(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),f=y.a.useContext(I.a).dense,b=null!=l?l:n;null==b||b.type===h.a||o||(b=y.a.createElement(h.a,O()({variant:f?"body2":"body1",className:a.primary,component:"span"},d),b));var v=u;return null==v||v.type===h.a||o||(v=y.a.createElement(h.a,O()({variant:"body2",className:a.secondary,color:"textSecondary"},m),v)),y.a.createElement("div",O()({className:Object(C.a)(a.root,r,f&&a.dense,c&&a.inset,b&&v&&a.multiline),ref:t},p),b,v)}),A=Object(T.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(R),Y=n("wb2y"),X=function(e){return y.a.createElement(y.a.Fragment,null,y.a.createElement(h.a,{variant:"h5",color:"primary"},"Stats"),y.a.createElement(w.a,null,y.a.createElement(L,null,y.a.createElement(A,{primary:"Days apart",secondary:e.daysApart})),y.a.createElement(Y.a,null),y.a.createElement(L,null,y.a.createElement(A,{primary:"Leap year",secondary:e.leapYear?"Yes":"No"})),y.a.createElement(Y.a,null),y.a.createElement(L,null,y.a.createElement(A,{primary:"No. of Mondays",secondary:e.numOfMondays}))))},z=n("MX0m"),B=n.n(z),W=n("/jcT"),F=function(e){var t=e.date,n=e.note;return y.a.createElement("div",null,y.a.createElement(h.a,{variant:"h5",color:"primary"},t),y.a.createElement(W.a,null),y.a.createElement(h.a,{variant:"h6",color:"textPrimary"},n))},_=n("qo7o"),J=n("l3Wi"),q=n("dRu9"),H=n("tr08"),$=n("wpWl"),G=n("4Hym"),U=24;function K(e,t){var n=function(e,t){var n,a=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var r=window.getComputedStyle(t);n=r.getPropertyValue("-webkit-transform")||r.getPropertyValue("transform")}var i=0,o=0;if(n&&"none"!==n&&"string"==typeof n){var s=n.split("(")[1].split(")")[0].split(",");i=parseInt(s[4],10),o=parseInt(s[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(-").concat(a.left-i,"px)"):"right"===e?"translateX(-".concat(a.left+a.width+U-i,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(-").concat(a.top-o,"px)"):"translateY(-".concat(a.top+a.height+U-o,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var Q={enter:$.b.enteringScreen,exit:$.b.leavingScreen},Z=y.a.forwardRef(function(e,t){var n=e.children,a=e.direction,r=void 0===a?"down":a,i=e.in,o=e.onEnter,s=e.onEntering,c=e.onExit,l=e.onExited,d=e.style,u=e.timeout,m=void 0===u?Q:u,p=k()(e,["children","direction","in","onEnter","onEntering","onExit","onExited","style","timeout"]),f=Object(H.a)(),b=y.a.useRef(null),v=y.a.useCallback(function(e){b.current=S.a.findDOMNode(e)},[]),g=Object(D.c)(n.ref,v),h=Object(D.c)(g,t),E=y.a.useCallback(function(){b.current&&K(r,b.current)},[r]);return y.a.useEffect(function(){if(!i&&"down"!==r&&"right"!==r){var e=Object(J.a)(function(){b.current&&K(r,b.current)});return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}},[r,i]),y.a.useEffect(function(){i||E()},[i,E]),y.a.createElement(q.a,O()({onEnter:function(){var e=b.current;K(r,e),Object(G.b)(e),o&&o(e)},onEntering:function(){var e=b.current,t=Object(G.a)({timeout:m,style:d},{mode:"enter"});e.style.webkitTransition=f.transitions.create("-webkit-transform",O()({},t,{easing:f.transitions.easing.easeOut})),e.style.transition=f.transitions.create("transform",O()({},t,{easing:f.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",s&&s(e)},onExit:function(){var e=b.current,t=Object(G.a)({timeout:m,style:d},{mode:"exit"});e.style.webkitTransition=f.transitions.create("-webkit-transform",O()({},t,{easing:f.transitions.easing.sharp})),e.style.transition=f.transitions.create("transform",O()({},t,{easing:f.transitions.easing.sharp})),K(r,e),c&&c(e)},onExited:function(){var e=b.current;e.style.webkitTransition="",e.style.transition="",l&&l(e)},appear:!0,in:i,timeout:m},p),function(e,t){return y.a.cloneElement(n,O()({ref:h,style:O()({visibility:"exited"!==e||i?void 0:"hidden"},d,n.props.style)},t))})}),ee=function(e){var t=e.notes,n=e.transition;return y.a.createElement("div",{className:"jsx-3202557865"},t.map(function(e,t){return y.a.createElement(Z,{direction:"left",in:n||!1,mountOnEnter:!0,unmountOnExit:!0,timeout:700,key:t},y.a.createElement("div",{className:"jsx-3202557865 search-list-item--component"},y.a.createElement(_.a,null,y.a.createElement(F,{date:e.date,note:e.note}))))}),y.a.createElement(B.a,{id:"3202557865"},[".search-list-item--component.jsx-3202557865{margin-bottom:20px;}"]))},te=n("tRbT"),ne=n("pS7g"),ae=n("WB+E");n.d(t,"default",function(){return re});var re=function(e){function t(e){var n;return Object(s.default)(this,t),n=Object(l.default)(this,Object(d.default)(t).call(this,e)),Object(p.a)(Object(u.default)(n),"getPageData",function(){var e=Object(o.default)(i.a.mark(function e(t,n){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{ae.a.ValidateDateRange(new Date(t),new Date(n))}catch(r){console.log(r)}return e.next=3,ae.a.CollectDateItems(t,n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()),n.state=e,n}return Object(m.default)(t,e),Object(c.default)(t,[{key:"componentDidMount",value:function(){this.state||this.setState(Object(a.a)({},this.props))}},{key:"render",value:function(){var e=this;return y.a.createElement(g.a,{maxWidth:"md"},y.a.createElement(v.a,null,y.a.createElement("title",null,"Search page")),y.a.createElement(E.a,null,y.a.createElement(te.a,{container:!0,spacing:2},y.a.createElement(te.a,{item:!0,xs:12,md:4},y.a.createElement(_.a,null,y.a.createElement(h.a,{variant:"h5",color:"primary"},"Search"),y.a.createElement(ne.a,{submitHook:function(){var t=Object(o.default)(i.a.mark(function t(n,r){var o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({note:null,transition:!1}),t.next=3,e.getPageData(n,r);case 3:o=t.sent,e.setState(Object(a.a)({},o,{transition:!0}));case 5:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}),y.a.createElement(X,{daysApart:this.state.daysApart,leapYear:this.state.hasLeapYear,numOfMondays:this.state.amountOfMondays}))),y.a.createElement(te.a,{item:!0,xs:12,md:8},y.a.createElement(ee,{notes:this.state.notes,transition:this.state.transition})))))}}],[{key:"getInitialProps",value:function(){var e=Object(o.default)(i.a.mark(function e(t){var n,r,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.query;try{ae.a.ValidateDateRange(new Date(n.start),new Date(n.end))}catch(i){console.log(i)}return e.next=4,ae.a.CollectDateItems(n.start,n.end);case 4:return r=e.sent,o=Object(a.a)({},{transition:!0},n,r),e.abrupt("return",o);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(f.Component)}},[["19J2","5d41","9da1"]]]);