function sala()
{
  var tu = document.getElementById('vastaus').value;
  var salasana = "<p>";
  for(var i = 0; i < tu.length; i++)
{
  salasana += tu[i] + 'ö';
}
  salasana += "</p>";
  document.getElementById('tulos').innerHTML = salasana;
}
