function toCount() {
    let sta = document.getElementById('statxt').value
    let end = document.getElementById('endtxt').value
    let ste = document.getElementById('stetxt').value
    let res = document.getElementById('res')

    if (sta.length == 0 || end.length == 0 || ste.length == 0 || ste <= 0) {
        res.innerHTML = `[ERROR] Please fill in the form correctly.`
    } else {
        let i = Number(sta)
        let e = Number(end)
        let s = Number(ste)

        res.innerHTML = `Counting... <br>`

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
        res.innerHTML += `\u{1F3C1}`
    }
}