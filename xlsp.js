/*
^https:\/\/*\.pearkin\.com\/api\/account\/IndexDetail  url script-response-body https://raw.githubusercontent.com/qianmo001/ACL4SSR/rm/xlsp.js

*.pearkin.com
*/

var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj.vipLevel=5;
obj.vipEndTime="2099-03-09";
obj.cartoonVip=true;
obj.nickName="️小白不白️"

body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改;
