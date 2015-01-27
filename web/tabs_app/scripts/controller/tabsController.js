/*global define*/
define([
	'app/collection/tabsCollection',
	'app/view/tabsView',
	'app/router/tabsRouter',
	'require'
], function (TabsCollection, TabsView, TabsRouter, localRequire) {
	'use strict';

	var tabsCollection = new TabsCollection(),
		tabsView,
		tabsContainer,
		tabContent,
		tabsRouter,
		selectedModel;

	function onSelectedChange(model, value) {
		if (!value) {
			return;
		}

		if (selectedModel) {
			selectedModel.set({selected: false});
		}

		selectedModel = model;
	}

	function onTabsLoaded(tabs) {
		tabsRouter.route('*path', function () {
			tabsRouter.navigate(tabs.at(0).get('id'), {trigger: true, replace: true});
		});
		tabs.each(function (tabModel) {
			var route = tabModel.get('id');

			tabsRouter.route(route, route, routeProxy(tabModel));
		});

		tabsContainer.append(tabsView.render().$el);
		Backbone.history.start();
	}

	function routeProxy(tabModel) {
		return function () {
			tabModel.set({selected: true});
			tabContent.children().remove();
			showTab(tabModel.get('path'));
		}
	}

	function showTab(tabPath) {
		var base = require.toUrl('app/controller/');

		require([base + tabPath], function (tabController) {
			var el = tabController.getEl();

			tabContent.append(el);
		});
	}

	function onRouteChange() {
		console.log(arguments);
	}

	tabsRouter = new TabsRouter();
	tabsRouter.on('change', onRouteChange);
	tabContent = $('#tab-content');
	tabsContainer = $('#tabs-container');

	tabsView = new TabsView({
		model: tabsCollection
	});

	tabsCollection.fetch({
		success: onTabsLoaded
	});
	tabsCollection.on('change:selected', onSelectedChange);
});