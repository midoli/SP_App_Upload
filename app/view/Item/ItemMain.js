Ext.define('Acer.view.Item.ItemMain', {
    extend: 'Ext.Panel',
    id: 'itemmain',
    requires: [
		'Acer.view.Item.PhotoPanel',
        'Acer.view.Item.ItemPanel',
		'Acer.view.Item.ProgressPanel',
		'Acer.view.Item.ItemDetailPanel',
		'Acer.view.Item.ProcessAddPanel'
    ],
    config: {
        layout: 'card',
        activeItem: 0,
        items: [
        {
            xclass: 'Acer.view.Item.ItemPanel'
        },
		{
            xclass: 'Acer.view.Item.ProgressPanel'
        },
		{
            xclass: 'Acer.view.Item.ItemDetailPanel'
        },
		{
            xclass: 'Acer.view.Item.ProcessAddPanel'
        },
		{
            xclass: 'Acer.view.Item.PhotoPanel'
        }]
    }
});
