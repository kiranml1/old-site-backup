angular.module('jkefex',[])
.controller('mainctrl',['$scope','$http','$window','$timeout',function($scope,$http,$window,$timeout){
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
  $scope.experience = dhm((new Date("October 15, 2012 10:00:00"))-(new Date()));
  $scope.fetch();
}])
.directive('jkefexdemo',function(){
  return {
    restrict:'E',
    scope:{
      cont:'='
    },
    replace:true,
    template:'<div class="2u" ng-repeat="con in cont"><article class="box box-style2"><a href="{{con.tempurl}}" class="various image image-full"><img ng-src="{{con.thumb}}" alt="" /></a>'+
          '<h6 style="font-size:0.8em;"><a href="{{con.codeurl}}" style="text-decoration:none" class="various">'+
          '{{con.title}}</a></h6>'+
          '</article></div>'
    };
})
.factory('XHR',function($http){
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