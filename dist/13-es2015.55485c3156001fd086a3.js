(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{XBNL:function(e,t,c){"use strict";c.d(t,"a",function(){return i});var n=c("f8oD"),s=c("gQwx"),r=c("8Y7J");let i=(()=>{class e{constructor(e){this.http=e,this.attendanceUrl=s.a.mainApiUrl()+"/attendance"}getAttendance(e){return this.http.get(this.attendanceUrl+n.a.objToQuery(e))}createAttendance(e){return console.log("Create!"),console.log(e),console.log(this.attendanceUrl),this.http.post(this.attendanceUrl,e)}updateAttendance(e,t){return this.http.patch(this.attendanceUrl+"/"+e,t)}deleteAttendance(e){return this.http.delete(this.attendanceUrl+"/"+e)}}return e.\u0275fac=function(t){return new(t||e)(r.jc(n.a))},e.\u0275prov=r.Sb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},f4AX:function(e,t,c){"use strict";c.d(t,"a",function(){return i});var n=c("f8oD"),s=c("gQwx"),r=c("8Y7J");let i=(()=>{class e{constructor(e){this.http=e,this.userUrl=s.a.mainApiUrl()+"/user"}getUsers(e){return console.log(e),this.http.get(this.userUrl+n.a.objToQuery(e))}createUsers(e){return this.http.post(this.userUrl,e)}updateUsers(e,t){return this.http.patch(this.userUrl+"/"+e,t)}updateUser(e,t){return this.http.patch(this.userUrl+"/"+e,t)}deleteUsers(e){return this.http.delete(this.userUrl+"/"+e)}}return e.\u0275fac=function(t){return new(t||e)(r.jc(n.a))},e.\u0275prov=r.Sb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},h6ra:function(e,t,c){"use strict";c.r(t),c.d(t,"AttendenceModule",function(){return v});var n=c("SVse"),s=c("iInd"),r=c("w9WL"),i=c("LSHg"),a=c("RMBY"),o=c("8Y7J"),d=c("XBNL"),h=c("f4AX");function u(e,t){1&e&&(o.cc(0,"div",2),o.cc(1,"div",3),o.cc(2,"div",3),o.cc(3,"h4",11),o.Tc(4,"No Pending Attendance Found"),o.bc(),o.bc(),o.bc(),o.bc())}function l(e,t){if(1&e&&(o.cc(0,"div"),o.Tc(1),o.bc()),2&e){const e=o.oc().$implicit;o.Jb(1),o.Wc("",e.fName,"",e.lName," ")}}function f(e,t){if(1&e&&(o.cc(0,"div"),o.Rc(1,l,2,2,"div",12),o.bc()),2&e){const e=t.$implicit,c=o.oc().$implicit;o.Jb(1),o.uc("ngIf",c.EmployeeId==e._id)}}function b(e,t){if(1&e&&(o.cc(0,"tr"),o.cc(1,"td"),o.Rc(2,f,2,1,"div",10),o.bc(),o.cc(3,"td"),o.Tc(4),o.bc(),o.cc(5,"td"),o.Tc(6),o.bc(),o.cc(7,"td"),o.Tc(8),o.bc(),o.cc(9,"td"),o.Tc(10),o.bc(),o.cc(11,"td"),o.Tc(12),o.bc(),o.bc()),2&e){const e=t.$implicit,c=o.oc();o.Jb(2),o.uc("ngForOf",c.employees),o.Jb(2),o.Uc(e.status),o.Jb(2),o.Uc(e.date),o.Jb(2),o.Uc(e.inTime),o.Jb(2),o.Uc(e.outTime),o.Jb(2),o.Uc(e.location)}}const p=[{path:"",component:(()=>{class e{constructor(e,t,c){this.attendanceService=e,this.datepipe=t,this.userService=c,this.dateToday=Date.now(),this.attendance=[],this.officeLeaves=[],this.countTheRecivedLeaves=0,this.officeNewLeaves=[],this.employeeId="62b08350191ff875b3a114ef",this.employees=[],this.users=[],this.userId=a.a.getLoggedUser().id}ngOnInit(){this.fetchCurentDate(),this.fetchAttendances(),this.fetchUsers()}refresh(){window.location.reload()}fetchCurentDate(){this.currentDateTime=this.datepipe.transform(new Date,"dd/MM/yyyy"),console.log(this.currentDateTime)}updateApproveStatus(e){this.attendanceService.updateAttendance(e,{isVerified:!0}).subscribe(e=>{this.refresh(),console.log("Attendance updated successfully")},e=>{})}fetchAttendances(){this.attendanceService.getAttendance({}).subscribe(e=>{this.attendance=e,this.fetchCurentDate();for(let t=0,c=0;t<this.attendance.length;t++)this.attendance[t].OfficeId==this.userId&&this.attendance[t].date==this.currentDateTime&&(this.officeLeaves[c]=this.attendance[t],this.countTheRecivedLeaves=this.officeLeaves.length,c++);this.officeNewLeaves=this.officeLeaves.reverse()})}fetchUsers(){this.userService.getUsers({}).subscribe(e=>{this.users=e;for(let t=0,c=0;t<this.users.length;t++)this.users[t].RoleId==this.employeeId&&(this.employees[c]=this.users[t],c++);console.log(this.employees)})}}return e.\u0275fac=function(t){return new(t||e)(o.Wb(d.a),o.Wb(n.e),o.Wb(h.a))},e.\u0275cmp=o.Qb({type:e,selectors:[["app-attendence"]],decls:25,vars:2,consts:[[1,"row"],[1,"col-md-12","grid-margin","stretch-card"],[1,"card"],[1,"card-body"],[1,"card-title",2,"color","#727cf5"],["class","card",4,"ngIf"],[1,"table-responsive","pt-3"],[1,"table","table-bordered"],[2,"background-color","rgb(194, 216, 250)"],[1,"text-center"],[4,"ngFor","ngForOf"],[2,"color","red"],[4,"ngIf"]],template:function(e,t){1&e&&(o.cc(0,"div",0),o.cc(1,"div",1),o.cc(2,"div",2),o.cc(3,"div",3),o.cc(4,"h6",4),o.Tc(5,"Attendance Verification List"),o.bc(),o.Rc(6,u,5,0,"div",5),o.cc(7,"div",6),o.cc(8,"table",7),o.cc(9,"thead",8),o.cc(10,"tr",9),o.cc(11,"th"),o.Tc(12,"Employee Name"),o.bc(),o.cc(13,"th"),o.Tc(14,"Status"),o.bc(),o.cc(15,"th"),o.Tc(16,"Date"),o.bc(),o.cc(17,"th"),o.Tc(18,"In Time"),o.bc(),o.cc(19,"th"),o.Tc(20,"Out Time"),o.bc(),o.cc(21,"th"),o.Tc(22,"Location"),o.bc(),o.bc(),o.bc(),o.cc(23,"tbody",9),o.Rc(24,b,13,6,"tr",10),o.bc(),o.bc(),o.bc(),o.bc(),o.bc(),o.bc(),o.bc()),2&e&&(o.Jb(6),o.uc("ngIf",0==t.countTheRecivedLeaves),o.Jb(18),o.uc("ngForOf",t.officeNewLeaves))},directives:[n.n,n.m],styles:[".color-blue[_ngcontent-%COMP%]{color:#7d98e8}td[_ngcontent-%COMP%]{word-wrap:break-word}"]}),e})()}];let v=(()=>{class e{}return e.\u0275mod=o.Ub({type:e}),e.\u0275inj=o.Tb({factory:function(t){return new(t||e)},providers:[n.e],imports:[[n.c,s.i.forChild(p),r.a,i.a.forRoot({apiKey:"AIzaSyAP8n5GbRjUqB9dQfxDfZLJuFam4PjHOTs"})]]}),e})()}}]);