sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/bootcampWebapp/model/models",
	"sap/ui/bootcampWebapp/controller/LoginDialog",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, Device, models, LoginDialog, JSONModel) {
	"use strict";

	return UIComponent.extend("sap.ui.bootcampWebapp.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			this.loginDialog = new LoginDialog();
			this.getRouter().initialize();

			// disable batch grouping for v2 API of the northwind service
			this.getModel("invoice").setUseBatch(false);

			// set device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

		}
	});
});