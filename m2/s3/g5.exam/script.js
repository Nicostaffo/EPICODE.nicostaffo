const PRODUCT_URL = "https://striveschool-api.herokuapp.com/api/productId/"




// recuperiamo gli eventi disponibili, e manipoliamo il DOM creando una col
// per ognuno di essi

const getProducts = function () {
    // parte la fetch()
    fetch(PRODUCT_URL, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmMxMzg4Zjc0MDAwMTQyODc0NGYiLCJpYXQiOjE2ODM4ODA5NzksImV4cCI6MTY4NTA5MDU3OX0.SrMxqSS7dM7bvVAUEadu3ZL0DownFgKv2V6OSZV9mOQ"
        }
    })
        // fa una GET
        .then((res) => {
            console.log('RES', res)
            if (res.ok) {
                // andiamo avanti!
                return res.json() // otteniamo i dati
            } else {
                throw new Error('Errore nel recupero dei prodotti!')
            }
        })
        .then((data) => {
            console.log('PRODOTTI IN DB', data)
            // inseriamo della logica per creare le colonne a partire dall'array data
            data.forEach((event) => {
                let colTemplate = `
         <div class="col-12 col-md-4">
           <div class="card">
             <div class="card-body">
               <h5 class="card-title">${event.name}</h5>
               <p class="card-text">${event.imageUrl}</p>
               <p class="card-text">
                 ${event.description}
               </p>
               <p> ${event.brand}€</p>
               <p> ${event.price}€</p>
               <a href="./backoffice.html?productId=${product._id
                    }" class="btn btn-primary">MODIFICA</a>
             </div>
           </div>
         </div>
         `
                // sto passando all'indirizzo ./backoffice.html UN PARAMETRO
                // questo parametro è l'_id della risorsa che intenderò modificare!

                let rowReference = document.getElementById('products-container') // <div class="row"></div>
                rowReference.innerHTML += colTemplate // aggiungo colTemplate all'attuale contenuto di rowReference
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

window.onload = () => {
    // all'avvio di index.html lancio getEvents()

    getProducts()
}



