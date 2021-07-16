let formato= `<div class="card mb-3 dark-pink text-white">
                <div class="row g-0">
                  <div class="col-md-6 col-6">
                    <img src="images/Aharon_Cruz.png" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-6 col-6 lefty">
                    <div class="card-body lefty righty">
                      <h5 class="card-title text-white">Cartulina x25</h5>
                      <p class="card-text">categoria: Pacingraf S.A.</p>
                      <p class="card-text">$4.75</p>
                      <div class="button">Ver/Editar</div>
                    </div>
                  </div>
                  </div>
               </div>`

fetch("../data/clients.json").
then(response=> response.json()).
then(data=>{
    const usuario=localStorage.getItem('user')
    var comprobador=true
    var contador=0
    while(comprobador && contador<data.length){
        if(data[contador].user==usuario){
            document.getElementById("articulos").innerHTML=" "
            document.getElementById("nombreUsuario").innerHTML=data[contador].user
            let inventario=data[contador].inv
            for( articulo of inventario){
                console.log(articulo.PImg)
                document.getElementById("articulos").innerHTML +=
            `<div class="card mb-3 dark-pink text-white">
                <div class="row g-0">
                  <div class="col-md-6 col-6">
                    <img src="${articulo.PImg}"img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-6 col-6 lefty">
                    <div class="card-body lefty righty">
                      <h5 class="card-title text-white">${articulo.PName} x${articulo.PI}</h5>
                      <p class="card-text">categoria: ${articulo.PD}</p>
                      <p class="card-text">${articulo.PC}</p>
                      <div class="button">Ver/Editar</div>
                    </div>
                  </div>
                  </div>
               </div>`
            }

            comprobador=false
        }
        contador+=1
    }
}).catch(console.error)
