window.onload = function() {
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');

  let pos = 20;
  let size = 45;

  for(var kolmio = 0 ; kolmio < 10; kolmio++){
    context.fillStyle = 'rgba(255,165,0,.5)';
    context.fillRect(pos, pos, size, size);
    pos += size / 2;
  }

}
