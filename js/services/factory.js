jkefex.factory('XHR',function($http){
	var XHR =  function(data){
		angular.extend(this,data);
	};
	XHR.doGet = function(url,successfn){
		$http.get(url).success(function(data){
			successfn(data);
		});
	};
	return XHR;
});