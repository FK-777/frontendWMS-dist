!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function n(e,n,c){return n&&t(e.prototype,n),c&&t(e,c),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+6Cr":function(t,c,o){"use strict";o.r(c),o.d(c,"LeaveHistroyModule",function(){return k});var a,i=o("ofXK"),r=o("tyNb"),s=o("lDzL"),l=o("pxUr"),b=o("3Pt+"),p=o("fXoL"),u=o("hccJ"),d=o("f4AX"),f=o("oOf3"),g=((a=function(){function t(){e(this,t)}return n(t,[{key:"transform",value:function(e,t,n){return t.forEach(function(t,c){t&&(e=e.filter(function(e){return-1!==e[n[c]].toString().toLowerCase().indexOf(t.toString().toLowerCase())}))}),e}}]),t}()).\u0275fac=function(e){return new(e||a)},a.\u0275pipe=p.Vb({name:"one",type:a,pure:!0}),a);function v(e,t){if(1&e&&(p.cc(0,"div",17),p.cc(1,"form",18),p.cc(2,"div",19),p.cc(3,"select",20),p.cc(4,"option",21),p.Uc(5,"Select Status"),p.bc(),p.cc(6,"option",22),p.Uc(7,"Pending"),p.bc(),p.cc(8,"option",23),p.Uc(9,"Approved"),p.bc(),p.cc(10,"option",24),p.Uc(11,"Declined"),p.bc(),p.bc(),p.bc(),p.cc(12,"div",19),p.cc(13,"select",25),p.cc(14,"option",21),p.Uc(15,"Select Type"),p.bc(),p.cc(16,"option",26),p.Uc(17,"Medical"),p.bc(),p.cc(18,"option",27),p.Uc(19,"Casual"),p.bc(),p.cc(20,"option",28),p.Uc(21,"Privilege"),p.bc(),p.bc(),p.bc(),p.cc(22,"div",19),p.Xb(23,"input",29),p.bc(),p.cc(24,"div",19),p.Xb(25,"input",30),p.bc(),p.cc(26,"div",19),p.cc(27,"button",31),p.Xb(28,"i",32),p.bc(),p.cc(29,"button",33),p.Xb(30,"i",34),p.bc(),p.bc(),p.bc(),p.bc()),2&e){var n=p.oc();p.Jb(3),p.vc("formControl",n.myStatus),p.Jb(10),p.vc("formControl",n.leaveType),p.Jb(10),p.vc("formControl",n.myDate),p.Jb(2),p.vc("formControl",n.myEndDate)}}function h(e,t){if(1&e&&(p.cc(0,"div"),p.Uc(1),p.bc()),2&e){var n=p.oc().$implicit;p.Jb(1),p.Xc("",n.fName," ",n.lName,"")}}function m(e,t){if(1&e&&(p.cc(0,"div"),p.Sc(1,h,2,2,"div",37),p.bc()),2&e){var n=t.$implicit,c=p.oc().$implicit;p.Jb(1),p.vc("ngIf",c.EmployeeId==n._id)}}function y(e,t){if(1&e&&(p.cc(0,"td"),p.cc(1,"span",38),p.Uc(2),p.bc(),p.bc()),2&e){var n=p.oc().$implicit;p.Jb(2),p.Vc(n.status)}}function C(e,t){if(1&e&&(p.cc(0,"td"),p.cc(1,"span",39),p.Uc(2),p.bc(),p.bc()),2&e){var n=p.oc().$implicit;p.Jb(2),p.Vc(n.status)}}function P(e,t){if(1&e&&(p.cc(0,"td"),p.cc(1,"span",40),p.Uc(2),p.bc(),p.bc()),2&e){var n=p.oc().$implicit;p.Jb(2),p.Vc(n.status)}}function x(e,t){if(1&e&&(p.cc(0,"tr"),p.cc(1,"td"),p.Uc(2),p.bc(),p.cc(3,"td"),p.Sc(4,m,2,1,"div",14),p.bc(),p.cc(5,"td"),p.Uc(6),p.bc(),p.cc(7,"td",35),p.Uc(8),p.bc(),p.cc(9,"td",36),p.Uc(10),p.bc(),p.cc(11,"td"),p.Uc(12),p.bc(),p.Sc(13,y,3,1,"td",37),p.Sc(14,C,3,1,"td",37),p.Sc(15,P,3,1,"td",37),p.bc()),2&e){var n=t.$implicit,c=t.index,o=p.oc();p.Jb(2),p.Vc(c+1),p.Jb(2),p.vc("ngForOf",o.employees),p.Jb(2),p.Vc(n.leaveType),p.Jb(2),p.Vc(n.startDate),p.Jb(2),p.Vc(n.endDate),p.Jb(2),p.Vc(n.reason),p.Jb(1),p.vc("ngIf","Pending"==n.status),p.Jb(1),p.vc("ngIf","Approved"==n.status),p.Jb(1),p.vc("ngIf","Declined"==n.status)}}var O,M,_=function(e,t,n,c){return[e,t,n,c]},w=function(){return["status","leaveType","startDate","endDate"]},U=((O=function(){function t(n,c){e(this,t),this.leaveService=n,this.userService=c,this.leaves=[],this.users=[],this.appointmentTime=new Date,this.show=!1,this.officeLeaves=[],this.countTheRecivedLeaves=0,this.officeNewLeaves=[],this.employeeId="62b08350191ff875b3a114ef",this.employees=[],this.showFilters=!1,this.leaveType=new b.d(""),this.myStatus=new b.d(""),this.myDate=new b.d(""),this.myEndDate=new b.d("")}return n(t,[{key:"ngOnInit",value:function(){this.fetchUsers(),this.fetchLeaves()}},{key:"fetchLeaves",value:function(){var e=this;this.leaveService.getLeaves({}).subscribe(function(t){e.leaves=t;for(var n=0,c=0;n<e.leaves.length;n++)e.officeLeaves[c]=e.leaves[n],e.countTheRecivedLeaves=e.officeLeaves.length,c++,e.config={itemsPerPage:6,currentPage:1,totalItems:e.countTheRecivedLeaves};e.officeNewLeaves=e.officeLeaves.reverse()})}},{key:"refresh",value:function(){window.location.reload()}},{key:"pageChanged",value:function(e){this.config.currentPage=e}},{key:"updateApproveStatus",value:function(e){var t=this;this.leaveService.updateLeaves(e,{status:"Approved"}).subscribe(function(e){t.refresh(),console.log("Leaves updated successfully")},function(e){})}},{key:"updateDeclineStatus",value:function(e){var t=this;this.leaveService.updateLeaves(e,{status:"Declined"}).subscribe(function(e){t.refresh(),console.log("Leaves updated successfully")},function(e){})}},{key:"fetchUsers",value:function(){var e=this;this.userService.getUsers({}).subscribe(function(t){e.users=t;for(var n=0,c=0;n<e.users.length;n++)e.users[n].RoleId==e.employeeId&&(e.employees[c]=e.users[n],c++);console.log(e.employees)})}}]),t}()).\u0275fac=function(e){return new(e||O)(p.Wb(u.a),p.Wb(d.a))},O.\u0275cmp=p.Qb({type:O,selectors:[["app-leave-histroy"]],decls:36,vars:15,consts:[[1,"card-title",2,"margin-bottom","-1%","font-weight","bold"],["type","button",1,"btn","btn-light","btn-icon",2,"float","right",3,"click"],[1,"feather","icon-filter"],[1,"row"],[1,"col-md-12","grid-margin","stretch-card"],[1,"card"],[1,"card-body"],[1,"card-title",2,"color","#727cf5"],[1,"container-fluid"],["class","filters card","style","margin-bottom: 9px; margin-top: 30px;",4,"ngIf"],[1,"table-responsive","pt-3"],[1,"table","table-bordered",2,"background-color","azure"],[2,"background-color","rgb(194, 216, 250)"],[1,"text-center"],[4,"ngFor","ngForOf"],[1,"pagination","mt-4"],[3,"pageChange"],[1,"filters","card",2,"margin-bottom","9px","margin-top","30px"],[1,"form-inline",2,"padding","9px","background-color","white"],[1,"form-group","ml-2"],["id","mySta",1,"form-control",3,"formControl"],["value",""],["value","Pending"],["value","Approved"],["value","Declined"],["id","leaveT",1,"form-control",3,"formControl"],["value","Medical"],["value","Casual"],["value","Privilege"],["type","date","min","0","id","start-date","placeholder","start Date",1,"form-control",3,"formControl"],["type","date","min","0","id","user_max_price","placeholder","End Date",1,"form-control",3,"formControl"],["type","button",1,"btn","btn-primary"],[1,"feather","icon-search"],["type","button",1,"btn","btn-light","ml-1"],[1,"feather","icon-refresh-ccw"],["value","lev.startDate"],["value","lev.endDate"],[4,"ngIf"],[1,"badge","badge-info-muted"],[1,"badge","badge-success"],[1,"badge","badge-danger"]],template:function(e,t){1&e&&(p.cc(0,"h4",0),p.cc(1,"button",1),p.mc("click",function(){return t.showFilters=!t.showFilters}),p.Xb(2,"i",2),p.Uc(3,"\xa0 "),p.bc(),p.bc(),p.cc(4,"div",3),p.cc(5,"div",4),p.cc(6,"div",5),p.cc(7,"div",6),p.cc(8,"h6",7),p.Uc(9,"Leave List"),p.bc(),p.cc(10,"div",8),p.Sc(11,v,31,4,"div",9),p.bc(),p.cc(12,"div",10),p.cc(13,"table",11),p.cc(14,"thead",12),p.cc(15,"tr",13),p.cc(16,"th"),p.Uc(17,"#"),p.bc(),p.cc(18,"th"),p.Uc(19,"Employee Name"),p.bc(),p.cc(20,"th"),p.Uc(21,"Leave Type"),p.bc(),p.cc(22,"th"),p.Uc(23,"start Date"),p.bc(),p.cc(24,"th"),p.Uc(25,"End Date"),p.bc(),p.cc(26,"th"),p.Uc(27,"Reason"),p.bc(),p.cc(28,"th"),p.Uc(29,"Status"),p.bc(),p.bc(),p.bc(),p.cc(30,"tbody",13),p.Sc(31,x,16,9,"tr",14),p.pc(32,"one"),p.pc(33,"paginate"),p.bc(),p.bc(),p.cc(34,"div",15),p.cc(35,"pagination-controls",16),p.mc("pageChange",function(e){return t.pageChanged(e)}),p.bc(),p.bc(),p.bc(),p.bc(),p.bc(),p.bc(),p.bc()),2&e&&(p.Jb(11),p.vc("ngIf",t.showFilters),p.Jb(20),p.vc("ngForOf",p.sc(32,2,p.rc(33,6,t.officeLeaves,t.config),p.Cc(9,_,t.myStatus.value,t.leaveType.value,t.myDate.value,t.myEndDate.value),p.yc(14,w))))},directives:[i.n,i.m,f.c,b.u,b.m,b.n,b.r,b.l,b.e,b.o,b.t,b.b],pipes:[g,f.b],styles:[".color-blue[_ngcontent-%COMP%]{color:#7d98e8}td[_ngcontent-%COMP%]{word-wrap:break-word}.website[_ngcontent-%COMP%]{letter-spacing:.5px;display:block;cursor:pointer;background-color:#313b3f;color:#fcdb42;padding:10px;text-decoration:none;text-align:right}#table-component[_ngcontent-%COMP%], .website[_ngcontent-%COMP%]{font:normal 14px sans-serif}#table-component[_ngcontent-%COMP%]{margin:15px auto 0;border:1px solid #000;border-radius:4px;height:400px;max-width:500px}#table-component[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{background-color:#313b3f;color:#fcdb42;padding:10px;margin:0}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin-top:15px;width:100%;border-collapse:collapse}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:10px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:33.3%;font-size:13px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{font-size:14px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:1px solid #000;text-align:left;padding-bottom:5px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .pl-15[_ngcontent-%COMP%]{padding-left:15px}#table-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px 0;border-bottom:1px solid #d3d3d3}#table-component[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{font-size:14px;text-align:center;margin:20px auto}#table-component[_ngcontent-%COMP%]     .pagination-next a, #table-component[_ngcontent-%COMP%]     .pagination-previous a{outline:none}#table-component[_ngcontent-%COMP%]     .ngx-pagination .current{border-radius:4px}#table-component[_ngcontent-%COMP%]     .ngx-pagination{padding:0!important}#table-component[_ngcontent-%COMP%]     .ngx-pagination a:hover, #table-component[_ngcontent-%COMP%]     .ngx-pagination button:hover{border-radius:4px}#table-component[_ngcontent-%COMP%]     .ngx-pagination a, #table-component[_ngcontent-%COMP%]     .ngx-pagination button{border-radius:4px;outline:none}@media screen and (max-width:520px){#table-component[_ngcontent-%COMP%]{margin:15px}}"]}),O),L=o("cZdB"),S=[{path:"",component:U}],k=((M=n(function t(){e(this,t)})).\u0275mod=p.Ub({type:M}),M.\u0275inj=p.Tb({factory:function(e){return new(e||M)},providers:[i.e],imports:[[i.c,r.i.forChild(S),b.i,b.q,s.a,f.a,L.a,l.a.forRoot({apiKey:"AIzaSyAP8n5GbRjUqB9dQfxDfZLJuFam4PjHOTs"})]]}),M)},hccJ:function(t,c,o){"use strict";o.d(c,"a",function(){return s});var a=o("f8oD"),i=o("gQwx"),r=o("fXoL"),s=function(){var t=function(){function t(n){e(this,t),this.http=n,this.leaveUrl=i.a.mainApiUrl()+"/leave"}return n(t,[{key:"getLeaves",value:function(e){return this.http.get(this.leaveUrl+a.a.objToQuery(e))}},{key:"createLeaves",value:function(e){return console.log("Create!"),console.log(e),console.log(this.leaveUrl),this.http.post(this.leaveUrl,e)}},{key:"updateLeaves",value:function(e,t){return this.http.patch(this.leaveUrl+"/"+e,t)}},{key:"deleteLeaves",value:function(e){return this.http.delete(this.leaveUrl+"/"+e)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.jc(a.a))},t.\u0275prov=r.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();