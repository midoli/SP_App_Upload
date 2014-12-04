Ext.define('Acer.view.Item.ProgressList', {
    extend: 'Ext.List',
    xtype: 'ProgressList',
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
        store: 'Progress',
        itemTpl: new Ext.XTemplate(
			  '<table width="100%">',
			  '<tr><td width="95%" colspan="2"><b>{項次進度}</b></td><td width="5%" align="right" style="font-size:14px;"></td></tr>',
			  '<tr><td style="font-size:14px;"><tpl for="."><tpl if="values.更新人員.全名 != null">{更新人員.全名}</tpl></tpl></td><td colspan="2" align="right" width="50%" style="font-size:14px;">{[this.getDate(values.更新時間)]}</td></tr>',
			  '</table>',
			  {
				getDate: function(date) {
					//return new Date(parseInt(date.substr(6))).toLocaleDateString();
					return new Date(date).toLocaleDateString();
				}
			  }),
		listeners: {
            itemtap: function (list, index, target, record, e, eOpts) {
					var main = list.up('panel').up('panel');
					var detail = main.down('formpanel[xtype=processadd]');
					detail.setRecord(record);
					detail.up('panel').down('toolbar').setTitle('項次進度');
					main.setActiveItem(3);
                } 
            } 
        }
});