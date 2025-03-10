let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

num.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})

function isNumber(n) {
    if(Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { //-1 indica que o valor não foi encontrado na lista
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumber(num.value) && !inLista(num.value, valores)) { //se for um número (válido) e se ele não estiver na lista, então eu posso prodsseguir.
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' //limpando o res ao adicionar novos valores.
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus() //função para não precisar clicar na barrinha de adicionar número toda vez. (Automatização)
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}