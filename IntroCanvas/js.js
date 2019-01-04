function random_bg_color() {
    var x = Math.floor(Math.random() * 116);
    var y = Math.floor(Math.random() * 116);
    var z = Math.floor(Math.random() * 116);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
 document.body.style.background = bgColor;
    }

random_bg_color();

var canvas = document.querySelector('canvas'); //we grab an element from HTML

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//to resize canvas

var c = canvas.getContext('2d'); //there we can draw in 2d

// c.fillStyle = 'rgba(255, 0, 0, 0.5)';// to change color
// c.fillRect(100, 100, 100, 100);
// //Rect= rectangle top, left, width, height
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(300, 300, 100, 100);

// console.log(canvas);

//Drawing Line
// c.beginPath();
// c.moveTo(50, 300); //from x, y
// c.lineTo(300, 100); //to x, y
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();//to draw the line

//Drawing Arc / Circle
//c.arc( x: Int, y: Int, radius: Int, 
	//startAngle: Float, endAngle: Float, 
	//drawCounterClockwise: Bool (false));
// c.beginPath(); //rno to interfer with the path up 
// c.arc( 300, 300, 30, 0, Math.PI * 2, false); 
// c.strokeStyle = 'blue'; 
// c.stroke();

// for (var i = 0; i < 88; i++) { //loop to create multiple circles
// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
// 	c.beginPath(); 
// 	c.arc( x, y, 30, 0, Math.PI * 2, false); 
// 	//c.strokeStyle = 'blue'; 
// 	//c.strokeStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
// 	//c.stroke();
// 	c.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16); //Random colors
// 	c.fill();
// }
	
	// var x = 200;
	// var y = 200;
	// var x = Math.random() * innerWidth;
	// var y = Math.random() * innerHeight;
	// // var dx = 4;
	// // var dy = 4;
	// var dx = (Math.random() - 0.5) * 9;
	// var dy = (Math.random() - 0.5) * 9;
	// var radius = 30;

	function Circle(x, y, dx, dy, radius) { //Create a JS object (arguments = arguments new Object())
		this.x = x; //give x value each time we crate a new circle it´ll pass by x and y values
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;

		this.draw = function() { // method draw
			c.beginPath(); 
			c.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false); 
			// c.strokeStyle = 'blue'; 
			// c.stroke();
			//c.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16); //Random colors
			c.fill();
		}

		this.update = function() {
			if (this.x + this.radius > innerWidth || this.x - radius < 0) {
			this.dx = -this.dx;
		}

		if (this.y + this.radius > innerHeight || this.y - radius < 0) {
			this.dy = -this.dy;
		}
		//x += 1; //speed enpx 
		this.x += this.dx;
		this.y += this.dy;

		this.draw(); //draw function has to be in update function
		}
	}



	var circleArray = [];

	for (var i = 0; i < 200; i++) {
		var radius = 30;
		var x = Math.random() * (innerWidth - radius * 2) + radius;
		var y = Math.random() * (innerHeight - radius * 2) + radius;
		var dx = (Math.random() - 0.5) * 6.5;
		var dy = (Math.random() - 0.5) * 6.5;
		//var radius = 30;
		circleArray.push(new Circle(x, y, dx, dy, radius));
		var circle = new Circle(200, 200, 3, 3, 30); //(x, y, dx, dy, radius)
	}	
	//circle.draw();
	//https://www.youtube.com/watch?v=yq2au9EfeRQ&index=3&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL
	console.log(circleArray);

	function animate() {
		requestAnimationFrame(animate);
		c.clearRect(0, 0, innerWidth, innerHeight); //to clear the canvas
		
		for (var i = 0; i < circleArray.length; i++) {
			circleArray[i].update();
		}
		//circle.draw();
		circle.update();

	
	}

	animate();