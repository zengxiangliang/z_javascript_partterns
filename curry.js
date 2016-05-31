function add(x,y){
	var oldx = x,oldy = y;
	console.info(oldy);
//	if(typeof oldy === "undefined"){
//		return function(newy){
//			return oldx+newy;
//		}
//	}
	return x+y;
}

typeof add(5);


/**
 * 第二种curry化，更加简介
 */
function add (x,y) {
	if (typeof(y)==="undefined") {
		return function (y){
			return x+y;
		}
	}
	return x+y;
}

var fn = function(){
	console.log("执行了"+fn.callback);
}
fn.callback = '正常';

var sayHi = function (who){
	return 'hello' + (who?','+who:'')+'!'
}


//私有性失效
function Ga(){
	var shareaaa = {
		a:1,
		b:2,
		color:'#fff'
	}
	this.fn = function(){
		return shareaaa;
	}
}
var ga = new Ga();
var faa = ga.fn();
faa.color = '#000';
console.dir(ga.fn());


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