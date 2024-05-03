function getElenco() {
    //dichiarazioni variabili
    let usernameInput = document.getElementById('usernameInput').value;
    let accountInput = document.getElementById('accountInput').value;
    let passwordInput = document.getElementById('passwordInput').value;
    let trovato = false;
    let i = 0; //indice
    
    //estrazione dati
    fetch('https://3245-hujun017-flasklogin-iwzllonrxe7.ws-eu110.gitpod.io/elenco')
    .then(response => response.json())
    .then(data => {
        //visualizzazione dei dati
        console.log(data);
        //trovare il password
        //while (trovato === false && i < data.length)
        let lunghezzaData = Object.keys(data.username).length;
        while (i < lunghezzaData && !trovato) {
            if (data.password[i] === passwordInput && data.username[i] === usernameInput && data.account[i] === accountInput) {
                trovato = true;
            }
            i++;
        }
        //check per vedere se il password è stato trovato
        if (trovato) {
            console.log("La password è stata trovata!");
            window.location.href = "https://3245-hujun017-flasklogin-iwzllonrxe7.ws-eu110.gitpod.io/test"
        } else {
            console.log("La password non è stata trovata.");
        }
    })
}
