// Togle inicial para todos los objetos de la lista
$(document).ready(function (e) {

    $("#listaNachosZapatistas").toggle(

    );

    $("#listaNachisimos").toggle(

    );
    $("#listaChicharronesQuesoVegetariano").toggle(

    );

    $("#listaChicharronesQuesoArgentino").toggle(

    );

    $("#listaPapasZapatistas").toggle(

    );

    $("#listaPapas").toggle(

    );

    $("#listaPechugitasBuffaloRecargadas").toggle(

    );

    $("#listaTamalesEnCazuela").toggle(

    );

    $("#listaSopasAzteca").toggle(

    );

    $("#listaSopadeLima").toggle(

    );

    $("#listaEnsaladaMexicana").toggle(

    );
    $("#listaEnsaladaAcapulco").toggle(

    );
    $("#listaEnsaladaCesar").toggle(

    );
    $("#listaEnsaladaQuinoa").toggle(

    );
    $("#listaTacosChilorio").toggle(

    );
    $("#listaTacosPilbil").toggle(

    );
    $("#listaTacosPollo").toggle(

    );
    $("#listaTacosVerdura").toggle(

    );
    $("#listaTacosAsada").toggle(

    );
    $("#listaQuesadillasChilorio").toggle(

    );
    $("#listaQuesadillasPilbil").toggle(

    );
    $("#listaQuesadillasPollo").toggle(

    );
    $("#listaQuesadillasVerdura").toggle(

    );
    $("#listaQuesadillasAsada").toggle(

    );
    $("#listaFlautasRes").toggle(

    );
    $("#listaFlautasPollo").toggle(

    );
    $("#listaFlautasPuerco").toggle(

    );
    $("#listaPepsi").toggle(

    );
    $("#listaAgua").toggle(

    );
    $("#listaJugos").toggle(

    );
    $("#Tortatresleches").toggle(

    );
    $("#Crepeé").toggle(

    );
    $("#PandePlatanos").toggle(

    );
    $("#RollDeCanela").toggle(

    );
    $("#listaCorona").toggle(

    );
    $("#listaPatagonia").toggle(

    );
    $("#listaStella").toggle(

    );
    $("#listaQuilmes").toggle(

    );

    $("#Marquise").toggle(

    );
    $("#Chocolatosa").toggle(
    
    );
     $("#Cheescake").toggle(
    
     );
     $("#DonasMexicanas").toggle(
    
    );
    $("#Churros").toggle(
    
    );
    
    $("#Medialunas").toggle(

    );
    $("#tortasDeJamon ").toggle(
        
    );
    $("#tostadas").toggle(
        
    );
    $("#platoDeFrutas").toggle(
        
    );
    $("#HuevosRancheros").toggle(
    
    );
        
    $("#HuevosDivorciados").toggle(
    
    );
    $("#Chilaquiles").toggle(
            
    );
    $("#desayunoVoladorDelDia").toggle(
            
    );


});


// READY NACHOS
$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonNachos").click(function (e) {


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

// READY CHICHARRONES
$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonChicharrones").click(function (e) {


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

// READY PAPAS
$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonPapas").click(function (e) {


        if (contador == 0) {
            $("#listaPapasZapatistas").show(e);
            $("#listaPapas").show(e);


            contador++;
        } else {
            $("#listaPapasZapatistas").hide(e);
            $("#listaPapas").hide(e);

            contador = 0;
        }
    });

});

// READY PECHUGAS
$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonPechugitas").click(function (e) {


        if (contador == 0) {
            $("#listaPechugitasBuffaloRecargadas").show(e);


            contador++;
        } else {
            $("#listaPechugitasBuffaloRecargadas").hide(e);

            contador = 0;
        }
    });

});

// READY TAMALES
$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonTamales").click(function (e) {


        if (contador == 0) {
            $("#listaTamalesEnCazuela").show(e);


            contador++;
        } else {
            $("#listaTamalesEnCazuela").hide(e);

            contador = 0;
        }
    });

});

// READY SOPAS
$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonSopas").click(function (e) {

        if (contador == 0) {

            $("#listaSopasAzteca").show(e);
            $("#listaSopadeLima").show(e);

            contador++;
        } else {

            $("#listaSopasAzteca").hide(e);
            $("#listaSopadeLima").hide(e);

            contador = 0;
        }
    });

});

$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonEnsaladas").click(function (e) {

        if (contador == 0) {

            $("#listaEnsaladaMexicana").show(e);
            $("#listaEnsaladaAcapulco").show(e);
            $("#listaEnsaladaCesar").show(e);
            $("#listaEnsaladaQuinoa").show(e);
            contador++;
        } else {

            $("#listaEnsaladaMexicana").hide(e);
            $("#listaEnsaladaAcapulco").hide(e);
            $("#listaEnsaladaCesar").hide(e);
            $("#listaEnsaladaQuinoa").hide(e);
            contador = 0;
        }
    });

});

