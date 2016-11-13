define(function(require,exports,module){
	var T = require('Tween');
	var G = require('getStyle');
	exports.move = function(obj,json,options){
	//
	options = options || {};
	options.duration = options.duration || 700;
	options.easing = options.easing || T.Tween.Elastic.easeOut;
	var start = {};
	var dis = {};
	for(var name in json){
		start[name] = parseFloat(G.getStyle(obj,name));
		//加默认值
		if(isNaN(start[name])){
			switch(name){
				case 'width':
					start[name] = obj.offsetWidth;
					break;
				case 'height':
					start[name] = obj.offsetHeight;
					break;
				case 'left':
					start[name] = obj.offsetLeft;
					break;
				case 'top':
					start[name] = obj.offsetTop;
					break;
				case 'opacity':
					start[name] = 1;
					break;
				case 'borderWidth':
					start[name] = 0;
					break;
			}
		}
		dis[name] = json[name]-start[name];
	}
	var count = Math.floor(options.duration/16);
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			//var cur=fx(t,b,c,d)
			//t 	当前时间
			//b 	初始值
			//c 	总距离
			//d 	总时间
			var cur = options.easing(n*options.duration/count,start[name],dis[name],options.duration);
			if(name=='opacity'){
				obj.style.opacity = cur;
				obj.style.filter = 'alpha(opacity='+cur*100+')';
			}else{
				obj.style[name] = cur+'px';
			}
		}
		if(n==count){
			clearInterval(obj.timer);
			options.complete&&options.complete();
		}
	},16);
	
	//	
	};
});