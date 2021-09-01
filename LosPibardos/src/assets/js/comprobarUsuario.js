function ComprobarUsuario(){
  const usernameCheck = document.getElementsByClassName("datos")[0].value;
  const passwordCheck = document.getElementsByClassName("datos")[1].value;
  const tipoCheck=document.getElementsByClassName("datos")[2].value;
  var x=""
  if (tipoCheck!="") {
    if (tipoCheck==="0") {
      x="/users"
    } else {
      x="/admins"
    }
    fetch(("http://localhost:3000"+x))
    .then(response => response.json())
    .then(data => {
      var flag=false
      for(let i = 0; i < data.length; i++){
        
        let username=data[i].user
        if (username===usernameCheck){
          flag=true
          let password=data[i].password
          if (password===passwordCheck){
            alert("¡Se ha encontrado!")
          } else{
            alert("Contraseña incorrecta.")
          }
        }
      }
      if (!flag){
        alert("No se ha encontrado el usuario")
      }

    })
    .catch(console.error);
  } else{
    alert("¡Escoja un tipo!")
  } 


}