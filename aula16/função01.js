function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

let res = parimpar(4)
console.log(res)

/*
Posso fazer direto, sem criar a variável:

console.log(parimpar(4))
*/