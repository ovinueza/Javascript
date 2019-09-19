// from data.js
var tableData = data;

//Data Rows to be populated are located in tbody tr
var  tbody = d3.select("tbody");
console.log(data);

//Populate table
data.forEach(element => {
    var row = tbody.append("tr");
    Object.entries(element).forEach(([key, value])=>{
        var cell =row.append("td");
        cell.text(value);
    });
});

//Date Filter

//Select the button
var button = d3.select("#filter-btn"); //id line 44

button.on("click", () => {

    //Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime"); //id line 40

    //Get the value property of the input element
    var inputValue = inputElement.property("value").trim();
    console.log(inputValue);

    //filter date
    var filteredData = tableData.filter(data => data.datetime === inputValue);
    console.log(filteredData);

    //new table for filtered data
    tbody.html("");

    //populate new table with filtered data
    filteredData.forEach(element => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value])=>{
            var cell =row.append("td");
            cell.text(value);
        });

    });
});

