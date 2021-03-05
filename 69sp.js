/*QQ群528680197
转载请注明出处
圈x
[rewrite_local]
#69视频解锁会员
^http:\/\/69shipin\.vip\/api(\/community|\/user)(\/edit|\/personal)  url script-response-body https://raw.githubusercontent.com/qianmo001/ACL4SSR/rm/69sp.js
[mitm]
hostname= 69shipin.vip
*/
var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.vip_time="2032-01-01 00:00:00";
obj.data.username="❤️小白不白❤️";
obj.data.username="❤️小白不白❤️";
obj.data.vip=1;
obj.data.vip_ymd="2032-01-01";
obj.code=200;

body = JSON.stringify(obj);
$done(body); 
