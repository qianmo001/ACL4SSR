var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj.data.vip_time="2032-01-01 00:00:00";
obj.data.username="❤️小白不白❤️";
obj.data.username="❤️小白不白❤️";
obj.data.vip=1;
obj.data.vip_ymd="2032-01-01";
obj.code=200;

body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
