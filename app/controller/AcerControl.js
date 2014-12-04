Ext.define('Acer.controller.AcerControl', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            '#btn_ItemMenu':
            {
                //回項次選單
                tap: 'onItemMenu'
            },
            '#btn_ItemRefresh':
            {
				//項次列表重新整理
                tap: 'onListRefresh'
            },
            '#btn_ProcessAdd':
            {
				//切換至新增項次進度
                tap: 'onProcessAdd'
            },
            '#btn_ProcessDetail':
            {
				//切換至項次內容
                tap: 'onProcessDetail'
            },
            '#btn_Project':
            {
                //專案下拉選單
                tap: 'onProjectList'
            },
            '#btn_Status':
            {
                //狀態下拉選單
                tap: 'onStatusList'
            }
        }
    },
    onInquiryMenu: function () {
        window.history.back();
    },
	onItemMenu: function (btn) {
        var main = btn.up('panel').up('panel');
		main.setActiveItem(0);
		var store = Ext.getStore('Progress');
		var proxy = store.getProxy();
		proxy.config.extraParams.$filter = "項次Id%20eq%200";
		store.loadPage(1);
    },
	onProcessDetail: function (btn) {
        var main = btn.up('panel').up('panel');
		main.setActiveItem(1);
    },
	onProcessAdd: function (btn) {
        var main = btn.up('panel').up('panel');
		var detail = main.down('formpanel[xtype=processadd]');
		detail.down('field[name=識別碼]').setValue('');
		detail.down('field[name=項次進度]').setValue('');
		//detail.down('field[name=完成比Value]').setValue(0);
		detail.up('panel').down('toolbar').setTitle('新增進度');
		main.setActiveItem(3);
    },
    onListRefresh: function (btn) {
        var store = Ext.getStore('Progress');
        var store2 = Ext.getStore('Item');
        store.loadPage(1);
        store2.loadPage(1);
        var bottom = Ext.getCmp('itempanel').down('panel[docked=bottom]');
        var bottom2 = Ext.getCmp('progresspanel').down('panel[docked=bottom]');
        var bottom3 = Ext.getCmp('processaddpanel').down('panel[docked=bottom]');
        var bottom4 = Ext.getCmp('itemdetailpanel').down('panel[docked=bottom]');
        bottom.setHtml('<p>最後更新時間: <span class="date">' + Ext.Date.format(new Date(), 'Y/m/d H:i:s') + '</span></p>');
        bottom2.setHtml('<p>最後更新時間: <span class="date">' + Ext.Date.format(new Date(), 'Y/m/d H:i:s') + '</span></p>');
        bottom3.setHtml('<p>最後更新時間: <span class="date">' + Ext.Date.format(new Date(), 'Y/m/d H:i:s') + '</span></p>');
        bottom4.setHtml('<p>最後更新時間: <span class="date">' + Ext.Date.format(new Date(), 'Y/m/d H:i:s') + '</span></p>');
    },
    
    onProjectList: function (btn) {
        if (!this.ProjectOverlay) {
            this.ProjectOverlay = Ext.Viewport.add({
                xtype: 'panel',
                modal: true,
                hideOnMaskTap: true,
                width: 300,
                height: 280,
                left: 0,
                top: 0,
                layout: 'card',
                items: [
                    {
                        xtype: 'list',
						id: 'btnlist_Project',
                        store: 'Project',
                        cls: 'selectlist',
                        itemTpl: '<div style="width:100%;padding:5px;">{專案名稱}</div>',
                        listeners: {
                            itemtap: function (list, index, target, record) {
                                this.up('panel').show();
                                //更新頁面
                                var store = Ext.getStore('Item');
								var filterStr = "";
								
								if (record.data.識別碼 != 0)
									filterStr = "專案名稱Id eq " + record.data.識別碼;
								
								var statusStr = "";
								
								if (Ext.getCmp('btnlist_Status'))
								{
								if (Ext.getCmp('btnlist_Status').selected.items[0]){
								var Status = Ext.getCmp('btnlist_Status').selected.items[0].data.StatusName;
								switch (Status)
									{
										case "未完成": 
											statusStr = "廠商完成 eq false and PM驗收 eq false and 業務驗收 eq false";
										break;
										case "竣工": 
											statusStr = "廠商完成 eq true and PM驗收 eq false and 業務驗收 eq false";
										break;
										case "複核": 
											statusStr = "廠商完成 eq true and PM驗收 eq true and 業務驗收 eq false";
										break;
										case "驗收": 
											statusStr = "廠商完成 eq true and PM驗收 eq true and 業務驗收 eq true";
										break;
									}
								}
								}
								
								if (filterStr != "" && statusStr != "")
									filterStr = filterStr + " and " +  statusStr
								else if (filterStr == "")
									filterStr = statusStr;
									
								var txt_search = Ext.getCmp('txt_search').getValue();
								if (txt_search != "")
								{
									if (filterStr == "")
										filterStr += "(substringof('" + txt_search + "',項次) or substringof('" + txt_search + "',專案名稱/專案名稱))"
									else
										filterStr += " and (substringof('" + txt_search + "',項次) or substringof('" + txt_search + "',專案名稱/專案名稱))"
								}
								
								store.getProxy().config.extraParams.$filter = filterStr;
								Ext.getCmp('itempanel').down('list').setMasked({
									xtype: 'loadmask',
									message: 'Loading...'
								});
								
                                store.loadPage(1);
								this.up('panel').hide();
                                btn.setText(record.data.專案名稱 + ' ▼');
                            }
                        }
                    }]
            });
        }
		var list = this.ProjectOverlay.down('list');
		var store = list.getStore();
		if (store.find("專案名稱","全部專案") == -1)
			store.insert(0, {專案名稱: "全部專案", 識別碼: 0});
        this.ProjectOverlay.showBy(btn);
    },
	
	onStatusList: function (btn) {
        if (!this.StatusOverlay) {
			Ext.define('Status', {
				extend: 'Ext.data.Model',
				config: {
					fields: [
						{name: 'StatusName', type: 'string'}
					]
				}
			});
			var store =  Ext.create('Ext.data.Store', {
							model: 'Status',
							data : [
								{StatusName: '全部'},
								{StatusName: '未完成'},
								{StatusName: '竣工'},
								{StatusName: '複核'},
								{StatusName: '驗收'}
							]
						});
            this.StatusOverlay = Ext.Viewport.add({
                xtype: 'panel',
                modal: true,
                hideOnMaskTap: true,
                width: 300,
                height: 280,
                left: 0,
                top: 0,
                layout: 'card',
                items: [
                    {
                        xtype: 'list',
                        id: 'btnlist_Status',
						store: store,
                        cls: 'selectlist',
                        itemTpl: '<div style="width:100%;padding:5px;">{StatusName}</div>',
                        listeners: {
                            itemtap: function (list, index, target, record) {
                                this.up('panel').show();
								var viewstore = Ext.getStore('Item');
								var pro_store = Ext.getStore('Project');
								var filterStr = "";  
                                //更新頁面
                                if (record.data.StatusName == "全部")
									filterStr = "";
									//store.getProxy().config.extraParams.$filter = "";
								else {
									switch (record.data.StatusName)
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
									//store.getProxy().config.extraParams.$filter = "專案名稱Id%20eq%20" + record.data.識別碼;
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
								Ext.getCmp('itempanel').down('list').setMasked({
									xtype: 'loadmask',
									message: 'Loading...'
								});
                                viewstore.loadPage(1);
								
								this.up('panel').hide();
                                btn.setText(record.data.StatusName + ' ▼');
                            }
                        }
                    }]
            });
        }

        this.StatusOverlay.showBy(btn);
    }


});
          