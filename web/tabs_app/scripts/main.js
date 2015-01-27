requirejs.config({
    paths: {
        tabs: './scripts',
        vendor: '../vendor',
        backbone: '../vendor/backbone',
        underscore: '../vendor/underscore',
        jquery: '../vendor/jquery'
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
    'backbone'
], function (Backbone) {

});