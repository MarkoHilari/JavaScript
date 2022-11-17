function vuosi()
{
let vuosi = document.getElementById('ka').value;
if ((0 == vuosi % 4) && (0 != vuosi % 100) || (0 == vuosi % 400))
{
   document.getElementById('v1').innerHTML = "Karkaus vuosi";
}
else
  {
    document.getElementById('v1').innerHTML = "Karkaamaton vuosi";
  }
}
