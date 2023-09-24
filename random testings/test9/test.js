
function parimp(n) {    //PARAMETRO
    if (n % 2 == 0) {       //AÇÃO
        return 'par'    //RETORNO
    } else {
        return 'ímpar'  //RETORNO
    }
}

let res = parimp(15) //CHAMADA
console.log(res)