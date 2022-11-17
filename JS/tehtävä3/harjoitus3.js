function laske()
{
  var num = document.getElementById('l0').value;
  if ((num % 2) == 0)
  {
  document.getElementById('t1').innerHTML = "luku on parillinen";
  }
  else
  {
  document.getElementById('t1').innerHTML = "luku on pariton";
  }

}
