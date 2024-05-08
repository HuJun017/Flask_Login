function getElenco() {
    let usernameInput = document.getElementById('usernameInput').value;
    let accountInput = document.getElementById('accountInput').value;
    let passwordInput = document.getElementById('passwordInput').value;
    let user = {
        username: usernameInput,
        account: accountInput,
        password: passwordInput
    };

    fetch('https://3245-hujun017-flasklogin-iwzllonrxe7.ws-eu111.gitpod.io/elenco', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data[1]);
        if (data[1] === true) {
            window.location.href = 'https://3245-hujun017-flasklogin-iwzllonrxe7.ws-eu111.gitpod.io/test';
        }
        else {
            alert('utente inesistente, controlla di aver inserito i dati correttamente!')
        }
    })
    .catch(error => {
        console.error('Si è verificato un errore:', error);
    });
}
