var measurements = require('../models/measurements');

function isISO(str){
	var iso = /\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d\d\dZ/ ;
	return iso.test(str);
}

function isDate(str){
	var date = /^\d{4}-\d{1,2}-\d{1,2}$/;
	return date.test(str);
}


module.exports = function(req,res){

	if (!isISO(req.params['timestamp']) &&
		!isDate(req.params['timestamp'])){
		return res.status(400).send('invalid request');
	}

	measurements.find(req.params['timestamp'], function(result){
		if(result) {
			return res.status(200).send(result);
		} else {
			return res.status(404).send('Not found');
		}
	});
}