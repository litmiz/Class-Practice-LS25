fetch('https://data.gov.il/api/action/datastore_search?resource_id=3f06e2f2-e2ad-41ac-9665-37d0625537f2&limit=200').then(response =>
response.json().then(data => {
    for (let i = 0; i < data.result.records.length; i++) {
        document.getElementById('drivingSchoolRow').innerHTML += `
        <tr>
            <td>${data.result.records[i]._id}</td> 
            <td>${data.result.records[i].ezor}</td> 
            <td>${data.result.records[i].shem_beit_sefer}</td>
            <td>${data.result.records[i].ktovet}</td>
            <td>${data.result.records[i].menahel}</td> 
        </tr>
        `
    }
}));
