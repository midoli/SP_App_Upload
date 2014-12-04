Ext.define('Acer.store.Photo', {
    extend: 'Ext.data.Store',
    requires: ['Acer.model.Photo', 'Ext.data.proxy.JsonP'],
    config: {
        autoLoad: true,
        pageSize: 100,
        model: 'Acer.model.Photo',
        proxy: {
            type: 'jsonp',
            url: Photo_Url,
            extraParams: {
                FolderUrl: '',
				type: ''
            },
            reader: {
                type: 'json',
                rootProperty: 'root'
            }
        }
    }
});
