function contar() {
    var i = document.getElementById('txtstart')
    var f = document.getElementById('txtend')
    var p = document.getElementById('txtstep')
    var res = document.getElementById('res')
    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    }
}