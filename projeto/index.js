const prompt = require("prompt-sync")
const fs = require('fs')
const path = require('path')

// while (true) {
//     const escolha = prompt(`
//         0: sair
//         `)

// if (escolha == "0") {
//     break
//     }else {
//         continue
//     }
// }

function loadDB() {
    try{
    const raw = fs.readFileSync("./bd.json", 'utf-8')
    return JSON.parse(raw);
} catch (err) {
    console.error('Erro ao ler bd.json', err.message)
    return{
        nome_praça:'',
        pontos_bicicletas: [],
        usuarios: [],
        corridas: []
 
       }
   }
}

function saveDB(db) {
    try{
        fs.writeFileSync("./bd.json", JSON.stringify(db, null, 4), 'utf-8')
        return true
    } catch (err) {
        console.error('Erro ao salvar o bd.json', err.message)
        return false
    }
}
// function getNextId(name) {
//     const db = loadDB()

//     const values = db.name || []

//     let maxId = 0
//     for (let i = 0; i < usuarios.lenght; i++) {
//         const u = usuarios[i]
//         if (typeof u.id === 'number' && u.id > maxId) {
//             maxId = u.id
//         }
//     }
//     const newid = maxId !==0 ? maxId + 1 : 1;

// }

// saveDB()

let db = loadDB()
// console.log(db["usuarios"][0]["nome"] )
// console.log(db["corridas"][0]["inicio"])
// console.log(db["pontos_bicicleta"][1]["bicicletas"])
// console.log(db["pontos_bicicleta"][2]["bicicletas"][3]["tipo"])

db["usuarios"][1]["nome"] = "Isabela"
db["usuarios"].push({"id": 3,"nome": "Roberto"})
db["pontos_bicicleta"][1][bicicletas].push({"id": 15,"tipo":"eletrica","valor": 2})
db["pontos_bicicleta"][0]["bicicletas"][0]["tipo"] = "manual"
db["pontos_bicicleta"][0]["bicicletas"][1]["tipo"] = "manual"
db["pontos_bicicleta"][0]["bicicletas"][2]["tipo"] = "manual"
db["pontos_bicicleta"][0]["bicicletas"][3]["tipo"] = "manual"
db["corridas"].push({
    "id_usuario": 31,
    "id_bicicleta": 15,
    "id_ponto_partida": 3,
    "id_ponto_chegada":6,
    "inicio": "30/11/2025 05:00:00",
    "duração": "00:04:21"
})
saveDB(db)