Ext.define('Acer.view.MainItem', {
    extend: 'Ext.Container',
    requires: ['Acer.view.SplashItem'],

    id: 'viewport',

    config: {
        layout: {
            type: 'card'
        },
        fullscreen: true,
        items: [
            {
                xclass: 'Acer.view.SplashItem'
            }
        ],
    }
});
