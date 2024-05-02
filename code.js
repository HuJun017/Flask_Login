function getElenco() {
    let username_input = document.getElementById('username_input').value;
    let account_input = document.getElementById('account_input').value;
    let password_input = document.getElementById('password_input').value;
    fetch('https://3245-hujun017-flasklogin-iwzllonrxe7.ws-eu110.gitpod.io/elenco_utenti')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let trovato = false;
        let i = 0;
        while (!trovato && i < data.length) {
            if (data[i].username === username_input && data[i].account === account_input && data[i].password === password_input) {
                trovato = true;
            }
            i++; 
        }
        if (trovato) {
            console.log("Dati trovati!");
            // Puoi eseguire qui le azioni desiderate se i dati sono stati trovati
        } else {
            console.log("Dati non trovati!");
            // Puoi eseguire qui le azioni desiderate se i dati non sono stati trovati
        }
    })
    
    .catch(error => console.error('Si è verificato un errore:', error));
}
