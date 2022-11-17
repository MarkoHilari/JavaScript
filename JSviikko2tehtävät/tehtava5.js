function lause()
{
  var luku = document.getElementById('lu').value;
  var temp = 0;
  var vastaus = "";
  for(var i = 1; i <= 10; i++)
  {
    temp = luku * i;
    vastaus += "luku " + luku + " * " + i + " = " + temp +"<br />";
  }
  document.getElementById('kertotaulu').innerHTML = vastaus;
}
