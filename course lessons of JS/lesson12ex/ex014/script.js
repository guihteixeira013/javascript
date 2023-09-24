function toLoad() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('image');
    var time = new Date()
    var hour = time.getHours()

    msg.innerHTML = `Now its ${hour} o'clock.`

    if (hour >= 6 && hour < 12) {   // GOOD MORNING
        document.body.style.backgroundColor = '#F26241'
        img.src = 'images/sunrise.png'
    } else if (hour >= 12 && hour < 17) {   // GOOD AFTERNOON
        document.body.style.backgroundColor = '#6394BF'
        img.src = 'images/day.png'
    } else if (hour >= 17 && hour < 19) {   //  GOOD EVENING
        document.body.style.backgroundColor = '#61788C'
        img.src = 'images/sunset.png'
    } else {    // GOOD NIGHT
        document.body.style.backgroundColor = '#0D0B40'
        img.src = 'images/night.png'
    }
}


