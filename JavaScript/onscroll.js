window.onscroll = function(){
		/*检查页面是否滚动了足够距离*/
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
			document.getElementById('top').style.display = 'block';}
		else {
			document.getElementById('top').style.display = 'none';
		}/*这里的条件if语句是设置是否显示返回顶部的图标*/
	};
	document.getElementById('top').onclick = function(){
		document.documentElement.scrollTop = 0;/*兼容火狐，谷歌等*/
	};