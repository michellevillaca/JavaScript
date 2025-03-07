let nome = document.getElementById('fnome')
let idade = document.getElementById('fidade')
let nascimento = document.getElementById('fnasc')
let sexo = document.getElementsByName('fsexo')
let peso = document.getElementById('fpeso')
let lista = document.getElementById('flista') // Adicionando referência à lista
let pessoas = []

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