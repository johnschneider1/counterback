const db = require('../database/dbConfig')

module.exports = {
    findAll,
    add,
    findById
}

function add(vote) {
    return db('votes')
        .insert(vote, 'id')
        .then(([id]) => findById(id));

}

function findById(id) {
    return db('votes').where({ id }).first();
}


function findAll() {
    return db('votes')
}