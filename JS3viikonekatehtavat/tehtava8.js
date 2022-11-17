function potenssi()
{
  var luku = document.getElementById('luku').value;
  var pote = document.getElementById('pote').value;
  var yht = luku;
  for(var i = 1; i < pote; i++)
  {
    yht *= luku;
  }
  document.getElementById('tulos').innerHTML = yht;
  }
