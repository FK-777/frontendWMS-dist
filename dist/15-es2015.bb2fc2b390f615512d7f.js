(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{f4AX:function(c,e,r){"use strict";r.d(e,"a",function(){return n});var t=r("f8oD"),o=r("gQwx"),i=r("8Y7J");let n=(()=>{class c{constructor(c){this.http=c,this.userUrl=o.a.mainApiUrl()+"/user"}getUsers(c){return console.log(c),this.http.get(this.userUrl+t.a.objToQuery(c))}createUsers(c){return this.http.post(this.userUrl,c)}updateUsers(c,e){return this.http.patch(this.userUrl+"/"+c,e)}updateUser(c,e){return this.http.patch(this.userUrl+"/"+c,e)}deleteUsers(c){return this.http.delete(this.userUrl+"/"+c)}}return c.\u0275fac=function(e){return new(e||c)(i.jc(t.a))},c.\u0275prov=i.Sb({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},mrSG:function(c,e,r){"use strict";function t(c,e,r,t){var o,i=arguments.length,n=i<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(c,e,r,t);else for(var a=c.length-1;a>=0;a--)(o=c[a])&&(n=(i<3?o(n):i>3?o(e,r,n):o(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n}function o(c,e,r,t){return new(r||(r=Promise))(function(o,i){function n(c){try{s(t.next(c))}catch(e){i(e)}}function a(c){try{s(t.throw(c))}catch(e){i(e)}}function s(c){var e;c.done?o(c.value):(e=c.value,e instanceof r?e:new r(function(c){c(e)})).then(n,a)}s((t=t.apply(c,e||[])).next())})}r.d(e,"b",function(){return t}),r.d(e,"a",function(){return o})},qkBp:function(c,e,r){"use strict";r.r(e),r.d(e,"EmployeesModule",function(){return R});var t=r("SVse"),o=r("iInd"),i=r("s7LF"),n=r("tyVc"),a=r("alHs"),s=r("mHm1"),l=r("RMBY"),d=r("8Y7J"),m=r("EApP"),b=r("9ixH");function u(c,e){1&c&&(d.ac(0),d.Xb(1,"i",10),d.cc(2,"h5",11),d.Tc(3,"Verifying..."),d.bc(),d.Zb())}function h(c,e){1&c&&(d.ac(0),d.Xb(1,"i",12),d.cc(2,"h5",13),d.Tc(3,"Failed!"),d.bc(),d.cc(4,"p",14),d.Tc(5,"The link is invalid or expired."),d.bc(),d.cc(6,"a",15),d.Tc(7,"Request New Link"),d.bc(),d.Zb())}function p(c,e){1&c&&(d.ac(0),d.Xb(1,"i",16),d.cc(2,"h5",13),d.Tc(3,"Success!"),d.bc(),d.cc(4,"p",14),d.Tc(5,"Account verified successfully!"),d.bc(),d.Zb())}let g=(()=>{class c{constructor(c,e,r,t,o){this.router=c,this.route=e,this.formBuilder=r,this.toastrService=t,this.authenticationService=o,this.invalidLink=!1,this.loading=!0}ngOnInit(){this.route.snapshot.params.verification?this.verifyAccount():this.invalidLink=!0}verifyAccount(){this.loading=!0,this.authenticationService.verifyAccount(this.route.snapshot.params.verification).then(c=>{l.a.setLoggedUser(c),this.toastrService.success("Account verified","Success!"),this.loading=!1,console.log(c),"admin"==c.role?this.router.navigate(["/dashboard"]):"lab"==c.role?this.router.navigate(["/lab-sample"]):"researcher"==c.role&&this.router.navigate(["/customer"])}).catch(c=>{console.log("======>",c),c.error&&c.error.message&&this.toastrService.error(c.error.message),this.invalidLink=!0,this.loading=!1})}}return c.\u0275fac=function(e){return new(e||c)(d.Wb(o.e),d.Wb(o.a),d.Wb(i.c),d.Wb(m.b),d.Wb(b.a))},c.\u0275cmp=d.Qb({type:c,selectors:[["app-verify-account"]],decls:15,vars:3,consts:[[1,"row","w-100","mx-0","auth-page"],[1,"col-md-8","col-xl-6","mx-auto"],[1,"card"],[1,"row"],[1,"col-md-4","pr-md-0"],[1,"auth-left-wrapper"],[1,"col-md-8","pl-md-0"],[1,"auth-form-wrapper","px-4","py-5"],["routerLink",".",1,"app-logo","d-block","mb-2"],[4,"ngIf"],["data-feather","loader",1,"loading"],[1,"text-muted","mt-3"],["data-feather","alert-triangle",1,"xl-icon"],[1,"text-muted","mt-2"],[1,"text-muted","mt-1"],["routerLink","/auth/forgot-password",1,"d-block","mt-2","text-muted"],["data-feather","check",1,"xl-icon",2,"color","green"]],template:function(c,e){1&c&&(d.cc(0,"div",0),d.cc(1,"div",1),d.cc(2,"div",2),d.cc(3,"div",3),d.cc(4,"div",4),d.Xb(5,"div",5),d.bc(),d.cc(6,"div",6),d.cc(7,"div",7),d.cc(8,"a",8),d.Tc(9,"WMS"),d.cc(10,"span"),d.Tc(11,"GB"),d.bc(),d.bc(),d.Rc(12,u,4,0,"ng-container",9),d.Rc(13,h,8,0,"ng-container",9),d.Rc(14,p,6,0,"ng-container",9),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.bc()),2&c&&(d.Jb(12),d.uc("ngIf",e.loading),d.Jb(1),d.uc("ngIf",e.invalidLink&&!e.loading),d.Jb(1),d.uc("ngIf",!e.invalidLink&&!e.loading))},directives:[o.h,t.n],styles:["[_nghost-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center}.auth-form-wrapper[_ngcontent-%COMP%]{min-height:380px}.xl-icon[_ngcontent-%COMP%]{width:100px;height:auto}.loading[_ngcontent-%COMP%]{width:50px;height:auto;-webkit-animation-name:ckw;animation-name:ckw;-webkit-animation-duration:4s;animation-duration:4s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes ckw{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes ckw{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]}),c})();function f(c,e){if(1&c&&(d.cc(0,"p",15),d.Tc(1),d.bc()),2&c){const c=d.oc();d.Jb(1),d.Vc(" ",c.emailError(),"")}}let v=(()=>{class c{constructor(c,e,r,t){this.router=c,this.formBuilder=e,this.toastrService=r,this.authenticationService=t}ngOnInit(){this.createForm()}createForm(){this.forgotForm=this.formBuilder.group({email:["",[i.s.minLength(5),i.s.maxLength(100),i.s.required,i.s.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]})}forgotPassword(){if(this.forgotForm.invalid)return void this.forgotForm.markAllAsTouched();this.loading=!0;const c=this.forgotForm.get("email").value.toString();this.authenticationService.forgotPassword(c).then(c=>{console.log(c),this.loading=!1,this.forgotForm.reset(),c.success&&this.toastrService.success("Please check your email to reset password!","Success")}).catch(c=>{console.log("======>",c),c.error&&c.error.message&&this.toastrService.error(c.error.message),this.loading=!1})}emailError(){return this.forgotForm.controls.email.hasError("required")?"Valid email is required":this.forgotForm.controls.email.hasError("maxlength")?"Email cannot exceed 100 characters":this.forgotForm.controls.email.hasError("minlength")?"Email is required of minimum length of 5 characters":this.forgotForm.controls.email.hasError("pattern")?"Valid email is required":""}}return c.\u0275fac=function(e){return new(e||c)(d.Wb(o.e),d.Wb(i.c),d.Wb(m.b),d.Wb(b.a))},c.\u0275cmp=d.Qb({type:c,selectors:[["app-forgot-password"]],decls:20,vars:2,consts:[[1,"row","w-100","mx-0","auth-page"],[1,"col-md-8","col-xl-6","mx-auto"],[1,"card"],[1,"row"],[1,"col-md-4","pr-md-0"],[1,"auth-left-wrapper"],[1,"col-md-8","pl-md-0"],[1,"auth-form-wrapper","px-4","py-5"],["routerLink",".",1,"app-logo","d-block","mb-2"],[1,"text-muted","font-weight-normal","mb-4"],[1,"forms-sample",3,"formGroup"],[1,"form-group"],["for","email"],["type","email","id","email","placeholder","Enter Your Email","formControlName","email",1,"form-control"],["class","text-danger mt-1",4,"ngIf"],[1,"text-danger","mt-1"]],template:function(c,e){1&c&&(d.cc(0,"div",0),d.cc(1,"div",1),d.cc(2,"div",2),d.cc(3,"div",3),d.cc(4,"div",4),d.Xb(5,"div",5),d.bc(),d.cc(6,"div",6),d.cc(7,"div",7),d.cc(8,"a",8),d.Tc(9,"WMS"),d.cc(10,"span"),d.Tc(11,"GB"),d.bc(),d.bc(),d.cc(12,"h5",9),d.Tc(13,"Forgot Password! An email will be sent to you"),d.bc(),d.cc(14,"form",10),d.cc(15,"div",11),d.cc(16,"label",12),d.Tc(17,"Email address"),d.bc(),d.Xb(18,"input",13),d.Rc(19,f,2,1,"p",14),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.bc()),2&c&&(d.Jb(14),d.uc("formGroup",e.forgotForm),d.Jb(5),d.uc("ngIf",e.forgotForm.controls.email.touched||e.forgotForm.controls.email.dirty))},directives:[o.h,i.u,i.m,i.h,i.b,i.l,i.f,t.n],styles:["[_nghost-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center}"]}),c})(),y=(()=>{class c{constructor(){}ngOnInit(){}}return c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=d.Qb({type:c,selectors:[["app-employees"]],decls:1,vars:0,template:function(c,e){1&c&&d.Xb(0,"router-outlet")},directives:[o.j],encapsulation:2}),c})();var w=r("vVw+"),F=r("f4AX"),T=r("XBNL"),x=r("IYwT");function E(c,e){1&c&&(d.cc(0,"div",0),d.cc(1,"div",10),d.cc(2,"div",11),d.cc(3,"div",12),d.cc(4,"h3",13),d.Tc(5,"About"),d.bc(),d.bc(),d.bc(),d.bc(),d.bc())}function k(c,e){1&c&&(d.ac(0,14),d.cc(1,"div",15),d.cc(2,"div",16),d.cc(3,"div",17),d.cc(4,"div",18),d.Xb(5,"i",19),d.cc(6,"h5",20),d.Tc(7,"Success!"),d.bc(),d.cc(8,"p",21),d.Tc(9,"Account created. Please check your email for verification link."),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.Zb()),2&c&&(d.Jb(5),d.Kb("data-feather","check"))}function O(c,e){if(1&c&&(d.cc(0,"p",46),d.Tc(1),d.bc()),2&c){const c=d.oc(2);d.Jb(1),d.Uc(c.fNameError())}}function I(c,e){if(1&c&&(d.cc(0,"p",46),d.Tc(1),d.bc()),2&c){const c=d.oc(2);d.Jb(1),d.Uc(c.lNameError())}}function N(c,e){if(1&c&&(d.cc(0,"p",46),d.Tc(1),d.bc()),2&c){const c=d.oc(2);d.Jb(1),d.Uc(c.phoneError())}}function S(c,e){if(1&c&&(d.cc(0,"p",46),d.Tc(1),d.bc()),2&c){const c=d.oc(2);d.Jb(1),d.Uc(c.emailError())}}function C(c,e){if(1&c&&(d.cc(0,"p",46),d.Tc(1),d.bc()),2&c){const c=d.oc(2);d.Jb(1),d.Uc(c.passwordError())}}function P(c,e){if(1&c&&(d.cc(0,"p",46),d.Tc(1),d.bc()),2&c){const c=d.oc(2);d.Jb(1),d.Uc(c.pinError())}}function M(c,e){if(1&c&&(d.cc(0,"option",47),d.Tc(1),d.bc()),2&c){const c=e.$implicit;d.uc("value",c._id),d.Jb(1),d.Uc(c.officeName)}}function X(c,e){if(1&c&&(d.cc(0,"p",46),d.Tc(1),d.bc()),2&c){const c=d.oc(2);d.Jb(1),d.Uc(c.OfficeIdError())}}function q(c,e){if(1&c){const c=d.dc();d.cc(0,"div",0),d.cc(1,"div",10),d.cc(2,"div",17),d.cc(3,"div",12),d.cc(4,"h6",22),d.Tc(5,"Profile Picture"),d.bc(),d.Xb(6,"img",23),d.cc(7,"div",24),d.mc("click",function(e){return d.Jc(c),d.oc().openFileBrowser(e)}),d.cc(8,"button",25),d.Tc(9,"Upload"),d.bc(),d.bc(),d.Xb(10,"hr"),d.cc(11,"h6",2),d.Tc(12,"Basic Information"),d.bc(),d.Xb(13,"form",26),d.cc(14,"form",27),d.cc(15,"div",0),d.cc(16,"div",28),d.cc(17,"div",29),d.Xb(18,"input",30),d.Rc(19,O,2,1,"p",31),d.bc(),d.bc(),d.cc(20,"div",28),d.cc(21,"div",29),d.Xb(22,"input",32),d.Rc(23,I,2,1,"p",31),d.bc(),d.bc(),d.cc(24,"div",28),d.cc(25,"div",29),d.Xb(26,"input",33),d.Rc(27,N,2,1,"p",31),d.bc(),d.bc(),d.bc(),d.cc(28,"div",0),d.cc(29,"div",28),d.cc(30,"div",29),d.Xb(31,"input",34),d.Rc(32,S,2,1,"p",31),d.bc(),d.bc(),d.cc(33,"div",28),d.cc(34,"div",29),d.Xb(35,"input",35),d.Rc(36,C,2,1,"p",31),d.bc(),d.bc(),d.cc(37,"div",28),d.cc(38,"div",29),d.Xb(39,"input",36),d.Rc(40,P,2,1,"p",31),d.bc(),d.bc(),d.bc(),d.Xb(41,"hr"),d.cc(42,"h6",2),d.Tc(43,"Employee Information"),d.bc(),d.cc(44,"div",0),d.cc(45,"div",28),d.cc(46,"div",29),d.cc(47,"label"),d.Tc(48,"Employee Office Name"),d.bc(),d.cc(49,"select",37),d.cc(50,"option",38),d.Tc(51,"Select Office"),d.bc(),d.Rc(52,M,2,2,"option",39),d.bc(),d.Rc(53,X,2,1,"p",31),d.bc(),d.bc(),d.cc(54,"div",28),d.cc(55,"div",29),d.cc(56,"label"),d.Tc(57,"Date of Joining"),d.bc(),d.Xb(58,"input",40),d.bc(),d.bc(),d.cc(59,"div",28),d.cc(60,"div",29),d.cc(61,"label"),d.Tc(62,"Designation"),d.bc(),d.cc(63,"select",41),d.cc(64,"option",38),d.Tc(65,"Select Designation"),d.bc(),d.cc(66,"option",42),d.Tc(67,"Manager"),d.bc(),d.cc(68,"option",43),d.Tc(69,"DMO"),d.bc(),d.cc(70,"option",44),d.Tc(71,"Supervisor"),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.cc(72,"button",45),d.mc("click",function(){return d.Jc(c),d.oc().register()}),d.Tc(73,"Sign Up"),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.bc()}if(2&c){const c=d.oc();d.Jb(13),d.uc("formGroup",c.absentForm),d.Jb(1),d.uc("formGroup",c.regForm),d.Jb(5),d.uc("ngIf",c.regForm.controls.fName.touched||c.regForm.controls.fName.dirty),d.Jb(4),d.uc("ngIf",c.regForm.controls.lName.touched||c.regForm.controls.lName.dirty),d.Jb(4),d.uc("ngIf",c.regForm.controls.pNumber.touched||c.regForm.controls.pNumber.dirty),d.Jb(5),d.uc("ngIf",c.regForm.controls.email.touched||c.regForm.controls.email.dirty),d.Jb(4),d.uc("ngIf",c.regForm.controls.password.touched||c.regForm.controls.password.dirty),d.Jb(4),d.uc("ngIf",c.regForm.controls.pin.touched||c.regForm.controls.pin.dirty),d.Jb(12),d.uc("ngForOf",c.myOfficeUsers),d.Jb(1),d.uc("ngIf",c.regForm.controls.OfficeId.touched||c.regForm.controls.OfficeId.dirty),d.Jb(19),d.uc("disabled",c.regForm.invalid||c.loading)}}let L=(()=>{class c{constructor(c,e,r,t,o,i,n,a){this.router=c,this.route=e,this.formBuilder=r,this.authenticationService=t,this.userService=o,this.toastrService=i,this.attendanceService=n,this.datepipe=a,this.role="",this.loading=!1,this.loadingIndicator=!0,this.checkVerificationEmailStep=!1,this.reorderable=!0,this.rows=[],this.attendance=[],this.officeRole="62b08350191ff875b3a114f0",this.empRole="62b08350191ff875b3a114ef",this.myOfficeUsers=[],this.users=[],this.newEmployee=[],this.onlyEmp=[],this.employeesArray=[],this.fetch(c=>{this.rows=c,setTimeout(()=>{this.loadingIndicator=!1},1500)})}fetch(c){const e=new XMLHttpRequest;e.open("GET","assets/data/100k.json"),e.onload=()=>{c(JSON.parse(e.response))},e.send()}createForm(){this.regForm=this.formBuilder.group({email:["",[i.s.minLength(5),i.s.maxLength(100),i.s.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),i.s.required]],password:["",[i.s.minLength(8),i.s.maxLength(100),i.s.required,i.s.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/)]],fName:["",[i.s.minLength(2),i.s.maxLength(50),i.s.required]],lName:["",[i.s.minLength(2),i.s.maxLength(50),i.s.required]],designation:["",[i.s.minLength(2),i.s.maxLength(50),i.s.required]],OfficeId:new i.d(["",[i.s.minLength(2),i.s.maxLength(100),i.s.required]]),pNumber:["",[i.s.minLength(2),i.s.maxLength(15),i.s.required]],pin:["",[i.s.minLength(4),i.s.maxLength(4),i.s.required]],role:["employee"],rememberMe:[!1]})}ngOnInit(){this.fetchCurentDate(),this.fetchReUser(),this.createForm(),this.absentForm=this.formBuilder.group({})}fetchCurentDate(){this.currentDateTime=this.datepipe.transform(new Date,"dd/MM/yyyy")}fetchReUser(){this.userService.getUsers({}).subscribe(c=>{console.log("pehly"),console.log(c),this.users=c;for(let e=0,r=0;e<this.users.length;e++)this.users[e].RoleId==this.officeRole&&(this.myOfficeUsers[r]=this.users[e],r++,console.log("inside If Statement "));console.log("badd main"),console.log(this.users)})}register(){if(this.regForm.invalid)return void this.regForm.markAllAsTouched();this.loading=!0;const c=this.regForm.value;this.authenticationService.register(this.regForm.value).then(e=>{c.rememberMe&&w.a.setItem("ci_email_remember",c.email),this.checkVerificationEmailStep=!0,this.loading=!1,this.regForm.reset(),this.toastrService.success("Please check your email for account verification","Success"),console.log(e),this.newEmployee=e,this.userService.getUsers({}).subscribe(c=>{this.onlyEmp=c;for(let e=0,r=0;e<this.onlyEmp.length;e++)this.onlyEmp[e].RoleId==this.empRole&&(this.employeesArray[r]=this.onlyEmp[e],r++);for(let e=0;e<this.employeesArray.length;e++)this.employeesArray[e].email==this.newEmployee.email&&(console.log(this.employeesArray[e].email),this.empUserId=this.employeesArray[e]._id,this.empOfficeId=this.employeesArray[e].OfficeId);for(let e=0;e<365;e++){let c=new Date;c.setDate(c.getDate()+e),this.dateFor=this.datepipe.transform(c,"dd/MM/yyyy");const r=JSON.parse(JSON.stringify(this.absentForm.value));r.EmployeeId=this.empUserId,r.OfficeId=this.empOfficeId,r.status="Absent",r.date=this.dateFor,this.attendanceService.createAttendance(r).subscribe(c=>{console.log(c)})}})}).catch(c=>{c.error&&c.error.message&&this.toastrService.error(c.error.message),this.loading=!1})}openFileBrowser(c){c.preventDefault(),document.querySelector("#fileUploadInputExample").click()}handleFileInput(c){c.target.files.length&&document.querySelector("#fileUploadInputExample + .input-group .file-upload-info").setAttribute("value",c.target.files[0].name)}emailError(){return this.regForm.controls.email.hasError("required")?"Valid email is required":this.regForm.controls.email.hasError("maxlength")?"Email cannot exceed 100 characters":this.regForm.controls.email.hasError("minlength")?"Email is required of minimum length of 5 characters":this.regForm.controls.email.hasError("pattern")?"Valid email is required":""}universityError(){return this.regForm.controls.university.hasError("required")?"university is required":""}ResearcherIdError(){return this.regForm.controls.ResearcherId.hasError("required")?"Researcher Name is required":""}phoneError(){return this.regForm.controls.pNumber.hasError("required")?"Phone number is required":this.regForm.controls.pNumber.hasError("maxlength")?"phone number cannot exceed 50 characters":this.regForm.controls.pNumber.hasError("minlength")?"phone number is required of minimum length of 2 characters":""}pinError(){return this.regForm.controls.pin.hasError("required")?"pin is required":this.regForm.controls.pin.hasError("maxlength")?"pin number should be equel to 4":this.regForm.controls.pin.hasError("minlength")?"pin should be equel to 4":""}passwordError(){return this.regForm.controls.password.hasError("required")?"Password is required":this.regForm.controls.password.hasError("minlength")?"Password is required of minimum length of 8 characters":this.regForm.controls.password.hasError("maxlength")?"First Name cannot exceed 100 characters":this.regForm.controls.password.hasError("pattern")?"Password must contain at least an upper case, a lower case and a special character.":""}fNameError(){return this.regForm.controls.fName.hasError("required")?"First Name is required":this.regForm.controls.fName.hasError("maxlength")?"First Name cannot exceed 50 characters":this.regForm.controls.fName.hasError("minlength")?"First Name is required of minimum length of 2 characters":""}OfficeIdError(){return this.regForm.controls.OfficeId.hasError("required")?"Office Name is required":""}DesignationError(){return this.regForm.controls.designation.hasError("required")?"Office Name is required":""}lNameError(){return this.regForm.controls.lName.hasError("required")?"Last Name is required":this.regForm.controls.lName.hasError("maxlength")?"Last Name cannot exceed 50 characters":this.regForm.controls.lName.hasError("minlength")?"Last Name is required of minimum length of 2 characters":""}}return c.\u0275fac=function(e){return new(e||c)(d.Wb(o.e),d.Wb(o.a),d.Wb(i.c),d.Wb(b.a),d.Wb(F.a),d.Wb(m.b),d.Wb(T.a),d.Wb(t.e))},c.\u0275cmp=d.Qb({type:c,selectors:[["app-add-employee"]],decls:17,vars:3,consts:[[1,"row"],[1,"col-md-12"],[1,"card-title","color-blue"],[1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","."],["aria-current","page",1,"breadcrumb-item","active"],["class","row",4,"ngIf"],["style","background-color: green;",4,"ngIf"],[1,"col-md-12","stretch-card"],[1,"card","back"],[1,"card-body"],[1,"text-color"],[2,"background-color","green"],[1,"row",2,"background-color","green"],[1,"col-md-12","stretch-card",2,"background-color","green"],[1,"card"],[1,"card-body",2,"background-color","rgb(215, 247, 216)"],["appFeatherIcon","",1,"xl-icon"],[1,"text-muted","mt-2"],[1,"text-muted","mt-1"],[1,"card-title"],["src","../assets/images/profileicon.png","alt","Profile Icon","width","100","height","100"],[1,"input-group","col-xs-12",3,"click"],["type","button",1,"file-upload-browse","btn","btn-primary","ml-2"],[3,"formGroup"],[1,"forms-sample",3,"formGroup"],[1,"col-sm-4"],[1,"form-group"],["type","text","id","fName","placeholder","First Name","formControlName","fName",1,"form-control","ulineform"],["class","text-danger mt-1",4,"ngIf"],["type","text","id","lName","placeholder","Last Name","formControlName","lName",1,"form-control","ulineform"],["type","text","id","pNumber","placeholder","Phone Number","formControlName","pNumber",1,"form-control","ulineform"],["type","text","id","email","placeholder","Email","formControlName","email",1,"form-control","ulineform"],["type","text","id","email","placeholder","password","formControlName","password",1,"form-control","ulineform"],["type","number","id","pin","placeholder","pin","formControlName","pin",1,"form-control","ulineform"],["formControlName","OfficeId",1,"form-control","ulineform"],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","date","placeholder","Date",1,"form-control","ulineform"],["formControlName","designation",1,"form-control","form-control-sm","mb-3","ulineform"],["value","Manager"],["value","DMO"],["value","Supervisor"],["type","button",1,"btn","btn-primary","mr-2","mb-2","mb-md-0",3,"disabled","click"],[1,"text-danger","mt-1"],[3,"value"]],template:function(c,e){1&c&&(d.cc(0,"div",0),d.cc(1,"div",1),d.cc(2,"h3",2),d.Tc(3,"Add Employee"),d.bc(),d.cc(4,"nav",3),d.cc(5,"ol",4),d.cc(6,"li",5),d.cc(7,"a",6),d.Tc(8,"Dashboard"),d.bc(),d.bc(),d.cc(9,"li",5),d.cc(10,"a",6),d.Tc(11,"Employees"),d.bc(),d.bc(),d.cc(12,"li",7),d.Tc(13,"Add Employee"),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.Rc(14,E,6,0,"div",8),d.Rc(15,k,10,1,"ng-container",9),d.Rc(16,q,74,11,"div",8)),2&c&&(d.Jb(14),d.uc("ngIf",!e.checkVerificationEmailStep),d.Jb(1),d.uc("ngIf",e.checkVerificationEmailStep),d.Jb(1),d.uc("ngIf",!e.checkVerificationEmailStep))},directives:[o.h,t.n,x.a,i.u,i.m,i.h,i.b,i.l,i.f,i.p,i.r,i.o,i.t,t.m],styles:['.back[_ngcontent-%COMP%]{background-color:#7d98e8}.text-color[_ngcontent-%COMP%]{color:#f0fff0}.color-blue[_ngcontent-%COMP%]{color:#7d98e8}.ulineform[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;border:none;border-bottom:1px solid #c2bba7}.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:38px;height:18px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc}.slider[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]:before{position:absolute;transition:.4s}.slider[_ngcontent-%COMP%]:before{content:"";height:10px;width:10px;left:4px;bottom:4px;background-color:#fff}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#2196f3}input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #2196f3}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(20px)}.slider.round[_ngcontent-%COMP%]{border-radius:34px}.slider.round[_ngcontent-%COMP%]:before{border-radius:50%}']}),c})(),J=(()=>{class c{constructor(){this.htmlText="<p> If You Can Think It, You Can Do It. </p>",this.quillConfig={toolbar:{container:[["bold","italic","underline","strike"],["code-block"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{header:[1,2,3,4,5,6,!1]}],[{align:[]}],["link","image","video"]]}},this.onSelectionChanged=c=>{null==c.oldRange&&this.onFocus(),null==c.range&&this.onBlur()},this.onContentChanged=c=>{},this.onFocus=()=>{console.log("On Focus")},this.onBlur=()=>{console.log("Blurred")}}ngOnInit(){}}return c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=d.Qb({type:c,selectors:[["app-employee-list"]],decls:198,vars:0,consts:[[1,"row"],[1,"col-md-12"],[1,"card-title","color-blue"],[1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","."],["aria-current","page",1,"breadcrumb-item","active"],[1,"col-12","col-md-6","col-xl-4"],[1,"card"],[1,"card-body"],[1,"col-sm-4"],[1,"card-body","img-padding"],["src","https://th.bing.com/th/id/OIP.caBoQfJXmjcumn5HVKU51QHaE8?pid=ImgDet&rs=1","alt","...",1,"round-image"],[1,"col-sm-6"],[1,"card-body","mt-3","title-padding"],[1,"color-blue"],[1,"col-sm-2"],[1,"card-body","mt-3"],["data-feather","more-vertical","appFeatherIcon",""],["data-feather","user","appFeatherIcon","",1,"ml-5"],[1,"col-sm-8"],[1,"ml-3"],[1,"ml-3","color-blue","padding"],["data-feather","phone","appFeatherIcon","",1,"ml-5"],["data-feather","mail","appFeatherIcon","",1,"ml-5"],["data-feather","users","appFeatherIcon","",1,"ml-5"],["data-feather","calendar","appFeatherIcon","",1,"ml-5"],["href","",1,"btn","btn-primary","mt-2",3,"click"]],template:function(c,e){1&c&&(d.cc(0,"div",0),d.cc(1,"div",1),d.cc(2,"h3",2),d.Tc(3,"Employee List"),d.bc(),d.cc(4,"nav",3),d.cc(5,"ol",4),d.cc(6,"li",5),d.cc(7,"a",6),d.Tc(8,"Dashboard"),d.bc(),d.bc(),d.cc(9,"li",5),d.cc(10,"a",6),d.Tc(11,"Employees"),d.bc(),d.bc(),d.cc(12,"li",7),d.Tc(13,"Employees List"),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.cc(14,"div",0),d.cc(15,"div",8),d.cc(16,"div",9),d.cc(17,"div",10),d.cc(18,"div",0),d.cc(19,"div",11),d.cc(20,"div",12),d.Xb(21,"img",13),d.bc(),d.bc(),d.cc(22,"div",14),d.cc(23,"div",15),d.cc(24,"h5",16),d.Tc(25,"Darlene C. Larsen"),d.bc(),d.cc(26,"p"),d.Tc(27,"Manager"),d.bc(),d.bc(),d.bc(),d.cc(28,"div",17),d.cc(29,"div",18),d.cc(30,"div"),d.Xb(31,"i",19),d.bc(),d.bc(),d.bc(),d.bc(),d.Xb(32,"hr"),d.cc(33,"div",0),d.cc(34,"div",11),d.Xb(35,"i",20),d.bc(),d.cc(36,"div",21),d.cc(37,"p",22),d.Tc(38,"Employee ID"),d.bc(),d.cc(39,"h5",23),d.Tc(40,"XYZ-1005"),d.bc(),d.bc(),d.bc(),d.cc(41,"div",0),d.cc(42,"div",11),d.Xb(43,"i",24),d.bc(),d.cc(44,"div",21),d.cc(45,"p",22),d.Tc(46,"Phone"),d.bc(),d.cc(47,"h5",23),d.Tc(48,"0092 927 222 189"),d.bc(),d.bc(),d.bc(),d.cc(49,"div",0),d.cc(50,"div",11),d.Xb(51,"i",25),d.bc(),d.cc(52,"div",21),d.cc(53,"p",22),d.Tc(54,"Email"),d.bc(),d.cc(55,"h5",23),d.Tc(56,"jamespascal@gmail.com"),d.bc(),d.bc(),d.bc(),d.cc(57,"div",0),d.cc(58,"div",11),d.Xb(59,"i",26),d.bc(),d.cc(60,"div",21),d.cc(61,"p",22),d.Tc(62,"Department"),d.bc(),d.cc(63,"h5",23),d.Tc(64,"Design"),d.bc(),d.bc(),d.bc(),d.cc(65,"div",0),d.cc(66,"div",11),d.Xb(67,"i",27),d.bc(),d.cc(68,"div",21),d.cc(69,"p",22),d.Tc(70,"Date of Joining"),d.bc(),d.cc(71,"h5",23),d.Tc(72,"Sep. 24, 2019"),d.bc(),d.bc(),d.bc(),d.Xb(73,"hr"),d.cc(74,"a",28),d.mc("click",function(){return!1}),d.Tc(75,"View More"),d.bc(),d.bc(),d.bc(),d.bc(),d.cc(76,"div",8),d.cc(77,"div",9),d.cc(78,"div",10),d.cc(79,"div",0),d.cc(80,"div",11),d.cc(81,"div",12),d.Xb(82,"img",13),d.bc(),d.bc(),d.cc(83,"div",14),d.cc(84,"div",15),d.cc(85,"h5",16),d.Tc(86,"Darlene C. Larsen"),d.bc(),d.cc(87,"p"),d.Tc(88,"Manager"),d.bc(),d.bc(),d.bc(),d.cc(89,"div",17),d.cc(90,"div",18),d.cc(91,"div"),d.Xb(92,"i",19),d.bc(),d.bc(),d.bc(),d.bc(),d.Xb(93,"hr"),d.cc(94,"div",0),d.cc(95,"div",11),d.Xb(96,"i",20),d.bc(),d.cc(97,"div",21),d.cc(98,"p",22),d.Tc(99,"Employee ID"),d.bc(),d.cc(100,"h5",23),d.Tc(101,"XYZ-1005"),d.bc(),d.bc(),d.bc(),d.cc(102,"div",0),d.cc(103,"div",11),d.Xb(104,"i",24),d.bc(),d.cc(105,"div",21),d.cc(106,"p",22),d.Tc(107,"Phone"),d.bc(),d.cc(108,"h5",23),d.Tc(109,"0092 927 222 189"),d.bc(),d.bc(),d.bc(),d.cc(110,"div",0),d.cc(111,"div",11),d.Xb(112,"i",25),d.bc(),d.cc(113,"div",21),d.cc(114,"p",22),d.Tc(115,"Email"),d.bc(),d.cc(116,"h5",23),d.Tc(117,"jamespascal@gmail.com"),d.bc(),d.bc(),d.bc(),d.cc(118,"div",0),d.cc(119,"div",11),d.Xb(120,"i",26),d.bc(),d.cc(121,"div",21),d.cc(122,"p",22),d.Tc(123,"Department"),d.bc(),d.cc(124,"h5",23),d.Tc(125,"Design"),d.bc(),d.bc(),d.bc(),d.cc(126,"div",0),d.cc(127,"div",11),d.Xb(128,"i",27),d.bc(),d.cc(129,"div",21),d.cc(130,"p",22),d.Tc(131,"Date of Joining"),d.bc(),d.cc(132,"h5",23),d.Tc(133,"Sep. 24, 2019"),d.bc(),d.bc(),d.bc(),d.Xb(134,"hr"),d.cc(135,"a",28),d.mc("click",function(){return!1}),d.Tc(136,"View More"),d.bc(),d.bc(),d.bc(),d.bc(),d.cc(137,"div",8),d.cc(138,"div",9),d.cc(139,"div",10),d.cc(140,"div",0),d.cc(141,"div",11),d.cc(142,"div",12),d.Xb(143,"img",13),d.bc(),d.bc(),d.cc(144,"div",14),d.cc(145,"div",15),d.cc(146,"h5",16),d.Tc(147,"Darlene C. Larsen"),d.bc(),d.cc(148,"p"),d.Tc(149,"Manager"),d.bc(),d.bc(),d.bc(),d.cc(150,"div",17),d.cc(151,"div",18),d.cc(152,"div"),d.Xb(153,"i",19),d.bc(),d.bc(),d.bc(),d.bc(),d.Xb(154,"hr"),d.cc(155,"div",0),d.cc(156,"div",11),d.Xb(157,"i",20),d.bc(),d.cc(158,"div",21),d.cc(159,"p",22),d.Tc(160,"Employee ID"),d.bc(),d.cc(161,"h5",23),d.Tc(162,"XYZ-1005"),d.bc(),d.bc(),d.bc(),d.cc(163,"div",0),d.cc(164,"div",11),d.Xb(165,"i",24),d.bc(),d.cc(166,"div",21),d.cc(167,"p",22),d.Tc(168,"Phone"),d.bc(),d.cc(169,"h5",23),d.Tc(170,"0092 927 222 189"),d.bc(),d.bc(),d.bc(),d.cc(171,"div",0),d.cc(172,"div",11),d.Xb(173,"i",25),d.bc(),d.cc(174,"div",21),d.cc(175,"p",22),d.Tc(176,"Email"),d.bc(),d.cc(177,"h5",23),d.Tc(178,"jamespascal@gmail.com"),d.bc(),d.bc(),d.bc(),d.cc(179,"div",0),d.cc(180,"div",11),d.Xb(181,"i",26),d.bc(),d.cc(182,"div",21),d.cc(183,"p",22),d.Tc(184,"Department"),d.bc(),d.cc(185,"h5",23),d.Tc(186,"Design"),d.bc(),d.bc(),d.bc(),d.cc(187,"div",0),d.cc(188,"div",11),d.Xb(189,"i",27),d.bc(),d.cc(190,"div",21),d.cc(191,"p",22),d.Tc(192,"Date of Joining"),d.bc(),d.cc(193,"h5",23),d.Tc(194,"Sep. 24, 2019"),d.bc(),d.bc(),d.bc(),d.Xb(195,"hr"),d.cc(196,"a",28),d.mc("click",function(){return!1}),d.Tc(197,"View More"),d.bc(),d.bc(),d.bc(),d.bc(),d.bc())},directives:[o.h,x.a],styles:[".round-image[_ngcontent-%COMP%]{border-radius:50%;width:75px;height:75px}.alignment[_ngcontent-%COMP%]{text-align:center}.color-blue[_ngcontent-%COMP%]{color:#7d98e8}.img-padding[_ngcontent-%COMP%]{padding:10px 10px 0 30px}.title-padding[_ngcontent-%COMP%]{padding:10px 10px 0}.padding[_ngcontent-%COMP%]{padding-bottom:10px}.icon-padding[_ngcontent-%COMP%]{padding-top:10px}"]}),c})();var D=r("LSHg");const U=["wizardForm"],_=[{path:"",component:y,children:[{path:"",redirectTo:"add-employee",pathMatch:"full"},{path:"add-employee",component:L},{path:"employee-list",component:J},{path:"wizard",component:(()=>{class c{constructor(c){this.formBuilder=c,this.lati=33.66069666738704,this.longi=72.9349266152567,this.zoom=8,this.lat=33.6637483,this.lng=73.0579915,this.markers=[{lat:this.lati,lng:this.longi,label:"Your Location",draggable:!0}]}ngOnInit(){this.getLocation(),this.validationForm1=this.formBuilder.group({firstName:["",i.s.required],lastName:["",i.s.required],userName:["",i.s.required]}),this.validationForm2=this.formBuilder.group({email:["",[i.s.required,i.s.email]],mobileNumber:["",i.s.required],password:["",i.s.required]}),this.isForm1Submitted=!1,this.isForm2Submitted=!1}getLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(c=>{c&&(console.log("Latitude: "+c.coords.latitude+"Longitude: "+c.coords.longitude),this.lati=c.coords.latitude,this.longi=c.coords.longitude,console.log(this.lati),console.log(this.lati))},c=>console.log(c)):alert("Geolocation is not supported by this browser.")}finishFunction(){alert("Successfully Completed")}get form1(){return this.validationForm1.controls}get form2(){return this.validationForm2.controls}form1Submit(){this.validationForm1.valid&&this.wizardForm.goToNextStep(),this.isForm1Submitted=!0}form2Submit(){this.validationForm2.valid&&this.wizardForm.goToNextStep(),this.isForm2Submitted=!0}clickedMarker(c,e){console.log("clicked the marker: "+(c||e))}mapClicked(c){this.markers.push({lat:c.coords.lat,lng:c.coords.lng,draggable:!0})}markerDragEnd(c,e){console.log("dragEnd",c,e)}}return c.\u0275fac=function(e){return new(e||c)(d.Wb(i.c))},c.\u0275cmp=d.Qb({type:c,selectors:[["app-wizard"]],viewQuery:function(c,e){if(1&c&&d.Xc(U,!0),2&c){let c;d.Fc(c=d.nc())&&(e.wizardForm=c.first)}},decls:30,vars:4,consts:[[1,"card-title","color-blue"],[1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","."],["aria-current","page",1,"breadcrumb-item","active"],[1,"row"],[1,"col-md-12","stretch-card"],[1,"card"],[1,"card-body"],[1,"col-sm-4"],[1,"form-group"],["type","text","placeholder","Office Name",1,"form-control","ulineform"],[3,"latitude","longitude"],["type","button",1,"btn","btn-primary","submit","mt-3"]],template:function(c,e){1&c&&(d.cc(0,"h3",0),d.Tc(1,"Office"),d.bc(),d.cc(2,"nav",1),d.cc(3,"ol",2),d.cc(4,"li",3),d.cc(5,"a",4),d.Tc(6,"Dashboard"),d.bc(),d.bc(),d.cc(7,"li",5),d.Tc(8,"Office"),d.bc(),d.bc(),d.bc(),d.cc(9,"div",6),d.cc(10,"div",7),d.cc(11,"div",8),d.cc(12,"div",9),d.cc(13,"h6",0),d.Tc(14,"Office"),d.bc(),d.cc(15,"form"),d.cc(16,"div",6),d.cc(17,"div",10),d.cc(18,"div",11),d.Xb(19,"input",12),d.bc(),d.bc(),d.bc(),d.bc(),d.cc(20,"h6",0),d.Tc(21,"Google Map Demonstration"),d.bc(),d.cc(22,"agm-map",13),d.Tc(23,' [latitude]="lat" [longitude]="lng" [zoom]="zoom" [disableDefaultUI]="false" [zoomControl]="true" (mapClick)="mapClicked($event)"> '),d.cc(24,"agm-marker",13),d.cc(25,"agm-info-window"),d.cc(26,"strong"),d.Tc(27,"Your Location"),d.bc(),d.bc(),d.bc(),d.bc(),d.cc(28,"button",14),d.Tc(29,"Submit"),d.bc(),d.bc(),d.bc(),d.bc(),d.bc()),2&c&&(d.Jb(22),d.uc("latitude",e.lat)("longitude",e.lng),d.Jb(2),d.uc("latitude",e.lati)("longitude",e.longi))},directives:[o.h,i.u,i.m,i.n,D.c,D.d,D.b],styles:[".ulineform[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;border:none;border-bottom:1px solid #c2bba7}.color-blue[_ngcontent-%COMP%]{color:#7d98e8}agm-map[_ngcontent-%COMP%]{height:300px}"]}),c})()},{path:"forgot-password",component:v},{path:"verify-account/:verification",component:g}]}];let R=(()=>{class c{}return c.\u0275mod=d.Ub({type:c}),c.\u0275inj=d.Tb({factory:function(e){return new(e||c)},providers:[t.e],imports:[[t.c,i.i,i.q,o.i.forChild(_),n.a,a.a.forRoot(),s.a,D.a.forRoot({apiKey:"AIzaSyAP8n5GbRjUqB9dQfxDfZLJuFam4PjHOTs"})]]}),c})()}}]);