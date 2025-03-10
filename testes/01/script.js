let nome = document.getElementById('fnome')
let idade = document.getElementById('fidade')
let nascimento = document.getElementById('fnasc')
let sexo = document.getElementsByName('fsexo')
let peso = document.getElementById('fpeso')
let lista = document.getElementById('flista') // Adicionando referência à lista
let pessoas = []
let res = document.getElementById('res')

function cadastrar() {
    let sexoSelecionado = ''
    for (let s of sexo) {
        if (s.checked) {
            sexoSelecionado = s.value
            break
        }
    }

    let pessoa = {
        nome: nome.value,
        idade: Number(idade.value),
        nascimento: nascimento.value,
        sexo: sexoSelecionado,
        peso: Number(peso.value)
    }

    pessoas.push(pessoa)

    let item = document.createElement('option')
    item.text = `${pessoa.nome} cadastrado com sucesso.`
    lista.appendChild(item)

    // Limpar campos após o cadastro
    nome.value = ''
    idade.value = ''
    nascimento.value = ''
    peso.value = ''
    nome.focus() // Mantém o foco no primeiro campo para novo cadastro
}

function finalizar() {
    if (pessoas.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let tot = pessoas.length

        let maiorpeso = pessoas[0].peso
        let menorpeso = pessoas[0].peso
        let maisvelho = pessoas[0].idade
        let maisnovo = pessoas[0].idade

        let nomeMaiorPeso = pessoas[0].nome
        let nomeMenorPeso = pessoas[0].nome
        let nomeMaisNovo = pessoas[0].nome
        let nomeMaisVelho = pessoas[0].nome


        for (let pos in pessoas) {
            if (pessoas[pos].peso > maiorpeso) {
                maiorpeso = pessoas[pos].peso
                nomeMaiorPeso = pessoas[pos].nome
            }
            if (pessoas[pos].peso < menorpeso) {
                menorpeso = pessoas[pos].peso
                nomeMenorPeso = pessoas[pos].nome
            }
            if (pessoas[pos].idade > maisvelho) {
                maisvelho = pessoas[pos].idade
                nomeMaisVelho = pessoas[pos].nome
            }
            if (pessoas[pos].idade < maisnovo) {
                maisnovo = pessoas[pos].idade
                nomeMaisNovo = pessoas[pos].nome
            }
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos <strong>${tot}</strong> pessoas cadastradas.</p>`
        res.innerHTML += `<p>A pessoa de maior massa corporal pesa <strong>${maiorpeso}Kg</strong>, que é o/a <strong>${nomeMaiorPeso}</strong>, enquanto a de menor massa corporal pesa <strong>${menorpeso}Kg</strong>, que é o/a <strong>${nomeMenorPeso}</strong>.</p>`
        res.innerHTML += `<p>A pessoa mais velha tem <strong>${maisvelho} anos</strong>, que é o/a <strong>${nomeMaisVelho}</strong>, enquanto a mais nova tem <strong>${maisnovo} anos</strong>, que é o/a <strong>${nomeMaisNovo}</strong>.</p>`
    }
}