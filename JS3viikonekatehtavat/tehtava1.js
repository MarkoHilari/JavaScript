function luvut()
{
    var num = document.getElementById('luku').value;
    var tulosta = "";
    for(var i=2; i<=num; i=i+2)
    {
      tulosta += + i;
      if (i<num)
      {
        tulosta += ", ";
      }
    }
    document.getElementById('nayta').innerHTML = tulosta;
}
