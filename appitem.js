Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false
});

Ext.application({
    fullscreen: true,
    name: 'Acer',
    views: [
        'MainItem'
    ],
    controllers: [
        'AcerControl'
    ],
    stores: [
        'Item',
		'Progress',
		'Project',
		'Percent',
		'Photo'
    ],
    launch: function () {
        Ext.create('Acer.view.MainItem');
    }
});
