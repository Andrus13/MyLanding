# MyLanding

Before you begin, you need to install:
- Node.js ( https://nodejs.org );
- local server ( I used OpenServer https://ospanel.io ); 

How to start!

Local server:
1. Start the server;
2. Add tables ( contactForm.sql, goodsCategory.sql, goodsList.sql, goods_CategoryRelations.sql ) to database;
3. Modify the index.js file (db/index.js) as needed;
```javascript
   const sequelize = new Sequelize(
     'My_Landing', // database name
     'root', // database login
     '', // database pass
     {
       dialect: "mysql", // database dialect
       host: "127.0.0.1" // database host
   });
``` 
Project:
1. Open the project folder in the development environment;
2. Modify the app.js file as needed ( in const http Server on line 39 you can specify the port on which the project will be available );
```javascript
   }).listen(3000, () =>{
```
3. Run the following commands in the console:
  - npm install ( install the required packages );
  - node app.js;
4. The project will be available in the browser at http://localhost:3000 ( if you haven't changed the port );
