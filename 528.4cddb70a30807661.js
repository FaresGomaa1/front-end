"use strict";(self.webpackChunkInventory_Management_System_Frontend=self.webpackChunkInventory_Management_System_Frontend||[]).push([[528],{4528:(q,u,o)=>{o.r(u),o.d(u,{InventoryManagerModule:()=>v});var c=o(177),a=o(4341),d=o(6448),e=o(540),p=o(5095),g=o(7054),m=o(6790),f=o(5030);function h(r,l){if(1&r){const t=e.RV6();e.j41(0,"div")(1,"select",15),e.bIt("ngModelChange",function(n){e.eBV(t);const i=e.XpG();return e.Njj(i.request.inventoryManagerDecision=n)}),e.j41(2,"option",16),e.EFF(3,"Approve"),e.k0s(),e.j41(4,"option",17),e.EFF(5,"Reject with Update"),e.k0s(),e.j41(6,"option",18),e.EFF(7,"Reject and Close"),e.k0s()(),e.j41(8,"label",19),e.EFF(9,"Comment"),e.k0s(),e.j41(10,"textarea",20),e.bIt("ngModelChange",function(n){e.eBV(t);const i=e.XpG();return e.Njj(i.request.inventoryManagerComment=n)}),e.k0s()()}if(2&r){const t=e.XpG();e.R7$(1),e.Y8G("ngModel",t.request.inventoryManagerDecision)("disabled",t.request.userId!==t.userId||0==t.request.status),e.R7$(9),e.Y8G("ngModel",t.request.inventoryManagerComment)("disabled",t.request.userId!==t.userId||0==t.request.status)}}function F(r,l){if(1&r){const t=e.RV6();e.j41(0,"div")(1,"select",21),e.bIt("ngModelChange",function(n){e.eBV(t);const i=e.XpG();return e.Njj(i.request.departmentManagerDecision=n)}),e.j41(2,"option",16),e.EFF(3,"Approve"),e.k0s(),e.j41(4,"option",17),e.EFF(5,"Reject with Update"),e.k0s(),e.j41(6,"option",18),e.EFF(7,"Reject and Close"),e.k0s()(),e.j41(8,"label",19),e.EFF(9,"Comment"),e.k0s(),e.j41(10,"textarea",22),e.bIt("ngModelChange",function(n){e.eBV(t);const i=e.XpG();return e.Njj(i.request.departmentManagerComment=n)}),e.k0s()()}if(2&r){const t=e.XpG();e.R7$(1),e.Y8G("ngModel",t.request.departmentManagerDecision)("disabled",t.request.userId!==t.userId||0==t.request.status),e.R7$(9),e.Y8G("ngModel",t.request.departmentManagerComment)("disabled",t.request.userId!==t.userId||0==t.request.status)}}function M(r,l){if(1&r){const t=e.RV6();e.j41(0,"button",23),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.submit())}),e.EFF(1," Submit "),e.k0s()}}const b=[{path:"",component:(()=>{class r{constructor(t,s,n,i,I){this.requestService=t,this.route=s,this.categoryService=n,this.supplierService=i,this.authService=I,this.errorMessage=[],this.request={},this.categories=[],this.supplier={},this.userId="",this.currentDate="",this.role="",this.userId=this.authService.getToken()["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],this.role=this.authService.getToken()["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],this.fetchRequest()}fetchRequest(){const t=Number(this.route.snapshot.paramMap.get("id"));t&&!isNaN(t)?this.requestService.getRequestById(t).subscribe({next:s=>{if(s){this.request=s;const n=new Date(s.createdOn);this.currentDate=n.toISOString().slice(0,16),this.fetchCategories(),this.fetchSupplier()}else console.warn("Product not found.")},error:s=>{console.error("Error fetching product:",s)}}):console.warn("ID is required to fetch the product.")}fetchCategories(){this.categoryService.getCategories().subscribe(t=>{this.categories=t})}fetchSupplier(){this.request.supplierId&&this.supplierService.getSupplierById(this.request.supplierId).subscribe(t=>{this.supplier=t})}category(){const t=this.categories.find(s=>s.id===this.request.categoryId);return t?t.name:"Category not found"}submit(){let s=this.authService.getToken()["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"].split(" ");this.managerDecision(`${s[0]}${s[1]}`)}managerDecision(t){if("InventoryManager"===t){if(!this.request.inventoryManagerDecision)return void alert("Please select a decision.");this.requestService.updateManagerDecision({managerId:this.userId,requestId:this.request.id,decision:this.request.inventoryManagerDecision,comment:this.request.inventoryManagerComment,managerType:t}).subscribe({next:n=>{alert("Decision submitted successfully."),window.location.reload()},error:n=>{alert("Failed to submit decision."),console.error("Error:",n)}})}else if("DepartmentManager"===t){if(!this.request.departmentManagerDecision)return void alert("Please select a decision.");this.requestService.updateManagerDecision({managerId:this.userId,requestId:this.request.id,decision:this.request.departmentManagerDecision,comment:this.request.departmentManagerComment,managerType:t}).subscribe({next:n=>{alert("Decision submitted successfully."),window.location.reload()},error:n=>{alert("Failed to submit decision."),console.error("Error:",n)}})}}static{this.\u0275fac=function(s){return new(s||r)(e.rXU(p.B),e.rXU(d.nX),e.rXU(g.M),e.rXU(m.g),e.rXU(f.u))}}static{this.\u0275cmp=e.VBU({type:r,selectors:[["app-decision"]],decls:86,vars:25,consts:[[1,"request-details","container","my-4","p-4","shadow-sm","rounded","border"],[1,"mb-4"],[1,"fas","fa-file-alt","me-2"],[1,"request-info","mb-4","p-3","bg-light","rounded"],[1,"badge",3,"ngClass"],[1,"product-info","mb-4","p-3","bg-light","rounded"],[1,"fas","fa-box","me-2"],[1,"supplier-info","mb-4","p-3","bg-light","rounded"],[1,"fas","fa-user","me-2"],[3,"href"],[1,"decision-section","p-3","bg-light","rounded"],[1,"fas","fa-gavel","me-2"],["for","decision-select",1,"form-label"],[4,"ngIf"],["type","button","class","btn btn-primary mt-3",3,"click",4,"ngIf"],["id","decision-select",1,"form-select","mb-3",3,"ngModel","disabled","ngModelChange"],["value","Approve"],["value","Reject - Update"],["value","Reject - Close"],["for","comment-textarea",1,"form-label"],["id","comment-textarea","rows","4",1,"form-control",3,"ngModel","disabled","ngModelChange"],["id","decision-select1",1,"form-select","mb-3",3,"ngModel","disabled","ngModelChange"],["id","comment-textarea1","rows","4",1,"form-control",3,"ngModel","disabled","ngModelChange"],["type","button",1,"btn","btn-primary","mt-3",3,"click"]],template:function(s,n){1&s&&(e.j41(0,"div",0)(1,"h2",1),e.nrm(2,"i",2),e.EFF(3,"Request Details"),e.k0s(),e.j41(4,"div",3)(5,"p")(6,"strong"),e.EFF(7,"Request Status:"),e.k0s(),e.EFF(8),e.k0s(),e.j41(9,"p")(10,"strong"),e.EFF(11,"Owner:"),e.k0s(),e.EFF(12),e.j41(13,"strong"),e.EFF(14,"Team:"),e.k0s(),e.EFF(15),e.k0s(),e.j41(16,"span",4),e.EFF(17),e.k0s()(),e.j41(18,"div",5)(19,"h4"),e.nrm(20,"i",6),e.EFF(21,"Product Details"),e.k0s(),e.j41(22,"p")(23,"strong"),e.EFF(24,"Request Type:"),e.k0s(),e.EFF(25),e.k0s(),e.j41(26,"p")(27,"strong"),e.EFF(28,"Name:"),e.k0s(),e.EFF(29),e.k0s(),e.j41(30,"p")(31,"strong"),e.EFF(32,"Price:"),e.k0s(),e.EFF(33),e.nI1(34,"currency"),e.k0s(),e.j41(35,"p")(36,"strong"),e.EFF(37,"Category:"),e.k0s(),e.EFF(38),e.k0s(),e.j41(39,"p")(40,"strong"),e.EFF(41,"SKU:"),e.k0s(),e.EFF(42),e.k0s(),e.j41(43,"p")(44,"strong"),e.EFF(45,"Quantity:"),e.k0s(),e.EFF(46),e.k0s(),e.j41(47,"p")(48,"strong"),e.EFF(49,"Description:"),e.k0s(),e.EFF(50),e.k0s(),e.j41(51,"p")(52,"strong"),e.EFF(53,"Created On:"),e.k0s(),e.EFF(54),e.k0s()(),e.j41(55,"div",7)(56,"h4"),e.nrm(57,"i",8),e.EFF(58,"Supplier Information"),e.k0s(),e.j41(59,"p")(60,"strong"),e.EFF(61,"Full Name:"),e.k0s(),e.EFF(62),e.k0s(),e.j41(63,"p")(64,"strong"),e.EFF(65,"Email:"),e.k0s(),e.j41(66,"a",9),e.EFF(67),e.k0s()(),e.j41(68,"p")(69,"strong"),e.EFF(70,"Phone:"),e.k0s(),e.j41(71,"a",9),e.EFF(72),e.k0s()(),e.j41(73,"address")(74,"strong"),e.EFF(75,"Address:"),e.k0s(),e.EFF(76),e.k0s()(),e.j41(77,"div",10)(78,"h4"),e.nrm(79,"i",11),e.EFF(80,"Decision"),e.k0s(),e.j41(81,"label",12),e.EFF(82,"Decision"),e.k0s(),e.DNE(83,h,11,4,"div",13),e.DNE(84,F,11,4,"div",13),e.DNE(85,M,2,0,"button",14),e.k0s()()),2&s&&(e.R7$(8),e.SpI(" ",n.request.requestStatus,""),e.R7$(4),e.SpI(" ",n.request.user?n.request.user:"No assigned User"," | "),e.R7$(3),e.SpI(" ",n.request.team," Team"),e.R7$(1),e.Y8G("ngClass",n.request.status?"badge-success":"badge-danger"),e.R7$(1),e.SpI(" ",n.request.status?"Active":"Inactive"," "),e.R7$(8),e.SpI(" ",n.request.requestType,""),e.R7$(4),e.SpI(" ",n.request.name,""),e.R7$(4),e.SpI(" ",e.bMT(34,23,n.request.price),""),e.R7$(5),e.SpI(" ",n.category(),""),e.R7$(4),e.SpI(" ",n.request.sku,""),e.R7$(4),e.SpI(" ",n.request.quantity,""),e.R7$(4),e.SpI(" ",n.request.description,""),e.R7$(4),e.SpI(" ",n.currentDate,""),e.R7$(8),e.Lme(" ",n.supplier.firstName," ",n.supplier.lastName,""),e.R7$(4),e.Mz_("href","mailto:",n.supplier.email,"",e.B4B),e.R7$(1),e.JRh(n.supplier.email),e.R7$(4),e.Mz_("href","tel:",n.supplier.phone,"",e.B4B),e.R7$(1),e.JRh(n.supplier.phone),e.R7$(4),e.SpI(" ",n.supplier.address," "),e.R7$(7),e.Y8G("ngIf","Inventory Manager"===n.role||"Inventory Manager Manager"===n.role),e.R7$(1),e.Y8G("ngIf","Department Manager"===n.role||"Department Manager Manager"===n.role),e.R7$(1),e.Y8G("ngIf",n.request.userId===n.userId&&!0===n.request.status))},dependencies:[c.YU,c.bT,a.xH,a.y7,a.me,a.wz,a.BC,a.vS,c.oe],styles:[".request-details[_ngcontent-%COMP%]{background-color:#f8f9fa;border:1px solid #ddd;border-radius:8px;box-shadow:0 4px 6px #0000001a}.request-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .request-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#495057;font-weight:600;margin-bottom:20px}.request-info[_ngcontent-%COMP%], .product-info[_ngcontent-%COMP%], .supplier-info[_ngcontent-%COMP%], .decision-section[_ngcontent-%COMP%]{border-radius:8px;padding:15px;background-color:#fff;margin-bottom:20px;box-shadow:0 2px 4px #00000014}.badge[_ngcontent-%COMP%]{padding:.5em 1em;font-size:.9rem}.badge-success[_ngcontent-%COMP%]{background-color:#28a745;color:#fff}.badge-danger[_ngcontent-%COMP%]{background-color:#dc3545;color:#fff}.form-select[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]{border-radius:.5rem;border:1px solid #ced4da;background-color:#f1f1f1;padding:10px;font-size:1rem}.form-select[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]:focus{border-color:#80bdff;outline:none}address[_ngcontent-%COMP%]{font-style:normal;margin:0;color:#6c757d;font-size:.9rem}a[_ngcontent-%COMP%]{color:#007bff;text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline;color:#0056b3}.shadow-sm[_ngcontent-%COMP%]{box-shadow:0 .125rem .25rem #00000013}.request-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .product-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .supplier-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;color:#495057;margin-bottom:10px}.decision-section[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:vertical;border:1px solid #ced4da;border-radius:.5rem;padding:10px;font-size:1rem}.decision-section[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:#80bdff}"]})}}return r})()}];let C=(()=>{class r{static{this.\u0275fac=function(s){return new(s||r)}}static{this.\u0275mod=e.$C({type:r})}static{this.\u0275inj=e.G2t({imports:[d.iI.forChild(b),d.iI]})}}return r})(),v=(()=>{class r{static{this.\u0275fac=function(s){return new(s||r)}}static{this.\u0275mod=e.$C({type:r})}static{this.\u0275inj=e.G2t({imports:[c.MD,C,a.YN]})}}return r})()}}]);