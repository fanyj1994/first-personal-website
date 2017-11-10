	var showTime = document.getElementById("nowTime");
	var nowTime = new Date();
	var nowYear = nowTime.getFullYear();
	var nowMonth = nowTime.getMonth()+1;
	var nowDate = nowTime.getDate();
	var nowHour = nowTime.getHours();
	showTime.innerHTML = "现在是" + nowYear+"年"+nowMonth + "月" + nowDate + "日" + "，范永健一直在路上！";