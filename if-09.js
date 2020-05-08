//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(x1,y1,x2,y2,x3,y3){
	var a = Math.abs(Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)));
	var b = Math.abs(Math.sqrt((x3-x2)*(x3-x2)+(y3-y2)*(y3-y2)));
	var c = Math.abs(Math.sqrt((x3-x1)*(x3-x1)+(y3-y1)*(y3-y1)));
	var p = (a+b+c)/2;
    if(a*a>b*b+c*c || b*b>a*a+c*c || c*c>a*a+b*b){
		return Math.sqrt(p*(p-a)-(p-b)-(p-c));
	} else {
		return -1;
	}
}

module.exports = f;