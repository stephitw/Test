var canvas;
var ctx;
var FPS = 50;

var anchoF = 60;
var altoF = 105;


var  item = function elemento(x,y,v){

	this.x = x;
	this.y = y;

	this.v = v;

	this.color = "red";

	this.number = Math.floor(Math.random() * 9) + 1;

	this.dibuja = function(){
		this.y -= -1*this.v;
		ctx.fillStyle = "red";
	    ctx.fillRect(this.x,this.y,anchoF,altoF);

	    ctx.font = "100px Arial";
	    ctx.fillStyle = "black";
	    ctx.fillText(this.number, this.x,this.y + 90);
	    ctx.fill();
	}

	window.addEventListener("click", function(event){

		var mouse = {
			x: innerWidth,
			y: innerHeight
		};
		
		mouse.x = event.clientX;
		mouse.y = event.clientY;
		console.log("esto es la X "+ mouse.x);
		console.log("esto es la Y "+ mouse.y);

		this.x = x;
		this.y = y+200;

		console.log(x);
		console.log(y);


		// if(this.x == mouse.x && this.y == mouse.y) {
		// 	console.log("hola");
		// }
	});
}

function inicializa(){
  canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	
	
	// addEventListener("click", function(event){
	// 	mouse.x = event.clientX;
	// 	mouse.y = event.clientY;
	// });

  //CREAMOS LOS BLOQUES
	var qty = 3;

	// number = new item(Math.floor(Math.random() * canvas.width) + 1, 0,1);
	// number2 = new item(Math.floor(Math.random() * canvas.width) + 1, 0,0.6);
	number3 = new item(500, 0,2);
	// number4 = new item(Math.floor(Math.random() * canvas.width) + 1,-100,0.5);
	// number5 = new item(Math.floor(Math.random() * canvas.width) + 1,-300,1);
	// number6 = new item(Math.floor(Math.random() * canvas.width) + 1,-400,2.5);


	var numbers = []

	for (var i = 0; i<4; i++){
      numbers.push(new item(Math.floor(Math.random() * canvas.width) + 1, 0,1.2))
      // numbers[i].dibuja()
      // numbers[i].comprueba(x,y)
      // console.log(numbers[i])
	}
	

  setInterval(function(){
  	//console.log("prueba " + numbers[1].x)
		principal(numbers);

		// console.log("Eje X:"+mouse.x+" Eje Y:"+mouse.y);
		var clicked = false;
		// console.log(clicked)
		
						
				// 		if(clicked != true){
				// 			if(mouse.x >= number3.x && mouse.x <= number3.x + anchoF){								
				// 				if(mouse.y >= number3.y && mouse.y <= number3.y + altoF){
				// 					console.log("Has clickado en el número: "+number3.number); // Aixo no va :(
				// 					var clicked = true;
				// 					// console.log(clicked)
									
				// 				}
				// 		}

				// }


  },1000/FPS);
}

function borraCanvas(){
  canvas.width=750;
  canvas.height=500;
}

var mouse = {
	x: innerWidth,
	y: innerHeight
};

function principal(numbers){
  borraCanvas();
  for (var i = 0; i<4;i++){
	  numbers[i].dibuja();
		if(numbers[i].y > 500){
			// console.log(numbers[i].y);
			numbers.push(new item(Math.floor(Math.random() * canvas.width) + 1, 0,1.2));
		}
		console.log("hols");

		if(numbers.x == mouse.x && numbers.y == mouse.y) {
			console.log("hola");
		}
	}
	
	// console.log(numbers.x);


 //  numbers.dibuja();
 //  number2.dibuja();
	// number3.dibuja();

	// if(number3.y > canvas.height){
	// 	number4.dibuja();
	// 	number5.dibuja();
	// 	number6.dibuja();
	// }
}
