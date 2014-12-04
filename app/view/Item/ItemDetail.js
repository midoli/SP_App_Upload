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
                    xtype: 'textfield',
                    name: '附件數',
					hidden: true
                },{
                    xtype: 'displayField',
                    name: '專案名稱',
                    label: '專案名稱'
                },{
                    xtype: 'displayField',
                    name: '項次',
                    label: '項次'
                },{
                    xtype: 'displayField',
                    name: '內容',
                    label: '內容'
                },{
                    xtype: 'displayField',
                    name: '客戶名稱',
                    label: '客戶名稱'
                },{
                    xtype: 'displayField',
                    name: '目標時限',
                    label: '目標時限'
                },{
                    xtype: 'displayField',
                    name: '負責業務',
                    label: '負責業務'
                },{
                    xtype: 'displayField',
                    name: '負責PM',
                    label: '負責PM'
                },{
                    xtype: 'displayField',
                    name: '合作廠商',
                    label: '合作廠商'
                },
				{
					xtype: 'checkboxfield',
					id: 'chk_company',
					name: '廠商完成',
					label: '廠商完成'
				},
				{
					xtype: 'checkboxfield',
					id: 'chk_pm',
					name: 'PM驗收',
					label: 'PM驗收'
				},
				{
					xtype: 'checkboxfield',
					id: 'chk_sales',
					name: '業務驗收',
					label: '業務驗收'
				},
				{
					xtype: 'button',
					text: '送出',
					cls: 'btn_submit',
					width: '100%',
					handler: function(btn, e){
						var _form = btn.up('panel');
						Ext.util.JSONP.request({
							params: {
								id: _form.down('field[name=識別碼]').getValue(),
								chkcom: _form.down('field[name=廠商完成]').getChecked(),
								chkpm: _form.down('field[name=PM驗收]').getChecked(),
								chksales: _form.down('field[name=業務驗收]').getChecked(),
								files: _form.down('field[name=附件數]').getValue()
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
									//task.cancel();
									
								}
								else
									Ext.Msg.alert(response.error, '');
							}
						});
					}
				}]
        }
        ]
    }
});

