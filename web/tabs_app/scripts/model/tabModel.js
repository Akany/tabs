/*global define*/
define([
	'backbone'
], function (Backbone) {
	'use strict';

	return Backbone.Model.extend({
		idAttribute: 'id',

		defaults: {
			selected: false
		}
	});
});