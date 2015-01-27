/*global define*/
define([
	'backbone',
	'app/view/tabView'
], function (Backbone, TabView) {
	'use strict';

	return Backbone.View.extend({
		tagName: 'ul',
		className: 'nav nav-tabs',

		add: function (tab) {
			var tabView;

			tabView = new TabView({
				model: tab
			});

			this.$el.append(tabView.render().$el);
		},

		render: function () {
			var self = this;

			self.model.each(function (tabModel) {
				self.add(tabModel);
			});

			return this;
		}
	});
});