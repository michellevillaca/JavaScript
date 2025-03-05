let num = document.getElementById('txtnum')
let tab = document.getElementById('seltab')
let res = document.getElementById('res')
let valores = []

function adicionar() {
    let n = Number(num.value)
    if (n > 100 || n < 0 || num.value.length == 0) {
        window.alert('ERRO! Por favor, digite um número válido.')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        tab.appendChild(item)
    }
}

function finalizar() {
    res.innerHTML = `Saudações`
}