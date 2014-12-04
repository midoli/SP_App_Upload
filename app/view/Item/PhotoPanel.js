Ext.define('Acer.view.Item.PhotoPanel', {
    extend: 'Ext.Panel',
    id: 'photopanel',
    requires: [
        'Acer.view.Item.PhotoList'
    ],
    config: {
        layout: 'fit',
        items: [
        {
            docked: 'top',
            xtype: 'toolbar',
            title: '圖像列表',
            items: [{
                iconMask: true,
                iconCls: 'back',
                ui: 'back',
				cls: 'btn_back',
				handler: function(btn) {
					var main = btn.up('panel').up('panel');
					main.setActiveItem(2);
				}
            },
            { xtype: 'spacer' },
            {
                iconMask: true,
                iconCls: 'refresh',
                id: 'btn_ItemRefresh'
            },
			{
                iconMask: true,
                iconCls: 'camera',
				handler: function(btn) {
					navigator.camera.getPicture(
						uploadPhoto,
						function(message){
							alert('Failed because: ' + message);
						},
						{ 
						 quality: 30,
						 encodingType: Camera.EncodingType.PNG,
						 destinationType: Camera.DestinationType.FILE_URI  //DATA_URL
					});
				}
            }]
        },
        {
             xtype: 'Photolist'
        },
        {
            xtype: 'bottompanel'
        }
        ]
    }
});