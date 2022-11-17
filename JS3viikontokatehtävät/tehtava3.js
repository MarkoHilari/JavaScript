function lottonumerot()
{
  var numero = [];
  var laske;
  for(var lotto = 0; lotto < 7; lotto++)
  {
    laske = Math.floor(Math.random()*40)+1;
    if(!numero.includes(laske))
    {
      numero[lotto] = laske;
    }
    else
    {
      lotto--;
    }
  }
  numero.sort(function(a, b){return a - b});
  var tulosta = "";
  for(var a = 0; a < numero.length; a++)

  {
      tulosta += numero[a].toString() + " ";
  }
  document.getElementById('numerot').innerHTML = '<p>' + tulosta + '</p>';
}
