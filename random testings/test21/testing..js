// DIAMOND class    RewardsElement_RewardsElementPriceAmountRewards___E1jE
// RUBY class       RewardsElement_RewardsElementPriceAmountRewards___E1jE

// CRIANDO NODELIST COM VALORES DAS RESCOMPENSAS

function collectingData() {
    //Seleciona todos os elementos com os valores 
    const rewardAmountElements = document.querySelectorAll(".RewardsElement_RewardsElementPriceAmountRewards___E1jE");

    //Cria uma array para armazenar os valores extraídos
    const rewardValues = []

    //Iterando sobre os elementos
    for (let c = 0; c < rewardAmountElements.length; c++) {
        //adicionando valores na array e convertendo em inteiro
    rewardValues.push(parseInt(rewardAmountElements[c].textContent))
    }
    console.log(rewardValues)
}




