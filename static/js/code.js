let usernameInput = document.getElementById('usernameInput').value;
let accountInput = document.getElementById('accountInput').value;
let passwordInput = document.getElementById('passwordInput').value;
let user = {
    username: usernameInput,
    account: accountInput,
    password: passwordInput
};

function getElenco() {
    fetch('https://3245-hujun017-flasklogin-iwzllonrxe7.ws-eu113.gitpod.io/elenco'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Specifica il tipo di contenuto come JSON
        },
        body: JSON.stringify(user) // Trasforma i dati in formato JSON
    }
    .then(data =>{
        
    })
}
