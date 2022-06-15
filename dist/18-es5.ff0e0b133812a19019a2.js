!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,c,n){return c&&t(e.prototype,c),n&&t(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{f4AX:function(t,n,o){"use strict";o.d(n,"a",function(){return a});var r=o("f8oD"),i=o("gQwx"),s=o("8Y7J"),a=function(){var t=function(){function t(c){e(this,t),this.http=c,this.userUrl=i.a.mainApiUrl()+"/user"}return c(t,[{key:"getUsers",value:function(e){return console.log(e),this.http.get(this.userUrl+r.a.objToQuery(e))}},{key:"createUsers",value:function(e){return this.http.post(this.userUrl,e)}},{key:"updateUsers",value:function(e,t){return this.http.patch(this.userUrl+"/"+e,t)}},{key:"updateUser",value:function(e,t){return this.http.patch(this.userUrl+"/"+e,t)}},{key:"deleteUsers",value:function(e){return this.http.delete(this.userUrl+"/"+e)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(s.jc(r.a))},t.\u0275prov=s.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},k2kE:function(t,n,o){"use strict";o.r(n),o.d(n,"EmployeeOfficeModule",function(){return U});var r=o("SVse"),i=o("iInd"),s=o("s7LF"),a=o("8Y7J"),u=o("G0yt"),l=o("EApP"),h=o("f4AX"),b=o("xkgV");function f(e,t){1&e&&(a.cc(0,"div",12),a.cc(1,"h3",13),a.Tc(2,"No Employee Found"),a.bc(),a.bc())}function d(e,t){1&e&&(a.cc(0,"div",14),a.cc(1,"table",15),a.cc(2,"thead",16),a.cc(3,"tr"),a.cc(4,"th"),a.Tc(5,"Serial"),a.bc(),a.cc(6,"th"),a.Tc(7,"Name"),a.bc(),a.cc(8,"th"),a.Tc(9,"Email"),a.bc(),a.cc(10,"th"),a.Tc(11,"Phone"),a.bc(),a.cc(12,"th"),a.Tc(13,"view More"),a.bc(),a.bc(),a.bc(),a.bc(),a.cc(14,"div",17),a.cc(15,"pagination-controls",18),a.mc("pageChange",function(e){return e}),a.bc(),a.bc(),a.bc())}var p,m,g=((p=function(){function t(c,n,o,r,i){e(this,t),this.modalService=c,this.router=n,this.route=o,this.toastr=r,this.userService=i,this.samples=[],this.role="",this.collectors=[],this.users=[],this.countyouremployee=0}return c(t,[{key:"openBasicModal",value:function(e){this.modalService.open(e,{}).result.then(function(e){}).catch(function(e){})}},{key:"ngOnInit",value:function(){this.id=this.route.snapshot.paramMap.get("id"),this.fetchUsers()}},{key:"fetchUsers",value:function(){var e=this,t={UserId:this.id};console.log("fetch k badd "),console.log(this.id),this.userService.getUsers(t).subscribe(function(t){e.users=t;for(var c=0,n=0;c<e.users.length;c++)e.users[c].OfficeId==e.id&&(e.collectors[n]=e.users[c],e.countyouremployee=e.collectors.length,n++)})}}]),t}()).\u0275fac=function(e){return new(e||p)(a.Wb(u.j),a.Wb(i.e),a.Wb(i.a),a.Wb(l.b),a.Wb(h.a))},p.\u0275cmp=a.Qb({type:p,selectors:[["app-employee-office"]],decls:18,vars:2,consts:[[1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","/"],["aria-current","page",1,"breadcrumb-item","active"],[1,"row"],[1,"col-md-12","stretch-card"],[1,"card"],[1,"card-body"],[1,"card-title"],["class","mt-3",4,"ngIf"],["class","table-responsive",4,"ngIf"],[1,"mt-3"],[2,"color","red"],[1,"table-responsive"],[1,"table","table-bordered",2,"background-color","azure"],[2,"background-color","rgb(194, 216, 250)"],[1,"pagination","mt-4"],[3,"pageChange"]],template:function(e,t){1&e&&(a.cc(0,"nav",0),a.cc(1,"ol",1),a.cc(2,"li",2),a.cc(3,"a",3),a.Tc(4,"Dashboard"),a.bc(),a.bc(),a.cc(5,"li",2),a.cc(6,"a",3),a.Tc(7,"Office"),a.bc(),a.bc(),a.cc(8,"li",4),a.Tc(9,"Employee List"),a.bc(),a.bc(),a.bc(),a.cc(10,"div",5),a.cc(11,"div",6),a.cc(12,"div",7),a.cc(13,"div",8),a.cc(14,"h6",9),a.Tc(15,"Employee List"),a.bc(),a.Rc(16,f,3,0,"div",10),a.Rc(17,d,16,0,"div",11),a.bc(),a.bc(),a.bc(),a.bc()),2&e&&(a.Jb(16),a.uc("ngIf",0==t.countyouremployee),a.Jb(1),a.uc("ngIf",0!=t.countyouremployee))},directives:[i.g,r.n,b.b],styles:[".btn-custom[_ngcontent-%COMP%]{color:#727cf5;background-color:#fff;border-radius:1.1875rem;margin:10px;border:2px solid;font-weight:700}.search-hero[_ngcontent-%COMP%]{max-width:100%;padding-bottom:50px;margin:auto}.form-control[_ngcontent-%COMP%]::-moz-placeholder{font-family:FontAwesome}.form-control[_ngcontent-%COMP%]::placeholder{font-family:FontAwesome}.unit[_ngcontent-%COMP%]{margin-top:-34px;margin-left:58%;width:31%;border-radius:1.1875rem}.td-actions[_ngcontent-%COMP%]{margin-right:33px!important}input[type=checkbox][_ngcontent-%COMP%]{zoom:1.5}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#727cf5}"]}),p),v=o("tyVc"),y=o("KeVr"),k=o("w9WL"),w=[{path:":id",component:g}],U=((m=c(function t(){e(this,t)})).\u0275mod=a.Ub({type:m}),m.\u0275inj=a.Tb({factory:function(e){return new(e||m)},imports:[[r.c,s.h,s.q,k.a,b.a,y.a,i.h.forChild(w),v.a]]}),m)}}])}();