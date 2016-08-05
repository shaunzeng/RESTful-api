module.exports.isISO = function(str){
	var iso = /\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d\d\dZ/ ;
	return iso.test(str);
}

module.exports.isDate = function(str){
	var date = /^\d{4}-\d{1,2}-\d{1,2}$/;
	return date.test(str);
}

module.exports.sanitize = function(obj){
	for (var p in obj){
		if (p != 'timestamp'){
			obj[p] = Number(obj[p]) || null;
			console.log(obj[p],'sanitize');
		}
	}
	return obj;
}