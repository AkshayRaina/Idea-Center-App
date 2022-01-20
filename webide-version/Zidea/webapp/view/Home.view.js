sap.ui.jsview("com.qZidea.view.Home", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf com.qZidea.view.Home
	 */
	getControllerName: function() {
		return "com.qZidea.controller.Home";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf com.qZidea.view.Home
	 */
	createContent: function(oController) {
		// Create the standard UI5 Tile container
		this.oTilesContainer = new sap.m.TileContainer();
		this.oTilesContainer.setHeight("100%");
		this.oTilesContainer.setVisible(true);
		// Creates and returns the Page to be shown by the view

		var oGridTiles = new sap.ui.layout.Grid({
			hSpacing: 1,
			vSpacing: 1,
			content: [
				new sap.ui.core.HTML({
					content: '<p class="aminty_title">NOW SUBMIT IDEAS FOR POC</p><br><br><br><p>This tool helps you in submitting ideas that can be converted into POCs</p><br><p>Kindly submit your ideas.</p>',
					width: "100%",
					layoutData: new sap.ui.layout.GridData({
						span: "L7 M4 S12"
					})
				}),
				new sap.m.Image({
					src: "img/idea1.png",
					width: "100%",
					layoutData: new sap.ui.layout.GridData({
						span: "L5 M8 S12"
					})
				})
			]
		});
		var oGridTile_s = new sap.ui.layout.Grid({
			hSpacing: 1,
			vSpacing: 1,
			content: [
				new sap.m.GenericTile("id_post", {
					headerImage: "sap-icon://user-edit",
					header: "Post Idea",
					subheader: "Think Tank",
					press: function(oEvent) {
						oController.ideaItem(oEvent);
					},
					layoutData: new sap.ui.layout.GridData({
						span: "L2 M4 S12"
					})
				}),
				new sap.m.GenericTile("id_view", {
					headerImage: "sap-icon://detail-view",
					header: "View Ideas",
					subheader: "Ideas Hub",
					press: function(oEvent) {
						oController.ideaItem(oEvent);
					},
					layoutData: new sap.ui.layout.GridData({
						span: "L2 M4 S12"
					})
				})
			]
		});
		var oPage = new sap.m.Page({
			title: "Idea",
			customHeader: new sap.m.Bar({
				contentLeft: new sap.m.Image({
					src: "img/idea4.png",
					width: "100px",
					height: "44px"
				}),
				contentRight: new sap.m.Image({
					src: "img/q-branding-logo.png",
					width: "120px",
					height: "30px"
				})
			}),
			content: [
				oGridTiles, oGridTile_s
			]
		});
		return oPage;
	}

});