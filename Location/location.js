document.getElementById('locationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const locationName = document.getElementById('locationName').value;
    const add1 = document.getElementById('add1').value;
    const add2 = document.getElementById('add2').value;
    const city = document.getElementById('city').value;
    const district = document.getElementById('district').value;
    const state = document.getElementById('state').value;
    const pincode = document.getElementById('pincode').value;
    const operationManager = document.getElementById('operationManager').value;
    const surveyType = document.getElementById('surveyType').value;

    const data = { name, email, phone, locationName, add1, add2, city, district, state, pincode, operationManager, surveyType };
    
    let records = JSON.parse(localStorage.getItem('records')) || [];
    records.push(data);
    localStorage.setItem('records', JSON.stringify(records));

    populateTable();
    this.reset();
});

function populateTable() {
    const records = JSON.parse(localStorage.getItem('records')) || [];
    const tbody = document.querySelector('#infoTable tbody');
    tbody.innerHTML = '';

    records.forEach((record, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = 
            `<td>${record.name}</td>
            <td>${record.email}</td>
            <td>${record.phone}</td>
            <td>${record.locationName}</td>
            <td>${record.add1}</td>
            <td>${record.add2}</td>
            <td>${record.city}</td>
            <td>${record.district}</td>
            <td>${record.state}</td>
            <td>${record.pincode}</td>
            <td>${record.operationManager}</td>
            <td>${record.surveyType}</td>
            <td class="surveylink">
                <a href="https://smartops.ismartfacitechpl.com/erp.html">
                    <button>Fill Survey</button>
                </a>
            </td>
            <td class="actions">
                <button onclick="editRecord(${index})">Edit</button>
                <button onclick="deleteRecord(${index})">Delete</button>
            </td>`;
        tbody.appendChild(tr);
    });
}

function deleteRecord(index) {
    let records = JSON.parse(localStorage.getItem('records'));
    records.splice(index, 1);
    localStorage.setItem('records', JSON.stringify(records));
    populateTable();
}

function populateClientNames() {
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    const dataList = document.getElementById('clientName');
    
    dataList.innerHTML = ''; // Clear existing options

    clients.forEach(client => {
        const option = document.createElement('option');
        option.value = client.clientName; // Adjust this to whatever property holds the name
        dataList.appendChild(option);
    });
}

window.onload = function() {
    populateTable();
    populateClientNames(); // Call to populate client names
};
