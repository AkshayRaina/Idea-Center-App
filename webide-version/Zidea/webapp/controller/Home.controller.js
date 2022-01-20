sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.quinnoxZidea.controller.Home", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.quinnoxZidea.view.Home
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.quinnoxZidea.view.Home
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.quinnoxZidea.view.Home
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.quinnoxZidea.view.Home
		 */
		//	onExit: function() {
		//
		//	}
		
		ideaItem:function(oEvent){
		// console.log(oEvent.sId);
		// console.log(oEvent.mParameters.id);
		var index = oEvent.mParameters.id;
		var oHashChanger = sap.ui.core.routing.HashChanger.getInstance();
		switch(index){
			case "id_post": oHashChanger.setHash("Post"); break;
			case "id_view": oHashChanger.setHash("View"); break;
		}
	}
		
		

	});

});