(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{SSQ5:function(e,c,t){"use strict";t.r(c),t.d(c,"AuthModule",function(){return f});var o=t("ofXK"),r=t("3Pt+"),i=t("RMBY"),n=t("vVw+"),s=t("fXoL"),a=t("tyNb"),l=t("9ixH"),m=t("5eHb");function d(e,c){if(1&e&&(s.cc(0,"p",25),s.Uc(1),s.bc()),2&e){const e=s.oc();s.Jb(1),s.Wc(" ",e.emailError(),"")}}function g(e,c){if(1&e){const e=s.dc();s.cc(0,"p",26),s.mc("click",function(){return s.Kc(e),s.oc().resendVerificationLink()}),s.Uc(1,"Need verification email? "),s.cc(2,"a"),s.Uc(3,"Send Now"),s.bc(),s.bc()}}function b(e,c){if(1&e&&(s.cc(0,"p",25),s.Uc(1),s.bc()),2&e){const e=s.oc();s.Jb(1),s.Wc(" ",e.passwordError(),"")}}let h=(()=>{class e{constructor(e,c,t,o){this.router=e,this.formBuilder=c,this.authenticationService=t,this.toastrService=o,this.verificationEmailBtn=!1}ngOnInit(){this.createForm()}createForm(){const e=n.a.getItem("ci_email_remember")||"";this.loginForm=this.formBuilder.group({email:[e,[r.s.minLength(5),r.s.maxLength(100),r.s.required,r.s.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],password:["",[r.s.minLength(2),r.s.maxLength(100),r.s.required]],rememberMe:[!1]})}login(){if(this.loginForm.invalid)return void this.loginForm.markAllAsTouched();this.loading=!0,this.verificationEmailBtn=!1;const e=this.loginForm.get("email").value.toString(),c=this.loginForm.get("password").value;this.loginForm.get("rememberMe").value?n.a.setItem("ci_email_remember",e):n.a.removeItem("ci_email_remember"),this.authenticationService.login(e,c).then(e=>{this.loading=!1,this.loginForm.reset(),i.a.setLoggedUser(e),console.log("before"),this.toastrService.success("Login Successful!"),console.log("sjd"),console.log(e),console.log(e.role);const c=i.a.getLoggedUser();console.log(c.role),"SWMcl6S0UygbJD3ix0tZ"==c.role?(this.router.navigate(["/dashboard"]),console.log("To Dash")):"employee"==c.role?(this.router.navigate(["/auth/login"]),console.log("To Customer")):"office"==c.role?this.router.navigate(["/office-dashboard"]):(this.router.navigate(["/login"]),console.log("Role not exist"))},e=>{e.error&&e.error.message&&this.toastrService.error(e.error.message),e.error&&e.error.error&&"please-verify"==e.error.error&&(this.verificationEmailBtn=!0),this.loading=!1})}resendVerificationLink(){this.loginForm.controls.email.invalid||this.loading?this.loginForm.controls.email.markAsDirty():(this.verificationEmailBtn=!1,this.loading=!0,this.authenticationService.resendVerification(this.loginForm.get("email").value.toString()).then(e=>{this.loading=!1,this.toastrService.success("Verification email sent","Success")},e=>{e.error&&e.error.message&&this.toastrService.error(e.error.message),this.loading=!1}))}resetPassword(){this.router.navigate(["/auth/password-forgot"])}emailError(){return this.loginForm.controls.email.hasError("required")?"Valid email is required":this.loginForm.controls.email.hasError("maxlength")?"Email cannot exceed 100 characters":this.loginForm.controls.email.hasError("minlength")?"Email is required of minimum length of 5 characters":this.loginForm.controls.email.hasError("pattern")?"Valid email is required":""}passwordError(){return this.loginForm.controls.password.hasError("required")?"Password is required":this.loginForm.controls.password.hasError("minlength")?"Password is required of minimum length of 8 characters":this.loginForm.controls.password.hasError("maxlength")?"Password cannot exceed 100 characters":""}}return e.\u0275fac=function(c){return new(c||e)(s.Wb(a.e),s.Wb(r.c),s.Wb(l.a),s.Wb(m.b))},e.\u0275cmp=s.Qb({type:e,selectors:[["app-login"]],decls:36,vars:5,consts:[[1,"row","w-80","mx-0","auth-page"],[1,"col-md-8","col-xl-6","mx-auto"],[1,"card"],[1,"row"],[1,"col-md-12","pl-md-12"],[1,"auth-form-wrapper","px-4","py-5"],[1,"col-12"],[1,"color-blue","text-center"],[1,"text-center"],["src","assets/logo.png","alt","logo","width","100","height","100"],[1,"forms-sample",3,"formGroup"],[1,"form-group"],["for","email"],["type","email","id","email","placeholder","Email","formControlName","email",1,"form-control"],["class","text-danger mt-1",4,"ngIf"],["class","mt-1 text-muted",3,"click",4,"ngIf"],["for","password"],["type","password","id","password","placeholder","Password","formControlName","password",1,"form-control"],[1,"form-check","form-check-flat","form-check-primary"],[1,"form-check-label"],["type","checkbox","formControlName","rememberMe",1,"form-check-input"],[1,"input-frame"],[1,"mt-3"],["type","button",1,"btn","btn-primary","mr-2","mb-2","mb-md-0",3,"disabled","click"],["routerLink","/auth/forgot-password",1,"d-block","mt-3","text-muted"],[1,"text-danger","mt-1"],[1,"mt-1","text-muted",3,"click"]],template:function(e,c){1&e&&(s.cc(0,"div",0),s.cc(1,"div",1),s.cc(2,"div",2),s.cc(3,"div",3),s.cc(4,"div",4),s.cc(5,"div",5),s.cc(6,"div",3),s.cc(7,"div",6),s.cc(8,"h3",7),s.Uc(9,"Waste Management System"),s.bc(),s.Xb(10,"br"),s.cc(11,"div",8),s.Xb(12,"img",9),s.bc(),s.bc(),s.Xb(13,"br"),s.bc(),s.cc(14,"form",10),s.cc(15,"div",11),s.cc(16,"label",12),s.Uc(17,"Email address"),s.bc(),s.Xb(18,"input",13),s.Sc(19,d,2,1,"p",14),s.Sc(20,g,4,0,"p",15),s.bc(),s.cc(21,"div",11),s.cc(22,"label",16),s.Uc(23,"Password"),s.bc(),s.Xb(24,"input",17),s.Sc(25,b,2,1,"p",14),s.bc(),s.cc(26,"div",18),s.cc(27,"label",19),s.Xb(28,"input",20),s.Xb(29,"i",21),s.Uc(30," Remember my email "),s.bc(),s.bc(),s.cc(31,"div",22),s.cc(32,"button",23),s.mc("click",function(){return c.login()}),s.Uc(33,"Login"),s.bc(),s.cc(34,"a",24),s.Uc(35,"Forgot password? Reset"),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc()),2&e&&(s.Jb(14),s.vc("formGroup",c.loginForm),s.Jb(5),s.vc("ngIf",c.loginForm.controls.email.touched||c.loginForm.controls.email.dirty),s.Jb(1),s.vc("ngIf",c.verificationEmailBtn),s.Jb(5),s.vc("ngIf",c.loginForm.controls.password.touched||c.loginForm.controls.password.dirty),s.Jb(7),s.vc("disabled",c.loginForm.invalid||c.loading))},directives:[r.u,r.m,r.h,r.b,r.l,r.f,o.n,r.a,a.h],styles:["[_nghost-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center}.color-blue[_ngcontent-%COMP%]{color:#7d98e8}.ulineform[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;border:none;border-bottom:1px solid #c2bba7}.center[_ngcontent-%COMP%]{text-align:center}.align-right[_ngcontent-%COMP%]{text-align:right}.size[_ngcontent-%COMP%]{width:-webkit-fill-available;height:50px}.icon-size[_ngcontent-%COMP%]{font-size:20px}.padding-top[_ngcontent-%COMP%]{padding-top:10px}.padding-topp[_ngcontent-%COMP%]{padding-top:30px}.padding-left[_ngcontent-%COMP%]{padding-left:30px}"]}),e})(),p=(()=>{class e{constructor(e){this.router=e}ngOnInit(){}onRegister(e){e.preventDefault(),localStorage.setItem("isLoggedin","true"),localStorage.getItem("isLoggedin")&&this.router.navigate(["/"])}}return e.\u0275fac=function(c){return new(c||e)(s.Wb(a.e))},e.\u0275cmp=s.Qb({type:e,selectors:[["app-register"]],decls:56,vars:0,consts:[[1,"row","w-80","mx-0","auth-page"],[1,"col-md-8","col-xl-6","mx-auto"],[1,"card"],[1,"row"],[1,"col-md-12","pl-md-12"],[1,"auth-form-wrapper","px-4","py-5"],[1,"col-12"],[1,"color-blue","text-center"],[1,"text-center"],["src","https://www.vtechbarcode.com.my/wp-content/uploads/2020/02/how-warehouse-managements-system-improves-business-performance-1-1.png","alt","logo","width","100","height","100"],[1,"forms-sample"],[1,"row","mt-4"],[1,"col-sm-1","padding-top"],[1,"form-group"],[1,"feather","icon-user","icon-size"],[1,"col-sm-10"],["type","text","placeholder","User Name",1,"form-control","ulineform"],[1,"feather","icon-mail","icon-size"],["type","email","placeholder","Email",1,"form-control","ulineform"],[1,"feather","icon-lock","icon-size"],["type","password","autocomplete","current-password","placeholder","Password",1,"form-control","ulineform"],[1,"col-sm-6"],[1,"form-check","form-check-flat","form-check-primary"],[1,"form-check-label"],["type","checkbox",1,"form-check-input"],[1,"input-frame"],[1,"row","text-center"],[1,"col-sm-2"],[1,"col-sm-8"],["type","submit",1,"btn","btn-primary","size",3,"click"],["routerLink","/auth/register",1,"d-block","mt-3","text-muted"]],template:function(e,c){1&e&&(s.cc(0,"div",0),s.cc(1,"div",1),s.cc(2,"div",2),s.cc(3,"div",3),s.cc(4,"div",4),s.cc(5,"div",5),s.cc(6,"div",3),s.cc(7,"div",6),s.cc(8,"h3",7),s.Uc(9,"Waste Management System"),s.bc(),s.Xb(10,"br"),s.cc(11,"div",8),s.Xb(12,"img",9),s.bc(),s.bc(),s.Xb(13,"br"),s.bc(),s.cc(14,"form",10),s.cc(15,"div",11),s.cc(16,"div",12),s.cc(17,"div",13),s.Xb(18,"i",14),s.bc(),s.bc(),s.cc(19,"div",15),s.cc(20,"div",13),s.Xb(21,"input",16),s.bc(),s.bc(),s.bc(),s.cc(22,"div",3),s.cc(23,"div",12),s.cc(24,"div",13),s.Xb(25,"i",17),s.bc(),s.bc(),s.cc(26,"div",15),s.cc(27,"div",13),s.Xb(28,"input",18),s.bc(),s.bc(),s.bc(),s.cc(29,"div",3),s.cc(30,"div",12),s.cc(31,"div",13),s.Xb(32,"i",19),s.bc(),s.bc(),s.cc(33,"div",15),s.cc(34,"div",13),s.Xb(35,"input",20),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(36,"form",10),s.cc(37,"div",3),s.cc(38,"div",21),s.cc(39,"div",13),s.cc(40,"div",22),s.cc(41,"label",23),s.Xb(42,"input",24),s.Xb(43,"i",25),s.Uc(44," Remember me "),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(45,"div",26),s.cc(46,"div",27),s.Xb(47,"div"),s.bc(),s.cc(48,"div",28),s.cc(49,"div",13),s.cc(50,"button",29),s.mc("click",function(e){return c.onRegister(e)}),s.Uc(51,"Register"),s.bc(),s.bc(),s.bc(),s.cc(52,"div",27),s.Xb(53,"div"),s.bc(),s.bc(),s.cc(54,"a",30),s.Uc(55,"Already a user? Sign in"),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc())},directives:[r.u,r.m,r.n,a.h],styles:["[_nghost-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center}.color-blue[_ngcontent-%COMP%]{color:#7d98e8}.ulineform[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;border:none;border-bottom:1px solid #c2bba7}.center[_ngcontent-%COMP%]{text-align:center}.align-right[_ngcontent-%COMP%]{text-align:right}.size[_ngcontent-%COMP%]{width:-webkit-fill-available;height:50px}.icon-size[_ngcontent-%COMP%]{font-size:20px}.padding-top[_ngcontent-%COMP%]{padding-top:10px}.padding-left[_ngcontent-%COMP%]{padding-left:30px}"]}),e})();const u=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=s.Qb({type:e,selectors:[["app-auth"]],decls:1,vars:0,template:function(e,c){1&e&&s.Xb(0,"router-outlet")},directives:[a.j],encapsulation:2}),e})(),children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:h},{path:"register",component:p}]}];let f=(()=>{class e{}return e.\u0275mod=s.Ub({type:e}),e.\u0275inj=s.Tb({factory:function(c){return new(c||e)},imports:[[o.c,r.i,r.q,a.i.forChild(u)]]}),e})()}}]);