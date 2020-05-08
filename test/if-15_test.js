const f = require('../if-15.js');

QUnit.test("ЗАДАЧА 02. f(a,b,c,d)=max{min{a,b}, min{c,d}}", 
  function(assert){
	assert.deepEqual(f(4.6,1.02,6.3,4.38,12.14,2.58,7.78,2.38), true, "Не выполнено f(4.6,1.02,6.3,4.38,12.14,2.58,7.78,2.38) === true");
	assert.deepEqual(f(-1,-1,0,2,1,-1,0,1), true, "Не выполнено f(-1,-1,0,2,1,-1,0,1) === true");
	assert.deepEqual(f(4.6,1.02,6.3,4.38,12.14,2.58,4.72,0.24), false, "Не выполнено f(4.6,1.02,6.3,4.38,12.14,2.58,4.72,0.24) === false");
	assert.deepEqual(f(3,2,3,2,-3,-2,0,0), false, "Не выполнено f(3,2,3,2,-3,-2,0,0) === false");
  }
);
