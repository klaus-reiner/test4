jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"CRUD/CRUD/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"CRUD/CRUD/test/integration/pages/App",
	"CRUD/CRUD/test/integration/pages/Browser",
	"CRUD/CRUD/test/integration/pages/Master",
	"CRUD/CRUD/test/integration/pages/Detail",
	"CRUD/CRUD/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "CRUD.CRUD.view."
	});

	sap.ui.require([
		"CRUD/CRUD/test/integration/NavigationJourneyPhone",
		"CRUD/CRUD/test/integration/NotFoundJourneyPhone",
		"CRUD/CRUD/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});