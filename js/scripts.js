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

function jsonToTable(data){
    let table = '<table class="table text-left">';
    if(!data.length){
        table = table + '<tr><td>';
        
        table = table + '</td></tr>';
    }else{
        for(item of data){
            table = table + '<tr>';
            for(key in item){
                if(typeof item[key] !== 'object'){
                    table = table + `<td><b>${key}</b><br />${item[key]}</td>`;
                }else{
                    const subItem = item[key];
                    table = table + `<td><b>${key}</b><br />`;
                    for(subKey in subItem){
                        if(typeof subItem[subKey] !== 'object'){
                            table = table + `<b>${subKey}</b> : ${subItem[subKey]}<br />`;
                        }
                    }
                    table = table + '</td>';
                }
            }
            table = table + '</tr>';
        }
    }
    table = table + '</table>';
    return table;
}

window.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.toggle-menu').forEach(element=>{
        element.addEventListener('click', function(){
            document.querySelector(element.dataset.target).classList.toggle('toggle-element');
        });
    });
});