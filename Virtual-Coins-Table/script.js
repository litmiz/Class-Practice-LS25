fetch('https://api.coincap.io/v2/assets').then(response =>
response.json().then(data => {
    console.log("fetched data");
    for (let i = 0; i < data.data.length; i++) {
        console.log(`${i}`);
        document.getElementById('virtualCoinRow').innerHTML += `<tr> <td>${data.data[i].name}</td> <td>${data.data[i].symbol}</td> <td>${data.data[i].priceUsd}</td> </tr>`
    }
}));

