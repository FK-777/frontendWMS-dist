(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+6Cr":function(e,t,c){"use strict";c.r(t),c.d(t,"LeaveHistroyModule",function(){return S});var n=c("ofXK"),o=c("tyNb"),i=c("lDzL"),a=c("pxUr"),r=c("3Pt+"),s=c("fXoL"),l=c("hccJ"),b=c("f4AX"),d=c("oOf3");let p=(()=>{class e{transform(e,t,c){return t.forEach((t,n)=>{t&&(e=e.filter(e=>-1!==e[c[n]].toString().toLowerCase().indexOf(t.toString().toLowerCase())))}),e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=s.Vb({name:"one",type:e,pure:!0}),e})();function f(e,t){if(1&e){const e=s.dc();s.cc(0,"div",24),s.cc(1,"form",25),s.cc(2,"div",26),s.cc(3,"select",27),s.cc(4,"option",28),s.Uc(5,"Select Status"),s.bc(),s.cc(6,"option",29),s.Uc(7,"Pending"),s.bc(),s.cc(8,"option",30),s.Uc(9,"Approved"),s.bc(),s.cc(10,"option",31),s.Uc(11,"Declined"),s.bc(),s.bc(),s.bc(),s.cc(12,"div",26),s.cc(13,"select",32),s.cc(14,"option",28),s.Uc(15,"Select Type"),s.bc(),s.cc(16,"option",33),s.Uc(17,"Medical"),s.bc(),s.cc(18,"option",34),s.Uc(19,"Casual"),s.bc(),s.cc(20,"option",35),s.Uc(21,"Privilege"),s.bc(),s.cc(22,"option",36),s.Uc(23,"Compensatory Off"),s.bc(),s.bc(),s.bc(),s.cc(24,"div",26),s.cc(25,"input",37),s.mc("ngModelChange",function(t){return s.Kc(e),s.oc().changed=t}),s.bc(),s.bc(),s.cc(26,"div",26),s.cc(27,"input",37),s.mc("ngModelChange",function(t){return s.Kc(e),s.oc().change=t}),s.bc(),s.bc(),s.cc(28,"div",26),s.cc(29,"button",38),s.Xb(30,"i",39),s.bc(),s.cc(31,"button",40),s.Xb(32,"i",41),s.bc(),s.bc(),s.bc(),s.bc()}if(2&e){const e=s.oc();s.Jb(3),s.vc("formControl",e.myStatus),s.Jb(10),s.vc("formControl",e.leaveType),s.Jb(12),s.vc("ngModel",e.changed)("formControl",e.myDate),s.Jb(2),s.vc("ngModel",e.change)("formControl",e.myEndDate)}}function g(e,t){if(1&e&&(s.cc(0,"div"),s.Uc(1),s.bc()),2&e){const e=s.oc().$implicit;s.Jb(1),s.Xc("",e.fName," ",e.lName,"")}}function u(e,t){if(1&e&&(s.cc(0,"div"),s.Sc(1,g,2,2,"div",44),s.bc()),2&e){const e=t.$implicit,c=s.oc().$implicit;s.Jb(1),s.vc("ngIf",c.EmployeeId==e._id)}}function h(e,t){if(1&e&&(s.cc(0,"div"),s.Uc(1),s.bc()),2&e){const e=s.oc().$implicit;s.Jb(1),s.Vc(e.designation)}}function v(e,t){if(1&e&&(s.cc(0,"div"),s.Sc(1,h,2,1,"div",44),s.bc()),2&e){const e=t.$implicit,c=s.oc().$implicit;s.Jb(1),s.vc("ngIf",c.EmployeeId==e._id)}}function m(e,t){if(1&e&&(s.cc(0,"div"),s.Uc(1),s.bc()),2&e){const e=s.oc().$implicit;s.Jb(1),s.Wc("",e.officeName," ")}}function C(e,t){if(1&e&&(s.cc(0,"div"),s.Sc(1,m,2,1,"div",44),s.bc()),2&e){const e=t.$implicit,c=s.oc().$implicit;s.Jb(1),s.vc("ngIf",c.OfficeId==e._id)}}function O(e,t){if(1&e&&(s.cc(0,"td"),s.cc(1,"span",45),s.Uc(2),s.bc(),s.bc()),2&e){const e=s.oc().$implicit;s.Jb(2),s.Vc(e.status)}}function y(e,t){if(1&e&&(s.cc(0,"td"),s.cc(1,"span",46),s.Uc(2),s.bc(),s.bc()),2&e){const e=s.oc().$implicit;s.Jb(2),s.Vc(e.status)}}function P(e,t){if(1&e&&(s.cc(0,"td"),s.cc(1,"span",47),s.Uc(2),s.bc(),s.bc()),2&e){const e=s.oc().$implicit;s.Jb(2),s.Vc(e.status)}}function M(e,t){if(1&e&&(s.cc(0,"tr"),s.cc(1,"td"),s.Uc(2),s.bc(),s.cc(3,"td"),s.Sc(4,u,2,1,"div",21),s.bc(),s.cc(5,"td"),s.Sc(6,v,2,1,"div",21),s.bc(),s.cc(7,"td"),s.Sc(8,C,2,1,"div",21),s.bc(),s.cc(9,"td"),s.Uc(10),s.bc(),s.cc(11,"td",42),s.Uc(12),s.bc(),s.cc(13,"td",43),s.Uc(14),s.bc(),s.cc(15,"td"),s.Uc(16),s.bc(),s.Sc(17,O,3,1,"td",44),s.Sc(18,y,3,1,"td",44),s.Sc(19,P,3,1,"td",44),s.bc()),2&e){const e=t.$implicit,c=t.index,n=s.oc();s.Jb(2),s.Vc(c+1),s.Jb(2),s.vc("ngForOf",n.employees),s.Jb(2),s.vc("ngForOf",n.employees),s.Jb(2),s.vc("ngForOf",n.reqOffices),s.Jb(2),s.Vc(e.leaveType),s.Jb(2),s.Vc(e.startDate),s.Jb(2),s.Vc(e.endDate),s.Jb(2),s.Vc(e.reason),s.Jb(1),s.vc("ngIf","Pending"==e.status),s.Jb(1),s.vc("ngIf","Approved"==e.status),s.Jb(1),s.vc("ngIf","Declined"==e.status)}}const x=function(e,t,c,n){return[e,t,c,n]},U=function(){return["status","leaveType","startDate","endDate"]};let _=(()=>{class e{constructor(e,t){this.leaveService=e,this.userService=t,this.leaves=[],this.users=[],this.offices=[],this.reqOffices=[],this.appointmentTime=new Date,this.show=!1,this.officeLeaves=[],this.countTheRecivedLeaves=0,this.officeNewLeaves=[],this.employeeId="62b08350191ff875b3a114ef",this.officeRole="62b08350191ff875b3a114f0",this.employees=[],this.showFilters=!1,this.leaveType=new r.d(""),this.myStatus=new r.d(""),this.myDate=new r.d(""),this.myEndDate=new r.d("")}ngOnInit(){this.fetchUsers(),this.fetchOffices(),this.fetchLeaves()}fetchOffices(){this.userService.getUsers({}).subscribe(e=>{this.offices=e;for(let t=0,c=0;t<this.offices.length;t++)this.offices[t].RoleId==this.officeRole&&(this.reqOffices[c]=this.offices[t],this.officeCount=this.reqOffices.length,c++)})}fetchLeaves(){this.leaveService.getLeaves({}).subscribe(e=>{this.leaves=e;for(let t=0,c=0;t<this.leaves.length;t++)this.officeLeaves[c]=this.leaves[t],this.countTheRecivedLeaves=this.officeLeaves.length,c++,this.config={itemsPerPage:6,currentPage:1,totalItems:this.countTheRecivedLeaves};this.officeNewLeaves=this.officeLeaves.reverse()})}refresh(){window.location.reload()}pageChanged(e){this.config.currentPage=e}updateApproveStatus(e){this.leaveService.updateLeaves(e,{status:"Approved"}).subscribe(e=>{this.refresh(),console.log("Leaves updated successfully")},e=>{})}updateDeclineStatus(e){this.leaveService.updateLeaves(e,{status:"Declined"}).subscribe(e=>{this.refresh(),console.log("Leaves updated successfully")},e=>{})}fetchUsers(){this.userService.getUsers({}).subscribe(e=>{this.users=e;for(let t=0,c=0;t<this.users.length;t++)this.users[t].RoleId==this.employeeId&&(this.employees[c]=this.users[t],c++);console.log(this.employees)})}}return e.\u0275fac=function(t){return new(t||e)(s.Wb(l.a),s.Wb(b.a))},e.\u0275cmp=s.Qb({type:e,selectors:[["app-leave-histroy"]],decls:54,vars:15,consts:[[1,"row"],[1,"col-md-12"],[1,"card-title","color-blue"],[1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","."],["aria-current","page",1,"breadcrumb-item","active"],[1,"card-title",2,"margin-bottom","-1%","font-weight","bold"],["type","button",1,"btn","btn-light","btn-icon",2,"float","right",3,"click"],[1,"feather","icon-filter"],[1,"col-md-12","grid-margin","stretch-card"],[1,"card"],[1,"card-body"],[1,"card-title",2,"color","#727cf5"],[1,"container-fluid"],["class","filters card","style","margin-bottom: 9px; margin-top: 30px;",4,"ngIf"],[1,"table-responsive","pt-3"],[1,"table","table-bordered",2,"background-color","azure"],[2,"background-color","rgb(194, 216, 250)"],[1,"text-center"],[4,"ngFor","ngForOf"],[1,"pagination","mt-4"],[3,"pageChange"],[1,"filters","card",2,"margin-bottom","9px","margin-top","30px"],[1,"form-inline",2,"padding","9px","background-color","white"],[1,"form-group","ml-2"],["id","mySta",1,"form-control",3,"formControl"],["value",""],["value","Pending"],["value","Approved"],["value","Declined"],["id","leaveT",1,"form-control",3,"formControl"],["value","Medical"],["value","Casual"],["value","Privilege"],["value","Compensatory Off"],["type","date",1,"form-control",3,"ngModel","formControl","ngModelChange"],["type","button",1,"btn","btn-primary"],[1,"feather","icon-search"],["type","button",1,"btn","btn-light","ml-1"],[1,"feather","icon-refresh-ccw"],["value","lev.startDate"],["value","lev.endDate"],[4,"ngIf"],[1,"badge","badge-info-muted"],[1,"badge","badge-success"],[1,"badge","badge-danger"]],template:function(e,t){1&e&&(s.cc(0,"div",0),s.cc(1,"div",1),s.cc(2,"h3",2),s.Uc(3,"Previous Leaves"),s.bc(),s.cc(4,"nav",3),s.cc(5,"ol",4),s.cc(6,"li",5),s.cc(7,"a",6),s.Uc(8,"Dashboard"),s.bc(),s.bc(),s.cc(9,"li",5),s.cc(10,"a",6),s.Uc(11,"History"),s.bc(),s.bc(),s.cc(12,"li",7),s.Uc(13,"Leave History"),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(14,"h4",8),s.cc(15,"button",9),s.mc("click",function(){return t.showFilters=!t.showFilters}),s.Xb(16,"i",10),s.Uc(17,"\xa0 "),s.bc(),s.bc(),s.cc(18,"div",0),s.cc(19,"div",11),s.cc(20,"div",12),s.cc(21,"div",13),s.cc(22,"h6",14),s.Uc(23,"Leave List"),s.bc(),s.cc(24,"div",15),s.Sc(25,f,33,6,"div",16),s.bc(),s.cc(26,"div",17),s.cc(27,"table",18),s.cc(28,"thead",19),s.cc(29,"tr",20),s.cc(30,"th"),s.Uc(31,"#"),s.bc(),s.cc(32,"th"),s.Uc(33,"Employee Name"),s.bc(),s.cc(34,"th"),s.Uc(35,"Designation"),s.bc(),s.cc(36,"th"),s.Uc(37,"Office"),s.bc(),s.cc(38,"th"),s.Uc(39,"Leave Type"),s.bc(),s.cc(40,"th"),s.Uc(41,"start Date"),s.bc(),s.cc(42,"th"),s.Uc(43,"End Date"),s.bc(),s.cc(44,"th"),s.Uc(45,"Reason"),s.bc(),s.cc(46,"th"),s.Uc(47,"Status"),s.bc(),s.bc(),s.bc(),s.cc(48,"tbody",20),s.Sc(49,M,20,11,"tr",21),s.pc(50,"one"),s.pc(51,"paginate"),s.bc(),s.bc(),s.cc(52,"div",22),s.cc(53,"pagination-controls",23),s.mc("pageChange",function(e){return t.pageChanged(e)}),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc()),2&e&&(s.Jb(25),s.vc("ngIf",t.showFilters),s.Jb(24),s.vc("ngForOf",s.sc(50,2,s.rc(51,6,t.officeLeaves,t.config),s.Cc(9,x,t.myStatus.value,t.leaveType.value,t.myDate.value,t.myEndDate.value),s.yc(14,U))))},directives:[o.h,n.n,n.m,d.c,r.u,r.m,r.n,r.r,r.l,r.e,r.o,r.t,r.b],pipes:[p,d.b],styles:[".color-blue[_ngcontent-%COMP%]{color:#7d98e8}td[_ngcontent-%COMP%]{word-wrap:break-word}.website[_ngcontent-%COMP%]{letter-spacing:.5px;display:block;cursor:pointer;background-color:#313b3f;color:#fcdb42;padding:10px;text-decoration:none;text-align:right}#table-component[_ngcontent-%COMP%], .website[_ngcontent-%COMP%]{font:normal 14px sans-serif}#table-component[_ngcontent-%COMP%]{margin:15px auto 0;border:1px solid #000;border-radius:4px;height:400px;max-width:500px}#table-component[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{background-color:#313b3f;color:#fcdb42;padding:10px;margin:0}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin-top:15px;width:100%;border-collapse:collapse}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:10px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:33.3%;font-size:13px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{font-size:14px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:1px solid #000;text-align:left;padding-bottom:5px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .pl-15[_ngcontent-%COMP%]{padding-left:15px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px 0;border-bottom:1px solid #d3d3d3}#table-component[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{font-size:14px;text-align:center;margin:20px auto}#table-component[_ngcontent-%COMP%]     .pagination-next a, #table-component[_ngcontent-%COMP%]     .pagination-previous a{outline:none}#table-component[_ngcontent-%COMP%]     .ngx-pagination .current{border-radius:4px}#table-component[_ngcontent-%COMP%]     .ngx-pagination{padding:0!important}#table-component[_ngcontent-%COMP%]     .ngx-pagination a:hover, #table-component[_ngcontent-%COMP%]     .ngx-pagination button:hover{border-radius:4px}#table-component[_ngcontent-%COMP%]     .ngx-pagination a, #table-component[_ngcontent-%COMP%]     .ngx-pagination button{border-radius:4px;outline:none}@media screen and (max-width:520px){#table-component[_ngcontent-%COMP%]{margin:15px}}"]}),e})();var w=c("cZdB");const L=[{path:"",component:_}];let S=(()=>{class e{}return e.\u0275mod=s.Ub({type:e}),e.\u0275inj=s.Tb({factory:function(t){return new(t||e)},providers:[n.e],imports:[[n.c,o.i.forChild(L),r.i,r.q,i.a,d.a,w.a,a.a.forRoot({apiKey:"AIzaSyAP8n5GbRjUqB9dQfxDfZLJuFam4PjHOTs"})]]}),e})()},hccJ:function(e,t,c){"use strict";c.d(t,"a",function(){return a});var n=c("f8oD"),o=c("gQwx"),i=c("fXoL");let a=(()=>{class e{constructor(e){this.http=e,this.leaveUrl=o.a.mainApiUrl()+"/leave"}getLeaves(e){return this.http.get(this.leaveUrl+n.a.objToQuery(e))}createLeaves(e){return console.log("Create!"),console.log(e),console.log(this.leaveUrl),this.http.post(this.leaveUrl,e)}updateLeaves(e,t){return this.http.patch(this.leaveUrl+"/"+e,t)}deleteLeaves(e){return this.http.delete(this.leaveUrl+"/"+e)}}return e.\u0275fac=function(t){return new(t||e)(i.jc(n.a))},e.\u0275prov=i.Sb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);