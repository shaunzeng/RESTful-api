module.exports = function(req,res){
	measurements.delete(req.body['timestamp'], function(result){
		
		return res.status(204).send('Deleted!');
	});
}