(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{kEAq:function(t,e,o){"use strict";o.r(e),o.d(e,"OfficesModule",function(){return I});var c=o("SVse"),r=o("iInd"),n=o("s7LF"),i=o("Tczp"),a=o("hrfs"),s=o("8Y7J");let l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Qb({type:t,selectors:[["app-offices"]],decls:1,vars:0,template:function(t,e){1&t&&s.Xb(0,"router-outlet")},directives:[r.j],encapsulation:2}),t})();var d=o("mrSG"),g=o("RMBY"),m=o("G0yt"),b=o("EApP"),p=o("f4AX"),h=o("xkgV");function u(t,e){if(1&t&&(s.cc(0,"div",17),s.cc(1,"form",18),s.cc(2,"div",19),s.cc(3,"select",20),s.cc(4,"option",21),s.Tc(5,"Select city"),s.bc(),s.cc(6,"option",22),s.Tc(7,"Ghanche"),s.bc(),s.cc(8,"option",23),s.Tc(9,"Skardu"),s.bc(),s.cc(10,"option",24),s.Tc(11,"Shigar"),s.bc(),s.cc(12,"option",25),s.Tc(13,"Kharmang"),s.bc(),s.cc(14,"option",26),s.Tc(15,"Roundu"),s.bc(),s.cc(16,"option",27),s.Tc(17,"Ghizer"),s.bc(),s.cc(18,"option",28),s.Tc(19,"Gupis\u2013Yasin"),s.bc(),s.cc(20,"option",23),s.Tc(21,"Skardu"),s.bc(),s.cc(22,"option",24),s.Tc(23,"Shigar"),s.bc(),s.cc(24,"option",29),s.Tc(25,"Gilgit"),s.bc(),s.cc(26,"option",30),s.Tc(27,"Hunza"),s.bc(),s.cc(28,"option",31),s.Tc(29,"Astore"),s.bc(),s.cc(30,"option",32),s.Tc(31,"Diamer"),s.bc(),s.cc(32,"option",33),s.Tc(33,"Darel"),s.bc(),s.cc(34,"option",34),s.Tc(35,"Tangir"),s.bc(),s.bc(),s.bc(),s.cc(36,"div",19),s.Xb(37,"input",35),s.bc(),s.cc(38,"div",19),s.cc(39,"button",36),s.Xb(40,"i",37),s.bc(),s.cc(41,"button",38),s.Xb(42,"i",39),s.bc(),s.bc(),s.bc(),s.bc()),2&t){const t=s.oc();s.Jb(3),s.uc("formControl",t.districtName),s.Jb(34),s.uc("formControl",t.officeName)}}const f=function(t){return["/employee-office",t]};function x(t,e){if(1&t&&(s.cc(0,"tr"),s.cc(1,"td"),s.Tc(2),s.bc(),s.cc(3,"td"),s.Tc(4),s.bc(),s.cc(5,"td"),s.Tc(6),s.bc(),s.cc(7,"td"),s.Tc(8),s.bc(),s.cc(9,"td"),s.Tc(10),s.bc(),s.cc(11,"td",40),s.cc(12,"button",41),s.Xb(13,"i",42),s.bc(),s.bc(),s.bc()),2&t){const t=e.$implicit,o=e.index;s.Jb(2),s.Uc(o+1),s.Jb(2),s.Uc(t.officeName),s.Jb(2),s.Uc(t.city),s.Jb(2),s.Uc(t.email),s.Jb(2),s.Uc(t.pNumber),s.Jb(2),s.uc("routerLink",s.yc(6,f,t._id))}}let C=(()=>{class t{constructor(t,e,o){this.modalService=t,this.toast=e,this.userService=o,this.showFilters=!1,this.basicModalCloseResult="",this.users=[],this.samples=[],this.myResearcherUsers=[],this.individual=[],this.rows=[],this.loadingIndicator=!0,this.spec=[],this.role="62a999ff6c5f6b541f7450f3",this.officeName=new n.d(""),this.districtName=new n.d(""),this.termsAccepted=!1,this.offers=[],this.userOf={_id:"",fName:"",lName:"",email:"",verified:"",isBlocked:"",loginAttempts:""},this.user=g.a.getLoggedUser().id}ngOnInit(){console.log(this.user),this.fetchUser(),this.fetchReUser()}fetchReUser(){this.userService.getUsers({}).subscribe(t=>{console.log("pehly"),console.log(t),this.users=t;for(let e=0,o=0;e<this.users.length;e++)this.users[e].RoleId==this.role&&(this.myResearcherUsers[o]=this.users[e],console.log("My after this"),console.log(this.myResearcherUsers),o++,console.log("inside If Statement "));console.log("badd main"),console.log(this.users)})}fetchUser(){this.userService.getUsers({}).subscribe(t=>{this.users=t,console.log(this.users)})}openBasicModal(t,e){return Object(d.a)(this,void 0,void 0,function*(){console.log(e),this.userOf=e,this.modal=this.modalService.open(t,{})})}}return t.\u0275fac=function(e){return new(e||t)(s.Wb(m.e),s.Wb(b.b),s.Wb(p.a))},t.\u0275cmp=s.Qb({type:t,selectors:[["app-office-list"]],decls:32,vars:2,consts:[[1,"card-title",2,"margin-bottom","-1%","font-weight","bold"],["type","button",1,"btn","btn-light","btn-icon",2,"float","right",3,"click"],[1,"feather","icon-filter"],[1,"row"],[1,"col-md-12","grid-margin","stretch-card"],[1,"card"],[1,"card-body"],[1,"card-title",2,"color","#727cf5"],[1,"container-fluid"],["class","filters card","style","margin-bottom: 9px; margin-top: 30px;",4,"ngIf"],[1,"table-responsive","pt-3"],[1,"table","table-bordered",2,"background-color","azure"],[2,"background-color","rgb(194, 216, 250)"],[1,"text-center"],[4,"ngFor","ngForOf"],[1,"pagination","mt-4"],[3,"pageChange"],[1,"filters","card",2,"margin-bottom","9px","margin-top","30px"],[1,"form-inline",2,"padding","9px","background-color","white"],[1,"form-group","ml-2"],["id","districtName",1,"form-control",3,"formControl"],["value",""],["value","Ghanche"],["value","Skardu"],["value","Shigar"],["value","Kharmang"],["value","Roundu"],["value","Ghizer"],["value","Gupis\u2013Yasin"],["value","Gilgit"],["value","Hunza"],["value","Astore"],["value","Diamer"],["value","Darel"],["value","Tangir"],["type","text","id","officeName","placeholder","enter office Name",1,"form-control",3,"formControl"],["type","button",1,"btn","btn-primary"],[1,"feather","icon-search"],["type","button",1,"btn","btn-light","ml-1"],[1,"feather","icon-refresh-ccw"],[1,"td-actions","text-center"],[1,"btn","btn-light","btn-icon",2,"background-color","rgb(120, 185, 23)",3,"routerLink"],[1,"feather","icon-list",2,"color","whitesmoke"]],template:function(t,e){1&t&&(s.cc(0,"h4",0),s.cc(1,"button",1),s.mc("click",function(){return e.showFilters=!e.showFilters}),s.Xb(2,"i",2),s.Tc(3,"\xa0 "),s.bc(),s.bc(),s.cc(4,"div",3),s.cc(5,"div",4),s.cc(6,"div",5),s.cc(7,"div",6),s.cc(8,"h6",7),s.Tc(9,"office List"),s.bc(),s.cc(10,"div",8),s.Rc(11,u,43,2,"div",9),s.bc(),s.cc(12,"div",10),s.cc(13,"table",11),s.cc(14,"thead",12),s.cc(15,"tr",13),s.cc(16,"th"),s.Tc(17,"#"),s.bc(),s.cc(18,"th"),s.Tc(19,"Office Name"),s.bc(),s.cc(20,"th"),s.Tc(21,"District"),s.bc(),s.cc(22,"th"),s.Tc(23,"Email"),s.bc(),s.cc(24,"th"),s.Tc(25,"Phone No"),s.bc(),s.cc(26,"th"),s.Tc(27,"Employee List"),s.bc(),s.bc(),s.bc(),s.cc(28,"tbody",13),s.Rc(29,x,14,8,"tr",14),s.bc(),s.bc(),s.cc(30,"div",15),s.cc(31,"pagination-controls",16),s.mc("pageChange",function(t){return t}),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc()),2&t&&(s.Jb(11),s.uc("ngIf",e.showFilters),s.Jb(18),s.uc("ngForOf",e.myResearcherUsers))},directives:[c.n,c.m,h.b,n.t,n.l,n.m,n.q,n.k,n.e,n.n,n.s,n.b,r.f],styles:['.search-hero[_ngcontent-%COMP%]{max-width:100%;padding-bottom:50px;margin:auto}.form-control[_ngcontent-%COMP%]::-moz-placeholder{font-family:FontAwesome}.form-control[_ngcontent-%COMP%]::placeholder{font-family:FontAwesome}.round-image[_ngcontent-%COMP%]{border-radius:50%;width:75px;height:75px}.alignment[_ngcontent-%COMP%]{text-align:center}.color-blue[_ngcontent-%COMP%]{color:#7d98e8}.img-padding[_ngcontent-%COMP%]{padding:10px 10px 0 30px}.title-padding[_ngcontent-%COMP%]{padding:10px 10px 0}.padding[_ngcontent-%COMP%]{padding-bottom:10px}.icon-padding[_ngcontent-%COMP%]{padding-top:10px}#blue_chips_trade_bar[_ngcontent-%COMP%]{margin-top:2%}#blue_chip[_ngcontent-%COMP%]{font-weight:bolder;font-size:16px;margin-left:2%}.routerLink[_ngcontent-%COMP%]{color:wheat}#trade_bar_div[_ngcontent-%COMP%]{margin-left:84%}#tradebar_label[_ngcontent-%COMP%]{font-weight:700;font-size:13px;margin-left:1%}#startup_div[_ngcontent-%COMP%]{margin-top:-6%}#stratup_label[_ngcontent-%COMP%]{font-weight:700;font-size:13px;margin-left:2.5%}#card1_fsaver[_ngcontent-%COMP%], #card1_kit[_ngcontent-%COMP%], #card1_power[_ngcontent-%COMP%], #card1_selectme[_ngcontent-%COMP%]{font-weight:700;color:#000}.card-custom[_ngcontent-%COMP%]{overflow:hidden;min-height:450px;box-shadow:0 0 15px rgba(10,10,10,.3)}.card-custom-img[_ngcontent-%COMP%]{height:200px;min-height:200px;background-repeat:no-repeat;background-size:cover;background-position:50%;border-color:inherit}.card-custom-img[_ngcontent-%COMP%]:after{position:absolute;content:"";top:161px;left:0;width:0;height:0;border-left-style:solid;border-left-width:calc(575px - 5vw);border-top:40px solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-left-color:inherit}.card-custom-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;box-shadow:0 0 15px rgba(10,10,10,.3);position:absolute;top:100px;left:1.25rem;width:100px;height:100px}.filters[_ngcontent-%COMP%]{padding:10px;width:100%;margin-top:30px}.card-footer[_ngcontent-%COMP%]{padding:.875rem 2.5rem}.badges[_ngcontent-%COMP%]{padding:5px 5px 3px;top:22px;right:60px;font-size:13px}.badges[_ngcontent-%COMP%], .usdt[_ngcontent-%COMP%]{position:relative}.usdt[_ngcontent-%COMP%]{top:-4px;left:114%}.inputfield[_ngcontent-%COMP%]{position:relative;bottom:-9px;left:101%;width:44px;border:none;border-bottom:2px solid red}.shares[_ngcontent-%COMP%]{top:11px;right:2px}.price[_ngcontent-%COMP%], .shares[_ngcontent-%COMP%]{font-size:18px;font-weight:700;position:relative;font-family:sans-serif}.price[_ngcontent-%COMP%]{bottom:5px}.Investing[_ngcontent-%COMP%]{font-size:18px;font-weight:700;position:relative;top:28px;right:2px;font-family:sans-serif}.totalusdt[_ngcontent-%COMP%]{position:relative;top:28.5px;left:114%}.IBM[_ngcontent-%COMP%]{font-family:sans-serif;color:#727cf5;font-weight:700}.max[_ngcontent-%COMP%]{position:relative;top:31px;left:121%;font-size:12px}.btn-custom[_ngcontent-%COMP%]{background-color:#2b6ad0;border-radius:12px;font-family:sans-serif}.website[_ngcontent-%COMP%]{letter-spacing:.5px;display:block;cursor:pointer;background-color:#313b3f;color:#fcdb42;padding:10px;text-decoration:none;text-align:right}#table-component[_ngcontent-%COMP%], .website[_ngcontent-%COMP%]{font:normal 14px sans-serif}#table-component[_ngcontent-%COMP%]{margin:15px auto 0;border:1px solid #000;border-radius:4px;height:400px;max-width:500px}#table-component[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{background-color:#313b3f;color:#fcdb42;padding:10px;margin:0}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin-top:15px;width:100%;border-collapse:collapse}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:10px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:33.3%;font-size:13px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{font-size:14px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:1px solid #000;text-align:left;padding-bottom:5px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .pl-15[_ngcontent-%COMP%]{padding-left:15px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px 0;border-bottom:1px solid #d3d3d3}#table-component[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{font-size:14px;text-align:center;margin:20px auto}#table-component[_ngcontent-%COMP%]     .pagination-next a, #table-component[_ngcontent-%COMP%]     .pagination-previous a{outline:none}#table-component[_ngcontent-%COMP%]     .ngx-pagination .current{border-radius:4px}#table-component[_ngcontent-%COMP%]     .ngx-pagination{padding:0!important}#table-component[_ngcontent-%COMP%]     .ngx-pagination a:hover, #table-component[_ngcontent-%COMP%]     .ngx-pagination button:hover{border-radius:4px}#table-component[_ngcontent-%COMP%]     .ngx-pagination a, #table-component[_ngcontent-%COMP%]     .ngx-pagination button{border-radius:4px;outline:none}@media screen and (max-width:520px){#table-component[_ngcontent-%COMP%]{margin:15px}}']}),t})();var v=o("LSHg"),M=o("w9WL"),O=o("vVw+"),_=o("9ixH");const P=["search"];function w(t,e){1&t&&(s.ac(0,8),s.cc(1,"div",9),s.cc(2,"div",10),s.cc(3,"div",11),s.cc(4,"div",12),s.Xb(5,"i",13),s.cc(6,"h5",14),s.Tc(7,"Success!"),s.bc(),s.cc(8,"p",15),s.Tc(9,"Account created. Please check your email for verification link."),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.Zb()),2&t&&(s.Jb(5),s.Kb("data-feather","check"))}function y(t,e){if(1&t&&(s.cc(0,"p",38),s.Tc(1),s.bc()),2&t){const t=s.oc(2);s.Jb(1),s.Uc(t.officeError())}}function F(t,e){if(1&t&&(s.cc(0,"p",38),s.Tc(1),s.bc()),2&t){const t=s.oc(2);s.Jb(1),s.Uc(t.emailError())}}function k(t,e){if(1&t&&(s.cc(0,"p",38),s.Tc(1),s.bc()),2&t){const t=s.oc(2);s.Jb(1),s.Uc(t.addressError())}}function T(t,e){if(1&t&&(s.cc(0,"p",38),s.Tc(1),s.bc()),2&t){const t=s.oc(2);s.Jb(1),s.Uc(t.phoneError())}}function N(t,e){if(1&t&&(s.cc(0,"p",38),s.Tc(1),s.bc()),2&t){const t=s.oc(2);s.Jb(1),s.Uc(t.passwordError())}}function E(t,e){if(1&t&&(s.cc(0,"option"),s.Tc(1),s.bc()),2&t){const t=e.$implicit;s.Jb(1),s.Uc(t.region)}}function J(t,e){if(1&t&&(s.cc(0,"p",38),s.Tc(1),s.bc()),2&t){const t=s.oc(2);s.Jb(1),s.Uc(t.cityError())}}function q(t,e){if(1&t){const t=s.dc();s.cc(0,"div",16),s.cc(1,"div",17),s.cc(2,"div",11),s.cc(3,"div",18),s.cc(4,"h6",19),s.Tc(5,"Office"),s.bc(),s.cc(6,"form",20),s.cc(7,"div",16),s.cc(8,"div",21),s.cc(9,"div",22),s.Xb(10,"input",23),s.Rc(11,y,2,1,"p",24),s.bc(),s.bc(),s.cc(12,"div",21),s.cc(13,"div",22),s.Xb(14,"input",25),s.Rc(15,F,2,1,"p",24),s.bc(),s.bc(),s.cc(16,"div",21),s.cc(17,"div",22),s.Xb(18,"input",26),s.Rc(19,k,2,1,"p",24),s.bc(),s.bc(),s.bc(),s.cc(20,"div",16),s.cc(21,"div",21),s.cc(22,"div",22),s.Xb(23,"input",27),s.Rc(24,T,2,1,"p",24),s.bc(),s.bc(),s.cc(25,"div",21),s.cc(26,"div",22),s.Xb(27,"input",28),s.Rc(28,N,2,1,"p",24),s.bc(),s.bc(),s.cc(29,"div",21),s.cc(30,"div",22),s.cc(31,"select",29),s.cc(32,"option",30),s.Tc(33,"Select City"),s.bc(),s.Rc(34,E,2,1,"option",31),s.bc(),s.Rc(35,J,2,1,"p",24),s.bc(),s.bc(),s.bc(),s.cc(36,"h6",19),s.Tc(37,"Select Your Location"),s.bc(),s.cc(38,"div",32),s.cc(39,"agm-map",33),s.mc("mapClick",function(e){return s.Jc(t),s.oc().onMapClicked(e)}),s.bc(),s.cc(40,"div",34),s.cc(41,"div",21),s.cc(42,"div",22),s.cc(43,"input",35),s.mc("ngModelChange",function(e){return s.Jc(t),s.oc().latitude=e}),s.bc(),s.bc(),s.bc(),s.cc(44,"div",21),s.cc(45,"div",22),s.cc(46,"input",36),s.mc("ngModelChange",function(e){return s.Jc(t),s.oc().longitude=e}),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(47,"button",37),s.mc("click",function(){return s.Jc(t),s.oc().register()}),s.Tc(48,"Sign Up"),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc()}if(2&t){const t=s.oc();s.Jb(6),s.uc("formGroup",t.regForm),s.Jb(5),s.uc("ngIf",t.regForm.controls.officeName.touched||t.regForm.controls.officeName.dirty),s.Jb(4),s.uc("ngIf",t.regForm.controls.email.touched||t.regForm.controls.email.dirty),s.Jb(4),s.uc("ngIf",t.regForm.controls.address.touched||t.regForm.controls.address.dirty),s.Jb(5),s.uc("ngIf",t.regForm.controls.pNumber.touched||t.regForm.controls.pNumber.dirty),s.Jb(4),s.uc("ngIf",t.regForm.controls.password.touched||t.regForm.controls.password.dirty),s.Jb(6),s.uc("ngForOf",t.rows),s.Jb(1),s.uc("ngIf",t.regForm.controls.city.touched||t.regForm.controls.city.dirty),s.Jb(4),s.uc("latitude",t.latitude)("longitude",t.longitude)("zoom",t.zoom)("restriction",t.countryRestriction),s.Jb(4),s.uc("ngModel",t.latitude),s.Jb(3),s.uc("ngModel",t.longitude),s.Jb(1),s.uc("disabled",t.regForm.invalid||t.loading)}}let S=(()=>{class t{constructor(t,e,o,c,r){this.router=t,this.route=e,this.formBuilder=o,this.authenticationService=c,this.userService=r,this.role="",this.loading=!1,this.loadingIndicator=!0,this.checkVerificationEmailStep=!1,this.reorderable=!0,this.rows=[],this.title="AGM project",this.lati=33.66063413823131,this.longi=72.93377862805238,this.zoom=5,this.lat=46.7985624,this.lng=8.2319736,this.countryRestriction={latLngBounds:{east:76.81351,north:36.78901,south:35.08322,west:72.57277},strictBounds:!0},this.markers=[{lat:51.673858,lng:7.815982,label:"A",draggable:!0},{lat:51.373858,lng:7.215982,label:"B",draggable:!1},{lat:51.723858,lng:7.895982,label:"C",draggable:!0}],this.fetch(t=>{this.rows=t,setTimeout(()=>{this.loadingIndicator=!1},1500)})}clickedMarker(t,e){console.log("clicked the marker: "+(t||e))}markerDragEnd(t,e){console.log("dragEnd",t,e)}fetch(t){const e=new XMLHttpRequest;e.open("GET","assets/data/100k.json"),e.onload=()=>{t(JSON.parse(e.response))},e.send()}ngOnInit(){this.createForm(),this.validationForm1=this.formBuilder.group({firstName:["",n.r.required],lastName:["",n.r.required],userName:["",n.r.required]}),this.validationForm2=this.formBuilder.group({email:["",[n.r.required,n.r.email]],mobileNumber:["",n.r.required],password:["",n.r.required]}),this.isForm1Submitted=!1,this.isForm2Submitted=!1}onMapClicked(t){console.table(t.coords),this.latitude=t.coords.lat,this.longitude=t.coords.lng}register(){if(this.regForm.invalid)return void this.regForm.markAllAsTouched();this.loading=!0;const t=this.regForm.value;this.authenticationService.register(this.regForm.value).then(e=>{t.rememberMe&&O.a.setItem("ci_email_remember",t.email),this.checkVerificationEmailStep=!0,this.loading=!1,this.regForm.reset()}).catch(t=>{this.loading=!1})}createForm(){this.regForm=this.formBuilder.group({email:["",[n.r.minLength(5),n.r.maxLength(100),n.r.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),n.r.required]],password:["",[n.r.minLength(8),n.r.maxLength(100),n.r.required,n.r.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/)]],officeName:["",[n.r.minLength(2),n.r.maxLength(50),n.r.required]],city:["",[n.r.minLength(2),n.r.maxLength(15),n.r.required]],address:["",[n.r.minLength(2),n.r.maxLength(50),n.r.required]],pNumber:["",[n.r.minLength(2),n.r.maxLength(15),n.r.required]],lng:["",[n.r.minLength(2),n.r.maxLength(100),n.r.required]],lat:["",[n.r.minLength(2),n.r.maxLength(100),n.r.required]],role:["office"],rememberMe:[!1]})}finishFunction(){alert("Successfully Completed")}emailError(){return this.regForm.controls.email.hasError("required")?"Valid email is required":this.regForm.controls.email.hasError("maxlength")?"Email cannot exceed 100 characters":this.regForm.controls.email.hasError("minlength")?"Email is required of minimum length of 5 characters":this.regForm.controls.email.hasError("pattern")?"Valid email is required":""}addressError(){return this.regForm.controls.address.hasError("required")?"address is required":this.regForm.controls.address.hasError("maxlength")?"address cannot exceed 100 characters":this.regForm.controls.address.hasError("minlength")?"address is required of minimum length of 5 characters":""}phoneError(){return this.regForm.controls.pNumber.hasError("required")?"Phone number is required":this.regForm.controls.pNumber.hasError("maxlength")?"phone number cannot exceed 50 characters":this.regForm.controls.pNumber.hasError("minlength")?"phone number is required of minimum length of 2 characters":""}passwordError(){return this.regForm.controls.password.hasError("required")?"Password is required":this.regForm.controls.password.hasError("minlength")?"Password is required of minimum length of 8 characters":this.regForm.controls.password.hasError("maxlength")?"First Name cannot exceed 100 characters":this.regForm.controls.password.hasError("pattern")?"Password must contain at least an upper case, a lower case and a special character.":""}cityError(){return this.regForm.controls.city.hasError("required")?"city is required":""}officeError(){return this.regForm.controls.officeName.hasError("required")?"Office Name is required":this.regForm.controls.officeName.hasError("maxlength")?"Office Name cannot exceed 50 characters":this.regForm.controls.officeName.hasError("minlength")?"Office Name is required of minimum length of 2 characters":""}}return t.\u0275fac=function(e){return new(e||t)(s.Wb(r.e),s.Wb(r.a),s.Wb(n.c),s.Wb(_.a),s.Wb(p.a))},t.\u0275cmp=s.Qb({type:t,selectors:[["app-add-office"]],viewQuery:function(t,e){if(1&t&&s.Xc(P,!0),2&t){let t;s.Fc(t=s.nc())&&(e.searchElementRef=t.first)}},decls:14,vars:2,consts:[[1,"color-blue"],[1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","."],["aria-current","page",1,"breadcrumb-item","active"],["style","background-color: green;",4,"ngIf"],["class","row",4,"ngIf"],[2,"background-color","green"],[1,"row",2,"background-color","green"],[1,"col-md-12","stretch-card",2,"background-color","green"],[1,"card"],[1,"card-body",2,"background-color","rgb(215, 247, 216)"],["appFeatherIcon","",1,"xl-icon"],[1,"text-muted","mt-2"],[1,"text-muted","mt-1"],[1,"row"],[1,"col-md-12","stretch-card"],[1,"card-body"],[1,"card-title","color-blue"],[1,"forms-sample",3,"formGroup"],[1,"col-sm-4"],[1,"form-group"],["type","text","id","officeName","placeholder","Office Name","formControlName","officeName",1,"form-control","ulineform"],["class","text-danger mt-1",4,"ngIf"],["type","text","id","email","placeholder","Email","formControlName","email",1,"form-control","ulineform"],["type","text","id","address","placeholder","Address","formControlName","address",1,"form-control","ulineform"],["type","text","id","pNumber","placeholder","Phone Number","formControlName","pNumber",1,"form-control","ulineform"],["type","text","id","password","placeholder","password","formControlName","password",1,"form-control","ulineform"],["formControlName","city",1,"form-control","ulineform"],["value",""],[4,"ngFor","ngForOf"],[1,"container"],[3,"latitude","longitude","zoom","restriction","mapClick"],[1,"row","mt-3"],["type","text","placeholder","latitude","formControlName","lat",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","longitude","formControlName","lng",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-primary","mr-2","mb-2","mt-4","mb-md-0",3,"disabled","click"],[1,"text-danger","mt-1"]],template:function(t,e){1&t&&(s.cc(0,"h3",0),s.Tc(1,"Office"),s.bc(),s.cc(2,"nav",1),s.cc(3,"ol",2),s.cc(4,"li",3),s.cc(5,"a",4),s.Tc(6,"Dashboard"),s.bc(),s.bc(),s.cc(7,"li",3),s.cc(8,"a",4),s.Tc(9,"Office"),s.bc(),s.bc(),s.cc(10,"li",5),s.Tc(11,"Add Office"),s.bc(),s.bc(),s.bc(),s.Rc(12,w,10,1,"ng-container",6),s.Rc(13,q,49,15,"div",7)),2&t&&(s.Jb(12),s.uc("ngIf",e.checkVerificationEmailStep),s.Jb(1),s.uc("ngIf",!e.checkVerificationEmailStep))},directives:[r.h,c.n,n.t,n.l,n.g,n.b,n.k,n.f,n.q,n.n,n.s,c.m,v.c],styles:[".ulineform[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;border:none;border-bottom:1px solid #c2bba7}.color-blue[_ngcontent-%COMP%]{color:#7d98e8}agm-map[_ngcontent-%COMP%]{height:300px}"]}),t})();var L=o("mHm1"),R=o("KeVr");const z=[{path:"",component:l,children:[{path:"",redirectTo:"apexcharts",pathMatch:"full"},{path:"office-list",component:C},{path:"add-office",component:S}]}];let I=(()=>{class t{}return t.\u0275mod=s.Ub({type:t}),t.\u0275inj=s.Tb({factory:function(e){return new(e||t)},imports:[[c.c,n.h,n.p,r.i.forChild(z),i.a,a.b,M.a,L.a,n.h,n.p,M.a,h.a,R.a,v.a.forRoot({apiKey:"AIzaSyAP8n5GbRjUqB9dQfxDfZLJuFam4PjHOTs"})]]}),t})()}}]);