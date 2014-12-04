Ext.define('Acer.store.Percent', {
    extend: 'Ext.data.Store',
    config: {
        autoLoad: true,
        pageSize: 99,
    	fields: ['value'],
    	data: [
        { "value": "0" },
        { "value": "20" },
        { "value": "40" },
        { "value": "60" },
        { "value": "80" },
        { "value": "100" }
	]
    }
});
