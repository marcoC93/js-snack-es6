//JSnack 1
//creare un array di oggetti

//Ogni oggetto descriverá una bici da corsacon le seguenti propietá nome e peso


//stampare a schermo la bici  con peso minore utilizzando destructuring e template literal


$(document).ready(function() {

    let lista_bici = [ {

         nome : 'mountain bike',
         peso :  7 ,

    },
    {

         nome : 'bmx',
         peso :  4 ,

    },
    {

         nome : 'fat bike',
         peso :  10 ,

    },
    {

         nome : 'graziella',
         peso :  3 ,

    }

];



    console.log(bici1);

let {peso} = bici1 ;

console.log(peso);

    console.log(nome);
    console.log(peso);

lista_bici.forEach((peso,i) => {
    let [...bici1] = lista_bici;

    console.log(bici1);
});










})
