const prompt = require('prompt-sync')()
const fs = require('fs')
const { type } = require('os')
const path = require('path')


while (true) {
    const escolha = prompt('0 - Sair\nEscolha: ').trim()

    if (escolha === '0') {
        console.log('Saindo...')
        break
    } else {
        console.log(`Você escolheu: ${escolha}`)
        continue
    }
}

function loadDB() {
    try {
        const raw = fs.readFileSync(path.join(__dirname, 'bd.json'), 'utf-8')
        return JSON.parse(raw)
    } catch (err) {
        console.error('Erro ao carregar o banco de dados:', err.message)
        return {
            nome_praca: '',
            pontos_bicicleta: [],
            usuarios: [],
            corridas: []
        }
    }

}

function saveDB(db) {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 4), 'utf-8')
        return true
    } catch (err) {
        console.error('Erro ao salvar o bd.jason:', err.message)
        return false
    }
}

function getnextid(nome) {
    const db = loadDB()

    const values = db.name || []
    
    let maxId = 0
    for (let i = 0; i < values.length; i++) {
        const u = usuarios[i]
        if (typeof u.id === 'number' && u.id > maxId) {
            maxId = u.id
        }
    }
    const newId = maxId !== 0 ? maxId + 1 : 1
}