// var fs = require("fs");
// fs.readFile('input.txt', function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(data.toString());
// });
// // console.log(data.toString());
// console.log("程序运行结束");

//=================================================

// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// var connectHandler = function connected() {
//     console.log('连接成功');
//     eventEmitter.emit('data_received')
// };
// eventEmitter.on('connection',connectHandler);
//
// eventEmitter.on('data_received',function () {
//     console.log('数据接收成功');
// });
// eventEmitter.emit('connection');
// console.log("程序执行完毕");

//========================================================

// var EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter();
// event.on('some_event',function (args) {
//     console.log("事件触发");
// });
// setTimeout(function () {
//     event.emit('some_event');
// },  1000);

// var event = require('events');
// var eventEmitter = new event.EventEmitter();
//
// var listener1 = function listener1() {
//     console.log("监听器 listener1执行");
// };
//
// var listener2 = function listener2() {
//     console.log("监听器 listener2执行");
// };
//
// eventEmitter.addListener('connection',listener1);
// eventEmitter.addListener('connection',listener2);
//
// var eventListeners = eventEmitter.listenerCount('connection');
// console.log(eventListeners + "个监听器监听连接事件");
// eventEmitter.emit('connection');
//
// eventEmitter.removeListener('connection',listener1);
// console.log("listener1不再受监听");
//
// eventEmitter.listenerCount('connection');
//
// eventListeners = eventEmitter.listenerCount('connection');
// console.log(eventListeners + "个监听连接事件");
// console.log("程序执行完毕");

//==================================================================
// const buf  = Buffer.from('runoob','ascii');
// console.log(buf.toString('hex'));
// console.log(buf.toString('base64'));

//==================================================================
// const buf1 = Buffer.alloc(256);
// const buf2 = Buffer.alloc(10,1);
// const buf3 = Buffer.allocUnsafe(10);
// const buf4 = Buffer.from([1,2,3]);
// const buf5 = Buffer.from('test');
// const buf6 = Buffer.from('test','latin1');
// len = buf1.write("www.runoob.com");
// console.log("写入字节数" + len);
//
// for (var i = 0;i < 26;i++) {
//     buf1[i] = i + 97;
// }
// console.log(buf1.toString('ascii'));
//==================================================================

// const buf = Buffer.from([0x1,0x2,0x3,0x4,0x5]);
// const json = JSON.stringify(buf);
// console.log(json);
//
// const copy = JSON.parse(json,(key,value) => {
//     return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
// });
//
// console.log(copy);
//=================================================================
// var buf1 = Buffer.from('菜鸟教程');
// var buf2 = Buffer.from('www.runoob.com');
// var buf3 = Buffer.concat([buf1,buf2]);
// console.log(buf3.toString());


// var buf1 = Buffer.from('ABC');
// var buf2 = Buffer.from('ABCD');
// var result = buf1.compare(buf2);

// if (result < 0) {
//     console.log(buf1 + "在" + buf2 + "之前");
// } else if (result == 0) {
//     console.log(buf1 + "与" + buf2 + "相同");
// } else {
//     console.log(buf1 + "在" + buf2 + "之后");
//
// }

// console.log(buf1.copy(buf2,2));
// console.log(buf2.toString());

// var buf1 = Buffer.from('runoob');
// var buf2 = buf1.slice(0,2);
//
// console.log("buf2 content:" + buf2.toString());
// console.log(buf1.length);
//===================================================================


// var fs = require('fs');
// var data = '';
// var readStream = fs.createReadStream('input.txt');
// readStream.setEncoding('UTF-8');
// readStream.on('data',function (chunk) {
//     data += chunk;
// });
// readStream.on('end',function () {
//     console.log(data);
// });
// readStream.on('error',function (err) {
//     console.log(err.stack);
// });
// console.log("程序执行完毕");

// var fs = require('fs');
// var data = '你好吗。我很好';
// var writeStream = fs.createWriteStream('output.txt');
// writeStream.write(data,'UTF-8');
// writeStream.end();
// writeStream.on('finish',function () {
//     console.log("写入完成");
// });
// writeStream.on('err',function (err) {
//     console.log(err.stack);
// });
// console.log("程序执行完毕");

// var fs = require('fs');
// var readStream = fs.createReadStream('input.txt');
// var writeStream = fs.createWriteStream('output.txt');
// readStream.pipe(writeStream);
// console.log("程序执行完毕");

// var fs = require('fs');
// var zlib = require('zlib');
// fs.createReadStream('input.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('input.txt.gz'));
// console.log("文件压缩完成");

