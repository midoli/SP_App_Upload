Ext.define('Acer.view.Item.ProcessAddPanel', {
    extend: 'Ext.Panel',
    id: 'processaddpanel',
    requires: [
        'Acer.view.Item.ProcessAdd',
		'Acer.view.Item.BottomPanel'
    ],
    config: {
        layout: 'fit',
        items: [
        {
            docked: 'top',
            xtype: 'toolbar',
            title: '新增進度',
            items: [{
                iconMask: true,
                iconCls: 'back',
                ui: 'back',
                id: 'btn_ProcessDetail'
            }]
        },
		{
             xtype: 'processadd'
        },
        {
            xtype: 'bottompanel'
        }
        ]
    }
});