const db = require('../database/dbConfig')

module.exports = {
    findAll,
    add,
    findById
}

async function add(vote) {
    try {
        let voteCounter = await db('votes as v').where("v.id", "=", 1).first()
        // console.log(voteCounter)
        let count = voteCounter.click_yes
        // console.log(count)
        await db('votes').where("id", "=", 1).update({ ...voteCounter, click_yes: count + 1 })
        // return voteCount + 1
        return count + 1
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