// var fs = require('fs');
// var zlib = require('zlib');
//
// fs.createReadStream('input.txt.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('input.txt'));
// console.log("文件压缩完成");

// console.log(__filename);
// process.stdout.write("你好\n");
// console.log(process.platform);
// console.log(process.memoryUsage());
// console.log(process.version);
// console.log(process.cwd());


// var utils = require('util');
// function Base() {
//     this.name = 'base';
//     this.base = 1991;
//     this.sayHello = function () {
//         console.log('Hello' + this.namr);
//     };
// }
// Base.prototype.showName = function () {
//     console.log(this.name);
// };
// function Sub(){
//     this.name = 'sub';
// }
// utils.inherits(Sub,Base);
// var objBase = new Base();
// objBase.showName();
// objBase.sayHello();
// console.log(objBase);
// var objSub = new Sub();
// objSub.showName();
// console.log(objSub);


// var utils = require('util');
// function Person() {
//     this.name = 'byvoid';
//     this.toString = function () {
//         return this.name;
//     };
// }
//
// var obj = new Person();
// console.log(utils.inspect(obj));
// console.log(utils.inspect(obj,true));


// var utils = require('util');
// console.log(utils.isArray([]));
// console.log(utils.isArray(new Array()));
// console.log(utils.isArray({}));

// var fs = require('fs');
// fs.readFile('input.txt',function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("异步读取:" + data.toString());
//
// });

// var fs = require('fs');
// console.log("准备打开文件");
// fs.open('input.txt','r+',function (err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("文件打开成功");
// });

// var fs = require('fs');
// console.log("准备打开文件");
// fs.stat('input.txt',function (err,stats) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(stats);
//     console.log("读取文件成功");
//
//     console.log("是否为文件" + stats.isFile());
//     console.log("是否为目录" + stats.isDirectory());
// });
// var http = require('http');
// var url = require('url');
// var util = require('util');
//
// http.createServer(function (req, res) {
//     res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
//      var param = url.parse(req.url,true).query;
//      res.write("网站名:" + param.name);
//      res.write("\n");
//      res.write("网站URL" + param.url);
//      res.end();
//     // res.end(util.inspect(url.parse(req.url,true)));
// }).listen(3000);


// var http = require('http');
// var querystring = require('querystring');
//
// var postHTML =
//     '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
//     '<body>' +
//     '<form method="post">' +
//     '网站名： <input name="name"><br>' +
//     '网站 URL： <input name="url"><br>' +
//     '<input type="submit">' +
//     '</form>' +
//     '</body></html>';
//
// http.createServer(function (req,res) {
//     var body = '';
//     req.on('data',function (chunk) {
//         body += chunk;
//     })
//     req.on('end',function () {
//         body = querystring.parse(body);
//         res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
//
//         if (body.name && body.url) {
//             res.write("网站名" + body.name);
//             res.write("<br>");
//             res.write("网站URL：" + body.url);
//         } else {
//             res.write(postHTML);
//         }
//         res.end();
//     });
// }).listen(3000);


// var http = require('http');
// var querystring = require('querystring');
// var util = require('util');
// var postHTML = '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
//     '<body>' +
//     '<form method="post">' +
//     '网站名： <input name="name"><br>' +
//     '网站 URL： <input name="url"><br>' +
//     '<input type="submit">' +
//     '</form>' +
//     '</body></html>';
//
// http.createServer(function (req, res) {
//     var post = '';
//     req.on('data',function (chunk) {
//         post += chunk;
//     });
//
//     req.on('end',function (chunk) {
//        post = querystring.parse(post);
//        res.writeHead(200,{'Content-type': 'text/html;charset=utf-8'});
//        if (post.name && post.url) {
//            res.write("网站名" + post.name);
//            res.write("<br/>");
//            res.write("网站URL" + post.url);
//        } else {
//            res.write(postHTML);
//        }
//        res.end();
//     });
// }).listen(3000);


// var http = require('http');
// var fs = require('fs');
// var url = require('url');
//
// http.createServer(function (req, res) {
//     var pathname = url.parse(req.url).pathname;
//     console.log("URL" + pathname + "has been received");
//     fs.readFile(pathname.substr(1), function (err, data) {
//         if (err) {
//             console.log(err);
//             res.writeHead(404, {'Content-type': 'text/html'});
//         } else {
//             res.writeHead(200, {'Content-type': 'text/html'});
//             res.write(data.toString());
//         }
//         res.end();
//     });
// }).listen(8080);
// console.log("Sever running at localhost:8080");


