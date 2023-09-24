function check() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
  
    if (fyear.value.length == 0 || fyear.value > year) {
        window.alert('[ERROR!] << Please enter a VALID birth date. >>')
    } else {
        var fgen = document.getElementsByName('radgen')
        var age = year - Number(fyear.value)
        var gen
        var img = document.createElement('img')
        img.setAttribute('id', 'pic')

        if (fgen[0].checked) { // MAN
            gen = 'Man'
            if (age >= 0 && age < 10) { 
                // Kid
                img.setAttribute('src', 'images/logo-kid-m.png')
            } else if (age < 21) {
                // Teen
                img.setAttribute('src', 'images/logo-teen-m.png')
            } else if (age < 50) {
                // Adult
                img.setAttribute('src', 'images/logo-adult-m.png')
            } else {
                // Older
                img.setAttribute('src', 'images/logo-older-m.png')
            }
        } else if (fgen[1].checked){ // WOMAN
            gen = 'Woman'
            if (age >= 0 && age < 10) {
                // Kid
                img.setAttribute('src', 'images/logo-kid-f.png')
            } else if (age < 21) {
                // Teen
                img.setAttribute('src', 'images/logo-teen-f.png')
            } else if (age < 50) {
                // Adult
                img.setAttribute('src', 'images/logo-adult-f.png')
            } else {
                // Older
                img.setAttribute('src', 'images/logo-older-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `The result is ${gen} with ${age} years old.`
        res.appendChild(img)
    }
}