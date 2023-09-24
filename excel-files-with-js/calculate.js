// unique line class = RewardsElement_RewardsElement__RNSJH
// name class = RewardsElement_RewardsElementMemberSubtitle__EChNq
// trophies input class = Input_InputWrapEntryField__RfHTl
// diamonds input class = Input_InputWrapEntryField__RfHTl
// rubies input class = Input_InputWrapEntryField__RfHTl
// members input class = Input_InputWrapEntryField__RfHTl

// commit to test

const XLSX = require('xlsx'); 

const workbook = XLSX.readFile('test.xlsx'); 
const worksheet = workbook.Sheets["Sheet1"];

// WORKSHEET TO JSON
const arrPlayers = XLSX.utils.sheet_to_json(worksheet);

// JSON TO JAVASCRIPT STRING
const jsPlayers = JSON.stringify(arrPlayers);

// Criando ENTRADAS apartir dos dados JSON
const people = arrPlayers

console.log(arrPlayers)

// // SELECIONANDO ELEMENTOS DOM DO "MYCAFE CALCULATOR"
// const inputFields = window.document.querySelectorAll(".Input_InputWrapEntryField__RfHTl");

// // INSERINDO VALORES DE TROPHIES NO INPUT CERTO
// inputFields.forEach( function(input, index){ 
//     if (index > 2) {
//         inputFields.value = arrPlayers[index - 3].trophies;
//     }
// })

// test