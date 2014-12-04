Ext.define('Acer.view.Item.BottomPanel', {
    extend: 'Ext.Panel',
    xtype: 'bottompanel',

    config: {
        layout: 'fit',
        docked: 'bottom',
        html: '<p>最後更新時間: <span class="date">' + Ext.Date.format(new Date(), 'Y/m/d H:i:s') + '</span></p>'
    }
});