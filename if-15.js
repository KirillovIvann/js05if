//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(x1,y1,x2,y2,x3,y3,x,y){
	var a = (x1-x)*(y2-y1)-(x2-x1)*(y1-y);
	var b = (x2-x)*(y3-y2)-(x3-x2)*(y2-y);
	var c = (x3-x)*(y1-y3)-(x1-x3)*(y3-y);
	if(a/Math.abs(a) === b/Math.abs(b) && b/Math.abs(b) === c/Math.abs(c)){
		return true;
	} else {
		return false;
	}
}

module.exports = f;