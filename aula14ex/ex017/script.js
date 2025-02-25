function contar() {
    let inicio = document.getElementById('txtstart')
    let fim = document.getElementById('txtend')
    let passo = document.getElementById('txtstep')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados.')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        let c = i

        if (i < f) {
            // Contagem crescente:
             while (c <= f) {
                res.innerHTML += `${c} \u{1F449} `
                c += p
            }
                /*
                for(let c=i; c<=f; c+=p) {
                    res.innerHTML += `${c} `
                } */
        } else {
            // Contagem regressiva:
            while (c >= f) {
                res.innerHTML += `${c} \u{1F449} `
                c -= p
            }
        }
        res.innerHTML += `\u{1F3C1}`

    }
}