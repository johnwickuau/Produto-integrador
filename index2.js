const prompt = require("prompt-sync")
const fs = require('fs')
const path = require('path')

function loadDB() {
    try{
    const raw = fs.readFileSync("./db2.json", 'utf-8')
    return JSON.parse(raw);
} catch (err) {
    console.error('Erro ao ler db2.json', err.message)
    return{
        nome:'',
        membros: [],
        praca: [],
        materiais: []
 
       }
   }
}

function loadDB() {
    try{
    const raw = fs.readFileSync("./db2.json", 'utf-8')
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

let db = loadDB()

console.log(db);