(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(37)},19:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(13),o=a.n(r),i=(a(19),a(2)),c=a(3),l=a(6),u=a(4),m=a(7),d=function(){return s.a.createElement("h1",{className:"alert-success"},"Online Shop")},h=function(){return s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},s.a.createElement("a",{classNameName:"navbar-brand",href:"#"},s.a.createElement("img",{src:"https://www.svgimages.com/svg-image/s7/amazon-logo-256x256.png",width:"30",height:"30",className:"d-inline-block align-top",alt:"No logo found"}),"Shopping"),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},s.a.createElement("ul",{className:"navbar-nav mr-auto"},s.a.createElement("li",{className:"nav-item active"},s.a.createElement("a",{className:"nav-link",activeClassName:"active",to:"/"},"Items ",s.a.createElement("span",{className:"sr-only"},"(current)"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",to:"/about"},"AboutUs")))))},p=a(9),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={msg:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"clear",value:function(){this.refs.uid.value="",this.refs.pwd.value=""}},{key:"add",value:function(){var e=this,t=this.refs.uid.value,a={userid:t,pwd:this.refs.pwd.value};p.database().ref("users/"+t).set(a).then(function(t){e.setState({msg:" User Added...."})}).catch(function(t){e.setState({msg:"Error in User Added...."})})}},{key:"doLogin",value:function(){var e=this,t=this.refs.uid.value,a=this.refs.pwd.value;p.database().ref("users/"+t).on("value",function(n){n.val().pwd==a?(e.setState({msg:"Welcome "+t}),e.props.updateLoginStatus(!0,t)):(e.setState({msg:"Invalid Userid or Password"}),e.props.updateLoginStatus(!1))})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h2",{className:"alert-info"},"Login Page"),s.a.createElement("h3",{className:"alert-success"},this.state.msg),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"userid"},"Userid"),s.a.createElement("input",{id:"userid",ref:"uid",type:"text",className:"form-control",placeholder:"type Userid here"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Password"),s.a.createElement("input",{type:"password",ref:"pwd",className:"form-control",placeholder:"type Password here"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("button",{onClick:this.doLogin.bind(this),className:"btn btn-primary"},"Login"),"\xa0",s.a.createElement("button",{className:"btn btn-success",onClick:this.add.bind(this)},"Add"),"\xa0",s.a.createElement("button",{onClick:this.clear.bind(this),className:"btn btn-danger"},"Clear")))}}]),t}(s.a.Component),b="https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json",g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={items:[],err:{}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"doAjax",value:function(){var e=this;fetch(b).then(function(t){t.json().then(function(t){e.setState({items:t.mobiles}),console.log("Data is ",t.mobiles)}).catch(function(t){e.setState({err:t})})}).catch(function(t){e.setState({err:t})})}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.doAjax()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(d,null),s.a.createElement(h,null),s.a.createElement("h3",null,"Welcome ",this.props.userid))}}]),t}(s.a.Component),f=(a(35),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={isLogin:!1,userid:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"isAuth",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.setState({isLogin:e,userid:t})}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},this.state.isLogin?s.a.createElement(g,{userid:this.state.userid}):s.a.createElement(v,{updateLoginStatus:this.isAuth.bind(this)}))}}]),t}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.initializeApp({apiKey:"AIzaSyAnNgrL4wCHk6OiPahID9G_XoA8muVIrzg",authDomain:"hmrproject-e714c.firebaseapp.com",databaseURL:"https://hmrproject-e714c.firebaseio.com",projectId:"hmrproject-e714c",storageBucket:"hmrproject-e714c.appspot.com",messagingSenderId:"771466232737"}),o.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.5139f67a.chunk.js.map