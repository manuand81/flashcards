// Função para alternar entre a pergunta e a resposta ao clicar no cartão
function toggleResposta(cartao) {
    const resposta = cartao.querySelector('.cartao__conteudo__resposta');
    
    // Se a resposta estiver visível, esconda, caso contrário, mostre
    if (resposta.style.display === "block") {
        resposta.style.display = "none";
    } else {
        resposta.style.display = "block";
    }
}
