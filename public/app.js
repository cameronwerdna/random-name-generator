const makeRandomName = () => {
    fetch('http://localhost:4000/random-name')
    .then(res => res.json())
    .then(result => {
        resultDiv.innerHTML = `<h2>${result.first_name} ${result.last_name}</h2>`
    });
    
}

