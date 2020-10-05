<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./img/mexican.png">
    <link rel="stylesheet" href="css/pedido_estilo.css" />
    <script src="js/pedido_carrito.js" async></script>
    <script src="https://kit.fontawesome.com/233d4e0a24.js" crossorigin="anonymous"></script>
    <title> Pedido </title>
    <style>
        .error-mesa {
            color: red;
            font-size: 1em;
        }
    </style>

</head>

<body>
    <form action="script_pedido.php" method="POST">
        <section class="container content-section">

            <div class="cart-row">
                <span class="cart-item cart-header cart-column">Plato</span>
                <span class="cart-price1 cart-header cart-column">Valor</span>
                <span class="cart-quantity cart-header cart-column">Cantidad</span>
                <span class="cart-options cart-header cart-column">Opciones</span>
            </div>
            <div class="cart-items">
                <?php
                if (isset($_GET['error'])) {
                    if ($_GET['error'] == 'noPlatos' || $_GET['error'] == 'ninguno') {
                        echo '<div class="cart-item cart-column"><span class="cart-item-title" name="plato">NO HAY PLATOS</span></div>';
                    }
                }
                ?>
            </div>
            <div class="cart-table cart-quantity">
                <br>
                <br>
                <br>
                <input type="text" class="number-table" name="mesa" placeholder="Mesa" i>
                <?php
                if (isset($_GET['error'])) {
                    if ($_GET['error'] == 'noMesa' || $_GET['error'] == 'ninguno') {
                        echo '<p class = "error-mesa" >Ingrese Numero de Mesa</p>';
                    }
                }
                ?>
            </div>
            <div class="cart-total">
                <strong class="cart-total-title">Total</strong>
                <span class="cart-total-price">$0</span>
            </div>



        </section>

        <footer class="footerPedido">
            <input class="btn btn-primary btn-purchase" type="submit" value="Pedir">
        </footer>
    </form>

    <header>

        <div class="contenedorImagen">

            <a href="./menu_Entrada.html" class="botonIrMenuPrincipal"> <i class="fas fa-arrow-left"></i></a>


            <p class="section-header">Pedido</p>

        </div>

    </header>


</body>

</html>