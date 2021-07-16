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
                    </div>
                  </div>
                  </div>
               </div>`

const extraccionDatos=fetch("../data/clients.json").
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
            for(let articulo of inventario){
                document.getElementById("articulos").innerHTML +=
            `<div class="card mb-3 dark-pink text-white">
                <div class="row g-0">
                  <div class="col-md-6 col-6">
                    <img src="${articulo.PImg}"img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-6 col-6 lefty">
                    <div class="card-body lefty righty">
                      <h5 class="card-title text-white">${articulo.PName} x${articulo.PI}</h5>
                      <p class="card-text">${articulo.PD}</p>
                      <p class="card-text">${articulo.PC}</p>
                    </div>
                  </div>
                  </div>
               </div>`
            }

            comprobador=false
        }
        contador+=1
    }    
    return data[contador-1].inv 
}).catch(console.error)

const setSearchEvent= async()=>{
    const inventario_usuario=await extraccionDatos
    console.log("posi")
    document.querySelector('.buscador-inventario').querySelector('input').addEventListener('input', e =>{
        let criterioBusqueda= document.querySelector('.buscador-inventario').querySelector('input').value
        let flags
        flags = 'i'
        const reg=new RegExp(criterioBusqueda+'.*',flags)
        document.getElementById("articulos").innerHTML =""
        for(let articulo of inventario_usuario){
             if(reg.exec(articulo.PName)){
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
            }

    })
}
setSearchEvent()