let apiKey = 'KTKjx0dwDeyoMDIgiLOsDSW1gwulInSop4toWR9vRVPnmDxJ9TusQHoh';

let loadImg = document.getElementById('loadImg');
let loadSecImg = document.getElementById('loadSecImg');


let nuovaImg =
    fetch('https://api.pexels.com/v1/search?query=lakes', {
        headers: {
            authorization: apiKey,
        },
    })
//non ho capito niente 

loadImg = fetch('https://api.pexels.com/v1/search?query=lakes')