let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

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
    if(isNumber(num.value) && !inLista(num.value, valores)) {
        window.alert('Tudo OK')
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}