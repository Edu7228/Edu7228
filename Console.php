<?php
require('Conexao.php'); // Incluir conexão com o banco.

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    header("Content-Type: application/json");

    $CodConsole = $_POST['CodConsole'] ?? null;
    $Nome = $_POST['Nome'] ?? null;

    // Preparando a consulta SQL para executar a Stored Procedure.
    $query = $conn->prepare("CALL SpCadastrarConsole(?, ?)");

    if (!$query) {
        echo json_encode(["status" => "error", "message" => "Erro ao preparar a consulta: " . $conn->error]);
        exit();
    }

    // Vincular os parâmetros
    $query->bind_param("is", $CodConsole, $Nome);

    // Executar a query e verificar o resultado
    if ($query->execute()) {
        echo json_encode(["status" => "success", "message" => "Cadastro do console efetuado com sucesso!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Erro ao cadastrar: " . $query->error]);
    }

    $query->close();
    $conn->close(); // Fechar conexão com o banco de dados.
}
exit(); // Encerrar script.
?>
