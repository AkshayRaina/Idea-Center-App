sap.ui.controller("zsap_idea.Post", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zsap_idea.Post
*/
	onInit: function() {
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zsap_idea.Post
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zsap_idea.Post
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zsap_idea.Post
*/
//	onExit: function() {
//
//	}
	
	onNavBack: function() {

		debugger;
		
		/*var Home = sap.ui.getCore().byId("homeId");
		
		if (Home == undefined) {
			Home = new sap.ui.view({
				id: "homeId",
				viewName: "zsap_idea.Home",
				type: sap.ui.core.mvc.ViewType.JS,
				
			});
		}

		var temp =  sap.ui.getCore().byId("Post")
		
		temp.removeAllContent();
		temp.addContent(Home);

		return temp;*/
		
		
		
		
		
		
		
		
		
		/*var index = "Home";
		var oHashChanger = sap.ui.core.routing.HashChanger.getInstance();
		switch(index){
			case "Home": oHashChanger.setHash(""); break;
		}*/
		
		
		
		/*var History = new sap.ui.core.routing.History({
			
		});
		
		History = this.getInstance();
		
		var oHistory = History.getInstance();
		var sPreviousHash = oHistory.getPreviousHash();

		if (sPreviousHash !== undefined) {
			window.history.go(-1);
		} else {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Home", true);
		}*/
	},
	
	
	submit: function(){
		
		debugger;
		
		jQuery.sap.require("sap.m.MessageBox");
		
		var title = sap.ui.getCore().byId('titleId').getValue();
		title = title.toUpperCase();
		
		var desc = sap.ui.getCore().byId('descId').getValue();
		
		var name = sap.ui.getCore().byId('nameId').getValue();
		
		if(title !== "" && desc !== "" && name !== ""){
			

			
			var service = domain + "/sap/opu/odata/sap/ZUI_RD_SRV";
			
			var oModel = new sap.ui.model.odata.ODataModel(service);
			
			var header_xcsrf_token = null;
			
			oModel.setHeaders({
				 "X-Requested-With": "XMLHttpRequest",
		         "Content-Type": "application/atom+xml",
		         "DataServiceVersion": "2.0",
		         "Accept": "application/atom+xml,application/atomsvc+xml,application/xml",
		     //  "X-CSRF-Token": header_xcsrf_token 
			})
			
			var requestBody = {};
			requestBody.EmpName = name;
			requestBody.Title = title;
			requestBody.Description = desc;
			
			oModel.create('/Ideas_listSet',requestBody,null, function(response){
				
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show("Idea Submitted Successfully.",{
					icon: sap.m.MessageBox.Icon.SUCCESS,
					title: "Success"
					}
				);
				
				sap.ui.getCore().byId('titleId').setValue('');
				sap.ui.getCore().byId('descId').setValue('');
				sap.ui.getCore().byId('nameId').setValue('');
				
				
			}.bind(this),
			function(error){
				//console.log(error);
				sap.m.MessageBox.show("Error while entering idea. Please try again.",{
					icon: sap.m.MessageBox.Icon.ERROR,
					title: "Error."
				}
				);
			})
			
		}else{
			sap.m.MessageBox.show("Please fill all the mandatory fields.",{
				icon: sap.m.MessageBox.Icon.INFORMATION,
				title: "Information"
				}
			);	
		}	
	}
	
	

});