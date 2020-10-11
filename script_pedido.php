<?php

$platos = $_POST['plato'];
$precios = $_POST['precio'];
$cantidades = $_POST['cantidad'];
$mesa = $_POST['mesa'];
$total = $_POST['total'];

if (empty($_POST['plato']) && empty($_POST['mesa'])) {
    // header("Location: http://mexicanocafe.com/pedido.php?error=ninguno");
    header("Location: http://localhost/Mexico/pedido.php?error=ninguno");
    exit();
} else {
    if (empty($_POST['mesa'])) {
        // header("Location: http://mexicanocafe.com//pedido.php?error=noMesa");
        header("Location: http://localhost/Mexico/pedido.php?error=noMesa");
        exit();
    }
    if (empty($_POST['plato'])) {
        // header("Location: http://mexicanocafe.com/pedido.php?error=noPlatos");
        header("Location: http://localhost/Mexico/pedido.php?error=noPlatos");
        exit();
    }
}
$host = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbname = "test";
//create connection
$conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
// if (mysqli_connect_error()) {
//     die('Connect Error(' . mysqli_connect_errno() . ')' . mysqli_connect_error());
// } else {
//     for ($i = 0; $i < sizeof($platos); $i++) {

//         $INSERT = "INSERT Into pedido (nombrePlato, cantidad, precio, mesa) values(?, ?, ?, ?)";
//         $stmt = $conn->prepare($INSERT);
//         $stmt->bind_param("sidi", $platos[$i], $cantidades[$i], $precios[$i], $mesa);
//         $stmt->execute();
//         //echo "New record inserted sucessfully";
//     }
// }

// $stmt->close();
// $conn->close();
echo"<header>
<script src='https://kit.fontawesome.com/233d4e0a24.js' crossorigin='anonymous'></script>
</header>";
echo"<h1 class='titulo'>Saque una captura de pantalla para  tener un registro de tu pedido</h2>";
echo"<div class='contenedorTiket'>";
for ($i = 0; $i < sizeof($platos); $i++){
    echo "<div class='lieneaTiket'>|$platos[$i] --  $cantidades[$i] -- $precios[$i]</div>";
}
echo"</div>";
echo"<p class='lineaTotal'>Total:$ $total</p>";
echo"<br>";
echo"<a href='http://localhost/Mexico/index.html' ><i class='fas fa-home'></i></a>";
exit();

?>





<!-- <script>
    var arrayCookie = getCookiePlates()
    var tam = getContador()

    for (var i = 0; i < tam; i++) {
        document.cookie = document.cookie.split(';')[i] + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure;"
    }
</script> -->
<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./img/Logo Mexicano.png">
</head>
<body>
    <p>
        
    </p>
</body>
</html> -->
<script>

function resetCookies() {
    var ca = document.cookie.split(';')
    for (i = 0; i < ca.length; i++) {
        document.cookie = "plato" + get3D(i) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure;"
    }
}

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
</script>