//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f4(a, b, c, d){
	var min;
	var max;
	if(Math.abs(a) > Math.abs(b)){
		min = Math.abs(b);
	} else{
		min = Math.abs(a);
	}
	if(Math.abs(c) > Math.abs(d)){
		max = Math.abs(c);
	} else{
		max = Math.abs(d);
	}
	if(min > max){
		return min;
	} else {
		return max;
	}
}
module.exports = f4;