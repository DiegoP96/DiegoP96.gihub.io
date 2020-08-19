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
            console.log(allPlates[i])
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

function ready() {

    var addToCartButtons = document.getElementsByClassName('botonAgregarAlCarrito')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

}

function getPosition() {
    return document.cookie.split(';').length
}

var i = 0

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('Plato')[0].innerText
    var price = shopItem.getElementsByClassName('Precio')[0].innerText
    if (checkPlatesDuplicate(title)) {
        return
    } else {
        document.cookie = "plato" + i + "=" + title + price
        i++
        console.log(document.cookie)
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
        console.log(title)
        if (string == title) {
            alert("Plato Ya Añadido. Revise El Pedido!")
            return true
        }
    }

}