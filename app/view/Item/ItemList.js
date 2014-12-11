Ext.define('Acer.view.Item.ItemList', {
    extend: 'Ext.List',
    xtype: 'Itemlist',
    config: {
        plugins: [
                    { xclass: 'Ext.plugin.PullRefresh',
                        pullRefreshText: '重新載入...',
                        loadingText: '載入資料中...',
                        releaseRefreshText: '重新載入...',
                        refreshFn: function (item) {
                            item.up('list').getStore().loadPage(1);
                            var bottom = item.up('panel').down('panel[docked=bottom]');
                            bottom.setHtml('<p>最後更新時間: <span class="date">' + Ext.Date.format(new Date(), 'Y/m/d H:i:s') + '</span></p>');
                        }
                    }
                ],
        store: 'Item',
        itemTpl: new Ext.XTemplate(
              '<div style="">',
			  '<div style="float: left; padding-right:10px; height: 60px; width: 60px">',
			  '</div>',
              '<div style="margin:0 60px;font-size:14px;">{標題}</div>',
              //'<div style="margin:0 60px;"><b>{項次}</b></div>',
			  '<div style="font-size:14px; margin:0 60px;">{建立者.全名}</div>',
              '</div>',
			  {
				getDate: function(date) {
					return new Date(parseInt(date.substr(6))).toLocaleDateString();
				}
			  }),
		/*onItemDisclosure: function (record, item, index, action) {
    		isLoad = true;
	        //取得物件
			var main = this.up('panel').up('panel');
			main.setActiveItem(1);
			
			var detail = main.down('formpanel[xtype=processadd]')
			//專案id
			detail.down('field[name=專案名稱Id]').setValue(record.data.專案名稱Id);
			//項次id
			detail.down('field[name=項次Id]').setValue(record.data.識別碼);
			//廠商id
			if (record.data.合作廠商 != null)
			detail.down('field[name=廠商Id]').setValue(record.data.合作廠商.識別碼);
			//負責PMid
			if (record.data.負責PM != null)
			detail.down('field[name=負責PMId]').setValue(record.data.負責PM.識別碼);
			//負責業務id
			if (record.data.負責業務 != null)
			detail.down('field[name=負責業務Id]').setValue(record.data.負責業務.識別碼);
					
			var store = Ext.getStore('Progress');
			var proxy = store.getProxy();
			proxy.config.extraParams.$filter = "項次Id%20eq%20" + record.data.識別碼;
			store.loadPage(1);
		},*/
		listeners: {
            itemtap: function (list, index, target, record, e, eOpts) {
				isLoad = true;
				if (e.target.getAttribute('class') != "x-list-disclosure ") {
					var main = list.up('panel').up('panel');
					main.setActiveItem(2);
					
					var detail = main.down('formpanel[xtype=itemdetail]');
					detail.setRecord(record);
					/*//專案名稱
					detail.down('field[name=專案名稱]').setValue(record.data.專案名稱.專案名稱);
					//附件數
					detail.down('field[name=附件數]').setValue(record.data.附件.results.length);
					//負責業務
					if (record.data.負責業務 != null)
					detail.down('field[name=負責業務]').setValue(record.data.負責業務.全名);
					//負責PM
					if (record.data.負責PM != null)
					detail.down('field[name=負責PM]').setValue(record.data.負責PM.全名);
					//合作廠商
					if (record.data.合作廠商 != null)
					detail.down('field[name=合作廠商]').setValue(record.data.合作廠商.全名);
					//客戶名稱
					if (record.data.專案名稱.客戶名稱 != null)
					detail.down('field[name=客戶名稱]').setValue(record.data.專案名稱.客戶名稱.客戶名稱);
					else
					detail.down('field[name=客戶名稱]').setValue('');
					
					//目標時限
					if (record.data.目標時限 != null)
					detail.down('field[name=目標時限]').setValue(new Date(parseInt(record.data.目標時限.substr(6))).toLocaleDateString());
					else
					detail.down('field[name=目標時限]').setValue('');
					*/
				}
            } 
        } 
    }
});