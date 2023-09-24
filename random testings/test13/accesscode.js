//REMOVING DOM ELEMENTS

    document.getElementById("barra-brasil").remove();
    document.getElementById("header").remove();
    document.getElementById("footer").remove();
    document.getElementById("voltar-topo").remove();

//ADDING INPUTS VALUES

    // //cpf
    // document.getElementById('txtCPF').value = '36337752856'

    // //birth date
    // document.getElementById('txtDtNascimento').value = '19/07/1995'

//ADDING LIST INFORMATION

    const data = []
    const div = document.createElement('div')
    const para = document.createElement('p')

    // Showing new div
    document.body.appendChild(div)

    // Filling the array
    for (var c = 0; c <= 2; c++) {
        // input the data
        data[c] = window.prompt("Data"+ c)

        // create a new "p" element
        const newNode = document.createElement("p")

        // create a text node
        const txtNode = document.createTextNode(data[c])

        // append text node to "p" element
        newNode.appendChild(txtNode)

        // insert before existing child
        div.insertBefore(newNode, div.children[c])

    }
//