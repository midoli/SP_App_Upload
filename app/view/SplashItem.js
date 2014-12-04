Ext.define('Acer.view.SplashItem', {
    extend: 'Ext.Container',
    id: 'splashScreen',
    requires: [
        'Acer.view.Item.ItemMain'
    ],

    config: {
        layout: {
            type: 'card'
        },
        activeItem: 0,
        items: [
        {
            xclass: 'Acer.view.Item.ItemMain'
        }
        ]
    }
});
