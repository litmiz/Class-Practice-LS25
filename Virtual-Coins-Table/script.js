fetch('https://api.coincap.io/v2/assets').then(response =>
response.json().then(data => {
    for (let i = 0; i < data.data.length; i++) {
        document.getElementById('virtualCoinRow').innerHTML += `<tr> <td>${data.data[i].name}</td> <td>${data.data[i].symbol}</td> <td>${data.data[i].priceUsd}</td> </tr>`
    }
}));

