function getXhr(){
    let xhr = null;

    /* vérifier si le navigateur accepte le protocole de communication AJAX */
    if(window.ActiveXObject || window.XMLHttpRequest ){
        if(window.ActiveXObject){
            /* si M$ */
            /* il existe deux protocoles pour ajax */
            try{
                xhr = new ActiveXObject('Msxml2.XMLHTTP');
            }catch(erreur){
                xhr = new ActiveXObject('Microsoft.XMLHTTP');
            }
        }else{
            xhr = new XMLHttpRequest();
        }
    }else{
        console.log('votre navigateur ne supporte pas Ajax');
        xhr = false;
    }

    return xhr;
}

window.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.toggle-menu').forEach(element=>{
        element.addEventListener('click', function(){
            document.querySelector(element.dataset.target).classList.toggle('toggle-element');
        });
    });
});