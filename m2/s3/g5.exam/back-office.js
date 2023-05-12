const FETCH_URL = "https://striveschool-api.herokuapp.com/api/product/"


// ora dobbiamo permettere all'admin di poter MODIFICARE UN EVENTO
// in caso di modifica, questa pagina verrà caricata con un parametro nell'indirizzo, l'_id
// dell'evento da modificare (l'abbiamo chiamato eventId)

// per questo motivo, questa pagina backoffice ora ha un doppio scopo:
// 1) può creare un evento da zero
// 2) se c'è il parametro eventId nell'indirizzo, potrà MODIFICARE una risorsa

// verifichiamo che ci sia o meno il parametro eventId nella barra degli indirizzi
// valore della barra degli indirizzi:
let addressBarContent = new URLSearchParams(window.location.search)
// dal valore della barra degli indirizzi ora cerco se esiste eventId
let productId = addressBarContent.get('productId')
// eventId può essere NULL oppure una stringa, l'id dell'evento da modificare
console.log('EVENTID', productId)

if (productId) {
    // modalità MODIFICA
    // cambio titolo
    document.getElementsByTagName('h2')[0].innerText =
        'Backoffice page - Modifica evento'
    // cambio label bottone
    document.getElementById('save-button').innerText = 'MODIFICA EVENTO'
    // faccio comparire il bottone delete
    let deleteButton = document.getElementById('delete-button')
    deleteButton.classList.remove('d-none')
    deleteButton.addEventListener('click', () => {
        fetch(FETCH_URL + productId, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmMxMzg4Zjc0MDAwMTQyODc0NGYiLCJpYXQiOjE2ODM4ODA5NzksImV4cCI6MTY4NTA5MDU3OX0.SrMxqSS7dM7bvVAUEadu3ZL0DownFgKv2V6OSZV9mOQ"
            }
            // non c'è body
            // non c'è quindi content-type
        })
            .then((res) => {
                if (res.ok) {
                    alert('eliminazione completata con successo')
                    location.assign('./index.html')
                } else {
                    throw new Error("Problema nell'eliminazione del prodotto")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    })
}

// ora che ho l'evento da modificare, devo fare una fetch() di tipo GET e recuperare i dettagli di questo evento!
// faccio una get specifica per ottenere i dettagli di un solo evento: l'evento con id eventId
fetch(FETCH_URL + productId, {
    headers: {
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmMxMzg4Zjc0MDAwMTQyODc0NGYiLCJpYXQiOjE2ODM4ODA5NzksImV4cCI6MTY4NTA5MDU3OX0.SrMxqSS7dM7bvVAUEadu3ZL0DownFgKv2V6OSZV9mOQ"
    },
})

    .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error("Errore nel recupero dell'evento")
        }
    })
    .then((product) => {
        console.log(
            'DATI DEL SINGOLO EVENTO, RECUPERATO TRAMITE GET SINGOLA',
            product
        )
        // ripopoliamo il form, finalmente
        document.getElementById('name').value = product.name
        document.getElementById('description').value = product.description
        document.getElementById('image').value = product.image
        document.getElementById('brand').value = product.brand
        document.getElementById('price').value = product.price
    })
    .catch((error) => {
        console.log(error)
    })



// questo form invierà un nuovo oggetto evento alle API di Epicode
// l'oggetto che creiamo raccogliendo i dati dal form non può essere scritto a caso!
// un oggetto di tipo "evento" di epiticket dev'essere fatto da determinate proprietà
// un "evento" di epiticket ha determinate, fisse proprietà:
// name --> string
// description --> string
// price --> string
// time --> string

// prendo un riferimento al bottone
const productForm = document.getElementById('product-form')
productForm.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('invio i dati')

    let nameInput = document.getElementById('name')
    let imageInput = document.getElementById('image')
    let descriptionInput = document.getElementById('description')
    let brandInput = document.getElementById('brand')
    let priceInput = document.getElementById('price')

    // ora è necessario raccogliere i dati del form e inviarli con una request di tipo POST
    let newProduct = {
        name: nameInput.value,
        imageUrl: imageInput.value,
        description: descriptionInput.value,
        brand: brandInput.value,
        price: priceInput.value,
    }
    console.log('evento pronto da inviare alle API', newProduct)
    // fetch()

    // 2 sole cose differiscono da una POST a una PUT
    // 1) il metodo
    // 2) l'indirizzo (perchè una POST si fa su AGENDA_URL, l'indirizzo generico! mentre una PUT deve selezionare
    // un elemento in particolare, quindi c'è bisogno dell'ID)

    fetch(productId ? FETCH_URL + productId : FETCH_URL, {
        // ora il secondo parametro SERVE, perchè dobbiamo utilizzare il metodo POST, che non è il default!
        method: productId ? 'PUT' : 'POST',
        body: JSON.stringify(newProduct), // inviamo l'evento da aggiungere a DB! però body accetta solo stringhe!!
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmMxMzg4Zjc0MDAwMTQyODc0NGYiLCJpYXQiOjE2ODM4ODA5NzksImV4cCI6MTY4NTA5MDU3OX0.SrMxqSS7dM7bvVAUEadu3ZL0DownFgKv2V6OSZV9mOQ",
            'Content-Type': 'application/json', // informa l'API che la stringa che mandiamo nel body in realtà va parsata!
        },
    })
        .then((res) => {
            // il server, una volta accettata la vostra request, restituirà una response
            console.log('RESPONSE DELLA CHIAMATA POST', res)
            if (res.ok) {
                // il nuovo evento è stato salvato!! yeeee
                alert(productId ? 'EVENTO MODIFICATO!' : 'EVENTO CREATO!')
                location.assign('/index.html') // riporto alla pagina home
            } else {
                // 400, 404
                alert('ERRORE NEL SALVATAGGIO')
                throw new Error('ERRORE NEL SALVATAGGIO')
            }
        })
        .catch((err) => {
            console.log(err)
        })
})
