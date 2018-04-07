jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 UserCollection in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"CRUD/CRUD/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"CRUD/CRUD/test/integration/pages/App",
	"CRUD/CRUD/test/integration/pages/Browser",
	"CRUD/CRUD/test/integration/pages/Master",
	"CRUD/CRUD/test/integration/pages/Detail",
	"CRUD/CRUD/test/integration/pages/Create",
	"CRUD/CRUD/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "CRUD.CRUD.view."
	});

	sap.ui.require([
		"CRUD/CRUD/test/integration/MasterJourney",
		"CRUD/CRUD/test/integration/NavigationJourney",
		"CRUD/CRUD/test/integration/NotFoundJourney",
		"CRUD/CRUD/test/integration/BusyJourney",
		"CRUD/CRUD/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});