(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{NB7w:function(t,e,n){"use strict";n.r(e),n.d(e,"LeaveLeadModule",function(){return v});var c=n("SVse"),o=n("iInd"),i=n("w9WL"),a=n("LSHg"),r=n("s7LF"),s=n("RMBY"),l=n("8Y7J"),p=n("hccJ"),d=n("f4AX"),b=n("xkgV");function g(t,e){if(1&t&&(l.cc(0,"div",11),l.cc(1,"form",12),l.cc(2,"div",13),l.cc(3,"select",14),l.cc(4,"option",15),l.Tc(5,"Select Status"),l.bc(),l.cc(6,"option",16),l.Tc(7,"Pending"),l.bc(),l.cc(8,"option",17),l.Tc(9,"Approved"),l.bc(),l.cc(10,"option",18),l.Tc(11,"Declined"),l.bc(),l.bc(),l.bc(),l.cc(12,"div",13),l.cc(13,"select",19),l.cc(14,"option",15),l.Tc(15,"Select Type"),l.bc(),l.cc(16,"option",20),l.Tc(17,"Medical"),l.bc(),l.cc(18,"option",21),l.Tc(19,"Casual"),l.bc(),l.cc(20,"option",22),l.Tc(21,"Privilege"),l.bc(),l.bc(),l.bc(),l.cc(22,"div",13),l.Xb(23,"input",23),l.bc(),l.cc(24,"div",13),l.Xb(25,"input",24),l.bc(),l.cc(26,"div",13),l.cc(27,"button",25),l.Xb(28,"i",26),l.bc(),l.cc(29,"button",27),l.Xb(30,"i",28),l.bc(),l.bc(),l.bc(),l.bc()),2&t){const t=l.oc();l.Jb(3),l.uc("formControl",t.myStatus),l.Jb(10),l.uc("formControl",t.leaveType),l.Jb(10),l.uc("formControl",t.myDate),l.Jb(2),l.uc("formControl",t.myEndDate)}}function h(t,e){1&t&&(l.cc(0,"div",29),l.cc(1,"table",30),l.cc(2,"thead",31),l.cc(3,"tr",32),l.cc(4,"th"),l.Tc(5,"#"),l.bc(),l.cc(6,"th"),l.Tc(7,"Employee Name"),l.bc(),l.cc(8,"th"),l.Tc(9,"Leave Type"),l.bc(),l.cc(10,"th"),l.Tc(11,"start Date"),l.bc(),l.cc(12,"th"),l.Tc(13,"End Date"),l.bc(),l.cc(14,"th"),l.Tc(15,"Reason"),l.bc(),l.cc(16,"th"),l.Tc(17,"Action"),l.bc(),l.bc(),l.bc(),l.bc(),l.cc(18,"div",33),l.cc(19,"pagination-controls",34),l.mc("pageChange",function(t){return t}),l.bc(),l.bc(),l.bc())}let u=(()=>{class t{constructor(t,e){this.leaveService=t,this.userService=e,this.leaves=[],this.users=[],this.appointmentTime=new Date,this.show=!1,this.officeLeaves=[],this.countTheRecivedLeaves=0,this.officeNewLeaves=[],this.employeeId="6257bb97a3cc8e08e46399fd",this.employees=[],this.showFilters=!1,this.leaveType=new r.d(""),this.myStatus=new r.d(""),this.myDate=new r.d(""),this.myEndDate=new r.d(""),this.userId=s.a.getLoggedUser().id}ngOnInit(){this.fetchUsers(),this.fetchLeaves()}fetchLeaves(){this.leaveService.getLeaves({}).subscribe(t=>{this.leaves=t;for(let e=0,n=0;e<this.leaves.length;e++)"lead"==this.leaves[e].desigination&&"Pending"==this.leaves[e].status&&(this.officeLeaves[n]=this.leaves[e],this.countTheRecivedLeaves=this.officeLeaves.length,n++);this.officeNewLeaves=this.officeLeaves.reverse()})}refresh(){window.location.reload()}updateApproveStatus(t){this.leaveService.updateLeaves(t,{status:"Approved"}).subscribe(t=>{this.refresh(),console.log("Leaves updated successfully")},t=>{})}updateDeclineStatus(t){this.leaveService.updateLeaves(t,{status:"Declined"}).subscribe(t=>{this.refresh(),console.log("Leaves updated successfully")},t=>{})}fetchUsers(){this.userService.getUsers({}).subscribe(t=>{this.users=t;for(let e=0,n=0;e<this.users.length;e++)this.users[e].RoleId==this.employeeId&&(this.employees[n]=this.users[e],n++);console.log(this.employees)})}}return t.\u0275fac=function(e){return new(e||t)(l.Wb(p.a),l.Wb(d.a))},t.\u0275cmp=l.Qb({type:t,selectors:[["app-leave-lead"]],decls:13,vars:2,consts:[[1,"card-title",2,"margin-bottom","-1%","font-weight","bold"],["type","button",1,"btn","btn-light","btn-icon",2,"float","right",3,"click"],[1,"feather","icon-filter"],[1,"row"],[1,"col-md-12","grid-margin","stretch-card"],[1,"card"],[1,"card-body"],[1,"card-title",2,"color","#727cf5"],[1,"container-fluid"],["class","filters card","style","margin-bottom: 9px; margin-top: 30px;",4,"ngIf"],["class","table-responsive pt-3",4,"ngIf"],[1,"filters","card",2,"margin-bottom","9px","margin-top","30px"],[1,"form-inline",2,"padding","9px","background-color","white"],[1,"form-group","ml-2"],["id","mySta",1,"form-control",3,"formControl"],["value",""],["value","Pending"],["value","Approved"],["value","Declined"],["id","leaveT",1,"form-control",3,"formControl"],["value","Medical"],["value","Casual"],["value","Privilege"],["type","date","min","0","id","start-date","placeholder","start Date",1,"form-control",3,"formControl"],["type","date","min","0","id","user_max_price","placeholder","End Date",1,"form-control",3,"formControl"],["type","button",1,"btn","btn-primary"],[1,"feather","icon-search"],["type","button",1,"btn","btn-light","ml-1"],[1,"feather","icon-refresh-ccw"],[1,"table-responsive","pt-3"],[1,"table","table-bordered",2,"background-color","azure"],[2,"background-color","rgb(194, 216, 250)"],[1,"text-center"],[1,"pagination","mt-4"],[3,"pageChange"]],template:function(t,e){1&t&&(l.cc(0,"h4",0),l.cc(1,"button",1),l.mc("click",function(){return e.showFilters=!e.showFilters}),l.Xb(2,"i",2),l.Tc(3,"\xa0 "),l.bc(),l.bc(),l.cc(4,"div",3),l.cc(5,"div",4),l.cc(6,"div",5),l.cc(7,"div",6),l.cc(8,"h6",7),l.Tc(9,"Leave List"),l.bc(),l.cc(10,"div",8),l.Rc(11,g,31,4,"div",9),l.bc(),l.Rc(12,h,20,0,"div",10),l.bc(),l.bc(),l.bc(),l.bc()),2&t&&(l.Jb(11),l.uc("ngIf",e.showFilters),l.Jb(1),l.uc("ngIf",0!=e.countTheRecivedLeaves))},directives:[c.n,r.u,r.l,r.m,r.r,r.k,r.e,r.o,r.t,r.b,b.b],styles:[".color-blue[_ngcontent-%COMP%]{color:#7d98e8}td[_ngcontent-%COMP%]{word-wrap:break-word}.website[_ngcontent-%COMP%]{letter-spacing:.5px;display:block;cursor:pointer;background-color:#313b3f;color:#fcdb42;padding:10px;text-decoration:none;text-align:right}#table-component[_ngcontent-%COMP%], .website[_ngcontent-%COMP%]{font:normal 14px sans-serif}#table-component[_ngcontent-%COMP%]{margin:15px auto 0;border:1px solid #000;border-radius:4px;height:400px;max-width:500px}#table-component[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{background-color:#313b3f;color:#fcdb42;padding:10px;margin:0}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin-top:15px;width:100%;border-collapse:collapse}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:10px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:33.3%;font-size:13px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{font-size:14px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:1px solid #000;text-align:left;padding-bottom:5px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .pl-15[_ngcontent-%COMP%]{padding-left:15px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px 0;border-bottom:1px solid #d3d3d3}#table-component[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{font-size:14px;text-align:center;margin:20px auto}#table-component[_ngcontent-%COMP%]     .pagination-next a, #table-component[_ngcontent-%COMP%]     .pagination-previous a{outline:none}#table-component[_ngcontent-%COMP%]     .ngx-pagination .current{border-radius:4px}#table-component[_ngcontent-%COMP%]     .ngx-pagination{padding:0!important}#table-component[_ngcontent-%COMP%]     .ngx-pagination a:hover, #table-component[_ngcontent-%COMP%]     .ngx-pagination button:hover{border-radius:4px}#table-component[_ngcontent-%COMP%]     .ngx-pagination a, #table-component[_ngcontent-%COMP%]     .ngx-pagination button{border-radius:4px;outline:none}@media screen and (max-width:520px){#table-component[_ngcontent-%COMP%]{margin:15px}}"]}),t})();var f=n("KeVr");const m=[{path:"",component:u}];let v=(()=>{class t{}return t.\u0275mod=l.Ub({type:t}),t.\u0275inj=l.Tb({factory:function(e){return new(e||t)},providers:[c.e],imports:[[c.c,o.h.forChild(m),r.h,r.q,i.a,b.a,f.a,a.a.forRoot({apiKey:"AIzaSyAP8n5GbRjUqB9dQfxDfZLJuFam4PjHOTs"})]]}),t})()},f4AX:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var c=n("f8oD"),o=n("gQwx"),i=n("8Y7J");let a=(()=>{class t{constructor(t){this.http=t,this.userUrl=o.a.mainApiUrl()+"/user"}getUsers(t){return console.log(t),this.http.get(this.userUrl+c.a.objToQuery(t))}createUsers(t){return this.http.post(this.userUrl,t)}updateUsers(t,e){return this.http.patch(this.userUrl+"/"+t,e)}updateUser(t,e){return this.http.patch(this.userUrl+"/"+t,e)}deleteUsers(t){return this.http.delete(this.userUrl+"/"+t)}}return t.\u0275fac=function(e){return new(e||t)(i.jc(c.a))},t.\u0275prov=i.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);