var measurements = require('../models/measurements');

module.exports = function(req,res){
	if (req.params['timestamp'] != req.body['timestamp']) {
		return res.status(409).end();
	}

	for (var p in req.body){
		if (p != 'timestamp' && 
			Number(req.body[p]) === NaN ){
			console.log(p);
			return res.status(400).end();
		} 
	}

	measurements.update(req.body, function(result){
		if (result){
			return res.status(204).end();
		} else {
			return res.status(404).end();
		}
	});
}