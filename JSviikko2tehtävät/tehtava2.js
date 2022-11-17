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
