
/*
QQ群528680197
转载请注明出处
圈x
[rewrite_local]
#知音漫客解锁会员
^https:\/\/.*\.zymk\.cn\/v1(\/getuserinfo|\/userpurchased)|\/paychapters  url script-response-body https://raw.githubusercontent.com/qianmo001/ACL4SSR/rm/zymk.js
hostname = *.zymk.cn
下载地址：商店搜索知音漫客即可
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const grzl = 'v1/getuserinfo/';

const gm = 'v1/userpurchased/paychapters/';

if (url.indexOf(grzl) != -1) {
  obj.data.Uname = "️小白不白️";
  obj.data.Uviptime = 4076913029;
  obj.data.isvip = 1;
  obj.data.vipdate = 4076913029;
  obj.data.Cgold = 99999;
  obj.data.vipdays = 28470;
  
 body = JSON.stringify(obj);
 }

if (url.indexOf(gm) != -1) {
  obj.data.isvip = 1; 
  obj.data.Cgold = 99999;
  obj.status = 0
 body = JSON.stringify(obj);
 }


$done({body});
