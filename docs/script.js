document.addEventListener('DOMContentLoaded', function() {

    // Function to create a table from CSV data
    function createTableFromCSV(csvData, tableContainer) {
        const rows = csvData.split('\n');
        const table = document.createElement('table');
        
        rows.forEach(row => {
            const tr = document.createElement('tr');
            const cells = row.split(',');
            
            cells.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            
            table.appendChild(tr);
        });
        console.log(table)
        tableContainer.appendChild(table);
    }

    function setPage(page) {
        dispTable(page)
    }
    window.setPage = setPage

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