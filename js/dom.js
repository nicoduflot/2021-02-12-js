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
    buttonClick.addEventListener('click', function(event){
        event.stopPropagation();
        //console.log(this.innerHTML);
    });

    const allP = document.querySelectorAll('p:not(p.special)');
    //console.log(allP);

    this.document.querySelector('section').addEventListener('click', function(){
        console.log('toto');
    });

    allP.forEach(function(paragraphe){
        paragraphe.addEventListener('click', function(){
            //console.log(this.innerHTML);
            //console.log(this.classList);
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

    document.getElementById('checkP').addEventListener('click', function(event){
        event.stopPropagation();
        document.querySelectorAll('p:not(p.stupide)').forEach(function(paragraphe){
            console.log(paragraphe);
        });
    });

    const imgOver = document.getElementById('imgOver');

    imgOver.addEventListener('mouseover', function(){
        this.setAttribute('src', '../images/pip-boy-thumb-up.png');
        this.setAttribute('alt', 'Pip boy avec le bras droit');
        this.nextElementSibling.innerHTML = 'Pip boy avec le bras droit';
    });
    
    imgOver.addEventListener('mouseleave', function(){
        this.setAttribute('src', '../images/pip-boy-thumb-down.png');
        this.setAttribute('alt', 'Pip boy sans le bras droit');
        this.nextElementSibling.innerHTML = 'Pip boy sans le bras droit';
    });

    
});