// NIET OPENEN IN SAFARI

fetch('https://randomuser.me/api/?results=10')
.then(function(response) {
    return response.json();
})
.then(function(data) { 
    // Roept funcites op in then om netter te werken
    userToStorage(data);
    displayUser(data);
    
});


function displayUser(data) {
    // Selecteer class container
    let display = document.querySelector('.container');
    // Maakt nieuwe variabele aan met geen content
    let output = "";
    // Declareerd de i variabele om in de array te gebruiken
    let i = 0;

    // output is een lege string om dan later daar de content in te voegen
    output += `
        <div class="display">
            <h2 class="name">${ data.results[i].name.first + ' ' + data.results[i].name.last }</h2>
            <img class="displayImage" src="${ data.results[i].picture.large }"></img>
            <p class="age">${ data.results[i].dob.age }</p>
            <p class="gender">${ data.results[i].gender }</p>
            <p class="nationality">${ data.results[i].nat }</p>
            <button class="like">Like</button>
            <button class="dislike">Dislike</button>
        </div>
    `
    display.innerHTML = output;
}

function userToStorage(data) {
    // Maakt een lege array aan
    let users = [];
    // Loopt door de results om alle data te krijgen
    for (i = 0; i < data.results.length; i++) {
        // Maakt een model met alle info in
        let user = {
            img: data.results[i].picture.large,
            name: data.results[i].name.first,
            last_name: data.results[i].name.last,
            age: data.results[i].dob.age,
            gender: data.results[i].gender,
            nationality: data.results[i].nat
        }

        // Roept users op in de localstorage
        JSON.parse(localStorage.getItem("users"))
        // Stopt de let user in de aangemaakte array users
        users.push(user);
    }
    // Zet de users om in een string
    localStorage.setItem("users", JSON.stringify(users));
}

/*
    // Nog te doen ------------------------------------------------------------
    document.getElementsByClassName("like").addEventListener("click", function(){
        function nextUser(){
            let i= i+1;
        }
    });
*/