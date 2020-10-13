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




