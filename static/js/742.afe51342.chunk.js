"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[742],{8742:function(e,r,t){t.r(r),t.d(r,{default:function(){return G}});var n=t(4165),a=t(5861),s=t(9439),c=t(2791),u=t(9434),o=t(7689),i="Background_background__WcKDH",l=t(184),p=function(){return(0,l.jsx)("div",{className:i})},d=t(1087),h=t(5705),m=t(4925),f="Button_button__wiIYs",v=["children","className","onClick","type"],w=function(e){var r=e.children,t=e.className,n=e.onClick,a=e.type;(0,m.Z)(e,v);return(0,l.jsx)("button",{type:a,onClick:n,className:"".concat(f," ").concat(t," "),children:r})},x=t(6727),_=x.Ry().shape({email:x.Z_().email("Invalid email address").required("Required"),password:x.Z_().nullable().required("Required").min(6,"Password must be at least 6 characters").max(16,"Password must be no more than 16 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,"Must be at least one number, one lowercase and uppercase letter"),confirmPassword:x.Z_().nullable().when("password",(function(e,r){return e?r.required("Password confirmation required").oneOf([x.iH("password")],"Passwords must match"):r.notRequired()}))}),g=x.Ry().shape({email:x.Z_().email("Invalid email address").required("Required"),password:x.Z_().nullable().required("Required").min(6,"Password must be at least 6 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,"Must be at least one number, one lowercase and uppercase letter")}),b=t(5763),Z=t(1213),y=t(9126),j={form:"AuthForm_form__N+Fyz",register:"AuthForm_register__LBbT3",login:"AuthForm_login__nxTrt",inputContainer:"AuthForm_inputContainer__44gmQ",title:"AuthForm_title__nrVeh",inputWrap:"AuthForm_inputWrap__t4Enc",input:"AuthForm_input__dB7h2",successInput:"AuthForm_successInput__oQ9qy",errorInput:"AuthForm_errorInput__Pe3yE",errorWrap:"AuthForm_errorWrap__0TYvv",successMessage:"AuthForm_successMessage__Vl8si",btnContainer:"AuthForm_btnContainer__hf1ao",button:"AuthForm_button__+RFEI",text:"AuthForm_text__iaP49",link:"AuthForm_link__3I+HY",eyeBtn:"AuthForm_eyeBtn__6eQZ4",eyeIcon:"AuthForm_eyeIcon__4MRzf",crossIcon:"AuthForm_crossIcon__ZrnyS",confirmIcon:"AuthForm_confirmIcon__GT3ef"},N=function(e){var r=e.isRegister,t=e.onSubmit,n=r?_:g,a=(0,c.useState)(!1),u=(0,s.Z)(a,2),o=u[0],i=u[1],p=(0,c.useState)(!1),m=(0,s.Z)(p,2),f=m[0],v=m[1],x=function(){i(!o)},N=function(){v(!f)},k=function(e,r){return e[r]},F=function(e,r){return!e[r]};return(0,l.jsx)(h.J9,{initialValues:{email:"",password:"",confirmPassword:""},validationSchema:n,onSubmit:t,children:function(e){var t=e.isSubmitting,n=e.errors,a=e.touched,s=e.setFieldValue;return(0,l.jsxs)(h.l0,{className:"".concat(j.form," ").concat(r?j.register:j.login),children:[(0,l.jsxs)("div",{className:j.inputContainer,children:[r?(0,l.jsx)("h2",{className:j.title,children:"Registration"}):(0,l.jsx)("h2",{className:j.title,children:"Login"}),(0,l.jsxs)("div",{className:j.inputWrap,children:[(0,l.jsx)("label",{htmlFor:"email",hidden:!0,children:"Email"}),(0,l.jsx)(h.gN,{id:"email",type:"email",name:"email",placeholder:"Email",className:"".concat(j.input," ").concat(a.email&&n.email&&j.errorInput)}),a.email&&k(n,"email")&&(0,l.jsx)(Z.$iT,{id:"svg",className:j.crossIcon,onClick:function(){return function(e,r){r(e,"")}("email",s)}}),a.email&&F(n,"email")&&(0,l.jsx)(y.oFd,{id:"svg",className:j.confirmIcon})]}),(0,l.jsx)("div",{className:j.errorWrap,children:(0,l.jsx)(h.Bc,{name:"email",component:"div",className:j.error})}),(0,l.jsxs)("div",{className:j.inputWrap,children:[(0,l.jsx)("label",{htmlFor:"password",hidden:!0,children:"Password"}),(0,l.jsx)(h.gN,{id:"password",type:o?"text":"password",name:"password",placeholder:"Password",className:"".concat(j.input," ").concat(a.password&&!n.password&&j.successInput," ").concat(a.password&&n.password&&j.errorInput)}),o?(0,l.jsx)("button",{type:"button",onClick:x,className:j.eyeBtn,children:(0,l.jsx)(b.quy,{id:"svg",className:j.eyeIcon})}):(0,l.jsx)("button",{type:"button",onClick:x,className:j.eyeBtn,children:(0,l.jsx)(b.ONY,{id:"svg",className:j.eyeIcon})}),a.password&&!n.password?(0,l.jsx)("div",{className:j.successMessage,children:"Password is secure"}):(0,l.jsx)("div",{className:j.errorWrap,children:(0,l.jsx)(h.Bc,{name:"password",component:"div",className:j.error})})]}),r&&(0,l.jsxs)("div",{className:j.inputWrap,children:[(0,l.jsx)("label",{htmlFor:"confirmPassword",hidden:!0,children:"Confirm password"}),(0,l.jsx)(h.gN,{id:"confirmPassword",type:f?"text":"password",name:"confirmPassword",placeholder:"Confirm password",className:"".concat(j.input," ").concat(a.confirmPassword&&!n.confirmPassword&&j.successInput," ").concat(a.confirmPassword&&n.confirmPassword&&j.errorInput)}),f?(0,l.jsx)("button",{type:"button",onClick:N,className:j.eyeBtn,children:(0,l.jsx)(b.quy,{id:"svg",className:j.eyeIcon})}):(0,l.jsx)("button",{type:"button",onClick:N,className:j.eyeBtn,children:(0,l.jsx)(b.ONY,{id:"svg",className:j.eyeIcon})}),(0,l.jsx)("div",{className:j.errorWrap,children:(0,l.jsx)(h.Bc,{name:"confirmPassword",component:"div",className:j.error})})]})]}),(0,l.jsxs)("div",{className:j.btnContainer,children:[(0,l.jsx)(w,{type:"submit",disabled:t,className:j.button,children:r?"Registration":"Login"}),r?(0,l.jsxs)("p",{className:j.text,children:["Already have an account?"," ",(0,l.jsx)(d.rU,{to:"/login",className:j.link,children:"Login"})]}):(0,l.jsxs)("p",{className:j.text,children:["Don't have an account?"," ",(0,l.jsx)(d.rU,{to:"/register",className:j.link,children:"Register"})]})]})]})}})},k="Section_section__Z2PLw",F="Section_sectionRegister__aDA4N",I=function(e){var r=e.children,t=e.className;return(0,l.jsx)("div",{className:"".concat(k," ").concat(t),children:r})},A="Container_container__VVOCq",C=function(e){var r=e.children,t=e.className;return(0,l.jsx)("div",{className:"".concat(A," ").concat(t),children:r})},P=t(8690),S=t(4569),W=t.n(S)().create({baseURL:"http://localhost:3000"}),R=function(e){if(e)return W.defaults.headers.authorization="Bearer ".concat(e);W.defaults.headers.authorization=""},q=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.post("/users/register",r);case 2:return t=e.sent,a=t.data,R(a.token),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),B=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.post("/users/login",r);case 2:return t=e.sent,a=t.data,R(a.token),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),V=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,R(r),e.next=4,W.get("/users/current");case 4:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),R(),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),E=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,R(r),e.next=4,W.patch("/users",t);case 4:return a=e.sent,s=a.data,e.abrupt("return",s);case 9:throw e.prev=9,e.t0=e.catch(0),R(),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r,t){return e.apply(this,arguments)}}(),T=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,R(r),e.next=4,W.patch("/users/avatars",t);case 4:return a=e.sent,s=a.data,e.abrupt("return",s);case 9:throw e.prev=9,e.t0=e.catch(0),R(),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r,t){return e.apply(this,arguments)}}(),L=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var r,t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.post("/users/logout");case 2:return r=e.sent,t=r.data,R(),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.post("/notices/favorites/".concat(r));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),M=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.delete("/notices/favorites/".concat(r));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),O=t(1686),Y=t.n(O);function D(e){switch(e.status){case 400:case 401:Y().Notify.warning("".concat(e.data.message,". Try it again\nError ").concat(e.status));break;case 409:Y().Notify.warning("".concat(e.data.message,". Try another one or log in. \n        Error ").concat(e.status));break;case 500:Y().Notify.warning("Unfortunately, something has gone wrong. Please refresh your browser\nError ".concat(e.status));break;default:Y().Notify.warning("Oops, something went wrong...Try it again\nError ".concat(e.status," ").concat(e.statusText," "))}}Y().Notify.init({width:"280px",position:"center-top",distance:"15px",timeout:5e3,opacity:1,warning:{background:"#54ADFF",textColor:"#111111",notiflixIconColor:"#ffc107"}});var U=(0,P.hg)("auth/signup",function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,s,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.prev=1,e.next=4,q(r);case 4:return s=e.sent,e.abrupt("return",s);case 8:return e.prev=8,e.t0=e.catch(1),D(c=e.t0.response),e.abrupt("return",a(c));case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r,t){return e.apply(this,arguments)}}()),H=((0,P.hg)("auth/login",function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,s,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.prev=1,e.next=4,B(r);case 4:return s=e.sent,e.abrupt("return",s);case 8:return e.prev=8,e.t0=e.catch(1),D(c=e.t0.response),e.abrupt("return",a(c));case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r,t){return e.apply(this,arguments)}}()),(0,P.hg)("auth/current",function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,s,c,u,o,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,s=t.getState,e.prev=1,c=s(),u=c.auth,e.next=5,V(u.token);case 5:return o=e.sent,e.abrupt("return",o);case 9:return e.prev=9,e.t0=e.catch(1),D(i=e.t0.response),e.abrupt("return",a(i));case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r,t){return e.apply(this,arguments)}}(),{condition:function(e,r){if(!(0,r.getState)().auth.token)return!1}}),(0,P.hg)("auth/update-user",function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,s,c,u,o,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,s=t.getState,e.prev=1,c=s(),u=c.auth,e.next=5,E(u.token,r);case 5:return o=e.sent,e.abrupt("return",o);case 9:return e.prev=9,e.t0=e.catch(1),i=e.t0.response,e.abrupt("return",a(i));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r,t){return e.apply(this,arguments)}}(),{condition:function(e,r){if(!(0,r.getState)().auth.token)return!1}}),(0,P.hg)("auth/update-avatar",function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,s,c,u,o,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,s=t.getState,e.prev=1,c=s(),u=c.auth,e.next=5,T(u.token,r);case 5:return o=e.sent,e.abrupt("return",o);case 9:throw e.prev=9,e.t0=e.catch(1),i=e.t0.response,a(i);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r,t){return e.apply(this,arguments)}}(),{condition:function(e,r){if(!(0,r.getState)().auth.token)return!1}}),(0,P.hg)("auth/logout",function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,s,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.prev=1,e.next=4,L();case 4:return s=e.sent,e.abrupt("return",s);case 8:return e.prev=8,e.t0=e.catch(1),c=e.t0.response,e.abrupt("return",a(c));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r,t){return e.apply(this,arguments)}}()),(0,P.hg)("user/addFavorite",function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z(r);case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",t.rejectWithValue(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,t){return e.apply(this,arguments)}}()),(0,P.hg)("user/deleteFavorite",function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,s,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.prev=1,e.next=4,M(r);case 4:return s=e.sent,c=s.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",a(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r,t){return e.apply(this,arguments)}}()),function(e){return e.auth.error}),Q=function(e){return e.auth.isLoading},G=function(){var e=(0,o.s0)(),r=(0,u.I0)(),t=((0,u.v9)(Q),(0,u.v9)(H),(0,c.useState)(null)),i=(0,s.Z)(t,2),d=i[0],h=i[1],m=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(a,s){var c,u,o,i;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a.email,u=a.password,o=s.setSubmitting,i={email:c,password:u},t.prev=3,t.next=6,r(U(i));case 6:e("/user",{state:{from:"/register"}}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(3),h(t.t0),console.log("Something went wrong",t.t0);case 13:return t.prev=13,o(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[3,9,13,16]])})));return function(e,r){return t.apply(this,arguments)}}();return(0,l.jsxs)(I,{className:F,children:[(0,l.jsx)(p,{}),(0,l.jsxs)(C,{children:[(0,l.jsx)(N,{isRegister:!0,onSubmit:m}),d&&(0,l.jsxs)("div",{children:["Error: ",d.message]})]})]})}}}]);
//# sourceMappingURL=742.afe51342.chunk.js.map