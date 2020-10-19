if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {

    ready()
}

function getCookiePlates() {

    var name
    var allPlates = [1]
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        name = 'plato' + get3D(i) + "="
        console.log(name)
        while (c.charAt(0) == ' ') {
            c = c.substring(1);

        }
        if (c.indexOf(name) == 0) {
            allPlates[i] = c.substring(name.length, c.length);
        }
    }
    if (allPlates[0] == 1) {
        return "";
    } else {
        return allPlates
    }

}

function get3D(num) {

    switch (num.toString().length) {
        case 3:
            return num
        case 2:
            return "0" + num
        case 1:
            return "00" + num
        default:
            break;
    }

}

function getTitle(string) {
    var i = string.indexOf('$')
    return string.substring(0, i)
}

function getPrice(string) {
    var i = string.indexOf('$')
    return (string.substring(i))
}

function getContador() {
    var cookies = document.cookie.split(';')
    for (i = 0; i < cookies.length; i++) {
        var c = cookies[i]
        name = "contador="
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return Number(c.substring(name.length, c.length))
        }
    }
    return -1
}

function ready() {

    var addToCartButtons = document.getElementsByClassName('botonAgregarAlCarrito')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtonsDoble = document.getElementsByClassName('botonAgregarAlCarritoDoble')
    for (var i = 0; i < addToCartButtonsDoble.length; i++) {
        var button1 = addToCartButtonsDoble[i]
        button1.addEventListener('click', addToCartClickedDoble)
    }

    var addToCartButtonsSimple = document.getElementsByClassName('botonAgregarAlCarritoSimple')
    for (var i = 0; i < addToCartButtonsDoble.length; i++) {
        var button2 = addToCartButtonsSimple[i]
        button2.addEventListener('click', addToCartClickedSimple)
    }

    document.getElementsByClassName('boton_carrito')[0].addEventListener('click', guardarContador)

}
if (getContador() == -1) {
    document.cookie = "contador= 0" + ";SameSite=Lax"
}
var i = getContador()


function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('Plato')[0].innerText
    var price = shopItem.getElementsByClassName('Precio')[0].innerText
    if (checkPlatesDuplicate(title)) {
        return
    }
    document.cookie = "plato" + get3D(i) + "=" + title + price + ";SameSite=Lax"
    i++
    document.cookie = "contador=" + i + ";SameSite=Lax"
}

function addToCartClickedDoble(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('Plato')[0].innerText
    var price = shopItem.getElementsByClassName('Precio2')[0].innerText
    if (checkPlatesDuplicate(title + " Doble")) {
        return
    }
    document.cookie = "plato" + get3D(i) + "=" + title + " Doble" + price + ";SameSite=Lax"
    i++
    document.cookie = "contador=" + i + ";SameSite=Lax"
}

function addToCartClickedSimple(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('Plato')[0].innerText
    var price = shopItem.getElementsByClassName('Precio1')[0].innerText
    if (checkPlatesDuplicate(title)) {
        return
    }
    document.cookie = "plato" + get3D(i) + "=" + title + price + ";SameSite=Lax"
    i++
    document.cookie = "contador=" + i + ";SameSite=Lax"
}

function checkPlatesDuplicate(string) {
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        name = 'plato' + get3D(i) + "="
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        title = getTitle(c.substring(name.length, c.length))
        if (string == title) {
            alert("Plato Ya Añadido. Revise El Pedido!")
            return true
        }
    }

}

function guardarContador(event) {
    document.cookie = "contador=" + i + ";SameSite=Lax"
}
