// question 2:

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const resultsContainer = document.querySelector(".results");

async function items() {

    try {
        const response = await fetch(url);
        const results = await response.json();
        const details = results.results;

        resultsContainer.innerHTML = "";

        for(let i = 0; i < details.length; i++) {

            if (i === 8) {
                break;
            }

            resultsContainer.innerHTML += `<div class="games"><h4>Name: ${details[i].name}</h4>
                                            <p>Rating: ${details[i].rating}</p>
                                            <p>Tags: ${details[i].tags.length}</p>
                                        </div>`;
        }
    }

    catch (error) {
        resultsContainer.innerHTML = displayError("Oops! Something went wrong");
    }

}

items();