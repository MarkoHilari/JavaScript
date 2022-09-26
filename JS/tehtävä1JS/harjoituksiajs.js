function kolmeluku()
{
  var luku = [];
  luku[0] = document.getElementById('l1').value;
  luku[1] = document.getElementById('l2').value;
  luku[2] = document.getElementById('l3').value;
  document.getElementById('v2').innerHTML = luku.sort();
}
