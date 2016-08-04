var measurements = require('../models/measurements');

function isISO(str){
	var iso = /\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d\d\dZ/ ;
	return iso.test(str);
}

module.exports = function(req, res){
	if (!isISO(req.params['timestamp'])){
		return res.status(400).send('invalid request');
	}

	if (req.params['timestamp'] != req.body['timestamp']){
		return res.status(409).send('no macth');
	}

	for (var p in req.body){
		if (p != 'timestamp' &&
			!isNaN(Number(req.body[p])) ){
			res.status(400).send('invalid input');
			return;
		}
	}

	measurements.replace(req.params['timestamp'], req.body, function(result){
		if (result){
			return res.status(204).end();
		} else {
			return res.status(404).send('error');
		}
	});
}