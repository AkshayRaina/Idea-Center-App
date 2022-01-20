sap.ui.jsview("zsap_idea.Post", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf zsap_idea.Post
	 */
	getControllerName : function() {
		return "zsap_idea.Post";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf zsap_idea.Post
	 */
	createContent : function(oController) {

		jQuery.sap.require("sap.ui.layout.form.ResponsiveGridLayout");
		jQuery.sap.require("sap.ui.layout.form.Form");
		jQuery.sap.require("sap.ui.layout.form.FormContainer");
		jQuery.sap.require("sap.ui.layout.form.FormElement");
		
		
		var oModel = new sap.ui.model.odata.ODataModel(domain + "/sap/opu/odata/sap/ZUI_RD_SRV/",false);
		
		var oTemplate = new sap.ui.core.ListItem('',{
			text: "{EmpName}"
		});
		
		var oName = new sap.m.ComboBox("nameId", {
			items: {
				path: "/Team_SAPSet",
				template: oTemplate
			},
			value: 'Select'
			
		});

		
		var oTitle = new sap.m.Input("titleId", {

		});
		
		var oDesc = new sap.m.TextArea("descId", {
			rows: 4
		});



		var oSubmitButton = new sap.m.Button({
			text : "Submit",
			width : "50%",
			type : sap.m.ButtonType.Emphasized,
			press : function() {
				oController.submit();
			}
		});
		var oClearButton = new sap.m.Button({
			text : "Clear",
			width : "50%",
			press : function() {
				sap.ui.getCore().byId('titleId').setValue('');
				sap.ui.getCore().byId('descId').setValue('');
				sap.ui.getCore().byId('nameId').setValue('');
			}
		});

		var oLayout1 = new sap.ui.layout.form.ResponsiveGridLayout();

		var oForm1 = new sap.ui.layout.form.Form({
			title : new sap.ui.core.Title({
				text : "Enter Idea Details",
				icon : "sap-icon://write-new-document",
				tooltip : "Enter Idea"
			}),
			editable : true,
			layout : oLayout1,
			formContainers : [

			new sap.ui.layout.form.FormContainer({
				formElements : [ 
				                 new sap.ui.layout.form.FormElement({
				                	label : new sap.m.Label({
				                		text : "Name",
				                		required : true
				                	}),
				                	fields : oName
				                }), 
				                new sap.ui.layout.form.FormElement({
				                	label : new sap.m.Label({
				                		text : "Title",
				                		required : true
				                	}),
				                	fields : oTitle
				                }),
				                new sap.ui.layout.form.FormElement({
				                	label : new sap.m.Label({
				                		text : "Description",
				                		required : true
				                	}),
				                	fields : oDesc
				                }),
				                new sap.ui.layout.form.FormElement({
				                	label : "",
				                	fields : []
				                }), 
				                new sap.ui.layout.form.FormElement({
				                	label : "",
				                	width : '50%',
				                	fields : [ oClearButton, oSubmitButton ]
				                }) ]
			}) ]
		});
		
		
		var oGridTiles = new sap.ui.layout.Grid({
			hSpacing : 1,
			vSpacing : 1,
			content : [ 
			new sap.m.Panel({
				content : [ oForm1 ],
				layoutData : new sap.ui.layout.GridData({
					span : "L7 M4 S12"
				}),
				headerToolbar: new sap.m.Toolbar({
					content: new sap.m.Button({
						icon: "sap-icon://nav-back",
						type: sap.m.ButtonType.Emphasized,
						press: [oController.onNavBack]
					})
				}),
			}), new sap.m.Image({
				src : "images/banner.png",
				width : "100%",
				layoutData : new sap.ui.layout.GridData({
					span : "L5 M8 S12"
				})
			}) ]
		});
		
		/*var oPage = new sap.m.Page({
			title: "",
			showNavButton : true,
			content: [
				oGridTiles
				],
			navButtonPress : function(){
					// alert("Here");
					oController.onNavBack();
				}
		});*/
		
		
		var id = sap.ui.getCore().byId('nameId');
		id.setModel(oModel);
		id.bindItems("/Team_SAPSet",oTemplate); 
		
		
		return oGridTiles;

	}
});