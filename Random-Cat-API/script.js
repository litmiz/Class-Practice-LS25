document.getElementById('findBtn').addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search').then(response => 
    response.json().then(data => {
        document.getElementById('catImgArea').innerHTML = `<img src="${data[0].url}"/>`
    }));
});