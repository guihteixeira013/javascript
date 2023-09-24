const objs = [
    {
        name:'guilherme',
        age:28,
        gender:'male',
        is_working:false,
        is_studying:true,
        marital_status:['married',{
            name:'pamela',
            age:23,
            gender:'female',
            is_working:false,
            is_studying:true,
        }],    
        hobbies:['gaming','book'],
    }
]
console.log("... OBJETO original ...")

console.log(objs)
console.log(typeof objs)

// converter OBJETO para JSON
console.log("... convertendo OBJETO para JSON ...")

const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// converter JSON para OBJETO
console.log("... convertendo JSON para OBJETO ...")

const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)



// mostrando no website os dados
document.addEventListener("DOMContentLoaded", function(){
    // precisei user addEventListener "DOMContentLoaded" porque o script está sendo chamado no HEAD e não no final do BODY
    const div = document.createElement("div");
    document.body.appendChild(div)
    div.innerHTML = "exemple"
})
