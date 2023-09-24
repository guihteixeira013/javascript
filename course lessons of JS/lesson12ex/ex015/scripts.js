function toCheck() {
    var msg = window.document.getElementById('msg')

    // Setting  age
    var age = document.getElementById('age').value;
    var date = new Date();
    var sys_year = date.getFullYear();
    age = sys_year - age 

    // Setting gender
    var gender
    var male = document.getElementById('male').checked
    var female = document.getElementById('female').checked

    if (male) {
        gender = 'man'
    } else {
        gender = 'woman'
    }

    msg.innerHTML = `Detected a ${gender} with ${age} years old`

    // Showing right pictures
    var img = document.createElement('img')
    img.setAttribute('id', 'image')

    if (age > 0 && age <= 10 ) {             //KID
        if (male){img.setAttribute('src', 'images/logo-kid-m.png')} 
        else {img.setAttribute('src', 'images/logo-kid-f.png')}
    } else if (age > 10 && age <= 30) {      //TEEN
        if (male) {img.setAttribute('src', 'images/logo-teen-m.png')}
        else {img.setAttribute('src', 'images/logo-teen-f.png')}
    } else if (age > 30 && age <= 50) {      //ADULT
        if (male) {img.setAttribute('src', 'images/logo-adult-m.png')}
        else {img.setAttribute('src', 'images/logo-adult-f.png')}
    } else {                                 //OLDER
        if (male) {img.setAttribute('src', 'images/logo-older-m.png')}
        else {img.setAttribute('src', 'images/logo-older-f.png')}
    }
    msg.appendChild(img)
}