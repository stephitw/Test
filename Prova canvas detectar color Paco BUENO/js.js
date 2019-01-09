function canvas(){
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const hitCanvas = document.createElement('canvas');
const hitCtx = hitCanvas.getContext('2d');

const width = 700;
const height = 600;

canvas.width = width;
hitCanvas.width = width;
canvas.height = height;
hitCanvas.height = height;


function getRandomColor() {
 const r = Math.round(Math.random() * 255);
 const g = Math.round(Math.random() * 255);
 const b = Math.round(Math.random() * 255);
 return `rgb(${r},${g},${b})`;
}

const colorsHash = {};

const numbers = [];



//Cantidad de números

var qty = 3;
var numColors = ["rgb(118, 205, 232)","rgb(224, 57, 51)","rgb(255, 147, 40)","rgb(229, 237, 30)","rgb(137, 193, 73)","rgb(244, 53, 152)"];

for(n=0; n<qty; n++){
  var randomNumber = Math.floor(Math.random() * 9) + 1;
  var randomX = Math.floor(Math.random() * 550) + 50;
  var randomY = Math.floor(Math.random() * 450) + 100;
  numbers[n] = {id: n, number: randomNumber, color: numColors[n], x: randomX, y:randomY, radius: 50}
}


numbers.forEach(number => {
  while(true) {
     const colorKey = getRandomColor();
     if (!colorsHash[colorKey]) {
        number.colorKey = colorKey;
        colorsHash[colorKey] = number;
        return;
     }
  }
});

numbers.forEach(number => {

  ctx.beginPath();
  ctx.font = "100px Arial";
  //ctx.arc(number.x + 25, number.y - 35, number.radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = number.color;
  ctx.fillText(number.number, number.x, number.y - 10);
  ctx.fill();

  /*CREANDO ÁREA CLICKABLE*/
  hitCtx.beginPath();
  hitCtx.arc(number.x + 25, number.y - 35, number.radius, 0, 2 * Math.PI, false);
  hitCtx.fillStyle = number.colorKey;
  hitCtx.fill();
});

canvas.addEventListener('click', (e) => {
  const mousePos = {
    x: e.clientX - canvas.offsetLeft,
    y: e.clientY - canvas.offsetTop
  };
  const pixel = hitCtx.getImageData(mousePos.x, mousePos.y, 1, 1).data;
  const color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
  const shape = colorsHash[color];
  console.log(shape);
  if (shape) {
     alert('click on number: ' + shape.number);
  }
 });  

}

// PROVES 


//         /* Animación de caída */
//         this.fall = function(){
//             this.y = this.y+4;

//             if(this.y > canvas2.height) {
//               var randomNumber = Math.floor(Math.random() * 9) + 1;
//               var randomX = Math.floor(Math.random() * 550) + 50;
//               numbers[n] = {id: n, number: randomNumber, color: numColors[n], x: randomX, y:0, radius: 30}

//                 fallenNums++;
//                 //console.log(fallenNums);
//                     if(fallenNums == errorMax[0]) {
//                         //console.log("GAME OVER");
//                         fallenNums = 0;
//                     }
//             }
//         }

//         var numColors = ["rgb(118, 205, 232)","rgb(224, 57, 51)","rgb(255, 147, 40)","rgb(229, 237, 30)","rgb(137, 193, 73)","rgb(244, 53, 152)"];

//         // var randomNum = arrayNums[Math.floor(Math.random()*9)+1];
//         var randomColor = numColors[Math.floor(Math.random()*numColors.length)];

//         this.show = function(){
//           numbers.forEach(number => {
//             while(true) {
//                const colorKey = getRandomColor();
//                if (!colorsHash[colorKey]) {
//                   number.colorKey = colorKey;
//                   colorsHash[colorKey] = number;
//                   return;
//                }
//             }
//           });
          
//           numbers.forEach(number => {
          
//             ctx.beginPath();
//             ctx.font = "100px Arial";
//             //ctx.arc(number.x + 25, number.y - 35, number.radius, 0, 2 * Math.PI, false);
//             ctx.fillStyle = number.color;
//             ctx.fillText(number.number, number.x, number.y - 10);
//             ctx.fill();
          
//             hitCtx.beginPath();
//             hitCtx.arc(number.x + 25, number.y - 35, number.radius, 0, 2 * Math.PI, false);
//             hitCtx.fillStyle = number.colorKey;
//             hitCtx.fill();
//           });
//         }

// function draw(){
//   ctx.fillStyle = "rgba(22,21,20,0)";
//   ctx.clearRect(0, 0, canvas2.width, canvas2.height);

//   for(i=0; i<numOfNums; i++){
//       numbers[i].show();
//       numbers[i].fall();
//       console.log(numbers[i]);
//   }
// }


// function update(){
//   draw();
//   window.requestAnimationFrame(update);
// }

// update();

