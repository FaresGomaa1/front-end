"use strict";(self.webpackChunkInventory_Management_System_Frontend=self.webpackChunkInventory_Management_System_Frontend||[]).push([[935],{8935:(w,f,u)=>{u.r(f),u.d(f,{StaffMemberModule:()=>N});var d=u(177),l=u(6448);class M{constructor(a,t,o,n,s,c,p,m,g){this.requestType=a,this.name=t,this.price=o,this.sku=n,this.quantity=s,this.description=c,this.categoryId=p,this.supplierId=m,this.userId=g}}var e=u(540),b=u(7893),h=u(7054),_=u(6790),q=u(5030),C=u(5095),i=u(4341);function R(r,a){if(1&r&&(e.j41(0,"div",18),e.nrm(1,"i",19),e.j41(2,"span"),e.EFF(3),e.k0s()()),2&r){const t=a.$implicit;e.R7$(3),e.JRh(t)}}function v(r,a){if(1&r&&(e.j41(0,"div",16),e.DNE(1,R,4,1,"div",17),e.k0s()),2&r){const t=e.XpG();e.R7$(1),e.Y8G("ngForOf",t.errorMessage)}}function y(r,a){if(1&r&&(e.j41(0,"option",25),e.EFF(1),e.k0s()),2&r){const t=a.$implicit;e.Y8G("value",t.sku),e.R7$(1),e.JRh(t.name)}}function P(r,a){if(1&r){const t=e.RV6();e.j41(0,"div",3)(1,"label",20),e.nrm(2,"i",21),e.EFF(3," Select Product "),e.k0s(),e.j41(4,"select",22),e.bIt("change",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.fetchProduct())})("ngModelChange",function(n){e.eBV(t);const s=e.XpG();return e.Njj(s.request.sku=n)}),e.j41(5,"option",23),e.EFF(6,"Choose a product"),e.k0s(),e.DNE(7,y,2,2,"option",24),e.k0s()()}if(2&r){const t=e.XpG();e.R7$(4),e.Y8G("ngModel",t.request.sku),e.R7$(3),e.Y8G("ngForOf",t.products)}}function O(r,a){if(1&r&&(e.j41(0,"option",25),e.EFF(1),e.k0s()),2&r){const t=a.$implicit;e.Y8G("value",t.id),e.R7$(1),e.JRh(t.name)}}function F(r,a){if(1&r&&(e.j41(0,"optgroup",51)(1,"option",25),e.EFF(2),e.k0s(),e.j41(3,"option",52),e.EFF(4),e.k0s()()),2&r){const t=a.$implicit;e.Y8G("label",t.firstName+" "+t.lastName),e.R7$(1),e.Y8G("value",t.id),e.R7$(1),e.Lme(" ",t.firstName," ",t.lastName," "),e.R7$(1),e.Y8G("value",null),e.R7$(1),e.Lme(" Phone: ",t.phone,", Email: ",t.email," ")}}function j(r,a){if(1&r){const t=e.RV6();e.j41(0,"div")(1,"div",3)(2,"label",26),e.nrm(3,"i",27),e.EFF(4," Select Category "),e.k0s(),e.j41(5,"select",28),e.bIt("change",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.generateSKU())})("ngModelChange",function(n){e.eBV(t);const s=e.XpG();return e.Njj(s.request.categoryId=n)}),e.j41(6,"option",23),e.EFF(7,"Choose a category"),e.k0s(),e.DNE(8,O,2,2,"option",24),e.k0s()(),e.j41(9,"div",3)(10,"label",29),e.nrm(11,"i",30),e.EFF(12," Select Supplier "),e.k0s(),e.j41(13,"select",31),e.bIt("ngModelChange",function(n){e.eBV(t);const s=e.XpG();return e.Njj(s.request.supplierId=n)}),e.j41(14,"option",23),e.EFF(15,"Choose a supplier"),e.k0s(),e.DNE(16,F,5,7,"optgroup",32),e.k0s()(),e.j41(17,"div",33)(18,"div",3)(19,"label",34),e.nrm(20,"i",35),e.EFF(21," Product Name "),e.k0s(),e.j41(22,"input",36),e.bIt("ngModelChange",function(n){e.eBV(t);const s=e.XpG();return e.Njj(s.request.name=n)}),e.k0s()(),e.j41(23,"div",3)(24,"label",37),e.nrm(25,"i",38),e.EFF(26," Product Price "),e.k0s(),e.j41(27,"input",39),e.bIt("ngModelChange",function(n){e.eBV(t);const s=e.XpG();return e.Njj(s.request.price=n)}),e.k0s()()(),e.j41(28,"div",33)(29,"div",3)(30,"label",40),e.nrm(31,"i",41),e.EFF(32," SKU "),e.k0s(),e.j41(33,"input",42),e.bIt("ngModelChange",function(n){e.eBV(t);const s=e.XpG();return e.Njj(s.request.sku=n)}),e.k0s()(),e.j41(34,"div",3)(35,"label",43),e.nrm(36,"i",44),e.EFF(37," Quantity "),e.k0s(),e.j41(38,"input",45),e.bIt("ngModelChange",function(n){e.eBV(t);const s=e.XpG();return e.Njj(s.request.quantity=n)}),e.k0s()()(),e.j41(39,"div",3)(40,"label",46),e.nrm(41,"i",47),e.EFF(42," Created On "),e.k0s(),e.nrm(43,"input",48),e.k0s(),e.j41(44,"div",3)(45,"label",49),e.nrm(46,"i",5),e.EFF(47," Product Description "),e.k0s(),e.j41(48,"textarea",50),e.bIt("ngModelChange",function(n){e.eBV(t);const s=e.XpG();return e.Njj(s.request.description=n)}),e.k0s()()()}if(2&r){const t=e.XpG();e.R7$(5),e.Y8G("disabled","Delete Request"===t.request.requestType)("ngModel",t.request.categoryId),e.R7$(3),e.Y8G("ngForOf",t.categories),e.R7$(5),e.Y8G("disabled","Delete Request"===t.request.requestType||"Update Request"===t.request.requestType)("ngModel",t.request.supplierId),e.R7$(1),e.Y8G("value",null),e.R7$(2),e.Y8G("ngForOf",t.suppliers),e.R7$(6),e.Y8G("disabled","Delete Request"===t.request.requestType)("ngModel",t.request.name),e.R7$(5),e.Y8G("disabled","Delete Request"===t.request.requestType)("ngModel",t.request.price),e.R7$(6),e.Y8G("ngModel",t.request.sku),e.R7$(5),e.Y8G("ngModel",t.request.quantity)("disabled","Delete Request"===t.request.requestType),e.R7$(5),e.Y8G("disabled",!0)("value",t.currentDate),e.R7$(5),e.Y8G("ngModel",t.request.description)("disabled","Delete Request"===t.request.requestType)}}function I(r,a){if(1&r&&(e.j41(0,"div",23),e.nrm(1,"i",24),e.j41(2,"span"),e.EFF(3),e.k0s()()),2&r){const t=a.$implicit;e.R7$(3),e.JRh(t)}}function x(r,a){if(1&r&&(e.j41(0,"div",21),e.DNE(1,I,4,1,"div",22),e.k0s()),2&r){const t=e.XpG();e.R7$(1),e.Y8G("ngForOf",t.errorMessage)}}function T(r,a){if(1&r&&(e.j41(0,"option",62),e.EFF(1),e.k0s()),2&r){const t=a.$implicit;e.Y8G("value",t.id),e.R7$(1),e.SpI(" ",t.name," ")}}function E(r,a){if(1&r){const t=e.RV6();e.j41(0,"div")(1,"div",10)(2,"label",25),e.nrm(3,"i",26),e.EFF(4," Select Category "),e.k0s(),e.j41(5,"select",27),e.bIt("ngModelChange",function(n){e.eBV(t);const s=e.XpG();return e.Njj(s.updatedRequest.categoryId=n)}),e.j41(6,"option",28),e.EFF(7,"Choose a category"),e.k0s(),e.DNE(8,T,2,2,"option",29),e.k0s()(),e.j41(9,"div",30)(10,"label",31),e.nrm(11,"i",32),e.j41(12,"strong"),e.EFF(13,"Supplier Details"),e.k0s()(),e.j41(14,"div",33)(15,"div",34),e.nrm(16,"i",35),e.j41(17,"strong"),e.EFF(18,"Full Name:"),e.k0s(),e.j41(19,"span",36),e.EFF(20),e.k0s()(),e.j41(21,"div",34),e.nrm(22,"i",37),e.j41(23,"strong"),e.EFF(24,"Email:"),e.k0s(),e.j41(25,"a",38),e.EFF(26),e.k0s()(),e.j41(27,"div",39),e.nrm(28,"i",40),e.j41(29,"strong"),e.EFF(30,"Phone:"),e.k0s(),e.j41(31,"a",38),e.EFF(32),e.k0s()()()(),e.j41(33,"div",41)(34,"div",42)(35,"div",43)(36,"label",44),e.nrm(37,"i",45),e.EFF(38," Product Name "),e.k0s(),e.j41(39,"input",46),e.bIt("ngModelChange",function(n){e.eBV(t);const s=e.XpG();return e.Njj(s.updatedRequest.name=n)}),e.k0s()()(),e.j41(40,"div",42)(41,"div",43)(42,"label",47),e.nrm(43,"i",48),e.EFF(44," Product Price "),e.k0s(),e.j41(45,"input",49),e.bIt("ngModelChange",function(n){e.eBV(t);const s=e.XpG();return e.Njj(s.updatedRequest.price=n)}),e.k0s()()()(),e.j41(46,"div",43)(47,"label",50),e.nrm(48,"i",51),e.EFF(49," SKU "),e.k0s(),e.j41(50,"input",52),e.bIt("ngModelChange",function(n){e.eBV(t);const s=e.XpG();return e.Njj(s.request.sku=n)}),e.k0s()(),e.j41(51,"div",43)(52,"label",53),e.nrm(53,"i",54),e.EFF(54," Quantity "),e.k0s(),e.j41(55,"input",55),e.bIt("ngModelChange",function(n){e.eBV(t);const s=e.XpG();return e.Njj(s.updatedRequest.quantity=n)}),e.k0s()(),e.j41(56,"div",43)(57,"label",56),e.nrm(58,"i",57),e.EFF(59," Created On "),e.k0s(),e.nrm(60,"input",58),e.k0s(),e.j41(61,"div",59)(62,"label",60),e.nrm(63,"i",12),e.EFF(64," Product Description "),e.k0s(),e.j41(65,"textarea",61),e.bIt("ngModelChange",function(n){e.eBV(t);const s=e.XpG();return e.Njj(s.updatedRequest.description=n)}),e.k0s()()()}if(2&r){const t=e.XpG();e.R7$(5),e.Y8G("disabled","Delete Request"===t.updatedRequest.requestType||t.request.userId!=t.userId||!1===t.request.status)("ngModel",t.updatedRequest.categoryId),e.R7$(3),e.Y8G("ngForOf",t.categories),e.R7$(12),e.Lme("",t.supplier.firstName," ",t.supplier.lastName,""),e.R7$(5),e.Mz_("href","mailto:",t.supplier.email,"",e.B4B),e.R7$(1),e.SpI(" ",t.supplier.email," "),e.R7$(5),e.Mz_("href","tel:",t.supplier.phone,"",e.B4B),e.R7$(1),e.SpI(" ",t.supplier.phone," "),e.R7$(7),e.Y8G("disabled","Delete Request"===t.updatedRequest.requestType||t.request.userId!=t.userId||!1===t.request.status)("ngModel",t.updatedRequest.name),e.R7$(6),e.Y8G("disabled","Delete Request"===t.updatedRequest.requestType||t.request.userId!=t.userId||!1===t.request.status)("ngModel",t.updatedRequest.price),e.R7$(5),e.Y8G("ngModel",t.request.sku),e.R7$(5),e.Y8G("ngModel",t.updatedRequest.quantity)("disabled","Delete Request"===t.updatedRequest.requestType||t.request.userId!=t.userId||!1===t.request.status),e.R7$(5),e.Y8G("value",t.currentDate),e.R7$(5),e.Y8G("ngModel",t.updatedRequest.description)("disabled","Delete Request"===t.updatedRequest.requestType||t.request.userId!=t.userId||!1===t.request.status)}}function S(r,a){1&r&&(e.j41(0,"button",63),e.nrm(1,"i",64),e.EFF(2," Submit "),e.k0s())}const G=function(r,a){return{"bg-success":r,"bg-danger":a}},$=[{path:"",component:(()=>{class r{constructor(t,o,n,s,c,p){this.productService=t,this.categoryService=o,this.supplierService=n,this.authService=s,this.requestService=c,this.router=p,this.categories=[],this.suppliers=[],this.products=[],this.request=new M,this.errorMessage=[],this.currentDate=(new Date).toISOString().slice(0,16),this.categoryService.getCategories().subscribe(g=>{this.categories=g}),this.supplierService.getSuppliers().subscribe(g=>{this.suppliers=g})}handleSubmit(){if(this.errorMessage=[],!this.request.requestType)return void this.errorMessage.push("You need to choose a request type");const t=()=>{this.request.categoryId||this.errorMessage.push("Select a category. If the required category does not exist, add it first, then create the request."),this.request.supplierId||this.errorMessage.push("Select a supplier. If the required supplier does not exist, add it first, then create the request."),(!this.request.name||this.request.name.trim().length<3)&&this.errorMessage.push("You need to insert a product name with at least 3 characters."),(null==this.request.price||this.request.price<=0)&&this.errorMessage.push("You need to insert a price greater than 0."),(null==this.request.quantity||this.request.quantity<=0||!Number.isInteger(this.request.quantity))&&this.errorMessage.push("You need to insert a quantity greater than 0 and as an integer.")};switch(this.request.requestType){case"Add Request":case"Update Request":t(),this.handleUpdateAddRequest();break;case"Delete Request":t(),this.handleDeleteRequest();break;default:this.errorMessage.push("Invalid request type.")}}fetchProducts(){this.isNotAddRequest()&&this.loadProducts()}fetchProduct(){this.request.sku?this.productService.getProduct(this.request.sku).subscribe({next:t=>{t?(this.request.categoryId=t.categoryId??"",this.request.supplierId=t.supplierId??null,this.request.name=t.name??"",this.request.price=t.price??null,this.request.sku=t.sku??"",this.request.quantity=t.quantity??null,this.request.description=t.description):console.warn("No product found for the given ID.")},error:t=>{console.error("Error fetching product data:",t)}}):console.warn("Product ID is required to fetch the product.")}loadProducts(){this.productService.getProducts().subscribe({next:t=>{this.products=t},error:t=>{console.error("Error fetching products",t)}})}isNotAddRequest(){return"Update Request"===this.request.requestType||"Delete Request"===this.request.requestType}generateSKU(){if(!this.request.categoryId||!this.request.requestType||"Update Request"===this.request.requestType)return void console.warn("Category ID or Request Type is missing");const t=this.categories.find(n=>n.id==this.request.categoryId);if(!t)return void console.error("Category not found");if(t.name.length<2)return void console.error("Category name is too short to generate SKU");const o=`${t.name.slice(0,2).toUpperCase()}-0`;this.requestService.generateSKU(o,this.request.requestType).subscribe({next:n=>{console.log("SKU generated successfully:",n),this.request.sku=n.message},error:n=>{console.error("Error generating SKU:",n)}})}handleUpdateAddRequest(){this.errorMessage=[],this.requestService.createRequest(this.request).subscribe({next:t=>{this.router.navigate(["/views"])},error:t=>{this.errorMessage.push(t)}})}handleDeleteRequest(){if(this.errorMessage=[],!this.request.sku)return void this.errorMessage.push("SKU is not provided");const t=this.authService.getToken()["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];this.requestService.deleteRequest(this.request.sku,t).subscribe({next:o=>{this.router.navigate(["/views"])},error:o=>{this.errorMessage.push(o)}})}static{this.\u0275fac=function(o){return new(o||r)(e.rXU(b.b),e.rXU(h.M),e.rXU(_.g),e.rXU(q.u),e.rXU(C.B),e.rXU(l.Ix))}}static{this.\u0275cmp=e.VBU({type:r,selectors:[["app-create-request"]],decls:22,vars:4,consts:[[1,"form-container","container","mt-5"],["class","error-messages p-3 mb-4",4,"ngIf"],[1,"custom-form",3,"ngSubmit"],[1,"form-group"],["for","requestType"],[1,"fas","fa-file-alt"],["id","requestType","name","request_Type",1,"form-select",3,"ngModel","change","ngModelChange"],["value","","disabled","","selected",""],["value","Add Request"],["value","Update Request"],["value","Delete Request"],["class","form-group",4,"ngIf"],[4,"ngIf"],[1,"form-group","text-center","mt-4"],["type","submit",1,"btn","btn-primary","px-4"],[1,"fas","fa-paper-plane"],[1,"error-messages","p-3","mb-4"],["class","error-item d-flex align-items-center",4,"ngFor","ngForOf"],[1,"error-item","d-flex","align-items-center"],[1,"fas","fa-exclamation-circle","me-2"],["for","product"],[1,"fas","fa-box"],["id","product","name","product","required","",1,"form-select",3,"ngModel","change","ngModelChange"],["disabled","","selected","",3,"value"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["for","category"],[1,"fas","fa-list"],["id","category","required","","name","product.requestType",1,"form-select",3,"disabled","ngModel","change","ngModelChange"],["for","supplier"],[1,"fas","fa-truck"],["id","supplier","required","","name","supplierId",1,"form-select",3,"disabled","ngModel","ngModelChange"],[3,"label",4,"ngFor","ngForOf"],[1,"form-row"],["for","productName"],[1,"fas","fa-tag"],["type","text","id","productName","placeholder","Enter product name","required","","name","productName",1,"form-control",3,"disabled","ngModel","ngModelChange"],["for","productPrice"],[1,"fas","fa-dollar-sign"],["type","number","id","productPrice","placeholder","Enter product price","required","","name","price",1,"form-control",3,"disabled","ngModel","ngModelChange"],["for","sku"],[1,"fas","fa-barcode"],["type","text","id","sku","placeholder","Enter SKU","disabled","","name","sku",1,"form-control",3,"ngModel","ngModelChange"],["for","quantity"],[1,"fas","fa-sort-numeric-up"],["type","number","id","quantity","placeholder","Enter quantity","required","","name","quantity",1,"form-control",3,"ngModel","disabled","ngModelChange"],["for","createdOn"],[1,"fas","fa-calendar-alt"],["type","datetime-local","id","createdOn","name","createdOn",1,"form-control",3,"disabled","value"],["for","description"],["id","description","rows","4","placeholder","Enter product description","name","description","required","",1,"form-control",3,"ngModel","disabled","ngModelChange"],[3,"label"],["disabled","",3,"value"]],template:function(o,n){1&o&&(e.j41(0,"div",0),e.DNE(1,v,2,1,"div",1),e.j41(2,"form",2),e.bIt("ngSubmit",function(){return n.handleSubmit()}),e.j41(3,"div",3)(4,"label",4),e.nrm(5,"i",5),e.EFF(6," Select Request Type "),e.k0s(),e.j41(7,"select",6),e.bIt("change",function(){return n.fetchProducts()})("ngModelChange",function(c){return n.request.requestType=c}),e.j41(8,"option",7),e.EFF(9,"Choose a request type"),e.k0s(),e.j41(10,"option",8),e.EFF(11,"Add New Product"),e.k0s(),e.j41(12,"option",9),e.EFF(13,"Update Existing Product"),e.k0s(),e.j41(14,"option",10),e.EFF(15,"Delete Product"),e.k0s()()(),e.DNE(16,P,8,2,"div",11),e.DNE(17,j,49,18,"div",12),e.j41(18,"div",13)(19,"button",14),e.nrm(20,"i",15),e.EFF(21," Submit "),e.k0s()()()()),2&o&&(e.R7$(1),e.Y8G("ngIf",n.errorMessage.length>0),e.R7$(6),e.Y8G("ngModel",n.request.requestType),e.R7$(9),e.Y8G("ngIf","Delete Request"===n.request.requestType||"Update Request"===n.request.requestType),e.R7$(1),e.Y8G("ngIf","Add Request"===n.request.requestType||n.isNotAddRequest()&&void 0!==n.request.sku))},dependencies:[d.Sq,d.bT,i.qT,i.xH,i.y7,i.me,i.Q0,i.wz,i.BC,i.cb,i.YS,i.vS,i.cV],styles:[".error-messages[_ngcontent-%COMP%]{background-color:#f8d7da;border:1px solid #f5c6cb;color:#721c24;border-radius:8px;font-size:16px;box-shadow:0 2px 4px #0000001a}.error-messages[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:5px}.error-messages[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]:last-child{margin-bottom:0}.error-messages[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px;color:#dc3545}.error-messages[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:8px}.form-container[_ngcontent-%COMP%]{background-color:#f9f9f9;padding:2rem;border-radius:.5rem;box-shadow:0 4px 6px #0000001a}.form-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{background-color:#f9f9f9;border-radius:.5rem;padding:2rem;box-shadow:0 4px 6px #0000001a}.form-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{font-size:.9rem;padding:1rem;border-radius:.375rem}.form-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;color:#007bff;margin-bottom:1rem}.form-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:1.5rem}.form-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1rem;color:#495057;display:flex;align-items:center}.form-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:.5rem;color:#007bff}.form-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]{font-size:1rem;border:1px solid #ddd;border-radius:.375rem;padding:.5rem}.form-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .form-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus{border-color:#007bff;box-shadow:0 0 5px #007bff80}.form-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{display:flex;gap:1rem}.form-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{flex:1}.form-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1rem;padding:.75rem 1.5rem;background-color:#007bff;border:none;color:#fff;border-radius:.375rem}.form-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0062cc}.form-container[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;color:#007bff}.form-container[_ngcontent-%COMP%]   .sub-header[_ngcontent-%COMP%]{color:#007bff;font-size:1.25rem;font-weight:500}.form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:1.5rem}.form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;color:#495057}.form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#007bff}.form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]{border:1px solid #ddd;padding:.5rem;font-size:1rem;border-radius:.375rem}.form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus{border-color:#007bff;box-shadow:0 0 5px #007bff80}.form-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1.5rem}.form-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{flex:1 1 45%}.form-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1rem;padding:.75rem 1.5rem;border-radius:.375rem;background-color:#007bff;color:#fff;border:none}.form-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0062cc}"]})}}return r})()},{path:"update-request/:id",component:(()=>{class r{constructor(t,o,n,s,c,p){this.requestService=t,this.route=o,this.router=n,this.categoryService=s,this.supplierService=c,this.authService=p,this.errorMessage=[],this.updatedRequest={},this.request={},this.categories=[],this.supplier={},this.currentDate="",this.userId="",this.userId=this.authService.getToken()["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]}ngOnInit(){this.fetchRequest()}handleSubmit(){this.updatedRequest?this.requestService.updateRequest(this.updatedRequest).subscribe({next:t=>{this.router.navigate(["/views"])},error:t=>{console.log("Error updating request:",t.message),alert(`Failed to update the request: ${t.message}`)}}):console.error("Updated request data is missing")}fetchRequest(){const t=Number(this.route.snapshot.paramMap.get("id"));t&&!isNaN(t)?this.requestService.getRequestById(t).subscribe({next:o=>{if(o){this.request=o,this.updatedRequest={requestId:o.id,requestType:o.requestType,name:o.name,price:o.price,sku:o.sku,quantity:o.quantity,description:o.description,categoryId:o.categoryId,supplierId:o.supplierId,userId:o.userId,requestStatus:"Updated"},console.log("awdawdwadwadwa",this.request);const n=new Date(o.createdOn);this.currentDate=n.toISOString().slice(0,16),this.fetchCategories(),this.fetchSupplier()}else console.warn("Product not found.")},error:o=>{console.error("Error fetching product:",o)}}):console.warn("ID is required to fetch the product.")}isNotAddRequest(){return"Update Request"===this.updatedRequest.requestType||"Delete Request"===this.updatedRequest.requestType}fetchCategories(){this.categoryService.getCategories().subscribe(t=>{this.categories=t})}fetchSupplier(){this.updatedRequest.supplierId&&this.supplierService.getSupplierById(this.updatedRequest.supplierId).subscribe(t=>{this.supplier=t})}static{this.\u0275fac=function(o){return new(o||r)(e.rXU(C.B),e.rXU(l.nX),e.rXU(l.Ix),e.rXU(h.M),e.rXU(_.g),e.rXU(q.u))}}static{this.\u0275cmp=e.VBU({type:r,selectors:[["app-update-request"]],decls:36,vars:12,consts:[[1,"form-container","container","mt-5","p-4","shadow","rounded","bg-light"],[1,"form-header","text-center","mb-4"],[1,"text-primary"],[1,"fas","fa-clipboard-check"],[1,"mb-1","text-secondary"],[1,"fw-bold"],[1,"mb-3","text-secondary"],[1,"badge",3,"ngClass"],["class","error-messages alert alert-danger",4,"ngIf"],[1,"custom-form",3,"ngSubmit"],[1,"form-group","mb-3"],["for","requestType",1,"form-label"],[1,"fas","fa-file-alt"],["id","requestType","name","request_Type","disabled","",1,"form-select",3,"ngModel","ngModelChange"],["value","","disabled","","selected",""],["value","Add Request"],["value","Update Request"],["value","Delete Request"],[4,"ngIf"],[1,"text-center","mt-4"],["type","submit","class","btn btn-primary px-4 py-2",4,"ngIf"],[1,"error-messages","alert","alert-danger"],["class","error-item d-flex align-items-center mb-2",4,"ngFor","ngForOf"],[1,"error-item","d-flex","align-items-center","mb-2"],[1,"fas","fa-exclamation-circle","me-2"],["for","category",1,"form-label"],[1,"fas","fa-list"],["id","category","required","","name","product.requestType",1,"form-select",3,"disabled","ngModel","ngModelChange"],["disabled","","selected","",3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"form-group","border","rounded","p-3","shadow-sm","mb-3"],["for","supplier",1,"form-label"],[1,"fas","fa-truck","me-2","text-primary"],[1,"mt-2"],[1,"d-flex","align-items-center","mb-2"],[1,"fas","fa-user","me-2","text-secondary"],[1,"ms-2"],[1,"fas","fa-envelope","me-2","text-secondary"],[1,"ms-2","text-decoration-none","text-primary",3,"href"],[1,"d-flex","align-items-center"],[1,"fas","fa-phone-alt","me-2","text-secondary"],[1,"row","g-3"],[1,"col-md-6"],[1,"form-group"],["for","productName",1,"form-label"],[1,"fas","fa-tag"],["type","text","id","productName","placeholder","Enter product name","required","","name","productName",1,"form-control",3,"disabled","ngModel","ngModelChange"],["for","productPrice",1,"form-label"],[1,"fas","fa-dollar-sign"],["type","number","id","productPrice","placeholder","Enter product price","required","","name","price",1,"form-control",3,"disabled","ngModel","ngModelChange"],["for","sku"],[1,"fas","fa-barcode"],["type","text","id","sku","placeholder","Enter SKU","disabled","","name","sku",1,"form-control",3,"ngModel","ngModelChange"],["for","quantity"],[1,"fas","fa-sort-numeric-up"],["type","number","id","quantity","placeholder","Enter quantity","required","","name","quantity",1,"form-control",3,"ngModel","disabled","ngModelChange"],["for","createdOn"],[1,"fas","fa-calendar-alt"],["type","datetime-local","id","createdOn","disabled","true","name","createdOn",1,"form-control",3,"value"],[1,"form-group","mt-3"],["for","description",1,"form-label"],["id","description","rows","4","placeholder","Enter product description","name","description","required","",1,"form-control",3,"ngModel","disabled","ngModelChange"],[3,"value"],["type","submit",1,"btn","btn-primary","px-4","py-2"],[1,"fas","fa-paper-plane"]],template:function(o,n){1&o&&(e.j41(0,"div",0)(1,"div",1)(2,"h5",2),e.nrm(3,"i",3),e.EFF(4," Request "),e.k0s(),e.j41(5,"p",4),e.EFF(6," Request Status: "),e.j41(7,"span",5),e.EFF(8),e.k0s()(),e.j41(9,"p",6),e.EFF(10," Owner: "),e.j41(11,"span",5),e.EFF(12),e.k0s(),e.EFF(13," | Team: "),e.j41(14,"span",5),e.EFF(15),e.k0s()(),e.j41(16,"span",7),e.EFF(17),e.k0s()(),e.DNE(18,x,2,1,"div",8),e.j41(19,"form",9),e.bIt("ngSubmit",function(){return n.handleSubmit()}),e.j41(20,"div",10)(21,"label",11),e.nrm(22,"i",12),e.EFF(23," Select Request Type "),e.k0s(),e.j41(24,"select",13),e.bIt("ngModelChange",function(c){return n.updatedRequest.requestType=c}),e.j41(25,"option",14),e.EFF(26,"Choose a request type"),e.k0s(),e.j41(27,"option",15),e.EFF(28,"Add New Product"),e.k0s(),e.j41(29,"option",16),e.EFF(30,"Update Existing Product"),e.k0s(),e.j41(31,"option",17),e.EFF(32,"Delete Product"),e.k0s()()(),e.DNE(33,E,66,19,"div",18),e.j41(34,"div",19),e.DNE(35,S,3,0,"button",20),e.k0s()()()),2&o&&(e.R7$(8),e.JRh(n.request.requestStatus),e.R7$(4),e.JRh(n.request.user),e.R7$(3),e.SpI("",n.request.team," Team"),e.R7$(1),e.Y8G("ngClass",e.l_i(9,G,n.request.status,!n.request.status)),e.R7$(1),e.SpI(" ",n.request.status?"Active":"Inactive"," "),e.R7$(1),e.Y8G("ngIf",n.errorMessage.length>0),e.R7$(6),e.Y8G("ngModel",n.updatedRequest.requestType),e.R7$(9),e.Y8G("ngIf","Add Request"===n.updatedRequest.requestType||n.isNotAddRequest()&&void 0!==n.updatedRequest.sku),e.R7$(2),e.Y8G("ngIf",n.request.userId==n.userId||!1===n.request.status))},dependencies:[d.YU,d.Sq,d.bT,i.qT,i.xH,i.y7,i.me,i.Q0,i.wz,i.BC,i.cb,i.YS,i.vS,i.cV],styles:[".form-container[_ngcontent-%COMP%]{background:#fff;border-radius:10px;box-shadow:0 4px 10px #0000001a}.form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:600}.form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem;color:#6c757d}.form-container[_ngcontent-%COMP%]   .error-messages[_ngcontent-%COMP%]{border-radius:5px}.form-container[_ngcontent-%COMP%]   .error-messages[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#dc3545}.form-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:500;color:#495057}.form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border-radius:5px}.form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .form-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:#0d6efd;box-shadow:0 0 5px #0d6efd80}.form-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{border-radius:50px;font-size:.95rem}"]})}}return r})()}];let U=(()=>{class r{static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275mod=e.$C({type:r})}static{this.\u0275inj=e.G2t({imports:[l.iI.forChild($),l.iI]})}}return r})(),N=(()=>{class r{static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275mod=e.$C({type:r})}static{this.\u0275inj=e.G2t({imports:[d.MD,U,i.YN]})}}return r})()}}]);