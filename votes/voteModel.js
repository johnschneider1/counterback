const db = require('../database/dbConfig')

module.exports = {
    findAll,
    add,
    findById
}

async function add(vote) {
    try {
        let voteCount = await db('votes as v').select('v.click_yes').where("v.id", "=", 1)
        console.log(voteCount)
        await db('votes').where("id", "=", 1).update({ click_yes: voteCount + 1 })
        return voteCount + 1
    }
    catch (err) {
        return 0
    }
    // return db('votes')
    //     .insert({ click_yes: vote }, 'id')
    //     .then(([id]) => findById(id));

}

function findById(id) {
    return db('votes').where({ id }).first();
}


function findAll() {
    return db('votes')
}