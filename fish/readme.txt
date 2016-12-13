复习
面向对象
	function Person(){
	//属性
	}
	//方法加在原型上
	Person.prototype.showName = funciton(){

	};
	Person.prototype = {
		showName:function(){}
	}；
	var p1 = new Person('leo',18);
	注意： this
	Person.prototype = {
		this-> p1/Person
		setInterval(){}//存_this
		oBtn.onclick = function(){
			this
		}
	}；
	function Person(name){
	//属性
		this.name = name;
		function showName(){
			return this.name;//?????
		}
		showName();
	}
继承
	function Woker(){
		//继承属性
		Person.call(this,xxx);
	}
	Worker.prototype = new Person();
	Worker.prototype.constructor = Worker;
---------------------------------------------------------
	string undefined number boolean  基本数据类型 
	常见 5 种 usbno
---------------------------------------------------------
捕鱼达人
1.canvas 背景  gd.drawImage  fish1.png
2.loadImage 资源加载
3.画一条鱼
	new Fish
	x y rotate type iSpeed  
4.动起来 尾巴 速度	
---------------------------------------------------------
1.lineWidth 20 red  rect
2. rotate 30deg

3lineWidth 5  green arc   上半圆
4. rotate 45deg
练习
1.画出来的 颜色？宽度？ 角度？ 会不会连续？ 画布是怎么动？
    save  拍了一个快照 restore

画炮
	x y rotate
炮弹
	1.一个页面 有几个炮弹
	2.什么时候出来 点击
	3.炮弹位置 跟 炮位置 一致 rotate  this.type


	钢镚儿  
		1 2    1毛钱
		3 4 5  10块
		属性
		x y rotate 

		方法 
		draw
		move			
	生成 死鱼
	网
--------------------------------
grunt gulp  
	压缩代码  注释  css图片精灵  
----------------------------------------------------------------





