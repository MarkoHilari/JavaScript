function laske()
{
  var lang = document.getElementById('kieli').value;
  if (lang == "Suomi")
  {
    document.getElementById('t1').innerHTML =  "Hei Maailma!";
  }
  if (lang == "Ruotsi")
  {
    document.getElementById('t1').innerHTML =  "Hej värld!";
  }
  if (lang == "Tanska")
  {
    document.getElementById('t1').innerHTML =  "Hej verden!";
  }
  if (lang == "Englanti")
  {
    document.getElementById('t1').innerHTML =  "Hello World!";
  }
}
