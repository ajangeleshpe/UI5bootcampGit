sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("sap.ui.bootcampWebapp.controller.LoginPanel", {
		onLoginPress: function() {
			var msgString;
			var oUsernameField = this.getView().byId("username");
			var oPasswordField = this.getView().byId("password");
			var username = "user123";
			var password = "pass123";

			if (oUsernameField.getValue() === "" && oPasswordField.getValue() === "") {
				msgString = "Username and Password are empty.";
			} else if (!(oUsernameField.getValue().length >= 6 && oUsernameField.getValue().length <= 8)) {
				msgString = "Username must be 6 to 8 characters ONLY.";
			} else if (!(oPasswordField.getValue().length >= 7 && oPasswordField.getValue().length <= 10)) {
				msgString = "Password must be 7 to 10 characters ONLY.";
			} else if (oUsernameField.getValue() === username && oPasswordField.getValue() === password) {
				msgString = "Login Successfully.";
			} else {
				msgString = "Invalid credentials.";
			}

			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/field/username");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			MessageToast.show(sMsg + ". " + msgString);
			// MessageToast.show(msgString);
		},

		// _getDialog: function() {
		// 	if (!this._oDialog) {
		// 		this._oDialog = sap.ui.xmlfragment("sap.ui.bootcampWebapp.view.LoginDialog", this);
		// 		this.getView().addDependent(this._oDialog);
		// 	}
		// 	return this._oDialog;
		// },

		onOpenDialog: function() {
			// this._getDialog().open();
			this.getOwnerComponent().loginDialog.open(this.getView());
		}

		// onCloseDialog: function() {
		// 	this._getDialog().close();
		// }

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui.bootcampWebapp.view.LoginPanel
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui.bootcampWebapp.view.LoginPanel
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.bootcampWebapp.view.LoginPanel
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.bootcampWebapp.view.LoginPanel
		 */
		//	onExit: function() {
		//
		//	}

	});

});