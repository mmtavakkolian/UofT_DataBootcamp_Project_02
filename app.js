var table = data;
var tbody = d3.select("tbody");
table.forEach((ufoSighting) => {
 var row = tbody.append("tr");
 Object.entries(ufoSighting).forEach(([key, input]) => {
 var cell = row.append("td");
 cell.text(input);
 });
 });
var submit = d3.select("#filter-btn");
function deleteChild() { 
 var e = document.querySelector("tbody"); 
 e.innerHTML = ""; 
 } 
submit.on("click", function() {
    deleteChild();
    d3.event.preventDefault();

    var DATA_date = d3.select("#datetime");
    var DATA_city = d3.select("#city");
    var DATA_state = d3.select("#state");
    var DATA_country = d3.select("#country");
    var DATA_shape = d3.select("#shape");

    var USER_date = DATA_date.property("input");
    var USER_city = DATA_city.property("input");
    var USER_state = DATA_state.property("input");
    var USER_country = DATA_country.property("input");
    var USER_shape = DATA_shape.property("input");
	
    var filter = table

    if(USER_date){filter = filter.filter(sighting => sighting.datetime == USER_date);};
    if(USER_city){filter = filter.filter(sighting => sighting.city == USER_city);};
    if(USER_state){filter = filter.filter(sighting => sighting.state == USER_state);};
    if(USER_country){filter = filter.filter(sighting => sighting.country == USER_country);};
    if(USER_shape){filter = filter.filter(sighting => sighting.shape == USER_shape);};

    var tbody = d3.select("tbody");
    filter.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, input]) => {
      var cell = row.append("td");
      cell.text(input);
    });
  });
});
