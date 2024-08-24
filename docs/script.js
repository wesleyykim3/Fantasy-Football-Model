document.addEventListener('DOMContentLoaded', function() {

    // function to create a table from CSV data
    function createTableFromCSV(csvData, tableContainer) {
        const rows = csvData.split('\n');
        const table = document.createElement('table');
    
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = rows[0].split(',');
    
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
    
        thead.appendChild(headerRow);
        table.appendChild(thead);
    
        const tbody = document.createElement('tbody');
    
        rows.slice(1).forEach(row => { 
            const tr = document.createElement('tr');
            const cells = row.split(',');
    
            cells.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
    
            tbody.appendChild(tr);
        });
    
        table.appendChild(tbody);
        tableContainer.appendChild(table);
    }

    // function to set page when button is pressed
    function setPage(page) {
        dispTable(page)
    }
    window.setPage = setPage

    // function to display table
    function dispTable(page) {
        const table = document.getElementById('table');
        table.textContent = "";
        fetch(`../${page}.csv`)
        .then(response => response.text())
        .then(data => createTableFromCSV(data, table));
    }

    let page = 'all_players'
    dispTable(page)
});