if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

// function alertCookie() {
//     console.log(document.cookie);
// }

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
    var i = 0
    while (isNaN(string.charAt(i)) && i < string.length) {
        i++
    }
    return string.substring(0, i)
}

function getPrice(string) {
    var i = 0
    while (isNaN(string.charAt(i)) && i < string.length) {
        i++
    }
    return ("$" + string.substring(i))
}

// function checkPlates() {
//     var plates = getCookiePlates()
//     if (plates == "") {
//         return
//     } else {
//         for (var i = 0; i < plates.length; i++) {
//             var title = getTitle(plates[i])
//             var price = getPrice(plates[i])
//            addItemToCart(title, price)
//         }
//     }

// }

// function checkCookie() {
//     var user = getCookie("username");
//     if (user != "") {
//         alert("Welcome again " + user);
//     } else {
//         user = prompt("Please enter your name:", "");
//         if (user != "" && user != null) {
//             setCookie("username", user, 365);
//         }
//     }
// }

function ready() {
    // var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    // for (var i = 0; i < removeCartItemButtons.length; i++) {
    //     var button = removeCartItemButtons[i]
    //     button.addEventListener('click', removeCartItem)
    // }

    // var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    // for (var i = 0; i < quantityInputs.length; i++) {
    //     var input = quantityInputs[i]
    //     input.addEventListener('change', quantityChanged)
    // }

    var addToCartButtons = document.getElementsByClassName('botonAgregarAlCarrito')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

}

// function purchaseClicked() {
//     numeroMesa = document.getElementsByClassName('number-table')[0].value
//     if (numeroMesa == '') {
//         alert('INGRESE NUMERO DE MESA')
//         return
//     } else {
//         console.log(numeroMesa);
//         var cartItems = document.getElementsByClassName('cart-items')[0]
//         var totalPurchased = document.getElementsByClassName('cart-total-price')[0].innerText
//         alert(`Gracias por su pedido ${totalPurchased}`)
//         while (cartItems.hasChildNodes()) {
//             cartItems.removeChild(cartItems.firstChild)
//         }
//         history.go(-1);

//     }

// }

// function removeCartItem(event) {
//     var buttonClicked = event.target
//     buttonClicked.parentElement.parentElement.remove()
//     updateCartTotal()
// }

// function quantityChanged(event) {
//     var input = event.target
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1
//     }
//     updateCartTotal()
// }

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('Plato')[0].innerText
    var price = shopItem.getElementsByClassName('Precio')[0].innerText
    document.cookie = "plato"+ document.cookie.split(';').length + "=" + title + price
    console.log(document.cookie);
}


// function addItemToCart(title, price) {


//     var cartRow = document.createElement('div')
//     cartRow.classList.add('cart-row')
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//     var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
//     for (var i = 0; i < cartItemNames.length; i++) {
//         if (cartItemNames[i].innerText == title) {
//             alert('This item is already added to the cart')
//             cartItems.getElementsByClassName('cart-quantity-input').value++
//             return
//         }
//     }
//     var cartRowContents = `
//         <div class="cart-item cart-column">
//             <span class="cart-item-title">${title}</span>
//         </div>
//         <span class="cart-price cart-column">${price}</span>
//         <div class="cart-quantity cart-column">
//             <input class="cart-quantity-input" type="number" value="1">
//             <button class="btn btn-danger" type="button">REMOVE</button>
//         </div>`
//     cartRow.innerHTML = cartRowContents
//     cartItems.append(cartRow)
//     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
//     cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
//     updateCartTotal()
// }

// function updateCartTotal() {
//     var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//     var total = 0
//     for (var i = 0; i < cartRows.length; i++) {
//         var cartRow = cartRows[i]
//         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//         var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//         var price = parseFloat(priceElement.innerText.replace('$', ''))
//         var quantity = quantityElement.value
//         total = total + (price * quantity)
//     }
//     total = Math.round(total * 100) / 100
//     document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
// }