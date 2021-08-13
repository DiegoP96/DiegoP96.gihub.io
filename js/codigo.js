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
    $("#listaSopadeLima2").toggle(

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
    $("#listaTacosPollo2").toggle(

    );
    $("#listaTacosVerdura").toggle(

    );
    $("#listaTacosAsada").toggle(

    );
    $("#listaTacosGuadalupe").toggle(

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
    $("#listaQuesadillasAsada2").toggle(

    );
    $("#listaFlautasRes").toggle(

    );
    $("#listaFlautasPollo").toggle(

    );
    $("#listaFlautasPuerco").toggle(

    );
    $("#listaFlautasRes1").toggle(

    );
    $("#listaFlautasPollo1").toggle(

    );
    $("#listaFlautasPuerco1").toggle(

    );
    $("#listaFlautasPuercoP1").toggle(

    );
    $("#listaPepsi").toggle(

    );
    $("#listaAgua").toggle(

    );
    $("#listaJugos").toggle(

    );
    $("#listaToros").toggle(

    );
    $("#listaLimonada").toggle(

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
    $("#listaPatagonia1").toggle(

    );
    $("#listaPatagonia2").toggle(

    );
    $("#listaPatagonia3").toggle(

    );
    $("#listaPatagonia4").toggle(

    );
    $("#listaPatagonia5").toggle(

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
    $("#tortasDeJamonP ").toggle(

    );
    $("#tortasDeJamonPQ ").toggle(

    );
    $("#tortasDeJamonB ").toggle(

    );
    $("#tortasDeJamonV ").toggle(

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
    $("#Chilaquiles1").toggle(

    );
    $("#desayunoVoladorDelDia").toggle(

    );
    $("#Moyotes").toggle(

    );

    $("#tostadaFranchuta").toggle(

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
    $("#listaMojito2").toggle(

    );
    $("#listaMojito3").toggle(

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
    $("#listaSanHuberto8").toggle(

    );
    $("#listaMalma1").toggle(

    );
    $("#listaMalma2").toggle(

    );
    $("#listaMalma3").toggle(

    );
    $("#listaMalma4").toggle(

    );
    $("#listaMalma5").toggle(

    );
    $("#listaMalma6").toggle(

    );
    $("#listaMalma7").toggle(

    );
    $("#listaMalma8").toggle(

    );
    $("#listaMalma9").toggle(

    );
    $("#listaMalma10").toggle(

    );


    $("#listaSueco").toggle(

    );
    $("#listaPollo").toggle(

    );

    $("#pizzaMargarita").toggle(

    );
    $("#pizzaMexicana").toggle(

    );
    $("#pizzaTocino").toggle(

    );

});


// READY NACHOS
$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonNachos").click(function (e) {


        if (contador == 0) {
            $("#listaNachosZapatistas").show(e);
            $("#listaNachisimos").show(e);
            $("#Chilaquiles").show(e);
            $("#Cheescake").show(e);

            contador++;
        } else {
            $("#listaNachosZapatistas").hide(e);
            $("#listaNachisimos").hide(e);
            $("#Chilaquiles").hide(e);
            $("#Cheescake").hide(e);
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
            $("#listaSopadeLima2").show(e);

            contador++;
        } else {

            $("#listaSopasAzteca").hide(e);
            $("#listaSopadeLima").hide(e);
            $("#listaSopadeLima2").hide(e);


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
            $("#listaTacosPollo2").show(e);
            contador++;
        } else {

            $("#listaTacosChilorio").hide(e);
            $("#listaTacosPilbil").hide(e);
            $("#listaTacosPollo").hide(e);
            $("#listaTacosVerdura").hide(e);
            $("#listaTacosAsada").hide(e);
            $("#listaTacosPollo2").hide(e);
            contador = 0;
        }
    });


});
$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonTacosEspeciales").click(function (e) {

        if (contador == 0) {

            $("#listaTacosAsada").show(e);
            $("#listaTacosGuadalupe").show(e);
            contador++;
        } else {

            $("#listaTacosAsada").hide(e);
            $("#listaTacosGuadalupe").hide(e);
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
            $("#listaQuesadillasAsada2").show(e);
            contador++;
        } else {

            $("#listaQuesadillasChilorio").hide(e);
            $("#listaQuesadillasPilbil").hide(e);
            $("#listaQuesadillasPollo").hide(e);
            $("#listaQuesadillasVerdura").hide(e);
            $("#listaQuesadillasAsada").hide(e);
            $("#listaQuesadillasAsada2").hide(e);
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

$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonFlautas1").click(function (e) {

        if (contador == 0) {

            $("#listaFlautasRes1").show(e);
            $("#listaFlautasPollo1").show(e);
            $("#listaFlautasPuerco1").show(e);
            $("#listaFlautasPuercoP1").show(e);

            contador++;
        } else {

            $("#listaFlautasRes1").hide(e);
            $("#listaFlautasPollo1").hide(e);
            $("#listaFlautasPuerco1").hide(e);
            $("#listaFlautasPuercoP1").hide(e);

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
            $("#listaToros").show(e);
            $("#listaLimonada").show(e);

            contador++;
        } else {

            $("#listaPepsi").hide(e);
            $("#listaAgua").hide(e);
            $("#listaJugos").hide(e);
            $("#listaToros").hide(e);
            $("#listaLimonada").hide(e);

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
            $("#listaStella").show(e);
            $("#listaQuilmes").show(e);


            contador++;
        } else {

            $("#listaCorona").hide(e);

            $("#listaStella").hide(e);
            $("#listaQuilmes").hide(e);

            contador = 0;
        }
    });
});

