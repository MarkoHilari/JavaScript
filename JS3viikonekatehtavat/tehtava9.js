function find()
{
  //var luku = document.getElementById('luku').value;
  let num1 = document.getElementById('l1').value;
  let num2 = document.getElementById('l2').value;
  let num3 = document.getElementById('l3').value;
  let num4 = document.getElementById('l4').value;
  let num5 = document.getElementById('l5').value;
  console.log(Math.max(num1, num2, num3, num4, num5))
  console.log(Math.min(num1, num2, num3, num4, num5))
  document.getElementById('vastaus').innerHTML = "Suurin numero on " + " " +  Math.max(num1, num2, num3, num4, num5) +
  "<br /> Pienin numero on" + " " + Math.min(num1, num2, num3, num4, num5) ;
//
}
