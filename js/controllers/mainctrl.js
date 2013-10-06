jkefex.controller('mainctrl',['$scope','$http','XHR','$location','$window',function($scope,$http,XHR,$location,$window){
	$scope.fetch = function(){
		XHR.doGet('https://graph.facebook.com/kiranbubblyml1',function(data){
			$scope.name = data.name;
		});
		$http({"method":"GET","url":'js/data/template.json',"headers":{"Content-Type":"application/json"}}).success(function(data){
				$scope.content = data;
		});
	};
	$scope.profilepic = 'images/me.jpg';
	$scope.task = "Working at Innominds - Hyderabad Since 3 Months";
	$scope.email = "kirankumar.amruthaluri@gmail.com";
	$scope.fetch();
}]);