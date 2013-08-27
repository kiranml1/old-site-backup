jkefex.directive('jkefexdemo',function(){
	return {
		restrict:'E',
		scope:{
			cont:'='
		},
		replace:true,
		template:'<div class="4u" ng-repeat="con in cont"><article class="box box-style2"><a href="{{con.tempurl}}" class="various fancybox.ajax image image-full"><img src="{{con.thumb}}" alt="" /></a>'+
					'<h3><a href="{{con.tempurl}}" style="text-decoration:none" class="various fancybox.ajax">'+
					'{{con.title}}</a></h3>'+
					'<p>{{con.subtitle}}</p></article></div>'
		};
});