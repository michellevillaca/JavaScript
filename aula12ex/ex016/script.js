function verificar() {
    var data = new Date() //data atual
    var ano = data.getFullYear() //ano atual (full year é porque pega os 4 dígitos)
    var fAno = document.getElementById('txtano') //caixa de texto do ano de nascimento
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value) // o valor do ano atual menos o valor digitado em fAno (o ano digitado).
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //aqui, é como se eu fosse ao código HTML e colocasse "à mão" um comando com <img id='foto'>
        if (fsex[0].checked) { //se o que estiver marcado for a bolinha da posição [0], isto é, "masculino"
            gênero = 'Homem'
            if (idade >= 0 && idade < 3) {
                //Bebê
                img.setAttribute('src', 'bebemenino.png')
            } else if (idade < 14) {
                //Criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //Idoso
            }
        } else if (fsex[1].checked) { //aqui eu poderia colocar apenas 'else', mas colocamos 'else if' só para garantir e explicitar.
            gênero = 'Mulher'
            if (idade >= 0 && idade < 3) {
                //Bebê
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade < 14) {
                //Criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                //Idoso
            }
        }
        res.style.textAlign = 'center' //centralizando texto em JS
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}