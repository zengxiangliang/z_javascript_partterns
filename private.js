//构造函数创建私有变量
function Gadget(){
	var name = 'hacker';
	this.getName = function(){
		return name;
	}
}
var gadget = new Gadget();
gadget.getName();

//私有化失效，返回对象类型（对象或者数组）
function Gadget(){
	var specs = {
		width:400,
		height:600,
		color:'white'	
	}
	this.getSpecs = function(){
		return specs;
	}
}
var gadget = new Gadget();
var toy = gadget.getSpecs();
toy.color = 'black';
console.dir(gadget.getSpecs());

//对象字面量创建私有属性

(function(){
	var name = 'my MY';
	myapp = {
		getName:function(){
			return name;
		}
	}
}())
myapp.getName();


//模块模式
var MYAPP = function(){
	var name = 'my,oh my';
	return {
		getName:function(){
			return name;
		}
	}
}()
MYAPP.getName();


//构造函数私有属性和原型对象字面量私有属性
function  Gadget(){
	//私有成员
	var name = 'ipod';
	//公有函数
	this.getName = function(){
		return name;
	}
}
Gadget.prototype = (function(){
	//私有成员
	var browser = 'webkit';
	//公有原型成员
	return {
		getBrowser:function(){
			return browser;
		}
	}
}())
var gadget = new Gadget();
console.log(gadget.getBrowser());//特权原型方法
console.log(gadget.getName());//特权'own'方法


//将私有方法揭示为公共方法
var myArray;
(function(){
	var astr = "[object Array]";
		toString = Object.prototype.toString;
	function isArray(a){
		return toString.call(a) === astr;
	}
	function indexOf(hayStack,needle){
		var i = 0,
			max = hayStack.length;
		for(;i<max;i++){
			if(hayStack[i]===needle){
				return i;
			}
		}
		return -1;
	}
	
	myArray = {
		isArray:isArray,
		indexOf:indexOf,
		inArray:indexOf
	}
}())

console.log(myArray.isArray([1,2]));
console.log(myArray.isArray({1:2}));
console.log(myArray.indexOf([1,4,5,6,7],5));
console.log(myArray.inArray([1,4,7,9],4));


//揭示模块模式
var MYAPP = function(){
	var astr = '[object Array]',
		toString  = Object.prototype.toString,
		isArray = function(a){
			return toString.call(a) === astr;
		},
		indexOf = function(hayStack,needle){
			var i = 0,
				max = hayStack.length;
			for (;i<max;i++) {
				if(hayStack[i] === needle){
					return i;
				}
			}
		}
		
		return {
			isArray:isArray,
			indexOf:indexOf,
			inArray:indexOf
		}
}();
console.log(MYAPP.isArray([1,4]));
console.log(MYAPP.indexOf([23,54,7,8],8));