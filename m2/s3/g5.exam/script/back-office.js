const FETCH_URL = "https://striveschool-api.herokuapp.com/api/product/"

let addressBarContent = new URLSearchParams(window.location.search)

let productId = addressBarContent.get('productId')

console.log('EVENTID', productId)

if (productId) {

    document.getElementsByTagName('h2')[0].innerText =
        'Backoffice page - Modifica evento'

    document.getElementById('save-button').innerText = 'MODIFICA EVENTO'

    let deleteButton = document.getElementById('delete-button')
    deleteButton.classList.remove('d-none')
    deleteButton.addEventListener('click', () => {
        fetch(FETCH_URL + productId, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmMxMzg4Zjc0MDAwMTQyODc0NGYiLCJpYXQiOjE2ODM4ODA5NzksImV4cCI6MTY4NTA5MDU3OX0.SrMxqSS7dM7bvVAUEadu3ZL0DownFgKv2V6OSZV9mOQ"
            }

        })
            .then((res) => {
                if (res.ok) {
                    alert('eliminazione completata con successo')
                    location.assign('./homepage.html')
                } else {
                    throw new Error("Problema nell'eliminazione del prodotto")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    })
}


fetch(FETCH_URL + productId, {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmMxMzg4Zjc0MDAwMTQyODc0NGYiLCJpYXQiOjE2ODM4ODA5NzksImV4cCI6MTY4NTA5MDU3OX0.SrMxqSS7dM7bvVAUEadu3ZL0DownFgKv2V6OSZV9mOQ"
    },
})

    .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error("Errore nella ricezione del prodotto")
        }
    })
    .then((product) => {
        console.log(
            'DATI DEL SINGOLO PODOTTO RECUPERATO TRAMITE GET SINGOLA',
            product
        )
        // ripopoliamo il form, finalmente
        document.getElementById('name').value = product.name
        document.getElementById('description').value = product.description
        document.getElementById('image').value = product.imageUrl
        document.getElementById('brand').value = product.brand
        document.getElementById('price').value = product.price
    })
    .catch((error) => {
        console.log(error)
    })



const productForm = document.getElementById('product-form')
productForm.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('invio i dati')

    let nameInput = document.getElementById('name')
    let imageInput = document.getElementById('image')
    let descriptionInput = document.getElementById('description')
    let brandInput = document.getElementById('brand')
    let priceInput = document.getElementById('price')


    let newProduct = {
        name: nameInput.value,
        imageUrl: imageInput.value,
        description: descriptionInput.value,
        brand: brandInput.value,
        price: priceInput.value,
    }
    console.log('evento pronto da inviare alle API', newProduct)

    fetch(productId ? FETCH_URL + productId : FETCH_URL, {

        method: productId ? 'PUT' : 'POST',
        body: JSON.stringify(newProduct),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmMxMzg4Zjc0MDAwMTQyODc0NGYiLCJpYXQiOjE2ODM4ODA5NzksImV4cCI6MTY4NTA5MDU3OX0.SrMxqSS7dM7bvVAUEadu3ZL0DownFgKv2V6OSZV9mOQ",
            'Content-Type': 'application/json',
        },
    })
        .then((res) => {

            console.log('RESPONSE DELLA CHIAMATA POST', res)
            if (res.ok) {

                alert(productId ? 'PRODOTTO MODIFICATO!' : 'PRODOTTO CREATO!')
                location.assign('/homepage.html')
            } else {

                alert('ERRORE NEL SALVATAGGIO')
                throw new Error('ERRORE NEL SALVATAGGIO')
            }
        })
        .catch((err) => {
            console.log(err)
        })
})
