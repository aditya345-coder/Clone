const canvas = document.querySelector('#canvas');
console.log('Canvas is ',canvas);
canvas.width = 800;
canvas.height = 800;
canvas.style = "border: 1px solid black";
const context = canvas.getContext('2d');
// Line
// context.moveTo(0,0);
// context.lineTo(20,300);
// context.stroke();

// // rect
// context.fillStyle = "green";
//context.fillRect(10, 10, 150, 100);

// Circle
// context.beginPath();
// context.arc(90, 50, 40 , 0 , 2 * Math.PI);
// context.stroke();

// Image
const image = new Image();
image.src = '../images/small.png';
console.log(image);
context.drawImage(image,0,0, 256,256);

// Text
// context.font = '20px Arial';
// context.fillStyle = 'red';
// context.fillText('Brain Mentors', 50,50 );



