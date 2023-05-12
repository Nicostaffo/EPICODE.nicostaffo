const PRODUCT_URL = "https://striveschool-api.herokuapp.com/api/product/"

const getProducts = function () {

    fetch(PRODUCT_URL, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmMxMzg4Zjc0MDAwMTQyODc0NGYiLCJpYXQiOjE2ODM4ODA5NzksImV4cCI6MTY4NTA5MDU3OX0.SrMxqSS7dM7bvVAUEadu3ZL0DownFgKv2V6OSZV9mOQ"
        }
    })

        .then((res) => {
            console.log('RES', res)
            if (res.ok) {

                return res.json()
            } else {
                throw new Error('Errore nel recupero dei prodotti!')
            }
        })
        .then((data) => {
            console.log('PRODOTTI IN DB', data)
            // inseriamo della logica per creare le colonne a partire dall'array data
            data.forEach((product) => {
                let colTemplate = `
         <div class="col-12 col-md-4">
           <div class="card">
           <img src=${product.imageUrl} class='card-img-top' alt='prod.img'/>
             <div class="card-body">
               <h5 class="card-title">${product.name}</h5>
               <p class="card-text">
               ${product.description}
               </p>
               <p> ${product.brand}€</p>
               <p> ${product.price}€</p>
               <a href="./backoffice.html?productId=${product._id}" class="btn btn-primary">MODIFICA</a>
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



