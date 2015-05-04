(function() {
	'use strict';
	describe("addOne module", function() {
		it("should work pretty well", function() {
			expect(addOne(1)).toBe(2);
			expect(addOne(-1)).toBe(0);
			expect(addOne(0)).toBe(1);
		});
		it("should fail pretty well, too", function(){
			expect(addOne('a')).toBe(false);
			expect(addOne('3')).toBe(false);
			expect(addOne()).toBe(false);
		});
	});
})();