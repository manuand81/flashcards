document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', () => {
        const question = card.querySelector('.question');
        const answer = card.querySelector('.answer');
        
        // Alternar entre pergunta e resposta
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            question.style.display = 'none';
        } else {
            answer.style.display = 'none';
            question.style.display = 'block';
        }
    });
});
