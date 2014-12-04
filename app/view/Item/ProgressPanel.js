Ext.define('Acer.view.Item.ProgressPanel', {
    extend: 'Ext.Panel',
    id: 'progresspanel',
    requires: [
        'Acer.view.Item.ProgressList'
    ],
    config: {
        layout: 'fit',
        items: [
        {
            docked: 'top',
            xtype: 'toolbar',
            title: '進度列表',
            items: [{
                iconMask: true,
                iconCls: 'back',
                ui: 'back',
                id: 'btn_ItemMenu'
            },
            { xtype: 'spacer' },
            {
                iconMask: true,
                iconCls: 'add',
				ui: 'add',
				id: 'btn_ProcessAdd'
            },
            {
                iconMask: true,
                iconCls: 'refresh',
                id: 'btn_ItemRefresh'
            }]
        },
        {
             xtype: 'ProgressList'
        },
        {
            xtype: 'bottompanel'
        }
        ]
    }
});