(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{FKha:function(e,t,o){"use strict";o.r(t),o.d(t,"OfficeEmployeesModule",function(){return j});var r=o("ofXK"),c=o("tyNb"),i=o("3Pt+"),n=o("tyVc"),a=o("CzEO"),s=o("mkVx"),l=o("RMBY"),d=o("fXoL"),m=o("5eHb"),b=o("9ixH");function h(e,t){1&e&&(d.ac(0),d.Xb(1,"i",10),d.cc(2,"h5",11),d.Uc(3,"Verifying..."),d.bc(),d.Zb())}function g(e,t){1&e&&(d.ac(0),d.Xb(1,"i",12),d.cc(2,"h5",13),d.Uc(3,"Failed!"),d.bc(),d.cc(4,"p",14),d.Uc(5,"The link is invalid or expired."),d.bc(),d.cc(6,"a",15),d.Uc(7,"Request New Link"),d.bc(),d.Zb())}function u(e,t){1&e&&(d.ac(0),d.Xb(1,"i",16),d.cc(2,"h5",13),d.Uc(3,"Success!"),d.bc(),d.cc(4,"p",14),d.Uc(5,"Account verified successfully!"),d.bc(),d.Zb())}let p=(()=>{class e{constructor(e,t,o,r,c){this.router=e,this.route=t,this.formBuilder=o,this.toastrService=r,this.authenticationService=c,this.invalidLink=!1,this.loading=!0}ngOnInit(){this.route.snapshot.params.verification?this.verifyAccount():this.invalidLink=!0}verifyAccount(){this.loading=!0,this.authenticationService.verifyAccount(this.route.snapshot.params.verification).then(e=>{l.a.setLoggedUser(e),this.toastrService.success("Account verified","Success!"),this.loading=!1,console.log(e),"admin"==e.role?this.router.navigate(["/dashboard"]):"lab"==e.role?this.router.navigate(["/lab-sample"]):"researcher"==e.role&&this.router.navigate(["/customer"])}).catch(e=>{console.log("======>",e),e.error&&e.error.message&&this.toastrService.error(e.error.message),this.invalidLink=!0,this.loading=!1})}}return e.\u0275fac=function(t){return new(t||e)(d.Wb(c.e),d.Wb(c.a),d.Wb(i.c),d.Wb(m.b),d.Wb(b.a))},e.\u0275cmp=d.Qb({type:e,selectors:[["app-verify-account"]],decls:15,vars:3,consts:[[1,"row","w-100","mx-0","auth-page"],[1,"col-md-8","col-xl-6","mx-auto"],[1,"card"],[1,"row"],[1,"col-md-4","pr-md-0"],[1,"auth-left-wrapper"],[1,"col-md-8","pl-md-0"],[1,"auth-form-wrapper","px-4","py-5"],["routerLink",".",1,"app-logo","d-block","mb-2"],[4,"ngIf"],["data-feather","loader",1,"loading"],[1,"text-muted","mt-3"],["data-feather","alert-triangle",1,"xl-icon"],[1,"text-muted","mt-2"],[1,"text-muted","mt-1"],["routerLink","/auth/forgot-password",1,"d-block","mt-2","text-muted"],["data-feather","check",1,"xl-icon",2,"color","green"]],template:function(e,t){1&e&&(d.cc(0,"div",0),d.cc(1,"div",1),d.cc(2,"div",2),d.cc(3,"div",3),d.cc(4,"div",4),d.Xb(5,"div",5),d.bc(),d.cc(6,"div",6),d.cc(7,"div",7),d.cc(8,"a",8),d.Uc(9,"WMS"),d.cc(10,"span"),d.Uc(11,"GB"),d.bc(),d.bc(),d.Sc(12,h,4,0,"ng-container",9),d.Sc(13,g,8,0,"ng-container",9),d.Sc(14,u,6,0,"ng-container",9),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.bc()),2&e&&(d.Jb(12),d.vc("ngIf",t.loading),d.Jb(1),d.vc("ngIf",t.invalidLink&&!t.loading),d.Jb(1),d.vc("ngIf",!t.invalidLink&&!t.loading))},directives:[c.h,r.n],styles:["[_nghost-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center}.auth-form-wrapper[_ngcontent-%COMP%]{min-height:380px}.xl-icon[_ngcontent-%COMP%]{width:100px;height:auto}.loading[_ngcontent-%COMP%]{width:50px;height:auto;-webkit-animation-name:ckw;animation-name:ckw;-webkit-animation-duration:4s;animation-duration:4s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes ckw{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes ckw{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]}),e})();function f(e,t){if(1&e&&(d.cc(0,"p",15),d.Uc(1),d.bc()),2&e){const e=d.oc();d.Jb(1),d.Wc(" ",e.emailError(),"")}}let v=(()=>{class e{constructor(e,t,o,r){this.router=e,this.formBuilder=t,this.toastrService=o,this.authenticationService=r}ngOnInit(){this.createForm()}createForm(){this.forgotForm=this.formBuilder.group({email:["",[i.s.minLength(5),i.s.maxLength(100),i.s.required,i.s.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]})}forgotPassword(){if(this.forgotForm.invalid)return void this.forgotForm.markAllAsTouched();this.loading=!0;const e=this.forgotForm.get("email").value.toString();this.authenticationService.forgotPassword(e).then(e=>{console.log(e),this.loading=!1,this.forgotForm.reset(),e.success&&this.toastrService.success("Please check your email to reset password!","Success")}).catch(e=>{console.log("======>",e),e.error&&e.error.message&&this.toastrService.error(e.error.message),this.loading=!1})}emailError(){return this.forgotForm.controls.email.hasError("required")?"Valid email is required":this.forgotForm.controls.email.hasError("maxlength")?"Email cannot exceed 100 characters":this.forgotForm.controls.email.hasError("minlength")?"Email is required of minimum length of 5 characters":this.forgotForm.controls.email.hasError("pattern")?"Valid email is required":""}}return e.\u0275fac=function(t){return new(t||e)(d.Wb(c.e),d.Wb(i.c),d.Wb(m.b),d.Wb(b.a))},e.\u0275cmp=d.Qb({type:e,selectors:[["app-forgot-password"]],decls:20,vars:2,consts:[[1,"row","w-100","mx-0","auth-page"],[1,"col-md-8","col-xl-6","mx-auto"],[1,"card"],[1,"row"],[1,"col-md-4","pr-md-0"],[1,"auth-left-wrapper"],[1,"col-md-8","pl-md-0"],[1,"auth-form-wrapper","px-4","py-5"],["routerLink",".",1,"app-logo","d-block","mb-2"],[1,"text-muted","font-weight-normal","mb-4"],[1,"forms-sample",3,"formGroup"],[1,"form-group"],["for","email"],["type","email","id","email","placeholder","Enter Your Email","formControlName","email",1,"form-control"],["class","text-danger mt-1",4,"ngIf"],[1,"text-danger","mt-1"]],template:function(e,t){1&e&&(d.cc(0,"div",0),d.cc(1,"div",1),d.cc(2,"div",2),d.cc(3,"div",3),d.cc(4,"div",4),d.Xb(5,"div",5),d.bc(),d.cc(6,"div",6),d.cc(7,"div",7),d.cc(8,"a",8),d.Uc(9,"WMS"),d.cc(10,"span"),d.Uc(11,"GB"),d.bc(),d.bc(),d.cc(12,"h5",9),d.Uc(13,"Forgot Password! An email will be sent to you"),d.bc(),d.cc(14,"form",10),d.cc(15,"div",11),d.cc(16,"label",12),d.Uc(17,"Email address"),d.bc(),d.Xb(18,"input",13),d.Sc(19,f,2,1,"p",14),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.bc()),2&e&&(d.Jb(14),d.vc("formGroup",t.forgotForm),d.Jb(5),d.vc("ngIf",t.forgotForm.controls.email.touched||t.forgotForm.controls.email.dirty))},directives:[c.h,i.u,i.m,i.h,i.b,i.l,i.f,r.n],styles:["[_nghost-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center}"]}),e})(),y=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Qb({type:e,selectors:[["app-office-employees"]],decls:1,vars:0,template:function(e,t){1&e&&d.Xb(0,"router-outlet")},directives:[c.j],encapsulation:2}),e})();var x=o("vVw+"),w=o("f4AX"),O=o("XBNL"),C=o("IYwT");function F(e,t){1&e&&(d.cc(0,"div",0),d.cc(1,"div",10),d.cc(2,"div",11),d.cc(3,"div",12),d.cc(4,"h3",13),d.Uc(5,"About"),d.bc(),d.bc(),d.bc(),d.bc(),d.bc())}function M(e,t){1&e&&(d.ac(0,14),d.cc(1,"div",15),d.cc(2,"div",16),d.cc(3,"div",17),d.cc(4,"div",18),d.Xb(5,"i",19),d.cc(6,"h5",20),d.Uc(7,"Success!"),d.bc(),d.cc(8,"p",21),d.Uc(9,"Account created. Please check your email for verification link."),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.Zb()),2&e&&(d.Jb(5),d.Kb("data-feather","check"))}function P(e,t){if(1&e&&(d.cc(0,"p",40),d.Uc(1),d.bc()),2&e){const e=d.oc(2);d.Jb(1),d.Vc(e.fNameError())}}function E(e,t){if(1&e&&(d.cc(0,"p",40),d.Uc(1),d.bc()),2&e){const e=d.oc(2);d.Jb(1),d.Vc(e.lNameError())}}function k(e,t){if(1&e&&(d.cc(0,"p",40),d.Uc(1),d.bc()),2&e){const e=d.oc(2);d.Jb(1),d.Vc(e.phoneError())}}function U(e,t){if(1&e&&(d.cc(0,"p",40),d.Uc(1),d.bc()),2&e){const e=d.oc(2);d.Jb(1),d.Vc(e.emailError())}}function _(e,t){if(1&e&&(d.cc(0,"p",40),d.Uc(1),d.bc()),2&e){const e=d.oc(2);d.Jb(1),d.Vc(e.passwordError())}}function S(e,t){if(1&e&&(d.cc(0,"p",40),d.Uc(1),d.bc()),2&e){const e=d.oc(2);d.Jb(1),d.Vc(e.pinError())}}function N(e,t){if(1&e){const e=d.dc();d.cc(0,"div",0),d.cc(1,"div",10),d.cc(2,"div",17),d.cc(3,"div",12),d.cc(4,"h6",2),d.Uc(5,"Basic Information"),d.bc(),d.Xb(6,"form",22),d.cc(7,"form",23),d.cc(8,"div",0),d.cc(9,"div",24),d.cc(10,"div",25),d.Xb(11,"input",26),d.Sc(12,P,2,1,"p",27),d.bc(),d.bc(),d.cc(13,"div",24),d.cc(14,"div",25),d.Xb(15,"input",28),d.Sc(16,E,2,1,"p",27),d.bc(),d.bc(),d.cc(17,"div",24),d.cc(18,"div",25),d.Xb(19,"input",29),d.Sc(20,k,2,1,"p",27),d.bc(),d.bc(),d.bc(),d.cc(21,"div",0),d.cc(22,"div",24),d.cc(23,"div",25),d.Xb(24,"input",30),d.Sc(25,U,2,1,"p",27),d.bc(),d.bc(),d.cc(26,"div",24),d.cc(27,"div",25),d.Xb(28,"input",31),d.Sc(29,_,2,1,"p",27),d.bc(),d.bc(),d.cc(30,"div",24),d.cc(31,"div",25),d.Xb(32,"input",32),d.Sc(33,S,2,1,"p",27),d.bc(),d.bc(),d.bc(),d.Xb(34,"hr"),d.cc(35,"h6",2),d.Uc(36,"Employee Information"),d.bc(),d.cc(37,"div",0),d.cc(38,"div",24),d.cc(39,"div",25),d.cc(40,"label"),d.Uc(41,"Designation"),d.bc(),d.cc(42,"select",33),d.cc(43,"option",34),d.Uc(44,"Select Designation"),d.bc(),d.cc(45,"option",35),d.Uc(46,"Manager"),d.bc(),d.cc(47,"option",36),d.Uc(48,"DMO"),d.bc(),d.cc(49,"option",37),d.Uc(50,"Supervisor"),d.bc(),d.bc(),d.bc(),d.bc(),d.cc(51,"div",24),d.cc(52,"div",25),d.cc(53,"label"),d.Uc(54,"Date of Joining"),d.bc(),d.Xb(55,"input",38),d.bc(),d.bc(),d.bc(),d.cc(56,"button",39),d.mc("click",function(){return d.Kc(e),d.oc().register()}),d.Uc(57,"Sign Up"),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.bc()}if(2&e){const e=d.oc();d.Jb(6),d.vc("formGroup",e.absentForm),d.Jb(1),d.vc("formGroup",e.regForm),d.Jb(5),d.vc("ngIf",e.regForm.controls.fName.touched||e.regForm.controls.fName.dirty),d.Jb(4),d.vc("ngIf",e.regForm.controls.lName.touched||e.regForm.controls.lName.dirty),d.Jb(4),d.vc("ngIf",e.regForm.controls.pNumber.touched||e.regForm.controls.pNumber.dirty),d.Jb(5),d.vc("ngIf",e.regForm.controls.email.touched||e.regForm.controls.email.dirty),d.Jb(4),d.vc("ngIf",e.regForm.controls.password.touched||e.regForm.controls.password.dirty),d.Jb(4),d.vc("ngIf",e.regForm.controls.pin.touched||e.regForm.controls.pin.dirty),d.Jb(23),d.vc("disabled",e.regForm.invalid||e.loading)}}let I=(()=>{class e{constructor(e,t,o,r,c,i,n,a){this.router=e,this.route=t,this.formBuilder=o,this.authenticationService=r,this.userService=c,this.toastrService=i,this.datepipe=n,this.attendanceService=a,this.role="",this.loading=!1,this.loadingIndicator=!0,this.checkVerificationEmailStep=!1,this.reorderable=!0,this.rows=[],this.user=l.a.getLoggedUser().id,this.newEmployee=[],this.onlyEmp=[],this.employeesArray=[],this.empRole="62b08350191ff875b3a114ef",this.officeRole="62b08350191ff875b3a114f0",this.myOfficeUsers=[],this.users=[],this.fetch(e=>{this.rows=e,setTimeout(()=>{this.loadingIndicator=!1},1500)})}fetch(e){const t=new XMLHttpRequest;t.open("GET","assets/data/100k.json"),t.onload=()=>{e(JSON.parse(t.response))},t.send()}createForm(){this.regForm=this.formBuilder.group({email:["",[i.s.minLength(5),i.s.maxLength(100),i.s.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),i.s.required]],password:["",[i.s.minLength(8),i.s.maxLength(100),i.s.required,i.s.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/)]],fName:["",[i.s.minLength(2),i.s.maxLength(50),i.s.required]],lName:["",[i.s.minLength(2),i.s.maxLength(50),i.s.required]],designation:["",[i.s.minLength(2),i.s.maxLength(50),i.s.required]],OfficeId:[this.user],pNumber:["",[i.s.minLength(2),i.s.maxLength(15),i.s.required]],pin:["",[i.s.minLength(4),i.s.maxLength(4),i.s.required]],role:["employee"],rememberMe:[!1]})}ngOnInit(){this.fetchReUser(),this.createForm(),this.absentForm=this.formBuilder.group({})}fetchReUser(){this.userService.getUsers({}).subscribe(e=>{console.log("pehly"),console.log(e),this.users=e;for(let t=0,o=0;t<this.users.length;t++)this.users[t].RoleId==this.officeRole&&(this.myOfficeUsers[o]=this.users[t],o++,console.log("inside If Statement "));console.log("badd main"),console.log(this.users)})}register(){if(this.regForm.invalid)return void this.regForm.markAllAsTouched();this.loading=!0;const e=this.regForm.value;this.authenticationService.register(this.regForm.value).then(t=>{e.rememberMe&&x.a.setItem("ci_email_remember",e.email),this.checkVerificationEmailStep=!0,this.loading=!1,this.regForm.reset(),this.toastrService.success("Please check your email for account verification","Success"),console.log(t),this.newEmployee=t,this.userService.getUsers({}).subscribe(e=>{this.onlyEmp=e;for(let t=0,o=0;t<this.onlyEmp.length;t++)this.onlyEmp[t].RoleId==this.empRole&&(this.employeesArray[o]=this.onlyEmp[t],o++);for(let t=0;t<this.employeesArray.length;t++)this.employeesArray[t].email==this.newEmployee.email&&(console.log(this.employeesArray[t].email),this.empUserId=this.employeesArray[t]._id,this.user=this.employeesArray[t].OfficeId);for(let t=0;t<365;t++){let e=new Date;e.setDate(e.getDate()+t),this.dateFor=this.datepipe.transform(e,"dd/MM/yyyy");const o=JSON.parse(JSON.stringify(this.absentForm.value));o.EmployeeId=this.empUserId,o.OfficeId=this.user,o.status="Absent",o.date=this.dateFor,this.attendanceService.createAttendance(o).subscribe(e=>{console.log(e)})}})}).catch(e=>{e.error&&e.error.message&&this.toastrService.error(e.error.message),this.loading=!1})}openFileBrowser(e){e.preventDefault(),document.querySelector("#fileUploadInputExample").click()}handleFileInput(e){e.target.files.length&&document.querySelector("#fileUploadInputExample + .input-group .file-upload-info").setAttribute("value",e.target.files[0].name)}emailError(){return this.regForm.controls.email.hasError("required")?"Valid email is required":this.regForm.controls.email.hasError("maxlength")?"Email cannot exceed 100 characters":this.regForm.controls.email.hasError("minlength")?"Email is required of minimum length of 5 characters":this.regForm.controls.email.hasError("pattern")?"Valid email is required":""}universityError(){return this.regForm.controls.university.hasError("required")?"university is required":""}ResearcherIdError(){return this.regForm.controls.ResearcherId.hasError("required")?"Researcher Name is required":""}phoneError(){return this.regForm.controls.pNumber.hasError("required")?"Phone number is required":this.regForm.controls.pNumber.hasError("maxlength")?"phone number cannot exceed 50 characters":this.regForm.controls.pNumber.hasError("minlength")?"phone number is required of minimum length of 2 characters":""}passwordError(){return this.regForm.controls.password.hasError("required")?"Password is required":this.regForm.controls.password.hasError("minlength")?"Password is required of minimum length of 8 characters":this.regForm.controls.password.hasError("maxlength")?"First Name cannot exceed 100 characters":this.regForm.controls.password.hasError("pattern")?"Password must contain at least an upper case, a lower case and a special character.":""}fNameError(){return this.regForm.controls.fName.hasError("required")?"First Name is required":this.regForm.controls.fName.hasError("maxlength")?"First Name cannot exceed 50 characters":this.regForm.controls.fName.hasError("minlength")?"First Name is required of minimum length of 2 characters":""}lNameError(){return this.regForm.controls.lName.hasError("required")?"Last Name is required":this.regForm.controls.lName.hasError("maxlength")?"Last Name cannot exceed 50 characters":this.regForm.controls.lName.hasError("minlength")?"Last Name is required of minimum length of 2 characters":""}pinError(){return this.regForm.controls.pin.hasError("required")?"pin is required":this.regForm.controls.pin.hasError("maxlength")?"pin number should be equel to 4":this.regForm.controls.pin.hasError("minlength")?"pin should be equel to 4":""}}return e.\u0275fac=function(t){return new(t||e)(d.Wb(c.e),d.Wb(c.a),d.Wb(i.c),d.Wb(b.a),d.Wb(w.a),d.Wb(m.b),d.Wb(r.e),d.Wb(O.a))},e.\u0275cmp=d.Qb({type:e,selectors:[["app-add-employee"]],decls:17,vars:3,consts:[[1,"row"],[1,"col-md-12"],[1,"card-title","color-blue"],[1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","."],["aria-current","page",1,"breadcrumb-item","active"],["class","row",4,"ngIf"],["style","background-color: green;",4,"ngIf"],[1,"col-md-12","stretch-card"],[1,"card","back"],[1,"card-body"],[1,"text-color"],[2,"background-color","green"],[1,"row",2,"background-color","green"],[1,"col-md-12","stretch-card",2,"background-color","green"],[1,"card"],[1,"card-body",2,"background-color","rgb(215, 247, 216)"],["appFeatherIcon","",1,"xl-icon"],[1,"text-muted","mt-2"],[1,"text-muted","mt-1"],[3,"formGroup"],[1,"forms-sample",3,"formGroup"],[1,"col-sm-4"],[1,"form-group"],["type","text","id","fName","placeholder","First Name","formControlName","fName",1,"form-control","ulineform"],["class","text-danger mt-1",4,"ngIf"],["type","text","id","lName","placeholder","Last Name","formControlName","lName",1,"form-control","ulineform"],["type","text","id","pNumber","placeholder","Phone Number","formControlName","pNumber",1,"form-control","ulineform"],["type","text","id","email","placeholder","Email","formControlName","email",1,"form-control","ulineform"],["type","text","id","email","placeholder","password","formControlName","password",1,"form-control","ulineform"],["type","number","id","pin","placeholder","pin","formControlName","pin",1,"form-control","ulineform"],[1,"form-control","form-control-sm","mb-3","ulineform"],["value",""],["value","Manager"],["value","DMO"],["value","Supervisor"],["type","date","placeholder","Date",1,"form-control","ulineform"],["type","button",1,"btn","btn-primary","mr-2","mb-2","mb-md-0",3,"disabled","click"],[1,"text-danger","mt-1"]],template:function(e,t){1&e&&(d.cc(0,"div",0),d.cc(1,"div",1),d.cc(2,"h3",2),d.Uc(3,"Add Employee"),d.bc(),d.cc(4,"nav",3),d.cc(5,"ol",4),d.cc(6,"li",5),d.cc(7,"a",6),d.Uc(8,"Dashboard"),d.bc(),d.bc(),d.cc(9,"li",5),d.cc(10,"a",6),d.Uc(11,"Employees"),d.bc(),d.bc(),d.cc(12,"li",7),d.Uc(13,"Add Employee"),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.Sc(14,F,6,0,"div",8),d.Sc(15,M,10,1,"ng-container",9),d.Sc(16,N,58,9,"div",8)),2&e&&(d.Jb(14),d.vc("ngIf",!t.checkVerificationEmailStep),d.Jb(1),d.vc("ngIf",t.checkVerificationEmailStep),d.Jb(1),d.vc("ngIf",!t.checkVerificationEmailStep))},directives:[c.h,r.n,C.a,i.u,i.m,i.h,i.b,i.l,i.f,i.p,i.o,i.t],styles:['.back[_ngcontent-%COMP%]{background-color:#7d98e8}.text-color[_ngcontent-%COMP%]{color:#f0fff0}.color-blue[_ngcontent-%COMP%]{color:#7d98e8}.ulineform[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;border:none;border-bottom:1px solid #c2bba7}.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:38px;height:18px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc}.slider[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]:before{position:absolute;transition:.4s}.slider[_ngcontent-%COMP%]:before{content:"";height:10px;width:10px;left:4px;bottom:4px;background-color:#fff}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#2196f3}input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #2196f3}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(20px)}.slider.round[_ngcontent-%COMP%]{border-radius:34px}.slider.round[_ngcontent-%COMP%]:before{border-radius:50%}']}),e})();var L=o("oOf3");let q=(()=>{class e{transform(e,t,o){return t.forEach((t,r)=>{t&&(e=e.filter(e=>-1!==e[o[r]].toString().toLowerCase().indexOf(t.toString().toLowerCase())))}),e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=d.Vb({name:"seven",type:e,pure:!0}),e})();function J(e,t){if(1&e&&(d.cc(0,"div",24),d.cc(1,"form",25),d.cc(2,"div",26),d.Xb(3,"input",27),d.bc(),d.cc(4,"div",26),d.cc(5,"button",28),d.Xb(6,"i",29),d.bc(),d.cc(7,"button",30),d.Xb(8,"i",31),d.bc(),d.bc(),d.bc(),d.bc()),2&e){const e=d.oc();d.Jb(3),d.vc("formControl",e.employeeName)}}const A=function(e){return["/employee-detail",e]};function X(e,t){if(1&e&&(d.cc(0,"tr"),d.cc(1,"td"),d.Uc(2),d.bc(),d.cc(3,"td"),d.Uc(4),d.bc(),d.cc(5,"td"),d.Uc(6),d.bc(),d.cc(7,"td"),d.Uc(8),d.bc(),d.cc(9,"td"),d.Uc(10),d.bc(),d.cc(11,"td"),d.cc(12,"button",32),d.Xb(13,"i",33),d.bc(),d.bc(),d.bc()),2&e){const e=t.$implicit,o=t.index;d.Jb(2),d.Vc(o+1),d.Jb(2),d.Xc("",e.fName,"",e.lName,""),d.Jb(2),d.Vc(e.designation),d.Jb(2),d.Vc(e.email),d.Jb(2),d.Vc(e.pNumber),d.Jb(2),d.vc("routerLink",d.zc(7,A,e._id))}}const z=function(e){return[e]},V=function(){return["fName"]};let D=(()=>{class e{constructor(e){this.userService=e,this.basicModalCloseResult="",this.users=[],this.user=l.a.getLoggedUser(),this.userId=l.a.getLoggedUser().id,this.offices=[],this.reqOffices=[],this.employees=[],this.officeEM=0,this.showFilters=!1,this.myEndDate=new i.d(""),this.myDate=new i.d(""),this.employeeId="62b08350191ff875b3a114ef",this.officeId="62b08350191ff875b3a114f0",this.officeRole="62b08350191ff875b3a114f0",this.employeeName=new i.d(""),this.joinDate=new i.d("")}ngOnInit(){this.fetchUsers(),this.fetchOffices()}fetchOffices(){this.userService.getUsers({}).subscribe(e=>{this.offices=e;for(let t=0,o=0;t<this.offices.length;t++)this.offices[t].RoleId==this.officeRole&&(this.reqOffices[o]=this.offices[t],this.officeCount=this.reqOffices.length,o++)})}fetchUsers(){console.log(this.user),this.userService.getUsers({}).subscribe(e=>{this.users=e;for(let t=0,o=0;t<this.users.length;t++)this.users[t].RoleId==this.employeeId&&this.users[t].OfficeId==this.userId&&(this.employees[o]=this.users[t],this.officeEM=this.employees.length,o++,console.log("inside If Statement")),this.config={itemsPerPage:5,currentPage:1,totalItems:this.officeEM};console.log(this.employees)})}pageChanged(e){this.config.currentPage=e}}return e.\u0275fac=function(t){return new(t||e)(d.Wb(w.a))},e.\u0275cmp=d.Qb({type:e,selectors:[["app-employee-list"]],decls:48,vars:12,consts:[[1,"row"],[1,"col-md-12"],[1,"card-title","color-blue"],[1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","."],["aria-current","page",1,"breadcrumb-item","active"],[1,"card-title",2,"margin-bottom","0.1%","font-weight","bold"],["type","button",1,"btn","btn-light","btn-icon",2,"float","right",3,"click"],[1,"feather","icon-filter"],[1,"col-md-12","grid-margin","stretch-card"],[1,"card"],[1,"card-body"],[1,"card-title",2,"color","#727cf5"],[1,"container-fluid"],["class","filters card","style","margin-bottom: 9px; margin-top: 30px;",4,"ngIf"],[1,"table-responsive","pt-3"],[1,"table","table-bordered",2,"background-color","azure"],[2,"background-color","rgb(194, 216, 250)"],[1,"text-center"],[4,"ngFor","ngForOf"],[1,"pagination","mt-4"],[3,"pageChange"],[1,"filters","card",2,"margin-bottom","9px","margin-top","30px"],[1,"form-inline",2,"padding","9px","background-color","white"],[1,"form-group","ml-2"],["type","text","id","employeeName","placeholder","Enter Employee Name",1,"form-control",3,"formControl"],["type","button",1,"btn","btn-primary"],[1,"feather","icon-search"],["type","button",1,"btn","btn-light","ml-1"],[1,"feather","icon-refresh-ccw"],[1,"btn","btn-light","btn-icon",2,"background-color","rgb(120, 185, 23)",3,"routerLink"],[1,"feather","icon-eye",2,"color","whitesmoke"]],template:function(e,t){1&e&&(d.cc(0,"div",0),d.cc(1,"div",1),d.cc(2,"h3",2),d.Uc(3,"Employee List"),d.bc(),d.cc(4,"nav",3),d.cc(5,"ol",4),d.cc(6,"li",5),d.cc(7,"a",6),d.Uc(8,"Dashboard"),d.bc(),d.bc(),d.cc(9,"li",5),d.cc(10,"a",6),d.Uc(11,"Employees"),d.bc(),d.bc(),d.cc(12,"li",7),d.Uc(13,"Employees List"),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.cc(14,"h4",8),d.cc(15,"button",9),d.mc("click",function(){return t.showFilters=!t.showFilters}),d.Xb(16,"i",10),d.Uc(17,"\xa0 "),d.bc(),d.bc(),d.cc(18,"div",0),d.cc(19,"div",11),d.cc(20,"div",12),d.cc(21,"div",13),d.cc(22,"h6",14),d.Uc(23,"Employee List"),d.bc(),d.cc(24,"div",15),d.Sc(25,J,9,1,"div",16),d.bc(),d.cc(26,"div",17),d.cc(27,"table",18),d.cc(28,"thead",19),d.cc(29,"tr",20),d.cc(30,"th"),d.Uc(31,"#"),d.bc(),d.cc(32,"th"),d.Uc(33,"Employee Name"),d.bc(),d.cc(34,"th"),d.Uc(35,"Designation"),d.bc(),d.cc(36,"th"),d.Uc(37,"Email"),d.bc(),d.cc(38,"th"),d.Uc(39,"Phone Number"),d.bc(),d.cc(40,"th"),d.Uc(41,"View More"),d.bc(),d.bc(),d.bc(),d.cc(42,"tbody",20),d.Sc(43,X,14,9,"tr",21),d.pc(44,"seven"),d.pc(45,"paginate"),d.bc(),d.bc(),d.cc(46,"div",22),d.cc(47,"pagination-controls",23),d.mc("pageChange",function(e){return t.pageChanged(e)}),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.bc()),2&e&&(d.Jb(25),d.vc("ngIf",t.showFilters),d.Jb(18),d.vc("ngForOf",d.sc(44,2,d.rc(45,6,t.employees,t.config),d.zc(9,z,t.employeeName.value),d.yc(11,V))))},directives:[c.h,r.n,r.m,L.c,i.u,i.m,i.n,i.b,i.l,i.e,c.f],pipes:[q,L.b],styles:[".round-image[_ngcontent-%COMP%]{border-radius:50%;width:75px;height:75px}.alignment[_ngcontent-%COMP%]{text-align:center}.img-padding[_ngcontent-%COMP%]{padding:10px 10px 0 30px}.title-padding[_ngcontent-%COMP%]{padding:10px 10px 0}.padding[_ngcontent-%COMP%]{padding-bottom:10px}.icon-padding[_ngcontent-%COMP%]{padding-top:10px}.color-blue[_ngcontent-%COMP%]{color:#7d98e8}td[_ngcontent-%COMP%]{word-wrap:break-word}.website[_ngcontent-%COMP%]{letter-spacing:.5px;display:block;cursor:pointer;background-color:#313b3f;color:#fcdb42;padding:10px;text-decoration:none;text-align:right}#table-component[_ngcontent-%COMP%], .website[_ngcontent-%COMP%]{font:normal 14px sans-serif}#table-component[_ngcontent-%COMP%]{margin:15px auto 0;border:1px solid #000;border-radius:4px;height:400px;max-width:500px}#table-component[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{background-color:#313b3f;color:#fcdb42;padding:10px;margin:0}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin-top:15px;width:100%;border-collapse:collapse}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:10px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:33.3%;font-size:13px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{font-size:14px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:1px solid #000;text-align:left;padding-bottom:5px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .pl-15[_ngcontent-%COMP%]{padding-left:15px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px 0;border-bottom:1px solid #d3d3d3}#table-component[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{font-size:14px;text-align:center;margin:20px auto}#table-component[_ngcontent-%COMP%]     .pagination-next a, #table-component[_ngcontent-%COMP%]     .pagination-previous a{outline:none}#table-component[_ngcontent-%COMP%]     .ngx-pagination .current{border-radius:4px}#table-component[_ngcontent-%COMP%]     .ngx-pagination{padding:0!important}#table-component[_ngcontent-%COMP%]     .ngx-pagination a:hover, #table-component[_ngcontent-%COMP%]     .ngx-pagination button:hover{border-radius:4px}#table-component[_ngcontent-%COMP%]     .ngx-pagination a, #table-component[_ngcontent-%COMP%]     .ngx-pagination button{border-radius:4px;outline:none}@media screen and (max-width:520px){#table-component[_ngcontent-%COMP%]{margin:15px}}"]}),e})();var R=o("pxUr");const W=["wizardForm"];let B=(()=>{class e{constructor(e){this.formBuilder=e,this.lati=33.66069666738704,this.longi=72.9349266152567,this.zoom=8,this.lat=33.6637483,this.lng=73.0579915,this.markers=[{lat:this.lati,lng:this.longi,label:"Your Location",draggable:!0}]}ngOnInit(){this.getLocation(),this.validationForm1=this.formBuilder.group({firstName:["",i.s.required],lastName:["",i.s.required],userName:["",i.s.required]}),this.validationForm2=this.formBuilder.group({email:["",[i.s.required,i.s.email]],mobileNumber:["",i.s.required],password:["",i.s.required]}),this.isForm1Submitted=!1,this.isForm2Submitted=!1}getLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{e&&(console.log("Latitude: "+e.coords.latitude+"Longitude: "+e.coords.longitude),this.lati=e.coords.latitude,this.longi=e.coords.longitude,console.log(this.lati),console.log(this.lati))},e=>console.log(e)):alert("Geolocation is not supported by this browser.")}finishFunction(){alert("Successfully Completed")}get form1(){return this.validationForm1.controls}get form2(){return this.validationForm2.controls}form1Submit(){this.validationForm1.valid&&this.wizardForm.goToNextStep(),this.isForm1Submitted=!0}form2Submit(){this.validationForm2.valid&&this.wizardForm.goToNextStep(),this.isForm2Submitted=!0}clickedMarker(e,t){console.log("clicked the marker: "+(e||t))}mapClicked(e){this.markers.push({lat:e.coords.lat,lng:e.coords.lng,draggable:!0})}markerDragEnd(e,t){console.log("dragEnd",e,t)}}return e.\u0275fac=function(t){return new(t||e)(d.Wb(i.c))},e.\u0275cmp=d.Qb({type:e,selectors:[["app-wizard"]],viewQuery:function(e,t){if(1&e&&d.Yc(W,!0),2&e){let e;d.Gc(e=d.nc())&&(t.wizardForm=e.first)}},decls:30,vars:4,consts:[[1,"card-title","color-blue"],[1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","."],["aria-current","page",1,"breadcrumb-item","active"],[1,"row"],[1,"col-md-12","stretch-card"],[1,"card"],[1,"card-body"],[1,"col-sm-4"],[1,"form-group"],["type","text","placeholder","Office Name",1,"form-control","ulineform"],[3,"latitude","longitude"],["type","button",1,"btn","btn-primary","submit","mt-3"]],template:function(e,t){1&e&&(d.cc(0,"h3",0),d.Uc(1,"Office"),d.bc(),d.cc(2,"nav",1),d.cc(3,"ol",2),d.cc(4,"li",3),d.cc(5,"a",4),d.Uc(6,"Dashboard"),d.bc(),d.bc(),d.cc(7,"li",5),d.Uc(8,"Office"),d.bc(),d.bc(),d.bc(),d.cc(9,"div",6),d.cc(10,"div",7),d.cc(11,"div",8),d.cc(12,"div",9),d.cc(13,"h6",0),d.Uc(14,"Office"),d.bc(),d.cc(15,"form"),d.cc(16,"div",6),d.cc(17,"div",10),d.cc(18,"div",11),d.Xb(19,"input",12),d.bc(),d.bc(),d.bc(),d.bc(),d.cc(20,"h6",0),d.Uc(21,"Google Map Demonstration"),d.bc(),d.cc(22,"agm-map",13),d.Uc(23,' [latitude]="lat" [longitude]="lng" [zoom]="zoom" [disableDefaultUI]="false" [zoomControl]="true" (mapClick)="mapClicked($event)"> '),d.cc(24,"agm-marker",13),d.cc(25,"agm-info-window"),d.cc(26,"strong"),d.Uc(27,"Your Location"),d.bc(),d.bc(),d.bc(),d.bc(),d.cc(28,"button",14),d.Uc(29,"Submit"),d.bc(),d.bc(),d.bc(),d.bc(),d.bc()),2&e&&(d.Jb(22),d.vc("latitude",t.lat)("longitude",t.lng),d.Jb(2),d.vc("latitude",t.lati)("longitude",t.longi))},directives:[c.h,i.u,i.m,i.n,R.c,R.d,R.b],styles:[".ulineform[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;border:none;border-bottom:1px solid #c2bba7}.color-blue[_ngcontent-%COMP%]{color:#7d98e8}agm-map[_ngcontent-%COMP%]{height:300px}"]}),e})();var G=o("cZdB"),T=o("lDzL");const Z=[{path:"",component:y,children:[{path:"",redirectTo:"add-employee",pathMatch:"full"},{path:"add-employee",component:I},{path:"employee-list",component:D},{path:"wizard",component:B},{path:"forgot-password",component:v},{path:"verify-account/:verification",component:p}]}];let j=(()=>{class e{}return e.\u0275mod=d.Ub({type:e}),e.\u0275inj=d.Tb({factory:function(t){return new(t||e)},providers:[r.e],imports:[[r.c,i.i,i.q,c.i.forChild(Z),n.a,T.a,L.a,G.a,a.a.forRoot(),s.a,R.a.forRoot({apiKey:"AIzaSyAP8n5GbRjUqB9dQfxDfZLJuFam4PjHOTs"})]]}),e})()}}]);