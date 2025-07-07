// Função para alternar entre a pergunta e a resposta ao clicar no cartão
function toggleResposta(cartao) {
    const resposta = cartao.querySelector('.cartao__conteudo__resposta');
    
    // Verifica se a resposta está visível
    if (resposta.style.display === "block" || cartao.classList.contains("show")) {
        // Se estiver visível, esconda a resposta e remova a classe 'show'
        cartao.classList.remove("show");
    } else {
        // Se não estiver visível, mostre a resposta e adicione a classe 'show'
        cartao.classList.add("show");
    }
}
