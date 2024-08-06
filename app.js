const http = require('http');
const fs = require('fs');
const path = require('path');

const db = require('./db');
const { sequelize } = require('./db');
const contactForm = db.contactForm;
const goodsDB = db.goodsDB;
const port = process.env.PORT || 5000;

const httpServer = http.createServer( (req, res) => {
    console.log(`req: ${req.url}`);
    console.log(`method: ${req.method}`);
    
    if (req.url === '/'){
        sendRes('index.html', 'text/html', res);
    }
    else if (req.url.includes('/?info')) {
        let data = req.url.slice(6);
        getGoodsDescription(data, res);
    }
    else if (req.url.includes('/?')) {
        let data = req.url.slice(2);
        getGoods(data, res);
    }
    else if (req.url === '/save-form') {
        let body = "";
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(body);
            writeTodb(body, res);
        });
    }
    else {
        sendRes(req.url, getContentType(req.url), res);
    }

}).listen(process.env.PORT, () =>{
    console.log('server start ${process.env.PORT}');
});

function sendRes(url, contentType, res){
    let file = path.join(__dirname + '/static/', url);
    fs.readFile(file, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.write('file not found :(');
            res.end();
            console.log(`error 404 ${file}`);
        }
        else {
            res.writeHead(200, {'Content-Type': contentType});
            res.write(content);
            res.end();
            console.log(`res 200 ${file}`);
        };
    });
};

function getContentType(url) {
    switch (path.extname(url)) {
        case ".html":
            return "text/html";
        case ".css":
            return "text/css";
        case ".js":
            return "text/javascript";
        case ".json":
            return "application/json";  
        default:
            return "application/octate-stream";
    }
};

function writeTodb(data, res) {
    data = JSON.parse(data, true);
    console.log(data);
    contactForm.create({
        Тема: data['input-0'],
        Имя: data['input-1'],
        Email: data['input-2'],
        Телефон: data['input-3'],
        Комментарий: data['input-4'],
    })
        .then(result => {
            console.log(result);
            res.end('res 200 --------- ok');
        }).catch( err => {
            console.log(err);
            res.end('res 404 --------- error');
        })
};

function getGoods(data, res){
    data = data.split(',');
    console.log('get GOODS ----' + data);

    goodsDB.goodsCategory.findAll({
        include: goodsDB.goodsList,
        as: 'category',
        where: {
            category: data,
        },
        raw: true,
    })
        .then( goods => {
            let a = JSON.stringify(goods, null, 2);
            console.log('typeof ----' + typeof a);
            console.log('Goods ------------- '  + a);
            res.end(a);
        }).catch(err =>{
            console.log(err);
            res.end('res 404 --------- error');
        });
};

function getGoodsDescription(data, res){
    console.log('get DESCRIPTION ----' + data);

    goodsDB.goodsList.findAll({
        as: 'goods_id',
        where: {
            goods_id: data,
        },
        raw: true,
    })
        .then( goods => {
            let a = JSON.stringify(goods, null, 2);
            console.log('GoodsDES ------------- '  + a);
            res.end(a);
        }).catch(err =>{
            console.log(err);
            res.end('res 404 --------- error');
        });
};

    
