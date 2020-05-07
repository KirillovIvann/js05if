const f = require('../if-01.js');

QUnit.test("ЗАДАЧА 01. f(x,y,z)=max{x+y+z, x*y*z, x*y+z}", 
  function(assert){
	assert.deepEqual(f( 1, 1, 1), 3, "Не выполнено f( 1, 1, 1) === max {3, 1, 2} === 3");
	assert.deepEqual(f(-1, 0,-1), 0, "Не выполнено f(-1, 0,-1) === max {-2,0,-1} === 0");
	assert.deepEqual(f(-1,-1, 2), 3, "Не выполнено f(-1,-1, 2) === max {0, 2, 3} === 3");
	assert.deepEqual(f( 0, 0, 0), 0, "Не выполнено f( 0, 0, 0) === max {0, 0, 0} === 0");
	assert.deepEqual(f(-1, 1, 0), 0, "Не выполнено f(-1, 1, 0) === max {0,0,-1} === 0");
	assert.deepEqual(f(-2,-1, 2), 4, "Не выполнено f(-2,-1, 2) === max {-1,4,4} === 4");
	assert.deepEqual(f(-1, 1, 0), 0, "Не выполнено f(-1, 1, 0) === max {0,0,-1} === 0");
	assert.deepEqual(f( 2, 2, 0), 4, "Не выполнено f( 2, 2, 0) === max {4,0, 4} === 4");
  }
);
