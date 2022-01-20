sap.ui.jsview("zsap_idea.Home", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zsap_idea.Home
	*/ 
	getControllerName : function() {
		return "zsap_idea.Home";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zsap_idea.Home
	*/ 
	createContent : function(oController) {
 		

		domain = "proxy/http/bglr-sapsrv01.q.corp:8000";
		
		
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
					content: '<p class="aminty_title">SAP IDEA CENTRE</p><br><br><br><p>This tool helps you in submitting ideas that can be converted into POCs</p><br><p>Kindly submit your ideas.</p>',
					width: "100%",
					layoutData: new sap.ui.layout.GridData({
						span: "L7 M4 S12"
					})
				}),
				new sap.m.Image({
					src: "images/banner.png",
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
//		var oPage = new sap.m.Page("pageId1",{
//			title: "Idea",
//			customHeader: new sap.m.Bar({
//				contentLeft: new sap.m.Image({
//					src: "images/idea4.png",
//					width: "100px",
//					height: "44px"
//				}),
//				contentRight: new sap.m.Image({
//					src: "images/q-branding-logo.png",
//					width: "120px",
//					height: "30px"
//				})
//			}),
//			content: [
//				oGridTiles, oGridTile_s
//			]
//		});
//		return oPage;
		
		
		var oShell = new sap.ui.unified.Shell('shellLayout',{
			showPane:false,
			icon:"images/q-branding-logo.png",
			headerHeading:'Customer Care',
			headerVisible:true,
			searchVisible:true,
			paneContent:[],
			content:[oGridTiles, oGridTile_s],
			
		});
		
		
		
		var oShellUserItem = new sap.ui.unified.ShellHeadUserItem('userItem',{
//			username:'q',
//			showPopupIndicator:true,
//			image:"sap-icon://user"
		});
		
		var oShellHeadItem = new  sap.ui.unified.ShellHeadItem('menuItem',{
			icon:"sap-icon://menu2",
			showSeparator:false,
//			press:function(){
//				if(oShell.getShowPane()){
//					oShell.setShowPane(false);
//				}else{
//					oShell.setShowPane(true);
//				}
//			}
		});
	
			var oShellHeadEndItem = new  sap.ui.unified.ShellHeadItem('logout',{
			icon:"sap-icon://log",
			showSeparator:true,
			press:function(){}
		});

	//end of code
		
		oShell.addHeadItem(oShellHeadItem);
//		oShell.setUser(oShellUserItem);
		oShell.addHeadEndItem(oShellHeadEndItem);
//		oShell.addContent(detailsLayout);

		return oShell;

	
	}

});