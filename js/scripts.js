window.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.toggle-menu').forEach(element=>{
        element.addEventListener('click', function(){
            document.querySelector(element.dataset.target).classList.toggle('toggle-element');
        });
    });
});