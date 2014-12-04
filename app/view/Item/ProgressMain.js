Ext.define('Acer.view.Item.ProgressMain', {
    extend: 'Ext.Panel',
    id: 'progressmain',
    requires: [
        'Acer.view.Item.ProgressPanel'
    ],
    config: {
        layout: 'card',
        activeItem: 0,
        items: [
        {
            xclass: 'Acer.view.Item.ProgressPanel'
        }]
    }
});
