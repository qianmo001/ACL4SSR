
/*
By:❤小白不白❤
QQ群528680197
转载请注明出处
圈x
[rewrite_local]
#雪梨解锁会员
^https:\/\/m\.pearkin\.com\/api(\/account|\/movie)(\/IndexDetail|\/IsVip|\/WatchMovieNew) https://raw.githubusercontent.com/qianmo001/ACL4SSR/rm/xlsp.js
[mitm]
hostname= m.pearkin.com
*/

https://m.pearkin.com/api/movie/WatchMovieNew

var body = $response.body;//声明变量
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/api/account/IndexDetail';

const isvip = '/api/account/IsVip';
const zwzm = '/api/movie/WatchMovieNew';
if (url.indexOf(vip) != -1) {
  obj.nickName = "️小白不白️";
  obj.vipEndTime = "2099-03-09";
  obj.cartoonVip = true;
  obj.vipLevel = 101;
  obj.cartoonVipEndTime = "2099-03-09";
 body = JSON.stringify(obj);
 }

if (url.indexOf(isvip) != -1) {
  obj.value = true;
 body = JSON.stringify(obj);
 }
 
 if (url.indexOf(zwzm) != -1) {
  obj.canWath = true;
 body = JSON.stringify(obj);
 }

$done({body});
