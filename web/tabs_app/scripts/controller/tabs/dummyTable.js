/*global define*/
define([
	'backbone',
	'app/view/dummyTableView'
], function (Backbone, DummyView) {
	'use strict';

	var dummyView = new DummyView();

	return {
		getEl: function () {
			return dummyView.render().$el;
		}
	};
});