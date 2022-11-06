const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('goods_CategoryRelations', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        goods_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        category_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'goods_CategoryRelations'
    });
}
