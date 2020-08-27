function writedata(email) {
    
    var results;
    fetch("https://ltv-data-api.herokuapp.com/api/v1/records.json?email="+email, {
        mode: 'cors',
        headers: {        
        'Access-Control-Allow-Origin':'*'
        }
    })
        .then(res => res.json())
        .then(data => results = data)
        .then(() => {
            if (JSON.stringify(results) == "[]") {
                notFoundMessageDisplay();
            }
            else {
                document.getElementById("result_name").innerHTML = JSON.stringify(results.first_name).slice(1, -1) 
                    + " " +JSON.stringify(results.last_name).slice(1, -1);
                document.getElementById("result_description").innerHTML = JSON.stringify(results.description).slice(1, -1);
                document.getElementById("result_address").innerHTML = JSON.stringify(results.address).slice(1, -1);
                document.getElementById("result_email").innerHTML = JSON.stringify(results.email).slice(1, -1);

                Object.values(results.phone_numbers).forEach(element => {
                    document.getElementById("result_phone")
                        .innerHTML += "<p class='r_description'>" + element + "</p>"
                });

                Object.values(results.relatives).forEach(element => {
                    document.getElementById("result_relatives")
                        .innerHTML += "<p class='r_description'>" + element + "</p>"
                });
            }
        })
        .catch(function() {
            notFoundMessageDisplay();
        });
}

function notFoundMessageDisplay() {
    document.getElementById("results_view").innerHTML =
        "<div><p class='r_header'>Nothing was Found</p>"
        + "<p class='r_description'>The search you made yielded no results...</p></div>";
}

function testing() {
    
}

function storeEmail(){
    let input = document.getElementById("email_input").value;
    let emailRegex = new RegExp("([a-zA-Z0-9]{2,}@[a-zA-Z0-9]{2,}.[a-zA-Z]{1,})");

    if(input == "" || emailRegex.test(String(input))==false ){
        document.getElementById("class_form").innerHTML = 
        "<div id='class_form' class='email_form_error'>"
        +"<label id='email_label' class='email_label_error' for='email_input'>Please add a valid Email address</label>"
        +"<input id='email_input' type='text'>"
        +"</div>";
    }
    else{
        sessionStorage.setItem("stored_email", input);
        window.location.href = "results.html";
    }
}

function getEmail(){
   return sessionStorage.getItem("stored_email");
}