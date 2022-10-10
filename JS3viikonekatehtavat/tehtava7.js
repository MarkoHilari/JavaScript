function laskeYhteen()
{
  var laske = 0;
  for(var i = 1; i <= 10; i++)
  {
    laske += i;
  }
  document.getElementById('tulosta').innerHTML = " " +laske + " ";
}
