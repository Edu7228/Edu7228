class Console {
    // Declarando as propriedades privadas.
    #CodConsole;
    #Nome;

    // Definindo como um novo objeto da classe e inicializando.
    constructor(CodConsole = 0, Nome = "") { 
        this.#CodConsole = CodConsole;
        this.#Nome = Nome;
    }

    // Métodos Getter.
    get CodConsole() {
        return this.#CodConsole;
    }
    
    get Nome() { 
        return this.#Nome;
    }

    // Métodos Setter.
    set CodConsole(value) {
        this.#CodConsole = value;
    }
    
    set Nome(value) {
        this.#Nome = value;
    }
}

// Função para cadastrar console
async function CadastrarConsole() {
    // Obter valores e tratar entrada
    const CodConsole = parseInt(document.getElementById("TxtCodConsole").value) || 0;
    const Nome = document.getElementById("TxtConsole").value.trim();

    // Criar os dados para envio
    const dados = new URLSearchParams({ CodConsole, Nome });

    // Enviar os dados ao backend via Fetch API
    const resposta = await fetch("Console.php", {
        method: "POST",
        body: dados,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    // Verificar resposta e tratar o retorno
    const resultado = await resposta.json();
    alert(resultado.status === "success" ? resultado.message : "Erro: " + resultado.message);

    // Limpar os campos após sucesso
    if (resultado.status === "success") {
        document.getElementById("TxtCodConsole").value = "";
        document.getElementById("TxtConsole").value = "";
    }
}

//Associando o button certo para o metodo correto.
document.getElementById("BtnCadastrar").onclick = CadastrarConsole;