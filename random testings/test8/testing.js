function Click() {

    let tela = document.getElementById('body')  
    tela.innerHTML = '' //body reset

    //Creating Yellow button
    let butYel = document.createElement("button") //creating
    butYel.innerText = 'Yellow'             //add text
    butYel.setAttribute("class", "yellow")
    butYel.setAttribute("id", "yel-id")
    butYel.setAttribute("onclick", "yellowClick()")
    document.body.appendChild(butYel)       //showing

    //Creating Red button
    let butRed = document.createElement("button") //creating
    butRed.innerText = 'Red'                //add text
    butRed.setAttribute("class", "red")
    butRed.setAttribute("id", "red-id")
    butRed.setAttribute("onclick", "redClick()")
    document.body.appendChild(butRed)       //showing

    //Creating Green button
    let butGre = document.createElement("button") //creating
    butGre.innerText = 'Green'              //add text
    butGre.setAttribute("class", "green")
    butGre.setAttribute("id", "gre-id")
    butGre.setAttribute("onclick", "greenClick()")
    document.body.appendChild(butGre)       //showing

}

function yellowClick() {
    let yelClick = document.getElementById('yel-id')
    document.body.style.backgroundColor = 'yellow'
}

function redClick() {
    let redClick = document.getElementById('red-id')
    document.body.style.backgroundColor = 'red'
}

function greenClick() {
    let greenClick = document.getElementById('gre-id')
    document.body.style.backgroundColor = 'green'
}