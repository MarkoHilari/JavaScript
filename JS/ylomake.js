function tulos()
{
  var etunimi = document.getElementById('enimi').value;
  var sukunimi = document.getElementById('snimi').value;

  if(etunimi == "" || sukunimi == "")
  {
    alert("Syötä kaikki pyydettävät tiedot, kiitos!")
  }
  else
  {
    document.getElementById('v1').innerHTML = "Hei " + etunimi + " " + sukunimi;
  }
}
