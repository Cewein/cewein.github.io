// Define an asynchronous function named "loadData" to fetch JSON data from a URL
async function loadData() {
    // Use the "await" keyword to wait for the fetch to complete and get the response
    const response = await fetch("https://raw.githubusercontent.com/Cewein/cewein.github.io/main/data/data.json");

    // Use the "await" keyword again to parse the response as JSON and get the result
    const loadedJSON = await response.json();

    // Return the loaded JSON data
    return loadedJSON;
}

// Define a synchronous function named "generate"
function generate() {
    var jsonData = null; // Declare a variable to store the loaded JSON data

    // Call the asynchronous "loadData" function and use the "then" method to handle the resolved value
    // The "data" parameter represents the resolved value (loaded JSON data) of the promise
    loadData().then((data) => {
        jsonData = data;
        jsonData.data.forEach(r => {

            console.log(r);

        });
    });

    var e = document.createElement('div');
    //e.innerHTML = htmldata;

    divGen = document.getElementById("generator")
}