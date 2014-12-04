Ext.define('Acer.store.Project', {
    extend: 'Ext.data.Store',
    requires: ['Acer.model.Project', 'Ext.data.proxy.JsonP'],
    config: {
        autoLoad: true,
        pageSize: 100,
        model: 'Acer.model.Project',
        proxy: {
            type: 'jsonp',
            url: WS_Url,
            extraParams: {
                List: encodeURIComponent('專案'),
				$filter: ""
            },
            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }
    }
});
