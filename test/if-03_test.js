const f = require('../if-03.js');

QUnit.test("ЗАДАЧА 03. f(a,b,c,d)=min{max{a,b}, max{c,d}}", 
  function(assert){
	assert.deepEqual(f(5,2,3,4), 4, "Не выполнено f(5,2,3,4) === min {5,4} === 4");
	assert.deepEqual(f(2,5,4,3), 4, "Не выполнено f(2,5,4,3) === min {5,4} === 4");
	assert.deepEqual(f(5,2,4,4), 4, "Не выполнено f(5,2,4,4) === min {5,4} === 4");
	assert.deepEqual(f(-5,-6,-3,-4),-5, "Не выполнено f(-5,-6,-3,-4) === min {-5,-3} === -5");
	assert.deepEqual(f(-6,-5,-3,-4),-5, "Не выполнено f(-6,-5,-3,-4) === min {-5,-3} === -5");
	assert.deepEqual(f(-5,-5,-3,-4),-5, "Не выполнено f(-5,-5,-3,-4) === min {-5,-3} === -5");
	assert.deepEqual(f( 4, 4, 4, 4), 4, "Не выполнено f(4,4,4,4) === min {4,4} === 4");
	assert.deepEqual(f(-1, 5,-1, 5), 5, "Не выполнено f(-1,5,-1,5) === min {5,5} === 5");
  }
);
