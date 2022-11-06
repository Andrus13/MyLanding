const Sequelize = require('sequelize');

const sequelize = new Sequelize('My_Landing', 'root', '', {
    dialect: "mysql",
    host: "127.0.0.1"
});

const contactForm = require('./models/contactForm.model')(sequelize);

const goodsDB = {};

goodsDB.goodsList = require('./models/goodsList.model')(sequelize);
goodsDB.goodsCategory = require('./models/goodsCategory.model')(sequelize);
goodsDB.goods_CategoryRelations = require('./models/goods_CategoryRelations.model')(sequelize);

goodsDB.goodsCategory.belongsToMany(goodsDB.goodsList, {
  through: "goods_CategoryRelations",
  foreignKey: "category_id",
});
goodsDB.goodsList.belongsToMany(goodsDB.goodsCategory, {
  through: "goods_CategoryRelations",
  foreignKey: "goods_id",
});

module.exports = {
    sequelize: sequelize,
    contactForm: contactForm,
    goodsDB: goodsDB,
}




// sequelize.sync().then(result=>{
//     console.log(`res 200::----- ${result}`);
// })
//   .catch(err=> console.log(`err 404::----- ${err}`));