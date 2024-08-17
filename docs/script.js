document.addEventListener('DOMContentLoaded', function() {
    const tableContainer = document.getElementById('table-container');

    // Function to create a table from CSV data
    function createTableFromCSV(csvData) {
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

        tableContainer.appendChild(table);
    }

    // Example to load a CSV file
    fetch('../all_players.csv')
    .then(response => response.text())
    .then(data => createTableFromCSV(data));
});