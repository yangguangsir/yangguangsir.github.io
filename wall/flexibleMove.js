'use strict'
;(function (){
	var left=0;
	var iSpeed=20;
	var count=0;
	var timer=null;
	window.move=function (obj,iTarget){
		timer=setInterval(function (){
			iSpeed+=(iTarget-left)/5;
			iSpeed*=0.8;
			left+=iSpeed;
			obj.style.left=left+'px';
			
			document.title=iSpeed;
			if(Math.round(iSpeed)==0&&Math.round(left)==iTarget){
				clearInterval(timer);
				obj.style.left=iTarget+'px';
			}
		},30);
	};
})();
