(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(35),i=a.n(r),s=a(42),c=a(9),o=a(15),u=a(17),m=a(16),h=(a(80),a(81),a(8)),d=a(49),p=a(31),E=a(6),v=a(12),g=a(52),b=a.n(g),y=function e(){var t=this;Object(c.a)(this,e),this.login=function(e){return t.service.post("/login",e)},this.signup=function(e){return t.service.post("signup",e)},this.logout=function(){return t.service.post("/logout")},this.isLoggedIn=function(){return t.service.get("/loggedin")},this.service=b.a.create({baseURL:"http://localhost:5000/api",withCredentials:!0})},f=a(29),C=a(32),D=a(27),S=a(19),w=a(26),O=a(10),I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleModal=function(e){return n.setState({showModal:e})},n.handleInputChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(C.a)({},a,l))},n.handleFormSubmit=function(e){e.preventDefault(),n.authService.login(n.state).then((function(e){n.props.setTheUser(e.data),n.props.history.push("/vinyls"),n.props.handleModal(!1)})).catch((function(e){return console.log(e)}))},n.state={username:"",password:""},n.authService=new y,n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a,{as:"main"},l.a.createElement(w.a,null,l.a.createElement(O.a,{md:{span:6,offset:3}},l.a.createElement("h3",null," Log In "),l.a.createElement("hr",null),l.a.createElement(E.a,{onSubmit:this.handleFormSubmit},l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Username"),l.a.createElement(E.a.Control,{onChange:this.handleInputChange,value:this.state.username,name:"username",type:"text"})),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Password"),l.a.createElement(E.a.Control,{onChange:this.handleInputChange,value:this.state.password,name:"password",type:"password"}),l.a.createElement(E.a.Text,{className:"text-muted"}," Must be min. of 3 characters ")),l.a.createElement(D.a,{className:"navbar-color btn-block",type:"submit",handleModal:this.handleModal},"Log In"),l.a.createElement("br",null),l.a.createElement("div",{className:"register"},"You are a new Customer? ",l.a.createElement(v.b,{to:"/signup",className:"register-link",handleModal:this.handleModal},"Register now")))))))}}]),a}(n.Component);var U=function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"31",height:"27",enableBackground:"new 0 0 489 489",version:"1.1",viewBox:"0 0 489 489",xmlSpace:"preserve"},l.a.createElement("path",{d:"M440.1 422.7l-28-315.3c-.6-7-6.5-12.3-13.4-12.3h-57.6C340.3 42.5 297.3 0 244.5 0s-95.8 42.5-96.6 95.1H90.3c-7 0-12.8 5.3-13.4 12.3l-28 315.3c0 .4-.1.8-.1 1.2 0 35.9 32.9 65.1 73.4 65.1h244.6c40.5 0 73.4-29.2 73.4-65.1 0-.4 0-.8-.1-1.2zM244.5 27c37.9 0 68.8 30.4 69.6 68.1H174.9c.8-37.7 31.7-68.1 69.6-68.1zm122.3 435H122.2c-25.4 0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h139.3v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h45.2l26.9 302.3c-.4 20.7-21.1 37.5-46.4 37.5z"}))},j=(a(105),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).logout=function(){n.authService.logout().then((function(){n.props.setTheUser(!1),n.props.handleToast(!0,"You have been logged out"),n.props.history.push("/login")})).catch((function(e){return console.log(e)}))},n.handleModal=function(e){return n.setState({showModal:e})},n.state={showModal:!1},n.authService=new y,n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{className:"navbar-color navbar1",variant:"dark",expand:"md"},l.a.createElement(d.a.Brand,{class:"navbar1"},l.a.createElement(v.c,{to:"/"},l.a.createElement("img",{src:"../../../../dtnlogo3.png",className:"logonavbar basic-navbar-nav"}))),l.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(p.a,{className:"ml-auto"},l.a.createElement(p.a.Link,{as:"div"},l.a.createElement(v.c,{to:"/",exact:!0,activestyle:{color:"white"}},"MAIN")),l.a.createElement(p.a.Link,{as:"div"},l.a.createElement(v.c,{to:"/vinyls",activestyle:{color:"white"}},"CATALOGUE")),this.props.loggedInUser?l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a.Link,{as:"div"},l.a.createElement(v.c,{to:"/profile",activestyle:{color:"white"}},"MY ACCOUNT")),l.a.createElement(p.a.Link,{as:"div"},l.a.createElement(v.c,{to:"/login",onClick:this.logout,activestyle:{color:"white"}},"LOGOUT"))):l.a.createElement(p.a.Link,{as:"div"},l.a.createElement("span",{ref:this.myRef,onClick:function(){return e.handleModal(!0)},activestyle:{color:"white"}},"LOGIN")),this.props.loggedInUser&&"ADMIN"===this.props.loggedInUser.role?l.a.createElement(p.a.Link,{as:"span"},l.a.createElement(v.c,{to:"/add"},"ADD RELEASE")):null,l.a.createElement(p.a.Link,{as:"div"},l.a.createElement(v.c,{to:"/profile",activestyle:{color:"white"}},"Hi, ",this.props.loggedInUser?this.props.loggedInUser.username:"Guest"," ")))),l.a.createElement(E.a,{inline:!0},l.a.createElement("div",null,l.a.createElement("button",{className:"snipcart-checkout"},l.a.createElement(U,{className:"cart-logo"})),l.a.createElement("span",{className:"snipcart-total-price"}," \u20ac0.00"),"(",l.a.createElement("span",{className:"snipcart-items-count"},"0"),")"))),l.a.createElement(f.a,{size:"lg",show:this.state.showModal,onHide:function(){return e.handleModal(!1)}},l.a.createElement(f.a.Body,{className:"btn-modal-add"},l.a.createElement(I,{setTheUser:this.props.setTheUser,history:this.props.history,handleModal:this.handleModal}))))}}]),a}(n.Component)),k=Object(h.g)(j),L=a(58),M=function(e){var t=e.visible,a=e.text,n=e.handleToast;return l.a.createElement(L.a,{style:{position:"fixed",right:"550px",top:"70px",width:"700px"},show:t,onClose:function(){return n(!1)},delay:3e3,autohide:!0},l.a.createElement(L.a.Header,{class:"toast"}," ",l.a.createElement("strong",null," ",a," ")," "))},N=function e(){var t=this;Object(c.a)(this,e),this.getAllVinyls=function(){return t.service.get("/getAllVinyls")},this.getoneVinyl=function(e){return t.service.get("/getOneVinyl/".concat(e))},this.createVinyl=function(e){return t.service.post("/newVinyl",e)},this.deleteVinyl=function(e){return t.service.delete("/getOneVinyl/".concat(e))},this.updateVinyl=function(e,a){return t.service.put("/getOneVinyl/".concat(e),a)},this.service=b.a.create({baseURL:"http://localhost:5000/api/vinyls",withCredentials:!0})},T=a(44),V=function(e){var t=e._id,a=e.title,n=e.artists,r=e.price,i=e.image;return l.a.createElement(O.a,{md:4},l.a.createElement(T.a,{className:"vinyl-card"},l.a.createElement(T.a.Img,{variant:"top",src:i}),l.a.createElement(T.a.Body,null,l.a.createElement(T.a.Title,null,a),l.a.createElement(T.a.Text,null,n," ||| ",r),l.a.createElement(v.b,{to:"/vinyls/".concat(t),className:"btn btn-outline-info navbar-color-second btn-block btn-sm"},"See Details"))))},x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.props.edit_id&&n.vinylService.getoneVinyl(n.props.edit_id).then((function(e){return n.setState({vinylDetails:e.data})})).catch((function(e){return console.log(e)}))},n.handleInputChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState({vinylDetails:Object(s.a)(Object(s.a)({},n.state.vinylDetails),{},Object(C.a)({},a,l))})},n.handleFormSubmit=function(e){e.preventDefault(),n.props.edit_id?n.vinylService.updateVinyl(n.props.edit_id,Object(s.a)({},n.state.vinylDetails)).then((function(){return n.props.finishEdit()})).catch((function(e){return console.log(e)})):n.vinylService.createVinyl(n.state.vinylDetails).then((function(){return n.props.history.push("/vinyls")})).catch((function(e){return console.log(e)}))},n.state={vinylDetails:{title:"",image:"",artists:"",label:"",genre:[],price:Number,year:"",catNo:"",description:"",tracklist:""}},n.vinylService=new N,n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a,null,l.a.createElement(O.a,{md:{span:10,offset:1}},l.a.createElement("h3",null,this.props.edit_id?"EDIT REALEASE":"ADD RELEASE"," "),l.a.createElement(E.a,{onSubmit:this.handleFormSubmit},l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Title"),l.a.createElement(E.a.Control,{onChange:this.handleInputChange,value:this.state.vinylDetails.title,name:"title",type:"text"})),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Image (URL)"),l.a.createElement(E.a.Control,{onChange:this.handleInputChange,value:this.state.vinylDetails.image,name:"image",type:"text"})),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Artists"),l.a.createElement(E.a.Control,{onChange:this.handleInputChange,value:this.state.vinylDetails.artists,name:"artists",type:"text"})),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Label"),l.a.createElement(E.a.Control,{onChange:this.handleInputChange,value:this.state.vinylDetails.label,name:"label",type:"text"})),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Genre"),l.a.createElement(E.a.Control,{onChange:this.handleInputChange,name:"genre",as:"select"},l.a.createElement("option",{value:"Electronic"},"Electronic"),l.a.createElement("option",{value:"Jazz"},"Jazz"),l.a.createElement("option",{value:"Funk"},"Funk"),l.a.createElement("option",{value:"Dance"},"Dance"),l.a.createElement("option",{value:"House"},"House"),l.a.createElement("option",{value:"Deep House"},"Deep House"),l.a.createElement("option",{value:"Techno"},"Techno"),l.a.createElement("option",{value:"Acid"},"Acid"),l.a.createElement("option",{value:"BreakBeat"},"BreakBeat"),l.a.createElement("option",{value:"Electro"},"Electro"),l.a.createElement("option",{value:"Latin"},"Latin"),l.a.createElement("option",{value:"Brasil"},"Brasil"),l.a.createElement("option",{value:"African"},"African"),l.a.createElement("option",{value:"Disco"},"Disco"),l.a.createElement("option",{value:"Soul"},"Soul"),l.a.createElement("option",{value:"Reggae"},"Reggae"),l.a.createElement("option",{value:"Rock"},"Rock"),l.a.createElement("option",{value:"Experimental"},"Experimental"),l.a.createElement("option",{value:"Ambient"},"Ambient"),l.a.createElement("option",{value:"Pop"},"Pop"))),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Price"),l.a.createElement(E.a.Control,{onChange:this.handleInputChange,value:this.state.vinylDetails.price,name:"price",type:"text"})),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Year"),l.a.createElement(E.a.Control,{onChange:this.handleInputChange,value:this.state.vinylDetails.year,name:"year",type:"number"})),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Cat No"),l.a.createElement(E.a.Control,{onChange:this.handleInputChange,value:this.state.vinylDetails.catNo,name:"catNo",type:"text"})),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Description"),l.a.createElement(E.a.Control,{onChange:this.handleInputChange,value:this.state.vinylDetails.description,name:"description",type:"text",as:"textarea",rows:"3"})),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Tracklist"),l.a.createElement(E.a.Control,{onChange:this.handleInputChange,value:this.state.vinylDetails.tracklist,name:"tracklist",type:"text",as:"textarea",rows:"3"})),l.a.createElement(D.a,{className:"btn-outline-info navbar-color-second",type:"submit"},this.props.edit_id?"UPDATE":"ADD")))))}}]),a}(n.Component),A=(a(106),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.updateVinylList()},n.updateVinylList=function(){n.vinylService.getAllVinyls().then((function(e){return n.setState({vinyls:e.data})})).catch((function(e){return console.log(e)}))},n.handleModal=function(e){return n.setState({showModal:e})},n.handleVinylSubmit=function(){n.handleModal(!1),n.updateVinylList()},n.state={vinyls:void 0,showModal:!1},n.vinylService=new N,n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a,{as:"main",className:"vinyls-page"},l.a.createElement(O.a,{md:12},l.a.createElement("h1",null," Catalogue "),l.a.createElement("hr",null),this.state.vinyls?l.a.createElement(w.a,null,this.state.vinyls.map((function(e){return l.a.createElement(V,Object.assign({key:e._id},e))}))):l.a.createElement("h3",null,"CARGANDO"))),l.a.createElement(f.a,{size:"lg",show:this.state.showModal,onHide:function(){return e.handleModal(!1)}},l.a.createElement(f.a.Body,{className:"btn-modal-add"},l.a.createElement(x,{handleVinylSubmit:this.handleVinylSubmit}))))}}]),a}(n.Component));var G=function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"12",enableBackground:"new 0 0 31.494 31.494",version:"1.1",viewBox:"0 0 31.494 31.494",xmlSpace:"preserve"},l.a.createElement("path",{fill:"#1E201D",d:"M10.273 5.009a1.112 1.112 0 011.587 0 1.12 1.12 0 010 1.571l-8.047 8.047h26.554c.619 0 1.127.492 1.127 1.111s-.508 1.127-1.127 1.127H3.813l8.047 8.032c.429.444.429 1.159 0 1.587a1.112 1.112 0 01-1.587 0L.321 16.532a1.12 1.12 0 010-1.571l9.952-9.952z"}))},_=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){var e=n.props.match.params.vinyl_id;n.vinylService.getoneVinyl(e).then((function(e){return n.setState({vinylDetails:e.data})})).catch((function(e){return console.log(e)}))},n.getOneVinyl=function(e){n.vinylService.getoneVinyl(e).then((function(e){return n.setState({vinylDetails:e.data})})).catch((function(e){return console.log(e)}))},n.updateVinylList=function(){n.vinylService.getAllVinyls().then((function(e){return n.setState({vinyls:e.data})})).catch((function(e){return console.log(e)}))},n.handleModal=function(e){return n.setState({showModal:e})},n.editVinyl=function(e){n.setState({edit_id:e},(function(){return n.handleModal(!0)}))},n.editFinish=function(){n.handleVinylSubmit(),n.getOneVinyl(n.state.edit_id),n.setState({edit_id:void 0})},n.handleDeleteVinyl=function(e){var t=n.props.match.params.vinyl_id;e.preventDefault(),n.vinylService.deleteVinyl(t).then((function(){return n.updateVinylList()})).then((function(){return n.props.history.push("/vinyls")})).catch((function(e){return console.log(e)}))},n.handleVinylSubmit=function(){n.updateVinylList(),n.handleModal(!1)},n.state={vinylDetails:{},edit_id:void 0,showModal:!1},n.vinylService=new N,n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return this.state.vinylDetails?l.a.createElement(S.a,{as:"main"},l.a.createElement(w.a,null,l.a.createElement(O.a,{md:12,className:"vinyl-detail-back"},l.a.createElement(G,{className:"arrow-icon"}),l.a.createElement(v.b,{to:"/vinyls"},"  Back To Catalogue"))),l.a.createElement(w.a,null,l.a.createElement(O.a,{md:6},l.a.createElement("img",{src:this.state.vinylDetails.image,alt:this.state.vinylDetails.title})),l.a.createElement(O.a,{md:6,className:"product-info"},l.a.createElement("h1",null,l.a.createElement("b",null,this.state.vinylDetails.title)),l.a.createElement("h3",null,this.state.vinylDetails.artists),l.a.createElement("h5",null,this.state.vinylDetails.label),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,this.state.vinylDetails.price," \u20ac"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{className:"snipcart-add-item  btn btn-outline-info navbar-color-second btn-block btn-md","data-item-id":this.state.vinylDetails._id,"data-item-price":this.state.vinylDetails.price,"data-item-url":"/cart","data-item-image":this.state.vinylDetails.image,"data-item-name":this.state.vinylDetails.title,"data-item-description":this.state.vinylDetails.description},"Add to cart"),l.a.createElement("br",null))),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement(w.a,null,l.a.createElement(O.a,{md:6},l.a.createElement("h5",null,l.a.createElement("b",null,"Details")),l.a.createElement("br",null),l.a.createElement("h6",null,l.a.createElement("b",null,"Genre")),l.a.createElement("p",null,this.state.vinylDetails.genre),l.a.createElement("br",null),l.a.createElement("h6",null,l.a.createElement("b",null,"Release Year")),l.a.createElement("p",null,this.state.vinylDetails.year),l.a.createElement("br",null),l.a.createElement("h6",null,l.a.createElement("b",null,"Cat No")),l.a.createElement("p",null,this.state.vinylDetails.catNo),this.props.loggedInUser&&"ADMIN"===this.props.loggedInUser.role?l.a.createElement(D.a,{onClick:function(){return e.editVinyl(e.state.vinylDetails._id)},className:"btn btn-outline-info navbar-color-second btn-block btn-md"},"EDIT"):null,this.props.loggedInUser&&"ADMIN"===this.props.loggedInUser.role?l.a.createElement(v.b,{to:"/vinyls",onClick:this.handleDeleteVinyl,handleVinylSubmit:this.handleVinylSubmit,className:"btn btn-outline-info navbar-color-second btn-block btn-md"},"Eliminate"):null,l.a.createElement(f.a,{size:"lg",show:this.state.showModal,onHide:function(){return e.handleModal(!1)}},l.a.createElement(f.a.Body,{className:"btn-modal-add"},l.a.createElement(x,{edit_id:this.state.edit_id,postFinish:this.handleVinylSubmit,finishEdit:this.editFinish,closeModal:function(){return e.handleModal(!1)}})))),l.a.createElement(O.a,{md:6,className:"product-info"},l.a.createElement("h5",null,l.a.createElement("b",null,"Description")),l.a.createElement("hr",null),l.a.createElement("p",null,this.state.vinylDetails.description),l.a.createElement("br",null),l.a.createElement("h5",null,l.a.createElement("b",null,"Tracklist")),l.a.createElement("hr",null),l.a.createElement("p",null,this.state.vinylDetails.tracklist)))):l.a.createElement("h3",null," CARGANDO ")}}]),a}(n.Component),F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(C.a)({},a,l))},n.handleFormSubmit=function(e){e.preventDefault(),n.authService.signup(n.state).then((function(e){n.props.setTheUser(e.data),n.props.handleToast(!0,"You have been registered in at DTN"),n.props.history.push("/vinyls")})).catch((function(e){return console.log(e.response.data.message)}))},n.state={username:"",password:"",email:""},n.authService=new y,n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a,{as:"main"},l.a.createElement(w.a,null,l.a.createElement(O.a,{md:{span:6,offset:3}},l.a.createElement("h3",null," Sign Up "),l.a.createElement("hr",null),l.a.createElement(E.a,{onSubmit:this.handleFormSubmit},l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Username"),l.a.createElement(E.a.Control,{onChange:this.handleInputChange,value:this.state.username,name:"username",type:"text"})),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Password"),l.a.createElement(E.a.Control,{onChange:this.handleInputChange,value:this.state.password,name:"password",type:"password"}),l.a.createElement(E.a.Text,{className:"text-muted"}," Must be min. of 3 characters ")),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"E-Mail"),l.a.createElement(E.a.Control,{onChange:this.handleInputChange,value:this.state.email,name:"email",type:"email"})),l.a.createElement(D.a,{className:"navbar-color btn-block",type:"submit"},"Sign Up"))))))}}]),a}(n.Component),B=function(e){return e.loggedInUser&&l.a.createElement("h1",null," Hi, ",e.loggedInUser.username," ")},R=(a(107),a(48)),H=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.updateVinylList()},n.updateVinylList=function(){n.vinylService.getAllVinyls().then((function(e){return n.setState({vinyls:e.data})})).catch((function(e){return console.log(e)}))},n.state={vinyls:[]},n.vinylService=new N,n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(S.a,{className:"fluid carousel-back"},l.a.createElement(R.a,null,this.state.vinyls.map((function(e){return l.a.createElement(R.a.Item,null,l.a.createElement("img",{className:"carousel",src:e.image,alt:e.title}),l.a.createElement(R.a.Caption,null,l.a.createElement("h3",null,l.a.createElement(v.b,{to:"/vinyls/".concat(e._id)},e.title)),l.a.createElement("p",null,e.artists)))}))))}}]),a}(n.Component),z=function(){return l.a.createElement("h1",null)},P=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("body",{className:"teaser"},l.a.createElement(H,null)),l.a.createElement(z,null))},Y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).setTheUser=function(t){return e.setState({loggedInUser:t},(function(){return console.log("the state has changed:",e.state)}))},e.componentDidMount=function(){return e.fetchUser()},e.fetchUser=function(){e.authService.isLoggedIn().then((function(t){return null===e.state.loggedInUser&&e.setState({loggedInUser:t.data})})).catch((function(e){return console.log({err:e})}))},e.handleToast=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(s.a)({},e.state.toast);n={visible:t,text:a},e.setState({toast:n})},e.state={loggedInUser:null,toast:{visible:!1,text:""}},e.authService=new y,e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(k,{setTheUser:this.setTheUser,loggedInUser:this.state.loggedInUser,handleToast:this.handleToast})),l.a.createElement(h.d,null,l.a.createElement(h.b,{exact:!0,path:"/",render:function(){return l.a.createElement(P,null)}}),l.a.createElement(h.b,{path:"/profile",render:function(){return e.state.loggedInUser?l.a.createElement(B,{loggedInUser:e.state.loggedInUser}):l.a.createElement(h.a,{to:"/login"})}}),l.a.createElement(h.b,{exact:!0,path:"/vinyls",render:function(t){return l.a.createElement(A,Object.assign({},t,{setTheUser:e.setTheUser,loggedInUser:e.state.loggedInUser}))}}),l.a.createElement(h.b,{path:"/vinyls/:vinyl_id",render:function(t){return l.a.createElement(_,Object.assign({},t,{setTheUser:e.setTheUser,loggedInUser:e.state.loggedInUser}))}}),l.a.createElement(h.b,{path:"/add",render:function(t){return!0===e.state.loggedInUser.isAdmin?l.a.createElement(x,t):l.a.createElement(h.a,{to:"/vinyls"})}}),l.a.createElement(h.b,{path:"/signup",render:function(t){return l.a.createElement(F,Object.assign({},t,{setTheUser:e.setTheUser,handleToast:e.handleToast}))}}),l.a.createElement(h.b,{path:"/login",render:function(t){return l.a.createElement(I,Object.assign({},t,{setTheUser:e.setTheUser,handleToast:e.handleToast}))}})),l.a.createElement(M,Object.assign({},this.state.toast,{handleToast:this.handleToast})))}}]),a}(n.Component);i.a.render(l.a.createElement(v.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(Y,null)),","),document.getElementById("root"))},75:function(e,t,a){e.exports=a(108)},81:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.a8a4338f.chunk.js.map