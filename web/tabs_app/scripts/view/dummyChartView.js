/*global define*/
define([
	'backbone'
], function (Backbone) {
	'use strict';

	return Backbone.View.extend({
		render: function () {
			this.$el.html('some chart');

			return this;
		}
	});
});