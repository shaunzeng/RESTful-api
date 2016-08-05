var measurements = require('../models/measurements');
var common = require('../shared/common.shared');

module.exports = function(req, res){
	if (!common.isISO(req.params['timestamp'])){
		return res.status(400).send('invalid request');
	}

	if (req.params['timestamp'] != req.body['timestamp']){
		return res.status(409).send('no match');
	}

	for (var p in req.body){
		if (p != 'timestamp' &&
			!isNaN(Number(req.body[p])) ){
			res.status(400).send('invalid input');
			return;
		}
	}

	measurements.replace(req.body, function(result){
		if (result){
			return res.status(204).end();
		} else {
			return res.status(404).send('Not found');
		}
	});
}