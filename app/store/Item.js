Ext.define('Acer.store.Item', {
    extend: 'Ext.data.Store',
    requires: ['Acer.model.Item', 'Ext.data.proxy.JsonP'],
    config: {
        autoLoad: true,
        pageSize: 100,
        model: 'Acer.model.Item',
        proxy: {
            type: 'jsonp',
            url: WS_Url,
            extraParams: {
                List: '項次',
				$orderby: "修改時間 desc",
				$expand: "專案名稱/客戶名稱,負責業務,負責PM,合作廠商,附件",
				$filter: ""
            },
            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }
    }
});
