const tableContainer = document.getElementById('table-container');
const tableBody = tableContainer.querySelector('tbody');

fetch('pro1.json')
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData;
    renderTable();
  });

function renderTable() {
  tableBody.innerHTML = '';
  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${item.image}"</td>
      <td>${item.name}</td>
      <td>${item.description}</td>
    `;
    tableBody.appendChild(row);
  });
}

window.addEventListener('scroll', () => {
  const distanceToBottom = document.documentElement.scrollHeight - (window.innerHeight + window.pageYOffset);
  if (distanceToBottom <80) {
    fetch('pro2.json')
      .then(response => response.json())
      .then(jsonData => {
          data = data.concat(jsonData);
        renderTable();
      });
  }
});
  window.addEventListener('scroll', () => {
    const distanceToBottom = document.documentElement.scrollHeight - (window.innerHeight + window.pageYOffset);
    
  if (distanceToBottom  <80) {
    fetch('pro3.json')
      .then(response => response.json())
      .then(jsonData => {
        data = data.concat(jsonData);
        renderTable();
      });
  }
});
$(document).ready(function() { 

  $("#search").on("keyup", function() { 
    var value = $(this).val().toLowerCase(); 
    $("#table-data tr").filter(function() { 
      $(this).toggle($(this).text() 
      .toLowerCase().indexOf(value) > -1) 

    }); 

  }); 

});
