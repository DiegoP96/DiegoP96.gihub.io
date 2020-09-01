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
        name = 'plato' + i + "="

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

    document.getElementsByClassName('boton_carrito')[0].addEventListener('click', pedidoClicked)


}
if (getContador() == -1) {
    document.cookie = "contador= 0"
}
var i = getContador()


function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('Plato')[0].innerText
    var price = shopItem.getElementsByClassName('Precio')[0].innerText
    if (checkPlatesDuplicate(title)) {
        return
    } else {
        document.cookie = "plato" + i + "=" + title + price
        i++
    }

}

function checkPlatesDuplicate(string) {
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        name = 'plato' + i + "="
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

function pedidoClicked() {
    document.cookie = "contador=" + i
}