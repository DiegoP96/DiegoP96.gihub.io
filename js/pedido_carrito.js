if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function getCookiePlates() {
    var name
    var allPlates = [1]
    var ca = document.cookie.split(';');
    // console.log("Llego")
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        name = 'plato'
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            // console.log(c.substring((name.length + 2), c.length))
            allPlates[i] = c.substring((name.length + 2), c.length);
        }
    }
    if (allPlates[0] == 1) {
        // console.log("fallo")
        return "";
    } else {
        return allPlates
    }
}

// function getContador() {
//     var cookies = document.cookie.split(';')
//     for (i = 0; i < cookies.length; i++) {
//         var c = cookies[i]
//         name = "contador="
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);

//         }
//         if (c.indexOf(name) == 0) {
//             return Number(c.substring(name.length, c.length))
//         }
//     }
// }
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

function getTitle(string) {
    var i = string.indexOf('$')
    return string.substring(0, i)
}

function getPrice(string) {
    var i = string.indexOf('$')
    return (string.substring(i))
}

function checkPlates() {
    var plates = getCookiePlates()
    if (plates == "") {
        return
    } else {
        for (var i = 0; i < plates.length; i++) {
            var title = getTitle(plates[i])
            var price = getPrice(plates[i])
            console.log(title + price)
            addItemToCart(title, price)
        }
    }
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    checkPlates()
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    numeroMesa = document.getElementsByClassName('number-table')[0].value
    if (numeroMesa == '') {
        alert('INGRESE NUMERO DE MESA')
        return
    } else {
        console.log(numeroMesa);
        var cartItems = document.getElementsByClassName('cart-items')[0]
        var totalPurchased = document.getElementsByClassName('cart-total-price')[0].innerText
        alert(`Gracias por su pedido ${totalPurchased}`)
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild)
        }
        resetCookies()
        history.go(-1);

    }

}

function removeCartItem(event) {
    var buttonClicked = event.target
    var plato = buttonClicked.parentElement.parentElement
    deleteCookie(plato.getElementsByClassName('cart-item-title')[0].innerText)
    plato.remove()
    updateCartTotal()
    console.log(document.cookie)
}

function resetCookies() {
    var ca = document.cookie.split(';')
    for (i = 0; i < ca.length; i++) {
        document.cookie = "plato" + i + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure;"
    }
}

function deleteCookie(string) {
    var ca = document.cookie.split(';');
    var j = (getContador() - ca.length) + 1
    var tam = getContador()
    for (var i = 0; i < tam; i++) {
        var c = ca[i];
        name = 'plato' + i + "="
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        title = getTitle(c.substring(name.length, c.length))
        if (string == title) {
            alert("Se quito " + string + " del pedido")
            document.cookie = "plato" + i + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure;"
        }
        if (c.indexOf(name) == 0) {
            j++
        }
    }
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}


function addItemToCart(title, price) {


    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">QUITAR</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
    updateCartTotal()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}