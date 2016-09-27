var orm = require('../config/orm.js');

var burger = {
	selectAll: function(callback) {
		orm.selectAll('products', function(res){
			callback(res);
		});
	},
	insertOne:  function(cols, vals, callback) {
		orm.insertOne('products', cols, vals, function(res){
			callback(res);
		});
	},
	update: function(objColVals, condition, callback) {
		orm.updateOne('products', objColVals, condition, function(res){
			callback(res);
		});
	}
};

module.exports = burger;