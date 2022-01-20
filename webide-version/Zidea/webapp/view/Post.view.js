sap.ui.jsview("com.quinnoxZidea.view.Post", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf com.quinnoxZidea.view.Post
	 */
	getControllerName: function() {
		return "com.quinnoxZidea.controller.Post";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf com.quinnoxZidea.view.Post
	 */
	createContent: function(oController) {
	
	}

});