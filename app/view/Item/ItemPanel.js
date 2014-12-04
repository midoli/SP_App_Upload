Ext.define('Acer.view.Item.ItemPanel', {
    extend: 'Ext.Panel',
    id: 'itempanel',
    requires: [
        'Acer.view.Item.ItemList'
    ],
    config: {
        layout: 'fit',
        items: [
        {
            docked: 'top',
            xtype: 'toolbar',
            title: '項次列表',
            items: [{
                iconMask: true,
                iconCls: 'back',
                ui: 'back',
                id: 'btn_InquiryMenu',
				hidden: true
            },
            { xtype: 'spacer' },
            {
                iconMask: true,
                iconCls: 'refresh',
                id: 'btn_ItemRefresh'
            }]
        },
		{
			docked: 'top',
         	items: [
				{ xtype: 'spacer' },
				{
					xtype: 'searchfield',
					id: 'txt_search',
					placeHolder: '請輸入項次或專案名稱',
					width: '100%',
					cls: 'toolbar_search',
					listeners: {
                        blur: function (item, e, eOpts) {
								var viewstore = Ext.getStore('Item');
								var pro_store = Ext.getStore('Project');
								var filterStr = "";  
								if  (Ext.getCmp('btnlist_Status') != undefined)
								{
									switch (Ext.getCmp('btnlist_Status').selected.items[0].data.StatusName)
									{
										case "未完成": 
											filterStr = "廠商完成 eq false and PM驗收 eq false and 業務驗收 eq false";
										break;
										case "竣工": 
											filterStr = "廠商完成 eq true and PM驗收 eq false and 業務驗收 eq false";
										break;
										case "複核": 
											filterStr = "廠商完成 eq true and PM驗收 eq true and 業務驗收 eq false";
										break;
										case "驗收": 
											filterStr = "廠商完成 eq true and PM驗收 eq true and 業務驗收 eq true";
										break;
									}
								}
								var txt_search = Ext.getCmp('txt_search').getValue();
								if (txt_search != "")
								{
									if (filterStr == "")
										filterStr += "(substringof('" + txt_search + "',項次) or substringof('" + txt_search + "',專案名稱/專案名稱))"
									else
										filterStr += " and (substringof('" + txt_search + "',項次) or substringof('" + txt_search + "',專案名稱/專案名稱))"
								}
								
								if (viewstore.getProxy().config.extraParams.$filter.indexOf('專案名稱Id') == -1)
									viewstore.getProxy().config.extraParams.$filter = filterStr;
								else
								{
									var pid = Ext.getCmp('btnlist_Project').selected.items[0].data.識別碼;
									if (filterStr != "")
										filterStr = " and " + filterStr;
									viewstore.getProxy().config.extraParams.$filter = "專案名稱Id eq " + pid + filterStr;
								}	
                               //viewstore.loadPage(1);
								
								Ext.getCmp('itempanel').down('list').setMasked({
									xtype: 'loadmask',
									message: 'Loading...'
								});
								viewstore.loadPage(1,
									function(records, operation, success) {
									}
								);

                        }
                    }
				},
				{ xtype: 'spacer' }
			]
		},
		{
			docked: 'top',
         	xtype: 'panel',
			layout: 'hbox',
			items: [
				{
					xtype: 'button',
					text: '全部專案 ▼',
					cls: 'search',
					width: '65%',
					id: 'btn_Project'
				},
				{
					xtype: 'button',
					text: '全部 ▼',
					cls: 'search',
					width: '35%',
					id: 'btn_Status'
				}
			]
		},
        {
             xtype: 'Itemlist'
        },
        {
            xtype: 'bottompanel'
        }
        ]
    }
});