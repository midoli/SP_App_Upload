Ext.define('Acer.view.Item.PhotoList', {
    extend: 'Ext.List',
    xtype: 'Photolist',
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
        store: 'Photo',
        itemTpl: new Ext.XTemplate(
			  '<table width="100%">',
			  '<tr><td width="95%" colspan="2"><b>{LinkFilename}</b></td><td width="5%" align="right" style="font-size:14px;"></td></tr>',
			  '</table>'),
		listeners: {
            itemtap: function (list, index, target, record, e, eOpts) {
					window.open(Site_Url + record.data.FolderUrl + "/" +record.data.LinkFilename, '_blank', 'location=yes');
					/*var main = list.up('panel').up('panel');
					var detail = main.down('formpanel[xtype=processadd]');
					detail.setRecord(record);
					detail.up('panel').down('toolbar').setTitle('項次進度');
					main.setActiveItem(3);
					*/
                } 
            } 
        }
});