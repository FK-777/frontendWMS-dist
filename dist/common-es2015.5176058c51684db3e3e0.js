(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{KeVr:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var n=r("8Y7J");let o=(()=>{class e{}return e.\u0275mod=n.Ub({type:e}),e.\u0275inj=n.Tb({factory:function(t){return new(t||e)}}),e})()},hccJ:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r("f8oD"),o=r("gQwx"),a=r("8Y7J");let s=(()=>{class e{constructor(e){this.http=e,this.leaveUrl=o.a.mainApiUrl()+"/leave"}getLeaves(e){return this.http.get(this.leaveUrl+n.a.objToQuery(e))}createLeaves(e){return console.log("Create!"),console.log(e),console.log(this.leaveUrl),this.http.post(this.leaveUrl,e)}updateLeaves(e,t){return this.http.patch(this.leaveUrl+"/"+e,t)}deleteLeaves(e){return this.http.delete(this.leaveUrl+"/"+e)}}return e.\u0275fac=function(t){return new(t||e)(a.jc(n.a))},e.\u0275prov=a.Sb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);