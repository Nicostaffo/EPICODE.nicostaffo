const PRODUCTS_URL = "https://striveschool-api.herokuapp.com/api/product/";

let detailsIns = function (details) {
    let detailsCol = `
    <div class="col-4"></div>
    <div class="col-4">
    <div class="card">
    <img src=${details.imageUrl} class='card-img-top' alt='prod.img'/>
      <div class="card-body">
        <h5 class="card-title">${details.name}</h5>
        <p class="card-text">
        ${details.description}
        </p>
        <p> ${details.brand}</p>
        <p> ${details.price}€</p>
         <a href="./homepage.html" class="btn btn-primary">INDIETRO</a>
         
      </div>
    </div>
   </div>
   <div class="col-4"></div>

   `;
    let fillCol = document.querySelector(".row");
    fillCol.innerHTML = detailsCol;
}

const getDetailProduct = function () {
    let productIdAddressBar = new URLSearchParams(window.location.search).get(
        "productId"
    );

    fetch(PRODUCTS_URL + productIdAddressBar, {
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
        .then((single) => {
            detailsIns(single);
        })
        .catch((error) => {
            console.log(error);
        })
}
window.onload = function () {
    getDetailProduct();
};