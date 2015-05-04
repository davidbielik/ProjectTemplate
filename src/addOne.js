function addOne(num) {
	if (typeof num !== 'number' || isNaN(num)) {
		return false;
	}
	return ++num;
}
if (typeof module !== 'undefined') {
	module.exports = addOne;
}