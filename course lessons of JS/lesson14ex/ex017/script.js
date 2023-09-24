function toGenerate() {
    var num = document.getElementById('numtxt').value
    var res = document.getElementById('seltab')

    if (num.length == '0') {
        window.alert(`[ERROR] Type some valid number.`)
        res.innerHTML = `Try again...`
    } else {
        res.innerHTML = ''
        for (let c = 0; c <= 10; c++) {
            let opt = document.createElement('option')
            opt.text = `${num} x ${c} = ${num*c}`
            opt.item = `tab${c}`
            res.appendChild(opt)
        }
    }
}