const form = document.getElementById('form')
const nome = []
const numero = []

let linhas = '';
addEventListener('submit', function (e) {

    e.preventDefault()

    adicionaLinhas();
    atualizaTabela();
});

function adicionaLinhas() {
    const inputNome = document.getElementById('inputNome')
    const inputNumero = document.getElementById('inputNumero')

    if (nome.includes(inputNome.value)) {
        alert(`O contato ${inputNome.value} já existe.`)
    } else {
        nome.push(inputNome.value);
        numero.push(parseFloat(inputNumero.value));

        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputNumero.value}</td>`
        linha += '</tr>'

        linhas += linha
    }

    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}