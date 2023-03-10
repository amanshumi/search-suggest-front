let result = [];

let filteredData = [];

let elementToUpdate = document.getElementById("results");

document.getElementById('search-input').addEventListener('keyup', async (e) => {
    // Search comments
    // Use this API: https://jsonplaceholder.typicode.com/comments?postId=3
    // Display the results in the UI

    // Things to look out for
    // ---
    // Use es6
    // Error handling

    let inputVal = e.target.value;

    elementToUpdate.innerHTML = `<p>Loading...</p>`;

    fetch("http://localhost:4000/comments")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        result = data.data;

        let allElements = ``;

        result = result.filter((resSingle) => {
            return resSingle.name.includes(inputVal);
        });

        result.forEach((singleResult) => {
            allElements += `<li>${singleResult.name}</li>`;
        });

        elementToUpdate.innerHTML = allElements;

        if(result.length < 1) {
            elementToUpdate.innerHTML = `<p>No results found</p>`;
        }
    })
    .catch((err) => {
        elementToUpdate.innerHTML = `<p>Something went wrong. Try again</p>`;
        console.log(err);
    })

});