Ext.define('Acer.view.Item.ItemDetail', {
    extend: 'Ext.form.Panel',
    xtype: 'itemdetail',
	requires: ['Ext.ux.DisplayFieldComponent','Ext.ux.DisplayField'],
    config: {
        items: [{
            xtype: 'panel',
            name: 'detailtop'
        },
        {
            xtype: 'fieldset',
            defaults: {
                labelWidth: '100px'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: '識別碼',
					hidden: true
                },{
                    xtype: 'displayField',
                    name: '問題類別',
                    label: '問題類別'
                },{
                    xtype: 'displayField',
                    name: '標題',
                    label: '標題'
                },{
                    xtype: 'displayField',
                    name: '狀態',
                    label: '狀態'
                },{
                    xtype: 'displayField',
                    name: '專案類型',
                    label: '專案類型'
                },{
                    xtype: 'displayField',
                    name: '描述',
                    label: '描述'
                },
				{
					xtype: 'button',
					text: '送出',
					cls: 'btn_submit',
					width: '100%',
					handler: function(btn, e){
						/*var _form = btn.up('panel');
						Ext.util.JSONP.request({
							params: {
								id: _form.down('field[name=識別碼]').getValue()
							},
							method: 'Post',
							url: WS_Add_Url + '&list=項次',
							callbackKey: 'callback',
							scope: 'this',
							success: function(response) {
								if (response.success == true) {
									Ext.Msg.alert('送出成功!', '');
									var main = btn.up('panel').up('panel').up('panel');
									var store = Ext.getStore('Item');
									var task = Ext.create('Ext.util.DelayedTask', function () {
										store.loadPage(1);
										main.setActiveItem(0);
									});
									task.delay(1500);
								}
								else
									Ext.Msg.alert(response.error, '');
							}
						});
						*/
					}
				}]
        }
        ]
    }
});

