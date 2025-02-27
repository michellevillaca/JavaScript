function gerarTabuada() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número.')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // comando para limpar antes de eu começar uma tabuada (caso eu queira começar uma nova)
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item) // adicionar tabuada que vai ser o item (que especifiquei acima)
            c++
        }
    }
}