jkefex.controller('mainctrl',['$scope','$http','XHR','$location','$window',function($scope,$http,XHR,$location,$window){
	$scope.fetch = function(){
		XHR.doGet('https://graph.facebook.com/kiranbubblyml1',function(data){
			$scope.name = data.name;
		});
		$http({"method":"GET","url":'js/data/template.json',"headers":{"Content-Type":"application/json"}}).success(function(data){
				$scope.content = data;
		});
	};
	$scope.topnavitems = ['Top','Work','Portfolio','Contact'];
	$scope.designation = "Front End Developer - PHP, HTML5, CSS3, Core JS & JQuery";
	$scope.profilepic = 'images/me.jpg';
	$scope.task = "Presently I'm Working on Chrome Experiment as Extension with jKefex JS";
	$scope.email = "kirankumar.amruthaluri@gmail.com";
	$scope.changeLoc = function(){
		$window.location.href = '/jkefexjs/ytv/';
	};
	$scope.fetch();
}]);