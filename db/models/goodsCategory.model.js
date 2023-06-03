const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('goodsCategory', {
        category_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        timestamps: false,
        tableName: 'goodsCategory'
    });
}