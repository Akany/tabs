requirejs.config({
    baseUrl: '.',
    paths: {
        app: './scripts',
        template: './template',
        backbone: 'vendor/backbone',
        underscore: 'vendor/underscore',
        jquery: 'vendor/jquery',
        text: 'vendor/text'
    },
    shims: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
    }
});

define([
    'backbone',
    'app/controller/tabsController'
], function (Backbone) {

});