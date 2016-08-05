var common = require('../shared/common.shared');

// Data for post method
//var data = [];

//data for get method
/*var data = [{
	'timestamp':'2015-09-01T16:00:00.000Z',
	'temperature':27.1,
	'dewPoint':16.7,
	'precipitation':0
},{
	'timestamp':'2015-09-01T16:10:00.000Z',
	'temperature':27.3,
	'dewPoint':16.9,
	'precipitation':0
},{
	'timestamp':'2015-09-01T16:20:00.000Z',
	'temperature':27.5,
	'dewPoint':17.1,
	'precipitation':0
},{
	'timestamp':'2015-09-01T16:30:00.000Z',
	'temperature':27.4,
	'dewPoint':17.3,
	'precipitation':0
},{
	'timestamp':'2015-09-01T16:40:00.000Z',
	'temperature':27.2,
	'dewPoint':17.2,
	'precipitation':0
},{
	'timestamp':'2015-09-02T16:00:00.000Z',
	'temperature':28.1,
	'dewPoint':18.3,
	'precipitation':0
}];*/


//Date for Put method
/*var data = [{
	'timestamp':'2015-09-01T16:00:00.000Z',
	'temperature':27.1,
	'dewPoint':16.7,
	'precipitation':0,
},{
	'timestamp':'2015-09-01T16:10:00.000Z',
	'temperature':27.3,
	'dewPoint':16.9,
	'precipitation':0,
}];
*/


// data for Delete Method
/*var data = [{
	'timestamp':'2015-09-01T16:00:00.000Z',
	'temperature':'27.1',
	'dewPoint':'16.7',
	'precipitation':'0',
},{
	'timestamp':'2015-09-01T16:10:00.000Z',
	'temperature':'27.3',
	'dewPoint':'16.9',
	'precipitation':'0',
}];*/


// data for statistics
var data = [{
	'timestamp':'2015-09-01T16:00:00.000Z',
	'temperature':27.1,
	'dewPoint':16.9,
},{
	'timestamp':'2015-09-01T16:10:00.000Z',
	'temperature':27.3,
},{
	'timestamp':'2015-09-01T16:20:00.000Z',
	'temperature':27.5,
	'dewPoint':17.1,
},{
	'timestamp':'2015-09-01T16:30:00.000Z',
	'temperature':27.4,
	'dewPoint':17.3,
},{
	'timestamp':'2015-09-01T16:40:00.000Z',
	'temperature':27.2,
},{
	'timestamp':'2015-09-01T17:00:00.000Z',
	'temperature':28.1,
	'dewPoint':18.3,
}]
	

module.exports.store = function(obj, cb){
	data.push(common.convertToNum(obj));
	cb(data);
}

module.exports.find = function(str, cb){
	var result = [];

	if (common.isISO(str)){
		for (var i =0; i < data.length ; i++){
			if (data[i]['timestamp'] == str) {
				result = data[i];
			}
		}		
	} else if (common.isDate(str)) {
		for (var i=0; i< data.length; i++){
			if (data[i]['timestamp'].indexOf(str) != -1) {
				result.push(data[i]);
			}
		}
	}

	if (result.length == 0) {
		cb(false);
	} else {
		cb(result);
	}
	
}

module.exports.replace = function(obj, cb){
	var index;

	obj = common.convertToNum(obj);

	for (var i =0; i< data.length; i++){
		if (data[i]['timestamp'] == obj['timestamp']){
			index = i;
		}
	}

	if (index || index == 0) {
		data[index]['timestamp'] = obj;
		cb(true);
	} else {
		cb(false);
	}
}

module.exports.update = function(obj, cb){
	var result = false;
	obj = common.convertToNum(obj);

	for(var i = 0; i < data.length; i++){
		if (data[i]['timestamp'] == obj['timestamp']){
			for(var p in obj){
				data[i][p] = obj[p];
			}

			result = true;
		}
	}
	cb(result);

}

module.exports.delete = function(str, cb){
	var result = false;
	for (var i =0; i < data.length; i++){
		if (data[i]['timestamp'] == str){
			data.splice(i,1);
			result = true;
			break;
		}
	}
	cb(result);
}


module.exports.getStats = function(query, cb){
	cb(true);
}

