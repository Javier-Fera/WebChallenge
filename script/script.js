//Required functions

//fetch function

//build response function with success and failure responses

//regex email check with border change

async function writedata() {

    var results;
    fetch("https://ltv-data-api.herokuapp.com/api/v1/records.json?email=garciansmith@example.com")
        .then(res => res.json())
        .then(data => results = data)
        .then(() => {
            if (JSON.stringify(results) == "[]") {
                notFoundMessageDisplay();
            }
            else {
                document.getElementById("result_name").innerHTML = JSON.stringify(results.first_name);
                document.getElementById("result_description").innerHTML = JSON.stringify(results.description);
                document.getElementById("result_address").innerHTML = JSON.stringify(results.address);
                document.getElementById("result_email").innerHTML = JSON.stringify(results.email);

                Object.values(results.phone_numbers).forEach(element => {
                    document.getElementById("result_phone")
                        .innerHTML += "<p>" + element + "</p>"
                });

                Object.values(results.relatives).forEach(element => {
                    document.getElementById("result_relatives")
                        .innerHTML += "<p>" + element + "</p>"
                });
            }
        })
}

function notFoundMessageDisplay() {
    document.getElementById("results_view").innerHTML =
        "<div><h2>Nothing was Found</h2>"
        + "<p class='r_description'>The search you made yielded no results...</p></div>";
}

function testing() {
    var results;
    fetch("https://ltv-data-api.herokuapp.com/api/v1/records.json?email=doesith@example.com")
        .then(res => res.json())
        .then(data => results = data)
        .then(() => {
            console.log("breakdown");
            if (JSON.stringify(results) == "[]") {
                console.log("There's Nothing here");
            }
        });
}
