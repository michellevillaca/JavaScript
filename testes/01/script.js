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

        for (let pos in pessoas) {
            if (pessoas[pos].peso > maiorpeso) {
                maiorpeso = pessoas[pos].peso
            }
            if (pessoas[pos].peso < menorpeso) {
                menorpeso = pessoas[pos].peso
            }
            if (pessoas[pos].idade > maisvelho) {
                maisvelho = pessoas[pos].idade
            }
            if (pessoas[pos].idade < maisnovo) {
                maisnovo = pessoas[pos].idade
            }
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} pessoas cadastradas.</p>`
        res.innerHTML += `<p>A pessoa de maior massa corporal pesa ${maiorpeso}Kg, e a de menor massa corporal pesa ${menorpeso}Kg.</p>`
        res.innerHTML += `<p>A pessoa mais velha tem ${maisvelho} anos, enquanto a mais nova tem ${maisnovo} anos.</p>`
    }
}