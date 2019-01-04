var canvas = document.querySelector('canvas'); //we grab an element from HTML

//Pb to be resolved minRadius

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//to resize canvas

var c = canvas.getContext('2d'); //there we can draw in 2d

	var mouse = {
		x: undefined,
		y: undefined
	}

	var maxRadius = 40;
	//var minRadius = 2; better put it in the object function

	var colorArray = [ //NOT WORKING ????
		'#ffaa33',
		'#99ffaaa',
		'#00ff00',
		'#4411aa',
		'#ff1100'
	];
	//console.log(colorArray.lenght);

	// window.addEventListener('mousedown', //to add intereactivity with the canvas (monitor mouse mouvement=mousemove => add an anonymous function)
	// 	function(event) {  //=mousemove executes this function and we add an event argument
	// 	//console.log(event);
	// 	mouse.x = event.x;
	// 	mouse.y = event.y;
	// 	//console.log(mouse);
	// }) 

	// window.addEventListener('resize', function(){ //responsive by resizing
	// 	canvas.width = window.innerWidth;
	// 	canvas.height = window.innerHeight;

	// 	init();
	// })


	function Circle(x, y, dx, dy, radius, minRadius, event) { //Create a JS object (arguments = arguments new Object())
		this.x = x; //give x value each time we crate a new circle it´ll pass by x and y values
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
		this.minRadius = minRadius;
		this.color = '#'+Math.floor(Math.random()*16777215).toString(16);


	window.addEventListener('mousedown', //to add intereactivity with the canvas (monitor mouse mouvement=mousemove => add an anonymous function)
		function(event) {  //=mousemove executes this function and we add an event argument
		//console.log(event);
		mouse.x = event.x;
		mouse.y = event.y;
		console.log(mouse);
	}) 

		this.draw = function() { // method draw
			c.beginPath(); 
			c.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false); 
			// c.strokeStyle = 'blue'; 
			// c.stroke();
			//c.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16); //Random colors
			//c.fillStyle = colorArray[Math.floor(Math.random() * colorArray.lenght)]; // !!NOT WORKING random from 0 to 4 but better .lenght
			c.fillStyle = this.color; //put the randow in the Circlefunction-object
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

		//interactivity
		if (mouse.x - this.x < 50 && mouse.x - this.x > -50  //all the circles are growing right and left
			&& mouse.y - this.y < 50 && mouse.y - this.y > -50 //up and down

		) { 
			if (this.radius < maxRadius) { //add a size limit maxRadius is a variable we could put a fix number
				this.radius += 1;
			}
		} else if (this.radius > this.minRadius) {   //to avoid circles keep growing
			this.radius -= 1;
		}

		this.draw(); //draw function has to be in update function
		}
	}
	//var circle = new Circle(200, 200, 3, 3, 30);
	var circle = new Circle(x, y, dx, dy, radius);
	var circleArray = [];

	for (var i = 0; i < 100; i++) { //numbers of circles
		//var radius = 30;
		var radius = Math.random() * 3 +1; //min radius of 1 => range 1 to 4
		var x = Math.random() * (innerWidth - radius * 2) + radius;
		var y = Math.random() * (innerHeight - radius * 2) + radius;
		var dx = (Math.random() - 0.5) * 6.5;
		var dy = (Math.random() - 0.5) * 6.5;
		//var radius = 30;
		circleArray.push(new Circle(x, y, dx, dy, radius));
		//var circle = new Circle(200, 200, 3, 3, 30); //(x, y, dx, dy, radius)
	}	
	circle.draw();
	
	console.log(circleArray);
	//var circleArray = [];


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