$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonPatagonia").click(function (e) {

        if (contador == 0) {
            $("#listaPatagonia1").show(e);
            $("#listaPatagonia2").show(e);
            $("#listaPatagonia3").show(e);
            $("#listaPatagonia4").show(e);
            $("#listaPatagonia5").show(e);
            contador++;
        } else {
            $("#listaPatagonia1").hide(e);
            $("#listaPatagonia2").hide(e);
            $("#listaPatagonia3").hide(e);
            $("#listaPatagonia4").hide(e);
            $("#listaPatagonia5").hide(e);
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

            $("#DonasMexicanas").show(e);


            $("#tostadas").show(e);
            $("#platoDeFrutas").show(e);
            contador++;
        } else {

            $("#Marquise").hide(e);
            $("#Chocolatosa").hide(e);

            $("#DonasMexicanas").hide(e);


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
            $("#Churros").show(e);
            $("#Medialunas").show(e);
            $("#HuevosRancheros").show(e);
            $("#HuevosDivorciados").show(e);
            $("#Chilaquiles1").show(e);
            $("#desayunoVoladorDelDia").show(e);
            $("#Moyotes").show(e);
            $("#tostadaFranchuta").show(e);
            $("#tortasDeJamon ").show(e);
            $("#tortasDeJamonP ").show(e);
            $("#tortasDeJamonPQ ").show(e);
            $("#tortasDeJamonB ").show(e);
            $("#tortasDeJamonV ").show(e);

            contador++;
        } else {
            $("#Churros").hide(e);
            $("#Medialunas").hide(e);
            $("#HuevosRancheros").hide(e);
            $("#HuevosDivorciados").hide(e);
            $("#Chilaquiles1").hide(e);
            $("#desayunoVoladorDelDia").hide(e);
            $("#Moyotes").hide(e);
            $("#tostadaFranchuta").hide(e);
            $("#tortasDeJamon ").hide(e);
            $("#tortasDeJamonP ").hide(e);
            $("#tortasDeJamonPQ ").hide(e);
            $("#tortasDeJamonB ").hide(e);
            $("#tortasDeJamonV ").hide(e);
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
            $("#listaMojito2").show(e);
            $("#listaMojito3").show(e);
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
            $("#listaMojito2").hide(e);
            $("#listaMojito3").hide(e);
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
            $("#listaSanHuberto8").show(e);

            contador++;
        } else {

            $("#listaSanHuberto1").hide(e);
            $("#listaSanHuberto2").hide(e);
            $("#listaSanHuberto3").hide(e);
            $("#listaSanHuberto4").hide(e);
            $("#listaSanHuberto5").hide(e);
            $("#listaSanHuberto6").hide(e);
            $("#listaSanHuberto7").hide(e);
            $("#listaSanHuberto8").hide(e);

            contador = 0;
        }
    });
});

$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonMalma").click(function (e) {

        if (contador == 0) {

            $("#listaMalma1").show(e);
            $("#listaMalma2").show(e);
            $("#listaMalma3").show(e);
            $("#listaMalma4").show(e);
            $("#listaMalma5").show(e);
            $("#listaMalma6").show(e);
            $("#listaMalma7").show(e);
            $("#listaMalma8").show(e);
            $("#listaMalma9").show(e);
            $("#listaMalma10").show(e);

            contador++;
        } else {

            $("#listaMalma1").hide(e);
            $("#listaMalma2").hide(e);
            $("#listaMalma3").hide(e);
            $("#listaMalma4").hide(e);
            $("#listaMalma5").hide(e);
            $("#listaMalma6").hide(e);
            $("#listaMalma7").hide(e);
            $("#listaMalma8").hide(e);
            $("#listaMalma9").hide(e);
            $("#listaMalma10").hide(e);

            contador = 0;
        }
    });
});

//READY PLATOS ESPECIALES
$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonPlatos").click(function (e) {

        if (contador == 0) {

            $("#listaSueco").show(e);
            $("#listaPollo").show(e);

            contador++;
        } else {

            $("#listaSueco").hide(e);
            $("#listaPollo").hide(e);

            contador = 0;
        }
    });
});

// READY PIZZAS
$(document).ready(function (e) {
    var contador = 0;
    $("#contenedorBotonPizzas").click(function (e) {

        if (contador == 0) {

            $("#pizzaMargarita").show(e);
            $("#pizzaMexicana").show(e);
            $("#pizzaTocino").show(e);

            contador++;
        } else {

            $("#pizzaMargarita").hide(e);
            $("#pizzaMexicana").hide(e);
            $("#pizzaTocino").hide(e);

            contador = 0;
        }
    });
})