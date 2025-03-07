let nome = document.getElementById('fnome')
let idade = document.getElementById('fidade')
let nascimento = document.getElementById('fnasc')
let sexo = document.getElementsByName('fsexo')
let peso = document.getElementById('fpeso')
let pessoas = []

function cadastrar() {
    pessoas.push(nome, Number(idade.value), nascimento, sexo, Number(peso.value))
    let item = document.createElement('option')
    item.text = `${nome} cadastrado com sucesso.`
    lista.appendChild(item)
}