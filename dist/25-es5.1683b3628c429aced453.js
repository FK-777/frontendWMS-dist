!function(){function e(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function c(e,c){for(var t=0;t<c.length;t++){var o=c[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t,o){return t&&c(e.prototype,t),o&&c(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{FKha:function(c,o,r){"use strict";r.r(o),r.d(o,"OfficeEmployeesModule",function(){return Y});var n=r("SVse"),i=r("iInd"),a=r("s7LF"),l=r("tyVc"),s=r("alHs"),d=r("mHm1"),m=r("RMBY"),u=r("8Y7J"),b=r("EApP"),g=r("9ixH");function p(e,c){1&e&&(u.ac(0),u.Xb(1,"i",10),u.cc(2,"h5",11),u.Tc(3,"Verifying..."),u.bc(),u.Zb())}function h(e,c){1&e&&(u.ac(0),u.Xb(1,"i",12),u.cc(2,"h5",13),u.Tc(3,"Failed!"),u.bc(),u.cc(4,"p",14),u.Tc(5,"The link is invalid or expired."),u.bc(),u.cc(6,"a",15),u.Tc(7,"Request New Link"),u.bc(),u.Zb())}function f(e,c){1&e&&(u.ac(0),u.Xb(1,"i",16),u.cc(2,"h5",13),u.Tc(3,"Success!"),u.bc(),u.cc(4,"p",14),u.Tc(5,"Account verified successfully!"),u.bc(),u.Zb())}var v,y=((v=function(){function c(t,o,r,n,i){e(this,c),this.router=t,this.route=o,this.formBuilder=r,this.toastrService=n,this.authenticationService=i,this.invalidLink=!1,this.loading=!0}return t(c,[{key:"ngOnInit",value:function(){this.route.snapshot.params.verification?this.verifyAccount():this.invalidLink=!0}},{key:"verifyAccount",value:function(){var e=this;this.loading=!0,this.authenticationService.verifyAccount(this.route.snapshot.params.verification).then(function(c){m.a.setLoggedUser(c),e.toastrService.success("Account verified","Success!"),e.loading=!1,console.log(c),"admin"==c.role?e.router.navigate(["/dashboard"]):"lab"==c.role?e.router.navigate(["/lab-sample"]):"researcher"==c.role&&e.router.navigate(["/customer"])}).catch(function(c){console.log("======>",c),c.error&&c.error.message&&e.toastrService.error(c.error.message),e.invalidLink=!0,e.loading=!1})}}]),c}()).\u0275fac=function(e){return new(e||v)(u.Wb(i.e),u.Wb(i.a),u.Wb(a.c),u.Wb(b.b),u.Wb(g.a))},v.\u0275cmp=u.Qb({type:v,selectors:[["app-verify-account"]],decls:15,vars:3,consts:[[1,"row","w-100","mx-0","auth-page"],[1,"col-md-8","col-xl-6","mx-auto"],[1,"card"],[1,"row"],[1,"col-md-4","pr-md-0"],[1,"auth-left-wrapper"],[1,"col-md-8","pl-md-0"],[1,"auth-form-wrapper","px-4","py-5"],["routerLink",".",1,"app-logo","d-block","mb-2"],[4,"ngIf"],["data-feather","loader",1,"loading"],[1,"text-muted","mt-3"],["data-feather","alert-triangle",1,"xl-icon"],[1,"text-muted","mt-2"],[1,"text-muted","mt-1"],["routerLink","/auth/forgot-password",1,"d-block","mt-2","text-muted"],["data-feather","check",1,"xl-icon",2,"color","green"]],template:function(e,c){1&e&&(u.cc(0,"div",0),u.cc(1,"div",1),u.cc(2,"div",2),u.cc(3,"div",3),u.cc(4,"div",4),u.Xb(5,"div",5),u.bc(),u.cc(6,"div",6),u.cc(7,"div",7),u.cc(8,"a",8),u.Tc(9,"WMS"),u.cc(10,"span"),u.Tc(11,"GB"),u.bc(),u.bc(),u.Rc(12,p,4,0,"ng-container",9),u.Rc(13,h,8,0,"ng-container",9),u.Rc(14,f,6,0,"ng-container",9),u.bc(),u.bc(),u.bc(),u.bc(),u.bc(),u.bc()),2&e&&(u.Jb(12),u.uc("ngIf",c.loading),u.Jb(1),u.uc("ngIf",c.invalidLink&&!c.loading),u.Jb(1),u.uc("ngIf",!c.invalidLink&&!c.loading))},directives:[i.g,n.n],styles:["[_nghost-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center}.auth-form-wrapper[_ngcontent-%COMP%]{min-height:380px}.xl-icon[_ngcontent-%COMP%]{width:100px;height:auto}.loading[_ngcontent-%COMP%]{width:50px;height:auto;-webkit-animation-name:ckw;animation-name:ckw;-webkit-animation-duration:4s;animation-duration:4s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes ckw{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes ckw{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]}),v);function x(e,c){if(1&e&&(u.cc(0,"p",15),u.Tc(1),u.bc()),2&e){var t=u.oc();u.Jb(1),u.Vc(" ",t.emailError(),"")}}var k,w,O=((w=function(){function c(t,o,r,n){e(this,c),this.router=t,this.formBuilder=o,this.toastrService=r,this.authenticationService=n}return t(c,[{key:"ngOnInit",value:function(){this.createForm()}},{key:"createForm",value:function(){this.forgotForm=this.formBuilder.group({email:["",[a.s.minLength(5),a.s.maxLength(100),a.s.required,a.s.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]})}},{key:"forgotPassword",value:function(){var e=this;if(this.forgotForm.invalid)this.forgotForm.markAllAsTouched();else{this.loading=!0;var c=this.forgotForm.get("email").value.toString();this.authenticationService.forgotPassword(c).then(function(c){console.log(c),e.loading=!1,e.forgotForm.reset(),c.success&&e.toastrService.success("Please check your email to reset password!","Success")}).catch(function(c){console.log("======>",c),c.error&&c.error.message&&e.toastrService.error(c.error.message),e.loading=!1})}}},{key:"emailError",value:function(){return this.forgotForm.controls.email.hasError("required")?"Valid email is required":this.forgotForm.controls.email.hasError("maxlength")?"Email cannot exceed 100 characters":this.forgotForm.controls.email.hasError("minlength")?"Email is required of minimum length of 5 characters":this.forgotForm.controls.email.hasError("pattern")?"Valid email is required":""}}]),c}()).\u0275fac=function(e){return new(e||w)(u.Wb(i.e),u.Wb(a.c),u.Wb(b.b),u.Wb(g.a))},w.\u0275cmp=u.Qb({type:w,selectors:[["app-forgot-password"]],decls:20,vars:2,consts:[[1,"row","w-100","mx-0","auth-page"],[1,"col-md-8","col-xl-6","mx-auto"],[1,"card"],[1,"row"],[1,"col-md-4","pr-md-0"],[1,"auth-left-wrapper"],[1,"col-md-8","pl-md-0"],[1,"auth-form-wrapper","px-4","py-5"],["routerLink",".",1,"app-logo","d-block","mb-2"],[1,"text-muted","font-weight-normal","mb-4"],[1,"forms-sample",3,"formGroup"],[1,"form-group"],["for","email"],["type","email","id","email","placeholder","Enter Your Email","formControlName","email",1,"form-control"],["class","text-danger mt-1",4,"ngIf"],[1,"text-danger","mt-1"]],template:function(e,c){1&e&&(u.cc(0,"div",0),u.cc(1,"div",1),u.cc(2,"div",2),u.cc(3,"div",3),u.cc(4,"div",4),u.Xb(5,"div",5),u.bc(),u.cc(6,"div",6),u.cc(7,"div",7),u.cc(8,"a",8),u.Tc(9,"WMS"),u.cc(10,"span"),u.Tc(11,"GB"),u.bc(),u.bc(),u.cc(12,"h5",9),u.Tc(13,"Forgot Password! An email will be sent to you"),u.bc(),u.cc(14,"form",10),u.cc(15,"div",11),u.cc(16,"label",12),u.Tc(17,"Email address"),u.bc(),u.Xb(18,"input",13),u.Rc(19,x,2,1,"p",14),u.bc(),u.bc(),u.bc(),u.bc(),u.bc(),u.bc(),u.bc(),u.bc()),2&e&&(u.Jb(14),u.uc("formGroup",c.forgotForm),u.Jb(5),u.uc("ngIf",c.forgotForm.controls.email.touched||c.forgotForm.controls.email.dirty))},directives:[i.g,a.u,a.l,a.g,a.b,a.k,a.f,n.n],styles:["[_nghost-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center}"]}),w),C=((k=function(){function c(){e(this,c)}return t(c,[{key:"ngOnInit",value:function(){}}]),c}()).\u0275fac=function(e){return new(e||k)},k.\u0275cmp=u.Qb({type:k,selectors:[["app-office-employees"]],decls:1,vars:0,template:function(e,c){1&e&&u.Xb(0,"router-outlet")},directives:[i.i],encapsulation:2}),k),P=r("vVw+"),M=r("f4AX"),T=r("IYwT");function F(e,c){1&e&&(u.cc(0,"div",0),u.cc(1,"div",10),u.cc(2,"div",11),u.cc(3,"div",12),u.cc(4,"h3",13),u.Tc(5,"About"),u.bc(),u.bc(),u.bc(),u.bc(),u.bc())}function _(e,c){1&e&&(u.ac(0,14),u.cc(1,"div",15),u.cc(2,"div",16),u.cc(3,"div",17),u.cc(4,"div",18),u.Xb(5,"i",19),u.cc(6,"h5",20),u.Tc(7,"Success!"),u.bc(),u.cc(8,"p",21),u.Tc(9,"Account created. Please check your email for verification link."),u.bc(),u.bc(),u.bc(),u.bc(),u.bc(),u.Zb()),2&e&&(u.Jb(5),u.Kb("data-feather","check"))}function E(e,c){if(1&e&&(u.cc(0,"p",63),u.Tc(1),u.bc()),2&e){var t=u.oc(2);u.Jb(1),u.Uc(t.fNameError())}}function N(e,c){if(1&e&&(u.cc(0,"p",63),u.Tc(1),u.bc()),2&e){var t=u.oc(2);u.Jb(1),u.Uc(t.lNameError())}}function S(e,c){if(1&e&&(u.cc(0,"p",63),u.Tc(1),u.bc()),2&e){var t=u.oc(2);u.Jb(1),u.Uc(t.phoneError())}}function I(e,c){if(1&e&&(u.cc(0,"p",63),u.Tc(1),u.bc()),2&e){var t=u.oc(2);u.Jb(1),u.Uc(t.emailError())}}function L(e,c){if(1&e&&(u.cc(0,"p",63),u.Tc(1),u.bc()),2&e){var t=u.oc(2);u.Jb(1),u.Uc(t.passwordError())}}function q(e,c){if(1&e){var t=u.dc();u.cc(0,"div",0),u.cc(1,"div",10),u.cc(2,"div",17),u.cc(3,"div",12),u.cc(4,"h6",22),u.Tc(5,"Profile Picture"),u.bc(),u.Xb(6,"img",23),u.cc(7,"div",24),u.mc("click",function(e){return u.Jc(t),u.oc().openFileBrowser(e)}),u.cc(8,"button",25),u.Tc(9,"Upload"),u.bc(),u.bc(),u.Xb(10,"hr"),u.cc(11,"h6",2),u.Tc(12,"Basic Information"),u.bc(),u.cc(13,"form",26),u.cc(14,"div",0),u.cc(15,"div",27),u.cc(16,"div",28),u.Xb(17,"input",29),u.Rc(18,E,2,1,"p",30),u.bc(),u.bc(),u.cc(19,"div",27),u.cc(20,"div",28),u.Xb(21,"input",31),u.Rc(22,N,2,1,"p",30),u.bc(),u.bc(),u.cc(23,"div",27),u.cc(24,"div",28),u.Xb(25,"input",32),u.Rc(26,S,2,1,"p",30),u.bc(),u.bc(),u.bc(),u.cc(27,"div",0),u.cc(28,"div",27),u.cc(29,"div",28),u.Xb(30,"input",33),u.Rc(31,I,2,1,"p",30),u.bc(),u.bc(),u.cc(32,"div",27),u.cc(33,"div",28),u.Xb(34,"input",34),u.Rc(35,L,2,1,"p",30),u.bc(),u.bc(),u.cc(36,"div",27),u.cc(37,"div",28),u.cc(38,"div",35),u.cc(39,"label",36),u.Xb(40,"input",37),u.Xb(41,"i",38),u.Tc(42," Male "),u.bc(),u.bc(),u.cc(43,"div",39),u.cc(44,"label",36),u.Xb(45,"input",37),u.Xb(46,"i",38),u.Tc(47," Female "),u.bc(),u.bc(),u.cc(48,"div",39),u.cc(49,"label",36),u.Xb(50,"input",37),u.Xb(51,"i",38),u.Tc(52," Others "),u.bc(),u.bc(),u.bc(),u.bc(),u.bc(),u.Xb(53,"hr"),u.cc(54,"h6",2),u.Tc(55,"Employee Information"),u.bc(),u.cc(56,"div",0),u.cc(57,"div",27),u.cc(58,"div",28),u.cc(59,"label"),u.Tc(60,"Department"),u.bc(),u.cc(61,"select",40),u.cc(62,"option",41),u.Tc(63,"Select Department"),u.bc(),u.cc(64,"option",42),u.Tc(65,"HR"),u.bc(),u.cc(66,"option",43),u.Tc(67,"Management"),u.bc(),u.cc(68,"option",44),u.Tc(69,"Area Staff"),u.bc(),u.cc(70,"option",45),u.Tc(71,"Finance"),u.bc(),u.bc(),u.bc(),u.bc(),u.cc(72,"div",27),u.cc(73,"div",28),u.cc(74,"label"),u.Tc(75,"Date of Joining"),u.bc(),u.Xb(76,"input",46),u.bc(),u.bc(),u.cc(77,"div",27),u.cc(78,"div",28),u.cc(79,"label"),u.Tc(80,"Company Email"),u.bc(),u.Xb(81,"input",47),u.bc(),u.bc(),u.bc(),u.cc(82,"div",0),u.cc(83,"div",27),u.cc(84,"div",28),u.cc(85,"label"),u.Tc(86,"Designation"),u.bc(),u.cc(87,"select",40),u.cc(88,"option",41),u.Tc(89,"Select Designation"),u.bc(),u.cc(90,"option",48),u.Tc(91,"OG1"),u.bc(),u.cc(92,"option",48),u.Tc(93,"OG2"),u.bc(),u.cc(94,"option",48),u.Tc(95,"OG3"),u.bc(),u.bc(),u.bc(),u.bc(),u.cc(96,"div",27),u.cc(97,"div",28),u.cc(98,"label"),u.Tc(99,"Reports To"),u.bc(),u.cc(100,"select",40),u.cc(101,"option",41),u.Tc(102,"Reports To"),u.bc(),u.cc(103,"option",49),u.Tc(104,"HR Manager"),u.bc(),u.cc(105,"option",50),u.Tc(106,"Staff Manager"),u.bc(),u.cc(107,"option",51),u.Tc(108,"CEO"),u.bc(),u.bc(),u.bc(),u.bc(),u.bc(),u.cc(109,"div",0),u.cc(110,"div",52),u.cc(111,"div",28),u.cc(112,"label"),u.Tc(113,"Biometric Attendance"),u.bc(),u.Xb(114,"br"),u.bc(),u.bc(),u.cc(115,"div",53),u.cc(116,"label",54),u.Xb(117,"input",55),u.Xb(118,"span",56),u.bc(),u.bc(),u.cc(119,"div",57),u.cc(120,"div",58),u.cc(121,"label",59),u.Tc(122,"Type of Employee"),u.bc(),u.cc(123,"div",60),u.cc(124,"label",36),u.Xb(125,"input",61),u.Xb(126,"i",38),u.Tc(127," Full-Time "),u.bc(),u.bc(),u.cc(128,"div",39),u.cc(129,"label",36),u.Xb(130,"input",61),u.Xb(131,"i",38),u.Tc(132," Part-Time "),u.bc(),u.bc(),u.bc(),u.bc(),u.bc(),u.cc(133,"button",62),u.mc("click",function(){return u.Jc(t),u.oc().register()}),u.Tc(134,"Sign Up"),u.bc(),u.bc(),u.bc(),u.bc(),u.bc(),u.bc()}if(2&e){var o=u.oc();u.Jb(13),u.uc("formGroup",o.regForm),u.Jb(5),u.uc("ngIf",o.regForm.controls.fName.touched||o.regForm.controls.fName.dirty),u.Jb(4),u.uc("ngIf",o.regForm.controls.lName.touched||o.regForm.controls.lName.dirty),u.Jb(4),u.uc("ngIf",o.regForm.controls.pNumber.touched||o.regForm.controls.pNumber.dirty),u.Jb(5),u.uc("ngIf",o.regForm.controls.email.touched||o.regForm.controls.email.dirty),u.Jb(4),u.uc("ngIf",o.regForm.controls.password.touched||o.regForm.controls.password.dirty),u.Jb(98),u.uc("disabled",o.regForm.invalid||o.loading)}}var R,X=((R=function(){function c(t,o,r,n,i,a){var l=this;e(this,c),this.router=t,this.route=o,this.formBuilder=r,this.authenticationService=n,this.userService=i,this.toastrService=a,this.role="",this.loading=!1,this.loadingIndicator=!0,this.checkVerificationEmailStep=!1,this.reorderable=!0,this.rows=[],this.user=m.a.getLoggedUser().id,this.officeRole="6257bb97a3cc8e08e46399fc",this.myOfficeUsers=[],this.users=[],this.fetch(function(e){l.rows=e,setTimeout(function(){l.loadingIndicator=!1},1500)})}return t(c,[{key:"fetch",value:function(e){var c=new XMLHttpRequest;c.open("GET","assets/data/100k.json"),c.onload=function(){e(JSON.parse(c.response))},c.send()}},{key:"createForm",value:function(){this.regForm=this.formBuilder.group({email:["",[a.s.minLength(5),a.s.maxLength(100),a.s.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),a.s.required]],password:["",[a.s.minLength(8),a.s.maxLength(100),a.s.required,a.s.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/)]],fName:["",[a.s.minLength(2),a.s.maxLength(50),a.s.required]],lName:["",[a.s.minLength(2),a.s.maxLength(50),a.s.required]],OfficeId:[this.user],pNumber:["",[a.s.minLength(2),a.s.maxLength(15),a.s.required]],role:["employee"],rememberMe:[!1]})}},{key:"ngOnInit",value:function(){this.fetchReUser(),this.createForm()}},{key:"fetchReUser",value:function(){var e=this;this.userService.getUsers({}).subscribe(function(c){console.log("pehly"),console.log(c),e.users=c;for(var t=0,o=0;t<e.users.length;t++)e.users[t].RoleId==e.officeRole&&(e.myOfficeUsers[o]=e.users[t],o++,console.log("inside If Statement "));console.log("badd main"),console.log(e.users)})}},{key:"register",value:function(){var e=this;if(this.regForm.invalid)this.regForm.markAllAsTouched();else{this.loading=!0;var c=this.regForm.value;this.authenticationService.register(this.regForm.value).then(function(t){c.rememberMe&&P.a.setItem("ci_email_remember",c.email),e.checkVerificationEmailStep=!0,e.loading=!1,e.regForm.reset(),e.toastrService.success("Please check your email for account verification","Success")}).catch(function(c){c.error&&c.error.message&&e.toastrService.error(c.error.message),e.loading=!1})}}},{key:"openFileBrowser",value:function(e){e.preventDefault(),document.querySelector("#fileUploadInputExample").click()}},{key:"handleFileInput",value:function(e){e.target.files.length&&document.querySelector("#fileUploadInputExample + .input-group .file-upload-info").setAttribute("value",e.target.files[0].name)}},{key:"emailError",value:function(){return this.regForm.controls.email.hasError("required")?"Valid email is required":this.regForm.controls.email.hasError("maxlength")?"Email cannot exceed 100 characters":this.regForm.controls.email.hasError("minlength")?"Email is required of minimum length of 5 characters":this.regForm.controls.email.hasError("pattern")?"Valid email is required":""}},{key:"universityError",value:function(){return this.regForm.controls.university.hasError("required")?"university is required":""}},{key:"ResearcherIdError",value:function(){return this.regForm.controls.ResearcherId.hasError("required")?"Researcher Name is required":""}},{key:"phoneError",value:function(){return this.regForm.controls.pNumber.hasError("required")?"Phone number is required":this.regForm.controls.pNumber.hasError("maxlength")?"phone number cannot exceed 50 characters":this.regForm.controls.pNumber.hasError("minlength")?"phone number is required of minimum length of 2 characters":""}},{key:"passwordError",value:function(){return this.regForm.controls.password.hasError("required")?"Password is required":this.regForm.controls.password.hasError("minlength")?"Password is required of minimum length of 8 characters":this.regForm.controls.password.hasError("maxlength")?"First Name cannot exceed 100 characters":this.regForm.controls.password.hasError("pattern")?"Password must contain at least an upper case, a lower case and a special character.":""}},{key:"fNameError",value:function(){return this.regForm.controls.fName.hasError("required")?"First Name is required":this.regForm.controls.fName.hasError("maxlength")?"First Name cannot exceed 50 characters":this.regForm.controls.fName.hasError("minlength")?"First Name is required of minimum length of 2 characters":""}},{key:"lNameError",value:function(){return this.regForm.controls.lName.hasError("required")?"Last Name is required":this.regForm.controls.lName.hasError("maxlength")?"Last Name cannot exceed 50 characters":this.regForm.controls.lName.hasError("minlength")?"Last Name is required of minimum length of 2 characters":""}}]),c}()).\u0275fac=function(e){return new(e||R)(u.Wb(i.e),u.Wb(i.a),u.Wb(a.c),u.Wb(g.a),u.Wb(M.a),u.Wb(b.b))},R.\u0275cmp=u.Qb({type:R,selectors:[["app-add-employee"]],decls:17,vars:3,consts:[[1,"row"],[1,"col-md-12"],[1,"card-title","color-blue"],[1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","."],["aria-current","page",1,"breadcrumb-item","active"],["class","row",4,"ngIf"],["style","background-color: green;",4,"ngIf"],[1,"col-md-12","stretch-card"],[1,"card","back"],[1,"card-body"],[1,"text-color"],[2,"background-color","green"],[1,"row",2,"background-color","green"],[1,"col-md-12","stretch-card",2,"background-color","green"],[1,"card"],[1,"card-body",2,"background-color","rgb(215, 247, 216)"],["appFeatherIcon","",1,"xl-icon"],[1,"text-muted","mt-2"],[1,"text-muted","mt-1"],[1,"card-title"],["src","../assets/images/profileicon.png","alt","Profile Icon","width","100","height","100"],[1,"input-group","col-xs-12",3,"click"],["type","button",1,"file-upload-browse","btn","btn-primary","ml-2"],[1,"forms-sample",3,"formGroup"],[1,"col-sm-4"],[1,"form-group"],["type","text","id","fName","placeholder","First Name","formControlName","fName",1,"form-control","ulineform"],["class","text-danger mt-1",4,"ngIf"],["type","text","id","lName","placeholder","Last Name","formControlName","lName",1,"form-control","ulineform"],["type","text","id","pNumber","placeholder","Phone Number","formControlName","pNumber",1,"form-control","ulineform"],["type","text","id","email","placeholder","Email","formControlName","email",1,"form-control","ulineform"],["type","text","id","email","placeholder","password","formControlName","password",1,"form-control","ulineform"],[1,"form-check","form-check-inline","mt-3"],[1,"form-check-label"],["type","radio","name","optionsRadios9","id","optionsRadios9","value","option11",1,"form-check-input"],[1,"input-frame"],[1,"form-check","form-check-inline"],[1,"form-control","form-control-sm","mb-3","ulineform"],["selected",""],["value","HR"],["value","Management"],["value","Sales"],["value","Manufacturing"],["type","date","placeholder","Date",1,"form-control","ulineform"],["type","email","placeholder","Enter email",1,"form-control","ulineform"],["value","OG1"],["value","HR Manager"],["value","Sales Manager"],["value","CEO"],[1,"col-sm-3"],[1,"col-sm-2"],[1,"switch"],["type","checkbox","checked",""],[1,"slider","round"],[1,"col-sm-7"],[1,"form-group","form-check-inline"],[1,"control-label"],[1,"form-check","form-check-inline","ml-3"],["type","radio","name","optionsRadios8","id","optionsRadios8","value","option7",1,"form-check-input"],["type","button",1,"btn","btn-primary","mr-2","mb-2","mb-md-0",3,"disabled","click"],[1,"text-danger","mt-1"]],template:function(e,c){1&e&&(u.cc(0,"div",0),u.cc(1,"div",1),u.cc(2,"h3",2),u.Tc(3,"Add Employee"),u.bc(),u.cc(4,"nav",3),u.cc(5,"ol",4),u.cc(6,"li",5),u.cc(7,"a",6),u.Tc(8,"Dashboard"),u.bc(),u.bc(),u.cc(9,"li",5),u.cc(10,"a",6),u.Tc(11,"Employees"),u.bc(),u.bc(),u.cc(12,"li",7),u.Tc(13,"Add Employee"),u.bc(),u.bc(),u.bc(),u.bc(),u.bc(),u.Rc(14,F,6,0,"div",8),u.Rc(15,_,10,1,"ng-container",9),u.Rc(16,q,135,7,"div",8)),2&e&&(u.Jb(14),u.uc("ngIf",!c.checkVerificationEmailStep),u.Jb(1),u.uc("ngIf",c.checkVerificationEmailStep),u.Jb(1),u.uc("ngIf",!c.checkVerificationEmailStep))},directives:[i.g,n.n,T.a,a.u,a.l,a.g,a.b,a.k,a.f,a.o,a.t],styles:['.back[_ngcontent-%COMP%]{background-color:#7d98e8}.text-color[_ngcontent-%COMP%]{color:#f0fff0}.color-blue[_ngcontent-%COMP%]{color:#7d98e8}.ulineform[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;border:none;border-bottom:1px solid #c2bba7}.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:38px;height:18px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc}.slider[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]:before{position:absolute;transition:.4s}.slider[_ngcontent-%COMP%]:before{content:"";height:10px;width:10px;left:4px;bottom:4px;background-color:#fff}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#2196f3}input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #2196f3}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(20px)}.slider.round[_ngcontent-%COMP%]{border-radius:34px}.slider.round[_ngcontent-%COMP%]:before{border-radius:50%}']}),R),J=r("xkgV");function A(e,c){if(1&e&&(u.cc(0,"div",18),u.cc(1,"form",19),u.cc(2,"div",20),u.Xb(3,"input",21),u.bc(),u.cc(4,"div",20),u.Xb(5,"input",22),u.bc(),u.cc(6,"div",20),u.cc(7,"button",23),u.Xb(8,"i",24),u.bc(),u.cc(9,"button",25),u.Xb(10,"i",26),u.bc(),u.bc(),u.bc(),u.bc()),2&e){var t=u.oc();u.Jb(3),u.uc("formControl",t.myEndDate),u.Jb(2),u.uc("formControl",t.myDate)}}function U(e,c){1&e&&(u.cc(0,"div",27),u.cc(1,"table",28),u.cc(2,"thead",29),u.cc(3,"tr",30),u.cc(4,"th"),u.Tc(5,"#"),u.bc(),u.cc(6,"th"),u.Tc(7,"Employee Name"),u.bc(),u.cc(8,"th"),u.Tc(9,"Email"),u.bc(),u.cc(10,"th"),u.Tc(11,"Joining Date"),u.bc(),u.cc(12,"th"),u.Tc(13,"Department"),u.bc(),u.cc(14,"th"),u.Tc(15,"Phone Number"),u.bc(),u.cc(16,"th"),u.Tc(17,"View More"),u.bc(),u.bc(),u.bc(),u.bc(),u.cc(18,"div",31),u.cc(19,"pagination-controls",32),u.mc("pageChange",function(e){return e}),u.bc(),u.bc(),u.bc())}var z,D,W,V=((z=function(){function c(t){e(this,c),this.userService=t,this.basicModalCloseResult="",this.users=[],this.user=m.a.getLoggedUser(),this.userId=m.a.getLoggedUser().id,this.employees=[],this.offices=[],this.countTheRecivedLeaves=0,this.showFilters=!1,this.myEndDate=new a.d(""),this.myDate=new a.d(""),this.employeeId="6257bb97a3cc8e08e46399fd",this.officeId="6257bb97a3cc8e08e46399fc"}return t(c,[{key:"ngOnInit",value:function(){this.fetchUsers()}},{key:"fetchUsers",value:function(){var e=this;console.log(this.user),this.userService.getUsers({}).subscribe(function(c){e.users=c;for(var t=0,o=0;t<e.users.length;t++)e.users[t].RoleId==e.employeeId&&e.users[t].OfficeId==e.userId&&(e.employees[o]=e.users[t],o++,console.log("inside If Statement "))})}}]),c}()).\u0275fac=function(e){return new(e||z)(u.Wb(M.a))},z.\u0275cmp=u.Qb({type:z,selectors:[["app-employee-list"]],decls:27,vars:2,consts:[[1,"row"],[1,"col-md-12"],[1,"card-title","color-blue"],[1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","."],["aria-current","page",1,"breadcrumb-item","active"],[1,"card-title",2,"margin-bottom","0.1%","font-weight","bold"],["type","button",1,"btn","btn-light","btn-icon",2,"float","right",3,"click"],[1,"feather","icon-filter"],[1,"col-md-12","grid-margin","stretch-card"],[1,"card"],[1,"card-body"],[1,"card-title",2,"color","#727cf5"],[1,"container-fluid"],["class","filters card","style","margin-bottom: 9px; margin-top: 30px;",4,"ngIf"],["class","table-responsive pt-3",4,"ngIf"],[1,"filters","card",2,"margin-bottom","9px","margin-top","30px"],[1,"form-inline",2,"padding","9px","background-color","white"],[1,"form-group","ml-2"],["type","text","min","0","id","user_max_price","placeholder","Enter Employee Name",1,"form-control",3,"formControl"],["type","date","min","0","id","start-date","placeholder","start Date",1,"form-control",3,"formControl"],["type","button",1,"btn","btn-primary"],[1,"feather","icon-search"],["type","button",1,"btn","btn-light","ml-1"],[1,"feather","icon-refresh-ccw"],[1,"table-responsive","pt-3"],[1,"table","table-bordered",2,"background-color","azure"],[2,"background-color","rgb(194, 216, 250)"],[1,"text-center"],[1,"pagination","mt-4"],[3,"pageChange"]],template:function(e,c){1&e&&(u.cc(0,"div",0),u.cc(1,"div",1),u.cc(2,"h3",2),u.Tc(3,"Employee List"),u.bc(),u.cc(4,"nav",3),u.cc(5,"ol",4),u.cc(6,"li",5),u.cc(7,"a",6),u.Tc(8,"Dashboard"),u.bc(),u.bc(),u.cc(9,"li",5),u.cc(10,"a",6),u.Tc(11,"Employees"),u.bc(),u.bc(),u.cc(12,"li",7),u.Tc(13,"Employees List"),u.bc(),u.bc(),u.bc(),u.bc(),u.bc(),u.cc(14,"h4",8),u.cc(15,"button",9),u.mc("click",function(){return c.showFilters=!c.showFilters}),u.Xb(16,"i",10),u.Tc(17,"\xa0 "),u.bc(),u.bc(),u.cc(18,"div",0),u.cc(19,"div",11),u.cc(20,"div",12),u.cc(21,"div",13),u.cc(22,"h6",14),u.Tc(23,"Employee List"),u.bc(),u.cc(24,"div",15),u.Rc(25,A,11,2,"div",16),u.bc(),u.Rc(26,U,20,0,"div",17),u.bc(),u.bc(),u.bc(),u.bc()),2&e&&(u.Jb(25),u.uc("ngIf",c.showFilters),u.Jb(1),u.uc("ngIf",0!=c.countTheRecivedLeaves))},directives:[i.g,n.n,a.u,a.l,a.m,a.b,a.k,a.e,J.b],styles:[".round-image[_ngcontent-%COMP%]{border-radius:50%;width:75px;height:75px}.alignment[_ngcontent-%COMP%]{text-align:center}.img-padding[_ngcontent-%COMP%]{padding:10px 10px 0 30px}.title-padding[_ngcontent-%COMP%]{padding:10px 10px 0}.padding[_ngcontent-%COMP%]{padding-bottom:10px}.icon-padding[_ngcontent-%COMP%]{padding-top:10px}.color-blue[_ngcontent-%COMP%]{color:#7d98e8}td[_ngcontent-%COMP%]{word-wrap:break-word}.website[_ngcontent-%COMP%]{letter-spacing:.5px;display:block;cursor:pointer;background-color:#313b3f;color:#fcdb42;padding:10px;text-decoration:none;text-align:right}#table-component[_ngcontent-%COMP%], .website[_ngcontent-%COMP%]{font:normal 14px sans-serif}#table-component[_ngcontent-%COMP%]{margin:15px auto 0;border:1px solid #000;border-radius:4px;height:400px;max-width:500px}#table-component[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{background-color:#313b3f;color:#fcdb42;padding:10px;margin:0}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin-top:15px;width:100%;border-collapse:collapse}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:10px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:33.3%;font-size:13px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{font-size:14px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:1px solid #000;text-align:left;padding-bottom:5px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .pl-15[_ngcontent-%COMP%]{padding-left:15px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px 0;border-bottom:1px solid #d3d3d3}#table-component[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{font-size:14px;text-align:center;margin:20px auto}#table-component[_ngcontent-%COMP%]     .pagination-next a, #table-component[_ngcontent-%COMP%]     .pagination-previous a{outline:none}#table-component[_ngcontent-%COMP%]     .ngx-pagination .current{border-radius:4px}#table-component[_ngcontent-%COMP%]     .ngx-pagination{padding:0!important}#table-component[_ngcontent-%COMP%]     .ngx-pagination a:hover, #table-component[_ngcontent-%COMP%]     .ngx-pagination button:hover{border-radius:4px}#table-component[_ngcontent-%COMP%]     .ngx-pagination a, #table-component[_ngcontent-%COMP%]     .ngx-pagination button{border-radius:4px;outline:none}@media screen and (max-width:520px){#table-component[_ngcontent-%COMP%]{margin:15px}}"]}),z),B=r("LSHg"),G=["wizardForm"],H=((D=function(){function c(t){e(this,c),this.formBuilder=t,this.lati=33.66069666738704,this.longi=72.9349266152567,this.zoom=8,this.lat=33.6637483,this.lng=73.0579915,this.markers=[{lat:this.lati,lng:this.longi,label:"Your Location",draggable:!0}]}return t(c,[{key:"ngOnInit",value:function(){this.getLocation(),this.validationForm1=this.formBuilder.group({firstName:["",a.s.required],lastName:["",a.s.required],userName:["",a.s.required]}),this.validationForm2=this.formBuilder.group({email:["",[a.s.required,a.s.email]],mobileNumber:["",a.s.required],password:["",a.s.required]}),this.isForm1Submitted=!1,this.isForm2Submitted=!1}},{key:"getLocation",value:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(c){c&&(console.log("Latitude: "+c.coords.latitude+"Longitude: "+c.coords.longitude),e.lati=c.coords.latitude,e.longi=c.coords.longitude,console.log(e.lati),console.log(e.lati))},function(e){return console.log(e)}):alert("Geolocation is not supported by this browser.")}},{key:"finishFunction",value:function(){alert("Successfully Completed")}},{key:"form1",get:function(){return this.validationForm1.controls}},{key:"form2",get:function(){return this.validationForm2.controls}},{key:"form1Submit",value:function(){this.validationForm1.valid&&this.wizardForm.goToNextStep(),this.isForm1Submitted=!0}},{key:"form2Submit",value:function(){this.validationForm2.valid&&this.wizardForm.goToNextStep(),this.isForm2Submitted=!0}},{key:"clickedMarker",value:function(e,c){console.log("clicked the marker: "+(e||c))}},{key:"mapClicked",value:function(e){this.markers.push({lat:e.coords.lat,lng:e.coords.lng,draggable:!0})}},{key:"markerDragEnd",value:function(e,c){console.log("dragEnd",e,c)}}]),c}()).\u0275fac=function(e){return new(e||D)(u.Wb(a.c))},D.\u0275cmp=u.Qb({type:D,selectors:[["app-wizard"]],viewQuery:function(e,c){var t;1&e&&u.Xc(G,!0),2&e&&u.Fc(t=u.nc())&&(c.wizardForm=t.first)},decls:30,vars:4,consts:[[1,"card-title","color-blue"],[1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","."],["aria-current","page",1,"breadcrumb-item","active"],[1,"row"],[1,"col-md-12","stretch-card"],[1,"card"],[1,"card-body"],[1,"col-sm-4"],[1,"form-group"],["type","text","placeholder","Office Name",1,"form-control","ulineform"],[3,"latitude","longitude"],["type","button",1,"btn","btn-primary","submit","mt-3"]],template:function(e,c){1&e&&(u.cc(0,"h3",0),u.Tc(1,"Office"),u.bc(),u.cc(2,"nav",1),u.cc(3,"ol",2),u.cc(4,"li",3),u.cc(5,"a",4),u.Tc(6,"Dashboard"),u.bc(),u.bc(),u.cc(7,"li",5),u.Tc(8,"Office"),u.bc(),u.bc(),u.bc(),u.cc(9,"div",6),u.cc(10,"div",7),u.cc(11,"div",8),u.cc(12,"div",9),u.cc(13,"h6",0),u.Tc(14,"Office"),u.bc(),u.cc(15,"form"),u.cc(16,"div",6),u.cc(17,"div",10),u.cc(18,"div",11),u.Xb(19,"input",12),u.bc(),u.bc(),u.bc(),u.bc(),u.cc(20,"h6",0),u.Tc(21,"Google Map Demonstration"),u.bc(),u.cc(22,"agm-map",13),u.Tc(23,' [latitude]="lat" [longitude]="lng" [zoom]="zoom" [disableDefaultUI]="false" [zoomControl]="true" (mapClick)="mapClicked($event)"> '),u.cc(24,"agm-marker",13),u.cc(25,"agm-info-window"),u.cc(26,"strong"),u.Tc(27,"Your Location"),u.bc(),u.bc(),u.bc(),u.bc(),u.cc(28,"button",14),u.Tc(29,"Submit"),u.bc(),u.bc(),u.bc(),u.bc(),u.bc()),2&e&&(u.Jb(22),u.uc("latitude",c.lat)("longitude",c.lng),u.Jb(2),u.uc("latitude",c.lati)("longitude",c.longi))},directives:[i.g,a.u,a.l,a.m,B.c,B.d,B.b],styles:[".ulineform[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;border:none;border-bottom:1px solid #c2bba7}.color-blue[_ngcontent-%COMP%]{color:#7d98e8}agm-map[_ngcontent-%COMP%]{height:300px}"]}),D),Z=r("KeVr"),Q=r("w9WL"),j=[{path:"",component:C,children:[{path:"",redirectTo:"add-employee",pathMatch:"full"},{path:"add-employee",component:X},{path:"employee-list",component:V},{path:"wizard",component:H},{path:"forgot-password",component:O},{path:"verify-account/:verification",component:y}]}],Y=((W=t(function c(){e(this,c)})).\u0275mod=u.Ub({type:W}),W.\u0275inj=u.Tb({factory:function(e){return new(e||W)},imports:[[n.c,a.h,a.q,i.h.forChild(j),l.a,Q.a,J.a,Z.a,s.a.forRoot(),d.a,B.a.forRoot({apiKey:"AIzaSyAP8n5GbRjUqB9dQfxDfZLJuFam4PjHOTs"})]]}),W)}}])}();