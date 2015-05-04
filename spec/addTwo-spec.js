(function() {
	'use strict';
	var addTwo = require('../src/addTwo.js');
	describe("addTwo module", function() {
		it("should work pretty well", function() {
			expect(addTwo(1)).toBe(3);
			expect(addTwo(-1)).toBe(1);
			expect(addTwo(-2)).toBe(0);
		});
		it("should fail pretty well, too", function(){
			expect(addTwo('a')).toBe(false);
			expect(addTwo('3')).toBe(false);
			expect(addTwo()).toBe(false);
		});
	});
})();