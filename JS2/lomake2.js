function check()
{
  var etunimi = document.getElementById('enimi').value;
  var sukunimi = document.getElementById('snimi').value;
  var koulu = document.getElementById('tulin');
  var pvalikko = document.getElementById('lempiaine');
  var valikonValittuArvo = pvalikko.options[pvalikko.selectedIndex].value;
  var tulin = "";
  for(var i = 0; i < koulu.length; i++)
  {
    if(koulu[i].checked)
    {
      tulin = koulu[i].value;
    }
  }
  if(etunimi.lenght < 1)
  {
    alert("Syötä etunimesi");
  }
  else if (sukunimi.length < 1)
  {
    alert("Syötä sukunimesi");
  }
  else if (tulin.length < 1)
  {
    alert("Millä tulit kouluun");
  }
  else if (valikonValittuArvo.length < 1)
  {
    alert("Mikä on lempituntisi")
  }
  else {
    alert("Kiitos vastauksesta");
    document.getElementById('tulos').innerHTML = "Seuraavat tiedot tallennettu: <br>" + etunimi + " " + "<br />" + "Olet tullut tänään kouluun " + tulin + "<br /> ja lempiaineesi on" + valikonValittuArvo;
  }
}
