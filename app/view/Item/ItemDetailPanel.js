Ext.define('Acer.view.Item.ItemDetailPanel', {
    extend: 'Ext.Panel',
    id: 'itemdetailpanel',
    requires: [
        'Acer.view.Item.ItemDetail'
    ],
    config: {
        layout: 'fit',
        items: [
        {
            docked: 'top',
            xtype: 'toolbar',
            title: '項次內容',
            items: [{
                iconMask: true,
                iconCls: 'back',
                //ui: 'back',
				id: 'btn_ItemMenu'
            },{ xtype: 'spacer' },
            {
                iconMask: true,
                //iconCls: 'add',
				//ui: 'add',
				text: 'Picture',
				id: 'btn_ItemPhoto',
				handler: function(btn) {
					var id = btn.up('panel').down('textfield[name=識別碼]').getValue();
					var store = Ext.getStore('Photo');
					var proxy = store.getProxy();
					proxy.config.extraParams.FolderUrl = id;
					proxy.config.extraParams.type = "I";
					store.load();
					var main = btn.up('panel').up('panel');
					main.setActiveItem(4);
				}
            }]
        },
		{
             xtype: 'itemdetail'
        },
        {
            xtype: 'bottompanel'
        }
        ]
    }
});