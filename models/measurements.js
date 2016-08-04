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
var data = [{
	'timestamp':'2015-09-01T16:00:00.000Z',
	'temperature':'27.1',
	'dewPoint':'16.7',
	'precipitation':'0',
},{
	'timestamp':'2015-09-01T16:10:00.000Z',
	'temperature':'27.3',
	'dewPoint':'16.9',
	'precipitation':'0',
}];



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


function isISO(str){
	var iso = /\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d\d\dZ/ ;
	return iso.test(str);
}

function isDate(str){
	var date = /^\d{4}-\d{1,2}-\d{1,2}$/;
	return date.test(str);
}	

module.exports.store = function(obj, cb){
	data.push(obj);
	cb(data);
}


module.exports.find = function(str, cb){
	var result = [];

	if (isISO(str)){
		console.log('finding thru ISO');
		for (var i =0; i < data.length ; i++){
			if (data[i]['timestamp'] == str) {
				result = data[i];
			}
		}		
	} else if (isDate(str)) {
		console.log('finding thru yyyy-mm-dd');
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

module.exports.replace = function(str, obj, cb){

	var index;

	for (var i =0; i< data.length; i++){
		if (data[i]['timestamp'] == str){
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

module.exports.delete = function(str, cb){
	checkFormat(str);
	cb(true);
}

