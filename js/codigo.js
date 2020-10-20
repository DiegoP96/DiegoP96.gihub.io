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
    $("#ristrettoMacho").toggle(

    );
    $("#expresoPorteno").toggle(

    );
    $("#cafePincheGringo").toggle(

    );
    $("#cafeLatte").toggle(

    );
    $("#chocolateTradicional").toggle(

    );
    $("#chocolateEspecial").toggle(

    );
    $("#capuchinoTradicional").toggle(

    );
    $("#CapuchinoALaMexicana").toggle(

    );
    $("#te").toggle(

    );
    $("#cafeconLeche").toggle(

    );

    $("#listaMargarita").toggle(

    );
    $("#listaCampari").toggle(

    );
    $("#listaNegroni").toggle(

    );
    $("#listaMojito").toggle(

    );
    $("#listaGinTonic").toggle(

    );
    $("#listaFernet").toggle(

    );
    $("#listaCubaLibre").toggle(

    );
    $("#listaCaipi").toggle(

    );

    $("#listaTrivento1").toggle(

    );
    $("#listaTrivento2").toggle(

    );
    $("#listaTrivento3").toggle(

    );
    $("#listaTrivento4").toggle(

    );
    $("#listaTrivento5").toggle(

    );
    $("#listaTrivento6").toggle(

    );
    $("#listaTrivento7").toggle(

    );
    $("#listaTrivento8").toggle(

    );
    $("#listaTrivento9").toggle(

    );
    $("#listaTrivento10").toggle(

    );

    $("#listaSanHuberto1").toggle(

    );
    $("#listaSanHuberto2").toggle(

    );
    $("#listaSanHuberto3").toggle(

    );
    $("#listaSanHuberto4").toggle(

    );
    $("#listaSanHuberto5").toggle(

    );
    $("#listaSanHuberto6").toggle(

    );
    $("#listaSanHuberto7").toggle(

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

// READY ENSALADAS
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

// READY TACOS
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

// READY QUESADILLAS
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

// READY FLAUTAS
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

// READY REFRESCOS
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

// READY NACHOS
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

// READY CERVEZAS
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

// READY PASTELERIA
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

// READY DESAYUNOS
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

// READY CAFETERIA
$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonCafeteria").click(function (e) {

        if (contador == 0) {

            $("#expresoPorteno").show(e);
            $("#ristrettoMacho").show(e);
            $("#cafePincheGringo").show(e);
            $("#cafeconLeche").show(e);
            $("#cafeLatte").show(e);
            $("#chocolateTradicional").show(e);
            $("#chocolotaEspecial").show(e);
            $("#capuchinoTradicional").show(e);
            $("#CapuchinoALaMexicana").show(e);
            $("#te").show(e);

            contador++;
        } else {

            $("#expresoPorteno").hide(e);
            $("#ristrettoMacho").hide(e);
            $("#cafePincheGringo").hide(e);
            $("#cafeconLeche").hide(e);
            $("#cafeLatte").hide(e);
            $("#chocolateTradicional").hide(e);
            $("#chocolotaEspecial").hide(e);
            $("#capuchinoTradicional").hide(e);
            $("#CapuchinoALaMexicana").hide(e);
            $("#te").hide(e);
            contador = 0;
        }
    });
});

// READY TRAGOS
$(document).ready(function (e) {

    var contador = 0;
    $("#contenedorBotonTragos").click(function (e) {

        if (contador == 0) {

            $("#listaMojito").show(e);
            $("#listaCaipi").show(e);
            $("#listaCubaLibre").show(e);
            $("#listaFernet").show(e);
            $("#listaGinTonic").show(e);
            $("#listaNegroni").show(e);
            $("#listaCampari").show(e);
            $("#listaMargarita").show(e);

            contador++;
        } else {

            $("#listaMojito").hide(e);
            $("#listaCaipi").hide(e);
            $("#listaCubaLibre").hide(e);
            $("#listaFernet").hide(e);
            $("#listaGinTonic").hide(e);
            $("#listaNegroni").hide(e);
            $("#listaCampari").hide(e);
            $("#listaMargarita").hide(e);
            contador = 0;
        }
    });
});

// READY TRIVENTO
$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonTrivento").click(function (e) {

        if (contador == 0) {

            $("#listaTrivento1").show(e);
            $("#listaTrivento2").show(e);
            $("#listaTrivento3").show(e);
            $("#listaTrivento4").show(e);
            $("#listaTrivento5").show(e);
            $("#listaTrivento6").show(e);
            $("#listaTrivento7").show(e);
            $("#listaTrivento8").show(e);
            $("#listaTrivento9").show(e);
            $("#listaTrivento10").show(e);


            contador++;
        } else {

            $("#listaTrivento1").hide(e);
            $("#listaTrivento2").hide(e);
            $("#listaTrivento3").hide(e);
            $("#listaTrivento4").hide(e);
            $("#listaTrivento5").hide(e);
            $("#listaTrivento6").hide(e);
            $("#listaTrivento7").hide(e);
            $("#listaTrivento8").hide(e);
            $("#listaTrivento9").hide(e);
            $("#listaTrivento10").hide(e);
            contador = 0;
        }
    });
});

// READY SAN HUEBERTO
$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonSanHuberto").click(function (e) {

        if (contador == 0) {

            $("#listaSanHuberto1").show(e);
            $("#listaSanHuberto2").show(e);
            $("#listaSanHuberto3").show(e);
            $("#listaSanHuberto4").show(e);
            $("#listaSanHuberto5").show(e);
            $("#listaSanHuberto6").show(e);
            $("#listaSanHuberto7").show(e);


            contador++;
        } else {

            $("#listaSanHuberto1").hide(e);
            $("#listaSanHuberto2").hide(e);
            $("#listaSanHuberto3").hide(e);
            $("#listaSanHuberto4").hide(e);
            $("#listaSanHuberto5").hide(e);
            $("#listaSanHuberto6").hide(e);
            $("#listaSanHuberto7").hide(e);

            contador = 0;
        }
    });
});