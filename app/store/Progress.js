Ext.define('Acer.store.Progress', {
    extend: 'Ext.data.Store',
    requires: ['Acer.model.Progress', 'Ext.data.proxy.JsonP'],
    config: {
        autoLoad: true,
        pageSize: 100,
        model: 'Acer.model.Progress',
		proxy: {
            type: 'jsonp',
            url: WS_Url,
            extraParams: {
                List: '項次進度',
				$filter: "識別碼 eq 1",
				$orderby: "修改時間 desc"
            },
            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }
    }
});
