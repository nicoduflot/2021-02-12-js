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

/* cookies */

/* première sécurité d'un cookie : sa date d'expiration / age maximal */

/* 2024-02-13Thh:mm:ss */
/* mm/jj/aaaa */

/* les date en JS */
let dateNow = new Date();
console.log(dateNow);
console.log(dateNow.getMonth());
console.log(dateNow.getDay());
console.log(dateNow.toUTCString());
console.log(dateNow.getTime());
console.log(dateNow.getTime() + (24 * 60 * 60 * 1000));
console.log(dateNow.setTime( dateNow.getTime() + (24 * 60 * 60 * 1000) ));
console.log(dateNow.toUTCString());

const uneJournee = 24 * 60 *60;


const chaineCookie = `cookieTest=toto; max-age=${uneJournee}; path=introduction; Samesite=Strict; secure`;

document.cookie = chaineCookie;

function setCookie(name, value = '', days = -1, path='/'){
    const maxAge = days* 20 * 60 * 60;
    const chaineCookie = `${name}=${value}; max-age=${maxAge}; path=${path}; Samesite=Strict; secure`;
    document.cookie = chaineCookie;
    return true;
}

function getCookie(name = ''){
    const tabCookie = document.cookie.split('; ');
    for(cookie of tabCookie){
        console.log(cookie);
        const indexEqual = cookie.indexOf('=');
        const cookieName = cookie.slice(0, indexEqual);
        const cookieValue = cookie.slice(indexEqual+1);
        if(name === cookieName){
            return cookieValue;
        }
    }
    return false;
}

function logCookie(){
    let username = document.getElementById('cookieUsername');
    if(username.value !== ''){
        setCookie('username', username.value, 1);
        document.getElementById('CookieLogUsername').innerHTML = username.value;
        username.value = '';
    }
}

function unlogCookie(){
    setCookie('username');
    document.getElementById('CookieLogUsername').innerHTML = '';
}

function checkCookieUsername(){
    if(username = getCookie('username')){
        document.getElementById('CookieLogUsername').innerHTML = username;
    }
}

/* on attend que la page soit totalement chargée pour agir sur les éléments de la page !!! */
window.addEventListener('DOMContentLoaded', function(){
    if(this.sessionStorage.getItem('username')){
        document.getElementById('usernameLogged').innerHTML = this.sessionStorage.getItem('username');
    }
    
    if(this.localStorage.getItem('username')){
        document.getElementById('usernameLocalLogged').innerHTML = this.localStorage.getItem('username');
    }

    checkCookieUsername();
});