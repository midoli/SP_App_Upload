Ext.define('Acer.view.Item.ProcessAdd', {
    extend: 'Ext.form.Panel',
    xtype: 'processadd',
    config: {
        items: [
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
                    name: '專案名稱Id',
					hidden: true
                },{
                    xtype: 'textfield',
                    name: '項次Id',
					hidden: true
                },{
                    xtype: 'textfield',
                    name: '廠商Id',
					hidden: true
                },{
                    xtype: 'textfield',
                    name: '負責PMId',
					hidden: true
                },{
                    xtype: 'textfield',
                    name: '負責業務Id',
					hidden: true
                },{
                    xtype: 'textareafield',
                    name: '項次進度',
                    label: '項次進度',
                    height: 120
                //},{
                //    xtype: 'selectfield',
                //    name: '完成比Value',
                //    label: '完成比',
                //    height: 60,
                //    store: 'Percent',
                //    displayField: 'value',
                //    valueField: 'value'
                },{
                    xtype: 'datepickerfield',
                    name: 'date',
                    label: '日期',
					hidden: true

                },{
					xtype: 'panel',
					layout: 'hbox',
					items: [{
						xtype: 'button',
						cls: 'btn_submit',
						text: '送出',
						handler: function(btn, e) {
							var _form = btn.up('panel').up('panel');
							Ext.Msg.confirm("確定送出？", "", function(answer) {
							if (answer == 'yes') {
        
							Ext.util.JSONP.request({
								params: {
									content: _form.down('field[name=項次進度]').getValue(),
									//val: _form.down('field[name=完成比Value]').getValue(),
									pid: _form.down('field[name=專案名稱Id]').getValue(),
									iid: _form.down('field[name=項次Id]').getValue(),
									cid: _form.down('field[name=廠商Id]').getValue(),
									pmid: _form.down('field[name=負責PMId]').getValue(),
									sid: _form.down('field[name=負責業務Id]').getValue(),
									id: _form.down('field[name=識別碼]').getValue()
								},
								method: 'Post',
								url: WS_Add_Url + '&list=項次進度',
								callbackKey: 'callback',
								scope: 'this',
								success: function(response) {
									if (response.success == true) {
										Ext.Msg.alert('送出成功!', '');
										var main = btn.up('panel').up('panel').up('panel').up('panel');
										var store = Ext.getStore('Progress');
										
										var task = Ext.create('Ext.util.DelayedTask', function () {
										store.loadPage(1);
										main.setActiveItem(1);
									});
										task.delay(1500); 
									}
									else
										Ext.Msg.alert('送出失敗!', '');
								}
							});
							
							}
							}, this);
						}
					}, {
						xtype: 'button',
						cls: 'btn_cancel',
						text: '取消',
						handler: function(btn, e) {
							var main = btn.up('panel').up('panel').up('panel').up('panel');
							main.setActiveItem(1);
						}
					}]
				}]
        }
        ]
    }
});