$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonTacos").click(function (e) {

        if (contador == 0) {

            $("#listaTacosChilorio").show(e);
            $("#listaTacosPilbil").show(e);
            $("#listaTacosPollo").show(e);
            $("#listaTacosVerdura").show(e);
            $("#listaTacosAsada").show(e);
            contador++;
        } else {

            $("#listaTacosChilorio").hide(e);
            $("#listaTacosPilbil").hide(e);
            $("#listaTacosPollo").hide(e);
            $("#listaTacosVerdura").hide(e);
            $("#listaTacosAsada").hide(e);
            contador = 0;
        }
    });


});

$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonQuesadillas").click(function (e) {

        if (contador == 0) {

            $("#listaQuesadillasChilorio").show(e);
            $("#listaQuesadillasPilbil").show(e);
            $("#listaQuesadillasPollo").show(e);
            $("#listaQuesadillasVerdura").show(e);
            $("#listaQuesadillasAsada").show(e);
            contador++;
        } else {

            $("#listaQuesadillasChilorio").hide(e);
            $("#listaQuesadillasPilbil").hide(e);
            $("#listaQuesadillasPollo").hide(e);
            $("#listaQuesadillasVerdura").hide(e);
            $("#listaQuesadillasAsada").hide(e);
            contador = 0;
        }
    });
});

$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonFlautas").click(function (e) {

        if (contador == 0) {

            $("#listaFlautasRes").show(e);
            $("#listaFlautasPollo").show(e);
            $("#listaFlautasPuerco").show(e);

            contador++;
        } else {

            $("#listaFlautasRes").hide(e);
            $("#listaFlautasPollo").hide(e);
            $("#listaFlautasPuerco").hide(e);

            contador = 0;
        }
    });
});

$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonFlautas").click(function (e) {

        if (contador == 0) {

            $("#listaFlautasRes").show(e);
            $("#listaFlautasPollo").show(e);
            $("#listaFlautasPuerco").show(e);

            contador++;
        } else {

            $("#listaFlautasRes").hide(e);
            $("#listaFlautasPollo").hide(e);
            $("#listaFlautasPuerco").hide(e);

            contador = 0;
        }
    });
});

$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonRefrescos").click(function (e) {

        if (contador == 0) {

            $("#listaPepsi").show(e);
            $("#listaAgua").show(e);
            $("#listaJugos").show(e);

            contador++;
        } else {

            $("#listaPepsi").hide(e);
            $("#listaAgua").hide(e);
            $("#listaJugos").hide(e);

            contador = 0;
        }
    });
});

$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonNachos").click(function (e) {

        if (contador == 0) {

            $("#Tortatresleches").show(e);
            $("#Crepeé").show(e);
            $("#PandePlatanos").show(e);
            $("#RollDeCanela").show(e);

            contador++;
        } else {

            $("#Tortatresleches").hide(e);
            $("#Crepeé").hide(e);
            $("#PandePlatanos").hide(e);
            $("#RollDeCanela").hide(e);
            contador = 0;
        }
    });
});

$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonCervezas").click(function (e) {

        if (contador == 0) {

            $("#listaCorona").show(e);
            $("#listaPatagonia").show(e);
            $("#listaStella").show(e);
            $("#listaQuilmes").show(e);


            contador++;
        } else {

            $("#listaCorona").hide(e);
            $("#listaPatagonia").hide(e);
            $("#listaStella").hide(e);
            $("#listaQuilmes").hide(e);

            contador = 0;
        }
    });
});

$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonPasteleria").click(function (e) {

        if (contador == 0) {

            $("#Marquise").show(e);
            $("#Chocolatosa").show(e);
            $("#Cheescake").show(e);
            $("#DonasMexicanas").show(e);
            $("#Churros").show(e);
            $("#Medialunas").show(e);
            $("#tortasDeJamon ").show(e);
            $("#tostadas").show(e);
            $("#platoDeFrutas").show(e);
            contador++;
        } else {

            $("#Marquise").hide(e);
            $("#Chocolatosa").hide(e);
            $("#Cheescake").hide(e);
            $("#DonasMexicanas").hide(e);
            $("#Churros").hide(e);
            $("#Medialunas").hide(e);
            $("#tortasDeJamon ").hide(e);
            $("#tostadas").hide(e);
            $("#platoDeFrutas").hide(e);


            contador = 0;
        }
    });
});

$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonDesayunos").click(function (e) {

        if (contador == 0) {

            $("#HuevosRancheros").show(e);
            $("#HuevosDivorciados").show(e);
            $("#Chilaquiles").show(e);
            $("#desayunoVoladorDelDia").show(e);

            contador++;
        } else {

            $("#HuevosRancheros").hide(e);
            $("#HuevosDivorciados").hide(e);
            $("#Chilaquiles").hide(e);
            $("#desayunoVoladorDelDia").hide(e);
            contador = 0;
        }
    });
});