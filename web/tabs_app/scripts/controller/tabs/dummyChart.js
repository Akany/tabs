/*global define*/
define([
	'backbone',
	'app/view/dummyChartView'
], function (Backbone, DummyView) {
	'use strict';

	var dummyView = new DummyView();

	return {
		getEl: function () {
			return dummyView.render().$el;
		}
	};
});