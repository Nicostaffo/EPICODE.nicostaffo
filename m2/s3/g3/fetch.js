fetch('https://striveschool-api.herokuapp.com/books')
    .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            return new Error("error")
        }
    })
    .then((list) => {
        let bookList = document.querySelector('.row')

        list.forEach((book) => {
            let col = document.createElement('div');
            col.classList.add('col-sm-10', 'col-md-5', 'col-lg-4');
            col.innerHTML = `<div class="card" style="width: 18rem;">
            <img id="bookImg" src=${book.img} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class = "card-text">${book.price}</p>
                <div class="d-flex">
                <a class="btn btnDelete btn-primary">Remove book</a>
                <a class="btn btnAddToCart btn-danger">Add to cart</a>
                </div>
            </div>
        </div>`;
            bookList.appendChild(col);

            let btnDelete = col.querySelectorAll('.btnDelete');
            btnDelete.forEach((a) => {
                a.addEventListener('click', function () {
                    let card = this.closest('.card');
                    card.classList.remove('d-flex');
                    card.classList.add('d-none');
                });
            });
            let car = document.querySelector('ul')
            let btnAddToCart = col.querySelectorAll('.btnAddToCart');
            btnAddToCart.forEach((b) => {
                b.addEventListener('click', function () {
                    let card = this.closest('.card');
                    let newLi = document.createElement('li');
                    newLi.innerHTML = `<p>${book.title}</p> <p>${book.price}</p>`;
                    car.appendChild(newLi);
                });
            });
        });
    })


    .catch((err) => {
        console.log(err);
    })