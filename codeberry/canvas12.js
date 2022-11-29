window.onload = function() {

  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');

  let size = 50;
  let padding = 5;

  for(var nelio = 0; nelio < 5; nelio++){
    let posX = 15;
    let posY = 15;
    for(var laskuri = 0; laskuri <= nelio; laskuri++){
      context.fillStyle = 'rgba(255,165,0,.5)';
      context.fillRect(posX + laskuri * (size + padding), posY + nelio * (size + padding), size, size);
    }
  }
  /*var size = 50;
  var padding = 5;

  for (rowCounter = 0; rowCounter < 5; rowCounter++) {
    var positionX = 15;
    var positionY = 15;
    for (var squareCounter = 0; squareCounter <= rowCounter; squareCounter++) {
        context.fillStyle = 'rgba(255,165,0,.5)';
        context.fillRect(positionX + squareCounter * (size + padding), positionY + rowCounter * (size + padding), size, size);
    }
}*/

}
