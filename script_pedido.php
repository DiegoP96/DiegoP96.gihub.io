<?php

$platos = $_POST['plato'];
$precios = $_POST['precio'];
$cantidades = $_POST['cantidad'];
$mesa = $_POST['mesa'];

if (empty($_POST['plato']) && empty($_POST['mesa'])) {
    header("Location: http://mexicanocafe.com/pedido.php?error=ninguno");
    exit();
} else {
    if (empty($_POST['mesa'])) {
        header("Location: http://mexicanocafe.com//pedido.php?error=noMesa");
        exit();
    }
    if (empty($_POST['plato'])) {
        header("Location: http://mexicanocafe.com/pedido.php?error=noPlatos");
        exit();
    }
}
$host = "localhost";
$dbUsername = "joaking";
$dbPassword = "toa3s[dBQpxg";
$dbname = "restaurant2020";
//create connection
$conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

for ($i = 0; $i < sizeof($platos); $i++) {

    if (mysqli_connect_error()) {
        die('Connect Error(' . mysqli_connect_errno() . ')' . mysqli_connect_error());
    } else {
        $INSERT = "INSERT Into pedidos (plato, cantidad, precio) values(?, ?, ?)";
        $stmt = $conn->prepare($INSERT);
        $stmt->bind_param("sii", $platos[$i], $cantidades[$i], $precios[$i]);
        $stmt->execute();
        echo "New record inserted sucessfully";
    }
}
$stmt->close();
$conn->close();

header("Location: http://mexicanocafe.com/menu_Entrada.html");
exit();

?>





<script>
    var ca = document.cookie.split(';')
    for (i = 0; i < ca.length; i++) {
        document.cookie = "plato" + i + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure;"
    }
</script>