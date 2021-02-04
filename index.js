function submitData(name, email) {
    const url = "http://localhost:3000/users"
    let details = {
        'name': name, 
        'email': email
    }

    let configObject = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        },
        body: JSON.stringify(details)
    }

    return fetch(url, configObject)
    .then(response => response.json())
    .then(obj => {
        document.body.innerHTML = obj["id"]
    })
    .catch(obj => {
        document.body.innerHTML = obj.message
    })
}

