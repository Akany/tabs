/*global define*/
define([
	'backbone',
	'app/model/tabModel'
], function (Backbone, Model) {
	'use strict';

	return Backbone.Collection.extend({
		model: Model,

		url: 'mock/tabs.json',
		comparator: 'order'
	});
})