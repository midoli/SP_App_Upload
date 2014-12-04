Ext.define('Ext.ux.DisplayFieldComponent', {
    extend: 'Ext.Component',
    xtype: 'displayFieldComponent',
    config: {
        cls: 'x-field-input'
    },
    getTemplate: function() {
        return [
            {
                reference: 'displayElement',
                tag: 'div',
                style: 'padding:10px'}
        ];
    }
});