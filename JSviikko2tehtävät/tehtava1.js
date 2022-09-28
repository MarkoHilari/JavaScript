function numero()
{
  var luku = document.getElementById('l1').value;
  if(luku <= 0)
  {
    document.getElementById('v1').innerHTML = "Luku on negatiivinen";
  }
  else {
    document.getElementById('v1').innerHTML = "luku on positiivinen";
  }
}

function paiva()
{
  var viikonpaiva = document.getElementById('pp').value;
  switch (viikonpaiva)
  {
    case "1":
      document.getElementById('v1').innerHTML = ("Päivä on Maanantai");
      break;
    case "2":
      document.getElementById('v1').innerHTML = ("Päivä on Tiistai");
      break;
    case "3":
      document.getElementById('v1').innerHTML = ("Päivä on Keskiviikko");
      break;
    case "4":
      document.getElementById('v1').innerHTML = ("Päivä on Torstai");
      break;
    case "5":
      document.getElementById('v1').innerHTML = ("Päivä on Perjantai");
      break;
      case "6":
      document.getElementById('v1').innerHTML = ("Päivä on Lauantai");
      break;
      case "7":
      document.getElementById('v1').innerHTML = ("Päivä on Sunnuntai");
      break;
    default:
      document.getElementById('v1').innerHTML = "väärä tieto";
  }
}

function luku()
{
  //var l1, l2, l3, l4, l5

  var l1 = document.getElementById('l1').value;
  var l2 = document.getElementById('l2').value;
  var l3 = document.getElementById('l3').value;
  var l4 = document.getElementById('l4').value;
  var l5 = document.getElementById('l5').value;
  var luvut = l1, l2, l3, l4, l5;
  var tulos = parseFloat(l1) + parseFloat(l2) + parseFloat(l3) + parseFloat(l4) +
   parseFloat(l5);
  //var summa;
  //summa = l1 + l2 + l3 + l4 + l5;
  var keskiarvo = tulos / 5;
  document.getElementById('v1').innerHTML = "summa" + " " + "on " + tulos + " "+ "keskiarvo" +" " + "on " + keskiarvo;
}
