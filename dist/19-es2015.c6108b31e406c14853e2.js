(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{XBNL:function(t,c,e){"use strict";e.d(c,"a",function(){return a});var n=e("f8oD"),o=e("gQwx"),i=e("8Y7J");let a=(()=>{class t{constructor(t){this.http=t,this.attendanceUrl=o.a.mainApiUrl()+"/attendance"}getAttendance(t){return this.http.get(this.attendanceUrl+n.a.objToQuery(t))}createAttendance(t){return console.log("Create!"),console.log(t),console.log(this.attendanceUrl),this.http.post(this.attendanceUrl,t)}updateAttendance(t,c){return this.http.patch(this.attendanceUrl+"/"+t,c)}deleteAttendance(t){return this.http.delete(this.attendanceUrl+"/"+t)}}return t.\u0275fac=function(c){return new(c||t)(i.jc(n.a))},t.\u0275prov=i.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},aotM:function(t,c,e){"use strict";e.r(c),e.d(c,"AttendenceAdminAllModule",function(){return S});var n=e("SVse"),o=e("iInd"),i=e("w9WL"),a=e("s7LF"),r=e("RMBY"),s=e("8Y7J"),d=e("XBNL"),l=e("f4AX"),b=e("xkgV");let f=(()=>{class t{transform(t,c,e){return c.forEach((c,n)=>{c&&(t=t.filter(t=>-1!==t[e[n]].toString().toLowerCase().indexOf(c.toString().toLowerCase())))}),t}}return t.\u0275fac=function(c){return new(c||t)},t.\u0275pipe=s.Vb({name:"too",type:t,pure:!0}),t})();function g(t,c){if(1&t){const t=s.dc();s.cc(0,"div",24),s.cc(1,"form",25),s.Xb(2,"div",26),s.Xb(3,"div",26),s.cc(4,"div",26),s.cc(5,"select",27),s.cc(6,"option",28),s.Uc(7,"Select Office"),s.bc(),s.cc(8,"option",29),s.Uc(9,"Gahkuch"),s.bc(),s.cc(10,"option",30),s.Uc(11,"Hunza"),s.bc(),s.cc(12,"option",31),s.Uc(13,"Chilas"),s.bc(),s.cc(14,"option",32),s.Uc(15,"GNWMC Juglote"),s.bc(),s.cc(16,"option",33),s.Uc(17,"Astore"),s.bc(),s.cc(18,"option",34),s.Uc(19,"GBWMC Nagar"),s.bc(),s.cc(20,"option",35),s.Uc(21,"Skardu"),s.bc(),s.cc(22,"option",36),s.Uc(23,"GBWMC Sost"),s.bc(),s.cc(24,"option",37),s.Uc(25,"GBWMC DANYORE"),s.bc(),s.cc(26,"option",38),s.Uc(27,"Gilgit"),s.bc(),s.cc(28,"option",39),s.Uc(29,"Head Office"),s.bc(),s.bc(),s.bc(),s.cc(30,"div",26),s.cc(31,"select",40),s.cc(32,"option",28),s.Uc(33,"Select Status"),s.bc(),s.cc(34,"option",41),s.Uc(35,"Present"),s.bc(),s.cc(36,"option",42),s.Uc(37,"Absent"),s.bc(),s.bc(),s.bc(),s.cc(38,"div",26),s.cc(39,"input",43),s.mc("change",function(c){return s.Kc(t),s.oc().SendDataonChange(c)})("ngModelChange",function(c){return s.Kc(t),s.oc().changed=c}),s.bc(),s.bc(),s.cc(40,"div",26),s.cc(41,"button",44),s.mc("click",function(){return s.Kc(t),s.oc().onClick()}),s.Xb(42,"i",45),s.bc(),s.cc(43,"button",46),s.Xb(44,"i",47),s.bc(),s.bc(),s.bc(),s.bc()}if(2&t){const t=s.oc();s.Jb(5),s.vc("formControl",t.officeName),s.Jb(26),s.vc("formControl",t.myStatus),s.Jb(8),s.vc("ngModel",t.changed)("formControl",t.myDate)}}function p(t,c){if(1&t&&(s.cc(0,"div"),s.Uc(1),s.bc()),2&t){const t=s.oc().$implicit;s.Jb(1),s.Xc("",t.fName," ",t.lName," ")}}function h(t,c){if(1&t&&(s.cc(0,"div"),s.Sc(1,p,2,2,"div",49),s.bc()),2&t){const t=c.$implicit,e=s.oc().$implicit;s.Jb(1),s.vc("ngIf",e.EmployeeId==t._id)}}function u(t,c){if(1&t&&(s.cc(0,"div"),s.Uc(1),s.bc()),2&t){const t=s.oc().$implicit;s.Jb(1),s.Wc("",t.designation," ")}}function m(t,c){if(1&t&&(s.cc(0,"div"),s.Sc(1,u,2,1,"div",49),s.bc()),2&t){const t=c.$implicit,e=s.oc().$implicit;s.Jb(1),s.vc("ngIf",e.EmployeeId==t._id)}}function v(t,c){if(1&t&&(s.cc(0,"div"),s.Uc(1),s.bc()),2&t){const t=s.oc().$implicit;s.Jb(1),s.Wc("",t.officeName," ")}}function C(t,c){if(1&t&&(s.cc(0,"div"),s.Sc(1,v,2,1,"div",49),s.bc()),2&t){const t=c.$implicit,e=s.oc().$implicit;s.Jb(1),s.vc("ngIf",e.OfficeId==t._id)}}function M(t,c){if(1&t&&(s.cc(0,"td"),s.cc(1,"span",50),s.Uc(2),s.bc(),s.bc()),2&t){const t=s.oc().$implicit;s.Jb(2),s.Vc(t.isVerified)}}function O(t,c){if(1&t&&(s.cc(0,"td"),s.cc(1,"span",51),s.Uc(2),s.bc(),s.bc()),2&t){const t=s.oc().$implicit;s.Jb(2),s.Vc(t.isVerified)}}function U(t,c){if(1&t&&(s.cc(0,"tr"),s.cc(1,"td"),s.Uc(2),s.bc(),s.cc(3,"td"),s.Sc(4,h,2,1,"div",21),s.bc(),s.cc(5,"td"),s.Sc(6,m,2,1,"div",21),s.bc(),s.cc(7,"td"),s.Sc(8,C,2,1,"div",21),s.bc(),s.cc(9,"td",48),s.Uc(10),s.bc(),s.cc(11,"td"),s.Uc(12),s.bc(),s.cc(13,"td"),s.Uc(14),s.bc(),s.cc(15,"td"),s.Uc(16),s.bc(),s.Sc(17,M,3,1,"td",49),s.Sc(18,O,3,1,"td",49),s.bc()),2&t){const t=c.$implicit,e=c.index,n=s.oc();s.Jb(2),s.Vc(e+1),s.Jb(2),s.vc("ngForOf",n.employees),s.Jb(2),s.vc("ngForOf",n.employees),s.Jb(2),s.vc("ngForOf",n.reqOffices),s.Jb(2),s.Vc(t.date),s.Jb(2),s.Vc(t.inTime),s.Jb(2),s.Vc(t.outTime),s.Jb(2),s.Vc(t.status),s.Jb(1),s.vc("ngIf",1==t.isVerified),s.Jb(1),s.vc("ngIf",0==t.isVerified)}}const x=function(t,c,e){return[t,c,e]},P=function(){return["office","status","date"]};let _=(()=>{class t{constructor(t,c,e){this.attendanceService=t,this.datepipe=c,this.userService=e,this.dateToday=Date.now(),this.attendance=[],this.pipe=new n.e("en-US"),this.offices=[],this.reqOffices=[],this.officeLeaves=[],this.countTheRecivedLeaves=0,this.officeNewLeaves=[],this.myVerification=new a.d(""),this.myStatus=new a.d(""),this.officeName=new a.d(""),this.myDate=new a.d(""),this.showFilters=!1,this.employeeId="62b08350191ff875b3a114ef",this.officeRole="62b08350191ff875b3a114f0",this.employees=[],this.users=[],this.userId=r.a.getLoggedUser().id}ngOnInit(){this.fetchCurentDate(),this.fetchAttendances(),this.fetchUsers(),this.fetchOffices()}fetchOffices(){this.userService.getUsers({}).subscribe(t=>{this.offices=t;for(let c=0,e=0;c<this.offices.length;c++)this.offices[c].RoleId==this.officeRole&&(this.reqOffices[e]=this.offices[c],this.officeCount=this.reqOffices.length,e++)})}refresh(){window.location.reload()}fetchCurentDate(){this.currentDateTime=this.datepipe.transform(new Date,"dd/MM/yyyy"),console.log(this.currentDateTime)}updateApproveStatus(t){this.attendanceService.updateAttendance(t,{isVerified:!0}).subscribe(t=>{this.refresh(),console.log("Attendance updated successfully")},t=>{})}fetchAttendances(){this.attendanceService.getAttendance({}).subscribe(t=>{this.attendance=t,this.fetchCurentDate();for(let c=0,e=0;c<this.attendance.length;c++)this.attendance[c].date==this.currentDateTime&&(this.officeLeaves[e]=this.attendance[c],this.countTheRecivedLeaves=this.officeLeaves.length,e++),this.config={itemsPerPage:5,currentPage:1,totalItems:this.countTheRecivedLeaves};this.officeNewLeaves=this.officeLeaves.reverse()})}pageChanged(t){this.config.currentPage=t}fetchUsers(){this.userService.getUsers({}).subscribe(t=>{this.users=t;for(let c=0,e=0;c<this.users.length;c++)this.users[c].RoleId==this.employeeId&&(this.employees[e]=this.users[c],e++);console.log(this.employees)})}changeFormat(t){let c=this.pipe.transform(this.changed,"dd/MM/YYYY");this.newDate=c}onClick(){console.log("Im Direct Method called onClick"),this.changeFormat(this.changed),console.log("Im inDirect Method called onClick"),console.log(this.newDate)}SendDataonChange(t){console.log("Im the target Method called onSendonChange"),console.log(t.target.value),this.onClick()}}return t.\u0275fac=function(c){return new(c||t)(s.Wb(d.a),s.Wb(n.e),s.Wb(l.a))},t.\u0275cmp=s.Qb({type:t,selectors:[["app-attendence-admin-all"]],decls:54,vars:15,consts:[[1,"row"],[1,"col-md-12"],[1,"card-title","color-blue"],[1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","."],["aria-current","page",1,"breadcrumb-item","active"],[1,"card-title",2,"margin-bottom","-1%","font-weight","bold"],["type","button",1,"btn","btn-light","btn-icon",2,"float","right",3,"click"],[1,"feather","icon-filter"],[1,"col-md-12","grid-margin","stretch-card"],[1,"card"],[1,"card-body"],[1,"card-title",2,"color","#727cf5"],[1,"table-responsive","pt-3"],[1,"container-fluid"],["class","filters card","style","margin-bottom: 9px; margin-top: 30px;",4,"ngIf"],[1,"table","table-bordered",2,"background-color","azure"],[2,"background-color","rgb(194, 216, 250)"],[1,"text-center"],[4,"ngFor","ngForOf"],[1,"pagination","mt-4"],[3,"pageChange"],[1,"filters","card",2,"margin-bottom","9px","margin-top","30px"],[1,"form-inline",2,"padding","9px","background-color","white"],[1,"form-group","ml-2"],["id","officeName",1,"form-control",3,"formControl"],["value",""],["value","Gahkuch"],["value","Hunza"],["value","Chilas"],["value","GNWMC Juglote"],["value","Astore"],["value","GBWMC Nagar"],["value","Skardu"],["value","GBWMC Sost"],["value","GBWMC DANYORE"],["value","Gilgit"],["value","Head Office"],["id","mySta",1,"form-control",3,"formControl"],["value","Present"],["value","Absent"],["type","date","id","myDate",1,"form-control",3,"ngModel","formControl","change","ngModelChange"],["type","button",1,"btn","btn-primary",3,"click"],[1,"feather","icon-search"],["type","button",1,"btn","btn-light","ml-1"],[1,"feather","icon-refresh-ccw"],["value","att.date"],[4,"ngIf"],[1,"badge","badge-success"],[1,"badge","badge-danger"]],template:function(t,c){1&t&&(s.cc(0,"div",0),s.cc(1,"div",1),s.cc(2,"h3",2),s.Uc(3,"All Attendance"),s.bc(),s.cc(4,"nav",3),s.cc(5,"ol",4),s.cc(6,"li",5),s.cc(7,"a",6),s.Uc(8,"Dashboard"),s.bc(),s.bc(),s.cc(9,"li",5),s.cc(10,"a",6),s.Uc(11,"History"),s.bc(),s.bc(),s.cc(12,"li",7),s.Uc(13,"All Attendance"),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(14,"h4",8),s.cc(15,"button",9),s.mc("click",function(){return c.showFilters=!c.showFilters}),s.Xb(16,"i",10),s.Uc(17,"\xa0 "),s.bc(),s.bc(),s.cc(18,"div",0),s.cc(19,"div",11),s.cc(20,"div",12),s.cc(21,"div",13),s.cc(22,"h6",14),s.Uc(23),s.bc(),s.cc(24,"div",15),s.cc(25,"div",16),s.Sc(26,g,45,4,"div",17),s.bc(),s.cc(27,"table",18),s.cc(28,"thead",19),s.cc(29,"tr",20),s.cc(30,"th"),s.Uc(31,"#"),s.bc(),s.cc(32,"th"),s.Uc(33,"Employee Name"),s.bc(),s.cc(34,"th"),s.Uc(35,"Designation"),s.bc(),s.cc(36,"th"),s.Uc(37,"Office"),s.bc(),s.cc(38,"th"),s.Uc(39,"Date"),s.bc(),s.cc(40,"th"),s.Uc(41,"In Time"),s.bc(),s.cc(42,"th"),s.Uc(43,"Out Time"),s.bc(),s.cc(44,"th"),s.Uc(45,"Status"),s.bc(),s.cc(46,"th"),s.Uc(47,"Verification"),s.bc(),s.bc(),s.bc(),s.cc(48,"tbody",20),s.Sc(49,U,19,10,"tr",21),s.pc(50,"paginate"),s.pc(51,"too"),s.bc(),s.bc(),s.cc(52,"div",22),s.cc(53,"pagination-controls",23),s.mc("pageChange",function(t){return c.pageChanged(t)}),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc()),2&t&&(s.Jb(23),s.Vc(c.newDate),s.Jb(3),s.vc("ngIf",c.showFilters),s.Jb(23),s.vc("ngForOf",s.rc(50,3,s.sc(51,6,c.officeLeaves,s.Bc(10,x,c.officeName.value,c.myStatus.value,c.newDate),s.yc(14,P)),c.config)))},directives:[o.h,n.n,n.m,b.c,a.u,a.m,a.n,a.r,a.l,a.e,a.o,a.t,a.b],pipes:[b.b,f],styles:[".color-blue[_ngcontent-%COMP%]{color:#7d98e8}td[_ngcontent-%COMP%]{word-wrap:break-word}.website[_ngcontent-%COMP%]{letter-spacing:.5px;display:block;cursor:pointer;background-color:#313b3f;color:#fcdb42;padding:10px;text-decoration:none;text-align:right}#table-component[_ngcontent-%COMP%], .website[_ngcontent-%COMP%]{font:normal 14px sans-serif}#table-component[_ngcontent-%COMP%]{margin:15px auto 0;border:1px solid #000;border-radius:4px;height:400px;max-width:500px}#table-component[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{background-color:#313b3f;color:#fcdb42;padding:10px;margin:0}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin-top:15px;width:100%;border-collapse:collapse}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:10px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:33.3%;font-size:13px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{font-size:14px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:1px solid #000;text-align:left;padding-bottom:5px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .pl-15[_ngcontent-%COMP%]{padding-left:15px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px 0;border-bottom:1px solid #d3d3d3}#table-component[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{font-size:14px;text-align:center;margin:20px auto}#table-component[_ngcontent-%COMP%]     .pagination-next a, #table-component[_ngcontent-%COMP%]     .pagination-previous a{outline:none}#table-component[_ngcontent-%COMP%]     .ngx-pagination .current{border-radius:4px}#table-component[_ngcontent-%COMP%]     .ngx-pagination{padding:0!important}#table-component[_ngcontent-%COMP%]     .ngx-pagination a:hover, #table-component[_ngcontent-%COMP%]     .ngx-pagination button:hover{border-radius:4px}#table-component[_ngcontent-%COMP%]     .ngx-pagination a, #table-component[_ngcontent-%COMP%]     .ngx-pagination button{border-radius:4px;outline:none}@media screen and (max-width:520px){#table-component[_ngcontent-%COMP%]{margin:15px}}button[_ngcontent-%COMP%]{padding:10px;background-color:#4e7392;border:none;color:#fff;margin-top:10px}input[_ngcontent-%COMP%]{padding:5px;font-size:15px}"]}),t})();var w=e("KeVr");const y=[{path:"",component:_}];let S=(()=>{class t{}return t.\u0275mod=s.Ub({type:t}),t.\u0275inj=s.Tb({factory:function(c){return new(c||t)},providers:[n.e],imports:[[n.c,o.i.forChild(y),i.a,a.i,a.q,b.a,w.a]]}),t})()}}]);