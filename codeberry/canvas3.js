window.onload = function(){
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  context.beginPath();
  context.moveTo(450,0);
  context.lineTo(0, 300);
  context.strokeStyle = 'violet';
  context.stroke();
}
