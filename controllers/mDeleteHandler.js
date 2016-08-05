var measurements = require('../models/measurements');
module.exports = function(req,res){

	measurements.delete(req.params['timestamp'], function(result){		
		if (result){
			return res.status(204).end();
		} else {
			return res.status(404).end();
		}
	});
}