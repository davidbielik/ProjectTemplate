/*
 *	grunt 1.0.0
 *	-- ProjectTemplate
 *	git+https://github.com/davidbielik/ProjectTemplate.git
 *	Built on 2015-05-04
 */
function addOne(num) {
	if (typeof num !== 'number' || isNaN(num)) {
		return false;
	}
	return ++num;
}
if (typeof module !== 'undefined') {
	module.exports = addOne;
}

function addTwo(num) {
	if (typeof num !== 'number' || isNaN(num)) {
		return false;
	}
	return num + 2;
}
if (typeof module !== 'undefined') {
	module.exports = addTwo;
}