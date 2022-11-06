const http = require('http');
const fs = require('fs');
const path = require('path');

const db = require('./db');
const { sequelize } = require('./db');
const contactForm = db.contactForm;
const goodsDB = db.goodsDB;

const httpServer = http.createServer( (req, res) => {
    console.log(`req: ${req.url}`);
    if (req.url === '/'){
        sendRes('index.html', 'text/html', res);
    }
    else if (req.url === '/export-values') {
        let body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('!!!!------------- ' + body);
            getGoods(body, res);
        });
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

}).listen(3000, () =>{
    console.log('server start 3000');
    // getGoods();
});

function sendRes(url, contentType, res){
    let file = path.join(__dirname + '/static/', url);
    fs.readFile(file, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.write('file not found');
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
            console.log('Goods ------------- '  + a);
            res.end('Goods ------------- '  + a);
            // for (let value of Object.values(goods)) {
            //     for (let i of Object.entries(value)) {
            //         console.log('Goods --- '  + i);
            //       }
            //     // console.log('Goods ---'  + value);
            //   }
            // console.log('Goods ------------- '  + Object.entries(goods).values(goods));
        }).catch(err =>{
            console.log(err);
            res.end('res 404 --------- error');
        });
};

    