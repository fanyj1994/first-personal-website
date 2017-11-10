	var gktime= new Date("01/01/2016");	//这里设置要倒计时的那个结束时间点
	var kstime= new Date("01/01/2015");
	var title="2015年结束";	//这里是上述时间点的事情名称
	var now = new Date();	//获取当前系统的时间
	var t =gktime.getTime() - now.getTime();	//获取时间差
	var day = Math.floor(t / (1000 * 60 * 60 * 24));
	var msg = document.getElementById('timeCount');	
	if (day > 0)
		msg.innerHTML = "<h4>今天距离"+ title+"还有"+ day +"天!请珍惜时间！</h4>"
	else if (day == 0)
		msg.innerHTML = "<h2>今天距离"+ title+"离2015年只剩最后一天!</h2>"
	else
		msg.innerHTML = "<h2>不好意思，"+ title+"时间已经过了！</h2>"