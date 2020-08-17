// $(document).ready(function(e) {
//     $("#listaNachosZapatistas").toggle(

//         function() {
//             $("#listaNachosZapatistas").hide(e);
//             $("#texto").hide(e);

//         },

//         $("#nachos").click(function(e) {


//             $("#listaNachosZapatistas").show(e);
//             $("#nachisimos").show(e);

//         }),

//         $("#nachos").click(function(e) {


//             $("#listaNachosZapatistas").hide(e);
//             $("#nachisimos").hide(e);

//         })


//     );
// });


$(document).ready(function(e) {

    $("#listaNachosZapatistas").toggle(

    );

    $("#listaNachisimos").toggle(

    );
    $("#listaChicharronesQuesoVegetariano").toggle(

    );

    $("#listaChicharronesQuesoArgentino").toggle(

    );

});



$(document).ready(function(e) {
var contador = 0;
    $("#contenedorBotonNachos").click(function(e) {
        console.log(contador)


        if (contador == 0) {
            $("#listaNachosZapatistas").show(e);
            $("#listaNachisimos").show(e);

            contador++;
        } else {
            $("#listaNachosZapatistas").hide(e);
            $("#listaNachisimos").hide(e);

            contador = 0;
        }
    });

});


$(document).ready(function(e) {
    var contador = 0;
    $("#contenedorBotonChicharrones").click(function(e) {
        console.log(contador)

        if (contador == 0) {

            $("#listaChicharronesQuesoVegetariano").show(e);
            $("#listaChicharronesQuesoArgentino").show(e);

            contador++;
        } else {

            $("#listaChicharronesQuesoVegetariano").hide(e);
            $("#listaChicharronesQuesoArgentino").hide(e);

            contador = 0;
        }
    });

});