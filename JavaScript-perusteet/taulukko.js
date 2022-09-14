function esimerkkiTaulukko() {

  var autot = [];
  var caarat = ["Tesla", "VWi3", "Hyundai ionic"];
  autot.push("Jeep");
  document.write(caarat[1] + " " + autot[0] + "<br />");
  document.write(caarat + "<br />");
  document.write(autot);
  var siirrettava = caarat.pop();
  document.write("siirrettava= " + siirrettava)
  document.write("<br />Caarat taulukko = " + caarat);
  autot.unshift(siirrettava)
  document.write("<br />Autot taulukko = " + autot);
  //caarat.push() = autot.pop(); Selain ei tykkää tästä
  document.write("<br />Caarat taulukko = " + caarat + "<br />Autot taulukko = " + autot)
}
