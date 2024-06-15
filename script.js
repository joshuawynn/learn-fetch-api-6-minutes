fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
})
.then(res => {
    if (res.ok) {
        console.log('SUCCESS');
    } else {
        console.log('Not Successful');
    }
    return res.json();
})
.then(data => console.log(data))
.catch(error => console.log('ERROR', error));
