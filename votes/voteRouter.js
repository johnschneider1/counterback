const router = require('express').Router()
const Votes = require('./voteModel')
const db = require('../database/dbConfig')

// router.get('/', (req, res) => {
//     Votes.findAll()
//         .then(response => {
//             res.status(200).json(response)
//         })
//         .catch(err => {
//             res.status(500).json({ message: "that didn't work" })
//         })
// })

router.get("/", (req, res) => {
    db("votes")
        .then(vote => {
            res.json(vote);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to retrieve Votes" });
        });
});

router.post('/', (req, res) => {
    Votes.add()
        .then(vote => {
            res.status(200).json(vote);
        })
        .catch(err => {
            res.status(500).json({ error: "vote not made" })
        })
})

module.exports = router