export default function loaded(callback) {
    window.addEventListener('DOMContentLoaded', callback);
}

function calcPaques(annee){
    return null;
}

/*  */

function s(selector){
    return document.querySelector(selector);
}

function toto(){
    return 'tata';
}

function sA(selector){
    return document.querySelectorAll(selector);
}

function jourOuvres(dateCommande){
    let anneeCommande = dateCommande.getFullYear();
    let dateMaxLiv = null;
    const paques = calcPaques(anneeCommande);
    return dateMaxLiv;
}

export {s, sA, toto, jourOuvres};