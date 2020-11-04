//JSnack2

//Partendo da un array creiamone uno nuovo con i valori che hanno la posizione compresa tra i 2 numeri inseriti dall utente

// usiamo i nuovi metodi degli array foreach o filter


$(document).ready(function() {

const array = [1,2,3,4,5,6] ;


const numero1 =parseInt(prompt('scrivi un numero'));
const numero2 =parseInt(prompt('scrivi un numero'));

console.log(numero1);
console.log(numero2);

const arrayUtente = array.filter({


    return array[i] > numero1 && array[i] < numero2  ;   



}) ;





})
