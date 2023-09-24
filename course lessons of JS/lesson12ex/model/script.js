var res = window.document.querySelector('div#time-');
var time = new Date()
var hour = time.getHours()

res.innerHTML = `Now its ${hour} o'clock`
if (hour >= 6 && hour < 12) {
    window.document.body.style.backgroundColor = '#F26241'
    window.document.getElementById('img-').src = "images/sunrise-medium.png"
} else if (hour >= 12 && hour < 17) {
    window.document.body.style.backgroundColor = '#6394BF'
    window.document.getElementById('img-').src = 'images/day-medium.png'
} else if (hour >= 17 && hour < 19) {
    window.document.body.style.backgroundColor = '#61788C'
    window.document.getElementById('img-').src = 'images/sunset-medium.png'
} else {
    window.document.body.style.backgroundColor = '#0D0B40'
    window.document.getElementById('img-').src = 'images/night-medium.png'
}