try
{
	$(function(){
		$('.4u').on('click','h6[rel=#mies3]',function(){
			$('#mies3 h4').hide();
			flashembed('flash1','flash/KefexLoader.swf');
		});
		$('.4u').on('click','h6[rel=#mies4]',function(){
			$('#mies4 h4').hide();
			flashembed('flash2','flash/AppLoader.swf');
		});
		$('.simple_overlay').on('click','.close',function(){
			$('#mies2 h4').show();
			$('#flash1,#flash2').html('');
		});
		$('h6[rel]').overlay();
		$('.video').magnificPopup({
			  type: 'iframe'
			});
		$('h6[rel=]').click(function(){
			alert('Flash apps are not supported on your mobile or this Browser');
		});
	});

	$(function(){
        angular.element(document).ready(function() {
               angular.bootstrap(document, ['jkefex']);
          });
    });

    (function(){
    	var width = 1120,
		  height = 400,
		  radius = 10;

		var p0 = [250, 200, 60,'JKefex - JS',],
		  p1 = [560, 300, 120,'Kiran Kumar Amruthaluri',];

		var svg = d3.select(".wrapper-style6").append("svg")
		  .attr("width", width)
		  .attr("height", height)
		.append("g")
		  .call(transition, p0, p1);

		svg.append("path")
		  .attr("class", "mesh")
		  .attr("d", d3.hexbin()
		    .size([width, height])
		    .radius(radius)
		    .mesh);

		svg.selectAll("circle")
		  .data([p0, p1])
		.enter().append("circle")
		  .attr("class", function(d, i) { return i ? "end" : "start"; })
		  .attr("cx", function(d) { return d[0]; })
		  .attr("cy", function(d) { return d[1]; })
		  .attr("r", function(d) { return d[2] / 2 - .5; });

		svg.selectAll("text")
		  .data([p0, p1])
		  .enter().append("text")
		  .attr("x", function(d) { return d[0]; })
		  .attr("y", function(d) { return d[1]; })
		  .text(function(d,i){ return d[3]; })
		  .style('font-size','20px');

		function transition(svg, start, end) {
		var center = [width / 2, height / 2],
		    i = d3.interpolateZoom(start, end);

		svg
		    .attr("transform", transform(start))
		  .transition()
		    .delay(250)
		    .duration(i.duration * 2)
		    .attrTween("transform", function() { return function(t) { return transform(i(t)); }; })
		    .each("end", function() { d3.select(this).call(transition, end, start); });

		function transform(p) {
		    var k = height / p[2];
		    return "translate(" + (center[0] - p[0] * k) + "," + (center[1] - p[1] * k) + ")scale(" + k + ")";
		  }
		}

    })();
}
catch(e)
{
	console.log(e);
}

