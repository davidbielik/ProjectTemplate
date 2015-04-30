/*

	PackageName 1.0.0
	-- ProjectTemplate
	https://github.com/davidbielik/ProjectTemplate.git
	Built on 2015-04-30

*//* jshint multistr: true */
/* jshint laxcomma: true */
/* jshint loopfunc: true */
(function() {
	'use strict';
	var mysql = require('mysql');
	var P = require('bluebird');

	function MySQLHelper(config) {
		config = config || {};

		this.pool = mysql.createPool(config);
		this.escape = mysql.escape;
	}


	MySQLHelper.prototype.query = function(query) {
		var defer = P.defer();
		this.pool.getConnection(function(err, conn) {
			if (err) {
				console.log('Failed to get connection');
				defer.reject(err);
				if (conn) conn.release();
				return;
			}
			conn.query(query, function(err, rows) {
				conn.release();
				if (err) defer.reject(err);
				defer.resolve(rows);
			});
		});
		return defer.promise;
	};
	module.exports = MySQLHelper;
})();