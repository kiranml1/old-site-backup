jkefex.controller('mainctrl',['$scope','$http','$window','$timeout',function($scope,$http,$window,$timeout){
	$scope.fetch = function(){
		var apiKey = "58b96e3dad4bc68a4657bd77b508fbdf";
		$http.get("data/template.json",{'timeout':1000}).success(function(data){
				$scope.content = data;
		});
	};
	function dhm(t){
	    var cd = 24 * 60 * 60 * 1000,
	        ch = 60 * 60 * 1000,
	        d = Math.floor(t / cd),
	        h = '0' + Math.floor( (t - d * cd) / ch),
	        m = '0' + Math.round( (t - d * cd - h * ch) / 60000);
	    //return [d, h.substr(-2), m.substr(-2)].join(':');
	    return Math.abs((d/365)).toFixed(1);
	}
	$scope.profilepic = 'images/me.jpg';
	$scope.task = "Working at Innominds - Hyderabad Since "+ dhm((new Date("July 01, 2013 10:00:00"))-(new Date())) +" Years";
	$scope.email = "kirankumar.amruthaluri@gmail.com";
	$scope.experience = dhm((new Date("Febraury 1, 2013 10:00:00"))-(new Date()));
	$scope.fetch();
}]);