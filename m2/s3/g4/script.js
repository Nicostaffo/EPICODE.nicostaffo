let apiKey = 'KTKjx0dwDeyoMDIgiLOsDSW1gwulInSop4toWR9vRVPnmDxJ9TusQHoh';

const PIXELS_URL = 'https://api.pexels.com/v1/search?query='

const renderImg = function (images) {
    let row = document.querySelector('.album .container .row');
    row.innerHTML = '';
    images.forEach((images) => {
        let col = ``
    });
}

const nuovaImg = function (query) {
    fetch(+ query, {
        headers: {
            authorization: apiKey,
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return new Error("error")
            }
        })
        .catch((err) => {
            console.log(err);
        })
}
//non ho capito niente 

window.onload = function () {
    let loadImg = document.getElementById('loadImg');
    loadImg.addEventListener('click', function () {
        nuovaImg('lakes')
    })
    let loadSecImg = document.getElementById('loadSecImg');
    loadSecImg.addEventListener('click', function () {
        nuovaImg('mountains')
    })
}