// Revisa el estado de la pagina para ver si cargo, sino esta cargada espera a que termine y luego ejecuta ready()
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}



//Funcion de preparacion de eventos y datos
function ready() {
    var botonesQuitar = document.getElementsByClassName("botonColumna");
    for (var i = 0; i < botonesQuitar.length; i++) {
        var button = botonesQuitar[i];
        button.addEventListener("click", removeCartItem);
    }

    var cantidades = document.getElementsByClassName("inputCantidad");
    for (var i = 0; i < cantidades.length; i++) {
        var input = cantidades[i];
        input.addEventListener("change", quantityChanged);
    }

    checkPlates();

    document.getElementsByClassName('botonBorrarPedidos')[0].addEventListener('click', resetCookies)
}


//Verifica que haya cookies con platos y, si las hay, agraga los platos al carrito
function checkPlates() {
    var plates = getCookiePlates()
    if (plates == "") {
        return
    } else {
        for (var i = 0; i < plates.length; i++) {
            var title = getTitle(plates[i])
            var price = getPrice(plates[i])
            // console.log(title + price)
            addItemToCart(title, price)
        }
    }
}

//Agrega al carrito el codigo html de una columna con los valores title(plato) y price(valor)
function addItemToCart(title, price) {
    var cartRow = document.createElement('tr')
    cartRow.classList.add('columnaCarrito')
    var cartItems = document.getElementsByClassName('tablaPedidos')[0]
    var priceConv = convertPrice(price)

    var cartRowContents = `
    <td class="platoColumna">
    <span class="textoPlato">${title}</span>
        <input type="text" hidden value="${title}" name="plato[]">
    </td>
    <td class="valorColumna">
    <span class="textoValor">${price} </span>
        <input type="number" hidden value=${priceConv} name="precio[]">
    </td>
    <td class="cantidadColumna">
        <input class="inputCantidad" type="number" value="1" name="cantidad[]">
    </td>
    <td class="botonColumna">
        <button class="inputQuitar" type="button">QUITAR</button>
    </td>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('inputQuitar')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('inputCantidad')[0].addEventListener('change', quantityChanged)
    updateCartTotal()
}


//Obtiene el array de todos los platos a partir de las cookies, como Nombre$Precio
function getCookiePlates() {
    var name;
    var allPlates = [1];
    var arrayCookie = document.cookie.split(";");
    for (var i = 0; i < arrayCookie.length; i++) {
        var cookie = arrayCookie[i];
        name = "plato";
        while (cookie.charAt(0) == " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            allPlates[i] = cookie.substring(name.length + 4, cookie.length);
        }
    }
    if (allPlates[0] == 1) {
        return "";
    } else {
        return allPlates;
    }
}


//Parcea el nombre del plato
function getTitle(string) {
    return string.substring(0, string.indexOf("$"));
}
//Parcea el precio del plato
function getPrice(string) {
    return string.substring(string.indexOf("$"));
}

//Quita el elemento de el Carro y elimina la cookie del mismo nombre
function removeCartItem(event) {
    var buttonClicked = event.target;

    var plato = buttonClicked.parentElement.parentElement;

    deleteCookie(plato.getElementsByClassName("textoPlato")[0].innerText);

    plato.remove();

    updateCartTotal();
}

//Obtiene el valor del contador de platos de las cookies
function getContador() {
    var cookies = document.cookie.split(';')
    for (i = 0; i < cookies.length; i++) {
        var cookie = cookies[i]
        name = "contador="
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return Number(cookie.substring(name.length, cookie.length))
        }
    }
    return -1
}

//Setea la fecha de expiracion de la cookie, cuyo nombre coincide con string, a 1/1/1970 para que desaparezca
function deleteCookie(string) {
    var arrayCookie = getCookiePlates()
    var tam = getContador()
    var cookie

    for (var i = 0; i < tam; i++) {
        cookie = arrayCookie[i];

        if (string == getTitle(cookie)) {
            document.cookie = document.cookie.split(';')[i] + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure;"
            return 1
        }
    }
    return 0
}

//Actualiza el valor total del carrito cuando se cambia la cantidad
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('tablaPedidos')[0]
    var cartRows = cartItemContainer.getElementsByClassName('columnaCarrito')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('textoValor')[0]
        var quantityElement = cartRow.getElementsByClassName('inputCantidad')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    document.getElementsByClassName('inputTotal')[0].value = total  
}

//Convierte el string de price a un numero
function convertPrice(price) {
    return Number(price.substring(price.indexOf("$") + 1))
}

//Evento de cambio de cantidad del plato. Cambia el valor total y chequea que la cantidad sea >0
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

//Convierte un numero a 3 digitos
function get3D(num) {
	switch (num.toString().length) {
		case 3:
			return num;
		case 2:
			return "0" + num;
		case 1:
			return "00" + num;
		default:
			break;
	}
}

//Borra todas las cookies
function resetCookies() {
    var tam = getContador()
    for (i = 0; i < tam; i++) {
        document.cookie = "plato" + get3D(i) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure;"
    }
}