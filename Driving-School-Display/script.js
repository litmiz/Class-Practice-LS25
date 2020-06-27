// Show Driving Schools on the HTML
fetch('https://data.gov.il/api/action/datastore_search?resource_id=3f06e2f2-e2ad-41ac-9665-37d0625537f2&limit=300').then(response =>
response.json().then(data => {
    drivingSchools = data;
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
/////////////////////////////////////////////////////////


// Search Area
document.getElementById("searchBtn").addEventListener("click", function () {
    searchScools(document.getElementById("searchText").value);
});

function searchScools(searchText) {
    foundSchools = [];
    for (let i = 0; i < drivingSchools.result.records.length; i++) {
        if (searchText == drivingSchools.result.records[i].ezor) {
            foundSchools.push(drivingSchools.result.records[i]);
        }
        else if ((searchText == drivingSchools.result.records[i].shem_beit_sefer)) {
            foundSchools.push(drivingSchools.result.records[i]);
        }
    }
    if (foundSchools.length == 0) {
        alert(`לא נמצא בית ספר בשם או בעיר ${searchText}`);
    }
    else {
        document.getElementById('drivingSchoolRow').innerHTML = ``;
        for (let i = 0; i < foundSchools.length; i++) {
            document.getElementById('drivingSchoolRow').innerHTML += `
            <tr>
                <td>${foundSchools[i]._id}</td> 
                <td>${foundSchools[i].ezor}</td> 
                <td>${foundSchools[i].shem_beit_sefer}</td>
                <td>${foundSchools[i].ktovet}</td>
                <td>${foundSchools[i].menahel}</td> 
            </tr>
            `
        }
    }
}
/////////////////////////////////////////////////////////