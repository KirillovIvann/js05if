const f = require('../if-11.js');

QUnit.test("ЗАДАЧА 11. WeekdayName(1) = Monday", 
  function(assert){
	assert.deepEqual(f(0), '', "Не выполнено f(0) === ''");
	assert.deepEqual(f(1), "Monday", "Не выполнено f(1) === Monday");
	assert.deepEqual(f(2), "Tuesday", "Не выполнено f(2) === Tuesday");
	assert.deepEqual(f(3), "Wednesday", "Не выполнено f(3) === Wednesday");
	assert.deepEqual(f(4), "Thursday", "Не выполнено f(4) === Thursday");
	assert.deepEqual(f(5), "Friday", "Не выполнено f(5) === Friday");
	assert.deepEqual(f(6), "Saturday", "Не выполнено f(6) === Saturday");
	assert.deepEqual(f(7), "Sunday", "Не выполнено f(7) === Sunday");
	assert.deepEqual(f(8), '', "Не выполнено f(8) === ''");
  }
);
