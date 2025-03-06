function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')){ 
        const confirmacao = confirmarDevolucao();
        if (confirmacao) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
        }
        } else { 
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        }
        
}

function confirmarDevolucao() {
    const resposta = prompt('Confirme o devolvimento do jogo com SIM ou NÃo para cancelar:').toLowerCase();

    if (resposta === 'sim') {
        alert ('Jogo devolvido!');
        return true;
    } else if (resposta === 'não' || resposta === 'nao') {
        alert ('Devolução cancelada!');
        return false;
    } else {
        alert ('Resposta inválida! Digite "SIM" ou "NÃO".'); 
        return null;
    }
}