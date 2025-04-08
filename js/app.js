function comprar() {
    // Recupera o valor selecionado no campo 'tipo-ingresso'
    let tipo = document.getElementById('tipo-ingresso');

    // Recupera o valor preenchido no campo 'qtd'
    let qtd = parseInt(document.getElementById('qtd').value);

    // Verifica se a quantidade é um número positivo
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida e positiva.');
        return; // Impede a execução do resto da função se a quantidade for inválida
    }

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior (qtd);
    } else {
        comprarInferior (qtd);
    }
}

function comprarPista (qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtd > qtdPista) {
        alert('Não foi possível realizar a compra, quantidade indisponível!');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior (qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtd > qtdSuperior) {
        alert('Não foi possível realizar a compra, quantidade indisponível!');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior (qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > qtdInferior) {
        alert('Não foi possível realizar a compra, quantidade indisponível!');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}