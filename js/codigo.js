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

    $(".listaNachosZapatistas").toggle(

    );
    $(".nachisimos").toggle(

    );

});

var contador = 0;

// while (contador != 2) {
$(document).ready(function(e) {

    $(".contenedorBoton").click(function(e) {

        contador++;

        $(".listaProducto").show(e);
        // $(".nachisimos").show(e);

        if (contador == 2) {

            $(".listaProducto").hide(e);
            // $(".nachisimos").hide(e);

            contador = 0;

        }

    });



});











// }

// $(document).ready(function(e) {

//     if (contador > 2) {

//         $("#nachos").click(function(e) {


//             $("#listaNachosZapatistas").hide(e);
//             $("#nachisimos").hide(e);

//         });

//     }

// });