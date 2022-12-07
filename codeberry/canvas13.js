window.onload = function () {

  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  var size = 30;
  var posY = 50;
  var padding = 5;

  var red = 255;
  var green = 79;
  var blue = 120;

  for(var rivit = 0; rivit < 6; rivit++){
    var posX = 125;
    for(var nelio = 0; nelio < 6; nelio++){
      context.fillStyle = 'rgb(' + red + ',' + green + ',' + blue +')';
      context.fillRect(posX, posY, size, size);
      red -=7;
      posX += size + padding;
    }
    blue += 15;
    posY += size + padding;
  }

}
