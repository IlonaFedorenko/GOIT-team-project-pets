"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[510],{6772:function(n,e,t){t.d(e,{Ht:function(){return c},QR:function(){return s},bM:function(){return a}});var r=t(4165),i=t(5861),o=t(2936),a=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,c,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,i=e.gender,a=e.age,n.next=3,o.ZP.get("/notices/favorite",{params:{query:t,gender:i,age:a}});case 3:return c=n.sent,s=c.data,n.abrupt("return",s);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.post("/notices/favorite/".concat(e));case 2:return t=n.sent,i=t.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.delete("/notices/favorite/".concat(e));case 2:return t=n.sent,i=t.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},542:function(n,e,t){t.d(e,{I:function(){return s},Oo:function(){return c},gz:function(){return d},hp:function(){return u},yV:function(){return a}});var r=t(4165),i=t(5861),o=t(2936),a=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.delete("/notices/".concat(e));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,c,s,d,u,l,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.page,i=void 0===t?1:t,a=e.limit,c=void 0===a?12:a,s=e.query,d=e.gender,u=e.age,n.next=3,o.ZP.get("/notices/sell",{params:{page:i,limit:c,query:s,gender:d,age:u}});case 3:return l=n.sent,p=l.data,n.abrupt("return",p);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,c,s,d,u,l,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.page,i=void 0===t?1:t,a=e.limit,c=void 0===a?12:a,s=e.query,d=e.gender,u=e.age,n.next=3,o.ZP.get("/notices/for-free",{params:{page:i,limit:c,query:s,gender:d,age:u}});case 3:return l=n.sent,p=l.data,n.abrupt("return",p);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,c,s,d,u,l,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.page,i=void 0===t?1:t,a=e.limit,c=void 0===a?12:a,s=e.query,d=e.gender,u=e.age,n.next=3,o.ZP.get("/notices/lost-found",{params:{page:i,limit:c,query:s,gender:d,age:u}});case 3:return l=n.sent,p=l.data,n.abrupt("return",p);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,c,s,d,u,l,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.page,i=void 0===t?1:t,a=e.limit,c=void 0===a?12:a,s=e.query,d=e.gender,u=e.age,n.next=3,o.ZP.get("/notices/my-ads",{params:{page:i,limit:c,query:s,gender:d,age:u}});case 3:return l=n.sent,p=l.data,n.abrupt("return",p);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1510:function(n,e,t){t.r(e),t.d(e,{default:function(){return Un}});var r,i,o,a,c,s,d,u,l,p,h,f,x,m,g,b,w,v,Z,y,j,k,P,z,C,q,S,B,M,F,_,D,T,R,E=t(9439),L=t(3855),U=t(9869),I=t(2791),O=t(8617),A=t(6856),N=t(4164),X=t(168),Y=t(6487),H=t(71),J=Y.ZP.div(r||(r=(0,X.Z)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1200;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(97, 97, 97, 0.6);\n  backdrop-filter: blur(4px);\n  overflow-y: scroll;\n"]))),Q=Y.ZP.div(i||(i=(0,X.Z)(["\n  min-height: 200px;\n  min-width: 200px;\n  border-radius: 20px;\n  position: absolute;\n  top: 10%;\n  background-color: #fff;\n\n  @media screen and (min-width: ",") {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),V=Y.ZP.button(o||(o=(0,X.Z)(["\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  border: none;\n  position: absolute;\n  right: 12px;\n  top: 12px;\n  line-height: 0;\n  background: transparent;\n  color: black;\n\n  @media screen and (min-width: ",") {\n    right: 24px;\n    top: 24px;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),W=(0,Y.ZP)(H.IOM)(a||(a=(0,X.Z)(["\n  color: ",";\n  width: 30px;\n  height: 30px;\n  transition: color 250ms ",";\n\n  &:hover,\n  &focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.transition.main}),(function(n){return n.theme.colors.yellow})),G=t(184),K=document.querySelector("#modal-root"),$=function(n){var e=n.children,t=n.onClose,r=(0,I.useCallback)((function(n){var e=n.target,r=n.currentTarget,i=n.code;e!==r&&"Escape"!==i||t()}),[t]);return(0,I.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}),[r]),(0,N.createPortal)((0,G.jsx)(J,{onClick:r,children:(0,G.jsxs)(Q,{children:[(0,G.jsx)(V,{type:"button",onClick:t,"aria-label":"close modal",children:(0,G.jsx)(W,{})}),e]})}),K)},nn=t(8560),en=t(1545),tn=Y.ZP.div(c||(c=(0,X.Z)(["\n  width: 280px;\n  padding-top: 44px;\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-bottom: 16px;\n\n  @media screen and (min-width: ",") {\n    width: 681px;\n    padding-top: 32px;\n    padding-left: 32px;\n    padding-right: 32px;\n    padding-bottom: 24px;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),rn=Y.ZP.div(s||(s=(0,X.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 12px;\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n    gap: 24px;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),on=Y.ZP.div(d||(d=(0,X.Z)(["\n  position: relative;\n  width: 240px;\n  height: 240px;\n  margin: 0 auto;\n\n  @media screen and (min-width: ",") {\n    width: 262px;\n    height: 298px;\n"])),(function(n){return n.theme.breakpoints.tablet})),an=Y.ZP.img(u||(u=(0,X.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 0px 0px 40px 40px;\n  object-fit: cover;\n"]))),cn=Y.ZP.span(l||(l=(0,X.Z)(["\nfont-family: ","\n  width: 126px;\n  padding: 11px 17px;\n  position: absolute;\n  top: 16px;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 19px;\n  color: ",";\n  background-color: ",";\n  border-radius: 0px 16px 16px 0px;\n"])),(function(n){return n.theme.fonts.main.medium}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.lightBlue})),sn=Y.ZP.div(p||(p=(0,X.Z)(["\n  @media screen and (min-width: ",") {\n    flex: 1;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),dn=Y.ZP.h2(h||(h=(0,X.Z)(["\n  width: 198px;\n  margin-bottom: 20px;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 33px;\n  letter-spacing: -0.01em;\n  color: #000000;\n\n  @media screen and (min-width: ",") {\n    width: 321px;\n    font-size: 28px;\n    line-height: 38px;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),un=Y.ZP.table(f||(f=(0,X.Z)(["\n  width: 256px;\n  table-layout: fixed;\n\n  @media screen and (min-width: ",") {\n    width: 340px;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),ln=Y.ZP.td(x||(x=(0,X.Z)(["\n  font-family: ",";\n  width: 80px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n  color: #000000;\n\n  @media screen and (min-width: ",") {\n    width: 120px;\n    font-size: 16px;\n    line-height: 22px;\n  }\n"])),(function(n){return n.theme.fonts.main.semiBold}),(function(n){return n.theme.breakpoints.tablet})),pn=Y.ZP.td(m||(m=(0,X.Z)(["\n  font-family: ",";\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  color: #000000;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n\n  @media screen and (min-width: ",") {\n    font-size: 16px;\n    line-height: 22px;\n  }\n"])),(function(n){return n.theme.fonts.main.medium}),(function(n){return n.theme.breakpoints.tablet})),hn=Y.ZP.a(g||(g=(0,X.Z)(["\n  color: ",";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  text-decoration: underline;\n"])),(function(n){return n.theme.colors.yellow})),fn=Y.ZP.p(b||(b=(0,X.Z)(["\n  margin-bottom: 12px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n  letter-spacing: 0.04em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  font-size: 16px;\n  line-height: 22px;\n\n  @media screen and (min-width: ",") {\n    margin-bottom: 70px;\n    font-size: 16px;\n    line-height: 24px;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),xn=Y.ZP.div(w||(w=(0,X.Z)(["\n  display: flex;\n  flex-direction: column-reverse;\n  gap: 8px;\n\n  @media screen and (min-width: ",") {\n    justify-content: flex-end;\n    flex-direction: row;\n    gap: 17px;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),mn=Y.ZP.button(v||(v=(0,X.Z)(["\n  position: relative;\n  padding: 8px 20px;\n  border: none;\n  border-radius: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: ;\n  gap: 8px;\n  background-color: ",";\n  color: #fef9f9;\n  transition: background-color 250ms cubic-bezier(0.215, 0.61, 0.355, 1);\n\n  &:hover,\n  &:focus {\n    background-color: transparent;\n\n    &::before {\n      opacity: 1;\n    }\n  }\n\n  &::before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    border-radius: inherit;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    background: ",";\n    opacity: 0;\n\n    transition: opacity 250ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  & span {\n    z-index: 5;\n  }\n\n  & svg {\n    z-index: 5;\n  }\n"])),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.gradientBlue})),gn=Y.ZP.span(Z||(Z=(0,X.Z)(["\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.04em;\n  color: var(--main-back);\n"]))),bn=Y.ZP.a(y||(y=(0,X.Z)(["\n  position: relative;\n  width: 256px;\n  height: 40px;\n  padding: 8px 20px;\n  border: 2px solid ",";\n  border-radius: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.04em;\n  text-decoration: none;\n  color: ",";\n\n  transition: color 250ms cubic-bezier(0.215, 0.61, 0.355, 1);\n\n  &:hover,\n  &:focus {\n    color: #ffffff;\n    border: none;\n\n    &::before {\n      opacity: 1;\n    }\n  }\n\n  &::before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    border-radius: inherit;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ",";\n    opacity: 0;\n    transition: opacity 250ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  & span {\n    z-index: 5;\n  }\n\n  @media screen and (min-width: ",") {\n    width: 129px;\n  }\n"])),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.gradientBlue}),(function(n){return n.theme.breakpoints.tablet})),wn=(0,Y.ZP)(en.mJu)(j||(j=(0,X.Z)(["\n  width: 24px;\n  height: 24px;\n  color: currentColor;\n"]))),vn=t(6186),Zn=function(n){var e=n.item,t=n.onFavorite,r=(0,nn.v9)(U.PR),i=(0,nn.v9)(U.y6),o=e._id,a=e.name,c=e.date,s=e.comments,d=e.type,u=e.location,l=e.sex,p=e.title,h=e.avatarURL,f=e.category,x=e.owner,m=(0,vn.Zh)(f),g=(0,vn.ur)(c),b=i&&r.favorite.includes(o);return(0,G.jsxs)(tn,{children:[(0,G.jsxs)(rn,{children:[(0,G.jsxs)(on,{children:[(0,G.jsx)(an,{src:h,alt:a}),(0,G.jsx)(cn,{children:m})]}),(0,G.jsxs)(sn,{children:[(0,G.jsx)(dn,{children:p}),(0,G.jsx)(un,{children:(0,G.jsxs)("tbody",{children:[(0,G.jsxs)("tr",{children:[(0,G.jsx)(ln,{children:"Name:"}),(0,G.jsx)(pn,{children:a})]}),(0,G.jsxs)("tr",{children:[(0,G.jsx)(ln,{children:"Birthday:"}),(0,G.jsx)(pn,{children:g})]}),(0,G.jsxs)("tr",{children:[(0,G.jsx)(ln,{children:"Type:"}),(0,G.jsx)(pn,{children:d})]}),(0,G.jsxs)("tr",{children:[(0,G.jsx)(ln,{children:"Place:"}),(0,G.jsx)(pn,{children:u})]}),(0,G.jsxs)("tr",{children:[(0,G.jsx)(ln,{children:"The sex:"}),(0,G.jsx)(pn,{children:l})]}),(0,G.jsxs)("tr",{children:[(0,G.jsx)(ln,{children:"Email:"}),(0,G.jsx)(pn,{children:(0,G.jsx)(hn,{href:"mailto:".concat(x.email),children:x.email})})]}),(null===x||void 0===x?void 0:x.phone)&&(0,G.jsxs)("tr",{children:[(0,G.jsx)(ln,{children:"Phone:"}),(0,G.jsx)(pn,{children:(0,G.jsx)(hn,{href:"tel:".concat(x.phone),children:x.phone})})]})]})})]})]}),(0,G.jsx)(fn,{children:s}),(0,G.jsxs)(xn,{children:[(0,G.jsxs)(mn,{onClick:function(){return t(o)},children:[(0,G.jsx)(gn,{children:b?"Remove from":"Add to"}),(0,G.jsx)(wn,{})]}),(0,G.jsx)(bn,{href:"mailto:primer@gmail.com",children:(0,G.jsx)("span",{children:"Contact"})})]})]})},yn=t(3622),jn=t(9129),kn=Y.ZP.div(k||(k=(0,X.Z)(["\n  position: relative;\n  box-shadow: 3px 8px 14px 0 rgba(136, 198, 253, 0.19);\n  border-radius: 0px 0px 40px 40px;\n  width: 280px;\n  height: 456px;\n  background-color: #ffffff;\n\n  &:focus,\n  &:hover {\n    box-shadow: ",";\n  }\n\n  @media screen and (min-width: ",") {\n    width: 336px;\n  }\n  @media screen and (min-width: ",") {\n    width: 288px;\n  }\n"])),(function(n){return n.theme.boxShadows.secondary}),yn.r.breakpoints.tablet,yn.r.breakpoints.desktop),Pn=Y.ZP.img(P||(P=(0,X.Z)(["\n  width: 100%;\n  height: 290px;\n  object-fit: cover;\n"]))),zn=Y.ZP.div(z||(z=(0,X.Z)(["\n  position: absolute;\n  top: 248px;\n  display: flex;\n  gap: 12px;\n  left: 50%;\n  transform: translateX(-50%);\n"]))),Cn=Y.ZP.button(C||(C=(0,X.Z)(["\n  width: 80px;\n  height: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3px;\n  padding: 6px 0;\n  background-color: ",";\n  color: ",";\n  font-family: 'Manrope', sans-serif;\n  font-size: ",";\n  border: none;\n  border-radius: 15px;\n  font-weight: 600;\n  cursor: default;\n"])),yn.r.colors.lightBlue,yn.r.colors.black,yn.r.fontSizes[0]),qn=(0,Y.ZP)("div")(q||(q=(0,X.Z)(["\n  display: flex;\n  align-items: center;\n  color: ",";\n  margin-left: -4px;\n"])),yn.r.colors.blue),Sn=Y.ZP.div(S||(S=(0,X.Z)(["\n  top: 16px;\n  left: 0;\n  position: absolute;\n  padding: 11px 17px;\n  text-align: center;\n  background-color: ",";\n  color: ",";\n  font-family: 'Manrope', sans-serif;\n  font-size: ",";\n  line-height: 10px;\n  border-radius: 0 20px 20px 0;\n  min-width: 126px;\n  font-weight: 600;\n  line-height: 10px;\n  cursor: pointer;\n"])),yn.r.colors.lightBlue,yn.r.colors.black,yn.r.fontSizes[1]),Bn=Y.ZP.p(B||(B=(0,X.Z)(["\n  margin: 20px;\n  font-family: ",";\n  font-size: ",";\n  line-height: 33px;\n"])),(function(n){return n.theme.fonts.main.bold}),yn.r.fontSizes[4]),Mn=Y.ZP.button(M||(M=(0,X.Z)(["\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n  bottom: 24px;\n  width: 248px;\n  background-color: #ffffff;\n  color: ",";\n  border: 2px solid #54adff;\n  border-radius: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Manrope', sans-serif;\n  font-style: 'SemiBold';\n  font-size: ",";\n  line-height: 22px;\n  gap: 12px;\n  padding: 9px 0 9px 0;\n  cursor: pointer;\n  svg {\n    display: none;\n  }\n\n  transition: color 300ms ",",\n    background-color 300ms ",";\n\n  &.active {\n    color: ",";\n\n    background-color: ",";\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    background: ",";\n    border-radius: 40px;\n    opacity: 0;\n    z-index: -1;\n    transition: opacity 300ms ",";\n  }\n\n  &:hover::before,\n  &:focus::before {\n    opacity: 1;\n  }\n\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: transparent;\n    border-color: transparent;\n  }\n"])),yn.r.colors.blue,yn.r.fontSizes[2],(function(n){return n.theme.transition.main}),(function(n){return n.theme.transition.main}),yn.r.colors.white,yn.r.colors.blue,yn.r.colors.gradientBlue,yn.r.transition.main,(function(n){return n.theme.colors.white})),Fn=Y.ZP.button(F||(F=(0,X.Z)(["\n  background-color: ",";\n  color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n\n  &:hover {\n    background: ",";\n    color: ",";\n    svg {\n      filter: brightness(0) invert(1);\n    }\n  }\n"])),yn.r.colors.lightBlue,yn.r.colors.blue,yn.r.colors.blue,yn.r.colors.white),_n=Y.ZP.div(_||(_=(0,X.Z)(["\n  top: 12px;\n  right: 12px;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),Dn=(0,Y.ZP)(Fn)(D||(D=(0,X.Z)(["\n  margin-top: 16px;\n"]))),Tn=(0,Y.ZP)(jn.Frg)(T||(T=(0,X.Z)(["\n  color: ",";\n  width: 24px;\n  height: 24px;\n"])),yn.r.colors.blue),Rn=function(n){var e=n.item,t=(n.onDelete,n.onFavorite),r=(0,I.useState)(!1),i=(0,E.Z)(r,2),o=i[0],a=i[1],c=(0,L.v9)(U.y6),s=(0,L.v9)(U.PR),d=e._id,u=e.category,l=e.title,p=e.location,h=e.date,f=e.sex,x=e.avatarURL,m=e.owner,g=(0,vn.zy)(h),b=(0,vn.Zh)(u),w=c&&s.favorite.includes(d),v=(null===m||void 0===m?void 0:m._id)===s.id;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(kn,{children:[(0,G.jsx)(Sn,{children:b}),(0,G.jsx)(Pn,{src:x,alt:l}),(0,G.jsxs)(zn,{children:[(0,G.jsxs)(Cn,{children:[(0,G.jsx)(qn,{children:(0,G.jsx)(O.k9l,{size:24})}),p]}),(0,G.jsxs)(Cn,{children:[(0,G.jsx)(qn,{children:(0,G.jsx)(A.iNe,{size:24})}),g]}),(0,G.jsxs)(Cn,{children:[(0,G.jsx)(qn,{children:"male"===f?(0,G.jsx)(A.r29,{size:"24"}):(0,G.jsx)(A.P9w,{size:"24"})}),e.sex]})]}),(0,G.jsx)(Bn,{children:l}),(0,G.jsx)(Mn,{onClick:function(){return a(!0)},children:"Learn More"}),(0,G.jsxs)(_n,{children:[(0,G.jsx)(Fn,{onClick:function(){return t(d)},children:w?(0,G.jsx)(A.Yqy,{size:"24"}):(0,G.jsx)(A.iqB,{size:"24"})}),v&&(0,G.jsx)(Dn,{type:"button",children:(0,G.jsx)(Tn,{})})]})]}),o&&(0,G.jsx)($,{onClose:function(){return a(!1)},children:(0,G.jsx)(Zn,{item:e,onFavorite:t})})]})},En=(0,Y.ZP)("div")(R||(R=(0,X.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  // justify-content: space-between;\n  margin: 0 auto;\n  column-gap: 32px;\n  row-gap: 24px;\n  margin-top: 40px;\n  padding: 0;\n  margin-bottom: 40px;\n\n  @media screen and (max-width: 760px) {\n    margin-top: 24px;\n  }\n\n  @media screen and (min-width: ",") {\n    margin-bottom: 60px;\n    flex-direction: row;\n  }\n\n  @media screen and (min-width: ",") and (max-width: 1279px) {\n    padding-right: 15px;\n    padding-left: 15px;\n  }\n\n  @media screen and (min-width: ",") {\n    width: 1248px;\n    margin-bottom: 68px;\n  }\n"])),yn.r.breakpoints.tablet,yn.r.breakpoints.tablet,yn.r.breakpoints.desktop),Ln=t(7689),Un=function(){var n=(0,Ln.bx)(),e=n.items,t=n.handleDelete,r=n.handleFavoriteClick;return(0,G.jsx)(G.Fragment,{children:e.length>0&&(0,G.jsx)(En,{children:e.map((function(n){return(0,G.jsx)(Rn,{item:n,onDelete:t,onFavorite:r},n._id)}))})})}},6186:function(n,e,t){t.d(e,{zy:function(){return l},fW:function(){return r},if:function(){return i},r7:function(){return d},Zh:function(){return p},ur:function(){return h}});var r=function(n,e,t){var r=n.name,i=n.value,o=n.checked;return"gender"===r?o?(e.set("gender",i),void t(e)):(e.delete("gender"),void t(e)):o?(e.set("age",i),void t(e)):(e.delete("age"),void t(e))},i=function(n){return Array.from(n.entries()).reduce((function(n,e){return"query"!==e[0]&&"page"!==e[0]&&n.push(e[1]),n}),[])},o=t(4165),a=t(5861),c=t(542),s=t(6772),d=function(){var n=(0,a.Z)((0,o.Z)().mark((function n(e){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.age=u(e.age),n.t0=e.category,n.next="sell"===n.t0?4:"lost-found"===n.t0?7:"for-free"===n.t0?10:"favorite"===n.t0?13:"my-ads"===n.t0?16:19;break;case 4:return n.next=6,(0,c.Oo)(e);case 6:case 9:case 12:case 15:case 18:return n.abrupt("return",n.sent);case 7:return n.next=9,(0,c.gz)(e);case 10:return n.next=12,(0,c.I)(e);case 13:return n.next=15,(0,s.bM)(e);case 16:return n.next=18,(0,c.hp)(e);case 19:return n.abrupt("return",[]);case 20:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(n){switch(n){case"3m-12m":return"3m-12m";case"1y":return"1y";case"2y":return"2y";default:return}},l=function(n){var e=new Date,t=new Date(n),r=e.getTime()-t.getTime(),i=Math.floor(r/315576e5),o=Math.floor(r%315576e5/26298e5),a="";return a=i?1===i?"year":"years":"mon",i?"".concat(i," ").concat(a):"".concat(o," ").concat(a)},p=function(n){switch(n){case"lost-found":return"lost/found";case"for-free":return"in good hands";default:return n}},h=function(n){var e=new Date(n),t=String(e.getUTCDate()).padStart(2,"0"),r=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getUTCFullYear());return"".concat(t,".").concat(r,".").concat(i)}}}]);
//# sourceMappingURL=510.737afc32.chunk.js.map