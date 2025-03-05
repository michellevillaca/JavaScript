let num = document.getElementById('txtnum')
let tab = document.getElementById('seltab')

function adicionar() {
    let n = Number(num.value)
    if (n > 100 || n < 0 || num.value.length == 0) {
        window.alert('ERRO! Por favor, digite um número válido.')
    } else {
        let c = 1
    }
}