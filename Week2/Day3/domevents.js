function insertRow() {
    const table = document.getElementById("sampleTable"); // Get element id = "sampleTable"

    const tr = document.createElement("tr"); // Create table row, can also use let

    const td1 = document.createElement("td"); // Create table data, can also use let
    const td2 = document.createElement("td"); // Create table data

    const rowNum = table.rows.length + 1; // Gets last row number and adds 1 for next row number

    td1.textContent = `Row${rowNum} cell1`; // Adds row number + cell1
    td2.textContent = `Row${rowNum} cell2`; // Adds row number + cell2

    tr.appendChild(td1); // Add td1 table content
    tr.appendChild(td2); // Add td2 table content

    table.appendChild(tr); // Add table row
}
    
/* 
    let counter = 3; // instead of hard coding number, table.rows.length + 1;
    function insertRow{
        let myNewRow = document.createElement("tr");
        const myTable = document.getElementById("#sampleTable tbody");
        for(let i = 0; i < 5; i++){
            let myNewCell = document.createElement("td");
            myNewCell.innerHTML = "Row" + counter + "cell" + i;
            myNewRow.appendChild(myNewCell);
        }
        myTable.appendChild(myNewRow);
        counter++
*/ 

/*  
    Step 1: Read the instructions carefully
    What already exists?
    - A table
    - A button

    What needs to happen?
    - The button is clicked.
    - A new row is created.
    - Two cells are created.
    - The cells are added to the row.
    - The row is added to the table.

    Find the HTML elements you'll need.
    Which element do I need to manipulate? - The table 

    Get the table
    Create a row - "How do I get the table?" - document.getElementById()
    Create first cell - "How do I create an element?" - document.createElement()
    Create second cell
    Put text in first cell - "How do I add text?" - textContent
    Put text in second cell
    Append both cells to the row - "How do I put an element inside another element?" - appendChild()
    Append the row to the table

    What do I already have?
    * A table
    * A button
    What do I need to create?
    <tr>
    <td>
    <td>
    Where does everything go?
    td → tr
    tr → table
    Which DOM methods do I need? Usually only a handful:
    * getElementById()
    * createElement()
    * appendChild()
    * textContent
    * querySelector()
    * setAttribute()
    * classList.add()
*/