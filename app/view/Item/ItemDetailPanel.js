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
					_id = btn.up('panel').down('textfield[name=識別碼]').getValue();
					_type = "I";
					var store = Ext.getStore('Photo');
					var proxy = store.getProxy();
					proxy.config.extraParams.FolderUrl = _id;
					proxy.config.extraParams.type = _type;
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