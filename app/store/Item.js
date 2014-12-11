Ext.define('Acer.store.Item', {
    extend: 'Ext.data.Store',
    requires: ['Acer.model.Item', 'Ext.data.proxy.JsonP'],
    config: {
        autoLoad: true,
        pageSize: 100,
        model: 'Acer.model.Item',
        proxy: {
            type: 'ajax',
            url: WS_Url + '問題追蹤',
			headers: { "Accept": "application/json;odata=verbose" },
            cache: false,
            extraParams: {
				$orderby: "修改時間 desc",
				$filter: ""
            },
            reader: {
                type: 'json',
                rootProperty: 'd.results'
            }
        }
    }
});
