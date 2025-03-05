function soma(n1=0, n2=0) { //eu coloco um valor padrão (chamados parâmetros opcionais) para o caso de eu não passar nenum número na minha chamada; isto é, se eu não passar nenum número, o valor será 0.
    return n1 + n2
}

console.log(soma(2,5))
console.log(soma(2)) //aqui, eu passei apenas o valor para um número, deixando o outro com o valor pré-estabelecido (zero)