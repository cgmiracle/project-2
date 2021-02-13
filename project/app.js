
var tableData = data;


//Creating References
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ['Player', 'Pos', 'MP', '3P', '2P', '2PA', 'FT', 'FTA', 'ORB', 'DRB', 'AST', 'STL', 'BLK', 'TOV', 'PF', 'PTS']




//Inputing data
var addData = (dataInput) => {
    dataInput.forEach(Player => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);



//Sets up the filter button
button.on("click", () => {

    d3.event.preventDefault();
    

    var inputDate = inputFieldDate.property("value").trim();

    

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    

    $tbody.html("");

    let response = {
        filterDate
    }


    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

    // Message for whern there is no player
    
        else {
            $tbody.append("tr").append("td").text("Please enter a player forom the 2020-2021 Season");
        }
})