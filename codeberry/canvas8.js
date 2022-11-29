window.onload = function() {
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;
  context.beginPath();
  context.moveTo(canvasWidth - canvasWidth, canvasHeight - canvasHeight);
  context.lineTo(canvasWidth, canvasHeight);
  context.strokeStyle = 'red';
  context.stroke();

  context.beginPath();
  context.moveTo(canvasWidth - canvasWidth, canvasHeight);
  context.lineTo(canvasWidth, canvasHeight - canvasHeight);
  context.strokeStyle = 'blue';
  context.stroke();
}
/*window.onload = function(){
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  context.beginPath();
  context.moveTo(450,0);
  context.lineTo(0, 300);
  context.strokeStyle = 'violet';
  context.stroke();
}*/
