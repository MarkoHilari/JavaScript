function info()
{
  fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(data => {
    console.log(data.results[0]);
    //let spaiva = data.results[0.dob.date];
    document.getElementById('person').innerHTML = "<b>Nimi: </b>" + data.results[0].name.first + " " + data.results[0].name.last
    + " <br><b>Age: </b>" + data.results[0].dob.age
    + "<br><b>Phone: </b>" + data.results[0].cell
    + "<br><b>Email: </b>" + data.results[0].email
    + "<br><b>Gender: </b>" + data.results[0].gender
    + "<br><b>Country: </b>" + data.results[0].location.country
    + "<br><b>City: </b>" + data.results[0].location.city
    + "<br><b>Username: </b>" + data.results[0].login.username
    + "<br><b>Password: </b>" + data.results[0].login.password;
    document.getElementById('foto').src = data.results[0].picture.large
  } );

}
