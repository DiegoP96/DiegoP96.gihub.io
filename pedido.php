<!DOCTYPE html>
<html lang="es">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./img/Logo Mexicano.png">
    <link rel="stylesheet" href="css/pedido_estilo.css" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
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

<header>

    <div class="contenedorImagen">

        <a href="./menu_Entrada_flex.html" class="botonIrMenuPrincipal"> <i class="fas fa-arrow-left"></i></a>


        <p class="section-header">Pedido</p>

    </div>

</header>


    <form action="script_pedido.php" method="POST">
        <section class="container content-section">

            <table class="tablaPedidos">
                <tr class="headerCarrito">
                    <th class="platoTitulo">Plato</th>
                    <th class="valorTitulo">Valor</th>
                    <th class="cantidadTitulo">Cantidad</th>
                    <th class="opcionesTitulo">Opciones</th>

                </tr>

              
            </table>
                <!-- <?php
                if (isset($_GET['error'])) {
                    if ($_GET['error'] == 'noPlatos' || $_GET['error'] == 'ninguno') {
                        echo '<div class="cart-item cart-column"><span class="cart-item-title" name="plato">NO HAY PLATOS</span></div>';
                    }
                }
                ?> -->

                <div class="contedorMesaPrecio">  
         
            <div class="cart-table cart-quantity">
                
                <input type="text" class="number-table" name="mesa" placeholder="Mesa" i>
                <?php
                if (isset($_GET['error'])) {
                    if ($_GET['error'] == 'noMesa' || $_GET['error'] == 'ninguno') {
                        echo '<p class = "error-mesa" >Ingrese Numero de Mesa</p>';
                    }
                }
                ?>
            </div>

           <button class="botonBorrarPedidos" type="button"> <i class="fas fa-trash"></i></button>

            <div class="cart-total">
                <strong class="cart-total-title">Total</strong>
                
                <span class="cart-total-price" name="total">$0</span>
                <input type="number" class="inputTotal" hidden name="total">
            </div>

            </div>

            <div> 

            <input class="btn btn-primary btn-purchase" type="submit" value="Pedir">

            </div>

        </section>

        <footer>

        <div class="franjaFooter"> <br></div>

        <div class="contenedorGrid">

				<div class="elementosFooter">
					<img
						src="img/logo mexicano footer.jpg"
						alt="logoMexicano"
						width="330"
						height="115"
						class="logoMexicanoFooter"
					/>

					<div class="contenedorRedes">
						<a
							href="https://www.instagram.com/mexicanocafebariloche/"
							class="fab fa-instagram"
							id="iconoInstagram"
							target="blank"
						>
						</a>
						<a
							href="https://www.facebook.com/elmexicanobariloche"
							target="blank"
							class="fab fa-facebook-f"
							id="iconoFacebook"
						>
						</a>
						<a
							href="https://api.whatsapp.com/send?phone=5492944958019&text=&source=&data=&app_absent="
							target="blank"
							class="fab fa-whatsapp"
							id="iconoWhatsApp"
						>
						</a>
					</div> 
				</div>
			</div>
            
        </footer>
    </form>

</body>

</html>