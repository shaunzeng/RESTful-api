var measurements = require('../models/measurements');

module.exports = function(req, res){
	var obj = {};

	if(!req.body['timestamp']){
		return res.status(400).send('Cannot save without Timestamp');
	} 

	for (var p in req.body){
		if (p != 'timestamp' && isNaN(Number(req.body[p]))  ){
			return res.status(400).send('Invalid data');
		}

		obj[p] = req.body[p] || null;
	}
	measurements.store(obj, function(data){
		console.log(data);
		res.location('/measurements/' + req.body['timestamp']);
		return res.status(201).send('Saved!');
	});
	
}