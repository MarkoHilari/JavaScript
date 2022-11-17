function hip()
{
  let tulosta= "";
  //tehdään silmukka joka lukee luvut 1-100
  for(var i = 1; i <= 100; i++)
  //lasketaan onko luku jaollinen 3 tai viidellä
  {
    if(i % 3 == 0 && i % 5 == 0)
    // Jos on molemmilla tulostetaan hipheijaa
    {
      tulosta += i + "-> hipheijaa <br>";
    }
    // Jos vain 3:lla, tulostetaan hip
    else if (i % 3 == 0)
    {
      tulosta += i + "-> hip <br>";
    }
    // Jos vain 5:lla tulostetaan heijaa
    else if (i % 5 == 0)
    {
      tulosta += i + "-> heijaa <br>";
    }
    else {
      tulosta += i + "<br>";
    }
  // Tulostetaan koko annettujen lukujen sisältö hötösivulle
  }
  document.getElementById('hips').innerHTML = tulosta;
}
