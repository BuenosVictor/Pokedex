const BotaoAlterarTema = document.getElementById("botao_alterar_tema");

const body = document.querySelector("body")

const imagemBotaoAlterarTema = document.getElementById("Sol")

BotaoAlterarTema.addEventListener("click", () => {

    body.classList.toggle("modo-escuro")

    const ModoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    if (ModoEscuroEstaAtivo) {
        imagemBotaoAlterarTema.setAttribute("src", "./src/imagens/moon.png")
    } else {
        imagemBotaoAlterarTema.setAttribute("src", "./src/imagens/sun.png")
    }
});

