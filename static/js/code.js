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
        console.log(data.length)
        //while (trovato === false && i < data.length)
    })
}
