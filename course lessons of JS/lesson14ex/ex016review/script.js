function toCount() {
    let start = document.getElementById('txts').value
    let end = document.getElementById('txte').value
    let step = document.getElementById('txtst').value
    let res = document.getElementById('res')

    if (start.length == 0 || end.length == 0 || step.length == 0) {
        res.innerHTML = `Impossible to count!`
        window.alert(`[ERROR] - Data is missing`)
    } else {
        res.innerHTML = `Counting... <br>`
        let i = Number(start)
        let e = Number(end)
        let s = Number(step)
        
        if (s <= 0) {
            window.alert(`Ìnvalid step! Considering [STEP: 1]`)
            s = 1
        }

        if (i < e) {    
            // ASCENDING
            for (let c = i; c <= e; c += s) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {    
            // DESCENDING
            for (let c = i; c >= e; c -= s) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F308}`        
    }
}