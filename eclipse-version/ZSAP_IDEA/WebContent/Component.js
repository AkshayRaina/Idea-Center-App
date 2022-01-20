jQuery.sap.declare("com.q.zsap_idea.Component");
sap.ui.core.UIComponent.extend("com.q.zsap_idea.Component",{
	metadata:{
		routing:{
			config:{
				viewType:"JS",
				viewPath:"zsap_idea",
				pattern:"/Home",
				targetControl:"shellLayout",
//				targetAggregation:"content",
//				targetAggregation:"content",
				clearTarget:false,
			},
			routes:[
			        {
			        	pattern:"/Home",
			        	name:"Home",
			        	view:"Home",
			        	clearTarget:true,
			        	targetAggregation:"content"
			        },
			        {
			        	pattern:"/Post",
			        	name:"Post",
			        	view:"Post",
			        	clearTarget:true,
			        	targetAggregation:"content"
			        },
			        {
			        	pattern:"/View",
			        	name:"View",
			        	view:"View",
			        	clearTarget:true,
			        	targetAggregation:"content"
			        }
			]
		}
	},
	
	init:function(){
		
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		jQuery.sap.require("sap.ui.core.routing.HashChanger");
		
		sap.ui.core.UIComponent.prototype.init.apply(this,arguments);
		
		this._routeHandler = new sap.m.routing.RouteMatchedHandler(this.getRouter());
		this.getRouter().initialize();
	},
	createContent:function(){
		var oView = sap.ui.view({
			id:"homeId", 
			viewName:"zsap_idea.Home", 
			type:sap.ui.core.mvc.ViewType.JS,
			viewData:{component:this}
		});
		
		return oView;
	}
});