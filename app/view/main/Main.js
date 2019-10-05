/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainview',
    controller: 'main',

    viewModel: {
        type: 'mainviewmodel'
    },

    requires: [
        'MyApp.view.main.MainController',
        'ModernTunes.view.main.MainViewModel',
        'ModernTunes.view.TunesView'
    ],

    tabBarPosition: 'bottom',
    items: [{
        xtype: 'tunesview',
        title: "Thumbnails",

        bind: {
            store: '{tunes}'
        },

        listeners: {
            select: 'onThumbSelect'
        },

    }, {
        title: "Grid",
        xtype: 'tunesgrid',
        bind: {
            store: '{tunes}'
        },

        listeners: {
            select: 'onGridSelect'
        },
    }]
});
