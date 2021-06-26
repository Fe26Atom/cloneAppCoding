module.exports = (sequlize, DataTypes) => {
    const ShopsMenu = sequlize.define('ShopsMenu',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoINcrement: true },
            name : { type: DataTypes.STRING , comment: '메뉴명' },
            price : { type: DataTypes.INTEGER, comment: '가격' }
        },{
            tableName: 'ShopsMenu'
        }
    );
    return ShopsMenu;
}

