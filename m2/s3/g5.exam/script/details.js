const PRODUCTS_URL = "https://striveschool-api.herokuapp.com/api/product/";

let detailsIns = function (details) {
    let detailsCol = ` <img src=${details.imageUrl} />
    <div>
    <p class="mt-5">${details.name}</p>
    </div>
    <div>
    <p>${details.description}</p>
    <div>
    <div>
    <p>${etails.brand}</p>
    </div>
    <div>
    <p>${details.price}€</p>
    </div>
    <div>
    <a href="./homepage.html" class="btn btn-primary">INDIETRO</a>
    </div>`;
    let fillCol = document.querySelector(".col-12.col-md-8");
    colToFill.innerHTML = colContent;
}

const getDetailProduct = function () {
    let IdAddressBar = new URLSearchParams(window.location.search).get(
        "productId"
    );
}
fetch(PRODUCT_URL, {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmMxMzg4Zjc0MDAwMTQyODc0NGYiLCJpYXQiOjE2ODM4ODA5NzksImV4cCI6MTY4NTA5MDU3OX0.SrMxqSS7dM7bvVAUEadu3ZL0DownFgKv2V6OSZV9mOQ"
    }
})
    .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error('Errore nel recupero del prodotto!')
        }
    })
    .then((getDetailProduct) => {
        fillCol(getDetailProduct);
    })
    .catch((error) => {
        console.log(error);
    })

window.onload = function () {
    getDetailProduct();
};