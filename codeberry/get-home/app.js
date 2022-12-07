function calculateFuelToOffload() {
    var totalDistanceToTravel = prompt('Mikä on matkustettava etäisyys kilometreinä? Syötä lukuna.');
    var averageLitersOverHundred = prompt('Mikä on aluksenne keskimääräinen polttoaineenkulutus litroina? Syötä lukuna.');
    var tankCapacity = prompt('Mikä on polttoainetankkisi kokonaiskapasiteetti? Syötä lukuna.');
    var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
    var fuelToOffload = tankCapacity - requiredFuel;
    alert('Matkaan tarvittava polttoainemäärä: ' + requiredFuel + ' l\n' + 'Purettava polttoainemäärä: ' + fuelToOffload + ' l');
}
calculateFuelToOffload();