// var http = require('http');
// var options = {
//     host: 'localhost',
//     port: 8080,
//     path: '/index.html'
// };
//
// var callback = function (response) {
//   var body = '';
//   response.on('data',function (data) {
//       body += data;
//   });
//   response.on(end,function () {
//       console.log(body);
//   });
// };
//
// var req = http.request(options,callback);
// req.end();


// var express = require('express');
// var app = express();
// app.get('/',function (req,res) {
//     res.send("Hello World");
// });
// var sever = app.listen(8081,function () {
//     var host = sever.address().address;
//     var port = sever.address().port;
//     console.log("应用实例访问地址为: http://%s:%s",host,port);
// });


// var express = require('express');
// var app = express();
// app.get('/', function (req,res) {
//    console.log("主页GET请求");
//    res.send('Hello GET');
// });
//
// app.post('/', function (req,res) {
//     console.log("主页POST请求");
//     res.send('Hello POST');
// });
//
// app.get('del_user', function (req,res) {
//     console.log("响应删除请求");
//     res.send('删除页面');
// });
//
// app.get('/list_user', function (req,res) {
//     console.log("/list_user GET请求");
//     res.send('用户展示页面');
// });
//
// app.get('/ab*cd', function (req,res) {
//     console.log("/ab*cd GET请求");
//     res.send('正则匹配');
// });
//
// var sever = app.listen(8081, function () {
//     var host = sever.address().address;
//     var port = sever.address().port;
//     console.log("应用实例，访问地址为 http://%s:%s",host,port);
// });


// var express = require('express');
// var app = express();
// app.use('/public', express.static('public'));
// app.get('/', function (req,res) {
//    res.send('Hello World');
// });
//
// var sever = app.listen(8081, function () {
//     var host = sever.address().address;
//     var port = sever.address().port;
//     console.log("应用实例，访问地址为 http://%s:%s",host,port);
// });


// var express = require('express');
// var app = express();
//
// app.get('/public', express.static('public'));
// app.get('/index.html', function (req,res) {
//    res.sendFile(__dirname + "/" + "index.html");
// });
// app.get('/process_get', function (req,res) {
//     var response = {
//         "first_name":req.query.first_name,
//         "last_name":req.query.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// });
// var sever = app.listen(8081, function () {
//    var host = sever.address().address;
//    var port = sever.address().port;
//    console.log("应用实例，访问地址为http://%s:%s",host,port);
// });


// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
//
// var urlencodingParser = bodyParser.urlencoded({ extended: false })
//
// app.use('public',express.static('public'));
// app.get('/index.html', function (req,res) {
//     res.sendFile(__dirname + "/" + "index.html");
// });
//
// app.post('/process_post', urlencodingParser, function (req,res) {
//     var response = {
//         "first_name":req.body.first_name,
//         "last_name":req.body.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// });
//
// var sever = app.listen(8081, function () {
//     var host = sever.address().address;
//     var port = sever.address().port;
//     console.log("应用实例，访问地址为 http://%s:%s",host,port);
// });


// var express = require('express');
// var app = express();
// var fs = require('fs');
//
// var bodyParser = require('body-parser');
// var multer = require('multer');
//
// app.use('public', express.static('public'));
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(multer({dest: '/tmp/'}).array('image'));
//
// app.get('index.html', function (req, res) {
//     res.sendFile(__dirname + "/" + "index.html");
// });
//
// app.post('/file_upload', function (req, res) {
//     console.log(req.files[0]);
//     var des_file = __dirname + "/" + req.files[0].originalname;
//     fs.readFile(req.files[0].path, function (err, data) {
//         fs.writeFile(des_file, data, function (err1) {
//             if (err1) {
//                 console.log(err1);
//             } else {
//                 response = {
//                     message: 'File upload successful',
//                     filename: req.files[0].originalname
//                 };
//             }
//             console.log(response);
//             res.end(JSON.stringify(response));
//         });
//     });
// });
//
// var sever = app.listen(8081, function () {
//     var host = sever.address().address;
//     var port = sever.address().port;
//     console.log("应用实例，访问地址为 http://%s:%s",host,port);
// });




var express = require('express');
var cookieParser = require('cookie-parser');
var util = require('util');

var app = express();
app.use(cookieParser());
app.get('/', function (req,res) {
    console.log("Cookies:" + util.inspect(req.cookies));
});
app.listen(8081);








































































