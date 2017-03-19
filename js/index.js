window.onload = function(){
	// 输入框样式事件
	var InPut = document.getElementsByClassName('w_b_cin')[0];
	var InPutDiv = document.getElementsByClassName('w_blank')[0];
	InPut.onfocus = function(){
		InPutDiv.classList.add('wb_on');
	}
	InPut.onblur = function(){
		InPutDiv.classList.remove('wb_on');
	}
	//功能扩展菜单事件
	var more = new Array();
	more[0] = document.getElementsByClassName('gb')[0];				//扩展菜单对应按钮
	more[1] = document.getElementsByClassName('gb_peak')[0];		//扩展栏顶部三角形
	more[2] = document.getElementsByClassName('gb_ms')[0];			//扩展栏顶部三角形阴影
	more[3] = document.getElementsByClassName('f_o_l_f_ex')[0];		//扩展栏整体
	more[4] = document.getElementsByClassName('ex_dm')[0];			//"更多"盒模型
	more[5] = document.getElementsByClassName('ex_u')[1];			//隐藏的表单
	more[6] = document.getElementsByClassName('ex_co')[0];			//分割线
	var isBlock = false;
	more[0].onclick = function(){
		if(isBlock == false){
			for(var i = 1;i < 4;i++){
				more[i].classList.add('gm');
			}
			stopBubble(event);
		}
		else{
			for(var i = 1;i < 4;i++){
				more[i].classList.remove('gm');
			}
			stopBubble(event);
		}
	}
	//禁止点击扩展框内部造成收回事件
	more[3].onclick = function(event){
		stopBubble(event);
	}
	function stopBubble(e){
		if(e&e.stopPrapagation)
			e.stopPrapagation();
		else
			window.event.cancelBubble=true;
	}
	//扩展框收回
	document.onclick=function(){
		for(var j = 1;j < 4;j++){
			more[j].classList.remove('gm');
		}
	}
	//鼠标滚动事件扩展功能框(未兼容Firefox)
	var u_agent = navigator.userAgent;
	var isExtend = false;
	//此部分用作兼容Firefox
	// if(u_agent.indexOf('Firefox')>-1){
	// 	more[3].addEventLisener("DOMMouseScroll",function(envent)){
	// 		var e = event||window.event;
	// 		if()
	// 	}
	// }
	more[3].onmousewheel = function(event){
		var e = event||window.event;
		if(event.wheelDelta<0){
			more[4].classList.remove('gm');
			more[4].classList.add('nm');
			more[6].classList.remove('nm');
			more[6].classList.add('gm');
			more[5].classList.remove('nm');
			more[5].classList.add('gm');
			isExtend = true
			console.log(more[3].scrollTop);
		}
		else if(event.wheelDelta>0&&more[3].scrollTop == 0&&isExtend){
			more[4].classList.remove('nm');
			more[4].classList.add('gm');
			more[6].classList.remove('gm');
			more[6].classList.add('nm');
			more[5].classList.remove('gm');
			more[5].classList.add('nm');
			isExtend = false;
		}
	}
	//jQuery尝试
// 	$(".l_img").bind({
// 	mouseover:function(){ $(this).stop().fadeTo(3000,1.0);},
// 	mouseout:function(){ $(this).stop().fadeTo(3000,0.5);}
// });
};



