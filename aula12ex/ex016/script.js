function verificar() {
    var data = new Date() //data atual
    var ano = data.getFullYear() //ano atual (full year é porque pega os 4 dígitos)
    var fAno = document.getElementById('txtano') //caixa de texto do ano de nascimento
    var res = document.querySelector('div#res')
    if (fAno.value.lenght == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        window.alert('Tudo OK.')
    }
}