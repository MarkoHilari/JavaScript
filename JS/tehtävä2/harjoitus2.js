function laske()
{
  var l1, l2, l3, l4, l5;
  l1 = parseInt(document.getElementById("l1").value);
  l2 = parseInt(document.getElementById("l2").value);
  l3 = parseInt(document.getElementById("l3").value);
  l4 = parseInt(document.getElementById("l4").value);
  l5 = parseInt(document.getElementById("l5").value);
  if (l1 > l2 && l1 > l3 && l1 > l4 && l1 > l5)
  {
      document.getElementById('v1').innerHTML = "1. luku on suurin";
  }
  else if (l2 > l3 && l2 >l4 && l2 >l5)
  {
      document.getElementById('v1').innerHTML = "2. luku on suurin";
  }
  else if (l3 > l4 && l3 >l5)
  {
    document.getElementById('v1').innerHTML = "3. luku on suurin";
  }
  else if (l4 > l5)
  {
    document.getElementById('v1').innerHTML = "4. luku on suurin";
  }
  else
  {
    document.getElementById('v1').innerHTML = "5. luku on suurin";
  }
  console.log(l1 +" " + l2 + " " + l3 + " " + l4 + " " + l5);
}
