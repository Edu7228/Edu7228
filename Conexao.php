
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "BncProgWeb";

// Criar conexão com mysqli
$conn = new mysqli($servername, $username, $password, $dbname);


// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>
