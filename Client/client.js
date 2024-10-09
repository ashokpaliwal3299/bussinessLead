document.getElementById('clientForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const clientData = {
        clientName: document.getElementById('clientName').value,
        address1: document.getElementById('address1').value,
        address2: document.getElementById('address2').value,
        city: document.getElementById('city').value,
        district: document.getElementById('district').value,
        state: document.getElementById('state').value,
        pincode: document.getElementById('pincode').value,
        industrySegment: document.getElementById('industrySegment').value,
        serviceType: document.getElementById('serviceType').value,
        region: document.getElementById('region').value,
        branch: document.getElementById('branch').value
    };

    let clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients.push(clientData);
    localStorage.setItem('clients', JSON.stringify(clients));

    populateTable();
    this.reset();
});

function populateTable() {
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    const tbody = document.querySelector('#clientDataTable tbody');
    tbody.innerHTML = '';

    clients.forEach((client, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = 
            `<td>${client.clientName}</td>
            <td>${client.address1}</td>
            <td>${client.address2 || ''}</td>
            <td>${client.city}</td>
            <td>${client.district}</td>
            <td>${client.state}</td>
            <td>${client.pincode}</td>
            <td>${client.industrySegment}</td>
            <td>${client.serviceType}</td>
            <td>${client.region}</td>
            <td>${client.branch}</td>
            <td class="actions">
                <button onclick="editRecord(${index})">Edit</button>
                <button onclick="deleteRecord(${index})">Delete</button>
            </td>`;
        tbody.appendChild(tr);
    });
}

function deleteRecord(index) {
    let clients = JSON.parse(localStorage.getItem('clients'));
    clients.splice(index, 1);
    localStorage.setItem('clients', JSON.stringify(clients));
    populateTable();
}

// function editRecord(index) {
//     const clients = JSON.parse(localStorage.getItem('clients'));
//     const client = clients[index];
    
//     document.getElementById('clientName').value = client.clientName;
//     document.getElementById('address1').value = client.address1;
//     document.getElementById('address2').value = client.address2;
//     document.getElementById('city').value = client.city;
//     document.getElementById('district').value = client.district;
//     document.getElementById('state').value = client.state;
//     document.getElementById('pincode').value = client.pincode;
//     document.getElementById('industrySegment').value = client.industrySegment;
//     document.getElementById('serviceType').value = client.serviceType;
//     document.getElementById('region').value = client.region;
//     document.getElementById('branch').value = client.branch;

//     deleteRecord(index);

window.onload = populateTable;
