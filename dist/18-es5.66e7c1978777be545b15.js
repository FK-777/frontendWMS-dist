!function(){function c(c,t){if(!(c instanceof t))throw new TypeError("Cannot call a class as a function")}function t(c,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(c,n.key,n)}}function e(c,e,n){return e&&t(c.prototype,e),n&&t(c,n),c}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{f4AX:function(t,n,o){"use strict";o.d(n,"a",function(){return s});var r=o("f8oD"),i=o("gQwx"),a=o("8Y7J"),s=function(){var t=function(){function t(e){c(this,t),this.http=e,this.userUrl=i.a.mainApiUrl()+"/user"}return e(t,[{key:"getUsers",value:function(c){return console.log(c),this.http.get(this.userUrl+r.a.objToQuery(c))}},{key:"createUsers",value:function(c){return this.http.post(this.userUrl,c)}},{key:"updateUsers",value:function(c,t){return this.http.patch(this.userUrl+"/"+c,t)}},{key:"updateUser",value:function(c,t){return this.http.patch(this.userUrl+"/"+c,t)}},{key:"deleteUsers",value:function(c){return this.http.delete(this.userUrl+"/"+c)}}]),t}();return t.\u0275fac=function(c){return new(c||t)(a.jc(r.a))},t.\u0275prov=a.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},k2kE:function(t,n,o){"use strict";o.r(n),o.d(n,"EmployeeOfficeModule",function(){return O});var r=o("SVse"),i=o("iInd"),a=o("s7LF"),s=o("8Y7J"),u=o("G0yt"),l=o("EApP"),b=o("f4AX"),f=o("xkgV");function h(c,t){1&c&&(s.cc(0,"div",12),s.cc(1,"h3",13),s.Tc(2,"No Employee Found"),s.bc(),s.bc())}var d=function(c){return["/employee-detail",c]};function p(c,t){if(1&c&&(s.cc(0,"tr"),s.cc(1,"td"),s.Tc(2),s.bc(),s.cc(3,"td"),s.Tc(4),s.bc(),s.cc(5,"td"),s.Tc(6),s.bc(),s.cc(7,"td"),s.Tc(8),s.bc(),s.cc(9,"td"),s.cc(10,"button",20),s.Xb(11,"i",21),s.bc(),s.bc(),s.bc()),2&c){var e=t.$implicit,n=t.index;s.Jb(2),s.Uc(n+1),s.Jb(2),s.Wc("",e.fName," ",e.lName,""),s.Jb(2),s.Uc(e.email),s.Jb(2),s.Uc(e.pNumber),s.Jb(2),s.uc("routerLink",s.yc(6,d,e._id))}}function m(c,t){if(1&c&&(s.cc(0,"div",14),s.cc(1,"table",15),s.cc(2,"thead",16),s.cc(3,"tr"),s.cc(4,"th"),s.Tc(5,"Serial"),s.bc(),s.cc(6,"th"),s.Tc(7,"Name"),s.bc(),s.cc(8,"th"),s.Tc(9,"Email"),s.bc(),s.cc(10,"th"),s.Tc(11,"Phone"),s.bc(),s.cc(12,"th"),s.Tc(13,"view More"),s.bc(),s.bc(),s.bc(),s.cc(14,"tbody"),s.Rc(15,p,12,8,"tr",17),s.bc(),s.bc(),s.cc(16,"div",18),s.cc(17,"pagination-controls",19),s.mc("pageChange",function(c){return c}),s.bc(),s.bc(),s.bc()),2&c){var e=s.oc();s.Jb(15),s.uc("ngForOf",e.collectors)}}var g,v,y=((g=function(){function t(e,n,o,r,i){c(this,t),this.modalService=e,this.router=n,this.route=o,this.toastr=r,this.userService=i,this.samples=[],this.role="",this.collectors=[],this.users=[],this.countyouremployee=0}return e(t,[{key:"openBasicModal",value:function(c){this.modalService.open(c,{}).result.then(function(c){}).catch(function(c){})}},{key:"ngOnInit",value:function(){this.id=this.route.snapshot.paramMap.get("id"),this.fetchUsers()}},{key:"fetchUsers",value:function(){var c=this,t={UserId:this.id};console.log("fetch k badd "),console.log(this.id),this.userService.getUsers(t).subscribe(function(t){c.users=t;for(var e=0,n=0;e<c.users.length;e++)c.users[e].OfficeId==c.id&&(c.collectors[n]=c.users[e],c.countyouremployee=c.collectors.length,n++)})}}]),t}()).\u0275fac=function(c){return new(c||g)(s.Wb(u.e),s.Wb(i.e),s.Wb(i.a),s.Wb(l.b),s.Wb(b.a))},g.\u0275cmp=s.Qb({type:g,selectors:[["app-employee-office"]],decls:18,vars:2,consts:[[1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","/"],["aria-current","page",1,"breadcrumb-item","active"],[1,"row"],[1,"col-md-12","stretch-card"],[1,"card"],[1,"card-body"],[1,"card-title"],["class","mt-3",4,"ngIf"],["class","table-responsive",4,"ngIf"],[1,"mt-3"],[2,"color","red"],[1,"table-responsive"],[1,"table","table-bordered",2,"background-color","azure"],[2,"background-color","rgb(194, 216, 250)"],[4,"ngFor","ngForOf"],[1,"pagination","mt-4"],[3,"pageChange"],[1,"btn","btn-light","btn-icon",2,"background-color","rgb(120, 185, 23)",3,"routerLink"],[1,"feather","icon-eye",2,"color","whitesmoke"]],template:function(c,t){1&c&&(s.cc(0,"nav",0),s.cc(1,"ol",1),s.cc(2,"li",2),s.cc(3,"a",3),s.Tc(4,"Dashboard"),s.bc(),s.bc(),s.cc(5,"li",2),s.cc(6,"a",3),s.Tc(7,"Office"),s.bc(),s.bc(),s.cc(8,"li",4),s.Tc(9,"Employee List"),s.bc(),s.bc(),s.bc(),s.cc(10,"div",5),s.cc(11,"div",6),s.cc(12,"div",7),s.cc(13,"div",8),s.cc(14,"h6",9),s.Tc(15,"Employee List"),s.bc(),s.Rc(16,h,3,0,"div",10),s.Rc(17,m,18,1,"div",11),s.bc(),s.bc(),s.bc(),s.bc()),2&c&&(s.Jb(16),s.uc("ngIf",0==t.countyouremployee),s.Jb(1),s.uc("ngIf",0!=t.countyouremployee))},directives:[i.h,r.n,r.m,f.b,i.f],styles:[".btn-custom[_ngcontent-%COMP%]{color:#727cf5;background-color:#fff;border-radius:1.1875rem;margin:10px;border:2px solid;font-weight:700}.search-hero[_ngcontent-%COMP%]{max-width:100%;padding-bottom:50px;margin:auto}.form-control[_ngcontent-%COMP%]::-moz-placeholder{font-family:FontAwesome}.form-control[_ngcontent-%COMP%]::placeholder{font-family:FontAwesome}.unit[_ngcontent-%COMP%]{margin-top:-34px;margin-left:58%;width:31%;border-radius:1.1875rem}.td-actions[_ngcontent-%COMP%]{margin-right:33px!important}input[type=checkbox][_ngcontent-%COMP%]{zoom:1.5}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#727cf5}"]}),g),k=o("tyVc"),w=o("KeVr"),U=o("w9WL"),T=[{path:":id",component:y}],O=((v=e(function t(){c(this,t)})).\u0275mod=s.Ub({type:v}),v.\u0275inj=s.Tb({factory:function(c){return new(c||v)},imports:[[r.c,a.h,a.p,U.a,f.a,w.a,i.i.forChild(T),k.a]]}),v)}}])}();