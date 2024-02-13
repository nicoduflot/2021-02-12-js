/* sessionStorage */

function sessionUserNameLog(){
    const username = document.getElementById('sessionUser');
    /*
    console.log(username);
    console.log(username.value);
    */
    if(username.value !== ''){
        sessionStorage.setItem('username', username.value);
        document.getElementById('usernameLogged').innerHTML = username.value;
        username.value = '';
    }
}

function sessionDeleteUsername(){
    sessionStorage.removeItem('username');
    document.getElementById('usernameLogged').innerHTML = '';
}

function sessionClearSession(){
    sessionStorage.clear();
    document.getElementById('usernameLogged').innerHTML = '';
}

/* localStorage */

function localUserNameLog(){
    const username = document.getElementById('localUser');
    /*
    console.log(username);
    console.log(username.value);
    */
    if(username.value !== ''){
        localStorage.setItem('username', username.value);
        document.getElementById('usernameLocalLogged').innerHTML = username.value;
        username.value = '';
    }
}

function localDeleteUsername(){
    localStorage.removeItem('username');
    document.getElementById('usernameLocalLogged').innerHTML = '';
}

function localClearLocal(){
    localStorage.clear();
    document.getElementById('usernameLocalLogged').innerHTML = '';
}


/* on attend que la page soit totalement chargée pour agir sur les éléments de la page !!! */
window.addEventListener('DOMContentLoaded', function(){
    if(this.sessionStorage.getItem('username')){
        document.getElementById('usernameLogged').innerHTML = this.sessionStorage.getItem('username');
    }
    
    if(this.localStorage.getItem('username')){
        document.getElementById('usernameLocalLogged').innerHTML = this.localStorage.getItem('username');
    }
});