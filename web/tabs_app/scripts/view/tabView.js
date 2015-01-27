/*global define*/
define([
	'backbone',
	'underscore',
	'text!template/tabTemplate.html'
], function (Backbone, _, template) {
	'use strict';

	return Backbone.View.extend({
		tagName: 'li',
		attributes: {
			role: 'presentation'
		},
		template: _.template(template),

		events: {
			'click a': 'onSelect'
		},

		initialize: function () {
			this.listenTo(this.model, 'change:selected', this.onSelectedChange)
		},

		render: function () {
			this.$el.html(this.template(this.model.attributes));

			return this;
		},

		onSelect: function () {
			this.model.set({
				selected: true
			});
		},

		onSelectedChange: function (model, value) {
			this.$el.toggleClass('active', value);
		}
	});
});