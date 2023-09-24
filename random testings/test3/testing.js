var state = 'mG'
state = state.toUpperCase()

switch (state) {
    case 'AC':
        state = 'ACRE'
        break
    case 'AL':
        state = 'ALAGOAS'
        break
    case 'AP':
        state = 'AMAPÁ'
        break
    case 'AM':
        state = 'AMAZONAS'
        break
    case 'BA':
        state = 'BAHIA'
        break
    case 'CE':
        state = 'CEARÁ'
        break
    case 'DF':
        state = 'DISTRITO FEDERAL'
        break
    case 'ES':
        state = 'ESPÍRITO SANTO'
        break
    case 'GO':
        state = 'GOIÁS'
        break
    case 'MA':
        state = 'MARANHÃO'
        break
    case 'MT':
        state = 'MATO GROSSO'
        break
    case 'MS':
        state = 'MATO GROSSO DO SUL'
        break
    case 'MG':
        state = 'MINAS GERAIS'
        break
    case 'PA':
        state = 'PARÁ'
        break
    case 'PB':
        state = 'PARAÍBA'
        break
    case 'PR':
        state = 'PARANÁ'
        break
    case 'PE':
        state = 'PERNAMBUCO'
        break
    case 'PI':
        state = 'PIAUÍ'
        break
    case 'RJ':
        state = 'RIO DE JANEIRO'
        break
    case 'RN':
        state = 'RIO GRANDE DO NORTE'
        break
    case 'RS':
        state = 'RIO GRANDE DO SUL'
        break
    case 'RO':
        state = 'RONDÔNIA'
        break
    case 'RR':
        state = 'RORAIMA'
        break
    case 'SC':
        state = 'SANTA CATARINA'
        break
    case 'SP':
        state = 'SÃO PAULO'
        break
    case 'SE':
        state = 'SERGIPE'
        break
    case 'TO':
        state = 'TOCANTINS'
        break
    default:
        state = '[ERROR] Invalid state!'
        break
}

console.log(state)