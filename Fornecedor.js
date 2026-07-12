
//==========================
// Classe Fornecedor.
// ========================

// Begin
    class Fornecedor {

        // Variaveis.
        #CodFornecedor;
        #RazaoSocial;
        #PaisOrigem;

        // Costrutor.
        constructor (
            Codigo = "",
            Nome = "",
            Pais = ""
        )   {
                // Inicializações dos atributos.
                this.#CodFornecedor = Codigo;
                this.#RazaoSocial = Nome;
                this.#PaisOrigem = Pais;
            }

    // =======================================
    // Criar métodos da minha classe fornecedor.
    // =======================================
    // Begin.
        InicializarComponente() {
            FrmFornecedor.disabled = true;
            BtnCadastrar.disabled = true;
            BtnJanelaEndereco.disabled = true;
            document.getElementById("TxtRazaoSocial").value = "";
            document.getElementById("TxtPaisOrigem").value = "";
        }

        NovoCadastro() {
            FrmFornecedor.disabled = false;
            BtnCadastrar.disabled = false;
            BtnJanelaEndereco.disabled = false;
            document.getElementById("TxtRazaoSocial").value = "";
            document.getElementById("TxtPaisOrigem").value = "";
            TxtRazaoSocial.focus();
        }

        // =========================================
        // Método para cadastrar o fornecedor.
        // =========================================
        CadastrarFornecedor()
        {
            // Atualiza os atributos da classe com os valores da tela.
            this.#CodFornecedor = LblCodFornecedor.textContent;
            this.#RazaoSocial = TxtRazaoSocial.value;
            this.#PaisOrigem = TxtPaisOrigem.value;

            // Faz a requisição para o PHP.
            fetch(
                `CadastrarFornecedor.php?` +
                `CodFornecedor=${encodeURIComponent(this.#CodFornecedor)}` +
                `&RazaoSocial=${encodeURIComponent(this.#RazaoSocial)}` +
                `&PaisOrigem=${encodeURIComponent(this.#PaisOrigem)}`
            )
            .then(resposta => resposta.text())
            .then(resultado =>
            {
                resultado = resultado.trim();

                if(resultado == "Cadastrou")
                {
                    alert("Fornecedor cadastrado com sucesso!");
                }
                else
                {
                    alert(resultado);
                    document.getElementById("TxtRazaoSocial").value = resultado;
                }
            })
            .catch(erro =>
            {
                
                console.log(erro);
                alert("Erro ao conectar com o servidor.");
            });
        }
        
        PreencherListaFornecedor() {}
        SelecionarFornecedor() {}
        ExcluirFornecedor() {}
        AtualizarFornecedor() {}

        AbrirEndereco() {
            FrmEndereco.disabled = false;    
            Swal.fire({
                title: "Formulário Fornecedor",
                text: "Esse é minha caixa de mensagem funcionando em javascript!!!",
                icon: "success"
            });
        }
    // End.

} // Fim da minha classe Fornecedor.

// =====================================================================
// Procurando na pagina html e guardando as refêrencias dos componentes. 
// =====================================================================
// Begin.
    const FrmFornecedor = document.getElementById("FrmFornecedor");
    const FrmEndereco = document.getElementById("FrmEndereco");
    const LblCodFornecedor = document.getElementById("LblCodFornecedor");
    const TxtRazaoSocial = document.getElementById("TxtRazaoSocial");
    const TxtPaisOrigem = document.getElementById("TxtPaisOrigem");
    const LstFornecedor = document.getElementById("LstFornecedor");
    const BtnNovoCadastro = document.getElementById("BtnNovoCadastro");
    const BtnCadastrar = document.getElementById("BtnCadastrar");
    const BtnExcluir = document.getElementById("BtnExcluir");
    const BtnAtualizar = document.getElementById("BtnAtualizar");
    const BtnJanelaEndereco = document.getElementById("BtnJanelaEndereco");
// End.

// ===============================
// Criando meu objeto Fornecedor.
// ===============================
// Begin.
    const ObjFornecedor = new Fornecedor();
// End.

// ==================================================================================================
// Quando o evento do botão for acionado na pagina HTML o javascript acionar o evento correspondente.
// ==================================================================================================
// Begin.
    BtnNovoCadastro.addEventListener("click", function () {  
        ObjFornecedor.NovoCadastro();
    });
      
    BtnCadastrar.addEventListener("click", function () {
        ObjFornecedor.CadastrarFornecedor();
     });

    BtnExcluir.addEventListener("click", function () {  });

    BtnAtualizar.addEventListener("click", function () {});

    BtnJanelaEndereco.addEventListener("click", function () {
        ObjFornecedor.AbrirEndereco ();
    });
// End.