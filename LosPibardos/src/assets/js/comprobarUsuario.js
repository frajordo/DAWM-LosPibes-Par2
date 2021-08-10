fetch(" data/users.json")
.then(response => response.json())
.then(data => {
  var usuario = data["user1"];

  console.log(usuario);
  console.log(data);




})
.catch(console.error);