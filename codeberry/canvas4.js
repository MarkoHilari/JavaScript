window.onload = function(){
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");
  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;
  context.fillRect(100,100,canvasWidth-100,canvasHeight-100);
}
