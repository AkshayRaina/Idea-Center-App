sap.ui.controller("zsap_idea.View", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zsap_idea.View
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zsap_idea.View
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zsap_idea.View
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zsap_idea.View
*/
//	onExit: function() {
//
//	}
	
	onNavBack: function(){
		

		var shellLayout = new sap.ui.getCore().byId("shellLayout");

		
		shellLayout.destroy();
		
		
		var Home = sap.ui.getCore().byId('Home');
		if (Home == undefined) {
			Home = new sap.ui.view({
				id: "Home",
				viewName: "zsap_idea.Home",
				type: sap.ui.core.mvc.ViewType.JS,
				clearTarget: true,
				targetAggregation: "content"
			});
		}

		shellLayout.removeAllContent();
		shellLayout.addContent(Home);

		return shellLayout;
		

		
	}

});