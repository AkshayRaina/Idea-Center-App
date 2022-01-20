sap.ui.jsview("zsap_idea.View", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf zsap_idea.View
	 */
	getControllerName : function() {
		return "zsap_idea.View";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf zsap_idea.View
	 */
	createContent : function(oController) {

		jQuery.sap.require("sap.ui.layout.form.ResponsiveGridLayout");
		jQuery.sap.require("sap.ui.layout.form.Form");
		jQuery.sap.require("sap.ui.layout.form.FormContainer");
		jQuery.sap.require("sap.ui.layout.form.FormElement");

		debugger
		var oModel = new sap.ui.model.odata.ODataModel(domain + "/sap/opu/odata/sap/ZUI_RD_SRV/",false);

		
		var oTemplate = new sap.m.ColumnListItem({
			visible: true,
			selected: true,
			cells: [
				new sap.m.Text({
					text: "{EmpName}"
				}),
				new sap.m.Text({
					text: "{Title}"
				}),
				new sap.m.Text({
					text: "{Description}"
				})
			]
		});
		
		var oTable = new sap.m.Table("tableId", {
			title : 'Ideas List',
			editable : false,
			growing : true,
			growingThreshold : 5,
			growingScrollToLoad : true,
			columns : [ 
			           new sap.m.Column({
			        	   header : [ new sap.m.Label({
			        		   text : "Name"
			        	   }) ]
			           }),
			           new sap.m.Column({
			        	   header : [ new sap.m.Label({
			        		   text : "Title"
			        	   }) ]
			           }), 
			           new sap.m.Column({
			        	   rows: 2,
			        	   header : [ new sap.m.Label({
			        		   text : "Description"
			        	   }) ]
			           })
			           ]
		});
		
		oTable.setModel(oModel);
		oTable.bindItems("/Ideas_listSet",oTemplate, null)

		var oGridTiles = new sap.ui.layout.Grid({
			hSpacing : 1,
			vSpacing : 1,
			content : [ 
			           new sap.m.Panel({
			        	   content : [ oTable ],
			        	   layoutData : new sap.ui.layout.GridData({
			        		   span : "L12 M12 S12"
			        	   }),
			        	   headerToolbar : new sap.m.Toolbar({
			        		   content : new sap.m.Button({
			        			   icon : "sap-icon://nav-back",
			        			   type : sap.m.ButtonType.Emphasized,
			        			   press : [ oController.onNavBack ]
			        		   })
			        	   }),
			           }), 
			           /*new sap.m.Image({
			        	   src : "images/banner.png",
			        	   width : "100%",
			        	   layoutData : new sap.ui.layout.GridData({
			        		   span : "L5 M8 S12"
			        	   })
			           })*/
			           ]
		});

		return oGridTiles;

	}

});