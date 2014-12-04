Ext.define('Ext.ux.DisplayField', {
    extend: 'Ext.field.Field',
    xtype: 'displayField',
    requires: ['Ext.ux.DisplayFieldComponent'],
    config: {
        component: {
            xtype: 'displayFieldComponent'
        }
    },
    setValue: function(value) {
        this.getComponent().displayElement.setHtml(value);
        return this;
    }
});