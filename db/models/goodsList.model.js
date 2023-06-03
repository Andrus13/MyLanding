const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('goodsList', {
        goods_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        model: {
            type: Sequelize.STRING,
            allowNull: false
        },
        weight: {
            type: Sequelize.STRING,
            allowNull: false
        },
        volume: {
            type: Sequelize.STRING,
            allowNull: false
        },
        power: {
            type: Sequelize.STRING,
            allowNull: false
        },
        info: {
            type: Sequelize.STRING,
            allowNull: false
        },
        img_href: {
            type: Sequelize.STRING(1000),
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'goodsList'
    });
};


