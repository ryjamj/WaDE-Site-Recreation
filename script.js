// drop down list functionality
document.querySelector(".select-field").addEventListener("click", () => {
  document.querySelector(".list").classList.toggle("show");
  document.querySelector(".down-arrow").classList.toggle("rotate180");
});

// Read markers data from data.csv
// use PapaParse
$.get('./data.csv', function(getCSVDatafunc) {
  // Use PapaParse to convert string to array of objects
  const data = Papa.parse(getCSVDatafunc, {header: true, dynamicTyping: true}).data;
  // For each row in data, create a marker and add it to the map
  for (let i in data) {
    let row = data[i];
    let marker = L.marker([row.Latitude, row.Longitude]);
    marker.addTo(myMap);
  }
});