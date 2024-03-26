const form = document.getElementById('form')
const nome = []
const numeros = []

let linhas = '';
addEventListener('submit', function (e) {

    e.preventDefault()

    adicionaLinhas();
    atualizaTabela();
});

function adicionaLinhas() {
    const inputNome = document.getElementById('inputNome')
    const inputNumero = document.getElementById('inputNumero')

    if (numeros.includes(inputNumero.value)) {
        alert('O Número cadastrado já existe.')
    } else {
        nome.push(inputNome.value);
        numeros.push(inputNumero.value);

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