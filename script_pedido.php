<?php

$platos = $_POST['plato'];
$precios = $_POST['precio'];
$cantidades = $_POST['cantidad'];
$mesa = $_POST['mesa'];

if (empty($_POST['plato']) && empty($_POST['mesa'])) {
    header("Location: http://localhost/Mexico/pedido.php?error=ninguno");
    exit();
} else {
    if (empty($_POST['mesa'])) {
        header("Location: http://localhost/Mexico/pedido.php?error=noMesa");
        exit();
    }
    if (empty($_POST['plato'])) {
        header("Location: http://localhost/Mexico/pedido.php?error=noPlatos");
        exit();
    }
}
$host = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbname = "mexicano";
//create connection
$conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

for ($i = 0; $i < sizeof($platos); $i++) {

    if (mysqli_connect_error()) {
        die('Connect Error(' . mysqli_connect_errno() . ')' . mysqli_connect_error());
    } else {
        $INSERT = "INSERT Into pedidos (descripcion, cantidad, valor, cliente) values(?, ?, ?, ?)";
        $stmt = $conn->prepare($INSERT);
        $stmt->bind_param("siii", $platos[$i], $cantidades[$i], $precios[$i], $mesa);
        $stmt->execute();
        echo "New record inserted sucessfully";
    }
}
$stmt->close();
$conn->close();

header("Location: http://localhost/Mexico/");
exit();

?>





<script>
    var ca = document.cookie.split(';')
    for (i = 0; i < ca.length; i++) {
        document.cookie = "plato" + i + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure;"
    }
</script>