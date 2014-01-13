require.config({
	baseUrl: 'scripts/',
	paths: {
		angular: '../../bower_components/angular/angular',
		jquery: '../../bower_components/jquery/jquery',
		css: '../../bower_components/require-css/css',
		d3 : '../../bower_components/d3/d3',
		jplayer: '../../bower_components/jplayer/jquery.jplayer/jquery.jplayer',
		eve : 'plug-ins/eve',
		'raphael-core' : 'plug-ins/raphael.core',
		'raphael-svg' : 'plug-ins/raphael.svg',
		'raphael-vml' : 'plug-ins/raphael.vml',
		raphael : 'plug-ins/raphael.amd',
		config: 'vendor/config',
		skel: 'vendor/skel.min',
		jkefex: 'plug-ins/jkefex',
		jtools: 'plug-ins/jquerytools.min',
		jpopup: 'plug-ins/jquery.magnific-popup',
		d3hexbin: 'plug-ins/d3.hexbin',
		lazyline: 'plug-ins/lazy-line',
		notifybar: 'plug-ins/notifier/jquery.notifyBar',
		app:'app',
		custom: 'custom'
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'jquery' : {
			'exports':['jQuery','$']
		},
		'config': {
			deps: ['jquery']
		},
		'skel': {
			deps: ['config']
		},
		'jkefex': {
			deps: ['jquery']
		},
		'jtools': {
			deps: ['jquery']
		},
		'jpopup':{
			deps: ['jquery']
		},
		'jplayer':{
			deps: ['jquery']
		},
		'd3' : {
			'exports':['d3']
		},
		'd3hexbin':{
			deps:['d3'],
			exports: ['hexbin']
		},
		'notifybar' : {
			deps: ['jquery']
		},
		'app':{
			deps: ['angular']
		},
		'custom': {
			deps: ['d3hexbin','jplayer','raphael','jtools','jpopup','notifybar']
		}

	}
});


require( [
	'angular',
	'jquery',
	'config',
	'skel',
	'jkefex',
	'jtools',
	'jpopup',
	'd3',
	'd3hexbin',
	'app',
	'custom',
], function() {
	// 'use strict';
	var $html = angular.element(document.getElementsByTagName('html')[0]);
	$html.removeClass('no-js');
	$html.addClass('js');

	angular.element().ready(function() {
		angular.bootstrap($html,['jkefex']);
	});
	
});