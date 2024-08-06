const Sequelize = require('sequelize');

// const sequelize = new Sequelize('My_Landing', 'root', '', {
//     dialect: "mysql",
//     host: "127.0.0.1"
// });
const connString = process.env.DATABASE_URL || 'postgres://u3qs4tv3v45h6m:pfd9b37cdecab5bfe6bca38bb0c1735dc91e8cf1f7d9f76921692a60707c15e01@c3l5o0rb2a6o4l.cluster-czz5s0kz4scl.eu-west-1.rds.amazonaws.com:5432/d63tlanmbqi1j0'
;

sequelize = new Sequelize(connString, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
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
