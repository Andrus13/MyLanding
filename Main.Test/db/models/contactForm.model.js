const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('contactForm', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        Тема: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Имя: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Телефон: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Комментарий: {
            type: Sequelize.STRING(300),
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'contactForm'
    });
}
