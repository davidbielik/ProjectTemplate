function addTwo(num) {
	if (typeof num !== 'number' || isNaN(num)) {
		return false;
	}
	return num + 2;
}
if (typeof module !== 'undefined') {
	module.exports = addTwo;
}