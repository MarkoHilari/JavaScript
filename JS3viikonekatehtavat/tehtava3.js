function onko()
{
  var sana = document.getElementById('tulos').value;
  for(var r = 0; r < sana.length; r++)

  if  (sana[r] == "ö" || sana[r] == "Ö")
{
  document.getElementById('onko').innerHTML = "Löytyy";
}
  else
{
  document.getElementById('onko').innerHTML = "Ei löytynyt";
}
}
