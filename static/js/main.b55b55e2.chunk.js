(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{86:function(n,e,t){"use strict";t.r(e);var o,i,r,c,a=t(1),d=t.n(a),s=t(19),l=t.n(s),u=t(21),b=t(45),p=t(6),j=t(25),h=function(){return Object(j.b)()},f=j.c,x=t(14),g=t(22),O=t(15),m=t(16),v=t(23),y=t(18),k=t(33),w=t.n(k),T=t(46),C=t(47),z=t.n(C),S=Object(y.b)("todo/fetchTodoList",Object(T.a)(w.a.mark((function n(){var e;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z.a.get("https://jsonplaceholder.typicode.com/todos",{params:{_limit:10}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))),M=Object(y.c)({name:"todos",initialState:{items:[],isLoading:!1,error:"",isTitleShown:!0,isModalOpen:!1,choosenTodoId:""},reducers:{addTodo:function(n,e){n.items=[].concat(Object(v.a)(n.items),[e.payload])},deleteTodo:function(n,e){n.items=n.items.filter((function(n){return n.id!==e.payload}))},toggleCompleted:function(n,e){n.items=n.items.map((function(n){return n.id===e.payload?Object(m.a)(Object(m.a)({},n),{},{completed:!n.completed}):n}))},hideTitle:function(n){n.isTitleShown=!1},toggleModal:function(n){n.isModalOpen=!n.isModalOpen},setChoosenTodoId:function(n,e){n.choosenTodoId=e.payload},updateTodos:function(n,e){n.items=n.items.map((function(t){return t.id===n.choosenTodoId?Object(m.a)(Object(m.a)({},t),{},{title:e.payload}):t}))}},extraReducers:(o={},Object(O.a)(o,S.fulfilled.type,(function(n,e){n.isLoading=!1,n.error="",n.items=[].concat(Object(v.a)(e.payload),Object(v.a)(n.items))})),Object(O.a)(o,S.pending.type,(function(n){n.isLoading=!0})),Object(O.a)(o,S.rejected.type,(function(n,e){n.isLoading=!1,n.error=e.payload})),o)}),I=M.actions,L=I.addTodo,E=I.deleteTodo,W=I.toggleCompleted,A=I.hideTitle,B=I.toggleModal,D=I.setChoosenTodoId,J=I.updateTodos,R=M.reducer,N=t(4),P=t(5),Y=P.a.div(i||(i=Object(N.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  width: 60px;\n  height: 60px;\n  top: 15%;\n  left: 7%;\n  border-radius: 50%;\n  background-color: #232127;\n  cursor: pointer;\n  transition: 0.3s cubic-bezier(0.3, 0, 0.5, 1);\n  transition-property: all;\n  & svg {\n    fill: #dde0dc;\n  }\n  &:hover {\n    background-color: gray;\n  }\n"]))),_=P.a.div(r||(r=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  position: fixed;\n  list-style: none;\n  margin-top: 30vh;\n  width: 15%;\n  height: 30%;\n  left: 2%;\n  border-radius: 13px;\n  background-color: #232127;\n  & a {\n    text-decoration: none;\n  }\n"]))),q=P.a.div(c||(c=Object(N.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 60px;\n  font-size: 25px;\n  color: #dde0dc;\n  border-radius: 10px;\n  transition: 0.3s cubic-bezier(0.3, 0, 0.5, 1);\n  transition-property: all;\n  &:hover {\n    background-color: #90a2aa;\n  }\n  & svg {\n    margin-right: 10px;\n  }\n"]))),F=t(48),G=t(50),H=t(30),K=t(2);function Q(){var n=Object(a.useState)(!1),e=Object(g.a)(n,2),t=e[0],o=e[1],i=h();return Object(K.jsxs)("div",{children:[Object(K.jsx)(Y,{onClick:function(){o(!t),i(A())},children:Object(K.jsx)(F.a,{size:"35"})}),t&&Object(K.jsxs)(_,{children:[Object(K.jsx)(u.b,{to:"/createform",children:Object(K.jsxs)(q,{children:[Object(K.jsx)(H.b,{}),"Create Todo"]})}),Object(K.jsx)(u.b,{to:"/todos",children:Object(K.jsxs)(q,{children:[Object(K.jsx)(G.a,{}),"Todo list"]})})]})]})}var U,V,X,Z,$,nn,en,tn=t(35),on=P.a.div(U||(U=Object(N.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 75%;\n  height: 65px;\n  margin-top: 10px;\n  padding-right: 30px;\n  padding-left: 30px;\n  background-color: #232127;\n  border-radius: 10px;\n\n  & input:checked + span {\n    text-decoration: line-through;\n  }\n  & svg {\n    fill: #90a2aa;\n  }\n  & svg:hover {\n    cursor: pointer;\n    fill: #f5f5f5;\n  }\n"]))),rn=P.a.input(V||(V=Object(N.a)(["\n  margin-right: 20px;\n  width: 40px;\n  height: 20px;\n"]))),cn=P.a.span(X||(X=Object(N.a)(["\n  color: #f5f5f5;\n"]))),an=P.a.div(Z||(Z=Object(N.a)(["\n  display: flex;\n\n  & svg {\n    margin-right: 20px;\n    width: 2 rem;\n    height: 2 rem;\n    border-radius: 8 px;\n  }\n"]))),dn=P.a.div($||($=Object(N.a)(["\n  display: flex;\n  justify-content: space-between;\n  & svg {\n    margin-right: 10px;\n  }\n"])));function sn(n){var e=n.todo,t=h();return Object(K.jsxs)(on,{children:[Object(K.jsxs)(an,{children:[Object(K.jsx)(rn,{type:"checkbox",onChange:function(){return t(W(e.id))},checked:e.completed}),Object(K.jsx)(cn,{children:e.title})]}),Object(K.jsxs)(dn,{children:[Object(K.jsx)(tn.a,{size:"25",onClick:function(){t(D(e.id)),t(B())}}),Object(K.jsx)(tn.b,{size:"25",onClick:function(){t(E(e.id)),x.b.success("Todo was succesfully removed from your list")}})]})]})}var ln=P.a.div(nn||(nn=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-right: 180px;\n  margin-left: 220px;\n"]))),un=P.a.h1(en||(en=Object(N.a)(["\n  align-self: center;\n  color: #90a2aa;\n  font-size: 40px;\n"])));function bn(){var n=f((function(n){return n.items})),e=h();return Object(a.useEffect)((function(){n.length||e(S())}),[e,n.length]),Object(K.jsxs)(ln,{children:[Object(K.jsx)(un,{children:"My Todo List"}),n.map((function(n){return Object(K.jsx)(sn,{todo:n},n.id)}))]})}var pn,jn,hn,fn,xn,gn,On,mn,vn,yn,kn=t(52),wn=P.a.div(pn||(pn=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]))),Tn=P.a.h1(jn||(jn=Object(N.a)(["\n  font-size: 40px;\n  color: #90a2aa;\n"]))),Cn=P.a.form(hn||(hn=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),zn=P.a.input(fn||(fn=Object(N.a)(["\n  padding-left: 30px;\n  width: 500px;\n  height: 60px;\n  background-color: #232127;\n  border: none;\n  outline: none;\n  color: #fff;\n  border-radius: 4px;\n  &:focus {\n    border: 1px solid white;\n  }\n"]))),Sn=P.a.button(xn||(xn=Object(N.a)(["\n  margin-top: 30px;\n  width: 250px;\n  height: 50px;\n  background-color: #90a2aa;\n  border: none;\n  outline: none;\n  border-radius: 4px;\n  font-size: 24px;\n  cursor: pointer;\n  &:hover {\n    background-color: #dfe2de;\n    border: 2px solid #232127;\n  }\n"]))),Mn={id:"",title:"",completed:!1};function In(){var n=Object(a.useState)(Mn),e=Object(g.a)(n,2),t=e[0],o=e[1],i=h();return Object(K.jsxs)(wn,{children:[Object(K.jsx)(Tn,{children:"What you gonna do?"}),Object(K.jsxs)(Cn,{onSubmit:function(n){n.preventDefault(),i(L(t)),o(Mn),x.b.success("New todo succesfully added to your list")},children:[Object(K.jsx)(zn,{onChange:function(n){var e=n.target.value;o(Object(m.a)(Object(m.a)({},t),{},{title:e,id:Object(kn.a)()}))},placeholder:"Write a todo",value:t.title}),Object(K.jsx)(Sn,{type:"submit",children:" Create"})]})]})}var Ln=P.a.div(gn||(gn=Object(N.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n"]))),En=P.a.form(On||(On=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 600px;\n  height: 300px;\n  background: #121212;\n  border-radius: 10px;\n"]))),Wn=P.a.div(mn||(mn=Object(N.a)(["\n  align-self: flex-end;\n  margin-right: 20px;\n  width: 30px;\n  height: 30px;\n  background-color: #232127;\n  cursor: pointer;\n  border-radius: 50%;\n  & svg {\n    fill: #dde0dc;\n  }\n  &:hover {\n    background-color: gray;\n  }\n"]))),An=P.a.input(vn||(vn=Object(N.a)(["\n  margin-right: auto;\n  margin-left: auto;\n  width: 410px;\n  height: 124px;\n  padding: 20px;\n  background-color: #232127;\n  border: none;\n  outline: none;\n  border-radius: 4px;\n  color: #fff;\n  font-size: 24px;\n  &:focus {\n    border: 1px solid white;\n  }\n"]))),Bn=P.a.button(yn||(yn=Object(N.a)(["\n  margin-right: auto;\n  margin-left: auto;\n  width: 200px;\n  height: 40px;\n  background: #0f6fff;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  border-radius: 10px;\n  font-size: 18px;\n  &:hover {\n    background-color: #dfe2de;\n    border: 2px solid #232127;\n  }\n"]))),Dn=document.getElementById("modalRoot");function Jn(){var n=Object(a.useState)(""),e=Object(g.a)(n,2),t=e[0],o=e[1],i=h();return Object(s.createPortal)(Object(K.jsx)(Ln,{children:Object(K.jsxs)(En,{onSubmit:function(n){n.preventDefault(),i(J(t)),i(B()),o(""),x.b.success("You succesfully change your todo")},children:[Object(K.jsx)(Wn,{onClick:function(){return i(B())},children:Object(K.jsx)(H.a,{size:"30"})}),Object(K.jsx)(An,{type:"text",placeholder:"Edit your todo",onChange:function(n){var e=n.target.value;o(e)}}),Object(K.jsx)(Bn,{type:"submit",children:"Confirm changes"})]})}),Dn)}t(44);var Rn,Nn,Pn=P.a.div(Rn||(Rn=Object(N.a)(["\n  background-color: #f5f5f5;\n  box-sizing: border-box;\n  padding-top: 20px;\n  min-height: 100vh;\n  position: relative;\n  background-color: #303239;\n"]))),Yn=P.a.h1(Nn||(Nn=Object(N.a)(["\n  text-align: center;\n  color: #90a2aa;\n"])));var _n=function(){var n=f((function(n){return n.isTitleShown})),e=f((function(n){return n.isModalOpen}));return Object(K.jsxs)(Pn,{children:[Object(K.jsx)(Q,{}),n&&Object(K.jsx)(Yn,{children:"Welcome to your Todo App! Click on menu to start."}),Object(K.jsxs)(p.c,{children:[Object(K.jsx)(p.a,{path:"/createform",children:Object(K.jsx)(In,{})}),Object(K.jsx)(p.a,{path:"/todos",children:Object(K.jsx)(bn,{})})]}),e&&Object(K.jsx)(Jn,{}),Object(K.jsx)(x.a,{position:"top-right",toastOptions:{duration:2e3}})]})},qn=t(13),Fn=t(51),Gn=t.n(Fn),Hn=Object(v.a)(Object(y.d)({serializableCheck:{ignoredActions:[qn.a,qn.f,qn.b,qn.c,qn.d,qn.e]}})),Kn={key:"todos",storage:Gn.a},Qn=Object(y.a)({reducer:Object(qn.g)(Kn,R),middleware:Hn,devTools:!1}),Un=Object(qn.h)(Qn);l.a.render(Object(K.jsx)(d.a.StrictMode,{children:Object(K.jsx)(j.a,{store:Qn,children:Object(K.jsx)(b.a,{loading:null,persistor:Un,children:Object(K.jsx)(u.a,{children:Object(K.jsx)(_n,{})})})})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.b55b55e2.chunk.js.map