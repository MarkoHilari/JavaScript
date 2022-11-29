window.onload = function () {
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;
  var flagWidth = 250;
  var flagHeight = 50;
  var posX = (canvasWidth - flagWidth) / 2;
  var posY = (canvasHeight - flagHeight) / 2;
  context.fillStyle = 'red';
  context.fillRect(posX, posY - flagHeight, flagWidth, flagHeight);
  context.fillStyle = 'white';
  context.fillRect(posX, posY, flagWidth, flagHeight);
  context.fillStyle = 'green';
  context.fillRect(posX, posY + flagHeight, flagWidth, flagHeight);
}
