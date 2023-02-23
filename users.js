fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => {
        let li = `<tr><th>ID</th><th>Name</th><th>Email</th><th>User name</th></tr>`;
    
        json.forEach(user => {
            li += `<tr>
                <td>${user.id} </td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.username}</td>       
            </tr>`;
        });
    document.getElementById("users").innerHTML = li;
});