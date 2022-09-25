function tarkasta()//Tätä en osaa tehdä vielä, vaatii paljon opetusta ja harjoitusta. 
{
  var etunimi = document.getElementById('enimi').value;
  var sukunimi = document.getElementById('snimi').value;
  var koulu = document.getElementsByName('kouluun');
  var pvalikko = document.getElementById('lempitunti');
  var valikonValittuArvo = pvalikko.options[pvalikko.selectedIndex].value;
  var kouluun = "";
  for(var i = 0; i < koulu.length; i++)
  {
    if(koulu[i].checked)
    {
      kouluun = koulu[i].value;
    }
  }
  if(etunimi.length < 1)
  {
    alert("Etunimi puutteellinen");
  }
  else if(sukunimi.length < 1)
  {
    alert("Sukunimi puutteellinen");
  }
  else if (kouluun.length < 1)
  {
    alert("Miten tulit kouluun puutteelinen");
  }
  else if(valikonValittuArvo.length < 1)
  {
    alert("Lempituntisi puuttuu")
  }
  else {
    alert("Kiitos lomakkeen täyttämisestä");
    document.getElementById('tulos').innerHTML = "Annoit seuraavat tiedot: <br>" + etunimi + " " + sukunimi + "<br />" + "Tulit tänään kouluun " + kouluun + "<br /> Ja pidät seuraavasta tunnista: " + valikonValittuArvo;
  }

}
