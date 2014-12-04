Ext.define('Acer.view.Item.ItemDetailEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'itemdetailedit',
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
                    xtype: 'textareafield',
                    name: '專案名稱',
                    label: '專案名稱',
                    height: 60,
                    readOnly: true
                },{
                    xtype: 'textfield',
                    name: '項次',
                    label: '項次',
                    height: 60,
                    readOnly: true
                },{
                    xtype: 'textareafield',
                    name: '內容',
                    label: '內容',
                    height: 60,
                    readOnly: true
                },{
                    xtype: 'textfield',
                    name: '目標時限',
                    label: '目標時限',
                    height: 60,
                    readOnly: true
                },{
                    xtype: 'textfield',
                    name: '負責業務',
                    label: '負責業務',
                    height: 60,
                    readOnly: true
                },{
                    xtype: 'textfield',
                    name: '負責PM',
                    label: '負責PM',
                    height: 60,
                    readOnly: true
                },{
                    xtype: 'textfield',
                    name: '合作廠商',
                    label: '合作廠商',
                    height: 60,
                    readOnly: true
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
				}]
        }
        ]
    }
});

