var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

var W = 500,H = 500;
var particles = [];
for(var i=0;i<50;i++)
{
	particles.push(new createParticle());
}

function createParticle()
{
	this.x = Math.random()*W;
	this.y = Math.random()*H;
	
	this.vx = Math.random()*20 - 10;
	this.vy = Math.random()*20 - 10;
	
	var r = Math.random()*255>>0;
	var g = Math.random()*255>>0;
	var b = Math.random()*255>>0;
	this.color = "rgba("+r+","+g+","+b+",0.5)";
	this.radius =  Math.random()*20 + 20;
}

var x = 100,y = 100;
function draw()
{
	ctx.globalCompositeOperation = "source-over";
	ctx.fillStyle ="rgba(0,0,0,0.5)";
	ctx.fillRect(0,0,W,H);
	ctx.globalCompositeOperation = "lighter";
	for(var t=0;t<particles.length;t++)
	{
		var p = particles[t];
		ctx.beginPath();
		
		var gradient = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.radius);
		gradient.addColorStop(0,"white");
		gradient.addColorStop(0.4,"white");
		gradient.addColorStop(0.4,p.color);
		gradient.addColorStop(1,"black");
		
		ctx.fillStyle = gradient;
		ctx.arc(p.x,p.y,40,Math.PI*2,false);
		ctx.fill();
		
		p.x += p.vx;
		p.y += p.vy;
		
		if(p.x < -50) p.x = W+50;
		if(p.y < -50) p.y = W+50;
		if(p.x > W+50) p.x = -50;
		if(p.x > H+50) p.y = -50;
	}
}

setInterval(draw,33);