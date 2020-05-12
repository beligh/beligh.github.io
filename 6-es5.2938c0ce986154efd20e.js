function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{dgmN:function(t,e,n){"use strict";n.r(e),n.d(e,"PagesModule",(function(){return E}));var a,i,r,c=n("ofXK"),o=n("tyNb"),s=n("fXoL"),l=n("NFeN"),u=n("sYmb"),b=((r=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=s.Ib({type:r,selectors:[["app-home"]],decls:6,vars:3,consts:[[1,"mat-title","with-icon"],["inline","true"],[1,"app-padding"]],template:function(t,e){1&t&&(s.Ub(0,"div",0),s.Ub(1,"mat-icon",1),s.yc(2,"home"),s.Tb(),s.Ub(3,"span",2),s.yc(4),s.hc(5,"translate"),s.Tb(),s.Tb()),2&t&&(s.Cb(4),s.zc(s.ic(5,1,"Home")))},directives:[l.a],pipes:[u.c],styles:[""]}),r),f=((i=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=s.Ib({type:i,selectors:[["app-about"]],decls:6,vars:3,consts:[[1,"mat-title","with-icon"],["inline","true"],[1,"app-padding"]],template:function(t,e){1&t&&(s.Ub(0,"div",0),s.Ub(1,"mat-icon",1),s.yc(2,"info"),s.Tb(),s.Ub(3,"span",2),s.yc(4),s.hc(5,"translate"),s.Tb(),s.Tb()),2&t&&(s.Cb(4),s.zc(s.ic(5,1,"About")))},directives:[l.a],pipes:[u.c],styles:[""]}),i),p=((a=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=s.Ib({type:a,selectors:[["app-page-not-found"]],decls:3,vars:3,template:function(t,e){1&t&&(s.Ub(0,"h1"),s.yc(1),s.hc(2,"translate"),s.Tb()),2&t&&(s.Cb(1),s.zc(s.ic(2,1,"Page not found")))},pipes:[u.c],styles:[""]}),a),d=n("lJxs"),h=n("UXun"),m=n("bHdf"),y=n("0MNC"),g=n("c1R7"),C=n("zkoq"),k=n("Wp6s"),v=n("wf0l");function w(t,e){if(1&t){var n=s.Vb();s.Ub(0,"mat-grid-tile",2),s.cc("click",(function(){s.rc(n);var t=e.$implicit;return s.gc().goToDetails(t.id)})),s.Ub(1,"mat-card",3),s.Ub(2,"mat-card-header"),s.Ub(3,"mat-card-title",4),s.cc("click",(function(){s.rc(n);var t=e.$implicit;return s.gc().goToDetails(t.id)})),s.yc(4),s.hc(5,"translate"),s.Tb(),s.Tb(),s.Pb(6,"img",5),s.Tb(),s.Tb()}if(2&t){var a=e.$implicit,i=s.gc();s.Cb(4),s.Ac(" ",s.ic(5,5,a.name),""),s.Cb(2),s.lc("useSrcset",!0)("defaultImage",i.defaultImage)("lazyLoad",a.icon)("errorImage",i.imageToShowOnError)}}var T,_=((T=function(){function t(e,n,a){_classCallCheck(this,t),this.appService=e,this.router=n,this.breakpointObserver=a,this.dataSource=[],this.defaultImage="assets/img/cube64px.svg",this.imageToShowOnError="assets/img/notfound.png",this.isHandset$=this.breakpointObserver.observe(y.b.Handset).pipe(Object(d.a)((function(t){return t.matches})),Object(h.a)())}return _createClass(t,[{key:"ngOnInit",value:function(){this.breakpoint=this.resizeScreen(),this.fetchLinks()}},{key:"fetchLinks",value:function(){var t=this;this.appService.fetchLinks().pipe(Object(d.a)((function(t){return t.data})),Object(m.a)()).subscribe((function(e){t.dataSource=[].concat(_toConsumableArray(t.dataSource),[e])}))}},{key:"onResize",value:function(t){this.breakpoint=this.resizeScreen(t),console.log("this.breakpoint ",this.breakpoint)}},{key:"resizeScreen",value:function(t){if(t){if(t.target.innerWidth<610)return 1;if(t.target.innerWidth>=610&&t.target.innerWidth<1220)return 2;if(t.target.innerWidth>=1220)return 4}else{if(window.innerWidth<610)return 1;if(window.innerWidth>=610&&window.innerWidth<1220)return 2;if(window.innerWidth>=1220)return 4}}},{key:"goToDetails",value:function(t){this.router.navigate(["/useful-links",t])}}]),t}()).\u0275fac=function(t){return new(t||T)(s.Ob(g.a),s.Ob(o.b),s.Ob(y.a))},T.\u0275cmp=s.Ib({type:T,selectors:[["app-useful-links"]],decls:5,vars:5,consts:[[3,"cols","resize"],["class","app-tile",3,"click",4,"ngFor","ngForOf"],[1,"app-tile",3,"click"],[1,"app-card"],[3,"click"],["mat-card-image","","alt","Photo",1,"app-card-image",3,"useSrcset","defaultImage","lazyLoad","errorImage"]],template:function(t,e){1&t&&(s.Ub(0,"h1"),s.yc(1),s.hc(2,"translate"),s.Tb(),s.Ub(3,"mat-grid-list",0),s.cc("resize",(function(t){return e.onResize(t)}),!1,s.qc),s.xc(4,w,7,7,"mat-grid-tile",1),s.Tb()),2&t&&(s.Cb(1),s.zc(s.ic(2,3,"Useful links")),s.Cb(2),s.lc("cols",e.breakpoint),s.Cb(1),s.lc("ngForOf",e.dataSource))},directives:[C.a,c.j,C.c,k.a,k.b,k.e,k.c,v.a],pipes:[u.c],styles:[".full-width-table[_ngcontent-%COMP%]{width:100%}.app-card[_ngcontent-%COMP%]{width:400px;margin:5px}.app-tile[_ngcontent-%COMP%]:hover{cursor:pointer;opacity:.8;border:2px solid}.app-card-image[_ngcontent-%COMP%]{width:250px;text-align:center;margin:5px}"]}),T),O=n("pLZG"),S=n("+0xr"),U=n("Dh3D");function I(t,e){1&t&&(s.Ub(0,"th",9),s.yc(1,"Name"),s.Tb())}function x(t,e){if(1&t&&(s.Ub(0,"td",10),s.yc(1),s.Tb()),2&t){var n=e.$implicit;s.Cb(1),s.zc(n.name)}}function z(t,e){1&t&&(s.Ub(0,"th",9),s.yc(1,"Details"),s.Tb())}function A(t,e){if(1&t&&(s.Ub(0,"td",10),s.yc(1),s.Tb()),2&t){var n=e.$implicit;s.Cb(1),s.zc(n.details)}}function D(t,e){1&t&&(s.Ub(0,"th",9),s.yc(1,"Url"),s.Tb())}function j(t,e){if(1&t&&(s.Ub(0,"td",10),s.Ub(1,"a",11),s.yc(2),s.Tb(),s.Tb()),2&t){var n=e.$implicit;s.Cb(1),s.lc("href",n.url,s.sc),s.Cb(1),s.zc(n.url)}}function L(t,e){1&t&&s.Pb(0,"tr",12)}function P(t,e){1&t&&s.Pb(0,"tr",13)}var R,M,H,W=[{path:"home",component:b},{path:"about",component:f},{path:"useful-links",component:_},{path:"useful-links/:id",component:(R=function(){function t(e,n,a){_classCallCheck(this,t),this.appService=e,this.route=n,this.location=a,this.dataSource=[],this.displayedColumns=["name","details","url"]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.sub$=this.route.params.subscribe((function(e){t.id=e.id,t.fetchLinksById(t.id)}))}},{key:"fetchLinksById",value:function(t){var e=this;this.appService.fetchLinks().pipe(Object(d.a)((function(t){return t.data})),Object(m.a)(),Object(O.a)((function(e){return e.id===t})),Object(d.a)((function(t){return t.links}))).subscribe((function(t){e.dataSource=t}))}},{key:"backClicked",value:function(){this.location.back()}},{key:"ngOnDestroy",value:function(){this.sub$.unsubscribe()}}]),t}(),R.\u0275fac=function(t){return new(t||R)(s.Ob(g.a),s.Ob(o.a),s.Ob(c.g))},R.\u0275cmp=s.Ib({type:R,selectors:[["app-link-details"]],decls:16,vars:7,consts:[[1,"app-table-container","mat-elevation-z8"],["mat-table","","matSort","","aria-label","Elements",1,"full-width-table",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","details"],["matColumnDef","url"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["target","_blank",3,"href"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(s.Ub(0,"h1"),s.yc(1),s.hc(2,"translate"),s.Tb(),s.Ub(3,"div",0),s.Ub(4,"table",1),s.Sb(5,2),s.xc(6,I,2,0,"th",3),s.xc(7,x,2,1,"td",4),s.Rb(),s.Sb(8,5),s.xc(9,z,2,0,"th",3),s.xc(10,A,2,1,"td",4),s.Rb(),s.Sb(11,6),s.xc(12,D,2,0,"th",3),s.xc(13,j,3,2,"td",4),s.Rb(),s.xc(14,L,1,0,"tr",7),s.xc(15,P,1,0,"tr",8),s.Tb(),s.Tb()),2&t&&(s.Cb(1),s.zc(s.ic(2,5,"Links details")),s.Cb(3),s.lc("dataSource",e.dataSource),s.Cb(10),s.lc("matHeaderRowDef",e.displayedColumns)("matHeaderRowDefSticky",!0),s.Cb(1),s.lc("matRowDefColumns",e.displayedColumns))},directives:[S.j,U.a,S.c,S.e,S.b,S.g,S.i,S.d,U.b,S.a,S.f,S.h],pipes:[u.c],styles:[".full-width-table[_ngcontent-%COMP%]{width:100%}.app-table-container[_ngcontent-%COMP%]{height:600px;overflow:auto}"]}),R)},{path:"",redirectTo:"/home",pathMatch:"full"},{path:"**",component:p}],$=((M=function t(){_classCallCheck(this,t)}).\u0275mod=s.Mb({type:M}),M.\u0275inj=s.Lb({factory:function(t){return new(t||M)},imports:[[o.e.forChild(W)],o.e]}),M),N=n("PCNd"),E=((H=function t(){_classCallCheck(this,t)}).\u0275mod=s.Mb({type:H}),H.\u0275inj=s.Lb({factory:function(t){return new(t||H)},imports:[[c.c,$,N.a]]}),H)}}]);