const f = require('../if-02.js');

QUnit.test("ЗАДАЧА 02. f(a,b,c,d)=max{min{a,b}, min{c,d}}", 
  function(assert){
	assert.deepEqual(f(1,2,3,4), 3, "Не выполнено f(1,2,3,4) === max {1,3} === 3");
	assert.deepEqual(f(1,2,4,3), 3, "Не выполнено f(1,2,4,3) === max {1,3} === 3");
	assert.deepEqual(f(1,2,4,4), 4, "Не выполнено f(1,2,4,4) === max {1,4} === 4");
	assert.deepEqual(f(-1,-2,-3,-4),-2, "Не выполнено f(-1,-2,-3,-4) === max {-2,-4} === -2");
	assert.deepEqual(f(-2,-1,-3,-4),-2, "Не выполнено f(-2,-1,-3,-4) === max {-2,-4} === -2");
	assert.deepEqual(f(-2,-2,-3,-4),-2, "Не выполнено f(-2,-2,-3,-4) === max {-2,-4} === -2");
	assert.deepEqual(f(4,4,4,4), 4, "Не выполнено f(4,4,4,4) === max {4,4} === 4");
	assert.deepEqual(f(-1,5,-1,5), -1, "Не выполнено f(-1,5,-1,5) === max {-1,-1} === -1");
  }
);
