!function(){function c(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function e(c,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(c,o.key,o)}}function t(c,t,o){return t&&e(c.prototype,t),o&&e(c,o),c}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{k2kE:function(e,o,n){"use strict";n.r(o),n.d(o,"EmployeeOfficeModule",function(){return C});var r=n("ofXK"),i=n("tyNb"),a=n("3Pt+"),b=n("fXoL"),s=n("1kSV"),l=n("5eHb"),u=n("f4AX"),d=n("oOf3");function f(c,e){1&c&&(b.cc(0,"div",13),b.cc(1,"h3",14),b.Uc(2,"No Employee Found"),b.bc(),b.bc())}var h=function(c){return["/employee-detail",c]};function m(c,e){if(1&c&&(b.cc(0,"tr"),b.cc(1,"td"),b.Uc(2),b.bc(),b.cc(3,"td"),b.Uc(4),b.bc(),b.cc(5,"td"),b.Uc(6),b.bc(),b.cc(7,"td"),b.Uc(8),b.bc(),b.cc(9,"td"),b.Uc(10),b.bc(),b.cc(11,"td"),b.cc(12,"button",21),b.Xb(13,"i",22),b.bc(),b.bc(),b.bc()),2&c){var t=e.$implicit,o=e.index;b.Jb(2),b.Vc(o+1),b.Jb(2),b.Xc("",t.fName," ",t.lName,""),b.Jb(2),b.Vc(t.designation),b.Jb(2),b.Vc(t.email),b.Jb(2),b.Vc(t.pNumber),b.Jb(2),b.vc("routerLink",b.zc(7,h,t._id))}}function p(c,e){if(1&c&&(b.cc(0,"div",15),b.cc(1,"table",16),b.cc(2,"thead",17),b.cc(3,"tr"),b.cc(4,"th"),b.Uc(5,"Serial"),b.bc(),b.cc(6,"th"),b.Uc(7,"Name"),b.bc(),b.cc(8,"th"),b.Uc(9,"Designation"),b.bc(),b.cc(10,"th"),b.Uc(11,"Email"),b.bc(),b.cc(12,"th"),b.Uc(13,"Phone"),b.bc(),b.cc(14,"th"),b.Uc(15,"view More"),b.bc(),b.bc(),b.bc(),b.cc(16,"tbody"),b.Sc(17,m,14,9,"tr",18),b.bc(),b.bc(),b.cc(18,"div",19),b.cc(19,"pagination-controls",20),b.mc("pageChange",function(c){return c}),b.bc(),b.bc(),b.bc()),2&c){var t=b.oc();b.Jb(17),b.vc("ngForOf",t.collectors)}}var g,v,y=((g=function(){function e(t,o,n,r,i){c(this,e),this.modalService=t,this.router=o,this.route=n,this.toastr=r,this.userService=i,this.samples=[],this.role="",this.collectors=[],this.users=[],this.countyouremployee=0}return t(e,[{key:"openBasicModal",value:function(c){this.modalService.open(c,{}).result.then(function(c){}).catch(function(c){})}},{key:"ngOnInit",value:function(){this.id=this.route.snapshot.paramMap.get("id"),this.fetchUsers()}},{key:"fetchUsers",value:function(){var c=this,e={UserId:this.id};console.log("fetch k badd "),console.log(this.id),this.userService.getUsers(e).subscribe(function(e){c.users=e;for(var t=0,o=0;t<c.users.length;t++)c.users[t].OfficeId==c.id&&(c.collectors[o]=c.users[t],c.countyouremployee=c.collectors.length,o++)})}}]),e}()).\u0275fac=function(c){return new(c||g)(b.Wb(s.e),b.Wb(i.e),b.Wb(i.a),b.Wb(l.b),b.Wb(u.a))},g.\u0275cmp=b.Qb({type:g,selectors:[["app-employee-office"]],decls:20,vars:2,consts:[[1,"page-breadcrumb"],[1,"card-title","color-blue"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","/"],["aria-current","page",1,"breadcrumb-item","active"],[1,"row"],[1,"col-md-12","stretch-card"],[1,"card"],[1,"card-body"],[1,"card-title"],["class","mt-3",4,"ngIf"],["class","table-responsive",4,"ngIf"],[1,"mt-3"],[2,"color","red"],[1,"table-responsive"],[1,"table","table-bordered",2,"background-color","azure"],[2,"background-color","rgb(194, 216, 250)"],[4,"ngFor","ngForOf"],[1,"pagination","mt-4"],[3,"pageChange"],[1,"btn","btn-light","btn-icon",2,"background-color","rgb(120, 185, 23)",3,"routerLink"],[1,"feather","icon-eye",2,"color","whitesmoke"]],template:function(c,e){1&c&&(b.cc(0,"nav",0),b.cc(1,"h3",1),b.Uc(2,"All Employees"),b.bc(),b.cc(3,"ol",2),b.cc(4,"li",3),b.cc(5,"a",4),b.Uc(6,"Dashboard"),b.bc(),b.bc(),b.cc(7,"li",3),b.cc(8,"a",4),b.Uc(9,"Offices"),b.bc(),b.bc(),b.cc(10,"li",5),b.Uc(11,"Employee List"),b.bc(),b.bc(),b.bc(),b.cc(12,"div",6),b.cc(13,"div",7),b.cc(14,"div",8),b.cc(15,"div",9),b.cc(16,"h6",10),b.Uc(17,"Employee List"),b.bc(),b.Sc(18,f,3,0,"div",11),b.Sc(19,p,20,1,"div",12),b.bc(),b.bc(),b.bc(),b.bc()),2&c&&(b.Jb(18),b.vc("ngIf",0==e.countyouremployee),b.Jb(1),b.vc("ngIf",0!=e.countyouremployee))},directives:[i.h,r.n,r.m,d.c,i.f],styles:[".btn-custom[_ngcontent-%COMP%]{color:#727cf5;background-color:#fff;border-radius:1.1875rem;margin:10px;border:2px solid;font-weight:700}.search-hero[_ngcontent-%COMP%]{max-width:100%;padding-bottom:50px;margin:auto}.form-control[_ngcontent-%COMP%]::-moz-placeholder{font-family:FontAwesome}.form-control[_ngcontent-%COMP%]::placeholder{font-family:FontAwesome}.unit[_ngcontent-%COMP%]{margin-top:-34px;margin-left:58%;width:31%;border-radius:1.1875rem}.td-actions[_ngcontent-%COMP%]{margin-right:33px!important}input[type=checkbox][_ngcontent-%COMP%]{zoom:1.5}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#727cf5}"]}),g),U=n("tyVc"),k=n("cZdB"),w=n("lDzL"),O=[{path:":id",component:y}],C=((v=t(function e(){c(this,e)})).\u0275mod=b.Ub({type:v}),v.\u0275inj=b.Tb({factory:function(c){return new(c||v)},imports:[[r.c,a.i,a.q,w.a,d.a,k.a,i.i.forChild(O),U.a]]}),v)}}])}();