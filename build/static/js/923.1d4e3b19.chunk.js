"use strict";(self.webpackChunkreact_CRUD=self.webpackChunkreact_CRUD||[]).push([[923],{7923:function(e,n,r){r.r(n);var i=r(6330),t=r(9434),o=r(5705),a=r(7689),l=r(3855),s=r(6157),c=r(9914),d=r(6727),u=r(3892),h=r(184),p=d.Ry().shape({title:d.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),description:d.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required")});n.default=(0,u.Z)((function(){var e=(0,t.v9)((function(e){return e})),n=e.error,r=e.loading,d=(0,t.I0)(),u=(0,a.s0)(),m=(0,o.TA)({initialValues:{title:"",description:""},validationSchema:p,onSubmit:function(e){var n=Math.floor(1e3*Math.random());d((0,i.SF)({id:n,title:e.title,description:e.description})).unwrap().then((function(){u("/")})).catch((function(e){console.log(e)}))}});return(0,h.jsx)(c.Z,{error:n,loading:r,children:(0,h.jsxs)(l.Z,{onSubmit:m.handleSubmit,children:[(0,h.jsxs)(l.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,h.jsx)(l.Z.Label,{children:"Title "}),(0,h.jsx)(l.Z.Control,{type:"text",placeholder:"Enter Title",name:"title",onChange:m.handleChange,value:m.values.title,isInvalid:!!m.errors.title}),(0,h.jsx)(l.Z.Control.Feedback,{type:"invalid",children:m.errors.title})," "]}),(0,h.jsxs)(l.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[(0,h.jsx)(l.Z.Label,{children:"Description..."}),(0,h.jsx)(l.Z.Control,{as:"textarea",rows:3,onChange:m.handleChange,name:"description",value:m.values.description,isInvalid:!!m.errors.description}),(0,h.jsx)(l.Z.Control.Feedback,{type:"invalid",children:m.errors.description})," "]}),(0,h.jsx)(c.Z,{loading:r,error:n,children:(0,h.jsx)(s.Z,{variant:"primary",type:"submit",children:"submit"})})]})})}))},3892:function(e,n,r){r.d(n,{Z:function(){return a}});var i=r(1413),t=r(9434),o=r(184);function a(e){return function(n){return(0,t.v9)((function(e){return e.toggleauth})).isLoggiedind?(0,o.jsx)(e,(0,i.Z)({},n)):(0,o.jsx)("div",{children:"Log In First "})}}}}]);
//# sourceMappingURL=923.1d4e3b19.chunk.js.map