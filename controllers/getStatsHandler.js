var measurements = require('../models/measurements');
var url = require('url');


module.exports = function(req, res){
	var query = url.parse(req.url, true).query,
		stats = query['stat'],
		metrics = query['metric'],
		fromDate = query['fromDateTime'],
		toDate = query['toDateTime'];

	console.log(stats,metrics,fromDate,toDate,'checking');

	measurements.getStats(query, function(result){

	});

	return res.status(200).end();
}