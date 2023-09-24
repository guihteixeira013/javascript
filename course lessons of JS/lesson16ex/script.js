let num = document.querySelector('input#txtnum')
let list = document.querySelector('select#tab')
let res = document.querySelector('div#res')
let values = []

// validating if its a number and its between 1 to 100.
function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// validating if the number its already in the list
function inList(n, list) {
    if (list.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {

    if (isNumber(num.value) && !inList(num.value, values)) {
        let opt = document.createElement('option')
        values.push(Number(num.value)) // array receiving number
        opt.text = `Value ${num.value} added.` // adding text in
        list.appendChild(opt) // showing 
        res.innerHTML = ''
    } else {
        if (inList(num.value, values)) {
            window.alert(`ERROR: This number is already in the list.`)
        } else {
            window.alert(`ERROR: Input a valid number.`)
        }
    }
    num.value = ''
    num.focus()
}

function finish() {
    if (values.length != 0) {
        let tot = values.length
        let high = values[0]
        let low = values[0]
        let sum = 0
        let ave = 0

        // testing
        for (let pos in values) {
            if (values[pos] > high) {high = values[pos]}
            if (values[pos] < low) {low = values[pos]}
            sum += values[pos] //to discovery the sum
        }
        ave = sum / tot //to discovery the average

        // showing results in div
        res.innerHTML = ''
        res.innerHTML += `<p>There are <strong>${tot}</strong> registered values.</p>`
        res.innerHTML += `<p>The highest number is <strong>${high}</strong>.</p>`
        res.innerHTML += `<p>The lowest number is <strong>${low}</strong>.</p>`
        res.innerHTML += `<p>The sum of all number is <strong>${sum}</strong>.</p>`
        res.innerHTML += `<p>The total average is <strong>${ave}</strong>.</p>`

    } else {
        window.alert(`ERROR: You need to type any number.`)
    }
    
}