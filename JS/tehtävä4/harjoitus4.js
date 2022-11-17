function laske()
{
  var luku = document.getElementById('l0').value;
  if (luku < 16 )
  {
  document.getElementById('t1').innerHTML = "Polkupyörää";
  }
  else if (luku >= 16 && luku < 18)
  {
    document.getElementById('t1').innerHTML = "Mopoa";
  }
  else
  {
    document.getElementById('t1').innerHTML = "Autoa";
  }
}
