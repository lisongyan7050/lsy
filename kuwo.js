var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/vip/v2/user/vip';
const time = '/vip/spi/mservice';

if (url.indexOf(vip) != -1) {
	obj.data["isNewUser"] = "2";
	obj.data["vipLuxuryExpire"] = "1835312949000";
	obj.data["time"] = "1961170340993";
	obj.data["isYearUser"] = "2";
	obj.data["vipmExpire"] = "1835312949000";
	obj.data["vipOverSeasExpire"] = "1835312949000";
	obj.data["vipExpire"] = "1835312949000";
	obj.data["vip3Expire"] = "1835312949000";
	obj.data["svipExpire"]="1835312949000";
obj.data["svipIcon"]="https://github.com/lisongyan7050/Photos/blob/master/QQ%E5%9B%BE%E7%89%8720200504125011.jpg";
	body = JSON.stringify(obj);
}

if (url.indexOf(time) != -1) {
	obj["isVIPMAutoPay"] = 2;
	obj["isVIPLuxAutoPay"] = 2;
	body = JSON.stringify(obj);
}

$done({body});
