console.log('début du chargement de la page');
window.addEventListener('DOMContentLoaded', function(event){
    console.log('la page est chargée,on peut utiliser ses éléments');
    console.log(event);
    /*
    document.addEventListener('click', function(event){
        console.log(event.target.tagName);
    });
    */

    const buttonClick = document.querySelector('button.testez-moi');
    buttonClick.addEventListener('click', function(){
        console.log(this.innerHTML);
    });

    const allP = document.querySelectorAll('p:not(p.special)');
    console.log(allP);

    allP.forEach(function(paragraphe){
        paragraphe.addEventListener('click', function(){
            console.log(this.innerHTML);
            console.log(this.classList);
            this.classList.toggle('fondGris20');
            /*
            if(this.classList.contains('toto')){
                this.classList.remove('toto')
            }else{
                this.classList.add('toto');
            }
            */
        });
    });
});